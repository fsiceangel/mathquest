// Introduction to Geometry chapter 2 — variations for section 2.4
// (Parallel Lines). All problems, figures, and solutions are original
// MathQuest content.
//
// House rules for this file:
//  - Every angle was worked twice: once by naming the pair and applying its
//    rule, and once by a genuinely different route — a linear-pair-and-vertical
//    chain around the figure, a slide of one crossing along the transversal,
//    the two-families count ("every one of the eight angles is x or 180 - x"),
//    or substituting the candidate back into both expressions. The two routes
//    had to agree before a key was written down.
//  - Each slot keeps the shape of its base answer: a find-the-angle item stays
//    a find-the-angle item, an algebra item stays an algebra item, a ratio item
//    stays a ratio item, and the vocabulary item stays vocabulary.
//  - Every figure is coordinate-exact. The two (or three) parallel lines are
//    drawn as horizontal segments at different heights, so they share the
//    direction vector [1, 0] exactly. Each transversal is a single straight
//    segment through the point (cx, 0) with direction [cos t, sin t]; every
//    crossing point was found by solving for the intersection with y = the
//    line’s height and rounding to 2 decimals, so the drawn angle agrees with
//    its printed label.
//  - Figure labels are plain text: the lines are drawn as the plain letters
//    "l" and "m", and angle labels carry no LaTeX.
//  - Each distractor is one named mistake, named at the end of the solution in
//    CAPS. The traps running through this section are: THE SAME-SIDE MIX-UP,
//    THE EQUAL TRAP, THE COMPLEMENT MIX-UP, READING THE REFLEX ANGLE, DOUBLING
//    THE ANGLE, HALVING THE ANGLE, ASSUMING THE TRANSVERSAL IS PERPENDICULAR,
//    USING 90 INSTEAD OF 180, ANSWERING x INSTEAD OF THE ANGLE, ANSWERING k
//    INSTEAD OF THE ANGLE, MAKING CORRESPONDING ANGLES SUPPLEMENTARY,
//    SHARING 90 INSTEAD OF 180, ANSWERING THE SMALLER ANGLE, STOPPING AT THE
//    CORRESPONDING ANGLE, and COMPLEMENTING BEFORE SUPPLEMENTING.
//  - No two choices inside an item name the same value.

const s24 = [
  // s1 — corresponding angles: the answer is the given angle, unchanged.
  [
    {
      q: 'Lines $\\ell$ and $m$ are parallel, and the marked angle at $P$ is $68^\\circ$. What is the corresponding angle marked at $Q$?',
      fig: {
        view: [-3.4, -1.5, 3.6, 3.4],
        elems: [
          { t: 'seg', a: [-3, 0], b: [3, 0] },
          { t: 'seg', a: [-3, 2], b: [3, 2] },
          { t: 'seg', a: [-0.42, -1.05], b: [1.17, 2.9] },
          { t: 'point', p: [0, 0], label: 'P', dx: 14, dy: 10 },
          { t: 'point', p: [0.81, 2], label: 'Q', dx: 16, dy: 8 },
          { t: 'label', p: [-2.6, 0.3], text: 'm' },
          { t: 'label', p: [-2.6, 2.3], text: 'l' },
          { t: 'angle', at: [0, 0], from: [3, 0], to: [1.17, 2.9], r: 0.7, label: '68' },
          { t: 'angle', at: [0.81, 2], from: [3, 2], to: [1.17, 2.9], r: 0.7, label: '?' },
        ],
      },
      choices: ['$112^\\circ$', '$22^\\circ$', '$68^\\circ$', '$136^\\circ$'],
      answer: 2,
      solution:
        'Both marked angles open upward and to the right of the transversal, one at each crossing — same position, so they are corresponding angles, and between parallel lines corresponding angles are equal: $68^\\circ$ ✓. Check a second, independent way by sliding instead of naming. Push the whole lower crossing straight up along the transversal until $P$ lands on $Q$. Line $m$ slides onto line $\\ell$ because parallel lines point the same way, and the transversal slides along itself because it is one straight line — so the picture at $P$ lands exactly on the picture at $Q$, and the marked angle carries its $68^\\circ$ with it ✓. (The choice $112^\\circ$ is THE SAME-SIDE MIX-UP, using $180^\\circ - 68^\\circ$ where the pair is equal, not supplementary ✗; $22^\\circ$ is THE COMPLEMENT MIX-UP, subtracting from $90^\\circ$ ✗; $136^\\circ$ is DOUBLING THE ANGLE ✗.)',
    },
    {
      q: 'Lines $\\ell$ and $m$ are parallel. The marked angle at $P$ measures $112^\\circ$. Find the corresponding angle marked at $Q$.',
      fig: {
        view: [-3.4, -1.5, 3.6, 3.4],
        elems: [
          { t: 'seg', a: [-3, 0], b: [3, 0] },
          { t: 'seg', a: [-3, 2], b: [3, 2] },
          { t: 'seg', a: [0.42, -1.05], b: [-1.17, 2.9] },
          { t: 'point', p: [0, 0], label: 'P', dx: 12, dy: 12 },
          { t: 'point', p: [-0.81, 2], label: 'Q', dx: 14, dy: 10 },
          { t: 'label', p: [-2.6, 0.3], text: 'm' },
          { t: 'label', p: [-2.6, 2.3], text: 'l' },
          { t: 'angle', at: [0, 0], from: [3, 0], to: [-1.17, 2.9], r: 0.6, label: '112' },
          { t: 'angle', at: [-0.81, 2], from: [3, 2], to: [-1.17, 2.9], r: 0.6, label: '?' },
        ],
      },
      choices: ['$112^\\circ$', '$68^\\circ$', '$248^\\circ$', '$56^\\circ$'],
      answer: 0,
      solution:
        'The two marked angles sit in matching spots — each is the angle you sweep out turning from the rightward part of its own line up to the transversal — so they are corresponding angles, which are equal between parallel lines: $112^\\circ$ ✓. Check a second, independent way with the two-families count. Every one of the eight angles here is either $112^\\circ$ or $180^\\circ - 112^\\circ = 68^\\circ$, and the two families alternate as you walk around a crossing. The marked angle at $P$ is obtuse, and the marked angle at $Q$ opens the same wide way, so it belongs to the same family ✓ — the $112^\\circ$ one. (The choice $68^\\circ$ is THE SAME-SIDE MIX-UP ✗; $248^\\circ$ is READING THE REFLEX ANGLE, the leftover $360^\\circ - 112^\\circ$ going the long way round ✗; $56^\\circ$ is HALVING THE ANGLE ✗.)',
    },
    {
      q: 'Lines $\\ell$ and $m$ are parallel. The marked angle at $P$ is $39^\\circ$. What is the corresponding angle marked at $Q$?',
      fig: {
        view: [-3.4, -1.4, 3.6, 3.0],
        elems: [
          { t: 'seg', a: [-3, 0], b: [3, 0] },
          { t: 'seg', a: [-3, 1.6], b: [3, 1.6] },
          { t: 'seg', a: [-2.43, -1], b: [1.76, 2.4] },
          { t: 'point', p: [-1.2, 0], label: 'P', dx: 12, dy: 12 },
          { t: 'point', p: [0.78, 1.6], label: 'Q', dx: 14, dy: 10 },
          { t: 'label', p: [-2.6, 0.3], text: 'm' },
          { t: 'label', p: [-2.6, 1.9], text: 'l' },
          { t: 'angle', at: [-1.2, 0], from: [3, 0], to: [1.76, 2.4], r: 0.75, label: '39' },
          { t: 'angle', at: [0.78, 1.6], from: [3, 1.6], to: [1.76, 2.4], r: 0.75, label: '?' },
        ],
      },
      choices: ['$51^\\circ$', '$141^\\circ$', '$78^\\circ$', '$39^\\circ$'],
      answer: 3,
      solution:
        'Same position at each crossing means corresponding angles, and corresponding angles between parallel lines are equal, so the angle at $Q$ is $39^\\circ$ ✓. Check a second, independent way by walking around the figure through supplements. The angle at $P$ on the other side of the transversal is $180^\\circ - 39^\\circ = 141^\\circ$; that obtuse angle has a corresponding partner at $Q$ measuring $141^\\circ$; and the marked angle at $Q$ is that partner’s linear-pair neighbour, so it measures $180^\\circ - 141^\\circ = 39^\\circ$ ✓ — two subtractions that undo each other, landing back on the given number. (The choice $51^\\circ$ is THE COMPLEMENT MIX-UP ✗; $141^\\circ$ is THE SAME-SIDE MIX-UP ✗; $78^\\circ$ is DOUBLING THE ANGLE ✗.)',
    },
  ],
  // s2 — vocabulary: which pairs are equal and which are supplementary.
  [
    {
      q: 'A transversal cuts two parallel lines. Which statement about alternate interior angles is true?',
      choices: [
        'They are equal',
        'They add to $90^\\circ$',
        'They add to $180^\\circ$',
        'One of them is always twice the other',
      ],
      answer: 0,
      solution:
        'Alternate interior angles lie between the two parallel lines on opposite sides of the transversal — the pair that makes a Z shape — and they are equal ✓. Check a second, independent way by building the pair out of facts you already trust. Call the lower angle $x$. Its vertical angle at the same crossing is also $x$, and that vertical angle corresponds to an angle at the upper crossing, so that upper angle is $x$ too — and the upper angle you land on is exactly the alternate interior one. Equal to something equal to $x$, so equal ✓. (The choice "add to $180^\\circ$" is THE SAME-SIDE MIX-UP, quoting the rule for the pair on the SAME side ✗; "add to $90^\\circ$" is USING 90 INSTEAD OF 180 and is wrong for every pair here ✗; "one is twice the other" would hold only in the single case $60^\\circ$ and $120^\\circ$, and that pair is not alternate interior anyway ✗.)',
    },
    {
      q: 'A transversal cuts two parallel lines. Which statement about corresponding angles is true?',
      choices: [
        'They add to $180^\\circ$',
        'They add to $360^\\circ$',
        'They have equal measures',
        'They have equal measures only when the transversal is perpendicular to the two lines',
      ],
      answer: 2,
      solution:
        'Corresponding angles occupy the same position at the two crossings, and between parallel lines they are equal ✓ — this is the basic parallel-line fact that all the others are built from. Check a second, independent way with the sliding picture. Slide one crossing along the transversal until it sits on top of the other. Because the lines are parallel, the moved line lands exactly on the other line, and because the transversal is straight it lands on itself — so the whole four-angle picture lands on the other four-angle picture, matching position to position ✓. Nothing about the tilt of the transversal was used. (The choice "add to $180^\\circ$" is THE SAME-SIDE MIX-UP ✗; "add to $360^\\circ$" is READING THE REFLEX ANGLE, adding the wrong way round the crossing ✗; the last choice is ASSUMING THE TRANSVERSAL IS PERPENDICULAR — a perpendicular transversal does make all eight angles $90^\\circ$, but corresponding angles are equal at every tilt ✗.)',
    },
    {
      q: 'A transversal cuts two parallel lines. Which of these pairs of angles is NOT always equal?',
      choices: [
        'corresponding angles',
        'same-side interior angles',
        'alternate interior angles',
        'alternate exterior angles',
      ],
      answer: 1,
      solution:
        'Corresponding, alternate interior, and alternate exterior pairs are all equal pairs; same-side interior angles are the odd ones out, since they add to $180^\\circ$ instead ✓. Check a second, independent way with a numerical test that rules three choices out at once. Tilt a transversal so that one angle measures $70^\\circ$; then every one of the eight angles is $70^\\circ$ or $110^\\circ$. A same-side interior pair is one of each — $70^\\circ$ with $110^\\circ$ — which are not equal ✗, while each of the other three pairs turns out to be $70^\\circ$ with $70^\\circ$ or $110^\\circ$ with $110^\\circ$ ✓. Note the trap: a same-side pair IS equal in the single special case where all eight angles are $90^\\circ$, which is why the question says "not ALWAYS equal." (Choosing any of the other three is THE EQUAL TRAP read backwards — mistaking an always-equal pair for the supplementary one ✗.)',
    },
  ],
  // s3 — alternate interior angles: the answer is the given angle, unchanged.
  [
    {
      q: 'Lines $\\ell$ and $m$ are parallel, and the marked angle at $P$ is $54^\\circ$. What is the alternate interior angle marked at $Q$?',
      fig: {
        view: [-3.4, -1.4, 3.6, 3.2],
        elems: [
          { t: 'seg', a: [-3, 0], b: [3, 0] },
          { t: 'seg', a: [-3, 2], b: [3, 2] },
          { t: 'seg', a: [-0.73, -1], b: [1.96, 2.7] },
          { t: 'point', p: [0, 0], label: 'P', dx: 12, dy: 12 },
          { t: 'point', p: [1.45, 2], label: 'Q', dx: 16, dy: -4 },
          { t: 'label', p: [-2.6, 0.3], text: 'm' },
          { t: 'label', p: [-2.6, 2.3], text: 'l' },
          { t: 'angle', at: [0, 0], from: [3, 0], to: [1.96, 2.7], r: 0.75, label: '54' },
          { t: 'angle', at: [1.45, 2], from: [-3, 2], to: [0, 0], r: 0.75, label: '?' },
        ],
      },
      choices: ['$54^\\circ$', '$126^\\circ$', '$36^\\circ$', '$108^\\circ$'],
      answer: 0,
      solution:
        'The two marked angles are both between the parallel lines and on opposite sides of the transversal — trace the Z and you will see them at its two corners. Alternate interior angles between parallel lines are equal, so the angle at $Q$ is $54^\\circ$ ✓. Check a second, independent way through a vertical angle. The angle at $P$ opening down and to the left is the vertical twin of the marked one, so it is $54^\\circ$ as well; that twin and the marked angle at $Q$ sit in the same position at their crossings, making them corresponding angles, which are equal ✓. Same answer by a route that never says the words "alternate interior." (The choice $126^\\circ$ is THE SAME-SIDE MIX-UP ✗; $36^\\circ$ is THE COMPLEMENT MIX-UP ✗; $108^\\circ$ is DOUBLING THE ANGLE ✗.)',
    },
    {
      q: 'Lines $\\ell$ and $m$ are parallel. The marked angle at $P$ measures $127^\\circ$. Find the alternate interior angle marked at $Q$.',
      fig: {
        view: [-3.4, -1.4, 3.6, 3.2],
        elems: [
          { t: 'seg', a: [-3, 0], b: [3, 0] },
          { t: 'seg', a: [-3, 2], b: [3, 2] },
          { t: 'seg', a: [0.75, -1], b: [-2.11, 2.8] },
          { t: 'point', p: [0, 0], label: 'P', dx: 12, dy: 12 },
          { t: 'point', p: [-1.51, 2], label: 'Q', dx: -18, dy: -4 },
          { t: 'label', p: [-2.6, 0.3], text: 'm' },
          { t: 'label', p: [2.6, 2.3], text: 'l' },
          { t: 'angle', at: [0, 0], from: [3, 0], to: [-2.11, 2.8], r: 0.6, label: '127' },
          { t: 'angle', at: [-1.51, 2], from: [3, 2], to: [0, 0], r: 0.6, label: '?' },
        ],
      },
      choices: ['$53^\\circ$', '$90^\\circ$', '$233^\\circ$', '$127^\\circ$'],
      answer: 3,
      solution:
        'Both marked angles live between the parallel lines, one on each side of the transversal, so they are alternate interior angles and therefore equal: $127^\\circ$ ✓. Check a second, independent way with the two-families count. Every one of the eight angles is $127^\\circ$ or $53^\\circ$, and stepping from any angle to its next-door neighbour swaps the family while stepping to its vertical twin keeps it. Going from the marked angle at $P$ to the marked angle at $Q$ takes one neighbour step and then one more, and two swaps return you to the family you started in ✓. Obtuse in, obtuse out. (The choice $53^\\circ$ is THE SAME-SIDE MIX-UP ✗; $233^\\circ$ is READING THE REFLEX ANGLE ✗; $90^\\circ$ is ASSUMING THE TRANSVERSAL IS PERPENDICULAR, which the slanted picture rules out ✗.)',
    },
    {
      q: 'Lines $\\ell$ and $m$ are parallel, and the marked angle at $P$ is $81^\\circ$. What is the alternate interior angle marked at $Q$?',
      fig: {
        view: [-3.4, -1.5, 3.6, 3.4],
        elems: [
          { t: 'seg', a: [-3, 0], b: [3, 0] },
          { t: 'seg', a: [-3, 2], b: [3, 2] },
          { t: 'seg', a: [-0.17, -1.1], b: [0.46, 2.9] },
          { t: 'point', p: [0, 0], label: 'P', dx: 12, dy: 12 },
          { t: 'point', p: [0.32, 2], label: 'Q', dx: -16, dy: -6 },
          { t: 'label', p: [-2.6, 0.3], text: 'm' },
          { t: 'label', p: [-2.6, 2.3], text: 'l' },
          { t: 'angle', at: [0, 0], from: [3, 0], to: [0.46, 2.9], r: 0.7, label: '81' },
          { t: 'angle', at: [0.32, 2], from: [-3, 2], to: [0, 0], r: 0.7, label: '?' },
        ],
      },
      choices: ['$99^\\circ$', '$9^\\circ$', '$81^\\circ$', '$162^\\circ$'],
      answer: 2,
      solution:
        'The Z shape is a steep one here, but the rule does not care about steepness: the two marked angles are interior and on opposite sides of the transversal, so they are alternate interior angles and equal, $81^\\circ$ ✓. Check a second, independent way through a corresponding angle. The angle at $Q$ opening up and to the right corresponds to the marked $81^\\circ$ at $P$, so it is $81^\\circ$; the marked angle at $Q$ is its vertical twin across the crossing, and vertical angles are equal, so it is $81^\\circ$ too ✓. (The choice $99^\\circ$ is THE SAME-SIDE MIX-UP ✗; $9^\\circ$ is THE COMPLEMENT MIX-UP ✗; $162^\\circ$ is DOUBLING THE ANGLE ✗.)',
    },
  ],
  // s4 — same-side interior angles: subtract the given angle from 180.
  [
    {
      q: 'Lines $\\ell$ and $m$ are parallel. The marked interior angle at $Q$ is $113^\\circ$. What is the same-side interior angle marked at $P$?',
      fig: {
        view: [-3.4, -1.5, 3.6, 3.3],
        elems: [
          { t: 'seg', a: [-3, 0], b: [3, 0] },
          { t: 'seg', a: [-3, 2], b: [3, 2] },
          { t: 'seg', a: [-0.45, -1.05], b: [1.17, 2.75] },
          { t: 'point', p: [0, 0], label: 'P', dx: 12, dy: 12 },
          { t: 'point', p: [0.85, 2], label: 'Q', dx: 16, dy: -4 },
          { t: 'label', p: [-2.6, 0.3], text: 'm' },
          { t: 'label', p: [-2.6, 2.3], text: 'l' },
          { t: 'angle', at: [0, 0], from: [3, 0], to: [1.17, 2.75], r: 0.7, label: '?' },
          { t: 'angle', at: [0.85, 2], from: [3, 2], to: [0, 0], r: 0.55, label: '113' },
        ],
      },
      choices: ['$113^\\circ$', '$23^\\circ$', '$67^\\circ$', '$247^\\circ$'],
      answer: 2,
      solution:
        'Both marked angles are between the parallel lines and both open toward the right — the same side of the transversal — so they are same-side interior angles, which are supplementary: $180^\\circ - 113^\\circ = 67^\\circ$ ✓. Check a second, independent way through an alternate interior angle. At $Q$, the interior angle opening to the LEFT is the alternate interior partner of the marked angle at $P$, so those two are equal; and the two interior angles at $Q$ sit side by side along line $\\ell$, forming a linear pair, so the left one is $180^\\circ - 113^\\circ = 67^\\circ$ ✓. Equal to $67^\\circ$, so the angle at $P$ is $67^\\circ$. (The choice $113^\\circ$ is THE EQUAL TRAP, the classic same-side slip ✗; $23^\\circ$ is USING 90 INSTEAD OF 180, computing $113^\\circ - 90^\\circ$ ✗; $247^\\circ$ is READING THE REFLEX ANGLE ✗.)',
    },
    {
      q: 'Lines $\\ell$ and $m$ are parallel, and the marked interior angle at $Q$ is $48^\\circ$. Find the same-side interior angle marked at $P$.',
      fig: {
        view: [-3.4, -1.4, 3.6, 3.2],
        elems: [
          { t: 'seg', a: [-3, 0], b: [3, 0] },
          { t: 'seg', a: [-3, 2], b: [3, 2] },
          { t: 'seg', a: [0.9, -1], b: [-2.43, 2.7] },
          { t: 'point', p: [0, 0], label: 'P', dx: 12, dy: 12 },
          { t: 'point', p: [-1.8, 2], label: 'Q', dx: -18, dy: -4 },
          { t: 'label', p: [-2.6, 0.3], text: 'm' },
          { t: 'label', p: [2.6, 2.3], text: 'l' },
          { t: 'angle', at: [0, 0], from: [3, 0], to: [-2.43, 2.7], r: 0.6, label: '?' },
          { t: 'angle', at: [-1.8, 2], from: [3, 2], to: [0, 0], r: 0.7, label: '48' },
        ],
      },
      choices: ['$48^\\circ$', '$42^\\circ$', '$132^\\circ$', '$312^\\circ$'],
      answer: 2,
      solution:
        'The two marked angles are interior and both open toward the right of the transversal, so they are same-side interior angles and must add to $180^\\circ$: the angle at $P$ is $180^\\circ - 48^\\circ = 132^\\circ$ ✓. Check a second, independent way by counting families. Every one of the eight angles in this figure is $48^\\circ$ or $132^\\circ$, and the marked angle at $P$ is plainly the wide one in its picture while the marked angle at $Q$ is the narrow one — different families, so they cannot both be $48^\\circ$ ✗, and the only other value available is $132^\\circ$ ✓. The picture agrees: the angle at $P$ is drawn obtuse. (The choice $48^\\circ$ is THE EQUAL TRAP ✗; $42^\\circ$ is USING 90 INSTEAD OF 180, subtracting from $90^\\circ$ ✗; $312^\\circ$ is READING THE REFLEX ANGLE ✗.)',
    },
    {
      q: 'Lines $\\ell$ and $m$ are parallel. The marked interior angle at $Q$ measures $154^\\circ$. What is the same-side interior angle marked at $P$?',
      fig: {
        view: [-3.4, -1.1, 3.6, 2.7],
        elems: [
          { t: 'seg', a: [-3, 0], b: [3, 0] },
          { t: 'seg', a: [-3, 1.5], b: [3, 1.5] },
          { t: 'seg', a: [-2.94, -0.7], b: [2.81, 2.1] },
          { t: 'point', p: [-1.5, 0], label: 'P', dx: 12, dy: 12 },
          { t: 'point', p: [1.58, 1.5], label: 'Q', dx: 10, dy: 14 },
          { t: 'label', p: [-2.6, 0.3], text: 'm' },
          { t: 'label', p: [-2.6, 1.8], text: 'l' },
          { t: 'angle', at: [-1.5, 0], from: [3, 0], to: [2.81, 2.1], r: 0.8, label: '?' },
          { t: 'angle', at: [1.58, 1.5], from: [3, 1.5], to: [-1.5, 0], r: 0.5, label: '154' },
        ],
      },
      choices: ['$154^\\circ$', '$26^\\circ$', '$90^\\circ$', '$206^\\circ$'],
      answer: 1,
      solution:
        'Interior angles on the same side of the transversal are supplementary, so the angle at $P$ is $180^\\circ - 154^\\circ = 26^\\circ$ ✓. Check a second, independent way by going the long way around through a corresponding angle. The angle at $Q$ opening to the LEFT along line $\\ell$ is the linear-pair partner of the given one, so it measures $180^\\circ - 154^\\circ = 26^\\circ$; sliding down the transversal, its corresponding angle at $P$ — also opening up and to the left — is $26^\\circ$; and the marked angle at $P$ is that one’s vertical twin, so it is $26^\\circ$ as well ✓. Three easy steps, same destination. (The choice $154^\\circ$ is THE EQUAL TRAP ✗; $90^\\circ$ is ASSUMING THE TRANSVERSAL IS PERPENDICULAR ✗; $206^\\circ$ is READING THE REFLEX ANGLE ✗.)',
    },
  ],
  // s5 — alternate exterior angles: the answer is the given angle, unchanged.
  [
    {
      q: 'Lines $\\ell$ and $m$ are parallel, and the marked exterior angle at $P$ is $141^\\circ$. What is the alternate exterior angle marked at $Q$?',
      fig: {
        view: [-3.4, -1.5, 3.6, 2.9],
        elems: [
          { t: 'seg', a: [-3, 0], b: [3, 0] },
          { t: 'seg', a: [-3, 1.6], b: [3, 1.6] },
          { t: 'seg', a: [-2.48, -1.2], b: [2.09, 2.5] },
          { t: 'point', p: [-1, 0], label: 'P', dx: -14, dy: -6 },
          { t: 'point', p: [0.98, 1.6], label: 'Q', dx: 16, dy: 10 },
          { t: 'label', p: [-2.6, 0.35], text: 'm' },
          { t: 'label', p: [-2.6, 1.95], text: 'l' },
          { t: 'angle', at: [-1, 0], from: [3, 0], to: [-2.48, -1.2], r: 0.5, label: '141' },
          { t: 'angle', at: [0.98, 1.6], from: [-3, 1.6], to: [2.09, 2.5], r: 0.5, label: '?' },
        ],
      },
      choices: ['$141^\\circ$', '$39^\\circ$', '$219^\\circ$', '$90^\\circ$'],
      answer: 0,
      solution:
        'The marked angle at $P$ sits below both parallel lines and the marked angle at $Q$ sits above both — outside the pair — and they are on opposite sides of the transversal, so they are alternate exterior angles, which are equal: $141^\\circ$ ✓. Check a second, independent way by building the pair from a corresponding angle and a vertical angle. The angle at $P$ opening up and to the left is the vertical twin of the marked one, so it measures $141^\\circ$; its corresponding angle at $Q$, also opening up and to the left, is $141^\\circ$ — and that is exactly the angle marked at $Q$ ✓. (The choice $39^\\circ$ is THE SAME-SIDE MIX-UP, the value of the exterior angle on the same side instead ✗; $219^\\circ$ is READING THE REFLEX ANGLE ✗; $90^\\circ$ is ASSUMING THE TRANSVERSAL IS PERPENDICULAR ✗.)',
    },
    {
      q: 'Lines $\\ell$ and $m$ are parallel. The marked exterior angle at $P$ measures $76^\\circ$. Find the alternate exterior angle marked at $Q$.',
      fig: {
        view: [-3.4, -1.7, 3.6, 3.6],
        elems: [
          { t: 'seg', a: [-3, 0], b: [3, 0] },
          { t: 'seg', a: [-3, 2], b: [3, 2] },
          { t: 'seg', a: [0.35, -1.4], b: [-0.8, 3.2] },
          { t: 'point', p: [0, 0], label: 'P', dx: -14, dy: -6 },
          { t: 'point', p: [-0.5, 2], label: 'Q', dx: -16, dy: 12 },
          { t: 'label', p: [-2.6, 0.3], text: 'm' },
          { t: 'label', p: [-2.6, 2.3], text: 'l' },
          { t: 'angle', at: [0, 0], from: [3, 0], to: [0.35, -1.4], r: 0.6, label: '76' },
          { t: 'angle', at: [-0.5, 2], from: [-3, 2], to: [-0.8, 3.2], r: 0.6, label: '?' },
        ],
      },
      choices: ['$104^\\circ$', '$14^\\circ$', '$152^\\circ$', '$76^\\circ$'],
      answer: 3,
      solution:
        'Outside the two parallel lines, on opposite sides of the transversal — alternate exterior angles, and they are equal, so the angle at $Q$ is $76^\\circ$ ✓. Check a second, independent way with the two-families count. Every angle in the figure is $76^\\circ$ or $104^\\circ$. The marked angle at $P$ is acute; the marked angle at $Q$ is drawn just as sharp, opening the same narrow way ✓ — same family, so $76^\\circ$. If it were the same-side exterior angle instead, it would be the wide $104^\\circ$ one. (The choice $104^\\circ$ is THE SAME-SIDE MIX-UP ✗; $14^\\circ$ is THE COMPLEMENT MIX-UP ✗; $152^\\circ$ is DOUBLING THE ANGLE ✗.)',
    },
    {
      q: 'Lines $\\ell$ and $m$ are parallel, and the marked exterior angle at $P$ is $118^\\circ$. What is the alternate exterior angle marked at $Q$?',
      fig: {
        view: [-3.4, -1.7, 3.6, 3.4],
        elems: [
          { t: 'seg', a: [-3, 0], b: [3, 0] },
          { t: 'seg', a: [-3, 2], b: [3, 2] },
          { t: 'seg', a: [-0.74, -1.4], b: [1.54, 2.9] },
          { t: 'point', p: [0, 0], label: 'P', dx: -14, dy: -6 },
          { t: 'point', p: [1.06, 2], label: 'Q', dx: 16, dy: 10 },
          { t: 'label', p: [-2.6, 0.3], text: 'm' },
          { t: 'label', p: [-2.6, 2.3], text: 'l' },
          { t: 'angle', at: [0, 0], from: [3, 0], to: [-0.74, -1.4], r: 0.55, label: '118' },
          { t: 'angle', at: [1.06, 2], from: [-3, 2], to: [1.54, 2.9], r: 0.55, label: '?' },
        ],
      },
      choices: ['$62^\\circ$', '$242^\\circ$', '$118^\\circ$', '$59^\\circ$'],
      answer: 2,
      solution:
        'Both marked angles are outside the strip between the parallel lines, on opposite sides of the transversal: alternate exterior angles, which are equal, so the angle at $Q$ is $118^\\circ$ ✓. Check a second, independent way by stepping through the interior. The marked angle at $P$ has a linear-pair neighbour along line $m$ measuring $180^\\circ - 118^\\circ = 62^\\circ$; that interior angle has an alternate interior partner at $Q$ measuring $62^\\circ$; and the marked angle at $Q$ is the linear-pair neighbour of THAT one, giving $180^\\circ - 62^\\circ = 118^\\circ$ ✓. Two subtractions, back where we started. (The choice $62^\\circ$ is THE SAME-SIDE MIX-UP ✗; $242^\\circ$ is READING THE REFLEX ANGLE ✗; $59^\\circ$ is HALVING THE ANGLE ✗.)',
    },
  ],
  // s6 — corresponding angle, then one linear-pair step at the far crossing.
  [
    {
      q: 'Lines $\\ell$ and $m$ are parallel, and the marked angle at $P$ measures $57^\\circ$. What is the angle marked $b$ at the upper crossing?',
      fig: {
        view: [-3.4, -1.6, 3.6, 3.3],
        elems: [
          { t: 'seg', a: [-3, 0], b: [3, 0] },
          { t: 'seg', a: [-3, 2], b: [3, 2] },
          { t: 'seg', a: [-0.75, -1.15], b: [1.85, 2.85] },
          { t: 'point', p: [0, 0], label: 'P', dx: 12, dy: 12 },
          { t: 'label', p: [-2.6, 0.3], text: 'm' },
          { t: 'label', p: [-2.6, 2.3], text: 'l' },
          { t: 'angle', at: [0, 0], from: [3, 0], to: [1.85, 2.85], r: 0.7, label: '57' },
          { t: 'angle', at: [1.3, 2], from: [-3, 2], to: [1.85, 2.85], r: 0.55, label: 'b' },
        ],
      },
      choices: ['$57^\\circ$', '$123^\\circ$', '$33^\\circ$', '$147^\\circ$'],
      answer: 1,
      solution:
        'Two steps. First, the angle at the upper crossing that opens up and to the RIGHT corresponds to the $57^\\circ$ at $P$, so it is $57^\\circ$. Second, angle $b$ opens up and to the LEFT, sitting beside that angle along line $\\ell$ — a linear pair — so $b = 180^\\circ - 57^\\circ = 123^\\circ$ ✓. Check a second, independent way through a vertical angle and a same-side pair. Angle $b$ has a vertical twin at the upper crossing: the angle opening down and to the right, which is between the two parallel lines. That twin and the marked $57^\\circ$ at $P$ are both interior and both open toward the right of the transversal, so they are same-side interior angles and add to $180^\\circ$, making the twin $123^\\circ$; vertical angles are equal, so $b = 123^\\circ$ ✓. (The choice $57^\\circ$ is STOPPING AT THE CORRESPONDING ANGLE and forgetting the linear-pair step ✗; $33^\\circ$ is THE COMPLEMENT MIX-UP ✗; $147^\\circ$ is COMPLEMENTING BEFORE SUPPLEMENTING, computing $180^\\circ - 33^\\circ$ after that first slip ✗.)',
    },
    {
      q: 'Lines $\\ell$ and $m$ are parallel. The marked angle at $P$ is $128^\\circ$. What is the angle marked $b$ at the upper crossing?',
      fig: {
        view: [-3.4, -1.5, 3.6, 3.3],
        elems: [
          { t: 'seg', a: [-3, 0], b: [3, 0] },
          { t: 'seg', a: [-3, 2], b: [3, 2] },
          { t: 'seg', a: [0.86, -1.1], b: [-2.23, 2.85] },
          { t: 'point', p: [0, 0], label: 'P', dx: 12, dy: 12 },
          { t: 'label', p: [-2.6, 0.3], text: 'm' },
          { t: 'label', p: [2.6, 2.3], text: 'l' },
          { t: 'angle', at: [0, 0], from: [3, 0], to: [-2.23, 2.85], r: 0.6, label: '128' },
          { t: 'angle', at: [-1.56, 2], from: [3, 2], to: [-2.23, 2.85], r: 0.5, label: 'b' },
        ],
      },
      choices: ['$52^\\circ$', '$128^\\circ$', '$38^\\circ$', '$232^\\circ$'],
      answer: 0,
      solution:
        'The angle at the upper crossing opening up and to the LEFT corresponds to the $128^\\circ$ at $P$, so it measures $128^\\circ$; angle $b$ is its neighbour along line $\\ell$, opening up and to the right, so the two form a linear pair and $b = 180^\\circ - 128^\\circ = 52^\\circ$ ✓. Check a second, independent way with the two-families count. Every angle here is $128^\\circ$ or $52^\\circ$. The marked angle at $P$ is drawn wide, while $b$ is drawn as a narrow wedge between line $\\ell$ and the transversal — different families ✓ — so $b$ has to be the small value, $52^\\circ$. (The choice $128^\\circ$ is STOPPING AT THE CORRESPONDING ANGLE ✗; $38^\\circ$ is THE COMPLEMENT MIX-UP applied to $52^\\circ$ ✗; $232^\\circ$ is READING THE REFLEX ANGLE ✗.)',
    },
    {
      q: 'Lines $\\ell$ and $m$ are parallel, and the marked angle at $P$ is $71^\\circ$. Find the angle marked $b$ at the upper crossing.',
      fig: {
        view: [-3.4, -1.6, 3.6, 3.4],
        elems: [
          { t: 'seg', a: [-3, 0], b: [3, 0] },
          { t: 'seg', a: [-3, 2], b: [3, 2] },
          { t: 'seg', a: [-0.4, -1.15], b: [1, 2.9] },
          { t: 'point', p: [0, 0], label: 'P', dx: 12, dy: 12 },
          { t: 'label', p: [-2.6, 0.3], text: 'm' },
          { t: 'label', p: [-2.6, 2.3], text: 'l' },
          { t: 'angle', at: [0, 0], from: [3, 0], to: [1, 2.9], r: 0.7, label: '71' },
          { t: 'angle', at: [0.69, 2], from: [-3, 2], to: [1, 2.9], r: 0.55, label: 'b' },
        ],
      },
      choices: ['$71^\\circ$', '$19^\\circ$', '$109^\\circ$', '$161^\\circ$'],
      answer: 2,
      solution:
        'Slide up the transversal: the angle at the upper crossing in the same position as the marked one — up and to the right — is $71^\\circ$. Angle $b$ is next to it along line $\\ell$, so the pair is a linear pair and $b = 180^\\circ - 71^\\circ = 109^\\circ$ ✓. Check a second, independent way by naming the pair $b$ makes with $P$ directly. Angle $b$ is between the parallel lines, and so is the marked angle at $P$; both open toward the same side of the transversal, which makes them same-side interior angles — supplementary — so $b = 180^\\circ - 71^\\circ = 109^\\circ$ ✓ in one step instead of two. (The choice $71^\\circ$ is STOPPING AT THE CORRESPONDING ANGLE ✗; $19^\\circ$ is THE COMPLEMENT MIX-UP ✗; $161^\\circ$ is COMPLEMENTING BEFORE SUPPLEMENTING, computing $180^\\circ - 19^\\circ$ ✗.)',
    },
  ],
  // s7 — corresponding-angle algebra: set equal, solve, then report the ANGLE.
  [
    {
      q: 'Lines $\\ell$ and $m$ are parallel, and the two marked corresponding angles measure $3x + 4^\\circ$ and $x + 60^\\circ$. What is the measure of each of these angles?',
      fig: {
        view: [-3.4, -1.5, 3.6, 3.4],
        elems: [
          { t: 'seg', a: [-3, 0], b: [3, 0] },
          { t: 'seg', a: [-3, 2], b: [3, 2] },
          { t: 'seg', a: [-0.04, -1.1], b: [0.1, 2.9] },
          { t: 'label', p: [-2.6, 0.3], text: 'm' },
          { t: 'label', p: [-2.6, 2.3], text: 'l' },
          { t: 'angle', at: [0, 0], from: [3, 0], to: [0.1, 2.9], r: 0.7, label: '3x+4' },
          { t: 'angle', at: [0.07, 2], from: [3, 2], to: [0.1, 2.9], r: 0.7, label: 'x+60' },
        ],
      },
      choices: ['$28^\\circ$', '$92^\\circ$', '$91^\\circ$', '$88^\\circ$'],
      answer: 3,
      solution:
        'Corresponding angles between parallel lines are equal, so $3x + 4^\\circ = x + 60^\\circ$. Subtract $x$ and $4^\\circ$: $2x = 56^\\circ$, so $x = 28^\\circ$, and each angle is $3(28^\\circ) + 4^\\circ = 88^\\circ$ ✓. Check a second, independent way by testing the answer instead of deriving it. If the common measure really is $88^\\circ$, then $3x + 4^\\circ = 88^\\circ$ forces $x = 28^\\circ$, and separately $x + 60^\\circ = 88^\\circ$ forces $x = 28^\\circ$ — the same $x$ from two different equations, so $88^\\circ$ is consistent ✓. Try $92^\\circ$ the same way and the two equations demand $x = 29\\frac{1}{3}^\\circ$ and $x = 32^\\circ$, which disagree ✗. (The choice $28^\\circ$ is ANSWERING x INSTEAD OF THE ANGLE ✗; $91^\\circ$ is MAKING CORRESPONDING ANGLES SUPPLEMENTARY, from $4x + 64^\\circ = 180^\\circ$ and $x = 29^\\circ$ ✗; $92^\\circ$ is THE SAME-SIDE MIX-UP applied to the finished answer ✗.)',
    },
    {
      q: 'Lines $\\ell$ and $m$ are parallel. Two corresponding angles measure $8x + 8^\\circ$ and $5x + 29^\\circ$. Find the measure of each angle.',
      fig: {
        view: [-3.4, -1.5, 3.6, 3.4],
        elems: [
          { t: 'seg', a: [-3, 0], b: [3, 0] },
          { t: 'seg', a: [-3, 2], b: [3, 2] },
          { t: 'seg', a: [-0.54, -1.1], b: [1.41, 2.9] },
          { t: 'label', p: [-2.6, 0.3], text: 'm' },
          { t: 'label', p: [-2.6, 2.3], text: 'l' },
          { t: 'angle', at: [0, 0], from: [3, 0], to: [1.41, 2.9], r: 0.7, label: '8x+8' },
          { t: 'angle', at: [0.98, 2], from: [3, 2], to: [1.41, 2.9], r: 0.7, label: '5x+29' },
        ],
      },
      choices: ['$7^\\circ$', '$64^\\circ$', '$96^\\circ$', '$116^\\circ$'],
      answer: 1,
      solution:
        'Corresponding angles are equal, so $8x + 8^\\circ = 5x + 29^\\circ$. Subtract $5x$ and $8^\\circ$: $3x = 21^\\circ$, giving $x = 7^\\circ$, and each angle measures $8(7^\\circ) + 8^\\circ = 64^\\circ$ ✓. Check a second, independent way by working with the gap between the two expressions. As $x$ grows by $1^\\circ$ the first expression gains $8^\\circ$ and the second gains only $5^\\circ$, so the first catches up at $3^\\circ$ per step; at $x = 0$ the first is $8^\\circ$ and the second is $29^\\circ$, a deficit of $21^\\circ$, which takes $21 \\div 3 = 7$ steps to close ✓. Then $5(7^\\circ) + 29^\\circ = 64^\\circ$, matching. (The choice $7^\\circ$ is ANSWERING x INSTEAD OF THE ANGLE ✗; $96^\\circ$ is MAKING CORRESPONDING ANGLES SUPPLEMENTARY, from $13x + 37^\\circ = 180^\\circ$ and $x = 11^\\circ$ ✗; $116^\\circ$ is THE SAME-SIDE MIX-UP applied to the finished answer ✗.)',
    },
    {
      q: 'Lines $\\ell$ and $m$ are parallel, and two corresponding angles measure $4x + 25^\\circ$ and $3x + 43^\\circ$. What is the measure of each angle?',
      fig: {
        view: [-3.4, -1.5, 3.6, 3.4],
        elems: [
          { t: 'seg', a: [-3, 0], b: [3, 0] },
          { t: 'seg', a: [-3, 2], b: [3, 2] },
          { t: 'seg', a: [0.14, -1.1], b: [-0.36, 2.9] },
          { t: 'label', p: [-2.6, 0.3], text: 'm' },
          { t: 'label', p: [-2.6, 2.3], text: 'l' },
          { t: 'angle', at: [0, 0], from: [3, 0], to: [-0.36, 2.9], r: 0.65, label: '4x+25' },
          { t: 'angle', at: [-0.25, 2], from: [3, 2], to: [-0.36, 2.9], r: 0.65, label: '3x+43' },
        ],
      },
      choices: ['$97^\\circ$', '$18^\\circ$', '$89^\\circ$', '$83^\\circ$'],
      answer: 0,
      solution:
        'Corresponding angles between parallel lines are equal: $4x + 25^\\circ = 3x + 43^\\circ$ gives $x = 18^\\circ$, so each angle is $4(18^\\circ) + 25^\\circ = 97^\\circ$ ✓. Check a second, independent way by substituting into the OTHER expression and testing a rival. Putting $x = 18^\\circ$ into $3x + 43^\\circ$ gives $54^\\circ + 43^\\circ = 97^\\circ$, agreeing ✓. Now test the rival $89^\\circ$: it needs $4x + 25^\\circ = 89^\\circ$, so $x = 16^\\circ$, but then $3(16^\\circ) + 43^\\circ = 91^\\circ \\ne 89^\\circ$ ✗ — the two expressions refuse to agree, so $89^\\circ$ is out. (The choice $18^\\circ$ is ANSWERING x INSTEAD OF THE ANGLE ✗; $89^\\circ$ is MAKING CORRESPONDING ANGLES SUPPLEMENTARY, from $7x + 68^\\circ = 180^\\circ$ and $x = 16^\\circ$ ✗; $83^\\circ$ is THE SAME-SIDE MIX-UP applied to the finished answer ✗.)',
    },
  ],
  // s8 — same-side interior algebra: sum to 180, then report the LARGER angle.
  [
    {
      q: 'Lines $\\ell$ and $m$ are parallel, and the two marked same-side interior angles measure $4x + 4^\\circ$ and $6x + 26^\\circ$. What is the larger of the two angles?',
      fig: {
        view: [-3.4, -1.5, 3.6, 3.3],
        elems: [
          { t: 'seg', a: [-3, 0], b: [3, 0] },
          { t: 'seg', a: [-3, 2], b: [3, 2] },
          { t: 'seg', a: [-0.51, -1.05], b: [1.37, 2.8] },
          { t: 'label', p: [-2.6, 0.3], text: 'm' },
          { t: 'label', p: [-2.6, 2.3], text: 'l' },
          { t: 'angle', at: [0, 0], from: [3, 0], to: [1.37, 2.8], r: 0.7, label: '4x+4' },
          { t: 'angle', at: [0.98, 2], from: [3, 2], to: [0, 0], r: 0.55, label: '6x+26' },
        ],
      },
      choices: ['$64^\\circ$', '$15^\\circ$', '$62^\\circ$', '$116^\\circ$'],
      answer: 3,
      solution:
        'Same-side interior angles between parallel lines are supplementary, so $(4x + 4^\\circ) + (6x + 26^\\circ) = 180^\\circ$. That is $10x + 30^\\circ = 180^\\circ$, so $10x = 150^\\circ$ and $x = 15^\\circ$. The angles are $4(15^\\circ) + 4^\\circ = 64^\\circ$ and $6(15^\\circ) + 26^\\circ = 116^\\circ$; the larger is $116^\\circ$ ✓. Check a second, independent way without ever adding the two expressions. The difference between them is $(6x + 26^\\circ) - (4x + 4^\\circ) = 2x + 22^\\circ$, and two supplementary angles that differ by $d$ are $90^\\circ + \\frac{d}{2}$ and $90^\\circ - \\frac{d}{2}$. Testing the answer: if the larger is $116^\\circ$ then $d = 116^\\circ - 64^\\circ = 52^\\circ$, and indeed $90^\\circ + 26^\\circ = 116^\\circ$ ✓ while $2x + 22^\\circ = 52^\\circ$ gives the same $x = 15^\\circ$ ✓. (The choice $64^\\circ$ is ANSWERING THE SMALLER ANGLE ✗; $15^\\circ$ is ANSWERING x INSTEAD OF THE ANGLE ✗; $62^\\circ$ is SHARING 90 INSTEAD OF 180, from $10x + 30^\\circ = 90^\\circ$ and $x = 6^\\circ$ ✗.)',
    },
    {
      q: 'Lines $\\ell$ and $m$ are parallel. Two same-side interior angles measure $4x + 27^\\circ$ and $5x + 45^\\circ$. What is the larger of the two angles?',
      fig: {
        view: [-3.4, -1.5, 3.6, 3.3],
        elems: [
          { t: 'seg', a: [-3, 0], b: [3, 0] },
          { t: 'seg', a: [-3, 2], b: [3, 2] },
          { t: 'seg', a: [-0.28, -1.05], b: [0.76, 2.85] },
          { t: 'label', p: [-2.6, 0.3], text: 'm' },
          { t: 'label', p: [-2.6, 2.3], text: 'l' },
          { t: 'angle', at: [0, 0], from: [3, 0], to: [0.76, 2.85], r: 0.7, label: '4x+27' },
          { t: 'angle', at: [0.54, 2], from: [3, 2], to: [0, 0], r: 0.55, label: '5x+45' },
        ],
      },
      choices: ['$105^\\circ$', '$75^\\circ$', '$12^\\circ$', '$55^\\circ$'],
      answer: 0,
      solution:
        'Interior angles on the same side of the transversal add to $180^\\circ$: $(4x + 27^\\circ) + (5x + 45^\\circ) = 180^\\circ$ gives $9x + 72^\\circ = 180^\\circ$, so $9x = 108^\\circ$ and $x = 12^\\circ$. The angles are $4(12^\\circ) + 27^\\circ = 75^\\circ$ and $5(12^\\circ) + 45^\\circ = 105^\\circ$, and the larger is $105^\\circ$ ✓. Check a second, independent way by chasing the smaller angle around the figure. If the smaller is $75^\\circ$, then its alternate interior partner at the far crossing is also $75^\\circ$, and the marked larger angle is that partner’s linear-pair neighbour: $180^\\circ - 75^\\circ = 105^\\circ$ ✓. Feed that back in: $5x + 45^\\circ = 105^\\circ$ gives $x = 12^\\circ$, the same $x$ ✓. (The choice $75^\\circ$ is ANSWERING THE SMALLER ANGLE ✗; $12^\\circ$ is ANSWERING x INSTEAD OF THE ANGLE ✗; $55^\\circ$ is SHARING 90 INSTEAD OF 180, from $9x + 72^\\circ = 90^\\circ$ and $x = 2^\\circ$ ✗.)',
    },
    {
      q: 'Lines $\\ell$ and $m$ are parallel, and two same-side interior angles measure $x + 22^\\circ$ and $5x + 38^\\circ$. What is the larger of the two angles?',
      fig: {
        view: [-3.4, -1.3, 3.6, 3.0],
        elems: [
          { t: 'seg', a: [-3, 0], b: [3, 0] },
          { t: 'seg', a: [-3, 1.6], b: [3, 1.6] },
          { t: 'seg', a: [-1.9, -0.9], b: [1.77, 2.4] },
          { t: 'label', p: [-2.6, 0.3], text: 'm' },
          { t: 'label', p: [-2.6, 1.9], text: 'l' },
          { t: 'angle', at: [-0.9, 0], from: [3, 0], to: [1.77, 2.4], r: 0.75, label: 'x+22' },
          { t: 'angle', at: [0.88, 1.6], from: [3, 1.6], to: [-0.9, 0], r: 0.5, label: '5x+38' },
        ],
      },
      choices: ['$42^\\circ$', '$138^\\circ$', '$20^\\circ$', '$63^\\circ$'],
      answer: 1,
      solution:
        'Same-side interior angles are supplementary: $(x + 22^\\circ) + (5x + 38^\\circ) = 180^\\circ$, so $6x + 60^\\circ = 180^\\circ$, $6x = 120^\\circ$ and $x = 20^\\circ$. The angles are $20^\\circ + 22^\\circ = 42^\\circ$ and $5(20^\\circ) + 38^\\circ = 138^\\circ$, so the larger is $138^\\circ$ ✓. Check a second, independent way by testing the choices against the pairing rule. Whatever the larger angle is, the smaller must be $180^\\circ$ minus it. For $138^\\circ$ the partner would be $42^\\circ$, and $x + 22^\\circ = 42^\\circ$ gives $x = 20^\\circ$, which drops straight into $5x + 38^\\circ$ to give $138^\\circ$ ✓ — consistent. For $63^\\circ$ the partner would be $117^\\circ$, needing $x = 95^\\circ$ from one expression and $x = 5^\\circ$ from the other ✗. (The choice $42^\\circ$ is ANSWERING THE SMALLER ANGLE ✗; $20^\\circ$ is ANSWERING x INSTEAD OF THE ANGLE ✗; $63^\\circ$ is SHARING 90 INSTEAD OF 180, from $6x + 60^\\circ = 90^\\circ$ and $x = 5^\\circ$ ✗.)',
    },
  ],
  // s9 — same-side interior angles in a given ratio: find the acute one.
  [
    {
      q: 'A transversal cuts two parallel lines, and the two same-side interior angles are in the ratio $11:7$. What is the acute angle of the pair?',
      choices: ['$110^\\circ$', '$10^\\circ$', '$35^\\circ$', '$70^\\circ$'],
      answer: 3,
      solution:
        'Write the two angles as $11k$ and $7k$. Same-side interior angles between parallel lines add to $180^\\circ$, so $11k + 7k = 18k = 180^\\circ$ and $k = 10^\\circ$. The angles are $110^\\circ$ and $70^\\circ$, and the acute one is $70^\\circ$ ✓. Check a second, independent way by taking a share of the whole instead of solving for $k$. The smaller angle is $7$ parts out of the $11 + 7 = 18$ parts that make up $180^\\circ$, so it is $\\frac{7}{18} \\times 180^\\circ = 7 \\times 10^\\circ = 70^\\circ$ ✓ — no unknown ever written down. (The choice $110^\\circ$ is the OBTUSE partner, not the acute one asked for ✗; $10^\\circ$ is ANSWERING k INSTEAD OF THE ANGLE ✗; $35^\\circ$ is SHARING 90 INSTEAD OF 180, from $18k = 90^\\circ$ ✗.)',
    },
    {
      q: 'A transversal crosses two parallel lines, and a pair of same-side interior angles is in the ratio $8:7$. What is the acute angle of the pair?',
      choices: ['$96^\\circ$', '$42^\\circ$', '$84^\\circ$', '$12^\\circ$'],
      answer: 2,
      solution:
        'Call the angles $8k$ and $7k$. They are same-side interior angles, so they are supplementary: $15k = 180^\\circ$ and $k = 12^\\circ$. The angles are $96^\\circ$ and $84^\\circ$, and the acute one is $84^\\circ$ ✓. Check a second, independent way by splitting the difference around $90^\\circ$. Two supplementary angles always sit at equal distances either side of $90^\\circ$, so the acute one is $90^\\circ - g$ and the obtuse one is $90^\\circ + g$ for some gap $g$; their ratio $\\frac{90 + g}{90 - g} = \\frac{8}{7}$ gives $630 + 7g = 720 - 8g$, so $15g = 90$ and $g = 6^\\circ$, making the acute angle $90^\\circ - 6^\\circ = 84^\\circ$ ✓. (The choice $96^\\circ$ is the OBTUSE partner ✗; $12^\\circ$ is ANSWERING k INSTEAD OF THE ANGLE ✗; $42^\\circ$ is SHARING 90 INSTEAD OF 180, from $15k = 90^\\circ$ ✗.)',
    },
    {
      q: 'Two parallel lines are cut by a transversal, and the two same-side interior angles are in the ratio $13:5$. What is the acute angle of the pair?',
      choices: ['$130^\\circ$', '$25^\\circ$', '$50^\\circ$', '$10^\\circ$'],
      answer: 2,
      solution:
        'Let the angles be $13k$ and $5k$. Same-side interior angles are supplementary, so $18k = 180^\\circ$ and $k = 10^\\circ$, making the angles $130^\\circ$ and $50^\\circ$; the acute one is $50^\\circ$ ✓. Check a second, independent way with shares of $180^\\circ$. The two angles take up $13$ parts and $5$ parts of $18$ equal parts, and $180^\\circ \\div 18 = 10^\\circ$ per part, so the smaller angle is $5 \\times 10^\\circ = 50^\\circ$ ✓ and the larger is $13 \\times 10^\\circ = 130^\\circ$; the two add to $180^\\circ$, which confirms the split ✓. A ratio this lopsided is only possible because the pair is supplementary — an alternate interior pair would be forced into $1:1$. (The choice $130^\\circ$ is the OBTUSE partner ✗; $10^\\circ$ is ANSWERING k INSTEAD OF THE ANGLE ✗; $25^\\circ$ is SHARING 90 INSTEAD OF 180, from $18k = 90^\\circ$ ✗.)',
    },
  ],
  // s10 — three parallel lines, one transversal: corresponding, then linear pair.
  [
    {
      q: 'Three parallel lines are cut by one transversal. The marked angle at the top crossing is $49^\\circ$. What is the angle marked with the question mark at the bottom crossing?',
      fig: {
        view: [-3.4, -1.1, 3.6, 4.2],
        elems: [
          { t: 'seg', a: [-3, 0], b: [3, 0] },
          { t: 'seg', a: [-3, 1.6], b: [3, 1.6] },
          { t: 'seg', a: [-3, 3.2], b: [3, 3.2] },
          { t: 'seg', a: [-1.92, -0.6], b: [1.9, 3.8] },
          { t: 'angle', at: [1.38, 3.2], from: [3, 3.2], to: [1.9, 3.8], r: 0.55, label: '49' },
          { t: 'angle', at: [-1.4, 0], from: [-3, 0], to: [-0.01, 1.6], r: 0.55, label: '?' },
        ],
      },
      choices: ['$49^\\circ$', '$41^\\circ$', '$131^\\circ$', '$139^\\circ$'],
      answer: 2,
      solution:
        'Take the lines one at a time. The $49^\\circ$ angle sits at the upper right of the top crossing, and the middle and bottom lines are parallel to the top one, so the upper-right angle at each of those crossings is $49^\\circ$ too — corresponding angles all the way down. The marked angle at the bottom is the upper-LEFT angle there, which forms a linear pair with that $49^\\circ$: $180^\\circ - 49^\\circ = 131^\\circ$ ✓. Check a second, independent way through a vertical angle, skipping the middle line entirely. The marked angle has a vertical twin at the bottom crossing: the angle opening down and to the right, which lies below the bottom line. That twin and the given $49^\\circ$ both lie outside the stack of three lines on the same side of the transversal, so they are same-side exterior angles and add to $180^\\circ$, making the twin $131^\\circ$; vertical angles are equal, so the marked angle is $131^\\circ$ ✓. (The choice $49^\\circ$ is STOPPING AT THE CORRESPONDING ANGLE ✗; $41^\\circ$ is THE COMPLEMENT MIX-UP ✗; $139^\\circ$ is COMPLEMENTING BEFORE SUPPLEMENTING, computing $180^\\circ - 41^\\circ$ ✗.)',
    },
    {
      q: 'One transversal cuts three parallel lines. The marked angle at the top crossing measures $87^\\circ$. What is the angle marked with the question mark at the bottom crossing?',
      fig: {
        view: [-3.4, -1.1, 3.6, 4.2],
        elems: [
          { t: 'seg', a: [-3, 0], b: [3, 0] },
          { t: 'seg', a: [-3, 1.6], b: [3, 1.6] },
          { t: 'seg', a: [-3, 3.2], b: [3, 3.2] },
          { t: 'seg', a: [-0.13, -0.6], b: [0.1, 3.8] },
          { t: 'angle', at: [0.07, 3.2], from: [3, 3.2], to: [0.1, 3.8], r: 0.6, label: '87' },
          { t: 'angle', at: [-0.1, 0], from: [-3, 0], to: [-0.02, 1.6], r: 0.6, label: '?' },
        ],
      },
      choices: ['$87^\\circ$', '$93^\\circ$', '$3^\\circ$', '$177^\\circ$'],
      answer: 1,
      solution:
        'The transversal is steep, so all eight — here twelve — angles are close to $90^\\circ$, and it is tempting to call the answer $90^\\circ$; the rules settle it exactly. The upper-right angle at every crossing is $87^\\circ$ by corresponding angles, and the marked angle at the bottom crossing is the upper-left one, its linear-pair neighbour: $180^\\circ - 87^\\circ = 93^\\circ$ ✓. Check a second, independent way with the two-families count. Every angle in this figure is $87^\\circ$ or $93^\\circ$, and the marked angle is the one that opens to the LEFT while the given angle opens to the RIGHT, which is a single neighbour step — one swap of family ✓ — so it is the other value, $93^\\circ$. (The choice $87^\\circ$ is STOPPING AT THE CORRESPONDING ANGLE ✗; $3^\\circ$ is THE COMPLEMENT MIX-UP ✗; $177^\\circ$ is COMPLEMENTING BEFORE SUPPLEMENTING, computing $180^\\circ - 3^\\circ$ ✗.)',
    },
    {
      q: 'Three parallel lines are cut by a single transversal, and the marked angle at the top crossing is $35^\\circ$. Find the angle marked with the question mark at the bottom crossing.',
      fig: {
        view: [-3.4, -1.0, 3.6, 3.6],
        elems: [
          { t: 'seg', a: [-3, 0], b: [3, 0] },
          { t: 'seg', a: [-3, 1.3], b: [3, 1.3] },
          { t: 'seg', a: [-3, 2.6], b: [3, 2.6] },
          { t: 'seg', a: [-2.69, -0.55], b: [2.6, 3.15] },
          { t: 'angle', at: [1.81, 2.6], from: [3, 2.6], to: [2.6, 3.15], r: 0.5, label: '35' },
          { t: 'angle', at: [-1.9, 0], from: [-3, 0], to: [-0.04, 1.3], r: 0.5, label: '?' },
        ],
      },
      choices: ['$35^\\circ$', '$55^\\circ$', '$125^\\circ$', '$145^\\circ$'],
      answer: 3,
      solution:
        'Corresponding angles carry the $35^\\circ$ from the top crossing down to the upper-right position at the middle crossing and again at the bottom crossing. The marked angle opens up and to the LEFT at the bottom, so it and that $35^\\circ$ are a linear pair along the bottom line: $180^\\circ - 35^\\circ = 145^\\circ$ ✓. Check a second, independent way by starting from the top crossing’s other angle. At the top crossing, the angle opening up and to the left is $180^\\circ - 35^\\circ = 145^\\circ$; the marked angle at the bottom sits in that very same position — up and to the left of the transversal — at a parallel line, so the two correspond and are equal: $145^\\circ$ ✓. The middle line is never needed. (The choice $35^\\circ$ is STOPPING AT THE CORRESPONDING ANGLE ✗; $55^\\circ$ is THE COMPLEMENT MIX-UP ✗; $125^\\circ$ is COMPLEMENTING BEFORE SUPPLEMENTING, computing $180^\\circ - 55^\\circ$ ✗.)',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 2,
  sections: {
    '2.4': s24,
  },
}
