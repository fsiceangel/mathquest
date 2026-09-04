// Counting & Probability chapter 5 — variations for section 5.3
// (More Committee-type Problems). All problems and solutions are original
// MathQuest content.
//
// House rules for this file:
//  - Every stem settles its own conventions: people, books, fruits and beads are
//    all different; a committee, crew, basket or team is an unordered set; nothing
//    is chosen twice; a count is marked "exactly" or "at least"; and a division
//    into teams says outright whether the teams carry names.
//  - "Unnamed" (or "unlabeled", or "identical") teams means two divisions that
//    swap the teams are the same division. That halving — or the division by
//    $k!$ for $k$ same-size teams — is the whole content of the last four slots,
//    so a missing or doubled halving is a distractor in each of them.
//  - Route one is usually the direct construction (seat the named people, or
//    split into cases); route two is independent of it: a complement, a
//    casework-versus-complement swap, a count pinned on one fixed person, or a
//    double count of seats.
//  - Each distractor is one named slip: ignoring the rule, reporting the group
//    that was meant to be subtracted, adding pools instead of multiplying,
//    keeping an ordered pick, stopping after one case, subtracting only one bad
//    group, halving a split whose two parts are different sizes, or forgetting
//    to halve one whose parts match.

const s53 = [
  // slot 1 — choosing from several groups, and the same idea run backwards
  [
    {
      q: 'A band has $8$ drummers and $6$ guitarists, all fourteen musicians different. A festival act is built from exactly $2$ of the drummers and exactly $3$ of the guitarists; an act is an unordered set of five musicians with no roles and no billing order. How many different acts are possible?',
      choices: ['$48$', '$2002$', '$560$', '$1120$'],
      answer: 2,
      solution:
        'Route one, choose each group and multiply. The drummer pair can be chosen in $\\binom{8}{2} = 28$ ways and the guitarist trio in $\\binom{6}{3} = 20$ ways. Every pair can be joined to every trio, and no act arises twice, so there are $28 \\times 20 = 560$ acts ✓. Route two, build an ordered lineup and divide it down. Name the two drummers first and second and the three guitarists first, second and third: that is $8 \\times 7 = 56$ ordered drummer picks and $6 \\times 5 \\times 4 = 120$ ordered guitarist picks, or $56 \\times 120 = 6720$ ordered lineups. A fixed act appears once for each of the $2! = 2$ drummer orders and each of the $3! = 6$ guitarist orders, so every act was counted $12$ times: $\\frac{6720}{12} = 560$ ✓. (The choice $48$ ADDS THE TWO COUNTS, $28 + 20$, which would count acts made of drummers only or guitarists only ✗; $2002$ IS $\\binom{14}{5}$, POOLING ALL FOURTEEN MUSICIANS and ignoring the required mix ✗; $1120$ KEEPS THE DRUMMERS IN ORDER, $8 \\times 7 \\times 20$, treating a first and second drummer as different from the same two swapped ✗.)',
    },
    {
      q: 'A shop stocks $5$ kinds of tea, $6$ kinds of cookie, and $4$ kinds of jam. A gift basket holds exactly $2$ kinds of tea, exactly $3$ kinds of cookie, and exactly $1$ kind of jam, with at most one item of each kind and no arrangement inside the basket. How many different baskets are possible?',
      choices: ['$800$', '$34$', '$5005$', '$1600$'],
      answer: 0,
      solution:
        'Route one, choose each group and multiply. The teas can be chosen in $\\binom{5}{2} = 10$ ways, the cookies in $\\binom{6}{3} = 20$ ways, and the jam in $\\binom{4}{1} = 4$ ways. The three choices are made independently, so there are $10 \\times 20 \\times 4 = 800$ baskets ✓. Route two, pack in order and divide. Suppose the two teas are packed in order, then the three cookies in order, then the jam: $\\left(5 \\times 4\\right) \\times \\left(6 \\times 5 \\times 4\\right) \\times 4 = 20 \\times 120 \\times 4 = 9600$ ordered packings. A finished basket does not remember the order, and it arises from $2! \\times 3! \\times 1! = 12$ packings, so there are $\\frac{9600}{12} = 800$ baskets ✓. (The choice $34$ ADDS THE THREE COUNTS, $10 + 20 + 4$, instead of multiplying ✗; $5005$ IS $\\binom{15}{6}$, CHOOSING ANY SIX OF THE FIFTEEN KINDS and ignoring the required mix ✗; $1600$ KEEPS THE TEAS IN ORDER, $5 \\times 4 \\times 20 \\times 4$ ✗.)',
    },
    {
      q: 'A team roster lists $n$ forwards and $4$ goalies, everyone different. A squad is exactly $3$ of the forwards together with exactly $2$ of the goalies, chosen as an unordered set with no positions assigned. There are exactly $120$ possible squads. What is $n$?',
      choices: ['$10$', '$20$', '$5$', '$6$'],
      answer: 3,
      solution:
        'Route one, peel off the goalies. The goalie pair can be chosen in $\\binom{4}{2} = 6$ ways, and each goalie pair goes with each forward trio, so $\\binom{n}{3} \\times 6 = 120$ and $\\binom{n}{3} = 20$. Since $\\binom{6}{3} = \\frac{6 \\times 5 \\times 4}{6} = 20$, the roster has $n = 6$ forwards ✓. Route two, tabulate the squad count. A roster of $4$ forwards gives $\\binom{4}{3} \\times 6 = 4 \\times 6 = 24$ squads; a roster of $5$ gives $10 \\times 6 = 60$; a roster of $6$ gives $20 \\times 6 = 120$ ✓; a roster of $7$ gives $35 \\times 6 = 210$. The count climbs as the roster grows, so $6$ is the only value that lands on $120$ ✓. (The choice $10$ SOLVES $\\binom{n}{3} = 120$ AND NEVER DIVIDES OUT THE SIX GOALIE PAIRS, since $\\binom{10}{3} = 120$ ✗; $20$ REPORTS $\\binom{n}{3} = 20$, the number of forward trios, as the number of forwards ✗; $5$ TREATS THE TWO GOALIES AS AN ORDERED PAIR, using $4 \\times 3 = 12$ and leaving $\\binom{n}{3} = 10$ ✗.)',
    },
  ],
  // slot 2 — named people who must serve
  [
    {
      q: 'A $5$-person committee is chosen from $14$ students, all different, and the committee is an unordered set with no offices. Iris and Jonah must both be on it. How many committees are possible?',
      choices: ['$2002$', '$495$', '$364$', '$220$'],
      answer: 3,
      solution:
        'Route one, seat the two and fill the rest. Iris and Jonah take two of the five seats, so the other $3$ members come from the $12$ students who are neither of them: $\\binom{12}{3} = 220$ ✓. Route two, count Iris’s committees and throw out the ones missing Jonah. Committees containing Iris number $\\binom{13}{4} = 715$, since the other four seats are filled from the remaining $13$ students. Of those, the ones that leave Jonah off fill four seats from the $12$ students other than Iris and Jonah: $\\binom{12}{4} = 495$. Subtracting, $715 - 495 = 220$ ✓. (The choice $2002$ IS $\\binom{14}{5}$, WHICH IGNORES THE RULE ✗; $495$ IS $\\binom{12}{4}$, WHICH SEATS ONLY ONE OF THE TWO and leaves four seats to fill ✗; $364$ IS $\\binom{14}{3}$, WHICH FREES THREE SEATS BUT NEVER REMOVES IRIS AND JONAH FROM THE POOL ✗.)',
    },
    {
      q: 'A shop sells $9$ different kinds of fruit. A basket holds $4$ of the kinds, one piece of each chosen kind, and the kinds in a basket are unordered. The basket must include mango and papaya. How many different baskets are possible?',
      choices: ['$126$', '$21$', '$35$', '$36$'],
      answer: 1,
      solution:
        'Route one, put the two in and fill the rest. Mango and papaya use two of the four places, so the other $2$ kinds come from the $7$ kinds that are neither: $\\binom{7}{2} = 21$ ✓. Route two, count what is left out. A basket takes $4$ of the $9$ kinds, so it leaves out $5$ of them. Mango and papaya are never among the left-out kinds, so the five left out are chosen from the other $7$: $\\binom{7}{5} = 21$ ✓. (The choice $126$ IS $\\binom{9}{4}$, WHICH IGNORES THE RULE ✗; $35$ IS $\\binom{7}{3}$, WHICH PUTS ONLY ONE OF MANGO AND PAPAYA IN THE BASKET ✗; $36$ IS $\\binom{9}{2}$, WHICH FREES TWO PLACES BUT LEAVES MANGO AND PAPAYA IN THE POOL to be chosen again ✗.)',
    },
    {
      q: 'A $5$-person committee is chosen from a group of $n$ people, all different, and the committee is an unordered set. Three named people must all be on it, and there are exactly $45$ possible committees. What is $n$?',
      choices: ['$13$', '$10$', '$45$', '$16$'],
      answer: 0,
      solution:
        'Route one, seat the three and solve. The three named people take three seats, so the last $2$ come from the $n - 3$ others: $\\binom{n-3}{2} = 45$, which means $(n-3)(n-4) = 90$. Two consecutive numbers with product $90$ are $10$ and $9$, so $n - 3 = 10$ and $n = 13$ ✓. Route two, add the pairs one person at a time. Write $m = n - 3$ for the number of people still available. Line them up and record each of the two remaining seats as a pair, counted by its earlier member: the first available person makes $m-1$ pairs, the second $m-2$, and so on, for a total of $1 + 2 + \\cdots + (m-1)$. Since $1 + 2 + \\cdots + 9 = 45$, the last term is $9$, so $m - 1 = 9$, $m = 10$, and the group holds $10 + 3 = 13$ people ✓. (The choice $10$ STOPS AT $n - 3 = 10$, naming the pool left after the three are seated rather than the whole group ✗; $45$ TAKES THE NUMBER OF COMMITTEES AS THE NUMBER OF PEOPLE ✗; $16$ REMOVES THE THREE TWICE, solving $\\binom{n-6}{2} = 45$ ✗.)',
    },
  ],
  // slot 3 — named people who cannot serve
  [
    {
      q: 'A $5$-person crew is chosen from $13$ volunteers, all different, and a crew is an unordered set with no roles. Three of the volunteers are away and cannot serve. How many crews are possible?',
      choices: ['$1287$', '$252$', '$792$', '$210$'],
      answer: 1,
      solution:
        'Route one, shrink the pool. The three who are away can never appear, so the crew is chosen from the $13 - 3 = 10$ volunteers who are available: $\\binom{10}{5} = 252$ ✓. Route two, casework on one available volunteer. Call one of the ten available volunteers Ana. Crews with Ana fill the other $4$ seats from the remaining $9$ available volunteers: $\\binom{9}{4} = 126$. Crews without Ana fill all $5$ seats from those same $9$: $\\binom{9}{5} = 126$. Every crew falls in exactly one case, so there are $126 + 126 = 252$ ✓. (The choice $1287$ IS $\\binom{13}{5}$, WHICH IGNORES THE RULE ✗; $792$ IS $\\binom{12}{5}$, WHICH REMOVES ONLY ONE OF THE THREE ABSENT VOLUNTEERS ✗; $210$ IS $\\binom{10}{4}$, WHICH DROPS A CREW SEAT ALONG WITH THE THREE PEOPLE ✗.)',
    },
    {
      q: 'A test sheet has $13$ questions, all different, and a student must answer exactly $6$ of them; only the set of questions answered matters, not the order they are worked. Three of the questions are misprinted and may not be chosen. How many different sets of six questions can the student answer?',
      choices: ['$1716$', '$924$', '$120$', '$210$'],
      answer: 3,
      solution:
        'Route one, shrink the pool. The three misprinted questions are unavailable, so the six answers come from the $13 - 3 = 10$ usable questions: $\\binom{10}{6} = 210$ ✓. Route two, count the questions skipped. Of the $10$ usable questions the student answers $6$ and skips $4$, and naming the skipped four settles the answered six exactly. So count the skipped sets instead: $\\binom{10}{4} = \\frac{10 \\times 9 \\times 8 \\times 7}{24} = 210$ ✓. (The choice $1716$ IS $\\binom{13}{6}$, WHICH IGNORES THE MISPRINTS ✗; $924$ IS $\\binom{12}{6}$, WHICH BARS ONLY ONE MISPRINTED QUESTION ✗; $120$ SUBTRACTS THE THREE MISPRINTS FROM THE SIX ANSWERS AS WELL AS FROM THE POOL, choosing only $3$ of the $10$ usable questions ✗.)',
    },
    {
      q: 'A club chooses a $3$-person committee, an unordered set with no offices. Two of its members are away and cannot serve, and there are exactly $35$ possible committees. How many members does the club have?',
      choices: ['$7$', '$35$', '$9$', '$11$'],
      answer: 2,
      solution:
        'Route one, shrink the pool and solve. With $n$ members, $n - 2$ are available and $\\binom{n-2}{3} = 35$. Since $\\binom{7}{3} = \\frac{7 \\times 6 \\times 5}{6} = 35$, we get $n - 2 = 7$ and $n = 9$ ✓. Route two, tabulate the committee count. A club of $7$ members leaves $5$ available and gives $\\binom{5}{3} = 10$ committees; a club of $8$ leaves $6$ and gives $\\binom{6}{3} = 20$; a club of $9$ leaves $7$ and gives $35$ ✓; a club of $10$ leaves $8$ and gives $56$. The count rises with every added member, so $9$ is the only club size that produces $35$ ✓. (The choice $7$ STOPS AT THE NUMBER AVAILABLE, $n - 2 = 7$, rather than the membership ✗; $35$ TAKES THE NUMBER OF COMMITTEES AS THE NUMBER OF MEMBERS ✗; $11$ REMOVES THE TWO ABSENT MEMBERS TWICE, solving $\\binom{n-4}{3} = 35$ ✗.)',
    },
  ],
  // slot 4 — "at least one" by complement, and the "exactly one" follow-up
  [
    {
      q: 'A $4$-person committee is chosen from $7$ boys and $5$ girls, all twelve students different, and a committee is an unordered set. It must include at least one girl. How many committees are possible?',
      choices: ['$460$', '$35$', '$495$', '$825$'],
      answer: 0,
      solution:
        'Route one, count everything and subtract the opposite. All committees number $\\binom{12}{4} = 495$. The ones breaking the rule have no girl at all, so all four members come from the $7$ boys: $\\binom{7}{4} = 35$. Subtracting, $495 - 35 = 460$ ✓. Route two, casework on the number of girls. Exactly one girl: $\\binom{5}{1}\\binom{7}{3} = 5 \\times 35 = 175$. Exactly two: $\\binom{5}{2}\\binom{7}{2} = 10 \\times 21 = 210$. Exactly three: $\\binom{5}{3}\\binom{7}{1} = 10 \\times 7 = 70$. Exactly four: $\\binom{5}{4} = 5$. The four cases cannot overlap, so $175 + 210 + 70 + 5 = 460$ ✓. (The choice $35$ REPORTS THE ALL-BOY COMMITTEES, the group that was meant to be thrown away ✗; $495$ IGNORES THE RULE ✗; $825$ SEATS A GIRL FIRST AND FILLS THE OTHER THREE SEATS FROM ALL $11$ REMAINING STUDENTS, $5 \\times \\binom{11}{3}$, which counts a two-girl committee twice and a three-girl committee three times ✗.)',
    },
    {
      q: 'A bakery box holds $5$ pastries chosen from $6$ different muffins and $3$ different scones, all nine pastries distinct and no pastry chosen twice; the box is an unordered set. It must include at least one scone. How many boxes are possible?',
      choices: ['$126$', '$6$', '$120$', '$210$'],
      answer: 2,
      solution:
        'Route one, count everything and subtract the opposite. All boxes number $\\binom{9}{5} = 126$. A box breaking the rule holds no scone, so all five pastries are muffins: $\\binom{6}{5} = 6$. Subtracting, $126 - 6 = 120$ ✓. Route two, casework on the number of scones. Exactly one scone: $\\binom{3}{1}\\binom{6}{4} = 3 \\times 15 = 45$. Exactly two: $\\binom{3}{2}\\binom{6}{3} = 3 \\times 20 = 60$. All three: $\\binom{3}{3}\\binom{6}{2} = 1 \\times 15 = 15$. The cases are disjoint, so $45 + 60 + 15 = 120$ ✓. (The choice $126$ IGNORES THE RULE ✗; $6$ REPORTS THE ALL-MUFFIN BOXES that were meant to be subtracted ✗; $210$ PUTS A SCONE IN FIRST AND FILLS THE OTHER FOUR PLACES FROM ALL $8$ REMAINING PASTRIES, $3 \\times \\binom{8}{4}$, counting a two-scone box twice ✗.)',
    },
    {
      q: 'A $4$-person committee is chosen from $7$ boys and $4$ girls, all eleven students different, and a committee is an unordered set. In how many committees is there exactly one girl — no more and no fewer?',
      choices: ['$295$', '$140$', '$330$', '$480$'],
      answer: 1,
      solution:
        'Route one, choose the girl and then the boys. Exactly one of the four girls serves, in $\\binom{4}{1} = 4$ ways, and the other three seats must all go to boys: $\\binom{7}{3} = 35$. Multiplying, $4 \\times 35 = 140$ ✓. Route two, subtract the crowded committees from the ones with at least one girl. All committees number $\\binom{11}{4} = 330$, and the all-boy ones number $\\binom{7}{4} = 35$, so $330 - 35 = 295$ committees hold at least one girl. Of those, the ones with two or more girls number $\\binom{4}{2}\\binom{7}{2} + \\binom{4}{3}\\binom{7}{1} + \\binom{4}{4} = 126 + 28 + 1 = 155$. Subtracting, $295 - 155 = 140$ ✓. (The choice $295$ READS "EXACTLY ONE" AS "AT LEAST ONE" ✗; $330$ IGNORES THE RULE ✗; $480$ SEATS A GIRL AND FILLS THE OTHER THREE SEATS FROM ALL $10$ REMAINING STUDENTS, $4 \\times \\binom{10}{3}$, which admits extra girls and counts several committees more than once ✗.)',
    },
  ],
  // slot 5 — "at least one of each", and a comparison version
  [
    {
      q: 'A $5$-person committee is chosen from $6$ men and $4$ women, all ten people different, and a committee is an unordered set. It must include at least one man and at least one woman. How many committees are possible?',
      choices: ['$252$', '$120$', '$246$', '$242$'],
      answer: 2,
      solution:
        'Route one, count everything and subtract both bad groups. All committees number $\\binom{10}{5} = 252$. An all-man committee takes five of the six men: $\\binom{6}{5} = 6$. An all-woman committee would need five women, but there are only four, so $\\binom{4}{5} = 0$ of those exist. The two bad groups do not overlap, so $252 - 6 - 0 = 246$ ✓. Route two, casework on the number of men. The committee holds $m$ men and $5 - m$ women with $1 \\le m \\le 4$: $\\binom{6}{1}\\binom{4}{4} = 6$, $\\binom{6}{2}\\binom{4}{3} = 15 \\times 4 = 60$, $\\binom{6}{3}\\binom{4}{2} = 20 \\times 6 = 120$, and $\\binom{6}{4}\\binom{4}{1} = 15 \\times 4 = 60$. Adding the four disjoint cases, $6 + 60 + 120 + 60 = 246$ ✓. (The choice $252$ IGNORES THE RULE ✗; $120$ STOPS AFTER THE THREE-MEN CASE ✗; $242$ SUBTRACTS FOUR PHANTOM ALL-WOMAN COMMITTEES, as if $\\binom{4}{5}$ were $4$ rather than $0$ ✗.)',
    },
    {
      q: 'A stack of $3$ books is chosen from $5$ different novels and $4$ different comics, all nine books distinct; only the set of three books matters, since the stacking order is settled later. The stack must include at least one novel and at least one comic. How many stacks are possible?',
      choices: ['$70$', '$84$', '$74$', '$140$'],
      answer: 0,
      solution:
        'Route one, count everything and subtract both bad groups. All stacks number $\\binom{9}{3} = 84$. All-novel stacks number $\\binom{5}{3} = 10$ and all-comic stacks number $\\binom{4}{3} = 4$; no stack is both, so $84 - 10 - 4 = 70$ ✓. Route two, casework on the number of novels. One novel and two comics: $\\binom{5}{1}\\binom{4}{2} = 5 \\times 6 = 30$. Two novels and one comic: $\\binom{5}{2}\\binom{4}{1} = 10 \\times 4 = 40$. Those are the only mixes with at least one of each, and they are disjoint, so $30 + 40 = 70$ ✓. (The choice $84$ IGNORES THE RULE ✗; $74$ SUBTRACTS ONLY THE ALL-NOVEL STACKS and forgets the all-comic ones ✗; $140$ PICKS ONE NOVEL AND ONE COMIC FIRST AND THEN ANY OF THE $7$ BOOKS LEFT, $5 \\times 4 \\times 7$, which counts every stack twice, once for each way of naming the first pair ✗.)',
    },
    {
      q: 'A $4$-person crew is chosen from $6$ painters and $4$ carpenters, all ten workers different, and a crew is an unordered set. In how many crews do the painters strictly outnumber the carpenters?',
      choices: ['$210$', '$80$', '$185$', '$95$'],
      answer: 3,
      solution:
        'Route one, casework on the split. With four seats, painters outnumber carpenters only when the crew is $3$ painters and $1$ carpenter or $4$ painters and $0$ carpenters. Those give $\\binom{6}{3}\\binom{4}{1} = 20 \\times 4 = 80$ and $\\binom{6}{4} = 15$. The two cases are disjoint, so $80 + 15 = 95$ ✓. Route two, remove the ties and the reversals. All crews number $\\binom{10}{4} = 210$. Tied crews hold $2$ of each: $\\binom{6}{2}\\binom{4}{2} = 15 \\times 6 = 90$. Crews where carpenters outnumber painters hold $3$ carpenters and $1$ painter, $\\binom{4}{3}\\binom{6}{1} = 4 \\times 6 = 24$, or $4$ carpenters, $\\binom{4}{4} = 1$, for $25$. Every crew is of exactly one type, so $210 - 90 - 25 = 95$ ✓. (The choice $210$ IGNORES THE RULE ✗; $80$ STOPS AFTER THE THREE-PAINTER CASE ✗; $185$ READS "OUTNUMBER" AS "AT LEAST AS MANY" and keeps the $90$ tied crews ✗.)',
    },
  ],
  // slot 6 — two teams, unequal sizes (no halving) and equal sizes (halving)
  [
    {
      q: 'Nine players split into a team of $4$ and a team of $5$ for a scavenger hunt. The teams are unnamed: they have no colors, numbers or captains, and a division is settled only by which players are grouped together. How many different splits are possible?',
      choices: ['$63$', '$126$', '$3024$', '$84$'],
      answer: 1,
      solution:
        'Route one, choose the smaller team. Naming the $4$ players in the small team settles the whole division, since the other $5$ form the large team: $\\binom{9}{4} = 126$ ✓. No halving belongs here — a team of $4$ and a team of $5$ can never be mistaken for each other, so no division was counted twice. Route two, pin the division on one player. Call one player Ada. If Ada is on the team of $4$, her three teammates come from the other $8$: $\\binom{8}{3} = 56$. If Ada is on the team of $5$, her four teammates come from the other $8$: $\\binom{8}{4} = 70$. Every division puts Ada in exactly one of the two teams, so $56 + 70 = 126$ ✓. (The choice $63$ HALVES A COUNT THAT WAS NEVER DOUBLED, since the two teams differ in size ✗; $3024$ IS $9 \\times 8 \\times 7 \\times 6$, TREATING THE SMALL TEAM AS AN ORDERED LINEUP ✗; $84$ IS $\\binom{9}{3}$, SPLITTING THE PLAYERS $3$ AND $6$ instead of $4$ and $5$ ✗.)',
    },
    {
      q: 'Eleven different books are divided into an unlabeled pile of $4$ and an unlabeled pile of $7$. The piles have no names or shelf positions, and a division is settled only by which books sit together. How many divisions are possible?',
      choices: ['$165$', '$7920$', '$462$', '$330$'],
      answer: 3,
      solution:
        'Route one, choose the small pile. Naming the $4$ books of the small pile settles the division, since the other $7$ make the large pile: $\\binom{11}{4} = 330$ ✓. There is nothing to halve: a pile of $4$ and a pile of $7$ are told apart by their sizes, so no division was described twice. Route two, pin the division on one book. Fix the atlas. If the atlas is in the pile of $4$, its three companions come from the other $10$: $\\binom{10}{3} = 120$. If the atlas is in the pile of $7$, its six companions come from the other $10$: $\\binom{10}{6} = 210$. Adding the two disjoint cases, $120 + 210 = 330$ ✓. (The choice $165$ HALVES A COUNT THAT WAS NEVER DOUBLED ✗; $7920$ IS $11 \\times 10 \\times 9 \\times 8$, ORDERING THE SMALL PILE ✗; $462$ IS $\\binom{11}{5}$, SPLITTING THE BOOKS $5$ AND $6$ instead of $4$ and $7$ ✗.)',
    },
    {
      q: 'Twelve players split into two teams of $6$ each. The teams are unnamed — no colors, numbers or captains — so a division that swaps the two teams is the same division. In how many ways can they split?',
      choices: ['$924$', '$231$', '$462$', '$792$'],
      answer: 2,
      solution:
        'Route one, name the teams, then unname them. Pretend one team is called the first team: choosing it takes $\\binom{12}{6} = 924$ ways. But calling a group of six the first team and calling the other six the first team describe the same division, so every division was listed exactly twice: $\\frac{924}{2} = 462$ ✓. Route two, pin the division on one player. Fix a player, Nia. Whatever the division, Nia sits on one of the two teams, and that team is settled by choosing her $5$ teammates from the other $11$ players: $\\binom{11}{5} = 462$. Different choices give different divisions and every division arises once, with no halving needed because Nia’s team is never the other one ✓. (The choice $924$ FORGETS THE HALVING, counting each division once for each team it could call first ✗; $231$ HALVES TWICE, dividing $924$ by $4$ ✗; $792$ IS $\\binom{12}{5}$, SPLITTING THE PLAYERS $5$ AND $7$ instead of $6$ and $6$ ✗.)',
    },
  ],
  // slot 7 — one-way and two-way conditions on a pair of people
  [
    {
      q: 'A $5$-person committee is chosen from $9$ people, all different, and a committee is an unordered set. Mira will serve only if Nolan serves; Nolan is willing to serve with or without Mira. How many committees are possible?',
      choices: ['$91$', '$126$', '$35$', '$70$'],
      answer: 0,
      solution:
        'Route one, subtract the forbidden committees. All committees number $\\binom{9}{5} = 126$. The only forbidden ones hold Mira without Nolan; those fill the other $4$ seats from the $7$ people who are neither: $\\binom{7}{4} = 35$. Subtracting, $126 - 35 = 91$ ✓. Route two, split into the three allowed cases. Both serve: the other $3$ seats come from the $7$ others, $\\binom{7}{3} = 35$. Nolan serves without Mira: $4$ seats from the $7$ others, $\\binom{7}{4} = 35$. Neither serves: all $5$ seats from the $7$ others, $\\binom{7}{5} = 21$. The cases are disjoint and cover every allowed committee, so $35 + 35 + 21 = 91$ ✓. (The choice $126$ IGNORES THE RULE ✗; $35$ REPORTS THE FORBIDDEN COMMITTEES, the group that was meant to be subtracted ✗; $70$ ADDS ONLY THE TWO CASES THAT INCLUDE NOLAN and drops the committees with neither of them ✗.)',
    },
    {
      q: 'A pizza takes exactly $3$ different toppings chosen from a list of $8$; the toppings form an unordered set and none is used twice. The anchovy topping may be used only if onion is used as well, while onion may be used on its own. How many different pizzas are possible?',
      choices: ['$56$', '$15$', '$41$', '$21$'],
      answer: 2,
      solution:
        'Route one, subtract the banned pizzas. All topping sets number $\\binom{8}{3} = 56$. A banned pizza carries anchovy but not onion, so its other $2$ toppings come from the $6$ toppings that are neither: $\\binom{6}{2} = 15$. Subtracting, $56 - 15 = 41$ ✓. Route two, split into the three allowed cases. Anchovy and onion together: one more topping from the $6$ others, $\\binom{6}{1} = 6$. Onion without anchovy: $2$ more from the $6$ others, $\\binom{6}{2} = 15$. Neither: all $3$ from the $6$ others, $\\binom{6}{3} = 20$. The cases are disjoint, so $6 + 15 + 20 = 41$ ✓. (The choice $56$ IGNORES THE RULE ✗; $15$ REPORTS THE BANNED PIZZAS ✗; $21$ KEEPS ONLY THE PIZZAS THAT CARRY ONION, $6 + 15$, dropping the ones with neither topping ✗.)',
    },
    {
      q: 'A $4$-person committee is chosen from $11$ people, all different, and a committee is an unordered set. Dara and Emre either both serve or both stay off — never one without the other. How many committees are possible?',
      choices: ['$330$', '$162$', '$294$', '$36$'],
      answer: 1,
      solution:
        'Route one, add the two allowed cases. If both serve, they take two seats and the other $2$ come from the $9$ people who are neither: $\\binom{9}{2} = 36$. If neither serves, all $4$ seats come from those same $9$: $\\binom{9}{4} = 126$. The cases cannot overlap, so $36 + 126 = 162$ ✓. Route two, subtract the split committees. All committees number $\\binom{11}{4} = 330$. A committee breaks the rule when exactly one of the two serves: Dara without Emre fills $3$ seats from the $9$ others, $\\binom{9}{3} = 84$, and Emre without Dara does the same, $84$, for $168$ broken committees. Subtracting, $330 - 168 = 162$ ✓. (The choice $330$ IGNORES THE RULE ✗; $294$ READS THE RULE AS "NOT BOTH", subtracting only the $36$ committees that hold the pair ✗; $36$ STOPS AT THE BOTH-SERVE CASE and forgets the committees with neither ✗.)',
    },
  ],
  // slot 8 — two "at least" floors at once, then a named member inside them
  [
    {
      q: 'A $6$-person committee is chosen from $7$ men and $6$ women, all thirteen people different, and a committee is an unordered set. It must include at least $2$ men and at least $2$ women. How many committees are possible?',
      choices: ['$1716$', '$1673$', '$700$', '$1540$'],
      answer: 3,
      solution:
        'Route one, casework on the number of men. Six seats with at least $2$ men and at least $2$ women allow $m = 2$, $3$ or $4$ men. Those give $\\binom{7}{2}\\binom{6}{4} = 21 \\times 15 = 315$, $\\binom{7}{3}\\binom{6}{3} = 35 \\times 20 = 700$, and $\\binom{7}{4}\\binom{6}{2} = 35 \\times 15 = 525$. The three cases are disjoint, so $315 + 700 + 525 = 1540$ ✓. Route two, count everything and subtract both shortfalls. All committees number $\\binom{13}{6} = 1716$. Committees with fewer than $2$ men hold $0$ men, $\\binom{6}{6} = 1$, or $1$ man, $\\binom{7}{1}\\binom{6}{5} = 7 \\times 6 = 42$, for $43$. Committees with fewer than $2$ women hold $0$ women, $\\binom{7}{6} = 7$, or $1$ woman, $\\binom{6}{1}\\binom{7}{5} = 6 \\times 21 = 126$, for $133$. A committee of six cannot be short of men and short of women at once, so the two groups do not overlap: $1716 - 43 - 133 = 1540$ ✓. (The choice $1716$ IGNORES THE RULE ✗; $1673$ SUBTRACTS ONLY THE MAN-SHORT COMMITTEES, $1716 - 43$ ✗; $700$ STOPS AFTER THE THREE-MEN CASE ✗.)',
    },
    {
      q: 'A tray holds $5$ pieces of fruit chosen from $7$ different apples and $4$ different pears, all eleven pieces distinct and none chosen twice; the tray is an unordered set. It must hold at least $2$ apples and at least $2$ pears. How many trays are possible?',
      choices: ['$462$', '$294$', '$455$', '$210$'],
      answer: 1,
      solution:
        'Route one, casework on the number of apples. Five pieces with at least $2$ apples and at least $2$ pears allow $2$ or $3$ apples. Those give $\\binom{7}{2}\\binom{4}{3} = 21 \\times 4 = 84$ and $\\binom{7}{3}\\binom{4}{2} = 35 \\times 6 = 210$. The cases are disjoint, so $84 + 210 = 294$ ✓. Route two, count everything and subtract both shortfalls. All trays number $\\binom{11}{5} = 462$. Trays short of apples hold $0$ apples, which is impossible with only $4$ pears, or $1$ apple, $\\binom{7}{1}\\binom{4}{4} = 7$; that is $7$ trays. Trays short of pears hold $0$ pears, $\\binom{7}{5} = 21$, or $1$ pear, $\\binom{4}{1}\\binom{7}{4} = 4 \\times 35 = 140$; that is $161$ trays. No tray is short of both, so $462 - 7 - 161 = 294$ ✓. (The choice $462$ IGNORES THE RULE ✗; $455$ SUBTRACTS ONLY THE APPLE-SHORT TRAYS, $462 - 7$ ✗; $210$ STOPS AFTER THE THREE-APPLE CASE ✗.)',
    },
    {
      q: 'A $5$-person panel is chosen from $7$ juniors and $4$ seniors, all eleven people different, and a panel is an unordered set. Every panel must hold at least $2$ juniors and at least $2$ seniors. In how many of those panels does Mika, one of the four seniors, serve?',
      choices: ['$168$', '$294$', '$126$', '$203$'],
      answer: 0,
      solution:
        'Route one, seat Mika and split into cases. With Mika on the panel, the four other seats must still leave at least $2$ juniors and at least $2$ seniors overall. If Mika is one of exactly $2$ seniors, the panel has $3$ juniors: $\\binom{3}{1}\\binom{7}{3} = 3 \\times 35 = 105$. If Mika is one of exactly $3$ seniors, the panel has $2$ juniors: $\\binom{3}{2}\\binom{7}{2} = 3 \\times 21 = 63$. A panel of five cannot hold four seniors and still have two juniors, so those are all the cases: $105 + 63 = 168$ ✓. Route two, count senior seats and share them out. Every valid panel holds $2$ juniors and $3$ seniors, $\\binom{7}{2}\\binom{4}{3} = 21 \\times 4 = 84$ of them, or $3$ juniors and $2$ seniors, $\\binom{7}{3}\\binom{4}{2} = 35 \\times 6 = 210$ of them. Counting the senior seats across all valid panels gives $3 \\times 84 + 2 \\times 210 = 252 + 420 = 672$ seats. The four seniors are interchangeable in these counts, so each of them fills $\\frac{672}{4} = 168$ of those seats, one per panel ✓. (The choice $294$ COUNTS EVERY VALID PANEL, $84 + 210$, and never uses the condition on Mika ✗; $126$ REPORTS THE PANELS MIKA SITS OUT, $294 - 168$ ✗; $203$ SEATS MIKA AND THEN ASKS ONLY FOR TWO JUNIORS, letting Mika be the panel’s only senior ✗.)',
    },
  ],
  // slot 9 — many same-size unnamed groups, so divide by k!
  [
    {
      q: 'Eight friends at a game night split into four pairs to play cards. The pairs are unnamed — no pair has a color, a number or a table — and the two players inside a pair have no roles, so a pairing is settled only by who is matched with whom. How many pairings are possible?',
      choices: ['$2520$', '$105$', '$630$', '$28$'],
      answer: 1,
      solution:
        'Route one, match the friends off one at a time. Line the friends up in a fixed order. The first friend can be matched with any of the other $7$. Among the $6$ friends still unmatched, the first of them can be matched with any of the other $5$. Then $3$ choices, then $1$. Each pairing is built exactly once this way, so there are $7 \\times 5 \\times 3 \\times 1 = 105$ pairings ✓. Route two, arrange all eight and divide out the repeats. Write the friends in a row, $8! = 40320$ ways, and read the row as the pairs $(1,2)$, $(3,4)$, $(5,6)$, $(7,8)$. A fixed pairing comes from $2^4 = 16$ rows, since the two names inside each pair can be swapped, times $4! = 24$ rows, since the four pairs can be listed in any order. So each pairing appears $16 \\times 24 = 384$ times: $\\frac{40320}{384} = 105$ ✓. (The choice $2520$ DIVIDES ONLY BY THE $2^4$ INSIDE-PAIR SWAPS and still treats the four pairs as ordered ✗; $630$ DIVIDES BY $4$ RATHER THAN BY $4!$, undoing only part of the ordering of the pairs ✗; $28$ IS $\\binom{8}{2}$, WHICH COUNTS ONE PAIR and stops ✗.)',
    },
    {
      q: 'Twelve different cupcakes are packed into four identical boxes, exactly $3$ cupcakes per box. The boxes carry no labels and are not told apart in any way, and the order inside a box does not matter, so a packing is settled only by which cupcakes travel together. How many packings are possible?',
      choices: ['$369600$', '$92400$', '$220$', '$15400$'],
      answer: 3,
      solution:
        'Route one, label the boxes and then unlabel them. If the boxes were labeled $1$ through $4$, filling them in turn would take $\\binom{12}{3}\\binom{9}{3}\\binom{6}{3}\\binom{3}{3} = 220 \\times 84 \\times 20 \\times 1 = 369600$ ways. The boxes carry no labels, so any of the $4! = 24$ ways of assigning the same four groups to the four labels gives the same packing: $\\frac{369600}{24} = 15400$ ✓. Route two, build the groups around the lowest-numbered cupcake left. Number the cupcakes $1$ through $12$. Cupcake $1$ travels with $2$ of the other $11$: $\\binom{11}{2} = 55$ ways. The lowest-numbered cupcake still unpacked travels with $2$ of the $8$ remaining: $\\binom{8}{2} = 28$. Then $\\binom{5}{2} = 10$, and the last three cupcakes form the final group. Every packing is built exactly once, with no division needed, so there are $55 \\times 28 \\times 10 = 15400$ ✓. (The choice $369600$ TREATS THE BOXES AS LABELED ✗; $92400$ DIVIDES BY $4$ RATHER THAN BY $4!$ ✗; $220$ IS $\\binom{12}{3}$, WHICH FILLS ONE BOX and stops ✗.)',
    },
    {
      q: 'Twelve different beads are divided into four unnamed groups of $3$; the groups have no labels and a division is settled only by which beads sit together. In how many divisions do two particular beads, the jade and the amber, land in the same group?',
      choices: ['$15400$', '$12600$', '$2800$', '$16800$'],
      answer: 2,
      solution:
        'Route one, build the shared group first. Put the jade and the amber together; their group needs $1$ more bead from the other $10$, which is $10$ choices. The remaining $9$ beads split into three unnamed groups of $3$, and that count is $\\frac{\\binom{9}{3}\\binom{6}{3}\\binom{3}{3}}{3!} = \\frac{84 \\times 20 \\times 1}{6} = 280$. Multiplying, $10 \\times 280 = 2800$ ✓. Route two, count the divisions that keep them apart and subtract. All divisions number $\\frac{\\binom{12}{3}\\binom{9}{3}\\binom{6}{3}\\binom{3}{3}}{4!} = \\frac{369600}{24} = 15400$. For the divisions that separate the two beads, let the beads themselves name two of the groups: the jade’s group takes $2$ of the $10$ beads that are neither, $\\binom{10}{2} = 45$; the amber’s group takes $2$ of the $8$ left, $\\binom{8}{2} = 28$; the last $6$ beads form two unnamed groups of $3$, $\\frac{\\binom{6}{3}}{2} = 10$. That is $45 \\times 28 \\times 10 = 12600$ divisions with the beads apart, so $15400 - 12600 = 2800$ divisions keep them together ✓. (The choice $15400$ COUNTS EVERY DIVISION and never uses the condition ✗; $12600$ REPORTS THE DIVISIONS THAT KEEP THE TWO BEADS APART ✗; $16800$ LEAVES THE LAST THREE GROUPS NAMED, using $10 \\times \\frac{9!}{(3!)^3} = 10 \\times 1680$ without the extra division by $3!$ ✗.)',
    },
  ],
  // slot 10 — same-size unnamed teams with a separation rule, forwards and back
  [
    {
      q: 'Fifteen students are divided into three unnamed teams of $5$; the teams have no names, colors or numbers, so a division is settled only by which students are grouped together. Rio and Sam must be on different teams. How many divisions are possible?',
      choices: ['$126126$', '$36036$', '$90090$', '$15015$'],
      answer: 2,
      solution:
        'Route one, let the two students name the teams. Rio’s team needs $4$ more students from the $13$ who are neither Rio nor Sam: $\\binom{13}{4} = 715$. Sam’s team then needs $4$ more from the $9$ students still left: $\\binom{9}{4} = 126$. The last five form the third team. Since each team is pinned down by whether it holds Rio, holds Sam, or holds neither, no two of them can be confused and no division by $3!$ belongs here: $715 \\times 126 = 90090$ ✓. Route two, count all divisions and remove the ones that fail. Ignoring the rule, the divisions number $\\frac{\\binom{15}{5}\\binom{10}{5}\\binom{5}{5}}{3!} = \\frac{3003 \\times 252}{6} = 126126$. Divisions with Rio and Sam together: their shared team takes $3$ more from the $13$ others, $\\binom{13}{3} = 286$, and the remaining $10$ students split into two unnamed teams of $5$, $\\frac{\\binom{10}{5}}{2} = 126$; that is $286 \\times 126 = 36036$. Subtracting, $126126 - 36036 = 90090$ ✓. (The choice $126126$ IGNORES THE RULE ✗; $36036$ REPORTS THE DIVISIONS WITH RIO AND SAM TOGETHER ✗; $15015$ DIVIDES BY $3!$ A SECOND TIME, even though Rio and Sam already tell two of the teams apart ✗.)',
    },
    {
      q: 'Eight different photographs are hung in two identical rooms, exactly $4$ per room. The rooms carry no names or numbers and are told apart only by what hangs in them, and the order within a room does not matter. Two particular photographs, the harbor and the lighthouse, must not hang in the same room. How many arrangements are possible?',
      choices: ['$20$', '$35$', '$15$', '$40$'],
      answer: 0,
      solution:
        'Route one, let the harbor name its room. Call the room holding the harbor "its room". That room takes $3$ more photographs from the $6$ that are neither the harbor nor the lighthouse: $\\binom{6}{3} = 20$. The lighthouse and the three photographs left over fill the other room. Because the rooms are identical, describing one of them as the harbor’s room names it once and only once, so no halving is needed and there are $20$ arrangements ✓. Route two, count all arrangements and subtract the bad ones. Ignoring the rule, choosing four photographs for a room gives $\\binom{8}{4} = 70$, and each arrangement is described twice that way, once from each room: $\\frac{70}{2} = 35$ arrangements. Those with the harbor and the lighthouse together: their room takes $2$ more from the other $6$, $\\binom{6}{2} = 15$, and the remaining four fill the other room, each arrangement arising once. Subtracting, $35 - 15 = 20$ ✓. (The choice $35$ COUNTS EVERY ARRANGEMENT and never uses the rule ✗; $15$ REPORTS THE ARRANGEMENTS THAT HANG THE TWO TOGETHER ✗; $40$ TREATS THE ROOMS AS LABELED, $2 \\times \\binom{6}{3}$, counting each arrangement once for each room the harbor might be called ✗.)',
    },
    {
      q: 'A group of people splits into two unnamed teams of equal size; the teams have no names or numbers, so a split that swaps them is the same split. Lee and Max must be on different teams, and there are exactly $924$ such splits. How many people are in the group?',
      choices: ['$12$', '$7$', '$16$', '$14$'],
      answer: 3,
      solution:
        'Route one, let Lee name a team and solve. Write the group size as $2m$, so each team holds $m$ people. Call the team holding Lee "Lee’s team"; because Max is on the other team, that team is settled by choosing Lee’s $m-1$ teammates from the $2m-2$ people who are neither Lee nor Max. Every split arises exactly once, with no halving, so $\\binom{2m-2}{m-1} = 924$. Since $\\binom{12}{6} = 924$, we get $m - 1 = 6$, $m = 7$, and the group holds $2m = 14$ people ✓. Route two, tabulate the split count by group size. A group of $10$ gives $\\binom{8}{4} = 70$ splits; a group of $12$ gives $\\binom{10}{5} = 252$; a group of $14$ gives $\\binom{12}{6} = 924$ ✓; a group of $16$ gives $\\binom{14}{7} = 3432$. The count climbs steeply with the group size, so $14$ is the only value that produces $924$ ✓. (The choice $12$ READS $924$ AS $\\binom{n}{n/2}$, the count of splits into two labeled halves, and never uses the rule about Lee and Max ✗; $7$ REPORTS THE TEAM SIZE rather than the size of the whole group ✗; $16$ REMOVES LEE AND MAX FROM THE TEAM SIZE TWICE, solving $\\binom{n-4}{n/2-2} = 924$ ✗.)',
    },
  ],
]

export default {
  book: 'intro-counting',
  number: 5,
  sections: { '5.3': s53 },
}
