// Introduction to Geometry chapter 15 — variations for section 15.1 (Cylinders).
// All problems, figures, and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every keyed answer is worked twice along routes that share no steps: once
//    straight from what a cylinder is (a circle swept upward, a wall that
//    unrolls into a rectangle), and once by an independent second route —
//    rebuilding the solid out of unit-thick slabs, rearranging the base disk
//    into a rectangle of wedges, squeezing the curved wall between many-sided
//    prisms, rolling the tube out onto paper, or scaling a smaller cylinder up
//    and letting similarity finish the job.
//  - Cylinders are drawn as wireframes with the hidden half of each rim dashed.
//    That projection does not preserve length, so every dimension a solver
//    needs is written on the figure as a plain text label rather than measured
//    off it.
//  - $\pi$ is carried through exactly. An answer of $40\pi$ is a number, not an
//    unfinished one, and rounding it would only lose information.
//  - Each distractor is one named mistake, named in CAPS at the end.

// ---- figure helpers: cylinders drawn as 2D wireframe projections ----
const K = 0.3 // vertical squash factor for a rim seen nearly edge-on
const R2 = (x) => Math.round(x * 100) / 100

function ellArc(cx, cy, rx, deg0, deg1, n = 28) {
  const pts = []
  for (let i = 0; i <= n; i++) {
    const a = ((deg0 + ((deg1 - deg0) * i) / n) * Math.PI) / 180
    pts.push([R2(cx + rx * Math.cos(a)), R2(cy + K * rx * Math.sin(a))])
  }
  return pts
}

function dashedEllArc(cx, cy, rx, deg0, deg1, n = 8) {
  const p = ellArc(cx, cy, rx, deg0, deg1, n)
  const out = []
  for (let i = 0; i < n; i++) out.push({ t: 'seg', a: p[i], b: p[i + 1], dash: true })
  return out
}

function cylElems(r, h) {
  return [
    { t: 'curve', pts: ellArc(0, h, r, 0, 360) },
    { t: 'curve', pts: ellArc(0, 0, r, 180, 360) },
    ...dashedEllArc(0, 0, r, 0, 180),
    { t: 'seg', a: [-r, 0], b: [-r, h] },
    { t: 'seg', a: [r, 0], b: [r, h] },
  ]
}

function cylFig(r, h, rText, hText, extra = [], w) {
  const diam = rText.startsWith('d')
  return {
    ...(w ? { w } : {}),
    view: [-r - 1.3, -K * r - 1, r + 1.3, h + K * r + 1],
    elems: [
      ...cylElems(r, h),
      { t: 'seg', a: [diam ? -r : 0, h], b: [r, h], dash: true },
      { t: 'point', p: [0, h] },
      { t: 'label', p: [diam ? 0 : r / 2, h], text: rText, dx: 0, dy: -10 },
      { t: 'label', p: [r, h / 2], text: hText, dx: 20, dy: 0 },
      ...extra,
    ],
  }
}

const s151 = [
  // s1 — volume of a cylinder from its radius and height.
  [
    {
      q: 'A pillar candle is a solid cylinder of wax with radius $2$ and height $6$. What is its volume?',
      fig: cylFig(2, 6, 'r = 2', 'h = 6'),
      choices: ['$24\\pi$', '$4\\pi$', '$12\\pi$', '$96\\pi$'],
      answer: 0,
      solution:
        'Route one, base area times height: the flat bottom of the candle is a circle of radius $2$, so its area is $\\pi \\cdot 2^2 = 4\\pi$. The candle is that circle swept straight upward through a height of $6$, and a swept base fills base area times height, so $V = 4\\pi \\cdot 6 = 24\\pi$ ✓. Check a second, independent way, by rebuilding the base out of wedges: slice the bottom disk into a great many thin wedges and lay them out alternately point-up and point-down. They interlock into a shape that closes in on a rectangle whose long side is half the rim, $\\frac{1}{2}(2\\pi \\cdot 2) = 2\\pi$, and whose short side is the radius $2$. Sweeping that rectangle up through the same height turns the candle into a box measuring $2\\pi$ by $2$ by $6$, and a box holds length times width times height: $2\\pi \\cdot 2 \\cdot 6 = 24\\pi$ ✓. (The choice $4\\pi$ is STOPPING AT THE BASE AREA and never sweeping it up through the height ✗; the choice $12\\pi$ is COMPUTING $\\pi r h$ AND NEVER SQUARING THE RADIUS ✗; the choice $96\\pi$ is FEEDING THE DIAMETER $4$ INTO THE RADIUS SLOT, which multiplies the true answer by four ✗.)',
    },
    {
      q: 'A rain barrel is a cylinder of radius $5$ and height $8$. Filled to the brim, how much water does it hold?',
      fig: cylFig(5, 8, 'r = 5', 'h = 8'),
      choices: ['$40\\pi$', '$80\\pi$', '$200\\pi$', '$800\\pi$'],
      answer: 2,
      solution:
        'Route one, base area times height: the barrel’s floor is a circle of radius $5$, of area $\\pi \\cdot 5^2 = 25\\pi$. The barrel is that floor swept up through $8$, so $V = 25\\pi \\cdot 8 = 200\\pi$ ✓. Check a second, independent way, by stacking slabs: imagine the water frozen and sawn into eight slabs, each exactly $1$ unit thick. Every slab is a short cylinder of radius $5$ and thickness $1$, so each one holds $25\\pi \\cdot 1 = 25\\pi$, and the slabs are identical because the barrel is the same circle all the way up. Eight of them give $8 \\cdot 25\\pi = 200\\pi$ ✓. (The choice $40\\pi$ is COMPUTING $\\pi r h$ AND SKIPPING THE SQUARE ON THE RADIUS ✗; the choice $80\\pi$ is MEASURING THE CURVED WALL, $2\\pi r h$, which is a covering and not a filling ✗; the choice $800\\pi$ is USING THE DIAMETER $10$ AS THE RADIUS, and squaring it makes the answer four times too big ✗.)',
    },
    {
      q: 'A cylindrical fence post has radius $3$ and height $10$. How much concrete would it take to cast the post solid?',
      fig: cylFig(3, 10, 'r = 3', 'h = 10', [], 260),
      choices: ['$30\\pi$', '$60\\pi$', '$360\\pi$', '$90\\pi$'],
      answer: 3,
      solution:
        'Route one, base area times height: the post’s cross-section is a circle of radius $3$, of area $\\pi \\cdot 3^2 = 9\\pi$. Sweeping that circle up through a height of $10$ gives $V = 9\\pi \\cdot 10 = 90\\pi$ ✓. Check a second, independent way, by scaling a thin post up: a post of radius $1$ and the same height $10$ holds $\\pi \\cdot 1^2 \\cdot 10 = 10\\pi$. Our post is the same height but three times as wide in every horizontal direction, and stretching a solid by a factor of $3$ in two directions while leaving the third alone multiplies the volume by $3 \\cdot 3 = 9$. So it takes $9 \\cdot 10\\pi = 90\\pi$ ✓. (The choice $30\\pi$ is COMPUTING $\\pi r h$ AND FORGETTING TO SQUARE THE RADIUS ✗; the choice $60\\pi$ is FINDING THE AREA OF THE CURVED WALL, $2\\pi r h$, instead of the concrete inside it ✗; the choice $360\\pi$ is DROPPING THE DIAMETER $6$ INTO THE RADIUS SLOT ✗.)',
    },
  ],
  // s2 — lateral (side) surface area, with no lids in sight.
  [
    {
      q: 'A steel drum is a cylinder with radius $5$ and height $3$. A painter is coating only the curved side of the drum, leaving the top and bottom bare. What area does the paint cover?',
      choices: ['$15\\pi$', '$30\\pi$', '$75\\pi$', '$80\\pi$'],
      answer: 1,
      solution:
        'Route one, unrolling the wall: give the curved side one straight vertical snip and flatten it out. It opens into a rectangle. One side of that rectangle is the drum’s height $3$, and the other side is whatever wrapped once around the rim, which is the circumference $2\\pi \\cdot 5 = 10\\pi$. So the painted area is $10\\pi \\cdot 3 = 30\\pi$ ✓. Check a second, independent way, through a many-sided prism: stand a prism inside the drum whose base is a regular polygon with its corners on the rim. The prism’s side is made of flat rectangles, one for each base edge, and each rectangle is $3$ tall, so their areas add to (perimeter of the polygon) $\\times \\, 3$. Now let the polygon take on more and more sides: it hugs the circle ever more tightly and its perimeter closes in on $10\\pi$, so the curved wall measures $10\\pi \\cdot 3 = 30\\pi$ ✓. (The choice $15\\pi$ is WRITING THE CIRCUMFERENCE AS $\\pi r$ INSTEAD OF $2\\pi r$ ✗; the choice $75\\pi$ is COMPUTING THE VOLUME $\\pi r^2 h$, which fills the drum rather than coating it ✗; the choice $80\\pi$ is ADDING THE TWO LIDS, worth $50\\pi$, though the problem leaves them bare ✗.)',
    },
    {
      q: 'A cardboard tube with no ends has radius $4$ and height $11$. How much cardboard is in the tube?',
      choices: ['$44\\pi$', '$176\\pi$', '$120\\pi$', '$88\\pi$'],
      answer: 3,
      solution:
        'Route one, unrolling the wall: slit the tube from top to bottom along one straight line and press it flat. What lies on the table is a rectangle $11$ tall, and its width is the length that used to reach once around the rim, namely $2\\pi \\cdot 4 = 8\\pi$. The cardboard measures $8\\pi \\cdot 11 = 88\\pi$ ✓. Check a second, independent way, by cutting bands: slice the tube into eleven bands, each exactly $1$ unit tall. A single band is a thin ring of cardboard, and cutting it once and straightening it gives a strip $1$ unit tall whose length is the rim, $8\\pi$ — an area of $8\\pi$ per band. Every band is the same size, since the tube keeps one radius the whole way up, so eleven bands give $11 \\cdot 8\\pi = 88\\pi$ ✓. (The choice $44\\pi$ is USING $\\pi r$ FOR THE WAY AROUND instead of $2\\pi r$ ✗; the choice $176\\pi$ is MISTAKING THE DIAMETER $8$ FOR THE RADIUS, doubling the wall ✗; the choice $120\\pi$ is CAPPING THE TUBE WITH TWO LIDS worth $32\\pi$, when the tube has no ends at all ✗.)',
    },
    {
      q: 'A garden roller is a cylinder of radius $7$ and height $5$. It is dipped in ink and rolled once across a wide sheet of paper without slipping. What area of paper does the roller print?',
      choices: ['$35\\pi$', '$168\\pi$', '$70\\pi$', '$245\\pi$'],
      answer: 2,
      solution:
        'Route one, unrolling the wall: whatever the roller prints is exactly its curved side laid out flat, so snip that side once and flatten it. The result is a rectangle $5$ wide — the length of the roller — and as long as one trip around the rim, $2\\pi \\cdot 7 = 14\\pi$. The printed area is $14\\pi \\cdot 5 = 70\\pi$ ✓. Check a second, independent way, by tracking one turn of the wheel: watch a single inked line drawn along the roller from end to end. In one full turn that line sweeps the paper from where it first touches down to where it lands again, and the distance it travels is the circumference $14\\pi$, since rolling without slipping lays the rim out along the paper inch for inch. The strip it sweeps is $14\\pi$ long and $5$ wide, so the ink covers $14\\pi \\cdot 5 = 70\\pi$ ✓. (The choice $35\\pi$ is TRAVELLING ONLY $\\pi r$ PER TURN instead of $2\\pi r$ ✗; the choice $168\\pi$ is ADDING THE TWO FLAT ENDS of the roller, $98\\pi$ worth, though the ends never touch the paper ✗; the choice $245\\pi$ is COMPUTING THE VOLUME $\\pi r^2 h$, which measures the roller’s bulk rather than its print ✗.)',
    },
  ],
  // s3 — total surface area of a closed cylinder: unrolled wall plus two lids.
  [
    {
      q: 'A sealed tin of cocoa is a closed cylinder with radius $2$ and height $8$. What is its total surface area?',
      fig: cylFig(2, 8, 'r = 2', 'h = 8', [], 260),
      choices: ['$32\\pi$', '$36\\pi$', '$96\\pi$', '$40\\pi$'],
      answer: 3,
      solution:
        'Route one, the flat net: cut the tin apart into the pieces it is made of. The wall unrolls into a rectangle $8$ tall and $2\\pi \\cdot 2 = 4\\pi$ wide, worth $4\\pi \\cdot 8 = 32\\pi$. The lid and the base are circles of radius $2$, each of area $\\pi \\cdot 2^2 = 4\\pi$, worth $8\\pi$ together. The whole surface is $32\\pi + 8\\pi = 40\\pi$ ✓. Check a second, independent way, by scaling a smaller tin: a closed tin of radius $1$ and height $4$ has the same shape as ours, since every length of ours is exactly twice as long. Its wall is $2\\pi \\cdot 1 \\cdot 4 = 8\\pi$ and its two lids are $2\\pi \\cdot 1^2 = 2\\pi$, giving $10\\pi$ of surface. Doubling every length multiplies every area by $2 \\cdot 2 = 4$, so our tin carries $4 \\cdot 10\\pi = 40\\pi$ ✓. (The choice $32\\pi$ is LEAVING BOTH LIDS OFF and reporting the wall alone ✗; the choice $36\\pi$ is COUNTING ONLY ONE LID when a sealed tin has two ✗; the choice $96\\pi$ is USING THE DIAMETER $4$ AS THE RADIUS throughout ✗.)',
    },
    {
      q: 'A closed cylindrical hatbox has radius $6$ and height $4$. How much cardboard covers the whole box, lid and base included?',
      fig: cylFig(6, 4, 'r = 6', 'h = 4'),
      choices: ['$120\\pi$', '$48\\pi$', '$84\\pi$', '$144\\pi$'],
      answer: 0,
      solution:
        'Route one, the flat net: take the box apart. The side unrolls into a rectangle $4$ tall whose width is one trip around the rim, $2\\pi \\cdot 6 = 12\\pi$, so the side is $12\\pi \\cdot 4 = 48\\pi$. The lid and the base are circles of radius $6$, each $\\pi \\cdot 6^2 = 36\\pi$, so the pair adds $72\\pi$. Altogether $48\\pi + 72\\pi = 120\\pi$ ✓. Check a second, independent way, by scaling a smaller box: a closed box of radius $3$ and height $2$ is the same shape as this one, with every length exactly half as long. Its side is $2\\pi \\cdot 3 \\cdot 2 = 12\\pi$ and its two lids are $2\\pi \\cdot 3^2 = 18\\pi$, for $30\\pi$ of cardboard. Doubling every length of that small box multiplies each area by $4$, so the hatbox needs $4 \\cdot 30\\pi = 120\\pi$ ✓. (The choice $48\\pi$ is REPORTING THE SIDE ALONE and forgetting that the box is closed ✗; the choice $84\\pi$ is GLUING ON JUST ONE CIRCLE instead of both ✗; the choice $144\\pi$ is COMPUTING THE VOLUME $\\pi r^2 h$, which is what fits inside rather than what wraps around ✗.)',
    },
    {
      q: 'A closed cylindrical thermos has radius $2$ and height $10$. Find the total area of its outer surface.',
      fig: cylFig(2, 10, 'r = 2', 'h = 10', [], 260),
      choices: ['$40\\pi$', '$48\\pi$', '$44\\pi$', '$112\\pi$'],
      answer: 1,
      solution:
        'Route one, the flat net: the wall unrolls into a rectangle $10$ tall and $2\\pi \\cdot 2 = 4\\pi$ wide, worth $4\\pi \\cdot 10 = 40\\pi$. The two flat ends are circles of radius $2$, each $\\pi \\cdot 2^2 = 4\\pi$, worth $8\\pi$ together. The outer surface totals $40\\pi + 8\\pi = 48\\pi$ ✓. Check a second, independent way, through a many-sided prism: build a prism whose base is a regular polygon with its corners on the rim of the thermos. Its surface is two polygon ends plus one rectangle per base edge, each rectangle $10$ tall, so the total is $2 \\times$ (area of the polygon) $+$ (perimeter of the polygon) $\\times \\, 10$. As the polygon gains sides its area closes in on the circle’s $4\\pi$ and its perimeter closes in on $4\\pi$ as well, giving $2 \\cdot 4\\pi + 4\\pi \\cdot 10 = 8\\pi + 40\\pi = 48\\pi$ ✓. (The choice $40\\pi$ is MEASURING THE WALL AND STOPPING, with no ends counted ✗; the choice $44\\pi$ is ATTACHING A SINGLE END instead of two ✗; the choice $112\\pi$ is USING THE DIAMETER $4$ IN PLACE OF THE RADIUS everywhere ✗.)',
    },
  ],
  // s4 — volume when the DIAMETER is handed over instead of the radius.
  [
    {
      q: 'A tuna tin is a cylinder of diameter $8$ and height $5$. What is its volume?',
      fig: cylFig(4, 5, 'd = 8', 'h = 5'),
      choices: ['$20\\pi$', '$40\\pi$', '$80\\pi$', '$320\\pi$'],
      answer: 2,
      solution:
        'Route one, convert before you compute: the diameter reaches all the way across, so the radius is half of it, $8 \\div 2 = 4$. The base is then a circle of area $\\pi \\cdot 4^2 = 16\\pi$, and sweeping it up through the height gives $V = 16\\pi \\cdot 5 = 80\\pi$ ✓. Check a second, independent way, by scaling a narrower tin: a tin of diameter $4$ and height $5$ has radius $2$, so it holds $\\pi \\cdot 2^2 \\cdot 5 = 20\\pi$. Our tin is exactly twice as wide in both horizontal directions while standing the same height, and stretching a solid by a factor of $2$ in two directions multiplies its volume by $2 \\cdot 2 = 4$. So it holds $4 \\cdot 20\\pi = 80\\pi$ ✓. (The choice $20\\pi$ is HALVING THE DIAMETER AND THEN FORGETTING TO SQUARE, computing $\\pi r h$ ✗; the choice $40\\pi$ is MEASURING THE CURVED WALL, $2\\pi r h$, rather than the fish inside ✗; the choice $320\\pi$ is DROPPING THE DIAMETER STRAIGHT INTO THE RADIUS SLOT, which builds a tin twice as wide as the real one and so four times as roomy ✗.)',
    },
    {
      q: 'A wheel of cheese is shaped like a cylinder of diameter $14$ and height $2$. How much cheese is in the wheel?',
      fig: cylFig(7, 2, 'd = 14', 'h = 2'),
      choices: ['$98\\pi$', '$14\\pi$', '$28\\pi$', '$392\\pi$'],
      answer: 0,
      solution:
        'Route one, convert before you compute: half of the diameter $14$ is the radius $7$, so the flat face of the wheel has area $\\pi \\cdot 7^2 = 49\\pi$, and the wheel is that face swept up through $2$: $V = 49\\pi \\cdot 2 = 98\\pi$ ✓. Check a second, independent way, straight from the diameter: set the wheel down on a square board that it just touches on all four sides. That square has side $14$ and area $14^2 = 196$. A circle drawn snugly inside a square always fills the fraction $\\frac{\\pi}{4}$ of it, so the face measures $\\frac{\\pi}{4} \\cdot 196 = 49\\pi$, and two units of thickness give $49\\pi \\cdot 2 = 98\\pi$ ✓. (The choice $14\\pi$ is HALVING CORRECTLY BUT NEVER SQUARING, computing $\\pi r h$ ✗; the choice $28\\pi$ is FINDING THE AREA OF THE RIND AROUND THE EDGE, $2\\pi r h$, instead of the cheese ✗; the choice $392\\pi$ is TREATING THE DIAMETER AS THE RADIUS, which quadruples the answer ✗.)',
    },
    {
      q: 'A candle mould is a cylinder of diameter $6$ and height $12$. How much wax fills the mould exactly?',
      fig: cylFig(3, 12, 'd = 6', 'h = 12', [], 260),
      choices: ['$36\\pi$', '$72\\pi$', '$432\\pi$', '$108\\pi$'],
      answer: 3,
      solution:
        'Route one, convert before you compute: the radius is half the diameter, $6 \\div 2 = 3$, so the bottom of the mould is a circle of area $\\pi \\cdot 3^2 = 9\\pi$, and filling it to a height of $12$ takes $V = 9\\pi \\cdot 12 = 108\\pi$ ✓. Check a second, independent way, by pouring in layers: pour the wax in one unit at a time and let each layer set. Every layer is a disk of radius $3$ and thickness $1$, so each holds $9\\pi \\cdot 1 = 9\\pi$, and the layers are all the same because the mould is the same circle from bottom to top. Twelve layers make $12 \\cdot 9\\pi = 108\\pi$ ✓. (The choice $36\\pi$ is HALVING THE DIAMETER AND THEN SKIPPING THE SQUARE, computing $\\pi r h$ ✗; the choice $72\\pi$ is MEASURING THE MOULD’S CURVED WALL, $2\\pi r h$, which is what you would paint rather than what you would pour ✗; the choice $432\\pi$ is PUTTING THE DIAMETER WHERE THE RADIUS BELONGS ✗.)',
    },
  ],
  // s5 — a wrapper that goes once around and covers no lids.
  [
    {
      q: 'A paper band wraps exactly once around a wide jar of radius $9$ and height $2$, covering the whole curved side from the base to the rim, with the two ends meeting edge to edge and no overlap. What is the area of the band?',
      fig: cylFig(9, 2, 'r = 9', 'h = 2'),
      choices: ['$36\\pi$', '$18\\pi$', '$162\\pi$', '$198\\pi$'],
      answer: 0,
      solution:
        'Route one, flattening the band: peel the band off and lay it on the table. It is a rectangle. Its height is the height of the band on the jar, $2$, and its length is whatever reached once around the jar, which is the circumference $2\\pi \\cdot 9 = 18\\pi$. The area is $18\\pi \\cdot 2 = 36\\pi$ ✓. Check a second, independent way, by rolling the jar: ink the band and roll the jar one full turn along a sheet of paper without letting it slip. Every point of the band touches the paper exactly once, so the printed track has the same area as the band. The track is as wide as the jar is tall, $2$, and its length is how far the jar travelled, which for one slip-free turn is one rim’s worth of distance, $18\\pi$. That is $18\\pi \\cdot 2 = 36\\pi$ ✓. (The choice $18\\pi$ is USING $\\pi r$ FOR THE TRIP AROUND instead of $2\\pi r$ ✗; the choice $162\\pi$ is COMPUTING THE VOLUME $\\pi r^2 h$, which is what the jar holds and not what the paper covers ✗; the choice $198\\pi$ is PAPERING OVER THE LID AND THE BASE as well, $162\\pi$ of extra circles that a band never touches ✗.)',
    },
    {
      q: 'A sticker is wrapped once around a coffee canister of radius $10$ and height $4$, meeting itself exactly with no overlap. It covers every bit of the curved side and neither of the two ends. How large is the sticker?',
      fig: cylFig(10, 4, 'r = 10', 'h = 4'),
      choices: ['$40\\pi$', '$80\\pi$', '$280\\pi$', '$400\\pi$'],
      answer: 1,
      solution:
        'Route one, flattening the sticker: unpeel it and smooth it out. It is a rectangle $4$ tall, and its width is the distance it spanned in going once around the canister, the circumference $2\\pi \\cdot 10 = 20\\pi$. So the sticker measures $20\\pi \\cdot 4 = 80\\pi$ ✓. Check a second, independent way, through a many-sided prism: imagine the canister replaced by a prism whose base is a regular polygon with its corners on the rim. A sticker wrapped around that prism is a set of flat rectangles, one per base edge, each $4$ tall, and together they measure (perimeter of the polygon) $\\times \\, 4$. Give the polygon more and more sides and its perimeter closes in on $20\\pi$, so the sticker on the round canister measures $20\\pi \\cdot 4 = 80\\pi$ ✓. (The choice $40\\pi$ is WRITING THE WAY AROUND AS $\\pi r$ INSTEAD OF $2\\pi r$ ✗; the choice $280\\pi$ is ADDING THE TWO END CIRCLES, $200\\pi$ worth, which the sticker never reaches ✗; the choice $400\\pi$ is FINDING THE VOLUME $\\pi r^2 h$, the coffee rather than the sticker ✗.)',
    },
    {
      q: 'A strip of birch bark is wrapped once around a cylindrical drum of radius $4$ and height $7$, with its edges meeting exactly and no overlap. The strip stands as tall as the drum, so it hides the curved side completely. What is the area of the strip?',
      fig: cylFig(4, 7, 'r = 4', 'h = 7'),
      choices: ['$28\\pi$', '$88\\pi$', '$56\\pi$', '$112\\pi$'],
      answer: 2,
      solution:
        'Route one, flattening the strip: take the bark off and press it flat. It is a rectangle whose height is the drum’s height $7$ and whose width went once around the drum, so the width is $2\\pi \\cdot 4 = 8\\pi$. The strip measures $8\\pi \\cdot 7 = 56\\pi$ ✓. Check a second, independent way, by slicing the strip into ribbons: cut it into seven ribbons, each $1$ unit tall. A single ribbon is a thin ring, and straightening it out gives a rectangle $1$ tall and $8\\pi$ long, so each ribbon is $8\\pi$. The drum keeps the same radius from bottom to top, so all seven ribbons match, and $7 \\cdot 8\\pi = 56\\pi$ ✓. (The choice $28\\pi$ is TAKING THE TRIP AROUND TO BE $\\pi r$ ✗; the choice $88\\pi$ is CAPPING THE DRUM WITH ITS TWO CIRCULAR HEADS, $32\\pi$ that the bark does not cover ✗; the choice $112\\pi$ is COMPUTING THE VOLUME $\\pi r^2 h$, which measures the drum’s inside ✗.)',
    },
  ],
  // s6 — run the volume formula backwards for the height.
  [
    {
      q: 'A cylindrical grain bin holds $175\\pi$ cubic feet and has radius $5$ feet. How tall is the bin?',
      fig: cylFig(5, 7, 'r = 5', 'h = ?'),
      choices: ['$17.5$', '$35$', '$150$', '$7$'],
      answer: 3,
      solution:
        'Route one, run the formula backwards: the volume of a cylinder is base area times height, so $\\pi \\cdot 5^2 \\cdot h = 175\\pi$. The base area is $25\\pi$, which leaves $25\\pi h = 175\\pi$; dividing both sides by $25\\pi$ gives $h = 7$ ✓. Check a second, independent way, by climbing the bin: taller bins hold more and shorter bins hold less, so there is only one height that fits, and we can hunt for it. A bin $4$ feet tall would hold $25\\pi \\cdot 4 = 100\\pi$ — too little. At $6$ feet it holds $150\\pi$ — still short. At $7$ feet it holds $175\\pi$, exactly the amount given, and since every extra foot adds another $25\\pi$ no other height can match ✓. (The choice $35$ is DIVIDING BY THE RADIUS $5$ INSTEAD OF BY THE BASE AREA $25\\pi$ ✗; the choice $150$ is SUBTRACTING THE BASE AREA FROM THE VOLUME instead of dividing ✗; the choice $17.5$ is DIVIDING BY THE CIRCUMFERENCE $10\\pi$, which would answer a question about the curved wall rather than about the volume ✗.)',
    },
    {
      q: 'A tall cylindrical smokestack has radius $5$ and volume $475\\pi$. What is its height?',
      fig: cylFig(5, 19, 'r = 5', 'h = ?', [], 260),
      choices: ['$95$', '$19$', '$47.5$', '$450$'],
      answer: 1,
      solution:
        'Route one, run the formula backwards: from $\\pi \\cdot 5^2 \\cdot h = 475\\pi$ the base area is $25\\pi$, so $25\\pi h = 475\\pi$, and dividing both sides by $25\\pi$ leaves $h = 19$ ✓. Check a second, independent way, by counting slabs: cut the stack into slabs $1$ unit thick. Because the stack is the same circle all the way up, every slab is a disk of radius $5$ and thickness $1$, worth $\\pi \\cdot 25 \\cdot 1 = 25\\pi$. The question is then simply how many such slabs add up to $475\\pi$, and since $25\\pi \\cdot 19 = 475\\pi$, there are $19$ of them — one for each unit of height ✓. (The choice $95$ is DIVIDING BY THE RADIUS $5$ RATHER THAN BY THE BASE AREA $25\\pi$ ✗; the choice $47.5$ is DIVIDING BY THE CIRCUMFERENCE $10\\pi$, the number that belongs to the unrolled wall ✗; the choice $450$ is SUBTRACTING $25$ FROM $475$ instead of dividing ✗.)',
    },
    {
      q: 'A cylindrical planter takes $1100\\pi$ cubic inches of soil to fill level with its rim, and its radius is $10$ inches. How tall is the planter?',
      fig: cylFig(10, 11, 'r = 10', 'h = ?'),
      choices: ['$110$', '$55$', '$11$', '$1000$'],
      answer: 2,
      solution:
        'Route one, run the formula backwards: the planter’s floor is a circle of area $\\pi \\cdot 10^2 = 100\\pi$ square inches, so soil filled to a height of $h$ comes to $100\\pi h$, and the statement reads $100\\pi h = 1100\\pi$. Dividing both sides by $100\\pi$ gives $h = 11$ ✓. Check a second, independent way, by proportion: a planter with this same floor standing $10$ inches tall would take $100\\pi \\cdot 10 = 1000\\pi$ of soil. The floor is the same circle at every level, so the soil needed grows in step with the height — half as tall, half as much soil. Ours takes $1100\\pi$, which is $\\frac{1100}{1000} = \\frac{11}{10}$ of that planter, so its height is $\\frac{11}{10}$ of $10$ inches, namely $11$ ✓. (The choice $110$ is DIVIDING BY THE RADIUS $10$ INSTEAD OF BY THE FLOOR AREA $100\\pi$ ✗; the choice $55$ is DIVIDING BY THE CIRCUMFERENCE $20\\pi$, which measures the wall around the soil rather than the soil ✗; the choice $1000$ is SUBTRACTING $100$ FROM $1100$ instead of dividing ✗.)',
    },
  ],
  // s7 — run the volume formula backwards for the radius, square root and all.
  [
    {
      q: 'A cylindrical wading pool has volume $363\\pi$ and height $3$. What is its radius?',
      choices: ['$121$', '$60.5$', '$11$', '$22$'],
      answer: 2,
      solution:
        'Route one, run the formula backwards: the volume statement is $\\pi r^2 \\cdot 3 = 363\\pi$. Dividing both sides by $3\\pi$ leaves $r^2 = 121$. That is the radius squared, not the radius, so take the square root: $r = 11$, since a radius is a length and cannot be negative. Check forward: $\\pi \\cdot 11^2 \\cdot 3 = \\pi \\cdot 121 \\cdot 3 = 363\\pi$ ✓. Check a second, independent way, by squeezing from both sides: a wider pool of the same depth always holds more, so at most one radius can fit the given volume, and we can close in on it. A radius of $10$ gives $\\pi \\cdot 100 \\cdot 3 = 300\\pi$ — too small. A radius of $12$ gives $\\pi \\cdot 144 \\cdot 3 = 432\\pi$ — too big. So the answer lies between $10$ and $12$, and $11$ gives exactly $363\\pi$ ✓. (The choice $121$ is STOPPING AT $r^2$ AND NEVER TAKING THE SQUARE ROOT ✗; the choice $22$ is ANSWERING WITH THE DIAMETER after finding the radius correctly ✗; the choice $60.5$ is SOLVING $2\\pi r h = 363\\pi$, the equation for the curved wall, in place of the volume equation ✗.)',
    },
    {
      q: 'A cylindrical stump of a tree has volume $338\\pi$ and height $2$. Find its radius.',
      choices: ['$169$', '$26$', '$84.5$', '$13$'],
      answer: 3,
      solution:
        'Route one, run the formula backwards: from $\\pi r^2 \\cdot 2 = 338\\pi$, divide both sides by $2\\pi$ to get $r^2 = 169$. Now take the square root, because $169$ is the radius squared: $r = 13$. Check forward: $\\pi \\cdot 169 \\cdot 2 = 338\\pi$ ✓. Check a second, independent way, by boxing the stump in: the top face must have area $338\\pi \\div 2 = 169\\pi$, since the stump is that face swept up through $2$. Stand the stump inside the smallest square box it fits in, so the circular face just touches all four walls. A circle fills exactly the fraction $\\frac{\\pi}{4}$ of the square it sits snugly inside, so the square face of the box has area $169\\pi \\div \\frac{\\pi}{4} = 676$, and its side is $\\sqrt{676} = 26$. That side is the full width of the stump — its diameter — so the radius is $26 \\div 2 = 13$ ✓. (The choice $169$ is HANDING BACK $r^2$ INSTEAD OF $r$ ✗; the choice $26$ is REPORTING THE DIAMETER when the question asks for the radius ✗; the choice $84.5$ is SOLVING $2\\pi r h = 338\\pi$, which is the equation for the bark around the side ✗.)',
    },
    {
      q: 'A cylindrical stone tabletop has volume $512\\pi$ and height $2$. What is its radius?',
      choices: ['$128$', '$16$', '$256$', '$32$'],
      answer: 1,
      solution:
        'Route one, run the formula backwards: $\\pi r^2 \\cdot 2 = 512\\pi$ gives $r^2 = 512 \\div 2 = 256$ after dividing both sides by $2\\pi$. Take the square root of the radius squared: $r = 16$. Check forward: $\\pi \\cdot 256 \\cdot 2 = 512\\pi$ ✓. Check a second, independent way, by scaling a slim column up: a cylinder of radius $1$ and the same height $2$ has volume $\\pi \\cdot 1^2 \\cdot 2 = 2\\pi$. Widening a cylinder stretches it in two horizontal directions at once, so multiplying the radius by $k$ while holding the height multiplies the volume by $k \\cdot k = k^2$. Our tabletop holds $512\\pi \\div 2\\pi = 256$ times as much, so $k^2 = 256$ and $k = 16$ — the radius is $16$ times the slim column’s radius of $1$ ✓. (The choice $256$ is REPORTING $r^2$ RATHER THAN $r$ ✗; the choice $32$ is GIVING THE DIAMETER instead of the radius ✗; the choice $128$ is SOLVING $2\\pi r h = 512\\pi$, the equation for the polished rim rather than for the stone ✗.)',
    },
  ],
  // s8 — a tank filled to part of its height: same base circle, shorter cylinder.
  [
    {
      q: 'A cylindrical rain gauge has radius $3$ and height $14$. After a storm it stands filled to exactly half its height. What is the volume of the water inside?',
      fig: cylFig(3, 14, 'r = 3', 'h = 14', [...dashedEllArc(0, 7, 3, 180, 360), { t: 'label', p: [0, 7], text: 'water', dx: 0, dy: 16 }], 260),
      choices: ['$126\\pi$', '$63\\pi$', '$31.5\\pi$', '$42\\pi$'],
      answer: 1,
      solution:
        'Route one, the water is its own cylinder: the water reaches half of $14$, so it stands $7$ deep, and it takes the shape of the gauge it sits in — a cylinder of radius $3$ and height $7$. That has volume $\\pi \\cdot 3^2 \\cdot 7 = 9\\pi \\cdot 7 = 63\\pi$ ✓. Check a second, independent way, by splitting the gauge in two: filled to the brim the gauge holds $\\pi \\cdot 9 \\cdot 14 = 126\\pi$. Now cut it across the middle. The top half and the bottom half are the same cylinder of radius $3$ and height $7$, so they hold the same amount, and together they hold $126\\pi$. The water fills one of them: $126\\pi \\div 2 = 63\\pi$ ✓. (The choice $126\\pi$ is FILLING THE GAUGE ALL THE WAY UP and ignoring the water line ✗; the choice $31.5\\pi$ is HALVING THE RADIUS INSTEAD OF THE HEIGHT, which shrinks the gauge sideways rather than lowering the water ✗; the choice $42\\pi$ is MEASURING THE WETTED WALL, $2\\pi r h$ over the bottom $7$ units, which is an area and not a volume ✗.)',
    },
    {
      q: 'A cylindrical storage tank has radius $10$ and height $9$, and it is filled with oil to exactly two-thirds of its height. How much oil is in the tank?',
      fig: cylFig(10, 9, 'r = 10', 'h = 9', [...dashedEllArc(0, 6, 10, 180, 360), { t: 'label', p: [0, 6], text: 'oil', dx: 0, dy: 16 }]),
      choices: ['$600\\pi$', '$900\\pi$', '$300\\pi$', '$400\\pi$'],
      answer: 0,
      solution:
        'Route one, the oil is its own cylinder: two-thirds of the height $9$ is $\\frac{2}{3} \\cdot 9 = 6$, so the oil forms a cylinder of radius $10$ and height $6$. Its volume is $\\pi \\cdot 10^2 \\cdot 6 = 100\\pi \\cdot 6 = 600\\pi$ ✓. Check a second, independent way, by taking a fraction of the whole: brim-full, the tank holds $\\pi \\cdot 100 \\cdot 9 = 900\\pi$. The tank is the same circle at every level, so every unit of height holds the same amount as every other, and filling two-thirds of the height therefore stores two-thirds of the oil: $\\frac{2}{3} \\cdot 900\\pi = 600\\pi$ ✓. (The choice $900\\pi$ is REPORTING THE FULL TANK and forgetting that a third of it is empty ✗; the choice $300\\pi$ is MEASURING THE EMPTY SPACE ABOVE THE OIL instead of the oil ✗; the choice $400\\pi$ is APPLYING THE TWO-THIRDS TO THE RADIUS AND NOT TO THE HEIGHT, which takes $\\frac{2}{3} \\cdot \\frac{2}{3} = \\frac{4}{9}$ of the full $900\\pi$ when the oil line lowers the height alone ✗.)',
    },
    {
      q: 'A cylindrical juice vat has radius $8$ and height $15$. It is filled to three-fifths of its height. What volume of juice does it contain?',
      fig: cylFig(8, 15, 'r = 8', 'h = 15', [...dashedEllArc(0, 9, 8, 180, 360), { t: 'label', p: [0, 9], text: 'juice', dx: 0, dy: 16 }]),
      choices: ['$960\\pi$', '$384\\pi$', '$192\\pi$', '$576\\pi$'],
      answer: 3,
      solution:
        'Route one, the juice is its own cylinder: three-fifths of the height $15$ is $\\frac{3}{5} \\cdot 15 = 9$, so the juice is a cylinder of radius $8$ and height $9$, of volume $\\pi \\cdot 8^2 \\cdot 9 = 64\\pi \\cdot 9 = 576\\pi$ ✓. Check a second, independent way, by counting layers: mark the vat in bands $1$ unit tall. Each band is a disk of radius $8$ and thickness $1$, holding $\\pi \\cdot 64 \\cdot 1 = 64\\pi$, and all the bands match because the vat keeps one radius from bottom to top. The juice covers $9$ of these bands, so it comes to $9 \\cdot 64\\pi = 576\\pi$ ✓. (The choice $960\\pi$ is FILLING THE VAT TO THE BRIM, which is $15$ bands rather than $9$ ✗; the choice $384\\pi$ is MEASURING THE EMPTY TWO-FIFTHS ABOVE THE JUICE ✗; the choice $192\\pi$ is TAKING ONLY ONE-FIFTH OF THE VAT, as though the fraction were $\\frac{1}{5}$ instead of $\\frac{3}{5}$ ✗.)',
    },
  ],
  // s9 — pour the water into a new cylinder: volume is fixed, depth is not.
  [
    {
      q: 'A cylindrical pitcher of radius $6$ is filled with lemonade to a depth of $8$. All of it is poured into an empty cylindrical tub of radius $12$. How deep is the lemonade in the tub?',
      choices: ['$2$', '$4$', '$8$', '$32$'],
      answer: 0,
      solution:
        'Route one, follow the lemonade: pouring changes the shape of the lemonade but not how much there is. In the pitcher it fills $\\pi \\cdot 6^2 \\cdot 8 = 36\\pi \\cdot 8 = 288\\pi$. In the tub it spreads over a floor of area $\\pi \\cdot 12^2 = 144\\pi$, and depth is volume divided by floor area, so the lemonade stands $288\\pi \\div 144\\pi = 2$ deep ✓. Check a second, independent way, by comparing the two floors: the tub’s radius is twice the pitcher’s, and doubling a radius stretches the floor in two directions at once, so the tub’s floor is $2 \\cdot 2 = 4$ times as large. Volume is floor area times depth and the volume is unchanged, so if the floor grows by a factor of $4$ the depth must shrink by that same factor: $8 \\div 4 = 2$ ✓. (The choice $4$ is SHRINKING THE DEPTH BY THE RADIUS RATIO $\\frac{1}{2}$ instead of by the floor-area ratio $\\frac{1}{4}$ ✗; the choice $8$ is CARRYING THE OLD DEPTH ACROSS, as though a wider tub filled just as high ✗; the choice $32$ is MULTIPLYING BY $4$ WHERE ONE SHOULD DIVIDE, which would need four times as much lemonade ✗.)',
    },
    {
      q: 'A narrow cylindrical vase of radius $4$ holds water to a depth of $18$. The water is emptied into a cylindrical bowl of radius $6$. How deep is the water in the bowl?',
      choices: ['$12$', '$18$', '$8$', '$40.5$'],
      answer: 2,
      solution:
        'Route one, follow the water: the amount of water is fixed by the vase, $\\pi \\cdot 4^2 \\cdot 18 = 16\\pi \\cdot 18 = 288\\pi$. The bowl’s floor is a circle of area $\\pi \\cdot 6^2 = 36\\pi$, and the water sits on it as a cylinder, so its depth is $288\\pi \\div 36\\pi = 8$ ✓. Check a second, independent way, by comparing the two floors: the bowl’s radius is $\\frac{6}{4} = \\frac{3}{2}$ times the vase’s, and a floor stretched by $\\frac{3}{2}$ in two directions grows by a factor of $\\frac{3}{2} \\cdot \\frac{3}{2} = \\frac{9}{4}$. With the same water spread over a floor $\\frac{9}{4}$ times as large, the depth must be $\\frac{4}{9}$ of what it was: $18 \\cdot \\frac{4}{9} = 8$ ✓. (The choice $12$ is SCALING THE DEPTH BY THE RADIUS RATIO $\\frac{2}{3}$ instead of by the area ratio $\\frac{4}{9}$ ✗; the choice $18$ is ASSUMING THE DEPTH TRAVELS WITH THE WATER, though the bowl is wider ✗; the choice $40.5$ is TURNING THE RATIO UPSIDE DOWN, deepening the water when a wider bowl must make it shallower ✗.)',
    },
    {
      q: 'A wide cylindrical basin of radius $12$ contains water $5$ deep. Every drop is poured into an empty cylindrical drum of radius $6$, which is tall enough to hold it. How deep is the water in the drum?',
      choices: ['$10$', '$20$', '$5$', '$1.25$'],
      answer: 1,
      solution:
        'Route one, follow the water: the basin holds $\\pi \\cdot 12^2 \\cdot 5 = 144\\pi \\cdot 5 = 720\\pi$, and pouring does not add or lose any of it. The drum’s floor has area $\\pi \\cdot 6^2 = 36\\pi$, so the water rises to $720\\pi \\div 36\\pi = 20$ ✓. Check a second, independent way, by comparing the two floors: the drum’s radius is half the basin’s, and halving a radius shrinks the floor in two directions at once, to $\\frac{1}{2} \\cdot \\frac{1}{2} = \\frac{1}{4}$ of its old size. The same water on a quarter of the floor must stand four times as deep: $5 \\cdot 4 = 20$ ✓. (The choice $10$ is USING THE RADIUS RATIO $2$ instead of the floor-area ratio $4$ ✗; the choice $5$ is KEEPING THE OLD DEPTH, though a narrower drum must fill higher ✗; the choice $1.25$ is DIVIDING BY $4$ WHERE ONE SHOULD MULTIPLY, which would make a narrow drum shallower than a wide basin ✗.)',
    },
  ],
  // s10 — total surface area and radius given: peel off the lids, then unroll.
  [
    {
      q: 'A closed cylindrical canister has radius $4$ and total surface area $112\\pi$. What is its height?',
      choices: ['$14$', '$6$', '$12$', '$10$'],
      answer: 3,
      solution:
        'Route one, write the surface down piece by piece and solve: the two lids are circles of radius $4$, contributing $2\\pi \\cdot 4^2 = 32\\pi$, and the wall contributes $2\\pi \\cdot 4 \\cdot h = 8\\pi h$. So $32\\pi + 8\\pi h = 112\\pi$, which after dividing by $\\pi$ is $32 + 8h = 112$, then $8h = 80$ and $h = 10$ ✓. Check a second, independent way, by taking the canister apart: cut off the lid and the base and set them aside — they are two circles of $16\\pi$ each, $32\\pi$ of the $112\\pi$ gone, leaving $80\\pi$ of metal in the wall alone. Slit that wall and flatten it: it is a rectangle whose width went once around the rim, $2\\pi \\cdot 4 = 8\\pi$. A rectangle of area $80\\pi$ and width $8\\pi$ is $80\\pi \\div 8\\pi = 10$ tall, and that height is the canister’s height ✓. (The choice $14$ is DIVIDING THE WHOLE $112\\pi$ BY THE RIM $8\\pi$ with the lids still attached ✗; the choice $12$ is REMOVING ONLY ONE LID before unrolling ✗; the choice $6$ is SUBTRACTING THE LID AREA TWICE OVER, taking off $64\\pi$ when the two lids together are only $32\\pi$ ✗.)',
    },
    {
      q: 'A closed cylindrical pipe cap has radius $5$ and total surface area $270\\pi$. Find its height.',
      choices: ['$27$', '$22$', '$17$', '$24.5$'],
      answer: 1,
      solution:
        'Route one, write the surface down piece by piece and solve: the two flat ends give $2\\pi \\cdot 5^2 = 50\\pi$ and the curved wall gives $2\\pi \\cdot 5 \\cdot h = 10\\pi h$, so $50\\pi + 10\\pi h = 270\\pi$. Dividing by $\\pi$ leaves $50 + 10h = 270$, so $10h = 220$ and $h = 22$ ✓. Check a second, independent way, by growing the wall one unit at a time: the two ends cost $50\\pi$ no matter how tall the cap is, and every extra unit of height wraps on another band of wall of area $2\\pi \\cdot 5 \\cdot 1 = 10\\pi$. Starting from $50\\pi$, the surface climbs steadily: at a height of $20$ it is $50\\pi + 200\\pi = 250\\pi$, at $21$ it is $260\\pi$, and at $22$ it is $270\\pi$ — a match, and the only one, since each further unit adds another $10\\pi$ ✓. (The choice $27$ is DIVIDING ALL OF $270\\pi$ BY THE RIM $10\\pi$ without setting the two ends aside ✗; the choice $24.5$ is SETTING ASIDE ONLY ONE END ✗; the choice $17$ is SUBTRACTING THE END CIRCLES TWICE, removing $100\\pi$ where $50\\pi$ was due ✗.)',
    },
    {
      q: 'A sealed cylindrical buoy has radius $7$, and its whole outer skin measures $280\\pi$. How tall is the buoy?',
      choices: ['$13$', '$20$', '$16.5$', '$6$'],
      answer: 0,
      solution:
        'Route one, write the surface down piece by piece and solve: the two flat ends are circles of radius $7$, contributing $2\\pi \\cdot 7^2 = 98\\pi$, and the curved wall contributes $2\\pi \\cdot 7 \\cdot h = 14\\pi h$. So $98\\pi + 14\\pi h = 280\\pi$, which after dividing by $\\pi$ reads $98 + 14h = 280$, then $14h = 182$ and $h = 13$ ✓. Check a second, independent way, by rolling the buoy along paper: pop off the two ends and set them aside — they are circles of $49\\pi$ each, so $98\\pi$ of the $280\\pi$ leaves with them and $182\\pi$ of skin stays on the tube. Ink that tube and roll it one full turn across a sheet without letting it slip. Every part of the wall touches down exactly once, so the printed track has the same area as the wall, $182\\pi$. The track is as long as the distance the rim travelled in one turn, $2\\pi \\cdot 7 = 14\\pi$, so it is $182\\pi \\div 14\\pi = 13$ wide — and its width is the height of the buoy ✓. (The choice $20$ is DIVIDING ALL OF $280\\pi$ BY THE RIM $14\\pi$ with the two ends still attached ✗; the choice $16.5$ is POPPING OFF ONLY ONE END before rolling ✗; the choice $6$ is SUBTRACTING THE END CIRCLES TWICE, removing $196\\pi$ where $98\\pi$ was due ✗.)',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 15,
  sections: { '15.1': s151 },
}
