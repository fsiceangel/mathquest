// Introduction to Algebra chapter 21 — variations for section 21.2
// (Arithmetic Series). All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every key was worked twice by two genuinely different routes, and the
//    second route is written out in the solution. Sums were found by PAIRING
//    THE ENDS and re-found with $\frac{n}{2}(\text{first} + \text{last})$, or by
//    subtracting two triangular numbers, or by re-indexing the terms as
//    $a + dk$ and counting the values of $k$.
//  - Each variation keeps the answer SHAPE of the base problem in its slot: a
//    sum stays a sum, a count of terms stays a count of terms, and the slot
//    that asks for the LAST TERM given the sum still asks for the last term.
//  - Each distractor is one named mistake, named in CAPS at the end of the
//    solution, and that mistake really does produce that number. The traps
//    running through this section are: THE FENCEPOST, THE FORGOTTEN HALF, THE
//    FORGOTTEN DOUBLE, STOPPING ONE TERM SHORT, ADDING ONE TERM TOO MANY,
//    PAIRING WITH THE WRONG PARTNER, MISTAKING THE STEP FOR THE COUNT, TAKING
//    THE RAW GAP AS THE COUNT, DIVIDING BY THE FIRST TERM, LEAVING OUT THE
//    FIRST TERM, USING THE FIRST ROW AS THE AVERAGE, USING THE LAST ROW AS THE
//    AVERAGE, FORGETTING THE COUNT, STOPPING AT FIRST PLUS LAST, ADDING THE
//    FIRST TERM INSTEAD OF SUBTRACTING IT, and FORGETTING TO SUBTRACT THE
//    HEAD OF THE BLOCK.
//  - No two choices inside an item name the same value.

const s212 = [
  // s2 — p1: the triangular sum $1 + 2 + \cdots + n$, by formula and by pairing.
  [
    {
      q: 'Compute $1 + 2 + 3 + \\cdots + 28$.',
      choices: ['$378$', '$392$', '$812$', '$406$'],
      answer: 3,
      solution:
        'Use the famous formula $\\frac{n(n+1)}{2}$ with $n = 28$: the sum is $\\frac{28 \\times 29}{2} = 14 \\times 29 = 406$ ✓. Check a second, independent way by pairing the ends and never touching the formula: $1 + 28 = 29$, $2 + 27 = 29$, $3 + 26 = 29$, and so on. The $28$ numbers fall into $14$ pairs, each worth $29$, so the total is $14 \\times 29 = 406$ ✓. (The choice $812$ is THE FORGOTTEN HALF, $28 \\times 29$, which counts the whole list twice; the choice $378$ is STOPPING ONE TERM SHORT at $1 + \\cdots + 27$; the choice $392$ is PAIRING WITH THE WRONG PARTNER, using $28 \\times 28 \\div 2$ as though each pair summed to $28$ instead of $29$.)',
    },
    {
      q: 'Compute $1 + 2 + 3 + \\cdots + 22$.',
      choices: ['$253$', '$231$', '$242$', '$506$'],
      answer: 0,
      solution:
        'By the formula $\\frac{n(n+1)}{2}$ with $n = 22$: $\\frac{22 \\times 23}{2} = 11 \\times 23 = 253$ ✓. Check a second, independent way by pairing: $1 + 22 = 23$, $2 + 21 = 23$, $3 + 20 = 23$, all the way in to $11 + 12 = 23$. That last pair is the innermost one, so there are exactly $11$ pairs, and $11 \\times 23 = 253$ ✓ — the pairing even shows you where the list runs out. (The choice $506$ is THE FORGOTTEN HALF, $22 \\times 23$; the choice $231$ is STOPPING ONE TERM SHORT at $1 + \\cdots + 21$; the choice $242$ is PAIRING WITH THE WRONG PARTNER, $22 \\times 22 \\div 2$.)',
    },
    {
      q: 'Compute $1 + 2 + 3 + \\cdots + 30$.',
      choices: ['$435$', '$465$', '$450$', '$930$'],
      answer: 1,
      solution:
        'The formula $\\frac{n(n+1)}{2}$ with $n = 30$ gives $\\frac{30 \\times 31}{2} = 15 \\times 31 = 465$ ✓. Check a second, independent way by pairing the ends: $1 + 30 = 31$, $2 + 29 = 31$, down to $15 + 16 = 31$ — that is $15$ pairs worth $31$ each, so $15 \\times 31 = 465$ ✓. (The choice $930$ is THE FORGOTTEN HALF, $30 \\times 31$; the choice $435$ is STOPPING ONE TERM SHORT at $1 + \\cdots + 29$, exactly $30$ less; the choice $450$ is PAIRING WITH THE WRONG PARTNER, $30 \\times 30 \\div 2$.)',
    },
  ],
  // s2 — p2: summing the even numbers, either as twice a triangular sum or by average times count.
  [
    {
      q: 'Compute $2 + 4 + 6 + \\cdots + 28$.',
      choices: ['$196$', '$105$', '$210$', '$240$'],
      answer: 2,
      solution:
        'Every term is double one of the numbers $1$ through $14$, so the sum is $2 \\times (1 + 2 + \\cdots + 14) = 2 \\times 105 = 210$ ✓. Check a second, independent way with count times average: there are $\\frac{28 - 2}{2} + 1 = 14$ terms, and their average is $\\frac{2 + 28}{2} = 15$, so the sum is $14 \\times 15 = 210$ ✓. (The choice $105$ is THE FORGOTTEN DOUBLE — that is the sum of $1$ through $14$, only half of what was asked; the choice $196$ is PAIRING WITH THE WRONG PARTNER, $14 \\times 14$, using $14$ as the average instead of $15$; the choice $240$ is THE FENCEPOST, counting $15$ terms and computing $15 \\times 16$.)',
    },
    {
      q: 'Compute $2 + 4 + 6 + \\cdots + 36$.',
      choices: ['$342$', '$324$', '$171$', '$380$'],
      answer: 0,
      solution:
        'These are twice the numbers $1$ through $18$, so the sum is $2 \\times (1 + 2 + \\cdots + 18) = 2 \\times 171 = 342$ ✓. Check a second, independent way with count times average: the count is $\\frac{36 - 2}{2} + 1 = 18$ and the average is $\\frac{2 + 36}{2} = 19$, giving $18 \\times 19 = 342$ ✓. (The choice $171$ is THE FORGOTTEN DOUBLE, the sum of $1$ through $18$; the choice $324$ is PAIRING WITH THE WRONG PARTNER, $18 \\times 18$; the choice $380$ is THE FENCEPOST, using $19$ terms and computing $19 \\times 20$.)',
    },
    {
      q: 'Compute $2 + 4 + 6 + \\cdots + 48$.',
      choices: ['$576$', '$600$', '$300$', '$650$'],
      answer: 1,
      solution:
        'Factor a $2$ out of every term: the sum is $2 \\times (1 + 2 + \\cdots + 24) = 2 \\times 300 = 600$ ✓. Check a second, independent way with count times average: there are $\\frac{48 - 2}{2} + 1 = 24$ terms averaging $\\frac{2 + 48}{2} = 25$, so the total is $24 \\times 25 = 600$ ✓. (The choice $300$ is THE FORGOTTEN DOUBLE, the sum of $1$ through $24$; the choice $576$ is PAIRING WITH THE WRONG PARTNER, $24 \\times 24$; the choice $650$ is THE FENCEPOST, $25 \\times 26$ from miscounting $25$ terms.)',
    },
  ],
  // s2 — p3: counting the terms of a finite arithmetic list — gaps first, then the +1.
  [
    {
      q: 'How many terms are in the sequence $9, 21, 33, \\ldots, 117$?',
      choices: ['$9$', '$10$', '$108$', '$12$'],
      answer: 1,
      solution:
        'Count the gaps first. The common difference is $21 - 9 = 12$, and the list climbs $117 - 9 = 108$ in all, so there are $\\frac{108}{12} = 9$ gaps. A fence with $9$ gaps needs $10$ posts, so there are $9 + 1 = 10$ terms ✓. Check a second, independent way by re-indexing: every term has the form $9 + 12k$, and $117 = 9 + 12 \\times 9$, so $k$ runs $0, 1, 2, \\ldots, 9$ — that is $10$ values of $k$, hence $10$ terms ✓. (The choice $9$ is THE FENCEPOST, the number of gaps rather than the number of terms; the choice $108$ is TAKING THE RAW GAP AS THE COUNT, never dividing by $12$ at all; the choice $12$ is MISTAKING THE STEP FOR THE COUNT.)',
    },
    {
      q: 'How many terms are in the sequence $4, 10, 16, \\ldots, 106$?',
      choices: ['$17$', '$102$', '$19$', '$18$'],
      answer: 3,
      solution:
        'The common difference is $10 - 4 = 6$, and the list climbs $106 - 4 = 102$, so it takes $\\frac{102}{6} = 17$ steps to get from the first term to the last. Seventeen steps means $17 + 1 = 18$ terms ✓. Check a second, independent way by re-indexing: the terms are $4 + 6k$, and $106 = 4 + 6 \\times 17$, so $k = 0, 1, \\ldots, 17$, which is $18$ values ✓. (The choice $17$ is THE FENCEPOST, counting steps instead of terms; the choice $102$ is TAKING THE RAW GAP AS THE COUNT; the choice $19$ is ADDING ONE TERM TOO MANY, tacking the $+1$ on twice.)',
    },
    {
      q: 'How many terms are in the sequence $6, 15, 24, \\ldots, 168$?',
      choices: ['$18$', '$162$', '$19$', '$28$'],
      answer: 2,
      solution:
        'The common difference is $15 - 6 = 9$, and the climb is $168 - 6 = 162$, so there are $\\frac{162}{9} = 18$ gaps and therefore $18 + 1 = 19$ terms ✓. Check a second, independent way without ever subtracting: each term is $3$ less than a multiple of $9$, since $6 = 9 \\times 1 - 3$, $15 = 9 \\times 2 - 3$, and $168 = 9 \\times 19 - 3$. So the multipliers run $1$ through $19$, giving $19$ terms ✓. (The choice $18$ is THE FENCEPOST, the gap count; the choice $162$ is TAKING THE RAW GAP AS THE COUNT; the choice $28$ is DIVIDING BY THE FIRST TERM, $\\frac{162}{6} + 1$, instead of by the common difference.)',
    },
  ],
  // s2 — p4: the sum from n, first and last — the formula, and pairing as the check.
  [
    {
      q: 'An arithmetic series has $10$ terms; the first is $7$ and the last is $79$. What is the sum?',
      choices: ['$860$', '$395$', '$430$', '$43$'],
      answer: 2,
      solution:
        'Use the sum formula: $\\frac{n}{2}(\\text{first} + \\text{last}) = \\frac{10}{2}(7 + 79) = 5 \\times 86 = 430$ ✓. Check a second, independent way by pairing the ends, with no formula in sight: the first and last add to $86$, and so does the second with the second-to-last, and so on. Ten terms make $5$ such pairs, so the total is $5 \\times 86 = 430$ ✓. (The choice $860$ is THE FORGOTTEN HALF, $10 \\times 86$, which adds every term twice; the choice $395$ is LEAVING OUT THE FIRST TERM, $5 \\times 79$; the choice $43$ is FORGETTING THE COUNT — that is the average term $\\frac{7 + 79}{2}$, and you still have to multiply it by $10$.)',
    },
    {
      q: 'An arithmetic series has $18$ terms; the first is $5$ and the last is $107$. What is the sum?',
      choices: ['$1008$', '$2016$', '$963$', '$56$'],
      answer: 0,
      solution:
        'The sum formula gives $\\frac{18}{2}(5 + 107) = 9 \\times 112 = 1008$ ✓. Check a second, independent way by pairing: the outermost pair adds to $112$, and every pair inward adds to the same $112$, because each step up on one side is matched by an equal step down on the other. Eighteen terms make $9$ pairs, so the sum is $9 \\times 112 = 1008$ ✓. (The choice $2016$ is THE FORGOTTEN HALF, $18 \\times 112$; the choice $963$ is LEAVING OUT THE FIRST TERM, $9 \\times 107$; the choice $56$ is FORGETTING THE COUNT — that is only the average term $\\frac{5 + 107}{2}$.)',
    },
    {
      q: 'An arithmetic series has $14$ terms; the first is $8$ and the last is $112$. What is the sum?',
      choices: ['$1680$', '$784$', '$60$', '$840$'],
      answer: 3,
      solution:
        'By the sum formula, $\\frac{14}{2}(8 + 112) = 7 \\times 120 = 840$ ✓. Check a second, independent way by pairing the ends: $8 + 112 = 120$, and every other pair matches it, since moving one term inward from the left adds exactly what moving one term inward from the right takes away. Fourteen terms make $7$ pairs of $120$, so the sum is $840$ ✓. (The choice $1680$ is THE FORGOTTEN HALF, $14 \\times 120$; the choice $784$ is LEAVING OUT THE FIRST TERM, $7 \\times 112$; the choice $60$ is FORGETTING THE COUNT, since $60$ is just the average term $\\frac{8 + 112}{2}$.)',
    },
  ],
  // s2 — p5: consecutive odd numbers stack into a perfect square, so $n^2$ is the shortcut route.
  [
    {
      q: 'Compute $1 + 3 + 5 + \\cdots + 35$.',
      choices: ['$289$', '$324$', '$361$', '$648$'],
      answer: 1,
      solution:
        'These are consecutive odd numbers starting at $1$, and the first $n$ odd numbers always stack into the perfect square $n^2$. Count them: $\\frac{35 - 1}{2} + 1 = 17 + 1 = 18$ odd numbers, so the sum is $18^2 = 324$ ✓. Check a second, independent way with the general sum formula, which knows nothing about squares: $\\frac{18}{2}(1 + 35) = 9 \\times 36 = 324$ ✓ — the two routes agree, which is exactly why the square shortcut works. (The choice $289$ is $17^2$, THE FENCEPOST in the count; the choice $361$ is $19^2$, ADDING ONE TERM TOO MANY; the choice $648$ is THE FORGOTTEN HALF, $18 \\times 36$.)',
    },
    {
      q: 'Compute $1 + 3 + 5 + \\cdots + 43$.',
      choices: ['$441$', '$529$', '$484$', '$968$'],
      answer: 2,
      solution:
        'Consecutive odd numbers from $1$: count them with $\\frac{43 - 1}{2} + 1 = 21 + 1 = 22$, and the first $n$ odd numbers sum to $n^2$, so the answer is $22^2 = 484$ ✓. Check a second, independent way with the general formula: $\\frac{22}{2}(1 + 43) = 11 \\times 44 = 484$ ✓. (The choice $441$ is $21^2$, THE FENCEPOST — that is the sum of the odd numbers only up to $41$; the choice $529$ is $23^2$, ADDING ONE TERM TOO MANY, which would carry the list on to $45$; the choice $968$ is THE FORGOTTEN HALF, $22 \\times 44$.)',
    },
    {
      q: 'Compute $1 + 3 + 5 + \\cdots + 59$.',
      choices: ['$900$', '$841$', '$961$', '$1800$'],
      answer: 0,
      solution:
        'The count is $\\frac{59 - 1}{2} + 1 = 29 + 1 = 30$, and the first $30$ odd numbers pile up into $30^2 = 900$ ✓. Check a second, independent way with the general sum formula: $\\frac{30}{2}(1 + 59) = 15 \\times 60 = 900$ ✓. Odd numbers really do stack into perfect squares — $1$, then $1 + 3 = 4$, then $1 + 3 + 5 = 9$, and so on up to $900$. (The choice $841$ is $29^2$, THE FENCEPOST in the count; the choice $961$ is $31^2$, ADDING ONE TERM TOO MANY; the choice $1800$ is THE FORGOTTEN HALF, $30 \\times 60$.)',
    },
  ],
  // s2 — p6: a spelled-out series with a bigger step — count the terms, then sum.
  [
    {
      q: 'Compute $8 + 14 + 20 + \\cdots + 62$.',
      choices: ['$315$', '$700$', '$385$', '$350$'],
      answer: 3,
      solution:
        'Count the terms before summing anything: the step is $6$, so the count is $\\frac{62 - 8}{6} + 1 = 9 + 1 = 10$. Now the sum formula gives $\\frac{10}{2}(8 + 62) = 5 \\times 70 = 350$ ✓. Check a second, independent way by pairing the ends: $8 + 62 = 70$, $14 + 56 = 70$, $20 + 50 = 70$, $26 + 44 = 70$, $32 + 38 = 70$ — five pairs, every one of them worth $70$, and the list is used up. So the sum is $5 \\times 70 = 350$ ✓. (The choice $315$ is THE FENCEPOST, using $9$ terms; the choice $385$ is ADDING ONE TERM TOO MANY, using $11$; the choice $700$ is THE FORGOTTEN HALF, $10 \\times 70$.)',
    },
    {
      q: 'Compute $9 + 17 + 25 + \\cdots + 97$.',
      choices: ['$583$', '$636$', '$1272$', '$689$'],
      answer: 1,
      solution:
        'The step is $8$, so the count is $\\frac{97 - 9}{8} + 1 = 11 + 1 = 12$ terms. Then $\\frac{12}{2}(9 + 97) = 6 \\times 106 = 636$ ✓. Check a second, independent way by splitting every term into a common part and a step part: the terms are $9 + 8k$ for $k = 0, 1, \\ldots, 11$, so the sum is $12 \\times 9 + 8(0 + 1 + \\cdots + 11) = 108 + 8 \\times 66 = 108 + 528 = 636$ ✓ — no pairing and no sum formula, and it lands on the same number. (The choice $583$ is THE FENCEPOST, using $11$ terms; the choice $689$ is ADDING ONE TERM TOO MANY, using $13$; the choice $1272$ is THE FORGOTTEN HALF, $12 \\times 106$.)',
    },
    {
      q: 'Compute $12 + 21 + 30 + \\cdots + 84$.',
      choices: ['$384$', '$864$', '$432$', '$480$'],
      answer: 2,
      solution:
        'The step is $9$, so the count is $\\frac{84 - 12}{9} + 1 = 8 + 1 = 9$ terms. The sum formula gives $\\frac{9}{2}(12 + 84) = \\frac{9 \\times 96}{2} = 9 \\times 48 = 432$ ✓. Check a second, independent way by peeling off the common part: each term is $9k + 3$ for $k = 1, 2, \\ldots, 9$, so the sum is $9(1 + 2 + \\cdots + 9) + 9 \\times 3 = 9 \\times 45 + 27 = 405 + 27 = 432$ ✓. (The choice $384$ is THE FENCEPOST, using $8$ terms; the choice $480$ is ADDING ONE TERM TOO MANY, using $10$; the choice $864$ is THE FORGOTTEN HALF, $9 \\times 96$.)',
    },
  ],
  // s2 — p7: stacked rows falling by one — a block of consecutive integers in disguise.
  [
    {
      q: 'Farid is tiling a wall. The bottom course has $24$ tiles, each course above it has one tile fewer than the course below, and the top course has $11$ tiles. How many tiles are in the wall?',
      choices: ['$234$', '$245$', '$490$', '$336$'],
      answer: 1,
      solution:
        'The courses hold $24, 23, 22, \\ldots, 11$ tiles, so the count of courses is $24 - 11 + 1 = 14$ — the $+1$ is the fencepost rule again. Sum: $\\frac{14}{2}(24 + 11) = 7 \\times 35 = 245$ tiles ✓. Check a second, independent way by subtracting two triangular numbers: the whole block $1 + 2 + \\cdots + 24 = \\frac{24 \\times 25}{2} = 300$, and the part Farid does not build, $1 + 2 + \\cdots + 10 = 55$, comes off the bottom, leaving $300 - 55 = 245$ ✓. (The choice $234$ is THE FENCEPOST, counting only $13$ courses and quietly dropping the top one; the choice $490$ is THE FORGOTTEN HALF, $14 \\times 35$; the choice $336$ is USING THE BOTTOM ROW AS THE AVERAGE, $14 \\times 24$, as though every course were as wide as the widest.)',
    },
    {
      q: 'Gita’s choir stands on risers. The bottom riser holds $30$ singers, each riser above holds one singer fewer than the riser below, and the top riser holds $19$. How many singers are in the choir?',
      choices: ['$588$', '$275$', '$360$', '$294$'],
      answer: 3,
      solution:
        'The risers hold $30, 29, 28, \\ldots, 19$ singers, which is $30 - 19 + 1 = 12$ risers. Sum: $\\frac{12}{2}(30 + 19) = 6 \\times 49 = 294$ singers ✓. Check a second, independent way by subtracting two triangular numbers: $1 + 2 + \\cdots + 30 = \\frac{30 \\times 31}{2} = 465$, and $1 + 2 + \\cdots + 18 = \\frac{18 \\times 19}{2} = 171$, so the block from $19$ to $30$ is $465 - 171 = 294$ ✓. (The choice $275$ is THE FENCEPOST, counting $11$ risers and leaving the top one out; the choice $588$ is THE FORGOTTEN HALF, $12 \\times 49$; the choice $360$ is USING THE BOTTOM ROW AS THE AVERAGE, $12 \\times 30$.)',
    },
    {
      q: 'Imani stacks seedling trays in a pyramid. The bottom row has $33$ trays, each row above has one tray fewer than the row below, and the top row has $18$ trays. How many trays are in the pyramid?',
      choices: ['$408$', '$390$', '$816$', '$528$'],
      answer: 0,
      solution:
        'The rows hold $33, 32, 31, \\ldots, 18$ trays, and that is $33 - 18 + 1 = 16$ rows. Sum: $\\frac{16}{2}(33 + 18) = 8 \\times 51 = 408$ trays ✓. Check a second, independent way with two triangular numbers: $1 + 2 + \\cdots + 33 = \\frac{33 \\times 34}{2} = 561$ and $1 + 2 + \\cdots + 17 = \\frac{17 \\times 18}{2} = 153$, so the rows from $18$ up to $33$ hold $561 - 153 = 408$ ✓. (The choice $390$ is THE FENCEPOST, counting $15$ rows and dropping the top row of $18$; the choice $816$ is THE FORGOTTEN HALF, $16 \\times 51$; the choice $528$ is USING THE BOTTOM ROW AS THE AVERAGE, $16 \\times 33$.)',
    },
  ],
  // s2 — p8: a block of consecutive integers that does not start at 1.
  [
    {
      q: 'Compute $41 + 42 + 43 + \\cdots + 80$.',
      choices: ['$2379$', '$3240$', '$2420$', '$4840$'],
      answer: 2,
      solution:
        'Count first: $80 - 41 + 1 = 40$ terms. Their average is $\\frac{41 + 80}{2} = 60.5$, so the sum is $40 \\times 60.5 = 2420$ ✓. Check a second, independent way by subtracting two triangular numbers, which never mentions the count at all: $1 + 2 + \\cdots + 80 = \\frac{80 \\times 81}{2} = 3240$ and $1 + 2 + \\cdots + 40 = \\frac{40 \\times 41}{2} = 820$, so the block from $41$ to $80$ is $3240 - 820 = 2420$ ✓. (The choice $2379$ is THE FENCEPOST, counting $39$ terms and starting at $42$; the choice $3240$ is FORGETTING TO SUBTRACT THE HEAD OF THE BLOCK, that is, summing $1$ through $80$ and stopping there; the choice $4840$ is THE FORGOTTEN HALF, $40 \\times 121$.)',
    },
    {
      q: 'Compute $61 + 62 + 63 + \\cdots + 120$.',
      choices: ['$5430$', '$5369$', '$7260$', '$10860$'],
      answer: 0,
      solution:
        'There are $120 - 61 + 1 = 60$ terms, averaging $\\frac{61 + 120}{2} = 90.5$, so the sum is $60 \\times 90.5 = 5430$ ✓. Check a second, independent way with triangular numbers: $1 + 2 + \\cdots + 120 = \\frac{120 \\times 121}{2} = 7260$, and the head $1 + 2 + \\cdots + 60 = \\frac{60 \\times 61}{2} = 1830$ must come off, leaving $7260 - 1830 = 5430$ ✓. (The choice $5369$ is THE FENCEPOST, a block that starts at $62$ and so loses one whole term; the choice $7260$ is FORGETTING TO SUBTRACT THE HEAD OF THE BLOCK; the choice $10860$ is THE FORGOTTEN HALF, $60 \\times 181$.)',
    },
    {
      q: 'Compute $25 + 26 + 27 + \\cdots + 76$.',
      choices: ['$2601$', '$2926$', '$5252$', '$2626$'],
      answer: 3,
      solution:
        'The count is $76 - 25 + 1 = 52$, and the average term is $\\frac{25 + 76}{2} = 50.5$, so the sum is $52 \\times 50.5 = 2626$ ✓. Check a second, independent way by subtracting triangular numbers: $1 + 2 + \\cdots + 76 = \\frac{76 \\times 77}{2} = 2926$ and $1 + 2 + \\cdots + 24 = \\frac{24 \\times 25}{2} = 300$, so the block is $2926 - 300 = 2626$ ✓. (The choice $2601$ is THE FENCEPOST, a block starting at $26$ instead of $25$; the choice $2926$ is FORGETTING TO SUBTRACT THE HEAD OF THE BLOCK; the choice $5252$ is THE FORGOTTEN HALF, $52 \\times 101$.)',
    },
  ],
  // s2 — p9: run the sum formula backwards to recover the LAST term.
  [
    {
      q: 'An arithmetic series has $12$ terms, its first term is $5$, and its sum is $492$. What is the last term?',
      choices: ['$82$', '$41$', '$87$', '$77$'],
      answer: 3,
      solution:
        'Put what you know into the sum formula and solve for the missing end: $\\frac{12}{2}(5 + \\text{last}) = 492$, so $6(5 + \\text{last}) = 492$ and $5 + \\text{last} = 82$. Subtracting the first term gives $\\text{last} = 77$ ✓. Check a second, independent way through the average: $12$ terms summing to $492$ have average $\\frac{492}{12} = 41$, and in an arithmetic series the average sits exactly halfway between the first and last terms. So the last term is as far above $41$ as $5$ is below it: $41 + 36 = 77$ ✓. (The choice $82$ is STOPPING AT FIRST PLUS LAST, which is the pair sum, not the last term; the choice $87$ is ADDING THE FIRST TERM INSTEAD OF SUBTRACTING IT; the choice $41$ is the average term, and mistaking the average for the last term ignores that half the terms lie above it.)',
    },
    {
      q: 'An arithmetic series has $18$ terms, its first term is $9$, and its sum is $972$. What is the last term?',
      choices: ['$108$', '$99$', '$54$', '$117$'],
      answer: 1,
      solution:
        'From $\\frac{18}{2}(9 + \\text{last}) = 972$ we get $9(9 + \\text{last}) = 972$, so $9 + \\text{last} = 108$ and $\\text{last} = 99$ ✓. Check a second, independent way through the average: the average term is $\\frac{972}{18} = 54$, which must be the midpoint of the first and last terms. The first term is $45$ below $54$, so the last term is $45$ above it: $54 + 45 = 99$ ✓. (The choice $108$ is STOPPING AT FIRST PLUS LAST; the choice $117$ is ADDING THE FIRST TERM INSTEAD OF SUBTRACTING IT, $108 + 9$; the choice $54$ mistakes the average term for the last term.)',
    },
    {
      q: 'An arithmetic series has $24$ terms, its first term is $6$, and its sum is $1440$. What is the last term?',
      choices: ['$120$', '$60$', '$114$', '$126$'],
      answer: 2,
      solution:
        'The sum formula run backwards: $\\frac{24}{2}(6 + \\text{last}) = 1440$, so $12(6 + \\text{last}) = 1440$ and $6 + \\text{last} = 120$, giving $\\text{last} = 114$ ✓. Check a second, independent way through the average: $\\frac{1440}{24} = 60$ is the average term and therefore the midpoint of the two ends. The first term is $54$ below $60$, so the last term is $60 + 54 = 114$ ✓. (The choice $120$ is STOPPING AT FIRST PLUS LAST; the choice $126$ is ADDING THE FIRST TERM INSTEAD OF SUBTRACTING IT; the choice $60$ mistakes the average term for the last term.)',
    },
  ],
  // s2 — p10: rows growing by a fixed step — find the back row, then sum the rows.
  [
    {
      q: 'Hugo’s lecture hall has $10$ tiers of seats. The front tier has $12$ seats, and each tier behind it has $8$ more seats than the tier in front of it. How many seats are there in all?',
      choices: ['$960$', '$120$', '$480$', '$520$'],
      answer: 2,
      solution:
        'The tier sizes are $12, 20, 28, \\ldots$ with step $8$. The back tier is the $10$th, and reaching it takes $9$ steps, not $10$: $12 + 9 \\times 8 = 84$ seats. Total: $\\frac{10}{2}(12 + 84) = 5 \\times 96 = 480$ seats ✓. Check a second, independent way by splitting each tier into a base and a growth: every tier has the front tier’s $12$ seats plus some multiple of $8$, so the total is $10 \\times 12 + 8(0 + 1 + \\cdots + 9) = 120 + 8 \\times 45 = 120 + 360 = 480$ ✓. (The choice $520$ is THE FENCEPOST, taking $10$ steps to the back tier and calling it $92$ seats; the choice $960$ is THE FORGOTTEN HALF, $10 \\times 96$; the choice $120$ is USING THE FIRST ROW AS THE AVERAGE, as though all ten tiers held $12$ seats.)',
    },
    {
      q: 'Elena counts the seats in a stadium section with $16$ tiers. The bottom tier has $18$ seats, and each tier above it has $9$ more seats than the tier below it. How many seats are in the section?',
      choices: ['$1368$', '$2736$', '$288$', '$1440$'],
      answer: 0,
      solution:
        'The tiers hold $18, 27, 36, \\ldots$ seats, a step of $9$. The top tier is the $16$th, which is $15$ steps up: $18 + 15 \\times 9 = 153$ seats. Total: $\\frac{16}{2}(18 + 153) = 8 \\times 171 = 1368$ seats ✓. Check a second, independent way by separating the base from the growth: each tier holds $18$ seats plus a multiple of $9$, so the total is $16 \\times 18 + 9(0 + 1 + \\cdots + 15) = 288 + 9 \\times 120 = 288 + 1080 = 1368$ ✓. (The choice $1440$ is THE FENCEPOST, using $16$ steps to reach a top tier of $162$; the choice $2736$ is THE FORGOTTEN HALF, $16 \\times 171$; the choice $288$ is USING THE FIRST ROW AS THE AVERAGE, $16 \\times 18$.)',
    },
    {
      q: 'Jonas sets out $14$ rows of chairs in a community hall. The front row has $9$ chairs, and each row behind it has $12$ more chairs than the row in front of it. How many chairs does he set out?',
      choices: ['$2436$', '$126$', '$1302$', '$1218$'],
      answer: 3,
      solution:
        'The rows hold $9, 21, 33, \\ldots$ chairs, a step of $12$. The back row is the $14$th, reached in $13$ steps: $9 + 13 \\times 12 = 9 + 156 = 165$ chairs. Total: $\\frac{14}{2}(9 + 165) = 7 \\times 174 = 1218$ chairs ✓. Check a second, independent way by splitting off the growth: every row has the front row’s $9$ chairs plus a multiple of $12$, so the total is $14 \\times 9 + 12(0 + 1 + \\cdots + 13) = 126 + 12 \\times 91 = 126 + 1092 = 1218$ ✓. (The choice $1302$ is THE FENCEPOST, taking $14$ steps and calling the back row $177$ chairs; the choice $2436$ is THE FORGOTTEN HALF, $14 \\times 174$; the choice $126$ is USING THE FIRST ROW AS THE AVERAGE, $14 \\times 9$.)',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 21,
  sections: {
    '21.2': s212,
  },
}
