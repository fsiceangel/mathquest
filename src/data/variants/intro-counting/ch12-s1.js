// Counting & Probability chapter 12 — variations for section 12.2
// (Constructing Pascal’s Triangle). All problems and solutions are original
// MathQuest content.
//
// House rules for this file:
//  - Every stem that names a row, a position or an entry says outright that
//    rows and positions are numbered from $0$, and any place where the
//    palindrome symmetry could admit a second reading is pinned down by the
//    order the entries are listed in or by an explicit range.
//  - Every keyed answer is reached twice along routes that share no steps: the
//    additive rule against a row-sum count, a diagonal against a construction,
//    a direct addition against a complement.
//  - Each distractor is one named slip — a row counted from $1$, a position
//    counted from $1$, a single parent taken for two, a row sum read as a row
//    number — named in CAPS.

const s122 = [
  // slot 1 — naming a row from the entries it shows
  [
    {
      q: 'One row of Pascal’s triangle begins $1, 14, 91, \\ldots$. Which row is it? (Rows are numbered from $0$, so the single $1$ at the top is row $0$.)',
      choices: ['Row $13$', 'Row $91$', 'Row $14$', 'Row $15$'],
      answer: 2,
      solution:
        'Route one, read position $1$. The entry in position $1$ of row $n$ is always $n$, because it is the end $1$ of the row above plus the position-$1$ entry of the row above, so it climbs by $1$ every row. Here that entry is $14$, so this is row $14$; the check is that position $2$ should then be $13 + 78 = 91$, which is what the row shows ✓. Route two, walk the position-$2$ diagonal instead, ignoring the $14$ altogether. Position $2$ of a row is the position-$1$ entry above it plus the position-$2$ entry above it, so the diagonal grows by the row number above it each time: $1, 3, 6, 10, \\ldots$, and position $2$ of row $n$ is $1 + 2 + \\cdots + (n-1)$. Since $1 + 2 + \\cdots + 13 = \\frac{13 \\cdot 14}{2} = 91$, we need $n - 1 = 13$, so $n = 14$ ✓. (The choice Row $13$ USES $\\frac{n(n+1)}{2}$ FOR POSITION $2$ INSTEAD OF $\\frac{n(n-1)}{2}$, and $\\frac{13 \\cdot 14}{2} = 91$ makes that slip look right ✗; Row $91$ READS AN ENTRY AS THE ROW NUMBER ✗; Row $15$ COUNTS LINES FROM $1$ instead of rows from $0$ — the line beginning $1, 14$ is the fifteenth line written down ✗.)',
    },
    {
      q: 'One row of Pascal’s triangle ends $\\ldots, 190, 20, 1$. Which row is it? (Rows are numbered from $0$, so the single $1$ at the top is row $0$.)',
      choices: ['Row $20$', 'Row $21$', 'Row $19$', 'Row $190$'],
      answer: 0,
      solution:
        'Route one, use the second-to-last entry. Every row is a palindrome, so the second-to-last entry of row $n$ equals the position-$1$ entry, which is $n$ itself. That entry is $20$, so this is row $20$ ✓. Route two, use the third-to-last entry alone. The third-to-last entry of a row is the third-to-last entry above it plus the second-to-last entry above it, so this diagonal grows by $1, 2, 3, \\ldots$: it equals $1 + 2 + \\cdots + (n-1)$ in row $n$. Since $1 + 2 + \\cdots + 19 = \\frac{19 \\cdot 20}{2} = 190$, the row is $n = 20$ ✓. (The choice Row $21$ COUNTS LINES FROM $1$ ✗; Row $19$ STOPS AT THE LAST TERM OF THE SUM $1 + 2 + \\cdots + 19$ and reports $19$ rather than the row $20$ that sum belongs to ✗; Row $190$ READS AN ENTRY AS THE ROW NUMBER ✗.)',
    },
    {
      q: 'In one row of Pascal’s triangle the entry in position $2$ is $105$. Which row is it? (Rows and positions are numbered from $0$.)',
      choices: ['Row $105$', 'Row $16$', 'Row $14$', 'Row $15$'],
      answer: 3,
      solution:
        'Route one, the position-$2$ diagonal in closed form. Position $2$ of row $n$ is the position-$1$ entry above plus the position-$2$ entry above, so it gains the row number above it at every step: position $2$ of row $n$ is $1 + 2 + \\cdots + (n-1) = \\frac{(n-1)n}{2}$. Setting $\\frac{(n-1)n}{2} = 105$ gives $(n-1)n = 210 = 14 \\cdot 15$, so $n = 15$ ✓. Route two, build the stack with the additive rule and no formula at all. Keeping only positions $1$ and $2$: row $11$ gives $11, 55$; row $12$ gives $12$ and $55 + 11 = 66$; row $13$ gives $13$ and $66 + 12 = 78$; row $14$ gives $14$ and $78 + 13 = 91$; row $15$ gives $15$ and $91 + 14 = 105$ ✓. The diagonal strictly increases, so no other row can hold $105$ in position $2$. (The choice Row $105$ READS THE ENTRY AS THE ROW NUMBER ✗; Row $16$ COUNTS LINES FROM $1$ ✗; Row $14$ USES $\\frac{n(n+1)}{2}$ FOR POSITION $2$, and $\\frac{14 \\cdot 15}{2} = 105$ makes that slip land one row short ✗.)',
    },
  ],
  // slot 2 — one row from the row above it
  [
    {
      q: 'Row $9$ of Pascal’s triangle is $1, 9, 36, 84, 126, 126, 84, 36, 9, 1$. What is the entry in position $3$ of row $10$? (Rows and positions are numbered from $0$.)',
      choices: ['$84$', '$45$', '$120$', '$210$'],
      answer: 2,
      solution:
        'Route one, the additive rule. Position $3$ of row $10$ sits below positions $2$ and $3$ of row $9$, so it is $36 + 84 = 120$ ✓. Route two, build all of row $10$ and check it against the row sum. From row $9$: $1, \\ 1+9, \\ 9+36, \\ 36+84, \\ 84+126, \\ 126+126$ and then the mirror image, giving $1, 10, 45, 120, 210, 252, 210, 120, 45, 10, 1$. That row adds to $1024 = 2^{10}$, exactly the total row $10$ must have, so the construction is sound, and its position-$3$ entry is $120$ ✓. (The choice $84$ COPIES THE ENTRY STRAIGHT DOWN without adding its partner ✗; $45$ COUNTS POSITIONS FROM $1$, taking the third entry of the finished row ✗; $210$ ADDS THE PAIR ONE STEP TOO FAR RIGHT, $84 + 126$, which builds position $4$ ✗.)',
    },
    {
      q: 'One row of Pascal’s triangle contains the three side-by-side entries $45, 120, 210$, in that order from left to right. What is the sum of the two entries that sit directly below $120$ in the next row down?',
      choices: ['$495$', '$375$', '$330$', '$240$'],
      answer: 0,
      solution:
        'Route one, build the two entries. The entry below and to the left of $120$ is $45 + 120 = 165$, and the entry below and to the right is $120 + 210 = 330$; their sum is $165 + 330 = 495$ ✓. Route two, count each given entry by how often it is used. Every entry feeds exactly the two entries beneath it, so in the total of those two children $120$ is used twice, once as the right parent and once as the left parent, while $45$ and $210$ are each used once: the total is $45 + 2 \\cdot 120 + 210 = 45 + 240 + 210 = 495$ ✓. (The choice $375$ ADDS THE THREE GIVEN ENTRIES $45 + 120 + 210$ instead of their two children ✗; $330$ REPORTS ONLY THE RIGHT CHILD ✗; $240$ DOUBLES $120$, as if an entry’s two children were copies of it rather than sums with its neighbors ✗.)',
    },
    {
      q: 'In Pascal’s triangle the entry in position $3$ of row $10$ is $120$ and the entry in position $3$ of row $11$ is $165$. What is the entry in position $2$ of row $10$? (Rows and positions are numbered from $0$.)',
      choices: ['$285$', '$55$', '$10$', '$45$'],
      answer: 3,
      solution:
        'Route one, read the additive rule backwards. Position $3$ of row $11$ is the sum of positions $2$ and $3$ of row $10$, so $165 = (\\text{position } 2) + 120$, and position $2$ of row $10$ is $165 - 120 = 45$ ✓. Route two, use the position-$2$ diagonal, which never touches the number $165$. That diagonal gains the row number above it at every step, so position $2$ of row $10$ is $1 + 2 + \\cdots + 9 = 45$ ✓. (The choice $285$ ADDS THE TWO GIVEN ENTRIES instead of subtracting, $165 + 120$ ✗; $55$ SLIPS DOWN A ROW and names position $2$ of row $11$, the entry that with $165$ builds $220$ in row $12$ ✗; $10$ COUNTS POSITIONS FROM $1$, taking the second entry of row $10$ ✗.)',
    },
  ],
  // slot 3 — how many entries a row holds
  [
    {
      q: 'How many entries does row $23$ of Pascal’s triangle have? (The single $1$ at the top is row $0$.)',
      choices: ['$23$', '$24$', '$25$', '$8388608$'],
      answer: 1,
      solution:
        'Route one, count the growth. Row $0$ has $1$ entry, and each row down gains exactly one entry, since the inside entries of the new row match the gaps between the old entries and one $1$ is added at each end: $1$ gap for row $1$, $2$ gaps for row $2$, and so on. So row $n$ has $n + 1$ entries and row $23$ has $24$ ✓. Route two, count position labels. The positions of row $n$ start at $0$ and end at $n$, because the last entry of row $n$ is the one in position $n$. The labels $0, 1, 2, \\ldots, 23$ number $23 - 0 + 1 = 24$ ✓. (The choice $23$ FORGETS THAT POSITION $0$ IS AN ENTRY TOO ✗; $25$ COUNTS THE TOP AS ROW $1$ and then still adds one, landing a row too low ✗; $8388608 = 2^{23}$ IS THE ROW’S SUM, not its length ✗.)',
    },
    {
      q: 'Rows $0$ through $5$ of Pascal’s triangle are written out one under another. How many entries are there in all? (The single $1$ at the top is row $0$.)',
      choices: ['$15$', '$63$', '$20$', '$21$'],
      answer: 3,
      solution:
        'Route one, add the row lengths. Row $n$ has $n + 1$ entries, so the six rows hold $1 + 2 + 3 + 4 + 5 + 6 = 21$ entries ✓. Route two, double the block into a rectangle. Copy the triangular block of six rows, turn the copy upside down and slot it alongside: every one of the $6$ rows then holds $1 + 6 = 7$ entries, so the doubled block holds $6 \\cdot 7 = 42$ and the original holds half of that, $21$ ✓. (The choice $15$ STOPS AT ROW $4$, adding $1 + 2 + 3 + 4 + 5$ ✗; $63$ ADDS THE VALUES OF THE ENTRIES rather than counting them, since $1 + 2 + 4 + 8 + 16 + 32 = 63$ ✗; $20$ DROPS THE SINGLE $1$ AT THE TOP, adding $2 + 3 + 4 + 5 + 6$ ✗.)',
    },
    {
      q: 'One row of Pascal’s triangle has exactly $17$ entries. Which row is it? (The single $1$ at the top is row $0$.)',
      choices: ['Row $17$', 'Row $18$', 'Row $16$', 'Row $8$'],
      answer: 2,
      solution:
        'Route one, undo the length rule. Row $n$ has $n + 1$ entries, so $n + 1 = 17$ gives $n = 16$ ✓. Route two, count steps down from the top. The top row holds $1$ entry and every step down adds exactly one entry, so reaching a row of $17$ entries takes $17 - 1 = 16$ steps, and $16$ steps below row $0$ is row $16$ ✓. Either way the row begins $1, 16, 120, \\ldots$, whose position labels run $0$ through $16$. (The choice Row $17$ READS THE ENTRY COUNT AS THE ROW NUMBER ✗; Row $18$ ADDS ONE INSTEAD OF SUBTRACTING ONE ✗; Row $8$ REPORTS THE HALF-ROW, since $17$ entries leave $8$ on each side of the center entry ✗.)',
    },
  ],
  // slot 4 — row sums
  [
    {
      q: 'What is the sum of all the entries in row $14$ of Pascal’s triangle? (The single $1$ at the top is row $0$.)',
      choices: ['$16384$', '$8192$', '$32768$', '$196$'],
      answer: 0,
      solution:
        'Route one, double down the triangle. Every entry of a row is added into exactly two entries of the next row, so each row total is twice the one above it; starting from $1$ in row $0$, row $n$ totals $2^n$. Doubling from row $10$: $1024, 2048, 4096, 8192, 16384$, so row $14$ totals $2^{14} = 16384$ ✓. Route two, add row $14$ term by term. Row $14$ is $1, 14, 91, 364, 1001, 2002, 3003, 3432, 3003, 2002, 1001, 364, 91, 14, 1$; the seven entries before the middle add to $1 + 14 + 91 + 364 + 1001 + 2002 + 3003 = 6476$, and the row is a palindrome, so the total is $2 \\cdot 6476 + 3432 = 12952 + 3432 = 16384$ ✓. (The choice $8192$ STOPS ONE ROW SHORT at $2^{13}$ ✗; $32768$ GOES ONE ROW TOO FAR at $2^{15}$ ✗; $196$ SQUARES THE ROW NUMBER instead of raising $2$ to it ✗.)',
    },
    {
      q: 'What is the sum of every entry in row $8$ and row $9$ of Pascal’s triangle, the two rows combined? (The single $1$ at the top is row $0$.)',
      choices: ['$512$', '$1024$', '$768$', '$384$'],
      answer: 2,
      solution:
        'Route one, use the row totals. Row $n$ totals $2^n$, so the two rows give $2^8 + 2^9 = 256 + 512 = 768$ ✓. Route two, add row $8$ by hand and use the doubling once. Row $8$ is $1, 8, 28, 56, 70, 56, 28, 8, 1$, which adds to $256$. Every entry of row $8$ is used in exactly two entries of row $9$, so row $9$ totals $2 \\cdot 256 = 512$, and the two rows together total three times row $8$: $3 \\cdot 256 = 768$ ✓. (The choice $512$ REPORTS ROW $9$ ALONE ✗; $1024$ TREATS THE COMBINED TOTAL AS THE NEXT ROW’S SUM, $2^{10}$ ✗; $384$ SLIPS UP ONE ROW ON BOTH, adding $128 + 256$ ✗.)',
    },
    {
      q: 'The entries of one row of Pascal’s triangle add up to $65536$. How many entries does that row have? (The single $1$ at the top is row $0$.)',
      choices: ['$16$', '$17$', '$32768$', '$18$'],
      answer: 1,
      solution:
        'Route one, undo the doubling, then count. Row totals double from $1$, so row $n$ totals $2^n$; from $1024$ in row $10$ six doublings give $2048, 4096, 8192, 16384, 32768, 65536$, landing on row $16$. Row $n$ has $n + 1$ entries, so this row has $17$ ✓. Route two, add a candidate row and count its positions. Row $16$ is $1, 16, 120, 560, 1820, 4368, 8008, 11440, 12870, \\ldots$ and mirrors back; the eight entries before the middle add to $26333$, so the row totals $2 \\cdot 26333 + 12870 = 65536$, confirming the row, and its positions run $0$ through $16$, which is $17$ entries ✓. (The choice $16$ GIVES THE ROW NUMBER INSTEAD OF THE ENTRY COUNT ✗; $32768$ IS THE TOTAL OF THE ROW ABOVE, not a count of anything ✗; $18$ COUNTS LINES FROM $1$ AND THEN ADDS ONE MORE ✗.)',
    },
  ],
  // slot 5 — the largest entries of a row
  [
    {
      q: 'What is the middle entry of row $14$ of Pascal’s triangle? (The single $1$ at the top is row $0$; row $14$ has an odd number of entries, so it has one middle entry.)',
      choices: ['$3003$', '$1716$', '$3432$', '$6435$'],
      answer: 2,
      solution:
        'Route one, add the two parents. Row $13$ has an even number of entries and its two equal middle entries are $1716$ and $1716$, built from row $12$ as $792 + 924$ and $924 + 792$. The middle of row $14$ sits directly below both of them, so it is $1716 + 1716 = 3432$ ✓. Route two, use the row total and the palindrome, never touching row $13$. Row $14$ totals $2^{14} = 16384$, and the seven entries before its middle are $1, 14, 91, 364, 1001, 2002, 3003$, adding to $6476$. Those seven are mirrored on the other side, so the middle entry is $16384 - 2 \\cdot 6476 = 16384 - 12952 = 3432$ ✓. (The choice $3003$ IS THE NEIGHBOR OF THE MIDDLE, position $6$ rather than position $7$ ✗; $1716$ TAKES ONE PARENT FOR THE WHOLE SUM ✗; $6435$ SLIPS DOWN A ROW to the two equal middle entries of row $15$ ✗.)',
    },
    {
      q: 'Row $9$ of Pascal’s triangle has two equal largest entries. What is their sum? (The single $1$ at the top is row $0$.)',
      choices: ['$252$', '$126$', '$210$', '$168$'],
      answer: 0,
      solution:
        'Route one, build them from row $8$. Row $8$ is $1, 8, 28, 56, 70, 56, 28, 8, 1$, so the two middle entries of row $9$ are $56 + 70 = 126$ and $70 + 56 = 126$; their sum is $252$ ✓. Route two, subtract the rest of the row from the row total. Row $9$ totals $2^9 = 512$. Apart from the two largest entries, each half of the row holds $1, 9, 36, 84$, which add to $130$, so the other entries account for $2 \\cdot 130 = 260$, leaving $512 - 260 = 252$ for the two largest ✓. (The choice $126$ REPORTS ONE OF THE TWO ✗; $210$ ADDS THE WRONG NEIGHBORING PAIR, $84 + 126$, which is an entry of row $10$ ✗; $168$ TAKES THE PAIR ONE STEP OUT, $84 + 84$, as the largest ✗.)',
    },
    {
      q: 'One row of Pascal’s triangle has a single largest entry, and that entry is $924$. Which row is it? (The single $1$ at the top is row $0$.)',
      choices: ['Row $13$', 'Row $11$', 'Row $6$', 'Row $12$'],
      answer: 3,
      solution:
        'Route one, build the middles downward. A row with a single largest entry has an odd number of entries, so its row number is even. The middle entries of the even rows come from the row above: row $8$ has $35 + 35 = 70$, row $10$ has $126 + 126 = 252$, and row $12$ has $462 + 462 = 924$ ✓. Route two, test the candidate against its row total. If the row is row $12$ it must total $2^{12} = 4096$; the entries before the middle would be $1, 12, 66, 220, 495, 792$, adding to $1586$, and with the palindrome that gives $2 \\cdot 1586 + 924 = 3172 + 924 = 4096$ ✓, which is exactly right, so row $12$ it is. (The choice Row $13$ COUNTS LINES FROM $1$ ✗; Row $11$ READS $924$ AS THE TOTAL OF TWO EQUAL MIDDLE ENTRIES, $462 + 462$, which is what row $11$ has ✗; Row $6$ REPORTS THE POSITION OF THE ENTRY, since $924$ sits in position $6$ ✗.)',
    },
  ],
  // slot 6 — a row sum with entries removed
  [
    {
      q: 'What is the sum of the entries of row $12$ of Pascal’s triangle, leaving out the $1$ at each end of the row? (The single $1$ at the top is row $0$.)',
      choices: ['$2046$', '$4095$', '$8190$', '$4094$'],
      answer: 3,
      solution:
        'Route one, subtract from the row total. Row $12$ totals $2^{12} = 4096$, and removing the two end $1$s leaves $4096 - 2 = 4094$ ✓. Route two, add the surviving entries directly. Row $12$ is $1, 12, 66, 220, 495, 792, 924, 792, 495, 220, 66, 12, 1$; dropping the ends leaves $12, 66, 220, 495, 792$ on each side of the middle $924$, and $12 + 66 + 220 + 495 + 792 = 1585$, so the total is $2 \\cdot 1585 + 924 = 3170 + 924 = 4094$ ✓. (The choice $2046$ USES ROW $11$, giving $2^{11} - 2$ ✗; $4095$ REMOVES ONLY ONE OF THE TWO END $1$s ✗; $8190$ USES ROW $13$, giving $2^{13} - 2$ ✗.)',
    },
    {
      q: 'What is the sum of the entries of row $11$ of Pascal’s triangle, leaving out its two equal largest entries? (The single $1$ at the top is row $0$.)',
      choices: ['$1586$', '$1124$', '$2046$', '$772$'],
      answer: 1,
      solution:
        'Route one, subtract the two largest from the row total. Row $11$ totals $2^{11} = 2048$. Its two equal largest entries sit in positions $5$ and $6$ and each equals $210 + 252 = 462$, built from row $10$, so the rest of the row adds to $2048 - 2 \\cdot 462 = 2048 - 924 = 1124$ ✓. Route two, add what is left, entry by entry. Row $11$ is $1, 11, 55, 165, 330, 462, 462, 330, 165, 55, 11, 1$; removing the two $462$s leaves $1, 11, 55, 165, 330$ on each side, and $1 + 11 + 55 + 165 + 330 = 562$, so the total is $2 \\cdot 562 = 1124$ ✓. (The choice $1586$ REMOVES ONLY ONE OF THE TWO LARGEST, $2048 - 462$ ✗; $2046$ REMOVES THE TWO END $1$s instead of the two largest ✗; $772$ SLIPS UP A ROW to row $10$, whose total less its single largest entry is $1024 - 252$ ✗.)',
    },
    {
      q: 'One row of Pascal’s triangle has entries that add up to $8190$ once the $1$ at each end is left out. Which row is it? (The single $1$ at the top is row $0$.)',
      choices: ['Row $13$', 'Row $12$', 'Row $14$', 'Row $8192$'],
      answer: 0,
      solution:
        'Route one, put the ends back. Adding the two removed $1$s gives the full row total $8190 + 2 = 8192$. Row totals are the powers of $2$, and $8192 = 2^{13}$, so this is row $13$ ✓. Route two, grow the trimmed totals with no powers of $2$ at all. When a row doubles into the next, the trimmed part of the new row is twice the whole of the old row less the two new end $1$s, so trimmed totals obey $t_{n+1} = 2t_n + 2$ starting from $t_2 = 2$. That gives $2, 6, 14, 30, 62, 126, 254, 510, 1022, 2046, 4094, 8190$ for rows $2, 3, 4, \\ldots, 13$, and $8190$ lands on row $13$ ✓. (The choice Row $12$ HALVES AND STEPS UP A ROW, though row $12$ trims to $4094$, not the $4095$ that halving suggests ✗; Row $14$ COUNTS LINES FROM $1$ after correctly finding row $13$ ✗; Row $8192$ READS THE ROW TOTAL AS THE ROW NUMBER ✗.)',
    },
  ],
  // slot 7 — the second diagonal from a row number
  [
    {
      q: 'In one row of Pascal’s triangle, the entry in position $1$ is $17$. What is the entry in position $2$ of that same row? (Rows and positions are numbered from $0$.)',
      choices: ['$153$', '$136$', '$120$', '$34$'],
      answer: 1,
      solution:
        'Route one, name the row and add. Position $1$ of row $n$ is $n$, so this is row $17$. Position $2$ of row $17$ is the sum of positions $1$ and $2$ of row $16$, namely $16 + 120 = 136$ ✓. Route two, add up the diagonal. Position $2$ of row $n$ climbs by the row number above it at every step, starting from $1$ in row $2$, so it equals $1 + 2 + \\cdots + (n-1)$. For row $17$ that is $1 + 2 + \\cdots + 16 = \\frac{16 \\cdot 17}{2} = 136$ ✓. (The choice $153$ SLIPS DOWN A ROW, giving position $2$ of row $18$ ✗; $120$ SLIPS UP A ROW, giving position $2$ of row $16$ ✗; $34$ DOUBLES THE ROW NUMBER, as if each diagonal step added $17$ once ✗.)',
    },
    {
      q: 'In one row of Pascal’s triangle, the entry in position $1$ is $20$. What is the sum of the entries in positions $1$ and $2$ of that row? (Rows and positions are numbered from $0$.)',
      choices: ['$190$', '$21$', '$191$', '$210$'],
      answer: 3,
      solution:
        'Route one, find both entries. Position $1$ of row $n$ is $n$, so this is row $20$. Position $2$ of row $20$ is $1 + 2 + \\cdots + 19 = \\frac{19 \\cdot 20}{2} = 190$, so the two entries add to $20 + 190 = 210$ ✓. Route two, read the sum straight off the next row. Positions $1$ and $2$ of row $20$ are exactly the two parents of position $2$ of row $21$, so their sum is that single entry. Position $2$ of row $21$ is $1 + 2 + \\cdots + 20 = \\frac{20 \\cdot 21}{2} = 210$ ✓. (The choice $190$ REPORTS POSITION $2$ ALONE, forgetting to add position $1$ ✗; $21$ COUNTS POSITIONS FROM $1$, adding the first two entries $1 + 20$ ✗; $191$ ADDS THE END $1$ IN POSITION $0$ to position $2$ instead of adding position $1$ ✗.)',
    },
    {
      q: 'In one row of Pascal’s triangle, the entry in position $2$ is $190$. What is the entry in position $1$ of that same row? (Rows and positions are numbered from $0$.)',
      choices: ['$19$', '$95$', '$20$', '$21$'],
      answer: 2,
      solution:
        'Route one, undo the diagonal. Position $2$ of row $n$ equals $1 + 2 + \\cdots + (n-1) = \\frac{(n-1)n}{2}$. Setting that to $190$ gives $(n-1)n = 380 = 19 \\cdot 20$, so $n = 20$, and position $1$ of row $20$ is $20$ ✓. Route two, climb the diagonal with the additive rule only. Position $2$ entries run $\\ldots, 136$ in row $17$, then $136 + 17 = 153$ in row $18$, $153 + 18 = 171$ in row $19$, $171 + 19 = 190$ in row $20$; the diagonal strictly increases, so row $20$ is the only row that works, and its position-$1$ entry is $20$ ✓. (The choice $19$ REPORTS THE LAST TERM OF $1 + 2 + \\cdots + 19$ rather than the row it belongs to ✗; $95$ HALVES THE GIVEN ENTRY, as if position $2$ were twice position $1$ ✗; $21$ COUNTS LINES FROM $1$ ✗.)',
    },
  ],
  // slot 8 — a shared parent or a shared child
  [
    {
      q: 'Two entries sitting side by side in the same row of Pascal’s triangle are $286$ and $715$, in that order from left to right. Exactly one entry in the row above is diagonally above both of them. What is that entry?',
      choices: ['$220$', '$429$', '$1001$', '$495$'],
      answer: 0,
      solution:
        'Route one, locate the pair and read the row above. Building down, row $12$ is $1, 12, 66, 220, 495, 792, 924, \\ldots$ and row $13$ is $1, 13, 78, 286, 715, 1287, \\ldots$, so $286$ and $715$ are positions $3$ and $4$ of row $13$. The entry diagonally above both is position $3$ of row $12$, which is $220$; the check is $286 = 66 + 220$ and $715 = 220 + 495$ ✓. Route two, climb the position-$3$ diagonal and never build a row. Each position-$3$ entry is the position-$3$ entry above it plus the position-$2$ entry above it, and the position-$2$ diagonal runs $1, 3, 6, 10, 15, 21, 28, 36, 45, 55, 66$, so the position-$3$ diagonal runs $1, 4, 10, 20, 35, 56, 84, 120, 165, 220, 286$. It lands on $286$, so $286$ is a position-$3$ entry, and the entry diagonally above both it and the entry to its right is the position-$3$ entry one row up — the term just before $286$ on that same diagonal, $220$ ✓. (The choice $429$ SUBTRACTS THE TWO GIVEN ENTRIES ✗; $1001$ IS THE ENTRY BELOW BOTH, $286 + 715$, not the one above ✗; $495$ PICKS THE OTHER PARENT OF $715$, the one not shared with $286$ ✗.)',
    },
    {
      q: 'Two entries sitting side by side in the same row of Pascal’s triangle are $45$ and $120$, in that order from left to right. Exactly one entry in the row below is diagonally below both of them. What is that entry?',
      choices: ['$75$', '$330$', '$165$', '$210$'],
      answer: 2,
      solution:
        'Route one, use the additive rule directly. The entry diagonally below both is the sum of the two, $45 + 120 = 165$ ✓. Route two, locate the pair and walk the position-$3$ diagonal. Row $10$ is $1, 10, 45, 120, 210, 252, \\ldots$, so the two entries are positions $2$ and $3$, and the entry below both is position $3$ of row $11$. That diagonal climbs by the position-$2$ entry above it each step: $1, 4, 10, 20, 35, 56, 84, 120, 165$ for rows $3$ through $11$, ending at $165$ ✓. (The choice $75$ SUBTRACTS THE TWO ENTRIES ✗; $330$ TAKES THE NEXT CHILD OVER, $120 + 210$ ✗; $210$ READS THE ENTRY TO THE RIGHT of $120$ in its own row as though it were below ✗.)',
    },
    {
      q: 'An entry of Pascal’s triangle is $84$, and the two entries directly below it in the next row are $120$ (down-left) and $210$ (down-right). What is the sum of the two entries sitting on either side of $84$ in its own row?',
      choices: ['$330$', '$162$', '$246$', '$168$'],
      answer: 1,
      solution:
        'Route one, undo each child. The down-left child is $84$ plus the entry to the left of $84$, so that left entry is $120 - 84 = 36$; the down-right child is $84$ plus the entry to the right, so that right entry is $210 - 84 = 126$. Their sum is $36 + 126 = 162$ ✓. Route two, locate the entry and read its neighbors. Row $8$ is $1, 8, 28, 56, 70, 56, 28, 8, 1$, so row $9$ is $1, 9, 36, 84, 126, 126, 84, 36, 9, 1$; the entry $84$ whose children are $120$ down-left and $210$ down-right is the one in position $3$, and its neighbors are $36$ and $126$, adding to $162$ ✓. A consistency check ties the two together: the children add to $120 + 210 = 330$, which is $162 + 2 \\cdot 84$, as it must be. (The choice $330$ ADDS THE TWO CHILDREN instead of the two neighbors ✗; $246$ MIXES ONE NEIGHBOR WITH ONE CHILD, $36 + 210$ ✗; $168$ DOUBLES THE ENTRY ITSELF ✗.)',
    },
  ],
  // slot 9 — totals over several rows at once
  [
    {
      q: 'What is the sum of every entry in rows $0$ through $10$ of Pascal’s triangle, all eleven rows combined? (The single $1$ at the top is row $0$.)',
      choices: ['$1024$', '$1023$', '$2048$', '$2047$'],
      answer: 3,
      solution:
        'Route one, use the running-total pattern. Each row totals twice the row above, so each row total is one more than everything above it put together; adding a row therefore doubles the running total and adds one. Through row $n$ the grand total is $2^{n+1} - 1$, so through row $10$ it is $2^{11} - 1 = 2047$ ✓. Route two, add the eleven totals one at a time. They are $1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024$, and accumulating gives $1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047$ ✓. (The choice $1024$ REPORTS ROW $10$ ALONE ✗; $1023$ STOPS AT ROW $9$ ✗; $2048$ FORGETS THAT THE TOTAL FALLS ONE SHORT OF THE NEXT POWER OF $2$ ✗.)',
    },
    {
      q: 'What is the sum of every entry in rows $5$ through $8$ of Pascal’s triangle, those four rows combined? (The single $1$ at the top is row $0$.)',
      choices: ['$511$', '$480$', '$496$', '$224$'],
      answer: 1,
      solution:
        'Route one, add the four row totals. Row $n$ totals $2^n$, so the sum is $32 + 64 + 128 + 256 = 480$ ✓. Route two, subtract two running totals. Everything from row $0$ through row $n$ adds to $2^{n+1} - 1$, so rows $0$ through $8$ give $511$ and rows $0$ through $4$ give $31$; the rows in between, which are rows $5$ through $8$, give $511 - 31 = 480$ ✓. (The choice $511$ STARTS AT ROW $0$ instead of row $5$ ✗; $496$ STARTS ONE ROW EARLY, adding row $4$’s $16$ as well ✗; $224$ STOPS ONE ROW EARLY, dropping row $8$ ✗.)',
    },
    {
      q: 'For a positive integer $n$, every entry in rows $0$ through $n$ of Pascal’s triangle adds up to $32767$. What is $n$? (The single $1$ at the top is row $0$.)',
      choices: ['$14$', '$15$', '$32767$', '$16$'],
      answer: 0,
      solution:
        'Route one, undo the running total. Rows $0$ through $n$ add to $2^{n+1} - 1$, so $2^{n+1} = 32768$. Doubling from $1024 = 2^{10}$ gives $2048, 4096, 8192, 16384, 32768$, which is $2^{15}$, so $n + 1 = 15$ and $n = 14$ ✓. Route two, accumulate row by row. Through row $10$ the total is $2047$; adding row $11$ gives $4095$, then row $12$ gives $8191$, row $13$ gives $16383$, and row $14$ gives $32767$ ✓. The running total strictly increases, so no other $n$ works. (The choice $15$ REPORTS THE EXPONENT $n + 1$ instead of $n$ ✗; $32767$ READS THE TOTAL AS THE ROW NUMBER ✗; $16$ GOES ONE ROW TOO FAR, since rows $0$ through $16$ add to $131071$ ✗.)',
    },
  ],
  // slot 10 — parity of the entries
  [
    {
      q: 'How many entries of row $11$ of Pascal’s triangle are odd? (The single $1$ at the top is row $0$.)',
      choices: ['$4$', '$8$', '$12$', '$2$'],
      answer: 1,
      solution:
        'Route one, build a triangle of parities only, never computing an entry. Write O for odd and E for even and add with the rules odd $+$ odd $=$ even, odd $+$ even $=$ odd, even $+$ even $=$ even. Row $8$ is O E E E E E E E O; row $9$ is O O E E E E E E O O; row $10$ is O E O E E E E E O E O; row $11$ is O O O O E E E E O O O O, which shows $8$ odd entries ✓. Route two, read the row itself. Row $11$ is $1, 11, 55, 165, 330, 462, 462, 330, 165, 55, 11, 1$; the odd entries are $1, 11, 55, 165$ and their four mirror images, which is $8$ in all, leaving $330, 462, 462, 330$ even ✓. (The choice $4$ SLIPS DOWN A ROW to row $12$, which has $4$ odd entries ✗; $12$ COUNTS EVERY ENTRY OF THE ROW, treating an odd row number as making every entry odd ✗; $2$ COUNTS ONLY THE TWO END $1$s ✗.)',
    },
    {
      q: 'How many entries of row $9$ of Pascal’s triangle are even? (The single $1$ at the top is row $0$.)',
      choices: ['$4$', '$5$', '$10$', '$6$'],
      answer: 3,
      solution:
        'Route one, read the row. Row $9$ is $1, 9, 36, 84, 126, 126, 84, 36, 9, 1$, and the even entries are $36, 84, 126, 126, 84, 36$, which is $6$ ✓. Route two, track parities down from row $8$ without ever computing row $9$. Row $8$ has parities O E E E E E E E O. Row $9$ has $10$ entries: the two ends are odd; position $1$ is O $+$ E $=$ O and position $8$ is likewise odd; every other entry is E $+$ E $=$ E. So row $9$ has $4$ odd entries and $10 - 4 = 6$ even ones ✓. (The choice $4$ COUNTS THE ODD ENTRIES instead of the even ones ✗; $5$ SPLITS THE $10$ ENTRIES EVENLY, guessing rather than checking the parities ✗; $10$ COUNTS EVERY ENTRY OF THE ROW ✗.)',
    },
    {
      q: 'How many entries in rows $0$ through $7$ of Pascal’s triangle, all eight rows combined, are even? (The single $1$ at the top is row $0$.)',
      choices: ['$27$', '$36$', '$9$', '$8$'],
      answer: 2,
      solution:
        'Route one, count the even entries row by row. Rows $0$ and $1$ are all $1$s, so none. Row $2 = 1, 2, 1$ has one. Row $3 = 1, 3, 3, 1$ has none. Row $4 = 1, 4, 6, 4, 1$ has three. Row $5 = 1, 5, 10, 10, 5, 1$ has two. Row $6 = 1, 6, 15, 20, 15, 6, 1$ has three. Row $7 = 1, 7, 21, 35, 35, 21, 7, 1$ has none. The total is $1 + 3 + 2 + 3 = 9$ ✓. Route two, count the odd ones and subtract. The eight rows hold $1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 = 36$ entries. Tracking parities alone, the odd counts per row run $1, 2, 2, 4, 2, 4, 4, 8$, adding to $27$, so the even entries number $36 - 27 = 9$ ✓. (The choice $27$ COUNTS THE ODD ENTRIES instead ✗; $36$ COUNTS EVERY ENTRY IN THE EIGHT ROWS ✗; $8$ OVERLOOKS THE LONE EVEN ENTRY $2$ IN ROW $2$ ✗.)',
    },
  ],
]

export default { book: 'intro-counting', number: 12, sections: { '12.2': s122 } }
