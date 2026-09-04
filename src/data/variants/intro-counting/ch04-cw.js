// Counting & Probability chapter 4 — variations for the challenge problems.
// All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every stem settles its own conventions: the objects being chosen are all
//    different and each may be chosen at most once; a committee, team, set or
//    box has no roles and no order unless the stem names a role; "at least",
//    "at most" and "exactly" are said in words; a pair rule is spelled out in
//    both directions; and when a group is chosen and one member is singled
//    out, the stem says when two outcomes count as the same.
//  - Every keyed answer is reached twice along routes that share no steps:
//    casework against a complement, or constructing the group against choosing
//    it and then assigning the role.
//  - Each distractor is one named slip — an order left in, a case dropped, a
//    rule applied to the wrong pool, a count reported instead of the unknown —
//    named in CAPS.

const challenge = [
  // slot 1 — plain k-subsets, including an "at least" tail
  [
    {
      q: 'A painter has $10$ different pigments and will use exactly $5$ of them in one mix. Each pigment is used at most once, and the pigments are stirred together, so a mix depends only on which five pigments went in and not on any order. How many different mixes are possible?',
      choices: ['$30240$', '$6048$', '$252$', '$50$'],
      answer: 2,
      solution:
        'Route one, count in order and divide out the orders. Picking five pigments one at a time gives $10 \\cdot 9 \\cdot 8 \\cdot 7 \\cdot 6 = 30240$ ordered lists, and each mix of five appears once for each of the $5! = 120$ orders of its own pigments, so there are $\\frac{30240}{120} = 252$ mixes ✓. Route two, split on one particular pigment, say the first one on the shelf. A mix either leaves that pigment out, and its five pigments are five of the other nine, $\\binom{9}{5} = 126$ ways, or uses that pigment plus four of the other nine, $\\binom{9}{4} = 126$ ways. Adding gives $126 + 126 = 252$ ✓. (The choice $30240$ COUNTS EVERY ORDER, though the pigments are stirred together ✗; $6048$ DIVIDES THE ORDERED COUNT BY $5$ INSTEAD OF $5!$ ✗; $50$ MULTIPLIES $10 \\cdot 5$ ✗.)',
    },
    {
      q: 'A gardener has $9$ different pots. She leaves exactly $6$ of them outside for the night and brings the other $3$ indoors. Only which pots stay outside matters; the pots are not arranged in any order. How many choices are possible?',
      choices: ['$84$', '$60480$', '$504$', '$126$'],
      answer: 0,
      solution:
        'Route one, count in order and divide out the orders. Naming the six outdoor pots one at a time gives $9 \\cdot 8 \\cdot 7 \\cdot 6 \\cdot 5 \\cdot 4 = 60480$ ordered lists, and each choice of six appears once for each of the $6! = 720$ orders of those six pots, so there are $\\frac{60480}{720} = 84$ choices ✓. Route two, name the pots that come in. Deciding which $6$ stay out is the same decision as deciding which $3$ come indoors, and the indoor trio can be chosen in $\\frac{9 \\cdot 8 \\cdot 7}{3!} = \\frac{504}{6} = 84$ ways ✓. (The choice $60480$ COUNTS EVERY ORDER of the six pots ✗; $504$ DIVIDES THE ORDERED COUNT BY $5!$ INSTEAD OF $6!$ ✗; $126$ IS $\\binom{9}{4}$, leaving the wrong number of pots indoors ✗.)',
    },
    {
      q: 'A cook has $9$ different spices and will use at least $7$ of them in a rub. Each spice is used at most once, and the rub depends only on which spices go in, not on the order they are added. How many different sets of spices could the rub use?',
      choices: ['$36$', '$45$', '$37$', '$46$'],
      answer: 3,
      solution:
        'Route one, casework on the size of the rub. Seven spices: $\\binom{9}{7} = \\binom{9}{2} = 36$. Eight spices: $\\binom{9}{8} = 9$. All nine: $1$. Adding gives $36 + 9 + 1 = 46$ ✓. Route two, count what stays in the jar. Using at least seven of the nine is the same as leaving out at most two, so count the sets left out: none, $1$ way; one spice, $9$ ways; two spices, $\\binom{9}{2} = 36$ ways. That is $1 + 9 + 36 = 46$ ✓. (The choice $36$ COUNTS ONLY THE SEVEN-SPICE RUBS ✗; $45$ FORGETS THE RUB THAT USES ALL NINE, adding $36 + 9$ ✗; $37$ SKIPS THE EIGHT-SPICE RUBS, adding $36 + 1$ ✗.)',
    },
  ],
  // slot 2 — subsets of every allowed size
  [
    {
      q: 'A student has $5$ different magnets and will put some of them on her locker door. Any number of magnets from $1$ to $5$ may go up, no magnet is used twice, and the magnets on the door are not ranked or arranged in any order; leaving the door bare is not allowed. How many different doors are possible?',
      choices: ['$32$', '$31$', '$30$', '$15$'],
      answer: 1,
      solution:
        'Route one, add the sizes. $\\binom{5}{1} + \\binom{5}{2} + \\binom{5}{3} + \\binom{5}{4} + \\binom{5}{5} = 5 + 10 + 10 + 5 + 1 = 31$ ✓. Route two, decide magnet by magnet. Each of the five magnets is either up or in the drawer, two independent choices apiece, giving $2 \\cdot 2 \\cdot 2 \\cdot 2 \\cdot 2 = 32$ sets of magnets. Exactly one of those sets — the one that leaves every magnet down — is barred, leaving $32 - 1 = 31$ ✓. (The choice $32$ COUNTS THE BARE DOOR the stem rules out ✗; $30$ ALSO THROWS OUT THE DOOR CARRYING ALL FIVE, which the stem allows ✗; $15$ STOPS AFTER SIZE TWO, adding only $5 + 10$ ✗.)',
    },
    {
      q: 'A sandwich shop offers $5$ different extras. A sandwich may include any set of the extras, including none at all; no extra is added twice, and the extras are not ordered. How many different sandwiches are possible?',
      choices: ['$31$', '$16$', '$26$', '$32$'],
      answer: 3,
      solution:
        'Route one, decide extra by extra. Each of the five extras is either on the sandwich or off it, so there are $2^5 = 32$ sandwiches, and the plain sandwich with no extras is one of them ✓. Route two, add the sizes. $1 + 5 + 10 + 10 + 5 + 1 = 32$, counting the sandwiches with $0$, $1$, $2$, $3$, $4$ and $5$ extras in turn ✓. (The choice $31$ RULES OUT THE PLAIN SANDWICH, which the stem allows ✗; $16$ USES $2^4$, one extra short ✗; $26$ STOPS AT THREE EXTRAS, adding $1 + 5 + 10 + 10$ ✗.)',
    },
    {
      q: 'A club has $6$ members. A committee has no ranks and no titles, must have at least $3$ members, and may have as many as all $6$. How many different committees can the club form?',
      choices: ['$64$', '$57$', '$42$', '$35$'],
      answer: 2,
      solution:
        'Route one, add the allowed sizes. $\\binom{6}{3} + \\binom{6}{4} + \\binom{6}{5} + \\binom{6}{6} = 20 + 15 + 6 + 1 = 42$ ✓. Route two, take everything and cut. Each member is on or off, so there are $2^6 = 64$ sets of members in all. The barred ones are those with fewer than three members: $1$ empty set, $6$ one-member sets and $\\binom{6}{2} = 15$ two-member sets, which is $22$. So $64 - 22 = 42$ ✓. (The choice $64$ COUNTS EVERY SET OF MEMBERS, including the too-small ones ✗; $57$ REMOVES ONLY THE EMPTY AND ONE-MEMBER SETS, computing $64 - 1 - 6$ ✗; $35$ STOPS AFTER SIZE FOUR, adding $20 + 15$ ✗.)',
    },
  ],
  // slot 3 — a top-heavy bottom index, and the same identity run backward
  [
    {
      q: 'What is $\\binom{40}{38}$?',
      choices: ['$780$', '$1560$', '$741$', '$80$'],
      answer: 0,
      solution:
        'Route one, flip to the smaller bottom. Choosing $38$ of the $40$ is the same as choosing the $2$ left out, so $\\binom{40}{38} = \\binom{40}{2} = \\frac{40 \\cdot 39}{2} = 780$ ✓. Route two, split on one object. Name the objects $x_1$ through $x_{40}$. A $38$-element set is fixed by the pair it leaves out, and that pair either contains $x_1$, in which case its partner is any of the other $39$ objects, or misses $x_1$ entirely, in which case it is one of the $\\binom{39}{2} = \\frac{39 \\cdot 38}{2} = 741$ pairs from the rest. Adding, $39 + 741 = 780$ ✓. (The choice $1560$ FORGETS TO DIVIDE BY $2$, so every pair is counted in both orders ✗; $741$ IS $\\binom{39}{2}$, lowering the top number as well as the bottom ✗; $80$ MULTIPLIES $40 \\cdot 2$ ✗.)',
    },
    {
      q: 'A stack holds $26$ different cards, and all but $2$ of them are removed. Only which two cards are left matters; the two are not ordered. How many outcomes are possible?',
      choices: ['$650$', '$300$', '$325$', '$52$'],
      answer: 2,
      solution:
        'Route one, count in order and halve. Naming the first survivor and then the second gives $26 \\cdot 25 = 650$ ordered pairs, and each unordered pair of survivors shows up twice, so there are $\\frac{650}{2} = 325$ outcomes ✓. Route two, split on one particular card, say the card at the bottom of the stack. If that card is one of the two survivors, its partner is any of the other $25$ cards, giving $25$ outcomes. If that card is removed, both survivors come from the other $25$ cards, giving $\\binom{25}{2} = \\frac{25 \\cdot 24}{2} = 300$ outcomes. Adding, $25 + 300 = 325$ ✓. (The choice $650$ COUNTS THE ORDERED PAIRS, though the two survivors are not ranked ✗; $300$ IS $\\binom{25}{2}$, one card short of the stack ✗; $52$ MULTIPLIES $26 \\cdot 2$ ✗.)',
    },
    {
      q: 'For a positive integer $n$, $\\binom{n}{n-2} = 528$. What is $n$?',
      choices: ['$32$', '$33$', '$31$', '$1056$'],
      answer: 1,
      solution:
        'Route one, flip and solve. Choosing $n-2$ of $n$ objects is the same as choosing the $2$ left out, so $\\binom{n}{n-2} = \\binom{n}{2} = \\frac{n(n-1)}{2} = 528$, giving $n(n-1) = 1056$. Since $32 \\cdot 31 = 992$ and $33 \\cdot 32 = 1056$, we get $n = 33$ ✓. Route two, count pairs by their larger member. Among $n$ labeled objects, the pairs whose larger member is the second object number $1$, the pairs whose larger member is the third number $2$, and so on, so the total is $1 + 2 + \\cdots + (n-1)$. We need that running total to reach $528$, and $1 + 2 + \\cdots + 32 = \\frac{32 \\cdot 33}{2} = 528$, so $n - 1 = 32$ and $n = 33$ ✓. (The choice $32$ REPORTS $n-1$, the smaller of the two consecutive factors ✗; $31$ REPORTS $n-2$, the bottom entry of the symbol, instead of $n$ ✗; $1056$ STOPS AT $n(n-1)$ and never solves for $n$ ✗.)',
    },
  ],
  // slot 4 — quotas from two pools, and the same product run backward
  [
    {
      q: 'A team of $5$ is chosen from $7$ juniors and $6$ seniors. The team must have exactly $3$ juniors and exactly $2$ seniors, all thirteen people are different, and nobody on the team holds a title. How many different teams are possible?',
      choices: ['$1287$', '$50$', '$420$', '$525$'],
      answer: 3,
      solution:
        'Route one, choose inside each pool and multiply. The juniors can be chosen in $\\binom{7}{3} = 35$ ways and the seniors in $\\binom{6}{2} = 15$ ways, and any junior trio goes with any senior pair, so there are $35 \\cdot 15 = 525$ teams ✓. Route two, count in order and divide out the orders. Naming three juniors in order gives $7 \\cdot 6 \\cdot 5 = 210$ lists and naming two seniors in order gives $6 \\cdot 5 = 30$ lists, for $210 \\cdot 30 = 6300$ ordered selections. Each team is produced once for each of the $3! \\cdot 2! = 12$ ways to order its own members within their pools, so there are $\\frac{6300}{12} = 525$ teams ✓. (The choice $1287$ IS $\\binom{13}{5}$, any five of the thirteen with no quota at all ✗; $50$ ADDS $35 + 15$ instead of multiplying ✗; $420$ SWAPS THE TWO QUOTAS, computing $\\binom{7}{2} \\cdot \\binom{6}{3}$ ✗.)',
    },
    {
      q: 'A fruit basket holds exactly $2$ of the $8$ kinds of apple and exactly $2$ of the $5$ kinds of pear a market sells. All thirteen kinds are different, each kind is used at most once, and the fruit is not arranged in any order. How many different baskets are possible?',
      choices: ['$715$', '$280$', '$38$', '$560$'],
      answer: 1,
      solution:
        'Route one, choose inside each pool and multiply. The apples can be chosen in $\\binom{8}{2} = 28$ ways and the pears in $\\binom{5}{2} = 10$ ways, so there are $28 \\cdot 10 = 280$ baskets ✓. Route two, count in order and divide out the orders. Naming two apples in order gives $8 \\cdot 7 = 56$ lists and naming two pears in order gives $5 \\cdot 4 = 20$ lists, for $56 \\cdot 20 = 1120$ ordered selections; each basket appears once for each of the $2! \\cdot 2! = 4$ orders of its own two apples and two pears, so there are $\\frac{1120}{4} = 280$ baskets ✓. (The choice $715$ IS $\\binom{13}{4}$, any four kinds with no quota at all ✗; $38$ ADDS $28 + 10$ instead of multiplying ✗; $560$ LEAVES THE PEARS ORDERED, using $5 \\cdot 4 = 20$ where $\\binom{5}{2} = 10$ belongs ✗.)',
    },
    {
      q: 'A show picks exactly $3$ of its $5$ dancers and exactly $2$ of its $n$ singers. The dancers and singers are all different people, none of them is ranked, and there are exactly $2760$ possible groups. What is $n$?',
      choices: ['$24$', '$23$', '$276$', '$138$'],
      answer: 0,
      solution:
        'Route one, peel off the dancers. The dancers contribute $\\binom{5}{3} = 10$ ways, so $10 \\cdot \\binom{n}{2} = 2760$ and $\\binom{n}{2} = 276$. Then $\\frac{n(n-1)}{2} = 276$ gives $n(n-1) = 552 = 24 \\cdot 23$, so $n = 24$ ✓. Route two, test values and use monotonicity. The total is $10 \\cdot \\binom{n}{2}$, which grows as $n$ grows: $n = 20$ gives $10 \\cdot 190 = 1900$, too small; $n = 23$ gives $10 \\cdot 253 = 2530$, still too small; $n = 24$ gives $10 \\cdot 276 = 2760$, a hit; $n = 25$ gives $10 \\cdot 300 = 3000$, too big. Because the count strictly increases, $n = 24$ is the only value that works ✓. (The choice $23$ REPORTS THE SMALLER FACTOR of $552 = 24 \\cdot 23$ ✗; $276$ STOPS AT $\\binom{n}{2} = 276$ and reports that count instead of $n$ ✗; $138$ DIVIDES BY $2$ A SECOND TIME after $2760 \\div 10 = 276$ ✗.)',
    },
  ],
  // slot 5 — "at least one" and "exactly one" of a marked pair
  [
    {
      q: 'A $4$-person committee is chosen from $11$ people, two of whom are the cousins Rio and Tess. The committee has no titles, and two committees are the same only if they have the same four members. How many committees include at least one of the two cousins?',
      choices: ['$126$', '$330$', '$204$', '$240$'],
      answer: 2,
      solution:
        'Route one, complement. There are $\\binom{11}{4} = 330$ committees in all, and $\\binom{9}{4} = 126$ of them use neither cousin, so $330 - 126 = 204$ committees hold at least one cousin ✓. Route two, casework on how many cousins serve. Exactly one cousin: pick which cousin, $2$ ways, then $3$ of the $9$ other people, $\\binom{9}{3} = 84$ ways, for $2 \\cdot 84 = 168$. Both cousins: the other $2$ seats come from the $9$ others, $\\binom{9}{2} = 36$. Adding, $168 + 36 = 204$ ✓. (The choice $126$ IS THE COMPLEMENT ITSELF, the committees with neither cousin ✗; $330$ COUNTS EVERY COMMITTEE, dropping the cousin condition ✗; $240$ ADDS $\\binom{10}{3} = 120$ FOR RIO AND $\\binom{10}{3} = 120$ FOR TESS, counting the $36$ committees with both of them twice ✗.)',
    },
    {
      q: 'A playlist takes $4$ of $8$ different songs, two of which are duets. At least one of the two duets must be on the playlist. The playing order is set later, so only the set of four songs matters now. How many playlists are possible?',
      choices: ['$55$', '$70$', '$15$', '$40$'],
      answer: 0,
      solution:
        'Route one, complement. There are $\\binom{8}{4} = 70$ playlists in all, and $\\binom{6}{4} = 15$ of them use neither duet, so $70 - 15 = 55$ playlists hold at least one duet ✓. Route two, casework on how many duets are used. Exactly one duet: pick which duet, $2$ ways, then $3$ of the $6$ other songs, $\\binom{6}{3} = 20$ ways, for $2 \\cdot 20 = 40$. Both duets: the other $2$ slots come from the $6$ others, $\\binom{6}{2} = 15$. Adding, $40 + 15 = 55$ ✓. (The choice $70$ COUNTS EVERY PLAYLIST, dropping the duet condition ✗; $15$ IS THE COMPLEMENT ITSELF, the playlists with no duet ✗; $40$ COUNTS ONLY THE PLAYLISTS WITH EXACTLY ONE DUET ✗.)',
    },
    {
      q: 'A $4$-person team is chosen from $9$ people, two of whom are the twins Kit and Lou. The team has no roles, and exactly one of the two twins must be on it — not both, and not neither. How many teams are possible?',
      choices: ['$126$', '$91$', '$35$', '$70$'],
      answer: 3,
      solution:
        'Route one, build the team. Choose which twin serves, $2$ ways, then fill the other $3$ seats from the $7$ people who are not twins, $\\binom{7}{3} = 35$ ways: $2 \\cdot 35 = 70$ ✓. Route two, at least one minus both. All teams number $\\binom{9}{4} = 126$, and those with no twin number $\\binom{7}{4} = 35$, so $126 - 35 = 91$ teams hold at least one twin. Of those, the ones holding both twins take $2$ more people from the other $7$, $\\binom{7}{2} = 21$. So $91 - 21 = 70$ ✓. (The choice $126$ COUNTS EVERY TEAM, dropping the twin condition ✗; $91$ COUNTS THE TEAMS WITH AT LEAST ONE TWIN, including the $21$ that hold both ✗; $35$ COUNTS ONLY THE TEAMS WITH KIT AND WITHOUT LOU, forgetting the mirror case ✗.)',
    },
  ],
  // slot 6 — choose a set, then single out one of its members
  [
    {
      q: 'A trio of $3$ different instruments is chosen from $7$, and one of the three chosen instruments is named the lead. Two trios are the same only if they use the same three instruments and name the same lead; the other two instruments are not ranked. How many different trios are possible?',
      choices: ['$210$', '$35$', '$245$', '$105$'],
      answer: 3,
      solution:
        'Route one, choose then assign. The set of three instruments can be chosen in $\\binom{7}{3} = 35$ ways, and the lead is any one of those three, $3$ ways: $35 \\cdot 3 = 105$ ✓. Route two, name the lead first. The lead is any of the $7$ instruments, and the two supporting instruments are any $2$ of the remaining $6$, unranked between themselves: $7 \\cdot \\binom{6}{2} = 7 \\cdot 15 = 105$ ✓. (The choice $210$ ORDERS ALL THREE INSTRUMENTS, computing $7 \\cdot 6 \\cdot 5$, though only the lead is singled out ✗; $35$ FORGETS TO NAME THE LEAD ✗; $245$ TAKES THE LEAD FROM ALL SEVEN INSTRUMENTS, computing $35 \\cdot 7$, so an instrument outside the trio could lead it ✗.)',
    },
    {
      q: 'A gardener plants $4$ of her $9$ different bulbs in a bed and marks one of the four planted bulbs with a stake. Two plantings are the same only if the same four bulbs are planted and the same bulb is staked; the bed has no order. How many plantings are possible?',
      choices: ['$3024$', '$504$', '$126$', '$1134$'],
      answer: 1,
      solution:
        'Route one, choose then assign. The four planted bulbs can be chosen in $\\binom{9}{4} = 126$ ways, and the stake goes on any one of those four, $4$ ways: $126 \\cdot 4 = 504$ ✓. Route two, stake first. The staked bulb is any of the $9$, and the other three planted bulbs are any $3$ of the remaining $8$, unranked: $9 \\cdot \\binom{8}{3} = 9 \\cdot 56 = 504$ ✓. (The choice $3024$ ORDERS ALL FOUR BULBS, computing $9 \\cdot 8 \\cdot 7 \\cdot 6$, though the bed has no order ✗; $126$ FORGETS THE STAKE ✗; $1134$ TAKES THE STAKED BULB FROM ALL NINE, computing $126 \\cdot 9$, so an unplanted bulb could carry the stake ✗.)',
    },
    {
      q: 'A layered dessert uses $3$ of the $9$ different syrups a shop stocks, and one of the three is poured on top. Two desserts are the same only if they use the same three syrups and the same syrup on top. Caramel is one of the $9$ syrups. How many such desserts have caramel as the top syrup?',
      choices: ['$28$', '$252$', '$84$', '$36$'],
      answer: 0,
      solution:
        'Route one, fix the top and fill in. Caramel is the top syrup, so the only freedom left is the pair of syrups underneath, chosen from the $8$ syrups other than caramel and unranked between themselves: $\\binom{8}{2} = \\frac{8 \\cdot 7}{2} = 28$ ✓. Route two, count everything and use symmetry. All desserts number $\\binom{9}{3} \\cdot 3 = 84 \\cdot 3 = 252$. The nine syrups play identical roles in that count, so each of them is the top syrup in the same number of desserts, namely $\\frac{252}{9} = 28$ ✓. (The choice $252$ COUNTS EVERY DESSERT, whatever sits on top ✗; $84$ COUNTS THE SETS OF THREE SYRUPS and ignores both the top syrup and the caramel condition ✗; $36$ IS $\\binom{9}{2}$, drawing the two lower syrups from all nine and letting caramel be used twice ✗.)',
    },
  ],
  // slot 7 — an order that is forced, so the string is really a set
  [
    {
      q: 'A book series has $11$ different volumes, numbered $1$ through $11$. A shelf holds $5$ of them, placed left to right in order of volume number, and no volume is shelved twice. How many different shelves are possible?',
      choices: ['$55440$', '$2772$', '$462$', '$55$'],
      answer: 2,
      solution:
        'Route one, a shelf is a set. Once the five volumes are chosen, their numbers fix the left-to-right placement completely, so a shelf is nothing more than a $5$-element set of volumes: $\\binom{11}{5} = \\frac{11 \\cdot 10 \\cdot 9 \\cdot 8 \\cdot 7}{120} = 462$ ✓. Route two, count all arrangements and divide. Arrangements of $5$ different volumes in any left-to-right order number $11 \\cdot 10 \\cdot 9 \\cdot 8 \\cdot 7 = 55440$. The $5! = 120$ arrangements built from one fixed set of five volumes contain exactly one that runs in numerical order, so the shelves number $\\frac{55440}{120} = 462$ ✓. (The choice $55440$ COUNTS EVERY ARRANGEMENT, though only the one in volume order is allowed ✗; $2772$ DIVIDES BY $5 \\cdot 4 = 20$ INSTEAD OF $5!$ ✗; $55$ MULTIPLIES $11 \\cdot 5$ ✗.)',
    },
    {
      q: 'A hiker’s log names $4$ of the $14$ rest stops along a trail, listed in the order she passes them, which is fixed by the trail. No stop is listed twice. How many different logs are possible?',
      choices: ['$1001$', '$24024$', '$4004$', '$56$'],
      answer: 0,
      solution:
        'Route one, a log is a set. The trail fixes the order in which the chosen stops appear, so a log is nothing more than a $4$-element set of stops: $\\binom{14}{4} = \\frac{14 \\cdot 13 \\cdot 12 \\cdot 11}{24} = 1001$ ✓. Route two, count all lists and divide. Lists of $4$ different stops in any order number $14 \\cdot 13 \\cdot 12 \\cdot 11 = 24024$. The $4! = 24$ lists built from one fixed set of stops contain exactly one that runs in trail order, so the logs number $\\frac{24024}{24} = 1001$ ✓. (The choice $24024$ COUNTS EVERY ORDERING, though the trail allows only one ✗; $4004$ DIVIDES BY $3!$ INSTEAD OF $4!$ ✗; $56$ MULTIPLIES $14 \\cdot 4$ ✗.)',
    },
    {
      q: 'A code is a string of $4$ different letters chosen from the ten letters $A$ through $J$ and written in alphabetical order. How many codes contain $A$ but do not contain $B$?',
      choices: ['$210$', '$84$', '$126$', '$56$'],
      answer: 3,
      solution:
        'Route one, fix what the rule decides. Alphabetical order makes a code the same thing as a set of four letters. The letter $A$ is in that set and $B$ is not, so the remaining three letters come from the eight letters $C$ through $J$: $\\binom{8}{3} = \\frac{8 \\cdot 7 \\cdot 6}{6} = 56$ ✓. Route two, require $A$, then subtract the codes that also hold $B$. Codes containing $A$ take three more letters from the other nine, $\\binom{9}{3} = 84$. Of those, the ones containing $B$ as well take two more letters from the remaining eight, $\\binom{8}{2} = 28$. So $84 - 28 = 56$ ✓. (The choice $210$ IS $\\binom{10}{4}$, every code with neither condition applied ✗; $84$ REQUIRES $A$ BUT LETS $B$ IN ✗; $126$ IS $\\binom{9}{4}$, keeping $B$ out but never requiring $A$ ✗.)',
    },
  ],
  // slot 8 — quotas stated as "at least" or "at most"
  [
    {
      q: 'A committee of $4$ is chosen from $7$ adults and $4$ teens. It must contain at least $2$ teens. All eleven people are different, and nobody on the committee holds a title. How many committees are possible?',
      choices: ['$155$', '$330$', '$295$', '$126$'],
      answer: 0,
      solution:
        'Route one, casework on the number of teens. Two teens: $\\binom{4}{2} \\cdot \\binom{7}{2} = 6 \\cdot 21 = 126$. Three teens: $\\binom{4}{3} \\cdot \\binom{7}{1} = 4 \\cdot 7 = 28$. Four teens: $\\binom{4}{4} = 1$. Adding, $126 + 28 + 1 = 155$ ✓. Route two, complement. All committees number $\\binom{11}{4} = 330$. Those with no teen number $\\binom{7}{4} = 35$, and those with exactly one teen number $4 \\cdot \\binom{7}{3} = 4 \\cdot 35 = 140$. So $330 - 35 - 140 = 155$ ✓. (The choice $330$ IGNORES THE TEEN RULE ✗; $295$ REMOVES ONLY THE TEEN-FREE COMMITTEES, computing $330 - 35$ and leaving the one-teen ones in ✗; $126$ COUNTS ONLY THE EXACTLY-TWO-TEEN CASE ✗.)',
    },
    {
      q: 'A gift box holds $5$ items chosen from $6$ different books and $4$ different toys, and it must contain at least $3$ toys. Each item is used at most once and the box has no order. How many different boxes are possible?',
      choices: ['$252$', '$60$', '$66$', '$126$'],
      answer: 2,
      solution:
        'Route one, casework on the number of toys. Three toys: $\\binom{4}{3} \\cdot \\binom{6}{2} = 4 \\cdot 15 = 60$. Four toys: $\\binom{4}{4} \\cdot \\binom{6}{1} = 1 \\cdot 6 = 6$. Adding, $60 + 6 = 66$ ✓. Route two, complement. All boxes number $\\binom{10}{5} = 252$. Those with no toy number $\\binom{6}{5} = 6$; with exactly one toy, $4 \\cdot \\binom{6}{4} = 4 \\cdot 15 = 60$; with exactly two toys, $\\binom{4}{2} \\cdot \\binom{6}{3} = 6 \\cdot 20 = 120$. So $252 - 6 - 60 - 120 = 66$ ✓. (The choice $252$ IGNORES THE TOY RULE ✗; $60$ COUNTS ONLY THE EXACTLY-THREE-TOY CASE ✗; $126$ SUBTRACTS THE NO-TOY AND TWO-TOY CASES BUT FORGETS THE ONE-TOY CASE, computing $252 - 6 - 120$ ✗.)',
    },
    {
      q: 'A panel of $4$ is chosen from $5$ coaches and $6$ athletes, and it may contain at most $1$ athlete. All eleven people are different and the panel has no roles. How many panels are possible?',
      choices: ['$330$', '$65$', '$60$', '$5$'],
      answer: 1,
      solution:
        'Route one, casework on the number of athletes. No athlete: $\\binom{5}{4} = 5$. Exactly one athlete: $\\binom{6}{1} \\cdot \\binom{5}{3} = 6 \\cdot 10 = 60$. Adding, $5 + 60 = 65$ ✓. Route two, complement. All panels number $\\binom{11}{4} = 330$. Those with two athletes number $\\binom{6}{2} \\cdot \\binom{5}{2} = 15 \\cdot 10 = 150$; with three, $\\binom{6}{3} \\cdot \\binom{5}{1} = 20 \\cdot 5 = 100$; with four, $\\binom{6}{4} = 15$. So $330 - 150 - 100 - 15 = 65$ ✓. (The choice $330$ IGNORES THE CAP ON ATHLETES ✗; $60$ COUNTS ONLY THE ONE-ATHLETE PANELS ✗; $5$ COUNTS ONLY THE ATHLETE-FREE PANELS ✗.)',
    },
  ],
  // slot 9 — a pair that travels together, and its "exactly one" cousin
  [
    {
      q: 'A crew of $4$ is chosen from $10$ people. Nia and Otto are inseparable: either both of them serve or neither of them does. The crew has no roles. How many crews are possible?',
      choices: ['$28$', '$70$', '$182$', '$98$'],
      answer: 3,
      solution:
        'Route one, casework on the pair. If both serve, the other $2$ seats go to $2$ of the remaining $8$ people: $\\binom{8}{2} = 28$. If neither serves, all $4$ seats go to those same $8$ people: $\\binom{8}{4} = 70$. Adding, $28 + 70 = 98$ ✓. Route two, complement. All crews number $\\binom{10}{4} = 210$. A crew breaks the rule exactly when it holds one of the pair and not the other: choose which one serves, $2$ ways, then $3$ of the $8$ others, $\\binom{8}{3} = 56$ ways, for $2 \\cdot 56 = 112$ bad crews. So $210 - 112 = 98$ ✓. (The choice $28$ IS THE BOTH-SERVE CASE ALONE ✗; $70$ IS THE NEITHER-SERVES CASE ALONE ✗; $182$ READS THE RULE AS "NEVER BOTH", subtracting the $\\binom{8}{2} = 28$ crews with both from $210$ ✗.)',
    },
    {
      q: 'A window display uses $4$ of $11$ different items, two of which are matching lamps. The two lamps are displayed together or not at all. The items in a display are not arranged in any order. How many displays are possible?',
      choices: ['$330$', '$162$', '$126$', '$294$'],
      answer: 1,
      solution:
        'Route one, casework on the lamps. If both lamps are used, the other $2$ items come from the remaining $9$: $\\binom{9}{2} = 36$. If neither lamp is used, all $4$ items come from those $9$: $\\binom{9}{4} = 126$. Adding, $36 + 126 = 162$ ✓. Route two, complement. All displays number $\\binom{11}{4} = 330$. A display breaks the rule exactly when it holds one lamp and not the other: choose which lamp, $2$ ways, then $3$ of the $9$ other items, $\\binom{9}{3} = 84$ ways, for $2 \\cdot 84 = 168$ bad displays. So $330 - 168 = 162$ ✓. (The choice $330$ IGNORES THE LAMP RULE ✗; $126$ IS THE NO-LAMP CASE ALONE ✗; $294$ READS THE RULE AS "NEVER BOTH", subtracting the $\\binom{9}{2} = 36$ displays with both from $330$ ✗.)',
    },
    {
      q: 'A committee of $4$ is chosen from $10$ people, two of whom are Ada and Bo. Exactly one of Ada and Bo must serve — not both, and not neither. The committee has no titles. How many committees are possible?',
      choices: ['$112$', '$140$', '$56$', '$182$'],
      answer: 0,
      solution:
        'Route one, build the committee. Choose which of the two serves, $2$ ways, then fill the other $3$ seats from the $8$ people who are neither Ada nor Bo, $\\binom{8}{3} = 56$ ways: $2 \\cdot 56 = 112$ ✓. Route two, at least one minus both. All committees number $\\binom{10}{4} = 210$, and those using neither of the two number $\\binom{8}{4} = 70$, so $210 - 70 = 140$ hold at least one of them. Those holding both take $2$ more people from the other $8$, $\\binom{8}{2} = 28$. So $140 - 28 = 112$ ✓. (The choice $140$ COUNTS AT LEAST ONE, including the $28$ committees with both ✗; $56$ COUNTS ONLY THE COMMITTEES WITH ADA AND WITHOUT BO, forgetting the mirror case ✗; $182$ COUNTS THE COMMITTEES THAT DO NOT HOLD BOTH, which lets in the $70$ with neither ✗.)',
    },
  ],
  // slot 10 — a quota and a forbidden pair at once
  [
    {
      q: 'A crew of $4$ is chosen from $5$ adults and $6$ students. At least $2$ adults must serve, and the twins Eve and Fin, both students, will not both serve, though either may serve without the other. All eleven people are different and the crew has no roles. How many crews are possible?',
      choices: ['$215$', '$205$', '$179$', '$330$'],
      answer: 1,
      solution:
        'Route one, count by adults, then delete the twin pairs. Two adults: $\\binom{5}{2} \\cdot \\binom{6}{2} = 10 \\cdot 15 = 150$. Three adults: $\\binom{5}{3} \\cdot \\binom{6}{1} = 10 \\cdot 6 = 60$. Four adults: $\\binom{5}{4} = 5$. That is $215$ crews before the twin rule. A crew with both twins has two students already, so it must be a two-adult crew whose students are exactly Eve and Fin: $\\binom{5}{2} = 10$ of them; a three-adult crew has only one student and a four-adult crew none, so neither can hold both twins. Subtracting, $215 - 10 = 205$ ✓. Route two, split on the twins first. Neither twin serves: the crew comes from $5$ adults and $4$ other students with at least $2$ adults, giving $\\binom{5}{2}\\binom{4}{2} + \\binom{5}{3}\\binom{4}{1} + \\binom{5}{4} = 60 + 40 + 5 = 105$. Exactly one twin serves: pick the twin, $2$ ways, and fill $3$ seats from $5$ adults and $4$ other students with at least $2$ adults, $\\binom{5}{2}\\binom{4}{1} + \\binom{5}{3} = 40 + 10 = 50$, for $2 \\cdot 50 = 100$. Adding, $105 + 100 = 205$ ✓. (The choice $215$ IGNORES THE TWIN RULE ✗; $179$ SUBTRACTS ALL $36$ CREWS THAT HOLD BOTH TWINS, computing $215 - 36$, though the ones with too few adults were never counted ✗; $330$ IS $\\binom{11}{4}$, every crew with no rule at all ✗.)',
    },
    {
      q: 'A display uses $5$ of $9$ plants: $4$ different cacti and $5$ different ferns. It must contain at least $3$ ferns, and the two matching ferns are never both used, though either may be used without the other. How many displays are possible?',
      choices: ['$81$', '$46$', '$126$', '$50$'],
      answer: 3,
      solution:
        'Route one, count by ferns, then delete the matched pairs. Three ferns: $\\binom{5}{3} \\cdot \\binom{4}{2} = 10 \\cdot 6 = 60$. Four ferns: $\\binom{5}{4} \\cdot \\binom{4}{1} = 5 \\cdot 4 = 20$. Five ferns: $\\binom{5}{5} = 1$. That is $81$ displays before the matching rule. Those holding both matching ferns: with three ferns, the third fern is one of the other $3$ and the cacti are $\\binom{4}{2} = 6$, giving $18$; with four ferns, two more come from the other $3$, $\\binom{3}{2} = 3$, and one cactus from $4$, giving $12$; with five ferns, $1$. That is $18 + 12 + 1 = 31$. Subtracting, $81 - 31 = 50$ ✓. Route two, split on the matched pair first. Neither matching fern is used: the ferns come from the other $3$, so the display has exactly $3$ ferns and $2$ cacti, $\\binom{4}{2} = 6$ displays. Exactly one is used: pick which one, $2$ ways; that fern plus $2$ of the other $3$ ferns with $2$ cacti gives $3 \\cdot 6 = 18$, and that fern plus all $3$ others with $1$ cactus gives $4$, for $22$ apiece and $2 \\cdot 22 = 44$. Adding, $6 + 44 = 50$ ✓. (The choice $81$ IGNORES THE MATCHING-FERN RULE ✗; $46$ SUBTRACTS ALL $35$ DISPLAYS HOLDING BOTH MATCHING FERNS, computing $81 - 35$, though the ones with too few ferns were never counted ✗; $126$ IS $\\binom{9}{5}$, every display with no rule at all ✗.)',
    },
    {
      q: 'A team of $4$ is chosen from $3$ coaches and $6$ players. At least $1$ coach must serve, and the twins Gus and Hal, both players, will not both serve, though either may serve without the other. How many teams are possible?',
      choices: ['$111$', '$126$', '$96$', '$90$'],
      answer: 2,
      solution:
        'Route one, apply the coach rule, then delete the twin pairs. All teams number $\\binom{9}{4} = 126$, and the coach-free ones number $\\binom{6}{4} = 15$, so $126 - 15 = 111$ teams have at least one coach. Teams holding both twins take $2$ more people from the remaining $7$, $\\binom{7}{2} = 21$, and $\\binom{4}{2} = 6$ of those draw both from the four other players and so have no coach. That leaves $21 - 6 = 15$ teams that satisfy the coach rule and break the twin rule, so $111 - 15 = 96$ ✓. Route two, split on the twins first. Neither twin serves: the team comes from $3$ coaches and $4$ other players with at least one coach, $\\binom{7}{4} - \\binom{4}{4} = 35 - 1 = 34$. Exactly one twin serves: pick the twin, $2$ ways, then take $3$ from the same $7$ people with at least one coach, $\\binom{7}{3} - \\binom{4}{3} = 35 - 4 = 31$, for $2 \\cdot 31 = 62$. Adding, $34 + 62 = 96$ ✓. (The choice $111$ IGNORES THE TWIN RULE ✗; $126$ IS $\\binom{9}{4}$, every team with no rule at all ✗; $90$ SUBTRACTS ALL $21$ TEAMS HOLDING BOTH TWINS, computing $111 - 21$, though the $6$ coach-free ones were never counted ✗.)',
    },
  ],
  // slot 11 — a quota together with an inseparable or a feuding pair
  [
    {
      q: 'A band of $5$ is chosen from $7$ guitarists and $3$ drummers. It must include at least $1$ drummer, and the guitarists Ana and Ben play together or not at all. All ten musicians are different and the band has no roles. How many bands are possible?',
      choices: ['$101$', '$231$', '$112$', '$55$'],
      answer: 0,
      solution:
        'Route one, split on Ana and Ben. If both play, $3$ more come from the $5$ other guitarists and the $3$ drummers, and at least one must be a drummer: $\\binom{8}{3} - \\binom{5}{3} = 56 - 10 = 46$. If neither plays, all $5$ come from those same $8$ musicians with at least one drummer: $\\binom{8}{5} - \\binom{5}{5} = 56 - 1 = 55$. Adding, $46 + 55 = 101$ ✓. Route two, obey the pair rule first, then subtract the drummerless bands. Bands obeying the Ana–Ben rule number $\\binom{8}{3} + \\binom{8}{5} = 56 + 56 = 112$, since either the pair is in and $3$ more come from the other $8$, or the pair is out and all $5$ do. Of those, the drummerless ones use only the $5$ other guitarists: $\\binom{5}{3} = 10$ with the pair in and $\\binom{5}{5} = 1$ with the pair out, so $11$. Subtracting, $112 - 11 = 101$ ✓. (The choice $231$ IGNORES THE ANA–BEN RULE, counting every band with at least one drummer ✗; $112$ IGNORES THE DRUMMER RULE, counting every band that obeys the Ana–Ben rule ✗; $55$ IS THE NEITHER-PLAYS CASE ALONE ✗.)',
    },
    {
      q: 'A bouquet has $4$ stems chosen from $5$ different roses and $4$ different lilies. It must contain at least $2$ lilies, and the two matching roses are used together or not at all. How many bouquets are possible?',
      choices: ['$81$', '$126$', '$37$', '$31$'],
      answer: 2,
      solution:
        'Route one, split on the matched roses. If both are used, the other $2$ stems come from $3$ roses and $4$ lilies, and at least $2$ lilies are needed, so both remaining stems must be lilies: $\\binom{4}{2} = 6$. If neither is used, all $4$ stems come from $3$ roses and $4$ lilies with at least $2$ lilies: $\\binom{4}{2}\\binom{3}{2} + \\binom{4}{3}\\binom{3}{1} + \\binom{4}{4} = 18 + 12 + 1 = 31$. Adding, $6 + 31 = 37$ ✓. Route two, obey the rose rule first, then subtract the lily-poor bouquets. Bouquets obeying the rose rule number $\\binom{7}{2} + \\binom{7}{4} = 21 + 35 = 56$. Those with no lily: the matched pair plus $2$ of the $3$ other roses, $3$ ways, and nothing else, since $4$ stems cannot come from only $3$ roses. Those with exactly one lily: with the pair in, $4 \\cdot 3 = 12$; with the pair out, $4 \\cdot \\binom{3}{3} = 4$; that is $16$. Subtracting, $56 - 3 - 16 = 37$ ✓. (The choice $81$ IGNORES THE ROSE RULE, counting every bouquet with at least two lilies ✗; $126$ IS $\\binom{9}{4}$, every bouquet with no rule at all ✗; $31$ IS THE NEITHER-MATCHED-ROSE CASE ALONE ✗.)',
    },
    {
      q: 'A lineup of $4$ is chosen from $5$ forwards and $4$ defenders. It must include at least $2$ defenders, and the forwards Mo and Ned refuse to play together, though either may play without the other. How many lineups are possible?',
      choices: ['$81$', '$75$', '$105$', '$126$'],
      answer: 1,
      solution:
        'Route one, count by defenders, then delete the Mo–Ned lineups. Two defenders: $\\binom{4}{2} \\cdot \\binom{5}{2} = 6 \\cdot 10 = 60$. Three defenders: $\\binom{4}{3} \\cdot \\binom{5}{1} = 4 \\cdot 5 = 20$. Four defenders: $\\binom{4}{4} = 1$. That is $81$ lineups before the feud. A lineup with both Mo and Ned already has two forwards, so it must be a two-defender lineup whose forwards are exactly Mo and Ned: $\\binom{4}{2} = 6$; three- and four-defender lineups have room for at most one forward. Subtracting, $81 - 6 = 75$ ✓. Route two, split on Mo and Ned. Neither plays: all $4$ come from $3$ other forwards and $4$ defenders with at least $2$ defenders, $\\binom{4}{2}\\binom{3}{2} + \\binom{4}{3}\\binom{3}{1} + \\binom{4}{4} = 18 + 12 + 1 = 31$. Exactly one plays: pick which, $2$ ways, then $3$ more from those same $7$ with at least $2$ defenders, $\\binom{4}{2}\\binom{3}{1} + \\binom{4}{3} = 18 + 4 = 22$, for $2 \\cdot 22 = 44$. Adding, $31 + 44 = 75$ ✓. (The choice $81$ IGNORES THE MO–NED RULE ✗; $105$ IGNORES THE DEFENDER RULE, computing $\\binom{9}{4} - \\binom{7}{2} = 126 - 21$ ✗; $126$ IS $\\binom{9}{4}$, every lineup with no rule at all ✗.)',
    },
  ],
  // slot 12 — a majority rule with a second condition on top
  [
    {
      q: 'A committee of $4$ is chosen from $7$ boys and $5$ girls. It must have more boys than girls, and it cannot include both Tom (a boy) and Uma (a girl), though either of them may serve without the other. How many committees are possible?',
      choices: ['$210$', '$495$', '$165$', '$195$'],
      answer: 3,
      solution:
        'Route one, count the boy-majority committees, then delete the forbidden ones. With four seats, more boys than girls means three boys and one girl, $\\binom{7}{3} \\cdot \\binom{5}{1} = 35 \\cdot 5 = 175$, or four boys, $\\binom{7}{4} = 35$; that is $210$. A committee holding both Tom and Uma has a girl, so it is a three-boy committee whose girl is Uma and whose boys are Tom plus $2$ of the other $6$: $\\binom{6}{2} = 15$. Subtracting, $210 - 15 = 195$ ✓. Route two, casework on Tom. Tom off the committee: three boys and one girl from the other $6$ boys, $\\binom{6}{3} \\cdot 5 = 20 \\cdot 5 = 100$, or four boys, $\\binom{6}{4} = 15$; that is $115$. Tom on the committee and Uma off it: three boys and one girl, $\\binom{6}{2} \\cdot 4 = 15 \\cdot 4 = 60$, or four boys, $\\binom{6}{3} = 20$; that is $80$. Adding, $115 + 80 = 195$ ✓. (The choice $210$ IGNORES THE TOM–UMA RULE ✗; $495$ IS $\\binom{12}{4}$, every committee with no rule at all ✗; $165$ SUBTRACTS ALL $45$ COMMITTEES HOLDING BOTH TOM AND UMA, computing $210 - 45$, though the ones without a boy majority were never counted ✗.)',
    },
    {
      q: 'A gift box holds $5$ items chosen from $6$ different books and $4$ different games. It must contain more books than games, and it cannot contain both the atlas (a book) and the puzzle (a game), though either of them may go in without the other. How many boxes are possible?',
      choices: ['$186$', '$146$', '$252$', '$130$'],
      answer: 1,
      solution:
        'Route one, count the book-majority boxes, then delete the forbidden ones. With five items, more books than games means three books and two games, $\\binom{6}{3} \\cdot \\binom{4}{2} = 20 \\cdot 6 = 120$; four books and one game, $\\binom{6}{4} \\cdot 4 = 15 \\cdot 4 = 60$; or five books, $\\binom{6}{5} = 6$; that is $186$. Boxes holding both the atlas and the puzzle: with three books and two games, $\\binom{5}{2} \\cdot \\binom{3}{1} = 10 \\cdot 3 = 30$; with four books and one game, $\\binom{5}{3} = 10$; a five-book box has no game. That is $40$. Subtracting, $186 - 40 = 146$ ✓. Route two, casework on the atlas. Atlas out: three books and two games, $\\binom{5}{3}\\binom{4}{2} = 10 \\cdot 6 = 60$; four books and one game, $\\binom{5}{4} \\cdot 4 = 20$; five books, $\\binom{5}{5} = 1$; that is $81$. Atlas in and puzzle out: three books and two games, $\\binom{5}{2}\\binom{3}{2} = 10 \\cdot 3 = 30$; four books and one game, $\\binom{5}{3} \\cdot 3 = 30$; five books, $\\binom{5}{4} = 5$; that is $65$. Adding, $81 + 65 = 146$ ✓. (The choice $186$ IGNORES THE ATLAS–PUZZLE RULE ✗; $252$ IS $\\binom{10}{5}$, every box with no rule at all ✗; $130$ SUBTRACTS ALL $56$ BOXES HOLDING BOTH THE ATLAS AND THE PUZZLE, computing $186 - 56$, though the ones without a book majority were never counted ✗.)',
    },
    {
      q: 'A committee of $4$ is chosen from $6$ seniors and $5$ juniors. It must have more seniors than juniors, and Priya, a senior, must be on it. The committee has no titles. How many committees are possible?',
      choices: ['$60$', '$115$', '$50$', '$120$'],
      answer: 0,
      solution:
        'Route one, seat Priya and fill the rest. Priya takes one seat, and more seniors than juniors on a four-person committee means at least three seniors, so the remaining $3$ seats hold at least $2$ more seniors. Two more seniors and one junior: $\\binom{5}{2} \\cdot 5 = 10 \\cdot 5 = 50$. Three more seniors: $\\binom{5}{3} = 10$. Adding, $50 + 10 = 60$ ✓. Route two, count all majority committees and use symmetry. Committees with three seniors and one junior number $\\binom{6}{3} \\cdot 5 = 100$, and each uses $3$ of the $6$ seniors; since the six seniors play identical roles, Priya sits on $\\frac{3}{6}$ of them, or $50$. Committees with four seniors number $\\binom{6}{4} = 15$, each using $4$ of the $6$ seniors, so Priya sits on $\\frac{4}{6}$ of them, or $10$. Adding, $50 + 10 = 60$ ✓. (The choice $115$ DROPS THE PRIYA REQUIREMENT, counting all $100 + 15$ majority committees ✗; $50$ COUNTS ONLY THE THREE-SENIOR COMMITTEES and forgets the all-senior ones ✗; $120$ IS $\\binom{10}{3}$, seating Priya and then taking any three of the other ten with no majority rule ✗.)',
    },
  ],
]

export default {
  book: 'intro-counting',
  number: 4,
  challenge,
}
