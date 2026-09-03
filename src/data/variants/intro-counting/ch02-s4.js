// Counting & Probability chapter 2 — variations for section 2.5
// (Counting with Restrictions). All problems and solutions are original
// MathQuest content.
//
// House rules for this file:
//  - Every stem settles its conventions: people, books, cars, and letters are
//    all different, every arrangement is a straight row with a left end and a
//    right end (never a circle), and "next to" means occupying two adjacent
//    spots in that row.
//  - Every keyed answer is reached twice along routes that share no steps: a
//    glued block against a count of where the block can sit, a direct
//    restricted count against its complement, a fixed pattern against a
//    seat-by-seat product, a formula against a symmetry ratio. Route two never
//    reuses route one’s number.
//  - Each distractor is one named mistake — forgetting the order inside a
//    block, giving a pinned item only one of its two ends, subtracting only
//    one end’s bad cases — and the mistake is named in CAPS.

const s25 = [
  // slot 1 — a fixed group must fill fixed spots
  [
    {
      q: 'Six hikers, all different people, walk single file along a trail, so the line has a front and a back. The two guides, Pia and Quinn, must be the first two in line, in either order. How many different lines are possible?',
      choices: ['$24$', '$720$', '$48$', '$240$'],
      answer: 2,
      solution:
        'Route one, fill the restricted spots first. The front two places must hold Pia and Quinn, and either can be first: $2$ orders. The other four hikers then take the remaining four places in any order, $4! = 24$ ways. Multiply: $2 \\cdot 24 = 48$ ✓. Route two, a symmetry ratio. Ignore the rule and count every line: $6! = 720$. In each line the front two places are filled by some pair of hikers, and by symmetry every one of the $\\binom{6}{2} = 15$ pairs is the front pair in the same number of lines. The pair $\\{$Pia, Quinn$\\}$ is therefore the front pair in $\\frac{720}{15} = 48$ lines ✓. (The choice $24$ FORGETS THAT THE TWO GUIDES CAN SWAP places at the front ✗; the choice $720$ IGNORES THE RULE entirely ✗; the choice $240$ is $2 \\cdot 5!$, which PUTS ONLY ONE GUIDE AT THE FRONT and lets the other wander ✗.)',
    },
    {
      q: 'Eight different books are lined up on a shelf that has a left end and a right end. Four of the books are cookbooks, and they must occupy the four leftmost spots, in any order among themselves. How many arrangements are possible?',
      choices: ['$576$', '$24$', '$40{,}320$', '$1152$'],
      answer: 0,
      solution:
        'Route one, two independent orderings. The four leftmost spots hold the four cookbooks, which can be ordered among themselves in $4! = 24$ ways. The four rightmost spots hold the other four books, ordered in $4! = 24$ ways. The two orderings are independent, so multiply: $24 \\cdot 24 = 576$ ✓. Route two, a symmetry ratio. With no rule there are $8! = 40{,}320$ arrangements. Each arrangement puts some set of four books on the left half, and by symmetry each of the $\\binom{8}{4} = 70$ possible four-book sets is the left-half set equally often. The set of four cookbooks is the left-half set in $\\frac{40{,}320}{70} = 576$ arrangements ✓. (The choice $24$ ORDERS ONLY THE COOKBOOKS and forgets to order the other four books ✗; the choice $40{,}320$ IGNORES THE RULE ✗; the choice $1152$ DOUBLES THE COUNT AS IF THE COOKBOOKS COULD TAKE EITHER HALF, but the stem fixes them on the left ✗.)',
    },
    {
      q: 'Five children, all different, including Ivy and Jun, line up single file for a slide, so the line has a front and a back. How many lines are possible in which Ivy and Jun are not both among the last two in line? (A line where only one of them is in the last two, or neither is, counts.)',
      choices: ['$12$', '$72$', '$120$', '$108$'],
      answer: 3,
      solution:
        'Route one, the complement. All lines: $5! = 120$. Lines where Ivy and Jun are both in the last two places: the back pair is Ivy and Jun in $2$ orders, and the other three children fill the front three places in $3! = 6$ ways, so $2 \\cdot 6 = 12$. Subtract: $120 - 12 = 108$ ✓. Route two, cases on the back two places. Case 1, exactly one of Ivy and Jun is in the back two: choose which of them ($2$), which back place that child takes ($2$), and which of the other three children takes the other back place ($3$); the remaining three children fill the front three places in $3! = 6$ ways: $2 \\cdot 2 \\cdot 3 \\cdot 6 = 72$. Case 2, neither is in the back two: the back places take two of the other three children in order, $3 \\cdot 2 = 6$ ways, and the front three places hold Ivy, Jun, and the last child in $3! = 6$ ways: $36$. Total $72 + 36 = 108$ ✓. (The choice $12$ is THE COMPLEMENT, the lines where both are at the back ✗; the choice $72$ SUBTRACTS EVERY LINE WHERE IVY AND JUN ARE NEXT TO EACH OTHER anywhere, not just at the back ✗; the choice $120$ IGNORES THE RULE ✗.)',
    },
  ],
  // slot 2 — a block with a fixed inside order
  [
    {
      q: 'The seven different letters A, B, C, D, E, F, G are arranged in a row. In how many arrangements do A, B, C stand side by side reading ABC from left to right?',
      choices: ['$720$', '$5040$', '$24$', '$120$'],
      answer: 3,
      solution:
        'Route one, glue the block. Tape A, B, C together as one item whose inside order is already fixed as ABC. That leaves $5$ items to arrange — the block and D, E, F, G — in $5! = 120$ ways, and the block has only $1$ allowed inside order, so the count is $120$ ✓. Route two, count where the block can sit. The block ABC occupies three consecutive positions, starting at position $1, 2, 3, 4$, or $5$ of the seven: $5$ placements. Whichever placement is chosen, the remaining four positions are filled by D, E, F, G in $4! = 24$ ways. Multiply: $5 \\cdot 24 = 120$ ✓. (The choice $720$ MULTIPLIES BY $3! = 6$ INSIDE ORDERS the stem forbids, since only ABC is allowed ✗; the choice $5040$ IGNORES THE RULE ✗; the choice $24$ ORDERS ONLY D, E, F, G and forgets the block can move ✗.)',
    },
    {
      q: 'Seven different cars park in a row of seven spaces. Three of the cars are vans, and the three vans must park in three consecutive spaces, in any order among themselves. How many parkings are possible?',
      choices: ['$120$', '$720$', '$5040$', '$240$'],
      answer: 1,
      solution:
        'Route one, glue the block. Tape the three vans into one block: the block plus the other four cars make $5$ items, arranged in $5! = 120$ ways. Inside the block the three vans can be ordered in $3! = 6$ ways. Multiply: $120 \\cdot 6 = 720$ ✓. Route two, count where the block can sit. Three consecutive spaces out of seven can start at space $1, 2, 3, 4$, or $5$: $5$ placements. Fill the chosen three spaces with the vans in $3 \\cdot 2 \\cdot 1 = 6$ orders, then the other four spaces with the other four cars in $4 \\cdot 3 \\cdot 2 \\cdot 1 = 24$ orders: $5 \\cdot 6 \\cdot 24 = 720$ ✓. (The choice $120$ FORGETS THE ORDER INSIDE THE BLOCK ✗; the choice $5040$ IGNORES THE RULE ✗; the choice $240$ USES $2$ FOR THE INSIDE ORDER as if the block were a pair, not a trio ✗.)',
    },
    {
      q: 'The six different letters P, Q, R, S, T, U are arranged in a row. In how many arrangements do P, Q, R occupy three consecutive positions, in any order among themselves?',
      choices: ['$144$', '$24$', '$720$', '$48$'],
      answer: 0,
      solution:
        'Route one, glue the block. Tape P, Q, R into one block: with S, T, U that makes $4$ items, arranged in $4! = 24$ ways. Inside the block P, Q, R can be ordered in $3! = 6$ ways. Multiply: $24 \\cdot 6 = 144$ ✓. Route two, count where the block can sit. Three consecutive positions out of six are positions $1$–$3$, $2$–$4$, $3$–$5$, or $4$–$6$: $4$ placements. Fill those three positions with P, Q, R in $3 \\cdot 2 \\cdot 1 = 6$ orders, and the other three positions with S, T, U in $3 \\cdot 2 \\cdot 1 = 6$ orders: $4 \\cdot 6 \\cdot 6 = 144$ ✓. (The choice $24$ ALLOWS ONLY THE SINGLE INSIDE ORDER PQR, but the stem allows any order ✗; the choice $720$ IGNORES THE RULE ✗; the choice $48$ USES $2$ FOR THE INSIDE ORDER as if the block were a pair ✗.)',
    },
  ],
  // slot 3 — one item limited to a few spots
  [
    {
      q: 'Eight runners, all different, are assigned to lanes $1$ through $8$, one runner per lane. Tomas must be assigned lane $1$ or lane $2$. How many assignments are possible?',
      choices: ['$5040$', '$40{,}320$', '$10{,}080$', '$30{,}240$'],
      answer: 2,
      solution:
        'Route one, place the restricted runner first. Tomas takes lane $1$ or lane $2$: $2$ choices. The other seven runners fill the remaining seven lanes in $7! = 5040$ ways. Multiply: $2 \\cdot 5040 = 10{,}080$ ✓. Route two, the complement. With no rule there are $8! = 40{,}320$ assignments. The bad ones put Tomas in one of lanes $3$ through $8$: $6$ choices for his lane, then $7! = 5040$ for the others, $30{,}240$ bad assignments. Subtract: $40{,}320 - 30{,}240 = 10{,}080$ ✓. (The choice $5040$ PINS TOMAS TO A SINGLE LANE ✗; the choice $40{,}320$ IGNORES THE RULE ✗; the choice $30{,}240$ is THE COMPLEMENT, the assignments that break the rule ✗.)',
    },
    {
      q: 'A playlist plays $5$ different songs one after another, each exactly once. The title track must be one of the first $3$ songs played. How many playlists are possible?',
      choices: ['$72$', '$24$', '$120$', '$48$'],
      answer: 0,
      solution:
        'Route one, place the restricted song first. The title track takes position $1$, $2$, or $3$: $3$ choices. The other four songs fill the remaining four positions in $4! = 24$ ways. Multiply: $3 \\cdot 24 = 72$ ✓. Route two, the complement. All playlists: $5! = 120$. The bad ones play the title track fourth or fifth: $2$ choices of position, then $4! = 24$ for the rest, $48$ bad playlists. Subtract: $120 - 48 = 72$ ✓. (The choice $24$ PINS THE TITLE TRACK TO A SINGLE POSITION ✗; the choice $120$ IGNORES THE RULE ✗; the choice $48$ is THE COMPLEMENT, the playlists that break the rule ✗.)',
    },
    {
      q: 'Seven different cars park in a row of seven spaces. The red car must not take any of the three spaces nearest the entrance. How many parkings are possible?',
      choices: ['$2160$', '$5040$', '$720$', '$2880$'],
      answer: 3,
      solution:
        'Route one, place the restricted car first. The red car may use any of the $7 - 3 = 4$ spaces farther from the entrance: $4$ choices. The other six cars fill the remaining six spaces in $6! = 720$ ways. Multiply: $4 \\cdot 720 = 2880$ ✓. Route two, the complement. With no rule there are $7! = 5040$ parkings. The bad ones put the red car in one of the $3$ nearest spaces: $3 \\cdot 6! = 3 \\cdot 720 = 2160$. Subtract: $5040 - 2160 = 2880$ ✓. (The choice $2160$ is THE COMPLEMENT, the parkings with the red car in a forbidden space ✗; the choice $5040$ IGNORES THE RULE ✗; the choice $720$ PINS THE RED CAR TO A SINGLE SPACE ✗.)',
    },
  ],
  // slot 4 — a pinned item plus a "not directly next to it" rule
  [
    {
      q: 'Seven campers, all different people, walk single file, so the line has a front and a back. Fay must be at the front of the line, and Gus must not be the camper directly behind her. How many lines are possible?',
      choices: ['$720$', '$600$', '$120$', '$3600$'],
      answer: 1,
      solution:
        'Route one, place the restricted campers first. Fay is fixed at the front. Gus may take any of the six places behind her except the one directly behind her: $5$ choices. The other five campers fill the remaining five places in $5! = 120$ ways. Multiply: $5 \\cdot 120 = 600$ ✓. Route two, the complement. With Fay at the front, the six others fill the six places behind her in $6! = 720$ ways. The bad ones have Gus directly behind Fay: Gus is then fixed too, and the other five fill five places in $5! = 120$ ways. Subtract: $720 - 120 = 600$ ✓. (The choice $720$ IGNORES GUS’S RULE ✗; the choice $120$ is THE COMPLEMENT, the lines with Gus directly behind Fay ✗; the choice $3600$ COUNTS LINES WHERE FAY AND GUS ARE NOT NEIGHBORS ANYWHERE and forgets Fay must be at the front ✗.)',
    },
    {
      q: 'Eight beads, each a different color, are threaded onto a straight string whose two ends are distinguishable, so each bead has a definite position from the left end to the right end. The black bead must be at the left end, and the white bead must not be at the right end. How many arrangements are possible?',
      choices: ['$5040$', '$720$', '$8640$', '$4320$'],
      answer: 3,
      solution:
        'Route one, place the restricted beads first. The black bead is fixed at the left end. The white bead may take any of the other seven positions except the right end: $6$ choices. The remaining six beads fill the remaining six positions in $6! = 720$ ways. Multiply: $6 \\cdot 720 = 4320$ ✓. Route two, the complement. With the black bead fixed on the left, the other seven beads fill seven positions in $7! = 5040$ ways. The bad ones have the white bead at the right end, leaving $6! = 720$ ways for the six beads between. Subtract: $5040 - 720 = 4320$ ✓. (The choice $5040$ IGNORES THE WHITE BEAD’S RULE ✗; the choice $720$ is THE COMPLEMENT, the arrangements with the white bead at the right end ✗; the choice $8640$ LETS THE BLACK BEAD SIT AT EITHER END, but the stem fixes it on the left ✗.)',
    },
    {
      q: 'Six students, all different, line up single file, so the line has a front and a back. Dev must be at the front or at the back of the line, and Eli must not stand directly next to Dev. How many lines are possible?',
      choices: ['$240$', '$96$', '$192$', '$480$'],
      answer: 2,
      solution:
        'Route one, place the restricted students first. Dev takes the front or the back: $2$ choices. Whichever end he takes, exactly one place is next to him, so Eli may take any of the other $4$ places. The remaining four students fill the remaining four places in $4! = 24$ ways. Multiply: $2 \\cdot 4 \\cdot 24 = 192$ ✓. Route two, the complement. Lines with Dev at an end: $2 \\cdot 5! = 240$. Among those, the bad ones have Eli directly next to Dev: Dev at an end ($2$ ways), Eli in the one place beside him, the other four in $4! = 24$ ways, $2 \\cdot 24 = 48$. Subtract: $240 - 48 = 192$ ✓. (The choice $240$ IGNORES ELI’S RULE ✗; the choice $96$ GIVES DEV ONLY ONE OF HIS TWO ENDS ✗; the choice $480$ COUNTS LINES WHERE DEV AND ELI ARE NOT NEIGHBORS ANYWHERE and forgets Dev must be at an end ✗.)',
    },
  ],
  // slot 5 — a block of several items
  [
    {
      q: 'Nine different books are lined up on a shelf with a left end and a right end. Four of the books are novels, and the four novels must all be next to each other, in any order among themselves. How many arrangements are possible?',
      choices: ['$17{,}280$', '$720$', '$1440$', '$362{,}880$'],
      answer: 0,
      solution:
        'Route one, glue the block. Tape the four novels into one block: the block plus the other five books make $6$ items, arranged in $6! = 720$ ways. Inside the block the novels can be ordered in $4! = 24$ ways. Multiply: $720 \\cdot 24 = 17{,}280$ ✓. Route two, count where the block can sit. Four consecutive spots out of nine can start at spot $1$ through spot $6$: $6$ placements. Fill the chosen four spots with the novels in $4 \\cdot 3 \\cdot 2 \\cdot 1 = 24$ orders, then the other five spots with the other five books in $5 \\cdot 4 \\cdot 3 \\cdot 2 \\cdot 1 = 120$ orders: $6 \\cdot 24 \\cdot 120 = 17{,}280$ ✓. (The choice $720$ FORGETS THE ORDER INSIDE THE BLOCK ✗; the choice $1440$ USES $2$ FOR THE INSIDE ORDER as if the block were a pair ✗; the choice $362{,}880$ IGNORES THE RULE ✗.)',
    },
    {
      q: 'Six boys and two girls, all different people, stand in a row for a photo. The two girls must stand next to each other. How many arrangements are possible?',
      choices: ['$5040$', '$40{,}320$', '$10{,}080$', '$30{,}240$'],
      answer: 2,
      solution:
        'Route one, glue the block. Tape the two girls into one block: the block plus six boys make $7$ items, arranged in $7! = 5040$ ways. Inside the block the girls can swap: $2$ ways. Multiply: $5040 \\cdot 2 = 10{,}080$ ✓. Route two, count where the block can sit. Two consecutive spots out of eight are spots $1$–$2$, $2$–$3$, and so on up to $7$–$8$: $7$ placements. Fill the chosen pair of spots with the two girls in $2$ orders, then the other six spots with the six boys in $6! = 720$ orders: $7 \\cdot 2 \\cdot 720 = 10{,}080$ ✓. (The choice $5040$ FORGETS THAT THE TWO GIRLS CAN SWAP inside the block ✗; the choice $40{,}320$ IGNORES THE RULE ✗; the choice $30{,}240$ is THE COMPLEMENT, the arrangements with the girls apart ✗.)',
    },
    {
      q: 'Six different books, three of them math books, are placed on a shelf with a left end and a right end. How many arrangements are there in which the three math books are not all next to each other? (Two of them may be neighbors; only all three together is ruled out.)',
      choices: ['$144$', '$576$', '$696$', '$480$'],
      answer: 1,
      solution:
        'Route one, the complement. All arrangements: $6! = 720$. The bad ones have the three math books together: glue them into a block, arrange the block and the other three books in $4! = 24$ ways, times $3! = 6$ inside orders, $144$. Subtract: $720 - 144 = 576$ ✓. Route two, choose the math books’ positions directly. The three math books occupy some $3$ of the $6$ positions, $\\binom{6}{3} = 20$ position sets in all. The sets of three consecutive positions are $1$–$3$, $2$–$4$, $3$–$5$, $4$–$6$: exactly $4$ of them. So $20 - 4 = 16$ position sets are allowed. For each allowed set, the math books fill their three positions in $3! = 6$ orders and the other books fill theirs in $3! = 6$ orders: $16 \\cdot 6 \\cdot 6 = 576$ ✓. (The choice $144$ is THE COMPLEMENT, the arrangements with all three math books together ✗; the choice $696$ SUBTRACTS $4! = 24$ ALONE, forgetting the $3!$ inside orders of the block ✗; the choice $480$ SUBTRACTS THE ARRANGEMENTS WHERE A PAIR OF MATH BOOKS IS GLUED, $5! \\cdot 2 = 240$, which is a different event ✗.)',
    },
  ],
  // slot 6 — alternating
  [
    {
      q: 'Five boys and six girls, all different people, stand in a row so that boys and girls alternate (no two boys next to each other and no two girls next to each other). How many arrangements are possible?',
      choices: ['$172{,}800$', '$720$', '$14{,}400$', '$86{,}400$'],
      answer: 3,
      solution:
        'Route one, fix the pattern, then order each group. Eleven spots alternate between two groups only as GBGBGBGBGBG or BGBGBGBGBGB; the second pattern needs six boys and five girls, which we do not have, so the pattern is forced: girls in the six odd spots, boys in the five even spots. The girls fill their six spots in $6! = 720$ ways and the boys fill theirs in $5! = 120$ ways. Multiply: $720 \\cdot 120 = 86{,}400$ ✓. Route two, spot by spot from the left. The first spot must be a girl (a boy first would leave five boys for five even spots and six girls for only five odd spots): $6$ choices. The second spot is a boy, $5$ choices; the third a girl from the $5$ left; the fourth a boy from the $4$ left; and so on, the pools shrinking in step: $6 \\cdot 5 \\cdot 5 \\cdot 4 \\cdot 4 \\cdot 3 \\cdot 3 \\cdot 2 \\cdot 2 \\cdot 1 \\cdot 1 = 86{,}400$ ✓. (The choice $172{,}800$ DOUBLES AS IF EITHER GROUP COULD START, which only works with equal numbers ✗; the choice $720$ ORDERS ONLY THE GIRLS ✗; the choice $14{,}400$ is $5! \\cdot 5!$, ARRANGING ONLY FIVE OF THE SIX GIRLS ✗.)',
    },
    {
      q: 'The digits $1, 2, 3, 4, 5, 6, 7, 8$ are each used exactly once to form an eight-digit number in which odd and even digits alternate (no two neighboring digits have the same parity). How many such numbers are there?',
      choices: ['$576$', '$1152$', '$40{,}320$', '$24$'],
      answer: 1,
      solution:
        'Route one, fix the pattern, then order each group. There are four odd digits and four even digits, so both patterns work: odd-even-odd-even-… with odd digits in positions $1, 3, 5, 7$, or even-odd-even-odd-… with even digits there. In either pattern the four odd digits fill their four positions in $4! = 24$ ways and the four even digits fill theirs in $4! = 24$ ways: $24 \\cdot 24 = 576$ per pattern. Two patterns: $2 \\cdot 576 = 1152$ ✓. Route two, position by position from the left. The first digit is any of the $8$. The second must have the other parity: $4$ choices. The third must match the first digit’s parity, and $3$ of those digits remain; the fourth matches the second, $3$ remain; then $2$, $2$, $1$, $1$: $8 \\cdot 4 \\cdot 3 \\cdot 3 \\cdot 2 \\cdot 2 \\cdot 1 \\cdot 1 = 1152$ ✓. (The choice $576$ COUNTS ONLY ONE OF THE TWO PATTERNS ✗; the choice $40{,}320$ IGNORES THE RULE ✗; the choice $24$ ORDERS ONLY THE ODD DIGITS ✗.)',
    },
    {
      q: 'Three boys and four girls, all different people, stand in a row so that boys and girls alternate, and Ana, one of the girls, must stand at the left end. How many arrangements are possible?',
      choices: ['$36$', '$144$', '$72$', '$6$'],
      answer: 0,
      solution:
        'Route one, fix the pattern, place Ana, order the rest. With four girls and three boys in seven spots the only alternating pattern is GBGBGBG, so the left end is a girl’s spot, and Ana takes it. The other three girls fill the remaining three girl spots in $3! = 6$ ways, and the three boys fill the three boy spots in $3! = 6$ ways. Multiply: $6 \\cdot 6 = 36$ ✓. Route two, a symmetry ratio. Count all alternating rows first: the pattern GBGBGBG is forced, girls in $4! = 24$ orders, boys in $3! = 6$ orders, $144$ rows. In every one of these rows the left end holds a girl, and by symmetry each of the four girls holds it in the same number of rows. So Ana is at the left end in $\\frac{144}{4} = 36$ rows ✓. (The choice $144$ IGNORES ANA’S RULE ✗; the choice $72$ LETS ANA STAND AT EITHER END, but the stem fixes her on the left ✗; the choice $6$ ORDERS ONLY THE BOYS and forgets to order the other three girls ✗.)',
    },
  ],
  // slot 7 — two people at the two ends
  [
    {
      q: 'Eight people, all different, including Kit and Lou, sit in a row of eight chairs. In how many seatings do Kit and Lou occupy the two end chairs, one at each end?',
      choices: ['$720$', '$1440$', '$40{,}320$', '$10{,}080$'],
      answer: 1,
      solution:
        'Route one, place the restricted pair first. Kit takes the left end and Lou the right, or the reverse: $2$ ways. The other six people fill the six middle chairs in $6! = 720$ ways. Multiply: $2 \\cdot 720 = 1440$ ✓. Route two, a symmetry ratio. With no rule there are $8! = 40{,}320$ seatings. Each seating has some pair of people at the two ends, and by symmetry each of the $\\binom{8}{2} = 28$ pairs is the end pair in the same number of seatings. Kit and Lou are the end pair in $\\frac{40{,}320}{28} = 1440$ seatings ✓. (The choice $720$ FORGETS THAT KIT AND LOU CAN SWAP ENDS ✗; the choice $40{,}320$ IGNORES THE RULE ✗; the choice $10{,}080$ is $2 \\cdot 7!$, which PUTS ONLY KIT AT AN END and lets Lou sit anywhere ✗.)',
    },
    {
      q: 'Seven different trophies are arranged in a row on a shelf. The gold trophy and the silver trophy must be placed so that exactly one trophy stands between them. How many arrangements are possible?',
      choices: ['$600$', '$1440$', '$5040$', '$1200$'],
      answer: 3,
      solution:
        'Route one, place the restricted pair first. The two spots holding gold and silver are two positions exactly two apart: $(1,3), (2,4), (3,5), (4,6), (5,7)$ — five pairs, and gold and silver can swap within each, so $5 \\cdot 2 = 10$ placements. The other five trophies fill the remaining five spots in $5! = 120$ ways. Multiply: $10 \\cdot 120 = 1200$ ✓. Route two, a symmetry ratio. With no rule there are $7! = 5040$ arrangements, and by symmetry every one of the $\\binom{7}{2} = 21$ position pairs is equally likely to hold gold and silver. Exactly $5$ of those pairs are two apart, so $5040 \\cdot \\frac{5}{21} = 1200$ ✓. (The choice $600$ FORGETS THAT GOLD AND SILVER CAN SWAP SPOTS ✗; the choice $1440$ COUNTS SIX STARTING SPOTS FOR THE PAIR, but the left spot can only be $1$ through $5$ ✗; the choice $5040$ IGNORES THE RULE ENTIRELY ✗.)',
    },
    {
      q: 'Seven people, all different, including Ava and Ben, sit in a row of seven chairs. In how many seatings is neither Ava nor Ben in an end chair?',
      choices: ['$3600$', '$240$', '$2400$', '$4800$'],
      answer: 2,
      solution:
        'Route one, place the restricted pair first. Ava must take one of the $5$ middle chairs; Ben then takes one of the $4$ middle chairs still empty. The other five people fill the remaining five chairs, ends included, in $5! = 120$ ways. Multiply: $5 \\cdot 4 \\cdot 120 = 2400$ ✓. Route two, the complement with an overlap. All seatings: $7! = 5040$. Seatings with Ava at an end: $2 \\cdot 6! = 1440$; with Ben at an end, likewise $1440$; with both at ends: $2 \\cdot 5! = 240$. Seatings with at least one of them at an end: $1440 + 1440 - 240 = 2640$. Subtract: $5040 - 2640 = 2400$ ✓. (The choice $3600$ is $5 \\cdot 6!$, which KEEPS ONLY AVA OFF THE ENDS and lets Ben sit anywhere ✗; the choice $240$ COUNTS THE SEATINGS WITH AVA AND BEN AT THE TWO ENDS, the opposite of what was asked ✗; the choice $4800$ SUBTRACTS ONLY THE SEATINGS WITH BOTH AT THE ENDS, leaving in those with just one at an end ✗.)',
    },
  ],
  // slot 8 — a glued pair plus an end rule
  [
    {
      q: 'Seven people, all different, including Ren, Sol, and Tam, sit in a row of seven chairs. Ren and Sol must sit next to each other, and Tam must sit in one of the two end chairs. How many seatings are possible?',
      choices: ['$240$', '$1440$', '$2880$', '$480$'],
      answer: 3,
      solution:
        'Route one, the end rule, then the block. Tam takes one of $2$ ends. That leaves a row of six chairs for the other six people. Glue Ren and Sol: the block plus four others make $5$ items, $5! = 120$ orders, times $2$ for the order inside the block, $240$ seatings of the six chairs. Multiply by Tam’s $2$ ends: $480$ ✓. Route two, count where the pair can sit. Put Tam at the left end for now. Ren and Sol occupy two adjacent chairs among chairs $2$ through $7$: the adjacent pairs are $2$–$3$, $3$–$4$, $4$–$5$, $5$–$6$, $6$–$7$, so $5$ placements, and Ren and Sol fill the chosen pair in $2$ orders. The other four people fill the other four chairs in $4! = 24$ ways: $5 \\cdot 2 \\cdot 24 = 240$. Tam at the right end is the mirror image, another $240$: total $480$ ✓. (The choice $240$ GIVES TAM ONLY ONE OF THE TWO ENDS ✗; the choice $1440$ is $6! \\cdot 2$, which GLUES REN AND SOL BUT LETS TAM SIT ANYWHERE ✗; the choice $2880$ ARRANGES SIX ITEMS AFTER GLUING instead of five, forgetting that the block shrinks the count ✗.)',
    },
    {
      q: 'The eight different letters A, B, C, D, E, F, G, H are arranged in a row. A and B must be next to each other, and H must be in the first position. How many arrangements are possible?',
      choices: ['$720$', '$1440$', '$10{,}080$', '$2880$'],
      answer: 1,
      solution:
        'Route one, the pinned letter, then the block. H is fixed in the first position, leaving positions $2$ through $8$ for the other seven letters. Glue A and B: the block plus C, D, E, F, G make $6$ items, $6! = 720$ orders, times $2$ for the order inside the block: $1440$ ✓. Route two, count where the pair can sit. With H first, A and B occupy two adjacent positions among $2$ through $8$: the adjacent pairs are $2$–$3$ through $7$–$8$, so $6$ placements, and A and B fill the chosen pair in $2$ orders. The other five letters fill the remaining five positions in $5! = 120$ ways: $6 \\cdot 2 \\cdot 120 = 1440$ ✓. (The choice $720$ FORGETS THAT A AND B CAN SWAP inside the block ✗; the choice $10{,}080$ is $7! \\cdot 2$, which GLUES A AND B BUT LETS H GO ANYWHERE ✗; the choice $2880$ LETS H TAKE EITHER END, but the stem fixes it first ✗.)',
    },
    {
      q: 'Six people, all different, including Ava, Ben, and Cal, sit in a row of six chairs. Ava and Ben must sit next to each other with Ava immediately to the left of Ben, and Cal must sit in one of the two end chairs. How many seatings are possible?',
      choices: ['$48$', '$96$', '$24$', '$240$'],
      answer: 0,
      solution:
        'Route one, the end rule, then a block with a fixed inside order. Cal takes one of $2$ ends, leaving a row of five chairs. Glue Ava and Ben into a block whose inside order is fixed as Ava-then-Ben: the block plus three others make $4$ items, $4! = 24$ orders, and the block has only $1$ allowed inside order. Multiply by Cal’s $2$ ends: $2 \\cdot 24 = 48$ ✓. Route two, count where the pair can sit. Put Cal at the left end for now. The Ava-Ben pair, in that order, occupies two adjacent chairs among chairs $2$ through $6$: the adjacent pairs are $2$–$3$, $3$–$4$, $4$–$5$, $5$–$6$, so $4$ placements, each with a single order. The other three people fill the other three chairs in $3! = 6$ ways: $4 \\cdot 6 = 24$. Cal at the right end is the mirror image: $24$ more, total $48$ ✓. (The choice $96$ LETS BEN SIT ON EITHER SIDE OF AVA, ignoring the left-of rule ✗; the choice $24$ GIVES CAL ONLY ONE OF THE TWO ENDS ✗; the choice $240$ is $2 \\cdot 5!$, which SEATS CAL AT AN END BUT IGNORES THE PAIR ENTIRELY ✗.)',
    },
  ],
  // slot 9 — an end rule plus a "not next to" rule
  [
    {
      q: 'Eight people, all different, including Xia, Yen, and Zed, sit in a row of eight chairs. Zed must sit in one of the two end chairs, and Xia and Yen must not sit next to each other. How many seatings are possible?',
      choices: ['$7200$', '$3600$', '$8640$', '$10{,}080$'],
      answer: 0,
      solution:
        'Route one, the complement inside the end rule. Seatings with Zed at an end: $2 \\cdot 7! = 10{,}080$. Among those, the bad ones have Xia and Yen together: Zed at an end ($2$ ways), then in the other seven chairs a glued pair plus five people, $6! \\cdot 2 = 1440$, so $2 \\cdot 1440 = 2880$ bad seatings. Subtract: $10{,}080 - 2880 = 7200$ ✓. Route two, a direct count of the pair’s chairs. Put Zed at the left end for now, leaving chairs $2$ through $8$, seven chairs in a row. Choose Xia’s chair and then Yen’s chair among those seven: $7 \\cdot 6 = 42$ ordered choices, of which the adjacent ones are the $6$ adjacent chair pairs taken in either order, $12$. So $42 - 12 = 30$ ways seat Xia and Yen apart. The other five people fill the other five chairs in $5! = 120$ ways: $30 \\cdot 120 = 3600$. Zed at the right end is the mirror image, another $3600$: total $7200$ ✓. (The choice $3600$ GIVES ZED ONLY ONE OF THE TWO ENDS ✗; the choice $8640$ SUBTRACTS THE BAD SEATINGS FOR ONLY ONE OF ZED’S ENDS ✗; the choice $10{,}080$ IGNORES THE XIA-YEN RULE ✗.)',
    },
    {
      q: 'The seven letters of the word FLOWING, which are all different, are arranged in a row. G must be at one of the two ends, and F and L must not be next to each other. How many arrangements are possible?',
      choices: ['$1440$', '$480$', '$960$', '$1200$'],
      answer: 2,
      solution:
        'Route one, the complement inside the end rule. Arrangements with G at an end: $2 \\cdot 6! = 1440$. Among those, the bad ones have F and L together: G at an end ($2$ ways), then in the other six positions a glued FL pair plus four letters, $5! \\cdot 2 = 240$, so $2 \\cdot 240 = 480$ bad arrangements. Subtract: $1440 - 480 = 960$ ✓. Route two, a direct count of the pair’s positions. Put G at the left end for now, leaving positions $2$ through $7$, six in a row. Choose F’s position and then L’s among those six: $6 \\cdot 5 = 30$ ordered choices, of which the adjacent ones are the $5$ adjacent position pairs in either order, $10$. So $30 - 10 = 20$ ways place F and L apart. The other four letters O, W, I, N fill the other four positions in $4! = 24$ ways: $20 \\cdot 24 = 480$. G at the right end is the mirror image, another $480$: total $960$ ✓. (The choice $1440$ IGNORES THE F-L RULE ✗; the choice $480$ is THE COMPLEMENT, the arrangements with F and L together ✗; the choice $1200$ SUBTRACTS THE BAD ARRANGEMENTS FOR ONLY ONE OF G’S ENDS ✗.)',
    },
    {
      q: 'Six people, all different, including Ava, Ben, and Cal, sit in a row of six chairs. Cal must not sit in either end chair, and Ava and Ben must not sit next to each other. How many seatings are possible?',
      choices: ['$480$', '$336$', '$144$', '$384$'],
      answer: 1,
      solution:
        'Route one, Cal’s rule first, then the complement for the pair. Cal takes one of the $4$ middle chairs, and the other five fill the rest in $5! = 120$ ways: $480$ seatings obey Cal’s rule. Among those, count the ones with Ava and Ben together. Whichever middle chair Cal takes, removing it from the row of six leaves exactly $3$ adjacent pairs of empty chairs (for example, Cal in chair $2$ leaves chairs $1, 3, 4, 5, 6$, whose adjacent pairs are $3$–$4$, $4$–$5$, $5$–$6$). Ava and Ben fill a chosen pair in $2$ orders and the other three people fill the other three chairs in $3! = 6$ ways: $4 \\cdot 3 \\cdot 2 \\cdot 6 = 144$. Subtract: $480 - 144 = 336$ ✓. Route two, the pair’s rule first, then the complement for Cal. Seatings with Ava and Ben apart: $6! - 5! \\cdot 2 = 720 - 240 = 480$. Among those, the ones that break Cal’s rule have Cal at an end: Cal at an end ($2$ ways), then the other five chairs hold Ava and Ben apart, $5! - 4! \\cdot 2 = 120 - 48 = 72$, so $2 \\cdot 72 = 144$. Subtract: $480 - 144 = 336$ ✓. (The choice $480$ FORGETS CAL’S RULE, or equally FORGETS THE PAIR’S RULE, since each alone gives $480$ ✗; the choice $144$ is ONE OF THE SUBTRACTED COUNTS, not the answer ✗; the choice $384$ SUBTRACTS THE SEATINGS WITH CAL AT AN END AND THE PAIR TOGETHER, $96$, which is the wrong event ✗.)',
    },
  ],
  // slot 10 — no two of a group adjacent
  [
    {
      q: 'Five boys and three girls, all different people, stand in a row so that no two girls are next to each other. How many arrangements are possible?',
      choices: ['$2400$', '$14{,}400$', '$40{,}320$', '$7200$'],
      answer: 1,
      solution:
        'Route one, boys first, then girls into gaps. Arrange the five boys: $5! = 120$ ways. They create $6$ gaps — before the first boy, between neighbors, after the last — and the girls must go into different gaps so that no two touch: the first girl picks one of $6$ gaps, the next one of $5$, the last one of $4$, for $120$ placements. Multiply: $120 \\cdot 120 = 14{,}400$ ✓. Route two, choose the girls’ positions, then order everyone. We need $3$ of the $8$ positions with no two consecutive. Given such a set, drop the position just after each of the first two girls; the three chosen positions become $3$ positions out of $6$ with no restriction, and the process reverses uniquely, so there are $\\binom{6}{3} = 20$ allowed position sets. For each, the girls fill their three positions in $3! = 6$ ways and the boys fill the other five in $5! = 120$ ways: $20 \\cdot 6 \\cdot 120 = 14{,}400$ ✓. (The choice $2400$ CHOOSES THE THREE GAPS WITHOUT ORDERING THE GIRLS ✗; the choice $40{,}320$ IGNORES THE RULE ✗; the choice $7200$ USES ONLY FIVE GAPS, forgetting the gap at one end of the row ✗.)',
    },
    {
      q: 'Six different math books and two different novels are placed on a shelf with a left end and a right end. In how many arrangements are the two novels not next to each other?',
      choices: ['$10{,}080$', '$35{,}280$', '$15{,}120$', '$30{,}240$'],
      answer: 3,
      solution:
        'Route one, the complement. All arrangements: $8! = 40{,}320$. The bad ones have the two novels together: glue them, arrange the block and six math books in $7! = 5040$ ways, times $2$ for the order inside the block, $10{,}080$. Subtract: $40{,}320 - 10{,}080 = 30{,}240$ ✓. Route two, math books first, then novels into gaps. Arrange the six math books: $6! = 720$ ways. They create $7$ gaps, and the two novels must go into different gaps: the first novel picks one of $7$, the second one of the remaining $6$, for $42$ placements. Multiply: $720 \\cdot 42 = 30{,}240$ ✓. (The choice $10{,}080$ is THE COMPLEMENT, the arrangements with the novels together ✗; the choice $35{,}280$ SUBTRACTS $7!$ ALONE, forgetting the novels can swap inside the block ✗; the choice $15{,}120$ CHOOSES THE TWO GAPS WITHOUT ORDERING THE NOVELS ✗.)',
    },
    {
      q: 'Four boys and three girls, all different people, stand in a row. How many arrangements have at least two girls next to each other?',
      choices: ['$1440$', '$720$', '$3600$', '$4320$'],
      answer: 2,
      solution:
        'Route one, the complement. All arrangements: $7! = 5040$. The ones with no two girls together: arrange the boys in $4! = 24$ ways, then put the girls into three different ones of the $5$ gaps, $5 \\cdot 4 \\cdot 3 = 60$ ways, for $1440$. Subtract: $5040 - 1440 = 3600$ ✓. Route two, cases on how the girls cluster. Case 1, all three girls together: glue them, arrange the block and four boys in $5! = 120$ ways, times $3! = 6$ inside orders: $720$. Case 2, exactly two girls together and the third apart from them: choose the lone girl ($3$ ways); glue the other two into a block; now arrange the block, the lone girl, and four boys ($6$ items) so that the block and the lone girl are not neighbors, $6! - 5! \\cdot 2 = 720 - 240 = 480$ ways; times $2$ for the order inside the block: $3 \\cdot 480 \\cdot 2 = 2880$. Total $720 + 2880 = 3600$ ✓. (The choice $1440$ is THE COMPLEMENT, the arrangements with no two girls together ✗; the choice $720$ COUNTS ONLY THE ARRANGEMENTS WITH ALL THREE GIRLS TOGETHER ✗; the choice $4320$ SUBTRACTS ONLY THE ALL-THREE-TOGETHER CASE from the total, the wrong complement ✗.)',
    },
  ],
]

export default { book: 'intro-counting', number: 2, sections: { '2.5': s25 } }
