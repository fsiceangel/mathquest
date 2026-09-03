// Introduction to Counting chapter 2 — variations for section 2.4
// (Constructive Counting). All problems and solutions are original
// MathQuest content.
//
// House rules for this file:
//  - Every stem settles its own conventions in words: whether digits or
//    letters may repeat, whether a string may start with 0, and that people
//    are all different from one another.
//  - Every keyed answer is reached twice along routes that share no steps:
//    a most-restricted-first construction against a complement, a
//    choose-then-arrange count, a symmetry argument, or casework on a
//    different digit. Route two never reuses route one’s number.
//  - Each distractor is one named mistake — letting a zero lead, allowing a
//    repeat, forgetting to place the restricted object, treating a dependent
//    step as fixed — and the mistake is named in CAPS.

const s24 = [
  // s1 — strings with no repeated symbol, and the complement.
  [
    {
      q: 'A locker PIN is a string of $5$ digits, and it may start with $0$. How many PINs have five different digits?',
      choices: ['$27216$', '$100000$', '$30240$', '$15120$'],
      answer: 2,
      solution:
        'Route one, build the PIN left to right. The first digit has all $10$ choices since a leading $0$ is allowed; each later digit must avoid everything already used, so the counts are $10, 9, 8, 7, 6$. Multiply: $10 \\cdot 9 \\cdot 8 \\cdot 7 \\cdot 6 = 30240$ ✓. Route two, choose the digits and then order them. A PIN with five different digits is a set of $5$ digits together with an order for them. There are $\\binom{10}{5} = 252$ sets, and each set can be written in $5! = 120$ orders, so there are $252 \\cdot 120 = 30240$ PINs ✓. (Choosing $27216$ BANS A LEADING $0$, starting with $9$ choices when the stem allows any first digit ✗. Choosing $100000$ ALLOWS REPEATED DIGITS ✗. Choosing $15120 = 9 \\cdot 8 \\cdot 7 \\cdot 6 \\cdot 5$ REMOVES ONE DIGIT FROM EVERY SLOT, as if $0$ were not on the keypad at all ✗.)',
    },
    {
      q: 'A luggage tag is a code of $3$ uppercase letters from the $26$-letter alphabet, and no letter may appear more than once in a code. How many codes are possible?',
      choices: ['$15600$', '$17576$', '$2600$', '$16250$'], answer: 0,
      solution:
        'Route one, build the code left to right. The first letter has $26$ choices, the second must differ from it, $25$ choices, and the third must avoid both, $24$ choices: $26 \\cdot 25 \\cdot 24 = 15600$ ✓. Route two, subtract the codes with a repeat from all codes. With repeats allowed there are $26^3 = 17576$ codes. Those that break the rule have all three letters equal, $26$ codes, or exactly two equal: choose which $2$ of the $3$ positions match ($3$ ways), the letter they share ($26$), and the different third letter ($25$), giving $3 \\cdot 26 \\cdot 25 = 1950$. Remove $26 + 1950 = 1976$ from $17576$ to leave $15600$ ✓. (Choosing $17576$ ALLOWS REPEATED LETTERS ✗. Choosing $2600 = \\binom{26}{3}$ IGNORES THE ORDER of the letters, counting sets instead of codes ✗. Choosing $16250 = 26 \\cdot 25 \\cdot 25$ LETS THE THIRD LETTER REPEAT THE FIRST ✗.)',
    },
    {
      q: 'A PIN is a string of $4$ digits, and it may start with $0$. How many PINs have at least one digit that appears more than once?',
      choices: ['$5040$', '$5464$', '$4330$', '$4960$'],
      answer: 3,
      solution:
        'Route one, count the complement. There are $10^4 = 10000$ PINs in all. The ones with no repeated digit are built with $10 \\cdot 9 \\cdot 8 \\cdot 7 = 5040$ choices, so the rest, $10000 - 5040 = 4960$, have a repeat ✓. Route two, build the repeating PINs directly by pattern. All four digits equal: $10$. Exactly one pair equal and the other two digits different from it and each other: choose the pair’s positions $\\binom{4}{2} = 6$, the pair’s digit $10$, then the two others $9 \\cdot 8$: $6 \\cdot 10 \\cdot 72 = 4320$. Two different pairs: split the positions into two pairs, $3$ ways, then assign two different digits in order, $10 \\cdot 9$: $270$. Three equal and one different: the odd position $4$ ways, digits $10 \\cdot 9$: $360$. Add: $10 + 4320 + 270 + 360 = 4960$ ✓. (Choosing $5040$ COUNTS THE PINS WITH NO REPEAT, the opposite of what was asked ✗. Choosing $5464$ BANS A LEADING $0$ in the complement, subtracting $4536$ instead of $5040$ ✗. Choosing $4330$ COUNTS ONLY THE ALL-EQUAL AND SINGLE-PAIR PATTERNS, missing two pairs and three-of-a-kind ✗.)',
    },
  ],
  // s2 — a fixed digit or letter in the middle, no repeats.
  [
    {
      q: 'How many four-digit positive integers have a hundreds digit of $0$ and no repeated digit?',
      choices: ['$648$', '$504$', '$720$', '$729$'],
      answer: 1,
      solution:
        'Route one, build the three open positions. The hundreds digit is fixed at $0$. The thousands digit cannot be $0$, so $9$ choices; the tens digit must avoid $0$ and the thousands digit, $8$ choices; the units digit avoids all three, $7$ choices: $9 \\cdot 8 \\cdot 7 = 504$ ✓. Route two, choose the digits and then arrange them. Since $0$ already sits in the hundreds place, the other three positions hold three different nonzero digits, and every arrangement of them is legal because none of them is $0$. Choose the set, $\\binom{9}{3} = 84$ ways, and order it, $3! = 6$ ways: $84 \\cdot 6 = 504$ ✓. (Choosing $648 = 9 \\cdot 9 \\cdot 8$ LETS THE TENS DIGIT BE $0$, repeating the hundreds digit ✗. Choosing $720 = 10 \\cdot 9 \\cdot 8$ LETS THE THOUSANDS DIGIT BE $0$, which makes a three-digit number ✗. Choosing $729 = 9^3$ ALLOWS REPEATS among the three open positions ✗.)',
    },
    {
      q: 'A club badge is a $3$-letter tag from the $26$-letter alphabet whose middle letter is X, with no letter used twice in the tag. How many badges are possible?',
      choices: ['$625$', '$650$', '$676$', '$600$'],
      answer: 3,
      solution:
        'Route one, build the two open positions. The middle is X. The first letter can be anything but X, $25$ choices; the last letter must avoid X and the first letter, $24$ choices: $25 \\cdot 24 = 600$ ✓. Route two, count with X removed and subtract the outer repeats. With X in the middle, the outer two letters come from the other $25$ letters; if they were allowed to match there would be $25 \\cdot 25 = 625$ tags, and exactly $25$ of those have the two outer letters equal. Remove them: $625 - 25 = 600$ ✓. (Choosing $625$ LETS THE FIRST AND LAST LETTERS MATCH ✗. Choosing $650 = 26 \\cdot 25$ LETS X APPEAR AGAIN in an outer position ✗. Choosing $676 = 26^2$ IGNORES THE NO-REPEAT RULE ENTIRELY ✗.)',
    },
    {
      q: 'How many odd three-digit positive integers have a tens digit of $0$ and no repeated digit?',
      choices: ['$45$', '$72$', '$40$', '$36$'],
      answer: 2,
      solution:
        'Route one, most restricted first. The units digit must be odd: $1, 3, 5, 7$, or $9$, $5$ choices. The hundreds digit must avoid $0$ and the units digit, $8$ choices. Multiply: $5 \\cdot 8 = 40$ ✓. Route two, case on the hundreds digit instead. If the hundreds digit is odd ($5$ choices), the units digit must be odd but different from it, $4$ choices: $20$ numbers. If the hundreds digit is even and nonzero ($2, 4, 6, 8$, so $4$ choices), the units digit may be any of the $5$ odd digits: $20$ numbers. Add: $20 + 20 = 40$ ✓. (Choosing $45 = 9 \\cdot 5$ LETS THE UNITS DIGIT REPEAT THE HUNDREDS DIGIT ✗. Choosing $72$ IGNORES THE ODD CONDITION, counting every tens-$0$ number with different digits ✗. Choosing $36 = 9 \\cdot 4$ REMOVES A UNITS OPTION EVEN WHEN THE HUNDREDS DIGIT IS EVEN, treating a dependent step as fixed ✗.)',
    },
  ],
  // s3 — letters then digits, with a no-repeat rule in each block.
  [
    {
      q: 'A parking permit is a string of two consonants followed by two digits. The two consonants must be different (there are $21$ consonants), and the two digits must be different; a digit may be $0$. How many permits are possible?',
      choices: ['$44100$', '$42000$', '$30240$', '$37800$'],
      answer: 3,
      solution:
        'Route one, build the string left to right. Consonants: $21$ then $20$. Digits: $10$ then $9$. Multiply: $21 \\cdot 20 \\cdot 10 \\cdot 9 = 37800$ ✓. Route two, choose each block as a set and then order it. The consonant block is an unordered pair of different consonants, $\\binom{21}{2} = 210$ pairs, written in one of $2$ orders: $420$ blocks. The digit block is an unordered pair of different digits, $\\binom{10}{2} = 45$ pairs, in $2$ orders: $90$ blocks. Any consonant block goes with any digit block: $420 \\cdot 90 = 37800$ ✓. (Choosing $44100 = 21^2 \\cdot 10^2$ ALLOWS REPEATS IN BOTH BLOCKS ✗. Choosing $42000 = 21 \\cdot 20 \\cdot 100$ ALLOWS THE DIGITS TO REPEAT ✗. Choosing $30240 = 21 \\cdot 20 \\cdot 9 \\cdot 8$ BANS $0$ FROM THE FIRST DIGIT SLOT, though a permit is not a number ✗.)',
    },
    {
      q: 'A bike-lock setting is one of $4$ colors followed by a code of $3$ letters chosen from A, B, C, D, E, F, with no letter repeated in the code. How many settings are possible?',
      choices: ['$864$', '$480$', '$120$', '$124$'],
      answer: 1,
      solution:
        'Route one, build the setting stage by stage. Color: $4$ choices. Letters, left to right with no repeats: $6 \\cdot 5 \\cdot 4 = 120$. Multiply: $4 \\cdot 120 = 480$ ✓. Route two, count the codes by choosing a set and ordering it, then attach the colors. A code is a set of $3$ different letters from $6$, $\\binom{6}{3} = 20$ sets, written in $3! = 6$ orders: $120$ codes. Each code appears once with every color, so the four colors contribute $120 + 120 + 120 + 120 = 480$ settings ✓. (Choosing $864 = 4 \\cdot 6^3$ ALLOWS REPEATED LETTERS ✗. Choosing $120$ FORGETS THE COLOR STAGE ✗. Choosing $124 = 4 + 120$ ADDS THE COLORS TO THE CODES instead of pairing each color with each code ✗.)',
    },
    {
      q: 'A bike-rack tag is one vowel (A, E, I, O, or U) followed by $3$ digits, where a digit may be $0$ and digits may repeat. How many tags have three digits that are NOT all different?',
      choices: ['$1400$', '$3600$', '$1350$', '$280$'],
      answer: 0,
      solution:
        'Route one, subtract the all-different digit strings. There are $10^3 = 1000$ digit strings, and $10 \\cdot 9 \\cdot 8 = 720$ of them have three different digits, so $1000 - 720 = 280$ have a repeat. Each pairs with any of the $5$ vowels: $5 \\cdot 280 = 1400$ ✓. Route two, build the repeating strings directly. All three digits equal: $10$ strings. Exactly two equal: choose which position holds the odd digit out, $3$ ways, then the repeated digit, $10$, then the different one, $9$: $270$ strings. That is $280$ strings with a repeat, and with the vowel in front, $5 \\cdot 280 = 1400$ tags ✓. (Choosing $3600$ COUNTS THE TAGS WHOSE DIGITS ARE ALL DIFFERENT, the opposite condition ✗. Choosing $1350 = 5 \\cdot 270$ FORGETS THE ALL-EQUAL STRINGS ✗. Choosing $280$ FORGETS THE VOWEL STAGE ✗.)',
    },
  ],
  // s4 — distinct digits with one symbol banned, and the reverse.
  [
    {
      q: 'How many four-digit positive integers have four different digits, none of which is $5$?',
      choices: ['$2688$', '$4536$', '$3024$', '$1680$'], answer: 0,
      solution:
        'Route one, build left to right with $5$ banned everywhere. The thousands digit avoids $0$ and $5$: $8$ choices. The hundreds digit avoids $5$ and the thousands digit, and $0$ is now allowed: $8$ choices. Then $7$ and $6$: $8 \\cdot 8 \\cdot 7 \\cdot 6 = 2688$ ✓. Route two, count strings and remove the leading zeros. Ignore the leading-digit rule for a moment: strings of $4$ different digits drawn from the nine digits other than $5$ number $9 \\cdot 8 \\cdot 7 \\cdot 6 = 3024$. The illegal ones start with $0$, and after that $0$ the remaining three slots are filled from the eight nonzero non-$5$ digits: $8 \\cdot 7 \\cdot 6 = 336$. Subtract: $3024 - 336 = 2688$ ✓. (Choosing $4536$ IGNORES THE BAN ON $5$ ✗. Choosing $3024$ LETS THE NUMBER START WITH $0$ ✗. Choosing $1680 = 8 \\cdot 7 \\cdot 6 \\cdot 5$ BANS $0$ FROM EVERY POSITION, not just the first ✗.)',
    },
    {
      q: 'How many strings of $3$ different letters can be made from A, B, C, D, E, F, G, H if the letter E may not be used?',
      choices: ['$343$', '$336$', '$210$', '$35$'], answer: 2,
      solution:
        'Route one, build from the seven allowed letters. With E removed there are $7$ letters; the slots take $7$, then $6$, then $5$ choices: $7 \\cdot 6 \\cdot 5 = 210$ ✓. Route two, count every string of different letters and subtract the ones containing E. From all eight letters: $8 \\cdot 7 \\cdot 6 = 336$ strings. Those with an E: E takes one of $3$ positions, and the other two slots are filled from the remaining $7$ letters with no repeat, $7 \\cdot 6 = 42$: $3 \\cdot 42 = 126$. Subtract: $336 - 126 = 210$ ✓. (Choosing $343 = 7^3$ ALLOWS REPEATED LETTERS ✗. Choosing $336$ IGNORES THE BAN ON E ✗. Choosing $35 = \\binom{7}{3}$ IGNORES THE ORDER of the letters ✗.)',
    },
    {
      q: 'How many three-digit positive integers have three different digits, at least one of which is $7$?',
      choices: ['$216$', '$200$', '$192$', '$144$'],
      answer: 1,
      solution:
        'Route one, place the $7$ and case on where it sits. Hundreds place: the tens digit avoids $7$, $9$ choices, and the units avoids two digits, $8$: $72$ numbers. Tens place: the hundreds digit avoids $0$ and $7$, $8$ choices, the units digit avoids two digits, $8$: $64$. Units place: likewise $64$. Add: $72 + 64 + 64 = 200$ ✓. Route two, subtract the $7$-free numbers from all numbers with different digits. All: $9 \\cdot 9 \\cdot 8 = 648$. With $7$ banned: hundreds $8$ (no $0$, no $7$), tens $8$, units $7$: $448$. The difference is the numbers containing a $7$: $648 - 448 = 200$ ✓. (Choosing $216 = 3 \\cdot 72$ TREATS EVERY POSITION LIKE THE HUNDREDS PLACE, ignoring that $0$ is banned there ✗. Choosing $192 = 3 \\cdot 64$ TREATS THE HUNDREDS PLACE LIKE THE OTHERS ✗. Choosing $144$ SUBTRACTS $504$, a $7$-free count that lets the hundreds digit be $0$ ✗.)',
    },
  ],
  // s5 — distinct digits that must contain a symbol, and the reverse.
  [
    {
      q: 'How many five-digit positive integers have five different digits and contain the digit $0$?',
      choices: ['$15120$', '$27216$', '$12096$', '$3024$'],
      answer: 2,
      solution:
        'Route one, place the $0$ first. It cannot lead, so it takes one of the other $4$ positions. The remaining four positions are filled left to right from the nine nonzero digits with no repeats: $9 \\cdot 8 \\cdot 7 \\cdot 6 = 3024$. Multiply: $4 \\cdot 3024 = 12096$ ✓. Route two, subtract the $0$-free numbers. Five-digit numbers with five different digits: the first digit avoids $0$, $9$ choices, then $9, 8, 7, 6$: $27216$. Those with no $0$ at all use only nonzero digits: $9 \\cdot 8 \\cdot 7 \\cdot 6 \\cdot 5 = 15120$. Subtract: $27216 - 15120 = 12096$ ✓. (Choosing $15120 = 5 \\cdot 3024$ GIVES THE $0$ ALL FIVE POSITIONS, allowing a leading zero ✗. Choosing $27216$ FORGETS THAT $0$ MUST APPEAR ✗. Choosing $3024$ FORGETS TO CHOOSE WHERE THE $0$ GOES ✗.)',
    },
    {
      q: 'How many strings of $4$ different letters chosen from A, B, C, D, E, F, G, H, I, J contain the letter A?',
      choices: ['$2016$', '$5040$', '$504$', '$3024$'],
      answer: 0,
      solution:
        'Route one, place the A first. It may sit in any of the $4$ positions. The other three positions are filled left to right from the $9$ remaining letters with no repeats: $9 \\cdot 8 \\cdot 7 = 504$. Multiply: $4 \\cdot 504 = 2016$ ✓. Route two, subtract the A-free strings. All strings of $4$ different letters from $10$: $10 \\cdot 9 \\cdot 8 \\cdot 7 = 5040$. With A banned there are $9$ letters: $9 \\cdot 8 \\cdot 7 \\cdot 6 = 3024$ strings. Subtract: $5040 - 3024 = 2016$ ✓. (Choosing $5040$ FORGETS THAT A MUST APPEAR ✗. Choosing $504$ FORGETS TO CHOOSE A’S POSITION ✗. Choosing $3024$ COUNTS THE STRINGS WITHOUT A, the opposite condition ✗.)',
    },
    {
      q: 'How many four-digit positive integers have four different digits, none of which is $0$?',
      choices: ['$4536$', '$6561$', '$126$', '$3024$'],
      answer: 3,
      solution:
        'Route one, build from the nonzero digits. Every position draws from $1$ through $9$ with no repeats, so the slots take $9, 8, 7, 6$ choices: $9 \\cdot 8 \\cdot 7 \\cdot 6 = 3024$ ✓. Route two, choose the set of digits and then arrange it. A number here is a set of $4$ different digits from $1$ through $9$, $\\binom{9}{4} = 126$ sets, written in one of $4! = 24$ orders, and every order is legal since no digit is $0$: $126 \\cdot 24 = 3024$ ✓. (Choosing $4536$ LETS $0$ APPEAR IN THE LAST THREE POSITIONS ✗. Choosing $6561 = 9^4$ ALLOWS REPEATED DIGITS ✗. Choosing $126$ IGNORES THE ORDER of the digits ✗.)',
    },
  ],
  // s6 — a named contestant among the medal winners, and the reverse.
  [
    {
      q: 'Ten swimmers, all different, race in a final, and gold, silver, and bronze go to the first three finishers with no ties. Lena is one of the swimmers. In how many ways can the three medals be awarded so that Lena wins one of them?',
      choices: ['$720$', '$216$', '$72$', '$243$'],
      answer: 1,
      solution:
        'Route one, most restricted first. Decide Lena’s medal: $3$ choices. The other two medals then go, in order, to two of the remaining $9$ swimmers: $9 \\cdot 8 = 72$. Multiply: $3 \\cdot 72 = 216$ ✓. Route two, subtract the outcomes in which Lena wins nothing. All medal outcomes: $10 \\cdot 9 \\cdot 8 = 720$. Outcomes with Lena off the podium hand every medal to one of the other $9$: $9 \\cdot 8 \\cdot 7 = 504$. Subtract: $720 - 504 = 216$ ✓. (Choosing $720$ IGNORES THE CONDITION ON LENA ✗. Choosing $72$ FORGETS TO CHOOSE WHICH MEDAL LENA WINS ✗. Choosing $243 = 3 \\cdot 9 \\cdot 9$ LETS ONE SWIMMER TAKE TWO MEDALS ✗.)',
    },
    {
      q: 'A club of $9$ members, all different, elects a president, a vice president, and a treasurer, and no member may hold two offices. Omar is a member. In how many ways can the three offices be filled so that Omar holds one of them?',
      choices: ['$504$', '$56$', '$192$', '$168$'],
      answer: 3,
      solution:
        'Route one, most restricted first. Give Omar his office: $3$ choices. The other two offices go, in order, to two of the remaining $8$ members: $8 \\cdot 7 = 56$. Multiply: $3 \\cdot 56 = 168$ ✓. Route two, subtract the elections that leave Omar out. All elections: $9 \\cdot 8 \\cdot 7 = 504$. Those with Omar in no office fill every office from the other $8$: $8 \\cdot 7 \\cdot 6 = 336$. Subtract: $504 - 336 = 168$ ✓. (Choosing $504$ IGNORES THE CONDITION ON OMAR ✗. Choosing $56$ FORGETS TO CHOOSE OMAR’S OFFICE ✗. Choosing $192 = 3 \\cdot 8 \\cdot 8$ LETS ONE MEMBER HOLD TWO OFFICES ✗.)',
    },
    {
      q: 'Eight runners, all different, race, and gold, silver, and bronze go to the first three finishers with no ties. Kai is one of the runners. In how many ways can the medals be awarded so that Kai wins NO medal?',
      choices: ['$126$', '$336$', '$210$', '$35$'],
      answer: 2,
      solution:
        'Route one, build the podium without Kai. Every medal goes to one of the other $7$ runners, in order and with no runner taking two: $7 \\cdot 6 \\cdot 5 = 210$ ✓. Route two, subtract the outcomes in which Kai wins a medal. All medal outcomes: $8 \\cdot 7 \\cdot 6 = 336$. Kai wins a medal in $3$ ways, and the other two medals go in order to two of the remaining $7$, $7 \\cdot 6 = 42$: $3 \\cdot 42 = 126$ outcomes. Subtract: $336 - 126 = 210$ ✓. (Choosing $126$ COUNTS THE OUTCOMES WHERE KAI WINS A MEDAL, the opposite condition ✗. Choosing $336$ IGNORES THE CONDITION ON KAI ✗. Choosing $35 = \\binom{7}{3}$ IGNORES WHICH MEDAL EACH RUNNER GETS ✗.)',
    },
  ],
  // s7 — strings with no two equal neighbors, and the complement.
  [
    {
      q: 'How many five-digit strings use only the digits $1, 2, 3, 4$ (a digit may appear more than once, and the string may begin with any of them) and have no two neighboring digits equal?',
      choices: ['$324$', '$1024$', '$108$', '$432$'],
      answer: 0,
      solution:
        'Route one, build left to right. The first digit has $4$ choices. Each of the next four digits must differ from the digit just before it, and whichever digit that was, exactly $3$ options remain. Multiply: $4 \\cdot 3 \\cdot 3 \\cdot 3 \\cdot 3 = 324$ ✓. Route two, match strings to step codes. Arrange $1, 2, 3, 4$ around a circle and record each digit after the first by how many steps clockwise it sits from the previous digit: $1$, $2$, or $3$ steps, never $0$, since neighbors differ. A string is recovered from its first digit and its four step counts, and every choice of first digit and steps from $\\{1, 2, 3\\}$ gives a valid string, so the strings match the $4 \\cdot 3^4 = 324$ codes ✓. (Choosing $1024 = 4^5$ ALLOWS EQUAL NEIGHBORS ✗. Choosing $108 = 4 \\cdot 3^3$ DROPS ONE OF THE FOUR RESTRICTED STEPS ✗. Choosing $432 = 4 \\cdot 4 \\cdot 3^3$ LEAVES THE SECOND DIGIT UNRESTRICTED ✗.)',
    },
    {
      q: 'A row of $6$ flags is hung left to right, and each flag is red, green, or blue. A color may be used on several flags, but no two neighboring flags may be the same color. How many different rows are possible?',
      choices: ['$729$', '$48$', '$96$', '$192$'],
      answer: 2,
      solution:
        'Route one, build left to right. The first flag has $3$ colors. Each later flag must avoid only the color just before it, so it has $2$ options no matter what that color was. Multiply: $3 \\cdot 2^5 = 96$ ✓. Route two, tally rows by their last color. For a row of $1$ flag, each color ends $1$ row. A row of $k$ flags ending in a given color is a row of $k - 1$ flags ending in either of the other two colors, so each color’s tally at length $k$ is the sum of the other two tallies at length $k - 1$. From $(1, 1, 1)$ the tallies go to $(2, 2, 2)$, $(4, 4, 4)$, $(8, 8, 8)$, $(16, 16, 16)$, and at length $6$, $(32, 32, 32)$. Add the three: $96$ ✓. (Choosing $729 = 3^6$ ALLOWS NEIGHBORING FLAGS TO MATCH ✗. Choosing $48 = 3 \\cdot 2^4$ DROPS ONE FLAG ✗. Choosing $192 = 3 \\cdot 2^6$ ADDS AN EXTRA FLAG, restricting the first flag as if it had a neighbor before it ✗.)',
    },
    {
      q: 'How many four-digit strings use only the digits $1, 2, 3$ (a digit may repeat, and the string may begin with any of them) and have at least one pair of neighboring digits that are equal?',
      choices: ['$24$', '$57$', '$54$', '$36$'],
      answer: 1,
      solution:
        'Route one, subtract the strings with no equal neighbors. All strings: $3^4 = 81$. Strings with every neighbor pair different are built with $3$ choices for the first digit and $2$ for each of the next three: $3 \\cdot 2 \\cdot 2 \\cdot 2 = 24$. Subtract: $81 - 24 = 57$ ✓. Route two, build by the pattern of the three neighbor gaps. Mark each of the $3$ gaps between neighboring positions as "same" or "different". Given a pattern, the first digit has $3$ choices, each "same" gap forces the next digit, and each "different" gap allows $2$. Exactly one "same" gap: $3$ patterns, $3 \\cdot 2 \\cdot 2 = 12$ strings each, $36$. Exactly two: $3$ patterns, $3 \\cdot 2 = 6$ each, $18$. All three "same": $3$ strings. Add: $36 + 18 + 3 = 57$ ✓. (Choosing $24$ COUNTS THE STRINGS WITH NO EQUAL NEIGHBORS, the opposite condition ✗. Choosing $54$ SUBTRACTS $27 = 3^3$, treating the no-equal-neighbor count as three free digits ✗. Choosing $36$ COUNTS ONLY THE STRINGS WITH EXACTLY ONE EQUAL PAIR ✗.)',
    },
  ],
  // s8 — digit-sum parity, where the last digit is chosen last.
  [
    {
      q: 'How many four-digit positive integers have a digit sum that is odd?',
      choices: ['$9000$', '$5000$', '$4536$', '$4500$'],
      answer: 3,
      solution:
        'Route one, choose the units digit last. The thousands, hundreds, and tens digits are free: $9 \\cdot 10 \\cdot 10 = 900$ ways. Whatever they add to, the units digit must have the parity that makes the total odd, and exactly $5$ of the ten digits have that parity. Multiply: $900 \\cdot 5 = 4500$ ✓. Route two, pair the numbers up. Match each four-digit number with the number obtained by replacing its units digit $d$ with $9 - d$. The two partners differ by an odd amount in one digit, so exactly one of them has an odd digit sum, and applying the rule twice returns the original number, so the $9000$ four-digit numbers split into pairs with one odd-sum number each: $9000 \\div 2 = 4500$ ✓. (Choosing $9000$ IGNORES THE PARITY CONDITION ✗. Choosing $5000$ LETS THE THOUSANDS DIGIT BE $0$, halving $10000$ ✗. Choosing $4536$ REQUIRES DIFFERENT DIGITS, a condition the stem never states ✗.)',
    },
    {
      q: 'A code is a string of $4$ digits, and it may start with $0$. How many codes have a digit sum that is a multiple of $5$?',
      choices: ['$1000$', '$2000$', '$1800$', '$2500$'], answer: 1,
      solution:
        'Route one, choose the last digit last. The first three digits are free: $10^3 = 1000$ ways. Whatever their sum $s$ is, the last digit must be congruent to $-s$ modulo $5$, and exactly $2$ of the digits $0$ through $9$ lie in any given residue class modulo $5$. Multiply: $1000 \\cdot 2 = 2000$ ✓. Route two, show the five remainders are equally common. Send each code to the code whose last digit is one larger, with $9$ wrapping to $0$. Adding $1$ raises the digit sum by $1$; the wrap from $9$ to $0$ lowers it by $9$, which also shifts the remainder modulo $5$ up by $1$. So this rule carries the codes with remainder $0$ onto those with remainder $1$, then onto $2$, $3$, $4$, and back, and every class has the same size, $10000 \\div 5 = 2000$ ✓. (Choosing $1000$ ALLOWS ONLY ONE LAST DIGIT PER REMAINDER, forgetting that two digits share each residue ✗. Choosing $1800$ BANS A LEADING $0$, which the stem allows ✗. Choosing $2500$ DIVIDES BY THE NUMBER OF DIGITS instead of by $5$ ✗.)',
    },
    {
      q: 'How many even three-digit positive integers have a digit sum that is even?',
      choices: ['$225$', '$450$', '$250$', '$125$'], answer: 0,
      solution:
        'Route one, build with the tens digit chosen last. The units digit is even, $5$ choices, and being even it does not change the parity of the sum; the hundreds digit has $9$ choices. The tens digit must then match the hundreds digit’s parity, and $5$ digits do. Multiply: $5 \\cdot 9 \\cdot 5 = 225$ ✓. Route two, pair the even numbers up. There are $9 \\cdot 10 \\cdot 5 = 450$ even three-digit numbers. Match each with the number whose tens digit $t$ is replaced by $9 - t$: the partner is still even and still three-digit, its digit sum changes by an odd amount, and the rule undoes itself. So the $450$ numbers split into pairs with exactly one even-sum member each: $450 \\div 2 = 225$ ✓. (Choosing $450$ IGNORES THE DIGIT-SUM CONDITION ✗. Choosing $250 = 10 \\cdot 5 \\cdot 5$ LETS THE HUNDREDS DIGIT BE $0$ ✗. Choosing $125$ COUNTS ONLY THE NUMBERS WITH AN ODD HUNDREDS DIGIT ✗.)',
    },
  ],
  // s9 — an even last digit with distinct digits, where 0 is a special case.
  [
    {
      q: 'How many even five-digit positive integers have five different digits?',
      choices: ['$15120$', '$13440$', '$13776$', '$10752$'],
      answer: 2,
      solution:
        'Route one, case on the units digit. Units $0$: the other four digits are chosen left to right from the nine nonzero digits, $9 \\cdot 8 \\cdot 7 \\cdot 6 = 3024$. Units $2, 4, 6$, or $8$: the first digit avoids $0$ and the units digit, $8$ choices, then $8, 7, 6$: $4 \\cdot 8 \\cdot 8 \\cdot 7 \\cdot 6 = 10752$. Add: $3024 + 10752 = 13776$ ✓. Route two, count strings and remove the leading zeros. Strings of $5$ different digits ending in an even digit, leading $0$ allowed: $5$ choices for the last digit and then $9 \\cdot 8 \\cdot 7 \\cdot 6$ for the rest, $15120$. The illegal ones start with $0$, so their last digit is one of $2, 4, 6, 8$ and the middle three come from the other $8$ digits: $4 \\cdot 8 \\cdot 7 \\cdot 6 = 1344$. Subtract: $15120 - 1344 = 13776$ ✓. (Choosing $15120$ LETS THE NUMBER START WITH $0$ ✗. Choosing $13440 = 5 \\cdot 8 \\cdot 8 \\cdot 7 \\cdot 6$ TREATS UNITS $0$ LIKE THE OTHER EVEN DIGITS, giving the first digit only $8$ choices in that case ✗. Choosing $10752$ FORGETS THE UNITS-$0$ CASE ✗.)',
    },
    {
      q: 'How many codes of $4$ different letters chosen from A, B, C, D, E, F, G, H end in A or E?',
      choices: ['$420$', '$1680$', '$210$', '$672$'],
      answer: 0,
      solution:
        'Route one, most restricted first. The last letter is A or E: $2$ choices. The first three positions are then filled left to right from the remaining $7$ letters with no repeats: $7 \\cdot 6 \\cdot 5 = 210$. Multiply: $2 \\cdot 210 = 420$ ✓. Route two, use symmetry over the last letter. All codes of $4$ different letters from $8$: $8 \\cdot 7 \\cdot 6 \\cdot 5 = 1680$. No letter is favored, so each of the $8$ letters is the last letter of the same number of codes, $1680 \\div 8 = 210$. Two letters qualify: $2 \\cdot 210 = 420$ ✓. (Choosing $1680$ IGNORES THE CONDITION ON THE LAST LETTER ✗. Choosing $210$ ALLOWS ONLY ONE OF THE TWO VOWELS ✗. Choosing $672 = 2 \\cdot 8 \\cdot 7 \\cdot 6$ LETS THE LAST LETTER REPEAT an earlier one ✗.)',
    },
    {
      q: 'How many even four-digit positive integers have four different digits and an even thousands digit?',
      choices: ['$1120$', '$1024$', '$672$', '$896$'], answer: 3,
      solution:
        'Route one, fill the two even positions first. The thousands digit is even and nonzero: $2, 4, 6$, or $8$, $4$ choices. The units digit is even and different from it: $4$ of the five even digits remain. The hundreds and tens digits then avoid the two digits used: $8 \\cdot 7 = 56$. Multiply: $4 \\cdot 4 \\cdot 56 = 896$ ✓. Route two, case on the units digit. Units $0$: the thousands digit is any of the $4$ nonzero even digits and the middle two are $8 \\cdot 7$: $224$. Units $2, 4, 6$, or $8$: the thousands digit is one of the $3$ other nonzero even digits, then $8 \\cdot 7$: $4 \\cdot 3 \\cdot 56 = 672$. Add: $224 + 672 = 896$ ✓. (Choosing $1120 = 4 \\cdot 5 \\cdot 56$ LETS THE UNITS DIGIT REPEAT THE THOUSANDS DIGIT ✗. Choosing $1024 = 4 \\cdot 4 \\cdot 8 \\cdot 8$ LETS THE TENS DIGIT REPEAT THE HUNDREDS DIGIT ✗. Choosing $672$ FORGETS THE UNITS-$0$ CASE ✗.)',
    },
  ],
  // s10 — divisibility fixes the ending; distinct digits make 0 special.
  [
    {
      q: 'How many five-digit positive integers have five different digits and are divisible by $25$?',
      choices: ['$882$', '$1008$', '$1260$', '$924$'],
      answer: 3,
      solution:
        'Route one, case on the last two digits. A multiple of $25$ ends in $00, 25, 50$, or $75$, and $00$ repeats a digit. Ending $25$: the first digit avoids $0, 2, 5$, $7$ choices, then the next two avoid the digits used, $7 \\cdot 6$: $294$. Ending $75$: likewise $294$. Ending $50$: the first digit avoids only $5$ and $0$, $8$ choices, then $7 \\cdot 6$: $336$. Add: $294 + 294 + 336 = 924$ ✓. Route two, count strings and remove the leading zeros. Allow a leading $0$ for a moment: for each of the endings $25, 50, 75$ the first three slots take $8 \\cdot 7 \\cdot 6 = 336$ strings, $1008$ in all. The illegal ones start with $0$; that is impossible with ending $50$, and with ending $25$ or $75$ the two middle slots come from the $7$ unused digits, $7 \\cdot 6 = 42$ each. Subtract: $1008 - 84 = 924$ ✓. (Choosing $882 = 3 \\cdot 294$ TREATS THE $50$ ENDING LIKE THE OTHERS, forgetting that $0$ is already used there ✗. Choosing $1008$ LETS THE NUMBER START WITH $0$ ✗. Choosing $1260$ INCLUDES THE $00$ ENDING, which repeats a digit ✗.)',
    },
    {
      q: 'How many three-digit positive integers have three different digits and are divisible by $15$?',
      choices: ['$60$', '$47$', '$48$', '$24$'],
      answer: 1,
      solution:
        'Route one, fix the units digit and build the rest. A multiple of $15$ ends in $0$ or $5$ and has a digit sum divisible by $3$. Units $0$: the hundreds and tens digits are two different nonzero digits whose sum is a multiple of $3$. Sort $1$–$9$ by remainder modulo $3$: three digits in each class. Both from the remainder-$0$ class, $3 \\cdot 2 = 6$ ordered pairs, or one from remainder $1$ and one from remainder $2$ in either order, $2 \\cdot 3 \\cdot 3 = 18$: $24$ numbers. Units $5$: the hundreds and tens digits avoid $5$, differ, and have a sum with remainder $1$. The remaining digits by remainder are $\\{0, 3, 6, 9\\}$, $\\{1, 4, 7\\}$, $\\{2, 8\\}$. Hundreds from $\\{3, 6, 9\\}$ with tens from remainder $1$: $9$; hundreds from remainder $1$ with tens from remainder $0$: $12$; both from remainder $2$: $2$. That is $23$. Add: $24 + 23 = 47$ ✓. Route two, list and strike. The three-digit multiples of $15$ run from $105$ to $990$: $990 \\div 15 - 105 \\div 15 + 1 = 66 - 7 + 1 = 60$ numbers. Those with a repeated digit are $225, 255, 300, 330, 525, 555, 585, 600, 660, 855, 885, 900, 990$: $13$ of them. Strike them: $60 - 13 = 47$ ✓. (Choosing $60$ IGNORES THE DIFFERENT-DIGITS CONDITION ✗. Choosing $48$ TREATS THE UNITS-$5$ CASE LIKE THE UNITS-$0$ CASE, giving it $24$ as well ✗. Choosing $24$ FORGETS THE UNITS-$5$ CASE ✗.)',
    },
    {
      q: 'How many odd four-digit positive integers have four different digits and are divisible by $25$?',
      choices: ['$98$', '$154$', '$112$', '$49$'],
      answer: 0,
      solution:
        'Route one, fix the ending and build the front. An odd multiple of $25$ ends in $25$ or $75$. With ending $25$, the thousands digit avoids $0, 2, 5$: $7$ choices, and the hundreds digit avoids the three digits used: $7$ choices, $49$ numbers. Ending $75$: likewise $49$. Add: $49 + 49 = 98$ ✓. Route two, count strings and remove the leading zeros. Allow a leading $0$ for a moment: for each ending the two front slots are filled from the $8$ unused digits with no repeat, $8 \\cdot 7 = 56$, so $112$ strings. The illegal ones start with $0$, and then the hundreds digit is one of the $7$ digits still unused: $7$ per ending, $14$ in all. Subtract: $112 - 14 = 98$ ✓. (Choosing $154$ INCLUDES THE $50$ ENDING, which is even ✗. Choosing $112$ LETS THE NUMBER START WITH $0$ ✗. Choosing $49$ FORGETS THE $75$ ENDING ✗.)',
    },
  ],
]

export default { book: 'intro-counting', number: 2, sections: { '2.4': s24 } }
