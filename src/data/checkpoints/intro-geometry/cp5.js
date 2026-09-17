// Introduction to Geometry — Checkpoint 5: after chapter 15, covers chapters 1–15.
// All problems, figures, and solutions are original MathQuest content.
// Solids are oblique wireframes: dashed segments are hidden edges, and the
// dimension labels carry the stated measurements, since a projection does not
// preserve length.

const K = 0.3 // vertical squash for a circle seen nearly edge-on
const R2 = (x) => Math.round(x * 100) / 100

function ell(cx, cy, rx, d0, d1, n = 28) {
  const pts = []
  for (let i = 0; i <= n; i++) {
    const a = ((d0 + ((d1 - d0) * i) / n) * Math.PI) / 180
    pts.push([R2(cx + rx * Math.cos(a)), R2(cy + K * rx * Math.sin(a))])
  }
  return pts
}

function dashedEll(cx, cy, rx, d0, d1, n = 8) {
  const p = ell(cx, cy, rx, d0, d1, n)
  const out = []
  for (let i = 0; i < n; i++) out.push({ t: 'seg', a: p[i], b: p[i + 1], dash: true })
  return out
}

export default {
  id: 'intro-geometry-cp5',
  book: 'intro-geometry',
  number: 5,
  after: 15,
  covers: [1, 15],
  title: 'The Peeled Label',
  blurb: 'Every solid on this paper hides a flat picture — a net, a cross-section, a triangle through the axis — and the problem is over the moment you find it.',
  minutes: 25,
  problems: [
    {
      q: 'A storage shed is a block with a flat roof: its floor is an irregular hexagon, and the space inside it is $2700$ cubic feet. Beside it a tent is pitched on a floor of exactly the same shape and size, and the tent’s single peak stands exactly as high as the shed’s roof. How many cubic feet of air does the tent enclose?',
      choices: ['$675$', '$900$', '$1350$', '$2700$', '$8100$'],
      answer: 1,
      solution: 'The tent is a pyramid and the shed is a prism, and they share a base and a height, so the tent holds exactly one third of the shed — the one-third rule does not care what shape the floor is, hexagon or otherwise. That gives $\\frac{2700}{3} = 900$ cubic feet. The choice $675$ takes a quarter instead of a third, $1350$ takes a half, $2700$ is the shed itself, and $8100$ multiplies by $3$ instead of dividing.',
      topic: 'geometry',
      chapter: 14,
    },
    {
      q: 'The paper label on a soup can is peeled off in one piece and laid flat. It is a rectangle $8$ cm by $10\\pi$ cm, and it wrapped around the can exactly once with no overlap, covering the can from top to bottom. What is the volume of the can, in cubic centimeters?',
      choices: ['$40\\pi$', '$160$', '$80\\pi$', '$125\\pi$', '$200\\pi$'],
      answer: 4,
      solution: 'The side of the label that went around the can is its circumference, and a circumference is the side carrying the $\\pi$: $2\\pi r = 10\\pi$, so $r = 5$, and the other side, $8$, is the height. The volume is $\\pi r^2 h = \\pi \\cdot 25 \\cdot 8 = 200\\pi$. The choice $40\\pi$ is $\\pi \\cdot 5 \\cdot 8$ with the radius never squared, $160$ comes from taking $8$ as the circumference (then $r = \\frac{4}{\\pi}$ and the $\\pi$’s cancel), $80\\pi$ is the area of the label itself, and $125\\pi$ is $\\pi \\cdot 5^3$, the radius cubed with the height never used.',
      topic: 'geometry',
      chapter: 15,
    },
    {
      q: 'The minute hand of a station clock is $15$ inches long. How far, in inches, does its tip travel between $2{:}10$ and $2{:}54$?',
      choices: ['$8\\pi$', '$11\\pi$', '$13.2\\pi$', '$15\\pi$', '$22\\pi$'],
      answer: 4,
      solution: 'From $2{:}10$ to $2{:}54$ is $44$ minutes, which is $\\frac{44}{60} = \\frac{11}{15}$ of a full turn. The tip moves on a circle of radius $15$, whose circumference is $2\\pi \\cdot 15 = 30\\pi$, so it travels $\\frac{11}{15} \\cdot 30\\pi = 22\\pi$ inches. The choice $8\\pi$ uses the $16$ minutes left before three o’clock, $11\\pi$ forgets the $2$ in the circumference, $13.2\\pi$ reads $44$ minutes as $44\\%$ of a turn, and $15\\pi$ is a half turn, as if the hand had moved for $30$ minutes.',
      topic: 'geometry',
      chapter: 11,
    },
    {
      q: 'A block of wood is a cube. A carpenter saws off one corner with a single straight cut that passes through a point on each of the three edges meeting at that corner. She then does the same at the opposite corner, and the two cuts do not meet. How many edges does the finished block have?',
      choices: ['$12$', '$15$', '$18$', '$20$', '$24$'],
      answer: 2,
      solution: 'Each cut removes one corner and leaves a small triangular face in its place. The three edges that met at the corner are shortened but survive, and the triangle contributes three new edges, so every cut adds exactly $3$ edges: $12 + 3 + 3 = 18$. As a check, each cut turns one vertex into three and adds one face, so the block has $12$ vertices and $8$ faces, and $12 - 18 + 8 = 2$. The choice $12$ forgets that the cuts add anything, $15$ stops after one corner, $20$ is $12 + 8$ — vertices plus faces with the $2$ never subtracted — and $24$ credits each cut with six edges by counting the three shortened edges as new.',
      topic: 'geometry',
      chapter: 14,
    },
    {
      q: 'The ice-cream cone shown has a rim of radius $6$ cm, and its slanted side measures $10$ cm from the rim down to the tip. It is filled to the brim, and on top sits a scoop that is exactly half of a ball of the same radius as the rim. What is the total volume of ice cream, in cubic centimeters?',
      fig: {
        view: [-7.3, -0.6, 7.3, 14.6],
        elems: [
          { t: 'seg', a: [0, 0], b: [-6, 8] },
          { t: 'seg', a: [0, 0], b: [6, 8] },
          { t: 'curve', pts: ell(0, 8, 6, 180, 360) },
          ...dashedEll(0, 8, 6, 0, 180),
          { t: 'arc', c: [0, 8], r: 6, from: 0, to: 180 },
          { t: 'seg', a: [0, 8], b: [6, 8], dash: true },
          { t: 'seg', a: [0, 0], b: [0, 8], dash: true },
          { t: 'point', p: [0, 8] },
          { t: 'label', p: [3, 8], text: '6', dx: 0, dy: -10 },
          { t: 'label', p: [3, 4], text: '10', dx: 14, dy: 0 },
        ],
      },
      choices: ['$96\\pi$', '$144\\pi$', '$240\\pi$', '$264\\pi$', '$384\\pi$'],
      answer: 2,
      solution: 'Two pieces, two formulas, but the cone’s height is not the $10$: the slanted side, the radius and the height form a right triangle, so the height is $\\sqrt{10^2 - 6^2} = 8$. The cone holds $\\frac{1}{3}\\pi r^2 h = \\frac{1}{3}\\pi \\cdot 36 \\cdot 8 = 96\\pi$, and the scoop is half a ball of radius $6$, so it holds $\\frac{1}{2} \\cdot \\frac{4}{3}\\pi \\cdot 216 = 144\\pi$. Together that is $240\\pi$ cubic centimeters. The choices $96\\pi$ and $144\\pi$ are the two pieces on their own, $264\\pi$ uses the slanted side $10$ as the cone’s height, $120\\pi + 144\\pi$, and $384\\pi$ puts a whole ball on the cone instead of half of one, $96\\pi + 288\\pi$.',
      topic: 'geometry',
      chapter: 15,
    },
    {
      q: 'A designer draws a convex polygon, then draws every one of its diagonals and counts exactly $230$ of them. What is the sum of the polygon’s interior angles?',
      choices: ['$3600^\\circ$', '$3780^\\circ$', '$4140^\\circ$', '$41040^\\circ$', '$41580^\\circ$'],
      answer: 1,
      solution: 'A polygon with $n$ sides has $\\frac{n(n-3)}{2}$ diagonals, so $n(n-3) = 460 = 23 \\cdot 20$ and $n = 23$. Cutting the polygon into triangles from one vertex gives $n - 2 = 21$ of them, so the interior angles add to $21 \\cdot 180^\\circ = 3780^\\circ$. The choice $3600^\\circ$ uses $n - 3 = 20$ triangles, the number of diagonals from one vertex rather than the number of triangles they make, $4140^\\circ$ uses $23$ triangles as if the polygon had $25$ sides, $41040^\\circ$ treats $230$ as the number of sides, and $41580^\\circ$ treats $230$ as the number of diagonals from a single vertex, which would mean $233$ sides.',
      topic: 'geometry',
      chapter: 9,
    },
    {
      q: 'The staircase shown is built from identical unit cubes glued face to face. Every step is one cube tall and one cube deep, and the staircase is two cubes wide. What is the total surface area of the solid, including its underside?',
      fig: {
        view: [-0.6, -0.8, 5.6, 5.2],
        elems: [
          { t: 'poly', pts: [[0, 0], [4, 0], [4, 1], [3, 1], [3, 2], [2, 2], [2, 3], [1, 3], [1, 4], [0, 4]], closed: true, fill: false },
          { t: 'poly', pts: [[4.8, 0.6], [4.8, 1.6], [3.8, 1.6], [3.8, 2.6], [2.8, 2.6], [2.8, 3.6], [1.8, 3.6], [1.8, 4.6], [0.8, 4.6]], closed: false, fill: false },
          { t: 'seg', a: [0.8, 0.6], b: [4.8, 0.6], dash: true },
          { t: 'seg', a: [0.8, 0.6], b: [0.8, 4.6], dash: true },
          { t: 'seg', a: [0, 0], b: [0.8, 0.6], dash: true },
          { t: 'seg', a: [4, 0], b: [4.8, 0.6] },
          { t: 'seg', a: [4, 1], b: [4.8, 1.6] },
          { t: 'seg', a: [3, 1], b: [3.8, 1.6] },
          { t: 'seg', a: [3, 2], b: [3.8, 2.6] },
          { t: 'seg', a: [2, 2], b: [2.8, 2.6] },
          { t: 'seg', a: [2, 3], b: [2.8, 3.6] },
          { t: 'seg', a: [1, 3], b: [1.8, 3.6] },
          { t: 'seg', a: [1, 4], b: [1.8, 4.6] },
          { t: 'seg', a: [0, 4], b: [0.8, 4.6] },
          { t: 'label', p: [0.5, 4], text: '1', dx: 0, dy: -8 },
          { t: 'label', p: [4.4, 0.3], text: '2', dx: 14, dy: 8 },
        ],
      },
      choices: ['$26$', '$36$', '$44$', '$52$', '$120$'],
      answer: 3,
      solution: 'Look at the solid from each of six directions; opposite views always match. From the front you see the staircase profile, $4 + 3 + 2 + 1 = 10$ squares, and the back shows the same, for $20$. From above you see the footprint, $4$ by $2$, for $8$, and the underside is the same $8$, for $16$. From the left you see a $4$ by $2$ wall of $8$, and from the right the four risers, each $1$ by $2$, add up to the same $8$, for $16$. Every face of the solid is seen in exactly one of these views, so the surface area is $20 + 16 + 16 = 52$. The choice $26$ counts each direction once instead of in pairs, $36$ leaves out the two side views, $44$ counts the sides once, and $120$ gives all $20$ cubes six free faces.',
      topic: 'geometry',
      chapter: 14,
    },
    {
      q: 'A circular skating rink has radius $24$ m. A floodlight stands on a pole $48$ m from the center of the rink, and its two outermost beams just graze the rink’s edge. What is the angle between these two beams?',
      choices: ['$60^\\circ$', '$90^\\circ$', '$120^\\circ$', '$150^\\circ$', '$240^\\circ$'],
      answer: 0,
      solution: 'Draw the radius to a grazing point: it is perpendicular to the beam there, so the light, the center, and the grazing point form a right triangle with hypotenuse $48$ and the leg opposite the light equal to $24$, half the hypotenuse. That makes the angle at the light $30^\\circ$, and the two beams sit symmetrically about the line to the center, so the angle between them is $2 \\cdot 30^\\circ = 60^\\circ$. The choice $120^\\circ$ is the angle at the center of the rink, the one that faces the light, $240^\\circ$ is the far arc of the rink, $90^\\circ$ assumes the beams meet at a right angle, and $150^\\circ$ subtracts a single $30^\\circ$ from a straight angle instead of doubling it.',
      topic: 'geometry',
      chapter: 12,
    },
    {
      q: 'In the figure, triangle $ABC$ is inscribed in a circle, $M$ is the midpoint of $BC$, and the line through $A$ and $M$ meets the circle again at $D$. If $BC = 12$ and $AM = 9$, what is $MD$?',
      fig: {
        view: [-7.6, -5, 7.6, 9.9],
        elems: [
          { t: 'circle', c: [0, 2.7], r: 6.58 },
          { t: 'poly', pts: [[-3.37, 8.34], [-6, 0], [6, 0]], closed: true, fill: false },
          { t: 'seg', a: [-3.37, 8.34], b: [1.5, -3.71] },
          { t: 'tick', a: [-6, 0], b: [0, 0], n: 1 },
          { t: 'tick', a: [0, 0], b: [6, 0], n: 1 },
          { t: 'point', p: [-3.37, 8.34], label: 'A', dx: -4, dy: -10 },
          { t: 'point', p: [-6, 0], label: 'B', dx: -13, dy: 4 },
          { t: 'point', p: [6, 0], label: 'C', dx: 13, dy: 4 },
          { t: 'point', p: [0, 0], label: 'M', dx: 8, dy: -6 },
          { t: 'point', p: [1.5, -3.71], label: 'D', dx: 10, dy: 8 },
          { t: 'label', p: [0, 0], text: '12', dx: 0, dy: 16 },
          { t: 'label', p: [-1.69, 4.17], text: '9', dx: -11, dy: 0 },
        ],
      },
      choices: ['$4$', '$6$', '$9$', '$12$', '$16$'],
      answer: 0,
      solution: 'The point $M$ is where two chords of the circle cross: $BC$, which it cuts into $6$ and $6$, and $AD$, which it cuts into $9$ and $MD$. The two pieces of one chord multiply to the same product as the two pieces of the other, so $6 \\cdot 6 = 9 \\cdot MD$ and $MD = 4$. The choice $6$ assumes the second chord is bisected at $M$ just like the first, $9$ assumes $M$ is the midpoint of $AD$, $12$ is the side $BC$, and $16$ uses the whole side rather than its halves, $12^2 = 9 \\cdot 16$.',
      topic: 'geometry',
      chapter: 13,
    },
    {
      q: 'A square pyramid has base edges of length $12$, and each of the four edges running from a base corner up to the apex has length $11$. What is the volume of the pyramid?',
      choices: ['$240$', '$336$', '$48\\sqrt{85}$', '$528$', '$1008$'],
      answer: 1,
      solution: 'The apex sits directly above the center of the square base, and the distance from that center to a corner is half the base diagonal: the diagonal is $12\\sqrt{2}$, so the half is $6\\sqrt{2}$. The height, this half-diagonal, and a lateral edge form a right triangle, so $h^2 = 11^2 - (6\\sqrt{2})^2 = 121 - 72 = 49$ and $h = 7$. The volume is $\\frac{1}{3} \\cdot 144 \\cdot 7 = 336$. The choice $240$ subtracts $6$ from $11$ to get a height of $5$ instead of using the right triangle, $48\\sqrt{85}$ pairs the lateral edge with half a base edge, $6$, which gives the slant height $\\sqrt{85}$ rather than the height, $528$ uses the lateral edge $11$ itself as the height, and $1008$ forgets the $\\frac{1}{3}$.',
      topic: 'geometry',
      chapter: 14,
    },
    {
      q: 'A hollow cone stands on its circular base, which has radius $10$, and its tip is $15$ above the base. A cylindrical peg of radius $4$ stands inside it, its bottom on the cone’s base and the rim of its top just touching the cone’s slanted surface, as shown. What is the height of the peg?',
      fig: {
        view: [-11.3, -3.5, 11.3, 16],
        elems: [
          { t: 'curve', pts: ell(0, 0, 10, 180, 360) },
          ...dashedEll(0, 0, 10, 0, 180),
          { t: 'seg', a: [-10, 0], b: [0, 15] },
          { t: 'seg', a: [10, 0], b: [0, 15] },
          { t: 'seg', a: [-4, 0], b: [-4, 9] },
          { t: 'seg', a: [4, 0], b: [4, 9] },
          { t: 'curve', pts: ell(0, 9, 4, 0, 360) },
          { t: 'curve', pts: ell(0, 0, 4, 180, 360) },
          ...dashedEll(0, 0, 4, 0, 180),
          { t: 'seg', a: [0, 0], b: [0, 15], dash: true },
          { t: 'seg', a: [0, 0], b: [-10, 0], dash: true },
          { t: 'seg', a: [0, 9], b: [4, 9], dash: true },
          { t: 'point', p: [0, 0] },
          { t: 'point', p: [0, 9] },
          { t: 'label', p: [-5, 0], text: '10', dx: 0, dy: 14 },
          { t: 'label', p: [0, 12], text: '15', dx: -16, dy: 0 },
          { t: 'label', p: [2, 9], text: '4', dx: 0, dy: -10 },
        ],
      },
      choices: ['$5$', '$6$', '$9$', '$11$', '$12$'],
      answer: 2,
      solution: 'Slice the whole thing through its axis. The cone becomes a triangle of base $20$ and height $15$, and the peg becomes a rectangle of width $8$ standing on the triangle’s base with its top corners on the slanted sides. Above the peg is a small triangle similar to the big one: its half-base is $4$ against the big one’s $10$, so its height is $\\frac{4}{10} \\cdot 15 = 6$. The peg fills the rest of the height, $15 - 6 = 9$. The choice $6$ is the little tip above the peg rather than the peg, $5$ subtracts the cone’s radius from its height, $11$ subtracts the peg’s radius from the cone’s height, and $12$ treats the $4$ as a diameter, which makes the tip $3$ tall.',
      topic: 'geometry',
      chapter: 15,
    },
    {
      q: 'An ant stands at corner $A$ of a closed box that is $9$ cm long, $6$ cm deep, and $2$ cm tall, as shown, and wants to reach the opposite corner $B$ walking only on the outside of the box. What is the length, in centimeters, of its shortest possible route?',
      fig: {
        view: [-1, -1.2, 12.8, 4.8],
        elems: [
          { t: 'poly', pts: [[0, 0], [9, 0], [9, 2], [0, 2]], closed: true, fill: false },
          { t: 'poly', pts: [[0, 2], [2.4, 3.8], [11.4, 3.8], [9, 2]], closed: false, fill: false },
          { t: 'seg', a: [9, 0], b: [11.4, 1.8] },
          { t: 'seg', a: [11.4, 1.8], b: [11.4, 3.8] },
          { t: 'seg', a: [0, 0], b: [2.4, 1.8], dash: true },
          { t: 'seg', a: [2.4, 1.8], b: [11.4, 1.8], dash: true },
          { t: 'seg', a: [2.4, 1.8], b: [2.4, 3.8], dash: true },
          { t: 'point', p: [0, 0], label: 'A', dx: -12, dy: 12 },
          { t: 'point', p: [11.4, 3.8], label: 'B', dx: 12, dy: -4 },
          { t: 'label', p: [4.5, 0], text: '9', dx: 0, dy: 14 },
          { t: 'label', p: [9, 1], text: '2', dx: 12, dy: 0 },
          { t: 'label', p: [10.2, 0.9], text: '6', dx: 16, dy: 8 },
        ],
      },
      choices: ['$11$', '$\\sqrt{145}$', '$\\sqrt{157}$', '$\\sqrt{229}$', '$17$'],
      answer: 1,
      solution: 'The shortest route crosses two faces, and once those two faces are unfolded flat it is a straight line — the hypotenuse of a right triangle whose legs are one dimension and the sum of the other two. There are three ways to pair them: $\\sqrt{9^2 + (6+2)^2} = \\sqrt{145}$, $\\sqrt{6^2 + (9+2)^2} = \\sqrt{157}$, and $\\sqrt{2^2 + (9+6)^2} = \\sqrt{229}$. The smallest is $\\sqrt{145}$, which keeps the longest dimension as its own leg and adds the two short ones together. The choice $11$ is the space diagonal $\\sqrt{81 + 36 + 4}$, a route straight through the inside of the box, and $17$ walks along three edges, $9 + 6 + 2$.',
      topic: 'geometry',
      chapter: 14,
    },
    {
      q: 'Three identical rubber balls of radius $6$ cm are dropped into a cylindrical jar and settle in a single layer on its flat bottom, each ball touching the other two and the wall of the jar. What is the smallest possible inside radius of the jar, in centimeters?',
      choices: ['$6 + 2\\sqrt{3}$', '$6 + 3\\sqrt{3}$', '$6 + 4\\sqrt{3}$', '$6 + 6\\sqrt{3}$', '$12 + 4\\sqrt{3}$'],
      answer: 2,
      solution: 'Look straight down. The three centers are $12$ apart in pairs, so they form an equilateral triangle of side $12$, and since each ball touches the wall, the jar’s axis passes through the center of that triangle. The distance from the triangle’s center to a corner is its circumradius, two thirds of the altitude $6\\sqrt{3}$, which is $4\\sqrt{3}$; the wall is one more ball radius beyond the ball’s center, so the jar’s radius is $6 + 4\\sqrt{3}$. The choice $6 + 2\\sqrt{3}$ uses the inradius, the distance from the center to a side, instead of the distance to a corner, $6 + 3\\sqrt{3}$ puts the center halfway along the altitude rather than two thirds of the way, $6 + 6\\sqrt{3}$ uses the whole altitude, and $12 + 4\\sqrt{3}$ adds a full ball diameter instead of a radius.',
      topic: 'geometry',
      chapter: 15,
    },
    {
      q: 'Two circles cross at $A$ and $B$. A line touches the first circle at $T$ and the second circle at $U$, and the line through $A$ and $B$ meets segment $TU$ at $M$, as shown. If $MA = 2$ and $AB = 16$, what is $TU$?',
      fig: {
        w: 360,
        view: [-21.5, -2.5, 15.5, 30],
        elems: [
          { t: 'circle', c: [-6, 14.52], r: 14.52 },
          { t: 'circle', c: [6, 8.14], r: 8.14 },
          { t: 'seg', a: [-9, 0], b: [9, 0] },
          { t: 'seg', a: [0, 0], b: [8.45, 15.89] },
          { t: 'point', p: [-6, 0], label: 'T', dx: 0, dy: 14 },
          { t: 'point', p: [6, 0], label: 'U', dx: 0, dy: 14 },
          { t: 'point', p: [0, 0], label: 'M', dx: 0, dy: 14 },
          { t: 'point', p: [0.94, 1.77], label: 'A', dx: -12, dy: 0 },
          { t: 'point', p: [8.45, 15.89], label: 'B', dx: 12, dy: 0 },
          { t: 'label', p: [0.47, 0.89], text: '2', dx: 12, dy: 2 },
          { t: 'label', p: [4.69, 8.83], text: '16', dx: 14, dy: 0 },
        ],
      },
      choices: ['$6$', '$4\\sqrt{7}$', '$8\\sqrt{2}$', '$12$', '$16$'],
      answer: 3,
      solution: 'From $M$ the line through $A$ and $B$ is a secant of both circles, with $MA = 2$ and $MB = 2 + 16 = 18$. For the first circle, the tangent from $M$ and that secant give $MT^2 = MA \\cdot MB = 36$; for the second circle the same secant gives $MU^2 = 36$ too. So $MT = MU = 6$: the point $M$ is the midpoint of $TU$, and $TU = 12$. The choice $6$ is only one half, $4\\sqrt{7}$ takes $MB$ as $16 - 2 = 14$, subtracting as if $A$ lay beyond $B$ ($\\sqrt{28} = 2\\sqrt{7}$, doubled), $8\\sqrt{2}$ multiplies $MA$ by $AB$ instead of by $MB$ ($\\sqrt{32} = 4\\sqrt{2}$, doubled), and $16$ is $AB$ itself.',
      topic: 'geometry',
      chapter: 13,
    },
    {
      q: 'A solid cube with edge $4$ is sliced by a single flat cut that passes through the midpoints of six of its twelve edges. What is the area of the cross-section?',
      choices: ['$6\\sqrt{3}$', '$16$', '$12\\sqrt{3}$', '$16\\sqrt{2}$', '$24\\sqrt{3}$'],
      answer: 2,
      solution: 'A cut through six edge midpoints crosses every face of the cube, and on each face it joins the midpoints of two adjacent edges, so each side of the cross-section is half of a face diagonal: $\\frac{4\\sqrt{2}}{2} = 2\\sqrt{2}$. All six sides are equal and, by the cube’s symmetry, all six angles are equal, so the cross-section is a regular hexagon of side $2\\sqrt{2}$, with area $\\frac{3\\sqrt{3}}{2} \\cdot (2\\sqrt{2})^2 = \\frac{3\\sqrt{3}}{2} \\cdot 8 = 12\\sqrt{3}$. The choice $6\\sqrt{3}$ uses half an edge, $2$, as the hexagon’s side, $16$ is the square you get from a cut parallel to a face, $16\\sqrt{2}$ is the $4$ by $4\\sqrt{2}$ rectangle from a cut through two opposite edges, and $24\\sqrt{3}$ uses the full edge $4$ as the hexagon’s side.',
      topic: 'geometry',
      chapter: 14,
    },
  ],
}
