// Prealgebra chapter 14 — variations for sections 14.4 and 14.5.
// All problems and solutions are original MathQuest content.
// Every count here was checked by listing the sample space outcome by outcome,
// and every probability is written as an exact fraction in lowest terms.

const s144 = [
  // p1 — a small handshake count: n(n-1)/2
  [
    {
      q: 'Five cousins sit down to dinner, and each cousin clinks glasses with every other cousin exactly once. How many clinks are there?',
      choices: ['$10$', '$20$', '$5$', '$25$'],
      answer: 0,
      solution:
        'Each of the $5$ cousins clinks with the other $4$, which gives $5 \\times 4 = 20$ clinks counted one cousin at a time. But a clink needs two cousins, so every clink was counted twice — once from each side. The two cousins in a clink play the same role, so divide by $2$: $\\frac{20}{2} = 10$ clinks. The choice $20$ is that person-by-person count left unhalved; $25 = 5 \\times 5$ would let a cousin clink with herself; and $5$ is simply the number of cousins.',
    },
    {
      q: 'Six teammates each give every other teammate a high five, one high five per pair. How many high fives happen?',
      choices: ['$30$', '$15$', '$36$', '$6$'],
      answer: 1,
      solution:
        'One high five per pair, so this is the handshake count: $\\frac{6 \\times 5}{2} = \\frac{30}{2} = 15$. The choice $30$ skips the halving, counting each high five once for each of the two teammates in it. $36 = 6 \\times 6$ would pair a teammate with himself, and $6$ is the number of teammates, not the number of pairs.',
    },
    {
      q: 'Three friends meet up and each pair of them fist-bumps exactly once. How many fist bumps are there?',
      choices: ['$6$', '$9$', '$2$', '$3$'],
      answer: 3,
      solution:
        'Every pair of the $3$ friends bumps once: $\\frac{3 \\times 2}{2} = 3$ bumps. Small enough to list and be sure — Ana with Bo, Ana with Cy, Bo with Cy. The choice $6$ forgets to halve $3 \\times 2$; $9 = 3 \\times 3$ pairs a friend with herself; and $2$ is how many bumps ONE friend takes part in, not the total.',
    },
  ],
  // p2 — round-robin games, one per pair
  [
    {
      q: 'Eight softball teams play a round-robin: every pair of teams plays exactly one game. How many games are played?',
      choices: ['$56$', '$28$', '$64$', '$8$'],
      answer: 1,
      solution:
        'One game per pair of teams, and the two teams in a game play the same role, so halve: $\\frac{8 \\times 7}{2} = \\frac{56}{2} = 28$ games. The choice $56$ is the count before halving, which lists every game twice — once for each team in it. $64 = 8 \\times 8$ would schedule each team against itself, and $8$ is just the number of teams.',
    },
    {
      q: 'Four card players hold a round-robin, with each pair of players playing exactly one match. How many matches are there?',
      choices: ['$12$', '$16$', '$6$', '$4$'],
      answer: 2,
      solution:
        'One match per pair: $\\frac{4 \\times 3}{2} = 6$ matches. You can list them to check — the pairs are AB, AC, AD, BC, BD, CD. The choice $12$ is $4 \\times 3$ with the halving forgotten, so each match is counted from both players; $16 = 4 \\times 4$ lets a player face herself; and $4$ is the number of players.',
    },
    {
      q: 'Seven quiz teams each face every other team exactly once. How many matches are scheduled?',
      choices: ['$42$', '$49$', '$7$', '$21$'],
      answer: 3,
      solution:
        'Order does not matter here: team A facing team B is the same match as team B facing team A. So count pairs: $\\frac{7 \\times 6}{2} = \\frac{42}{2} = 21$ matches. The choice $42$ treats the two orders as different matches; $49 = 7 \\times 7$ adds a match of each team against itself; and $7$ is the number of teams.',
    },
  ],
  // p3 — pairs drawn from two different groups: multiply, never halve
  [
    {
      q: 'A science-fair team must have one of the $4$ seventh graders in the club and one of the $7$ eighth graders. How many different teams are possible?',
      choices: ['$11$', '$28$', '$55$', '$14$'],
      answer: 1,
      solution:
        'The two spots are filled from different lists, so the members play different roles and nothing gets counted twice: multiply, $4 \\times 7 = 28$ teams. The choice $14$ is the halving habit misfiring — halve only when both members come from the SAME group. Adding gives $11$, which counts club members rather than teams, and $55 = \\frac{11 \\times 10}{2}$ counts every pair among all $11$ students, including two seventh graders together.',
    },
    {
      q: 'A doubles table-tennis pair takes one player from a group of $6$ and one player from a group of $4$. How many different pairs can be formed?',
      choices: ['$10$', '$45$', '$24$', '$12$'],
      answer: 2,
      solution:
        'One member from each group, so multiply: $6 \\times 4 = 24$ pairs. Every one of the $6$ can be matched with every one of the $4$. The choice $12$ divides by $2$ for double counting that never happened — a player from the first group can never be swapped for a player from the second. Adding gives $10$, the number of players, and $45 = \\frac{10 \\times 9}{2}$ counts all pairs among the $10$ players, including two from the same group.',
    },
    {
      q: 'A hiking buddy pair must have one of the $2$ guides and one of the $9$ campers. How many buddy pairs are possible?',
      choices: ['$11$', '$55$', '$9$', '$18$'],
      answer: 3,
      solution:
        'Each pair is one guide plus one camper — two different groups, so multiply: $2 \\times 9 = 18$ pairs. The choice $9$ halves the product out of habit, but a guide-camper pair is never counted from two sides, so there is nothing to undo. Adding the group sizes gives $11$, which counts people; $55 = \\frac{11 \\times 10}{2}$ counts every pair among the $11$ hikers, including camper-with-camper pairs that are not allowed.',
    },
  ],
  // p4 — one segment per pair of points
  [
    {
      q: 'Nine points are marked on a circle, and a chord is drawn between every pair of them. How many chords are drawn?',
      choices: ['$36$', '$72$', '$81$', '$9$'],
      answer: 0,
      solution:
        'One chord per pair of points, and a chord does not care which endpoint you name first, so halve: $\\frac{9 \\times 8}{2} = \\frac{72}{2} = 36$ chords. The choice $72$ counts each chord once from each of its two endpoints; $81 = 9 \\times 9$ would include a "chord" from a point to itself; and $9$ is the number of points.',
    },
    {
      q: 'Five stars are plotted on a chart, and a straight line is drawn joining every pair of stars. How many lines are drawn?',
      choices: ['$20$', '$10$', '$25$', '$5$'],
      answer: 1,
      solution:
        'Each line is decided by an unordered pair of stars, so the count is $\\frac{5 \\times 4}{2} = 10$ lines. The choice $20$ leaves out the halving, so every line is counted twice — once from each end. $25 = 5 \\times 5$ joins a star to itself, and $5$ is just the number of stars.',
    },
    {
      q: 'Eleven dots are placed around a circle, and every pair of dots is joined by a segment. How many segments are there?',
      choices: ['$110$', '$121$', '$55$', '$11$'],
      answer: 2,
      solution:
        'Segments come one per pair of dots: $\\frac{11 \\times 10}{2} = \\frac{110}{2} = 55$. The choice $110$ is the person-by-person style count, where each segment is named once from each endpoint; $121 = 11 \\times 11$ adds a segment from every dot to itself; and $11$ is the number of dots.',
    },
  ],
  // p5 — a larger handshake count
  [
    {
      q: 'Twelve people at a reunion all shake hands with each other exactly once. How many handshakes are there?',
      choices: ['$66$', '$132$', '$144$', '$12$'],
      answer: 0,
      solution:
        'Handshakes come one per pair: $\\frac{12 \\times 11}{2} = \\frac{132}{2} = 66$. The choice $132$ is $12 \\times 11$, which counts each handshake from both sides; $144 = 12 \\times 12$ would let a person shake his own hand; and $12$ is the number of people.',
    },
    {
      q: 'Fourteen delegates at a conference each shake hands with every other delegate exactly once. How many handshakes take place?',
      choices: ['$182$', '$196$', '$91$', '$14$'],
      answer: 2,
      solution:
        'Each of the $14$ delegates shakes $13$ hands, giving $14 \\times 13 = 182$ shakes counted one delegate at a time — and every handshake shows up twice in that total. Divide by $2$: $\\frac{182}{2} = 91$ handshakes. The choice $182$ is the unhalved count, $196 = 14 \\times 14$ includes a delegate shaking his own hand, and $14$ is the number of delegates.',
    },
    {
      q: 'Thirteen members of a choir each shake hands with every other member exactly once. How many handshakes happen?',
      choices: ['$156$', '$169$', '$13$', '$78$'],
      answer: 3,
      solution:
        'One handshake per pair of members: $\\frac{13 \\times 12}{2} = \\frac{156}{2} = 78$. The choice $156$ forgets that a handshake belongs to two people at once and so counts it twice; $169 = 13 \\times 13$ pairs a member with herself; and $13$ is the number of members.',
    },
  ],
  // p6 — choosing 2 people for the same role
  [
    {
      q: 'A team of $6$ hikers wants to choose $2$ map readers. In how many ways can the pair be chosen?',
      choices: ['$15$', '$30$', '$36$', '$3$'],
      answer: 0,
      solution:
        'The two map readers have the same job, so choosing Ida-then-Ravi is the same pair as Ravi-then-Ida. That means order does NOT matter, and we halve: $\\frac{6 \\times 5}{2} = 15$ pairs. The choice $30$ is what you would get if the two jobs were different — say a leader and a deputy — because then the two orders count separately. $36 = 6 \\times 6$ lets one hiker fill both slots, and $3$ comes from splitting $6$ hikers into pairs, which answers a different question entirely.',
    },
    {
      q: 'A club with $9$ members wants to send $2$ of them to a fair as a pair of hosts. In how many ways can the pair be chosen?',
      choices: ['$72$', '$36$', '$81$', '$8$'],
      answer: 1,
      solution:
        'Both hosts do the same job, so the pair is unordered: $\\frac{9 \\times 8}{2} = \\frac{72}{2} = 36$ ways. The choice $72$ is the ordered count $9 \\times 8$, right only if the two hosts had different titles; $81 = 9 \\times 9$ sends one member twice; and $8$ is the number of partners available to one particular member, not the number of pairs.',
    },
    {
      q: 'A study group of $8$ students wants to pick $2$ of its members as note takers. In how many ways can the pair be picked?',
      choices: ['$56$', '$64$', '$7$', '$28$'],
      answer: 3,
      solution:
        'The two note takers share one role, so the pair is unordered and we halve: $\\frac{8 \\times 7}{2} = \\frac{56}{2} = 28$ ways. The choice $56$ counts every pair twice, once in each order — that is the answer for two DIFFERENT jobs. $64 = 8 \\times 8$ picks the same student for both slots, and $7$ is the number of possible partners for one fixed student.',
    },
  ],
  // p7 — a big league, one game per pair
  [
    {
      q: 'Fifteen teams enter a league where every pair of teams plays exactly once. How many games are played?',
      choices: ['$105$', '$210$', '$225$', '$15$'],
      answer: 0,
      solution:
        'Count pairs of teams: $\\frac{15 \\times 14}{2} = \\frac{210}{2} = 105$ games. The choice $210$ leaves out the division and so counts each game once for each of the two teams playing it; $225 = 15 \\times 15$ would even schedule a team against itself; and $15$ is the number of teams.',
    },
    {
      q: 'Sixteen schools join a debate league in which every pair of schools debates exactly once. How many debates are held?',
      choices: ['$240$', '$256$', '$120$', '$16$'],
      answer: 2,
      solution:
        'One debate per pair of schools: $\\frac{16 \\times 15}{2} = \\frac{240}{2} = 120$ debates. The choice $240$ is the unhalved count, in which each debate appears twice — once from each school. $256 = 16 \\times 16$ has a school debating itself, and $16$ is the number of schools.',
    },
    {
      q: 'Twenty chess players enter a tournament where each pair of players meets exactly once. How many games are played?',
      choices: ['$380$', '$400$', '$20$', '$190$'],
      answer: 3,
      solution:
        'Each of the $20$ players meets the other $19$, which is $20 \\times 19 = 380$ meetings counted player by player — but every game shows up twice there, once for each player. Divide by $2$: $\\frac{380}{2} = 190$ games. The choice $380$ is that count left unhalved, $400 = 20 \\times 20$ pairs a player with himself, and $20$ is the number of players.',
    },
  ],
  // p8 — working backwards from the number of pairs
  [
    {
      q: 'At a small party, every pair of guests shook hands, and there were $15$ handshakes in all. How many guests were there?',
      choices: ['$6$', '$5$', '$30$', '$7$'],
      answer: 0,
      solution:
        'We need $\\frac{n(n-1)}{2} = 15$, so $n(n-1) = 30$. Two consecutive whole numbers with product $30$ are $6$ and $5$, so $n = 6$. Check: $\\frac{6 \\times 5}{2} = 15$. ✓ The choice $5$ is $n - 1$, the number of hands each guest shook, not the number of guests. The choice $7$ overshoots by one — check it and you get $21$ handshakes. And $30$ is the doubled total $n(n-1)$, which counts handshake-halves, not people.',
    },
    {
      q: 'Every pair of members of a walking club greeted each other once, making $36$ greetings altogether. How many members are in the club?',
      choices: ['$8$', '$9$', '$18$', '$10$'],
      answer: 1,
      solution:
        'We need $\\frac{n(n-1)}{2} = 36$, so $n(n-1) = 72$. Since $9 \\times 8 = 72$, there are $n = 9$ members. Check: $\\frac{9 \\times 8}{2} = 36$. ✓ The choice $8$ is $n - 1$, how many greetings one member gave. The choice $10$ is one too many — it would give $45$ greetings. And $18$ comes from HALVING the greeting count instead of doubling it; the doubling is what undoes the $\\div 2$ in the formula.',
    },
    {
      q: 'In a league, every pair of teams played exactly one game, and $66$ games were played in all. How many teams were in the league?',
      choices: ['$11$', '$33$', '$12$', '$13$'],
      answer: 2,
      solution:
        'We need $\\frac{n(n-1)}{2} = 66$, so $n(n-1) = 132$. Two consecutive whole numbers with product $132$ are $12$ and $11$, so $n = 12$. Check: $\\frac{12 \\times 11}{2} = 66$. ✓ The choice $11$ is $n - 1$, the number of opponents each team faced. The choice $13$ is one too many and would give $78$ games. And $33$ halves the game count instead of doubling it — the wrong direction to undo the formula.',
    },
  ],
  // p9 — segments between two different groups of points
  [
    {
      q: 'Five square points and six round points are drawn, and a segment joins every square-round pair (but never two points of the same shape). How many segments are there?',
      choices: ['$11$', '$30$', '$55$', '$15$'],
      answer: 1,
      solution:
        'Every segment takes one square point and one round point — two different groups, so multiply: $5 \\times 6 = 30$ segments. There is no double counting to undo, since a square point can never stand in for a round one, so the halved value $15$ is a trap. Adding gives $11$, the number of points; and $55 = \\frac{11 \\times 10}{2}$ counts all pairs among the $11$ points, including the same-shape pairs that get no segment.',
    },
    {
      q: 'Seven points sit on a top line and two points sit on a bottom line. A segment is drawn from each top point to each bottom point. How many segments are drawn?',
      choices: ['$9$', '$36$', '$14$', '$7$'],
      answer: 2,
      solution:
        'Each segment picks one point from the top line and one from the bottom line, so multiply the group sizes: $7 \\times 2 = 14$ segments. The choice $7$ halves that product, but halving is only for pairs chosen from ONE group, where the two orders name the same pair. Adding gives $9$, the total number of points, and $36 = \\frac{9 \\times 8}{2}$ counts every pair of the $9$ points, including two points on the same line.',
    },
    {
      q: 'Four hollow dots and eight solid dots are drawn, and a segment joins every hollow-solid pair. How many segments are there?',
      choices: ['$12$', '$66$', '$16$', '$32$'],
      answer: 3,
      solution:
        'One hollow dot and one solid dot per segment, so the groups multiply: $4 \\times 8 = 32$ segments. No halving here — the two ends of a segment come from different groups, so no segment is ever named twice. The choice $16$ is that mistaken halving. Adding gives $12$, the number of dots, and $66 = \\frac{12 \\times 11}{2}$ counts all pairs of the $12$ dots, including hollow-with-hollow pairs.',
    },
  ],
  // p10 — count all the pairs, then subtract the exceptions
  [
    {
      q: 'Eight people are at a picnic. Everyone shakes hands with everyone else, except one pair of guests who have a quarrel and skip each other. How many handshakes happen?',
      choices: ['$27$', '$28$', '$26$', '$56$'],
      answer: 0,
      solution:
        'If everyone shook everyone, there would be $\\frac{8 \\times 7}{2} = 28$ handshakes. The quarrel removes exactly ONE handshake, because those two people share only one handshake between them: $28 - 1 = 27$. The choice $28$ forgets to remove it; $26$ removes it twice, once for each of the two people, which double-subtracts a single handshake; and $56 = 8 \\times 7$ is the person-by-person count left unhalved.',
    },
    {
      q: 'Eleven members of a band all shake hands, except that two of them have sore wrists and skip shaking with each other. How many handshakes happen?',
      choices: ['$55$', '$54$', '$53$', '$110$'],
      answer: 1,
      solution:
        'Start with the full count: $\\frac{11 \\times 10}{2} = 55$ handshakes. The two sore-wristed members share exactly one handshake, so remove one: $55 - 1 = 54$. The choice $55$ skips the removal; $53$ removes two, as if each of the two members had a separate handshake to give up; and $110 = 11 \\times 10$ never halves, so every handshake is counted from both sides.',
    },
    {
      q: 'Seven neighbours meet, and every pair shakes hands except for two pairs who have already met earlier that day and skip it. How many handshakes happen?',
      choices: ['$21$', '$17$', '$42$', '$19$'],
      answer: 3,
      solution:
        'All pairs would give $\\frac{7 \\times 6}{2} = 21$ handshakes. Two pairs skip, and each pair accounts for exactly one handshake, so remove $2$: $21 - 2 = 19$. The choice $21$ forgets the removal; $17$ removes $4$, as if each skipping pair cost two handshakes; and $42 = 7 \\times 6$ is the count before halving.',
    },
  ],
]

const s145 = [
  // p1 — a single equally likely outcome, tiny sample space
  [
    {
      q: 'A spinner has $4$ equal sections coloured red, blue, green, and orange. What is the probability that one spin lands on green?',
      choices: ['$\\frac{1}{3}$', '$\\frac{1}{4}$', '$\\frac{3}{4}$', '$\\frac{1}{2}$'],
      answer: 1,
      solution:
        'The $4$ sections are the same size, so all $4$ outcomes are equally likely, and exactly $1$ of them is green: $P(\\text{green}) = \\frac{1}{4}$. The choice $\\frac{1}{3}$ compares the green section with the $3$ non-green ones, but a probability compares favorable outcomes with the TOTAL number of outcomes. The choice $\\frac{3}{4}$ is $P(\\text{not green})$, the complement, and $\\frac{1}{2}$ would be right only for a spinner cut into two equal halves.',
    },
    {
      q: 'A jar holds $5$ identical folded notes, and exactly one of them says "prize". One note is unfolded at random. What is the probability it says "prize"?',
      choices: ['$\\frac{1}{4}$', '$\\frac{4}{5}$', '$\\frac{1}{5}$', '$\\frac{1}{2}$'],
      answer: 2,
      solution:
        'There are $5$ equally likely notes and $1$ of them wins: $\\frac{1}{5}$. The choice $\\frac{1}{4}$ compares the winning note with the $4$ losing ones instead of with all $5$ notes. The choice $\\frac{4}{5}$ is the probability of NOT winning. And $\\frac{1}{2}$ comes from the old "either it happens or it does not, so it is fifty-fifty" idea — that only works when the two possibilities are equally likely, and here they are not.',
    },
    {
      q: 'A box holds $10$ raffle tickets numbered $1$ through $10$, and Sam holds ticket number $7$. One ticket is drawn at random. What is the probability Sam wins?',
      choices: ['$\\frac{7}{10}$', '$\\frac{1}{9}$', '$\\frac{9}{10}$', '$\\frac{1}{10}$'],
      answer: 3,
      solution:
        'Exactly $1$ of the $10$ equally likely tickets is Sam\'s, so the probability is $\\frac{1}{10}$. The choice $\\frac{7}{10}$ uses the ticket NUMBER as a count of favorable outcomes, but a label is not a count — only one ticket wins. The choice $\\frac{1}{9}$ compares Sam\'s ticket with the $9$ others rather than with all $10$, and $\\frac{9}{10}$ is the probability that Sam does not win.',
    },
  ],
  // p2 — one favorable outcome out of many
  [
    {
      q: 'A spinner has $12$ equal sections numbered $1$ through $12$. What is the probability that one spin lands on $5$?',
      choices: ['$\\frac{1}{12}$', '$\\frac{5}{12}$', '$\\frac{1}{11}$', '$\\frac{11}{12}$'],
      answer: 0,
      solution:
        'The $12$ sections are equally likely and exactly one is numbered $5$, so the probability is $\\frac{1}{12}$. The choice $\\frac{5}{12}$ mistakes the label $5$ for the number of favorable sections; there is only ONE section labelled $5$. The choice $\\frac{1}{11}$ compares that section with the $11$ others instead of with all $12$, and $\\frac{11}{12}$ is the probability of missing the $5$.',
    },
    {
      q: 'A bag holds $8$ tiles lettered A, B, C, D, E, F, G, and H. One tile is drawn at random. What is the probability it is the tile marked D?',
      choices: ['$\\frac{1}{7}$', '$\\frac{7}{8}$', '$\\frac{1}{8}$', '$\\frac{1}{2}$'],
      answer: 2,
      solution:
        'There are $8$ equally likely tiles and exactly $1$ is marked D: $\\frac{1}{8}$. The choice $\\frac{1}{7}$ compares the D tile with the $7$ other tiles rather than with all $8$. The choice $\\frac{7}{8}$ is the probability of NOT drawing D. And $\\frac{1}{2}$ comes from $\\frac{4}{8}$, counting $4$ favorable tiles because D is the fourth letter — a letter\'s position in the alphabet is not a count of tiles.',
    },
    {
      q: 'A drum holds $20$ balls numbered $1$ through $20$. One ball is drawn at random. What is the probability that it is ball number $13$?',
      choices: ['$\\frac{13}{20}$', '$\\frac{1}{19}$', '$\\frac{19}{20}$', '$\\frac{1}{20}$'],
      answer: 3,
      solution:
        'One favorable ball out of $20$ equally likely balls: $\\frac{1}{20}$. The choice $\\frac{13}{20}$ treats the label $13$ as a count of favorable balls, but only one ball carries that number. The choice $\\frac{1}{19}$ compares that ball with the $19$ others instead of with all $20$, and $\\frac{19}{20}$ is the probability of drawing some other ball.',
    },
  ],
  // p3 — favorable over TOTAL, not favorable over the rest
  [
    {
      q: 'A tin holds $5$ orange candies and $7$ lemon candies. One candy is taken at random. What is the probability it is orange?',
      choices: ['$\\frac{5}{12}$', '$\\frac{5}{7}$', '$\\frac{7}{12}$', '$\\frac{1}{12}$'],
      answer: 0,
      solution:
        'There are $5 + 7 = 12$ candies in all, and $5$ of them are orange: $\\frac{5}{12}$, which is already in lowest terms. The choice $\\frac{5}{7}$ compares orange candies with lemon candies, but probability compares favorable outcomes with the TOTAL. The choice $\\frac{7}{12}$ is the probability of getting a lemon candy, and $\\frac{1}{12}$ counts only a single candy as favorable instead of all $5$ orange ones.',
    },
    {
      q: 'A drawer holds $7$ striped socks and $14$ plain socks. One sock is pulled out at random. What is the probability it is striped?',
      choices: ['$\\frac{1}{2}$', '$\\frac{1}{3}$', '$\\frac{2}{3}$', '$\\frac{1}{21}$'],
      answer: 1,
      solution:
        'The drawer holds $7 + 14 = 21$ socks, and $7$ are striped: $\\frac{7}{21} = \\frac{1}{3}$. The choice $\\frac{1}{2}$ comes from $\\frac{7}{14}$, comparing striped socks with plain socks instead of with all the socks. The choice $\\frac{2}{3}$ is the probability of a plain sock, and $\\frac{1}{21}$ treats just one sock as favorable rather than all $7$ striped ones.',
    },
    {
      q: 'A basket holds $3$ apples and $12$ pears. One piece of fruit is chosen at random. What is the probability it is an apple?',
      choices: ['$\\frac{1}{4}$', '$\\frac{4}{5}$', '$\\frac{1}{5}$', '$\\frac{1}{15}$'],
      answer: 2,
      solution:
        'There are $3 + 12 = 15$ pieces of fruit, and $3$ are apples: $\\frac{3}{15} = \\frac{1}{5}$. The choice $\\frac{1}{4}$ is $\\frac{3}{12}$, comparing apples with pears rather than with all the fruit. The choice $\\frac{4}{5}$ is the probability of picking a pear, and $\\frac{1}{15}$ counts only one apple as favorable instead of all three.',
    },
  ],
  // p4 — several favorable outcomes, read the condition carefully
  [
    {
      q: 'A standard die is rolled. What is the probability of rolling a number less than $3$?',
      choices: ['$\\frac{1}{3}$', '$\\frac{1}{2}$', '$\\frac{2}{3}$', '$\\frac{1}{6}$'],
      answer: 0,
      solution:
        'List the faces that work: $1$ and $2$. (The face $3$ is not less than $3$.) That is $2$ favorable out of $6$ equally likely faces: $\\frac{2}{6} = \\frac{1}{3}$. The choice $\\frac{1}{2}$ comes from including $3$ as well, giving $\\frac{3}{6}$ — that would answer "$3$ or less". The choice $\\frac{2}{3}$ is the probability of rolling $3$ or more, and $\\frac{1}{6}$ counts only the face $1$.',
    },
    {
      q: 'A spinner has $12$ equal sections numbered $1$ through $12$. What is the probability that one spin lands on a multiple of $4$?',
      choices: ['$\\frac{1}{3}$', '$\\frac{1}{4}$', '$\\frac{3}{4}$', '$\\frac{1}{12}$'],
      answer: 1,
      solution:
        'The multiples of $4$ on the spinner are $4$, $8$, and $12$ — three of them. So the probability is $\\frac{3}{12} = \\frac{1}{4}$. The choice $\\frac{1}{3}$ is $\\frac{4}{12}$, which comes from counting $0$ as a fourth multiple even though there is no section marked $0$. The choice $\\frac{3}{4}$ is the probability of missing the multiples of $4$, and $\\frac{1}{12}$ counts just one favorable section.',
    },
    {
      q: 'A spinner has $9$ equal sections numbered $1$ through $9$. What is the probability that one spin lands on a number greater than $6$?',
      choices: ['$\\frac{4}{9}$', '$\\frac{2}{3}$', '$\\frac{1}{9}$', '$\\frac{1}{3}$'],
      answer: 3,
      solution:
        'The sections greater than $6$ are $7$, $8$, and $9$ — three of the nine. So the probability is $\\frac{3}{9} = \\frac{1}{3}$. The choice $\\frac{4}{9}$ comes from including $6$ itself, but $6$ is not greater than $6$. The choice $\\frac{2}{3}$ is the probability of landing on $6$ or less, and $\\frac{1}{9}$ counts only one favorable section.',
    },
  ],
  // p5 — the complement of a single outcome
  [
    {
      q: 'A spinner has $5$ equal sections numbered $1$ through $5$. What is the probability that one spin does NOT land on $2$?',
      choices: ['$\\frac{4}{5}$', '$\\frac{1}{5}$', '$\\frac{1}{4}$', '$\\frac{3}{5}$'],
      answer: 0,
      solution:
        'Use the complement: $P(\\text{not } 2) = 1 - P(2) = 1 - \\frac{1}{5} = \\frac{4}{5}$. Counting straight across agrees — the sections $1$, $3$, $4$, $5$ are the four that are not $2$, and $4 + 1 = 5$ covers every section exactly once. The choice $\\frac{1}{5}$ is $P(2)$ itself, the event we were told to avoid. The choice $\\frac{1}{4}$ compares the one bad section with the four good ones instead of with all five, and $\\frac{3}{5}$ crosses off two sections when only one should go.',
    },
    {
      q: 'A standard die is rolled. What is the probability of NOT rolling a $1$ and NOT rolling a $2$?',
      choices: ['$\\frac{1}{3}$', '$\\frac{5}{6}$', '$\\frac{2}{3}$', '$\\frac{1}{2}$'],
      answer: 2,
      solution:
        'The faces to avoid are $1$ and $2$, so $P(1 \\text{ or } 2) = \\frac{2}{6} = \\frac{1}{3}$, and the complement is $1 - \\frac{1}{3} = \\frac{2}{3}$. Check by listing: the good faces are $3$, $4$, $5$, $6$, which is $\\frac{4}{6} = \\frac{2}{3}$, and $2 + 4 = 6$ accounts for every face once. The choice $\\frac{1}{3}$ is the probability of the very thing we wanted to avoid. The choice $\\frac{5}{6}$ removes only one face, and $\\frac{1}{2}$ removes three.',
    },
    {
      q: 'A deck of $12$ animal cards has exactly one zebra card. One card is drawn at random. What is the probability it is NOT the zebra?',
      choices: ['$\\frac{1}{12}$', '$\\frac{1}{11}$', '$\\frac{5}{6}$', '$\\frac{11}{12}$'],
      answer: 3,
      solution:
        'Only one card is the zebra, so $P(\\text{zebra}) = \\frac{1}{12}$ and $P(\\text{not zebra}) = 1 - \\frac{1}{12} = \\frac{11}{12}$. The two counts $1$ and $11$ add to $12$, the whole deck, so nothing was missed or double-counted. The choice $\\frac{1}{12}$ is $P(\\text{zebra})$, the opposite of what was asked. The choice $\\frac{1}{11}$ compares the zebra with the $11$ other cards, and $\\frac{5}{6} = \\frac{10}{12}$ crosses off two cards when only the zebra should go.',
    },
  ],
  // p6 — the complement of a group of outcomes
  [
    {
      q: 'A spinner has $12$ equal sections, and $5$ of them are green. What is the probability that one spin does NOT land on green?',
      choices: ['$\\frac{7}{12}$', '$\\frac{5}{12}$', '$\\frac{5}{7}$', '$\\frac{1}{12}$'],
      answer: 0,
      solution:
        'The not-green sections number $12 - 5 = 7$, so the probability is $\\frac{7}{12}$. The complement gives the same thing: $1 - \\frac{5}{12} = \\frac{7}{12}$, and $5 + 7 = 12$ shows the two events together cover the whole spinner exactly once. The choice $\\frac{5}{12}$ is $P(\\text{green})$, the event we were told to avoid. The choice $\\frac{5}{7}$ compares green sections with non-green ones instead of with the total, and $\\frac{1}{12}$ counts only a single section.',
    },
    {
      q: 'A bag holds $15$ counters, and $6$ of them are square. One counter is drawn at random. What is the probability it is NOT square?',
      choices: ['$\\frac{2}{5}$', '$\\frac{3}{5}$', '$\\frac{2}{3}$', '$\\frac{1}{15}$'],
      answer: 1,
      solution:
        'The counters that are not square number $15 - 6 = 9$, so the probability is $\\frac{9}{15} = \\frac{3}{5}$. As a check, $P(\\text{square}) = \\frac{6}{15} = \\frac{2}{5}$ and $\\frac{2}{5} + \\frac{3}{5} = 1$, exactly as the complement rule promises. The choice $\\frac{2}{5}$ is that square probability, the opposite of what was asked. The choice $\\frac{2}{3}$ is $\\frac{6}{9}$, comparing square counters with non-square ones instead of with all $15$, and $\\frac{1}{15}$ counts a single counter.',
    },
    {
      q: 'In a class of $20$ students, $9$ walk to school. One student is chosen at random. What is the probability that the student does NOT walk to school?',
      choices: ['$\\frac{9}{20}$', '$\\frac{9}{11}$', '$\\frac{11}{20}$', '$\\frac{1}{20}$'],
      answer: 2,
      solution:
        'The students who do not walk number $20 - 9 = 11$, so the probability is $\\frac{11}{20}$. Equivalently $1 - \\frac{9}{20} = \\frac{11}{20}$, and the two counts $9$ and $11$ add to the whole class of $20$. The choice $\\frac{9}{20}$ is the probability that the student DOES walk. The choice $\\frac{9}{11}$ compares walkers with non-walkers rather than with the whole class, and $\\frac{1}{20}$ counts only one student as favorable.',
    },
  ],
  // p7 — a two-step experiment, one favorable outcome
  [
    {
      q: 'Two fair coins are flipped, a penny and then a dime. What is the probability that the penny lands heads and the dime lands tails?',
      choices: ['$\\frac{1}{2}$', '$\\frac{1}{4}$', '$\\frac{1}{3}$', '$\\frac{3}{4}$'],
      answer: 1,
      solution:
        'List all $2 \\times 2 = 4$ equally likely results as (penny, dime): HH, HT, TH, TT. Only HT has the penny heads and the dime tails, so the probability is $\\frac{1}{4}$. The choice $\\frac{1}{2}$ counts TH as well, but that is the dime showing heads — the two coins are named, so the order matters here. The choice $\\frac{1}{3}$ comes from listing only three results (two heads, one of each, two tails), which are not equally likely. And $\\frac{3}{4}$ is the probability that this exact result does NOT happen.',
    },
    {
      q: 'A spinner has $3$ equal sections coloured red, blue, and yellow. It is spun twice, and the same colour may come up both times. What is the probability that both spins land on red?',
      choices: ['$\\frac{1}{3}$', '$\\frac{2}{3}$', '$\\frac{1}{9}$', '$\\frac{1}{6}$'],
      answer: 2,
      solution:
        'Each spin has $3$ outcomes and the spinner has no memory, so the second spin still has all $3$ colours available: $3 \\times 3 = 9$ equally likely results. Exactly one of them is red-then-red, so the probability is $\\frac{1}{9}$. The choice $\\frac{1}{6}$ uses $3 \\times 2 = 6$ results, which would be right only if the first colour were used up and could not repeat — a spinner never removes a colour. The choice $\\frac{1}{3}$ looks at only one spin, and $\\frac{2}{3}$ adds $\\frac{1}{3} + \\frac{1}{3}$ instead of counting the pairs.',
    },
    {
      q: 'A fair coin is flipped and a standard die is rolled. What is the probability of getting heads on the coin and a $5$ on the die?',
      choices: ['$\\frac{1}{8}$', '$\\frac{1}{6}$', '$\\frac{2}{3}$', '$\\frac{1}{12}$'],
      answer: 3,
      solution:
        'Pair every coin result with every die result: $2 \\times 6 = 12$ equally likely outcomes, from (H,1) all the way to (T,6). Exactly one of them is (H,5), so the probability is $\\frac{1}{12}$. The choice $\\frac{1}{8}$ comes from ADDING $2 + 6 = 8$ outcomes instead of multiplying. The choice $\\frac{1}{6}$ ignores the coin entirely, and $\\frac{2}{3}$ adds the two probabilities, $\\frac{1}{2} + \\frac{1}{6}$, when two things must both happen.',
    },
  ],
  // p8 — an "or" of two non-overlapping groups
  [
    {
      q: 'A bin holds $4$ pens, $5$ pencils, and $3$ crayons. One item is taken at random. What is the probability it is a pen or a crayon?',
      choices: ['$\\frac{7}{12}$', '$\\frac{5}{12}$', '$\\frac{1}{3}$', '$\\frac{1}{4}$'],
      answer: 0,
      solution:
        'Nothing is both a pen and a crayon, so the two counts simply add: $4 + 3 = 7$ favorable items out of $4 + 5 + 3 = 12$. The probability is $\\frac{7}{12}$. The choice $\\frac{5}{12}$ is the probability of a pencil — that is the complement, the one case we did NOT want. The choice $\\frac{1}{3}$ is $\\frac{4}{12}$, the pens alone, and $\\frac{1}{4}$ is $\\frac{3}{12}$, the crayons alone.',
    },
    {
      q: 'A fruit bowl holds $5$ plums, $4$ figs, and $11$ dates. One piece of fruit is taken at random. What is the probability it is a plum or a fig?',
      choices: ['$\\frac{11}{20}$', '$\\frac{9}{20}$', '$\\frac{1}{5}$', '$\\frac{9}{11}$'],
      answer: 1,
      solution:
        'A plum is never a fig, so add the counts: $5 + 4 = 9$ favorable out of $5 + 4 + 11 = 20$ pieces. The probability is $\\frac{9}{20}$, already in lowest terms. The choice $\\frac{11}{20}$ is the probability of a date, which is the complement rather than the event asked for. The choice $\\frac{1}{5}$ is $\\frac{4}{20}$, the figs alone, and $\\frac{9}{11}$ compares the favorable fruit with the dates instead of with all $20$ pieces.',
    },
    {
      q: 'A jar holds $6$ blue buttons, $2$ white buttons, and $4$ pink buttons. One button is drawn at random. What is the probability it is blue or white?',
      choices: ['$\\frac{1}{3}$', '$\\frac{1}{2}$', '$\\frac{1}{6}$', '$\\frac{2}{3}$'],
      answer: 3,
      solution:
        'The blue and white groups do not overlap, so add them: $6 + 2 = 8$ favorable out of $6 + 2 + 4 = 12$ buttons. That gives $\\frac{8}{12} = \\frac{2}{3}$. The choice $\\frac{1}{3}$ is $\\frac{4}{12}$, the probability of a pink button — the complement, not the event asked for. The choice $\\frac{1}{2}$ is $\\frac{6}{12}$, the blue buttons alone, and $\\frac{1}{6}$ is $\\frac{2}{12}$, the white buttons alone.',
    },
  ],
  // p9 — two dice, casework on the sum
  [
    {
      q: 'Two standard dice are rolled, one red and one blue. What is the probability that the sum is $5$?',
      choices: ['$\\frac{1}{9}$', '$\\frac{1}{18}$', '$\\frac{5}{36}$', '$\\frac{1}{6}$'],
      answer: 0,
      solution:
        'There are $6 \\times 6 = 36$ equally likely rolls. Casework on the red die gives the sums of $5$: $(1,4)$, $(2,3)$, $(3,2)$, $(4,1)$ — that is $4$ rolls, since the dice are different colours and $(1,4)$ is a different roll from $(4,1)$. The probability is $\\frac{4}{36} = \\frac{1}{9}$. The choice $\\frac{1}{18}$ is $\\frac{2}{36}$, counting only the unordered pairs $\\{1,4\\}$ and $\\{2,3\\}$ and forgetting that each can happen two ways. The choice $\\frac{5}{36}$ mistakes the sum $5$ for the number of favorable rolls, and $\\frac{1}{6}$ assumes every sum is as likely as a sum of $7$.',
    },
    {
      q: 'Two standard dice are rolled, one red and one blue. What is the probability that the sum is $6$?',
      choices: ['$\\frac{1}{6}$', '$\\frac{1}{12}$', '$\\frac{5}{36}$', '$\\frac{1}{9}$'],
      answer: 2,
      solution:
        'Of the $6 \\times 6 = 36$ equally likely rolls, casework on the red die gives $(1,5)$, $(2,4)$, $(3,3)$, $(4,2)$, $(5,1)$ — $5$ rolls in all. So the probability is $\\frac{5}{36}$, which is already in lowest terms. The choice $\\frac{1}{9}$ is $\\frac{4}{36}$, which drops $(3,3)$ because it has no partner in the other order — but a double is a perfectly good roll. The choice $\\frac{1}{12}$ is $\\frac{3}{36}$, counting only the unordered pairs $\\{1,5\\}$, $\\{2,4\\}$, $\\{3,3\\}$, and $\\frac{1}{6}$ assumes every sum is as likely as $7$.',
    },
    {
      q: 'Two standard dice are rolled, one red and one blue. What is the probability that the sum is $11$?',
      choices: ['$\\frac{1}{6}$', '$\\frac{1}{36}$', '$\\frac{11}{36}$', '$\\frac{1}{18}$'],
      answer: 3,
      solution:
        'There are $6 \\times 6 = 36$ equally likely rolls, and only $(5,6)$ and $(6,5)$ give a sum of $11$. The probability is $\\frac{2}{36} = \\frac{1}{18}$. The choice $\\frac{1}{36}$ counts the pair $\\{5,6\\}$ just once, forgetting that the red die could be the $5$ or the $6$. The choice $\\frac{11}{36}$ mistakes the sum for the count of favorable rolls, and $\\frac{1}{6}$ assumes every sum is as likely as $7$ — big sums are much rarer.',
    },
  ],
  // p10 — "at least one", handled by the complement
  [
    {
      q: 'A spinner has $3$ equal sections coloured red, blue, and yellow. It is spun twice, and the same colour may come up twice. What is the probability that at least one spin lands on red?',
      choices: ['$\\frac{5}{9}$', '$\\frac{4}{9}$', '$\\frac{2}{3}$', '$\\frac{1}{9}$'],
      answer: 0,
      solution:
        '"At least one red" is easier upside down. There are $3 \\times 3 = 9$ equally likely pairs of spins. A pair has NO red when each spin lands on blue or yellow: $2 \\times 2 = 4$ pairs. So $P(\\text{at least one red}) = 1 - \\frac{4}{9} = \\frac{5}{9}$, and the counts $4$ and $5$ add to all $9$ pairs. The choice $\\frac{4}{9}$ is that no-red probability, left un-subtracted. The choice $\\frac{2}{3}$ adds $\\frac{1}{3} + \\frac{1}{3}$, which counts the red-red pair twice, and $\\frac{1}{9}$ is the probability that BOTH spins are red.',
    },
    {
      q: 'A fair coin is flipped $4$ times. What is the probability of getting at least one head?',
      choices: ['$\\frac{1}{16}$', '$\\frac{15}{16}$', '$\\frac{1}{4}$', '$\\frac{7}{8}$'],
      answer: 1,
      solution:
        'Count the opposite instead: "no heads at all" is the single string TTTT, out of $2 \\times 2 \\times 2 \\times 2 = 16$ equally likely strings. So $P(\\text{at least one head}) = 1 - \\frac{1}{16} = \\frac{15}{16}$, and indeed $1 + 15 = 16$. The choice $\\frac{1}{16}$ is the no-heads probability, forgetting to subtract it from $1$. The choice $\\frac{1}{4}$ is $\\frac{4}{16}$, the probability of EXACTLY one head (HTTT, THTT, TTHT, TTTH) — "at least one" allows two, three, or four heads as well. And $\\frac{7}{8}$ is the answer for only $3$ flips.',
    },
    {
      q: 'A standard die is rolled twice. What is the probability that at least one of the two rolls is an even number?',
      choices: ['$\\frac{1}{4}$', '$\\frac{1}{2}$', '$1$', '$\\frac{3}{4}$'],
      answer: 3,
      solution:
        'Turn it around: there are $6 \\times 6 = 36$ equally likely pairs of rolls, and a pair has NO even number when both rolls are odd — $3 \\times 3 = 9$ pairs. So $P(\\text{at least one even}) = 1 - \\frac{9}{36} = 1 - \\frac{1}{4} = \\frac{3}{4}$, and the counts $9$ and $27$ add to all $36$ pairs. The choice $\\frac{1}{4}$ is the both-odd probability, left un-subtracted. The choice $\\frac{1}{2}$ is $\\frac{18}{36}$, the probability of EXACTLY one even roll, which leaves out the both-even pairs. And $1$ comes from adding $\\frac{1}{2} + \\frac{1}{2}$ — a probability of $1$ would mean the event is certain, and rolling two odds shows it is not.',
    },
  ],
]

export default {
  book: 'prealgebra',
  number: 14,
  sections: {
    '14.4': s144,
    '14.5': s145,
  },
}
