// Introduction to Geometry chapter 19 — variations for section 19.2
// (Assigning Variables). All problems, figures, and solutions are original
// MathQuest content.
//
// House rules for this file:
//  - Every item names its variable out loud and writes down the equation the
//    figure forces. That is the whole skill of the section, so no solution is
//    allowed to jump to an answer without showing which fact of the picture
//    turned into which line of algebra.
//  - Every keyed answer is reached twice along routes that share no steps.
//    The usual pairing is "name one unknown and chase it" against "name a
//    different unknown, or a whole quantity such as $l + w$, and let the
//    identity $(l + w)^2 = l^2 + 2lw + w^2$ finish". Route two never reuses
//    route one’s number.
//  - Figures never carry the quantity being asked for. An unknown angle or
//    length is marked `?`, expressions in $x$ are drawn as plain text, and
//    triangles whose angles are the question are drawn deliberately
//    off-measure so a protractor answers nothing.
//  - Each distractor is one named mistake — reporting $x$ when the angle was
//    wanted, reporting the angle when $x$ was wanted, dropping a coefficient,
//    using the perimeter where the semiperimeter belongs — and it is named in
//    CAPS.

const s192 = [
  // s1 — an isosceles triangle whose base angles are tied to the apex.
  [
    {
      q: 'In an isosceles triangle the apex angle measures $4x$ and each of the two base angles measures $3x$. What is the measure of the apex angle?',
      fig: {
        view: [-0.9, -1.1, 4.9, 6.3],
        elems: [
          { t: 'poly', pts: [[0, 0], [4, 0], [2, 5]], fill: false },
          { t: 'tick', a: [0, 0], b: [2, 5], n: 1 },
          { t: 'tick', a: [4, 0], b: [2, 5], n: 1 },
          { t: 'angle', at: [2, 5], from: [0, 0], to: [4, 0], r: 0.9, label: '4x' },
          { t: 'angle', at: [0, 0], from: [4, 0], to: [2, 5], r: 0.8, label: '3x' },
          { t: 'angle', at: [4, 0], from: [2, 5], to: [0, 0], r: 0.8, label: '3x' },
        ],
      },
      choices: ['$18^\\circ$', '$72^\\circ$', '$54^\\circ$', '$144^\\circ$'],
      answer: 1,
      solution:
        'Route one, let $x$ be the variable the figure already uses. The three angles are then $4x$, $3x$, and $3x$, and the figure forces the angle-sum equation $4x + 3x + 3x = 180^\\circ$. That is $10x = 180^\\circ$, so $x = 18^\\circ$, and the apex angle is $4x = 72^\\circ$ ✓. Check a second, independent way, by naming the apex itself: let $a$ be the apex angle. The labels say the apex and each base angle stand in the ratio $4 : 3$, so each base angle is $\\frac{3}{4}a$, and the angle sum becomes $a + \\frac{3}{4}a + \\frac{3}{4}a = 180^\\circ$. Multiplying through by $4$ gives $4a + 3a + 3a = 720^\\circ$, so $10a = 720^\\circ$ and $a = 72^\\circ$ ✓. (The choice $18^\\circ$ is REPORTING $x$ INSTEAD OF THE ANGLE, stopping one substitution short of what was asked ✗; the choice $54^\\circ$ is HANDING BACK A BASE ANGLE, the value of $3x$, when the apex was wanted ✗; the choice $144^\\circ$ is SETTING THE ANGLE SUM TO $360^\\circ$, the sum for a quadrilateral, not a triangle ✗.)',
    },
    {
      q: 'A triangle has two congruent sides, and each of its two base angles measures $30^\\circ$ more than its apex angle. How large is the apex angle?',
      fig: {
        view: [-1, -1.1, 5, 4.6],
        elems: [
          { t: 'poly', pts: [[0, 0], [4, 0], [2, 3.4]], fill: false },
          { t: 'tick', a: [0, 0], b: [2, 3.4], n: 1 },
          { t: 'tick', a: [4, 0], b: [2, 3.4], n: 1 },
          { t: 'angle', at: [2, 3.4], from: [0, 0], to: [4, 0], r: 0.85, label: '?' },
          { t: 'angle', at: [0, 0], from: [4, 0], to: [2, 3.4], r: 0.7 },
          { t: 'angle', at: [4, 0], from: [2, 3.4], to: [0, 0], r: 0.7 },
        ],
      },
      choices: ['$70^\\circ$', '$75^\\circ$', '$50^\\circ$', '$40^\\circ$'],
      answer: 3,
      solution:
        'Route one, let $a$ be the apex angle. The two tick marks make the triangle isosceles, so the two base angles are equal, and each is $a + 30^\\circ$. The angle sum is the equation the figure forces: $a + (a + 30^\\circ) + (a + 30^\\circ) = 180^\\circ$, so $3a + 60^\\circ = 180^\\circ$ and $a = 40^\\circ$ ✓. Check a second, independent way, by naming a base angle instead: let $b$ be one base angle. Two base angles and the apex fill $180^\\circ$, so the apex measures $180^\\circ - 2b$. The problem also says the base angle sits $30^\\circ$ above the apex, so the apex measures $b - 30^\\circ$. Two names for one angle give $180^\\circ - 2b = b - 30^\\circ$, hence $3b = 210^\\circ$ and $b = 70^\\circ$; the apex is $70^\\circ - 30^\\circ = 40^\\circ$ ✓. (The choice $70^\\circ$ is HANDING BACK A BASE ANGLE where the apex was asked for ✗; the choice $75^\\circ$ is COUNTING ONLY ONE BASE ANGLE, solving $a + (a + 30^\\circ) = 180^\\circ$ and forgetting the third angle exists ✗; the choice $50^\\circ$ is ADDING THE $30^\\circ$ ONLY ONCE, dividing $150^\\circ$ by $3$ though the figure has two base angles, each carrying its own $30^\\circ$ ✗.)',
    },
    {
      q: 'In an isosceles triangle, each base angle measures $6^\\circ$ more than three times the apex angle. Find the apex angle.',
      fig: {
        view: [-1.2, -1.2, 5.2, 3.4],
        elems: [
          { t: 'poly', pts: [[0, 0], [4, 0], [2, 2.2]], fill: false },
          { t: 'tick', a: [0, 0], b: [2, 2.2], n: 1 },
          { t: 'tick', a: [4, 0], b: [2, 2.2], n: 1 },
          { t: 'angle', at: [2, 2.2], from: [0, 0], to: [4, 0], r: 0.75, label: '?' },
          { t: 'angle', at: [0, 0], from: [4, 0], to: [2, 2.2], r: 0.85 },
          { t: 'angle', at: [4, 0], from: [2, 2.2], to: [0, 0], r: 0.85 },
        ],
      },
      choices: ['$78^\\circ$', '$28^\\circ$', '$24^\\circ$', '$72^\\circ$'],
      answer: 2,
      solution:
        'Route one, let $a$ be the apex angle. Equal sides force equal base angles, and each of them is $3a + 6^\\circ$. The angle sum gives $a + (3a + 6^\\circ) + (3a + 6^\\circ) = 180^\\circ$, so $7a + 12^\\circ = 180^\\circ$, $7a = 168^\\circ$, and $a = 24^\\circ$ ✓. Check a second, independent way, by naming a base angle: let $b$ be one base angle. The two base angles leave $180^\\circ - 2b$ for the apex, and the relation says $b = 3(180^\\circ - 2b) + 6^\\circ$. Expanding, $b = 540^\\circ - 6b + 6^\\circ$, so $7b = 546^\\circ$ and $b = 78^\\circ$. The apex is then $180^\\circ - 2(78^\\circ) = 24^\\circ$ ✓. (The choice $78^\\circ$ is HANDING BACK A BASE ANGLE instead of the apex ✗; the choice $28^\\circ$ is LEAVING THE APEX OUT OF THE SUM, solving $2(3a + 6^\\circ) = 180^\\circ$ as though the two base angles filled the whole triangle ✗; the choice $72^\\circ$ is DROPPING THE $6^\\circ$ AT THE END, reporting three times the apex rather than the apex ✗.)',
    },
  ],
  // s2 — two tangents from an external point are equal, which is the equation.
  [
    {
      q: 'From an external point $P$, the tangent segments $\\overline{PA}$ and $\\overline{PB}$ touch a circle at $A$ and $B$. If $PA = 3x - 5$ and $PB = x + 7$, what is $x$?',
      fig: {
        view: [-2.4, -2.4, 7.2, 2.4],
        elems: [
          { t: 'circle', c: [0, 0], r: 2 },
          { t: 'seg', a: [5.5, 0], b: [0.727, 1.863] },
          { t: 'seg', a: [5.5, 0], b: [0.727, -1.863] },
          { t: 'label', p: [3.114, 0.932], text: '3x - 5', dx: 4, dy: -8 },
          { t: 'label', p: [3.114, -0.932], text: 'x + 7', dx: 4, dy: 14 },
          { t: 'point', p: [0.727, 1.863], label: 'A', dx: -8, dy: -8 },
          { t: 'point', p: [0.727, -1.863], label: 'B', dx: -8, dy: 14 },
          { t: 'point', p: [5.5, 0], label: 'P', dx: 10, dy: 4 },
        ],
      },
      choices: ['$3$', '$13$', '$1$', '$6$'],
      answer: 3,
      solution:
        'Route one, let $x$ be the unknown the labels already carry. The two tangent segments drawn from a single external point are always equal in length, and that fact is the equation the figure forces: $3x - 5 = x + 7$. Subtract $x$ from both sides for $2x - 5 = 7$, add $5$ for $2x = 12$, and divide for $x = 6$ ✓. Check a second, independent way, by naming the length instead of $x$: let $t$ be the common tangent length, so $3x - 5 = t$ and $x + 7 = t$. Tripling the second equation gives $3x + 21 = 3t$, and the first gives $3x = t + 5$, so $t + 5 + 21 = 3t$, hence $2t = 26$ and $t = 13$. A tangent of length $13$ means $x + 7 = 13$, so $x = 6$ ✓. (The choice $3$ is COMBINING THE $x$-TERMS WITH THE WRONG SIGN, adding $3x$ and $x$ into $4x = 12$ instead of subtracting ✗; the choice $13$ is REPORTING THE TANGENT LENGTH where the problem asked for $x$ ✗; the choice $1$ is SUBTRACTING THE $5$ INSTEAD OF ADDING IT, giving $2x = 7 - 5$ when moving $-5$ across the equals sign ✗.)',
    },
    {
      q: 'Tangent segments $\\overline{PA}$ and $\\overline{PB}$ run from an external point $P$ to a circle. Given $PA = 4x - 3$ and $PB = x + 12$, find $x$.',
      fig: {
        view: [-2.7, -2.7, 7.6, 2.7],
        elems: [
          { t: 'circle', c: [0, 0], r: 2.2 },
          { t: 'seg', a: [5.8, 0], b: [0.834, 2.036] },
          { t: 'seg', a: [5.8, 0], b: [0.834, -2.036] },
          { t: 'label', p: [3.317, 1.018], text: '4x - 3', dx: 4, dy: -8 },
          { t: 'label', p: [3.317, -1.018], text: 'x + 12', dx: 4, dy: 14 },
          { t: 'point', p: [0.834, 2.036], label: 'A', dx: -8, dy: -8 },
          { t: 'point', p: [0.834, -2.036], label: 'B', dx: -8, dy: 14 },
          { t: 'point', p: [5.8, 0], label: 'P', dx: 10, dy: 4 },
        ],
      },
      choices: ['$3$', '$5$', '$17$', '$15$'],
      answer: 1,
      solution:
        'Route one, let $x$ be the unknown in the labels. Two tangents from the same external point have equal length, so the figure forces $4x - 3 = x + 12$. Taking $x$ from each side leaves $3x - 3 = 12$, so $3x = 15$ and $x = 5$ ✓. Check a second, independent way, by naming the common length: let $t = PA = PB$. From the second label, $x = t - 12$; substituting into the first label gives $4(t - 12) - 3 = t$, so $4t - 51 = t$, $3t = 51$, and $t = 17$. Then $x = 17 - 12 = 5$ ✓. (The choice $3$ is ADDING THE $x$-TERMS INSTEAD OF SUBTRACTING, turning the equation into $5x = 15$ ✗; the choice $17$ is REPORTING THE TANGENT LENGTH rather than $x$ ✗; the choice $15$ is STOPPING AT $3x = 15$ and never dividing by the coefficient ✗.)',
    },
    {
      q: 'Two tangent segments from an external point $P$ touch a circle at $A$ and $B$, with $PA = 4x + 3$ and $PB = 6x - 5$. How long is $\\overline{PA}$?',
      fig: {
        view: [-2.5, -2.5, 7.4, 2.5],
        elems: [
          { t: 'circle', c: [0, 0], r: 2.1 },
          { t: 'seg', a: [5.6, 0], b: [0.787, 1.947] },
          { t: 'seg', a: [5.6, 0], b: [0.787, -1.947] },
          { t: 'label', p: [3.194, 0.974], text: '4x + 3', dx: 4, dy: -8 },
          { t: 'label', p: [3.194, -0.974], text: '6x - 5', dx: 4, dy: 14 },
          { t: 'point', p: [0.787, 1.947], label: 'A', dx: -8, dy: -8 },
          { t: 'point', p: [0.787, -1.947], label: 'B', dx: -8, dy: 14 },
          { t: 'point', p: [5.6, 0], label: 'P', dx: 10, dy: 4 },
        ],
      },
      choices: ['$19$', '$4$', '$38$', '$16$'],
      answer: 0,
      solution:
        'Route one, let $x$ be the unknown in the labels. Equal tangents from one external point give the equation $4x + 3 = 6x - 5$. Subtracting $4x$ leaves $3 = 2x - 5$, so $2x = 8$ and $x = 4$. The question asks for a length, not for $x$, so substitute: $PA = 4(4) + 3 = 19$ ✓. Check a second, independent way, by naming the length itself: let $t = PA = PB$. Then $4x + 3 = t$ and $6x - 5 = t$. Multiply the first by $3$ and the second by $2$ so the $x$-terms match: $12x + 9 = 3t$ and $12x - 10 = 2t$. Subtracting the second from the first kills $x$ entirely and leaves $19 = t$, so $\\overline{PA}$ measures $19$ ✓. (The choice $4$ is REPORTING $x$ WHEN A LENGTH WAS ASKED FOR, the single most common slip in this section ✗; the choice $38$ is ADDING BOTH TANGENT LENGTHS, answering $PA + PB$ rather than $PA$ ✗; the choice $16$ is DROPPING THE CONSTANT, computing $4x$ and forgetting the $+3$ in the label ✗.)',
    },
  ],
  // s3 — the angles of a triangle given as multiples of one variable.
  [
    {
      q: 'The three angles of a triangle measure $x$, $3x$, and $5x$. What is the measure of the largest angle?',
      fig: {
        view: [-1.1, -1.1, 6.5, 3.9],
        elems: [
          { t: 'poly', pts: [[0, 0], [5.4, 0], [1.5, 2.8]], fill: false },
          { t: 'angle', at: [0, 0], from: [5.4, 0], to: [1.5, 2.8], r: 0.7, label: '5x' },
          { t: 'angle', at: [5.4, 0], from: [1.5, 2.8], to: [0, 0], r: 1, label: 'x' },
          { t: 'angle', at: [1.5, 2.8], from: [0, 0], to: [5.4, 0], r: 0.6, label: '3x' },
        ],
      },
      choices: ['$100^\\circ$', '$20^\\circ$', '$60^\\circ$', '$36^\\circ$'],
      answer: 0,
      solution:
        'Route one, let $x$ stand for the smallest angle, exactly as the labels do. The angle sum of a triangle is the equation the figure forces: $x + 3x + 5x = 180^\\circ$, so $9x = 180^\\circ$ and $x = 20^\\circ$. The largest angle carries the largest coefficient, so it measures $5x = 100^\\circ$ ✓. Check a second, independent way, by naming the largest angle itself: let $L$ be the largest. The labels say the three angles stand in the ratio $1 : 3 : 5$, so the other two are $\\frac{1}{5}L$ and $\\frac{3}{5}L$. The angle sum becomes $L + \\frac{1}{5}L + \\frac{3}{5}L = 180^\\circ$; multiplying through by $5$ gives $5L + L + 3L = 900^\\circ$, so $9L = 900^\\circ$ and $L = 100^\\circ$ ✓. (The choice $20^\\circ$ is REPORTING $x$ RATHER THAN THE ANGLE, which is only the smallest of the three ✗; the choice $60^\\circ$ is HANDING BACK THE MIDDLE ANGLE $3x$ when the largest was asked ✗; the choice $36^\\circ$ is DIVIDING BY THE LARGEST COEFFICIENT ALONE, computing $\\frac{180^\\circ}{5}$ instead of dividing by the total $9$ ✗.)',
    },
    {
      q: 'A triangle has angles measuring $x$, $4x$, and $7x$. How large is its largest angle?',
      fig: {
        view: [-1.1, -1.1, 6.9, 4.3],
        elems: [
          { t: 'poly', pts: [[0, 0], [5.8, 0], [4.3, 3.2]], fill: false },
          { t: 'angle', at: [0, 0], from: [5.8, 0], to: [4.3, 3.2], r: 1.1, label: 'x' },
          { t: 'angle', at: [5.8, 0], from: [4.3, 3.2], to: [0, 0], r: 0.75, label: '7x' },
          { t: 'angle', at: [4.3, 3.2], from: [0, 0], to: [5.8, 0], r: 0.6, label: '4x' },
        ],
      },
      choices: ['$15^\\circ$', '$60^\\circ$', '$105^\\circ$', '$45^\\circ$'],
      answer: 2,
      solution:
        'Route one, let $x$ be the smallest angle, the variable the labels already use. The angle sum forces $x + 4x + 7x = 180^\\circ$, so $12x = 180^\\circ$ and $x = 15^\\circ$. The largest angle is $7x = 105^\\circ$ ✓. Check a second, independent way, by naming the largest angle: let $L$ be the largest. The ratio $1 : 4 : 7$ makes the other two $\\frac{1}{7}L$ and $\\frac{4}{7}L$, so the angle sum reads $L + \\frac{1}{7}L + \\frac{4}{7}L = 180^\\circ$. Multiplying by $7$ gives $7L + L + 4L = 1260^\\circ$, so $12L = 1260^\\circ$ and $L = 105^\\circ$ ✓. (The choice $15^\\circ$ is REPORTING $x$ INSTEAD OF THE ANGLE ✗; the choice $60^\\circ$ is HANDING BACK THE MIDDLE ANGLE $4x$ ✗; the choice $45^\\circ$ is DIVIDING $180^\\circ$ BY A SINGLE COEFFICIENT, using the $4$ from the middle label instead of the total $12$ ✗.)',
    },
    {
      q: 'The angles of a triangle are in the ratio $4 : 5 : 9$. What is the measure of the smallest angle?',
      fig: {
        view: [-1.2, -1.2, 6.6, 3.8],
        elems: [
          { t: 'poly', pts: [[0, 0], [5.5, 0], [3.4, 2.6]], fill: false },
          { t: 'angle', at: [0, 0], from: [5.5, 0], to: [3.4, 2.6], r: 1.05, label: '?' },
          { t: 'angle', at: [5.5, 0], from: [3.4, 2.6], to: [0, 0], r: 0.75 },
          { t: 'angle', at: [3.4, 2.6], from: [0, 0], to: [5.5, 0], r: 0.6 },
        ],
      },
      choices: ['$10^\\circ$', '$40^\\circ$', '$90^\\circ$', '$45^\\circ$'],
      answer: 1,
      solution:
        'Route one, let $k$ be the size of one share of the ratio. Then the three angles are $4k$, $5k$, and $9k$, and the angle sum forces $4k + 5k + 9k = 180^\\circ$. That is $18k = 180^\\circ$, so $k = 10^\\circ$, and the smallest angle is $4k = 40^\\circ$ ✓. Check a second, independent way, by naming the smallest angle: let $m$ be the smallest. The ratio makes the other two $\\frac{5}{4}m$ and $\\frac{9}{4}m$, so $m + \\frac{5}{4}m + \\frac{9}{4}m = 180^\\circ$. Multiplying by $4$ gives $4m + 5m + 9m = 720^\\circ$, so $18m = 720^\\circ$ and $m = 40^\\circ$ ✓. (The choice $10^\\circ$ is REPORTING THE SHARE $k$ INSTEAD OF THE ANGLE, one substitution short of the answer ✗; the choice $90^\\circ$ is HANDING BACK THE LARGEST ANGLE when the smallest was asked ✗; the choice $45^\\circ$ is DIVIDING $180^\\circ$ BY THE RATIO NUMBER $4$, treating one share as though it were the whole triangle ✗.)',
    },
  ],
  // s4 — a rectangle pinned down by one relation between its sides.
  [
    {
      q: 'A rectangle has width $w$ and length $w + 5$, and its perimeter is $34$. What is its area?',
      fig: {
        view: [-1.2, -1.2, 10.2, 5.2],
        elems: [
          { t: 'poly', pts: [[0, 0], [9, 0], [9, 4], [0, 4]], fill: false },
          { t: 'label', p: [4.5, 0], text: 'w + 5', dx: 0, dy: 15 },
          { t: 'label', p: [9, 2], text: 'w', dx: 12, dy: 4 },
        ],
      },
      choices: ['$6$', '$36$', '$66$', '$17$'],
      answer: 2,
      solution:
        'Route one, let $w$ be the width, so the length is $w + 5$. The perimeter is the equation the figure forces: $2w + 2(w + 5) = 34$, which is $4w + 10 = 34$, so $4w = 24$ and $w = 6$. The length is $11$, and the area is $6 \\cdot 11 = 66$ ✓. Check a second, independent way, without ever finding a side. Let $s = w + \\ell$ be the sum of a width and a length and let $d = \\ell - w$ be their difference. Half the perimeter gives $s = 17$, and the labels give $d = 5$. Now use $(w + \\ell)^2 - (\\ell - w)^2 = 4w\\ell$: that is $289 - 25 = 264 = 4w\\ell$, so the area $w\\ell = 66$ ✓. (The choice $6$ is REPORTING THE WIDTH where the area was asked for, stopping at the variable instead of the quantity ✗; the choice $36$ is DROPPING THE $+5$, multiplying $6 \\cdot 6$ as though both sides were the width ✗; the choice $17$ is ADDING THE SIDES INSTEAD OF MULTIPLYING, which is half the perimeter, not an area ✗.)',
    },
    {
      q: 'The length of a rectangle is twice its width, and its perimeter is $36$. Find its area.',
      fig: {
        view: [-1.2, -1.2, 11.2, 4.8],
        elems: [
          { t: 'poly', pts: [[0, 0], [10, 0], [10, 3.6], [0, 3.6]], fill: false },
          { t: 'label', p: [5, 0], text: '2w', dx: 0, dy: 15 },
          { t: 'label', p: [10, 1.8], text: 'w', dx: 12, dy: 4 },
        ],
      },
      choices: ['$72$', '$36$', '$18$', '$81$'],
      answer: 0,
      solution:
        'Route one, let $w$ be the width. The length is then $2w$, and the perimeter equation is $2w + 2(2w) = 36$, that is $6w = 36$, so $w = 6$. The length is $12$, and the area is $6 \\cdot 12 = 72$ ✓. Check a second, independent way, by naming the length instead: let $\\ell$ be the length, so the width is $\\frac{\\ell}{2}$. The perimeter reads $2\\ell + 2 \\cdot \\frac{\\ell}{2} = 3\\ell = 36$, so $\\ell = 12$ and the width is $6$, giving an area of $72$ ✓. (The choice $36$ is DROPPING THE DOUBLING, squaring the width as though the rectangle were $6$ by $6$ ✗; the choice $18$ is ADDING THE SIDES INSTEAD OF MULTIPLYING, reporting half the perimeter ✗; the choice $81$ is TREATING THE RECTANGLE AS A SQUARE, dividing the perimeter into four equal sides of $9$ ✗.)',
    },
    {
      q: 'A rectangle is $3$ units longer than it is wide, and its area is $108$. What is its perimeter?',
      fig: {
        view: [-1.2, -1.2, 9.8, 6.2],
        elems: [
          { t: 'poly', pts: [[0, 0], [8.4, 0], [8.4, 5], [0, 5]], fill: false },
          { t: 'label', p: [4.2, 0], text: 'w + 3', dx: 0, dy: 15 },
          { t: 'label', p: [8.4, 2.5], text: 'w', dx: 12, dy: 4 },
          { t: 'label', p: [4.2, 2.5], text: 'Area = 108', dx: 0, dy: 4 },
        ],
      },
      choices: ['$21$', '$9$', '$36$', '$42$'],
      answer: 3,
      solution:
        'Route one, let $w$ be the width, so the length is $w + 3$. The area is the equation the figure forces: $w(w + 3) = 108$, that is $w^2 + 3w - 108 = 0$, which factors as $(w - 9)(w + 12) = 0$. A width is positive, so $w = 9$, the length is $12$, and the perimeter is $2(9 + 12) = 42$ ✓. Check a second, independent way, without solving for either side. Let $s = \\ell + w$, the quantity the perimeter is twice. The identity $(\\ell + w)^2 = (\\ell - w)^2 + 4\\ell w$ turns the two givens straight into $s$: the difference of the sides is $3$ and the product is $108$, so $s^2 = 9 + 4(108) = 441$ and $s = 21$. The perimeter is $2s = 42$ ✓. (The choice $21$ is REPORTING THE SEMIPERIMETER, the sum of one length and one width, where the full perimeter was asked for ✗; the choice $9$ is HANDING BACK THE WIDTH, the variable rather than the quantity ✗; the choice $36$ is FORGETTING THE LENGTH IS LONGER, taking the perimeter of the square built on the width ✗.)',
    },
  ],
  // s5 — an isosceles chain that passes one variable from triangle to triangle.
  [
    {
      q: 'In triangle $ABC$, the point $D$ lies on $\\overline{BC}$ with $AD = BD$ and $AC = DC$. If $\\angle B = 30^\\circ$, what is $\\angle C$?',
      fig: {
        view: [-0.9, -1, 9, 4.3],
        elems: [
          { t: 'poly', pts: [[0, 0], [8, 0], [6, 3.464]], fill: false },
          { t: 'seg', a: [6, 3.464], b: [4, 0] },
          { t: 'tick', a: [0, 0], b: [4, 0], n: 1 },
          { t: 'tick', a: [6, 3.464], b: [4, 0], n: 1 },
          { t: 'tick', a: [6, 3.464], b: [8, 0], n: 2 },
          { t: 'tick', a: [4, 0], b: [8, 0], n: 2 },
          { t: 'angle', at: [0, 0], from: [8, 0], to: [6, 3.464], r: 0.9, label: '30' },
          { t: 'angle', at: [8, 0], from: [6, 3.464], to: [0, 0], r: 0.85, label: '?' },
          { t: 'point', p: [0, 0], label: 'B', dx: -10, dy: 10 },
          { t: 'point', p: [4, 0], label: 'D', dx: 0, dy: 15 },
          { t: 'point', p: [8, 0], label: 'C', dx: 10, dy: 10 },
          { t: 'point', p: [6, 3.464], label: 'A', dx: 0, dy: -12 },
        ],
      },
      choices: ['$30^\\circ$', '$120^\\circ$', '$90^\\circ$', '$60^\\circ$'],
      answer: 3,
      solution:
        'Route one, let $x = \\angle B = 30^\\circ$ and pass it along the chain. The single tick marks say $AD = BD$, so triangle $ABD$ is isosceles and $\\angle BAD = x = 30^\\circ$. The angle $\\angle ADC$ is exterior to triangle $ABD$, so it equals the two remote interior angles added: $\\angle ADC = x + x = 60^\\circ$. The double ticks say $AC = DC$, making triangle $ADC$ isosceles with $\\angle DAC = \\angle ADC = 60^\\circ$, and its angle sum is the equation the figure forces: $60^\\circ + 60^\\circ + \\angle C = 180^\\circ$, so $\\angle C = 60^\\circ$ ✓. Check a second, independent way, by naming the far end of the chain instead. Let $y = \\angle C$. In the isosceles triangle $ADC$ the two equal angles are $\\angle DAC = \\angle ADC = \\frac{180^\\circ - y}{2} = 90^\\circ - \\frac{y}{2}$. Since $B$, $D$, $C$ lie on a line, $\\angle ADB = 180^\\circ - \\angle ADC = 90^\\circ + \\frac{y}{2}$, and the isosceles triangle $ABD$ then gives $\\angle B = \\frac{180^\\circ - \\angle ADB}{2} = 45^\\circ - \\frac{y}{4}$. The given $\\angle B = 30^\\circ$ makes that $45^\\circ - \\frac{y}{4} = 30^\\circ$, so $\\frac{y}{4} = 15^\\circ$ and $y = 60^\\circ$ ✓. (The choice $30^\\circ$ is ASSUMING THE WHOLE TRIANGLE IS ISOSCELES, copying $\\angle B$ across to $\\angle C$ though only the two marked pairs of segments are equal ✗; the choice $120^\\circ$ is FORGETTING THE EXTERIOR ANGLE DOUBLES, carrying $x$ rather than $2x$ into triangle $ADC$ ✗; the choice $90^\\circ$ is SUBTRACTING ONLY THREE COPIES OF $x$, solving $3x + \\angle C = 180^\\circ$ and losing one link of the chain ✗.)',
    },
    {
      q: 'Point $D$ lies on side $\\overline{BC}$ of triangle $ABC$, with $AD = BD$ and $AC = DC$. If $\\angle C = 44^\\circ$, find $\\angle B$.',
      fig: {
        view: [-1, -1.1, 10.4, 4.7],
        elems: [
          { t: 'poly', pts: [[0, 0], [9.341, 0], [5.498, 3.709]], fill: false },
          { t: 'seg', a: [5.498, 3.709], b: [4, 0] },
          { t: 'tick', a: [0, 0], b: [4, 0], n: 1 },
          { t: 'tick', a: [5.498, 3.709], b: [4, 0], n: 1 },
          { t: 'tick', a: [5.498, 3.709], b: [9.341, 0], n: 2 },
          { t: 'tick', a: [4, 0], b: [9.341, 0], n: 2 },
          { t: 'angle', at: [0, 0], from: [9.341, 0], to: [5.498, 3.709], r: 0.95, label: '?' },
          { t: 'angle', at: [9.341, 0], from: [5.498, 3.709], to: [0, 0], r: 0.9, label: '44' },
          { t: 'point', p: [0, 0], label: 'B', dx: -10, dy: 10 },
          { t: 'point', p: [4, 0], label: 'D', dx: 0, dy: 15 },
          { t: 'point', p: [9.341, 0], label: 'C', dx: 10, dy: 10 },
          { t: 'point', p: [5.498, 3.709], label: 'A', dx: 0, dy: -12 },
        ],
      },
      choices: ['$44^\\circ$', '$34^\\circ$', '$68^\\circ$', '$46^\\circ$'],
      answer: 1,
      solution:
        'Route one, let $x = \\angle B$, the angle the question wants. The single ticks give $AD = BD$, so $\\angle BAD = x$, and the exterior angle of triangle $ABD$ at $D$ is $\\angle ADC = 2x$. The double ticks give $AC = DC$, so $\\angle DAC = \\angle ADC = 2x$, and the angle sum of triangle $ADC$ is the equation the figure forces: $2x + 2x + 44^\\circ = 180^\\circ$. So $4x = 136^\\circ$ and $x = 34^\\circ$ ✓. Check a second, independent way, walking inward from $C$ with no variable at all. Triangle $ADC$ is isosceles with apex angle $44^\\circ$, so each of its base angles is $\\frac{180^\\circ - 44^\\circ}{2} = 68^\\circ$; in particular $\\angle ADC = 68^\\circ$. Because $B$, $D$, $C$ are collinear, $\\angle ADB = 180^\\circ - 68^\\circ = 112^\\circ$. Triangle $ABD$ is isosceles with that apex angle, so its base angles are $\\frac{180^\\circ - 112^\\circ}{2} = 34^\\circ$, and $\\angle B$ is one of them ✓. (The choice $44^\\circ$ is COPYING THE GIVEN ANGLE ACROSS, as though $\\angle B$ and $\\angle C$ had to match ✗; the choice $68^\\circ$ is STOPPING AT $\\angle ADC$, a link short of the angle asked for ✗; the choice $46^\\circ$ is SUBTRACTING FROM $90^\\circ$, treating the two angles as complementary when nothing in the figure says so ✗.)',
    },
    {
      q: 'In triangle $ABC$, $D$ is on $\\overline{BC}$ with $AD = BD$ and $AC = DC$. The angles at $B$ and at $C$ turn out to be equal. How large is $\\angle B$?',
      fig: {
        view: [-1.1, -1.1, 11.6, 5],
        elems: [
          { t: 'poly', pts: [[0, 0], [10.472, 0], [5.236, 3.804]], fill: false },
          { t: 'seg', a: [5.236, 3.804], b: [4, 0] },
          { t: 'tick', a: [0, 0], b: [4, 0], n: 1 },
          { t: 'tick', a: [5.236, 3.804], b: [4, 0], n: 1 },
          { t: 'tick', a: [5.236, 3.804], b: [10.472, 0], n: 2 },
          { t: 'tick', a: [4, 0], b: [10.472, 0], n: 2 },
          { t: 'angle', at: [0, 0], from: [10.472, 0], to: [5.236, 3.804], r: 1, label: '?' },
          { t: 'angle', at: [10.472, 0], from: [5.236, 3.804], to: [0, 0], r: 0.95, label: '?' },
          { t: 'point', p: [0, 0], label: 'B', dx: -10, dy: 10 },
          { t: 'point', p: [4, 0], label: 'D', dx: 0, dy: 15 },
          { t: 'point', p: [10.472, 0], label: 'C', dx: 10, dy: 10 },
          { t: 'point', p: [5.236, 3.804], label: 'A', dx: 0, dy: -12 },
        ],
      },
      choices: ['$36^\\circ$', '$45^\\circ$', '$60^\\circ$', '$30^\\circ$'],
      answer: 0,
      solution:
        'Route one, let $x = \\angle B$. The chain runs as always: $AD = BD$ gives $\\angle BAD = x$, the exterior angle gives $\\angle ADC = 2x$, and $AC = DC$ gives $\\angle DAC = 2x$. The angle sum of triangle $ADC$ then says $2x + 2x + \\angle C = 180^\\circ$, so $\\angle C = 180^\\circ - 4x$. The condition $\\angle B = \\angle C$ is the second equation: $x = 180^\\circ - 4x$, so $5x = 180^\\circ$ and $x = 36^\\circ$ ✓. Check a second, independent way, by naming the other end. Let $y = \\angle C$. Triangle $ADC$ is isosceles, so $\\angle ADC = 90^\\circ - \\frac{y}{2}$, which makes $\\angle ADB = 90^\\circ + \\frac{y}{2}$ along the straight line $BC$, and the isosceles triangle $ABD$ gives $\\angle B = \\frac{180^\\circ - \\angle ADB}{2} = 45^\\circ - \\frac{y}{4}$. Setting that equal to $y$ gives $45^\\circ = y + \\frac{y}{4} = \\frac{5y}{4}$, so $y = 36^\\circ$, and $\\angle B$ matches it ✓. (The choice $45^\\circ$ is LOSING ONE LINK OF THE CHAIN, solving $4x = 180^\\circ$ ✗; the choice $60^\\circ$ is ASSUMING TWO EQUAL ANGLES MAKE THE TRIANGLE EQUILATERAL, splitting $180^\\circ$ three ways though $\\angle A$ is far larger than the others here ✗; the choice $30^\\circ$ is COUNTING ONE ANGLE TWICE, adding $\\angle BAD$ into the sum for triangle $ADC$ to reach $6x = 180^\\circ$ ✗.)',
    },
  ],
  // s6 — tangent lengths from the vertices of a triangle to its incircle.
  [
    {
      q: 'A triangle $ABC$ has perimeter $36$, and its inscribed circle touches $\\overline{BC}$ at a point that cuts the side into a piece of length $5$ next to $B$ and a piece of length $7$ next to $C$. How long is $\\overline{AB}$?',
      fig: {
        view: [-1, -1.2, 13.2, 11.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [12, 0], [4, 10.247]], fill: false },
          { t: 'circle', c: [5, 3.416], r: 3.416 },
          { t: 'point', p: [5, 0], label: '', dx: 0, dy: 0 },
          { t: 'label', p: [2.5, 0], text: '5', dx: 0, dy: 15 },
          { t: 'label', p: [8.5, 0], text: '7', dx: 0, dy: 15 },
          { t: 'point', p: [0, 0], label: 'B', dx: -11, dy: 10 },
          { t: 'point', p: [12, 0], label: 'C', dx: 10, dy: 10 },
          { t: 'point', p: [4, 10.247], label: 'A', dx: 0, dy: -12 },
        ],
      },
      choices: ['$6$', '$11$', '$13$', '$18$'],
      answer: 1,
      solution:
        'Route one, let $t$ be the length of each tangent segment from $A$ to the circle. The two tangents drawn from a point are equal, so the tangents from $B$ are both $5$ and the tangents from $C$ are both $7$. Every side is a sum of two tangent lengths, so the perimeter is $2(5) + 2(7) + 2t = 36$, the equation the figure forces. That gives $24 + 2t = 36$, so $t = 6$, and $AB = 5 + t = 11$ ✓. Check a second, independent way, by naming the two unknown sides. Let $c = AB$ and $b = AC$, with $BC = 5 + 7 = 12$. The perimeter gives $b + c + 12 = 36$, so $b + c = 24$. The tangents from $A$ give a second equation: cutting off the tangent from $B$ leaves $c - 5$, and cutting off the tangent from $C$ leaves $b - 7$, and those are equal, so $b = c + 2$. Substituting, $c + 2 + c = 24$, so $c = 11$ ✓. (The choice $6$ is REPORTING THE TANGENT LENGTH $t$ instead of the side built from it ✗; the choice $13$ is ANSWERING FOR $AC$, the other side, which is $7 + 6$ ✗; the choice $18$ is HANDING BACK THE SEMIPERIMETER, half of $36$, where a side was asked for ✗.)',
    },
    {
      q: 'The inscribed circle of triangle $ABC$ touches $\\overline{BC}$ at a point splitting it into $8$ (next to $B$) and $9$ (next to $C$). The perimeter of the triangle is $44$. Find $AB$.',
      fig: {
        view: [-1.2, -1.3, 18.4, 11.8],
        elems: [
          { t: 'poly', pts: [[0, 0], [17, 0], [7.706, 10.47]], fill: false },
          { t: 'circle', c: [8, 4.045], r: 4.045 },
          { t: 'point', p: [8, 0], label: '', dx: 0, dy: 0 },
          { t: 'label', p: [4, 0], text: '8', dx: 0, dy: 15 },
          { t: 'label', p: [12.5, 0], text: '9', dx: 0, dy: 15 },
          { t: 'point', p: [0, 0], label: 'B', dx: -11, dy: 10 },
          { t: 'point', p: [17, 0], label: 'C', dx: 10, dy: 10 },
          { t: 'point', p: [7.706, 10.47], label: 'A', dx: 0, dy: -12 },
        ],
      },
      choices: ['$5$', '$14$', '$22$', '$13$'],
      answer: 3,
      solution:
        'Route one, let $t$ be the tangent length from $A$. Equal tangents from a point make the two tangents from $B$ both $8$ and the two from $C$ both $9$, so the perimeter equation the figure forces is $2(8) + 2(9) + 2t = 44$. That is $34 + 2t = 44$, so $t = 5$ and $AB = 8 + t = 13$ ✓. Check a second, independent way, by naming the sides. Let $c = AB$ and $b = AC$; the split side is $BC = 8 + 9 = 17$, so the perimeter gives $b + c = 44 - 17 = 27$. The tangents from $A$ give $c - 8 = b - 9$, that is $b = c + 1$. Substituting, $c + 1 + c = 27$, so $c = 13$ ✓. (The choice $5$ is REPORTING THE TANGENT LENGTH rather than the whole side ✗; the choice $14$ is ANSWERING FOR $AC$, which is $9 + 5$, instead of $AB$ ✗; the choice $22$ is USING THE SEMIPERIMETER AS A SIDE, half of $44$ ✗.)',
    },
    {
      q: 'Triangle $ABC$ has perimeter $40$. Its inscribed circle meets $\\overline{BC}$ at a point that divides the side into $5$ next to $B$ and $9$ next to $C$. What is the length of $\\overline{AC}$?',
      choices: ['$6$', '$11$', '$15$', '$20$'],
      answer: 2,
      solution:
        'Route one, let $t$ be the tangent length from $A$ to the inscribed circle. Two tangent segments drawn from one point are equal, so the two tangents from $B$ are both $5$ and the two from $C$ are both $9$. Every side is a sum of two tangent lengths, so the perimeter is the equation those tangencies force: $2(5) + 2(9) + 2t = 40$. That is $28 + 2t = 40$, so $t = 6$, and the side asked for is $AC = 9 + t = 15$ ✓. Check a second, independent way, by naming the two unknown sides instead of the tangent length. Let $b = AC$ and $c = AB$. The split side is $BC = 5 + 9 = 14$, so the perimeter gives $b + c = 40 - 14 = 26$. Cutting the tangent from $C$ off $b$ leaves $b - 9$, and cutting the tangent from $B$ off $c$ leaves $c - 5$; both remainders are tangents from $A$, so $b - 9 = c - 5$, that is $c = b - 4$. Substituting, $b + (b - 4) = 26$, so $2b = 30$ and $b = 15$ ✓. (The choice $6$ is REPORTING THE TANGENT LENGTH $t$ where a full side was wanted ✗; the choice $11$ is ANSWERING FOR $AB$, the side on the other end of the split, which is $5 + 6$ ✗; the choice $20$ is HANDING BACK THE SEMIPERIMETER, half of $40$, instead of a side ✗.)',
    },
  ],
  // s7 — opposite angles of a cyclic quadrilateral hand over the equation.
  [
    {
      q: 'Quadrilateral $ABCD$ is inscribed in a circle, with $\\angle A = 2x + 10^\\circ$ and $\\angle C = 3x$. Find $x$.',
      fig: {
        view: [-3.6, -3.6, 3.6, 3.6],
        elems: [
          { t: 'circle', c: [0, 0], r: 3.2 },
          { t: 'poly', pts: [[3.151, 0.556], [-0.556, 3.151], [-3.091, -0.828], [1.094, -3.007]], fill: false },
          { t: 'label', p: [2.269, 0.4], text: '2x + 10', dx: -26, dy: 4 },
          { t: 'label', p: [-2.2, -0.59], text: '3x', dx: 22, dy: 0 },
          { t: 'point', p: [3.151, 0.556], label: 'A', dx: 10, dy: -4 },
          { t: 'point', p: [-0.556, 3.151], label: 'B', dx: 0, dy: -12 },
          { t: 'point', p: [-3.091, -0.828], label: 'C', dx: -12, dy: -4 },
          { t: 'point', p: [1.094, -3.007], label: 'D', dx: 4, dy: 16 },
        ],
      },
      choices: ['$78^\\circ$', '$38^\\circ$', '$34^\\circ$', '$102^\\circ$'],
      answer: 2,
      solution:
        'Route one, let $x$ be the unknown the labels already use. Opposite angles of a quadrilateral inscribed in a circle are supplementary, and that is the equation the figure forces: $(2x + 10^\\circ) + 3x = 180^\\circ$. Collecting terms gives $5x + 10^\\circ = 180^\\circ$, so $5x = 170^\\circ$ and $x = 34^\\circ$ ✓. Check a second, independent way, by naming an angle instead of $x$. Let $c = \\angle C$. Then $\\angle A = 180^\\circ - c$ because the two are supplementary. The labels also tie them together: $c = 3x$ means $x = \\frac{c}{3}$, so $\\angle A = 2 \\cdot \\frac{c}{3} + 10^\\circ$. Setting the two expressions for $\\angle A$ equal gives $180^\\circ - c = \\frac{2c}{3} + 10^\\circ$; multiplying by $3$ gives $540^\\circ - 3c = 2c + 30^\\circ$, so $5c = 510^\\circ$ and $c = 102^\\circ$. Then $x = \\frac{102^\\circ}{3} = 34^\\circ$ ✓. (The choice $78^\\circ$ is REPORTING $\\angle A$ WHEN $x$ WAS ASKED FOR, one step past the question ✗; the choice $38^\\circ$ is ADDING THE $10^\\circ$ INSTEAD OF SUBTRACTING IT, solving $5x = 190^\\circ$ ✗; the choice $102^\\circ$ is REPORTING $\\angle C$, again an angle where the variable was wanted ✗.)',
    },
    {
      q: 'A quadrilateral $ABCD$ has all four vertices on a circle. If $\\angle B = 4x$ and $\\angle D = x + 30^\\circ$, what is $x$?',
      fig: {
        view: [-3.4, -3.4, 3.4, 3.4],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'poly', pts: [[2.598, 1.5], [-1.268, 2.719], [-2.819, -1.026], [1.5, -2.598]], fill: false },
          { t: 'label', p: [-0.888, 1.903], text: '4x', dx: 6, dy: 12 },
          { t: 'label', p: [1.05, -1.819], text: 'x + 30', dx: -6, dy: -10 },
          { t: 'point', p: [2.598, 1.5], label: 'A', dx: 10, dy: -4 },
          { t: 'point', p: [-1.268, 2.719], label: 'B', dx: -4, dy: -12 },
          { t: 'point', p: [-2.819, -1.026], label: 'C', dx: -12, dy: 0 },
          { t: 'point', p: [1.5, -2.598], label: 'D', dx: 8, dy: 14 },
        ],
      },
      choices: ['$30^\\circ$', '$120^\\circ$', '$42^\\circ$', '$60^\\circ$'],
      answer: 0,
      solution:
        'Route one, let $x$ be the variable in the labels. Angles $B$ and $D$ are opposite angles of a cyclic quadrilateral, so they are supplementary, and the figure forces $4x + (x + 30^\\circ) = 180^\\circ$. That is $5x + 30^\\circ = 180^\\circ$, so $5x = 150^\\circ$ and $x = 30^\\circ$ ✓. Check a second, independent way, by naming an angle. Let $d = \\angle D$, so $\\angle B = 180^\\circ - d$. The label $\\angle D = x + 30^\\circ$ says $x = d - 30^\\circ$, so $\\angle B = 4(d - 30^\\circ) = 4d - 120^\\circ$. Two expressions for $\\angle B$ give $180^\\circ - d = 4d - 120^\\circ$, so $5d = 300^\\circ$ and $d = 60^\\circ$. Then $x = 60^\\circ - 30^\\circ = 30^\\circ$ ✓. (The choice $120^\\circ$ is REPORTING $\\angle B$ RATHER THAN $x$ ✗; the choice $42^\\circ$ is ADDING THE $30^\\circ$ INSTEAD OF SUBTRACTING IT, solving $5x = 210^\\circ$ ✗; the choice $60^\\circ$ is REPORTING $\\angle D$, an angle where the variable was asked for ✗.)',
    },
    {
      q: 'Quadrilateral $ABCD$ is inscribed in a circle, and $\\angle A = 5x$ while $\\angle C = x$. How large is $\\angle A$?',
      fig: {
        view: [-3.5, -3.5, 3.5, 3.5],
        elems: [
          { t: 'circle', c: [0, 0], r: 3.1 },
          { t: 'poly', pts: [[1.778, 2.539], [-2.375, 1.993], [-2.685, -1.55], [2.375, -1.993]], fill: false },
          { t: 'label', p: [1.245, 1.777], text: '5x', dx: 4, dy: 14 },
          { t: 'label', p: [-1.88, -1.085], text: 'x', dx: 16, dy: -4 },
          { t: 'point', p: [1.778, 2.539], label: 'A', dx: 8, dy: -8 },
          { t: 'point', p: [-2.375, 1.993], label: 'B', dx: -12, dy: -4 },
          { t: 'point', p: [-2.685, -1.55], label: 'C', dx: -12, dy: 6 },
          { t: 'point', p: [2.375, -1.993], label: 'D', dx: 10, dy: 8 },
        ],
      },
      choices: ['$30^\\circ$', '$90^\\circ$', '$120^\\circ$', '$150^\\circ$'],
      answer: 3,
      solution:
        'Route one, let $x$ be the smaller angle, as the labels do. Opposite angles of a cyclic quadrilateral are supplementary, so the figure forces $5x + x = 180^\\circ$. That is $6x = 180^\\circ$, so $x = 30^\\circ$, and the question asks for the angle rather than the variable: $\\angle A = 5x = 150^\\circ$ ✓. Check a second, independent way, by naming the angle itself. Let $a = \\angle A$; being supplementary to $\\angle C$ means $\\angle C = 180^\\circ - a$. The labels say $\\angle A$ is five times $\\angle C$, so $a = 5(180^\\circ - a)$, that is $a = 900^\\circ - 5a$, so $6a = 900^\\circ$ and $a = 150^\\circ$ ✓. (The choice $30^\\circ$ is REPORTING $x$ INSTEAD OF THE ANGLE, which is the size of $\\angle C$, not $\\angle A$ ✗; the choice $90^\\circ$ is ASSUMING OPPOSITE ANGLES ARE EQUAL, splitting the $180^\\circ$ evenly the way a parallelogram would ✗; the choice $120^\\circ$ is USING THE DIFFERENCE OF THE LABELS, computing $4x$ rather than the $5x$ printed at $A$ ✗.)',
    },
  ],
  // s8 — a right triangle pinned by hypotenuse and perimeter: reach the
  // product of the legs without ever finding a leg.
  [
    {
      q: 'A right triangle has hypotenuse $53$ and perimeter $126$. What is its area?',
      fig: {
        view: [-1.2, -1.2, 10.2, 6.8],
        elems: [
          { t: 'poly', pts: [[0, 0], [9, 0], [0, 5.6]], fill: false },
          { t: 'right', at: [0, 0], from: [9, 0], to: [0, 5.6] },
          { t: 'label', p: [4.5, 2.8], text: '53', dx: 12, dy: -4 },
          { t: 'label', p: [0, 2.8], text: 'a', dx: -12, dy: 4 },
          { t: 'label', p: [4.5, 0], text: 'b', dx: 0, dy: 15 },
          { t: 'label', p: [2.6, 1.6], text: '?', dx: 0, dy: 4 },
        ],
      },
      choices: ['$73$', '$630$', '$1260$', '$2520$'],
      answer: 1,
      solution:
        'Route one, name the legs: let $a$ and $b$ be the two legs. The perimeter counts all three sides, so $a + b + 53 = 126$, that is $a + b = 73$, and the right angle in the figure forces $a^2 + b^2 = 53^2 = 2809$. The area needs the product $ab$, and the identity $(a + b)^2 = a^2 + 2ab + b^2$ delivers it without either leg: $73^2 = 5329 = 2809 + 2ab$, so $2ab = 5329 - 2809 = 2520$ and $ab = 1260$. The area is half of that product, $\\frac{1}{2}ab = 630$ ✓. Check a second, independent way, by hunting down the legs after all. Substituting $b = 73 - a$ into $a^2 + b^2 = 2809$ gives $a^2 + (73 - a)^2 = 2809$, that is $2a^2 - 146a + 5329 = 2809$, so $a^2 - 73a + 1260 = 0$. Its discriminant is $73^2 - 4 \\cdot 1260 = 5329 - 5040 = 289 = 17^2$, so $a = \\frac{73 \\pm 17}{2}$, giving legs $45$ and $28$. Those legs do sit on the hypotenuse the problem named, since $28^2 + 45^2 = 784 + 2025 = 2809 = 53^2$, and the area is $\\frac{1}{2} \\cdot 28 \\cdot 45 = 630$ ✓. (The choice $73$ is REPORTING THE SUM OF THE LEGS, the first line of the work rather than the area ✗; the choice $1260$ is DROPPING THE ONE HALF, handing back the product $ab$ as though it were the area ✗; the choice $2520$ is HANDING BACK $2ab$, the difference $(a + b)^2 - (a^2 + b^2)$, without halving it even once ✗.)',
    },
    {
      q: 'The hypotenuse of a right triangle is $29$ and its perimeter is $70$. Find the area of the triangle.',
      fig: {
        view: [-1.2, -1.2, 9.6, 9.2],
        elems: [
          { t: 'poly', pts: [[0, 0], [8.4, 0], [0, 8]], fill: false },
          { t: 'right', at: [0, 0], from: [8.4, 0], to: [0, 8] },
          { t: 'label', p: [4.2, 4], text: '29', dx: 12, dy: -4 },
          { t: 'label', p: [0, 4], text: 'a', dx: -12, dy: 4 },
          { t: 'label', p: [4.2, 0], text: 'b', dx: 0, dy: 15 },
        ],
      },
      choices: ['$41$', '$420$', '$210$', '$21$'],
      answer: 2,
      solution:
        'Route one, let $a$ and $b$ be the legs. The perimeter gives $a + b = 70 - 29 = 41$, and the right angle gives $a^2 + b^2 = 29^2 = 841$. Square the first equation and use $(a + b)^2 = a^2 + 2ab + b^2$: $41^2 = 1681 = 841 + 2ab$, so $2ab = 840$ and $ab = 420$. That product is twice the area, so the area is $\\frac{1}{2}ab = 210$ ✓. Check a second, independent way, by solving for the legs. Putting $b = 41 - a$ into $a^2 + b^2 = 841$ gives $2a^2 - 82a + 1681 = 841$, so $a^2 - 41a + 420 = 0$, which factors as $(a - 20)(a - 21) = 0$. The legs are $20$ and $21$, and the area is $\\frac{1}{2} \\cdot 20 \\cdot 21 = 210$ ✓. (The choice $41$ is REPORTING THE SUM OF THE LEGS, the first line of the work rather than the area ✗; the choice $420$ is DROPPING THE $\\frac{1}{2}$, handing back the product $ab$ as though it were the area ✗; the choice $21$ is REPORTING A LEG where the area was wanted ✗.)',
    },
    {
      q: 'A right triangle has hypotenuse $20$ and area $96$. What is its perimeter?',
      fig: {
        view: [-1.2, -1.2, 9, 6.6],
        elems: [
          { t: 'poly', pts: [[0, 0], [7.5, 0], [0, 5.4]], fill: false },
          { t: 'right', at: [0, 0], from: [7.5, 0], to: [0, 5.4] },
          { t: 'label', p: [3.75, 2.7], text: '20', dx: 14, dy: 0 },
          { t: 'label', p: [0, 2.7], text: 'a', dx: -12, dy: 4 },
          { t: 'label', p: [3.75, 0], text: 'b', dx: 0, dy: 15 },
          { t: 'label', p: [2.1, 1.5], text: 'Area = 96', dx: 0, dy: 4 },
        ],
      },
      choices: ['$28$', '$48$', '$56$', '$36$'],
      answer: 1,
      solution:
        'Route one, let $a$ and $b$ be the legs. The area gives $\\frac{1}{2}ab = 96$, so $ab = 192$, and the right angle gives $a^2 + b^2 = 20^2 = 400$. The perimeter needs $a + b$, and the identity runs in this direction just as well: $(a + b)^2 = a^2 + b^2 + 2ab = 400 + 384 = 784$, so $a + b = 28$. Adding the hypotenuse, the perimeter is $28 + 20 = 48$ ✓. Check a second, independent way, by finding the legs. From $ab = 192$ we get $b = \\frac{192}{a}$, and substituting into $a^2 + b^2 = 400$ gives $a^4 - 400a^2 + 36864 = 0$. Treating $a^2$ as the unknown, $a^2 = \\frac{400 \\pm 112}{2}$, so $a^2 = 256$ or $a^2 = 144$; the legs are $16$ and $12$. The perimeter is $12 + 16 + 20 = 48$ ✓. (The choice $28$ is FORGETTING THE HYPOTENUSE, reporting only the sum of the two legs ✗; the choice $56$ is DOUBLING THE SUM OF THE LEGS, treating $a + b$ as though it were a semiperimeter of the whole triangle ✗; the choice $36$ is LEAVING OUT A LEG, adding the hypotenuse to just one of them ✗.)',
    },
  ],
  // s9 — a ladder of four equal segments, where each link adds one more x.
  [
    {
      q: 'In the figure, $B$ and $D$ lie on one ray from $A$ and $C$ and $E$ lie on the other, with $AB = BC = CD = DE$. If $\\angle DEC = 78^\\circ$, find $\\angle A$.',
      fig: {
        view: [-0.6, -0.9, 7.0, 3.4],
        elems: [
          { t: 'seg', a: [0, 0], b: [6.6, 0] },
          { t: 'seg', a: [0, 0], b: [5.662, 2.762] },
          { t: 'seg', a: [2.4, 0], b: [3.878, 1.891] },
          { t: 'seg', a: [3.878, 1.891], b: [5.355, 0] },
          { t: 'seg', a: [5.355, 0], b: [4.775, 2.329] },
          { t: 'tick', a: [0, 0], b: [2.4, 0], n: 1 },
          { t: 'tick', a: [2.4, 0], b: [3.878, 1.891], n: 1 },
          { t: 'tick', a: [3.878, 1.891], b: [5.355, 0], n: 1 },
          { t: 'tick', a: [5.355, 0], b: [4.775, 2.329], n: 1 },
          { t: 'angle', at: [0, 0], from: [6.6, 0], to: [5.662, 2.762], r: 0.95, label: '?' },
          { t: 'angle', at: [4.775, 2.329], from: [5.355, 0], to: [3.878, 1.891], r: 0.45 },
          { t: 'point', p: [0, 0], label: 'A', dx: -11, dy: 8 },
          { t: 'point', p: [2.4, 0], label: 'B', dx: 0, dy: 15 },
          { t: 'point', p: [3.878, 1.891], label: 'C', dx: -6, dy: -10 },
          { t: 'point', p: [5.355, 0], label: 'D', dx: 4, dy: 15 },
          { t: 'point', p: [4.775, 2.329], label: 'E', dx: 8, dy: -10 },
        ],
      },
      choices: ['$39^\\circ$', '$26^\\circ$', '$24^\\circ$', '$13^\\circ$'],
      answer: 1,
      solution:
        'Route one, let $x = \\angle A$ and let the equal segments carry it up the ladder. $AB = BC$ makes triangle $ABC$ isosceles, so $\\angle BCA = x$, and the exterior angle of that triangle at $B$ is $\\angle CBD = x + x = 2x$. Next $BC = CD$ makes triangle $BCD$ isosceles, so $\\angle BDC = \\angle CBD = 2x$. Now look at the exterior angle of triangle $ACD$ at $C$: it equals the two remote interior angles, $\\angle A + \\angle ADC = x + 2x$, so $\\angle DCE = 3x$. Finally $CD = DE$ makes triangle $CDE$ isosceles, so $\\angle DEC = \\angle DCE = 3x$. The equation the figure forces is $3x = 78^\\circ$, so $x = 26^\\circ$ ✓. Check a second, independent way, by counting along the straight line at $C$ instead of using exterior angles. The points $A$, $C$, $E$ are collinear, so $\\angle ACB + \\angle BCD + \\angle DCE = 180^\\circ$. With $\\angle A = x$ the isosceles triangle $ABC$ gives $\\angle ACB = x$, and its angle sum leaves $\\angle ABC = 180^\\circ - 2x$, so the angle beside it on line $AD$ is $\\angle CBD = 2x$. Triangle $BCD$ is isosceles with base angles $\\angle CBD = \\angle CDB = 2x$, so its apex gives $\\angle BCD = 180^\\circ - 4x$. Substituting, $x + (180^\\circ - 4x) + \\angle DCE = 180^\\circ$, so $\\angle DCE = 3x$, and the isosceles triangle $CDE$ copies that onto $\\angle DEC$. Then $\\angle A = \\frac{78^\\circ}{3} = 26^\\circ$ ✓. The top triangle leaves room for that answer: its apex is $\\angle CDE = 180^\\circ - 2(78^\\circ) = 24^\\circ$. (The choice $39^\\circ$ is STOPPING AT THE SECOND LINK, halving instead of thirding as though $\\angle DEC$ were $2x$ ✗; the choice $24^\\circ$ is REPORTING THE APEX $\\angle CDE$ of the last triangle rather than $\\angle A$ ✗; the choice $13^\\circ$ is DOUBLING AT EVERY STEP, reading the top angle as $6x$ ✗.)',
    },
    {
      q: 'Points $B$ and $D$ sit on one ray from $A$, and $C$ and $E$ sit on the other, with $AB = BC = CD = DE$. Given that $\\angle DEC = 51^\\circ$, how large is $\\angle A$?',
      fig: {
        view: [-0.6, -0.9, 6.8, 3.1],
        elems: [
          { t: 'seg', a: [0, 0], b: [6.4, 0] },
          { t: 'seg', a: [0, 0], b: [5.033, 2.455] },
          { t: 'seg', a: [2.2, 0], b: [3.554, 1.734] },
          { t: 'seg', a: [3.554, 1.734], b: [4.909, 0] },
          { t: 'seg', a: [4.909, 0], b: [4.377, 2.135] },
          { t: 'tick', a: [0, 0], b: [2.2, 0], n: 1 },
          { t: 'tick', a: [2.2, 0], b: [3.554, 1.734], n: 1 },
          { t: 'tick', a: [3.554, 1.734], b: [4.909, 0], n: 1 },
          { t: 'tick', a: [4.909, 0], b: [4.377, 2.135], n: 1 },
          { t: 'angle', at: [0, 0], from: [6.4, 0], to: [5.033, 2.455], r: 0.9, label: '?' },
          { t: 'angle', at: [4.377, 2.135], from: [4.909, 0], to: [3.554, 1.734], r: 0.4 },
          { t: 'point', p: [0, 0], label: 'A', dx: -11, dy: 8 },
          { t: 'point', p: [2.2, 0], label: 'B', dx: 0, dy: 15 },
          { t: 'point', p: [3.554, 1.734], label: 'C', dx: -8, dy: -8 },
          { t: 'point', p: [4.909, 0], label: 'D', dx: 6, dy: 15 },
          { t: 'point', p: [4.377, 2.135], label: 'E', dx: 8, dy: -8 },
        ],
      },
      choices: ['$34^\\circ$', '$51^\\circ$', '$78^\\circ$', '$17^\\circ$'],
      answer: 3,
      solution:
        'Route one, let $x = \\angle A$. The equal segments pass it along: $AB = BC$ gives $\\angle BCA = x$, so the exterior angle $\\angle CBD = 2x$; $BC = CD$ gives $\\angle BDC = 2x$; the exterior angle of triangle $ACD$ at $C$ is $\\angle A + \\angle ADC = 3x$, so $\\angle DCE = 3x$; and $CD = DE$ copies that across to $\\angle DEC = 3x$. The equation is $3x = 51^\\circ$, so $x = 17^\\circ$ ✓. Check a second, independent way, by bookkeeping the three angles that meet at $C$ on the straight line $AE$. Call $\\angle A = x$ again. Triangle $ABC$ is isosceles, so $\\angle ACB = x$, and its angle sum leaves $\\angle ABC = 180^\\circ - 2x$; the angle next to it on line $AD$ is therefore $\\angle CBD = 2x$. Triangle $BCD$ is isosceles with base angles $\\angle CBD = \\angle CDB = 2x$, so its apex angle is $\\angle BCD = 180^\\circ - 4x$. Since $A$, $C$, $E$ lie on one line, $\\angle ACB + \\angle BCD + \\angle DCE = 180^\\circ$, which gives $x + (180^\\circ - 4x) + \\angle DCE = 180^\\circ$, so $\\angle DCE = 3x$. The isosceles triangle $CDE$ hands that value to $\\angle DEC$, so $3x = 51^\\circ$ and $\\angle A = 17^\\circ$ ✓. (The choice $34^\\circ$ is REPORTING $2x$, the angle one link short of the top ✗; the choice $51^\\circ$ is COPYING THE GIVEN ANGLE STRAIGHT ONTO $\\angle A$, as though the two ends of the chain matched ✗; the choice $78^\\circ$ is REPORTING $\\angle CDE$, the third angle of the last triangle, rather than $\\angle A$ ✗.)',
    },
    {
      q: 'In the figure $AB = BC = CD = DE$, with $B$ and $D$ on one ray from $A$ and $C$ and $E$ on the other. If $\\angle A = 19^\\circ$, find $\\angle DEC$.',
      fig: {
        view: [-0.6, -0.9, 8.2, 3.4],
        elems: [
          { t: 'seg', a: [0, 0], b: [7.6, 0] },
          { t: 'seg', a: [0, 0], b: [7.469, 2.572] },
          { t: 'seg', a: [2.4, 0], b: [4.291, 1.478] },
          { t: 'seg', a: [4.291, 1.478], b: [6.182, 0] },
          { t: 'seg', a: [6.182, 0], b: [6.763, 2.329] },
          { t: 'tick', a: [0, 0], b: [2.4, 0], n: 1 },
          { t: 'tick', a: [2.4, 0], b: [4.291, 1.478], n: 1 },
          { t: 'tick', a: [4.291, 1.478], b: [6.182, 0], n: 1 },
          { t: 'tick', a: [6.182, 0], b: [6.763, 2.329], n: 1 },
          { t: 'angle', at: [0, 0], from: [7.6, 0], to: [7.469, 2.572], r: 1.1, label: '19' },
          { t: 'angle', at: [6.763, 2.329], from: [6.182, 0], to: [4.291, 1.478], r: 0.5, label: '?' },
          { t: 'point', p: [0, 0], label: 'A', dx: -11, dy: 8 },
          { t: 'point', p: [2.4, 0], label: 'B', dx: 0, dy: 15 },
          { t: 'point', p: [4.291, 1.478], label: 'C', dx: -6, dy: -10 },
          { t: 'point', p: [6.182, 0], label: 'D', dx: 4, dy: 15 },
          { t: 'point', p: [6.763, 2.329], label: 'E', dx: 8, dy: -8 },
        ],
      },
      choices: ['$38^\\circ$', '$76^\\circ$', '$57^\\circ$', '$66^\\circ$'],
      answer: 2,
      solution:
        'Route one, let $x = \\angle A = 19^\\circ$ and climb the ladder. $AB = BC$ makes $\\angle BCA = x$, so the exterior angle of triangle $ABC$ at $B$ is $\\angle CBD = 2x$. Then $BC = CD$ makes triangle $BCD$ isosceles, so $\\angle BDC = 2x$. The exterior angle of triangle $ACD$ at $C$ is the sum of the remote interior angles $\\angle A + \\angle ADC = x + 2x$, so $\\angle DCE = 3x$. Finally $CD = DE$ makes triangle $CDE$ isosceles, so $\\angle DEC = \\angle DCE = 3x = 3(19^\\circ) = 57^\\circ$ ✓. Check a second, independent way, using the straight line through $A$, $C$, $E$. Triangle $ABC$ is isosceles, so its angle sum leaves $\\angle ABC = 180^\\circ - 2(19^\\circ) = 142^\\circ$, and the angle beside it on line $AD$ is $\\angle CBD = 38^\\circ$. Triangle $BCD$ is isosceles with base angles $\\angle CBD = \\angle CDB = 38^\\circ$, so its apex angle is $\\angle BCD = 180^\\circ - 76^\\circ = 104^\\circ$. At $C$ the three angles $\\angle ACB$, $\\angle BCD$, and $\\angle DCE$ fill the straight line, and $\\angle ACB = 19^\\circ$ because triangle $ABC$ is isosceles, so $\\angle DCE = 180^\\circ - 19^\\circ - 104^\\circ = 57^\\circ$. Triangle $CDE$ is isosceles with $CD = DE$, so $\\angle DEC$ matches $\\angle DCE$ at $57^\\circ$ ✓. (The choice $38^\\circ$ is STOPPING AT $2x$, one link short of the top of the ladder ✗; the choice $76^\\circ$ is ADDING ONE LINK TOO MANY, reading the top angle as $4x$ because there are four equal segments ✗; the choice $66^\\circ$ is REPORTING $\\angle CDE$, the apex of the last triangle, instead of the base angle asked for ✗.)',
    },
  ],
  // s10 — a rectangle pinned by diagonal and area: the same identity as s8,
  // run in the other direction.
  [
    {
      q: 'A rectangle has a diagonal of length $25$ and area $168$. What is its perimeter?',
      fig: {
        view: [-1.2, -1.2, 10.5, 6.7],
        elems: [
          { t: 'poly', pts: [[0, 0], [9, 0], [9, 5.5], [0, 5.5]], fill: false },
          { t: 'seg', a: [0, 0], b: [9, 5.5] },
          { t: 'right', at: [9, 0], from: [0, 0], to: [9, 5.5] },
          { t: 'label', p: [4.5, 2.75], text: '25', dx: 4, dy: -8 },
          { t: 'label', p: [4.5, 4.3], text: 'Area = 168', dx: 0, dy: 4 },
          { t: 'label', p: [4.5, 0], text: 'l', dx: 0, dy: 15 },
          { t: 'label', p: [9, 2.75], text: 'w', dx: 12, dy: 4 },
        ],
      },
      choices: ['$31$', '$50$', '$24$', '$62$'],
      answer: 3,
      solution:
        'Route one, name the sides: let $\\ell$ and $w$ be the length and width. The diagonal cuts the rectangle into right triangles, so the figure forces $\\ell^2 + w^2 = 25^2 = 625$, and the area gives $\\ell w = 168$. The perimeter needs $\\ell + w$, and the identity $(\\ell + w)^2 = \\ell^2 + 2\\ell w + w^2$ produces it with no side-hunting: $(\\ell + w)^2 = 625 + 2(168) = 961$, so $\\ell + w = 31$ and the perimeter is $2(31) = 62$ ✓. Check a second, independent way, by digging out the sides. From $\\ell w = 168$ we get $w = \\frac{168}{\\ell}$, and $\\ell^2 + w^2 = 625$ becomes $\\ell^4 - 625\\ell^2 + 28224 = 0$. Treating $\\ell^2$ as the unknown, $\\ell^2 = \\frac{625 \\pm 527}{2}$, which is $576$ or $49$, so the sides are $24$ and $7$. The perimeter is $2(24 + 7) = 62$ ✓. (The choice $31$ is FORGETTING TO DOUBLE, reporting the sum of one length and one width where the full perimeter was asked ✗; the choice $50$ is DOUBLING THE DIAGONAL, as though two diagonals went around the outside ✗; the choice $24$ is REPORTING A SIDE instead of the perimeter ✗.)',
    },
    {
      q: 'The diagonal of a rectangle measures $15$ and its area is $108$. Find its perimeter.',
      fig: {
        view: [-1.2, -1.2, 9.4, 6.2],
        elems: [
          { t: 'poly', pts: [[0, 0], [8, 0], [8, 5], [0, 5]], fill: false },
          { t: 'seg', a: [0, 0], b: [8, 5] },
          { t: 'right', at: [8, 0], from: [0, 0], to: [8, 5] },
          { t: 'label', p: [4, 2.5], text: '15', dx: 4, dy: -8 },
          { t: 'label', p: [4, 3.9], text: 'Area = 108', dx: 0, dy: 4 },
          { t: 'label', p: [4, 0], text: 'l', dx: 0, dy: 15 },
          { t: 'label', p: [8, 2.5], text: 'w', dx: 12, dy: 4 },
        ],
      },
      choices: ['$21$', '$42$', '$30$', '$12$'],
      answer: 1,
      solution:
        'Route one, let $\\ell$ and $w$ be the sides. The diagonal gives $\\ell^2 + w^2 = 15^2 = 225$ and the area gives $\\ell w = 108$. The identity $(\\ell + w)^2 = \\ell^2 + 2\\ell w + w^2$ converts those two facts straight into the sum: $(\\ell + w)^2 = 225 + 216 = 441$, so $\\ell + w = 21$ and the perimeter is $2(21) = 42$ ✓. Check a second, independent way, by solving for the sides. With $w = \\frac{108}{\\ell}$, the equation $\\ell^2 + w^2 = 225$ becomes $\\ell^4 - 225\\ell^2 + 11664 = 0$, so $\\ell^2 = \\frac{225 \\pm 63}{2}$, which is $144$ or $81$. The sides are $12$ and $9$, and the perimeter is $2(12 + 9) = 42$ ✓. (The choice $21$ is FORGETTING TO DOUBLE, handing back $\\ell + w$ as though it were the perimeter ✗; the choice $30$ is DOUBLING THE DIAGONAL rather than the sum of two sides ✗; the choice $12$ is REPORTING A SIDE where the perimeter was asked for ✗.)',
    },
    {
      q: 'A rectangle has perimeter $34$ and a diagonal of length $13$. What is its area?',
      fig: {
        view: [-1.2, -1.2, 10, 5.8],
        elems: [
          { t: 'poly', pts: [[0, 0], [8.6, 0], [8.6, 4.6], [0, 4.6]], fill: false },
          { t: 'seg', a: [0, 0], b: [8.6, 4.6] },
          { t: 'right', at: [8.6, 0], from: [0, 0], to: [8.6, 4.6] },
          { t: 'label', p: [4.3, 2.3], text: '13', dx: 4, dy: -8 },
          { t: 'label', p: [4.3, 3.6], text: 'Perimeter = 34', dx: 0, dy: 4 },
          { t: 'label', p: [4.3, 0], text: 'l', dx: 0, dy: 15 },
          { t: 'label', p: [8.6, 2.3], text: 'w', dx: 12, dy: 4 },
        ],
      },
      choices: ['$60$', '$17$', '$120$', '$30$'],
      answer: 0,
      solution:
        'Route one, let $\\ell$ and $w$ be the sides. Half the perimeter is one length plus one width, so $\\ell + w = 17$, and the diagonal forces $\\ell^2 + w^2 = 13^2 = 169$. The area is the product $\\ell w$, and squaring the first equation reaches it directly: $(\\ell + w)^2 = \\ell^2 + 2\\ell w + w^2$ gives $289 = 169 + 2\\ell w$, so $2\\ell w = 120$ and the area is $\\ell w = 60$ ✓. Check a second, independent way, by finding the sides. Substituting $w = 17 - \\ell$ into $\\ell^2 + w^2 = 169$ gives $2\\ell^2 - 34\\ell + 289 = 169$, so $\\ell^2 - 17\\ell + 60 = 0$, which factors as $(\\ell - 5)(\\ell - 12) = 0$. The sides are $12$ and $5$, and the area is $12 \\cdot 5 = 60$ ✓. (The choice $17$ is REPORTING THE SEMIPERIMETER, the sum of two sides rather than their product ✗; the choice $120$ is STOPPING AT $2\\ell w$, one halving short of the area ✗; the choice $30$ is USING THE TRIANGLE AREA FORMULA, taking half the product as though the rectangle were one of the two triangles the diagonal makes ✗.)',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 19,
  sections: { '19.2': s192 },
}
