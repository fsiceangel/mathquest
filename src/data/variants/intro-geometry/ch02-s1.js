// Introduction to Geometry chapter 2 — variations for section 2.1
// (What is an Angle?). All problems, figures, and solutions are original
// MathQuest content.
//
// House rules for this file:
//  - Every angle count was worked twice: once by the pair formula
//    n(n-1)/2 and once by the ladder (n-1) + (n-2) + ... + 1, and the two
//    routes must agree before a key is written down.
//  - Every solution carries a primary route AND a second route that is
//    genuinely independent of the first — a size check, a fraction of the
//    whole, a strip-the-difference argument, or a chain of subtractions —
//    never the same arithmetic said twice.
//  - Each slot keeps the shape of its base answer: a naming question stays a
//    naming question, a count stays a count, an addition never quietly turns
//    into a subtraction.
//  - Every figure was computed, not eyeballed: a ray at t degrees from the
//    vertex of length L ends at [L*cos t, L*sin t], rounded to 2 decimals, so
//    an arc labelled 47 really spans 47 degrees. Figure labels are plain text.
//  - Each distractor is one named mistake, named at the end of the solution in
//    CAPS. The traps running through this section are: READING THE FIRST
//    LETTER AS THE VERTEX, READING THE LAST LETTER AS THE VERTEX, PUTTING THE
//    VERTEX ON THE OUTSIDE, DISTRUSTING A COMPLETE NAME, SUBTRACTING INSTEAD
//    OF ADDING, ADDING INSTEAD OF SUBTRACTING, AVERAGING THE TWO PIECES,
//    HANDING BACK A GIVEN PIECE, HANDING BACK THE WHOLE, ASSUMING A STRAIGHT
//    ANGLE, HALVING THE WHOLE, SPLITTING THE WHOLE EVENLY, ANSWERING WITH x
//    INSTEAD OF THE ANGLE, ANSWERING THE OTHER PART, SUBTRACTING THE
//    DIFFERENCE FROM THE WHOLE, COUNTING THE RAYS, COUNTING EACH ANGLE TWICE,
//    SQUARING INSTEAD OF PAIRING, ADDING ONE TERM TOO MANY, SOLVING THE WRONG
//    COUNTING EQUATION, HALVING THE ANGLE COUNT, DOUBLING INSTEAD OF SOLVING,
//    ANSWERING THE FIRST GAP, ANSWERING THE LAST GAP, and FORGETTING THE
//    OVERLAP.
//  - No two choices inside an item name the same value.
//  - Slot 4 v3 carries no figure on purpose: it hands the student the angle
//    count and asks for the number of rays, so any honest drawing would let
//    the answer be read off by counting rays instead of computing it.

const s21 = [
  // s1 — the vertex is the middle letter of a three-letter angle name.
  [
    {
      q: 'In the angle named $\\angle MNP$, which point is the vertex?',
      choices: ['$M$', '$P$', '$N$', 'It cannot be determined from the name'],
      answer: 2,
      solution:
        'A three-letter angle name always puts the vertex in the middle, so in $\\angle MNP$ the vertex is $N$ ✓. Check a second, independent way by writing down the two sides the name promises. The sides of $\\angle MNP$ are $\\overrightarrow{NM}$ and $\\overrightarrow{NP}$, and both of those rays start at $N$ — a shared starting point is exactly what a vertex is ✓. If $M$ were the corner instead, the rays would be $\\overrightarrow{MN}$ and $\\overrightarrow{MP}$ and the angle would have been written $\\angle NMP$. (Choosing $M$ is READING THE FIRST LETTER AS THE VERTEX ✗; choosing $P$ is READING THE LAST LETTER AS THE VERTEX ✗; "cannot be determined" is DISTRUSTING A COMPLETE NAME — the middle-letter rule settles it with no figure needed ✗.)',
    },
    {
      q: 'Dana draws an angle whose vertex is $T$, with one side passing through $S$ and the other side passing through $W$. Which of these is a correct name for her angle?',
      choices: ['$\\angle STW$', '$\\angle TSW$', '$\\angle SWT$', '$\\angle WST$'],
      answer: 0,
      solution:
        'The vertex letter goes in the middle and the two side points take the outside seats, so Dana’s angle is $\\angle STW$ (or $\\angle WTS$, the same angle read the other way) ✓. Check a second, independent way by reading the middle letter of each candidate and asking whether that point is the corner: $\\angle STW$ claims $T$ ✓, $\\angle TSW$ claims $S$ ✗, $\\angle SWT$ claims $W$ ✗, and $\\angle WST$ claims $S$ ✗. Only one candidate names a corner that Dana drew, and $S$ and $W$ sit out on the sides where no rays meet ✓. (The choice $\\angle TSW$ is PUTTING THE VERTEX ON THE OUTSIDE, parking it in front ✗; $\\angle SWT$ is PUTTING THE VERTEX ON THE OUTSIDE at the back ✗; $\\angle WST$ is READING THE FIRST LETTER AS THE VERTEX in reverse — it lists both side points before the corner ✗.)',
    },
    {
      q: 'Four angle names are listed below. Which one names an angle whose vertex is $F$?',
      choices: ['$\\angle FGH$', '$\\angle DFG$', '$\\angle GDF$', '$\\angle DGF$'],
      answer: 1,
      solution:
        'Scan the middle letters: $\\angle FGH$ has $G$ in the middle, $\\angle DFG$ has $F$, $\\angle GDF$ has $D$, and $\\angle DGF$ has $G$. Only $\\angle DFG$ puts $F$ in the middle, so only it has vertex $F$ ✓. Check a second, independent way by writing out the sides of each name and seeing where the rays start: $\\angle FGH$ has sides $\\overrightarrow{GF}$ and $\\overrightarrow{GH}$, which start at $G$ ✗; $\\angle DFG$ has sides $\\overrightarrow{FD}$ and $\\overrightarrow{FG}$, which start at $F$ ✓; $\\angle GDF$ has sides starting at $D$ ✗; $\\angle DGF$ has sides starting at $G$ ✗. One survivor ✓. (Choosing $\\angle FGH$ is READING THE FIRST LETTER AS THE VERTEX ✗; choosing $\\angle GDF$ or $\\angle DGF$ is READING THE LAST LETTER AS THE VERTEX, since $F$ sits at the end of both ✗.)',
    },
  ],
  // s2 — read the vertex off a figure, then name the angle.
  [
    {
      q: 'The two rays in the figure start at the same point. Which name below is a correct name for the angle they form?',
      fig: {
        view: [-0.8, -0.8, 3.8, 3.2],
        elems: [
          { t: 'seg', a: [0, 0], b: [3, 0] },
          { t: 'seg', a: [0, 0], b: [1.41, 2.65] },
          { t: 'point', p: [0, 0], label: 'M', dx: -10, dy: 8 },
          { t: 'point', p: [3, 0], label: 'K', dx: 10, dy: 6 },
          { t: 'point', p: [1.41, 2.65], label: 'L', dx: 6, dy: -10 },
          { t: 'angle', at: [0, 0], from: [3, 0], to: [1.41, 2.65], r: 0.6 },
        ],
      },
      choices: ['$\\angle KLM$', '$\\angle LKM$', '$\\angle MKL$', '$\\angle KML$'],
      answer: 3,
      solution:
        'Both rays leave from $M$, so $M$ is the vertex and must take the middle seat: $\\angle KML$ (or $\\angle LMK$) ✓. Check a second, independent way by testing each name against the picture. A name is only legal if its middle letter marks a corner where two drawn rays meet. $\\angle KLM$ needs a corner at $L$ ✗, $\\angle LKM$ and $\\angle MKL$ both need a corner at $K$ ✗ — but $K$ and $L$ are ordinary points sitting out along the sides, with a single straight ray passing through each ✓. Only $\\angle KML$ survives. (Every wrong choice is PUTTING THE VERTEX ON THE OUTSIDE, promoting a side point to the corner while the real corner $M$ is pushed to an end.)',
    },
    {
      q: 'Look at the angle drawn below. Which of these names is correct for it?',
      fig: {
        view: [-0.8, -0.8, 3.8, 3.4],
        elems: [
          { t: 'seg', a: [0, 0], b: [3, 0] },
          { t: 'seg', a: [0, 0], b: [1.03, 2.82] },
          { t: 'point', p: [0, 0], label: 'T', dx: -10, dy: 8 },
          { t: 'point', p: [3, 0], label: 'R', dx: 10, dy: 6 },
          { t: 'point', p: [1.03, 2.82], label: 'S', dx: 8, dy: -8 },
          { t: 'angle', at: [0, 0], from: [3, 0], to: [1.03, 2.82], r: 0.6 },
        ],
      },
      choices: ['$\\angle TRS$', '$\\angle STR$', '$\\angle RST$', '$\\angle TSR$'],
      answer: 1,
      solution:
        'The corner of the figure is $T$, where the two rays begin, so $T$ belongs in the middle: $\\angle STR$ ✓ (and $\\angle RTS$ would do just as well). Check a second, independent way by counting how many rays leave each labelled point. Two rays leave $T$ ✓, while exactly one path runs through $R$ and one through $S$ — and a single ray can never make an angle by itself, so neither $R$ nor $S$ can be a vertex ✗. That rules out all three of the other names at once. (The choice $\\angle TRS$ is PUTTING THE VERTEX ON THE OUTSIDE, moving $T$ to the front and promoting $R$ ✗; $\\angle RST$ promotes $S$ ✗; $\\angle TSR$ also promotes $S$ while parking $T$ in front ✗.)',
    },
    {
      q: 'The rays in the figure meet at a single corner. Which name below describes the angle correctly?',
      fig: {
        view: [-0.8, -0.8, 3.8, 2.9],
        elems: [
          { t: 'seg', a: [0, 0], b: [3, 0] },
          { t: 'seg', a: [0, 0], b: [2.01, 2.23] },
          { t: 'point', p: [0, 0], label: 'G', dx: -10, dy: 8 },
          { t: 'point', p: [3, 0], label: 'H', dx: 10, dy: 6 },
          { t: 'point', p: [2.01, 2.23], label: 'E', dx: 8, dy: -8 },
          { t: 'angle', at: [0, 0], from: [3, 0], to: [2.01, 2.23], r: 0.6 },
        ],
      },
      choices: ['$\\angle GEH$', '$\\angle EHG$', '$\\angle EGH$', '$\\angle HEG$'],
      answer: 2,
      solution:
        'The rays share the point $G$, so $G$ is the vertex and takes the middle seat: $\\angle EGH$ ✓. Check a second, independent way by asking what each name would look like if it were true. $\\angle GEH$ says the drawing bends at $E$, so the figure would have to turn a corner there and head off toward $H$ — but the ray through $E$ runs dead straight out of $G$ and never bends ✗. The same objection kills $\\angle EHG$ and $\\angle HEG$, which bend the figure at $H$ and at $E$ ✗. Only a name that bends at $G$ matches the picture ✓. (All three wrong names are PUTTING THE VERTEX ON THE OUTSIDE; note too that $\\angle HEG$ and $\\angle GEH$ are the very same illegal angle written in opposite directions, which is a hint that neither can be right.)',
    },
  ],
  // s3 — the parts add to the whole.
  [
    {
      q: 'In the figure, $\\angle DOE = 39^\\circ$ and $\\angle EOF = 45^\\circ$. What is $\\angle DOF$?',
      fig: {
        view: [-0.8, -0.8, 3.8, 3.6],
        elems: [
          { t: 'seg', a: [0, 0], b: [3, 0] },
          { t: 'seg', a: [0, 0], b: [2.33, 1.89] },
          { t: 'seg', a: [0, 0], b: [0.31, 2.98] },
          { t: 'point', p: [0, 0], label: 'O', dx: -10, dy: 8 },
          { t: 'point', p: [3, 0], label: 'D', dx: 10, dy: 0 },
          { t: 'point', p: [2.33, 1.89], label: 'E', dx: 10, dy: -4 },
          { t: 'point', p: [0.31, 2.98], label: 'F', dx: 6, dy: -10 },
          { t: 'angle', at: [0, 0], from: [3, 0], to: [2.33, 1.89], r: 1.1, label: '39' },
          { t: 'angle', at: [0, 0], from: [2.33, 1.89], to: [0.31, 2.98], r: 0.75, label: '45' },
        ],
      },
      choices: ['$6^\\circ$', '$84^\\circ$', '$45^\\circ$', '$42^\\circ$'],
      answer: 1,
      solution:
        'Ray $\\overrightarrow{OE}$ lies in the interior of $\\angle DOF$, so the two pieces combine into the whole: $\\angle DOF = 39^\\circ + 45^\\circ = 84^\\circ$ ✓. Check a second, independent way without adding anything — just by size. The whole angle contains both pieces, so it has to be bigger than each of them, which means bigger than $45^\\circ$. Of the four choices only $84^\\circ$ clears that bar ✓, and $6^\\circ$, $42^\\circ$, and $45^\\circ$ are all too small to hold a $45^\\circ$ piece inside them ✗. (The choice $6^\\circ$ is SUBTRACTING INSTEAD OF ADDING ✗; $45^\\circ$ is HANDING BACK A GIVEN PIECE ✗; $42^\\circ$ is AVERAGING THE TWO PIECES, since $\\frac{39 + 45}{2} = 42$ ✗.)',
    },
    {
      q: 'In the figure, $\\angle POQ = 62^\\circ$ and $\\angle QOR = 55^\\circ$. What is $\\angle POR$?',
      fig: {
        view: [-2.2, -0.8, 3.8, 3.6],
        elems: [
          { t: 'seg', a: [0, 0], b: [3, 0] },
          { t: 'seg', a: [0, 0], b: [1.41, 2.65] },
          { t: 'seg', a: [0, 0], b: [-1.36, 2.67] },
          { t: 'point', p: [0, 0], label: 'O', dx: 0, dy: 14 },
          { t: 'point', p: [3, 0], label: 'P', dx: 10, dy: 0 },
          { t: 'point', p: [1.41, 2.65], label: 'Q', dx: 8, dy: -8 },
          { t: 'point', p: [-1.36, 2.67], label: 'R', dx: -8, dy: -8 },
          { t: 'angle', at: [0, 0], from: [3, 0], to: [1.41, 2.65], r: 1.1, label: '62' },
          { t: 'angle', at: [0, 0], from: [1.41, 2.65], to: [-1.36, 2.67], r: 0.75, label: '55' },
        ],
      },
      choices: ['$7^\\circ$', '$62^\\circ$', '$63^\\circ$', '$117^\\circ$'],
      answer: 3,
      solution:
        'Ray $\\overrightarrow{OQ}$ sits inside $\\angle POR$, so the whole is the sum of its parts: $\\angle POR = 62^\\circ + 55^\\circ = 117^\\circ$ ✓. Check a second, independent way by sweeping a pencil around the figure. Start it along $\\overrightarrow{OP}$ and turn it $62^\\circ$ to reach $\\overrightarrow{OQ}$; keep turning the same direction another $55^\\circ$ and it lands on $\\overrightarrow{OR}$. The pencil has swung past the upright quarter turn of $90^\\circ$ but nowhere near a half turn of $180^\\circ$ ✓, so the answer must be obtuse — and $117^\\circ$ is the only obtuse choice, while $7^\\circ$, $62^\\circ$, and $63^\\circ$ are all acute ✗. (The choice $7^\\circ$ is SUBTRACTING INSTEAD OF ADDING ✗; $62^\\circ$ is HANDING BACK A GIVEN PIECE ✗; $63^\\circ$ is ASSUMING A STRAIGHT ANGLE, computing $180^\\circ - 117^\\circ$ as though $\\overrightarrow{OP}$ and $\\overrightarrow{OR}$ were opposite rays ✗.)',
    },
    {
      q: 'In the figure, $\\angle JOK = 25^\\circ$ and $\\angle KOL = 21^\\circ$. What is $\\angle JOL$?',
      fig: {
        view: [-0.8, -0.8, 3.8, 2.9],
        elems: [
          { t: 'seg', a: [0, 0], b: [3, 0] },
          { t: 'seg', a: [0, 0], b: [2.72, 1.27] },
          { t: 'seg', a: [0, 0], b: [2.08, 2.16] },
          { t: 'point', p: [0, 0], label: 'O', dx: -10, dy: 8 },
          { t: 'point', p: [3, 0], label: 'J', dx: 10, dy: 0 },
          { t: 'point', p: [2.72, 1.27], label: 'K', dx: 10, dy: -2 },
          { t: 'point', p: [2.08, 2.16], label: 'L', dx: 8, dy: -8 },
          { t: 'angle', at: [0, 0], from: [3, 0], to: [2.72, 1.27], r: 1.35, label: '25' },
          { t: 'angle', at: [0, 0], from: [2.72, 1.27], to: [2.08, 2.16], r: 0.7, label: '21' },
        ],
      },
      choices: ['$46^\\circ$', '$4^\\circ$', '$23^\\circ$', '$25^\\circ$'],
      answer: 0,
      solution:
        'Ray $\\overrightarrow{OK}$ lies in the interior of $\\angle JOL$, so the parts add to the whole: $\\angle JOL = 25^\\circ + 21^\\circ = 46^\\circ$ ✓. Check a second, independent way by bracketing the answer instead of computing it. The two pieces are each a little over $20^\\circ$, so the whole must be a little over $40^\\circ$ and certainly under $50^\\circ$ — that bracket admits $46^\\circ$ ✓ and throws out $4^\\circ$, $23^\\circ$, and $25^\\circ$, every one of which is smaller than a piece it is supposed to contain ✗. (The choice $4^\\circ$ is SUBTRACTING INSTEAD OF ADDING ✗; $23^\\circ$ is AVERAGING THE TWO PIECES ✗; $25^\\circ$ is HANDING BACK A GIVEN PIECE ✗.)',
    },
  ],
  // s4 — count the angles a fan of rays makes, and once in reverse.
  [
    {
      q: 'Five rays $\\overrightarrow{OA}$, $\\overrightarrow{OB}$, $\\overrightarrow{OC}$, $\\overrightarrow{OD}$, and $\\overrightarrow{OE}$ share endpoint $O$, as shown. How many different angles do they form?',
      fig: {
        view: [-2.6, -0.8, 3.8, 3.6],
        elems: [
          { t: 'seg', a: [0, 0], b: [3, 0] },
          { t: 'seg', a: [0, 0], b: [2.7, 1.32] },
          { t: 'seg', a: [0, 0], b: [1.72, 2.46] },
          { t: 'seg', a: [0, 0], b: [-0.1, 3] },
          { t: 'seg', a: [0, 0], b: [-1.97, 2.26] },
          { t: 'point', p: [0, 0], label: 'O', dx: 0, dy: 14 },
          { t: 'point', p: [3, 0], label: 'A', dx: 10, dy: 0 },
          { t: 'point', p: [2.7, 1.32], label: 'B', dx: 10, dy: -2 },
          { t: 'point', p: [1.72, 2.46], label: 'C', dx: 10, dy: -6 },
          { t: 'point', p: [-0.1, 3], label: 'D', dx: 2, dy: -10 },
          { t: 'point', p: [-1.97, 2.26], label: 'E', dx: -8, dy: -8 },
        ],
      },
      choices: ['$10$', '$5$', '$20$', '$25$'],
      answer: 0,
      solution:
        'One angle needs exactly two rays, so counting angles means counting pairs of rays. Each of the $5$ rays could pair with the other $4$, giving $5 \\times 4 = 20$ ordered picks, and every angle turns up twice in that tally (once from each of its two rays), so there are $\\frac{5 \\times 4}{2} = 10$ angles ✓. Check a second, independent way by sweeping counterclockwise and only counting angles that open toward rays further along, so nothing can be double counted: $\\overrightarrow{OA}$ starts $4$ angles, $\\overrightarrow{OB}$ starts $3$ new ones, $\\overrightarrow{OC}$ starts $2$, $\\overrightarrow{OD}$ starts $1$, and $\\overrightarrow{OE}$ starts none. That ladder gives $4 + 3 + 2 + 1 = 10$ ✓ — same total, completely different bookkeeping. (The choice $5$ is COUNTING THE RAYS ✗; $20$ is COUNTING EACH ANGLE TWICE ✗; $25$ is SQUARING INSTEAD OF PAIRING, from $5 \\times 5$ ✗.)',
    },
    {
      q: 'Seven rays share endpoint $O$, as shown, and no two of them are opposite rays. How many different angles do the seven rays form?',
      fig: {
        view: [-3.3, -0.8, 3.8, 3.6],
        elems: [
          { t: 'seg', a: [0, 0], b: [3, 0] },
          { t: 'seg', a: [0, 0], b: [2.82, 1.03] },
          { t: 'seg', a: [0, 0], b: [2.23, 2.01] },
          { t: 'seg', a: [0, 0], b: [1.22, 2.74] },
          { t: 'seg', a: [0, 0], b: [-0.1, 3] },
          { t: 'seg', a: [0, 0], b: [-1.5, 2.6] },
          { t: 'seg', a: [0, 0], b: [-2.65, 1.41] },
          { t: 'point', p: [3, 0] },
          { t: 'point', p: [2.82, 1.03] },
          { t: 'point', p: [2.23, 2.01] },
          { t: 'point', p: [1.22, 2.74] },
          { t: 'point', p: [-0.1, 3] },
          { t: 'point', p: [-1.5, 2.6] },
          { t: 'point', p: [-2.65, 1.41] },
          { t: 'point', p: [0, 0], label: 'O', dx: 0, dy: 14 },
        ],
      },
      choices: ['$7$', '$42$', '$21$', '$28$'],
      answer: 2,
      solution:
        'Every angle is a pair of rays, so count pairs: $7 \\times 6 = 42$ ordered picks, halved because picking ray $p$ then ray $q$ gives the same angle as $q$ then $p$, leaves $\\frac{7 \\times 6}{2} = 21$ ✓. Check a second, independent way by adding the rays into the picture one at a time and asking how many NEW angles each arrival makes with the rays already there: the first ray makes none, the second makes $1$, the third makes $2$, then $3$, $4$, $5$, and the seventh ray makes $6$. Total $1 + 2 + 3 + 4 + 5 + 6 = 21$ ✓. (The choice $7$ is COUNTING THE RAYS ✗; $42$ is COUNTING EACH ANGLE TWICE ✗; $28$ is ADDING ONE TERM TOO MANY — running the ladder up to $7$ instead of stopping at $6$ ✗.)',
    },
    {
      q: 'Several rays share endpoint $O$, all of them inside one half-plane, and no two are opposite rays. Together they form $28$ different angles. How many rays are there?',
      choices: ['$7$', '$14$', '$56$', '$8$'],
      answer: 3,
      solution:
        'With $n$ rays the number of angles is the number of pairs, $\\frac{n(n-1)}{2}$, so we need $\\frac{n(n-1)}{2} = 28$, which means $n(n-1) = 56$. Two whole numbers one apart multiplying to $56$ can only be $8$ and $7$, so $n = 8$ ✓. Check a second, independent way by climbing the ladder from the bottom until it reaches $28$, never using the formula at all: $2$ rays make $1$ angle, a third ray adds $2$ more for $3$, a fourth adds $3$ for $6$, then $+4 \\to 10$, $+5 \\to 15$, $+6 \\to 21$, and a seventh ray brings the total to $21$ — not yet enough. The eighth ray adds $7$ more, landing exactly on $21 + 7 = 28$ ✓. The ladder stops at $8$ rays, matching the formula. (The choice $7$ is SOLVING THE WRONG COUNTING EQUATION, using $\\frac{n(n+1)}{2} = 28$ ✗; $14$ is HALVING THE ANGLE COUNT ✗; $56$ is DOUBLING INSTEAD OF SOLVING, stopping at $n(n-1) = 56$ and reporting that ✗.)',
    },
  ],
  // s5 — a part equals the whole minus the other part.
  [
    {
      q: 'In the figure, $\\angle UOW = 85^\\circ$ and $\\angle UOV = 33^\\circ$. What is $\\angle VOW$?',
      fig: {
        view: [-0.8, -0.8, 3.8, 3.6],
        elems: [
          { t: 'seg', a: [0, 0], b: [3, 0] },
          { t: 'seg', a: [0, 0], b: [2.52, 1.63] },
          { t: 'seg', a: [0, 0], b: [0.26, 2.99] },
          { t: 'point', p: [0, 0], label: 'O', dx: -10, dy: 8 },
          { t: 'point', p: [3, 0], label: 'U', dx: 10, dy: 0 },
          { t: 'point', p: [2.52, 1.63], label: 'V', dx: 10, dy: -4 },
          { t: 'point', p: [0.26, 2.99], label: 'W', dx: 4, dy: -10 },
          { t: 'angle', at: [0, 0], from: [3, 0], to: [2.52, 1.63], r: 0.75, label: '33' },
          { t: 'angle', at: [0, 0], from: [3, 0], to: [0.26, 2.99], r: 1.6, label: '85' },
        ],
      },
      choices: ['$33^\\circ$', '$118^\\circ$', '$52^\\circ$', '$85^\\circ$'],
      answer: 2,
      solution:
        'Ray $\\overrightarrow{OV}$ splits $\\angle UOW$ into two parts, so $\\angle UOV + \\angle VOW = \\angle UOW$ and therefore $\\angle VOW = 85^\\circ - 33^\\circ = 52^\\circ$ ✓. Check a second, independent way by putting the pieces back together: $33^\\circ + 52^\\circ = 85^\\circ$, exactly the whole angle in the figure ✓. Try the same rebuild on the other choices and each one fails — $33^\\circ + 118^\\circ = 151^\\circ$ ✗, $33^\\circ + 33^\\circ = 66^\\circ$ ✗, $33^\\circ + 85^\\circ = 118^\\circ$ ✗ — so only $52^\\circ$ can be the missing piece. (The choice $118^\\circ$ is ADDING INSTEAD OF SUBTRACTING, and it is larger than the whole angle it is supposed to sit inside ✗; $33^\\circ$ is HANDING BACK A GIVEN PIECE ✗; $85^\\circ$ is HANDING BACK THE WHOLE ✗.)',
    },
    {
      q: 'In the figure, $\\angle GOJ = 74^\\circ$ and $\\angle GOH = 45^\\circ$. What is $\\angle HOJ$?',
      fig: {
        view: [-0.8, -0.8, 3.8, 3.6],
        elems: [
          { t: 'seg', a: [0, 0], b: [3, 0] },
          { t: 'seg', a: [0, 0], b: [2.12, 2.12] },
          { t: 'seg', a: [0, 0], b: [0.83, 2.88] },
          { t: 'point', p: [0, 0], label: 'O', dx: -10, dy: 8 },
          { t: 'point', p: [3, 0], label: 'G', dx: 10, dy: 0 },
          { t: 'point', p: [2.12, 2.12], label: 'H', dx: 10, dy: -4 },
          { t: 'point', p: [0.83, 2.88], label: 'J', dx: 4, dy: -10 },
          { t: 'angle', at: [0, 0], from: [3, 0], to: [2.12, 2.12], r: 0.8, label: '45' },
          { t: 'angle', at: [0, 0], from: [3, 0], to: [0.83, 2.88], r: 1.65, label: '74' },
        ],
      },
      choices: ['$29^\\circ$', '$119^\\circ$', '$45^\\circ$', '$74^\\circ$'],
      answer: 0,
      solution:
        'The two parts make the whole, so $\\angle HOJ = \\angle GOJ - \\angle GOH = 74^\\circ - 45^\\circ = 29^\\circ$ ✓. Check a second, independent way by reasoning about size before you subtract anything. Ray $\\overrightarrow{OH}$ is inside $\\angle GOJ$, so $\\angle HOJ$ is a piece of a $74^\\circ$ angle and must be smaller than $74^\\circ$ — that kills $119^\\circ$ and $74^\\circ$ at once ✗. The piece left over after a $45^\\circ$ bite out of $74^\\circ$ is clearly less than half of what is left, and $45^\\circ$ is not smaller than $74^\\circ - 45^\\circ$ would allow ✗, so $29^\\circ$ stands alone ✓. (The choice $119^\\circ$ is ADDING INSTEAD OF SUBTRACTING ✗; $45^\\circ$ is HANDING BACK A GIVEN PIECE ✗; $74^\\circ$ is HANDING BACK THE WHOLE ✗.)',
    },
    {
      q: 'In the figure, $\\angle MOP = 90^\\circ$ and $\\angle MON = 27^\\circ$. What is $\\angle NOP$?',
      fig: {
        view: [-0.8, -0.8, 3.8, 3.6],
        elems: [
          { t: 'seg', a: [0, 0], b: [3, 0] },
          { t: 'seg', a: [0, 0], b: [2.67, 1.36] },
          { t: 'seg', a: [0, 0], b: [0, 3] },
          { t: 'point', p: [0, 0], label: 'O', dx: -10, dy: 8 },
          { t: 'point', p: [3, 0], label: 'M', dx: 10, dy: 0 },
          { t: 'point', p: [2.67, 1.36], label: 'N', dx: 10, dy: -2 },
          { t: 'point', p: [0, 3], label: 'P', dx: 0, dy: -10 },
          { t: 'angle', at: [0, 0], from: [3, 0], to: [2.67, 1.36], r: 0.75, label: '27' },
          { t: 'angle', at: [0, 0], from: [3, 0], to: [0, 3], r: 1.6, label: '90' },
        ],
      },
      choices: ['$117^\\circ$', '$63^\\circ$', '$45^\\circ$', '$27^\\circ$'],
      answer: 1,
      solution:
        'Ray $\\overrightarrow{ON}$ lies inside the right angle $\\angle MOP$, so $\\angle NOP = 90^\\circ - 27^\\circ = 63^\\circ$ ✓. Check a second, independent way by walking the quarter turn in stages. Starting along $\\overrightarrow{OM}$, a full quarter turn is $90^\\circ$; the first $27^\\circ$ of it takes you to $\\overrightarrow{ON}$, so what is left of the quarter turn is $63^\\circ$, and the two stages rebuild the corner exactly: $27^\\circ + 63^\\circ = 90^\\circ$ ✓. Notice the leftover has to be the LARGER of the two stages, since $27^\\circ$ is well under half of $90^\\circ$ — which rules out $27^\\circ$ and $45^\\circ$ immediately ✗. (The choice $117^\\circ$ is ADDING INSTEAD OF SUBTRACTING ✗; $45^\\circ$ is HALVING THE WHOLE, as if $\\overrightarrow{ON}$ bisected the right angle ✗; $27^\\circ$ is HANDING BACK A GIVEN PIECE ✗.)',
    },
  ],
  // s6 — split a given total in a given ratio, then answer the right part.
  [
    {
      q: 'Ray $\\overrightarrow{OQ}$ lies inside $\\angle POR$. If $\\angle POQ = 2x$, $\\angle QOR = 3x$, and $\\angle POR = 90^\\circ$, what is $\\angle QOR$?',
      fig: {
        view: [-0.8, -0.8, 3.8, 3.6],
        elems: [
          { t: 'seg', a: [0, 0], b: [3, 0] },
          { t: 'seg', a: [0, 0], b: [2.43, 1.76] },
          { t: 'seg', a: [0, 0], b: [0, 3] },
          { t: 'point', p: [0, 0], label: 'O', dx: -10, dy: 8 },
          { t: 'point', p: [3, 0], label: 'P', dx: 10, dy: 0 },
          { t: 'point', p: [2.43, 1.76], label: 'Q', dx: 10, dy: -4 },
          { t: 'point', p: [0, 3], label: 'R', dx: 0, dy: -10 },
          { t: 'angle', at: [0, 0], from: [3, 0], to: [2.43, 1.76], r: 1.0, label: '2x' },
          { t: 'angle', at: [0, 0], from: [2.43, 1.76], to: [0, 3], r: 0.7, label: '3x' },
        ],
      },
      choices: ['$18^\\circ$', '$36^\\circ$', '$45^\\circ$', '$54^\\circ$'],
      answer: 3,
      solution:
        'The parts add to the whole: $2x + 3x = 90^\\circ$, so $5x = 90^\\circ$ and $x = 18^\\circ$. The question asks for $\\angle QOR = 3x = 54^\\circ$ ✓. Check a second, independent way using fractions and never solving for $x$ at all. The whole is cut into $2 + 3 = 5$ equal shares, and $\\angle QOR$ owns $3$ of them, so it is $\\frac{3}{5}$ of the whole: $\\frac{3}{5} \\times 90^\\circ = 54^\\circ$ ✓. The other piece takes $\\frac{2}{5} \\times 90^\\circ = 36^\\circ$, and $54^\\circ + 36^\\circ = 90^\\circ$ ✓. (The choice $18^\\circ$ is ANSWERING WITH x INSTEAD OF THE ANGLE ✗; $36^\\circ$ is ANSWERING THE OTHER PART ✗; $45^\\circ$ is SPLITTING THE WHOLE EVENLY, ignoring that one piece is bigger ✗.)',
    },
    {
      q: 'Ray $\\overrightarrow{OT}$ lies inside $\\angle SOU$. If $\\angle SOT = 3x$, $\\angle TOU = 4x$, and $\\angle SOU = 126^\\circ$, what is $\\angle TOU$?',
      fig: {
        view: [-2.6, -0.8, 3.8, 3.2],
        elems: [
          { t: 'seg', a: [0, 0], b: [3, 0] },
          { t: 'seg', a: [0, 0], b: [1.76, 2.43] },
          { t: 'seg', a: [0, 0], b: [-1.76, 2.43] },
          { t: 'point', p: [0, 0], label: 'O', dx: 0, dy: 14 },
          { t: 'point', p: [3, 0], label: 'S', dx: 10, dy: 0 },
          { t: 'point', p: [1.76, 2.43], label: 'T', dx: 8, dy: -8 },
          { t: 'point', p: [-1.76, 2.43], label: 'U', dx: -8, dy: -8 },
          { t: 'angle', at: [0, 0], from: [3, 0], to: [1.76, 2.43], r: 1.0, label: '3x' },
          { t: 'angle', at: [0, 0], from: [1.76, 2.43], to: [-1.76, 2.43], r: 0.7, label: '4x' },
        ],
      },
      choices: ['$18^\\circ$', '$72^\\circ$', '$54^\\circ$', '$63^\\circ$'],
      answer: 1,
      solution:
        'The two parts make the whole: $3x + 4x = 126^\\circ$, so $7x = 126^\\circ$ and $x = 18^\\circ$. The angle asked for is $\\angle TOU = 4x = 72^\\circ$ ✓. Check a second, independent way with fractions instead of algebra. The whole splits into $3 + 4 = 7$ equal shares and $\\angle TOU$ takes $4$ of them, so $\\angle TOU = \\frac{4}{7} \\times 126^\\circ = 4 \\times 18^\\circ = 72^\\circ$ ✓. As a final sanity check the two parts must rebuild the whole, and $54^\\circ + 72^\\circ = 126^\\circ$ ✓. (The choice $18^\\circ$ is ANSWERING WITH x INSTEAD OF THE ANGLE ✗; $54^\\circ$ is ANSWERING THE OTHER PART, which is $3x$ ✗; $63^\\circ$ is SPLITTING THE WHOLE EVENLY ✗.)',
    },
    {
      q: 'Ray $\\overrightarrow{OK}$ lies inside $\\angle JOL$. If $\\angle JOK = 2x$, $\\angle KOL = 5x$, and $\\angle JOL = 140^\\circ$, what is $\\angle JOK$?',
      fig: {
        view: [-3.2, -0.8, 3.8, 2.8],
        elems: [
          { t: 'seg', a: [0, 0], b: [3, 0] },
          { t: 'seg', a: [0, 0], b: [2.3, 1.93] },
          { t: 'seg', a: [0, 0], b: [-2.3, 1.93] },
          { t: 'point', p: [0, 0], label: 'O', dx: 0, dy: 14 },
          { t: 'point', p: [3, 0], label: 'J', dx: 10, dy: 0 },
          { t: 'point', p: [2.3, 1.93], label: 'K', dx: 10, dy: -4 },
          { t: 'point', p: [-2.3, 1.93], label: 'L', dx: -10, dy: -4 },
          { t: 'angle', at: [0, 0], from: [3, 0], to: [2.3, 1.93], r: 1.1, label: '2x' },
          { t: 'angle', at: [0, 0], from: [2.3, 1.93], to: [-2.3, 1.93], r: 0.75, label: '5x' },
        ],
      },
      choices: ['$40^\\circ$', '$20^\\circ$', '$100^\\circ$', '$70^\\circ$'],
      answer: 0,
      solution:
        'The parts add to the whole: $2x + 5x = 140^\\circ$, so $7x = 140^\\circ$ and $x = 20^\\circ$. The question asks for $\\angle JOK = 2x = 40^\\circ$ ✓. Check a second, independent way by thinking in shares. The whole angle is cut into $2 + 5 = 7$ equal shares, and $\\angle JOK$ holds just $2$ of them, so it is $\\frac{2}{7}$ of $140^\\circ$, which is $40^\\circ$ ✓. Since $\\frac{2}{7}$ is well under half, the answer has to be the SMALLER of the two parts — which by itself rules out $100^\\circ$ and $70^\\circ$ ✗. (The choice $20^\\circ$ is ANSWERING WITH x INSTEAD OF THE ANGLE ✗; $100^\\circ$ is ANSWERING THE OTHER PART, which is $5x$ ✗; $70^\\circ$ is SPLITTING THE WHOLE EVENLY ✗.)',
    },
  ],
  // s7 — an interior ray, with one part a fixed amount larger than the other.
  [
    {
      q: 'Point $R$ lies in the interior of $\\angle PQS$, and $\\angle PQS = 100^\\circ$. If $\\angle PQR$ is $16^\\circ$ larger than $\\angle RQS$, what is $\\angle PQR$?',
      fig: {
        view: [-1.4, -0.8, 3.8, 3.5],
        elems: [
          { t: 'seg', a: [0, 0], b: [3, 0] },
          { t: 'seg', a: [0, 0], b: [1.59, 2.54] },
          { t: 'seg', a: [0, 0], b: [-0.52, 2.95] },
          { t: 'point', p: [0, 0], label: 'Q', dx: -10, dy: 8 },
          { t: 'point', p: [3, 0], label: 'P', dx: 10, dy: 0 },
          { t: 'point', p: [1.59, 2.54], label: 'R', dx: 10, dy: -6 },
          { t: 'point', p: [-0.52, 2.95], label: 'S', dx: -4, dy: -10 },
          { t: 'angle', at: [0, 0], from: [3, 0], to: [1.59, 2.54], r: 0.9 },
          { t: 'angle', at: [0, 0], from: [1.59, 2.54], to: [-0.52, 2.95], r: 0.65 },
        ],
      },
      choices: ['$42^\\circ$', '$58^\\circ$', '$50^\\circ$', '$84^\\circ$'],
      answer: 1,
      solution:
        'Let $\\angle RQS = y$, so $\\angle PQR = y + 16^\\circ$. The parts add to the whole: $y + (y + 16^\\circ) = 100^\\circ$, so $2y = 84^\\circ$, $y = 42^\\circ$, and $\\angle PQR = 42^\\circ + 16^\\circ = 58^\\circ$ ✓. Check a second, independent way by stripping the difference off first, with no variable anywhere. Set the extra $16^\\circ$ aside and $100^\\circ - 16^\\circ = 84^\\circ$ is left to share equally, giving $42^\\circ$ to each part; then hand the $16^\\circ$ back to the bigger one: $42^\\circ + 16^\\circ = 58^\\circ$ ✓. Rebuild to confirm: $58^\\circ + 42^\\circ = 100^\\circ$ ✓ and $58^\\circ - 42^\\circ = 16^\\circ$ ✓, both conditions met. (The choice $42^\\circ$ is ANSWERING THE OTHER PART ✗; $50^\\circ$ is SPLITTING THE WHOLE EVENLY, forgetting that one part is larger ✗; $84^\\circ$ is SUBTRACTING THE DIFFERENCE FROM THE WHOLE and stopping there ✗.)',
    },
    {
      q: 'Point $W$ lies in the interior of $\\angle UVX$, and $\\angle UVX = 86^\\circ$. If $\\angle UVW$ is $12^\\circ$ larger than $\\angle WVX$, what is $\\angle WVX$?',
      fig: {
        view: [-0.8, -0.8, 3.8, 3.6],
        elems: [
          { t: 'seg', a: [0, 0], b: [3, 0] },
          { t: 'seg', a: [0, 0], b: [1.97, 2.26] },
          { t: 'seg', a: [0, 0], b: [0.21, 2.99] },
          { t: 'point', p: [0, 0], label: 'V', dx: -10, dy: 8 },
          { t: 'point', p: [3, 0], label: 'U', dx: 10, dy: 0 },
          { t: 'point', p: [1.97, 2.26], label: 'W', dx: 10, dy: -6 },
          { t: 'point', p: [0.21, 2.99], label: 'X', dx: 4, dy: -10 },
          { t: 'angle', at: [0, 0], from: [3, 0], to: [1.97, 2.26], r: 0.9 },
          { t: 'angle', at: [0, 0], from: [1.97, 2.26], to: [0.21, 2.99], r: 0.65 },
        ],
      },
      choices: ['$43^\\circ$', '$74^\\circ$', '$49^\\circ$', '$37^\\circ$'],
      answer: 3,
      solution:
        'Let $\\angle WVX = y$, the smaller part. Then $\\angle UVW = y + 12^\\circ$, and the parts add to the whole: $y + (y + 12^\\circ) = 86^\\circ$, so $2y = 74^\\circ$ and $y = 37^\\circ$ ✓. Check a second, independent way by trimming before sharing. Take the extra $12^\\circ$ out of the total: $86^\\circ - 12^\\circ = 74^\\circ$ splits evenly into $37^\\circ$ and $37^\\circ$, and the trimmed part is exactly the SMALLER angle, which is what the question wants — so $\\angle WVX = 37^\\circ$ ✓, while the larger one collects the returned $12^\\circ$ to become $49^\\circ$. Rebuild: $37^\\circ + 49^\\circ = 86^\\circ$ ✓. (The choice $49^\\circ$ is ANSWERING THE OTHER PART ✗; $43^\\circ$ is SPLITTING THE WHOLE EVENLY ✗; $74^\\circ$ is SUBTRACTING THE DIFFERENCE FROM THE WHOLE without ever sharing it out ✗.)',
    },
    {
      q: 'Point $H$ lies in the interior of $\\angle GFK$, and $\\angle GFK = 112^\\circ$. If $\\angle GFH$ is $24^\\circ$ larger than $\\angle HFK$, what is $\\angle GFH$?',
      fig: {
        view: [-2.0, -0.8, 3.8, 3.4],
        elems: [
          { t: 'seg', a: [0, 0], b: [3, 0] },
          { t: 'seg', a: [0, 0], b: [1.12, 2.78] },
          { t: 'seg', a: [0, 0], b: [-1.12, 2.78] },
          { t: 'point', p: [0, 0], label: 'F', dx: 0, dy: 14 },
          { t: 'point', p: [3, 0], label: 'G', dx: 10, dy: 0 },
          { t: 'point', p: [1.12, 2.78], label: 'H', dx: 8, dy: -8 },
          { t: 'point', p: [-1.12, 2.78], label: 'K', dx: -8, dy: -8 },
          { t: 'angle', at: [0, 0], from: [3, 0], to: [1.12, 2.78], r: 0.9 },
          { t: 'angle', at: [0, 0], from: [1.12, 2.78], to: [-1.12, 2.78], r: 0.65 },
        ],
      },
      choices: ['$88^\\circ$', '$56^\\circ$', '$68^\\circ$', '$44^\\circ$'],
      answer: 2,
      solution:
        'Let $\\angle HFK = y$, so $\\angle GFH = y + 24^\\circ$. The parts add to the whole: $y + (y + 24^\\circ) = 112^\\circ$, giving $2y = 88^\\circ$, $y = 44^\\circ$, and $\\angle GFH = 44^\\circ + 24^\\circ = 68^\\circ$ ✓. Check a second, independent way by starting from an even split and then tilting it. An even split of $112^\\circ$ would give $56^\\circ$ each; to open one part by $24^\\circ$ more than the other, move $12^\\circ$ across from the smaller to the larger — half the difference, since every degree moved widens the gap by two. That gives $56^\\circ + 12^\\circ = 68^\\circ$ and $56^\\circ - 12^\\circ = 44^\\circ$ ✓, whose difference is $24^\\circ$ ✓ and whose sum is $112^\\circ$ ✓. (The choice $44^\\circ$ is ANSWERING THE OTHER PART ✗; $56^\\circ$ is SPLITTING THE WHOLE EVENLY ✗; $88^\\circ$ is SUBTRACTING THE DIFFERENCE FROM THE WHOLE ✗.)',
    },
  ],
  // s8 — count the angles made by a fan of rays inside a half-plane.
  [
    {
      q: 'A lighthouse sends out eight beams from a single lamp, all of them inside one half-plane and no two pointing in exactly opposite directions. Treating each beam as a ray, how many different angles do the beams form?',
      choices: ['$28$', '$8$', '$56$', '$36$'],
      answer: 0,
      solution:
        'Each angle is made by choosing two of the beams, so the number of angles is the number of pairs. There are $8 \\times 7 = 56$ ordered picks, and each angle appears twice in that tally, so the count is $\\frac{8 \\times 7}{2} = 28$ ✓. Check a second, independent way by switching the lamp on one beam at a time and asking how many NEW angles each beam creates with the beams already shining: the first creates none, the second $1$, the third $2$, and so on up to the eighth, which creates $7$. That is $1 + 2 + 3 + 4 + 5 + 6 + 7 = 28$ ✓ — the ladder and the pair formula agree. (The choice $8$ is COUNTING THE RAYS ✗; $56$ is COUNTING EACH ANGLE TWICE, once from each of its beams ✗; $36$ is ADDING ONE TERM TOO MANY, running the ladder up to $8$ ✗.)',
    },
    {
      q: 'Nine rays share an endpoint, all nine lying inside one half-plane so that no two of them are opposite rays. How many different angles do they form?',
      choices: ['$9$', '$81$', '$36$', '$45$'],
      answer: 2,
      solution:
        'An angle is a pair of rays, so count pairs: $9 \\times 8 = 72$ ordered picks, halved because order does not matter, gives $\\frac{9 \\times 8}{2} = 36$ ✓. Check a second, independent way by the ladder, adding rays one at a time and counting only the angles each new ray makes with the ones already drawn: $1 + 2 + 3 + 4 + 5 + 6 + 7 + 8$. Pair the ends to add it quickly — $1 + 8 = 9$, $2 + 7 = 9$, $3 + 6 = 9$, $4 + 5 = 9$, so four nines, which is $36$ ✓. (The choice $9$ is COUNTING THE RAYS ✗; $81$ is SQUARING INSTEAD OF PAIRING, from $9 \\times 9$ ✗; $45$ is ADDING ONE TERM TOO MANY, summing $1 + 2 + \\cdots + 9$ instead of stopping at $8$ ✗.)',
    },
    {
      q: 'A folding fan opens so that its five ribs all spread out from one pivot inside a half-plane, with no two ribs pointing in opposite directions. Counting each rib as a ray, how many different angles do the ribs form?',
      choices: ['$5$', '$20$', '$15$', '$10$'],
      answer: 3,
      solution:
        'Any two ribs make one angle, so count pairs of ribs: $\\frac{5 \\times 4}{2} = 10$ ✓ — the $5 \\times 4$ counts every angle once from each of its two ribs, and halving repairs that. Check a second, independent way by listing the angles from the outermost rib inward. Call the ribs $1$ through $5$ in order across the fan: rib $1$ makes angles with $4$ others, rib $2$ makes $3$ that have not been counted yet, rib $3$ makes $2$, rib $4$ makes $1$, and rib $5$ makes none that are new. That is $4 + 3 + 2 + 1 = 10$ ✓. (The choice $5$ is COUNTING THE RAYS ✗; $20$ is COUNTING EACH ANGLE TWICE ✗; $15$ is ADDING ONE TERM TOO MANY, running the ladder up to $5$ ✗.)',
    },
  ],
  // s9 — two angles around a point that overlap in the angle we want.
  [
    {
      q: 'Rays $\\overrightarrow{OP}$, $\\overrightarrow{OQ}$, $\\overrightarrow{OR}$, $\\overrightarrow{OS}$ appear in that order around $O$. Given $\\angle POR = 45^\\circ$, $\\angle QOS = 79^\\circ$, and $\\angle POS = 93^\\circ$, find $\\angle QOR$.',
      fig: {
        view: [-1.0, -0.8, 3.8, 3.6],
        elems: [
          { t: 'seg', a: [0, 0], b: [3, 0] },
          { t: 'seg', a: [0, 0], b: [2.91, 0.73] },
          { t: 'seg', a: [0, 0], b: [2.12, 2.12] },
          { t: 'seg', a: [0, 0], b: [-0.16, 3] },
          { t: 'point', p: [0, 0], label: 'O', dx: 0, dy: 14 },
          { t: 'point', p: [3, 0], label: 'P', dx: 10, dy: 2 },
          { t: 'point', p: [2.91, 0.73], label: 'Q', dx: 10, dy: -4 },
          { t: 'point', p: [2.12, 2.12], label: 'R', dx: 10, dy: -4 },
          { t: 'point', p: [-0.16, 3], label: 'S', dx: -4, dy: -10 },
          { t: 'angle', at: [0, 0], from: [3, 0], to: [2.12, 2.12], r: 0.8, label: '45' },
          { t: 'angle', at: [0, 0], from: [2.91, 0.73], to: [-0.16, 3], r: 1.35, label: '79' },
          { t: 'angle', at: [0, 0], from: [3, 0], to: [-0.16, 3], r: 1.9, label: '93' },
        ],
      },
      choices: ['$14^\\circ$', '$48^\\circ$', '$31^\\circ$', '$124^\\circ$'],
      answer: 2,
      solution:
        'The angles $\\angle POR$ and $\\angle QOS$ overlap, and the strip they share is exactly $\\angle QOR$. Adding them covers the whole $\\angle POS$ once and the shared strip a second time: $45^\\circ + 79^\\circ = \\angle POS + \\angle QOR$, so $\\angle QOR = 124^\\circ - 93^\\circ = 31^\\circ$ ✓. Check a second, independent way by chaining subtractions from the outside in, which never mentions overlap at all. First $\\angle POQ = \\angle POS - \\angle QOS = 93^\\circ - 79^\\circ = 14^\\circ$; then $\\angle QOR = \\angle POR - \\angle POQ = 45^\\circ - 14^\\circ = 31^\\circ$ ✓. As a final check the three small pieces should rebuild the whole: $\\angle ROS = 93^\\circ - 45^\\circ = 48^\\circ$, and $14^\\circ + 31^\\circ + 48^\\circ = 93^\\circ$ ✓. (The choice $14^\\circ$ is ANSWERING THE FIRST GAP $\\angle POQ$ ✗; $48^\\circ$ is ANSWERING THE LAST GAP $\\angle ROS$ ✗; $124^\\circ$ is FORGETTING THE OVERLAP and handing back the raw sum ✗.)',
    },
    {
      q: 'Rays $\\overrightarrow{OJ}$, $\\overrightarrow{OK}$, $\\overrightarrow{OL}$, $\\overrightarrow{OM}$ appear in that order around $O$. Given $\\angle JOL = 60^\\circ$, $\\angle KOM = 64^\\circ$, and $\\angle JOM = 105^\\circ$, find $\\angle KOL$.',
      fig: {
        view: [-1.6, -0.8, 3.8, 3.6],
        elems: [
          { t: 'seg', a: [0, 0], b: [3, 0] },
          { t: 'seg', a: [0, 0], b: [2.26, 1.97] },
          { t: 'seg', a: [0, 0], b: [1.5, 2.6] },
          { t: 'seg', a: [0, 0], b: [-0.78, 2.9] },
          { t: 'point', p: [0, 0], label: 'O', dx: 0, dy: 14 },
          { t: 'point', p: [3, 0], label: 'J', dx: 10, dy: 0 },
          { t: 'point', p: [2.26, 1.97], label: 'K', dx: 10, dy: -4 },
          { t: 'point', p: [1.5, 2.6], label: 'L', dx: 8, dy: -8 },
          { t: 'point', p: [-0.78, 2.9], label: 'M', dx: -6, dy: -10 },
          { t: 'angle', at: [0, 0], from: [3, 0], to: [1.5, 2.6], r: 0.8, label: '60' },
          { t: 'angle', at: [0, 0], from: [2.26, 1.97], to: [-0.78, 2.9], r: 1.35, label: '64' },
          { t: 'angle', at: [0, 0], from: [3, 0], to: [-0.78, 2.9], r: 1.9, label: '105' },
        ],
      },
      choices: ['$19^\\circ$', '$41^\\circ$', '$45^\\circ$', '$124^\\circ$'],
      answer: 0,
      solution:
        'The angles $\\angle JOL$ and $\\angle KOM$ overlap in the strip $\\angle KOL$. Their sum therefore covers $\\angle JOM$ once plus that strip once more: $60^\\circ + 64^\\circ = 105^\\circ + \\angle KOL$, so $\\angle KOL = 124^\\circ - 105^\\circ = 19^\\circ$ ✓. Check a second, independent way by peeling the ends off one at a time. The first gap is $\\angle JOK = \\angle JOM - \\angle KOM = 105^\\circ - 64^\\circ = 41^\\circ$, and taking it out of $\\angle JOL$ leaves $\\angle KOL = 60^\\circ - 41^\\circ = 19^\\circ$ ✓. Rebuild to be sure: the last gap is $\\angle LOM = 105^\\circ - 60^\\circ = 45^\\circ$, and $41^\\circ + 19^\\circ + 45^\\circ = 105^\\circ$ ✓. (The choice $41^\\circ$ is ANSWERING THE FIRST GAP $\\angle JOK$ ✗; $45^\\circ$ is ANSWERING THE LAST GAP $\\angle LOM$ ✗; $124^\\circ$ is FORGETTING THE OVERLAP, reporting the bare sum ✗.)',
    },
    {
      q: 'Rays $\\overrightarrow{OW}$, $\\overrightarrow{OX}$, $\\overrightarrow{OY}$, $\\overrightarrow{OZ}$ appear in that order around $O$. Given $\\angle WOY = 72^\\circ$, $\\angle XOZ = 68^\\circ$, and $\\angle WOZ = 93^\\circ$, find $\\angle XOY$.',
      fig: {
        view: [-1.0, -0.8, 3.8, 3.6],
        elems: [
          { t: 'seg', a: [0, 0], b: [3, 0] },
          { t: 'seg', a: [0, 0], b: [2.72, 1.27] },
          { t: 'seg', a: [0, 0], b: [0.93, 2.85] },
          { t: 'seg', a: [0, 0], b: [-0.16, 3] },
          { t: 'point', p: [0, 0], label: 'O', dx: 0, dy: 14 },
          { t: 'point', p: [3, 0], label: 'W', dx: 10, dy: 0 },
          { t: 'point', p: [2.72, 1.27], label: 'X', dx: 10, dy: -2 },
          { t: 'point', p: [0.93, 2.85], label: 'Y', dx: 10, dy: -6 },
          { t: 'point', p: [-0.16, 3], label: 'Z', dx: -4, dy: -10 },
          { t: 'angle', at: [0, 0], from: [3, 0], to: [0.93, 2.85], r: 0.8, label: '72' },
          { t: 'angle', at: [0, 0], from: [2.72, 1.27], to: [-0.16, 3], r: 1.35, label: '68' },
          { t: 'angle', at: [0, 0], from: [3, 0], to: [-0.16, 3], r: 1.9, label: '93' },
        ],
      },
      choices: ['$21^\\circ$', '$47^\\circ$', '$25^\\circ$', '$140^\\circ$'],
      answer: 1,
      solution:
        'The angles $\\angle WOY$ and $\\angle XOZ$ overlap, and their shared strip is $\\angle XOY$. Adding them counts $\\angle WOZ$ once and the strip twice: $72^\\circ + 68^\\circ = 93^\\circ + \\angle XOY$, so $\\angle XOY = 140^\\circ - 93^\\circ = 47^\\circ$ ✓. Check a second, independent way by working in from the edges with plain subtraction. The far gap is $\\angle YOZ = \\angle WOZ - \\angle WOY = 93^\\circ - 72^\\circ = 21^\\circ$, so $\\angle XOY = \\angle XOZ - \\angle YOZ = 68^\\circ - 21^\\circ = 47^\\circ$ ✓. Rebuild for safety: the near gap is $\\angle WOX = 93^\\circ - 68^\\circ = 25^\\circ$, and $25^\\circ + 47^\\circ + 21^\\circ = 93^\\circ$ ✓. (The choice $25^\\circ$ is ANSWERING THE FIRST GAP $\\angle WOX$ ✗; $21^\\circ$ is ANSWERING THE LAST GAP $\\angle YOZ$ ✗; $140^\\circ$ is FORGETTING THE OVERLAP ✗.)',
    },
  ],
  // s10 — the same pair count, at bigger numbers.
  [
    {
      q: 'Eleven rays share an endpoint, all of them inside one half-plane, and no two are opposite rays. How many different angles do the eleven rays form?',
      choices: ['$11$', '$110$', '$66$', '$55$'],
      answer: 3,
      solution:
        'Every angle is a pair of rays, so the count is the number of pairs: $11 \\times 10 = 110$ ordered picks, and halving to undo the double counting gives $\\frac{11 \\times 10}{2} = 55$ ✓. Check a second, independent way by the ladder, adding one ray at a time and counting only the new angles each arrival makes: $1 + 2 + 3 + \\cdots + 10$. Pair the ends — $1 + 10 = 11$, $2 + 9 = 11$, $3 + 8 = 11$, $4 + 7 = 11$, $5 + 6 = 11$ — five elevens, so $55$ ✓. (The choice $11$ is COUNTING THE RAYS ✗; $110$ is COUNTING EACH ANGLE TWICE ✗; $66$ is ADDING ONE TERM TOO MANY, running the ladder to $11$ instead of stopping at $10$ ✗.)',
    },
    {
      q: 'A stage crew aims ten spotlight beams out from one point on the ceiling, all of them inside a half-plane with no two beams opposite each other. Treating each beam as a ray, how many different angles do the beams form?',
      choices: ['$100$', '$45$', '$10$', '$90$'],
      answer: 1,
      solution:
        'Choosing two beams gives one angle, so count pairs: $\\frac{10 \\times 9}{2} = 45$ ✓ — the $10 \\times 9$ counts each angle once from each of its two beams, and halving fixes that. Check a second, independent way by switching the beams on one at a time and counting only the angles each new beam adds with the beams already lit: $1 + 2 + 3 + \\cdots + 9$. Pair the ends — $1 + 9 = 10$, $2 + 8 = 10$, $3 + 7 = 10$, $4 + 6 = 10$, and the lone $5$ in the middle — giving $40 + 5 = 45$ ✓. (The choice $100$ is SQUARING INSTEAD OF PAIRING, from $10 \\times 10$ ✗; $10$ is COUNTING THE RAYS ✗; $90$ is COUNTING EACH ANGLE TWICE, stopping at $10 \\times 9$ ✗.)',
    },
    {
      q: 'Twelve rays are drawn from a single point, all twelve inside one half-plane so that no two are opposite rays. How many different angles do the rays form?',
      choices: ['$12$', '$144$', '$66$', '$132$'],
      answer: 2,
      solution:
        'An angle needs two rays, so the answer is the number of pairs: $12 \\times 11 = 132$ ordered picks, halved because picking ray $p$ then ray $q$ makes the same angle as $q$ then $p$, which is $\\frac{12 \\times 11}{2} = 66$ ✓. Check a second, independent way by the ladder: the second ray adds $1$ angle, the third adds $2$, and so on to the twelfth, which adds $11$, for $1 + 2 + 3 + \\cdots + 11$. Pair the ends — $1 + 11 = 12$, $2 + 10 = 12$, $3 + 9 = 12$, $4 + 8 = 12$, $5 + 7 = 12$, with $6$ left over in the middle — giving $60 + 6 = 66$ ✓. (The choice $12$ is COUNTING THE RAYS ✗; $144$ is SQUARING INSTEAD OF PAIRING ✗; $132$ is COUNTING EACH ANGLE TWICE ✗.)',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 2,
  sections: {
    '2.1': s21,
  },
}
