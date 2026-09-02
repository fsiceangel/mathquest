// Counting & Probability chapter 1 — variations for section 1.5
// (Permutations). All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every stem settles its conventions: people, books, and letters are all
//    different, and every arrangement is a straight row, never a circle.
//  - Every keyed answer is reached twice along routes that share no steps:
//    slot-by-slot against a cancelled factorial ratio, a direct restricted
//    count against its complement, casework on one digit against casework on
//    another, or a block argument against a position count. Route two never
//    reuses route one’s number.
//  - Each distractor is one named mistake — forgetting the order inside a
//    block, letting a used letter be reused, subtracting only one end’s bad
//    cases — and the mistake is named in CAPS.

const s15 = [
  // slot 1 — arranging everything
  [
    {
      q: 'The seven letters of the word JUMPING, which are all different, are arranged in a row. How many different arrangements are there?',
      choices: ['$720$', '$2520$', '$5040$', '$49$'],
      answer: 2,
      solution:
        'Route one, fill the seven positions one at a time. The left position can hold any of the $7$ letters, the next any of the remaining $6$, then $5$, $4$, $3$, $2$, and finally the last letter is forced: $7 \\cdot 6 \\cdot 5 \\cdot 4 \\cdot 3 \\cdot 2 \\cdot 1 = 7! = 5040$ ✓. Route two, build up from a shorter word. The six letters UMPING can be arranged in $6! = 720$ ways, and each such arrangement has $7$ gaps (before the first letter, between neighbors, after the last) into which the J can be dropped, each gap giving a different seven-letter arrangement. That is $7 \\cdot 720 = 5040$ ✓. (The choice $720$ is $6!$, PINNING ONE LETTER IN PLACE instead of letting it move ✗; the choice $2520$ HALVES THE COUNT AS IF TWO LETTERS WERE IDENTICAL, but all seven are different ✗; the choice $49$ is $7^2$, MULTIPLYING THE NUMBER OF LETTERS BY ITSELF instead of by the shrinking pool ✗.)',
    },
    {
      q: 'Eight different paintings are to be hung in a row along a straight wall, one after another. In how many different orders can they be hung?',
      choices: ['$40{,}320$', '$5040$', '$64$', '$20{,}160$'],
      answer: 0,
      solution:
        'Route one, assign paintings to hooks. The leftmost hook takes any of the $8$ paintings, the next hook any of the $7$ still unhung, and so on down to the last hook, which takes the one painting left: $8 \\cdot 7 \\cdot 6 \\cdot 5 \\cdot 4 \\cdot 3 \\cdot 2 \\cdot 1 = 8! = 40{,}320$ ✓. Route two, assign hooks to paintings instead. Take the paintings in a fixed order, say by the year each was painted. The oldest painting picks any of the $8$ hooks, the next-oldest any of the $7$ hooks still empty, and so on; the youngest painting gets whatever hook remains. Every order along the wall arises from exactly one such sequence of picks, so the count is again $8 \\cdot 7 \\cdots 1 = 40{,}320$ ✓. (The choice $5040$ is $7!$, LEAVING ONE PAINTING NAILED TO A FIXED HOOK ✗; the choice $64$ is $8^2$, GIVING EVERY HOOK EIGHT CHOICES BUT STOPPING AFTER TWO HOOKS ✗; the choice $20{,}160$ HALVES $8!$ AS IF TWO OF THE PAINTINGS WERE IDENTICAL ✗.)',
    },
    {
      q: 'A word is made of letters that are all different from one another. Arranging all of its letters in a row produces exactly $40{,}320$ different arrangements. How many letters does the word have?',
      choices: ['$7$', '$9$', '$5$', '$8$'],
      answer: 3,
      solution:
        'Route one, climb the factorials. A word of $n$ different letters has $n!$ arrangements, so we need $n! = 40{,}320$. Compute upward: $5! = 120$, $6! = 720$, $7! = 5040$, $8! = 40{,}320$. The first factorial to reach $40{,}320$ is $8!$, and factorials only grow, so $n = 8$ ✓. Route two, peel the factorial apart by division. Divide $40{,}320$ by $2$, then by $3$, then by $4$, and so on, since $n!$ must lose its factors in exactly this way: $40{,}320 \\div 2 = 20{,}160$, $\\div 3 = 6720$, $\\div 4 = 1680$, $\\div 5 = 336$, $\\div 6 = 56$, $\\div 7 = 8$, $\\div 8 = 1$. The divisions land on $1$ exactly after dividing by $8$, so the word has $8$ letters ✓. (The choice $7$ comes from MISREMEMBERING $7!$ AS $40{,}320$ when it is $5040$ ✗; the choice $9$ is ONE FACTOR TOO MANY, since $9! = 362{,}880$ ✗; the choice $5$ is COUNTING THE DIGITS OF $40{,}320$, which has nothing to do with the word ✗.)',
    },
  ],
  // slot 2 — arranging some of them
  [
    {
      q: 'A team of $11$ players chooses a captain, a co-captain, and a treasurer, three different people for three different roles. In how many ways can the three roles be filled?',
      choices: ['$990$', '$1331$', '$165$', '$39{,}916{,}800$'],
      answer: 0,
      solution:
        'Route one, fill the roles one at a time. The captain can be any of the $11$ players, the co-captain any of the $10$ who are not captain, and the treasurer any of the $9$ who hold neither role: $11 \\cdot 10 \\cdot 9 = 990$ ✓. Route two, line up the whole team and read off the front. Arrange all $11$ players in a row in $11! = 39{,}916{,}800$ ways, and declare the first three in line to be captain, co-captain, treasurer in that order. The other $8$ players can be shuffled in $8! = 40{,}320$ ways without changing who holds the roles, so each choice of officers is produced exactly $40{,}320$ times: $\\frac{39{,}916{,}800}{40{,}320} = 990$ ✓. (The choice $1331$ is $11^3$, LETTING ONE PLAYER HOLD ALL THREE ROLES ✗; the choice $165$ IGNORES WHICH PERSON GOT WHICH ROLE and counts only the trio ✗; the choice $39{,}916{,}800$ is $11!$, ARRANGING THE ENTIRE TEAM when only three roles exist ✗.)',
    },
    {
      q: 'A florist has $8$ different flowers and $3$ different vases, and puts exactly one flower in each vase. The remaining flowers are set aside. In how many ways can the three vases be filled?',
      choices: ['$512$', '$56$', '$336$', '$24$'],
      answer: 2,
      solution:
        'Route one, vase by vase. The first vase takes any of the $8$ flowers, the second any of the $7$ flowers still loose, and the third any of the remaining $6$: $8 \\cdot 7 \\cdot 6 = 336$ ✓. Route two, a factorial ratio. Placing $3$ of $8$ different objects in order is $\\frac{8!}{(8-3)!} = \\frac{8!}{5!}$, and $8! = 40{,}320$ while $5! = 120$, so the count is $\\frac{40{,}320}{120} = 336$ ✓. (The choice $512$ is $8^3$, PUTTING THE SAME FLOWER IN SEVERAL VASES ✗; the choice $56$ IGNORES WHICH VASE EACH FLOWER WENT INTO, though the vases are different ✗; the choice $24$ is $8 \\cdot 3$, MULTIPLYING THE TWO NUMBERS IN THE STEM instead of counting stages ✗.)',
    },
    {
      q: 'A club fills the offices of president, vice president, and treasurer with three different members. There are exactly $1320$ ways to do this. How many members does the club have?',
      choices: ['$11$', '$12$', '$440$', '$10$'],
      answer: 1,
      solution:
        'Route one, test consecutive products. With $n$ members the offices can be filled in $n(n-1)(n-2)$ ways, a product of three consecutive integers. Try them: $10 \\cdot 9 \\cdot 8 = 720$, too small; $11 \\cdot 10 \\cdot 9 = 990$, still too small; $12 \\cdot 11 \\cdot 10 = 1320$, a match. Larger $n$ only gives larger products, so $n = 12$ ✓. Route two, factor the number. $1320 = 2^3 \\cdot 3 \\cdot 5 \\cdot 11$. The prime $11$ must sit inside one of the three consecutive factors, and the other two factors must multiply to $\\frac{1320}{11} = 120 = 10 \\cdot 12$. The consecutive triple is therefore $10, 11, 12$, whose largest member is the number of members: $n = 12$ ✓. (The choice $11$ is TAKING THE MIDDLE FACTOR, or the largest prime factor, instead of the largest factor ✗; the choice $440$ is DIVIDING $1320$ BY THE NUMBER OF OFFICES, as though the count were $3n$ ✗; the choice $10$ is TAKING THE SMALLEST FACTOR of the triple, which is the pool left for the treasurer ✗.)',
    },
  ],
  // slot 3 — factorial ratios
  [
    {
      q: 'What is the value of $\\frac{11!}{9!}$?',
      choices: ['$990$', '$110$', '$99$', '$11$'],
      answer: 1,
      solution:
        'Route one, cancel the common tail. Since $11! = 11 \\cdot 10 \\cdot 9!$, the $9!$ in the numerator and denominator cancel, leaving $11 \\cdot 10 = 110$ ✓. Route two, compute both factorials and divide. $9! = 362{,}880$ and $11! = 39{,}916{,}800$, so the quotient is $\\frac{39{,}916{,}800}{362{,}880} = 110$ ✓. (The choice $990$ is $11 \\cdot 10 \\cdot 9$, ONE FACTOR TOO MANY, since $9$ is part of $9!$ and is cancelled ✗; the choice $99$ is $11 \\cdot 9$, MULTIPLYING THE TWO NUMBERS THAT APPEAR instead of the ones left after cancelling ✗; the choice $11$ STOPS AFTER A SINGLE FACTOR ✗.)',
    },
    {
      q: 'What is the value of $\\frac{12!}{10! \\cdot 2!}$?',
      choices: ['$132$', '$1320$', '$33$', '$66$'],
      answer: 3,
      solution:
        'Route one, cancel and then halve. Since $12! = 12 \\cdot 11 \\cdot 10!$, the $10!$ cancels and $\\frac{12!}{10!} = 132$; then $2! = 2$, so the value is $\\frac{132}{2} = 66$ ✓. Route two, compute every factorial. $12! = 479{,}001{,}600$, $10! = 3{,}628{,}800$, and $2! = 2$, so the denominator is $7{,}257{,}600$ and the quotient is $\\frac{479{,}001{,}600}{7{,}257{,}600} = 66$ ✓. (The choice $132$ FORGETS THE $2!$ IN THE DENOMINATOR ✗; the choice $1320$ is $12 \\cdot 11 \\cdot 10$, ONE FACTOR TOO MANY AND NO $2!$, since $10$ belongs to the cancelled $10!$ ✗; the choice $33$ DIVIDES BY $4$ AS IF $2!$ WERE $2^2$ ✗.)',
    },
    {
      q: 'What is the value of $\\frac{11!}{9!} + \\frac{10!}{8!}$?',
      choices: ['$21$', '$110$', '$200$', '$9900$'],
      answer: 2,
      solution:
        'Route one, cancel each ratio separately. $\\frac{11!}{9!} = 11 \\cdot 10 = 110$ and $\\frac{10!}{8!} = 10 \\cdot 9 = 90$, so the sum is $110 + 90 = 200$ ✓. Route two, put both fractions over the common denominator $9!$. Since $9! = 9 \\cdot 8!$, the second fraction is $\\frac{9 \\cdot 10!}{9!}$, so the sum is $\\frac{11! + 9 \\cdot 10!}{9!} = \\frac{10! \\cdot (11 + 9)}{9!} = \\frac{20 \\cdot 10!}{9!} = 20 \\cdot 10 = 200$ ✓. (The choice $21$ comes from CANCELLING EACH RATIO DOWN TO A SINGLE FACTOR, $11 + 10$ ✗; the choice $110$ DROPS THE SECOND TERM entirely ✗; the choice $9900$ MULTIPLIES THE TWO RATIOS instead of adding them ✗.)',
    },
  ],
  // slot 4 — strings with no repeats
  [
    {
      q: 'How many five-letter strings can be made from the nine letters A, B, C, D, E, F, G, H, I if no letter may be used more than once in a string?',
      choices: ['$59{,}049$', '$126$', '$362{,}880$', '$15{,}120$'],
      answer: 3,
      solution:
        'Route one, position by position. The first position takes any of the $9$ letters, the second any of the $8$ not yet used, then $7$, $6$, and $5$: $9 \\cdot 8 \\cdot 7 \\cdot 6 \\cdot 5 = 15{,}120$ ✓. Route two, a factorial ratio. Ordering $5$ of $9$ different objects is $\\frac{9!}{(9-5)!} = \\frac{9!}{4!}$, and $9! = 362{,}880$ while $4! = 24$, so the count is $\\frac{362{,}880}{24} = 15{,}120$ ✓. (The choice $59{,}049$ is $9^5$, LETTING A LETTER BE USED AGAIN ✗; the choice $126$ IGNORES THE ORDER OF THE FIVE LETTERS CHOSEN, though a string has an order ✗; the choice $362{,}880$ is $9!$, ARRANGING ALL NINE LETTERS when only five are used ✗.)',
    },
    {
      q: 'A playlist consists of $4$ songs chosen from $12$ different songs and placed in a definite order, no song repeated. How many different playlists are possible?',
      choices: ['$20{,}736$', '$11{,}880$', '$495$', '$48$'],
      answer: 1,
      solution:
        'Route one, track by track. The first track is any of the $12$ songs, the second any of the other $11$, the third any of the remaining $10$, and the fourth any of the remaining $9$: $12 \\cdot 11 \\cdot 10 \\cdot 9 = 11{,}880$ ✓. Route two, a factorial ratio. Ordering $4$ of $12$ different objects is $\\frac{12!}{(12-4)!} = \\frac{12!}{8!}$; with $12! = 479{,}001{,}600$ and $8! = 40{,}320$ this is $\\frac{479{,}001{,}600}{40{,}320} = 11{,}880$ ✓. (The choice $20{,}736$ is $12^4$, LETTING A SONG APPEAR MORE THAN ONCE ✗; the choice $495$ IGNORES THE ORDER OF THE FOUR SONGS, though a playlist is ordered ✗; the choice $48$ is $12 \\cdot 4$, MULTIPLYING THE TWO NUMBERS IN THE STEM ✗.)',
    },
    {
      q: 'Four-letter strings are made from the eight letters A, B, C, D, E, F, G, H with no letter used more than once in a string. How many of these strings contain the letter A?',
      choices: ['$840$', '$1680$', '$210$', '$420$'],
      answer: 0,
      solution:
        'Route one, place the A first. The A can occupy any of the $4$ positions. The other three positions are then filled from the $7$ remaining letters with no repeats: $7 \\cdot 6 \\cdot 5 = 210$. Total $4 \\cdot 210 = 840$ ✓. Route two, subtract the strings with no A. All no-repeat strings: $8 \\cdot 7 \\cdot 6 \\cdot 5 = 1680$. Strings using only the seven letters B through H: $7 \\cdot 6 \\cdot 5 \\cdot 4 = 840$. So the strings that do contain A number $1680 - 840 = 840$ ✓. (The choice $1680$ COUNTS EVERY STRING, with or without an A ✗; the choice $210$ FORCES THE A INTO THE FIRST POSITION only ✗; the choice $420$ LETS THE A SIT ONLY AT ONE OF THE TWO ENDS ✗.)',
    },
  ],
  // slot 5 — one person pinned, one person restricted
  [
    {
      q: 'Seven different people, including Lee and Max, sit in a straight row of $7$ chairs. Lee must sit in the rightmost chair, and Max must not sit in the leftmost chair. How many seatings are possible?',
      choices: ['$600$', '$720$', '$120$', '$4320$'],
      answer: 0,
      solution:
        'Route one, seat the restricted people first. Lee has $1$ choice, the rightmost chair. Max then has $5$ choices: any of the $6$ other chairs except the leftmost one. The remaining $5$ people fill the remaining $5$ chairs in $5! = 120$ ways. Total $1 \\cdot 5 \\cdot 120 = 600$ ✓. Route two, subtract the bad seatings. With Lee fixed on the right, the other six people can fill the other six chairs in $6! = 720$ ways. Among these, the seatings that break the rule have Max on the left: then the middle five chairs hold the other five people in $5! = 120$ ways. So $720 - 120 = 600$ seatings obey both rules ✓. (The choice $720$ FORGETS MAX’S RESTRICTION after seating Lee ✗; the choice $120$ PINS MAX TO A SINGLE CHAIR as if he too had only one option ✗; the choice $4320$ is $6 \\cdot 6!$, applying Max’s rule but FORGETTING THAT LEE IS FIXED ✗.)',
    },
    {
      q: 'Five different books, including a dictionary and an atlas, are shelved in a straight row. The dictionary must be at the left end, and the atlas must not be directly next to the dictionary. How many arrangements are possible?',
      choices: ['$24$', '$6$', '$18$', '$72$'],
      answer: 2,
      solution:
        'Route one, place the atlas first. With the dictionary in position $1$, the atlas may not be in position $2$, so it goes in position $3$, $4$, or $5$: $3$ choices. The other three books fill the three open positions in $3! = 6$ ways. Total $3 \\cdot 6 = 18$ ✓. Route two, subtract the forbidden arrangements. With the dictionary fixed at the left, the other four books can be arranged in $4! = 24$ ways. Those with the atlas in position $2$, right beside the dictionary, leave three books for three positions, $3! = 6$ ways. So $24 - 6 = 18$ ✓. (The choice $24$ FORGETS THE ATLAS RULE entirely ✗; the choice $6$ PINS THE ATLAS TO ONE POSITION instead of three ✗; the choice $72$ is $3 \\cdot 4!$, placing the atlas but then ARRANGING FOUR BOOKS AS IF THE ATLAS STILL NEEDED A SPOT ✗.)',
    },
    {
      q: 'Six different people, including Pat and Quinn, sit in a straight row of $6$ chairs. Pat must sit at one of the two ends, and Quinn must not sit directly next to Pat. How many seatings are possible?',
      choices: ['$240$', '$192$', '$96$', '$144$'],
      answer: 1,
      solution:
        'Route one, restricted people first. Pat picks an end, $2$ choices. Whichever end Pat takes, the chair beside Pat is off limits to Quinn, so Quinn has $6 - 2 = 4$ choices. The other four people fill the four remaining chairs in $4! = 24$ ways. Total $2 \\cdot 4 \\cdot 24 = 192$ ✓. Route two, subtract the seatings where Quinn sits beside Pat. Seatings with Pat at an end: $2 \\cdot 5! = 240$. Among these, Quinn is next to Pat when Quinn takes the one chair adjacent to Pat’s end, after which the other four people arrange in $4! = 24$ ways: $2 \\cdot 1 \\cdot 24 = 48$ seatings. So $240 - 48 = 192$ ✓. (The choice $240$ SEATS PAT AT AN END BUT FORGETS QUINN’S RULE ✗; the choice $96$ ALLOWS PAT ONLY ONE END instead of two ✗; the choice $144$ is $2 \\cdot 3 \\cdot 4!$, TAKING AWAY TWO NEIGHBOR CHAIRS FROM QUINN as if Pat sat in the middle of the row, when an end chair has only one neighbor ✗.)',
    },
  ],
  // slot 6 — digits, all different
  [
    {
      q: 'How many five-digit positive integers have five different digits?',
      choices: ['$30{,}240$', '$27{,}216$', '$90{,}000$', '$59{,}049$'],
      answer: 1,
      solution:
        'Route one, digit by digit from the left. The ten-thousands digit cannot be $0$: $9$ options. The thousands digit avoids only the digit already used, so $0$ is now allowed: $9$ options. Then $8$, $7$, and $6$ for the remaining places. Total $9 \\cdot 9 \\cdot 8 \\cdot 7 \\cdot 6 = 27{,}216$ ✓. Route two, allow a leading zero and then throw those strings away. Any five different digits in order, $0$ allowed anywhere: $10 \\cdot 9 \\cdot 8 \\cdot 7 \\cdot 6 = 30{,}240$ strings. The ones that are not five-digit integers start with $0$, and the other four places then take four different digits from the nine nonzero ones: $9 \\cdot 8 \\cdot 7 \\cdot 6 = 3024$. So $30{,}240 - 3024 = 27{,}216$ ✓. (The choice $30{,}240$ ALLOWS A LEADING ZERO ✗; the choice $90{,}000$ counts all five-digit integers, FORGETTING THAT THE DIGITS MUST DIFFER ✗; the choice $59{,}049$ is $9^5$, USING NINE OPTIONS FOR EVERY PLACE with repeats allowed ✗.)',
    },
    {
      q: 'How many four-digit positive integers with four different digits are greater than $6000$?',
      choices: ['$2520$', '$1512$', '$2592$', '$2016$'],
      answer: 3,
      solution:
        'Route one, thousands digit first. Greater than $6000$ with four different digits means the thousands digit is $6$, $7$, $8$, or $9$ ($6000$ itself repeats the digit $0$, so nothing is lost): $4$ options. The hundreds digit is then any of the $9$ digits not yet used, $0$ included, then $8$ and $7$. Total $4 \\cdot 9 \\cdot 8 \\cdot 7 = 2016$ ✓. Route two, share out the full count. There are $9 \\cdot 9 \\cdot 8 \\cdot 7 = 4536$ four-digit integers with all digits different. By symmetry, each of the nine possible thousands digits $1$ through $9$ heads exactly the same number of them, namely $\\frac{4536}{9} = 504$. Four of those nine thousands digits give a number above $6000$: $4 \\cdot 504 = 2016$ ✓. (The choice $2520$ ALSO COUNTS THE NUMBERS IN THE $5000$s ✗; the choice $1512$ DROPS THE $6000$s, misreading the condition as a thousands digit greater than $6$ ✗; the choice $2592$ is $4 \\cdot 9 \\cdot 9 \\cdot 8$, FORGETTING THAT THE THOUSANDS DIGIT IS ALREADY USED UP ✗.)',
    },
    {
      q: 'How many four-digit positive integers have at least two digits the same?',
      choices: ['$4536$', '$5976$', '$4464$', '$5464$'],
      answer: 2,
      solution:
        'Route one, complement inside the four-digit integers. There are $9000$ four-digit positive integers. Those with four different digits number $9 \\cdot 9 \\cdot 8 \\cdot 7 = 4536$. Every other four-digit integer has some repeated digit: $9000 - 4536 = 4464$ ✓. Route two, complement inside all four-digit strings. There are $10^4 = 10{,}000$ strings of four digits, of which $10 \\cdot 9 \\cdot 8 \\cdot 7 = 5040$ have no repeat, so $4960$ strings have a repeat. Among the $1000$ strings that begin with $0$, those with no repeat number $9 \\cdot 8 \\cdot 7 = 504$, so $496$ of them have a repeat. Removing these leading-zero strings leaves $4960 - 496 = 4464$ genuine four-digit integers with a repeated digit ✓. (The choice $4536$ ANSWERS THE OPPOSITE QUESTION, counting the numbers with no repeat ✗; the choice $5976$ subtracts $9 \\cdot 8 \\cdot 7 \\cdot 6$, FORBIDDING $0$ IN EVERY PLACE instead of only the first ✗; the choice $5464$ subtracts from $10{,}000$, COUNTING STRINGS WITH A LEADING ZERO as four-digit integers ✗.)',
    },
  ],
  // slot 7 — blocks
  [
    {
      q: 'Ten different people, $7$ adults and $3$ children, stand in a straight row. The three children must stand next to one another, in a single block. How many arrangements are possible?',
      choices: ['$40{,}320$', '$3{,}628{,}800$', '$241{,}920$', '$120{,}960$'],
      answer: 2,
      solution:
        'Route one, glue the children. The block of three children plus the $7$ adults make $8$ units, arranged in $8! = 40{,}320$ ways. Inside the block the three children stand in $3! = 6$ orders. Total $40{,}320 \\cdot 6 = 241{,}920$ ✓. Route two, choose where the block sits. A run of three consecutive positions in a row of $10$ can start at position $1, 2, \\ldots, 8$: $8$ placements. The three children fill that run in $3! = 6$ orders, and the $7$ adults fill the other $7$ positions in $7! = 5040$ ways. Total $8 \\cdot 6 \\cdot 5040 = 241{,}920$ ✓. (The choice $40{,}320$ FORGETS THAT THE CHILDREN INSIDE THE BLOCK ARE DIFFERENT PEOPLE ✗; the choice $3{,}628{,}800$ is $10!$, IGNORING THE RESTRICTION ✗; the choice $120{,}960$ MULTIPLIES BY $3$ INSTEAD OF $3!$ for the block ✗.)',
    },
    {
      q: 'Eight different books, $4$ cookbooks and $4$ novels, are placed on a straight shelf. The four cookbooks must be together in a single block. How many shelvings are possible?',
      choices: ['$2880$', '$120$', '$576$', '$40{,}320$'],
      answer: 0,
      solution:
        'Route one, glue the cookbooks. The cookbook block plus the $4$ novels make $5$ units, arranged in $5! = 120$ ways, and the cookbooks inside the block can be ordered in $4! = 24$ ways. Total $120 \\cdot 24 = 2880$ ✓. Route two, choose the block’s shelf space. Four consecutive slots on a shelf of $8$ can begin at slot $1, 2, 3, 4$, or $5$: $5$ placements. Fill those four slots with the cookbooks in $4! = 24$ orders and the other four slots with the novels in $4! = 24$ orders: $5 \\cdot 24 \\cdot 24 = 2880$ ✓. (The choice $120$ FORGETS TO ORDER THE COOKBOOKS INSIDE THE BLOCK ✗; the choice $576$ is $4! \\cdot 4!$, TREATING THE NOVELS AS A BLOCK TOO and fixing which block is on the left ✗; the choice $40{,}320$ is $8!$, IGNORING THE RESTRICTION ✗.)',
    },
    {
      q: 'Eight different people, $5$ boys and $3$ girls, stand in a straight row. How many arrangements have the three girls NOT all standing together (that is, the girls do not form a single block of three)?',
      choices: ['$4320$', '$39{,}600$', '$14{,}400$', '$36{,}000$'],
      answer: 3,
      solution:
        'Route one, subtract the arrangements where the girls do form a block. All arrangements: $8! = 40{,}320$. Girls in one block: the block plus $5$ boys are $6$ units, $6! = 720$ orders, times $3! = 6$ orders inside the block, giving $4320$. So $40{,}320 - 4320 = 36{,}000$ ✓. Route two, count the good arrangements directly by how the girls are split. Line up the $5$ boys first, $5! = 120$ ways, creating $6$ gaps (the two ends and four spaces between boys). Case A, no two girls adjacent: pick three different gaps for the three girls in order, $6 \\cdot 5 \\cdot 4 = 120$, for $120 \\cdot 120 = 14{,}400$. Case B, exactly two girls adjacent and the third apart: choose which girl stands alone ($3$), order the pair ($2$), pick a gap for the pair and a different gap for the loner ($6 \\cdot 5 = 30$), for $120 \\cdot 3 \\cdot 2 \\cdot 30 = 21{,}600$. Total $14{,}400 + 21{,}600 = 36{,}000$ ✓. (The choice $4320$ ANSWERS THE OPPOSITE QUESTION ✗; the choice $39{,}600$ subtracts only $720$, FORGETTING THE ORDER INSIDE THE BLOCK ✗; the choice $14{,}400$ DEMANDS THAT NO TWO GIRLS TOUCH, a stricter condition than the one asked ✗.)',
    },
  ],
  // slot 8 — restricted ends
  [
    {
      q: 'The seven letters of the word MONARCH, which are all different, are arranged in a row. How many arrangements have a vowel at both ends?',
      choices: ['$480$', '$720$', '$120$', '$240$'],
      answer: 3,
      solution:
        'Route one, ends first. MONARCH has two vowels, O and A, and five consonants. The left end takes either vowel, $2$ choices; the right end must take the other vowel, $1$ choice. The five consonants fill the five middle positions in $5! = 120$ ways. Total $2 \\cdot 1 \\cdot 120 = 240$ ✓. Route two, a share of all arrangements. In the $7! = 5040$ arrangements, the ordered pair (left-end letter, right-end letter) runs equally often through all $7 \\cdot 6 = 42$ ordered pairs of different letters. Exactly $2 \\cdot 1 = 2$ of those pairs are two vowels, so the fraction of arrangements with vowels at both ends is $\\frac{2}{42} = \\frac{1}{21}$, and $\\frac{5040}{21} = 240$ ✓. (The choice $480$ uses $2 \\cdot 2$ for the ends, LETTING THE SAME VOWEL APPEAR AT BOTH ENDS ✗; the choice $720$ FIXES A VOWEL AT ONE END ONLY and lets the other six letters go anywhere ✗; the choice $120$ FORGETS THAT THE TWO VOWELS CAN SWAP ENDS ✗.)',
    },
    {
      q: 'Six adults and $2$ children, all eight different people, stand in a straight row of $8$. There must be an adult at each end of the row. How many arrangements are possible?',
      choices: ['$25{,}920$', '$21{,}600$', '$30{,}240$', '$10{,}800$'],
      answer: 1,
      solution:
        'Route one, ends first. The left end takes any of the $6$ adults, the right end any of the $5$ adults left. The remaining $6$ people, four adults and two children, fill the six middle positions in $6! = 720$ ways. Total $6 \\cdot 5 \\cdot 720 = 21{,}600$ ✓. Route two, subtract the rows with a child at an end. All rows: $8! = 40{,}320$. Rows with a child at the left end: $2 \\cdot 7! = 10{,}080$; likewise $10{,}080$ with a child at the right end; rows with a child at both ends, counted in both, number $2 \\cdot 1 \\cdot 6! = 1440$. Rows with a child at some end: $10{,}080 + 10{,}080 - 1440 = 18{,}720$, so the good rows number $40{,}320 - 18{,}720 = 21{,}600$ ✓. (The choice $25{,}920$ uses $6 \\cdot 6$ for the ends, LETTING ONE ADULT STAND AT BOTH ENDS ✗; the choice $30{,}240$ SUBTRACTS ONLY ONE END’S BAD ROWS ✗; the choice $10{,}800$ HALVES THE ANSWER AS IF THE TWO ENDS WERE INTERCHANGEABLE ✗.)',
    },
    {
      q: 'The seven letters of the word DOLPHIN, which are all different, are arranged in a row. How many arrangements have a vowel at at least one of the two ends?',
      choices: ['$2640$', '$2400$', '$2880$', '$240$'],
      answer: 0,
      solution:
        'Route one, subtract the arrangements with consonants at both ends. DOLPHIN has two vowels, O and I, and five consonants. All arrangements: $7! = 5040$. Consonant at both ends: $5 \\cdot 4$ for the ends, then $5! = 120$ for the middle, $20 \\cdot 120 = 2400$. So $5040 - 2400 = 2640$ ✓. Route two, add the two end events and remove the overlap. Vowel at the left end: $2 \\cdot 6! = 1440$. Vowel at the right end: also $1440$. Vowel at both ends, counted twice: $2 \\cdot 1 \\cdot 5! = 240$. So $1440 + 1440 - 240 = 2640$ ✓. (The choice $2400$ ANSWERS THE OPPOSITE QUESTION, no vowel at either end ✗; the choice $2880$ ADDS THE TWO ENDS WITHOUT REMOVING THE OVERLAP ✗; the choice $240$ REQUIRES A VOWEL AT BOTH ENDS, not at least one ✗.)',
    },
  ],
  // slot 9 — two people kept apart
  [
    {
      q: 'Eight different people, including Cara and Dev, sit in a straight row of $8$ chairs. How many seatings have Cara and Dev not sitting next to each other?',
      choices: ['$30{,}240$', '$10{,}080$', '$35{,}280$', '$5040$'],
      answer: 0,
      solution:
        'Route one, complement. All seatings: $8! = 40{,}320$. Seatings with Cara and Dev adjacent: glue them into a block, arrange $7$ units in $7! = 5040$ ways, and double for Cara-Dev versus Dev-Cara: $10{,}080$. So $40{,}320 - 10{,}080 = 30{,}240$ ✓. Route two, seat the other six first. The six other people take six chairs in $6! = 720$ ways, and between and around them there are $7$ gaps. Cara chooses a gap ($7$ ways) and Dev chooses a different gap ($6$ ways); two people in different gaps are never neighbors, and every non-adjacent seating arises exactly once this way. Total $720 \\cdot 7 \\cdot 6 = 30{,}240$ ✓. (The choice $10{,}080$ ANSWERS THE OPPOSITE QUESTION ✗; the choice $35{,}280$ subtracts only $5040$, FORGETTING TO DOUBLE FOR THE ORDER INSIDE THE BLOCK ✗; the choice $5040$ is the block count itself, STOPPING AT $7!$ ✗.)',
    },
    {
      q: 'Five different books, two of which are math books, are shelved in a straight row. How many arrangements have the two math books not next to each other?',
      choices: ['$48$', '$96$', '$72$', '$36$'],
      answer: 2,
      solution:
        'Route one, complement. All arrangements: $5! = 120$. Math books adjacent: glue them into a block, arrange $4$ units in $4! = 24$ ways, and double for the order inside the block: $48$. So $120 - 48 = 72$ ✓. Route two, gaps. Shelve the three non-math books first, $3! = 6$ ways, leaving $4$ gaps (both ends and the two spaces between). The first math book picks a gap ($4$ ways) and the second picks a different gap ($3$ ways), which keeps them apart: $6 \\cdot 4 \\cdot 3 = 72$ ✓. (The choice $48$ ANSWERS THE OPPOSITE QUESTION ✗; the choice $96$ subtracts only $24$, FORGETTING THAT THE TWO MATH BOOKS CAN SWAP inside the block ✗; the choice $36$ HALVES THE ANSWER AS IF THE MATH BOOKS WERE IDENTICAL ✗.)',
    },
    {
      q: 'Seven different people, including Eve and Finn, stand in a straight row. How many arrangements have exactly one person standing between Eve and Finn?',
      choices: ['$600$', '$1200$', '$720$', '$1440$'],
      answer: 1,
      solution:
        'Route one, choose the two positions. Eve and Finn must occupy positions $i$ and $i + 2$ for some $i$ from $1$ to $5$: $5$ position pairs. Either of them can take the left one: $2$ ways. The other five people fill the other five positions in $5! = 120$ ways. Total $5 \\cdot 2 \\cdot 120 = 1200$ ✓. Route two, build a block of three. Pick the person who stands between them: $5$ choices. Form the block Eve-person-Finn or Finn-person-Eve: $2$ orders. The block plus the $4$ remaining people are $5$ units, arranged in $5! = 120$ ways. Total $5 \\cdot 2 \\cdot 120 = 1200$ ✓. (The choice $600$ FORGETS THAT EVE AND FINN CAN SWAP SIDES ✗; the choice $720$ ORDERS THE BLOCK IN $3!$ WAYS WITHOUT CHOOSING WHO STANDS IN THE MIDDLE, letting Eve or Finn be the middle person ✗; the choice $1440$ COUNTS SIX POSITION PAIRS, one of which would run off the end of the row ✗.)',
    },
  ],
  // slot 10 — digits with interacting restrictions
  [
    {
      q: 'The digits $1, 2, 3, 4, 5, 6$ are each used exactly once to form a six-digit number. How many of these numbers are odd and greater than $400{,}000$?',
      choices: ['$216$', '$144$', '$192$', '$48$'],
      answer: 2,
      solution:
        'Route one, cases on the first digit. The first digit must be $4$, $5$, or $6$ and the last digit must be odd, $1$, $3$, or $5$; the digit $5$ cannot be in both places. Case 1, first digit $4$ or $6$: $2$ choices, then the last digit is any of $1, 3, 5$ ($3$ choices), then the middle four digits arrange in $4! = 24$ ways: $2 \\cdot 3 \\cdot 24 = 144$. Case 2, first digit $5$: the last digit is $1$ or $3$ ($2$ choices), then $24$ ways for the middle: $48$. Total $144 + 48 = 192$ ✓. Route two, cases on the last digit. Case 1, last digit $1$ or $3$: $2$ choices, then the first digit is any of $4, 5, 6$ ($3$ choices), then $24$ for the middle: $144$. Case 2, last digit $5$: the first digit is $4$ or $6$ ($2$ choices), then $24$: $48$. Total $144 + 48 = 192$ ✓. (The choice $216$ is $3 \\cdot 3 \\cdot 24$, IGNORING THAT $5$ CANNOT BE BOTH FIRST AND LAST ✗; the choice $144$ DROPS THE CASE WHERE THE FIRST DIGIT IS $5$ ✗; the choice $48$ KEEPS ONLY THE CASE WHERE THE FIRST DIGIT IS $5$ ✗.)',
    },
    {
      q: 'The digits $0, 1, 2, 3, 4$ are each used exactly once to form a five-digit number, which may not begin with $0$. How many of these numbers are even?',
      choices: ['$60$', '$72$', '$36$', '$96$'],
      answer: 0,
      solution:
        'Route one, cases on the last digit. The last digit must be $0$, $2$, or $4$. Case 1, last digit $0$: the other four digits are all nonzero and arrange freely in $4! = 24$ ways. Case 2, last digit $2$ or $4$: $2$ choices; the first digit then cannot be $0$ or the digit already used, leaving $3$ choices; the middle three digits arrange in $3! = 6$ ways: $2 \\cdot 3 \\cdot 6 = 36$. Total $24 + 36 = 60$ ✓. Route two, subtract the odd ones. Five-digit numbers from these digits: $4$ choices for the first digit (not $0$), then $4! = 24$ for the rest, $96$ in all. Odd ones end in $1$ or $3$: $2$ choices for the last digit, then $3$ for the first digit (not $0$, not the last digit), then $3! = 6$ for the middle: $36$. So $96 - 36 = 60$ ✓. (The choice $72$ is $3 \\cdot 4 \\cdot 6$, LETTING THE NUMBER START WITH $0$ when it ends in $2$ or $4$ ✗; the choice $36$ FORGETS THAT $0$ IS EVEN and skips the last-digit-$0$ case ✗; the choice $96$ COUNTS EVERY FIVE-DIGIT NUMBER, odd or even ✗.)',
    },
    {
      q: 'The digits $1, 2, 3, 4, 5$ are each used exactly once to form a five-digit number. How many of these numbers are odd or greater than $30{,}000$, or both?',
      choices: ['$144$', '$72$', '$42$', '$102$'],
      answer: 3,
      solution:
        'Route one, add the two conditions and remove the overlap. Odd: the last digit is $1$, $3$, or $5$ and the rest arrange in $4! = 24$ ways, $3 \\cdot 24 = 72$. Greater than $30{,}000$: the first digit is $3$, $4$, or $5$, again $72$. Both odd and above $30{,}000$: first digit $4$ gives $3$ odd last digits, $3 \\cdot 6 = 18$; first digit $3$ or $5$ leaves $2$ odd last digits each, $2 \\cdot 2 \\cdot 6 = 24$; so $42$ numbers satisfy both. Union: $72 + 72 - 42 = 102$ ✓. Route two, subtract the numbers that satisfy neither. There are $5! = 120$ numbers in all. A number satisfies neither condition when it is even and below $30{,}000$: first digit $1$ or $2$, last digit $2$ or $4$. First digit $1$: last digit $2$ or $4$, $2 \\cdot 3! = 12$. First digit $2$: last digit must be $4$, $3! = 6$. That is $18$ numbers satisfying neither, so $120 - 18 = 102$ ✓. (The choice $144$ ADDS THE TWO COUNTS WITHOUT REMOVING THE OVERLAP ✗; the choice $72$ USES ONLY ONE OF THE TWO CONDITIONS ✗; the choice $42$ COUNTS THE NUMBERS THAT ARE BOTH odd and above $30{,}000$, the intersection instead of the union ✗.)',
    },
  ],
]

export default { book: 'intro-counting', number: 1, sections: { '1.5': s15 } }
