// Counting chapter 10 — variations for section 10.2 (Probability Using Lengths).
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Multiple choice: every variation is { q, choices, answer, solution }.
//    Answer indices are derived from the base: v1 = (b+1)%4, v2 = (b+3)%4,
//    v3 = (b+2)%4, giving rows v1: 2 1 3 0 1 3 2 0 1 3, v2: 0 3 1 2 3 1 0 2 3 1,
//    v3: 3 2 0 1 2 0 3 1 2 0.
//  - Every key was computed exactly in node (favorable length over total
//    length in closed form) and cross-checked with a Monte Carlo of the exact
//    stated condition at $n = 1{,}000{,}000$; every estimate landed within
//    $4\sigma$ of its pin. Pin deviations: none.
//  - Every solution runs two genuinely different routes that each end ✓ —
//    direct measure vs. a complement, an equal-shares scaling, a decomposition
//    along the segment, completing the square vs. factoring, or a per-gap
//    analysis — and route two never re-imports route one’s number. The wrong
//    choices’ traps are then named in CAPS, each ending ✗.
//  - Conventions are settled in every stem: choices are uniform over an
//    interval of real numbers, independent when there are two, and answers
//    stay in exact reduced form.

const s102 = [
  // slot 1 — stretch near an endpoint. Lanes: length 21 within 6 of D;
  //          45-second song, first 9 seconds; reversed: find the length.
  [
    {
      q: 'A point is chosen uniformly at random on a segment $CD$ of length $21$. What is the probability that it lies within $6$ units of $D$?',
      choices: ['$\\frac{2}{5}$', '$\\frac{5}{7}$', '$\\frac{2}{7}$', '$\\frac{4}{7}$'],
      answer: 2,
      solution:
        'The favorable points form a stretch of length $6$ ending at $D$, out of a total length of $21$, so the probability is $\\frac{6}{21} = \\frac{2}{7}$ ✓. Second route, by equal shares: cut the segment into $7$ pieces of length $3$ each; the favorable stretch is exactly the last $2$ of those $7$ equally likely pieces, so the probability is $\\frac{2}{7}$ ✓. DIVIDING BY THE LEFTOVER $15$ gives $\\frac{2}{5}$ ✗. COUNTING A $6$-UNIT STRETCH AT BOTH ENDS gives $\\frac{12}{21} = \\frac{4}{7}$, but the question only asks about $D$ ✗. $\\frac{5}{7}$ IS THE COMPLEMENT, the chance of landing more than $6$ units from $D$ ✗.',
    },
    {
      q: 'A $45$-second song plays from start to finish, and a listener tunes in at a moment chosen uniformly at random while it plays. What is the probability that the moment falls within the first $9$ seconds of the song?',
      choices: ['$\\frac{1}{5}$', '$\\frac{4}{5}$', '$\\frac{1}{4}$', '$\\frac{2}{9}$'],
      answer: 0,
      solution:
        'The tuning-in moment is a random point in a time segment of length $45$, and the favorable stretch has length $9$, so the probability is $\\frac{9}{45} = \\frac{1}{5}$ ✓. Second route, by equal shares: the song splits into five $9$-second blocks, each equally likely to contain the moment, and exactly one of the five is favorable, so the probability is $\\frac{1}{5}$ ✓. $\\frac{4}{5}$ IS THE COMPLEMENT, the chance of missing the opening ✗. DIVIDING BY THE REMAINING $36$ SECONDS gives $\\frac{9}{36} = \\frac{1}{4}$ ✗. ADDING AN EXTRA OUTCOME AS IF COUNTING WHOLE SECONDS gives $\\frac{10}{45} = \\frac{2}{9}$; points on a segment are not a list of integers ✗.',
    },
    {
      q: 'A point chosen uniformly at random on a segment of length $L$ lies within $4$ units of endpoint $A$ with probability $\\frac{1}{9}$. What is $L$?',
      choices: ['$13$', '$40$', '$72$', '$36$'],
      answer: 3,
      solution:
        'The favorable stretch has length $4$, so $\\frac{4}{L} = \\frac{1}{9}$, and cross-multiplying gives $L = 36$ ✓. Second route, by equal shares: probability $\\frac{1}{9}$ means the $4$-unit stretch is one of $9$ equal pieces tiling the segment, so the segment has length $9 \\cdot 4 = 36$; check: $\\frac{4}{36} = \\frac{1}{9}$ ✓. SOLVING $\\frac{4}{L - 4} = \\frac{1}{9}$, which divides by the leftover instead of the whole segment, gives $40$ ✗. MIRRORING THE STRETCH AT THE OTHER ENDPOINT, $\\frac{8}{L} = \\frac{1}{9}$, gives $72$, but only $A$ is in the question ✗. ADDING $4 + 9$ gives $13$, which mashes the two givens together ✗.',
    },
  ],

  // slot 2 — sub-interval of a shifted interval. Lanes: [1,17] less than 7;
  //          gauge on [-6,10] positive; reversed: find the right endpoint.
  [
    {
      q: 'A real number is chosen uniformly at random from the interval $[1, 17]$. What is the probability that it is less than $7$?',
      choices: ['$\\frac{7}{16}$', '$\\frac{3}{8}$', '$\\frac{5}{8}$', '$\\frac{7}{17}$'],
      answer: 1,
      solution:
        'The interval has length $17 - 1 = 16$, and the favorable numbers run from $1$ to $7$, a stretch of length $6$, so the probability is $\\frac{6}{16} = \\frac{3}{8}$ ✓. Second route, by complement: the numbers that are $7$ or more form the stretch from $7$ to $17$, length $10$, with probability $\\frac{10}{16}$; the endpoint $7$ itself has length $0$, so the answer is $1 - \\frac{10}{16} = \\frac{3}{8}$ ✓. USING $7$ AS THE FAVORABLE LENGTH forgets the interval starts at $1$ and gives $\\frac{7}{16}$ ✗. FORGETTING THE START IN THE DENOMINATOR AS WELL gives $\\frac{7}{17}$ ✗. $\\frac{5}{8}$ IS THE COMPLEMENT ✗.',
    },
    {
      q: 'A gauge needle settles at a reading chosen uniformly at random from the interval $[-6, 10]$. What is the probability that the reading is positive?',
      choices: ['$\\frac{3}{8}$', '$\\frac{1}{2}$', '$\\frac{1}{4}$', '$\\frac{5}{8}$'],
      answer: 3,
      solution:
        'The interval has length $10 - (-6) = 16$, and the positive readings form the stretch from $0$ to $10$, length $10$, so the probability is $\\frac{10}{16} = \\frac{5}{8}$ ✓. Second route, by complement: the negative readings run from $-6$ to $0$, a stretch of length $6$ with probability $\\frac{6}{16} = \\frac{3}{8}$, and the single reading $0$ has length $0$, so the answer is $1 - \\frac{3}{8} = \\frac{5}{8}$ ✓. $\\frac{3}{8}$ IS THE COMPLEMENT, the chance of a negative reading ✗. CALLING POSITIVE AND NEGATIVE EQUALLY LIKELY gives $\\frac{1}{2}$, but the interval is not centered at $0$ ✗. SUBTRACTING THE NEGATIVE STRETCH FROM THE POSITIVE ONE gives $\\frac{10 - 6}{16} = \\frac{1}{4}$, which measures nothing in the problem ✗.',
    },
    {
      q: 'A real number chosen uniformly at random from the interval $[4, k]$, where $k > 10$, is less than $10$ with probability $\\frac{3}{8}$. What is $k$?',
      choices: ['$16$', '$26$', '$20$', '$36$'],
      answer: 2,
      solution:
        'The favorable stretch runs from $4$ to $10$, length $6$, and the whole interval has length $k - 4$, so $\\frac{6}{k - 4} = \\frac{3}{8}$; cross-multiplying gives $3(k - 4) = 48$, so $k - 4 = 16$ and $k = 20$ ✓. Second route, by scaling up: a stretch of length $6$ is $\\frac{3}{8}$ of the interval, so the interval has length $6 \\cdot \\frac{8}{3} = 16$ and stretches from $4$ to $4 + 16 = 20$; check: $\\frac{6}{16} = \\frac{3}{8}$ ✓. REPORTING THE LENGTH $16$ INSTEAD OF THE ENDPOINT forgets to add the starting point back ✗. TACKING THE LENGTH ONTO $10$ instead of $4$ gives $26$ ✗. MIRRORING A SECOND $6$-UNIT STRETCH AT THE TOP, $\\frac{12}{k-4} = \\frac{3}{8}$, gives $36$ ✗.',
    },
  ],

  // slot 3 — waiting for a fixed schedule. Lanes: every 40 s wait < 14;
  //          every 24 min wait > 14; reversed: find the interval.
  [
    {
      q: 'An elevator car returns to the lobby every $40$ seconds, and Zoe walks up at a uniformly random moment. What is the probability that she waits less than $14$ seconds for it?',
      choices: ['$\\frac{13}{20}$', '$\\frac{7}{13}$', '$\\frac{7}{27}$', '$\\frac{7}{20}$'],
      answer: 3,
      solution:
        'Her wait is a random point in $[0, 40]$: she waits less than $14$ seconds exactly when she arrives during the last $14$ seconds of a $40$-second gap, a stretch of length $14$, so the probability is $\\frac{14}{40} = \\frac{7}{20}$ ✓. Second route, by complement: she waits $14$ seconds or more exactly when she arrives in the first $26$ seconds of a gap, probability $\\frac{26}{40} = \\frac{13}{20}$, and $1 - \\frac{13}{20} = \\frac{7}{20}$ ✓. $\\frac{13}{20}$ IS THAT COMPLEMENT ✗. DIVIDING BY THE LEFTOVER $26$ gives $\\frac{14}{26} = \\frac{7}{13}$ ✗. ADDING HER WAIT TO THE CYCLE, $\\frac{14}{54}$, gives $\\frac{7}{27}$; the car keeps its $40$-second rhythm no matter when she shows up ✗.',
    },
    {
      q: 'A train departs from a platform every $24$ minutes, and Ravi arrives at a uniformly random moment. What is the probability that he waits more than $14$ minutes for the next train?',
      choices: ['$\\frac{7}{12}$', '$\\frac{5}{12}$', '$\\frac{5}{7}$', '$\\frac{1}{2}$'],
      answer: 1,
      solution:
        'His wait is a random point in $[0, 24]$, and the waits above $14$ form the stretch from $14$ to $24$, length $10$, so the probability is $\\frac{10}{24} = \\frac{5}{12}$ ✓. Second route, watching the arrivals instead of the waits: he waits more than $14$ minutes exactly when he arrives within $24 - 14 = 10$ minutes after the previous train left, a $10$-minute stretch of the $24$-minute gap, so the probability is $\\frac{10}{24} = \\frac{5}{12}$ ✓. USING $14$ AS THE FAVORABLE LENGTH gives $\\frac{14}{24} = \\frac{7}{12}$, which is the complement ✗. DIVIDING BY $14$ gives $\\frac{10}{14} = \\frac{5}{7}$ ✗. CALLING THE TWO SIDES OF $14$ EQUALLY LIKELY gives $\\frac{1}{2}$, ignoring where $14$ sits in the cycle ✗.',
    },
    {
      q: 'A shuttle departs from a stop every $T$ minutes, and a passenger arriving at a uniformly random moment waits less than $4$ minutes with probability $\\frac{2}{9}$. What is $T$?',
      choices: ['$18$', '$22$', '$36$', '$9$'],
      answer: 0,
      solution:
        'The wait is uniform on $[0, T]$ and the favorable stretch has length $4$, so $\\frac{4}{T} = \\frac{2}{9}$; cross-multiplying gives $2T = 36$, so $T = 18$ ✓. Second route, by equal shares: probability $\\frac{2}{9}$ means $4$ minutes is $2$ of $9$ equal shares of the gap, so each share is $2$ minutes and the gap is $9 \\cdot 2 = 18$; check: $\\frac{4}{18} = \\frac{2}{9}$ ✓. DIVIDING BY THE LEFTOVER, $\\frac{4}{T - 4} = \\frac{2}{9}$, gives $22$ ✗. USING $\\frac{1}{9}$ IN PLACE OF $\\frac{2}{9}$ gives $36$ ✗. GRABBING THE PROBABILITY’S DENOMINATOR as the interval gives $9$, but $\\frac{4}{9} \\ne \\frac{2}{9}$ ✗.',
    },
  ],

  // slot 4 — closer to one marked point than another. Lanes: AC=5, CB=11;
  //          M at 8 on a 20-segment vs endpoint A; reversed: find CB.
  [
    {
      q: 'Points $A$, $C$, and $B$ lie on a line in that order with $AC = 5$ and $CB = 11$. A point $P$ is chosen uniformly at random on segment $AB$. What is the probability that $P$ is closer to $C$ than to $B$?',
      choices: ['$\\frac{21}{32}$', '$\\frac{5}{16}$', '$\\frac{11}{32}$', '$\\frac{1}{2}$'],
      answer: 0,
      solution:
        'Put $A$ at $0$, so $C$ is at $5$ and $B$ is at $16$. A point is closer to $C$ than to $B$ exactly when it lies left of the midpoint of $CB$, which sits at $\\frac{5 + 16}{2} = 10.5$; that stretch runs from $0$ to $10.5$, so the probability is $\\frac{10.5}{16} = \\frac{21}{32}$ ✓. Second route, piece by piece: every point of $AC$ is closer to $C$ (length $5$), and on $CB$ the closer-to-$C$ points are its near half (length $\\frac{11}{2}$), so the favorable length is $5 + \\frac{11}{2} = \\frac{21}{2}$ and the probability is $\\frac{21/2}{16} = \\frac{21}{32}$ ✓. STOPPING AT $C$ ITSELF gives $\\frac{5}{16}$ ✗. $\\frac{11}{32}$ IS THE COMPLEMENT ✗. USING THE MIDPOINT OF $AB$ as the boundary gives $\\frac{1}{2}$, but the boundary belongs to $CB$ ✗.',
    },
    {
      q: 'Segment $AB$ has length $20$, and a point $M$ is marked on it at distance $8$ from $A$. A point $P$ is chosen uniformly at random on $AB$. What is the probability that $P$ is closer to $M$ than to $A$?',
      choices: ['$\\frac{1}{5}$', '$\\frac{3}{5}$', '$\\frac{4}{5}$', '$\\frac{2}{5}$'],
      answer: 2,
      solution:
        'Put $A$ at $0$, so $M$ is at $8$ and $B$ is at $20$. The boundary is the midpoint of $AM$, at $4$: every point right of $4$ is closer to $M$, including the whole stretch beyond $M$. The favorable stretch runs from $4$ to $20$, length $16$, so the probability is $\\frac{16}{20} = \\frac{4}{5}$ ✓. Second route, by complement: the points closer to $A$ form the stretch from $0$ to $4$, probability $\\frac{4}{20} = \\frac{1}{5}$, so the answer is $1 - \\frac{1}{5} = \\frac{4}{5}$ ✓. $\\frac{1}{5}$ IS THAT COMPLEMENT ✗. PUTTING THE BOUNDARY AT $M$ ITSELF gives $\\frac{12}{20} = \\frac{3}{5}$ ✗. USING $AM$ AS THE FAVORABLE LENGTH gives $\\frac{8}{20} = \\frac{2}{5}$ ✗.',
    },
    {
      q: 'Points $A$, $C$, and $B$ lie on a line in that order with $AC = 4$ and $CB = b$. A point chosen uniformly at random on segment $AB$ is closer to $C$ than to $B$ with probability $\\frac{7}{10}$. What is $b$?',
      choices: ['$12$', '$6$', '$20$', '$3$'],
      answer: 1,
      solution:
        'Put $A$ at $0$: the closer-to-$C$ points run from $0$ to the midpoint of $CB$, a stretch of length $4 + \\frac{b}{2}$, out of a total $4 + b$. Setting $\\frac{4 + b/2}{4 + b} = \\frac{7}{10}$ and cross-multiplying: $40 + 5b = 28 + 7b$, so $2b = 12$ and $b = 6$ ✓. Second route, by complement: the closer-to-$B$ points are the far half of $CB$, length $\\frac{b}{2}$, with probability $\\frac{3}{10}$, so $\\frac{b/2}{4 + b} = \\frac{3}{10}$ gives $5b = 12 + 3b$ and $b = 6$; check: $AB = 10$, boundary at $7$, probability $\\frac{7}{10}$ ✓. STOPPING AT $2b = 12$ without the final division gives $12$ ✗. DIVIDING BY $CB$ INSTEAD OF $AB$, $\\frac{4 + b/2}{b} = \\frac{7}{10}$, gives $20$ ✗. HALVING $b$ ONCE MORE after the midpoint already did gives $3$ ✗.',
    },
  ],

  // slot 5 — three-phase cycle. Lanes: 35/5/32 not green; washer 22/10/13
  //          rinse-or-spin; reversed: find the red duration.
  [
    {
      q: 'A signal repeats a cycle: green for $35$ seconds, then yellow for $5$ seconds, then red for $32$ seconds. A car arrives at a uniformly random moment. What is the probability that the light is not green?',
      choices: ['$\\frac{35}{72}$', '$\\frac{37}{72}$', '$\\frac{4}{9}$', '$\\frac{1}{2}$'],
      answer: 1,
      solution:
        'One full cycle lasts $35 + 5 + 32 = 72$ seconds, and the light is yellow or red for $5 + 32 = 37$ of them, so the probability is $\\frac{37}{72}$ ✓. Second route, by complement: the light is green for $35$ of the $72$ seconds, probability $\\frac{35}{72}$, so it is not green with probability $1 - \\frac{35}{72} = \\frac{37}{72}$ ✓. $\\frac{35}{72}$ IS THE GREEN SHARE, the complement ✗. FORGETTING THE YELLOW gives $\\frac{32}{72} = \\frac{4}{9}$ ✗. CALLING GREEN AND NOT-GREEN EQUALLY LIKELY gives $\\frac{1}{2}$, but the phases have different lengths ✗.',
    },
    {
      q: 'A washing machine repeats a cycle: it washes for $22$ minutes, then rinses for $10$ minutes, then spins for $13$ minutes. Lin glances at it at a uniformly random moment during the cycle. What is the probability that it is rinsing or spinning?',
      choices: ['$\\frac{22}{45}$', '$\\frac{2}{9}$', '$\\frac{23}{32}$', '$\\frac{23}{45}$'],
      answer: 3,
      solution:
        'The cycle lasts $22 + 10 + 13 = 45$ minutes, and the machine is rinsing or spinning for $10 + 13 = 23$ of them, so the probability is $\\frac{23}{45}$ ✓. Second route, by complement: rinsing or spinning is exactly "not washing", and washing takes $22$ of the $45$ minutes, so the answer is $1 - \\frac{22}{45} = \\frac{23}{45}$ ✓. $\\frac{22}{45}$ IS THE WASHING SHARE, the complement ✗. COUNTING THE RINSE ALONE gives $\\frac{10}{45} = \\frac{2}{9}$ ✗. LEAVING THE SPIN OUT OF THE CYCLE LENGTH gives $\\frac{23}{32}$ ✗.',
    },
    {
      q: 'A traffic light repeats a cycle: red for $r$ seconds, then green for $42$ seconds, then yellow for $6$ seconds. A driver arriving at a uniformly random moment sees red with probability $\\frac{1}{4}$. What is $r$?',
      choices: ['$12$', '$14$', '$16$', '$144$'],
      answer: 2,
      solution:
        'The cycle lasts $r + 42 + 6 = r + 48$ seconds, so $\\frac{r}{r + 48} = \\frac{1}{4}$; cross-multiplying gives $4r = r + 48$, so $3r = 48$ and $r = 16$ ✓. Second route, by shares: red is $\\frac{1}{4}$ of the cycle, so green plus yellow is the other $\\frac{3}{4}$, which is $48$ seconds; one quarter is a third of three quarters, so $r = \\frac{48}{3} = 16$; check: $\\frac{16}{64} = \\frac{1}{4}$ ✓. DIVIDING BY $48$ ALONE, $\\frac{r}{48} = \\frac{1}{4}$, leaves red out of its own cycle and gives $12$ ✗. LEAVING THE YELLOW OUT, $\\frac{r}{r + 42} = \\frac{1}{4}$, gives $14$ ✗. SOLVING FOR NOT SEEING RED, $\\frac{48}{r + 48} = \\frac{1}{4}$, gives $144$ ✗.',
    },
  ],

  // slot 6 — inequalities carve stretches. Lanes: cube on [-3,7]; square on
  //          [-5,6] (two branches); derived: both conditions at once.
  [
    {
      q: 'A real number $x$ is chosen uniformly at random from $[-3, 7]$. What is the probability that $x^3 < 64$?',
      choices: ['$\\frac{3}{10}$', '$\\frac{2}{5}$', '$\\frac{4}{5}$', '$\\frac{7}{10}$'],
      answer: 3,
      solution:
        'Cubing keeps order and sends negatives to negatives, so $x^3 < 64$ means exactly $x < 4$. The favorable stretch runs from $-3$ to $4$, length $7$, out of a total length of $10$, so the probability is $\\frac{7}{10}$ ✓. Second route, by complement: $x^3 \\ge 64$ means $x \\ge 4$, the stretch from $4$ to $7$ of length $3$ and probability $\\frac{3}{10}$, so the answer is $1 - \\frac{3}{10} = \\frac{7}{10}$ ✓. $\\frac{3}{10}$ IS THAT COMPLEMENT ✗. MEASURING THE FAVORABLE STRETCH FROM $0$ gives $\\frac{4}{10} = \\frac{2}{5}$ ✗. TREATING THE CUBE LIKE A SQUARE, $-4 < x < 4$ with length $8$, gives $\\frac{4}{5}$ — and that stretch even pokes below $-3$, outside the interval ✗.',
    },
    {
      q: 'A real number $x$ is chosen uniformly at random from $[-5, 6]$. What is the probability that $x^2 \\ge 16$?',
      choices: ['$\\frac{2}{11}$', '$\\frac{3}{11}$', '$\\frac{8}{11}$', '$\\frac{1}{11}$'],
      answer: 1,
      solution:
        'The condition $x^2 \\ge 16$ means $x \\le -4$ or $x \\ge 4$. Inside $[-5, 6]$ those are the stretches from $-5$ to $-4$ (length $1$) and from $4$ to $6$ (length $2$), so the favorable length is $3$ out of $11$ and the probability is $\\frac{3}{11}$ ✓. Second route, by complement: $x^2 < 16$ means $-4 < x < 4$, a stretch of length $8$ lying entirely inside the interval, so the answer is $1 - \\frac{8}{11} = \\frac{3}{11}$ ✓. $\\frac{8}{11}$ IS THAT COMPLEMENT ✗. FORGETTING THE NEGATIVE BRANCH gives $\\frac{2}{11}$ ✗. FORGETTING THE POSITIVE BRANCH gives $\\frac{1}{11}$ ✗.',
    },
    {
      q: 'A real number $x$ is chosen uniformly at random from $[-6, 10]$. What is the probability that both $x^2 < 25$ and $x^3 > -8$?',
      choices: ['$\\frac{7}{16}$', '$\\frac{5}{8}$', '$\\frac{3}{4}$', '$\\frac{9}{16}$'],
      answer: 0,
      solution:
        'The first condition means $-5 < x < 5$ and the second means $x > -2$, so both hold exactly on the overlap $-2 < x < 5$, a stretch of length $7$ out of a total $16$: the probability is $\\frac{7}{16}$ ✓. Second route, by complement: the pair fails when $x \\le -2$ or $x \\ge 5$; inside $[-6, 10]$ those stretches have lengths $4$ and $5$ and cannot overlap, so the failure probability is $\\frac{9}{16}$ and the answer is $1 - \\frac{9}{16} = \\frac{7}{16}$ ✓. USING THE SQUARE CONDITION ALONE gives $\\frac{10}{16} = \\frac{5}{8}$ ✗. USING THE CUBE CONDITION ALONE gives $\\frac{12}{16} = \\frac{3}{4}$ ✗. $\\frac{9}{16}$ IS THE COMPLEMENT ✗.',
    },
  ],

  // slot 7 — cutting a stick. Lanes: 30 cm shorter piece at most 6; 42 in
  //          longer at least 7 times shorter; reversed: find the guarantee.
  [
    {
      q: 'A $30$-cm ribbon is cut into two pieces at a point chosen uniformly at random along its length. What is the probability that the shorter piece is at most $6$ cm long?',
      choices: ['$\\frac{1}{5}$', '$\\frac{3}{5}$', '$\\frac{2}{5}$', '$\\frac{1}{4}$'],
      answer: 2,
      solution:
        'Measure the cut from one end. The shorter piece is at most $6$ exactly when the cut lands within $6$ cm of an end, in $[0, 6]$ or $[24, 30]$: two stretches of length $6$, favorable length $12$, so the probability is $\\frac{12}{30} = \\frac{2}{5}$ ✓. Second route, by complement: both pieces exceed $6$ exactly when the cut lands strictly between $6$ and $24$, a stretch of length $18$ and probability $\\frac{18}{30} = \\frac{3}{5}$, so the answer is $1 - \\frac{3}{5} = \\frac{2}{5}$ ✓. COUNTING ONLY ONE END gives $\\frac{6}{30} = \\frac{1}{5}$ ✗. $\\frac{3}{5}$ IS THE COMPLEMENT ✗. DIVIDING THE $6$ BY THE OTHER PIECE’S $24$ gives $\\frac{1}{4}$ ✗.',
    },
    {
      q: 'A $42$-inch cord is cut into two pieces at a point chosen uniformly at random along its length. What is the probability that the longer piece is at least $7$ times as long as the shorter piece?',
      choices: ['$\\frac{1}{4}$', '$\\frac{2}{7}$', '$\\frac{3}{4}$', '$\\frac{1}{8}$'],
      answer: 0,
      solution:
        'If the shorter piece has length $s$, the longer has $42 - s$, and the condition $42 - s \\ge 7s$ means $s \\le \\frac{42}{8} = \\frac{21}{4}$. The cut must land within $\\frac{21}{4}$ of either end, a favorable length of $2 \\cdot \\frac{21}{4} = \\frac{21}{2}$, so the probability is $\\frac{21/2}{42} = \\frac{1}{4}$ ✓. Second route, by scaling: the condition compares the two pieces to each other, so the cord’s length drops out — a longer piece of at least $7$ parts against $1$ means the cut sits in the first or last eighth of the cord, and two eighths make $\\frac{1}{4}$ ✓. DIVIDING BY $7$ INSTEAD OF $8$ — as if the whole cord were $7$ shares rather than $7 + 1$ — gives $\\frac{2}{7}$ ✗. $\\frac{3}{4}$ IS THE COMPLEMENT ✗. COUNTING ONLY ONE END gives $\\frac{1}{8}$ ✗.',
    },
    {
      q: 'A $40$-ft rope is cut into two pieces at a point chosen uniformly at random along its length. The probability that the shorter piece is at least $k$ ft long is $\\frac{3}{10}$. What is $k$?',
      choices: ['$6$', '$12$', '$28$', '$14$'],
      answer: 3,
      solution:
        'The shorter piece is at least $k$ exactly when both pieces are, which means the cut lands in $[k, 40 - k]$, a stretch of length $40 - 2k$. Setting $\\frac{40 - 2k}{40} = \\frac{3}{10}$ gives $40 - 2k = 12$, so $k = 14$ ✓. Second route, by complement: the cut lands within $k$ of an end with probability $\\frac{2k}{40} = \\frac{7}{10}$, so $2k = 28$ and $k = 14$; check: the stretch $[14, 26]$ has length $12$ and $\\frac{12}{40} = \\frac{3}{10}$ ✓. SOLVING $\\frac{2k}{40} = \\frac{3}{10}$, which treats the end stretches as the favorable ones, gives $6$ ✗. REPORTING THE FAVORABLE LENGTH $40 \\cdot \\frac{3}{10}$ instead of $k$ gives $12$ ✗. SHRINKING THE STRETCH AT ONLY ONE END, $40 - k = 12$, gives $28$ ✗.',
    },
  ],

  // slot 8 — absolute-value stretches. Lanes: union with overlap on [0,24];
  //          intersection on [0,15]; derived: far from the middle on [0,18].
  [
    {
      q: 'A real number $x$ is chosen uniformly at random from $[0, 24]$. What is the probability that $|x - 6| < 4$ or $|x - 13| < 5$?',
      choices: ['$\\frac{2}{3}$', '$\\frac{3}{4}$', '$\\frac{7}{12}$', '$\\frac{1}{3}$'],
      answer: 0,
      solution:
        'The first condition is the stretch $2 < x < 10$ (length $8$) and the second is $8 < x < 18$ (length $10$). They overlap on $8 < x < 10$, so together they cover $2 < x < 18$, a stretch of length $16$, and the probability is $\\frac{16}{24} = \\frac{2}{3}$ ✓. Second route, by complement: both conditions fail exactly when $x \\le 2$ or $x \\ge 18$, stretches of lengths $2$ and $6$, so the failure probability is $\\frac{8}{24} = \\frac{1}{3}$ and the answer is $1 - \\frac{1}{3} = \\frac{2}{3}$ ✓. ADDING $8 + 10$ WITHOUT REMOVING THE OVERLAP gives $\\frac{18}{24} = \\frac{3}{4}$ ✗. SUBTRACTING THE OVERLAP TWICE gives $\\frac{14}{24} = \\frac{7}{12}$ ✗. $\\frac{1}{3}$ IS THE COMPLEMENT ✗.',
    },
    {
      q: 'A real number $x$ is chosen uniformly at random from $[0, 15]$. What is the probability that both $|x - 7| \\le 5$ and $|x - 10| \\le 4$?',
      choices: ['$\\frac{2}{3}$', '$\\frac{4}{5}$', '$\\frac{2}{5}$', '$\\frac{8}{15}$'],
      answer: 2,
      solution:
        'The first condition is the stretch $[2, 12]$ and the second is $[6, 14]$. Both hold exactly on the overlap $[6, 12]$, a stretch of length $6$, so the probability is $\\frac{6}{15} = \\frac{2}{5}$ ✓. Second route, by complement: the pair fails when $x < 6$ (which breaks the second condition, and includes everything that breaks the first on the left) or $x > 12$ (which breaks the first): stretches of lengths $6$ and $3$, failure probability $\\frac{9}{15} = \\frac{3}{5}$, so the answer is $1 - \\frac{3}{5} = \\frac{2}{5}$ ✓. USING THE FIRST CONDITION ALONE gives $\\frac{10}{15} = \\frac{2}{3}$ ✗. USING THE SECOND ALONE gives $\\frac{8}{15}$ ✗. TAKING THE UNION $[2, 14]$ INSTEAD OF THE OVERLAP gives $\\frac{12}{15} = \\frac{4}{5}$ ✗.',
    },
    {
      q: 'A real number $x$ is chosen uniformly at random from $[0, 18]$. What is the probability that $|x - 9| > 5$?',
      choices: ['$\\frac{5}{9}$', '$\\frac{4}{9}$', '$\\frac{2}{9}$', '$\\frac{5}{18}$'],
      answer: 1,
      solution:
        'The condition asks for points more than $5$ away from $9$, which is $x < 4$ or $x > 14$: two stretches of length $4$ each, favorable length $8$, so the probability is $\\frac{8}{18} = \\frac{4}{9}$ ✓. Second route, by complement: $|x - 9| \\le 5$ is the stretch $[4, 14]$ of length $10$, probability $\\frac{10}{18} = \\frac{5}{9}$, so the answer is $1 - \\frac{5}{9} = \\frac{4}{9}$ ✓. $\\frac{5}{9}$ IS THAT COMPLEMENT ✗. COUNTING ONLY ONE OF THE TWO STRETCHES gives $\\frac{4}{18} = \\frac{2}{9}$ ✗. USING THE $5$ ITSELF AS THE FAVORABLE LENGTH gives $\\frac{5}{18}$ ✗.',
    },
  ],

  // slot 9 — conditions on PA and PB. Lanes: product > 33 on length 14;
  //          linear combination on length 12; derived: product >= 24 on 11.
  [
    {
      q: 'A point $P$ is chosen uniformly at random on a segment $AB$ of length $14$. What is the probability that $PA \\cdot PB > 33$?',
      choices: ['$\\frac{3}{7}$', '$\\frac{4}{7}$', '$\\frac{11}{14}$', '$\\frac{3}{14}$'],
      answer: 1,
      solution:
        'Let $PA = x$, so $PB = 14 - x$ and the condition is $x(14 - x) > 33$, or $x^2 - 14x + 33 < 0$, which factors as $(x - 3)(x - 11) < 0$. That holds exactly for $3 < x < 11$, a stretch of length $8$, so the probability is $\\frac{8}{14} = \\frac{4}{7}$ ✓. Second route, by completing the square: $x(14 - x) = 49 - (x - 7)^2$, so the condition is $(x - 7)^2 < 16$, meaning $|x - 7| < 4$ — a stretch of length $8$ centered at the midpoint — and again $\\frac{8}{14} = \\frac{4}{7}$ ✓. TAKING THE OUTSIDE OF THE TWO ROOTS gives the complement $\\frac{3}{7}$ ✗. KEEPING ONLY $x < 11$ gives $\\frac{11}{14}$ ✗. KEEPING ONLY THE STRETCH UP TO THE SMALLER ROOT gives $\\frac{3}{14}$ ✗.',
    },
    {
      q: 'A point $P$ is chosen uniformly at random on a segment $AB$ of length $12$. What is the probability that $2 \\cdot PA + PB < 16$?',
      choices: ['$\\frac{2}{3}$', '$\\frac{4}{9}$', '$\\frac{1}{4}$', '$\\frac{1}{3}$'],
      answer: 3,
      solution:
        'Let $PA = x$, so $PB = 12 - x$ and the condition is $2x + (12 - x) < 16$, which simplifies to $x + 12 < 16$, or $x < 4$: a stretch of length $4$ out of $12$, so the probability is $\\frac{4}{12} = \\frac{1}{3}$ ✓. Second route, by linear interpolation: the quantity $2 \\cdot PA + PB$ is linear along the segment, equal to $12$ at $A$ and $24$ at $B$, so it stays below $16$ on exactly the first $\\frac{16 - 12}{24 - 12} = \\frac{1}{3}$ of the segment ✓. $\\frac{2}{3}$ IS THE COMPLEMENT ✗. FORGETTING THAT $PB = 12 - PA$ and solving $3x < 16$ gives $\\frac{16/3}{12} = \\frac{4}{9}$ ✗. DIVIDING THE $4$ BY $16$ instead of the segment’s length gives $\\frac{1}{4}$ ✗.',
    },
    {
      q: 'A point $P$ is chosen uniformly at random on a segment $AB$ of length $11$. What is the probability that $PA \\cdot PB \\ge 24$?',
      choices: ['$\\frac{6}{11}$', '$\\frac{8}{11}$', '$\\frac{5}{11}$', '$\\frac{3}{11}$'],
      answer: 2,
      solution:
        'Let $PA = x$, so $PB = 11 - x$ and the condition is $x(11 - x) \\ge 24$, or $x^2 - 11x + 24 \\le 0$, which factors as $(x - 3)(x - 8) \\le 0$: it holds exactly for $3 \\le x \\le 8$, a stretch of length $5$, so the probability is $\\frac{5}{11}$ ✓. Second route, by completing the square: $x(11 - x) = \\frac{121}{4} - \\left(x - \\frac{11}{2}\\right)^2$, so the condition is $\\left(x - \\frac{11}{2}\\right)^2 \\le \\frac{25}{4}$, meaning $|x - \\frac{11}{2}| \\le \\frac{5}{2}$ — a stretch of length $5$ centered at the midpoint — and again $\\frac{5}{11}$ ✓. TAKING THE OUTSIDE OF THE ROOTS gives the complement $\\frac{6}{11}$ ✗. KEEPING ONLY $x \\le 8$ gives $\\frac{8}{11}$ ✗. KEEPING ONLY THE STRETCH UP TO THE SMALLER ROOT gives $\\frac{3}{11}$ ✗.',
    },
  ],

  // slot 10 — interleaved schedules. Lanes: every 10 vs every 15 offset 4,
  //           wait < 2; two lamps on different cycles; reversed: find the offset.
  [
    {
      q: 'Route A shuttles leave a plaza every $10$ minutes ($0, 10, 20, \\ldots$ minutes past the hour), and Route B shuttles leave every $15$ minutes starting at $4$ minutes past ($4, 19, 34, \\ldots$). Kim arrives at a uniformly random moment and takes whichever shuttle leaves first. What is the probability that she waits less than $2$ minutes?',
      choices: ['$\\frac{1}{3}$', '$\\frac{1}{5}$', '$\\frac{7}{10}$', '$\\frac{3}{10}$'],
      answer: 3,
      solution:
        'The pattern repeats every $30$ minutes, with departures at $0$, $4$, $10$, $19$, and $20$ past. Kim waits less than $2$ minutes when she arrives inside the $2$ minutes before some departure: the windows $(28, 30)$, $(2, 4)$, $(8, 10)$, $(17, 19)$, and $(18, 20)$. The last two overlap on $(18, 19)$ and merge into $(17, 20)$, length $3$, so the favorable length is $2 + 2 + 2 + 3 = 9$ and the probability is $\\frac{9}{30} = \\frac{3}{10}$ ✓. Second route, gap by gap: the gaps between consecutive departures are $4, 6, 9, 1, 10$, and in a gap of length $g$ the waits of $2$ or more fill $g - 2$ of it (or none when $g < 2$): $2 + 4 + 7 + 0 + 8 = 21$, so she waits at least $2$ with probability $\\frac{21}{30}$ and less than $2$ with probability $1 - \\frac{7}{10} = \\frac{3}{10}$ ✓. COUNTING FIVE FULL WINDOWS, $\\frac{10}{30}$, ignores the overlap and gives $\\frac{1}{3}$ ✗. USING ROUTE A ALONE gives $\\frac{2}{10} = \\frac{1}{5}$ ✗. $\\frac{7}{10}$ IS THE COMPLEMENT ✗.',
    },
    {
      q: 'A red lamp is lit during the first $3$ seconds of every $10$-second cycle. A blue lamp is lit for $4$ seconds starting at second $5$ of every $20$-second cycle. Both cycles begin together at time $0$. At a uniformly random moment, what is the probability that at least one lamp is lit?',
      choices: ['$\\frac{7}{20}$', '$\\frac{1}{2}$', '$\\frac{11}{25}$', '$\\frac{7}{10}$'],
      answer: 1,
      solution:
        'Everything repeats every $20$ seconds. In one period the red lamp is lit on $[0, 3)$ and $[10, 13)$, and the blue lamp on $[5, 9)$. The three stretches are disjoint, so the lit time is $3 + 3 + 4 = 10$ seconds and the probability is $\\frac{10}{20} = \\frac{1}{2}$ ✓. Second route, by adding probabilities: the red lamp is lit $\\frac{3}{10}$ of the time and the blue lamp $\\frac{4}{20} = \\frac{1}{5}$ of the time; since blue’s window $[5, 9)$ misses both red windows, the events never happen together, and disjoint probabilities add: $\\frac{3}{10} + \\frac{1}{5} = \\frac{1}{2}$ ✓. COUNTING RED’S FIRST BLOCK ONLY gives $\\frac{3 + 4}{20} = \\frac{7}{20}$; red lights twice per $20$-second period ✗. SUBTRACTING AN "OVERLAP" $\\frac{3}{10} \\cdot \\frac{1}{5}$ THAT NEVER OCCURS gives $\\frac{11}{25}$; the lamps run on synchronized clocks, not independently ✗. CRAMMING BOTH LAMPS INTO ONE $10$-SECOND CYCLE gives $\\frac{7}{10}$ ✗.',
    },
    {
      q: 'Two shuttle lines each run every $15$ minutes, and each line B shuttle leaves exactly $k$ minutes after a line A shuttle, where $0 < k < 3$. A rider arrives at a uniformly random moment and boards whichever shuttle comes first. The probability that the rider waits less than $3$ minutes is $\\frac{1}{3}$. What is $k$?',
      choices: ['$2$', '$1$', '$5$', '$7$'],
      answer: 0,
      solution:
        'The pattern repeats every $15$ minutes with departures at $0$ and $k$. An arrival in the last $3$ minutes of the period waits less than $3$ minutes for the next line A shuttle, and an arrival in $[0, k)$ waits less than $k < 3$ minutes for the line B shuttle; those stretches sit at opposite ends of the period, so the favorable length is $3 + k$. Setting $\\frac{3 + k}{15} = \\frac{1}{3}$ gives $3 + k = 5$, so $k = 2$ ✓. Second route, by complement: the two gaps between departures have lengths $k$ and $15 - k$; waits of $3$ or more occur only in the long gap, filling $15 - k - 3 = 12 - k$ minutes, so $\\frac{12 - k}{15} = \\frac{2}{3}$ gives $12 - k = 10$ and $k = 2$; check: favorable $3 + 2 = 5$ of $15$ is $\\frac{1}{3}$ ✓. SUBTRACTING THE OVERLAP INSTEAD OF ADDING THE SHORT GAP, $\\frac{6 - k}{15} = \\frac{1}{3}$, gives $1$ ✗. REPORTING THE FAVORABLE LENGTH $3 + k$ instead of $k$ gives $5$ ✗. STRETCHING THE PERIOD TO $30$ MINUTES, $\\frac{3 + k}{30} = \\frac{1}{3}$, gives $7$, but each line already repeats every $15$ ✗.',
    },
  ],
]

export default {
  book: 'intro-counting',
  number: 10,
  sections: { '10.2': s102 },
}
