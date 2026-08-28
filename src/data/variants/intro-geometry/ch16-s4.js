// Introduction to Geometry chapter 16 — variations for section 16.4 (Dilation).
// All problems, figures, and solutions are original MathQuest content.
//
// House rules for this file:
//  - A dilation centered at the origin sends $(x, y)$ to $(kx, ky)$. Every keyed
//    answer is worked twice along routes that share no arithmetic: once by
//    multiplying the coordinates, and once by a check that never repeats that
//    multiplication — dividing the image back by k, comparing the two distances
//    from the center, or counting grid steps out along the ray.
//  - Figures are drawn from their own numbers and label only what the question
//    already hands the reader. A slot that asks for the scale factor never shows
//    the scale factor, and a slot that asks for an area never shows the area.
//  - Each distractor is one named mistake — adding k instead of multiplying,
//    scaling a single coordinate, turning k upside down, or scaling an area by k
//    where it earns k squared — and each is named in CAPS at the end.

// ---- figure helpers: coordinate-grid pictures for dilations at the origin ----
const ray = (p) => ({ t: 'seg', a: [0, 0], b: p, dash: true })
const O = () => ({ t: 'point', p: [0, 0], label: 'O', dx: -14, dy: 15 })
const pt = (p, label, dx, dy) => ({ t: 'point', p, label, dx, dy })
const grid = (w, view, elems) => ({ w, view, grid: true, elems })

const s164 = [
  // s1 — one point, one whole-number scale factor. Route two never multiplies
  // again: it walks the image back by dividing, or measures both distances from
  // the center and shows the second is k times the first.
  [
    {
      q: 'A design app enlarges a logo away from the origin with a scale factor of $4$. One corner of the logo sits at $(-4, 5)$. Where does that corner end up?',
      fig: grid(220, [-6, -1, 2, 7], [ray([-4, 5]), O(), pt([-4, 5], 'P', -14, -4)]),
      choices: ['$(0, 9)$', '$(-16, 5)$', '$(-16, 20)$', '$(-4, 20)$'],
      answer: 2,
      solution:
        'Route one, multiply each coordinate by the scale factor: $(4 \\cdot (-4), 4 \\cdot 5) = (-16, 20)$ ✓. Check a second, independent way, by measuring from the center: the corner starts $\\sqrt{(-4)^2 + 5^2} = \\sqrt{41}$ from the origin, and the point $(-16, 20)$ sits $\\sqrt{256 + 400} = \\sqrt{656} = 4\\sqrt{41}$ away — four times as far, on the same ray out into the upper left ✓. (The choice $(0, 9)$ ADDS THE SCALE FACTOR TO EACH COORDINATE instead of multiplying by it ✗; the choice $(-16, 5)$ STRETCHES ONLY THE $x$-COORDINATE, which would shear the logo rather than enlarge it ✗; the choice $(-4, 20)$ STRETCHES ONLY THE $y$-COORDINATE, for the same reason ✗.)',
    },
    {
      q: 'On a game map, a treasure star sits at $(6, -5)$. The whole map is dilated from the origin with a scale factor of $5$. What are the coordinates of the star on the enlarged map?',
      fig: grid(230, [-2, -7, 8, 2], [ray([6, -5]), O(), pt([6, -5], 'S', 12, 6)]),
      choices: ['$(30, -25)$', '$(11, 0)$', '$(30, -5)$', '$(6, -25)$'],
      answer: 0,
      solution:
        'Route one, multiply each coordinate by the scale factor: $(5 \\cdot 6, 5 \\cdot (-5)) = (30, -25)$ ✓. Check a second, independent way, by undoing the enlargement: dividing $(30, -25)$ by $5$ gives back $\\left(\\frac{30}{5}, \\frac{-25}{5}\\right) = (6, -5)$, the star we started from, so $(30, -25)$ is exactly the point a factor of $5$ produces ✓. (The choice $(11, 0)$ ADDS $5$ TO EACH COORDINATE, but a dilation multiplies distances from the center ✗; the choice $(30, -5)$ SCALES ONLY THE $x$-COORDINATE ✗; the choice $(6, -25)$ SCALES ONLY THE $y$-COORDINATE ✗.)',
    },
    {
      q: 'A photograph of a kite is blown up from the origin with a scale factor of $6$. A bright bead on the kite’s tail is marked at $(7, -8)$. Where is the bead in the blown-up photograph?',
      fig: grid(220, [-2, -10, 9, 2], [ray([7, -8]), O(), pt([7, -8], 'B', 12, 8)]),
      choices: ['$(13, -2)$', '$(42, -48)$', '$(42, -8)$', '$(42, 48)$'],
      answer: 1,
      solution:
        'Route one, multiply each coordinate by the scale factor: $(6 \\cdot 7, 6 \\cdot (-8)) = (42, -48)$ ✓. Check a second, independent way, by counting grid steps out along the ray: from the origin the bead lies $7$ steps right and $8$ steps down, and a factor of $6$ makes every one of those steps six times as long — $42$ right and $48$ down. The distance agrees as well: $\\sqrt{49 + 64} = \\sqrt{113}$ grows to $\\sqrt{1764 + 2304} = \\sqrt{4068} = 6\\sqrt{113}$ ✓. (The choice $(13, -2)$ ADDS $6$ TO EACH COORDINATE instead of multiplying ✗; the choice $(42, -8)$ SCALES ONLY THE $x$-COORDINATE ✗; the choice $(42, 48)$ DROPS THE MINUS SIGN while scaling, sending the bead above the axis when it belongs below ✗.)',
    },
  ],
  // s2 — a fractional scale factor, so the image slides in toward the center.
  // Route two multiplies back up or compares distances, never halving twice.
  [
    {
      q: 'An architect shrinks a floor plan toward the origin using a scale factor of $\\frac{1}{2}$. A door hinge drawn at $(12, -8)$ moves to which point?',
      fig: grid(260, [-2, -10, 14, 2], [ray([12, -8]), O(), pt([12, -8], 'H', 12, 8)]),
      choices: ['$(6, -4)$', '$(24, -16)$', '$(6, -8)$', '$(12, -4)$'],
      answer: 0,
      solution:
        'Route one, multiply each coordinate by $\\frac{1}{2}$: $\\left(\\frac{12}{2}, \\frac{-8}{2}\\right) = (6, -4)$ ✓. Check a second, independent way, by measuring from the center: the hinge starts $\\sqrt{144 + 64} = \\sqrt{208} = 4\\sqrt{13}$ from the origin, and $(6, -4)$ sits $\\sqrt{36 + 16} = \\sqrt{52} = 2\\sqrt{13}$ away — exactly half as far, on the same ray down to the right ✓. (The choice $(24, -16)$ USES $k = 2$, THE SCALE FACTOR TURNED UPSIDE DOWN, and grows the plan instead of shrinking it ✗; the choice $(6, -8)$ HALVES ONLY THE $x$-COORDINATE ✗; the choice $(12, -4)$ HALVES ONLY THE $y$-COORDINATE ✗.)',
    },
    {
      q: 'A quilt pattern is reduced toward the origin with a scale factor of $\\frac{1}{3}$. A corner of one patch lies at $(-15, 9)$. What are the coordinates of that corner in the reduced pattern?',
      fig: grid(280, [-18, -2, 3, 11], [ray([-15, 9]), O(), pt([-15, 9], 'C', -14, -4)]),
      choices: ['$(-45, 27)$', '$(-5, 9)$', '$(-15, 3)$', '$(-5, 3)$'],
      answer: 3,
      solution:
        'Route one, multiply each coordinate by $\\frac{1}{3}$: $\\left(\\frac{-15}{3}, \\frac{9}{3}\\right) = (-5, 3)$ ✓. Check a second, independent way, by running the dilation backwards: a factor of $\\frac{1}{3}$ is undone by a factor of $3$, and $3 \\cdot (-5, 3) = (-15, 9)$ returns the original corner, so $(-5, 3)$ is the right landing spot ✓. (The choice $(-45, 27)$ USES $k = 3$, THE SCALE FACTOR TURNED UPSIDE DOWN, so the patch grows when it should shrink ✗; the choice $(-5, 9)$ SHRINKS ONLY THE $x$-COORDINATE ✗; the choice $(-15, 3)$ SHRINKS ONLY THE $y$-COORDINATE ✗.)',
    },
    {
      q: 'A wall mural is copied onto a postcard by a dilation from the origin with a scale factor of $\\frac{1}{4}$. A painted sunflower at $(-28, 20)$ ends up where on the postcard?',
      fig: grid(280, [-31, -3, 4, 23], [ray([-28, 20]), O(), pt([-28, 20], 'F', 6, -10)]),
      choices: ['$(-112, 80)$', '$(-28, 5)$', '$(-7, 5)$', '$(-7, 20)$'],
      answer: 2,
      solution:
        'Route one, multiply each coordinate by $\\frac{1}{4}$: $\\left(\\frac{-28}{4}, \\frac{20}{4}\\right) = (-7, 5)$ ✓. Check a second, independent way, by counting grid steps in toward the center: the sunflower stands $28$ steps left and $20$ steps up from the origin, and quartering every step leaves $7$ left and $5$ up. The distances back that up: $\\sqrt{784 + 400} = \\sqrt{1184}$ shrinks to $\\sqrt{49 + 25} = \\sqrt{74}$, and $1184 = 16 \\cdot 74$, so the new distance is a quarter of the old ✓. (The choice $(-112, 80)$ USES $k = 4$, THE SCALE FACTOR TURNED UPSIDE DOWN ✗; the choice $(-28, 5)$ SHRINKS ONLY THE $y$-COORDINATE ✗; the choice $(-7, 20)$ SHRINKS ONLY THE $x$-COORDINATE ✗.)',
    },
  ],
  // s3 — read the scale factor off a point and its image. Route two compares the
  // two distances from the center, which never divides a pair of coordinates.
  [
    {
      q: 'A dilation centered at the origin carries $A(2, -3)$ to $A\'(12, -18)$. What is the scale factor?',
      fig: grid(260, [-2, -20, 14, 3], [ray([12, -18]), O(), pt([2, -3], 'A', 10, 12), pt([12, -18], "A'", 12, 6)]),
      choices: ['$10$', '$\\frac{1}{6}$', '$36$', '$6$'],
      answer: 3,
      solution:
        'Route one, divide matching coordinates: $\\frac{12}{2} = 6$ and $\\frac{-18}{-3} = 6$. Both ratios agree, so $k = 6$ ✓. Check a second, independent way, by measuring both distances from the center: $A$ lies $\\sqrt{4 + 9} = \\sqrt{13}$ from the origin, while $A\'$ lies $\\sqrt{144 + 324} = \\sqrt{468} = 6\\sqrt{13}$ away, six times as far and on the same ray ✓. (The choice $10$ SUBTRACTS THE COORDINATES, $12 - 2$, though a dilation multiplies distances rather than adding to them ✗; the choice $\\frac{1}{6}$ INVERTS THE RATIO and describes the trip from $A\'$ back to $A$ ✗; the choice $36$ REPORTS $k^2$, the factor areas pick up, where the factor for a single point belongs ✗.)',
    },
    {
      q: 'A dilation centered at the origin sends $A(-4, 7)$ to the image $A\'(-28, 49)$. Find the scale factor.',
      fig: grid(220, [-31, -3, 4, 52], [ray([-28, 49]), O(), pt([-4, 7], 'A', 10, 6), pt([-28, 49], "A'", 6, -10)]),
      choices: ['$\\frac{1}{7}$', '$7$', '$49$', '$-24$'],
      answer: 1,
      solution:
        'Route one, divide matching coordinates: $\\frac{-28}{-4} = 7$ and $\\frac{49}{7} = 7$. The two ratios agree, so $k = 7$ ✓. Check a second, independent way, by measuring both distances from the center: $A$ sits $\\sqrt{16 + 49} = \\sqrt{65}$ from the origin, and $A\'$ sits $\\sqrt{784 + 2401} = \\sqrt{3185} = 7\\sqrt{65}$ away, seven times as far along the same ray ✓. (The choice $\\frac{1}{7}$ INVERTS THE RATIO, giving the factor that carries $A\'$ back to $A$ ✗; the choice $49$ REPORTS $k^2$, the factor for areas, and happens to copy the image’s $y$-coordinate ✗; the choice $-24$ SUBTRACTS THE $x$-COORDINATES, $-28 - (-4)$, treating the dilation as a slide ✗.)',
    },
    {
      q: 'A dilation centered at the origin maps $A(5, -6)$ onto the image $A\'(45, -54)$. What scale factor was used?',
      fig: grid(250, [-4, -58, 49, 4], [ray([45, -54]), O(), pt([5, -6], 'A', 12, 4), pt([45, -54], "A'", 8, 14)]),
      choices: ['$40$', '$\\frac{1}{9}$', '$9$', '$81$'],
      answer: 2,
      solution:
        'Route one, divide matching coordinates: $\\frac{45}{5} = 9$ and $\\frac{-54}{-6} = 9$. Both agree, so $k = 9$ ✓. Check a second, independent way, by counting grid steps out along the ray: $A$ stands $5$ right and $6$ down from the origin, while $A\'$ stands $45$ right and $54$ down — and $45 = 9 \\cdot 5$ with $54 = 9 \\cdot 6$, so every step out from the center has been stretched nine times ✓. (The choice $40$ SUBTRACTS THE COORDINATES, $45 - 5$, though dilations multiply distances rather than add to them ✗; the choice $\\frac{1}{9}$ INVERTS THE RATIO and runs the map backwards ✗; the choice $81$ REPORTS $k^2$, the factor areas pick up, where a point’s own factor belongs ✗.)',
    },
  ],
  // s4 — the concept slot. Route one reasons from the rule $(x, y) \to (kx, ky)$;
  // route two tests the same claim on a concrete figure, so the two arguments
  // never lean on each other.
  [
    {
      q: 'A triangle is dilated with a scale factor of $k = 4$ about a center outside it. Which feature of the triangle is NOT preserved?',
      choices: [
        'the measures of the angles',
        'the shape of the triangle',
        'the lengths of the sides',
        'the number of sides',
      ],
      answer: 2,
      solution:
        'Route one, read it off the rule: a dilation multiplies every distance from the center by $k$, and $k = 4$ turns a side of length $3$ into a side of length $12$. Lengths are the one thing on the list that a dilation changes ✓. Check a second, independent way, on a concrete triangle: take the right triangle with legs $3$ and $4$ and hypotenuse $5$. A factor of $4$ makes it $12$, $16$, $20$ — the legs still meet at a right angle, the picture is still the same right triangle enlarged, and the image is still a three-sided figure, so angles, shape and side count all survive while every length quadruples ✓. (The choice the measures of the angles NAMES THE PROPERTY EVERY DILATION KEEPS, which is exactly why the image is similar to the original ✗; the choice the shape of the triangle CONFUSES ENLARGING WITH DISTORTING — a dilation stretches every direction by the same $4$, so the shape is untouched ✗; the choice the number of sides EXPECTS A STRETCH TO ADD CORNERS, though a dilation moves each of the three vertices and joins them up again ✗.)',
    },
    {
      q: 'A triangle is dilated with a scale factor of $k = \\frac{1}{3}$. Which of these IS preserved?',
      choices: ['the measures of the angles', 'the length of the longest side', 'the perimeter', 'the area'],
      answer: 0,
      solution:
        'Route one, read it off the rule: a dilation produces a similar copy, and similar figures agree in every angle — shrinking a triangle toward a center never opens or closes a corner ✓. Check a second, independent way, on a concrete triangle: take the one with sides $6$, $9$ and $12$. A factor of $\\frac{1}{3}$ leaves sides $2$, $3$ and $4$, so the longest side falls from $12$ to $4$, the perimeter falls from $27$ to $9$, and the area falls to $\\left(\\frac{1}{3}\\right)^2 = \\frac{1}{9}$ of what it was. Every measurement on the list moves except the angles, which the matching side ratios $2 : 3 : 4$ pin in place ✓. (The choice the length of the longest side MISSES THAT EVERY LENGTH IS MULTIPLIED BY $\\frac{1}{3}$, the longest one included ✗; the choice the perimeter ADDS UP THOSE SHRUNKEN SIDES and so shrinks by $\\frac{1}{3}$ as well ✗; the choice the area SHRINKS FASTEST OF ALL, by $k^2 = \\frac{1}{9}$, since both dimensions are scaled ✗.)',
    },
    {
      q: 'A rectangle is dilated with a scale factor of $k = \\frac{3}{4}$. Which statement about the image is true?',
      choices: [
        'the image is congruent to the original',
        'the image is similar to the original but larger',
        'the image has the same area as the original',
        'the image is similar to the original but smaller',
      ],
      answer: 3,
      solution:
        'Route one, read it off the rule: a dilation always produces a similar figure, and $\\frac{3}{4}$ is a factor between $0$ and $1$, so every length is cut to three quarters of itself and the copy comes out smaller ✓. Check a second, independent way, on a concrete rectangle: an $8$ by $12$ rectangle becomes $6$ by $9$. The corners are still right angles and $6 : 9$ matches $8 : 12$, so the copy is the same shape; but its area drops from $96$ to $54$, which is $\\left(\\frac{3}{4}\\right)^2 = \\frac{9}{16}$ of the original — smaller, not congruent ✓. (The choice the image is congruent to the original WOULD NEED $|k| = 1$, the only scale factor that leaves lengths alone ✗; the choice the image is similar to the original but larger READS $\\frac{3}{4}$ AS A GROWTH FACTOR, though a factor under $1$ pulls points in toward the center ✗; the choice the image has the same area as the original IGNORES THAT AREA IS MULTIPLIED BY $k^2 = \\frac{9}{16}$ ✗.)',
    },
  ],
  // s5 — the area of a dilated square. Route one builds the image square and
  // squares its side; route two never finds that side, multiplying the original
  // area by $k^2$ instead.
  [
    {
      q: 'A square floor tile with side length $5$ is dilated with a scale factor of $2$. What is the area of the image?',
      fig: grid(200, [-1, -1, 6, 6], [{ t: 'poly', pts: [[0, 0], [5, 0], [5, 5], [0, 5]] }, { t: 'label', p: [2.5, 0], text: 'side 5', dx: 0, dy: 16 }]),
      choices: ['$50$', '$100$', '$25$', '$40$'],
      answer: 1,
      solution:
        'Route one, build the image and measure it: every length doubles, so the image is a square of side $5 \\cdot 2 = 10$, and its area is $10^2 = 100$ ✓. Check a second, independent way, without ever finding the new side: the original tile covers $5^2 = 25$, and a dilation multiplies area by $k^2$ because both dimensions are scaled — here $k^2 = 4$, so the image covers $25 \\cdot 4 = 100$ ✓. (The choice $50$ MULTIPLIES THE AREA BY $k$ INSTEAD OF $k^2$, paying the scale factor once when area earns it twice ✗; the choice $25$ IS THE ORIGINAL AREA, left unscaled ✗; the choice $40$ IS THE IMAGE’S PERIMETER, $4 \\cdot 10$, not its area ✗.)',
    },
    {
      q: 'A square sticker of side length $3$ is enlarged by a dilation with scale factor $5$. How much area does the enlarged sticker cover?',
      fig: grid(200, [0, 0, 5, 5], [{ t: 'poly', pts: [[1, 1], [4, 1], [4, 4], [1, 4]] }, { t: 'label', p: [2.5, 1], text: 'side 3', dx: 0, dy: 16 }]),
      choices: ['$45$', '$60$', '$9$', '$225$'],
      answer: 3,
      solution:
        'Route one, build the image and measure it: the side grows to $3 \\cdot 5 = 15$, so the enlarged sticker covers $15^2 = 225$ ✓. Check a second, independent way, straight from the area factor: the sticker starts with area $3^2 = 9$, and a dilation multiplies area by $k^2 = 25$ — one factor of $5$ for the width and one for the height — giving $9 \\cdot 25 = 225$ ✓. (The choice $45$ MULTIPLIES THE AREA BY $k$ INSTEAD OF $k^2$ ✗; the choice $60$ IS THE IMAGE’S PERIMETER, $4 \\cdot 15$, not its area ✗; the choice $9$ IS THE ORIGINAL AREA, as though the enlargement never happened ✗.)',
    },
    {
      q: 'A square window pane of side length $4$ is dilated with a scale factor of $6$. What is the area of the image?',
      fig: grid(200, [-1, -1, 5, 5], [{ t: 'poly', pts: [[0, 0], [4, 0], [4, 4], [0, 4]] }, { t: 'label', p: [2, 0], text: 'side 4', dx: 0, dy: 16 }]),
      choices: ['$576$', '$96$', '$16$', '$24$'],
      answer: 0,
      solution:
        'Route one, build the image and measure it: the side becomes $4 \\cdot 6 = 24$, so the image has area $24^2 = 576$ ✓. Check a second, independent way, from the area factor alone: the pane starts at $4^2 = 16$, and areas are multiplied by $k^2 = 36$, so the image covers $16 \\cdot 36 = 576$ ✓. (The choice $96$ MULTIPLIES THE AREA BY $k$ INSTEAD OF $k^2$, giving $16 \\cdot 6$ ✗; the choice $16$ IS THE ORIGINAL AREA, left unscaled ✗; the choice $24$ IS THE IMAGE’S SIDE LENGTH, one squaring short of its area ✗.)',
    },
  ],
  // s6 — the scale factor $k = -1$. Route two keeps the distance and swings the
  // point through the center, which is the picture behind the arithmetic.
  [
    {
      q: 'A pin on a spinning game board is at $(5, -7)$. The board is dilated about the origin with a scale factor of $k = -1$. Where does the pin go?',
      fig: grid(200, [-2, -9, 7, 2], [ray([5, -7]), O(), pt([5, -7], 'P', 12, 6)]),
      choices: ['$(-5, -7)$', '$(5, 7)$', '$(5, -7)$', '$(-5, 7)$'],
      answer: 3,
      solution:
        'Route one, multiply each coordinate by $-1$: $(-1 \\cdot 5, -1 \\cdot (-7)) = (-5, 7)$ ✓. Check a second, independent way, by walking the ray through the center: $|k| = 1$, so the pin keeps its distance $\\sqrt{25 + 49} = \\sqrt{74}$ from the origin, and the minus sign sends it out the opposite side. Going $5$ right and $7$ down becomes going $5$ left and $7$ up, which lands on $(-5, 7)$ ✓. (The choice $(-5, -7)$ NEGATES ONLY THE $x$-COORDINATE, which is a mirror in the $y$-axis rather than a dilation ✗; the choice $(5, 7)$ NEGATES ONLY THE $y$-COORDINATE, a mirror in the $x$-axis ✗; the choice $(5, -7)$ LEAVES THE PIN WHERE IT IS, reading $|k| = 1$ as though nothing happens ✗.)',
    },
    {
      q: 'A robot arm marks the point $(-8, 6)$, then applies a dilation centered at the origin with scale factor $k = -1$. What point does the arm mark next?',
      fig: grid(240, [-10, -2, 3, 8], [ray([-8, 6]), O(), pt([-8, 6], 'M', -14, -4)]),
      choices: ['$(8, 6)$', '$(-8, -6)$', '$(8, -6)$', '$(-8, 6)$'],
      answer: 2,
      solution:
        'Route one, multiply each coordinate by $-1$: $(-1 \\cdot (-8), -1 \\cdot 6) = (8, -6)$ ✓. Check a second, independent way, by swinging the point through the center: with $|k| = 1$ the distance $\\sqrt{64 + 36} = 10$ is unchanged, and the negative sign puts the image on the far side of the origin. A trip of $8$ left and $6$ up reverses into $8$ right and $6$ down, arriving at $(8, -6)$ — the same half-turn about the origin that $k = -1$ always performs ✓. (The choice $(8, 6)$ NEGATES ONLY THE $x$-COORDINATE, a mirror in the $y$-axis ✗; the choice $(-8, -6)$ NEGATES ONLY THE $y$-COORDINATE, a mirror in the $x$-axis ✗; the choice $(-8, 6)$ LEAVES THE MARK UNMOVED, reading $|k| = 1$ as no change at all ✗.)',
    },
    {
      q: 'A star chart is redrawn by a dilation centered at the origin with scale factor $k = -1$. A star plotted at $(-11, -9)$ appears where on the redrawn chart?',
      fig: grid(240, [-13, -11, 3, 3], [ray([-11, -9]), O(), pt([-11, -9], 'S', -14, 14)]),
      choices: ['$(11, -9)$', '$(11, 9)$', '$(-11, 9)$', '$(-11, -9)$'],
      answer: 1,
      solution:
        'Route one, multiply each coordinate by $-1$: $(-1 \\cdot (-11), -1 \\cdot (-9)) = (11, 9)$ ✓. Check a second, independent way, by carrying the star through the center: $|k| = 1$ holds the distance $\\sqrt{121 + 81} = \\sqrt{202}$ fixed, and the minus sign sends the star out the opposite ray. Instead of $11$ left and $9$ down from the origin, it lies $11$ right and $9$ up, at $(11, 9)$ ✓. (The choice $(11, -9)$ NEGATES ONLY THE $x$-COORDINATE, giving a mirror in the $y$-axis ✗; the choice $(-11, 9)$ NEGATES ONLY THE $y$-COORDINATE, giving a mirror in the $x$-axis ✗; the choice $(-11, -9)$ LEAVES THE STAR IN PLACE, as though a scale factor of size $1$ could do nothing ✗.)',
    },
  ],
  // s7 — a fractional factor applied to one named vertex of a triangle. Route
  // two rebuilds the original by scaling the image back up, so the shrinking
  // arithmetic is never repeated.
  [
    {
      q: 'The triangle with vertices $A(6, 0)$, $B(2, 8)$ and $C(-4, 4)$ is dilated from the origin with a scale factor of $\\frac{1}{2}$. What is the image of the vertex $C$?',
      fig: grid(260, [-6, -2, 8, 10], [
        { t: 'poly', pts: [[6, 0], [2, 8], [-4, 4]] },
        O(),
        pt([6, 0], 'A', 12, 12),
        pt([2, 8], 'B', 8, -8),
        pt([-4, 4], 'C', -14, -4),
      ]),
      choices: ['$(-2, 2)$', '$(-8, 8)$', '$(-2, 4)$', '$(-4, 2)$'],
      answer: 0,
      solution:
        'Route one, multiply both coordinates of $C$ by $\\frac{1}{2}$: $\\left(\\frac{-4}{2}, \\frac{4}{2}\\right) = (-2, 2)$ ✓. Check a second, independent way, by running the map backwards: doubling $(-2, 2)$ returns $(-4, 4)$, which is $C$ itself, so $(-2, 2)$ is where a half-size copy puts that corner. The picture agrees — $(-2, 2)$ lies on the segment from the origin to $C$, at its midpoint ✓. (The choice $(-8, 8)$ USES $k = 2$, THE SCALE FACTOR TURNED UPSIDE DOWN, and enlarges the triangle ✗; the choice $(-2, 4)$ HALVES ONLY THE $x$-COORDINATE ✗; the choice $(-4, 2)$ HALVES ONLY THE $y$-COORDINATE ✗.)',
    },
    {
      q: 'Triangle $ABC$ has vertices $A(9, -3)$, $B(-6, 12)$ and $C(3, 6)$. The triangle is dilated from the origin with a scale factor of $\\frac{1}{3}$. Where does vertex $B$ land?',
      fig: grid(260, [-8, -5, 11, 14], [
        { t: 'poly', pts: [[9, -3], [-6, 12], [3, 6]] },
        O(),
        pt([9, -3], 'A', 12, 8),
        pt([-6, 12], 'B', -14, -4),
        pt([3, 6], 'C', 12, 2),
      ]),
      choices: ['$(-18, 36)$', '$(-2, 12)$', '$(-2, 4)$', '$(-6, 4)$'],
      answer: 2,
      solution:
        'Route one, multiply both coordinates of $B$ by $\\frac{1}{3}$: $\\left(\\frac{-6}{3}, \\frac{12}{3}\\right) = (-2, 4)$ ✓. Check a second, independent way, by undoing the shrink: a factor of $3$ carries $(-2, 4)$ to $(3 \\cdot (-2), 3 \\cdot 4) = (-6, 12)$, which is $B$, so $(-2, 4)$ is exactly one third of the way out from the origin to $B$ ✓. (The choice $(-18, 36)$ USES $k = 3$, THE SCALE FACTOR TURNED UPSIDE DOWN, and pushes the vertex farther out instead of pulling it in ✗; the choice $(-2, 12)$ SHRINKS ONLY THE $x$-COORDINATE ✗; the choice $(-6, 4)$ SHRINKS ONLY THE $y$-COORDINATE ✗.)',
    },
    {
      q: 'A triangular sail is drawn with corners $A(12, -8)$, $B(-4, 16)$ and $C(8, 4)$. A dilation from the origin with a scale factor of $\\frac{1}{4}$ makes a scale model of the sail. What is the image of corner $B$?',
      fig: grid(220, [-6, -10, 14, 18], [
        { t: 'poly', pts: [[12, -8], [-4, 16], [8, 4]] },
        O(),
        pt([12, -8], 'A', 12, 10),
        pt([-4, 16], 'B', -14, -4),
        pt([8, 4], 'C', 12, 4),
      ]),
      choices: ['$(-16, 64)$', '$(-1, 4)$', '$(-1, 16)$', '$(-4, 4)$'],
      answer: 1,
      solution:
        'Route one, multiply both coordinates of $B$ by $\\frac{1}{4}$: $\\left(\\frac{-4}{4}, \\frac{16}{4}\\right) = (-1, 4)$ ✓. Check a second, independent way, by scaling the model back up to full size: a factor of $4$ sends $(-1, 4)$ to $(-4, 16)$, corner $B$ again, so the model puts that corner at $(-1, 4)$. Counting steps says the same thing — $B$ is $4$ left and $16$ up from the origin, and a quarter of each is $1$ left and $4$ up ✓. (The choice $(-16, 64)$ USES $k = 4$, THE SCALE FACTOR TURNED UPSIDE DOWN, and builds a sail four times full size ✗; the choice $(-1, 16)$ SHRINKS ONLY THE $x$-COORDINATE ✗; the choice $(-4, 4)$ SHRINKS ONLY THE $y$-COORDINATE ✗.)',
    },
  ],
  // s8 — the pre-image: the dilation is known and the finished point is given.
  // Route two never divides twice; it multiplies the recovered point forward and
  // checks it lands on the image.
  [
    {
      q: 'A dilation centered at the origin with a scale factor of $4$ sends a point $A$ to the image $A\'(12, -20)$. What was $A$?',
      fig: grid(240, [-6, -22, 16, 3], [ray([12, -20]), O(), pt([12, -20], "A'", 12, 8)]),
      choices: ['$(48, -80)$', '$(3, -5)$', '$(8, -24)$', '$(3, -20)$'],
      answer: 1,
      solution:
        'Route one, divide the image by the scale factor: $\\left(\\frac{12}{4}, \\frac{-20}{4}\\right) = (3, -5)$ ✓. Check a second, independent way, by running the dilation forward on that candidate: $4 \\cdot (3, -5) = (12, -20)$, which is $A\'$ on the nose. The distances match too — $(3, -5)$ lies $\\sqrt{9 + 25} = \\sqrt{34}$ from the origin and $A\'$ lies $\\sqrt{144 + 400} = \\sqrt{544} = 4\\sqrt{34}$ away, four times as far ✓. (The choice $(48, -80)$ APPLIES THE DILATION A SECOND TIME instead of undoing it ✗; the choice $(8, -24)$ SUBTRACTS $4$ FROM EACH COORDINATE, treating the dilation as a slide ✗; the choice $(3, -20)$ DIVIDES ONLY THE $x$-COORDINATE ✗.)',
    },
    {
      q: 'A dilation centered at the origin with a scale factor of $3$ carries a point $A$ to the image $A\'(-21, 12)$. Find $A$.',
      fig: grid(280, [-24, -3, 4, 15], [ray([-21, 12]), O(), pt([-21, 12], "A'", -16, -4)]),
      choices: ['$(-7, 4)$', '$(-63, 36)$', '$(-24, 9)$', '$(-7, 12)$'],
      answer: 0,
      solution:
        'Route one, divide the image by the scale factor: $\\left(\\frac{-21}{3}, \\frac{12}{3}\\right) = (-7, 4)$ ✓. Check a second, independent way, by dilating the candidate forward: $3 \\cdot (-7, 4) = (-21, 12)$, exactly $A\'$. Steps agree as well — $(-7, 4)$ sits $7$ left and $4$ up from the origin, and tripling every step gives $21$ left and $12$ up ✓. (The choice $(-63, 36)$ RUNS THE DILATION FORWARD AGAIN rather than backwards ✗; the choice $(-24, 9)$ SUBTRACTS $3$ FROM EACH COORDINATE, as though the map were a translation ✗; the choice $(-7, 12)$ DIVIDES ONLY THE $x$-COORDINATE ✗.)',
    },
    {
      q: 'A dilation centered at the origin with a scale factor of $6$ takes a point $A$ to the image $A\'(24, -42)$. What were the coordinates of $A$?',
      fig: grid(260, [-10, -46, 34, 4], [ray([24, -42]), O(), pt([24, -42], "A'", 12, 10)]),
      choices: ['$(144, -252)$', '$(18, -48)$', '$(4, -42)$', '$(4, -7)$'],
      answer: 3,
      solution:
        'Route one, divide the image by the scale factor: $\\left(\\frac{24}{6}, \\frac{-42}{6}\\right) = (4, -7)$ ✓. Check a second, independent way, by dilating the candidate forward: $6 \\cdot (4, -7) = (24, -42)$, which is $A\'$. The distances confirm it — $(4, -7)$ lies $\\sqrt{16 + 49} = \\sqrt{65}$ from the origin while $A\'$ lies $\\sqrt{576 + 1764} = \\sqrt{2340} = 6\\sqrt{65}$ away, six times as far along the same ray ✓. (The choice $(144, -252)$ APPLIES THE DILATION AGAIN instead of reversing it ✗; the choice $(18, -48)$ SUBTRACTS $6$ FROM EACH COORDINATE, mistaking the dilation for a slide ✗; the choice $(4, -42)$ DIVIDES ONLY THE $x$-COORDINATE ✗.)',
    },
  ],
  // s9 — an area carried by a dilation known only through a length ratio. Route
  // one finds $k$ and multiplies the area by $k^2$; route two builds a rectangle
  // of the given area and stretches its two sides one at a time, so the squaring
  // is never taken on faith.
  [
    {
      q: 'A dilation carries a segment of length $3$ to a segment of length $12$. A figure carried by that same dilation has area $6$. What is the area of its image?',
      choices: ['$24$', '$48$', '$96$', '$384$'],
      answer: 2,
      solution:
        'Route one, find the scale factor and square it: lengths go from $3$ to $12$, so $k = \\frac{12}{3} = 4$, and areas are multiplied by $k^2 = 16$. The image has area $6 \\cdot 16 = 96$ ✓. Check a second, independent way, by stretching a rectangle side by side: a rectangle of area $6$ can be drawn $2$ by $3$. The dilation quadruples each side on its own, giving $8$ by $12$, and $8 \\cdot 12 = 96$ ✓ — the two factors of $4$ arrive one per dimension, which is why area picks up the factor twice. (The choice $24$ MULTIPLIES THE AREA BY $k$ INSTEAD OF $k^2$, scaling only one dimension ✗; the choice $48$ DOUBLES $k$ RATHER THAN SQUARING IT, using $8$ where $16$ belongs ✗; the choice $384$ CUBES $k$, which is what a volume would earn, not a flat region ✗.)',
    },
    {
      q: 'A dilation stretches a segment of length $4$ into a segment of length $14$. A figure with area $8$ is carried by the same dilation. What is the area of the image?',
      choices: ['$28$', '$56$', '$343$', '$98$'],
      answer: 3,
      solution:
        'Route one, find the scale factor and square it: $k = \\frac{14}{4} = \\frac{7}{2}$, so areas are multiplied by $k^2 = \\frac{49}{4}$, and the image has area $8 \\cdot \\frac{49}{4} = 98$ ✓. Check a second, independent way, by stretching a rectangle side by side: draw the region as a $2$ by $4$ rectangle, area $8$. Each side is multiplied by $\\frac{7}{2}$ on its own, giving $7$ by $14$, and $7 \\cdot 14 = 98$ ✓. (The choice $28$ MULTIPLIES THE AREA BY $k$ INSTEAD OF $k^2$, paying the factor once ✗; the choice $56$ DOUBLES $k$ RATHER THAN SQUARING IT, using $7$ where $\\frac{49}{4}$ belongs ✗; the choice $343$ CUBES $k$, the factor a solid would earn ✗.)',
    },
    {
      q: 'A dilation takes a segment of length $5$ to a segment of length $15$. A figure of area $12$ is carried along by it. What is the area of the image?',
      choices: ['$108$', '$36$', '$72$', '$324$'],
      answer: 0,
      solution:
        'Route one, find the scale factor and square it: $k = \\frac{15}{5} = 3$, areas are multiplied by $k^2 = 9$, and the image has area $12 \\cdot 9 = 108$ ✓. Check a second, independent way, by stretching a rectangle side by side: a rectangle of area $12$ can be drawn $3$ by $4$. Tripling each side separately gives $9$ by $12$, and $9 \\cdot 12 = 108$ ✓ — the factor of $3$ shows up once for the width and once for the height. (The choice $36$ MULTIPLIES THE AREA BY $k$ INSTEAD OF $k^2$, stretching in one direction only ✗; the choice $72$ DOUBLES $k$ RATHER THAN SQUARING IT, using $6$ where $9$ belongs ✗; the choice $324$ CUBES $k$, which suits a volume rather than a flat figure ✗.)',
    },
  ],
  // s10 — read the scale factor off one matched pair, then apply it to a second
  // point. Route two either undoes the dilation on the answer or compares the two
  // distances from the center, so the multiplication is never simply repeated.
  [
    {
      q: 'A dilation centered at the origin sends $(3, 2)$ to $(7.5, 5)$. Where does it send $(-6, 4)$?',
      fig: grid(280, [-1, -1, 9, 6], [ray([7.5, 5]), O(), pt([3, 2], 'A', 4, -10), pt([7.5, 5], "A'", 8, -8)]),
      choices: ['$(-1.5, 7)$', '$(-15, 10)$', '$(-15, 4)$', '$(15, -10)$'],
      answer: 1,
      solution:
        'Route one, read the factor off the matched pair, then apply it: $\\frac{7.5}{3} = \\frac{5}{2}$ from the first coordinates and $5 \\div 2 = \\frac{5}{2}$ from the second, so $k = \\frac{5}{2}$, and $\\left(\\frac{5}{2} \\cdot (-6), \\frac{5}{2} \\cdot 4\\right) = (-15, 10)$ ✓. Check a second, independent way, by comparing distances from the center: $(-6, 4)$ lies $\\sqrt{36 + 16} = \\sqrt{52} = 2\\sqrt{13}$ from the origin, and $(-15, 10)$ lies $\\sqrt{225 + 100} = \\sqrt{325} = 5\\sqrt{13}$ away. The ratio is $\\frac{5}{2}$, matching the factor the first pair reported, and both points sit in the upper left on one ray ✓. (The choice $(-1.5, 7)$ TREATS THE MAP AS A TRANSLATION, adding $4.5$ and $3$, but the question says the map is a dilation centered at the origin, and a slide would carry the center away from itself ✗; the choice $(-15, 4)$ SCALES ONLY THE $x$-COORDINATE ✗; the choice $(15, -10)$ FLIPS BOTH SIGNS, as though the scale factor were negative ✗.)',
    },
    {
      q: 'A dilation centered at the origin maps $(4, -6)$ onto $(10, -15)$. What is the image of $(-8, 2)$ under the same dilation?',
      fig: grid(220, [-2, -17, 12, 2], [ray([10, -15]), O(), pt([4, -6], 'A', 12, 4), pt([10, -15], "A'", 12, 8)]),
      choices: ['$(-2, -7)$', '$(-20, 2)$', '$(20, -5)$', '$(-20, 5)$'],
      answer: 3,
      solution:
        'Route one, read the factor off the matched pair, then apply it: $\\frac{10}{4} = \\frac{5}{2}$ and $\\frac{-15}{-6} = \\frac{5}{2}$, so $k = \\frac{5}{2}$, and $\\left(\\frac{5}{2} \\cdot (-8), \\frac{5}{2} \\cdot 2\\right) = (-20, 5)$ ✓. Check a second, independent way, by undoing the dilation on the answer: shrinking $(-20, 5)$ by the reverse factor $\\frac{2}{5}$ gives $\\left(\\frac{2}{5} \\cdot (-20), \\frac{2}{5} \\cdot 5\\right) = (-8, 2)$, the point we started from ✓. (The choice $(-2, -7)$ TREATS THE MAP AS A TRANSLATION, adding $6$ and subtracting $9$, though the question says the map is a dilation centered at the origin, and a slide would move the center ✗; the choice $(-20, 2)$ SCALES ONLY THE $x$-COORDINATE ✗; the choice $(20, -5)$ FLIPS BOTH SIGNS, which would need a negative scale factor ✗.)',
    },
    {
      q: 'A dilation centered at the origin sends $(6, -4)$ to $(9, -6)$. Where does the same dilation send $(-10, 8)$?',
      fig: grid(260, [-1, -8, 11, 2], [ray([9, -6]), O(), pt([6, -4], 'A', 4, 14), pt([9, -6], "A'", 12, 6)]),
      choices: ['$(-7, 6)$', '$(-15, 8)$', '$(-15, 12)$', '$(15, -12)$'],
      answer: 2,
      solution:
        'Route one, read the factor off the matched pair, then apply it: $\\frac{9}{6} = \\frac{3}{2}$ and $\\frac{-6}{-4} = \\frac{3}{2}$, so $k = \\frac{3}{2}$, and $\\left(\\frac{3}{2} \\cdot (-10), \\frac{3}{2} \\cdot 8\\right) = (-15, 12)$ ✓. Check a second, independent way, by comparing distances from the center: $(-10, 8)$ lies $\\sqrt{100 + 64} = \\sqrt{164} = 2\\sqrt{41}$ from the origin, while $(-15, 12)$ lies $\\sqrt{225 + 144} = \\sqrt{369} = 3\\sqrt{41}$ away — a ratio of $\\frac{3}{2}$, the very factor the first pair reported, with both points on one ray into the upper left ✓. (The choice $(-7, 6)$ TREATS THE MAP AS A TRANSLATION, adding $3$ and subtracting $2$, but the question says the map is a dilation centered at the origin, and a slide would push the center off itself ✗; the choice $(-15, 8)$ SCALES ONLY THE $x$-COORDINATE ✗; the choice $(15, -12)$ FLIPS BOTH SIGNS, which a positive scale factor never does ✗.)',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 16,
  sections: { '16.4': s164 },
}
