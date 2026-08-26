// Introduction to Geometry chapter 2 — variations for section 2.2
// (Measuring Angles). All problems, figures, and solutions are original
// MathQuest content.
//
// House rules for this file:
//  - Every answer was worked twice by two genuinely different routes, and the
//    two routes had to agree before a key was written down. Clock answers were
//    also checked against $|30H - 5.5M|$, folded back under $180^\circ$ when
//    the first reading ran past a half turn.
//  - Each slot keeps the shape of its base answer: a classification stays a
//    classification, a fraction stays a fraction, a "whole angle" question
//    never quietly turns into a "half angle" question.
//  - Every figure coordinate was computed, never eyeballed: a ray drawn at
//    $\theta$ degrees from the vertex ends at $[L\cos\theta, L\sin\theta]$, and
//    a clock hand $c$ degrees clockwise from the 12 points at
//    $[L\sin c, L\cos c]$. Hour hands are drawn shorter than minute hands.
//  - Each distractor is one named mistake, named at the end of the solution in
//    CAPS. The traps running through this section are: READING "ALMOST" AS
//    "EXACTLY", MEASURING THE LONG WAY AROUND, LANDING ON THE WRONG SIDE OF
//    THE 90 DEGREE LINE, ROUNDING UP TO A STRAIGHT ANGLE, TAKING THE
//    SUPPLEMENT FIRST, COUNTING 90 ITSELF AS LESS THAN 90, COUNTING 90 ITSELF
//    AS MORE THAN 90, CONFUSING A QUARTER TURN WITH A HALF TURN, MEASURING
//    AGAINST A HALF TURN, TAKING THE LEFTOVER SHARE, PUTTING THE ANGLE IN THE
//    DENOMINATOR, TAKING ONE DEGREE'S SHARE, NAMING THE NEIGHBOR CATEGORY,
//    STOPPING AT THE FIRST LANDMARK PAST 90, ANSWERING WITH THE WHOLE ANGLE,
//    DOUBLING INSTEAD OF HALVING, TAKING THE SUPPLEMENT, REPEATING THE GIVEN
//    ANGLE, SUBTRACTING THE SUPPLEMENT FROM THE FULL TURN, READING MINUTES AS
//    DEGREES, COUNTING THE MINUTES LEFT IN THE HOUR, DOUBLING THE RATE,
//    STOPPING AT x, ANSWERING WITH ONE HALF, DOUBLING TWICE, GOING THE LONG
//    WAY AROUND, COUNTING ONE GAP TOO FEW, COUNTING ONE GAP TOO MANY,
//    FORGETTING THE HOUR HAND'S CREEP, ADVANCING THE HOUR HAND A WHOLE HOUR,
//    USING ONLY THE CREEP, and SUBTRACTING THE CREEP INSTEAD OF ADDING.
//  - No two choices inside an item name the same value.

const s22 = [
  // s1 — classify an angle from its measure.
  [
    {
      q: 'The angle in the figure measures $89^\\circ$. How should it be classified?',
      fig: {
        view: [-1.1, -0.8, 3.8, 3.4],
        elems: [
          { t: 'seg', a: [0, 0], b: [2.93, 0.62] },
          { t: 'seg', a: [0, 0], b: [-0.57, 2.94] },
          { t: 'point', p: [0, 0], label: 'O', dx: -12, dy: 6 },
          { t: 'angle', at: [0, 0], from: [2.93, 0.62], to: [-0.57, 2.94], r: 0.7, label: '89' },
        ],
      },
      choices: ['Right', 'Acute', 'Reflex', 'Obtuse'],
      answer: 1,
      solution:
        'Classification asks one question only: which side of the landmarks does the measure fall on? Since $89^\\circ < 90^\\circ$, the angle is acute ✓. Check a second, independent way by comparing turns instead of degrees. A full turn is $360^\\circ$, so a quarter turn is $\\frac{360}{4} = 90^\\circ$; our angle is $\\frac{89}{360}$ of a turn, which is less than $\\frac{90}{360} = \\frac{1}{4}$ ✓. An opening smaller than a quarter turn is exactly what "acute" means, so both routes agree. (Choosing Right is READING "ALMOST" AS "EXACTLY" — a right angle has to be $90^\\circ$ on the nose, and $89^\\circ$ misses ✗; Obtuse is LANDING ON THE WRONG SIDE OF THE 90 DEGREE LINE, since obtuse starts above $90^\\circ$ ✗; Reflex is MEASURING THE LONG WAY AROUND, reading the $271^\\circ$ that wraps the other side of the rays instead of the angle that is marked ✗.)',
    },
    {
      q: 'A drawbridge hinge opens until the angle at the hinge measures $174^\\circ$, as shown. What kind of angle is that?',
      fig: {
        view: [-3.4, -0.8, 3.8, 2.4],
        elems: [
          { t: 'seg', a: [0, 0], b: [3, 0] },
          { t: 'seg', a: [0, 0], b: [-2.98, 0.31] },
          { t: 'point', p: [0, 0], label: 'H', dx: 0, dy: 14 },
          { t: 'angle', at: [0, 0], from: [3, 0], to: [-2.98, 0.31], r: 0.6, label: '174' },
        ],
      },
      choices: ['Straight', 'Obtuse', 'Reflex', 'Acute'],
      answer: 1,
      solution:
        'Obtuse means strictly between $90^\\circ$ and $180^\\circ$, and $90 < 174 < 180$ ✓, so the hinge angle is obtuse. Check a second, independent way without comparing to $180^\\circ$ at all: ask how far the hinge still has to swing before its two arms line up. It needs $180^\\circ - 174^\\circ = 6^\\circ$ more, and $6^\\circ$ is a real, nonzero amount, so the arms have not lined up yet — the angle is past a right angle but has not reached a straight one ✓. Both routes land in the same slot. (Choosing Straight is ROUNDING UP TO A STRAIGHT ANGLE; a straight angle is exactly $180^\\circ$, and $6^\\circ$ of swing is still missing ✗. Choosing Acute is TAKING THE SUPPLEMENT FIRST, classifying that leftover $6^\\circ$ instead of the angle itself ✗. Choosing Reflex is MEASURING THE LONG WAY AROUND, reading the $186^\\circ$ on the other side of the arms ✗.)',
    },
    {
      q: 'A protractor reading gives exactly $90^\\circ$ for the angle drawn in the figure. Which classification is correct?',
      fig: {
        view: [-1.5, -0.8, 3.8, 3.4],
        elems: [
          { t: 'seg', a: [0, 0], b: [2.82, 1.03] },
          { t: 'seg', a: [0, 0], b: [-1.03, 2.82] },
          { t: 'point', p: [0, 0], label: 'V', dx: -12, dy: 6 },
          { t: 'angle', at: [0, 0], from: [2.82, 1.03], to: [-1.03, 2.82], r: 0.7, label: '90' },
        ],
      },
      choices: ['Right', 'Acute', 'Obtuse', 'Straight'],
      answer: 0,
      solution:
        'A right angle is defined as exactly $90^\\circ$, and the protractor reads exactly $90^\\circ$ ✓. Check a second, independent way by counting quarter turns instead of reading a scale. Four copies of this angle laid corner to corner around $V$ would sweep $4 \\times 90^\\circ = 360^\\circ$, one complete turn with nothing left over — and an angle that tiles a full turn in exactly four equal copies is a quarter turn, which is the square corner we call a right angle ✓. (Choosing Acute is COUNTING 90 ITSELF AS LESS THAN 90; acute stops just short of $90^\\circ$ and never reaches it ✗. Choosing Obtuse is COUNTING 90 ITSELF AS MORE THAN 90; obtuse starts just above $90^\\circ$ ✗. Choosing Straight is CONFUSING A QUARTER TURN WITH A HALF TURN — a straight angle is $180^\\circ$, twice this ✗.)',
    },
  ],
  // s2 — what fraction of a full turn is a given angle?
  [
    {
      q: 'Marisol turns a spinner arrow through $45^\\circ$. What fraction of a full turn has the arrow made?',
      choices: ['$\\frac{1}{4}$', '$\\frac{1}{8}$', '$\\frac{7}{8}$', '$\\frac{1}{45}$'],
      answer: 1,
      solution:
        'A full turn is $360^\\circ$, so the arrow’s share of the turn is $\\frac{45}{360}$; dividing top and bottom by $45$ gives $\\frac{1}{8}$ ✓. Check a second, independent way with no fraction to reduce: ask how many $45^\\circ$ wedges fit inside a full turn. Since $360 \\div 45 = 8$, the turn breaks into $8$ equal wedges and the arrow has swept exactly one of them, which is $\\frac{1}{8}$ of it ✓. (The choice $\\frac{1}{4}$ is MEASURING AGAINST A HALF TURN, since $\\frac{45}{180} = \\frac{1}{4}$ ✗; $\\frac{7}{8}$ is TAKING THE LEFTOVER SHARE, the part of the turn the arrow has NOT made ✗; $\\frac{1}{45}$ is PUTTING THE ANGLE IN THE DENOMINATOR, where the $360$ belongs ✗.)',
    },
    {
      q: 'A slice cut from a round pizza has a $120^\\circ$ angle at the center. What fraction of the whole pizza is that slice?',
      choices: ['$\\frac{1}{3}$', '$\\frac{2}{3}$', '$\\frac{1}{120}$', '$\\frac{1}{360}$'],
      answer: 0,
      solution:
        'The whole pizza is a full turn of $360^\\circ$ around the center, so the slice is $\\frac{120}{360}$ of it, and dividing top and bottom by $120$ leaves $\\frac{1}{3}$ ✓. Check a second, independent way by rebuilding the pizza: three slices of $120^\\circ$ give $3 \\times 120^\\circ = 360^\\circ$, exactly the whole pie with nothing missing and nothing overlapping, so one slice is one of three equal parts ✓. (The choice $\\frac{2}{3}$ is TAKING THE LEFTOVER SHARE — that is the $240^\\circ$ of pizza still on the tray, not the slice ✗; $\\frac{1}{120}$ is PUTTING THE ANGLE IN THE DENOMINATOR ✗; $\\frac{1}{360}$ is TAKING ONE DEGREE’S SHARE, the fraction a single degree would claim ✗.)',
    },
    {
      q: 'Tomas opens a folding paper fan through $60^\\circ$. What fraction of a full turn has the fan opened?',
      choices: ['$\\frac{1}{3}$', '$\\frac{5}{6}$', '$\\frac{1}{60}$', '$\\frac{1}{6}$'],
      answer: 3,
      solution:
        'The fan’s opening compared with a full turn is $\\frac{60}{360}$, and dividing top and bottom by $60$ gives $\\frac{1}{6}$ ✓. Check a second, independent way by counting copies instead of reducing a fraction: $360 \\div 60 = 6$, so six fans opened this wide, set corner to corner, would close up a complete turn — one fan is one of six equal parts ✓. (The choice $\\frac{1}{3}$ is MEASURING AGAINST A HALF TURN, since $\\frac{60}{180} = \\frac{1}{3}$ ✗; $\\frac{5}{6}$ is TAKING THE LEFTOVER SHARE, the $300^\\circ$ the fan has not opened through ✗; $\\frac{1}{60}$ is PUTTING THE ANGLE IN THE DENOMINATOR ✗.)',
    },
  ],
  // s3 — name the angle category from a description.
  [
    {
      q: 'Priya spins a dial through exactly one quarter of a full turn. What is the angle she has turned through called?',
      choices: ['An obtuse angle', 'A right angle', 'A straight angle', 'A reflex angle'],
      answer: 1,
      solution:
        'A quarter of a full turn is $\\frac{360^\\circ}{4} = 90^\\circ$, and an angle of exactly $90^\\circ$ is a right angle ✓. Check a second, independent way without computing anything: four quarter turns make one whole turn, so four copies of Priya’s angle fit around a point with no gap and no overlap. The only angle that tiles a point four times over is the square corner — the corner of a sheet of paper, a floor tile, a picture frame ✓. That corner is the right angle. (An obtuse angle is more than a quarter turn but less than a half turn, so it is NAMING THE NEIGHBOR CATEGORY ✗; a straight angle is a HALF turn, $180^\\circ$, which is CONFUSING A QUARTER TURN WITH A HALF TURN ✗; a reflex angle is more than a half turn, so it is MEASURING THE LONG WAY AROUND — the $270^\\circ$ Priya did not spin ✗.)',
    },
    {
      q: 'An angle opens wider than a straight angle but stops short of a full turn. What is such an angle called?',
      choices: ['An obtuse angle', 'A straight angle', 'A reflex angle', 'A right angle'],
      answer: 2,
      solution:
        'Wider than a straight angle means more than $180^\\circ$, and short of a full turn means less than $360^\\circ$. The name reserved for that whole range is reflex ✓. Check a second, independent way by seeing which names the description can rule out. Right means exactly $90^\\circ$ ✗ and straight means exactly $180^\\circ$ ✗, and neither exact value is more than $180^\\circ$; obtuse tops out below $180^\\circ$, so it never gets there either ✗. Every other category is used up before $180^\\circ$, and one survivor is left ✓. (Choosing obtuse is NAMING THE NEIGHBOR CATEGORY — obtuse is the range just BELOW $180^\\circ$ ✗; choosing straight is ROUNDING UP TO A STRAIGHT ANGLE, treating "more than $180^\\circ$" as "$180^\\circ$" ✗; choosing right is STOPPING AT THE FIRST LANDMARK PAST 90 and forgetting the description entirely ✗.)',
    },
    {
      q: 'An angle opens by less than a right angle does. What is such an angle called?',
      choices: ['An acute angle', 'A right angle', 'An obtuse angle', 'A reflex angle'],
      answer: 0,
      solution:
        'Less than a right angle means less than $90^\\circ$, and an angle under $90^\\circ$ is acute ✓. Check a second, independent way with a picture rather than a rule: start with a square corner and squeeze it. Every squeeze makes the opening narrower, and the whole family of narrow openings — the tip of a slice of pie, the point of a pencil, a barely cracked door — carries one name, acute ✓. Both routes agree. (Choosing a right angle is COUNTING 90 ITSELF AS LESS THAN 90; the description rules the $90^\\circ$ case out ✗. Choosing obtuse is NAMING THE NEIGHBOR CATEGORY on the wrong side, since obtuse angles are WIDER than a right angle ✗. Choosing reflex is MEASURING THE LONG WAY AROUND, naming the huge angle on the far side of the two rays ✗.)',
    },
  ],
  // s4 — a bisector cuts a known angle in half.
  [
    {
      q: 'Ray $\\overrightarrow{LN}$ bisects $\\angle KLM$, and $\\angle KLM = 138^\\circ$. What is $\\angle KLN$?',
      fig: {
        view: [-2.8, -0.8, 3.8, 3.3],
        elems: [
          { t: 'seg', a: [0, 0], b: [3, 0] },
          { t: 'seg', a: [0, 0], b: [1.08, 2.8], dash: true },
          { t: 'seg', a: [0, 0], b: [-2.23, 2.01] },
          { t: 'point', p: [0, 0], label: 'L', dx: 0, dy: 14 },
          { t: 'point', p: [3, 0], label: 'K', dx: 10, dy: 0 },
          { t: 'point', p: [1.08, 2.8], label: 'N', dx: 8, dy: -8 },
          { t: 'point', p: [-2.23, 2.01], label: 'M', dx: -8, dy: -8 },
          { t: 'angle', at: [0, 0], from: [3, 0], to: [1.08, 2.8], r: 0.85, label: '?' },
          { t: 'angle', at: [0, 0], from: [1.08, 2.8], to: [-2.23, 2.01], r: 0.6 },
        ],
      },
      choices: ['$276^\\circ$', '$42^\\circ$', '$69^\\circ$', '$138^\\circ$'],
      answer: 2,
      solution:
        'Bisect means cut into two equal pieces, so $\\angle KLN = \\frac{138^\\circ}{2} = 69^\\circ$ ✓. Check a second, independent way by splitting the halving into friendly chunks and then rebuilding: half of $130^\\circ$ is $65^\\circ$ and half of $8^\\circ$ is $4^\\circ$, giving $65^\\circ + 4^\\circ = 69^\\circ$; putting the two pieces back gives $69^\\circ + 69^\\circ = 138^\\circ$ ✓, exactly the angle we started with. That rebuild also settles the size question at a glance: a piece has to be SMALLER than the whole. (The choice $138^\\circ$ is ANSWERING WITH THE WHOLE ANGLE, forgetting the cut ✗; $276^\\circ$ is DOUBLING INSTEAD OF HALVING ✗; $42^\\circ$ is TAKING THE SUPPLEMENT, $180^\\circ - 138^\\circ$, which has nothing to do with the bisector ✗.)',
    },
    {
      q: 'Ray $\\overrightarrow{VS}$ bisects $\\angle UVW$, and $\\angle UVW = 96^\\circ$. What is $\\angle SVW$?',
      fig: {
        view: [-1.2, -0.8, 3.8, 3.4],
        elems: [
          { t: 'seg', a: [0, 0], b: [3, 0] },
          { t: 'seg', a: [0, 0], b: [2.01, 2.23], dash: true },
          { t: 'seg', a: [0, 0], b: [-0.31, 2.98] },
          { t: 'point', p: [0, 0], label: 'V', dx: -12, dy: 8 },
          { t: 'point', p: [3, 0], label: 'U', dx: 10, dy: 0 },
          { t: 'point', p: [2.01, 2.23], label: 'S', dx: 10, dy: -4 },
          { t: 'point', p: [-0.31, 2.98], label: 'W', dx: 2, dy: -10 },
          { t: 'angle', at: [0, 0], from: [3, 0], to: [2.01, 2.23], r: 0.9 },
          { t: 'angle', at: [0, 0], from: [2.01, 2.23], to: [-0.31, 2.98], r: 0.65, label: '?' },
        ],
      },
      choices: ['$48^\\circ$', '$96^\\circ$', '$84^\\circ$', '$192^\\circ$'],
      answer: 0,
      solution:
        'The bisector makes the two pieces equal, and the question asks for the piece on the $W$ side, so $\\angle SVW = \\frac{96^\\circ}{2} = 48^\\circ$ ✓. Notice that $\\angle UVS$ is $48^\\circ$ too — with a bisector it does not matter which half you are asked for. Check a second, independent way by working forward instead of backward: call each half $y$, and since the two halves make the whole, $y + y = 96^\\circ$, so $2y = 96^\\circ$ and $y = 48^\\circ$ ✓, with $48^\\circ + 48^\\circ = 96^\\circ$ confirming the fit. (The choice $96^\\circ$ is ANSWERING WITH THE WHOLE ANGLE ✗; $192^\\circ$ is DOUBLING INSTEAD OF HALVING ✗; $84^\\circ$ is TAKING THE SUPPLEMENT, $180^\\circ - 96^\\circ$ ✗.)',
    },
    {
      q: 'Ray $\\overrightarrow{EG}$ bisects $\\angle DEF$, and $\\angle DEF = 154^\\circ$. What is $\\angle GEF$?',
      fig: {
        view: [-3.2, -0.8, 3.8, 3.4],
        elems: [
          { t: 'seg', a: [0, 0], b: [3, 0] },
          { t: 'seg', a: [0, 0], b: [0.67, 2.92], dash: true },
          { t: 'seg', a: [0, 0], b: [-2.7, 1.32] },
          { t: 'point', p: [0, 0], label: 'E', dx: 0, dy: 14 },
          { t: 'point', p: [3, 0], label: 'D', dx: 10, dy: 0 },
          { t: 'point', p: [0.67, 2.92], label: 'G', dx: 8, dy: -8 },
          { t: 'point', p: [-2.7, 1.32], label: 'F', dx: -10, dy: -4 },
          { t: 'angle', at: [0, 0], from: [3, 0], to: [0.67, 2.92], r: 0.9 },
          { t: 'angle', at: [0, 0], from: [0.67, 2.92], to: [-2.7, 1.32], r: 0.65, label: '?' },
        ],
      },
      choices: ['$154^\\circ$', '$26^\\circ$', '$308^\\circ$', '$77^\\circ$'],
      answer: 3,
      solution:
        'A bisector splits $\\angle DEF$ into two equal halves, so $\\angle GEF = \\frac{154^\\circ}{2} = 77^\\circ$ ✓. Check a second, independent way by halving in chunks and rebuilding: half of $150^\\circ$ is $75^\\circ$, half of $4^\\circ$ is $2^\\circ$, and $75^\\circ + 2^\\circ = 77^\\circ$; stacking the halves back gives $77^\\circ + 77^\\circ = 154^\\circ$ ✓. The rebuild is also a size check — each half must come out well under $90^\\circ$ even though the whole angle is obtuse, and $77^\\circ$ does. (The choice $154^\\circ$ is ANSWERING WITH THE WHOLE ANGLE ✗; $308^\\circ$ is DOUBLING INSTEAD OF HALVING ✗; $26^\\circ$ is TAKING THE SUPPLEMENT, $180^\\circ - 154^\\circ$ ✗.)',
    },
  ],
  // s5 — the reflex angle on the other side of the same two rays.
  [
    {
      q: 'The angle in the figure measures $118^\\circ$. Going around the other way instead, what is the measure of the reflex angle made by the same two rays?',
      fig: {
        view: [-2.2, -1.8, 3.8, 3.2],
        elems: [
          { t: 'seg', a: [0, 0], b: [3, 0] },
          { t: 'seg', a: [0, 0], b: [-1.41, 2.65] },
          { t: 'point', p: [0, 0], label: 'O', dx: 0, dy: 14 },
          { t: 'angle', at: [0, 0], from: [3, 0], to: [-1.41, 2.65], r: 0.55, label: '118' },
          { t: 'arc', c: [0, 0], r: 1.0, from: 118, to: 360 },
          { t: 'label', p: [-0.67, -1.11], text: '?' },
        ],
      },
      choices: ['$62^\\circ$', '$242^\\circ$', '$298^\\circ$', '$118^\\circ$'],
      answer: 1,
      solution:
        'The two ways around the same pair of rays fill a complete turn between them, so $118^\\circ + \\text{reflex} = 360^\\circ$ and the reflex angle is $360^\\circ - 118^\\circ = 242^\\circ$ ✓. Check a second, independent way by walking the long way in two stages instead of subtracting. Start on the marked $118^\\circ$ ray and swing backwards to the ray directly opposite the other side: that is $180^\\circ - 118^\\circ = 62^\\circ$. From there, keep going all the way around to the far ray, another half turn of $180^\\circ$. Total: $62^\\circ + 180^\\circ = 242^\\circ$ ✓ — same answer, built by adding rather than subtracting. (The choice $62^\\circ$ is TAKING THE SUPPLEMENT, which measures against $180^\\circ$ instead of $360^\\circ$ ✗; $298^\\circ$ is SUBTRACTING THE SUPPLEMENT FROM THE FULL TURN, $360^\\circ - 62^\\circ$ ✗; $118^\\circ$ is REPEATING THE GIVEN ANGLE ✗.)',
    },
    {
      q: 'Two rays meet at a point and make an angle of $74^\\circ$. Measured the long way around instead, what is the reflex angle they make?',
      fig: {
        view: [-1.8, -1.8, 3.8, 3.4],
        elems: [
          { t: 'seg', a: [0, 0], b: [3, 0] },
          { t: 'seg', a: [0, 0], b: [0.83, 2.88] },
          { t: 'point', p: [0, 0], label: 'P', dx: -14, dy: 6 },
          { t: 'angle', at: [0, 0], from: [3, 0], to: [0.83, 2.88], r: 0.55, label: '74' },
          { t: 'arc', c: [0, 0], r: 1.0, from: 74, to: 360 },
          { t: 'label', p: [-1.04, -0.78], text: '?' },
        ],
      },
      choices: ['$254^\\circ$', '$106^\\circ$', '$74^\\circ$', '$286^\\circ$'],
      answer: 3,
      solution:
        'Both journeys around the rays add up to one whole turn, so the reflex angle is $360^\\circ - 74^\\circ = 286^\\circ$ ✓. Check a second, independent way by adding half turns. Going the long way, the sweep passes the ray opposite the $74^\\circ$ side after $180^\\circ - 74^\\circ = 106^\\circ$, and then needs a further half turn of $180^\\circ$ to reach the second ray: $106^\\circ + 180^\\circ = 286^\\circ$ ✓. A quick sanity check also fits — a reflex angle must sit between $180^\\circ$ and $360^\\circ$, and $286^\\circ$ does. (The choice $106^\\circ$ is TAKING THE SUPPLEMENT and is not even reflex ✗; $254^\\circ$ is SUBTRACTING THE SUPPLEMENT FROM THE FULL TURN, $360^\\circ - 106^\\circ$ ✗; $74^\\circ$ is REPEATING THE GIVEN ANGLE ✗.)',
    },
    {
      q: 'Kian measures the marked angle in the figure as $155^\\circ$. What is the measure of the reflex angle marked with the question mark?',
      fig: {
        view: [-3.3, -1.9, 3.8, 2.4],
        elems: [
          { t: 'seg', a: [0, 0], b: [3, 0] },
          { t: 'seg', a: [0, 0], b: [-2.72, 1.27] },
          { t: 'point', p: [0, 0], label: 'K', dx: 8, dy: 14 },
          { t: 'angle', at: [0, 0], from: [3, 0], to: [-2.72, 1.27], r: 0.5, label: '155' },
          { t: 'arc', c: [0, 0], r: 1.0, from: 155, to: 360 },
          { t: 'label', p: [-0.28, -1.27], text: '?' },
        ],
      },
      choices: ['$205^\\circ$', '$335^\\circ$', '$25^\\circ$', '$155^\\circ$'],
      answer: 0,
      solution:
        'The marked angle and the reflex angle together sweep the whole turn, so the reflex angle is $360^\\circ - 155^\\circ = 205^\\circ$ ✓. Check a second, independent way by breaking the long journey at the half-turn mark: from the first ray it takes $180^\\circ - 155^\\circ = 25^\\circ$ to reach the ray opposite the second one, and a further $180^\\circ$ to finish, giving $25^\\circ + 180^\\circ = 205^\\circ$ ✓. Both routes agree, and $205^\\circ$ is just past a straight angle, which matches a picture whose two rays are nearly in a line. (The choice $25^\\circ$ is TAKING THE SUPPLEMENT ✗; $335^\\circ$ is SUBTRACTING THE SUPPLEMENT FROM THE FULL TURN, $360^\\circ - 25^\\circ$ ✗; $155^\\circ$ is REPEATING THE GIVEN ANGLE ✗.)',
    },
  ],
  // s6 — degrees swept by the minute hand alone (may exceed 180).
  [
    {
      q: 'Through how many degrees does the minute hand of a clock turn in $25$ minutes?',
      fig: {
        view: [-3.5, -3.5, 3.5, 3.5],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'label', p: [0, 2.5], text: '12' },
          { t: 'label', p: [2.5, 0], text: '3' },
          { t: 'label', p: [0, -2.5], text: '6' },
          { t: 'label', p: [-2.5, 0], text: '9' },
          { t: 'seg', a: [0, 0], b: [0, 2.6] },
          { t: 'seg', a: [0, 0], b: [1.3, -2.25] },
          { t: 'arc', c: [0, 0], r: 1.0, from: -60, to: 90 },
        ],
      },
      choices: ['$25^\\circ$', '$150^\\circ$', '$210^\\circ$', '$300^\\circ$'],
      answer: 1,
      solution:
        'The minute hand covers a full $360^\\circ$ in $60$ minutes, which is $\\frac{360}{60} = 6^\\circ$ per minute, so in $25$ minutes it turns $25 \\times 6^\\circ = 150^\\circ$ ✓. Check a second, independent way by counting the numbers on the dial instead of the minutes. The gap between one number and the next is $\\frac{360^\\circ}{12} = 30^\\circ$ and takes $5$ minutes, and $25$ minutes is $25 \\div 5 = 5$ of those gaps, so the sweep is $5 \\times 30^\\circ = 150^\\circ$ ✓. (The choice $25^\\circ$ is READING MINUTES AS DEGREES, as if the hand crawled $1^\\circ$ a minute ✗; $210^\\circ$ is COUNTING THE MINUTES LEFT IN THE HOUR, $35 \\times 6^\\circ$ ✗; $300^\\circ$ is DOUBLING THE RATE to $12^\\circ$ per minute ✗.)',
    },
    {
      q: 'A cake bakes for $40$ minutes. Through how many degrees does the minute hand of the kitchen clock turn while it bakes?',
      fig: {
        view: [-3.5, -3.5, 3.5, 3.5],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'label', p: [0, 2.5], text: '12' },
          { t: 'label', p: [2.5, 0], text: '3' },
          { t: 'label', p: [0, -2.5], text: '6' },
          { t: 'label', p: [-2.5, 0], text: '9' },
          { t: 'seg', a: [0, 0], b: [0, 2.6] },
          { t: 'seg', a: [0, 0], b: [-2.25, -1.3] },
          { t: 'arc', c: [0, 0], r: 1.2, from: -150, to: 90 },
        ],
      },
      choices: ['$120^\\circ$', '$40^\\circ$', '$240^\\circ$', '$480^\\circ$'],
      answer: 2,
      solution:
        'At $6^\\circ$ per minute the hand turns $40 \\times 6^\\circ = 240^\\circ$ ✓ — more than a straight angle, which is fine here, because the question asks how far the hand TURNED, not the angle between two hands. Check a second, independent way with fractions of a turn: $40$ minutes is $\\frac{40}{60} = \\frac{2}{3}$ of an hour, and $\\frac{2}{3}$ of $360^\\circ$ is $\\frac{2 \\times 360}{3} = 240^\\circ$ ✓. Counting dial gaps agrees too: $40 \\div 5 = 8$ gaps at $30^\\circ$ each. (The choice $40^\\circ$ is READING MINUTES AS DEGREES ✗; $120^\\circ$ is COUNTING THE MINUTES LEFT IN THE HOUR, $20 \\times 6^\\circ$ ✗; $480^\\circ$ is DOUBLING THE RATE, and it is more than a whole turn, which no hand can manage in under an hour ✗.)',
    },
    {
      q: 'A song lasts $12$ minutes. Through how many degrees does the minute hand of a wall clock turn while the song plays?',
      fig: {
        view: [-3.5, -3.5, 3.5, 3.5],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'label', p: [0, 2.5], text: '12' },
          { t: 'label', p: [2.5, 0], text: '3' },
          { t: 'label', p: [0, -2.5], text: '6' },
          { t: 'label', p: [-2.5, 0], text: '9' },
          { t: 'seg', a: [0, 0], b: [0, 2.6] },
          { t: 'seg', a: [0, 0], b: [2.47, 0.8] },
          { t: 'arc', c: [0, 0], r: 1.4, from: 18, to: 90 },
        ],
      },
      choices: ['$288^\\circ$', '$72^\\circ$', '$12^\\circ$', '$144^\\circ$'],
      answer: 1,
      solution:
        'The minute hand moves $6^\\circ$ each minute, so $12$ minutes buys $12 \\times 6^\\circ = 72^\\circ$ ✓. Check a second, independent way using fractions of the dial: $12$ minutes is $\\frac{12}{60} = \\frac{1}{5}$ of an hour, and $\\frac{1}{5}$ of $360^\\circ$ is $360 \\div 5 = 72^\\circ$ ✓. That $\\frac{1}{5}$ is worth remembering — five songs of this length would carry the hand once around. (The choice $12^\\circ$ is READING MINUTES AS DEGREES ✗; $288^\\circ$ is COUNTING THE MINUTES LEFT IN THE HOUR, $48 \\times 6^\\circ$ ✗; $144^\\circ$ is DOUBLING THE RATE to $12^\\circ$ per minute ✗.)',
    },
  ],
  // s7 — bisector algebra: set the halves equal, then report the WHOLE angle.
  [
    {
      q: 'Ray $\\overrightarrow{QT}$ bisects $\\angle PQR$. If $\\angle PQT = 5x - 6$ and $\\angle TQR = 3x + 20$ (in degrees), what is $\\angle PQR$?',
      choices: ['$13^\\circ$', '$59^\\circ$', '$118^\\circ$', '$236^\\circ$'],
      answer: 2,
      solution:
        'A bisector makes the two halves equal, so $5x - 6 = 3x + 20$; subtracting $3x$ from both sides gives $2x - 6 = 20$, then $2x = 26$ and $x = 13$. Each half is $5(13) - 6 = 59^\\circ$, and the whole angle is $2 \\times 59^\\circ = 118^\\circ$ ✓. Check a second, independent way by never computing a half at all: the whole is the sum of its two parts, $(5x - 6) + (3x + 20) = 8x + 14$, and at $x = 13$ that is $8(13) + 14 = 104 + 14 = 118^\\circ$ ✓. The two routes reach $118^\\circ$ by different arithmetic, and the other expression confirms the split: $3(13) + 20 = 59^\\circ$ ✓. (The choice $13^\\circ$ is STOPPING AT x, which is a step and not an angle ✗; $59^\\circ$ is ANSWERING WITH ONE HALF ✗; $236^\\circ$ is DOUBLING TWICE, doubling $118^\\circ$ once more ✗.)',
    },
    {
      q: 'Ray $\\overrightarrow{BF}$ bisects $\\angle ABC$. If $\\angle ABF = 4x + 7$ and $\\angle FBC = 3x + 23$ (in degrees), what is $\\angle ABC$?',
      choices: ['$142^\\circ$', '$71^\\circ$', '$16^\\circ$', '$284^\\circ$'],
      answer: 0,
      solution:
        'The bisector forces the halves to match: $4x + 7 = 3x + 23$, so $x = 16$. One half is $4(16) + 7 = 71^\\circ$, and the whole is $2 \\times 71^\\circ = 142^\\circ$ ✓. Check a second, independent way by adding the parts before substituting: the whole angle is $(4x + 7) + (3x + 23) = 7x + 30$, and $7(16) + 30 = 112 + 30 = 142^\\circ$ ✓. Both routes agree, and the second expression checks the halving: $3(16) + 23 = 71^\\circ$ ✓, matching the first half exactly as a bisector demands. (The choice $16^\\circ$ is STOPPING AT x ✗; $71^\\circ$ is ANSWERING WITH ONE HALF when the question asks for the whole angle ✗; $284^\\circ$ is DOUBLING TWICE ✗.)',
    },
    {
      q: 'Ray $\\overrightarrow{NR}$ bisects $\\angle MNP$. If $\\angle MNR = 3x + 11$ and $\\angle RNP = 2x + 25$ (in degrees), what is $\\angle MNP$?',
      choices: ['$53^\\circ$', '$14^\\circ$', '$212^\\circ$', '$106^\\circ$'],
      answer: 3,
      solution:
        'Equal halves means $3x + 11 = 2x + 25$, so $x = 14$; each half is $3(14) + 11 = 53^\\circ$ and the whole angle is $2 \\times 53^\\circ = 106^\\circ$ ✓. Check a second, independent way by summing the two expressions first: the whole is $(3x + 11) + (2x + 25) = 5x + 36$, and $5(14) + 36 = 70 + 36 = 106^\\circ$ ✓. The other half confirms the equality: $2(14) + 25 = 53^\\circ$ ✓. Notice the whole angle is obtuse while each half is acute — a bisector always cuts an obtuse angle into two acute ones. (The choice $14^\\circ$ is STOPPING AT x ✗; $53^\\circ$ is ANSWERING WITH ONE HALF ✗; $212^\\circ$ is DOUBLING TWICE ✗.)',
    },
  ],
  // s8 — angle between the hands exactly on the hour.
  [
    {
      q: 'A clock shows exactly 4:00. What is the angle between its hour hand and its minute hand?',
      fig: {
        view: [-3.5, -3.5, 3.5, 3.5],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'label', p: [0, 2.5], text: '12' },
          { t: 'label', p: [2.5, 0], text: '3' },
          { t: 'label', p: [0, -2.5], text: '6' },
          { t: 'label', p: [-2.5, 0], text: '9' },
          { t: 'seg', a: [0, 0], b: [0, 2.6] },
          { t: 'seg', a: [0, 0], b: [1.56, -0.9] },
        ],
      },
      choices: ['$240^\\circ$', '$90^\\circ$', '$120^\\circ$', '$150^\\circ$'],
      answer: 2,
      solution:
        'On the hour the minute hand sits on the $12$ and the hour hand sits on the $4$. Each gap between neighboring numbers is $\\frac{360^\\circ}{12} = 30^\\circ$, and there are $4$ gaps from the $12$ to the $4$, so the hands are $4 \\times 30^\\circ = 120^\\circ$ apart ✓. Check a second, independent way with fractions of the dial: the hands are $4$ of the $12$ marks apart, which is $\\frac{4}{12} = \\frac{1}{3}$ of the way around, and $\\frac{1}{3}$ of $360^\\circ$ is $120^\\circ$ ✓. Because $120^\\circ$ is already less than $180^\\circ$, it is the short way and no adjustment is needed. (The choice $240^\\circ$ is GOING THE LONG WAY AROUND, the other $8$ gaps ✗; $90^\\circ$ is COUNTING ONE GAP TOO FEW ✗; $150^\\circ$ is COUNTING ONE GAP TOO MANY ✗.)',
    },
    {
      q: 'At exactly 5:00, what is the angle between the two hands of a clock?',
      fig: {
        view: [-3.5, -3.5, 3.5, 3.5],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'label', p: [0, 2.5], text: '12' },
          { t: 'label', p: [2.5, 0], text: '3' },
          { t: 'label', p: [0, -2.5], text: '6' },
          { t: 'label', p: [-2.5, 0], text: '9' },
          { t: 'seg', a: [0, 0], b: [0, 2.6] },
          { t: 'seg', a: [0, 0], b: [0.9, -1.56] },
        ],
      },
      choices: ['$150^\\circ$', '$210^\\circ$', '$120^\\circ$', '$180^\\circ$'],
      answer: 0,
      solution:
        'The minute hand is on the $12$ and the hour hand is on the $5$, which is $5$ gaps away. At $30^\\circ$ a gap that is $5 \\times 30^\\circ = 150^\\circ$, and since $150^\\circ < 180^\\circ$ this really is the shorter way around ✓. Check a second, independent way by measuring each hand from the $12$ and subtracting: the minute hand stands at $0^\\circ$, the hour hand at $5 \\times 30^\\circ = 150^\\circ$, so the gap between them is $150^\\circ - 0^\\circ = 150^\\circ$ ✓. The long way, $360^\\circ - 150^\\circ = 210^\\circ$, is bigger, so $150^\\circ$ wins. (The choice $210^\\circ$ is GOING THE LONG WAY AROUND ✗; $120^\\circ$ is COUNTING ONE GAP TOO FEW, stopping the hour hand at the $4$ ✗; $180^\\circ$ is COUNTING ONE GAP TOO MANY, pushing it to the $6$ ✗.)',
    },
    {
      q: 'A clock chimes at exactly 10:00. What is the angle between its two hands at that moment?',
      fig: {
        view: [-3.5, -3.5, 3.5, 3.5],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'label', p: [0, 2.5], text: '12' },
          { t: 'label', p: [2.5, 0], text: '3' },
          { t: 'label', p: [0, -2.5], text: '6' },
          { t: 'label', p: [-2.5, 0], text: '9' },
          { t: 'seg', a: [0, 0], b: [0, 2.6] },
          { t: 'seg', a: [0, 0], b: [-1.56, 0.9] },
        ],
      },
      choices: ['$300^\\circ$', '$30^\\circ$', '$90^\\circ$', '$60^\\circ$'],
      answer: 3,
      solution:
        'Counting forward from the $12$ to the $10$ takes $10$ gaps, which is $10 \\times 30^\\circ = 300^\\circ$ — but that is the long way round, so the angle between the hands is $360^\\circ - 300^\\circ = 60^\\circ$ ✓. Check a second, independent way by counting backwards instead, which avoids the subtraction entirely: from the $12$ going the other direction, the $10$ is only $2$ gaps away, giving $2 \\times 30^\\circ = 60^\\circ$ ✓. Both routes agree, and $60^\\circ$ is under $180^\\circ$, as the angle between two hands always must be. (The choice $300^\\circ$ is GOING THE LONG WAY AROUND ✗; $30^\\circ$ is COUNTING ONE GAP TOO FEW ✗; $90^\\circ$ is COUNTING ONE GAP TOO MANY ✗.)',
    },
  ],
  // s9 — angle between the hands at H:MM, hour-hand creep included.
  [
    {
      q: 'A clock reads 3:36. What is the angle between its hour hand and its minute hand?',
      fig: {
        view: [-3.5, -3.5, 3.5, 3.5],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'label', p: [0, 2.5], text: '12' },
          { t: 'label', p: [2.5, 0], text: '3' },
          { t: 'label', p: [0, -2.5], text: '6' },
          { t: 'label', p: [-2.5, 0], text: '9' },
          { t: 'seg', a: [0, 0], b: [-1.53, -2.1] },
          { t: 'seg', a: [0, 0], b: [1.71, -0.56] },
        ],
      },
      choices: ['$126^\\circ$', '$96^\\circ$', '$108^\\circ$', '$252^\\circ$'],
      answer: 2,
      solution:
        'Measure each hand from the $12$. Minute hand: $36 \\times 6^\\circ = 216^\\circ$. Hour hand: $3 \\times 30^\\circ = 90^\\circ$ at 3:00, plus $36$ minutes of creep at $0.5^\\circ$ a minute, which is $18^\\circ$, landing at $108^\\circ$. The gap is $216^\\circ - 108^\\circ = 108^\\circ$ ✓, already under $180^\\circ$. Check a second, independent way with relative speed, which never mentions the $12$ at all: at 3:00 the minute hand trails the hour hand by $90^\\circ$, and it closes that gap at $6^\\circ - 0.5^\\circ = 5.5^\\circ$ per minute. In $36$ minutes it gains $36 \\times 5.5^\\circ = 198^\\circ$, so it ends up $198^\\circ - 90^\\circ = 108^\\circ$ AHEAD of the hour hand ✓. (The choice $126^\\circ$ is FORGETTING THE HOUR HAND’S CREEP and leaving it parked on the $3$ ✗; $96^\\circ$ is ADVANCING THE HOUR HAND A WHOLE HOUR to the $4$ instead of creeping it $18^\\circ$ ✗; $252^\\circ$ is GOING THE LONG WAY AROUND ✗.)',
    },
    {
      q: 'At 1:20, what is the angle between the two hands of a clock?',
      fig: {
        view: [-3.5, -3.5, 3.5, 3.5],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'label', p: [0, 2.5], text: '12' },
          { t: 'label', p: [2.5, 0], text: '3' },
          { t: 'label', p: [0, -2.5], text: '6' },
          { t: 'label', p: [-2.5, 0], text: '9' },
          { t: 'seg', a: [0, 0], b: [2.25, -1.3] },
          { t: 'seg', a: [0, 0], b: [1.16, 1.38] },
        ],
      },
      choices: ['$80^\\circ$', '$90^\\circ$', '$60^\\circ$', '$280^\\circ$'],
      answer: 0,
      solution:
        'Minute hand: $20 \\times 6^\\circ = 120^\\circ$ from the $12$. Hour hand: $1 \\times 30^\\circ = 30^\\circ$ at 1:00, plus $20 \\times 0.5^\\circ = 10^\\circ$ of creep, so $40^\\circ$. The hands are $120^\\circ - 40^\\circ = 80^\\circ$ apart ✓. Check a second, independent way with relative speed: at 1:00 the minute hand is $30^\\circ$ behind the hour hand and gains on it at $5.5^\\circ$ per minute, so after $20$ minutes it has gained $20 \\times 5.5^\\circ = 110^\\circ$ and now leads by $110^\\circ - 30^\\circ = 80^\\circ$ ✓. The picture backs this up: the hour hand has drifted a third of the way from the $1$ toward the $2$. (The choice $90^\\circ$ is FORGETTING THE HOUR HAND’S CREEP ✗; $60^\\circ$ is ADVANCING THE HOUR HAND A WHOLE HOUR, all the way to the $2$ ✗; $280^\\circ$ is GOING THE LONG WAY AROUND ✗.)',
    },
    {
      q: 'A clock reads 4:48. How many degrees apart are its two hands?',
      fig: {
        view: [-3.5, -3.5, 3.5, 3.5],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'label', p: [0, 2.5], text: '12' },
          { t: 'label', p: [2.5, 0], text: '3' },
          { t: 'label', p: [0, -2.5], text: '6' },
          { t: 'label', p: [-2.5, 0], text: '9' },
          { t: 'seg', a: [0, 0], b: [-2.47, 0.8] },
          { t: 'seg', a: [0, 0], b: [1.06, -1.46] },
        ],
      },
      choices: ['$168^\\circ$', '$144^\\circ$', '$216^\\circ$', '$138^\\circ$'],
      answer: 1,
      solution:
        'Minute hand: $48 \\times 6^\\circ = 288^\\circ$ from the $12$. Hour hand: $4 \\times 30^\\circ = 120^\\circ$ at 4:00, plus $48 \\times 0.5^\\circ = 24^\\circ$ of creep, giving $144^\\circ$. The gap is $288^\\circ - 144^\\circ = 144^\\circ$ ✓, and since that is below $180^\\circ$ it is already the short way. Check a second, independent way with relative speed: at 4:00 the minute hand trails by $120^\\circ$ and gains $5.5^\\circ$ every minute, so in $48$ minutes it gains $48 \\times 5.5^\\circ = 264^\\circ$ and finishes $264^\\circ - 120^\\circ = 144^\\circ$ ahead ✓. A pleasing coincidence to notice: the hour hand happens to stand at $144^\\circ$ too, but that is its position, not the answer. (The choice $168^\\circ$ is FORGETTING THE HOUR HAND’S CREEP ✗; $138^\\circ$ is ADVANCING THE HOUR HAND A WHOLE HOUR to the $5$ ✗; $216^\\circ$ is GOING THE LONG WAY AROUND ✗.)',
    },
  ],
  // s10 — quarter-hour times, where the creep lands on a half degree.
  [
    {
      q: 'A clock reads 2:15. What is the angle between its two hands?',
      fig: {
        view: [-3.5, -3.5, 3.5, 3.5],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'label', p: [0, 2.5], text: '12' },
          { t: 'label', p: [2.5, 0], text: '3' },
          { t: 'label', p: [0, -2.5], text: '6' },
          { t: 'label', p: [-2.5, 0], text: '9' },
          { t: 'seg', a: [0, 0], b: [2.6, 0] },
          { t: 'seg', a: [0, 0], b: [1.66, 0.69] },
        ],
      },
      choices: ['$30^\\circ$', '$7.5^\\circ$', '$22.5^\\circ$', '$337.5^\\circ$'],
      answer: 2,
      solution:
        'At :15 the minute hand points straight at the $3$, which is $15 \\times 6^\\circ = 90^\\circ$ from the $12$. The hour hand started the hour at $2 \\times 30^\\circ = 60^\\circ$ and has crept $15 \\times 0.5^\\circ = 7.5^\\circ$, so it stands at $67.5^\\circ$. The hands are $90^\\circ - 67.5^\\circ = 22.5^\\circ$ apart ✓. Check a second, independent way by thinking about the gap the hour hand sits in. A quarter of an hour has gone by, so the hour hand is a quarter of the way from the $2$ to the $3$ — that is $\\frac{1}{4}$ of a $30^\\circ$ gap, or $7.5^\\circ$ past the $2$, leaving $30^\\circ - 7.5^\\circ = 22.5^\\circ$ of the gap still ahead of it, and the minute hand is sitting at the far end of that gap ✓. (The choice $30^\\circ$ is FORGETTING THE HOUR HAND’S CREEP ✗; $7.5^\\circ$ is USING ONLY THE CREEP and calling it the answer ✗; $337.5^\\circ$ is GOING THE LONG WAY AROUND ✗.)',
    },
    {
      q: 'At 8:15, what is the angle between the hour hand and the minute hand of a clock?',
      fig: {
        view: [-3.5, -3.5, 3.5, 3.5],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'label', p: [0, 2.5], text: '12' },
          { t: 'label', p: [2.5, 0], text: '3' },
          { t: 'label', p: [0, -2.5], text: '6' },
          { t: 'label', p: [-2.5, 0], text: '9' },
          { t: 'seg', a: [0, 0], b: [2.6, 0] },
          { t: 'seg', a: [0, 0], b: [-1.66, -0.69] },
        ],
      },
      choices: ['$157.5^\\circ$', '$202.5^\\circ$', '$150^\\circ$', '$142.5^\\circ$'],
      answer: 0,
      solution:
        'Minute hand: $15 \\times 6^\\circ = 90^\\circ$ from the $12$. Hour hand: $8 \\times 30^\\circ = 240^\\circ$ at 8:00, plus $15 \\times 0.5^\\circ = 7.5^\\circ$ of creep, so $247.5^\\circ$. The hands are $247.5^\\circ - 90^\\circ = 157.5^\\circ$ apart, and that is under $180^\\circ$, so it is the short way ✓. Check a second, independent way with relative speed: at 8:00 the hour hand leads the minute hand by $240^\\circ$ the forward way, and the minute hand claws back $5.5^\\circ$ each minute, so after $15$ minutes the lead is $240^\\circ - 15 \\times 5.5^\\circ = 240^\\circ - 82.5^\\circ = 157.5^\\circ$ ✓. (The choice $150^\\circ$ is FORGETTING THE HOUR HAND’S CREEP ✗; $142.5^\\circ$ is SUBTRACTING THE CREEP INSTEAD OF ADDING, dragging the hour hand backwards toward the $8$ ✗; $202.5^\\circ$ is GOING THE LONG WAY AROUND ✗.)',
    },
    {
      q: 'A clock reads 5:45. What is the angle between its two hands?',
      fig: {
        view: [-3.5, -3.5, 3.5, 3.5],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'label', p: [0, 2.5], text: '12' },
          { t: 'label', p: [2.5, 0], text: '3' },
          { t: 'label', p: [0, -2.5], text: '6' },
          { t: 'label', p: [-2.5, 0], text: '9' },
          { t: 'seg', a: [0, 0], b: [-2.6, 0] },
          { t: 'seg', a: [0, 0], b: [0.23, -1.78] },
        ],
      },
      choices: ['$120^\\circ$', '$97.5^\\circ$', '$262.5^\\circ$', '$142.5^\\circ$'],
      answer: 1,
      solution:
        'Minute hand: $45 \\times 6^\\circ = 270^\\circ$ from the $12$, pointing straight at the $9$. Hour hand: $5 \\times 30^\\circ = 150^\\circ$ at 5:00, plus $45 \\times 0.5^\\circ = 22.5^\\circ$ of creep, giving $172.5^\\circ$. The gap is $270^\\circ - 172.5^\\circ = 97.5^\\circ$ ✓. Check a second, independent way with relative speed: at 5:00 the minute hand trails by $150^\\circ$, and in $45$ minutes it gains $45 \\times 5.5^\\circ = 247.5^\\circ$, so it finishes $247.5^\\circ - 150^\\circ = 97.5^\\circ$ ahead ✓. The figure agrees — three quarters of the hour has gone by, so the hour hand is three quarters of the way from the $5$ to the $6$, just shy of the bottom of the dial. (The choice $120^\\circ$ is FORGETTING THE HOUR HAND’S CREEP ✗; $142.5^\\circ$ is SUBTRACTING THE CREEP INSTEAD OF ADDING ✗; $262.5^\\circ$ is GOING THE LONG WAY AROUND ✗.)',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 2,
  sections: {
    '2.2': s22,
  },
}
