// Counting & Probability chapter 6 — variations for section 6.2 (Problems).
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every problem here mixes two techniques, so every stem settles its
//    conventions out loud: people, beads, books, and letters are all
//    different; "row" means order matters; at a round table, seatings that
//    differ by a rotation are the same and the stem says so; a bracelet also
//    identifies flips; digit strings are positive integers with no leading
//    zero; grid paths move one unit right or one unit up per step.
//  - Every keyed answer was brute-forced by direct enumeration before the
//    choices were written, and each solution reaches it twice along routes
//    that share no steps: casework against a complement, a glue-and-count
//    against a slot-by-slot build, binomial leg products against a
//    corner-by-corner grid fill, a bijection against inclusion–exclusion.
//  - Each distractor is one named slip, named in CAPS at the end of the
//    solution and marked ✗, in the order the distractors appear.

// Street grid drawn to scale: w blocks wide, h blocks tall, corner A at the
// bottom-left and B at the top-right. `marks` are labeled corners (open or
// solid dots), `closed` corners get an ✕, `hl` lists segments drawn bold.
function grid(w, h, { marks = [], closed = [], hl = [] } = {}) {
  const elems = []
  for (let x = 0; x <= w; x += 1) elems.push({ t: 'seg', a: [x, 0], b: [x, h] })
  for (let y = 0; y <= h; y += 1) elems.push({ t: 'seg', a: [0, y], b: [w, y] })
  for (const [a, b] of hl) elems.push({ t: 'seg', a, b, hl: true })
  for (const m of closed) {
    const [x, y] = m.p
    elems.push({ t: 'seg', a: [x - 0.25, y - 0.25], b: [x + 0.25, y + 0.25], hl: true })
    elems.push({ t: 'seg', a: [x - 0.25, y + 0.25], b: [x + 0.25, y - 0.25], hl: true })
    if (m.label) elems.push({ t: 'label', p: m.p, text: m.label, dx: m.dx ?? 7, dy: m.dy ?? -7 })
  }
  for (const m of marks) elems.push({ t: 'point', p: m.p, label: m.label, open: m.open, dx: m.dx ?? 7, dy: m.dy ?? -7 })
  elems.push({ t: 'point', p: [0, 0], label: 'A', dx: -15, dy: 15 })
  elems.push({ t: 'point', p: [w, h], label: 'B', dx: 6, dy: -6 })
  return { view: [-0.7, -0.7, w + 0.7, h + 0.7], elems }
}

const s62 = [
  // slot 1 — distinct digits with a placed extreme. Route two is the
  // complement inside the same family or a strip-the-leading-zeros count.
  [
    {
      q: 'How many three-digit positive integers have three different digits, with the first digit the largest of the three, and are even?',
      choices: ['$240$', '$120$', '$110$', '$130$'],
      answer: 3,
      solution:
        'Route one, build the number left to right with casework on the first digit $d$, the largest. The units digit is an even digit smaller than $d$, and the middle digit is any other digit smaller than $d$, so the count for each $d$ is (evens below $d$) $\\cdot$ ($d - 1$). Running $d = 2, 3, \\ldots, 9$ gives $1 + 4 + 6 + 12 + 15 + 24 + 28 + 40 = 130$ ✓. Route two, take the complement inside the family. With the first digit largest there are $\\binom{10}{3} \\cdot 2 = 240$ such integers: any $3$ digits, largest first, other two in either order, and $0$ can never lead because it is never the largest. The odd ones have an odd units digit below $d$: $d = 2, \\ldots, 9$ gives $1 + 2 + 6 + 8 + 15 + 18 + 28 + 32 = 110$, and $240 - 110 = 130$ ✓. (The choice $240$ IGNORES THE EVENNESS CONDITION entirely ✗. The choice $120$ ASSUMES EXACTLY HALF ARE EVEN, halving $240$, but the true split is $130$ even to $110$ odd because $0$ is an ever-present even option for the units digit ✗. The choice $110$ REPORTS THE ODD ONES, the complement ✗.)',
    },
    {
      q: 'How many four-digit positive integers have four different digits, with each of the two middle digits larger than each of the two end digits?',
      choices: ['$504$', '$672$', '$840$', '$420$'],
      answer: 1,
      solution:
        'Route one, count strings first and strip the leading zeros. Choose the $4$ digits, $\\binom{10}{4} = 210$ ways; the two largest must take the middle places, in either order, and the two smallest take the ends, in either order, so each set gives $4$ strings and there are $840$ in all. A string leads with $0$ exactly when $0$ is in the set (it is then a smallest digit) and lands at the front, which happens in half of that set’s $4$ strings: $\\binom{9}{3} \\cdot 2 = 168$ bad strings, leaving $840 - 168 = 672$ ✓. Route two, casework on whether $0$ is used. Without $0$: $\\binom{9}{4} \\cdot 4 = 504$. With $0$: the digit $0$ is the smallest, so it must sit at an end, and only the units end is legal; the other three digits are placed as before with $2$ orders for the middle pair, $\\binom{9}{3} \\cdot 2 = 168$. Total $504 + 168 = 672$ ✓. (The choice $504$ FORGETS EVERY NUMBER THAT USES A $0$ ✗. The choice $840$ LETS THE NUMBER START WITH $0$, counting all strings ✗. The choice $420$ FORGETS THAT THE TWO END DIGITS CAN SWAP, using only $2$ arrangements per set ✗.)',
    },
    {
      q: 'How many three-digit positive integers have three different digits, with the middle digit the largest of the three, and are divisible by $5$?',
      choices: ['$58$', '$72$', '$62$', '$36$'],
      answer: 0,
      solution:
        'Route one, casework on the units digit, which must be $0$ or $5$. Units $0$: pick the other two digits from $1$–$9$, and the larger must sit in the middle, $\\binom{9}{2} = 36$ ways. Units $5$: the middle digit $m$ must beat both $5$ and the first digit, so $m$ is $6, 7, 8$, or $9$, and the first digit is any nonzero digit below $m$ other than $5$, giving $m - 2$ choices: $4 + 5 + 6 + 7 = 22$. Total $36 + 22 = 58$ ✓. Route two, count strings with a leading zero allowed, then strip. Units $0$: the first digit cannot be $0$ anyway (it equals the units digit), so $36$ strings, none stripped. Units $5$: first digit any digit below $m$ except $5$, zero allowed, $m - 1$ choices, $5 + 6 + 7 + 8 = 26$ strings; the ones leading with $0$ are one per choice of $m$, so $26 - 4 = 22$. Total $36 + 22 = 58$ ✓. (The choice $72$ TREATS UNITS $5$ LIKE UNITS $0$, doubling $36$, though $5$ also blocks middle digits $1$–$4$ ✗. The choice $62$ LETS THE FIRST DIGIT BE $0$ in the units-$5$ case ✗. The choice $36$ COUNTS ONLY THE MULTIPLES OF $10$ and forgets units $5$ ✗.)',
    },
  ],
  // slot 2 — paths through marked corners. Route two is a corner-by-corner
  // grid fill instead of binomial leg products.
  [
    {
      q: 'A path moves from $A = (0, 0)$ to $B = (6, 4)$ on the grid shown, one step right or one step up at a time. How many paths pass through $(1, 2)$ or through $(4, 1)$, or both?',
      fig: grid(6, 4, { marks: [{ p: [1, 2], label: '(1, 2)', open: true, dx: -26, dy: -10 }, { p: [4, 1], label: '(4, 1)', open: true, dx: 24, dy: 14 }] }),
      choices: ['$210$', '$63$', '$97$', '$113$'],
      answer: 3,
      solution:
        'Route one, split each trip at its marked corner. Through $(1, 2)$: $\\binom{3}{1} = 3$ ways in, $\\binom{7}{2} = 21$ ways on to $B$, so $63$ paths. Through $(4, 1)$: $\\binom{5}{1} = 5$ in, $\\binom{5}{2} = 10$ on, so $50$. No path visits both, since going from $(1, 2)$ to $(4, 1)$ needs a step down and the reverse needs a step left, so there is no overlap: $63 + 50 = 113$ ✓. Route two, fill the grid corner by corner with both marked corners set to $0$: each corner gets the sum of the counts to its left and below, and the count of paths that miss both points comes out to $97$ at $B$. All $\\binom{10}{4} = 210$ paths minus the $97$ that miss both leaves $113$ ✓. (The choice $210$ IGNORES THE CONDITION, counting every path ✗. The choice $63$ COUNTS ONLY THE PATHS THROUGH $(1, 2)$ ✗. The choice $97$ REPORTS THE COMPLEMENT, the paths that miss both corners ✗.)',
    },
    {
      q: 'A path moves from $A = (0, 0)$ to $B = (4, 4)$ on the grid shown, one step right or one step up at a time. How many paths pass through $(1, 1)$ or through $(3, 2)$, or both?',
      fig: grid(4, 4, { marks: [{ p: [1, 1], label: '(1, 1)', open: true, dx: 24, dy: 14 }, { p: [3, 2], label: '(3, 2)', open: true, dx: -26, dy: -10 }] }),
      choices: ['$70$', '$52$', '$88$', '$34$'],
      answer: 1,
      solution:
        'Route one, add the two counts and remove the overlap, because here a path CAN visit both corners: $(3, 2)$ is up and to the right of $(1, 1)$. Through $(1, 1)$: $\\binom{2}{1} \\cdot \\binom{6}{3} = 2 \\cdot 20 = 40$. Through $(3, 2)$: $\\binom{5}{2} \\cdot \\binom{3}{1} = 10 \\cdot 3 = 30$. Through both: $2 \\cdot \\binom{3}{1} \\cdot 3 = 18$. So $40 + 30 - 18 = 52$ ✓. Route two, count the paths that miss both by a corner-by-corner fill with $(1, 1)$ and $(3, 2)$ set to $0$: the fill reaches $18$ at $B$, and of the $\\binom{8}{4} = 70$ paths, $70 - 18 = 52$ hit a marked corner ✓ — the equality of the two $18$’s is a coincidence of this grid. (The choice $70$ IGNORES THE CONDITION ✗. The choice $88$ ADDS THE OVERLAP INSTEAD OF SUBTRACTING IT, $40 + 30 + 18$ ✗. The choice $34$ SUBTRACTS THE OVERLAP TWICE, which answers "exactly one" instead of "or" ✗.)',
    },
    {
      q: 'A path moves from $A = (0, 0)$ to $B = (5, 3)$ on the grid shown, one step right or one step up at a time. How many paths pass through $(2, 2)$ or through $(3, 1)$ (or both), but never through the crossed-out corner $(4, 2)$?',
      fig: grid(5, 3, { marks: [{ p: [2, 2], label: '(2, 2)', open: true, dx: -26, dy: -10 }, { p: [3, 1], label: '(3, 1)', open: true, dx: 24, dy: 14 }], closed: [{ p: [4, 2], label: '(4, 2)', dx: 28, dy: -10 }] }),
      choices: ['$20$', '$48$', '$26$', '$12$'],
      answer: 0,
      solution:
        'Route one, handle each marked corner with the block removed. No path visits both marked corners (each direction between them needs a backward step), so the two cases just add. Through $(2, 2)$: $\\binom{4}{2} = 6$ ways in; from $(2, 2)$ there are $\\binom{4}{1} = 4$ ways on, of which $1 \\cdot 2 = 2$ pass $(4, 2)$, leaving $2$; that gives $6 \\cdot 2 = 12$. Through $(3, 1)$: $\\binom{4}{1} = 4$ in; onward $\\binom{4}{2} = 6$, minus the $2 \\cdot 2 = 4$ through $(4, 2)$, leaving $2$; that gives $4 \\cdot 2 = 8$. Total $12 + 8 = 20$ ✓. Route two, two corner-by-corner fills with $(4, 2)$ set to $0$. One fill gives all paths avoiding $(4, 2)$: $26$ at $B$. A second fill with $(2, 2)$ and $(3, 1)$ also zeroed gives the avoiders that miss both marked corners: $6$. Subtract: $26 - 6 = 20$ ✓. (The choice $48$ IGNORES THE CROSSED-OUT CORNER, counting $24 + 24$ ✗. The choice $26$ DROPS THE THROUGH-CONDITION, counting every path that avoids $(4, 2)$ ✗. The choice $12$ COUNTS ONLY THE PATHS THROUGH $(2, 2)$ ✗.)',
    },
  ],
  // slot 3 — digit or spin sums: stars and bars with a fixed last symbol,
  // against a complement or a multiset listing.
  [
    {
      q: 'How many five-digit positive integers have digits that add up to $6$ and are even?',
      choices: ['$80$', '$126$', '$63$', '$56$'],
      answer: 0,
      solution:
        'Route one, casework on the units digit, which is $0$, $2$, or $4$ (units $6$ would leave nothing for the leading digit). With the units digit fixed, give the leading digit its required $1$ and share what remains freely among the four other digits: units $0$ leaves $5$ to share, $\\binom{8}{3} = 56$; units $2$ leaves $3$, $\\binom{6}{3} = 20$; units $4$ leaves $1$, $\\binom{4}{3} = 4$. No digit can reach $10$ with a sum of $6$. Total $56 + 20 + 4 = 80$ ✓. Route two, complement inside the family. All five-digit integers with digit sum $6$: $\\binom{9}{4} = 126$. The odd ones end in $1$, $3$, or $5$: $\\binom{7}{3} + \\binom{5}{3} + \\binom{3}{3} = 35 + 10 + 1 = 46$, and $126 - 46 = 80$ ✓. (The choice $126$ IGNORES THE EVENNESS CONDITION ✗. The choice $63$ ASSUMES HALF ARE EVEN, but a $0$ units digit is common and even ✗. The choice $56$ COUNTS ONLY THE NUMBERS ENDING IN $0$ ✗.)',
    },
    {
      q: 'A spinner has four equal sections labeled $0$, $1$, $2$, $3$. It is spun $4$ times and the results are recorded in order. How many sequences of $4$ results have a total of $5$?',
      choices: ['$56$', '$16$', '$40$', '$52$'],
      answer: 2,
      solution:
        'Route one, stars and bars with the cap repaired. Nonnegative solutions of $a + b + c + d = 5$: $\\binom{8}{3} = 56$. A spin cannot exceed $3$; if one result is $4$ or more, strip $4$ from it, leaving a free sum of $1$: $\\binom{4}{3} = 4$ sequences per position, $16$ in all, and two spins cannot both exceed $3$. So $56 - 16 = 40$ ✓. Route two, list the multisets of four results summing to $5$ with every entry at most $3$: $\\{3, 2, 0, 0\\}$, $\\{3, 1, 1, 0\\}$, $\\{2, 2, 1, 0\\}$, $\\{2, 1, 1, 1\\}$, which order into $12 + 12 + 12 + 4 = 40$ sequences ✓. (The choice $56$ FORGETS THE CAP, letting a spin show $4$ or $5$ ✗. The choice $16$ REPORTS THE REMOVED SEQUENCES, not the survivors ✗. The choice $52$ SUBTRACTS THE OVERSHOOT ONCE instead of once per position ✗.)',
    },
    {
      q: 'How many four-digit positive integers are odd and have digits that add up to $5$?',
      choices: ['$35$', '$13$', '$22$', '$14$'],
      answer: 1,
      solution:
        'Route one, casework on the units digit, which is odd and at most $5$. Units $1$: the first three digits sum to $4$ with the lead at least $1$: $\\binom{5}{2} = 10$. Units $3$: they sum to $2$: $\\binom{3}{2} = 3$. Units $5$: they sum to $0$, impossible with a nonzero lead. Total $10 + 3 = 13$ ✓. Route two, list them: ending in $1$: $1031, 1121, 1211, 1301, 2021, 2111, 2201, 3011, 3101, 4001$, ten numbers; ending in $3$: $1013, 1103, 2003$, three numbers; and no four-digit number with digit sum $5$ ends in $5$. That is $13$ ✓. (The choice $35$ IGNORES THE ODDNESS CONDITION, counting all digit-sum-$5$ integers ✗. The choice $22$ LETS THE NUMBER START WITH $0$, using $\\binom{6}{2} + \\binom{4}{2} + \\binom{2}{2}$ ✗. The choice $14$ COUNTS THE IMPOSSIBLE UNITS-$5$ CASE as one number ✗.)',
    },
  ],
  // slot 4 — committee plus a named officer: build officer-first, check by
  // casework on the committee’s makeup.
  [
    {
      q: 'A committee of $3$ is chosen from $5$ teachers and $6$ students, and then one member of the committee is named its speaker. In how many ways can this be done if the speaker must be a student?',
      choices: ['$330$', '$270$', '$495$', '$165$'],
      answer: 1,
      solution:
        'Route one, pick the speaker first: one of the $6$ students, then any $2$ of the remaining $10$ people fill the committee, $6 \\cdot \\binom{10}{2} = 6 \\cdot 45 = 270$, and each committee-with-speaker arises exactly once ✓. Route two, casework on the number of students $s$ on the committee, each of whom could be the speaker: $s = 1$: $6 \\cdot \\binom{5}{2} \\cdot 1 = 60$; $s = 2$: $\\binom{6}{2} \\cdot 5 \\cdot 2 = 150$; $s = 3$: $\\binom{6}{3} \\cdot 3 = 60$. Total $60 + 150 + 60 = 270$ ✓. (The choice $330$ CHOOSES THE OTHER TWO FROM ALL $11$ PEOPLE, forgetting the speaker already fills a seat ✗. The choice $495$ LETS A TEACHER BE SPEAKER, $3 \\cdot \\binom{11}{3}$ ✗. The choice $165$ NEVER NAMES A SPEAKER, counting bare committees ✗.)',
    },
    {
      q: 'A committee of $4$ is chosen from $5$ boys and $6$ girls, and then two of its members are named co-chairs, one a boy and one a girl. In how many ways can this be done?',
      choices: ['$1650$', '$330$', '$2160$', '$1080$'],
      answer: 3,
      solution:
        'Route one, pick the co-chairs first: the boy co-chair $5$ ways, the girl co-chair $6$ ways, then any $2$ of the other $9$ people complete the committee: $5 \\cdot 6 \\cdot \\binom{9}{2} = 30 \\cdot 36 = 1080$ ✓. Route two, casework on the committee’s makeup, which needs at least one of each: $1$ boy, $3$ girls: $5 \\cdot \\binom{6}{3} = 100$ committees, $1 \\cdot 3 = 3$ co-chair picks each, $300$; $2$ and $2$: $\\binom{5}{2}\\binom{6}{2} = 150$ committees, $4$ picks, $600$; $3$ boys, $1$ girl: $\\binom{5}{3} \\cdot 6 = 60$ committees, $3$ picks, $180$. Total $300 + 600 + 180 = 1080$ ✓. (The choice $1650$ CHOOSES THE LAST TWO FROM ALL $11$ PEOPLE, forgetting the co-chairs already sit on the committee ✗. The choice $330$ NEVER NAMES THE CO-CHAIRS ✗. The choice $2160$ ORDERS THE TWO CO-CHAIRS, though "boy co-chair" and "girl co-chair" are already distinct roles ✗.)',
    },
    {
      q: 'A committee of $4$ is chosen from $6$ boys and $5$ girls, and then one member of the committee is named its chair. In how many ways can this be done if the chair must be a girl and the committee must contain at least $2$ boys?',
      choices: ['$600$', '$300$', '$400$', '$475$'],
      answer: 2,
      solution:
        'Route one, chair first. Choose the chair from the $5$ girls, then the other $3$ members with at least $2$ boys: either $2$ boys and $1$ of the $4$ remaining girls, $\\binom{6}{2} \\cdot 4 = 60$, or $3$ boys, $\\binom{6}{3} = 20$. Total $5 \\cdot (60 + 20) = 400$ ✓. Route two, casework on the makeup. The committee has a girl (the chair) and at least $2$ boys, so it is $2$ boys $+ 2$ girls or $3$ boys $+ 1$ girl. First kind: $\\binom{6}{2}\\binom{5}{2} = 150$ committees, either girl can chair, $300$. Second: $\\binom{6}{3} \\cdot 5 = 100$ committees, one girl, $100$. Total $400$ ✓. (The choice $600$ DROPS THE BOYS CONDITION, the plain girl-chair count ✗. The choice $300$ READS "AT LEAST $2$" AS "EXACTLY $2$", losing the $3$-boy committees ✗. The choice $475$ PICKS THE EXTRA GIRL FROM ALL $5$, letting the chair be chosen twice ✗.)',
    },
  ],
  // slot 5 — identical objects with an inequality between recipients:
  // casework against a tie-removing symmetry.
  [
    {
      q: 'Nine identical stickers are given to Ana, Ben, and Cal so that each gets at least $1$ sticker. In how many of these divisions does Ana get more stickers than Ben AND more stickers than Cal?',
      choices: ['$28$', '$8$', '$12$', '$11$'],
      answer: 1,
      solution:
        'Route one, casework on Ana’s count $a$. Ben and Cal split $9 - a$ with each at least $1$ and each below $a$: $a = 4$ leaves $5$ as $2 + 3$ or $3 + 2$; $a = 5$ leaves $4$ three ways; $a = 6$ leaves $3$ two ways; $a = 7$ leaves $2$ one way; $a = 3$ fails since $6$ cannot split into two parts below $3$. Total $2 + 3 + 2 + 1 = 8$ ✓. Route two, list the partitions of $9$ into three positive parts and ask which have a unique largest part that can be Ana’s: $\\{7,1,1\\}$ gives $1$ division, $\\{6,2,1\\}$ gives $2$, $\\{5,3,1\\}$ gives $2$, $\\{5,2,2\\}$ gives $1$, $\\{4,3,2\\}$ gives $2$, while $\\{4,4,1\\}$ and $\\{3,3,3\\}$ have tied maxima and give $0$. Total $8$ ✓. (The choice $28$ IS THE TOTAL $\\binom{8}{2}$ with the condition ignored ✗. The choice $12$ ONLY BEATS BEN, halving after removing Ana–Ben ties ✗. The choice $11$ COUNTS TIES AS WINS, reading "more than" as "at least as many" ✗.)',
    },
    {
      q: 'Twelve identical coins are dropped into three labeled jars $A$, $B$, and $C$; a jar may be left empty. In how many ways does jar $A$ end up with more coins than jar $B$?',
      choices: ['$91$', '$84$', '$49$', '$42$'],
      answer: 3,
      solution:
        'Route one, symmetry after removing the ties. There are $\\binom{14}{2} = 91$ ways in all. Jars $A$ and $B$ tie when each holds $k$ coins, $k = 0, 1, \\ldots, 6$, with jar $C$ taking the rest: $7$ ties. Swapping the contents of $A$ and $B$ pairs each remaining way with its mirror, so $A$ is ahead in $\\frac{91 - 7}{2} = 42$ ✓. Route two, casework on $A$’s count $a$: jar $B$ takes $b < a$ with $a + b \\le 12$, so $b$ has $\\min(a, 13 - a)$ choices. Summing $a = 1$ to $12$: $1 + 2 + 3 + 4 + 5 + 6 + 6 + 5 + 4 + 3 + 2 + 1 = 42$ ✓. (The choice $91$ IS THE TOTAL with the condition ignored ✗. The choice $84$ REMOVES THE TIES BUT FORGETS TO HALVE ✗. The choice $49$ COUNTS "$A$ DOES NOT BEAT $B$", the complement including the ties ✗.)',
    },
    {
      q: 'Ten identical cookies are shared by four children, Ana, Ben, Cal, and Dee, with every child getting at least $1$ cookie. In how many of these divisions does Ana get more cookies than Ben, while Cal also gets more cookies than Dee?',
      choices: ['$84$', '$21$', '$14$', '$34$'],
      answer: 2,
      solution:
        'Route one, casework on the pair sums. Let Ana and Ben hold $s$ cookies and Cal and Dee hold $10 - s$. The number of ways to split $s$ between Ana and Ben with Ana strictly ahead and both positive is $0, 1, 1, 2, 2, 3$ for $s = 2, \\ldots, 7$, and the same table applies to Cal and Dee. Summing over $s = 3$ to $7$: $1 \\cdot 3 + 1 \\cdot 2 + 2 \\cdot 2 + 2 \\cdot 1 + 3 \\cdot 1 = 14$ ✓. Route two, double symmetry. Of the $\\binom{9}{3} = 84$ divisions, remove those with a tie in either pair: Ana–Ben ties number $16$ ($k = 1, 2, 3, 4$ each, with $7, 5, 3, 1$ splits for the others), Cal–Dee ties likewise $16$, and both at once $4$; that leaves $84 - 16 - 16 + 4 = 56$ divisions with both pairs strict. Swapping within each pair splits these $56$ into four equal classes, and one class has both Ana and Cal ahead: $\\frac{56}{4} = 14$ ✓. (The choice $84$ IGNORES BOTH CONDITIONS ✗. The choice $21$ QUARTERS $84$ WITHOUT REMOVING THE TIES ✗. The choice $34$ APPLIES ONLY THE ANA–BEN CONDITION ✗.)',
    },
  ],
  // slot 6 — rows with a glued pair and a second restriction: complement
  // against a direct placement of the restricted person or block.
  [
    {
      q: 'Seven people, including Ana, Ben, Cal, Dee, and Eli, stand in a row. Ana and Ben stand next to each other, Cal and Dee stand next to each other, and Eli does not stand at either end of the row. How many arrangements are there?',
      choices: ['$480$', '$192$', '$384$', '$288$'],
      answer: 3,
      solution:
        'Route one, glue and subtract. Glue Ana–Ben and Cal–Dee into blocks: with the $3$ single people that is $5$ units, $5! \\cdot 2 \\cdot 2 = 480$ rows. Eli stands at an end of the row exactly when his unit is first or last among the $5$ units: $2 \\cdot 4! \\cdot 4 = 192$ of those rows. Subtract: $480 - 192 = 288$ ✓. Route two, place Eli’s unit directly. Among the $5$ units, Eli may take any of the $3$ interior unit positions — a block at the end never puts Eli at the end, since Eli is his own unit — then the other $4$ units arrange in $4!$ ways and each block faces $2$ ways: $3 \\cdot 24 \\cdot 4 = 288$ ✓. (The choice $480$ IGNORES THE RULE ON ELI ✗. The choice $192$ REPORTS THE COMPLEMENT, the rows with Eli at an end ✗. The choice $384$ SUBTRACTS ONLY ONE END, $480 - 96$ ✗.)',
    },
    {
      q: 'Seven people, including Ana, Ben, and Cal, stand in a row. Exactly two people stand between Ana and Ben, and Cal is not one of those two. How many arrangements are there?',
      choices: ['$960$', '$576$', '$288$', '$384$'],
      answer: 1,
      solution:
        'Route one, build the pattern. Ana and Ben occupy positions $i$ and $i + 3$ for $i = 1, 2, 3, 4$, in either order: $8$ ways. The two seats between them go to $2$ of the $4$ people who are not Cal, in order: $4 \\cdot 3 = 12$. The remaining $3$ people, Cal among them, fill the other $3$ seats: $3! = 6$. Total $8 \\cdot 12 \\cdot 6 = 576$ ✓. Route two, complement inside the pattern. All rows with exactly two between Ana and Ben: $4 \\cdot 2 \\cdot 5! = 960$. Those with Cal between them: pick Cal’s slot among the two, $2$; fill the other slot from the remaining $4$ people, $4$; arrange the last $3$: $6$. That is $4 \\cdot 2 \\cdot 2 \\cdot 4 \\cdot 6 = 384$, and $960 - 384 = 576$ ✓. (The choice $960$ IGNORES THE RULE ON CAL ✗. The choice $288$ FORGETS ANA AND BEN CAN SWAP ends of the pattern ✗. The choice $384$ REPORTS THE COMPLEMENT, the rows with Cal between them ✗.)',
    },
    {
      q: 'Six people, including Ana, Ben, Cal, and Dee, stand in a row. In how many arrangements are Ana and Ben next to each other, OR Cal and Dee next to each other, or both?',
      choices: ['$384$', '$480$', '$96$', '$336$'],
      answer: 0,
      solution:
        'Route one, inclusion–exclusion. Ana–Ben adjacent: glue them, $5! \\cdot 2 = 240$. Cal–Dee adjacent: likewise $240$. Both pairs adjacent: two blocks and two singles, $4! \\cdot 2 \\cdot 2 = 96$. So $240 + 240 - 96 = 384$ ✓. Route two, split into disjoint piles. Pile one: Ana–Ben adjacent, $240$ rows. Pile two: Cal–Dee adjacent but Ana–Ben apart — glue Cal–Dee into a block among $5$ units, $240$ rows, and remove the ones where Ana and Ben also touch by gluing both, $96$, leaving $144$. The piles share nothing and cover every wanted row: $240 + 144 = 384$ ✓. (The choice $480$ ADDS THE TWO COUNTS WITHOUT REMOVING THE OVERLAP, double-counting rows where both pairs touch ✗. The choice $96$ ANSWERS "BOTH" instead of "or" ✗. The choice $336$ REPORTS THE COMPLEMENT, the rows with neither pair adjacent ✗.)',
    },
  ],
  // slot 7 — round tables and a bracelet: fix a seat to kill rotations,
  // then check with a different fixing or a symmetry-group division.
  [
    {
      q: 'Eight people, including Ana, Ben, Cal, and Dee, sit around a round table with $8$ evenly spaced seats; seatings that differ by a rotation are the same. Ana sits next to Ben, and Cal sits directly opposite Dee. How many seatings are there?',
      choices: ['$1440$', '$288$', '$192$', '$240$'],
      answer: 2,
      solution:
        'Route one, fix Ana to kill the rotations. Ben takes either neighboring seat: $2$. Cal may sit anywhere except the seat opposite Ana and the seat opposite Ben, since Dee must fill Cal’s opposite seat: $6 - 2 = 4$ choices, and Dee’s seat is then forced. The other $4$ people fill the last $4$ seats: $4!$. Total $2 \\cdot 4 \\cdot 24 = 192$ ✓. Route two, place the opposite pair first. With Ana fixed at seat $1$, the four opposite pairs are $\\{1,5\\}, \\{2,6\\}, \\{3,7\\}, \\{4,8\\}$; Cal and Dee take one of the $3$ pairs not using seat $1$, in $2$ orders. If they take $\\{2,6\\}$, Ben’s two candidate seats include seat $2$, so Ben has $1$ choice; same for $\\{4,8\\}$; the pair $\\{3,7\\}$ leaves Ben $2$ choices. The rest fill in $4!$ ways: $(2 \\cdot 1 + 2 \\cdot 1 + 2 \\cdot 2) \\cdot 24 = 192$ ✓. (The choice $1440$ IGNORES CAL AND DEE, $2 \\cdot 6!$ ✗. The choice $288$ GIVES CAL ALL $6$ EMPTY SEATS, forgetting the two whose opposite seat is taken ✗. The choice $240$ EXCLUDES ONLY THE SEAT OPPOSITE ANA for Cal, not the one opposite Ben ✗.)',
    },
    {
      q: 'Eight different beads, including one red, one blue, and one green bead, are strung on a bracelet; bracelets that differ by a rotation or by a flip are the same. The red bead is next to the blue bead, and the green bead is next to neither of them. How many bracelets are there?',
      choices: ['$480$', '$960$', '$240$', '$600$'],
      answer: 0,
      solution:
        'Route one, kill the rotations, then the flips. Fix the red bead at one position: the blue bead takes either neighbor, $2$ ways. The green bead must avoid red’s other neighbor and blue’s other neighbor: $6 - 2 = 4$ positions. The remaining $5$ beads fill in $5!$ ways: $2 \\cdot 4 \\cdot 120 = 960$ arrangements up to rotation. A flip pairs these arrangements two by two, and none is its own mirror since all $8$ beads are different, so there are $\\frac{960}{2} = 480$ bracelets ✓. Route two, divide by the full symmetry group. On $8$ labeled positions: red anywhere, $8$; blue beside it, $2$; green avoiding the two forbidden spots, $4$; the rest, $5!$ — that is $8 \\cdot 2 \\cdot 4 \\cdot 120 = 7680$ labeled circles. Each bracelet corresponds to exactly $8 \\cdot 2 = 16$ of them (eight rotations, each with its flip), so $\\frac{7680}{16} = 480$ ✓. (The choice $960$ FORGETS THE FLIPS, counting a bracelet and its mirror separately ✗. The choice $240$ HALVES TWICE, dividing by $2$ for flips and then again ✗. The choice $600$ KEEPS GREEN AWAY FROM BLUE ONLY, allowing it beside red ✗.)',
    },
    {
      q: 'Seven people, including Ana, Ben, Cal, and Dee, sit around a round table; seatings that differ by a rotation are the same. Ben sits next to Ana, and at least one of Cal and Dee sits next to Ana or next to Ben. How many seatings are there?',
      choices: ['$240$', '$72$', '$192$', '$168$'],
      answer: 3,
      solution:
        'Route one, complement. Fix Ana; Ben takes either neighbor, and the rest fill freely: $2 \\cdot 5! = 240$ seatings with Ben beside Ana. Remove those where Cal and Dee BOTH stay away from the pair: the pair’s two outer neighboring seats must go to $2$ of the other $3$ people, $3 \\cdot 2 = 6$ ways, and the remaining $3$ seats take Cal, Dee, and the last person, $3! = 6$: that is $2 \\cdot 6 \\cdot 6 = 72$. So $240 - 72 = 168$ ✓. Route two, inclusion–exclusion on who touches the pair. The Ana–Ben pair has exactly $2$ outer neighboring seats. Cal in one of them: $2 \\cdot 2 \\cdot 4! = 96$; Dee likewise $96$; both Cal and Dee in them: $2 \\cdot 2 \\cdot 3! = 24$. So $96 + 96 - 24 = 168$ ✓. (The choice $240$ DROPS THE CONDITION ON CAL AND DEE ✗. The choice $72$ REPORTS THE COMPLEMENT, the seatings with both kept away ✗. The choice $192$ FORGETS THE OVERLAP, adding $96 + 96$ ✗.)',
    },
  ],
  // slot 8 — a forced relative order plus an adjacency: glue-then-divide
  // against a choose-the-positions build.
  [
    {
      q: 'The seven letters $A$, $B$, $C$, $D$, $E$, $F$, $G$ are arranged in a row. In how many arrangements is $A$ somewhere to the left of $B$ (not necessarily next to it), while $C$, $D$, and $E$ stand directly next to one another, in any order?',
      choices: ['$360$', '$720$', '$60$', '$2520$'],
      answer: 0,
      solution:
        'Route one, glue and divide. Glue $C$, $D$, $E$ into one block: $5$ units arrange in $5!$ ways and the block orders internally in $3!$ ways, $720$ rows. In exactly half of them $A$ precedes $B$, since swapping $A$ and $B$ pairs the rows off: $\\frac{720}{2} = 360$ ✓. Route two, choose positions. The block of three occupies chairs $i, i+1, i+2$ for $i = 1, \\ldots, 5$, ordered inside in $3! = 6$ ways. Of the $4$ remaining chairs, choose $2$ for $A$ and $B$ — their order is forced, $A$ left — $\\binom{4}{2} = 6$ ways, and $F$, $G$ take the last two chairs in $2$ ways: $5 \\cdot 6 \\cdot 6 \\cdot 2 = 360$ ✓. (The choice $720$ IGNORES THE ORDER RULE ON $A$ AND $B$ ✗. The choice $60$ FORGETS THE $3!$ ORDERS INSIDE THE BLOCK ✗. The choice $2520$ DROPS THE BLOCK CONDITION, $\\frac{7!}{2}$ ✗.)',
    },
    {
      q: 'The digits $1$ through $7$ are each used once to form a seven-digit number. In how many such numbers do the four odd digits $1$, $3$, $5$, $7$ appear in increasing order from left to right (not necessarily next to one another), while $2$ and $6$ are directly next to each other?',
      choices: ['$1440$', '$360$', '$60$', '$30$'],
      answer: 2,
      solution:
        'Route one, glue and divide. Glue $2$ and $6$: $6$ units arrange in $6!$ ways, times $2$ for the order inside the block, $1440$ numbers. The four odd digits land in some $4$ positions, and all $4!$ orderings of them there are equally common, with exactly one increasing: $\\frac{1440}{24} = 60$ ✓. Route two, choose positions. An adjacent pair of places for the $2$–$6$ block: $6$ choices, times $2$ for its order. Of the $5$ remaining places, pick one for the digit $4$: $5$ ways. The four odd digits then fill the last $4$ places in the single increasing order. Total $6 \\cdot 2 \\cdot 5 = 60$ ✓. (The choice $1440$ IGNORES THE ORDER RULE on the odd digits ✗. The choice $360$ DIVIDES BY $4$ INSTEAD OF $4!$ ✗. The choice $30$ FORGETS THE $2$–$6$ BLOCK CAN FACE EITHER WAY ✗.)',
    },
    {
      q: 'The seven letters $A$, $B$, $C$, $D$, $E$, $F$, $G$ are arranged in a row. In how many arrangements is $A$ somewhere to the left of $B$ and $B$ somewhere to the left of $C$ (not necessarily next to one another), while $D$ and $E$ are NOT next to each other?',
      choices: ['$840$', '$600$', '$240$', '$720$'],
      answer: 1,
      solution:
        'Route one, complement. Rows with $A$ before $B$ before $C$: only one of the $3!$ relative orders qualifies, $\\frac{7!}{6} = 840$. Among them, rows with $D$ and $E$ adjacent: glue them, $6! \\cdot 2 = 1440$ rows, of which $\\frac{1440}{6} = 240$ have the required $A$, $B$, $C$ order. Subtract: $840 - 240 = 600$ ✓. Route two, gaps. Arrange $A$, $B$, $C$, $F$, $G$ with the forced order: $\\frac{5!}{3!} = 20$ rows. These five letters leave $6$ gaps (ends included); place $D$ and $E$ into two DIFFERENT gaps, in order: $6 \\cdot 5 = 30$. Total $20 \\cdot 30 = 600$ ✓. (The choice $840$ IGNORES THE RULE ON $D$ AND $E$ ✗. The choice $240$ REPORTS THE COMPLEMENT, the rows with $D$ and $E$ together ✗. The choice $720$ HALVES THE GLUED COUNT, subtracting $120$ as if the $D$–$E$ block could not flip ✗.)',
    },
  ],
  // slot 9 — no-two-consecutive selections: the shift bijection against
  // casework or a complement.
  [
    {
      q: 'How many $4$-element subsets of $\\{1, 2, 3, \\ldots, 12\\}$ contain no two consecutive integers and contain the number $6$?',
      choices: ['$40$', '$126$', '$84$', '$56$'],
      answer: 0,
      solution:
        'Route one, casework around $6$. The numbers $5$ and $7$ are banned, so the other $3$ elements come from the two blocks $\\{1, 2, 3, 4\\}$ and $\\{8, \\ldots, 12\\}$, no two consecutive within a block ($4$ and $8$ are safely apart). Taking $k$ from the left block: $k = 0$: $\\binom{3}{3} = 1$ by the shift trick on a block of five; $k = 1$: $4 \\cdot \\binom{4}{2} = 24$; $k = 2$: $\\binom{3}{2} \\cdot 5 = 15$; $k = 3$: impossible in a block of four. Total $1 + 24 + 15 = 40$ ✓. Route two, complement inside the no-consecutive family. All $4$-subsets of $\\{1, \\ldots, 12\\}$ with no two consecutive: $\\binom{9}{4} = 126$. Those avoiding $6$ pick from the blocks $\\{1, \\ldots, 5\\}$ and $\\{7, \\ldots, 12\\}$, no two consecutive in either block: taking $i$ from the first block gives $\\binom{6-i}{i}\\binom{3+i}{4-i}$ subsets by the shift trick applied to each block, and $i = 0, 1, 2, 3, 4$ yields $0 + 20 + 60 + 6 + 0 = 86$. So $126 - 86 = 40$ ✓. (The choice $126$ DROPS THE REQUIREMENT THAT $6$ BE CHOSEN ✗. The choice $84$ PICKS THE OTHER THREE FREELY from the nine allowed numbers, ignoring consecutiveness among them ✗. The choice $56$ ANSWERS A DIFFERENT PROBLEM, the plain $\\binom{8}{3}$ shift count ✗.)',
    },
    {
      q: 'Three students, all different, choose $3$ of the $11$ chairs in a row so that no two of them sit in adjacent chairs. In how many ways can this be done?',
      choices: ['$84$', '$990$', '$504$', '$165$'],
      answer: 2,
      solution:
        'Route one, chairs then students. Choosing $3$ of $11$ chairs with no two adjacent matches, by subtracting $0, 1, 2$ from the chair numbers, choosing any $3$ of $9$ chairs: $\\binom{9}{3} = 84$ chair sets. The three different students then take the chosen chairs in $3! = 6$ orders: $84 \\cdot 6 = 504$ ✓. Route two, complement on the chair sets. Of the $\\binom{11}{3} = 165$ chair sets, those with at least one adjacent pair: $10$ adjacent pairs times $9$ third chairs counts every three-in-a-row set twice, and there are $9$ of those: $90 - 9 = 81$ bad sets, so $165 - 81 = 84$ good ones, and seating the students gives $504$ ✓. (The choice $84$ FORGETS TO SEAT THE STUDENTS, counting bare chair sets ✗. The choice $990$ IGNORES THE ADJACENCY RULE, $165 \\cdot 6$ ✗. The choice $165$ MAKES BOTH SLIPS AT ONCE ✗.)',
    },
    {
      q: 'How many $3$-element subsets of $\\{1, 2, 3, \\ldots, 10\\}$ contain at least one pair of consecutive integers?',
      choices: ['$120$', '$64$', '$56$', '$72$'],
      answer: 1,
      solution:
        'Route one, complement. There are $\\binom{10}{3} = 120$ subsets in all; the ones with NO consecutive pair number $\\binom{8}{3} = 56$ by the shift trick (subtract $0, 1, 2$ from the sorted elements). So $120 - 56 = 64$ ✓. Route two, direct casework. Exactly one adjacent pair: choose the pair, $9$ ways; the third element must touch neither end of the pair, leaving $7$ choices for the end pairs $\\{1,2\\}$ and $\\{9,10\\}$ and $6$ for the other seven: $2 \\cdot 7 + 7 \\cdot 6 = 56$. All three consecutive: $8$ runs. Total $56 + 8 = 64$ ✓. (The choice $120$ IGNORES THE CONDITION ✗. The choice $56$ REPORTS THE COMPLEMENT, the subsets with no consecutive pair ✗. The choice $72$ MULTIPLIES $9$ PAIRS BY $8$ THIRD ELEMENTS, double-counting every run of three ✗.)',
    },
  ],
  // slot 10 — "exactly one" and "both but not" conditions: leg products with
  // inclusion–exclusion against a complement or a blocked-leg count.
  [
    {
      q: 'A path moves from $A = (0, 0)$ to $B = (5, 5)$ on the grid shown, one step right or one step up at a time. How many paths pass through exactly one of the two marked corners?',
      fig: grid(5, 5, { marks: [{ p: [1, 2], label: '(1, 2)', open: true, dx: -26, dy: -10 }, { p: [3, 3], label: '(3, 3)', open: true, dx: 24, dy: 14 }] }),
      choices: ['$171$', '$225$', '$117$', '$54$'],
      answer: 2,
      solution:
        'Route one, count each corner and subtract the doubly counted paths twice. Through $(1, 2)$: $\\binom{3}{1} \\cdot \\binom{7}{3} = 3 \\cdot 35 = 105$. Through $(3, 3)$: $\\binom{6}{3} \\cdot \\binom{4}{2} = 20 \\cdot 6 = 120$. Through both — $(3, 3)$ is reachable from $(1, 2)$: $3 \\cdot \\binom{3}{1} \\cdot 6 = 54$. A both-corners path sits once in each count but deserves zero: $105 + 120 - 2 \\cdot 54 = 117$ ✓. Route two, remove the two unwanted piles from the total. A corner-by-corner fill with both marked corners set to $0$ shows $81$ of the $\\binom{10}{5} = 252$ paths miss both corners, and the leg product above gives $54$ through both; exactly one is everything else: $252 - 81 - 54 = 117$ ✓. (The choice $171$ SUBTRACTS THE OVERLAP ONCE, which answers "at least one" ✗. The choice $225$ NEVER SUBTRACTS THE OVERLAP ✗. The choice $54$ ANSWERS "BOTH" instead of "exactly one" ✗.)',
    },
    {
      q: 'A string of $5$ letters is formed from the letters $A$, $B$, $C$, with repetition allowed. How many such strings contain the letter $A$ or the letter $B$, but not both?',
      choices: ['$62$', '$242$', '$180$', '$211$'],
      answer: 0,
      solution:
        'Route one, two disjoint piles. Strings with an $A$ but no $B$ use only $A$ and $C$ with at least one $A$: $2^5 - 1 = 31$. Strings with a $B$ but no $A$: likewise $31$. No string sits in both piles: $31 + 31 = 62$ ✓. Route two, inclusion–exclusion from the totals. Contains an $A$: $3^5 - 2^5 = 211$; contains a $B$: $211$; contains both: $3^5 - 2 \\cdot 2^5 + 1 = 180$. "Exactly one letter present" is each single count minus the both-count, summed: $(211 - 180) + (211 - 180) = 62$ ✓. (The choice $242$ ANSWERS "AT LEAST ONE OF $A$, $B$", $3^5 - 1$ ✗. The choice $180$ ANSWERS "BOTH", the opposite condition ✗. The choice $211$ COUNTS THE STRINGS WITH AN $A$, ignoring the rule on $B$ ✗.)',
    },
    {
      q: 'A path moves from $A = (0, 0)$ to $B = (5, 4)$ on the grid shown, one step right or one step up at a time. How many paths pass through both $(1, 1)$ and $(4, 3)$, but never through the crossed-out corner $(2, 2)$?',
      fig: grid(5, 4, { marks: [{ p: [1, 1], label: '(1, 1)', dx: 24, dy: 14 }, { p: [4, 3], label: '(4, 3)', dx: -30, dy: -10 }], closed: [{ p: [2, 2], label: '(2, 2)', dx: -30, dy: -12 }] }),
      choices: ['$40$', '$24$', '$32$', '$16$'],
      answer: 3,
      solution:
        'Route one, subtract the blocked paths from the both-corners count. Through both marked corners: $\\binom{2}{1} \\cdot \\binom{5}{2} \\cdot \\binom{2}{1} = 2 \\cdot 10 \\cdot 2 = 40$. Of these, the ones through $(2, 2)$ split at all four points: $2 \\cdot 2 \\cdot 3 \\cdot 2 = 24$. Subtract: $40 - 24 = 16$ ✓. Route two, block the middle leg. Every wanted path runs $A \\to (1, 1) \\to (4, 3) \\to B$, and only the middle leg can meet $(2, 2)$: the $\\binom{5}{2} = 10$ middle legs include $2 \\cdot 3 = 6$ through $(2, 2)$, leaving $4$. Multiply the legs: $2 \\cdot 4 \\cdot 2 = 16$ ✓. (The choice $40$ IGNORES THE CROSSED-OUT CORNER ✗. The choice $24$ REPORTS THE REMOVED PATHS, the ones through $(2, 2)$ ✗. The choice $32$ SUBTRACTS ONLY THE WAYS INTO $(2, 2)$, using $10 - 2$ middle legs instead of $10 - 6$ ✗.)',
    },
  ],
]

export default { book: 'intro-counting', number: 6, sections: { '6.2': s62 } }
