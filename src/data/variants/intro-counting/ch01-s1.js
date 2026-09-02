// Counting & Probability chapter 1 — variations for section 1.2
// (Counting Lists of Numbers). All problems and solutions are original
// MathQuest content.
//
// House rules for this file:
//  - Every stem settles its own conventions: "from … to" and "through" include
//    both ends, "strictly between" excludes both, and every list is spelled out
//    far enough to fix its step.
//  - Every keyed answer is reached twice along routes that share no steps: the
//    posts-and-gaps count against a complementary count, a block count, a
//    bijection, or a remainder argument. Route two never reuses route one’s number.
//  - Each distractor is one named slip — counting gaps instead of posts, adding
//    the one back twice, ignoring the lower bound, dividing by the first term
//    instead of the step — and the slip is named in CAPS.

const s12 = [
  // slot 1 — a plain consecutive list
  [
    {
      q: 'How many integers are in the list $27, 28, 29, \\ldots, 85$ of consecutive integers?',
      choices: ['$58$', '$60$', '$57$', '$59$'],
      answer: 3,
      solution:
        'Route one, posts and gaps. The jump from $27$ to $85$ is $85 - 27 = 58$, and that counts the gaps between neighbors; a row of posts has one more post than gaps, so the list has $58 + 1 = 59$ integers ✓. Route two, count the complement. The list $1, 2, \\ldots, 85$ has $85$ integers, and the ones we do not want are $1, 2, \\ldots, 26$, which number $26$. Removing them leaves $85 - 26 = 59$ ✓. (The choice $58$ is COUNTING THE GAPS INSTEAD OF THE POSTS ✗; $60$ is ADDING THE ONE BACK TWICE ✗; $57$ is DROPPING BOTH ENDS of the list ✗.)',
    },
    {
      q: 'A hotel’s rooms are numbered $213$ through $289$, with every number in that range used exactly once and none skipped. How many rooms does the hotel have?',
      choices: ['$76$', '$77$', '$78$', '$75$'],
      answer: 1,
      solution:
        'Route one, posts and gaps. Rooms $213$ through $289$ form a consecutive list, and $289 - 213 = 76$ counts only the jumps from one room to the next. Adding the first room back gives $76 + 1 = 77$ rooms ✓. Route two, count in blocks of ten. Rooms $213$ through $219$ are $7$ rooms. After that come the full decades $220$–$229$, $230$–$239$, $\\ldots$, $280$–$289$: that is seven decades of $10$ rooms each, or $70$ rooms. Altogether $7 + 70 = 77$ ✓. (The choice $76$ is the BARE SUBTRACTION, which counts gaps and misses room $213$ ✗; $78$ is ADDING THE ONE BACK TWICE ✗; $75$ is DROPPING BOTH THE FIRST AND LAST ROOM ✗.)',
    },
    {
      q: 'The list $19, 20, 21, \\ldots, n$ of consecutive integers contains exactly $45$ integers. What is $n$?',
      choices: ['$63$', '$64$', '$62$', '$26$'],
      answer: 0,
      solution:
        'Route one, posts and gaps. A consecutive list from $19$ to $n$ has $n - 19 + 1$ members, so $n - 18 = 45$ and $n = 63$ ✓. Route two, walk to the $45$th term. The first term is $19 + 0$, the second is $19 + 1$, and in general the $k$th term is $19 + (k - 1)$. The $45$th term is $19 + 44 = 63$, and since the list ends at its $45$th term, $n = 63$ ✓. (The choice $64$ is $19 + 45$, TREATING $45$ AS THE NUMBER OF GAPS rather than posts ✗; $62$ is SUBTRACTING ONE TWICE, as if both ends were missing ✗; $26$ is $45 - 19$, SUBTRACTING THE START FROM THE COUNT, which is not a term of the list at all ✗.)',
    },
  ],
  // slot 2 — consecutive lists dressed as lockers, dates, and tickets
  [
    {
      q: 'The lockers along a hallway are numbered $152$ through $243$, with no number skipped, and exactly one student is assigned to each locker. How many students have a locker?',
      choices: ['$91$', '$92$', '$93$', '$90$'],
      answer: 1,
      solution:
        'Route one, posts and gaps. The lockers are the consecutive integers from $152$ to $243$, so there are $243 - 152 + 1 = 91 + 1 = 92$ of them, one per student ✓. Route two, count the complement. Imagine lockers numbered $1$ through $243$; that is $243$ lockers. The hallway is missing lockers $1$ through $151$, which is $151$ lockers, so it has $243 - 151 = 92$ ✓. (The choice $91$ is the BARE SUBTRACTION $243 - 152$, which counts gaps and leaves out one student ✗; $93$ is ADDING THE ONE BACK TWICE ✗; $90$ is DROPPING BOTH END LOCKERS ✗.)',
    },
    {
      q: 'A school play is performed once a day, every day from March $4$ through March $30$, with both of those dates included and no day missed. How many performances are there?',
      choices: ['$26$', '$28$', '$31$', '$27$'],
      answer: 3,
      solution:
        'Route one, posts and gaps. The performance dates are the consecutive integers $4, 5, \\ldots, 30$, and $30 - 4 = 26$ counts the days that pass between the first show and the last. The shows themselves number one more: $26 + 1 = 27$ ✓. Route two, subtract the dark days from the month. March has $31$ days. The play is dark on March $1$, $2$, and $3$, and again on March $31$: that is $4$ dark days, so it plays on $31 - 4 = 27$ days ✓. (The choice $26$ is COUNTING THE GAPS between shows instead of the shows ✗; $28$ is ADDING THE ONE BACK TWICE ✗; $31$ is COUNTING EVERY DAY OF MARCH, ignoring that the run starts on the $4$th and ends on the $30$th ✗.)',
    },
    {
      q: 'Raffle tickets are numbered consecutively starting at $251$, and exactly $68$ tickets are printed. What is the number on the last ticket?',
      choices: ['$319$', '$317$', '$318$', '$183$'],
      answer: 2,
      solution:
        'Route one, posts and gaps. Sixty-eight tickets in a row have $67$ jumps between neighbors, and each jump adds $1$, so the last number is $251 + 67 = 318$ ✓. Route two, count the complement. If the last ticket is $L$, then tickets $1$ through $L$ would number $L$, and the ones never printed are $1$ through $250$, so the printed tickets number $L - 250$. Setting $L - 250 = 68$ gives $L = 318$ ✓. (The choice $319$ is $251 + 68$, ADDING ONE JUMP PER TICKET and forgetting that the first ticket needs no jump ✗; $317$ is SUBTRACTING ONE TWICE ✗; $183$ is $251 - 68$, SUBTRACTING THE COUNT FROM THE START instead of adding ✗.)',
    },
  ],
  // slot 3 — lists that climb by a fixed step from the step itself
  [
    {
      q: 'How many numbers are in the list $6, 12, 18, \\ldots, 174$, in which each number is $6$ more than the one before?',
      choices: ['$28$', '$168$', '$29$', '$30$'],
      answer: 2,
      solution:
        'Route one, shrink the list. Every entry is a multiple of $6$, so dividing each by $6$ turns the list into $1, 2, 3, \\ldots, 29$ without changing its length. That consecutive list has $29$ members ✓. Route two, posts and gaps with a wide gap. From $6$ to $174$ is a climb of $174 - 6 = 168$, taken in steps of $6$, so there are $\\frac{168}{6} = 28$ gaps between neighbors. Posts outnumber gaps by one: $28 + 1 = 29$ ✓. (The choice $28$ is COUNTING THE GAPS INSTEAD OF THE POSTS ✗; $168$ is STOPPING AT THE BARE SUBTRACTION $174 - 6$ without dividing by the step ✗; $30$ is ADDING THE ONE BACK TWICE ✗.)',
    },
    {
      q: 'A hiking trail has a distance marker every $9$ meters: at $9$ m, $18$ m, $27$ m, and so on, with the last marker at $405$ m and no marker at the trailhead itself. How many markers are on the trail?',
      choices: ['$45$', '$44$', '$46$', '$396$'],
      answer: 0,
      solution:
        'Route one, name each marker by its index. The marker at $9k$ meters is the $k$th marker, so the marker at $405$ m is marker number $\\frac{405}{9} = 45$, and the markers are numbered $1$ through $45$: there are $45$ of them ✓. Route two, posts and gaps. Between the first marker at $9$ m and the last at $405$ m lie $405 - 9 = 396$ meters, which is $\\frac{396}{9} = 44$ stretches of $9$ m, each ending at a marker. Those $44$ stretches sit between $45$ markers ✓. (The choice $44$ is COUNTING THE $9$-METER STRETCHES instead of the markers ✗; $46$ is COUNTING A MARKER AT THE TRAILHEAD, which the problem rules out ✗; $396$ is the DISTANCE FROM THE FIRST MARKER TO THE LAST, never divided by the spacing ✗.)',
    },
    {
      q: 'The list $11, 22, 33, \\ldots, m$, in which each number is $11$ more than the one before, contains exactly $38$ numbers. What is $m$?',
      choices: ['$429$', '$407$', '$396$', '$418$'],
      answer: 3,
      solution:
        'Route one, index the multiples. The list is $11 \\cdot 1, 11 \\cdot 2, 11 \\cdot 3, \\ldots$, so its $k$th number is $11k$. The list stops at its $38$th number, which is $11 \\cdot 38 = 418$, so $m = 418$ ✓. Route two, posts and gaps. Thirty-eight numbers in a row have $37$ gaps between neighbors, and each gap is $11$ wide, so the last number sits $37 \\cdot 11 = 407$ above the first: $m = 11 + 407 = 418$ ✓. (The choice $429$ is $11 \\cdot 39$, TREATING $38$ AS THE GAP COUNT and adding a post ✗; $407$ is $11 \\cdot 37$, SUBTRACTING ONE FROM THE COUNT that was already a post count ✗; $396$ is $11 \\cdot 36$, SUBTRACTING ONE TWICE ✗.)',
    },
  ],
  // slot 4 — multiples of k between bounds that are not themselves multiples
  [
    {
      q: 'How many multiples of $9$ are there from $40$ to $500$, inclusive?',
      choices: ['$51$', '$50$', '$55$', '$52$'],
      answer: 0,
      solution:
        'Route one, find the ends and shrink. The first multiple of $9$ at or above $40$ is $45 = 9 \\cdot 5$, and the last at or below $500$ is $495 = 9 \\cdot 55$. Dividing the list $45, 54, \\ldots, 495$ by $9$ gives $5, 6, \\ldots, 55$, which has $55 - 5 + 1 = 51$ members ✓. Route two, count the complement. The multiples of $9$ from $1$ to $500$ number $\\lfloor 500/9 \\rfloor = 55$, since $9 \\cdot 55 = 495$. The ones below $40$ are $9, 18, 27, 36$, which is $\\lfloor 39/9 \\rfloor = 4$ of them. That leaves $55 - 4 = 51$ ✓. (The choice $50$ is COUNTING THE GAPS in the list $5, \\ldots, 55$ instead of the posts ✗; $55$ is IGNORING THE LOWER BOUND and counting every multiple of $9$ from $9$ up ✗; $52$ is ADDING THE ONE BACK TWICE ✗.)',
    },
    {
      q: 'How many three-digit positive integers are multiples of $12$?',
      choices: ['$74$', '$83$', '$75$', '$76$'],
      answer: 2,
      solution:
        'Route one, find the ends and shrink. The smallest three-digit multiple of $12$ is $108 = 12 \\cdot 9$ (since $12 \\cdot 8 = 96$ has only two digits), and the largest is $996 = 12 \\cdot 83$ (since $12 \\cdot 84 = 1008$ has four). Dividing the list by $12$ gives $9, 10, \\ldots, 83$, which has $83 - 9 + 1 = 75$ members ✓. Route two, count the complement. The multiples of $12$ up to $999$ number $\\lfloor 999/12 \\rfloor = 83$, and the ones up to $99$ number $\\lfloor 99/12 \\rfloor = 8$. The three-digit ones are what remain: $83 - 8 = 75$ ✓. (The choice $74$ is COUNTING THE GAPS in $9, \\ldots, 83$ rather than the posts ✗; $83$ is IGNORING THE LOWER BOUND and counting the two-digit multiples too ✗; $76$ is ADDING THE ONE BACK TWICE ✗.)',
    },
    {
      q: 'The number $N$ is a multiple of $8$, and there are exactly $30$ multiples of $8$ from $100$ to $N$, inclusive. What is $N$?',
      choices: ['$344$', '$336$', '$328$', '$340$'],
      answer: 1,
      solution:
        'Route one, start at the first multiple and step. The first multiple of $8$ at or above $100$ is $104$, since $8 \\cdot 13 = 104$ and $8 \\cdot 12 = 96$ is too small. Thirty multiples in a row have $29$ gaps of width $8$ between them, so the last one is $104 + 29 \\cdot 8 = 104 + 232 = 336$ ✓. Route two, count the complement. The multiples of $8$ from $1$ to $N$ number $\\frac{N}{8}$ because $N$ is itself a multiple of $8$, and the ones below $100$ number $\\lfloor 99/8 \\rfloor = 12$. So $\\frac{N}{8} - 12 = 30$, giving $\\frac{N}{8} = 42$ and $N = 336$ ✓. (The choice $344$ is $8 \\cdot 43$, TREATING $30$ AS THE NUMBER OF GAPS and taking one step too many ✗; $328$ is $8 \\cdot 41$, SUBTRACTING ONE FROM A COUNT THAT WAS ALREADY POSTS ✗; $340$ is $100 + 30 \\cdot 8$, STEPPING FROM $100$ ITSELF, which is not a multiple of $8$, so the result is not even a possible value of $N$ ✗.)',
    },
  ],
  // slot 5 — stepped lists that do not start at the step
  [
    {
      q: 'How many numbers are in the list $5, 11, 17, \\ldots, 245$, in which each number is $6$ more than the one before?',
      choices: ['$40$', '$41$', '$42$', '$49$'],
      answer: 1,
      solution:
        'Route one, shrink the list. Subtract $5$ from every entry to get $0, 6, 12, \\ldots, 240$, then divide by $6$ to get $0, 1, 2, \\ldots, 40$. Neither move changes the length, and the last list has $40 - 0 + 1 = 41$ members ✓. Route two, count by blocks of six. Every entry leaves remainder $5$ when divided by $6$, and every number from $1$ to $245$ with that remainder is in the list. The integers $1$ through $240$ form $40$ complete blocks of six consecutive integers, and each block holds exactly one number with remainder $5$; the leftover stretch $241, \\ldots, 245$ contributes one more, namely $245$. That is $40 + 1 = 41$ ✓. (The choice $40$ is COUNTING THE GAPS INSTEAD OF THE POSTS ✗; $42$ is ADDING THE ONE BACK TWICE ✗; $49$ is $245 \\div 5$, DIVIDING BY THE FIRST TERM INSTEAD OF THE STEP ✗.)',
    },
    {
      q: 'A bus leaves the terminal at 6:05, then at 6:20, 6:35, and so on, one bus every $15$ minutes. The last bus of the morning leaves at 10:50. How many buses leave the terminal?',
      choices: ['$19$', '$21$', '$16$', '$20$'],
      answer: 3,
      solution:
        'Route one, posts and gaps. From 6:05 to 10:50 is $4$ hours $45$ minutes, which is $285$ minutes, and $\\frac{285}{15} = 19$ gaps of $15$ minutes separate the first bus from the last. The buses are the posts between those gaps, so there are $19 + 1 = 20$ ✓. Route two, count by the hour. In the $6$ o’clock hour the buses leave at 6:05, 6:20, 6:35, and 6:50, which is $4$ buses, and the $7$, $8$, and $9$ o’clock hours each have the same four departures: $4 \\cdot 4 = 16$ buses through 9:50. The $10$ o’clock hour adds 10:05, 10:20, 10:35, and 10:50, and stops there. Total $16 + 4 = 20$ ✓. (The choice $19$ is COUNTING THE $15$-MINUTE GAPS instead of the buses ✗; $21$ is ADDING THE ONE BACK TWICE ✗; $16$ is COUNTING FOUR BUSES AN HOUR FOR FOUR HOURS and forgetting the $10$ o’clock departures ✗.)',
    },
    {
      q: 'An arithmetic list starts at $8$, climbs by $6$ from each number to the next, and contains exactly $52$ numbers. What is its last number?',
      choices: ['$320$', '$308$', '$314$', '$312$'],
      answer: 2,
      solution:
        'Route one, posts and gaps. Fifty-two numbers in a row have $51$ gaps between neighbors, each of width $6$, so the last number sits $51 \\cdot 6 = 306$ above the first: $8 + 306 = 314$ ✓. Route two, write the $k$th term by its remainder. Every number in the list is $2$ more than a multiple of $6$: the first is $6 \\cdot 1 + 2$, the second is $6 \\cdot 2 + 2$, and the $k$th is $6k + 2$. The list ends at its $52$nd number, $6 \\cdot 52 + 2 = 312 + 2 = 314$ ✓. (The choice $320$ is $8 + 52 \\cdot 6$, TAKING $52$ STEPS when $52$ numbers need only $51$ ✗; $308$ is $8 + 50 \\cdot 6$, SUBTRACTING ONE TWICE ✗; $312$ is $52 \\cdot 6$, FORGETTING THE LIST STARTS AT $8$ rather than at $6$ ✗.)',
    },
  ],
  // slot 6 — digit conditions that hide a step-10 list
  [
    {
      q: 'How many four-digit positive integers have $7$ as their units digit?',
      choices: ['$1000$', '$899$', '$90$', '$900$'],
      answer: 3,
      solution:
        'Route one, count the list. The numbers are $1007, 1017, 1027, \\ldots, 9997$, climbing by $10$ each time. From $1007$ to $9997$ is a rise of $8990$, which is $\\frac{8990}{10} = 899$ gaps, so the list has $899 + 1 = 900$ members ✓. Route two, build the number digit by digit. The units digit is fixed at $7$. The thousands digit can be any of $1$ through $9$, since a four-digit number cannot start with $0$, and the hundreds and tens digits can each be any of $0$ through $9$. That gives $9 \\cdot 10 \\cdot 10 = 900$ numbers ✓. (The choice $1000$ is LETTING THE THOUSANDS DIGIT BE $0$, which sneaks in three-digit numbers like $0017$ ✗; $899$ is COUNTING THE GAPS INSTEAD OF THE POSTS ✗; $90$ is DROPPING A FACTOR OF $10$, as if only one of the middle digits were free ✗.)',
    },
    {
      q: 'How many positive integers less than $700$ have $4$ as their units digit?',
      choices: ['$69$', '$70$', '$71$', '$60$'],
      answer: 1,
      solution:
        'Route one, count the list. The numbers are $4, 14, 24, \\ldots, 694$, the last one because $704$ is already past $700$. Subtracting $4$ and dividing by $10$ turns the list into $0, 1, 2, \\ldots, 69$, which has $70$ members ✓. Route two, count by blocks of ten. Split $0$ through $699$ into the blocks $0$–$9$, $10$–$19$, $\\ldots$, $690$–$699$. There are $\\frac{700}{10} = 70$ blocks, and each block contains exactly one number ending in $4$, so there are $70$ such numbers (the block $0$–$9$ contributes $4$, which is positive, so nothing is lost) ✓. (The choice $69$ is COUNTING THE GAPS INSTEAD OF THE POSTS ✗; $71$ is INCLUDING $704$, which is not less than $700$ ✗; $60$ is COUNTING ONLY THE THREE-DIGIT NUMBERS and forgetting $4, 14, \\ldots, 94$ ✗.)',
    },
    {
      q: 'All the three-digit positive integers whose tens digit is $5$ are listed in increasing order. What is the $37$th number in the list?',
      choices: ['$456$', '$457$', '$356$', '$455$'],
      answer: 0,
      solution:
        'Route one, count by hundreds. Each hundred contributes the ten numbers with tens digit $5$: the $100$s give $150$ through $159$, the $200$s give $250$ through $259$, and the $300$s give $350$ through $359$. That is $30$ numbers, so the $31$st is $450$, the $32$nd is $451$, and the $37$th is $456$ ✓. Route two, a bijection with two-digit numbers. Deleting the tens digit $5$ from such a number leaves its hundreds digit followed by its units digit, a two-digit number from $10$ to $99$, and this pairing keeps the order: the list corresponds to $10, 11, 12, \\ldots, 99$. The $37$th two-digit number starting from $10$ is $10 + 36 = 46$, so the $37$th number in the list is $4$, then $5$, then $6$: $456$ ✓. (The choice $457$ is ADDING $7$ TO $450$ instead of $6$, treating $450$ as the $30$th rather than the $31$st ✗; $455$ is SUBTRACTING ONE TOO MANY, landing on the $36$th number ✗; $356$ is STOPPING ONE HUNDRED SHORT, the $27$th number rather than the $37$th ✗.)',
    },
  ],
  // slot 7 — lists that cross zero
  [
    {
      q: 'How many integers $n$ satisfy $-23 \\le n \\le 31$?',
      choices: ['$54$', '$8$', '$55$', '$56$'],
      answer: 2,
      solution:
        'Route one, posts and gaps. The rule $b - a + 1$ works with negatives: $31 - (-23) + 1 = 31 + 23 + 1 = 55$ ✓. Route two, split at zero. The negative integers in range are $-1$ through $-23$, which is $23$ of them; the positive ones are $1$ through $31$, which is $31$; and $0$ is one more. Total $23 + 31 + 1 = 55$ ✓. (The choice $54$ is COUNTING THE GAPS INSTEAD OF THE POSTS ✗; $8$ is $31 - 23$, FORGETTING THAT SUBTRACTING A NEGATIVE ADDS ✗; $56$ is ADDING THE ONE BACK TWICE ✗.)',
    },
    {
      q: 'How many integers $n$ satisfy $-15 < n < 43$, where both inequalities are strict?',
      choices: ['$57$', '$59$', '$56$', '$58$'],
      answer: 0,
      solution:
        'Route one, trim the ends and count posts. Strict inequalities exclude $-15$ and $43$ themselves, so the integers run from $-14$ to $42$, and there are $42 - (-14) + 1 = 57$ of them ✓. Route two, split at zero. The negatives allowed are $-1$ through $-14$, which is $14$ integers; the positives are $1$ through $42$, which is $42$; and $0$ is one more. Total $14 + 42 + 1 = 57$ ✓. (The choice $59$ is INCLUDING BOTH ENDPOINTS $-15$ AND $43$, which the strict inequalities forbid ✗; $58$ is INCLUDING ONE ENDPOINT ✗; $56$ is COUNTING THE GAPS from $-14$ to $42$ instead of the posts ✗.)',
    },
    {
      q: 'The integers from $-14$ up to $k$, inclusive, number exactly $40$. What is $k$?',
      choices: ['$26$', '$54$', '$24$', '$25$'],
      answer: 3,
      solution:
        'Route one, posts and gaps. The count from $-14$ to $k$ is $k - (-14) + 1 = k + 15$, so $k + 15 = 40$ and $k = 25$ ✓. Route two, split at zero. The stretch $-14, -13, \\ldots, -1$ uses up $14$ of the integers and $0$ uses one more, which is $15$ so far. The remaining $40 - 15 = 25$ integers are the positives $1, 2, \\ldots, 25$, so the list ends at $k = 25$ ✓. (The choice $26$ is $-14 + 40$, TAKING $40$ STEPS when $40$ integers have only $39$ gaps ✗; $24$ is SUBTRACTING ONE TWICE ✗; $54$ is $40 + 14$, IGNORING THAT THE LIST STARTS BELOW ZERO and adding the start as if it were positive ✗.)',
    },
  ],
  // slot 8 — squares and cubes as lists in disguise
  [
    {
      q: 'How many perfect squares are there from $200$ to $3000$, inclusive?',
      choices: ['$40$', '$39$', '$54$', '$41$'],
      answer: 0,
      solution:
        'Route one, find the bases. The first square at or above $200$ is $15^2 = 225$, since $14^2 = 196$ falls short, and the last at or below $3000$ is $54^2 = 2916$, since $55^2 = 3025$ is too big. The bases run $15, 16, \\ldots, 54$, which is $54 - 15 + 1 = 40$ squares ✓. Route two, count the complement. The squares from $1$ up to $3000$ are $1^2$ through $54^2$, which is $54$ of them, and the squares below $200$ are $1^2$ through $14^2$, which is $14$. Subtracting, $54 - 14 = 40$ ✓. (The choice $39$ is COUNTING THE GAPS between the bases instead of the bases ✗; $54$ is IGNORING THE LOWER BOUND and counting every square from $1$ up ✗; $41$ is ADDING THE ONE BACK TWICE ✗.)',
    },
    {
      q: 'How many perfect cubes are strictly between $10$ and $5000$?',
      choices: ['$14$', '$17$', '$15$', '$16$'],
      answer: 2,
      solution:
        'Route one, find the bases. The cubes are $1, 8, 27, 64, \\ldots$; the first one above $10$ is $3^3 = 27$, and the last one below $5000$ is $17^3 = 4913$, since $18^3 = 5832$ overshoots. The bases run $3, 4, \\ldots, 17$, which is $17 - 3 + 1 = 15$ cubes ✓. Route two, count the complement. Every cube below $5000$ is one of $1^3, 2^3, \\ldots, 17^3$, which is $17$ cubes. The ones that fail to exceed $10$ are $1$ and $8$, two of them, so $17 - 2 = 15$ cubes lie strictly between $10$ and $5000$ ✓. (The choice $14$ is COUNTING THE GAPS between the bases instead of the bases ✗; $17$ is IGNORING THE LOWER BOUND and counting every cube from $1$ up ✗; $16$ is LETTING $2^3 = 8$ IN even though it is below $10$ ✗.)',
    },
    {
      q: 'All the perfect squares greater than $100$ are listed in increasing order. What is the $25$th number in the list?',
      choices: ['$1156$', '$1225$', '$1296$', '$625$'],
      answer: 1,
      solution:
        'Route one, index the bases. The first square greater than $100$ is $11^2$, the second is $12^2$, and the $k$th is $(10 + k)^2$. The $25$th is therefore $35^2 = 1225$ ✓. Route two, count the squares that were skipped. The squares not greater than $100$ are $1^2$ through $10^2$, ten of them, so the $25$th square above $100$ is the $(10 + 25) = 35$th square overall, and $35^2 = (30 + 5)^2 = 900 + 300 + 25 = 1225$ ✓. (The choice $1156$ is $34^2$, ADDING $24$ TO $10$ instead of to $11$, as if $10^2$ were the first term ✗; $1296$ is $36^2$, ADDING $25$ TO $11$, treating the $25$ as a gap count ✗; $625$ is $25^2$, TAKING THE $25$TH SQUARE OVERALL and ignoring that the list starts above $100$ ✗.)',
    },
  ],
  // slot 9 — sequences cut off by a bound
  [
    {
      q: 'The sequence $4, 13, 22, 31, \\ldots$ continues by adding $9$ each time. How many terms of the sequence are less than $800$?',
      choices: ['$88$', '$89$', '$90$', '$87$'],
      answer: 1,
      solution:
        'Route one, solve for the index. The terms are $4 + 9k$ for $k = 0, 1, 2, \\ldots$, and $4 + 9k < 800$ means $9k < 796$, so $k \\le 88$ because $9 \\cdot 88 = 792$ and $9 \\cdot 89 = 801$. The values $k = 0$ through $k = 88$ give $89$ terms ✓. Route two, find the last term and count posts. Dividing $800$ by $9$ gives $88$ with remainder $8$, so $800 = 792 + 8$ and the last term below $800$ is $792 + 4 = 796$. The list $4, 13, \\ldots, 796$ rises by $792$, which is $\\frac{792}{9} = 88$ gaps, so it has $88 + 1 = 89$ terms ✓. (The choice $88$ is FORGETTING THE $k = 0$ TERM, the number $4$ itself ✗; $90$ is INCLUDING $805$, which is not less than $800$ ✗; $87$ is SUBTRACTING ONE FROM THE GAP COUNT instead of adding one ✗.)',
    },
    {
      q: 'Tam starts at $2$ on a number line and jumps $11$ units to the right each time, landing at $13$, then $24$, and so on. Counting the starting point $2$ itself, how many of his landing points are at most $500$?',
      choices: ['$45$', '$47$', '$44$', '$46$'],
      answer: 3,
      solution:
        'Route one, solve for the index. After $k$ jumps Tam stands at $2 + 11k$, and $2 + 11k \\le 500$ means $11k \\le 498$, so $k \\le 45$ because $11 \\cdot 45 = 495$ and $11 \\cdot 46 = 506$. The values $k = 0$ through $k = 45$ give $46$ points ✓. Route two, find the last point and count posts. Dividing $500$ by $11$ gives $45$ with remainder $5$, so $500 = 495 + 5$; the last landing point at most $500$ is $495 + 2 = 497$. From $2$ to $497$ is a rise of $495$, which is $\\frac{495}{11} = 45$ jumps, and $45$ jumps connect $46$ points ✓. (The choice $45$ is COUNTING THE JUMPS AND FORGETTING THE STARTING POINT $2$ ✗; $47$ is INCLUDING $508$, which is past $500$ ✗; $44$ is DROPPING BOTH THE FIRST AND LAST POINT ✗.)',
    },
    {
      q: 'The sequence $6, 17, 28, 39, \\ldots$ continues by adding $11$ each time. What is the smallest term of the sequence that is greater than $1000$?',
      choices: ['$1001$', '$1006$', '$1007$', '$996$'],
      answer: 2,
      solution:
        'Route one, solve for the index. The terms are $6 + 11k$, and $6 + 11k > 1000$ means $11k > 994$, so $k \\ge 91$ because $11 \\cdot 90 = 990$ falls short and $11 \\cdot 91 = 1001$ does not. The smallest such term is $6 + 1001 = 1007$ ✓. Route two, chase the remainder. Every term leaves remainder $6$ when divided by $11$, and $1000 = 11 \\cdot 90 + 10$ leaves remainder $10$. Counting upward from $1000$, the remainders go $10, 0, 1, 2, 3, 4, 5, 6$, reaching $6$ at $1000 + 7 = 1007$, which is the first number past $1000$ with the right remainder ✓. (The choice $1001$ is the SMALLEST MULTIPLE OF $11$ ABOVE $1000$, forgetting the offset $6$ ✗; $1006$ is ADDING THE OFFSET TO THE BOUND, $1000 + 6$, which is not $6$ more than a multiple of $11$ ✗; $996$ is the LARGEST TERM BELOW $1000$, the wrong side of the bound ✗.)',
    },
  ],
  // slot 10 — squares and cubes with a parity or divisibility condition
  [
    {
      q: 'How many even perfect squares are strictly between $300$ and $5000$?',
      choices: ['$53$', '$26$', '$28$', '$27$'],
      answer: 3,
      solution:
        'Route one, list the even bases. A square is even exactly when its base is even. The squares in range have bases from $18$ (since $17^2 = 289$ is too small and $18^2 = 324$ is not) through $70$ (since $70^2 = 4900$ fits and $71^2 = 5041$ does not). The even bases are $18, 20, \\ldots, 70$, a step-$2$ list with $\\frac{70 - 18}{2} + 1 = 27$ members ✓. Route two, factor out the $4$. An even square is $(2m)^2 = 4m^2$, so the condition $300 < 4m^2 < 5000$ becomes $75 < m^2 < 1250$. The squares in that range are $9^2 = 81$ through $35^2 = 1225$, since $8^2 = 64$ and $36^2 = 1296$ both fall outside, so $m$ runs $9, 10, \\ldots, 35$: that is $35 - 9 + 1 = 27$ values ✓. (The choice $53$ is COUNTING EVERY SQUARE IN THE RANGE, odd ones included ✗; $26$ is COUNTING THE GAPS in the list of even bases instead of the posts ✗; $28$ is ADDING THE ONE BACK TWICE ✗.)',
    },
    {
      q: 'How many perfect squares from $1$ to $3000$, inclusive, are multiples of $5$?',
      choices: ['$11$', '$10$', '$9$', '$54$'],
      answer: 1,
      solution:
        'Route one, list the bases. A square is a multiple of $5$ exactly when its base is, because $5$ is prime. The squares up to $3000$ have bases $1$ through $54$, and the bases that are multiples of $5$ are $5, 10, 15, \\ldots, 50$, which is $\\frac{50}{5} = 10$ of them ✓. Route two, factor out the $25$. Such a square is $(5m)^2 = 25m^2$, and $25m^2 \\le 3000$ means $m^2 \\le 120$, so $m \\le 10$ because $10^2 = 100$ fits and $11^2 = 121$ does not. The values $m = 1$ through $10$ give $10$ squares ✓. (The choice $11$ is INCLUDING $55^2 = 3025$, which is past $3000$ ✗; $9$ is COUNTING THE GAPS in the list $5, 10, \\ldots, 50$ instead of the posts ✗; $54$ is COUNTING EVERY SQUARE UP TO $3000$ and ignoring the multiple-of-$5$ condition ✗.)',
    },
    {
      q: 'How many even perfect cubes are strictly between $1$ and $20{,}000$?',
      choices: ['$13$', '$26$', '$14$', '$12$'],
      answer: 0,
      solution:
        'Route one, list the even bases. A cube is even exactly when its base is even. The cubes below $20{,}000$ have bases $1$ through $27$, since $27^3 = 19683$ fits and $28^3 = 21952$ does not, and $1^3 = 1$ is excluded by the strict bound, which does not matter because $1$ is odd. The even bases are $2, 4, 6, \\ldots, 26$, which is $\\frac{26}{2} = 13$ of them ✓. Route two, factor out the $8$. An even cube is $(2m)^3 = 8m^3$, and $8m^3 < 20{,}000$ means $m^3 < 2500$, so $m \\le 13$ because $13^3 = 2197$ fits and $14^3 = 2744$ does not. The values $m = 1$ through $13$ give $13$ cubes ✓. (The choice $26$ is COUNTING EVERY CUBE IN THE RANGE, odd ones included ✗; $14$ is INCLUDING $28^3$, which is past $20{,}000$ ✗; $12$ is COUNTING THE GAPS in the list of even bases instead of the posts ✗.)',
    },
  ],
]

export default { book: 'intro-counting', number: 1, sections: { '1.2': s12 } }
