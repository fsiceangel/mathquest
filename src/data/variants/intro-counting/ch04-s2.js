// Counting & Probability chapter 4 — variations for section 4.3
// (How to Compute Combinations). All problems and solutions are original
// MathQuest content.
//
// House rules for this file:
//  - Every stem settles its own conventions: the objects are all different,
//    none is chosen twice, and a chosen group carries no order and no roles
//    unless the stem names them.
//  - Every keyed answer is reached twice along routes that share no steps:
//    cancelling the $k$ factors against $k!$, splitting on one distinguished
//    object, counting pairs by their larger member, counting a complement,
//    or climbing a table of values.
//  - Each distractor is one named slip — a skipped division, a division by $k$
//    instead of $k!$, a miscounted factor on top, an ordered pair left
//    undivided, a reported product instead of the answer — named in CAPS.

const s43 = [
  // slot 1 — choosing two, and what one more object adds
  [
    {
      q: 'What is $\\binom{14}{2}$?',
      choices: ['$182$', '$98$', '$28$', '$91$'],
      answer: 3,
      solution:
        'Route one, cancel. Put $k = 2$ factors on top over $2! = 2$: $\\binom{14}{2} = \\frac{14 \\cdot 13}{2 \\cdot 1}$. The $2$ divides into the $14$, leaving $7 \\cdot 13 = 91$ ✓. Route two, count each pair by its larger member. Number the fourteen objects $1$ through $14$ and name every pair by the higher number in it: object $2$ is the higher one in $1$ pair, object $3$ in $2$ pairs, and so on up to object $14$ in $13$ pairs. That total is $1 + 2 + \\cdots + 13$; pairing $1$ with $13$, $2$ with $12$, and so on gives six sums of $14$ and a leftover $7$, or $84 + 7 = 91$ ✓. (The choice $182$ SKIPS THE DIVISION BY $2!$, counting each pair once in each order ✗; $98$ ALLOWS THE SAME OBJECT TWICE, computing $\\frac{14 \\cdot 14}{2}$ ✗; $28$ MULTIPLIES $14 \\cdot 2$ instead of choosing ✗.)',
    },
    {
      q: 'A shelf holds $17$ different novels, and a reader takes $2$ of them on a trip. The two are simply packed together, so neither is first, and no novel is taken twice. How many different pairs can she take?',
      choices: ['$272$', '$136$', '$153$', '$34$'],
      answer: 1,
      solution:
        'Route one, cancel. The pair is a set, not a list, so the count is $\\binom{17}{2} = \\frac{17 \\cdot 16}{2} = 17 \\cdot 8 = 136$ ✓. Route two, add one novel at a time. A shelf of $16$ novels offers $\\frac{16 \\cdot 15}{2} = 120$ pairs. Putting a seventeenth novel on the shelf creates one new pair with each of the $16$ already there and spoils none of the old pairs, so the total becomes $120 + 16 = 136$ ✓. (The choice $272$ TREATS THE TWO NOVELS AS FIRST AND SECOND, leaving $17 \\cdot 16$ undivided ✗; $153$ USES $\\frac{17 \\cdot 18}{2}$, which lets a novel be paired with itself ✗; $34$ MULTIPLIES $17 \\cdot 2$ ✗.)',
    },
    {
      q: 'In a group of $10$ people, exactly $45$ different two-person pairs can be formed, a pair having no first or second member. One more person joins the group. How many different two-person pairs can be formed now?',
      choices: ['$55$', '$46$', '$54$', '$90$'],
      answer: 0,
      solution:
        'Route one, apply the formula to the new group. Eleven people give $\\binom{11}{2} = \\frac{11 \\cdot 10}{2} = 11 \\cdot 5 = 55$ pairs ✓. Route two, count only what changes. Every pair among the original ten is still a pair, so those $45$ all survive. The newcomer forms exactly one new pair with each of the $10$ people already in the group, and those $10$ pairs differ from one another and from every old pair, since each contains the newcomer. The new total is $45 + 10 = 55$ ✓. (The choice $46$ GIVES THE NEWCOMER ONLY ONE NEW PAIR ✗; $54$ PAIRS THE NEWCOMER WITH ONLY $9$ OF THE $10$ ✗; $90$ DOUBLES THE OLD COUNT, as if arriving copied the whole group ✗.)',
    },
  ],
  // slot 2 — choosing three, and reading the formula backwards
  [
    {
      q: 'What is $\\binom{13}{3}$?',
      choices: ['$1716$', '$286$', '$572$', '$39$'],
      answer: 1,
      solution:
        'Route one, cancel. Put $k = 3$ factors on top over $3! = 6$: $\\frac{13 \\cdot 12 \\cdot 11}{6}$. The $6$ divides into the $12$, leaving $13 \\cdot 2 \\cdot 11 = 286$ ✓. Route two, split on the first two objects. Label the thirteen objects and ask how many of the first two a group of three uses. Both: the third member is any of the remaining $11$, so $11$ groups. Exactly one: $2$ ways to say which, then $\\binom{11}{2} = \\frac{11 \\cdot 10}{2} = 55$ for the rest, or $110$ groups. Neither: $\\binom{11}{3} = \\frac{11 \\cdot 10 \\cdot 9}{6} = 165$ groups. Every group lands in exactly one case, so the total is $11 + 110 + 165 = 286$ ✓. (The choice $1716$ SKIPS THE DIVISION BY $3!$ ✗; $572$ DIVIDES BY $3$ INSTEAD OF $3! = 6$ ✗; $39$ MULTIPLIES $13 \\cdot 3$ ✗.)',
    },
    {
      q: 'A café has $16$ different pastries and puts $3$ of them in a gift box. The three sit in the box in no order, and no pastry is used twice. How many different boxes are possible?',
      choices: ['$3360$', '$1120$', '$48$', '$560$'],
      answer: 3,
      solution:
        'Route one, cancel. $\\binom{16}{3} = \\frac{16 \\cdot 15 \\cdot 14}{3 \\cdot 2 \\cdot 1}$: the $3$ goes into the $15$ and the $2$ into the $14$, leaving $16 \\cdot 5 \\cdot 7 = 560$ ✓. Route two, split on one pastry. Call one of them the éclair. Boxes holding the éclair need $2$ more from the other $15$: $\\binom{15}{2} = \\frac{15 \\cdot 14}{2} = 105$. Boxes without it draw all three from those same $15$: $\\binom{15}{3} = \\frac{15 \\cdot 14 \\cdot 13}{6} = 455$. Each box is of exactly one kind, so there are $105 + 455 = 560$ ✓. (The choice $3360$ SKIPS THE DIVISION BY $3!$ ✗; $1120$ DIVIDES BY $3$ INSTEAD OF $3! = 6$ ✗; $48$ MULTIPLIES $16 \\cdot 3$ ✗.)',
    },
    {
      q: 'For a positive integer $n$, $\\binom{n}{3} = 286$. What is $n$?',
      choices: ['$12$', '$1716$', '$13$', '$14$'],
      answer: 2,
      solution:
        'Route one, clear the denominator. $\\frac{n(n-1)(n-2)}{6} = 286$ gives $n(n-1)(n-2) = 1716$. Three consecutive integers with that product sit near $\\sqrt[3]{1716} \\approx 12$, and $13 \\cdot 12 \\cdot 11 = 1716$ exactly, so $n = 13$ ✓. Route two, build a table with the splitting rule. A group of three either uses a fixed object or not, so $\\binom{n}{3} = \\binom{n-1}{2} + \\binom{n-1}{3}$. Starting from $\\binom{10}{3} = 120$ and $\\binom{10}{2} = 45$: $\\binom{11}{3} = 165$; then $\\binom{11}{2} = 55$ gives $\\binom{12}{3} = 220$; then $\\binom{12}{2} = 66$ gives $\\binom{13}{3} = 286$ ✓. Each step adds objects, so the counts only rise and $n = 13$ is the only answer ✓. (The choice $12$ STOPS ONE SHORT, since $\\binom{12}{3} = 220$ ✗; $14$ GOES ONE TOO FAR, since $\\binom{14}{3} = 364$ ✗; $1716$ REPORTS THE PRODUCT $n(n-1)(n-2)$ INSTEAD OF $n$ ✗.)',
    },
  ],
  // slot 3 — the edge cases: choose none, choose one, choose everything
  [
    {
      q: 'What is $\\binom{15}{0} + \\binom{15}{1} + \\binom{15}{15}$?',
      choices: ['$16$', '$31$', '$17$', '$15$'],
      answer: 2,
      solution:
        'Route one, run the formula. $\\binom{15}{0} = \\frac{15!}{0!\\,15!} = 1$, since $0! = 1$; $\\binom{15}{1} = \\frac{15!}{1!\\,14!} = 15$; $\\binom{15}{15} = \\frac{15!}{15!\\,0!} = 1$. The sum is $1 + 15 + 1 = 17$ ✓. Route two, list the selections. From $15$ objects there is exactly one way to take none — leave them all alone; there are $15$ ways to take one, one for each object; and exactly one way to take all fifteen. Counting what has been listed gives $1 + 15 + 1 = 17$ ✓. (The choice $16$ TAKES $\\binom{15}{0}$ TO BE $0$, as if there were no way to choose nothing ✗; $31$ TAKES $\\binom{15}{15}$ TO BE $15$ ✗; $15$ ZEROES BOTH END TERMS, keeping only the middle one ✗.)',
    },
    {
      q: 'A gardener will plant one bed. She may plant it with none of her $12$ different kinds of seed, or with exactly one kind, or with all twelve kinds. No kind is used twice, and two beds count as the same when they hold the same kinds. How many different beds is that altogether?',
      choices: ['$14$', '$13$', '$12$', '$25$'],
      answer: 0,
      solution:
        'Route one, count the three cases by hand. There is exactly one empty bed. There are $12$ one-kind beds, one for each kind of seed. There is exactly one bed holding all twelve kinds, since the kinds are not ordered. That gives $1 + 12 + 1 = 14$ ✓. Route two, use the edge-case values. The three cases are counted by $\\binom{12}{0}$, $\\binom{12}{1}$ and $\\binom{12}{12}$. The formula gives $\\binom{12}{0} = \\frac{12!}{0!\\,12!} = 1$, $\\binom{12}{1} = \\frac{12!}{1!\\,11!} = 12$ and $\\binom{12}{12} = \\frac{12!}{12!\\,0!} = 1$, and the three cases share no bed, so the total is $14$ ✓. (The choice $13$ FORGETS THE EMPTY BED ✗; $12$ COUNTS ONLY THE ONE-KIND BEDS, dropping both ends ✗; $25$ COUNTS THE ALL-TWELVE BED ONCE FOR EACH KIND, adding $12$ where $1$ belongs ✗.)',
    },
    {
      q: 'For a positive integer $n$, $\\binom{n}{0} + \\binom{n}{1} + \\binom{n}{n} = 25$. What is $n$?',
      choices: ['$25$', '$24$', '$12$', '$23$'],
      answer: 3,
      solution:
        'Route one, replace the edge terms. For every positive integer $n$ there is one way to choose nothing and one way to choose everything, so $\\binom{n}{0} = 1$ and $\\binom{n}{n} = 1$, while $\\binom{n}{1} = n$. The equation becomes $1 + n + 1 = 25$, so $n = 23$. Check: $1 + 23 + 1 = 25$ ✓. Route two, grow the pool. The three terms count the empty selection, the single-object selections and the whole pool. Adding one object to the pool leaves the first and third counts at $1$ and raises the middle count by exactly $1$, so the total climbs by $1$ per object. At a pool of $20$ the total is $22$; three more objects bring it to $25$, so the pool holds $23$ objects ✓. (The choice $25$ IGNORES BOTH EDGE TERMS, solving $n = 25$ ✗; $24$ DROPS ONE OF THE TWO $1$s, solving $n + 1 = 25$ ✗; $12$ READS $\\binom{n}{n}$ AS $n$, solving $1 + n + n = 25$ ✗.)',
    },
  ],
  // slot 4 — the handshake shortcut, then two pairs in a row
  [
    {
      q: 'A shop has $19$ different bookmarks and gives $2$ of them to a customer. The two are handed over together, with no first or second, and no bookmark is given twice. How many different pairs could the customer receive?',
      choices: ['$171$', '$342$', '$190$', '$38$'],
      answer: 0,
      solution:
        'Route one, cancel. The pair is a set, so the count is $\\binom{19}{2} = \\frac{19 \\cdot 18}{2} = 19 \\cdot 9 = 171$ ✓. Route two, add one bookmark at a time. A shop with $18$ bookmarks offers $\\frac{18 \\cdot 17}{2} = 153$ pairs. A nineteenth bookmark makes one new pair with each of the $18$ already in stock and takes none away, so the count becomes $153 + 18 = 171$ ✓. (The choice $342$ TREATS THE PAIR AS ORDERED, leaving $19 \\cdot 18$ undivided ✗; $190$ USES $\\frac{19 \\cdot 20}{2}$, pairing a bookmark with itself ✗; $38$ MULTIPLIES $19 \\cdot 2$ ✗.)',
    },
    {
      q: 'A tiler will use exactly $2$ of the $23$ different colors a shop sells. The two colors play the same role in the pattern, so neither is first, and no color is used twice. How many color choices are possible?',
      choices: ['$506$', '$46$', '$253$', '$276$'],
      answer: 2,
      solution:
        'Route one, cancel. $\\binom{23}{2} = \\frac{23 \\cdot 22}{2} = 23 \\cdot 11 = 253$ ✓. Route two, count each choice by its later color. Number the colors $1$ through $23$ and name every choice by the higher number in it: color $2$ is the higher one in $1$ choice, color $3$ in $2$ choices, and so on to color $23$ in $22$ choices. Adding $1 + 2 + \\cdots + 22$ in pairs — $1$ with $22$, $2$ with $21$, and so on — gives $11$ sums of $23$, or $11 \\cdot 23 = 253$ ✓. (The choice $506$ COUNTS EACH CHOICE TWICE, once in each order ✗; $276$ USES $\\frac{23 \\cdot 24}{2}$, letting a color be paired with itself ✗; $46$ MULTIPLIES $23 \\cdot 2$ ✗.)',
    },
    {
      q: 'A teacher has $14$ different stickers. She gives $2$ of them to Ana, then gives $2$ of the remaining $12$ to Ben. Neither pair is ordered, and the two children are different, so handing Ana’s pair to Ben instead counts as a different outcome. In how many ways can this be done?',
      choices: ['$157$', '$6006$', '$3003$', '$8281$'],
      answer: 1,
      solution:
        'Route one, take the two gifts in turn. Ana’s pair can be chosen in $\\binom{14}{2} = \\frac{14 \\cdot 13}{2} = 91$ ways. Whichever two she receives, $12$ stickers remain, so Ben’s pair can be chosen in $\\binom{12}{2} = \\frac{12 \\cdot 11}{2} = 66$ ways. The second count does not depend on which pair Ana got, so the answer is $91 \\cdot 66 = 6006$ ✓. Route two, pick the four stickers first, then split them. Choose the $4$ stickers that leave the teacher’s hands: $\\binom{14}{4} = \\frac{14 \\cdot 13 \\cdot 12 \\cdot 11}{24} = 1001$ ways. Now decide which $2$ of those four go to Ana, $\\binom{4}{2} = 6$ ways, with Ben receiving the other two. Every outcome arises exactly once this way, so the answer is $1001 \\cdot 6 = 6006$ ✓. (The choice $3003$ DIVIDES BY $2$ AS IF THE TWO PAIRS WERE INTERCHANGEABLE, though Ana and Ben are different people ✗; $8281$ DRAWS BEN’S PAIR FROM ALL $14$ AGAIN, computing $91^2$ and letting one sticker be given twice ✗; $157$ ADDS THE TWO STAGES, $91 + 66$, instead of multiplying ✗.)',
    },
  ],
  // slot 5 — four factors on top, forwards and backwards
  [
    {
      q: 'What is $\\binom{14}{4}$?',
      choices: ['$24024$', '$6006$', '$1001$', '$2002$'],
      answer: 2,
      solution:
        'Route one, cancel. Four factors on top over $4! = 24$: $\\frac{14 \\cdot 13 \\cdot 12 \\cdot 11}{24}$. Since $14 \\cdot 12 = 168$ and $168 \\div 24 = 7$, what survives is $7 \\cdot 13 \\cdot 11 = 1001$ ✓. Route two, split on one object. A group of four either uses a fixed object or leaves it out. Using it, the other three come from the remaining $13$: $\\binom{13}{3} = \\frac{13 \\cdot 12 \\cdot 11}{6} = 286$. Leaving it out, all four come from those $13$: $\\binom{13}{4} = \\frac{13 \\cdot 12 \\cdot 11 \\cdot 10}{24} = 715$. The two cases share no group, so the total is $286 + 715 = 1001$ ✓. (The choice $24024$ SKIPS THE DIVISION BY $4!$ ✗; $6006$ DIVIDES BY $4$ INSTEAD OF $4! = 24$ ✗; $2002$ PUTS FIVE FACTORS ON TOP, computing $\\binom{14}{5}$ ✗.)',
    },
    {
      q: 'A chef picks $4$ of the $15$ different vegetables in the pantry for a soup. The four go into the pot together in no order, and no vegetable is used twice. How many choices are possible?',
      choices: ['$1365$', '$32760$', '$5460$', '$3003$'],
      answer: 0,
      solution:
        'Route one, cancel. $\\binom{15}{4} = \\frac{15 \\cdot 14 \\cdot 13 \\cdot 12}{24}$. Since $14 \\cdot 12 = 168$ and $168 \\div 24 = 7$, the value is $7 \\cdot 15 \\cdot 13 = 1365$ ✓. Route two, split on the carrot. Soups that use the carrot need $3$ more from the other $14$ vegetables: $\\binom{14}{3} = \\frac{14 \\cdot 13 \\cdot 12}{6} = 364$. Soups that skip it draw all four from those $14$: $\\binom{14}{4} = \\frac{14 \\cdot 13 \\cdot 12 \\cdot 11}{24} = 1001$. Every soup falls into exactly one case, so there are $364 + 1001 = 1365$ ✓. (The choice $32760$ SKIPS THE DIVISION BY $4!$ ✗; $5460$ DIVIDES BY $3! = 6$ INSTEAD OF $4! = 24$ ✗; $3003$ PUTS FIVE FACTORS ON TOP, computing $\\binom{15}{5}$ ✗.)',
    },
    {
      q: 'For a positive integer $n$, $\\binom{n}{4} = 3060$. What is $n$?',
      choices: ['$16$', '$17$', '$19$', '$18$'],
      answer: 3,
      solution:
        'Route one, clear the denominator. $\\frac{n(n-1)(n-2)(n-3)}{24} = 3060$ gives $n(n-1)(n-2)(n-3) = 73440$. Four consecutive integers with that product sit near $\\sqrt[4]{73440}$, which lies between $16$ and $17$ because $16^4 = 65536$ and $17^4 = 83521$. Trying the block just above: $18 \\cdot 17 = 306$ and $16 \\cdot 15 = 240$, and $306 \\cdot 240 = 73440$ exactly, so $n = 18$ ✓. Route two, climb with the splitting rule. A group of four either uses a fixed object or not, so $\\binom{n}{4} = \\binom{n-1}{3} + \\binom{n-1}{4}$. From $\\binom{15}{4} = 1365$ and $\\binom{15}{3} = 455$ comes $\\binom{16}{4} = 1820$; with $\\binom{16}{3} = 560$ that gives $\\binom{17}{4} = 2380$; with $\\binom{17}{3} = 680$ that gives $\\binom{18}{4} = 3060$ ✓. The counts only rise, so $n = 18$ is the only answer ✓. (The choice $17$ STOPS ONE SHORT, since $\\binom{17}{4} = 2380$ ✗; $19$ GOES ONE TOO FAR, since $\\binom{19}{4} = 3876$ ✗; $16$ ROUNDS THE ESTIMATE $\\sqrt[4]{73440} \\approx 16.5$ DOWN AND STOPS THERE, though $\\binom{16}{4} = 1820$ ✗.)',
    },
  ],
  // slot 6 — larger k, where cancelling pays for itself
  [
    {
      q: 'What is $\\binom{13}{6}$?',
      choices: ['$1235520$', '$205920$', '$3003$', '$1716$'],
      answer: 3,
      solution:
        'Route one, cancel. Six factors on top over $6! = 720$: $\\frac{13 \\cdot 12 \\cdot 11 \\cdot 10 \\cdot 9 \\cdot 8}{6 \\cdot 5 \\cdot 4 \\cdot 3 \\cdot 2 \\cdot 1}$. Cancel $12$ against $6 \\cdot 2$, $10$ against $5$, $9$ against $3$ and $8$ against $4$; the denominator is used up and the leftovers on top are $13 \\cdot 11 \\cdot 3 \\cdot 2 \\cdot 2 = 13 \\cdot 11 \\cdot 12 = 1716$ ✓. Route two, split on one object. A group of six either uses a fixed object or not, so $\\binom{13}{6} = \\binom{12}{5} + \\binom{12}{6}$. Here $\\binom{12}{5} = \\frac{12 \\cdot 11 \\cdot 10 \\cdot 9 \\cdot 8}{120} = 792$ and $\\binom{12}{6} = \\frac{12 \\cdot 11 \\cdot 10 \\cdot 9 \\cdot 8 \\cdot 7}{720} = 924$, so the total is $792 + 924 = 1716$ ✓. (The choice $1235520$ SKIPS THE DIVISION BY $6!$ ✗; $205920$ DIVIDES BY $6$ INSTEAD OF $6! = 720$ ✗; $3003$ STARTS THE TOP AT $14$ INSTEAD OF $13$, computing $\\binom{14}{6}$ ✗.)',
    },
    {
      q: 'A lock opens when exactly $5$ of its $13$ different buttons are pressed at the same time. The five are pressed together, so their order does not matter, and no button is pressed twice. How many different sets of five buttons open a lock of this kind?',
      choices: ['$154440$', '$1287$', '$30888$', '$65$'],
      answer: 1,
      solution:
        'Route one, cancel. The five buttons form a set, so the count is $\\binom{13}{5} = \\frac{13 \\cdot 12 \\cdot 11 \\cdot 10 \\cdot 9}{120}$. The $12$ and the $10$ multiply to $120$ and clear the denominator, leaving $13 \\cdot 11 \\cdot 9 = 1287$ ✓. Route two, split on one button. Sets that press the top-left button need $4$ more from the other $12$: $\\binom{12}{4} = \\frac{12 \\cdot 11 \\cdot 10 \\cdot 9}{24} = 495$. Sets that leave it alone take all five from those $12$: $\\binom{12}{5} = \\frac{12 \\cdot 11 \\cdot 10 \\cdot 9 \\cdot 8}{120} = 792$. Each set is of exactly one kind, so there are $495 + 792 = 1287$ ✓. (The choice $154440$ SKIPS THE DIVISION BY $5!$ ✗; $30888$ DIVIDES BY $5$ INSTEAD OF $5! = 120$ ✗; $65$ MULTIPLIES $13 \\cdot 5$ ✗.)',
    },
    {
      q: 'A hiking club keeps $n$ different trails, and a hiker will walk $5$ of them this season. The five form a set with no order, and no trail is walked twice. There are exactly $792$ possible sets of five. What is $n$?',
      choices: ['$12$', '$11$', '$13$', '$95040$'],
      answer: 0,
      solution:
        'Route one, clear the denominator. $\\binom{n}{5} = 792$ gives $n(n-1)(n-2)(n-3)(n-4) = 792 \\cdot 120 = 95040$. Five consecutive integers with that product sit near $12$, and $12 \\cdot 11 \\cdot 10 \\cdot 9 \\cdot 8 = 95040$ exactly, so $n = 12$ ✓. Route two, climb with the splitting rule. A set of five either uses a fixed trail or not, so $\\binom{n}{5} = \\binom{n-1}{4} + \\binom{n-1}{5}$. From $\\binom{10}{4} = 210$ and $\\binom{10}{5} = 252$ comes $\\binom{11}{5} = 462$; then $\\binom{11}{4} = 330$ gives $\\binom{12}{5} = 462 + 330 = 792$ ✓. Adding a trail can only add sets, so $n = 12$ is the only answer ✓. (The choice $11$ STOPS ONE SHORT, since $\\binom{11}{5} = 462$ ✗; $13$ GOES ONE TOO FAR, since $\\binom{13}{5} = 1287$ ✗; $95040$ REPORTS THE PRODUCT $n(n-1)(n-2)(n-3)(n-4)$ INSTEAD OF $n$ ✗.)',
    },
  ],
  // slot 7 — solving for n, and counting how many n work
  [
    {
      q: 'For which value of $n$ is $\\binom{n}{2} = 120$?',
      choices: ['$16$', '$15$', '$60$', '$240$'],
      answer: 0,
      solution:
        'Route one, clear the denominator. $\\frac{n(n-1)}{2} = 120$ gives $n(n-1) = 240$. Two consecutive integers with product $240$ are $16$ and $15$, so $n = 16$. Check: $\\frac{16 \\cdot 15}{2} = 120$ ✓. Route two, add objects one at a time. Each new object forms a pair with every object already present, so a pool of $n$ objects has $1 + 2 + \\cdots + (n-1)$ pairs. Adding terms until the running total hits $120$: after $10$ terms it is $55$, after $13$ it is $91$, after $14$ it is $105$, and after $15$ it is $120$ ✓. Fifteen terms means $n - 1 = 15$, so $n = 16$ ✓. (The choice $15$ REPORTS $n - 1$, the number of partners rather than the pool size ✗; $240$ REPORTS THE PRODUCT $n(n-1)$ INSTEAD OF $n$ ✗; $60$ HALVES $120$ A SECOND TIME, dividing by $2$ once too often ✗.)',
    },
    {
      q: 'A shop sells sample packs, each holding $2$ of its $n$ different teas, with neither tea first and no tea used twice in one pack. There are exactly $105$ possible packs. How many teas does the shop sell?',
      choices: ['$14$', '$210$', '$15$', '$11$'],
      answer: 2,
      solution:
        'Route one, clear the denominator. Each pack is a set of two, so $\\frac{n(n-1)}{2} = 105$ and $n(n-1) = 210$. Two consecutive integers with product $210$ are $15$ and $14$, so $n = 15$. Check: $\\frac{15 \\cdot 14}{2} = 105$ ✓. Route two, stock one tea at a time. Each new tea makes a pack with every tea already stocked, so the pack count climbs $1, 3, 6, 10, \\ldots$, adding $n - 1$ when the $n$th tea arrives. At $13$ teas the count is $78$; the fourteenth tea adds $13$ for $91$; the fifteenth adds $14$ for $105$ ✓. So the shop sells $15$ teas ✓. (The choice $14$ SOLVES $\\frac{n(n+1)}{2} = 105$, which lets a tea be packed with itself ✗; $210$ REPORTS THE PRODUCT $n(n-1)$ INSTEAD OF $n$ ✗; $11$ FORGETS THE DIVISION BY $2$ AND SOLVES $n(n-1) = 105$, which no two consecutive integers satisfy, since $11 \\cdot 10 = 110$ is the nearest ✗.)',
    },
    {
      q: 'For how many integers $n$ with $n \\ge 2$ is $\\binom{n}{2} \\le 200$?',
      choices: ['$20$', '$19$', '$21$', '$18$'],
      answer: 1,
      solution:
        'Route one, solve the inequality. $\\frac{n(n-1)}{2} \\le 200$ means $n(n-1) \\le 400$. At $n = 20$, $20 \\cdot 19 = 380 \\le 400$; at $n = 21$, $21 \\cdot 20 = 420 > 400$. The product $n(n-1)$ grows with $n$, so the integers that work are $n = 2, 3, \\ldots, 20$, and there are $20 - 2 + 1 = 19$ of them ✓. Route two, walk the counts upward. Going from $n - 1$ objects to $n$ objects adds $n - 1$ new pairs, so $\\binom{n}{2}$ never falls: $\\binom{18}{2} = 153$, $\\binom{19}{2} = 171$, $\\binom{20}{2} = 190$, $\\binom{21}{2} = 210$. The last count at or below $200$ belongs to $n = 20$, and every value from $n = 2$ up to $n = 20$ is below it, which is $19$ values in all ✓. (The choice $20$ REPORTS THE LARGEST $n$ INSTEAD OF HOW MANY VALUES THERE ARE ✗; $21$ COUNTS $n = 0$ AND $n = 1$ TOO, though the problem starts at $n = 2$ ✗; $18$ STOPS AT $n = 19$, missing $\\binom{20}{2} = 190$, which is still at most $200$ ✗.)',
    },
  ],
  // slot 8 — two pools chosen at once
  [
    {
      q: 'A science fair will display $2$ of the $9$ posters and $3$ of the $5$ models that were entered. All the entries are different, nothing displayed is ranked or ordered, and nothing is displayed twice. How many different displays are possible?',
      choices: ['$46$', '$2002$', '$720$', '$360$'],
      answer: 3,
      solution:
        'Route one, choose from each pool and multiply. The posters give $\\binom{9}{2} = \\frac{9 \\cdot 8}{2} = 36$ choices and the models give $\\binom{5}{3} = \\frac{5 \\cdot 4 \\cdot 3}{6} = 10$ choices. The two decisions do not affect each other, so there are $36 \\cdot 10 = 360$ displays ✓. Route two, split on one poster. Displays that use a fixed poster need $1$ more poster from the other $8$, which is $8$ ways, times $10$ ways for the models: $80$ displays. Displays that skip it take both posters from those $8$, $\\binom{8}{2} = \\frac{8 \\cdot 7}{2} = 28$ ways, again times $10$: $280$ displays. Every display is of exactly one kind, so there are $80 + 280 = 360$ ✓. (The choice $46$ ADDS $36 + 10$ instead of multiplying ✗; $2002$ IGNORES THE TWO-AND-THREE RULE, taking any $5$ of the $14$ entries, which is $\\binom{14}{5}$ ✗; $720$ TREATS THE TWO POSTERS AS ORDERED, using $9 \\cdot 8 = 72$ ✗.)',
    },
    {
      q: 'A playlist takes $3$ of the $6$ new songs and $2$ of the $7$ old songs a station holds. All the songs are different, none is used twice, and the playing order is decided later, so only the set of songs matters now. How many different playlists are possible?',
      choices: ['$41$', '$420$', '$525$', '$840$'],
      answer: 1,
      solution:
        'Route one, choose from each pool and multiply. The new songs give $\\binom{6}{3} = \\frac{6 \\cdot 5 \\cdot 4}{6} = 20$ choices and the old songs give $\\binom{7}{2} = \\frac{7 \\cdot 6}{2} = 21$ choices, so there are $20 \\cdot 21 = 420$ playlists ✓. Route two, split on the newest song. Playlists that use it need $2$ more of the other $5$ new songs, $\\binom{5}{2} = 10$ ways, times $21$ for the old songs: $210$. Playlists that skip it take all three new songs from those $5$, $\\binom{5}{3} = 10$ ways, again times $21$: $210$. Adding the two cases gives $210 + 210 = 420$ ✓. (The choice $41$ ADDS $20 + 21$ instead of multiplying ✗; $525$ SWAPS THE TWO COUNTS, taking $2$ new songs and $3$ old ones, which is $15 \\cdot 35$ ✗; $840$ TREATS THE TWO OLD SONGS AS ORDERED, using $7 \\cdot 6 = 42$ ✗.)',
    },
    {
      q: 'A show picks $3$ of its $8$ different birds and $2$ of its $n$ different rabbits. None of the animals is ranked and none is picked twice, and there are exactly $840$ possible groups. What is $n$?',
      choices: ['$6$', '$7$', '$15$', '$5$'],
      answer: 0,
      solution:
        'Route one, divide out the part you know. The birds contribute $\\binom{8}{3} = \\frac{8 \\cdot 7 \\cdot 6}{6} = 56$ choices, so $56 \\cdot \\binom{n}{2} = 840$ and $\\binom{n}{2} = 15$. Then $\\frac{n(n-1)}{2} = 15$ gives $n(n-1) = 30 = 6 \\cdot 5$, so $n = 6$ ✓. Route two, try values and watch the total climb. With $n$ rabbits the group count is $56 \\binom{n}{2}$, which rises as $n$ rises because a new rabbit only adds pairs: $n = 4$ gives $56 \\cdot 6 = 336$; $n = 5$ gives $56 \\cdot 10 = 560$; $n = 6$ gives $56 \\cdot 15 = 840$ ✓; $n = 7$ gives $56 \\cdot 21 = 1176$, already past the target. So $n = 6$ is the only answer ✓. (The choice $7$ OVERSHOOTS, giving $1176$ groups ✗; $5$ FALLS SHORT, giving $560$ groups ✗; $15$ REPORTS $\\binom{n}{2}$ INSTEAD OF $n$ ✗.)',
    },
  ],
  // slot 9 — a required member, exactly one or at least one
  [
    {
      q: 'A band has $12$ musicians, $4$ of whom are drummers. A group of $5$ is chosen for a recording session, with no roles inside the group, and it must contain exactly one drummer. How many groups are possible?',
      choices: ['$70$', '$792$', '$280$', '$224$'],
      answer: 2,
      solution:
        'Route one, choose the drummer and then the rest. There are $\\binom{4}{1} = 4$ ways to say which drummer is in, and then the other four seats are filled from the $8$ musicians who play something else: $\\binom{8}{4} = \\frac{8 \\cdot 7 \\cdot 6 \\cdot 5}{24} = 70$ ways. Multiplying, $4 \\cdot 70 = 280$ ✓. Route two, throw out every other case. All groups of five number $\\binom{12}{5} = \\frac{12 \\cdot 11 \\cdot 10 \\cdot 9 \\cdot 8}{120} = 792$. Groups with no drummer: $\\binom{8}{5} = 56$. With two drummers: $\\binom{4}{2}\\binom{8}{3} = 6 \\cdot 56 = 336$. With three: $\\binom{4}{3}\\binom{8}{2} = 4 \\cdot 28 = 112$. With all four: $\\binom{4}{4}\\binom{8}{1} = 8$. Those unwanted groups total $56 + 336 + 112 + 8 = 512$, so the groups left are $792 - 512 = 280$ ✓. (The choice $70$ FORGETS THAT ANY OF THE FOUR DRUMMERS COULD BE THE ONE ✗; $792$ IGNORES THE DRUMMER RULE, counting every $5$ of the $12$ ✗; $224$ FILLS ONLY THREE MORE SEATS, computing $4 \\cdot \\binom{8}{3} = 4 \\cdot 56$ ✗.)',
    },
    {
      q: 'Ten different seedlings sit on a table, exactly $2$ of them tomato seedlings. A gardener plants $3$ of the ten in one bed, with no order inside the bed, and the bed must contain exactly one tomato seedling. How many choices are possible?',
      choices: ['$56$', '$28$', '$120$', '$72$'],
      answer: 0,
      solution:
        'Route one, choose the tomato and then the rest. Either tomato seedling can be the one, $\\binom{2}{1} = 2$ ways, and the other two plants come from the $8$ seedlings that are not tomatoes: $\\binom{8}{2} = \\frac{8 \\cdot 7}{2} = 28$ ways. Multiplying, $2 \\cdot 28 = 56$ ✓. Route two, remove the beds that break the rule. All beds of three number $\\binom{10}{3} = \\frac{10 \\cdot 9 \\cdot 8}{6} = 120$. Beds with no tomato draw all three from the other $8$: $\\binom{8}{3} = \\frac{8 \\cdot 7 \\cdot 6}{6} = 56$. Beds with both tomatoes need one more from those $8$: $8$ beds. What is left is $120 - 56 - 8 = 56$ ✓. (The choice $28$ FORGETS THAT EITHER TOMATO SEEDLING COULD BE THE ONE ✗; $120$ IGNORES THE TOMATO RULE, counting every $3$ of the $10$ ✗; $72$ DRAWS THE OTHER TWO FROM ALL $9$ REMAINING SEEDLINGS, computing $2 \\cdot \\binom{9}{2}$ and letting a second tomato slip in ✗.)',
    },
    {
      q: 'A club has $12$ members, $3$ of whom are lifeguards. A team of $4$ is chosen with no roles on it. How many of the possible teams contain at least one lifeguard?',
      choices: ['$126$', '$495$', '$252$', '$369$'],
      answer: 3,
      solution:
        'Route one, count the complement. Teams of four number $\\binom{12}{4} = \\frac{12 \\cdot 11 \\cdot 10 \\cdot 9}{24} = 495$. A team with no lifeguard takes all four from the $9$ members who are not lifeguards: $\\binom{9}{4} = \\frac{9 \\cdot 8 \\cdot 7 \\cdot 6}{24} = 126$. Every other team carries at least one lifeguard, so the answer is $495 - 126 = 369$ ✓. Route two, add the cases up. Exactly one lifeguard: $\\binom{3}{1}\\binom{9}{3} = 3 \\cdot 84 = 252$. Exactly two: $\\binom{3}{2}\\binom{9}{2} = 3 \\cdot 36 = 108$. All three: $\\binom{3}{3}\\binom{9}{1} = 1 \\cdot 9 = 9$. No team is counted twice, so the total is $252 + 108 + 9 = 369$ ✓. (The choice $126$ REPORTS THE TEAMS WITH NO LIFEGUARD, the complement rather than the answer ✗; $495$ COUNTS EVERY TEAM, ignoring the rule ✗; $252$ KEEPS ONLY THE TEAMS WITH EXACTLY ONE LIFEGUARD ✗.)',
    },
  ],
  // slot 10 — a collinear group, and other places where many pairs name one thing
  [
    {
      q: 'Ten points are marked on a page. Exactly $4$ of them lie on one straight line, and no other three of the ten points are collinear. How many triangles have all three vertices among the ten points?',
      choices: ['$120$', '$114$', '$119$', '$116$'],
      answer: 3,
      solution:
        'Route one, subtract the flat triples. Any $3$ of the $10$ points would give $\\binom{10}{3} = \\frac{10 \\cdot 9 \\cdot 8}{6} = 120$ choices, but three points on one straight line form no triangle. The only such triples come from the $4$ collinear points, and there are $\\binom{4}{3} = 4$ of them, so the count is $120 - 4 = 116$ ✓. Route two, sort by how many vertices sit on the special line. None of the four: all three vertices come from the other $6$ points, $\\binom{6}{3} = 20$ triangles. Exactly one: $4$ ways there and $\\binom{6}{2} = 15$ ways for the rest, or $60$. Exactly two: $\\binom{4}{2} = 6$ ways there and $6$ ways for the last vertex, or $36$. All three is impossible, since those points are collinear. Altogether $20 + 60 + 36 = 116$ ✓. (The choice $120$ FORGETS THAT COLLINEAR TRIPLES ARE NOT TRIANGLES ✗; $114$ REMOVES THE $\\binom{4}{2} = 6$ PAIRS ON THE LINE, though it is triples that fail ✗; $119$ REMOVES ONLY ONE BAD TRIPLE, as if the four collinear points spoiled a single choice ✗.)',
    },
    {
      q: 'An airline serves $10$ different cities. For each pair of cities it runs one route joining them, with a single exception: the $4$ cities on one island are joined instead by one island route that serves all four together. Routes have no direction, and no other set of cities shares a route. How many routes does the airline run?',
      choices: ['$45$', '$40$', '$39$', '$46$'],
      answer: 1,
      solution:
        'Route one, start from the pairs and merge. Each pair of cities would call for its own route, and there are $\\binom{10}{2} = \\frac{10 \\cdot 9}{2} = 45$ pairs. Among the four island cities there are $\\binom{4}{2} = \\frac{4 \\cdot 3}{2} = 6$ pairs, and all six of those are served by the one island route rather than by six separate routes. Replacing those $6$ routes by $1$ leaves $45 - 6 + 1 = 40$ routes ✓. Route two, build the routes by type. There is the $1$ island route. Every other route joins two cities that are not both on the island. Routes joining two of the $6$ mainland cities: $\\binom{6}{2} = \\frac{6 \\cdot 5}{2} = 15$. Routes joining one of the $4$ island cities to one of the $6$ mainland cities: $4 \\cdot 6 = 24$. The three types share no route and cover every route, so the airline runs $1 + 15 + 24 = 40$ ✓. (The choice $45$ COUNTS EACH OF THE SIX ISLAND PAIRS AS ITS OWN ROUTE, ignoring the exception ✗; $39$ REMOVES THE SIX ISLAND PAIRS AND NEVER COUNTS THE ISLAND ROUTE ITSELF ✗; $46$ ADDS THE ISLAND ROUTE WITHOUT REMOVING THE SIX PAIR ROUTES IT REPLACES ✗.)',
    },
    {
      q: 'A page has $n$ marked points, exactly $5$ of them on one straight line and no other three of the points collinear. Exactly $354$ triangles have all three vertices among the marked points. What is $n$?',
      choices: ['$14$', '$13$', '$15$', '$364$'],
      answer: 0,
      solution:
        'Route one, undo the subtraction. The only triples that make no triangle are the $\\binom{5}{3} = 10$ triples on the special line, so $\\binom{n}{3} - 10 = 354$ and $\\binom{n}{3} = 364$. Clearing the denominator, $n(n-1)(n-2) = 2184$; three consecutive integers near $\\sqrt[3]{2184} \\approx 13$ give $14 \\cdot 13 \\cdot 12 = 2184$, so $n = 14$ ✓. Route two, build the triangle count from scratch and climb. Sorting by how many vertices lie on the special line, a page with $n$ points has $\\binom{n-5}{3} + 5\\binom{n-5}{2} + 10(n-5)$ triangles. At $n = 13$ that is $\\binom{8}{3} + 5\\binom{8}{2} + 10 \\cdot 8 = 56 + 140 + 80 = 276$. At $n = 14$ it is $\\binom{9}{3} + 5\\binom{9}{2} + 10 \\cdot 9 = 84 + 180 + 90 = 354$ ✓. Adding a point only adds triangles, so $n = 14$ is the only answer ✓. (The choice $13$ FALLS ONE SHORT, giving $276$ triangles ✗; $15$ GOES ONE TOO FAR, giving $\\binom{15}{3} - 10 = 445$ ✗; $364$ REPORTS $\\binom{n}{3}$ INSTEAD OF $n$ ✗.)',
    },
  ],
]

export default {
  book: 'intro-counting',
  number: 4,
  sections: {
    '4.3': s43,
  },
}
