// Counting & Probability chapter 4 — variations for section 4.2
// (Committee Forming). All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every stem settles its own conventions: whether the chosen things carry
//    roles or an order, whether a rule runs one way or both ways, and whether
//    a count is "exactly" or "at least". People, books, flavors and packets are
//    all different, and nothing is chosen twice.
//  - Route one is usually the section's own discovery — count the ordered
//    selections, then divide by the arrangements of the chosen group — and
//    route two is independent of it: casework on one member, a complement, a
//    count by the group's last-listed member, or a double count.
//  - Each distractor is one named slip: reporting the ordered count, dividing
//    by $k$ instead of $k!$, allowing repeats, adding two pools instead of
//    multiplying, or reading a one-way rule as both-or-neither.

const s42 = [
  // slot 1 — a pair chosen with no order
  [
    {
      q: 'A chess club has $7$ members, and $2$ of them will be sent to a tournament. The two are sent as equals: there is no first board and no second board, and no member can be sent twice. How many different pairs can be sent?',
      choices: ['$42$', '$14$', '$21$', '$49$'],
      answer: 2,
      solution:
        'Route one, count in order and divide. Sending the members one at a time gives $7 \\times 6 = 42$ ordered picks. Each pair shows up twice among those, once in each order, so the number of pairs is $\\frac{42}{2} = 21$ ✓. Route two, casework on the newest member. If the newest member goes, her partner is any of the other $6$, giving $6$ pairs. If she stays home, both travellers come from the other $6$ members; listing those pairs by the one who joined the club earlier gives $5 + 4 + 3 + 2 + 1 = 15$ pairs. Adding, $6 + 15 = 21$ ✓. (The choice $42$ REPORTS THE ORDERED COUNT, treating the two boards as different when the stem says they are equal ✗; $14$ MULTIPLIES THE $7$ MEMBERS BY THE $2$ SEATS instead of choosing ✗; $49$ IS $7^2$, which lets the same member fill both seats ✗.)',
    },
    {
      q: 'A gardener has $9$ different seed packets and will plant exactly $2$ of them in one bed. The two kinds of plant share the bed with no order and no assigned position, and no packet is used twice. How many different beds are possible?',
      choices: ['$36$', '$72$', '$81$', '$18$'],
      answer: 0,
      solution:
        'Route one, count in order and divide. Picking the packets one at a time gives $9 \\times 8 = 72$ ordered picks, and each bed of two appears twice, once for each order of picking. So there are $\\frac{72}{2} = 36$ beds ✓. Route two, count each bed by its earlier packet. Number the packets $1$ through $9$ and record each bed by its lower-numbered packet: packet $1$ can be joined by any of the $8$ above it, packet $2$ by any of the $7$ above it, and so on down to packet $8$, which can only be joined by packet $9$. Every bed is counted exactly once, so there are $8 + 7 + 6 + 5 + 4 + 3 + 2 + 1 = 36$ beds ✓. (The choice $72$ REPORTS THE ORDERED COUNT and never divides ✗; $81$ IS $9^2$, which lets one packet be planted twice ✗; $18$ MULTIPLIES THE $9$ PACKETS BY THE $2$ PLANTS instead of choosing ✗.)',
    },
    {
      q: 'A club sends $2$ of its members to a fair. The two are chosen as equals, with no roles and no order, and there are exactly $45$ possible pairs. How many members does the club have?',
      choices: ['$9$', '$90$', '$45$', '$10$'],
      answer: 3,
      solution:
        'Route one, undo the division. With $n$ members there are $n(n-1)$ ordered picks, and each pair is picked twice, so $\\frac{n(n-1)}{2} = 45$ and $n(n-1) = 90$. Two consecutive numbers multiplying to $90$ are $10$ and $9$, so $n = 10$ ✓. Route two, add the pairs one member at a time. Line the members up and count each pair by its earlier member: the first member makes $n-1$ pairs, the second makes $n-2$, and so on, for a total of $1 + 2 + \\cdots + (n-1)$. Since $1 + 2 + \\cdots + 9 = 45$, the last term is $9$, so $n - 1 = 9$ and $n = 10$ ✓. (The choice $9$ STOPS ONE STEP SHORT, naming the second factor of $90 = 10 \\times 9$ rather than the club size ✗; $90$ REPORTS THE ORDERED PICK COUNT AS THE MEMBERSHIP ✗; $45$ TAKES THE NUMBER OF PAIRS AS THE NUMBER OF MEMBERS, skipping the equation entirely ✗.)',
    },
  ],
  // slot 2 — a larger group with no roles, and the same idea run backwards
  [
    {
      q: 'Seven cousins will send $4$ of their group to a family reunion. The four travel together with no roles and no order among them, and no cousin can be counted twice. How many different groups of four are possible?',
      choices: ['$840$', '$140$', '$210$', '$35$'],
      answer: 3,
      solution:
        'Route one, count in order and divide. Choosing the four one at a time gives $7 \\times 6 \\times 5 \\times 4 = 840$ ordered lists. A fixed group of four can be listed in $4! = 24$ orders, so each group appears $24$ times and there are $\\frac{840}{24} = 35$ groups ✓. Route two, count the cousins who stay home. Sending $4$ of the $7$ is the same as keeping $3$ of the $7$ at home, so count trios instead. Rank the cousins by age and record each trio by its eldest member: the eldest can be cousin $3$, $4$, $5$, $6$ or $7$, and the other two come from the cousins younger than her, giving $1 + 3 + 6 + 10 + 15 = 35$ trios ✓. (The choice $840$ REPORTS THE ORDERED COUNT, as if the four travelled in a ranked list ✗; $140$ DIVIDES BY $3!$ INSTEAD OF $4!$ ✗; $210$ DIVIDES BY $4$ RATHER THAN BY $4!$, undoing only part of the ordering ✗.)',
    },
    {
      q: 'A music teacher has $6$ different songs and will put $3$ of them on a program. The playing order is decided later, so right now only the set of three songs matters, and no song is used twice. How many different sets of three are possible?',
      choices: ['$120$', '$20$', '$40$', '$216$'],
      answer: 1,
      solution:
        'Route one, count in order and divide. Choosing the songs one at a time gives $6 \\times 5 \\times 4 = 120$ ordered lists, and any set of three can be listed in $3! = 6$ orders. So there are $\\frac{120}{6} = 20$ sets ✓. Route two, casework on the newest song. If the newest song is on the program, the other two come from the remaining $5$; counting those pairs by the earlier song gives $4 + 3 + 2 + 1 = 10$. If the newest song is left off, all three come from the remaining $5$, which is the same as choosing the $2$ of those $5$ to leave off — again $10$. Adding, $10 + 10 = 20$ ✓. (The choice $120$ REPORTS THE ORDERED COUNT, though the stem postpones the playing order ✗; $40$ DIVIDES BY $3$ RATHER THAN BY $3!$ ✗; $216$ IS $6^3$, which allows a song to be played more than once ✗.)',
    },
    {
      q: 'Choosing $3$ people from a group of $n$ one at a time gives $n(n-1)(n-2)$ ordered lists, and the same group can form exactly $56$ different $3$-person committees, a committee having no roles and no order. What is $n$?',
      choices: ['$8$', '$56$', '$6$', '$7$'],
      answer: 0,
      solution:
        'Route one, rebuild the ordered count. Each committee of three can be listed in $3! = 6$ orders, so the $56$ committees account for $56 \\times 6 = 336$ ordered lists, giving $n(n-1)(n-2) = 336$. Three consecutive numbers with product $336$ are $8$, $7$ and $6$, so $n = 8$ ✓. Route two, build the committees by their eldest member. Rank the people and record each committee by its eldest: if the eldest is person $j$, the other two come from the $j-1$ people below, and pairs from $j-1$ people number $1 + 2 + \\cdots + (j-2)$. With $8$ people the totals are $1 + 3 + 6 + 10 + 15 + 21 = 56$, matching the given count, and adding another person would only push the total higher, so $n = 8$ ✓. (The choice $56$ TAKES THE COMMITTEE COUNT AS THE GROUP SIZE ✗; $6$ NAMES $3!$, the number of orders one committee has, not the number of people ✗; $7$ STOPS ONE SHORT, since $7$ people give $\\frac{7 \\times 6 \\times 5}{6} = 35$ committees, not $56$ ✗.)',
    },
  ],
  // slot 3 — how many ordered lists describe one and the same group
  [
    {
      q: 'Choosing $4$ people from $12$ one at a time gives $12 \\times 11 \\times 10 \\times 9 = 11880$ ordered lists. A committee has no roles and no order, so many lists describe the same committee. How many of the $11880$ lists describe one fixed $4$-person committee?',
      choices: ['$4$', '$495$', '$12$', '$24$'],
      answer: 3,
      solution:
        'Route one, order the four members. Fix the committee and ask in how many orders its four members can be listed: $4$ choices for the first name, $3$ for the second, $2$ for the third, $1$ for the last, so $4 \\times 3 \\times 2 \\times 1 = 24$ lists ✓. Route two, insert the fourth member. Three named people can be listed in $6$ orders — write them out: $ABC$, $ACB$, $BAC$, $BCA$, $CAB$, $CBA$. Every list of four members comes from one of those $6$ lists by inserting the fourth member into one of the $4$ places (before the first, between the first and second, between the second and third, or last), and different insertions give different lists. So there are $6 \\times 4 = 24$ lists ✓. (The choice $4$ USES THE COMMITTEE SIZE $k$ IN PLACE OF $k!$ ✗; $495$ IS $\\frac{11880}{24}$, THE NUMBER OF COMMITTEES rather than the repeats per committee ✗; $12$ USES THE POOL SIZE $n$, which does not depend on the fixed committee at all ✗.)',
    },
    {
      q: 'A baker picks $5$ of her $10$ different pastries and lines them up on a tray, giving $10 \\times 9 \\times 8 \\times 7 \\times 6 = 30240$ ordered trays. Two trays are called twins when they hold the same five pastries, in any order. How many of the ordered trays are twins of one fixed tray, counting that tray itself?',
      choices: ['$252$', '$120$', '$5$', '$30240$'],
      answer: 1,
      solution:
        'Route one, rearrange the five pastries. The twins of a fixed tray are exactly the arrangements of its five pastries: $5$ choices for the leftmost spot, then $4$, $3$, $2$ and $1$, so $5 \\times 4 \\times 3 \\times 2 \\times 1 = 120$ trays ✓. Route two, divide the trays among the pastry sets. Every ordered tray belongs to exactly one set of five pastries, and every set has the same number of twins, so that number is $30240$ divided by the number of sets. Count the sets by their highest-numbered pastry: if the highest is pastry $j$, the other four come from the $j-1$ below it, and $4$-element choices from $4, 5, 6, 7, 8, 9$ pastries number $1, 5, 15, 35, 70, 126$, adding to $252$ sets. Then $\\frac{30240}{252} = 120$ ✓. (The choice $252$ IS THE NUMBER OF PASTRY SETS, not the twins of one tray ✗; $5$ USES THE TRAY SIZE $k$ IN PLACE OF $k!$ ✗; $30240$ COUNTS EVERY ORDERED TRAY, as if all of them were twins of each other ✗.)',
    },
    {
      q: 'Picking $3$ of $9$ swimmers one at a time gives $9 \\times 8 \\times 7 = 504$ ordered ways. A group of three swimmers has no roles and no order. How many different $3$-swimmer groups do those $504$ ordered ways describe?',
      choices: ['$84$', '$168$', '$504$', '$6$'],
      answer: 0,
      solution:
        'Route one, divide out the orders. A fixed group of three can be named in $3! = 6$ orders, so each group is counted $6$ times among the $504$ ordered ways, and there are $\\frac{504}{6} = 84$ groups ✓. Route two, count the groups by their fastest swimmer. Rank the swimmers $1$ through $9$ and record each group by its highest-ranked member: if that member is swimmer $j$, the other two come from the $j-1$ swimmers ranked below, and pairs from $2, 3, 4, 5, 6, 7, 8$ swimmers number $1, 3, 6, 10, 15, 21, 28$. Every group is counted once, and $1 + 3 + 6 + 10 + 15 + 21 + 28 = 84$ ✓. (The choice $168$ DIVIDES BY $3$ RATHER THAN BY $3!$ ✗; $504$ FORGETS TO DIVIDE AT ALL, reporting the ordered ways ✗; $6$ REPORTS THE REPEATS PER GROUP instead of the number of groups ✗.)',
    },
  ],
  // slot 4 — titled pair against untitled pair
  [
    {
      q: 'A team has $12$ players. Let $P$ be the number of ways to choose a captain and a scorekeeper, two different people, where swapping their jobs gives a different outcome. Let $Q$ be the number of ways to choose $2$ players as equal co-captains, with no order between them. What is $P - Q$?',
      choices: ['$0$', '$66$', '$132$', '$198$'],
      answer: 1,
      solution:
        'Route one, compute each count. Titles make order matter, so $P = 12 \\times 11 = 132$. Co-captains are interchangeable, so each of those $132$ ordered picks is matched by its swap, giving $Q = \\frac{132}{2} = 66$. Then $P - Q = 132 - 66 = 66$ ✓. Route two, match the two counts. Every co-captain pair corresponds to exactly $2$ of the titled outcomes, so $P = 2Q$ and therefore $P - Q = Q$, which is just the number of unordered pairs from $12$ players. Count those by the lower-numbered player: $11 + 10 + 9 + \\cdots + 1 = 66$ ✓. (The choice $0$ TREATS TITLED AND UNTITLED CHOICES AS THE SAME, so the difference vanishes ✗; $132$ REPORTS $P$ ALONE, never subtracting $Q$ ✗; $198$ ADDS $P$ AND $Q$ INSTEAD OF SUBTRACTING ✗.)',
    },
    {
      q: 'A shelf holds $10$ different mugs. Let $A$ be the number of ways to pick one mug for tea and a different mug for coffee, where swapping the two drinks gives a different outcome. Let $B$ be the number of ways to pick $2$ mugs to wash, the two washed mugs being interchangeable. What is $A - B$?',
      choices: ['$0$', '$90$', '$135$', '$45$'],
      answer: 3,
      solution:
        'Route one, compute each count. The drinks are different jobs, so $A = 10 \\times 9 = 90$. The washed mugs have no order, so each pair was counted twice in that $90$ and $B = \\frac{90}{2} = 45$. Then $A - B = 90 - 45 = 45$ ✓. Route two, match and see what is left. Send each washing pair to the one ordered pick in which the lower-numbered mug gets the tea. That matches all $45$ washing pairs to distinct ordered picks, and the ordered picks left over are exactly those where the lower-numbered mug gets the coffee. Counting those by the lower-numbered mug gives $9 + 8 + 7 + \\cdots + 1 = 45$ ✓. (The choice $0$ TREATS THE TWO SITUATIONS AS THE SAME ✗; $90$ REPORTS $A$ ALONE, forgetting to subtract $B$ ✗; $135$ ADDS $A$ AND $B$ INSTEAD OF SUBTRACTING ✗.)',
    },
    {
      q: 'In a club of $n$ people, the number of ways to choose a president and a treasurer, two different people with swapping counting as a different outcome, is exactly $120$ more than the number of ways to choose $2$ equal co-chairs, who have no order between them. What is $n$?',
      choices: ['$15$', '$120$', '$16$', '$240$'],
      answer: 2,
      solution:
        'Route one, write both counts and subtract. The titled choice gives $n(n-1)$ outcomes and the co-chairs give $\\frac{n(n-1)}{2}$, so the difference is $n(n-1) - \\frac{n(n-1)}{2} = \\frac{n(n-1)}{2} = 120$. Then $n(n-1) = 240$, and $240 = 16 \\times 15$, so $n = 16$ ✓. Route two, read the difference as a pair count. Each unordered pair produces $2$ titled outcomes, so the titled count is double the co-chair count and the difference equals the co-chair count itself: the number of unordered pairs is $120$. A club of $n$ makes $1 + 2 + \\cdots + (n-1)$ pairs, and $1 + 2 + \\cdots + 15 = 120$ while $1 + 2 + \\cdots + 16 = 136$, so $n - 1 = 15$ and $n = 16$ ✓. (The choice $15$ SUMS $1$ THROUGH $n$ INSTEAD OF $1$ THROUGH $n-1$, landing on the last term rather than the club size ✗; $120$ TAKES THE GIVEN DIFFERENCE AS $n$ ✗; $240$ REPORTS THE ORDERED PRODUCT $n(n-1)$ INSTEAD OF $n$ ✗.)',
    },
  ],
  // slot 5 — choosing most of a small pool, and the complement
  [
    {
      q: 'A snack box holds $4$ different fruits chosen from the $6$ kinds on the shelf. The fruits are jumbled together, so their order and position in the box do not matter, and no kind is repeated. How many different boxes are possible?',
      choices: ['$360$', '$60$', '$90$', '$15$'], answer: 3,
      solution:
        'Route one, count in order and divide. Picking the four kinds one at a time gives $6 \\times 5 \\times 4 \\times 3 = 360$ ordered picks, and any set of four can be picked in $4! = 24$ orders. So there are $\\frac{360}{24} = 15$ boxes ✓. Route two, choose what stays on the shelf. A box is decided the moment you say which $2$ kinds are left behind, since the other $4$ go in. So boxes correspond exactly to pairs of leftover kinds, and counting those pairs by the earlier kind gives $5 + 4 + 3 + 2 + 1 = 15$ ✓. (The choice $360$ REPORTS THE ORDERED COUNT, though the fruits are jumbled ✗; $60$ DIVIDES BY $3!$ INSTEAD OF $4!$, undoing the order of only three of the four fruits ✗; $90$ DIVIDES BY $4$ RATHER THAN BY $4!$ ✗.)',
    },
    {
      q: 'A tasting flight holds $7$ of the $8$ different teas a shop sells. The teas in a flight are set out in no particular order, none is repeated, and two flights are the same when they hold the same seven teas. How many different flights are possible?',
      choices: ['$5040$', '$8$', '$7$', '$28$'], answer: 1,
      solution:
        'Route one, count in order and divide. Filling the flight one tea at a time gives $8 \\times 7 \\times 6 \\times 5 \\times 4 \\times 3 \\times 2 = 40320$ ordered fillings, and a fixed set of seven teas can be poured in $7! = 5040$ orders. So there are $\\frac{40320}{5040} = 8$ flights ✓. Route two, name the tea left out. Because $7$ of the $8$ teas are used, exactly one tea is missing, and naming that tea names the flight: different missing teas give different flights, and every flight misses exactly one. There are $8$ teas that could be the missing one, so there are $8$ flights ✓. (The choice $5040$ IS $7!$, THE ORDERS OF ONE FLIGHT, not the number of flights ✗; $7$ COUNTS THE TEAS INSIDE A FLIGHT rather than the ways to pick the one left out ✗; $28$ LEAVES OUT TWO TEAS INSTEAD OF ONE, counting pairs from $8$ ✗.)',
    },
    {
      q: 'A shop’s bowls each hold $3$ scoops of different flavors, mixed together so their order does not matter, and no flavor is repeated in a bowl. Exactly $10$ different bowls can be made. How many flavors does the shop offer?',
      choices: ['$5$', '$10$', '$6$', '$60$'],
      answer: 0,
      solution:
        'Route one, undo the division. With $n$ flavors there are $n(n-1)(n-2)$ ordered scoop picks, and each bowl is picked in $3! = 6$ orders, so $\\frac{n(n-1)(n-2)}{6} = 10$ and $n(n-1)(n-2) = 60$. Three consecutive numbers with product $60$ are $5$, $4$ and $3$, so $n = 5$ ✓. Route two, build the bowls up by their last flavor. Number the flavors and record each bowl by its highest-numbered flavor: if that flavor is number $j$, the other two come from the $j-1$ flavors below it. With $5$ flavors this gives $1 + 3 + 6 = 10$ bowls, exactly the given total; with $4$ flavors it gives only $1 + 3 = 4$, and with $6$ it gives $1 + 3 + 6 + 10 = 20$, so $n = 5$ ✓. (The choice $10$ TAKES THE NUMBER OF BOWLS AS THE NUMBER OF FLAVORS ✗; $6$ OVERSHOOTS BY ONE, since $6$ flavors would make $20$ bowls ✗; $60$ REPORTS THE ORDERED SCOOP COUNT $10 \\times 3!$ instead of $n$ ✗.)',
    },
  ],
  // slot 6 — a three-person group from a class, and the gain from one more person
  [
    {
      q: 'A class of $11$ students needs a $3$-person recycling team. The team has no captain and no other roles, its members are in no order, and no student can hold two places. How many different teams are possible?',
      choices: ['$165$', '$990$', '$330$', '$1331$'],
      answer: 0,
      solution:
        'Route one, count in order and divide. Naming the members one at a time gives $11 \\times 10 \\times 9 = 990$ ordered lists, and a fixed team of three can be named in $3! = 6$ orders. So there are $\\frac{990}{6} = 165$ teams ✓. Route two, count the teams by their last-listed member. Number the students $1$ through $11$ and record each team by its highest-numbered student: if that student is number $j$, the other two come from the $j-1$ students below, and pairs from $2, 3, \\ldots, 10$ students number $1, 3, 6, 10, 15, 21, 28, 36, 45$. Each team is counted exactly once, and those add to $165$ ✓. (The choice $990$ REPORTS THE ORDERED COUNT, though the team has no roles ✗; $330$ DIVIDES BY $3$ RATHER THAN BY $3!$ ✗; $1331$ IS $11^3$, which lets one student fill two places ✗.)',
    },
    {
      q: 'A photographer will send $3$ of her $15$ different prints to a contest. The contest judges the three as a set, in no order, and no print may be sent twice. How many different entries are possible?',
      choices: ['$2730$', '$910$', '$455$', '$3375$'],
      answer: 2,
      solution:
        'Route one, count in order and divide. Choosing the prints one at a time gives $15 \\times 14 \\times 13 = 2730$ ordered choices, and a fixed set of three can be chosen in $3! = 6$ orders, so there are $\\frac{2730}{6} = 455$ entries ✓. Route two, double count entry-with-a-highlight. Count the pairs consisting of an entry together with one highlighted print inside it. Building such a pair from the highlight outward, the highlighted print is any of the $15$ and its two companions form a pair from the other $14$, and pairs from $14$ prints number $13 + 12 + \\cdots + 1 = 91$, giving $15 \\times 91 = 1365$ pairs. Building the same pairs from the entry outward, each entry offers $3$ choices of highlight. So the number of entries is $\\frac{1365}{3} = 455$ ✓. (The choice $2730$ REPORTS THE ORDERED COUNT, as if the judges ranked the three ✗; $910$ DIVIDES BY $3$ RATHER THAN BY $3!$ ✗; $3375$ IS $15^3$, which allows the same print to be sent more than once ✗.)',
    },
    {
      q: 'A class of $10$ students can form a certain number of $3$-person crews, all crew members equal and in no order. A class of $9$ students can form a certain number of such crews too. How many more crews can the class of $10$ form than the class of $9$?',
      choices: ['$204$', '$36$', '$1$', '$120$'],
      answer: 1,
      solution:
        'Route one, count both and subtract. For $10$ students, $\\frac{10 \\times 9 \\times 8}{3!} = \\frac{720}{6} = 120$ crews. For $9$ students, $\\frac{9 \\times 8 \\times 7}{3!} = \\frac{504}{6} = 84$ crews. The difference is $120 - 84 = 36$ ✓. Route two, look only at the extra student. Call the tenth student Zoe. Every crew the class of $9$ can form is still available to the class of $10$, and the new crews are exactly those containing Zoe. Such a crew needs $2$ more members from the other $9$ students, and counting those pairs by the earlier member gives $8 + 7 + 6 + \\cdots + 1 = 36$ ✓. (The choice $204$ ADDS THE TWO CREW COUNTS INSTEAD OF SUBTRACTING ✗; $1$ REPORTS THE DIFFERENCE IN CLASS SIZE as though it were the difference in crews ✗; $120$ REPORTS THE LARGER CREW COUNT and never subtracts ✗.)',
    },
  ],
  // slot 7 — a squad chosen with the order postponed, and the size read backwards
  [
    {
      q: 'A coach picks $5$ of her $12$ swimmers for a relay squad. The swimming order will be decided later, so right now only the set of five matters, and no swimmer is picked twice. How many different squads of $5$ can she pick?',
      choices: ['$95040$', '$3960$', '$792$', '$19008$'],
      answer: 2,
      solution:
        'Route one, count in order and divide. Picking the swimmers one at a time gives $12 \\times 11 \\times 10 \\times 9 \\times 8 = 95040$ ordered picks, and a fixed squad can be picked in $5! = 120$ orders. So there are $\\frac{95040}{120} = 792$ squads ✓. Route two, casework on one swimmer. Call the fastest swimmer Ada. Squads with Ada need $4$ more from the other $11$: $\\frac{11 \\times 10 \\times 9 \\times 8}{4!} = \\frac{7920}{24} = 330$. Squads without Ada take all $5$ from the other $11$: $\\frac{11 \\times 10 \\times 9 \\times 8 \\times 7}{5!} = \\frac{55440}{120} = 462$. Every squad falls in exactly one case, so there are $330 + 462 = 792$ ✓. (The choice $95040$ REPORTS THE ORDERED COUNT, though the swimming order is not yet chosen ✗; $3960$ DIVIDES BY $4!$ INSTEAD OF $5!$ ✗; $19008$ DIVIDES BY $5$ RATHER THAN BY $5!$ ✗.)',
    },
    {
      q: 'A radio host will play $3$ of the $14$ new songs tonight. The playing order is decided later, so only the set of three matters now, and no song is played twice. How many different sets of three are possible?',
      choices: ['$364$', '$2184$', '$728$', '$2744$'],
      answer: 0,
      solution:
        'Route one, count in order and divide. Choosing the songs one at a time gives $14 \\times 13 \\times 12 = 2184$ ordered choices, and a fixed set of three can be chosen in $3! = 6$ orders, so there are $\\frac{2184}{6} = 364$ sets ✓. Route two, double count set-with-an-opener. Count the pairs made of a set together with one song in it marked as the opener. From the opener outward: the opener is any of the $14$ songs, and the other two form a pair from the remaining $13$, and pairs from $13$ songs number $12 + 11 + \\cdots + 1 = 78$, so there are $14 \\times 78 = 1092$ such pairs. From the set outward: each set offers $3$ choices of opener. So the number of sets is $\\frac{1092}{3} = 364$ ✓. (The choice $2184$ REPORTS THE ORDERED COUNT, though the playing order comes later ✗; $728$ DIVIDES BY $3$ RATHER THAN BY $3!$ ✗; $2744$ IS $14^3$, which allows a song to be played twice ✗.)',
    },
    {
      q: 'A coach picks a group of fewer than $5$ of her $10$ players for a drill. The players in the group are all equal, with no roles and no order, and no player is counted twice. There are exactly $120$ possible groups. How many players are in a group?',
      choices: ['$120$', '$4$', '$7$', '$3$'],
      answer: 3,
      solution:
        'Route one, count groups of each allowed size. A group may hold $1$, $2$, $3$ or $4$ players. One player: $10$ groups. Two players: counting pairs by the earlier player, $9 + 8 + \\cdots + 1 = 45$. Three players: recording each group by its highest-numbered player gives $1 + 3 + 6 + 10 + 15 + 21 + 28 + 36 = 120$. Four players: $\\frac{10 \\times 9 \\times 8 \\times 7}{4!} = \\frac{5040}{24} = 210$. Only the size $3$ gives $120$ ✓. Route two, solve for the size directly. If a group holds $k$ players, the ordered picks number $10 \\times 9 \\times \\cdots$ with $k$ factors and each group is picked $k!$ times. Trying $k = 3$: $\\frac{10 \\times 9 \\times 8}{6} = \\frac{720}{6} = 120$, which matches. Moving from a group of $k$ to one of $k+1$ multiplies the count by $\\frac{10-k}{k+1}$, which is bigger than $1$ for $k = 1$, $2$ and $3$, so the counts strictly increase across the allowed sizes and no other allowed $k$ can also give $120$; hence $k = 3$ ✓. (The choice $120$ TAKES THE NUMBER OF GROUPS AS THE GROUP SIZE ✗; $4$ OVERSHOOTS, since groups of four number $210$ ✗; $7$ IGNORES THE RULE THAT THE GROUP HOLDS FEWER THAN $5$ PLAYERS — groups of seven do number $120$, but seven is not allowed ✗.)',
    },
  ],
  // slot 8 — two separate pools multiplied
  [
    {
      q: 'A panel is made of $2$ teachers chosen from $7$ teachers and $2$ parents chosen from $6$ parents. Nobody on the panel has a title, there is no order within either pair, and no person is chosen twice. How many different panels are possible?',
      choices: ['$1260$', '$36$', '$715$', '$315$'],
      answer: 3,
      solution:
        'Route one, count each pool then multiply. The teachers can be chosen in $\\frac{7 \\times 6}{2} = 21$ ways and the parents in $\\frac{6 \\times 5}{2} = 15$ ways. Any teacher pair goes with any parent pair, so there are $21 \\times 15 = 315$ panels ✓. Route two, order everything, then divide once. Pick an ordered teacher pair and an ordered parent pair: $(7 \\times 6) \\times (6 \\times 5) = 42 \\times 30 = 1260$ ordered panels. A fixed panel arises from $2$ orders of its teachers times $2$ orders of its parents, that is $4$ times, so there are $\\frac{1260}{4} = 315$ panels ✓. (The choice $1260$ REPORTS THE ORDERED COUNT, dividing neither pair ✗; $36$ ADDS THE TWO POOL COUNTS INSTEAD OF MULTIPLYING ✗; $715$ CHOOSES ANY $4$ OF ALL $13$ PEOPLE, ignoring the two-and-two rule ✗.)',
    },
    {
      q: 'A gift basket holds $3$ of the $6$ kinds of cheese and $3$ of the $5$ kinds of jam a shop sells. All kinds are different, none is repeated, and the items sit in the basket in no order. How many different baskets are possible?',
      choices: ['$30$', '$200$', '$462$', '$7200$'], answer: 1,
      solution:
        'Route one, count each pool then multiply. Cheeses: $\\frac{6 \\times 5 \\times 4}{3!} = \\frac{120}{6} = 20$ ways. Jams: $\\frac{5 \\times 4 \\times 3}{3!} = \\frac{60}{6} = 10$ ways. Any cheese trio goes with any jam trio, so there are $20 \\times 10 = 200$ baskets ✓. Route two, avoid ordering altogether. For the jams, choosing $3$ of $5$ is the same as choosing the $2$ kinds left out, and pairs from $5$ kinds number $4 + 3 + 2 + 1 = 10$. For the cheeses, record each trio by its highest-numbered kind: the other two come from the kinds below it, giving $1 + 3 + 6 + 10 = 20$ trios. Multiplying, $20 \\times 10 = 200$ ✓. (The choice $30$ ADDS THE TWO POOL COUNTS INSTEAD OF MULTIPLYING ✗; $462$ CHOOSES ANY $6$ OF ALL $11$ KINDS, ignoring the three-and-three rule ✗; $7200$ REPORTS THE ORDERED COUNT $120 \\times 60$, never dividing by $3!$ in either pool ✗.)',
    },
    {
      q: 'A committee takes $2$ of the $5$ coaches and $2$ of the $n$ referees. Neither pair has titles or an order, and nobody is chosen twice. There are exactly $360$ possible committees. What is $n$?',
      choices: ['$9$', '$36$', '$18$', '$8$'], answer: 0,
      solution:
        'Route one, divide out the known pool. The coaches can be chosen in $\\frac{5 \\times 4}{2} = 10$ ways, and every coach pair goes with every referee pair, so the referee pairs number $\\frac{360}{10} = 36$. Then $\\frac{n(n-1)}{2} = 36$, so $n(n-1) = 72 = 9 \\times 8$ and $n = 9$ ✓. Route two, build the referee pairs one referee at a time. Counting pairs by the earlier referee, $n$ referees make $1 + 2 + \\cdots + (n-1)$ pairs. Testing $n = 9$ gives $1 + 2 + \\cdots + 8 = 36$ pairs, and then the committees number $10 \\times 36 = 360$, matching the stem; since the pair count grows with $n$, no other $n$ works ✓. (The choice $36$ STOPS AT THE NUMBER OF REFEREE PAIRS and reports it as $n$ ✗; $18$ DIVIDES $360$ BY THE ORDERED COACH COUNT $5 \\times 4 = 20$ instead of by the $10$ coach pairs ✗; $8$ UNDERSHOOTS, since $8$ referees give only $10 \\times 28 = 280$ committees ✗.)',
    },
  ],
  // slot 9 — a one-way rule, and a member forced in with another forced out
  [
    {
      q: 'A $3$-person crew is chosen from $9$ people, with no roles and no order on the crew. Rae will serve only if Sam also serves; Sam is willing to serve with or without Rae. How many crews are possible?',
      choices: ['$63$', '$84$', '$42$', '$56$'],
      answer: 0,
      solution:
        'Route one, subtract the crews the rule forbids. Ignoring the rule there are $\\frac{9 \\times 8 \\times 7}{3!} = \\frac{504}{6} = 84$ crews. The forbidden ones have Rae without Sam: Rae takes a seat, Sam is barred, and the other $2$ seats go to $2$ of the remaining $7$ people, which is $\\frac{7 \\times 6}{2} = 21$ crews. So $84 - 21 = 63$ crews obey the rule ✓. Route two, split on Rae. If Rae serves, Sam must serve too, and the last seat goes to any of the other $7$ people: $7$ crews. If Rae does not serve, all $3$ seats go to the other $8$ people with no restriction on Sam: $\\frac{8 \\times 7 \\times 6}{3!} = \\frac{336}{6} = 56$ crews. Adding, $7 + 56 = 63$ ✓. (The choice $84$ IGNORES THE RULE ENTIRELY ✗; $42$ READS THE RULE AS BOTH-OR-NEITHER, counting $7$ crews with both plus $35$ with neither, though Sam may serve alone ✗; $56$ BARS RAE COMPLETELY, which is stricter than the stem ✗.)',
    },
    {
      q: 'A backpack will hold exactly $3$ of $8$ different gadgets, packed in no particular order and none of them twice. The tripod goes in only if the camera also goes in, while the camera may go in with or without the tripod. How many different packings are possible?',
      choices: ['$56$', '$26$', '$41$', '$35$'], answer: 2,
      solution:
        'Route one, split on the tripod. If the tripod is packed, the camera must be packed too, and the third slot takes any of the other $6$ gadgets: $6$ packings. If the tripod is left out, all $3$ gadgets come from the other $7$, with no rule on the camera: $\\frac{7 \\times 6 \\times 5}{3!} = \\frac{210}{6} = 35$ packings. Adding, $6 + 35 = 41$ ✓. Route two, subtract the packings the rule forbids. With no rule there are $\\frac{8 \\times 7 \\times 6}{3!} = \\frac{336}{6} = 56$ packings. The forbidden ones hold the tripod but not the camera, so the other $2$ slots come from the remaining $6$ gadgets: $\\frac{6 \\times 5}{2} = 15$. So $56 - 15 = 41$ ✓. (The choice $56$ IGNORES THE RULE ENTIRELY ✗; $26$ READS THE RULE AS BOTH-OR-NEITHER, counting $6$ packings with both plus $20$ with neither, though the camera may go alone ✗; $35$ LEAVES THE TRIPOD OUT ALTOGETHER, which the rule does not require ✗.)',
    },
    {
      q: 'A $4$-person committee is chosen from $9$ people, with no roles and no order. Two of the nine are Pia and Quinn. How many of the possible committees include Pia but do not include Quinn?',
      choices: ['$56$', '$35$', '$70$', '$21$'], answer: 1,
      solution:
        'Route one, fill the seats that are still free. Pia takes one of the four seats and Quinn is barred, so the remaining $3$ seats are filled from the other $7$ people. Choosing them in order gives $7 \\times 6 \\times 5 = 210$ lists, and each trio appears in $3! = 6$ orders, so there are $\\frac{210}{6} = 35$ committees ✓. Route two, subtract inside the committees that contain Pia. Committees containing Pia need $3$ more from the other $8$ people: $\\frac{8 \\times 7 \\times 6}{3!} = \\frac{336}{6} = 56$. Among those, the ones that also contain Quinn need $2$ more from the remaining $7$: $\\frac{7 \\times 6}{2} = 21$. So the committees with Pia and without Quinn number $56 - 21 = 35$ ✓. (The choice $56$ SEATS PIA BUT FORGETS TO BAR QUINN ✗; $70$ BARS QUINN BUT FORGETS TO SEAT PIA, counting all $4$-person committees from the other $8$ ✗; $21$ SEATS PIA AND BARS QUINN BUT THEN FILLS ONLY $2$ MORE SEATS instead of $3$ ✗.)',
    },
  ],
  // slot 10 — a two-way refusal, and the same rule read backwards
  [
    {
      q: 'A $3$-person study group is chosen from $10$ students, the three members equal and in no order. Tara and Uma refuse to be in the group together, though either one may be in it without the other. How many study groups are possible?',
      choices: ['$120$', '$112$', '$56$', '$104$'],
      answer: 1,
      solution:
        'Route one, subtract the groups the rule forbids. With no rule there are $\\frac{10 \\times 9 \\times 8}{3!} = \\frac{720}{6} = 120$ groups. A forbidden group holds both Tara and Uma plus $1$ of the other $8$ students, so there are $8$ of them. That leaves $120 - 8 = 112$ groups ✓. Route two, split into the three allowed cases. Tara in and Uma out: $2$ more members from the other $8$, and pairs from $8$ students number $7 + 6 + \\cdots + 1 = 28$. Uma in and Tara out: $28$ by the same count. Neither of them in: all $3$ from the other $8$, which is $\\frac{8 \\times 7 \\times 6}{3!} = 56$. Every allowed group falls in exactly one case, so $28 + 28 + 56 = 112$ ✓. (The choice $120$ IGNORES THE RULE ENTIRELY ✗; $56$ BARS BOTH STUDENTS COMPLETELY, though each may serve alone ✗; $104$ SUBTRACTS THE $8$ FORBIDDEN GROUPS TWICE, once for Tara and once for Uma ✗.)',
    },
    {
      q: 'A gardener puts $3$ of her $9$ different herbs into one pot, the three sharing the pot with no order or position. Rosemary and mint cannot share a pot, though either one may share with any other herb. How many different pots are possible?',
      choices: ['$84$', '$35$', '$70$', '$77$'],
      answer: 3,
      solution:
        'Route one, split into the three allowed cases. Rosemary in and mint out: $2$ more herbs from the other $7$, and pairs from $7$ herbs number $6 + 5 + \\cdots + 1 = 21$. Mint in and rosemary out: $21$ likewise. Neither in: all $3$ from the other $7$, which is $\\frac{7 \\times 6 \\times 5}{3!} = \\frac{210}{6} = 35$. Adding, $21 + 21 + 35 = 77$ ✓. Route two, subtract the pots the rule forbids. With no rule there are $\\frac{9 \\times 8 \\times 7}{3!} = \\frac{504}{6} = 84$ pots. A forbidden pot holds rosemary, mint and $1$ of the other $7$ herbs, so there are $7$ of them, leaving $84 - 7 = 77$ ✓. (The choice $84$ IGNORES THE RULE ENTIRELY ✗; $35$ BARS BOTH HERBS COMPLETELY, though each may share with the others ✗; $70$ SUBTRACTS THE $7$ FORBIDDEN POTS TWICE, once for rosemary and once for mint ✗.)',
    },
    {
      q: 'A $3$-person team is chosen from $n$ people, the three members equal and in no order. Two of the $n$ refuse to serve together, though either one may serve without the other. Exactly $156$ teams obey the rule. What is $n$?',
      choices: ['$156$', '$12$', '$11$', '$10$'],
      answer: 2,
      solution:
        'Route one, write the count and test. Ignoring the rule there are $\\frac{n(n-1)(n-2)}{3!}$ teams, and the forbidden ones hold both objectors plus $1$ of the remaining $n-2$ people, so the obedient teams number $\\frac{n(n-1)(n-2)}{6} - (n-2)$. At $n = 11$ that is $\\frac{990}{6} - 9 = 165 - 9 = 156$ ✓. Route two, split into the three allowed cases and match. Call the objectors $A$ and $B$. Teams with $A$ and not $B$ take $2$ more from the other $n-2$; teams with $B$ and not $A$ do the same; teams with neither take all $3$ from the other $n-2$. With $n = 11$ there are $9$ others, giving $\\frac{9 \\times 8}{2} = 36$ and $36$ again and $\\frac{9 \\times 8 \\times 7}{3!} = 84$, and $36 + 36 + 84 = 156$ ✓. Both counts rise as $n$ rises, so $n = 11$ is the only answer. (The choice $156$ TAKES THE NUMBER OF TEAMS AS THE NUMBER OF PEOPLE ✗; $12$ OVERSHOOTS, since $12$ people give $220 - 10 = 210$ obedient teams ✗; $10$ UNDERSHOOTS, since $10$ people give $120 - 8 = 112$ obedient teams ✗.)',
    },
  ],
]

export default {
  book: 'intro-counting',
  number: 4,
  sections: { '4.2': s42 },
}
