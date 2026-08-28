// Introduction to Geometry chapter 17 — variations for section 17.6
// (Advanced Analytic Geometry Problems).
// All problems, figures, and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every keyed answer is reached twice along routes that share no steps:
//    once by substituting the line into the circle and reading the quadratic,
//    and once by an independent second route — a distance-from-the-center
//    argument, the right triangle formed by the center and half a chord, the
//    perpendicular bisector of a segment, or scaling a convenient point on the
//    line out to the required distance.
//  - Figures are coordinate-exact: a point drawn at (3, 4) sits at (3, 4) in
//    the view box, and every view holds the whole circle, the drawn run of the
//    line, and every point the answer names. Labels are plain text, never
//    LaTeX.
//  - Each distractor is one named mistake — swapping the coordinates, using the
//    radius where the half-chord belongs, losing the negative square root,
//    keeping a term that already cancelled, or stopping at r^2 instead of r —
//    and it is named in CAPS.

const s176 = [
  // s1 — a horizontal line crosses a circle centered at the origin.
  [
    {
      q: 'A searchlight beam sweeps along the horizontal line $y = 4$. A circular pond has the rim $x^2 + y^2 = 25$. At which points does the beam cross the rim?',
      fig: {
        view: [-7, -7, 7, 7],
        grid: true,
        elems: [
          { t: 'circle', c: [0, 0], r: 5 },
          { t: 'line', a: [-6, 4], b: [6, 4] },
        ],
      },
      choices: ['$(4, 3)$ and $(4, -3)$', '$(5, 4)$ and $(-5, 4)$', '$(3, 4)$ only', '$(3, 4)$ and $(-3, 4)$'],
      answer: 3,
      solution:
        'Route one, substitute the line into the circle: every point of the beam has $y = 4$, so the rim equation becomes $x^2 + 4^2 = 25$, that is $x^2 = 9$, so $x = 3$ or $x = -3$. The crossings are $(3, 4)$ and $(-3, 4)$, and each one sits on the rim because $9 + 16 = 25$ ✓. Check a second, independent way, with the right triangle at the center: the beam runs $4$ above the center, so the perpendicular from $(0, 0)$ up to the beam has length $4$ and its foot is $(0, 4)$. That foot, one crossing point, and the center make a right triangle whose hypotenuse is the radius $5$ and whose legs are $4$ and the half-chord $h$, so $h^2 + 4^2 = 5^2$ and $h = 3$. Stepping $3$ each way along the beam from $(0, 4)$ reaches $(3, 4)$ and $(-3, 4)$ ✓. (The choice $(4, 3)$ and $(4, -3)$ is SWAPPING THE TWO COORDINATES, though the beam pins $4$ as the second coordinate and lets the first one move ✗; the choice $(5, 4)$ and $(-5, 4)$ is USING THE RADIUS AS THE HALF-CHORD, a length that would be right only for a beam through the center ✗; the choice $(3, 4)$ only is FORGETTING THE NEGATIVE SQUARE ROOT of $9$, which throws away the crossing on the left half of the pond ✗.)',
    },
    {
      q: 'A straight scratch on a round tabletop follows the line $y = -6$. The rim of the tabletop is the circle $x^2 + y^2 = 100$. Where does the scratch reach the rim?',
      fig: {
        view: [-12, -12, 12, 12],
        grid: true,
        elems: [
          { t: 'circle', c: [0, 0], r: 10 },
          { t: 'line', a: [-11, -6], b: [11, -6] },
        ],
      },
      choices: ['$(-6, 8)$ and $(-6, -8)$', '$(8, -6)$ and $(-8, -6)$', '$(10, -6)$ and $(-10, -6)$', '$(8, -6)$ only'],
      answer: 1,
      solution:
        'Route one, substitute the line into the circle: the scratch holds $y = -6$ the whole way, so $x^2 + (-6)^2 = 100$, which is $x^2 = 64$ and $x = 8$ or $x = -8$. The scratch reaches the rim at $(8, -6)$ and $(-8, -6)$, and both check out since $64 + 36 = 100$ ✓. Check a second, independent way, with the right triangle at the center: the scratch runs $6$ below the center, so the perpendicular from $(0, 0)$ meets it at $(0, -6)$ with length $6$. Center, foot, and rim point form a right triangle with hypotenuse the radius $10$, so the half-chord $h$ satisfies $h^2 + 6^2 = 10^2$ and $h = 8$ — the familiar $6$-$8$-$10$ triangle. Walking $8$ each way from $(0, -6)$ gives $(8, -6)$ and $(-8, -6)$ ✓. (The choice $(-6, 8)$ and $(-6, -8)$ is SWAPPING THE TWO COORDINATES, though the scratch fixes $-6$ as the second coordinate ✗; the choice $(10, -6)$ and $(-10, -6)$ is USING THE RADIUS AS THE HALF-CHORD and ignoring that the scratch sits $6$ below the center ✗; the choice $(8, -6)$ only is FORGETTING THE NEGATIVE SQUARE ROOT of $64$, dropping the end of the scratch on the left ✗.)',
    },
    {
      q: 'A cable is stretched along the horizontal line $y = 5$ across a round window whose rim is the circle $x^2 + y^2 = 169$. Where does the cable meet the rim?',
      fig: {
        view: [-15, -15, 15, 15],
        grid: true,
        elems: [
          { t: 'circle', c: [0, 0], r: 13 },
          { t: 'line', a: [-14, 5], b: [14, 5] },
        ],
      },
      choices: ['$(12, 5)$ and $(-12, 5)$', '$(5, 12)$ and $(5, -12)$', '$(13, 5)$ and $(-13, 5)$', '$(12, 5)$ only'],
      answer: 0,
      solution:
        'Route one, substitute the line into the circle: the cable keeps $y = 5$, so $x^2 + 5^2 = 169$ gives $x^2 = 144$ and $x = 12$ or $x = -12$. The cable meets the rim at $(12, 5)$ and $(-12, 5)$, and both land on the rim since $144 + 25 = 169$ ✓. Check a second, independent way, with the right triangle at the center: the cable runs $5$ above the center, so the perpendicular from $(0, 0)$ lands at $(0, 5)$ with length $5$, and the radius $13$ is the hypotenuse of the right triangle whose other leg is the half-chord $h$. Then $h^2 + 5^2 = 13^2$, so $h = 12$ — the $5$-$12$-$13$ triangle. Moving $12$ each way from $(0, 5)$ along the cable gives $(12, 5)$ and $(-12, 5)$ ✓. (The choice $(5, 12)$ and $(5, -12)$ is SWAPPING THE TWO COORDINATES, though the cable holds $5$ as the second coordinate and lets the first one vary ✗; the choice $(13, 5)$ and $(-13, 5)$ is USING THE RADIUS AS THE HALF-CHORD, which would place the ends outside the window ✗; the choice $(12, 5)$ only is FORGETTING THE NEGATIVE SQUARE ROOT of $144$ and reporting just the right-hand end ✗.)',
    },
  ],
  // s2 — the line y = x runs through the center and cuts a diameter.
  [
    {
      q: 'A drone flies along the line $y = x$ over a circular field whose boundary is the circle $x^2 + y^2 = 32$. At which points does the drone’s path cross the boundary?',
      choices: [
        '$(4, 4)$ and $(-4, 4)$',
        '$(4, 4)$ and $(-4, -4)$',
        '$(\\sqrt{32}, \\sqrt{32})$ and $(-\\sqrt{32}, -\\sqrt{32})$',
        '$(4, 4)$ only',
      ],
      answer: 1,
      solution:
        'Route one, substitute the line into the circle: along the flight path $y = x$, so the boundary equation becomes $x^2 + x^2 = 32$, that is $2x^2 = 32$, so $x^2 = 16$ and $x = 4$ or $x = -4$. The second coordinate copies the first, giving $(4, 4)$ and $(-4, -4)$, and both sit on the boundary because $16 + 16 = 32$ ✓. Check a second, independent way, by measuring along the path: the line $y = x$ passes straight through the center $(0, 0)$, so it cuts the field at the two ends of a diameter, each exactly $\\sqrt{32} = 4\\sqrt{2}$ from the center. Any point of the path has the form $(t, t)$, whose distance from the origin is $\\sqrt{t^2 + t^2} = |t|\\sqrt{2}$. Setting $|t|\\sqrt{2} = 4\\sqrt{2}$ gives $|t| = 4$, so the two ends are $(4, 4)$ and $(-4, -4)$ ✓. (The choice $(4, 4)$ and $(-4, 4)$ is MIXING THE SIGNS OF THE TWO COORDINATES, though $y = x$ forces both coordinates of a point to match, and $(-4, 4)$ never sits on the flight path ✗; the choice with $\\sqrt{32}$ is READING THE EQUATION AS $x^2 = 32$ and forgetting that both coordinates feed the distance, since $(\\sqrt{32}, \\sqrt{32})$ is $8$ from the center rather than $4\\sqrt{2}$ ✗; the choice $(4, 4)$ only is FORGETTING THE NEGATIVE SQUARE ROOT of $16$ and reporting one end of the diameter ✗.)',
    },
    {
      q: 'A gravel path through a circular garden lies along the line $y = x$, and the garden’s fence is the circle $x^2 + y^2 = 50$. Where does the path meet the fence?',
      choices: [
        '$(5, 5)$ and $(-5, 5)$',
        '$(\\sqrt{50}, \\sqrt{50})$ and $(-\\sqrt{50}, -\\sqrt{50})$',
        '$(5, 5)$ only',
        '$(5, 5)$ and $(-5, -5)$',
      ],
      answer: 3,
      solution:
        'Route one, substitute the line into the circle: the path keeps $y = x$, so $x^2 + x^2 = 50$ becomes $2x^2 = 50$, hence $x^2 = 25$ and $x = 5$ or $x = -5$. Copying the first coordinate into the second gives $(5, 5)$ and $(-5, -5)$, and both reach the fence since $25 + 25 = 50$ ✓. Check a second, independent way, by measuring along the path: because $y = x$ runs through the center $(0, 0)$, the path leaves the garden at the two ends of a diameter, each $\\sqrt{50} = 5\\sqrt{2}$ from the center. A path point $(t, t)$ lies $\\sqrt{t^2 + t^2} = |t|\\sqrt{2}$ from the origin, so $|t|\\sqrt{2} = 5\\sqrt{2}$ gives $|t| = 5$ and the gates are at $(5, 5)$ and $(-5, -5)$ ✓. (The choice $(5, 5)$ and $(-5, 5)$ is MIXING THE SIGNS OF THE TWO COORDINATES, but the path demands equal coordinates and $(-5, 5)$ is nowhere on it ✗; the choice with $\\sqrt{50}$ is READING THE EQUATION AS $x^2 = 50$ and forgetting that both coordinates feed the distance, since $(\\sqrt{50}, \\sqrt{50})$ is $10$ from the center ✗; the choice $(5, 5)$ only is FORGETTING THE NEGATIVE SQUARE ROOT of $25$ and naming a single gate ✗.)',
    },
    {
      q: 'A crease on a round paper napkin runs along the line $y = x$, and the napkin’s edge is the circle $x^2 + y^2 = 8$. At which points does the crease reach the edge?',
      choices: [
        '$(2, 2)$ only',
        '$(\\sqrt{8}, \\sqrt{8})$ and $(-\\sqrt{8}, -\\sqrt{8})$',
        '$(2, 2)$ and $(-2, -2)$',
        '$(2, 2)$ and $(-2, 2)$',
      ],
      answer: 2,
      solution:
        'Route one, substitute the line into the circle: on the crease $y = x$, so $x^2 + x^2 = 8$ gives $2x^2 = 8$, then $x^2 = 4$ and $x = 2$ or $x = -2$. Matching second coordinates to first, the crease reaches the edge at $(2, 2)$ and $(-2, -2)$, and both check because $4 + 4 = 8$ ✓. Check a second, independent way, by measuring along the crease: the line $y = x$ goes through the center $(0, 0)$, so the crease is a diameter and its ends sit $\\sqrt{8} = 2\\sqrt{2}$ from the center. A crease point $(t, t)$ is $\\sqrt{t^2 + t^2} = |t|\\sqrt{2}$ from the origin, so $|t|\\sqrt{2} = 2\\sqrt{2}$ gives $|t| = 2$ and the ends are $(2, 2)$ and $(-2, -2)$ ✓. (The choice $(2, 2)$ only is FORGETTING THE NEGATIVE SQUARE ROOT of $4$, which leaves out one end of the crease ✗; the choice with $\\sqrt{8}$ is READING THE EQUATION AS $x^2 = 8$ and forgetting that both coordinates feed the distance, since $(\\sqrt{8}, \\sqrt{8})$ is $4$ from the center ✗; the choice $(2, 2)$ and $(-2, 2)$ is MIXING THE SIGNS OF THE TWO COORDINATES, though $y = x$ makes the two coordinates of a point equal and $(-2, 2)$ is off the crease ✗.)',
    },
  ],
  // s3 — a slanted secant whose two crossings land on the axes.
  [
    {
      q: 'A zip line follows the line $y = x - 4$ across a circular clearing whose edge is the circle $x^2 + y^2 = 16$. Where does the zip line cross that edge?',
      choices: [
        '$(0, 4)$ and $(-4, 0)$',
        '$(4, 0)$ and $(-4, -8)$',
        '$(0, -4)$ and $(4, 0)$',
        '$(0, -4)$ only — the zip line is tangent',
      ],
      answer: 2,
      solution:
        'Route one, substitute the line into the circle: replacing $y$ by $x - 4$ turns $x^2 + y^2 = 16$ into $x^2 + (x - 4)^2 = 16$, which expands to $x^2 + x^2 - 8x + 16 = 16$, so $2x^2 - 8x = 0$ and $2x(x - 4) = 0$. That gives $x = 0$ or $x = 4$, and the line hands back $y = -4$ and $y = 0$. The crossings are $(0, -4)$ and $(4, 0)$; both lie on the circle since $0 + 16 = 16$ and $16 + 0 = 16$ ✓. Check a second, independent way, through the intercepts and the radius: the line $y = x - 4$ meets the $y$-axis at $(0, -4)$ and the $x$-axis at $(4, 0)$. Each of those points is exactly $4$ units from the origin, and the clearing has radius $\\sqrt{16} = 4$, so each one already sits on the edge. A straight line can share at most two points with a circle, so these two are the whole list ✓. (The choice $(0, 4)$ and $(-4, 0)$ is FLIPPING THE SIGN OF THE CONSTANT and solving $y = x + 4$ instead — those two points are on the circle but not on the zip line ✗; the choice $(4, 0)$ and $(-4, -8)$ is LOSING THE MIDDLE TERM WHEN SQUARING $x - 4$, writing $x^2 - 16$ and reaching $2x^2 = 32$ with roots $x = \\pm 4$ ✗; the choice $(0, -4)$ only is TREATING $2x(x - 4) = 0$ AS IF IT HAD ONE ROOT, reading off $x = 0$ and never using the second factor ✗.)',
    },
    {
      q: 'A laser beam travels along the line $y = x + 3$ and strikes a circular mirror whose rim is the circle $x^2 + y^2 = 9$. At which points does the beam meet the rim?',
      choices: [
        '$(0, 3)$ and $(-3, 0)$',
        '$(0, -3)$ and $(3, 0)$',
        '$(0, 3)$ only — the beam is tangent',
        '$(0, -3)$ and $(-3, 0)$',
      ],
      answer: 0,
      solution:
        'Route one, substitute the line into the circle: putting $y = x + 3$ into $x^2 + y^2 = 9$ gives $x^2 + (x + 3)^2 = 9$, which expands to $x^2 + x^2 + 6x + 9 = 9$, so $2x^2 + 6x = 0$ and $2x(x + 3) = 0$. Then $x = 0$ or $x = -3$, and the line supplies $y = 3$ and $y = 0$. The beam meets the rim at $(0, 3)$ and $(-3, 0)$; both check because $0 + 9 = 9$ and $9 + 0 = 9$ ✓. Check a second, independent way, through the intercepts and the radius: the line $y = x + 3$ crosses the $y$-axis at $(0, 3)$ and the $x$-axis at $(-3, 0)$, and each of those is $3$ units from the origin. The mirror has radius $\\sqrt{9} = 3$, so both points are already on the rim, and a line cannot meet a circle in more than two places ✓. (The choice $(0, -3)$ and $(3, 0)$ is FLIPPING THE SIGN OF THE CONSTANT and solving $y = x - 3$ instead ✗; the choice $(0, 3)$ only is TREATING $2x(x + 3) = 0$ AS IF IT HAD ONE ROOT and calling a secant a tangent ✗; the choice $(0, -3)$ and $(-3, 0)$ is FEEDING $x = 0$ BACK INTO THE CIRCLE INSTEAD OF THE LINE and then picking the downward root, though the beam fixes $y = 3$ when $x = 0$ ✗.)',
    },
    {
      q: 'A road runs along the line $y = x - 7$ through a circular park whose boundary is the circle $x^2 + y^2 = 49$. Where does the road cross the boundary?',
      choices: [
        '$(0, 7)$ and $(-7, 0)$',
        '$(0, -7)$ only — the road is tangent',
        '$(7, 0)$ and $(-7, -14)$',
        '$(0, -7)$ and $(7, 0)$',
      ],
      answer: 3,
      solution:
        'Route one, substitute the line into the circle: replacing $y$ by $x - 7$ gives $x^2 + (x - 7)^2 = 49$, which expands to $x^2 + x^2 - 14x + 49 = 49$, so $2x^2 - 14x = 0$ and $2x(x - 7) = 0$. Then $x = 0$ or $x = 7$, and the road gives $y = -7$ and $y = 0$. The crossings are $(0, -7)$ and $(7, 0)$; both satisfy the boundary equation since $0 + 49 = 49$ and $49 + 0 = 49$ ✓. Check a second, independent way, through the intercepts and the radius: the road meets the $y$-axis at $(0, -7)$ and the $x$-axis at $(7, 0)$, and each sits $7$ units from the origin. The park has radius $\\sqrt{49} = 7$, so both intercepts are on the boundary already, and no line meets a circle more than twice ✓. (The choice $(0, 7)$ and $(-7, 0)$ is FLIPPING THE SIGN OF THE CONSTANT and solving $y = x + 7$ instead — a different road through the same park ✗; the choice $(0, -7)$ only is TREATING $2x(x - 7) = 0$ AS IF IT HAD ONE ROOT ✗; the choice $(7, 0)$ and $(-7, -14)$ is LOSING THE MIDDLE TERM WHEN SQUARING $x - 7$, writing $x^2 - 49$ and reaching $2x^2 = 98$ with roots $x = \\pm 7$ ✗.)',
    },
  ],
  // s4 — counting the shared points: secant, miss, tangent.
  [
    {
      q: 'How many points do the line $y = 2x - 5$ and the circle $x^2 + y^2 = 25$ have in common?',
      choices: ['exactly 2', 'none', 'exactly 1', 'infinitely many'],
      answer: 0,
      solution:
        'Route one, substitute and count the roots: putting $y = 2x - 5$ into the circle gives $x^2 + (2x - 5)^2 = 25$, which expands to $x^2 + 4x^2 - 20x + 25 = 25$. The $25$ on each side cancels, leaving $5x^2 - 20x = 0$, or $5x(x - 4) = 0$. Two different roots, $x = 0$ and $x = 4$, so two shared points — they are $(0, -5)$ and $(4, 3)$, and each satisfies both equations, since $0 + 25 = 25$ with $2(0) - 5 = -5$, and $16 + 9 = 25$ with $2(4) - 5 = 3$ ✓. Check a second, independent way, by measuring from the center: write the line as $2x - y - 5 = 0$ and find how far the center $(0, 0)$ sits from it: $\\frac{|2(0) - 0 - 5|}{\\sqrt{2^2 + (-1)^2}} = \\frac{5}{\\sqrt{5}} = \\sqrt{5}$, about $2.2$. The radius is $5$, so the nearest point of the line lies well inside the circle; a straight line that gets inside must come in and go back out, crossing the circle twice ✓. (The choice none is KEEPING THE $25$ THAT ALREADY CANCELLED, solving $5x^2 - 20x + 25 = 0$ and reading its discriminant $400 - 500 = -100$ as proof of a miss ✗; the choice exactly 1 is FORGETTING THE $\\sqrt{5}$ UNDERNEATH IN THE DISTANCE FORMULA, which reports the distance as $5$, equal to the radius, and calls the line tangent ✗; the choice infinitely many is EXPECTING A LINE TO LIE ALONG A CIRCLE, though a circle curves away from any straight line after at most two meetings ✗.)',
    },
    {
      q: 'How many points do the line $y = x + 8$ and the circle $x^2 + y^2 = 9$ share?',
      choices: ['exactly 1', 'infinitely many', 'none', 'exactly 2'],
      answer: 2,
      solution:
        'Route one, substitute and count the roots: $x^2 + (x + 8)^2 = 9$ becomes $x^2 + x^2 + 16x + 64 = 9$, so $2x^2 + 16x + 55 = 0$. Its discriminant is $16^2 - 4(2)(55) = 256 - 440 = -184$, and a negative discriminant means no real $x$ at all, so the line and the circle share no points ✓. Check a second, independent way, by measuring from the center: written as $x - y + 8 = 0$, the line sits $\\frac{|0 - 0 + 8|}{\\sqrt{1^2 + (-1)^2}} = \\frac{8}{\\sqrt{2}} = 4\\sqrt{2}$ from the center, which is about $5.7$. The radius is only $\\sqrt{9} = 3$, so even the closest point of the line is more than $2$ units outside the circle and the two never touch ✓. (The choice exactly 1 is MISTAKING THE VERTEX OF THE SUBSTITUTION QUADRATIC FOR A ROOT: $2x^2 + 16x + 55$ does bottom out at the single value $x = -\\frac{16}{4} = -4$, but that is where the line comes nearest, not where it lands on the circle ✗; the choice exactly 2 is READING THE RIGHT-HAND SIDE $9$ AS THE RADIUS instead of the radius squared, which makes the distance $4\\sqrt{2}$ look small enough to cut through ✗; the choice infinitely many is IMAGINING A LINE CAN FOLLOW THE CURVE OF A CIRCLE, which no straight line does ✗.)',
    },
    {
      q: 'How many points do the line $y = 3x + 10$ and the circle $x^2 + y^2 = 10$ have in common?',
      choices: ['none', 'exactly 1', 'exactly 2', 'infinitely many'],
      answer: 1,
      solution:
        'Route one, substitute and count the roots: $x^2 + (3x + 10)^2 = 10$ expands to $x^2 + 9x^2 + 60x + 100 = 10$, so $10x^2 + 60x + 90 = 0$, and dividing by $10$ leaves $x^2 + 6x + 9 = 0$, which is $(x + 3)^2 = 0$. The only root is $x = -3$, giving the single shared point $(-3, 1)$; it checks on both, since $9 + 1 = 10$ and $3(-3) + 10 = 1$ ✓. Check a second, independent way, by measuring from the center: as $3x - y + 10 = 0$, the line lies $\\frac{|0 - 0 + 10|}{\\sqrt{3^2 + (-1)^2}} = \\frac{10}{\\sqrt{10}} = \\sqrt{10}$ from the center, and the radius is $\\sqrt{10}$ as well. A line whose nearest approach equals the radius grazes the circle at exactly one point ✓. (The choice none is FORGETTING TO SUBTRACT THE $10$ FROM BOTH SIDES, leaving $x^2 + 6x + 10 = 0$ with discriminant $36 - 40 = -4$ ✗; the choice exactly 2 is COUNTING THE DOUBLE ROOT AS TWO POINTS, though $x = -3$ appearing twice still names one place on the plane ✗; the choice infinitely many is TREATING A TANGENT LINE AS IF IT RAN ALONG THE CIRCLE, when it only kisses it and leaves ✗.)',
    },
  ],
  // s5 — tangency of y = x + c, where c^2 = 2r^2; the positive root is wanted.
  [
    {
      q: 'For what positive value of $c$ is the line $y = x + c$ tangent to the circle $x^2 + y^2 = 72$?',
      choices: ['$144$', '$12$', '$6\\sqrt{2}$', '$6$'],
      answer: 1,
      solution:
        'Route one, force the substitution quadratic to have one root: $x^2 + (x + c)^2 = 72$ becomes $2x^2 + 2cx + (c^2 - 72) = 0$. Tangency means exactly one root, so the discriminant vanishes: $(2c)^2 - 4(2)(c^2 - 72) = 4c^2 - 8c^2 + 576 = 576 - 4c^2 = 0$. Then $c^2 = 144$, and the positive value is $c = 12$ ✓. Check a second, independent way, by measuring from the center: a line touches a circle exactly when its distance from the center equals the radius. Written as $x - y + c = 0$, the line is $\\frac{|0 - 0 + c|}{\\sqrt{1^2 + (-1)^2}} = \\frac{|c|}{\\sqrt{2}}$ from the center, while the radius is $\\sqrt{72} = 6\\sqrt{2}$. Setting $\\frac{|c|}{\\sqrt{2}} = 6\\sqrt{2}$ gives $|c| = 6\\sqrt{2} \\cdot \\sqrt{2} = 12$, and the positive choice is $c = 12$ ✓. (The choice $144$ is STOPPING AT $c^2$ AND NEVER TAKING THE SQUARE ROOT ✗; the choice $6\\sqrt{2}$ is HANDING BACK THE RADIUS ITSELF, the number the distance had to match rather than the intercept that makes it match ✗; the choice $6$ is DIVIDING THE RADIUS BY $\\sqrt{2}$ INSTEAD OF MULTIPLYING BY IT, turning $\\frac{|c|}{\\sqrt{2}} = 6\\sqrt{2}$ into $|c| = \\frac{6\\sqrt{2}}{\\sqrt{2}}$ ✗.)',
    },
    {
      q: 'For what positive value of $c$ does the line $y = x + c$ touch the circle $x^2 + y^2 = 32$ at exactly one point?',
      choices: ['$4\\sqrt{2}$', '$4$', '$64$', '$8$'],
      answer: 3,
      solution:
        'Route one, force the substitution quadratic to have one root: $x^2 + (x + c)^2 = 32$ becomes $2x^2 + 2cx + (c^2 - 32) = 0$. One point of contact means one root, so $(2c)^2 - 4(2)(c^2 - 32) = 4c^2 - 8c^2 + 256 = 256 - 4c^2 = 0$. That gives $c^2 = 64$, so the positive value is $c = 8$ ✓. Check a second, independent way, by measuring from the center: as $x - y + c = 0$, the line lies $\\frac{|c|}{\\sqrt{1^2 + (-1)^2}} = \\frac{|c|}{\\sqrt{2}}$ from the center, and the radius is $\\sqrt{32} = 4\\sqrt{2}$. Touching once means those agree: $\\frac{|c|}{\\sqrt{2}} = 4\\sqrt{2}$, so $|c| = 4\\sqrt{2} \\cdot \\sqrt{2} = 8$ and the positive value is $c = 8$ ✓. (The choice $4\\sqrt{2}$ is HANDING BACK THE RADIUS ITSELF rather than the intercept that puts the line at that distance ✗; the choice $4$ is DIVIDING THE RADIUS BY $\\sqrt{2}$ INSTEAD OF MULTIPLYING BY IT ✗; the choice $64$ is STOPPING AT $c^2$ AND NEVER TAKING THE SQUARE ROOT ✗.)',
    },
    {
      q: 'The line $y = x + c$ is tangent to the circle $x^2 + y^2 = 98$. What is the positive value of $c$?',
      choices: ['$196$', '$7\\sqrt{2}$', '$14$', '$7$'],
      answer: 2,
      solution:
        'Route one, force the substitution quadratic to have one root: $x^2 + (x + c)^2 = 98$ becomes $2x^2 + 2cx + (c^2 - 98) = 0$, and tangency kills the discriminant: $(2c)^2 - 4(2)(c^2 - 98) = 4c^2 - 8c^2 + 784 = 784 - 4c^2 = 0$. So $c^2 = 196$ and the positive value is $c = 14$ ✓. Check a second, independent way, by measuring from the center: rewriting the line as $x - y + c = 0$, its distance from the center is $\\frac{|c|}{\\sqrt{1^2 + (-1)^2}} = \\frac{|c|}{\\sqrt{2}}$, and the radius is $\\sqrt{98} = 7\\sqrt{2}$. Tangency sets them equal: $\\frac{|c|}{\\sqrt{2}} = 7\\sqrt{2}$, so $|c| = 7\\sqrt{2} \\cdot \\sqrt{2} = 14$ and the positive value is $c = 14$ ✓. (The choice $196$ is STOPPING AT $c^2$ AND NEVER TAKING THE SQUARE ROOT ✗; the choice $7\\sqrt{2}$ is HANDING BACK THE RADIUS ITSELF instead of the intercept that produces it ✗; the choice $7$ is DIVIDING THE RADIUS BY $\\sqrt{2}$ INSTEAD OF MULTIPLYING BY IT ✗.)',
    },
  ],
  // s6 — two conditions at once: on a given line, equidistant from two points.
  [
    {
      q: 'A rescue post must stand on the line $y = x$, the same distance from a well at $(2, 0)$ as from a well at $(6, 0)$. Where does the post go?',
      fig: {
        view: [-1, -2, 8, 6],
        grid: true,
        elems: [
          { t: 'line', a: [-1, -1], b: [5, 5] },
          { t: 'point', p: [2, 0], dx: -6, dy: 14 },
          { t: 'point', p: [6, 0], dx: 10, dy: 14 },
        ],
      },
      choices: ['$(4, 0)$', '$(0, 4)$', '$(8, 8)$', '$(4, 4)$'],
      answer: 3,
      solution:
        'Route one, cross the two conditions as curves: the points equidistant from $(2, 0)$ and $(6, 0)$ make up the perpendicular bisector of the segment joining them. That segment is horizontal with midpoint $(4, 0)$, so its perpendicular bisector is the vertical line $x = 4$. The post must also sit on $y = x$, and the vertical line $x = 4$ meets $y = x$ at $(4, 4)$ ✓. Check a second, independent way, with algebra along the line: every point of $y = x$ looks like $(t, t)$, so set the two squared distances equal: $(t - 2)^2 + t^2 = (t - 6)^2 + t^2$. The $t^2$ terms drop out, leaving $t^2 - 4t + 4 = t^2 - 12t + 36$, so $8t = 32$ and $t = 4$, giving the post at $(4, 4)$. Measuring confirms it: $\\sqrt{(4 - 2)^2 + 4^2} = \\sqrt{20}$ and $\\sqrt{(4 - 6)^2 + 4^2} = \\sqrt{20}$ ✓. (The choice $(4, 0)$ is STOPPING AT THE MIDPOINT, which is equidistant from the wells but fails the other condition since it is not on $y = x$ ✗; the choice $(0, 4)$ is TAKING THE MIDPOINT’S $x$ AS A HEIGHT, plotting $4$ up the $y$-axis instead of feeding $x = 4$ into $y = x$ ✗; the choice $(8, 8)$ is ADDING THE TWO $x$-COORDINATES INSTEAD OF AVERAGING THEM, since $2 + 6 = 8$, and $(8, 8)$ is $10$ from one well but $\\sqrt{68}$ from the other ✗.)',
    },
    {
      q: 'A lamp must be placed on the line $y = 2x$ so that it is the same distance from a door at $(0, 3)$ as from a door at $(10, 3)$. Where does the lamp belong?',
      choices: ['$(5, 3)$', '$(5, 10)$', '$(10, 5)$', '$(10, 20)$'],
      answer: 1,
      solution:
        'Route one, cross the two conditions as curves: the points equidistant from $(0, 3)$ and $(10, 3)$ form the perpendicular bisector of that horizontal segment, whose midpoint is $(5, 3)$, so the bisector is the vertical line $x = 5$. The lamp also lives on $y = 2x$, and at $x = 5$ that line is at height $y = 2(5) = 10$, so the lamp belongs at $(5, 10)$ ✓. Check a second, independent way, with algebra along the line: a point of $y = 2x$ has the form $(t, 2t)$, so equal squared distances read $t^2 + (2t - 3)^2 = (t - 10)^2 + (2t - 3)^2$. The matching $(2t - 3)^2$ terms cancel, leaving $t^2 = t^2 - 20t + 100$, so $20t = 100$ and $t = 5$, putting the lamp at $(5, 10)$. Measuring confirms it: $\\sqrt{5^2 + 7^2} = \\sqrt{74}$ to one door and $\\sqrt{(-5)^2 + 7^2} = \\sqrt{74}$ to the other ✓. (The choice $(5, 3)$ is STOPPING AT THE MIDPOINT, equidistant from the doors but nowhere near the line, since $2(5) = 10$ and not $3$ ✗; the choice $(10, 5)$ is SWAPPING THE TWO COORDINATES of the answer, and that point is $2$ from one door but $\\sqrt{104}$ from the other ✗; the choice $(10, 20)$ is ADDING THE TWO $x$-COORDINATES INSTEAD OF AVERAGING THEM, since $0 + 10 = 10$; it does sit on the line, but it is $17$ from one door and $\\sqrt{389}$ from the other ✗.)',
    },
    {
      q: 'Which point lies on the line $y = x$ and is the same distance from $(1, 5)$ as it is from $(7, 11)$?',
      choices: ['$(6, 6)$', '$(4, 8)$', '$(4, 4)$', '$(8, 8)$'],
      answer: 0,
      solution:
        'Route one, cross the two conditions as curves: the segment from $(1, 5)$ to $(7, 11)$ has midpoint $(4, 8)$ and slope $\\frac{11 - 5}{7 - 1} = 1$, so its perpendicular bisector has slope $-1$ and equation $y - 8 = -(x - 4)$, that is $y = -x + 12$. Setting that against $y = x$ gives $x = -x + 12$, so $x = 6$ and the point is $(6, 6)$ ✓. Check a second, independent way, with algebra along the line: a point of $y = x$ is $(t, t)$, so equal squared distances read $(t - 1)^2 + (t - 5)^2 = (t - 7)^2 + (t - 11)^2$. Expanding, the left side is $2t^2 - 12t + 26$ and the right side is $2t^2 - 36t + 170$, so $24t = 144$ and $t = 6$. Measuring confirms it: $\\sqrt{5^2 + 1^2} = \\sqrt{26}$ and $\\sqrt{1^2 + 5^2} = \\sqrt{26}$ ✓. (The choice $(4, 8)$ is STOPPING AT THE MIDPOINT, which is equidistant from the two points but is not on $y = x$ ✗; the choice $(4, 4)$ is ASSUMING THE PERPENDICULAR BISECTOR IS THE VERTICAL LINE THROUGH THE MIDPOINT, which is true only for a horizontal segment, and this one slants — that point is $\\sqrt{10}$ from one and $\\sqrt{58}$ from the other ✗; the choice $(8, 8)$ is ASSUMING THE PERPENDICULAR BISECTOR IS THE HORIZONTAL LINE THROUGH THE MIDPOINT, which flips the same error the other way and lands $\\sqrt{58}$ from one and $\\sqrt{10}$ from the other ✗.)',
    },
  ],
  // s7 — the locus of points equidistant from two fixed points.
  [
    {
      q: 'Describe the locus of all points equidistant from $(3, 1)$ and $(3, 9)$.',
      choices: [
        'the vertical line $x = 3$',
        'the single point $(3, 5)$',
        'the horizontal line $y = 5$',
        'a circle centered at $(3, 5)$',
      ],
      answer: 2,
      solution:
        'Route one, name the curve: the points equidistant from two fixed points always form the perpendicular bisector of the segment joining them. Here both given points have first coordinate $3$, so the segment is vertical, and its midpoint is $\\left(3, \\frac{1 + 9}{2}\\right) = (3, 5)$. A line perpendicular to a vertical segment is horizontal, so the locus is the horizontal line $y = 5$ ✓. Check a second, independent way, with algebra: a point $(x, y)$ is equidistant when $(x - 3)^2 + (y - 1)^2 = (x - 3)^2 + (y - 9)^2$. The $(x - 3)^2$ terms cancel, leaving $y^2 - 2y + 1 = y^2 - 18y + 81$, so $16y = 80$ and $y = 5$ — with no restriction at all on $x$. Every point of height $5$ works and nothing else does, which is exactly the horizontal line $y = 5$ ✓. (The choice $x = 3$ is DESCRIBING THE LINE THROUGH THE TWO GIVEN POINTS instead of the perpendicular bisector of the segment between them ✗; the choice of the single point $(3, 5)$ is STOPPING AT THE MIDPOINT, which is one equidistant point rather than all of them ✗; the choice of a circle is CONFUSING “EQUIDISTANT FROM TWO POINTS” WITH “AT A FIXED DISTANCE FROM ONE POINT”, which is what makes a circle ✗.)',
    },
    {
      q: 'Describe the set of all points that are the same distance from $(1, 2)$ as they are from $(7, 8)$.',
      choices: [
        'the line $y = -x + 9$',
        'the line $y = x + 1$',
        'the single point $(4, 5)$',
        'a circle centered at $(4, 5)$',
      ],
      answer: 0,
      solution:
        'Route one, name the curve: equidistance from two fixed points describes the perpendicular bisector of the segment joining them. The midpoint is $\\left(\\frac{1 + 7}{2}, \\frac{2 + 8}{2}\\right) = (4, 5)$, and the segment has slope $\\frac{8 - 2}{7 - 1} = 1$, so the bisector has slope $-1$. Through $(4, 5)$ with slope $-1$: $y - 5 = -(x - 4)$, which tidies to $y = -x + 9$ ✓. Check a second, independent way, with algebra: set the squared distances equal, $(x - 1)^2 + (y - 2)^2 = (x - 7)^2 + (y - 8)^2$. Expanding gives $x^2 - 2x + 1 + y^2 - 4y + 4 = x^2 - 14x + 49 + y^2 - 16y + 64$, and the squares cancel, leaving $-2x - 4y + 5 = -14x - 16y + 113$. Collecting terms gives $12x + 12y = 108$, so $x + y = 9$, or $y = -x + 9$ ✓. (The choice $y = x + 1$ is DESCRIBING THE LINE THROUGH THE TWO GIVEN POINTS, which has slope $1$ and passes through both, rather than the bisector that stands perpendicular to it ✗; the choice of the single point $(4, 5)$ is STOPPING AT THE MIDPOINT, one point of a whole line ✗; the choice of a circle is CONFUSING “EQUIDISTANT FROM TWO POINTS” WITH “AT A FIXED DISTANCE FROM ONE POINT” ✗.)',
    },
    {
      q: 'Describe all the points that are equidistant from $(-4, 2)$ and $(6, 2)$.',
      choices: [
        'the horizontal line $y = 2$',
        'the single point $(1, 2)$',
        'a circle centered at $(1, 2)$',
        'the vertical line $x = 1$',
      ],
      answer: 3,
      solution:
        'Route one, name the curve: the equidistant points form the perpendicular bisector of the segment joining the two. Both given points sit at height $2$, so the segment is horizontal, and its midpoint is $\\left(\\frac{-4 + 6}{2}, 2\\right) = (1, 2)$. A line perpendicular to a horizontal segment is vertical, so the locus is the vertical line $x = 1$ ✓. Check a second, independent way, with algebra: equidistance means $(x + 4)^2 + (y - 2)^2 = (x - 6)^2 + (y - 2)^2$. The $(y - 2)^2$ terms cancel, leaving $x^2 + 8x + 16 = x^2 - 12x + 36$, so $20x = 20$ and $x = 1$, with $y$ free to be anything. Every point one unit right of the $y$-axis works, which is the vertical line $x = 1$ ✓. (The choice $y = 2$ is DESCRIBING THE LINE THROUGH THE TWO GIVEN POINTS instead of the perpendicular bisector of the segment between them ✗; the choice of the single point $(1, 2)$ is STOPPING AT THE MIDPOINT, which is only one of infinitely many equidistant points ✗; the choice of a circle is CONFUSING “EQUIDISTANT FROM TWO POINTS” WITH “AT A FIXED DISTANCE FROM ONE POINT” ✗.)',
    },
  ],
  // s8 — the locus at a fixed distance from one point is a circle equation.
  [
    {
      q: 'Which equation describes all the points at distance $6$ from the point $(-4, 3)$?',
      choices: [
        '$(x - 4)^2 + (y + 3)^2 = 36$',
        '$(x + 4)^2 + (y - 3)^2 = 36$',
        '$(x + 4)^2 + (y - 3)^2 = 6$',
        '$(x + 4)^2 + (y + 3)^2 = 36$',
      ],
      answer: 1,
      solution:
        'Route one, write the condition with the distance formula: a point $(x, y)$ belongs to the locus exactly when $\\sqrt{(x - (-4))^2 + (y - 3)^2} = 6$. Squaring both sides clears the radical and gives $(x + 4)^2 + (y - 3)^2 = 36$, since $x - (-4)$ is $x + 4$ and $6^2 = 36$ ✓. Check a second, independent way, by testing points the locus must contain: from the center $(-4, 3)$, going $6$ to the right lands on $(2, 3)$ and going $6$ straight up lands on $(-4, 9)$, and both are exactly $6$ away, so any correct equation must accept both. Feeding $(2, 3)$ into $(x + 4)^2 + (y - 3)^2$ gives $6^2 + 0^2 = 36$, and feeding in $(-4, 9)$ gives $0^2 + 6^2 = 36$ — both land on $36$ ✓. (The choice $(x - 4)^2 + (y + 3)^2 = 36$ is FLIPPING THE SIGN OF BOTH CENTER COORDINATES, which describes the points $6$ from $(4, -3)$ instead, and it turns $(2, 3)$ into $4 + 36 = 40$ ✗; the choice ending in $6$ is PUTTING THE RADIUS WHERE THE RADIUS SQUARED BELONGS, since the test point $(2, 3)$ returns $36$ and not $6$ ✗; the choice $(x + 4)^2 + (y + 3)^2 = 36$ is FLIPPING THE SIGN OF THE $y$-TERM ONLY, which centers the circle at $(-4, -3)$ and sends $(2, 3)$ to $36 + 36 = 72$ ✗.)',
    },
    {
      q: 'A goat is tied to a stake at $(2, -7)$ by a rope that lets it reach exactly $5$ units in every direction. Which equation describes the outer edge of the region it can graze?',
      choices: [
        '$(x - 2)^2 + (y + 7)^2 = 5$',
        '$(x + 2)^2 + (y - 7)^2 = 25$',
        '$(x - 2)^2 + (y - 7)^2 = 25$',
        '$(x - 2)^2 + (y + 7)^2 = 25$',
      ],
      answer: 3,
      solution:
        'Route one, write the condition with the distance formula: the edge is where the rope is pulled tight, so $\\sqrt{(x - 2)^2 + (y - (-7))^2} = 5$. Squaring both sides gives $(x - 2)^2 + (y + 7)^2 = 25$, since $y - (-7)$ is $y + 7$ and $5^2 = 25$ ✓. Check a second, independent way, by testing points the edge must contain: from the stake, $5$ units right is $(7, -7)$ and $5$ units up is $(2, -2)$, and the tight rope reaches both. Putting $(7, -7)$ into $(x - 2)^2 + (y + 7)^2$ gives $5^2 + 0^2 = 25$, and putting in $(2, -2)$ gives $0^2 + 5^2 = 25$ — both land on $25$ ✓. (The choice ending in $5$ is PUTTING THE ROPE LENGTH WHERE ITS SQUARE BELONGS, since the test point $(7, -7)$ returns $25$ and not $5$ ✗; the choice $(x + 2)^2 + (y - 7)^2 = 25$ is FLIPPING THE SIGN OF BOTH CENTER COORDINATES, staking the goat at $(-2, 7)$ and sending $(7, -7)$ to $81 + 196 = 277$ ✗; the choice $(x - 2)^2 + (y - 7)^2 = 25$ is FLIPPING THE SIGN OF THE $y$-TERM ONLY, which lifts the stake to $(2, 7)$ and sends $(7, -7)$ to $25 + 196 = 221$ ✗.)',
    },
    {
      q: 'Which equation describes every point that is $3$ units away from $(0, 4)$?',
      choices: [
        '$x^2 + (y + 4)^2 = 9$',
        '$x^2 + (y - 4)^2 = 3$',
        '$x^2 + (y - 4)^2 = 9$',
        '$(x - 4)^2 + y^2 = 9$',
      ],
      answer: 2,
      solution:
        'Route one, write the condition with the distance formula: the points $3$ from $(0, 4)$ satisfy $\\sqrt{(x - 0)^2 + (y - 4)^2} = 3$, and squaring both sides gives $x^2 + (y - 4)^2 = 9$. The first coordinate of the center is $0$, so $x - 0$ is written simply as $x$, and the right side is $3^2 = 9$ ✓. Check a second, independent way, by testing points the locus must contain: $3$ units right of the center is $(3, 4)$ and $3$ units above it is $(0, 7)$, and both are exactly $3$ away. Feeding $(3, 4)$ into $x^2 + (y - 4)^2$ gives $9 + 0 = 9$, and feeding in $(0, 7)$ gives $0 + 9 = 9$ ✓. (The choice $x^2 + (y + 4)^2 = 9$ is FLIPPING THE SIGN OF THE $y$-TERM, which drops the center to $(0, -4)$ and sends the test point $(3, 4)$ to $9 + 64 = 73$ ✗; the choice ending in $3$ is PUTTING THE RADIUS WHERE THE RADIUS SQUARED BELONGS, since $(3, 4)$ returns $9$ and not $3$ ✗; the choice $(x - 4)^2 + y^2 = 9$ is SWAPPING THE CENTER’S TWO COORDINATES, moving the center to $(4, 0)$ and sending $(3, 4)$ to $1 + 16 = 17$ ✗.)',
    },
  ],
  // s9 — on a line through the origin, at a stated distance from the origin.
  [
    {
      q: 'A point lies on the line $y = 3x$ and is $10$ units from the origin. If the point is in the first quadrant, what is it?',
      choices: ['$(\\sqrt{10}, 3\\sqrt{10})$', '$(10, 30)$', '$(\\sqrt{10}, \\sqrt{10})$', '$(1, 3)$'],
      answer: 0,
      solution:
        'Route one, solve the two conditions together: being $10$ from the origin means $x^2 + y^2 = 10^2 = 100$, and being on the line means $y = 3x$. Substituting gives $x^2 + (3x)^2 = 100$, that is $10x^2 = 100$, so $x^2 = 10$ and $x = \\sqrt{10}$ in the first quadrant. Then $y = 3\\sqrt{10}$, and the point is $\\left(\\sqrt{10}, 3\\sqrt{10}\\right)$; its distance checks out since $10 + 90 = 100$ ✓. Check a second, independent way, by scaling a convenient point of the line: $(1, 3)$ sits on $y = 3x$ and is $\\sqrt{1 + 9} = \\sqrt{10}$ from the origin. Multiplying both coordinates by the same positive number $k$ keeps a point on a line through the origin and multiplies its distance by $k$, so we need $k\\sqrt{10} = 10$, giving $k = \\frac{10}{\\sqrt{10}} = \\sqrt{10}$. Scaling $(1, 3)$ by $\\sqrt{10}$ lands on $\\left(\\sqrt{10}, 3\\sqrt{10}\\right)$ ✓. (The choice $(10, 30)$ is USING THE DISTANCE AS THE FIRST COORDINATE; it does sit on the line, but it is $\\sqrt{1000} = 10\\sqrt{10}$ from the origin, far too far ✗; the choice $\\left(\\sqrt{10}, \\sqrt{10}\\right)$ is SOLVING $x^2 = 10$ AND THEN COPYING $x$ INTO $y$, which forgets that the line triples the first coordinate ✗; the choice $(1, 3)$ is STOPPING AT THE NEAREST LATTICE POINT ON THE LINE, which is only $\\sqrt{10}$ from the origin instead of $10$ ✗.)',
    },
    {
      q: 'A kite string runs out from the origin along the line $y = x$. What are the coordinates of the point on that line, in the first quadrant, that is $8$ units from the origin?',
      choices: ['$(8, 8)$', '$(2, 2)$', '$(4\\sqrt{2}, 4\\sqrt{2})$', '$(4, 4)$'],
      answer: 2,
      solution:
        'Route one, solve the two conditions together: distance $8$ from the origin means $x^2 + y^2 = 8^2 = 64$, and the string forces $y = x$. Substituting gives $x^2 + x^2 = 64$, so $2x^2 = 64$, $x^2 = 32$, and $x = \\sqrt{32} = 4\\sqrt{2}$ in the first quadrant. The point is $\\left(4\\sqrt{2}, 4\\sqrt{2}\\right)$, and it checks because $32 + 32 = 64$ ✓. Check a second, independent way, by scaling a convenient point of the line: $(1, 1)$ lies on $y = x$ and is $\\sqrt{1 + 1} = \\sqrt{2}$ from the origin. Scaling both coordinates by a positive $k$ keeps the point on the line and multiplies the distance by $k$, so $k\\sqrt{2} = 8$ gives $k = \\frac{8}{\\sqrt{2}} = 4\\sqrt{2}$, and scaling $(1, 1)$ by that factor gives $\\left(4\\sqrt{2}, 4\\sqrt{2}\\right)$ ✓. (The choice $(8, 8)$ is USING THE DISTANCE AS BOTH COORDINATES, and that point is $8\\sqrt{2}$ from the origin, roughly $11.3$ ✗; the choice $(2, 2)$ is PUTTING THE DISTANCE ITSELF ON THE RIGHT OF $x^2 + y^2$ instead of its square, solving $2x^2 = 8$ ✗; the choice $(4, 4)$ is HALVING THE DISTANCE INSTEAD OF HALVING ITS SQUARE, and $(4, 4)$ is only $4\\sqrt{2}$ from the origin ✗.)',
    },
    {
      q: 'A point in the first quadrant lies on the line $y = \\frac{4}{3}x$ and is $15$ units from the origin. What is the point?',
      choices: ['$(15, 20)$', '$(9, 12)$', '$(12, 9)$', '$(3, 4)$'],
      answer: 1,
      solution:
        'Route one, solve the two conditions together: distance $15$ from the origin means $x^2 + y^2 = 15^2 = 225$, and the line gives $y = \\frac{4}{3}x$. Substituting, $x^2 + \\frac{16}{9}x^2 = 225$, so $\\frac{25}{9}x^2 = 225$, hence $x^2 = 81$ and $x = 9$ in the first quadrant. Then $y = \\frac{4}{3}(9) = 12$, and the point $(9, 12)$ checks because $81 + 144 = 225$ ✓. Check a second, independent way, by scaling a convenient point of the line: $(3, 4)$ sits on the line, since $\\frac{4}{3}(3) = 4$, and it is $\\sqrt{9 + 16} = 5$ from the origin. Scaling both coordinates by a positive $k$ keeps the point on this line through the origin and multiplies the distance by $k$, so $5k = 15$ gives $k = 3$, and tripling $(3, 4)$ lands on $(9, 12)$ ✓. (The choice $(15, 20)$ is USING THE DISTANCE AS THE FIRST COORDINATE; it lies on the line but is $25$ from the origin ✗; the choice $(12, 9)$ is SWAPPING THE TWO COORDINATES — it happens to be $15$ from the origin, but $\\frac{4}{3}(12) = 16$, not $9$, so it is off the line ✗; the choice $(3, 4)$ is STOPPING AT THE NEAREST LATTICE POINT ON THE LINE, which is only $5$ from the origin ✗.)',
    },
  ],
  // s10 — the length of the chord a horizontal line cuts from a circle.
  [
    {
      q: 'A straight shelf follows the line $y = 15$ across a round wall panel whose rim is the circle $x^2 + y^2 = 289$. How long is the part of the shelf that lies inside the panel?',
      fig: {
        view: [-19, -19, 19, 19],
        grid: true,
        elems: [
          { t: 'circle', c: [0, 0], r: 17 },
          { t: 'line', a: [-8, 15], b: [8, 15] },
          { t: 'seg', a: [0, 0], b: [0, 15], dash: true },
        ],
      },
      choices: ['$8$', '$34$', '$16$', '$64$'],
      answer: 2,
      solution:
        'Route one, find the two ends and subtract: the shelf holds $y = 15$, so the rim equation becomes $x^2 + 15^2 = 289$, that is $x^2 = 64$ and $x = \\pm 8$. The ends are $(-8, 15)$ and $(8, 15)$, both on the rim since $64 + 225 = 289$, and since they share a height the length between them is just the gap in first coordinates, $8 - (-8) = 16$ ✓. Check a second, independent way, with the right triangle at the center: the shelf runs $15$ above the center, so the dashed perpendicular from $(0, 0)$ to the shelf has length $15$. Center, foot of that perpendicular, and one end of the shelf make a right triangle whose hypotenuse is the radius $\\sqrt{289} = 17$ and whose legs are $15$ and the half-length $h$. Then $h^2 + 15^2 = 17^2$, so $h^2 = 289 - 225 = 64$ and $h = 8$ — the $8$-$15$-$17$ triangle. The perpendicular splits the shelf into two equal halves, so the whole thing is $2 \\cdot 8 = 16$ ✓. (The choice $8$ is REPORTING THE HALF-LENGTH AND FORGETTING TO DOUBLE IT ✗; the choice $34$ is USING THE DIAMETER, which would be right only for a shelf running straight through the center rather than $15$ above it ✗; the choice $64$ is STOPPING AT $r^2 - k^2$ AND NEVER TAKING THE SQUARE ROOT, reporting an area-sized number as a length ✗.)',
    },
    {
      q: 'The line $y = 9$ cuts a chord out of the circle $x^2 + y^2 = 225$. How long is that chord?',
      fig: {
        view: [-17, -17, 17, 17],
        grid: true,
        elems: [
          { t: 'circle', c: [0, 0], r: 15 },
          { t: 'line', a: [-12, 9], b: [12, 9] },
          { t: 'seg', a: [0, 0], b: [0, 9], dash: true },
        ],
      },
      choices: ['$24$', '$12$', '$30$', '$144$'],
      answer: 0,
      solution:
        'Route one, find the two ends and subtract: with $y = 9$ the circle equation reads $x^2 + 9^2 = 225$, so $x^2 = 144$ and $x = \\pm 12$. The endpoints are $(-12, 9)$ and $(12, 9)$, both on the circle since $144 + 81 = 225$, and because they sit at the same height the chord’s length is $12 - (-12) = 24$ ✓. Check a second, independent way, with the right triangle at the center: the chord lies $9$ above the center, so the dashed perpendicular from $(0, 0)$ is $9$ long, the radius $\\sqrt{225} = 15$ is the hypotenuse, and the half-chord $h$ satisfies $h^2 + 9^2 = 15^2$. Then $h^2 = 225 - 81 = 144$ and $h = 12$ — the $9$-$12$-$15$ triangle. Doubling the half-chord gives $24$ ✓. (The choice $12$ is REPORTING THE HALF-CHORD AND FORGETTING TO DOUBLE IT ✗; the choice $30$ is USING THE DIAMETER, the longest chord, though this one sits $9$ off center and must be shorter ✗; the choice $144$ is STOPPING AT $r^2 - k^2$ AND NEVER TAKING THE SQUARE ROOT ✗.)',
    },
    {
      q: 'A circular pond has the edge $x^2 + y^2 = 289$, and a floating rope lies along the line $y = -8$. How long is the stretch of rope inside the pond?',
      fig: {
        view: [-19, -19, 19, 19],
        grid: true,
        elems: [
          { t: 'circle', c: [0, 0], r: 17 },
          { t: 'line', a: [-15, -8], b: [15, -8] },
          { t: 'seg', a: [0, 0], b: [0, -8], dash: true },
        ],
      },
      choices: ['$15$', '$34$', '$225$', '$30$'],
      answer: 3,
      solution:
        'Route one, find the two ends and subtract: the rope holds $y = -8$, so $x^2 + (-8)^2 = 289$, that is $x^2 = 225$ and $x = \\pm 15$. The ends are $(-15, -8)$ and $(15, -8)$, both on the edge since $225 + 64 = 289$, and sharing a height means the length is $15 - (-15) = 30$ ✓. Check a second, independent way, with the right triangle at the center: the rope floats $8$ below the center, so the dashed perpendicular from $(0, 0)$ is $8$ long, the radius $\\sqrt{289} = 17$ is the hypotenuse, and the half-length $h$ obeys $h^2 + 8^2 = 17^2$. Then $h^2 = 289 - 64 = 225$ and $h = 15$, once again the $8$-$15$-$17$ triangle. Doubling gives $30$ ✓. (The choice $15$ is REPORTING THE HALF-LENGTH AND FORGETTING TO DOUBLE IT ✗; the choice $34$ is USING THE DIAMETER, which the rope would match only if it ran through the center instead of $8$ below it ✗; the choice $225$ is STOPPING AT $r^2 - k^2$ AND NEVER TAKING THE SQUARE ROOT ✗.)',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 17,
  sections: { '17.6': s176 },
}
