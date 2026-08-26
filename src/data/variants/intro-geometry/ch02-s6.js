// Introduction to Geometry chapter 2 — variations for section 2.6
// (Exterior Angles). All problems, figures, and solutions are original
// MathQuest content.
//
// House rules for this file:
//  - Every angle was worked twice: once through the exterior-angle theorem
//    (exterior = sum of the two remote interiors) and once through a route
//    that never uses it — the $180^\circ$ interior sum plus a linear pair, or
//    the $360^\circ$ exterior sum. The two routes must agree before a key is
//    written down.
//  - Each slot keeps the shape of its base problem: a "find the exterior
//    angle" question stays that, a ratio question stays a ratio question, an
//    algebra question keeps its unknown, and a question about the apex of an
//    isosceles triangle never quietly turns into a question about a base
//    angle.
//  - Every figure was built numerically, not by eye. Each triangle really has
//    the angles its labels claim (apex placed from the two base angles), and
//    every extended side is exactly collinear with the side it extends, since
//    the far point is computed as E = C + k(C - B).
//  - Each distractor is one named mistake, named at the end of the solution in
//    CAPS. The traps running through this section are: ANSWERING WITH THE
//    INTERIOR ANGLE AT THE VERTEX, SUPPLEMENTING A REMOTE ANGLE, SUBTRACTING
//    THE REMOTES INSTEAD OF ADDING, COPYING THE EXTERIOR ANGLE STRAIGHT BACK,
//    SUBTRACTING FROM A FULL TURN, TAKING THE COMPLEMENT INSTEAD OF THE
//    SUPPLEMENT, USING THE INTERIOR ANGLE AS THE SUM, ADDING WHEN YOU SHOULD
//    SUBTRACT, CONFUSING THE INTERIOR SUM WITH THE EXTERIOR SUM, FORGETTING TO
//    SUBTRACT THE INTERIOR SUM, FORGETTING TO SHARE THE LEFTOVER EQUALLY,
//    STOPPING AT X, ANSWERING WITH A REMOTE ANGLE, USING THE REMOTE INTERIORS
//    IN PLACE OF THE EXTERIORS, JUST ADDING THE TWO GIVEN ANGLES, ANSWERING
//    WITH A BASE ANGLE, HALVING THE EXTERIOR ANGLE, DOUBLING THE BASE ANGLE,
//    ANSWERING THE OTHER PIECE OF THE STRAIGHT ANGLE, SPLITTING THE FULL TURN
//    FOUR WAYS, TREATING THE TOTAL AS SHAPE-DEPENDENT, ANSWERING WITH THE
//    LARGEST EXTERIOR ANGLE, PAIRING THE LARGEST INTERIOR WITH THE LARGEST
//    EXTERIOR, and ANSWERING WITH THE MIDDLE ANGLE.
//  - No two choices inside an item name the same value, and no two items that
//    share a variation slot share a keyed answer.

const s26 = [
  // s1 — exterior angle from its two remote interior angles.
  [
    {
      q: 'In the figure, side $BC$ is extended past $C$ to $E$. Given $\\angle A = 48^\\circ$ and $\\angle B = 67^\\circ$, what is the exterior angle $\\angle ACE$?',
      fig: {
        view: [-0.8, -0.8, 4.8, 4.6],
        elems: [
          { t: 'poly', pts: [[0, 0], [4, 0], [2.72, 3.02]], fill: false },
          { t: 'seg', a: [2.72, 3.02], b: [2.34, 3.93] },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 8 },
          { t: 'point', p: [4, 0], label: 'B', dx: 10, dy: 8 },
          { t: 'point', p: [2.72, 3.02], label: 'C', dx: 13, dy: 2 },
          { t: 'point', p: [2.34, 3.93], label: 'E', dx: 10, dy: -4 },
          { t: 'angle', at: [0, 0], from: [4, 0], to: [2.72, 3.02], r: 0.8, label: '48' },
          { t: 'angle', at: [4, 0], from: [0, 0], to: [2.72, 3.02], r: 0.6, label: '67' },
          { t: 'angle', at: [2.72, 3.02], from: [2.34, 3.93], to: [0, 0], r: 0.55, label: '?' },
        ],
      },
      choices: ['$65^\\circ$', '$132^\\circ$', '$115^\\circ$', '$19^\\circ$'],
      answer: 2,
      solution:
        'An exterior angle equals the sum of the two remote interior angles — the two corners far away from it — so $\\angle ACE = 48^\\circ + 67^\\circ = 115^\\circ$ ✓. Check a second, independent way by going through the vertex $C$ itself and never adding the remotes at all: the three interior angles of the triangle add to $180^\\circ$, so $\\angle ACB = 180^\\circ - 48^\\circ - 67^\\circ = 65^\\circ$, and $\\angle ACE$ sits on the straight line $BCE$ beside it, giving $180^\\circ - 65^\\circ = 115^\\circ$ ✓. Two routes, one answer. (Choosing $65^\\circ$ is ANSWERING WITH THE INTERIOR ANGLE AT THE VERTEX, which is the linear-pair partner of what was asked ✗; $132^\\circ$ is SUPPLEMENTING A REMOTE ANGLE, computing $180^\\circ - 48^\\circ$ ✗; $19^\\circ$ is SUBTRACTING THE REMOTES INSTEAD OF ADDING ✗ — and it fails the built-in check, since an exterior angle must be larger than either remote angle alone.)',
    },
    {
      q: 'Side $BC$ of the triangle below is extended past $C$ to $E$. If $\\angle A = 71^\\circ$ and $\\angle B = 54^\\circ$, find $\\angle ACE$.',
      fig: {
        view: [-0.8, -0.8, 4.8, 5.4],
        elems: [
          { t: 'poly', pts: [[0, 0], [4, 0], [1.29, 3.74]], fill: false },
          { t: 'seg', a: [1.29, 3.74], b: [0.61, 4.68] },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 8 },
          { t: 'point', p: [4, 0], label: 'B', dx: 10, dy: 8 },
          { t: 'point', p: [1.29, 3.74], label: 'C', dx: 13, dy: 2 },
          { t: 'point', p: [0.61, 4.68], label: 'E', dx: -12, dy: 0 },
          { t: 'angle', at: [0, 0], from: [4, 0], to: [1.29, 3.74], r: 0.75, label: '71' },
          { t: 'angle', at: [4, 0], from: [0, 0], to: [1.29, 3.74], r: 0.6, label: '54' },
          { t: 'angle', at: [1.29, 3.74], from: [0.61, 4.68], to: [0, 0], r: 0.5, label: '?' },
        ],
      },
      choices: ['$125^\\circ$', '$55^\\circ$', '$109^\\circ$', '$17^\\circ$'],
      answer: 0,
      solution:
        'The remote interior angles for the exterior angle at $C$ are $\\angle A$ and $\\angle B$, so $\\angle ACE = 71^\\circ + 54^\\circ = 125^\\circ$ ✓. Check a second, independent way with the interior sum and the straight line: $\\angle ACB = 180^\\circ - 71^\\circ - 54^\\circ = 55^\\circ$, and since $B$, $C$, $E$ lie on one line, $\\angle ACE = 180^\\circ - 55^\\circ = 125^\\circ$ ✓. The second route only ever subtracts, so it is a real test of the first. (Choosing $55^\\circ$ is ANSWERING WITH THE INTERIOR ANGLE AT THE VERTEX ✗; $109^\\circ$ is SUPPLEMENTING A REMOTE ANGLE, $180^\\circ - 71^\\circ$ ✗; $17^\\circ$ is SUBTRACTING THE REMOTES INSTEAD OF ADDING, and it is smaller than both remotes, which an exterior angle can never be ✗.)',
    },
    {
      q: 'In triangle $ABC$, side $BC$ is extended past $C$ to $E$. Given $\\angle A = 39^\\circ$ and $\\angle B = 88^\\circ$, how large is the exterior angle $\\angle ACE$?',
      fig: {
        view: [-0.8, -0.8, 4.9, 4.8],
        elems: [
          { t: 'poly', pts: [[0, 0], [4, 0], [3.89, 3.15]], fill: false },
          { t: 'seg', a: [3.89, 3.15], b: [3.86, 4.1] },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 8 },
          { t: 'point', p: [4, 0], label: 'B', dx: 10, dy: 8 },
          { t: 'point', p: [3.89, 3.15], label: 'C', dx: 13, dy: 4 },
          { t: 'point', p: [3.86, 4.1], label: 'E', dx: 10, dy: -4 },
          { t: 'angle', at: [0, 0], from: [4, 0], to: [3.89, 3.15], r: 0.85, label: '39' },
          { t: 'angle', at: [4, 0], from: [0, 0], to: [3.89, 3.15], r: 0.6, label: '88' },
          { t: 'angle', at: [3.89, 3.15], from: [3.86, 4.1], to: [0, 0], r: 0.5, label: '?' },
        ],
      },
      choices: ['$141^\\circ$', '$49^\\circ$', '$53^\\circ$', '$127^\\circ$'],
      answer: 3,
      solution:
        'One exterior angle does the work of two interior ones: $\\angle ACE = \\angle A + \\angle B = 39^\\circ + 88^\\circ = 127^\\circ$ ✓. Check a second, independent way without adding the remotes: the interior angle at $C$ is $180^\\circ - 39^\\circ - 88^\\circ = 53^\\circ$, and it forms a linear pair with $\\angle ACE$ along the straight line through $B$, $C$, and $E$, so $\\angle ACE = 180^\\circ - 53^\\circ = 127^\\circ$ ✓. (Choosing $53^\\circ$ is ANSWERING WITH THE INTERIOR ANGLE AT THE VERTEX ✗; $141^\\circ$ is SUPPLEMENTING A REMOTE ANGLE, $180^\\circ - 39^\\circ$ ✗; $49^\\circ$ is SUBTRACTING THE REMOTES INSTEAD OF ADDING ✗, and it is smaller than the remote $88^\\circ$, which gives the mistake away at once.)',
    },
  ],
  // s2 — interior angle from the exterior angle at the same vertex.
  [
    {
      q: 'An exterior angle of a triangle measures $143^\\circ$. How large is the interior angle at that same vertex?',
      fig: {
        view: [-0.8, -0.8, 6.1, 3.0],
        elems: [
          { t: 'poly', pts: [[0, 0], [4, 0], [1.11, 2.18]], fill: false },
          { t: 'seg', a: [4, 0], b: [5.3, 0] },
          { t: 'point', p: [4, 0], label: 'B', dx: 4, dy: 16 },
          { t: 'point', p: [5.3, 0], label: 'E', dx: 10, dy: 8 },
          { t: 'angle', at: [4, 0], from: [5.3, 0], to: [1.11, 2.18], r: 0.55, label: '143' },
          { t: 'angle', at: [4, 0], from: [1.11, 2.18], to: [0, 0], r: 0.9, label: '?' },
        ],
      },
      choices: ['$143^\\circ$', '$37^\\circ$', '$217^\\circ$', '$53^\\circ$'],
      answer: 1,
      solution:
        'The exterior angle and the interior angle at the same vertex sit side by side on a straight line, so they are a linear pair: interior $= 180^\\circ - 143^\\circ = 37^\\circ$ ✓. Check a second, independent way using the two remote angles instead of the straight line. Whatever those two far-away angles are, they add up to the exterior angle, $143^\\circ$; and all three interior angles add to $180^\\circ$; so the interior angle here is $180^\\circ - 143^\\circ = 37^\\circ$ ✓ — the same number reached through the exterior-angle theorem and the angle sum, with no linear pair involved. (Choosing $143^\\circ$ is COPYING THE EXTERIOR ANGLE STRAIGHT BACK ✗; $217^\\circ$ is SUBTRACTING FROM A FULL TURN, using $360^\\circ$ where a straight line calls for $180^\\circ$ ✗; $53^\\circ$ is TAKING THE COMPLEMENT INSTEAD OF THE SUPPLEMENT, since $90^\\circ - 37^\\circ = 53^\\circ$ ✗.)',
    },
    {
      q: 'In the figure, side $AB$ is extended past $B$ to $E$, and the exterior angle at $B$ measures $116^\\circ$. What is the interior angle of the triangle at $B$?',
      fig: {
        view: [-0.8, -0.8, 6.1, 4.2],
        elems: [
          { t: 'poly', pts: [[0, 0], [4, 0], [2.36, 3.37]], fill: false },
          { t: 'seg', a: [4, 0], b: [5.3, 0] },
          { t: 'point', p: [4, 0], label: 'B', dx: 4, dy: 16 },
          { t: 'point', p: [5.3, 0], label: 'E', dx: 10, dy: 8 },
          { t: 'angle', at: [4, 0], from: [5.3, 0], to: [2.36, 3.37], r: 0.55, label: '116' },
          { t: 'angle', at: [4, 0], from: [2.36, 3.37], to: [0, 0], r: 0.9, label: '?' },
        ],
      },
      choices: ['$26^\\circ$', '$244^\\circ$', '$116^\\circ$', '$64^\\circ$'],
      answer: 3,
      solution:
        'Points $A$, $B$, and $E$ lie on one straight line, so the interior angle at $B$ and the $116^\\circ$ exterior angle are a linear pair: interior $= 180^\\circ - 116^\\circ = 64^\\circ$ ✓. Check a second, independent way through the far corners. The two remote interior angles add to the exterior angle, $116^\\circ$, and the three interior angles of any triangle add to $180^\\circ$, so the angle left over at $B$ is $180^\\circ - 116^\\circ = 64^\\circ$ ✓. (Choosing $116^\\circ$ is COPYING THE EXTERIOR ANGLE STRAIGHT BACK ✗; $244^\\circ$ is SUBTRACTING FROM A FULL TURN instead of a half turn ✗ — and no angle of a triangle can exceed $180^\\circ$; $26^\\circ$ is TAKING THE COMPLEMENT INSTEAD OF THE SUPPLEMENT, $90^\\circ - 64^\\circ$ ✗.)',
    },
    {
      q: 'A triangle has an exterior angle of $158^\\circ$ at one of its vertices. Find the interior angle of the triangle at that vertex.',
      fig: {
        view: [-0.8, -0.8, 6.5, 2.6],
        elems: [
          { t: 'poly', pts: [[0, 0], [4.4, 0], [0.89, 1.42]], fill: false },
          { t: 'seg', a: [4.4, 0], b: [5.7, 0] },
          { t: 'point', p: [4.4, 0], label: 'B', dx: 4, dy: 16 },
          { t: 'point', p: [5.7, 0], label: 'E', dx: 10, dy: 8 },
          { t: 'angle', at: [4.4, 0], from: [5.7, 0], to: [0.89, 1.42], r: 0.6, label: '158' },
          { t: 'angle', at: [4.4, 0], from: [0.89, 1.42], to: [0, 0], r: 1.0, label: '?' },
        ],
      },
      choices: ['$22^\\circ$', '$158^\\circ$', '$202^\\circ$', '$68^\\circ$'],
      answer: 0,
      solution:
        'Interior and exterior angles at one vertex always make a straight angle together, so the interior angle is $180^\\circ - 158^\\circ = 22^\\circ$ ✓. Check a second, independent way with the theorem and the angle sum. The two remote interior angles must total $158^\\circ$, and all three interior angles total $180^\\circ$, so the third one measures $180^\\circ - 158^\\circ = 22^\\circ$ ✓ — a very sharp corner, exactly as the wide $158^\\circ$ opening beside it suggests. (Choosing $158^\\circ$ is COPYING THE EXTERIOR ANGLE STRAIGHT BACK ✗; $202^\\circ$ is SUBTRACTING FROM A FULL TURN ✗; $68^\\circ$ is TAKING THE COMPLEMENT INSTEAD OF THE SUPPLEMENT, $90^\\circ - 22^\\circ$ ✗.)',
    },
  ],
  // s3 — the exterior angle and one remote interior are given; find the other remote.
  [
    {
      q: 'In the figure, the exterior angle at $C$ measures $118^\\circ$ and $\\angle A = 45^\\circ$. What is $\\angle B$?',
      fig: {
        view: [-0.8, -0.8, 5.0, 4.8],
        elems: [
          { t: 'poly', pts: [[0, 0], [4.2, 0], [3.22, 3.22]], fill: false },
          { t: 'seg', a: [3.22, 3.22], b: [2.95, 4.12] },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 8 },
          { t: 'point', p: [4.2, 0], label: 'B', dx: 10, dy: 8 },
          { t: 'point', p: [3.22, 3.22], label: 'C', dx: 13, dy: 2 },
          { t: 'point', p: [2.95, 4.12], label: 'E', dx: 10, dy: -4 },
          { t: 'angle', at: [0, 0], from: [4.2, 0], to: [3.22, 3.22], r: 0.8, label: '45' },
          { t: 'angle', at: [3.22, 3.22], from: [2.95, 4.12], to: [0, 0], r: 0.55, label: '118' },
          { t: 'angle', at: [4.2, 0], from: [0, 0], to: [3.22, 3.22], r: 0.6, label: '?' },
        ],
      },
      choices: ['$73^\\circ$', '$17^\\circ$', '$62^\\circ$', '$163^\\circ$'],
      answer: 0,
      solution:
        'The exterior angle at $C$ is the sum of the two remote interiors, $\\angle A$ and $\\angle B$: $45^\\circ + \\angle B = 118^\\circ$, so $\\angle B = 118^\\circ - 45^\\circ = 73^\\circ$ ✓. Check a second, independent way by working inside the triangle. The interior angle at $C$ is $180^\\circ - 118^\\circ = 62^\\circ$, and the three interior angles add to $180^\\circ$, so $\\angle B = 180^\\circ - 45^\\circ - 62^\\circ = 73^\\circ$ ✓ — the same answer from the angle sum, with the theorem left on the shelf. (Choosing $17^\\circ$ is USING THE INTERIOR ANGLE AS THE SUM, subtracting $45^\\circ$ from $62^\\circ$ ✗; $62^\\circ$ is ANSWERING WITH THE INTERIOR ANGLE AT THE VERTEX, which was only a stepping stone ✗; $163^\\circ$ is ADDING WHEN YOU SHOULD SUBTRACT, and it is bigger than the whole exterior angle ✗.)',
    },
    {
      q: 'The exterior angle at $C$ in the figure measures $129^\\circ$, and $\\angle A = 42^\\circ$. Find $\\angle B$.',
      fig: {
        view: [-0.8, -0.8, 5.0, 5.3],
        elems: [
          { t: 'poly', pts: [[0, 0], [4.2, 0], [4.01, 3.61]], fill: false },
          { t: 'seg', a: [4.01, 3.61], b: [3.96, 4.62] },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 8 },
          { t: 'point', p: [4.2, 0], label: 'B', dx: 10, dy: 8 },
          { t: 'point', p: [4.01, 3.61], label: 'C', dx: 13, dy: 4 },
          { t: 'point', p: [3.96, 4.62], label: 'E', dx: 10, dy: -4 },
          { t: 'angle', at: [0, 0], from: [4.2, 0], to: [4.01, 3.61], r: 0.85, label: '42' },
          { t: 'angle', at: [4.01, 3.61], from: [3.96, 4.62], to: [0, 0], r: 0.5, label: '129' },
          { t: 'angle', at: [4.2, 0], from: [0, 0], to: [4.01, 3.61], r: 0.6, label: '?' },
        ],
      },
      choices: ['$9^\\circ$', '$51^\\circ$', '$87^\\circ$', '$171^\\circ$'],
      answer: 2,
      solution:
        'The two remote interior angles for the exterior angle at $C$ are $\\angle A$ and $\\angle B$, so $\\angle B = 129^\\circ - 42^\\circ = 87^\\circ$ ✓. Check a second, independent way through the interior of the triangle: the interior angle at $C$ is $180^\\circ - 129^\\circ = 51^\\circ$, and then $\\angle B = 180^\\circ - 42^\\circ - 51^\\circ = 87^\\circ$ ✓. The answer also passes the size test, since $87^\\circ$ is smaller than the $129^\\circ$ exterior angle, as every remote interior angle must be. (Choosing $9^\\circ$ is USING THE INTERIOR ANGLE AS THE SUM, computing $51^\\circ - 42^\\circ$ ✗; $51^\\circ$ is ANSWERING WITH THE INTERIOR ANGLE AT THE VERTEX ✗; $171^\\circ$ is ADDING WHEN YOU SHOULD SUBTRACT ✗.)',
    },
    {
      q: 'In the triangle shown, side $BC$ is extended past $C$ to $E$. The exterior angle $\\angle ACE$ measures $121^\\circ$ and $\\angle A = 38^\\circ$. How large is $\\angle B$?',
      fig: {
        view: [-0.8, -0.8, 5.0, 4.6],
        elems: [
          { t: 'poly', pts: [[0, 0], [4.2, 0], [3.83, 2.99]], fill: false },
          { t: 'seg', a: [3.83, 2.99], b: [3.72, 3.89] },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 8 },
          { t: 'point', p: [4.2, 0], label: 'B', dx: 10, dy: 8 },
          { t: 'point', p: [3.83, 2.99], label: 'C', dx: 13, dy: 4 },
          { t: 'point', p: [3.72, 3.89], label: 'E', dx: 10, dy: -4 },
          { t: 'angle', at: [0, 0], from: [4.2, 0], to: [3.83, 2.99], r: 0.9, label: '38' },
          { t: 'angle', at: [3.83, 2.99], from: [3.72, 3.89], to: [0, 0], r: 0.5, label: '121' },
          { t: 'angle', at: [4.2, 0], from: [0, 0], to: [3.83, 2.99], r: 0.6, label: '?' },
        ],
      },
      choices: ['$21^\\circ$', '$83^\\circ$', '$59^\\circ$', '$159^\\circ$'],
      answer: 1,
      solution:
        'An exterior angle is the sum of the two remote interiors, so $38^\\circ + \\angle B = 121^\\circ$ and $\\angle B = 83^\\circ$ ✓. Check a second, independent way with the angle sum alone: the interior angle at $C$ is $180^\\circ - 121^\\circ = 59^\\circ$, so $\\angle B = 180^\\circ - 38^\\circ - 59^\\circ = 83^\\circ$ ✓. Both routes land on $83^\\circ$, and $38^\\circ + 83^\\circ + 59^\\circ = 180^\\circ$ confirms the whole triangle. (Choosing $21^\\circ$ is USING THE INTERIOR ANGLE AS THE SUM, $59^\\circ - 38^\\circ$ ✗; $59^\\circ$ is ANSWERING WITH THE INTERIOR ANGLE AT THE VERTEX ✗; $159^\\circ$ is ADDING WHEN YOU SHOULD SUBTRACT ✗.)',
    },
  ],
  // s4 — the 360-degree exterior angle sum, forwards and backwards.
  [
    {
      q: 'Maya walks all the way around a triangular flower bed and returns to her starting corner facing the way she began. At each corner she turns through the exterior angle there. What is the total of her three turns?',
      choices: ['$540^\\circ$', '$180^\\circ$', '$360^\\circ$', 'It changes when the triangle changes shape'],
      answer: 2,
      solution:
        'Maya ends up facing exactly the way she started, and the only turning she did was at the three corners, so her three turns add up to one full spin: $360^\\circ$ ✓. Check a second, independent way with arithmetic instead of walking. At each corner the interior and exterior angles form a straight line, so the three pairs together measure $3 \\times 180^\\circ = 540^\\circ$. The interior angles of a triangle account for $180^\\circ$ of that, which leaves $540^\\circ - 180^\\circ = 360^\\circ$ for the exterior angles ✓. Notice that the $180^\\circ$ subtracted is the same for every triangle, which is why the total never moves. (Choosing $180^\\circ$ is CONFUSING THE INTERIOR SUM WITH THE EXTERIOR SUM ✗; $540^\\circ$ is FORGETTING TO SUBTRACT THE INTERIOR SUM from the three straight angles ✗; "It changes when the triangle changes shape" is TREATING THE TOTAL AS SHAPE-DEPENDENT, missing that the subtraction removes the same $180^\\circ$ every time ✗.)',
    },
    {
      q: 'Two of the three exterior angles of a triangle (one drawn at each vertex) are equal to each other, and the third one measures $150^\\circ$. How large is each of the two equal exterior angles?',
      choices: ['$210^\\circ$', '$105^\\circ$', '$75^\\circ$', '$15^\\circ$'],
      answer: 1,
      solution:
        'One exterior angle at each vertex always totals $360^\\circ$. The known one uses up $150^\\circ$, leaving $360^\\circ - 150^\\circ = 210^\\circ$ to be shared by the two equal angles, so each is $\\frac{210^\\circ}{2} = 105^\\circ$ ✓. Check a second, independent way from inside the triangle. The interior angle beside the $150^\\circ$ exterior angle is $180^\\circ - 150^\\circ = 30^\\circ$, so the other two interior angles share $180^\\circ - 30^\\circ = 150^\\circ$; being equal, each is $75^\\circ$, and each exterior angle beside them is $180^\\circ - 75^\\circ = 105^\\circ$ ✓. (Choosing $210^\\circ$ is FORGETTING TO SHARE THE LEFTOVER EQUALLY, stopping one step early ✗ — and no exterior angle of a triangle can be that large; $75^\\circ$ is ANSWERING WITH THE INTERIOR ANGLE AT THE VERTEX rather than the exterior angle asked for ✗; $15^\\circ$ is CONFUSING THE INTERIOR SUM WITH THE EXTERIOR SUM, halving $180^\\circ - 150^\\circ$ ✗.)',
    },
    {
      q: 'All three exterior angles of a triangle (one drawn at each vertex) turn out to be equal to one another. How large is each of them?',
      choices: ['$60^\\circ$', '$90^\\circ$', '$180^\\circ$', '$120^\\circ$'],
      answer: 3,
      solution:
        'The three exterior angles add to $360^\\circ$, and equal shares of $360^\\circ$ among three angles give $\\frac{360^\\circ}{3} = 120^\\circ$ each ✓. Check a second, independent way through the interior angles. Equal exterior angles force equal interior angles, because each interior angle is $180^\\circ$ minus its own exterior angle; three equal interior angles summing to $180^\\circ$ are $60^\\circ$ apiece, so each exterior angle is $180^\\circ - 60^\\circ = 120^\\circ$ ✓. The triangle is equilateral. (Choosing $60^\\circ$ is ANSWERING WITH THE INTERIOR ANGLE AT THE VERTEX — that is the interior angle, not the exterior one ✗; $180^\\circ$ is FORGETTING TO SUBTRACT THE INTERIOR SUM, dividing $540^\\circ$ by three ✗; $90^\\circ$ is SPLITTING THE FULL TURN FOUR WAYS instead of three ✗.)',
    },
  ],
  // s5 — exterior angle given as an expression in x, remote interiors given too.
  [
    {
      q: 'In the figure, side $AB$ is extended past $B$ to $E$. The exterior angle at $B$ measures $5x$, and the remote interior angles measure $48^\\circ$ and $2x + 30^\\circ$. What is the exterior angle at $B$?',
      fig: {
        view: [-0.8, -0.8, 5.5, 2.9],
        elems: [
          { t: 'poly', pts: [[0, 0], [3.6, 0], [1.86, 2.07]], fill: false },
          { t: 'seg', a: [3.6, 0], b: [4.7, 0] },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 8 },
          { t: 'point', p: [3.6, 0], label: 'B', dx: 4, dy: 16 },
          { t: 'point', p: [1.86, 2.07], label: 'C', dx: 0, dy: -10 },
          { t: 'point', p: [4.7, 0], label: 'E', dx: 10, dy: 8 },
          { t: 'angle', at: [0, 0], from: [3.6, 0], to: [1.86, 2.07], r: 0.7, label: '48' },
          { t: 'angle', at: [1.86, 2.07], from: [3.6, 0], to: [0, 0], r: 0.5, label: '2x+30' },
          { t: 'angle', at: [3.6, 0], from: [4.7, 0], to: [1.86, 2.07], r: 0.6, label: '5x' },
        ],
      },
      choices: ['$26^\\circ$', '$50^\\circ$', '$82^\\circ$', '$130^\\circ$'],
      answer: 3,
      solution:
        'Set the exterior angle equal to the sum of its two remote interiors: $5x = 48^\\circ + 2x + 30^\\circ$, so $3x = 78^\\circ$ and $x = 26^\\circ$. The exterior angle is $5(26^\\circ) = 130^\\circ$ ✓. Check a second, independent way by building the equation out of the interior angle sum instead. The interior angle at $B$ is $180^\\circ - 5x$, and the three interior angles must total $180^\\circ$: $48^\\circ + (2x + 30^\\circ) + (180^\\circ - 5x) = 180^\\circ$, which tidies to $258^\\circ - 3x = 180^\\circ$, so $x = 26^\\circ$ again ✓. The remotes are then $48^\\circ$ and $82^\\circ$, and $48 + 82 = 130$ ✓. (Choosing $26^\\circ$ is STOPPING AT X instead of answering the question asked ✗; $82^\\circ$ is ANSWERING WITH A REMOTE ANGLE ✗; $50^\\circ$ is ANSWERING WITH THE INTERIOR ANGLE AT THE VERTEX ✗.)',
    },
    {
      q: 'Side $AB$ of the triangle below is extended past $B$ to $E$. The exterior angle at $B$ measures $4x + 9^\\circ$, and its remote interior angles measure $66^\\circ$ and $x + 45^\\circ$. Find the exterior angle at $B$.',
      fig: {
        view: [-0.8, -0.8, 5.5, 2.8],
        elems: [
          { t: 'poly', pts: [[0, 0], [3.6, 0], [0.86, 1.92]], fill: false },
          { t: 'seg', a: [3.6, 0], b: [4.7, 0] },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 8 },
          { t: 'point', p: [3.6, 0], label: 'B', dx: 4, dy: 16 },
          { t: 'point', p: [0.86, 1.92], label: 'C', dx: 0, dy: -10 },
          { t: 'point', p: [4.7, 0], label: 'E', dx: 10, dy: 8 },
          { t: 'angle', at: [0, 0], from: [3.6, 0], to: [0.86, 1.92], r: 0.6, label: '66' },
          { t: 'angle', at: [0.86, 1.92], from: [3.6, 0], to: [0, 0], r: 0.45, label: 'x+45' },
          { t: 'angle', at: [3.6, 0], from: [4.7, 0], to: [0.86, 1.92], r: 0.65, label: '4x+9' },
        ],
      },
      choices: ['$34^\\circ$', '$145^\\circ$', '$79^\\circ$', '$35^\\circ$'],
      answer: 1,
      solution:
        'Exterior equals the sum of the remotes: $4x + 9^\\circ = 66^\\circ + x + 45^\\circ$, so $4x + 9^\\circ = x + 111^\\circ$, giving $3x = 102^\\circ$ and $x = 34^\\circ$. The exterior angle is $4(34^\\circ) + 9^\\circ = 145^\\circ$ ✓. Check a second, independent way with the interior sum. The interior angle at $B$ is $180^\\circ - (4x + 9^\\circ) = 171^\\circ - 4x$, and the three interiors total $180^\\circ$: $66^\\circ + (x + 45^\\circ) + (171^\\circ - 4x) = 180^\\circ$, which becomes $282^\\circ - 3x = 180^\\circ$ and $x = 34^\\circ$ ✓. The remotes are $66^\\circ$ and $79^\\circ$, and $66 + 79 = 145$ ✓. (Choosing $34^\\circ$ is STOPPING AT X ✗; $79^\\circ$ is ANSWERING WITH A REMOTE ANGLE ✗; $35^\\circ$ is ANSWERING WITH THE INTERIOR ANGLE AT THE VERTEX ✗.)',
    },
    {
      q: 'In the figure, the exterior angle at $B$ measures $7x$ and the two remote interior angles measure $40^\\circ$ and $3x + 24^\\circ$. How large is the exterior angle at $B$?',
      fig: {
        view: [-0.8, -0.8, 5.5, 3.1],
        elems: [
          { t: 'poly', pts: [[0, 0], [3.6, 0], [2.69, 2.26]], fill: false },
          { t: 'seg', a: [3.6, 0], b: [4.7, 0] },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 8 },
          { t: 'point', p: [3.6, 0], label: 'B', dx: 4, dy: 16 },
          { t: 'point', p: [2.69, 2.26], label: 'C', dx: 0, dy: -10 },
          { t: 'point', p: [4.7, 0], label: 'E', dx: 10, dy: 8 },
          { t: 'angle', at: [0, 0], from: [3.6, 0], to: [2.69, 2.26], r: 0.8, label: '40' },
          { t: 'angle', at: [2.69, 2.26], from: [3.6, 0], to: [0, 0], r: 0.5, label: '3x+24' },
          { t: 'angle', at: [3.6, 0], from: [4.7, 0], to: [2.69, 2.26], r: 0.55, label: '7x' },
        ],
      },
      choices: ['$16^\\circ$', '$112^\\circ$', '$68^\\circ$', '$72^\\circ$'],
      answer: 1,
      solution:
        'The exterior angle equals the sum of the remotes: $7x = 40^\\circ + 3x + 24^\\circ$, so $4x = 64^\\circ$ and $x = 16^\\circ$. The exterior angle is $7(16^\\circ) = 112^\\circ$ ✓. Check a second, independent way through the interior angle sum. The interior angle at $B$ is $180^\\circ - 7x$, so $40^\\circ + (3x + 24^\\circ) + (180^\\circ - 7x) = 180^\\circ$, which simplifies to $244^\\circ - 4x = 180^\\circ$ and $x = 16^\\circ$ ✓. The remotes come out as $40^\\circ$ and $72^\\circ$, and $40 + 72 = 112$ ✓. (Choosing $16^\\circ$ is STOPPING AT X ✗; $72^\\circ$ is ANSWERING WITH A REMOTE ANGLE ✗; $68^\\circ$ is ANSWERING WITH THE INTERIOR ANGLE AT THE VERTEX ✗.)',
    },
  ],
  // s6 — the third exterior angle from the other two.
  [
    {
      q: 'Two exterior angles of a triangle, drawn at different vertices, measure $125^\\circ$ and $148^\\circ$. What is the exterior angle at the third vertex?',
      fig: {
        view: [-2.4, -0.8, 6.7, 3.5],
        elems: [
          { t: 'poly', pts: [[0, 0], [4.4, 0], [1.34, 1.91]], fill: false },
          { t: 'seg', a: [0, 0], b: [-1.5, 0] },
          { t: 'seg', a: [4.4, 0], b: [5.9, 0] },
          { t: 'seg', a: [1.34, 1.91], b: [0.12, 2.67] },
          { t: 'point', p: [0, 0], label: 'A', dx: 0, dy: 16 },
          { t: 'point', p: [4.4, 0], label: 'B', dx: 0, dy: 16 },
          { t: 'point', p: [1.34, 1.91], label: 'C', dx: 13, dy: 0 },
          { t: 'angle', at: [0, 0], from: [-1.5, 0], to: [1.34, 1.91], r: 0.55, label: '125' },
          { t: 'angle', at: [4.4, 0], from: [5.9, 0], to: [1.34, 1.91], r: 0.55, label: '148' },
          { t: 'angle', at: [1.34, 1.91], from: [0.12, 2.67], to: [0, 0], r: 0.5, label: '?' },
        ],
      },
      choices: ['$87^\\circ$', '$93^\\circ$', '$267^\\circ$', '$273^\\circ$'],
      answer: 0,
      solution:
        'One exterior angle at each vertex adds to $360^\\circ$, so the third is $360^\\circ - 125^\\circ - 148^\\circ = 87^\\circ$ ✓. Check a second, independent way by going through the interior angles instead. The interiors beside the given exterior angles are $180^\\circ - 125^\\circ = 55^\\circ$ and $180^\\circ - 148^\\circ = 32^\\circ$, so the third interior angle is $180^\\circ - 55^\\circ - 32^\\circ = 93^\\circ$, and the exterior angle beside it is $180^\\circ - 93^\\circ = 87^\\circ$ ✓. (Choosing $93^\\circ$ is ANSWERING WITH THE INTERIOR ANGLE AT THE VERTEX, one step short of the finish ✗; $273^\\circ$ is USING THE REMOTE INTERIORS IN PLACE OF THE EXTERIORS, subtracting $55^\\circ$ and $32^\\circ$ from $360^\\circ$ ✗; $267^\\circ$ is FORGETTING TO SUBTRACT THE INTERIOR SUM, starting from $540^\\circ$ instead of $360^\\circ$ ✗.)',
    },
    {
      q: 'A triangle has one exterior angle drawn at each vertex. Two of them measure $133^\\circ$ and $109^\\circ$. How large is the third one?',
      fig: {
        view: [-2.4, -0.8, 6.7, 5.2],
        elems: [
          { t: 'poly', pts: [[0, 0], [4.4, 0], [3.21, 3.45]], fill: false },
          { t: 'seg', a: [0, 0], b: [-1.5, 0] },
          { t: 'seg', a: [4.4, 0], b: [5.9, 0] },
          { t: 'seg', a: [3.21, 3.45], b: [2.85, 4.49] },
          { t: 'point', p: [0, 0], label: 'A', dx: 0, dy: 16 },
          { t: 'point', p: [4.4, 0], label: 'B', dx: 0, dy: 16 },
          { t: 'point', p: [3.21, 3.45], label: 'C', dx: 13, dy: 0 },
          { t: 'angle', at: [0, 0], from: [-1.5, 0], to: [3.21, 3.45], r: 0.55, label: '133' },
          { t: 'angle', at: [4.4, 0], from: [5.9, 0], to: [3.21, 3.45], r: 0.55, label: '109' },
          { t: 'angle', at: [3.21, 3.45], from: [2.85, 4.49], to: [0, 0], r: 0.5, label: '?' },
        ],
      },
      choices: ['$118^\\circ$', '$62^\\circ$', '$242^\\circ$', '$298^\\circ$'],
      answer: 0,
      solution:
        'Walking once around the triangle turns you through all three exterior angles and lands you facing your starting direction, so they total $360^\\circ$: the third is $360^\\circ - 133^\\circ - 109^\\circ = 118^\\circ$ ✓. Check a second, independent way from the interior side. The two given exterior angles sit beside interiors of $47^\\circ$ and $71^\\circ$, so the remaining interior angle is $180^\\circ - 47^\\circ - 71^\\circ = 62^\\circ$, and its exterior partner is $180^\\circ - 62^\\circ = 118^\\circ$ ✓. (Choosing $62^\\circ$ is ANSWERING WITH THE INTERIOR ANGLE AT THE VERTEX ✗; $242^\\circ$ is USING THE REMOTE INTERIORS IN PLACE OF THE EXTERIORS, subtracting $47^\\circ$ and $71^\\circ$ from $360^\\circ$ ✗; $298^\\circ$ is FORGETTING TO SUBTRACT THE INTERIOR SUM, using $540^\\circ$ as the exterior total ✗.)',
    },
    {
      q: 'Exterior angles of $138^\\circ$ and $119^\\circ$ are drawn at two vertices of a triangle. What does the exterior angle at the remaining vertex measure?',
      fig: {
        view: [-2.4, -0.8, 6.7, 4.3],
        elems: [
          { t: 'poly', pts: [[0, 0], [4.4, 0], [2.94, 2.64]], fill: false },
          { t: 'seg', a: [0, 0], b: [-1.5, 0] },
          { t: 'seg', a: [4.4, 0], b: [5.9, 0] },
          { t: 'seg', a: [2.94, 2.64], b: [2.43, 3.56] },
          { t: 'point', p: [0, 0], label: 'A', dx: 0, dy: 16 },
          { t: 'point', p: [4.4, 0], label: 'B', dx: 0, dy: 16 },
          { t: 'point', p: [2.94, 2.64], label: 'C', dx: 13, dy: 0 },
          { t: 'angle', at: [0, 0], from: [-1.5, 0], to: [2.94, 2.64], r: 0.55, label: '138' },
          { t: 'angle', at: [4.4, 0], from: [5.9, 0], to: [2.94, 2.64], r: 0.55, label: '119' },
          { t: 'angle', at: [2.94, 2.64], from: [2.43, 3.56], to: [0, 0], r: 0.5, label: '?' },
        ],
      },
      choices: ['$283^\\circ$', '$77^\\circ$', '$103^\\circ$', '$257^\\circ$'],
      answer: 2,
      solution:
        'The three exterior angles, one per vertex, always total $360^\\circ$, so the missing one is $360^\\circ - 138^\\circ - 119^\\circ = 103^\\circ$ ✓. Check a second, independent way using only interior angles. The interiors beside the given exteriors measure $180^\\circ - 138^\\circ = 42^\\circ$ and $180^\\circ - 119^\\circ = 61^\\circ$, so the last interior angle is $180^\\circ - 42^\\circ - 61^\\circ = 77^\\circ$, and the exterior angle beside it is $180^\\circ - 77^\\circ = 103^\\circ$ ✓. (Choosing $77^\\circ$ is ANSWERING WITH THE INTERIOR ANGLE AT THE VERTEX ✗; $257^\\circ$ is USING THE REMOTE INTERIORS IN PLACE OF THE EXTERIORS ✗; $283^\\circ$ is FORGETTING TO SUBTRACT THE INTERIOR SUM, treating $540^\\circ$ as the exterior total ✗.)',
    },
  ],
  // s7 — isosceles triangle: apex angle from an exterior angle at a base vertex.
  [
    {
      q: 'In the isosceles triangle shown, the two marked sides are equal, and the exterior angle at $A$ measures $116^\\circ$. What is the apex angle $\\angle C$?',
      fig: {
        view: [-2.2, -0.8, 4.2, 4.2],
        elems: [
          { t: 'poly', pts: [[0, 0], [3.4, 0], [1.7, 3.49]], fill: false },
          { t: 'seg', a: [0, 0], b: [-1.3, 0] },
          { t: 'point', p: [0, 0], label: 'A', dx: 2, dy: 16 },
          { t: 'point', p: [3.4, 0], label: 'B', dx: 10, dy: 8 },
          { t: 'point', p: [1.7, 3.49], label: 'C', dx: 0, dy: -10 },
          { t: 'tick', a: [0, 0], b: [1.7, 3.49], n: 1 },
          { t: 'tick', a: [3.4, 0], b: [1.7, 3.49], n: 1 },
          { t: 'angle', at: [0, 0], from: [-1.3, 0], to: [1.7, 3.49], r: 0.55, label: '116' },
          { t: 'angle', at: [1.7, 3.49], from: [3.4, 0], to: [0, 0], r: 0.6, label: '?' },
        ],
      },
      choices: ['$64^\\circ$', '$52^\\circ$', '$116^\\circ$', '$58^\\circ$'],
      answer: 1,
      solution:
        'The interior angle at $A$ is $180^\\circ - 116^\\circ = 64^\\circ$. Equal sides face equal angles, so the base angle at $B$ is $64^\\circ$ as well, leaving $\\angle C = 180^\\circ - 64^\\circ - 64^\\circ = 52^\\circ$ ✓. Check a second, independent way with the exterior-angle theorem, which skips the interior sum entirely: the exterior angle at $A$ equals its two remote interiors, $\\angle B + \\angle C$, so $116^\\circ = 64^\\circ + \\angle C$ and $\\angle C = 52^\\circ$ ✓. (Choosing $64^\\circ$ is ANSWERING WITH A BASE ANGLE instead of the apex ✗; $116^\\circ$ is COPYING THE EXTERIOR ANGLE STRAIGHT BACK ✗; $58^\\circ$ is HALVING THE EXTERIOR ANGLE, which would only work if the exterior angle were split evenly between the two remote angles ✗.)',
    },
    {
      q: 'The triangle below is isosceles, with the two marked sides equal. Side $BA$ is extended past $A$, and the exterior angle formed at $A$ measures $143^\\circ$. Find the apex angle $\\angle C$.',
      fig: {
        view: [-2.2, -0.8, 4.9, 2.6],
        elems: [
          { t: 'poly', pts: [[0, 0], [4.4, 0], [2.2, 1.66]], fill: false },
          { t: 'seg', a: [0, 0], b: [-1.3, 0] },
          { t: 'point', p: [0, 0], label: 'A', dx: 2, dy: 16 },
          { t: 'point', p: [4.4, 0], label: 'B', dx: 10, dy: 8 },
          { t: 'point', p: [2.2, 1.66], label: 'C', dx: 0, dy: -10 },
          { t: 'tick', a: [0, 0], b: [2.2, 1.66], n: 1 },
          { t: 'tick', a: [4.4, 0], b: [2.2, 1.66], n: 1 },
          { t: 'angle', at: [0, 0], from: [-1.3, 0], to: [2.2, 1.66], r: 0.5, label: '143' },
          { t: 'angle', at: [2.2, 1.66], from: [4.4, 0], to: [0, 0], r: 0.7, label: '?' },
        ],
      },
      choices: ['$74^\\circ$', '$37^\\circ$', '$106^\\circ$', '$143^\\circ$'],
      answer: 2,
      solution:
        'The interior angle at $A$ is $180^\\circ - 143^\\circ = 37^\\circ$, and the equal sides make $\\angle B = 37^\\circ$ too, so the apex is $\\angle C = 180^\\circ - 37^\\circ - 37^\\circ = 106^\\circ$ ✓. Check a second, independent way through the exterior-angle theorem: $143^\\circ = \\angle B + \\angle C = 37^\\circ + \\angle C$, giving $\\angle C = 106^\\circ$ ✓ with no use of the interior sum. A wide apex and two narrow base angles is exactly what the picture shows. (Choosing $37^\\circ$ is ANSWERING WITH A BASE ANGLE ✗; $143^\\circ$ is COPYING THE EXTERIOR ANGLE STRAIGHT BACK ✗; $74^\\circ$ is DOUBLING THE BASE ANGLE and forgetting to subtract from $180^\\circ$ ✗.)',
    },
    {
      q: 'An isosceles triangle has its two marked sides equal. The exterior angle at the base vertex $A$ measures $128^\\circ$. How large is the apex angle $\\angle C$?',
      fig: {
        view: [-2.2, -0.8, 4.5, 3.4],
        elems: [
          { t: 'poly', pts: [[0, 0], [4, 0], [2, 2.56]], fill: false },
          { t: 'seg', a: [0, 0], b: [-1.3, 0] },
          { t: 'point', p: [0, 0], label: 'A', dx: 2, dy: 16 },
          { t: 'point', p: [4, 0], label: 'B', dx: 10, dy: 8 },
          { t: 'point', p: [2, 2.56], label: 'C', dx: 0, dy: -10 },
          { t: 'tick', a: [0, 0], b: [2, 2.56], n: 1 },
          { t: 'tick', a: [4, 0], b: [2, 2.56], n: 1 },
          { t: 'angle', at: [0, 0], from: [-1.3, 0], to: [2, 2.56], r: 0.55, label: '128' },
          { t: 'angle', at: [2, 2.56], from: [4, 0], to: [0, 0], r: 0.65, label: '?' },
        ],
      },
      choices: ['$76^\\circ$', '$52^\\circ$', '$64^\\circ$', '$128^\\circ$'],
      answer: 0,
      solution:
        'The interior angle at $A$ is $180^\\circ - 128^\\circ = 52^\\circ$, the base angles of an isosceles triangle are equal so $\\angle B = 52^\\circ$, and the apex is $\\angle C = 180^\\circ - 52^\\circ - 52^\\circ = 76^\\circ$ ✓. Check a second, independent way with the exterior angle at $A$, whose remote interiors are $\\angle B$ and $\\angle C$: $128^\\circ = 52^\\circ + \\angle C$, so $\\angle C = 76^\\circ$ ✓. (Choosing $52^\\circ$ is ANSWERING WITH A BASE ANGLE ✗; $128^\\circ$ is COPYING THE EXTERIOR ANGLE STRAIGHT BACK ✗; $64^\\circ$ is HALVING THE EXTERIOR ANGLE, which splits $128^\\circ$ evenly between two remote angles that are not equal ✗.)',
    },
  ],
  // s8 — both remote interiors and the exterior angle are expressions in x.
  [
    {
      q: 'An exterior angle of a triangle measures $3x - 10^\\circ$, and its two remote interior angles measure $x + 22^\\circ$ and $x + 12^\\circ$. What is the exterior angle?',
      fig: {
        view: [-0.8, -0.8, 4.8, 5.2],
        elems: [
          { t: 'poly', pts: [[0, 0], [4, 0], [1.59, 3.57]], fill: false },
          { t: 'seg', a: [1.59, 3.57], b: [0.99, 4.46] },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 8 },
          { t: 'point', p: [4, 0], label: 'B', dx: 10, dy: 8 },
          { t: 'point', p: [1.59, 3.57], label: 'C', dx: 13, dy: 2 },
          { t: 'point', p: [0.99, 4.46], label: 'E', dx: -12, dy: 0 },
          { t: 'angle', at: [0, 0], from: [4, 0], to: [1.59, 3.57], r: 0.75, label: 'x+22' },
          { t: 'angle', at: [4, 0], from: [0, 0], to: [1.59, 3.57], r: 0.6, label: 'x+12' },
          { t: 'angle', at: [1.59, 3.57], from: [0.99, 4.46], to: [0, 0], r: 0.5, label: '3x-10' },
        ],
      },
      choices: ['$44^\\circ$', '$66^\\circ$', '$58^\\circ$', '$122^\\circ$'],
      answer: 3,
      solution:
        'Exterior equals the sum of the remotes: $3x - 10^\\circ = (x + 22^\\circ) + (x + 12^\\circ) = 2x + 34^\\circ$, so $x = 44^\\circ$ and the exterior angle is $3(44^\\circ) - 10^\\circ = 122^\\circ$ ✓. Check a second, independent way by writing the interior sum instead. The interior angle at that vertex is $180^\\circ - (3x - 10^\\circ) = 190^\\circ - 3x$, and the three interiors total $180^\\circ$: $(x + 22^\\circ) + (x + 12^\\circ) + (190^\\circ - 3x) = 180^\\circ$, which becomes $224^\\circ - x = 180^\\circ$ and $x = 44^\\circ$ ✓. The remotes are $66^\\circ$ and $56^\\circ$, and $66 + 56 = 122$ ✓. (Choosing $44^\\circ$ is STOPPING AT X ✗; $66^\\circ$ is ANSWERING WITH A REMOTE ANGLE ✗; $58^\\circ$ is ANSWERING WITH THE INTERIOR ANGLE AT THE VERTEX ✗.)',
    },
    {
      q: 'In the figure, the exterior angle at $C$ measures $4x + 2^\\circ$, while the remote interior angles measure $2x + 6^\\circ$ and $x + 20^\\circ$. How large is the exterior angle at $C$?',
      fig: {
        view: [-0.8, -0.8, 4.8, 3.9],
        elems: [
          { t: 'poly', pts: [[0, 0], [4, 0], [1.65, 2.27]], fill: false },
          { t: 'seg', a: [1.65, 2.27], b: [0.83, 3.06] },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 8 },
          { t: 'point', p: [4, 0], label: 'B', dx: 10, dy: 8 },
          { t: 'point', p: [1.65, 2.27], label: 'C', dx: 13, dy: 2 },
          { t: 'point', p: [0.83, 3.06], label: 'E', dx: -12, dy: 0 },
          { t: 'angle', at: [0, 0], from: [4, 0], to: [1.65, 2.27], r: 0.7, label: '2x+6' },
          { t: 'angle', at: [4, 0], from: [0, 0], to: [1.65, 2.27], r: 0.7, label: 'x+20' },
          { t: 'angle', at: [1.65, 2.27], from: [0.83, 3.06], to: [0, 0], r: 0.5, label: '4x+2' },
        ],
      },
      choices: ['$24^\\circ$', '$54^\\circ$', '$82^\\circ$', '$98^\\circ$'],
      answer: 3,
      solution:
        'Set exterior equal to the sum of the remotes: $4x + 2^\\circ = (2x + 6^\\circ) + (x + 20^\\circ) = 3x + 26^\\circ$, so $x = 24^\\circ$ and the exterior angle is $4(24^\\circ) + 2^\\circ = 98^\\circ$ ✓. Check a second, independent way with the interior angle sum. The interior angle at $C$ is $180^\\circ - (4x + 2^\\circ) = 178^\\circ - 4x$, so $(2x + 6^\\circ) + (x + 20^\\circ) + (178^\\circ - 4x) = 180^\\circ$, which tidies to $204^\\circ - x = 180^\\circ$ and $x = 24^\\circ$ ✓. The remotes are $54^\\circ$ and $44^\\circ$, and $54 + 44 = 98$ ✓. (Choosing $24^\\circ$ is STOPPING AT X ✗; $54^\\circ$ is ANSWERING WITH A REMOTE ANGLE ✗; $82^\\circ$ is ANSWERING WITH THE INTERIOR ANGLE AT THE VERTEX ✗.)',
    },
    {
      q: 'A triangle has an exterior angle of $5x - 4^\\circ$ at one vertex, and the two remote interior angles measure $2x + 16^\\circ$ and $x + 36^\\circ$. Find the exterior angle.',
      fig: {
        w: 260,
        view: [-0.8, -0.8, 4.2, 5.8],
        elems: [
          { t: 'poly', pts: [[0, 0], [3.4, 0], [1.36, 4.18]], fill: false },
          { t: 'seg', a: [1.36, 4.18], b: [0.95, 5.02] },
          { t: 'point', p: [0, 0], label: 'A', dx: -10, dy: 8 },
          { t: 'point', p: [3.4, 0], label: 'B', dx: 10, dy: 8 },
          { t: 'point', p: [1.36, 4.18], label: 'C', dx: 13, dy: 2 },
          { t: 'point', p: [0.95, 5.02], label: 'E', dx: -12, dy: 0 },
          { t: 'angle', at: [0, 0], from: [3.4, 0], to: [1.36, 4.18], r: 0.6, label: '2x+16' },
          { t: 'angle', at: [3.4, 0], from: [0, 0], to: [1.36, 4.18], r: 0.6, label: 'x+36' },
          { t: 'angle', at: [1.36, 4.18], from: [0.95, 5.02], to: [0, 0], r: 0.45, label: '5x-4' },
        ],
      },
      choices: ['$28^\\circ$', '$136^\\circ$', '$72^\\circ$', '$44^\\circ$'],
      answer: 1,
      solution:
        'The exterior angle is the sum of the two remote interiors: $5x - 4^\\circ = (2x + 16^\\circ) + (x + 36^\\circ) = 3x + 52^\\circ$, so $2x = 56^\\circ$, $x = 28^\\circ$, and the exterior angle is $5(28^\\circ) - 4^\\circ = 136^\\circ$ ✓. Check a second, independent way by using the interior sum. The interior angle at that vertex is $180^\\circ - (5x - 4^\\circ) = 184^\\circ - 5x$, so $(2x + 16^\\circ) + (x + 36^\\circ) + (184^\\circ - 5x) = 180^\\circ$, which becomes $236^\\circ - 2x = 180^\\circ$ and $x = 28^\\circ$ ✓. The remotes are $72^\\circ$ and $64^\\circ$, and $72 + 64 = 136$ ✓. (Choosing $28^\\circ$ is STOPPING AT X ✗; $72^\\circ$ is ANSWERING WITH A REMOTE ANGLE ✗; $44^\\circ$ is ANSWERING WITH THE INTERIOR ANGLE AT THE VERTEX ✗.)',
    },
  ],
  // s9 — point D on side BC; the exterior angle of the small triangle ABD.
  [
    {
      q: 'Point $D$ lies on side $BC$ of triangle $ABC$. Given $\\angle ABD = 42^\\circ$ and $\\angle BAD = 55^\\circ$, what is $\\angle ADC$?',
      fig: {
        view: [-0.8, -0.8, 5.6, 3.2],
        elems: [
          { t: 'poly', pts: [[0, 0], [4.8, 0], [2.68, 2.41]], fill: false },
          { t: 'seg', a: [2.68, 2.41], b: [2.97, 0] },
          { t: 'point', p: [0, 0], label: 'B', dx: -10, dy: 8 },
          { t: 'point', p: [4.8, 0], label: 'C', dx: 10, dy: 8 },
          { t: 'point', p: [2.68, 2.41], label: 'A', dx: 0, dy: -10 },
          { t: 'point', p: [2.97, 0], label: 'D', dx: -4, dy: 16 },
          { t: 'angle', at: [0, 0], from: [4.8, 0], to: [2.68, 2.41], r: 0.75, label: '42' },
          { t: 'angle', at: [2.68, 2.41], from: [0, 0], to: [2.97, 0], r: 0.65, label: '55' },
          { t: 'angle', at: [2.97, 0], from: [2.68, 2.41], to: [4.8, 0], r: 0.5, label: '?' },
        ],
      },
      choices: ['$13^\\circ$', '$83^\\circ$', '$97^\\circ$', '$125^\\circ$'],
      answer: 2,
      solution:
        'Ignore the big triangle and look only at triangle $ABD$. Side $BD$ runs on to $C$, so $\\angle ADC$ is the exterior angle of triangle $ABD$ at $D$, and its remote interiors are $\\angle ABD$ and $\\angle BAD$: $\\angle ADC = 42^\\circ + 55^\\circ = 97^\\circ$ ✓. Check a second, independent way with the angle sum and a straight line. Inside triangle $ABD$, $\\angle ADB = 180^\\circ - 42^\\circ - 55^\\circ = 83^\\circ$; since $B$, $D$, $C$ lie on one line, $\\angle ADC = 180^\\circ - 83^\\circ = 97^\\circ$ ✓. Nothing about $\\angle C$ was ever needed. (Choosing $83^\\circ$ is ANSWERING THE OTHER PIECE OF THE STRAIGHT ANGLE, giving $\\angle ADB$ ✗; $13^\\circ$ is SUBTRACTING THE REMOTES INSTEAD OF ADDING ✗; $125^\\circ$ is SUPPLEMENTING A REMOTE ANGLE, $180^\\circ - 55^\\circ$ ✗.)',
    },
    {
      q: 'In the figure, $D$ is a point on side $BC$ of triangle $ABC$. If $\\angle ABD = 63^\\circ$ and $\\angle BAD = 38^\\circ$, find $\\angle ADC$.',
      fig: {
        view: [-0.8, -0.8, 5.4, 3.6],
        elems: [
          { t: 'poly', pts: [[0, 0], [4.6, 0], [1.45, 2.85]], fill: false },
          { t: 'seg', a: [1.45, 2.85], b: [2.01, 0] },
          { t: 'point', p: [0, 0], label: 'B', dx: -10, dy: 8 },
          { t: 'point', p: [4.6, 0], label: 'C', dx: 10, dy: 8 },
          { t: 'point', p: [1.45, 2.85], label: 'A', dx: 0, dy: -10 },
          { t: 'point', p: [2.01, 0], label: 'D', dx: -4, dy: 16 },
          { t: 'angle', at: [0, 0], from: [4.6, 0], to: [1.45, 2.85], r: 0.6, label: '63' },
          { t: 'angle', at: [1.45, 2.85], from: [0, 0], to: [2.01, 0], r: 0.7, label: '38' },
          { t: 'angle', at: [2.01, 0], from: [1.45, 2.85], to: [4.6, 0], r: 0.5, label: '?' },
        ],
      },
      choices: ['$79^\\circ$', '$101^\\circ$', '$25^\\circ$', '$117^\\circ$'],
      answer: 1,
      solution:
        'The angle $\\angle ADC$ is the exterior angle of the small triangle $ABD$ at $D$, because $BD$ continues on to $C$. Its remote interiors are the other two angles of that small triangle, so $\\angle ADC = 63^\\circ + 38^\\circ = 101^\\circ$ ✓. Check a second, independent way through the straight line at $D$: in triangle $ABD$ the third angle is $\\angle ADB = 180^\\circ - 63^\\circ - 38^\\circ = 79^\\circ$, and $\\angle ADC = 180^\\circ - 79^\\circ = 101^\\circ$ ✓. (Choosing $79^\\circ$ is ANSWERING THE OTHER PIECE OF THE STRAIGHT ANGLE ✗; $25^\\circ$ is SUBTRACTING THE REMOTES INSTEAD OF ADDING ✗; $117^\\circ$ is SUPPLEMENTING A REMOTE ANGLE, $180^\\circ - 63^\\circ$ ✗.)',
    },
    {
      q: 'Point $D$ sits on side $BC$ of triangle $ABC$, and segment $AD$ is drawn. Given $\\angle ABD = 34^\\circ$ and $\\angle BAD = 81^\\circ$, how large is $\\angle ADC$?',
      fig: {
        view: [-0.8, -0.8, 7.2, 3.2],
        elems: [
          { t: 'poly', pts: [[0, 0], [6.4, 0], [3.48, 2.35]], fill: false },
          { t: 'seg', a: [3.48, 2.35], b: [4.58, 0] },
          { t: 'point', p: [0, 0], label: 'B', dx: -10, dy: 8 },
          { t: 'point', p: [6.4, 0], label: 'C', dx: 10, dy: 8 },
          { t: 'point', p: [3.48, 2.35], label: 'A', dx: 0, dy: -10 },
          { t: 'point', p: [4.58, 0], label: 'D', dx: -4, dy: 16 },
          { t: 'angle', at: [0, 0], from: [6.4, 0], to: [3.48, 2.35], r: 0.9, label: '34' },
          { t: 'angle', at: [3.48, 2.35], from: [0, 0], to: [4.58, 0], r: 0.5, label: '81' },
          { t: 'angle', at: [4.58, 0], from: [3.48, 2.35], to: [6.4, 0], r: 0.45, label: '?' },
        ],
      },
      choices: ['$47^\\circ$', '$99^\\circ$', '$115^\\circ$', '$65^\\circ$'],
      answer: 2,
      solution:
        'Work inside triangle $ABD$ only. Because $D$ lies on $BC$, the side $BD$ extends past $D$ to $C$, which makes $\\angle ADC$ an exterior angle of triangle $ABD$: $\\angle ADC = \\angle ABD + \\angle BAD = 34^\\circ + 81^\\circ = 115^\\circ$ ✓. Check a second, independent way with a linear pair: $\\angle ADB = 180^\\circ - 34^\\circ - 81^\\circ = 65^\\circ$, and $\\angle ADB$ and $\\angle ADC$ together make the straight angle $\\angle BDC$, so $\\angle ADC = 180^\\circ - 65^\\circ = 115^\\circ$ ✓. (Choosing $65^\\circ$ is ANSWERING THE OTHER PIECE OF THE STRAIGHT ANGLE ✗; $47^\\circ$ is SUBTRACTING THE REMOTES INSTEAD OF ADDING ✗; $99^\\circ$ is SUPPLEMENTING A REMOTE ANGLE, $180^\\circ - 81^\\circ$ ✗.)',
    },
  ],
  // s10 — exterior angles in a given ratio; report the largest INTERIOR angle.
  [
    {
      q: 'The three exterior angles of a triangle (one per vertex) are in the ratio $3:4:5$. What is the largest interior angle of the triangle?',
      choices: ['$150^\\circ$', '$90^\\circ$', '$60^\\circ$', '$30^\\circ$'],
      answer: 1,
      solution:
        'Write the exterior angles as $3x$, $4x$, and $5x$. They add to $360^\\circ$, so $12x = 360^\\circ$ and $x = 30^\\circ$, making the exterior angles $90^\\circ$, $120^\\circ$, and $150^\\circ$. Each interior angle is the supplement of its own exterior angle: $90^\\circ$, $60^\\circ$, and $30^\\circ$. The largest interior angle is $90^\\circ$ ✓ — this is a right triangle. Check a second, independent way by hunting for the largest interior angle directly. A bigger exterior angle leaves a smaller interior angle behind, so the largest interior angle sits beside the SMALLEST exterior angle, the $3x$ one. That angle is $\\frac{3}{12}$ of $360^\\circ = 90^\\circ$, and the interior angle beside it is $180^\\circ - 90^\\circ = 90^\\circ$ ✓. The three interiors add to $90 + 60 + 30 = 180^\\circ$, as they must. (Choosing $150^\\circ$ is ANSWERING WITH THE LARGEST EXTERIOR ANGLE ✗; $30^\\circ$ is PAIRING THE LARGEST INTERIOR WITH THE LARGEST EXTERIOR ✗; $60^\\circ$ is ANSWERING WITH THE MIDDLE ANGLE ✗.)',
    },
    {
      q: 'One exterior angle is drawn at each vertex of a triangle, and the three of them are in the ratio $5:6:7$. How large is the largest interior angle of the triangle?',
      choices: ['$40^\\circ$', '$60^\\circ$', '$80^\\circ$', '$140^\\circ$'],
      answer: 2,
      solution:
        'Call the exterior angles $5x$, $6x$, and $7x$. Since they total $360^\\circ$, $18x = 360^\\circ$ and $x = 20^\\circ$, so the exterior angles are $100^\\circ$, $120^\\circ$, and $140^\\circ$. Their supplements — the interior angles — are $80^\\circ$, $60^\\circ$, and $40^\\circ$, and the largest is $80^\\circ$ ✓. Check a second, independent way by reasoning about which one to compute before computing anything. Subtracting from $180^\\circ$ reverses the order, so the largest interior angle belongs to the smallest exterior angle, the $5x$ share. That share is $\\frac{5}{18}$ of $360^\\circ = 100^\\circ$, leaving an interior angle of $180^\\circ - 100^\\circ = 80^\\circ$ ✓. The interiors add to $80 + 60 + 40 = 180^\\circ$, a clean confirmation. (Choosing $140^\\circ$ is ANSWERING WITH THE LARGEST EXTERIOR ANGLE ✗ — and it is far too big to share a triangle with two other positive angles summing to $40^\\circ$; $40^\\circ$ is PAIRING THE LARGEST INTERIOR WITH THE LARGEST EXTERIOR ✗; $60^\\circ$ is ANSWERING WITH THE MIDDLE ANGLE ✗.)',
    },
    {
      q: 'The exterior angles of a triangle, one at each vertex, are in the ratio $2:3:4$. Find the largest interior angle of that triangle.',
      choices: ['$100^\\circ$', '$160^\\circ$', '$60^\\circ$', '$20^\\circ$'],
      answer: 0,
      solution:
        'Let the exterior angles be $2x$, $3x$, and $4x$. They add to $360^\\circ$, so $9x = 360^\\circ$ and $x = 40^\\circ$, giving exterior angles of $80^\\circ$, $120^\\circ$, and $160^\\circ$. The interior angles are their supplements, $100^\\circ$, $60^\\circ$, and $20^\\circ$, so the largest interior angle is $100^\\circ$ ✓. Check a second, independent way by going after the right corner first. Because interior $= 180^\\circ -$ exterior, the biggest interior angle pairs with the SMALLEST exterior angle, the $2x$ one, which is $\\frac{2}{9}$ of $360^\\circ = 80^\\circ$; its interior partner is $180^\\circ - 80^\\circ = 100^\\circ$ ✓. The three interiors total $100 + 60 + 20 = 180^\\circ$ ✓. (Choosing $160^\\circ$ is ANSWERING WITH THE LARGEST EXTERIOR ANGLE ✗; $20^\\circ$ is PAIRING THE LARGEST INTERIOR WITH THE LARGEST EXTERIOR ✗; $60^\\circ$ is ANSWERING WITH THE MIDDLE ANGLE ✗.)',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 2,
  sections: {
    '2.6': s26,
  },
}
