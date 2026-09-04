// Counting chapter 4 — variations for the printable worksheet.
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Worksheet items are FREE RESPONSE. Every variation is a question, an
//    `answer` STRING, and a solution; there is no `choices` key and no answer
//    index anywhere in this file. Answers copy the base worksheet’s formatting:
//    a bare value such as '$55$'.
//  - Every key was brute-forced in node before the stem was written, by
//    enumerating k-subsets of a labeled pool and filtering on the stated
//    restriction, by generating the ordered lists where orderings are counted,
//    and by scanning $n$ and enumerating at each value for the "find $n$" slots.
//    Every key matches its pin. Pin deviations: none.
//  - Every solution runs two genuinely different routes that each end ✓, and
//    route two never re-imports route one’s number: divide-out-the-orderings
//    vs. a triangular sum or a climb up a column (slots 1, 3, 7); a factored
//    quotient vs. Pascal’s addition rule (slot 2); group-then-single vs.
//    single-then-group vs. an ordered list divided down (slot 4); separate
//    binomials vs. an ordered count divided down, casework, or a complement
//    (slot 5); seat-the-required-member vs. a complement or a symmetry pairing
//    (slots 6, 8); a fixed vertex vs. a counting-in-two-ways average,
//    a complement, or inclusion–exclusion (slot 9); casework on size vs.
//    casework on the named member (slot 10). The solution then names the most
//    tempting wrong answer’s trap in CAPS, ending ✗.
//  - Conventions are settled in every stem: the objects are all different and
//    each is used at most once; a chosen group has no roles and no order unless
//    the stem names a role, in which case the stem says when two outcomes count
//    as the same; every pair rule is spelled out in both directions; "at least"
//    and "exactly" are written in words.

const worksheet = [
  // slot 1 — an unordered pair from a pool.
  //          Lanes: 2 of 11 board games -> 55; 2 of 13 cakes -> 78;
  //          reversed: 210 pairs -> 21 friends.
  [
    {
      q: 'How many ways are there to choose $2$ of $11$ different board games to bring to a party, the two games chosen as equals with neither one first?',
      answer: '$55$',
      solution:
        'Count in order, then divide. Picking a first game and then a different second game gives $11 \\cdot 10 = 110$ ordered pairs, and each unordered pair of games shows up in exactly $2! = 2$ of them. So there are $\\frac{110}{2} = 55$ pairs ✓. Second route, by pairing each game with the games after it. Line the games up in a row and count each pair at its earlier game: the first game pairs with $10$ later games, the second with $9$, and so on down to the tenth game, which pairs with $1$. That is $10 + 9 + 8 + \\cdots + 1 = 55$ ✓. REPORTING $110$ counts the ordered pairs, treating "game $A$ then game $B$" as different from "game $B$ then game $A$" — but the games are brought as a set, with no first game ✗.',
    },
    {
      q: 'A shop puts $2$ of its $13$ different cakes in the window; the two sit side by side with neither one first. How many pairs of cakes are possible?',
      answer: '$78$',
      solution:
        'Count in order, then divide. There are $13 \\cdot 12 = 156$ ways to name a cake and then a different cake, and each pair of cakes is named in $2$ of those ways, once in each order. So the number of pairs is $\\frac{156}{2} = 78$ ✓. Second route, by counting each pair at its lower-numbered cake. Number the cakes $1$ through $13$. Cake $1$ can be paired with $12$ others, cake $2$ with the $11$ cakes above it, and so on down to cake $12$, which can be paired with $1$. Adding, $12 + 11 + \\cdots + 1 = 78$ ✓. ANSWERING $156$ keeps the two orders apart, but the window shows a set of two cakes, not a sequence ✗.',
    },
    {
      q: 'A group of friends can choose $2$ of themselves, with no distinction between the two chosen, in exactly $210$ ways. How many friends are in the group?',
      answer: '$21$',
      solution:
        'Set up the equation. With $n$ friends there are $\\binom{n}{2} = \\frac{n(n-1)}{2}$ pairs, so $\\frac{n(n-1)}{2} = 210$ and $n(n-1) = 420$. We need two consecutive integers whose product is $420$; since $\\sqrt{420} \\approx 20.5$, try $21 \\cdot 20 = 420$, which works, so $n = 21$ ✓. Second route, by climbing the pair counts. A group of $19$ has $\\binom{19}{2} = 171$ pairs, a group of $20$ has $\\binom{20}{2} = 190$, and a group of $21$ has $\\binom{21}{2} = 210$ — a hit. The pair count grows with every added friend, so no other size gives $210$ ✓. SOLVING $\\frac{n(n+1)}{2} = 210$ INSTEAD, which gives $n = 20$ because $\\frac{20 \\cdot 21}{2} = 210$, uses the count of pairs from a group one larger; a group of $20$ friends has only $190$ pairs ✗.',
    },
  ],

  // slot 2 — computing a binomial coefficient outright.
  //          Lanes: C(11,4) -> 330; C(12,5) -> 792; derived: C(12,4)+C(12,8) -> 990.
  [
    {
      q: 'Compute $\\binom{11}{4}$.',
      answer: '$330$',
      solution:
        'Four factors over $4!$. Write $\\binom{11}{4} = \\frac{11 \\cdot 10 \\cdot 9 \\cdot 8}{4!} = \\frac{7920}{24}$. Cancel before multiplying: $\\frac{8}{4} = 2$ and $\\frac{10}{2} = 5$ use up the $4! = 4 \\cdot 3 \\cdot 2$ if we also take $\\frac{9}{3} = 3$, leaving $11 \\cdot 5 \\cdot 3 \\cdot 2 = 330$ ✓. Second route, by Pascal’s addition rule. A $4$-subset of $11$ objects either uses the last object, which leaves $\\binom{10}{3}$ ways to fill it out, or does not, leaving $\\binom{10}{4}$ ways. So $\\binom{11}{4} = \\binom{10}{3} + \\binom{10}{4} = 120 + 210 = 330$ ✓. DIVIDING BY $4$ RATHER THAN $4! = 24$ gives $\\frac{7920}{4} = 1980$; the four chosen objects can be ordered in $24$ ways, not $4$ ✗.',
    },
    {
      q: 'Compute $\\binom{12}{5}$.',
      answer: '$792$',
      solution:
        'Five factors over $5!$. Here $\\binom{12}{5} = \\frac{12 \\cdot 11 \\cdot 10 \\cdot 9 \\cdot 8}{5!} = \\frac{95040}{120}$. Cancel first: $\\frac{10}{5} = 2$, $\\frac{12}{4} = 3$, $\\frac{9}{3} = 3$, and $\\frac{8}{2} = 4$, so what is left is $2 \\cdot 3 \\cdot 3 \\cdot 4 \\cdot 11 = 792$ ✓. Second route, by Pascal’s addition rule. Split on whether the twelfth object is chosen: $\\binom{12}{5} = \\binom{11}{4} + \\binom{11}{5} = 330 + 462 = 792$ ✓. STOPPING THE NUMERATOR AT FOUR FACTORS, $\\frac{12 \\cdot 11 \\cdot 10 \\cdot 9}{5!} = \\frac{11880}{120} = 99$, mismatches the top and bottom: choosing $5$ objects needs $5$ factors above the $5!$ ✗.',
    },
    {
      q: 'Compute $\\binom{12}{4} + \\binom{12}{8}$.',
      answer: '$990$',
      solution:
        'Use the choosing-who-is-out identity. Picking $8$ of $12$ objects is the same as picking the $4$ left out, so $\\binom{12}{8} = \\binom{12}{4}$. Since $\\binom{12}{4} = \\frac{12 \\cdot 11 \\cdot 10 \\cdot 9}{24} = 495$, the sum is $495 + 495 = 990$ ✓. Second route, computing the second term on its own. By Pascal’s addition rule, $\\binom{12}{8} = \\binom{11}{7} + \\binom{11}{8} = 330 + 165 = 495$, and the same rule gives $\\binom{12}{4} = \\binom{11}{3} + \\binom{11}{4} = 165 + 330 = 495$, so the total is $990$ ✓. REPORTING $495$ notices that the two terms are equal and then forgets that the problem asks for their sum, not their common value ✗.',
    },
  ],

  // slot 3 — a binomial coefficient with a large bottom number.
  //          Lanes: C(23,21) -> 253; 17 of 19 rings -> 171;
  //          reversed: C(n,n-2) = 351 -> n = 27.
  [
    {
      q: 'Compute $\\binom{23}{21}$.',
      answer: '$253$',
      solution:
        'Flip to the smaller bottom. Choosing $21$ of $23$ objects is the same as choosing the $2$ left out, so $\\binom{23}{21} = \\binom{23}{2} = \\frac{23 \\cdot 22}{2} = 253$ ✓. Second route, by counting the left-out pairs directly. Number the objects $1$ through $23$ and count each left-out pair at its smaller number: object $1$ can be paired with $22$ others, object $2$ with $21$, and so on down to object $22$, which can be paired with $1$. That is $22 + 21 + \\cdots + 1 = \\frac{22 \\cdot 23}{2} = 253$ ✓. ANSWERING $506$ forgets to divide out the two orders of the left-out pair; $23 \\cdot 22$ counts ordered pairs ✗.',
    },
    {
      q: 'A jeweler shows $17$ of her $19$ different rings in a case; only which rings are shown matters, not where they sit. How many different showings are possible?',
      answer: '$171$',
      solution:
        'Count what stays in the safe. Choosing the $17$ rings to show is the same as choosing the $2$ rings held back, so the answer is $\\binom{19}{2} = \\frac{19 \\cdot 18}{2} = 171$ ✓. Second route, by Pascal’s addition rule on the held-back pair. Split on whether ring $19$ is one of the two held back: if it is, the other held-back ring is any of $18$; if it is not, the pair comes from the first $18$ rings, in $\\binom{18}{2} = 153$ ways. So the total is $18 + 153 = 171$ ✓. FLIPPING THE WRONG NUMBERS and computing $\\binom{17}{2} = 136$ subtracts inside the top number instead of taking $19 - 17 = 2$ as the new bottom number ✗.',
    },
    {
      q: 'For a positive integer $n$, $\\binom{n}{n-2} = 351$. What is $n$?',
      answer: '$27$',
      solution:
        'Flip, then solve. Leaving out $2$ of the $n$ objects is the same as choosing $n-2$ of them, so $\\binom{n}{n-2} = \\binom{n}{2} = \\frac{n(n-1)}{2} = 351$, giving $n(n-1) = 702$. Two consecutive integers with product $702$ sit near $\\sqrt{702} \\approx 26.5$, and $27 \\cdot 26 = 702$, so $n = 27$ ✓. Second route, by climbing the pair counts. $\\binom{25}{2} = 300$, $\\binom{26}{2} = 325$, and $\\binom{27}{2} = 351$ — a hit at $n = 27$, and since the pair count strictly increases with $n$, nothing else works ✓. SOLVING $\\frac{n(n+1)}{2} = 351$ INSTEAD gives $n = 26$, because $\\frac{26 \\cdot 27}{2} = 351$; that equation counts the pairs available to a pool one larger than $n$ ✗.',
    },
  ],

  // slot 4 — a group and then a further choice from what is left.
  //          Lanes: 3 planners of 10 then 1 driver of 7 -> 840;
  //          2 seed packets of 9 then 1 of 7 -> 252;
  //          derived: 2 of 9 then 2 of the remaining 7 -> 756.
  [
    {
      q: 'A team of $10$ people chooses $3$ of its members to plan a trip, and then chooses $1$ of the remaining $7$ members to drive the van. The three planners are not ranked, and no one holds two jobs. In how many ways can this be done?',
      answer: '$840$',
      solution:
        'Planners first. The three planners form a set with no order, so there are $\\binom{10}{3} = \\frac{10 \\cdot 9 \\cdot 8}{6} = 120$ ways to pick them, and then $7$ people are left for the driver: $120 \\cdot 7 = 840$ ✓. Second route, driver first. Any of the $10$ members can be the driver, and the three planners are then any $3$ of the other $9$, which is $\\binom{9}{3} = 84$ ways. That gives $10 \\cdot 84 = 840$ ✓, and the two orders of deciding must agree because each outcome names the same driver and the same planning trio either way. ORDERING THE PLANNERS, $10 \\cdot 9 \\cdot 8 \\cdot 7 = 5040$, treats the trio as a ranked list; each planning set is counted $3! = 6$ times there, and $\\frac{5040}{6} = 840$ ✗.',
    },
    {
      q: 'A gardener picks $2$ of her $9$ different seed packets to plant in the front bed, and then picks $1$ of the remaining $7$ packets to plant in a pot. The two front-bed packets are not ranked, and no packet is used twice. In how many ways can this be done?',
      answer: '$252$',
      solution:
        'Front bed first. The two front-bed packets are an unordered pair, so there are $\\binom{9}{2} = \\frac{9 \\cdot 8}{2} = 36$ choices, and then any of the $7$ leftover packets goes in the pot: $36 \\cdot 7 = 252$ ✓. Second route, pot first. Choose the pot packet in $9$ ways, then take the front-bed pair from the $8$ packets still on the shelf, which is $\\binom{8}{2} = 28$ ways: $9 \\cdot 28 = 252$ ✓. CHOOSING THE POT PACKET FROM ALL NINE, $36 \\cdot 9 = 324$, lets a packet be planted in the bed and in the pot at once, which the stem forbids ✗.',
    },
    {
      q: 'A club of $9$ members chooses $2$ of them to pick the book, and then chooses $2$ of the remaining $7$ members to bring snacks. Neither pair is ranked, no member holds two jobs, and the two jobs are different from each other. In how many ways can this be done?',
      answer: '$756$',
      solution:
        'One pair at a time. The book pair is any $2$ of $9$, which is $\\binom{9}{2} = 36$ ways, and the snack pair is any $2$ of the $7$ members left, which is $\\binom{7}{2} = 21$ ways: $36 \\cdot 21 = 756$ ✓. Second route, from ordered lists. Write down an ordered list of $4$ different members, $9 \\cdot 8 \\cdot 7 \\cdot 6 = 3024$ ways, and read the first two as the book pickers and the last two as the snack bringers. Each outcome comes from $2! \\cdot 2! = 4$ such lists, since either pair may be written in either internal order, so the count is $\\frac{3024}{4} = 756$ ✓. DIVIDING BY ANOTHER $2$ TO GET $378$ treats the two pairs as interchangeable, but picking the book and bringing snacks are different jobs, so swapping the pairs gives a different outcome ✗.',
    },
  ],

  // slot 5 — choosing from two separate pools.
  //          Lanes: 3 of 6 stickers with 2 of 5 stamps -> 200;
  //          2 of 7 soups with 2 of 6 salads -> 315;
  //          derived: 2 red of 5 and 2 blue of 5 with the blue star required -> 40.
  [
    {
      q: 'A box holds $6$ different stickers and $5$ different stamps. How many ways are there to choose $3$ stickers and $2$ stamps, with no order within either group?',
      answer: '$200$',
      solution:
        'Choose from each pool and multiply. The stickers can be chosen in $\\binom{6}{3} = \\frac{6 \\cdot 5 \\cdot 4}{6} = 20$ ways and the stamps in $\\binom{5}{2} = 10$ ways. The two choices do not interfere, so there are $20 \\cdot 10 = 200$ selections ✓. Second route, from ordered picks. Pick $3$ stickers in order, $6 \\cdot 5 \\cdot 4 = 120$ ways, and $2$ stamps in order, $5 \\cdot 4 = 20$ ways, for $120 \\cdot 20 = 2400$ ordered outcomes. Each final selection arises from $3! \\cdot 2! = 12$ of them, so there are $\\frac{2400}{12} = 200$ ✓. ADDING INSTEAD OF MULTIPLYING, $20 + 10 = 30$, would be right if we chose stickers or stamps but not both; here every sticker triple is combined with every stamp pair ✗.',
    },
    {
      q: 'A menu offers $7$ different soups and $6$ different salads. How many ways are there to choose $2$ soups and $2$ salads for a tasting, with no order within either pair?',
      answer: '$315$',
      solution:
        'Choose from each pool and multiply. There are $\\binom{7}{2} = \\frac{7 \\cdot 6}{2} = 21$ soup pairs and $\\binom{6}{2} = \\frac{6 \\cdot 5}{2} = 15$ salad pairs, and any soup pair goes with any salad pair, so the tastings number $21 \\cdot 15 = 315$ ✓. Second route, casework on the first soup. Split the soup pairs by whether the first soup on the menu is in them: if it is, the other soup is any of the remaining $6$, giving $6$ pairs; if it is not, both soups come from the other $6$, giving $\\binom{6}{2} = 15$ pairs. So the tastings number $6 \\cdot 15 + 15 \\cdot 15 = 90 + 225 = 315$ ✓. POOLING THE MENU AND COMPUTING $\\binom{13}{4} = 715$ ignores the requirement of exactly two from each side; that count includes tastings with three soups and one salad ✗.',
    },
    {
      q: 'A bag holds $5$ different red marbles and $5$ different blue marbles, one of the blue ones being the blue star. How many ways are there to choose $2$ red marbles and $2$ blue marbles if the blue star must be one of the chosen marbles?',
      answer: '$40$',
      solution:
        'Place the star first. The blue star takes one of the two blue slots, so the other blue marble is any of the $4$ remaining blue ones: $4$ ways. The red pair is unaffected, $\\binom{5}{2} = 10$ ways. Multiplying, $10 \\cdot 4 = 40$ ✓. Second route, by complement. Without the star rule there are $\\binom{5}{2} \\cdot \\binom{5}{2} = 10 \\cdot 10 = 100$ selections. Those missing the star take both blue marbles from the other $4$: $10 \\cdot \\binom{4}{2} = 10 \\cdot 6 = 60$. So $100 - 60 = 40$ selections contain the star ✓. ANSWERING $100$ counts every choice of two reds and two blues and never uses the condition that the star must be chosen ✗.',
    },
  ],

  // slot 6 — a required member (and in the derived lane a barred one).
  //          Lanes: 4 of 11 with Rosa on it -> 120; 5 of 10 bulbs with the tulip -> 126;
  //          derived: 3 of 12 with Ida in and Jon out -> 45.
  [
    {
      q: 'A $4$-person committee with no titles is chosen from $11$ people, and Rosa, one of the $11$, must be on it. How many committees are possible?',
      answer: '$120$',
      solution:
        'Seat Rosa, then fill the rest. Rosa takes one of the four seats, so the committee is finished by choosing $3$ of the other $10$ people: $\\binom{10}{3} = \\frac{10 \\cdot 9 \\cdot 8}{6} = 120$ ✓. Second route, by complement. All $4$-person committees number $\\binom{11}{4} = 330$, and those without Rosa take all four members from the other $10$, which is $\\binom{10}{4} = 210$. Subtracting, $330 - 210 = 120$ committees contain Rosa ✓. COMPUTING $\\binom{11}{3} = 165$ seats Rosa and then picks $3$ more from all $11$, which can pick Rosa a second time and inflates the count ✗.',
    },
    {
      q: 'A gardener plants $5$ of her $10$ different bulbs, and the tulip, one of the $10$, must be one of them; the planted bulbs have no order. How many choices are possible?',
      answer: '$126$',
      solution:
        'Plant the tulip first. With the tulip taking one of the five spots, the other $4$ bulbs come from the remaining $9$: $\\binom{9}{4} = \\frac{9 \\cdot 8 \\cdot 7 \\cdot 6}{24} = 126$ ✓. Second route, by pairing each choice with its complement. There are $\\binom{10}{5} = 252$ ways to choose $5$ of the $10$ bulbs with no restriction. Match each such set with the $5$ bulbs it leaves out; this matches the sets in pairs, and in each pair exactly one of the two sets holds the tulip. So half of the $252$ sets hold it, namely $126$ ✓. ANSWERING $252$ counts every group of five bulbs and never imposes the tulip requirement ✗.',
    },
    {
      q: 'A $3$-person committee with no titles is chosen from $12$ people. Ida must be on it and Jon must not be on it. How many committees are possible?',
      answer: '$45$',
      solution:
        'Settle both named people first. Ida takes one seat and Jon is barred, so the other $2$ members come from the $10$ people who are neither Ida nor Jon: $\\binom{10}{2} = \\frac{10 \\cdot 9}{2} = 45$ ✓. Second route, by subtracting the bad ones. Committees containing Ida are found by filling two more seats from the other $11$ people, $\\binom{11}{2} = 55$ of them. Among those, the ones that also contain Jon need one more member from the remaining $10$, which is $10$ committees. So $55 - 10 = 45$ ✓. STOPPING AT $55$ uses Ida’s requirement but never removes Jon, leaving in the $10$ committees that hold both of them ✗.',
    },
  ],

  // slot 7 — solving C(n,2) = m, and a follow-up in the derived lane.
  //          Lanes: C(n,2) = 171 -> 19; 253 camp sign-up pairs -> 23;
  //          derived: C(n,2) = 45 then C(n,3) -> 120.
  [
    {
      q: 'Find the positive integer $n$ for which $\\binom{n}{2} = 171$.',
      answer: '$19$',
      solution:
        'Clear the fraction. We need $\\frac{n(n-1)}{2} = 171$, so $n(n-1) = 342$. Two consecutive integers with product $342$ sit near $\\sqrt{342} \\approx 18.5$, and $19 \\cdot 18 = 342$, so $n = 19$ ✓. Second route, by climbing the column of pair counts: $\\binom{17}{2} = 136$, $\\binom{18}{2} = 153$, $\\binom{19}{2} = 171$. The values strictly increase as $n$ grows, so $19$ is the only solution ✓. SOLVING $\\frac{n(n+1)}{2} = 171$ INSTEAD gives $n = 18$, since $\\frac{18 \\cdot 19}{2} = 171$; that equation is $\\binom{n+1}{2}$, one step further along the column ✗.',
    },
    {
      q: 'A summer camp offers several different afternoon activities, and every camper signs up for exactly $2$ of them, the two chosen with neither one first and no activity chosen twice. There are exactly $253$ different sign-up choices. How many activities does the camp offer?',
      answer: '$23$',
      solution:
        'Set up and clear. With $n$ activities there are $\\binom{n}{2} = \\frac{n(n-1)}{2}$ pairs, so $n(n-1) = 506$. Since $\\sqrt{506} \\approx 22.5$, test $23 \\cdot 22 = 506$, which works, so $n = 23$ ✓. Second route, by the quadratic formula. From $n^2 - n - 506 = 0$ the discriminant is $1 + 4 \\cdot 506 = 2025 = 45^2$, so $n = \\frac{1 + 45}{2} = 23$ (the other root is negative and is thrown out) ✓. ANSWERING $22$ reads off the wrong one of the two consecutive factors of $506 = 23 \\cdot 22$; a camp with $22$ activities offers only $\\binom{22}{2} = 231$ sign-up choices ✗.',
    },
    {
      q: 'For a positive integer $n$, $\\binom{n}{2} = 45$. What is $\\binom{n}{3}$ for that same $n$?',
      answer: '$120$',
      solution:
        'Find $n$, then compute. From $\\frac{n(n-1)}{2} = 45$ we get $n(n-1) = 90 = 10 \\cdot 9$, so $n = 10$. Then $\\binom{10}{3} = \\frac{10 \\cdot 9 \\cdot 8}{6} = 120$ ✓. Second route, climbing and then splitting. The pair counts climb $\\binom{8}{2} = 28$, $\\binom{9}{2} = 36$, $\\binom{10}{2} = 45$, so the pool has $10$ objects. Now use Pascal’s addition rule instead of the quotient: $\\binom{10}{3} = \\binom{9}{2} + \\binom{9}{3} = 36 + 84 = 120$ ✓. ANSWERING $10$ stops at the value of $n$; the question asks for the number of $3$-element subsets that pool has ✗.',
    },
  ],

  // slot 8 — a pair that will not appear together.
  //          Lanes: 4 of 11 without Gia-and-Hal -> 294;
  //          3 of 10 without lily-and-iris -> 112;
  //          derived: 4 of 13 with Ivy required and Gia-Hal barred together -> 210.
  [
    {
      q: 'A $4$-person committee with no titles is chosen from $11$ people. Gia and Hal will not serve together, though either one may serve without the other. How many committees are possible?',
      answer: '$294$',
      solution:
        'Subtract the forbidden ones. All committees number $\\binom{11}{4} = 330$. A committee holding both Gia and Hal is finished by taking $2$ more people from the other $9$, which is $\\binom{9}{2} = 36$ ways. So $330 - 36 = 294$ committees obey the rule ✓. Second route, by casework on the pair. A legal committee holds neither of them, $\\binom{9}{4} = 126$ ways; or Gia and $3$ of the other $9$, $\\binom{9}{3} = 84$ ways; or Hal and $3$ of the other $9$, another $84$. Adding, $126 + 84 + 84 = 294$ ✓. ANSWERING $\\binom{9}{4} = 126$ bars both of them from every committee, but the stem allows either one to serve alone ✗.',
    },
    {
      q: 'A florist puts $3$ of her $10$ different flowers in a vase. The lily and the iris cannot both be in it, though either one may be in it without the other. How many vases are possible?',
      answer: '$112$',
      solution:
        'Subtract the forbidden ones. Without any rule there are $\\binom{10}{3} = \\frac{10 \\cdot 9 \\cdot 8}{6} = 120$ vases. Those holding both the lily and the iris need $1$ more flower from the other $8$, so there are $8$ of them. Subtracting, $120 - 8 = 112$ ✓. Second route, by casework on the two flowers. Neither one used: $\\binom{8}{3} = 56$ vases. Lily but not iris: the other $2$ flowers come from the remaining $8$, $\\binom{8}{2} = 28$. Iris but not lily: another $28$. Total $56 + 28 + 28 = 112$ ✓. ANSWERING $\\binom{8}{3} = 56$ throws out the lily and the iris entirely, dropping the $56$ legal vases that use exactly one of them ✗.',
    },
    {
      q: 'A $4$-person committee with no titles is chosen from $13$ people. Ivy must serve, and Gia and Hal refuse to serve together, though either one may serve without the other. How many committees are possible?',
      answer: '$210$',
      solution:
        'Seat Ivy, then subtract. With Ivy in one seat, the other $3$ members come from the remaining $12$ people, giving $\\binom{12}{3} = \\frac{12 \\cdot 11 \\cdot 10}{6} = 220$ committees. Of those, the ones holding both Gia and Hal need $1$ more member from the other $10$, which is $10$ committees. So $220 - 10 = 210$ ✓. Second route, casework on Gia and Hal among Ivy’s three companions. Neither of them: $\\binom{10}{3} = 120$. Gia but not Hal: $\\binom{10}{2} = 45$. Hal but not Gia: $45$. Adding, $120 + 45 + 45 = 210$ ✓. STOPPING AT $220$ enforces Ivy’s seat but never applies the Gia–Hal rule, leaving in the $10$ committees that hold both of them ✗.',
    },
  ],

  // slot 9 — polygons on a circle through named points.
  //          Lanes: triangles through Q among 10 points -> 36;
  //          pentagons through R among 9 points -> 70;
  //          derived: quadrilaterals through both P and Q among 14 points -> 66.
  [
    {
      q: 'Ten points, one of them labeled $Q$, are marked on a circle, and no two of the points coincide. How many triangles with all three vertices among the ten points have $Q$ as one of their vertices?',
      answer: '$36$',
      solution:
        'Fix $Q$ and choose the rest. Any three points on a circle are the vertices of a triangle, since no three of them can be collinear. With $Q$ already a vertex, the other two vertices are any $2$ of the remaining $9$ points: $\\binom{9}{2} = \\frac{9 \\cdot 8}{2} = 36$ ✓. Second route, by counting vertex slots two ways. All triangles number $\\binom{10}{3} = 120$, and each one has $3$ vertices, so the ten points fill $120 \\cdot 3 = 360$ vertex slots in total. The points are interchangeable, so each point fills $\\frac{360}{10} = 36$ slots, that is, lies on $36$ triangles ✓. ANSWERING $9 \\cdot 8 = 72$ counts the other two vertices in order; naming vertex $A$ then $B$ gives the same triangle as naming $B$ then $A$ ✗.',
    },
    {
      q: 'Nine points, one of them labeled $R$, are marked on a circle, and no two of the points coincide. How many pentagons with all five vertices among the nine points have $R$ as one of their vertices?',
      answer: '$70$',
      solution:
        'Fix $R$ and choose the rest. Any five points on a circle are the vertices of exactly one pentagon, read around the circle. With $R$ already a vertex, the other four come from the remaining $8$ points: $\\binom{8}{4} = \\frac{8 \\cdot 7 \\cdot 6 \\cdot 5}{24} = 70$ ✓. Second route, by complement. All pentagons number $\\binom{9}{5} = 126$, and those avoiding $R$ take all five vertices from the other $8$ points, which is $\\binom{8}{5} = 56$. Subtracting, $126 - 56 = 70$ pentagons use $R$ ✓. ANSWERING $126$ counts every pentagon on the nine points, including the $56$ that leave $R$ out ✗.',
    },
    {
      q: 'Fourteen points, two of them labeled $P$ and $Q$, are marked on a circle, and no two of the points coincide. How many quadrilaterals with all four vertices among the fourteen points have both $P$ and $Q$ as vertices?',
      answer: '$66$',
      solution:
        'Fix both named points. Any four points on a circle form exactly one quadrilateral, read around the circle. With $P$ and $Q$ taking two of the four vertices, the other two come from the remaining $12$ points: $\\binom{12}{2} = \\frac{12 \\cdot 11}{2} = 66$ ✓. Second route, by inclusion–exclusion. All quadrilaterals number $\\binom{14}{4} = 1001$. Those missing $P$ number $\\binom{13}{4} = 715$, and likewise $715$ miss $Q$, while $\\binom{12}{4} = 495$ miss both and have been removed twice. So the count using both is $1001 - 715 - 715 + 495 = 66$ ✓. ANSWERING $\\binom{13}{2} = 78$ pins down only one of the two named points, leaving the other free to be chosen or not ✗.',
    },
  ],

  // slot 10 — an "at least" rule together with a rule about two named members.
  //          Lanes: 4 from 7 students + 5 teachers, >=2 students, not Nora with Otto -> 381;
  //          4 from 6 apples + 5 oranges, >=2 apples, not red apple with navel -> 235;
  //          derived: 4 from 5 women + 5 men, >=2 women, Wren required -> 74.
  [
    {
      q: 'A committee of $4$ with no titles is chosen from $7$ students and $5$ teachers, all twelve people different. It must contain at least $2$ students, and it cannot contain both Nora (one of the students) and Otto (one of the teachers), though either of them may serve without the other. How many committees are possible?',
      answer: '$381$',
      solution:
        'Count by the number of students, then remove the clashes. Two students and two teachers: $\\binom{7}{2}\\binom{5}{2} = 21 \\cdot 10 = 210$. Three students and one teacher: $\\binom{7}{3} \\cdot 5 = 35 \\cdot 5 = 175$. Four students: $\\binom{7}{4} = 35$. That is $210 + 175 + 35 = 420$ committees with at least $2$ students. Among them, those holding both Nora and Otto need $2$ more people from $6$ students and $4$ teachers with at least one more student, namely $\\binom{6}{2} = 15$ with two students plus $6 \\cdot 4 = 24$ with one of each, so $39$. Subtracting, $420 - 39 = 381$ ✓. Second route, split on Nora. Committees without Nora draw from $6$ students and $5$ teachers with at least $2$ students: $\\binom{6}{2}\\binom{5}{2} + \\binom{6}{3} \\cdot 5 + \\binom{6}{4} = 150 + 100 + 15 = 265$. Committees with Nora must leave Otto out, so they take $3$ more from $6$ students and $4$ teachers, $\\binom{10}{3} = 120$ ways, minus the $\\binom{4}{3} = 4$ all-teacher fillings that would leave Nora as the only student: $116$. Adding, $265 + 116 = 381$ ✓. STOPPING AT $420$ enforces the student minimum but never applies the Nora–Otto rule, leaving in the $39$ committees that seat them together ✗.',
    },
    {
      q: 'A basket holds $4$ pieces of fruit chosen from $6$ different apples and $5$ different oranges. It must contain at least $2$ apples, and it cannot contain both the red apple and the navel orange, though either of those may be in it without the other. How many baskets are possible?',
      answer: '$235$',
      solution:
        'Count by the number of apples, then remove the clashes. Two apples and two oranges: $\\binom{6}{2}\\binom{5}{2} = 15 \\cdot 10 = 150$. Three apples and one orange: $\\binom{6}{3} \\cdot 5 = 20 \\cdot 5 = 100$. Four apples: $\\binom{6}{4} = 15$. That is $150 + 100 + 15 = 265$ baskets with at least $2$ apples. Those holding both the red apple and the navel orange need $2$ more pieces from $5$ apples and $4$ oranges with at least one more apple: $\\binom{5}{2} = 10$ with two apples plus $5 \\cdot 4 = 20$ with one of each, so $30$. Subtracting, $265 - 30 = 235$ ✓. Second route, split on the red apple. Baskets without it draw from $5$ apples and $5$ oranges with at least $2$ apples: $\\binom{5}{2}\\binom{5}{2} + \\binom{5}{3} \\cdot 5 + \\binom{5}{4} = 100 + 50 + 5 = 155$. Baskets with the red apple must leave the navel out, so they take $3$ more from $5$ apples and $4$ oranges, $\\binom{9}{3} = 84$ ways, minus the $\\binom{4}{3} = 4$ all-orange fillings that would leave only one apple: $80$. Adding, $155 + 80 = 235$ ✓. STOPPING AT $265$ counts every basket with at least two apples and never separates the red apple from the navel orange ✗.',
    },
    {
      q: 'A committee of $4$ with no titles is chosen from $5$ women and $5$ men, all ten people different. It must contain at least $2$ women, and Wren, one of the women, must be on it. How many committees are possible?',
      answer: '$74$',
      solution:
        'Seat Wren, then count the other women. Wren is already one woman, so the remaining $3$ seats must bring at least $1$ more woman from the other $4$ women and the $5$ men. One more woman and two men: $4 \\cdot \\binom{5}{2} = 4 \\cdot 10 = 40$. Two more women and one man: $\\binom{4}{2} \\cdot 5 = 6 \\cdot 5 = 30$. Three more women: $\\binom{4}{3} = 4$. Adding, $40 + 30 + 4 = 74$ ✓. Second route, by complement after seating Wren. With Wren in place, the other $3$ members are any $3$ of the remaining $9$ people, which is $\\binom{9}{3} = 84$ committees. The ones that fail the rule have Wren as the only woman, so all $3$ others are men: $\\binom{5}{3} = 10$. Subtracting, $84 - 10 = 74$ ✓. ANSWERING $84$ seats Wren but forgets that at least two women are required, so it keeps the $10$ committees with Wren and three men ✗.',
    },
  ],
]

export default {
  book: 'intro-counting',
  number: 4,
  worksheet,
}
