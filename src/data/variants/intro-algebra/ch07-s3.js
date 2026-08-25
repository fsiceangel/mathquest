// Introduction to Algebra chapter 7 — variations for the 12 CHALLENGE problems.
// All problems and solutions are original MathQuest content.
//
// House rules for this file (the same ones the sections 7.1/7.2 file held to):
//  - Every key was re-derived from the question text alone, then checked FORWARD
//    through the story (recompute the constant, or the rate, from the answer and
//    confirm it reproduces the given data), not by re-reading the solution.
//  - Every story was CLASSIFIED before the numbers were chosen. A fixed job split
//    among workers or machines is INVERSE; a steady rate running for a stretch of
//    time is DIRECT; a fixed distance or a fixed tank makes rate and time INVERSE;
//    meshed gears trade teeth against turns, so they are INVERSE too.
//  - Combined-work items add RATES, never times, and every combined answer is
//    faster than either worker alone; every solo answer is slower than the team.
//  - Every solution names the constant out loud — k = y/x for direct, k = xy for
//    inverse, k = z/(xy) or k = zy^2/x for the joint and mixed rules — and shows
//    it holding for BOTH the given data and the answer.
//  - Every distractor is a named mistake: the wrong model, scaling for only one of
//    two changes, adding the two scale factors instead of multiplying them,
//    dropping a square, stopping at the constant, adding or subtracting times
//    where only rates may be combined, or answering the question next door.
//  - No two choices in an item share a VALUE (checked numerically, not as text).
//  - Story sanity: workers, machines, pumps and gear teeth come out whole and
//    positive, every time and speed is positive, and money lands on whole cents.

const challenge = [
  // c1 — direct proportion run BACKWARDS: find x from a given y
  [
    {
      q: 'Suppose $y$ is directly proportional to $x$, and $y = 20$ when $x = 12$. For what value of $x$ is $y = 30$?',
      choices: ['$18$', '$50$', '$8$', '$22$'],
      answer: 0,
      solution:
        'For direct proportion the constant is the fixed RATIO: $k = \\frac{y}{x} = \\frac{20}{12} = \\frac{5}{3}$, so the rule is $y = \\frac{5}{3}x$. The question gives $y$ and wants $x$, so divide instead of multiply: $x = 30 \\div \\frac{5}{3} = 30 \\times \\frac{3}{5} = 18$. The constant holds on BOTH pairs: $\\frac{20}{12} = \\frac{5}{3}$ and $\\frac{30}{18} = \\frac{5}{3}$. ✓ (The choice $50$ runs the rule forwards, computing $y$ when $x = 30$; the choice $8$ uses the INVERSE model with $k = xy = 240$ and computes $\\frac{240}{30}$, which shrinks $x$ while $y$ grows; the choice $22$ adds $10$ to $x$ because $y$ climbed by $10$, and proportion scales rather than adds.)',
    },
    {
      q: 'A press runs at one steady rate and turns out $84$ posters in $6$ minutes. How many minutes does it need to turn out $210$ posters?',
      choices: ['$2.4$ minutes', '$35$ minutes', '$15$ minutes', '$2940$ minutes'],
      answer: 2,
      solution:
        'A steady rate running for a stretch of time is DIRECT: posters and minutes keep a constant ratio, $k = \\frac{84}{6} = 14$ posters per minute. To print $210$ posters takes $\\frac{210}{14} = 15$ minutes. The rate holds on both pairs: $\\frac{84}{6} = 14$ and $\\frac{210}{15} = 14$. ✓ (The choice $2.4$ uses the INVERSE model, treating $xy = 504$ as the constant and computing $\\frac{504}{210}$ — that would mean printing more posters takes less time; the choice $35$ divides by the $6$ minutes instead of by the rate of $14$ posters per minute; the choice $2940$ multiplies by $14$ when the question calls for dividing.)',
    },
    {
      q: 'Suppose $y$ is directly proportional to $x$, and $y = 18$ when $x = 48$. For what value of $x$ is $y = 30$?',
      choices: ['$11.25$', '$28.8$', '$60$', '$80$'],
      answer: 3,
      solution:
        'The constant ratio is $k = \\frac{y}{x} = \\frac{18}{48} = \\frac{3}{8}$, so $y = \\frac{3}{8}x$. Solve $30 = \\frac{3}{8}x$: $x = 30 \\times \\frac{8}{3} = 80$. Check the constant on both pairs: $\\frac{18}{48} = \\frac{3}{8}$ and $\\frac{30}{80} = \\frac{3}{8}$. ✓ Here $k$ is less than $1$, so $x$ must come out bigger than $y$. (The choice $11.25$ runs the rule forwards, computing $y$ at $x = 30$; the choice $28.8$ uses the INVERSE model with $k = xy = 864$, computing $\\frac{864}{30}$; the choice $60$ adds $12$ to $x$ because $y$ rose by $12$.)',
    },
  ],
  // c2 — inverse proportion run BACKWARDS: find x from a given y
  [
    {
      q: 'Suppose $y$ is inversely proportional to $x$, and $y = 15$ when $x = 8$. For what value of $x$ is $y = 24$?',
      choices: ['$5$', '$12.8$', '$17$', '$360$'],
      answer: 0,
      solution:
        'For inverse proportion the constant is the PRODUCT: $k = xy = 8 \\times 15 = 120$, so $y = \\frac{120}{x}$. For $y = 24$: $x = \\frac{120}{24} = 5$. The product holds on BOTH pairs: $8 \\times 15 = 120$ and $5 \\times 24 = 120$. ✓ Since $y$ grew, $x$ had to shrink. (The choice $12.8$ uses the DIRECT model, with $k = \\frac{15}{8} = 1.875$ and $\\frac{24}{1.875} = 12.8$ — that sends $x$ up alongside $y$; the choice $17$ adds $9$ to $x$ because $y$ rose by $9$, which moves $x$ the wrong way as well; the choice $360$ multiplies the two $y$-values, but the constant is one $x$ times its own $y$.)',
    },
    {
      q: 'Two meshed gears turn together so that (number of teeth) $\\times$ (number of turns) is the same for both. One gear has $28$ teeth and makes $45$ turns. How many teeth does the meshed gear have if it makes $63$ turns?',
      choices: ['$39.2$ teeth', '$20$ teeth', '$46$ teeth', '$1260$ teeth'],
      answer: 1,
      solution:
        'Meshed gears pass the same number of teeth, so teeth and turns are INVERSELY proportional with constant product $k = xy = 28 \\times 45 = 1260$. The gear making $63$ turns has $\\frac{1260}{63} = 20$ teeth — whole, as a gear must be. Both pairs give the same product: $28 \\times 45 = 1260$ and $20 \\times 63 = 1260$. ✓ The gear that spins more often is the smaller one. (The choice $39.2$ uses the DIRECT model, $28 \\times \\frac{63}{45}$, which makes the faster-spinning gear the bigger one — and gives a fractional number of teeth; the choice $46$ adds $18$ teeth because the gear makes $18$ more turns; the choice $1260$ stops at the constant itself.)',
    },
    {
      q: 'Suppose $y$ is inversely proportional to $x$, and $y = 6$ when $x = 15$. For what value of $x$ is $y = 4$?',
      choices: ['$10$', '$13$', '$22.5$', '$90$'],
      answer: 2,
      solution:
        'The constant is the product: $k = xy = 15 \\times 6 = 90$, so $y = \\frac{90}{x}$. For $y = 4$: $x = \\frac{90}{4} = 22.5$. Both pairs agree: $15 \\times 6 = 90$ and $22.5 \\times 4 = 90$. ✓ This time $y$ fell, so $x$ had to rise — and an inverse rule is not obliged to give whole numbers. (The choice $10$ uses the DIRECT model, with $k = \\frac{6}{15} = 0.4$ and $\\frac{4}{0.4} = 10$, pulling $x$ down with $y$; the choice $13$ subtracts $2$ from $x$ because $y$ dropped by $2$; the choice $90$ stops at the constant.)',
    },
  ],
  // c3 — direct proportion to the SQUARE, solved backwards for x
  [
    {
      q: 'Suppose $y$ is directly proportional to $x^2$, and $y = 20$ when $x = 2$. For what positive value of $x$ is $y = 245$?',
      choices: ['$24.5$', '$7$', '$49$', '$3.5$'],
      answer: 1,
      solution:
        'The rule is $y = kx^2$, so the constant is $k = \\frac{y}{x^2} = \\frac{20}{4} = 5$. Solve $245 = 5x^2$: $x^2 = 49$, so $x = 7$. The constant holds on both pairs: $\\frac{20}{2^2} = 5$ and $\\frac{245}{7^2} = 5$. ✓ (The choice $24.5$ scales $x$ by the full factor $\\frac{245}{20} = 12.25$, as if $y$ tracked $x$ itself rather than its square; the choice $49$ stops at $x^2$ and never takes the square root; the choice $3.5$ reports the scaling factor $\\sqrt{12.25}$ instead of the new $x$, forgetting to multiply it by the original $x = 2$.)',
    },
    {
      q: 'The energy of a rolling cart is directly proportional to the square of its speed. At $4$ metres per second the cart carries $48$ joules of energy. At what speed does it carry $300$ joules?',
      choices: ['$1.6$ m/s', '$25$ m/s', '$10$ m/s', '$100$ m/s'],
      answer: 2,
      solution:
        'Write the rule as $E = kv^2$, so $k = \\frac{E}{v^2} = \\frac{48}{16} = 3$ joules per (m/s)$^2$. Solve $300 = 3v^2$: $v^2 = 100$, so $v = 10$ m/s. The constant holds on both pairs: $\\frac{48}{4^2} = 3$ and $\\frac{300}{10^2} = 3$. ✓ (The choice $25$ scales the speed by the full energy factor $\\frac{300}{48} = 6.25$, ignoring the square; the choice $100$ stops at $v^2$; the choice $1.6$ uses the INVERSE-square model $E = \\frac{k}{v^2}$ with $k = 48 \\times 16 = 768$, which has a faster cart carrying less energy.)',
    },
    {
      q: 'Suppose $y$ is directly proportional to $x^2$, and $y = 63$ when $x = 3$. For what positive value of $x$ is $y = 28$?',
      choices: ['$\\frac{4}{3}$', '$4$', '$4.5$', '$2$'],
      answer: 3,
      solution:
        'From $y = kx^2$: $k = \\frac{63}{9} = 7$, so $y = 7x^2$. Solve $28 = 7x^2$: $x^2 = 4$, so the positive value is $x = 2$. Check the constant on both pairs: $\\frac{63}{3^2} = 7$ and $\\frac{28}{2^2} = 7$. ✓ Here $y$ shrank, so $x$ shrank too — but only by the square root of the factor. (The choice $\\frac{4}{3}$ scales $x$ by the full factor $\\frac{28}{63}$, dropping the square; the choice $4$ stops at $x^2$; the choice $4.5$ uses the INVERSE-square model with $k = yx^2 = 567$, sending $x$ up while $y$ came down.)',
    },
  ],
  // c4 — mixed rule: direct with one variable, inverse with the SQUARE of another
  [
    {
      q: 'Suppose $z$ varies directly with $x$ and inversely with the SQUARE of $y$, and $z = 12$ when $x = 3$ and $y = 2$. What is $z$ when $x = 8$ and $y = 4$?',
      choices: ['$8$', '$16$', '$32$', '$128$'],
      answer: 0,
      solution:
        'The rule is $z = \\frac{kx}{y^2}$, so the constant is $k = \\frac{zy^2}{x} = \\frac{12 \\times 4}{3} = 16$. Then $z = \\frac{16 \\times 8}{4^2} = \\frac{128}{16} = 8$. Check the constant on both data sets: $\\frac{12 \\times 2^2}{3} = 16$ and $\\frac{8 \\times 4^2}{8} = 16$. ✓ ($x$ grew, but $y^2$ grew four times faster, so $z$ came down.) (The choice $16$ forgets to square $y$, using $z = \\frac{kx}{y}$ with $k = 8$; the choice $32$ scales only for the change in $x$, $12 \\times \\frac{8}{3}$, ignoring $y$ entirely; the choice $128$ makes $y$ DIRECT too, using $z = kxy^2$ with $k = 1$.)',
    },
    {
      q: 'The safe load of a shelf varies directly with its thickness and inversely with the square of its length. A shelf $3$ cm thick and $2$ m long holds $60$ kg. How much does a shelf $4$ cm thick and $4$ m long hold?',
      choices: ['$40$ kg', '$20$ kg', '$80$ kg', '$320$ kg'],
      answer: 1,
      solution:
        'The rule is $L = \\frac{kt}{\\ell^2}$, so $k = \\frac{L\\ell^2}{t} = \\frac{60 \\times 4}{3} = 80$. Then $L = \\frac{80 \\times 4}{4^2} = \\frac{320}{16} = 20$ kg. The constant checks out on both shelves: $\\frac{60 \\times 2^2}{3} = 80$ and $\\frac{20 \\times 4^2}{4} = 80$. ✓ The thicker board helps, but doubling the length divides the strength by $4$, so the net effect is a weaker shelf. (The choice $40$ drops the square, using $\\frac{kt}{\\ell}$ with $k = 40$; the choice $80$ scales only for the extra thickness, $60 \\times \\frac{4}{3}$; the choice $320$ treats length as DIRECT as well, using $k t \\ell^2$ with $k = 5$.)',
    },
    {
      q: 'Suppose $z$ varies directly with the SQUARE of $x$ and inversely with $y$, and $z = 18$ when $x = 3$ and $y = 4$. What is $z$ when $x = 6$ and $y = 8$?',
      choices: ['$9$', '$18$', '$72$', '$36$'],
      answer: 3,
      solution:
        'This time the square sits upstairs: $z = \\frac{kx^2}{y}$, so $k = \\frac{zy}{x^2} = \\frac{18 \\times 4}{9} = 8$. Then $z = \\frac{8 \\times 36}{8} = 36$. Check both data sets against the constant: $\\frac{18 \\times 4}{3^2} = 8$ and $\\frac{36 \\times 8}{6^2} = 8$. ✓ (Doubling $x$ multiplies $x^2$ by $4$, and doubling $y$ halves the result, for a net factor of $2$.) (The choice $18$ forgets the square, using $\\frac{kx}{y}$ with $k = 24$ and landing back on the starting value; the choice $72$ scales only for $x$, ignoring the bigger $y$; the choice $9$ swaps the roles, using $\\frac{ky}{x^2}$ with $k = 40.5$.)',
    },
  ],
  // c5 — combined work: subtract RATES to recover a partner's solo time
  [
    {
      q: 'Alone, Rosa would need $15$ hours to rebuild a stone wall. With a neighbour helping, the two finish in $6$ hours. How long would the neighbour need alone?',
      choices: ['$9$ hours', '$10$ hours', '$12$ hours', '$21$ hours'],
      answer: 1,
      solution:
        'Rates add, times do not. Together the pair works at $\\frac{1}{6}$ of the wall per hour and Rosa supplies $\\frac{1}{15}$, so the neighbour supplies $\\frac{1}{6} - \\frac{1}{15} = \\frac{5}{30} - \\frac{2}{30} = \\frac{3}{30} = \\frac{1}{10}$ of the wall per hour — that is $10$ hours alone. Check forward: $\\frac{1}{15} + \\frac{1}{10} = \\frac{2}{30} + \\frac{3}{30} = \\frac{5}{30} = \\frac{1}{6}$. ✓ And $10$ hours is longer than the $6$-hour team time, as any solo time must be. (The choice $9$ subtracts the times, $15 - 6$; the choice $21$ adds them; the choice $12$ assumes the two work equally and doubles the team time.)',
    },
    {
      q: 'Two hoses together fill a paddling pool in $9$ minutes. The wide hose alone would fill it in $12$ minutes. How long would the narrow hose alone take?',
      choices: ['$3$ minutes', '$18$ minutes', '$36$ minutes', '$21$ minutes'],
      answer: 2,
      solution:
        'Work in pools per minute. The pair fills $\\frac{1}{9}$ and the wide hose fills $\\frac{1}{12}$, so the narrow hose fills $\\frac{1}{9} - \\frac{1}{12} = \\frac{4}{36} - \\frac{3}{36} = \\frac{1}{36}$ of the pool per minute — $36$ minutes alone. Check forward: $\\frac{1}{12} + \\frac{1}{36} = \\frac{3}{36} + \\frac{1}{36} = \\frac{4}{36} = \\frac{1}{9}$. ✓ The narrow hose is the slow one, so its solo time is the longest number in sight. (The choice $3$ subtracts times, $12 - 9$, and would make the narrow hose faster than the two together — impossible; the choice $21$ adds the times; the choice $18$ doubles the team time, which assumes the hoses match.)',
    },
    {
      q: 'Two friends together clear a driveway in $10$ minutes. The first works exactly three times as fast as the second. How long would the SLOWER friend need alone?',
      choices: ['$13\\frac{1}{3}$ minutes', '$20$ minutes', '$30$ minutes', '$40$ minutes'],
      answer: 3,
      solution:
        'Let the slower friend clear $r$ of the driveway per minute; the faster one clears $3r$. Rates add, so $r + 3r = 4r = \\frac{1}{10}$, giving $r = \\frac{1}{40}$ — the slower friend needs $40$ minutes alone. Check forward: $\\frac{1}{40} + \\frac{3}{40} = \\frac{4}{40} = \\frac{1}{10}$. ✓ (The choice $13\\frac{1}{3}$ is the FASTER friend’s solo time, from $3r = \\frac{3}{40}$ — the question asked for the other one; the choice $30$ multiplies the team time by $3$, but the $3$ compares the two RATES, not a time to the team time; the choice $20$ doubles the team time, which is the answer for two equally fast helpers.)',
    },
  ],
  // c6 — fills and drains together: net rate, then flip it
  [
    {
      q: 'Pipe A fills a vat in $4$ hours, pipe B fills it in $6$ hours, and an open drain empties a full vat in $12$ hours. With all three running and the vat empty, how long until it is full?',
      choices: ['$3$ hours', '$2$ hours', '$2.4$ hours', '$22$ hours'],
      answer: 0,
      solution:
        'Fills count positive, the drain counts negative, and only RATES may be combined: $\\frac{1}{4} + \\frac{1}{6} - \\frac{1}{12} = \\frac{3}{12} + \\frac{2}{12} - \\frac{1}{12} = \\frac{4}{12} = \\frac{1}{3}$ of the vat per hour. The net rate is positive, so the vat fills in $1 \\div \\frac{1}{3} = 3$ hours. Check forward: in $3$ hours A adds $\\frac{3}{4}$, B adds $\\frac{1}{2}$, the drain removes $\\frac{1}{4}$, and $\\frac{3}{4} + \\frac{1}{2} - \\frac{1}{4} = 1$ whole vat. ✓ (The choice $2$ counts the drain as a third filling pipe; the choice $2.4$ ignores the drain altogether; the choice $22$ adds the three times, and times never combine.)',
    },
    {
      q: 'Grain pours into a silo through two chutes and runs out through one gate. The first chute alone fills the silo in $6$ hours, the second in $9$ hours, and the open gate alone empties a full silo in $18$ hours. With everything open and the silo empty, how long until it is full?',
      choices: ['$3$ hours', '$4.5$ hours', '$3.6$ hours', '$33$ hours'],
      answer: 1,
      solution:
        'Net rate $= \\frac{1}{6} + \\frac{1}{9} - \\frac{1}{18} = \\frac{3}{18} + \\frac{2}{18} - \\frac{1}{18} = \\frac{4}{18} = \\frac{2}{9}$ of the silo per hour, so the silo fills in $1 \\div \\frac{2}{9} = 4.5$ hours. Check forward: in $4.5$ hours the chutes add $\\frac{4.5}{6} + \\frac{4.5}{9} = 0.75 + 0.5 = 1.25$ silos and the gate removes $\\frac{4.5}{18} = 0.25$, leaving exactly $1$. ✓ (The choice $3$ treats the gate as a third chute; the choice $3.6$ ignores the gate; the choice $33$ adds the three times.)',
    },
    {
      q: 'With pipe A, pipe B and an open drain all running, an empty cistern fills in $3$ hours. Pipe A alone fills the cistern in $8$ hours, and the open drain alone empties a full cistern in $24$ hours. How long would pipe B alone take to fill it?',
      choices: ['$4.8$ hours', '$5$ hours', '$4$ hours', '$6$ hours'],
      answer: 2,
      solution:
        'The net rate is $\\frac{1}{3}$ of the cistern per hour, and it is built from A, B and the drain: $\\frac{1}{8} + B - \\frac{1}{24} = \\frac{1}{3}$. So $B = \\frac{1}{3} - \\frac{1}{8} + \\frac{1}{24} = \\frac{8}{24} - \\frac{3}{24} + \\frac{1}{24} = \\frac{6}{24} = \\frac{1}{4}$ — pipe B alone takes $4$ hours. Check forward: $\\frac{1}{8} + \\frac{1}{4} - \\frac{1}{24} = \\frac{3}{24} + \\frac{6}{24} - \\frac{1}{24} = \\frac{8}{24} = \\frac{1}{3}$. ✓ (The choice $4.8$ leaves the drain out of the accounting, computing $\\frac{1}{3} - \\frac{1}{8}$; the choice $6$ subtracts the drain’s rate when moving it to the other side instead of adding it back; the choice $5$ subtracts times, $8 - 3$.)',
    },
  ],
  // c7 — two travellers closing a gap: who covers what
  [
    {
      q: 'Two cyclists set out at the same moment from opposite ends of an $84$-mile trail and ride toward each other, one at $16$ mph and the other at $12$ mph. How many miles has the SLOWER cyclist covered when they meet?',
      choices: ['$48$ miles', '$42$ miles', '$63$ miles', '$36$ miles'],
      answer: 3,
      solution:
        'Riding toward each other, both cyclists eat into the gap, so it closes at $16 + 12 = 28$ mph and they meet after $\\frac{84}{28} = 3$ hours. The slower cyclist covers $12 \\times 3 = 36$ miles. Check forward: the faster one covers $16 \\times 3 = 48$ miles, and $36 + 48 = 84$. ✓ (The choice $48$ is the FASTER cyclist’s share — the question asked for the other one; the choice $42$ splits the trail evenly, but the slower rider must earn the smaller share; the choice $63$ divides the whole trail by $16$ as if only one rider closed the gap, then applies that $5.25$ hours to the slower speed.)',
    },
    {
      q: 'Two hikers start $45$ km apart on a straight path and walk toward each other, one at $6$ km/h and the other at $4$ km/h. How much FARTHER has the faster hiker walked when they meet?',
      choices: ['$9$ km', '$18$ km', '$22.5$ km', '$27$ km'],
      answer: 0,
      solution:
        'The gap closes at $6 + 4 = 10$ km/h, so they meet after $\\frac{45}{10} = 4.5$ hours. The faster hiker covers $6 \\times 4.5 = 27$ km and the slower one $4 \\times 4.5 = 18$ km, so the faster hiker is ahead by $27 - 18 = 9$ km. Check forward: $27 + 18 = 45$ km, the whole path. ✓ (Equivalently, the lead grows at the speed DIFFERENCE, $2$ km/h for $4.5$ hours.) (The choice $27$ is the faster hiker’s total distance rather than the gap between the two totals; the choice $18$ is the slower hiker’s total; the choice $22.5$ splits the path evenly, which would need equal speeds.)',
    },
    {
      q: 'Two trains leave stations $312$ miles apart at the same moment and travel toward each other. They meet $3$ hours later. If one train travels at $46$ mph, how fast is the other?',
      choices: ['$104$ mph', '$58$ mph', '$150$ mph', '$52$ mph'],
      answer: 1,
      solution:
        'Toward each other the gap closes at the SUM of the speeds, and it closed $312$ miles in $3$ hours, so that sum is $\\frac{312}{3} = 104$ mph. The other train runs at $104 - 46 = 58$ mph. Check forward: in $3$ hours the trains cover $46 \\times 3 = 138$ and $58 \\times 3 = 174$ miles, and $138 + 174 = 312$. ✓ (The choice $104$ stops at the combined closing speed and forgets to subtract the known train; the choice $150$ adds $46$ to that sum instead of subtracting; the choice $52$ assumes each train covers half the distance, $\\frac{156}{3}$, which is only true when the speeds match.)',
    },
  ],
  // c8 — same-direction chase: the gap closes at the DIFFERENCE
  [
    {
      q: 'A walker sets out along a path at $6$ km/h. Twenty minutes later a runner leaves the same spot along the same path at $9$ km/h. How long after the runner starts does the runner catch the walker?',
      choices: ['$8$ minutes', '$20$ minutes', '$40$ minutes', '$60$ minutes'],
      answer: 2,
      solution:
        'In $20$ minutes ($\\frac{1}{3}$ hour) the walker builds a lead of $6 \\times \\frac{1}{3} = 2$ km. Same direction, so the gap closes at the DIFFERENCE $9 - 6 = 3$ km/h, and the catch-up time is $\\frac{2}{3}$ hour $= 40$ minutes. Check forward: in $40$ minutes the runner covers $9 \\times \\frac{2}{3} = 6$ km, while the walker has been going for a full hour at $6$ km/h — also $6$ km. ✓ (The choice $8$ ADDS the speeds, which is the head-on rule, not the chase rule; the choice $60$ is the walker’s total time on the path, not the time after the runner starts; the choice $20$ assumes the runner needs exactly as long to erase the lead as the walker took to build it, which would require equal speeds.)',
    },
    {
      q: 'A tractor leaves a barn along a straight road at $12$ km/h. Half an hour later a truck leaves the same barn along the same road at $20$ km/h. How far from the barn does the truck catch the tractor?',
      choices: ['$3.75$ km', '$6$ km', '$9$ km', '$15$ km'],
      answer: 3,
      solution:
        'The tractor’s head start is $12 \\times 0.5 = 6$ km. Going the same way, the truck closes the gap at $20 - 12 = 8$ km/h, so the chase lasts $\\frac{6}{8} = 0.75$ hour, and the truck has then travelled $20 \\times 0.75 = 15$ km from the barn. Check forward: the tractor has been driving $1.25$ hours at $12$ km/h $= 15$ km. ✓ (The choice $9$ is how far the TRACTOR moves during the chase and forgets its $6$ km head start; the choice $6$ is the head start itself; the choice $3.75$ adds the speeds instead of subtracting them, which is the head-on rule.)',
    },
    {
      q: 'A bus leaves a depot at $36$ mph. A car leaves the same depot $30$ minutes later and catches the bus after driving for $2$ hours. How fast is the car?',
      choices: ['$45$ mph', '$9$ mph', '$36$ mph', '$54$ mph'],
      answer: 0,
      solution:
        'The bus’s head start is $36 \\times 0.5 = 18$ miles, and the car erases it in $2$ hours, so the gap closes at $\\frac{18}{2} = 9$ mph. Same direction means that gap speed is the DIFFERENCE, so the car runs at $36 + 9 = 45$ mph. Check forward: the car covers $45 \\times 2 = 90$ miles, and the bus has driven $2.5$ hours at $36$ mph — also $90$ miles. ✓ (The choice $9$ stops at the closing speed and forgets to add the bus’s speed back; the choice $54$ adds the $18$-mile head start to $36$ as if a distance were a speed; the choice $36$ divides $90$ miles by the BUS’s $2.5$ hours instead of the car’s $2$.)',
    },
  ],
  // c9 — inverse-square scaling, described in words
  [
    {
      q: 'The loudness of a speaker is inversely proportional to the SQUARE of your distance from it. If you move to three times your current distance, the sound becomes...',
      choices: ['one third as loud', 'one ninth as loud', 'one sixth as loud', 'nine times as loud'],
      answer: 1,
      solution:
        'Write the rule as $L = \\frac{k}{d^2}$ and replace $d$ with $3d$: the new loudness is $\\frac{k}{(3d)^2} = \\frac{k}{9d^2} = \\frac{1}{9}L$. Tripling the distance triples what is squared, so the denominator grows by a factor of $9$. Check with numbers: if $k = 36$, then $d = 1$ gives $L = 36$ and $d = 3$ gives $L = 4$. ✓ (One third ignores the square and uses plain inverse proportion; one sixth doubles the $3$ instead of squaring it; nine times moves the wrong way entirely, which is the DIRECT-square response.)',
    },
    {
      q: 'The strength of a signal is inversely proportional to the SQUARE of your distance from the tower. At what multiple of your current distance is the signal $\\frac{1}{25}$ as strong?',
      choices: ['$\\frac{1}{5}$ as far', '$12.5$ times as far', '$5$ times as far', '$25$ times as far'],
      answer: 2,
      solution:
        'From $S = \\frac{k}{d^2}$, moving to $md$ multiplies the strength by $\\frac{1}{m^2}$. We need $\\frac{1}{m^2} = \\frac{1}{25}$, so $m^2 = 25$ and $m = 5$. Check with numbers: if $k = 100$, then $d = 1$ gives $S = 100$ and $d = 5$ gives $S = 4$, which is indeed $\\frac{1}{25}$ of $100$. ✓ (The choice $25$ reads the fraction straight off as the distance factor and never undoes the square; the choice $12.5$ halves that $25$ rather than taking its square root; the choice $\\frac{1}{5}$ moves closer, which would make the signal STRONGER.)',
    },
    {
      q: 'The brightness of a lamp is inversely proportional to the SQUARE of your distance from it. If you increase your distance by $50\\%$, the brightness is...',
      choices: [
        'multiplied by $\\frac{2}{3}$',
        'multiplied by $\\frac{9}{4}$',
        'multiplied by $\\frac{1}{2}$',
        'multiplied by $\\frac{4}{9}$',
      ],
      answer: 3,
      solution:
        'Increasing the distance by $50\\%$ multiplies $d$ by $\\frac{3}{2}$. In $B = \\frac{k}{d^2}$ the denominator is then multiplied by $\\left(\\frac{3}{2}\\right)^2 = \\frac{9}{4}$, so the brightness is multiplied by the reciprocal $\\frac{4}{9}$. Check with numbers: if $k = 36$, then $d = 2$ gives $B = 9$ and $d = 3$ gives $B = 4$, and $\\frac{4}{9}$ of $9$ is $4$. ✓ (The choice $\\frac{2}{3}$ takes the reciprocal but forgets the square; the choice $\\frac{9}{4}$ multiplies by the distance factor squared instead of by its reciprocal, sending the brightness up; the choice $\\frac{1}{2}$ mirrors the $50\\%$ as a halving, which is not how reciprocal factors work.)',
    },
  ],
  // c10 — find the one rule that fits EVERY pair
  [
    {
      q: 'Which rule fits ALL of these pairs? $(3, 20), (5, 12), (6, 10)$',
      choices: ['$y = \\frac{60}{x}$', '$y = \\frac{20}{3}x$', '$y = x + 17$', '$y = \\frac{30}{x}$'],
      answer: 0,
      solution:
        'Test the product $xy$ in every pair: $3 \\times 20 = 60$, $5 \\times 12 = 60$, $6 \\times 10 = 60$. The product is constant, so this is inverse proportion with $k = 60$ and the rule is $y = \\frac{60}{x}$. ✓ (The rule $y = \\frac{20}{3}x$ takes the RATIO from the first pair and treats the table as direct, but it gives $y = \\frac{100}{3}$ at $x = 5$; the rule $y = x + 17$ fits the first pair only, since $5 + 17 = 22$, not $12$; the rule $y = \\frac{30}{x}$ has the right shape but the wrong constant — it gives $y = 10$ at $x = 3$. Always check every pair before trusting a rule.)',
    },
    {
      q: 'Which rule fits ALL of these pairs? $(4, 10), (6, 15), (10, 25)$',
      choices: ['$y = \\frac{40}{x}$', '$y = x + 6$', '$y = \\frac{2}{5}x$', '$y = 2.5x$'],
      answer: 3,
      solution:
        'Test the ratio $\\frac{y}{x}$ in every pair: $\\frac{10}{4} = 2.5$, $\\frac{15}{6} = 2.5$, $\\frac{25}{10} = 2.5$. The ratio is constant, so this table is DIRECT, not inverse, and the rule is $y = 2.5x$. ✓ (The rule $y = \\frac{40}{x}$ borrows the product of the first pair and applies the inverse model, but it gives $y = \\frac{20}{3}$ at $x = 6$, and it has $y$ falling while the table has $y$ rising; the rule $y = x + 6$ matches the first pair by a constant difference and then fails, since $6 + 6 = 12$, not $15$; the rule $y = \\frac{2}{5}x$ uses the ratio upside down, $\\frac{x}{y}$.)',
    },
    {
      q: 'Which rule fits ALL of these pairs? $(2, 36), (6, 12), (9, 8)$',
      choices: ['$y = 44 - 4x$', '$y = \\frac{72}{x}$', '$y = 18x$', '$y = \\frac{36}{x}$'],
      answer: 1,
      solution:
        'Test the product $xy$: $2 \\times 36 = 72$, $6 \\times 12 = 72$, $9 \\times 8 = 72$. Constant product means inverse proportion with $k = 72$, so $y = \\frac{72}{x}$. ✓ (The rule $y = 44 - 4x$ is the dangerous one — it matches the first pair AND the last, but at $x = 6$ it gives $20$ instead of $12$, so two hits are not enough; the rule $y = 18x$ takes the ratio of the first pair and reads the table as direct, giving $108$ at $x = 6$; the rule $y = \\frac{36}{x}$ has the inverse shape with the wrong constant, giving $18$ at $x = 2$.)',
    },
  ],
  // c11 — joint proportion in money and area
  [
    {
      q: 'The cost of a rectangular copper sheet is jointly proportional to its length and its width. A sheet $4$ ft by $5$ ft costs $\\$48$. What does a sheet $6$ ft by $10$ ft cost?',
      choices: ['$\\$72$', '$\\$144$', '$\\$96$', '$\\$168$'],
      answer: 1,
      solution:
        'Cost $= k\\ell w$, so the constant is the price per square foot: $k = \\frac{C}{\\ell w} = \\frac{48}{20} = \\$2.40$. The new sheet covers $6 \\times 10 = 60$ square feet, so it costs $2.40 \\times 60 = \\$144$. Check the constant on both sheets: $\\frac{48}{20} = 2.40$ and $\\frac{144}{60} = 2.40$. ✓ (Each dimension contributes its own factor, $1.5$ and $2$, and $1.5 \\times 2 = 3$.) (The choice $\\$72$ scales only for the longer sheet; the choice $\\$96$ scales only for the wider one; the choice $\\$168$ ADDS the two factors, $1.5 + 2 = 3.5$, instead of multiplying them.)',
    },
    {
      q: 'The cost of a rectangular glass pane is jointly proportional to its length and its width. A pane $2$ ft by $3$ ft costs $\\$27$. A second pane is $4$ ft wide and costs $\\$108$. How long is the second pane?',
      choices: ['$8$ ft', '$27$ ft', '$6$ ft', '$24$ ft'],
      answer: 2,
      solution:
        'From Cost $= k\\ell w$: $k = \\frac{27}{2 \\times 3} = \\$4.50$ per square foot. The second pane must cover $\\frac{108}{4.50} = 24$ square feet, and with a width of $4$ ft its length is $\\frac{24}{4} = 6$ ft. Check forward: $4.50 \\times 6 \\times 4 = \\$108$. ✓ (The choice $24$ reports the AREA as if it were the length; the choice $27$ divides the cost by the width alone and never uses the price per square foot; the choice $8$ multiplies the original $2$ ft by the cost factor $\\frac{108}{27} = 4$, but that factor is shared between the two dimensions, and the width already used part of it.)',
    },
    {
      q: 'The bill for heating a hall is jointly proportional to the floor area and the number of days it is heated. Heating a $200$ square metre hall for $6$ days costs $\\$90$. What does it cost to heat a $150$ square metre hall for $10$ days?',
      choices: ['$\\$112.50$', '$\\$67.50$', '$\\$150.00$', '$\\$217.50$'],
      answer: 0,
      solution:
        'Bill $= kAd$, so $k = \\frac{90}{200 \\times 6} = \\frac{90}{1200} = \\$0.075$ per square metre per day. The new bill is $0.075 \\times 150 \\times 10 = \\$112.50$. Check the constant on both halls: $\\frac{90}{1200} = 0.075$ and $\\frac{112.50}{1500} = 0.075$. ✓ (The smaller hall pulls the bill down by a factor of $0.75$, the longer stretch pushes it up by $\\frac{5}{3}$, and $0.75 \\times \\frac{5}{3} = 1.25$.) (The choice $\\$67.50$ scales only for the smaller floor; the choice $\\$150.00$ scales only for the extra days; the choice $\\$217.50$ adds the two factors, $0.75 + \\frac{5}{3} = \\frac{29}{12}$, instead of multiplying them.)',
    },
  ],
  // c12 — worker-hours: crew size AND output both change
  [
    {
      q: 'If $4$ machines can stitch $6$ jackets in $9$ hours, how long would $6$ machines take to stitch $15$ jackets?',
      choices: ['$6$ hours', '$9$ hours', '$22.5$ hours', '$15$ hours'],
      answer: 3,
      solution:
        'Price the work first: $4 \\times 9 = 36$ machine-hours produced $6$ jackets, so one jacket costs $\\frac{36}{6} = 6$ machine-hours. Then $15$ jackets need $15 \\times 6 = 90$ machine-hours, and $6$ machines supply them in $\\frac{90}{6} = 15$ hours. Check forward: $6$ machines for $15$ hours is $90$ machine-hours, which at $6$ machine-hours per jacket is exactly $15$ jackets. ✓ (The choice $9$ assumes the two changes cancel, but $1.5$ times the machines against $2.5$ times the jackets does not balance; the choice $22.5$ scales only for the extra jackets; the choice $6$ scales only for the extra machines.)',
    },
    {
      q: 'If $10$ workers can harvest $8$ fields in $6$ days, how many workers are needed to harvest $20$ fields in $10$ days?',
      choices: ['$15$ workers', '$25$ workers', '$6$ workers', '$150$ workers'],
      answer: 0,
      solution:
        'The first job used $10 \\times 6 = 60$ worker-days for $8$ fields, so one field costs $\\frac{60}{8} = 7.5$ worker-days. Twenty fields need $20 \\times 7.5 = 150$ worker-days, and spreading those over $10$ days takes $\\frac{150}{10} = 15$ workers — a whole number, as a head count must be. Check forward: $15 \\times 10 = 150$ worker-days, which at $7.5$ per field harvests $20$ fields. ✓ (The choice $25$ scales only for the extra fields and ignores the longer season; the choice $6$ scales only for the extra days and ignores the extra fields; the choice $150$ stops at the worker-day total, which is an amount of work, not a number of people.)',
    },
    {
      q: 'If $8$ bakers can bake $500$ loaves in $5$ hours, how many loaves can $6$ bakers bake in $10$ hours?',
      choices: ['$375$ loaves', '$1000$ loaves', '$750$ loaves', '$500$ loaves'],
      answer: 2,
      solution:
        'The first shift was $8 \\times 5 = 40$ baker-hours for $500$ loaves, so each baker-hour makes $\\frac{500}{40} = 12.5$ loaves. The new shift supplies $6 \\times 10 = 60$ baker-hours, which yields $60 \\times 12.5 = 750$ loaves. Check forward: $\\frac{750}{60} = 12.5$ loaves per baker-hour, matching the first shift. ✓ (The choice $1000$ doubles for the doubled hours and ignores that two bakers left; the choice $375$ scales only for the smaller crew and ignores the longer shift; the choice $500$ assumes the two changes cancel, but $60$ baker-hours is not $40$.)',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 7,
  challenge,
}
