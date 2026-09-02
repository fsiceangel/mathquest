// Introduction to Counting chapter 1 — variations for section 1.4
// (Counting Multiple Events). All problems and solutions are original
// MathQuest content.
//
// House rules for this file:
//  - Every stem settles its own conventions in words: whether repeats are
//    allowed, whether order matters, whether a leading zero is permitted, and
//    that people, letters, and objects are all different from one another.
//  - Every keyed answer is reached twice along routes that share no steps. The
//    usual pairings are stage-by-stage multiplication against a bijection or a
//    complement, and casework against a proportion or a padded-string count.
//    Route two never reuses route one’s number.
//  - Each distractor is one named mistake — adding stages instead of
//    multiplying, letting a zero lead, forgetting a "skip" option, treating
//    every position like the leading one — and the mistake is named in CAPS.

const s14 = [
  // s1 — three stages that multiply, and the reverse question.
  [
    {
      q: 'A deli sandwich is built in three stages: choose one of $4$ breads, then one of $6$ fillings, then one of $3$ sauces. Every bread, filling, and sauce is different, and exactly one of each is used. How many different sandwiches can be built?',
      choices: ['$72$', '$13$', '$24$', '$42$'],
      answer: 0,
      solution:
        'Route one, multiply the stages. Whatever bread is chosen, there are still $6$ fillings, and whatever filling is chosen, there are still $3$ sauces, so the stages are independent and multiply: $4 \\cdot 6 \\cdot 3 = 72$ ✓. Route two, count one bread’s menu and repeat it. Ignore the bread for a moment and pair fillings with sauces: each of the $6$ fillings heads a row of $3$ sauces, so there are $18$ filling-and-sauce pairs, a list you could write out. Each of those $18$ pairs is available on every one of the $4$ breads, so the four breads contribute $18 + 18 + 18 + 18 = 72$ sandwiches ✓. (Choosing $13$ ADDS THE STAGE COUNTS $4 + 6 + 3$, which would count sandwiches only if each one were a single item picked from one combined list ✗. Choosing $24$ is $4 \\cdot 6$, which DROPS THE SAUCE STAGE ✗. Choosing $42$ is $6 \\cdot (4 + 3)$, which ADDS BREADS TO SAUCES as if a sandwich had one or the other ✗.)',
    },
    {
      q: 'A quiz has $4$ questions. The first two are true-or-false, and the last two each offer $5$ answer choices. Every question is answered with exactly one choice. How many different ways can the whole answer sheet be filled in?',
      choices: ['$14$', '$50$', '$100$', '$625$'],
      answer: 2,
      solution:
        'Route one, multiply question by question. The four questions are answered independently, with $2$, $2$, $5$, and $5$ options: $2 \\cdot 2 \\cdot 5 \\cdot 5 = 100$ ✓. Route two, count each half of the quiz as its own object and then pair the halves. The two true-or-false answers form a pattern such as TF or FF; there are $4$ such patterns, and you can list them all. The two five-choice answers form a pair such as (B, D); a $5 \\times 5$ grid shows there are $25$ such pairs. A filled sheet is one pattern joined to one pair, and any pattern can go with any pair, so there are $4 \\cdot 25 = 100$ sheets ✓. (Choosing $14$ ADDS THE OPTION COUNTS $2 + 2 + 5 + 5$ instead of multiplying them ✗. Choosing $50$ DROPS ONE TRUE-OR-FALSE QUESTION, computing $2 \\cdot 5 \\cdot 5$ ✗. Choosing $625 = 5^4$ TREATS THE TRUE-OR-FALSE QUESTIONS AS FIVE-CHOICE QUESTIONS ✗.)',
    },
    {
      q: 'A snack combo is one of $4$ drinks, one of $n$ chip flavors, and one of $3$ dips, all different, exactly one of each. There are exactly $84$ different combos. What is $n$?',
      choices: ['$21$', '$7$', '$77$', '$28$'],
      answer: 1,
      solution:
        'Route one, write the multiplication and undo it. The three stages multiply, so $4 \\cdot n \\cdot 3 = 84$, that is, $12n = 84$, and $n = 84 \\div 12 = 7$ ✓. Route two, build the combos flavor by flavor and count up to $84$. Ignore the chips for a moment: a $4 \\times 3$ grid of drink-and-dip pairs has $12$ cells. Every chip flavor turns each cell into one combo, so the first flavor supplies $12$ combos, the second brings the running total to $24$, then $36$, $48$, $60$, $72$, and the seventh flavor reaches exactly $84$. Seven flavors ✓. (Choosing $21$ DIVIDES BY THE DRINKS ONLY and forgets the dips, so it counts the combos per drink rather than the flavors ✗. Choosing $28$ DIVIDES BY THE DIPS ONLY, leaving the drinks still multiplied in ✗. Choosing $77$ SUBTRACTS $4$ AND $3$ FROM $84$, undoing a multiplication with subtraction ✗.)',
    },
  ],
  // s2 — a fixed number of slots with the same option count in each.
  [
    {
      q: 'A parking-garage gate code is a string of exactly $3$ characters. Each character is any one of the $26$ uppercase letters or any one of the digits $1$ through $9$ (the digit $0$ is not on the keypad), and a character may be used more than once. How many different codes are possible?',
      choices: ['$39{,}270$', '$42{,}875$', '$46{,}656$', '$18{,}305$'],
      answer: 1,
      solution:
        'Route one, count one slot and raise it to a power. Every slot has $26 + 9 = 35$ options, and because repeats are allowed, the choice in one slot never shrinks another. Three independent slots give $35^3 = 42{,}875$ codes ✓. Route two, split by how many of the three characters are letters. No letters: $9^3 = 729$ codes. Exactly one letter, which can sit in any of $3$ positions: $3 \\cdot 26 \\cdot 9^2 = 6318$. Exactly two letters, the digit in any of $3$ positions: $3 \\cdot 26^2 \\cdot 9 = 18{,}252$. Three letters: $26^3 = 17{,}576$. The cases never overlap and cover every code: $729 + 6318 + 18{,}252 + 17{,}576 = 42{,}875$ ✓. (Choosing $39{,}270 = 35 \\cdot 34 \\cdot 33$ FORBIDS REPEATS that the problem allows ✗. Choosing $46{,}656 = 36^3$ COUNTS THE MISSING DIGIT $0$ as an option ✗. Choosing $18{,}305 = 26^3 + 9^3$ counts only the ALL-LETTER AND ALL-DIGIT codes, skipping every mixed one ✗.)',
    },
    {
      q: 'A garden has $5$ flower beds in a row, and each bed is planted with exactly one of $4$ kinds of flower. Any kind may be used in several beds, and the beds are all different since they sit in different spots. How many different plantings are possible?',
      choices: ['$20$', '$625$', '$120$', '$1024$'],
      answer: 3,
      solution:
        'Route one, multiply bed by bed. Each of the $5$ beds independently takes one of $4$ kinds, so there are $4^5 = 1024$ plantings ✓. Route two, match plantings to base-four numerals. Label the kinds $0$, $1$, $2$, $3$ and read the beds from left to right as the five digits of a base-four numeral, from $00000_4$ to $33333_4$. Every planting gives exactly one such numeral and every numeral gives exactly one planting, so the count is the number of integers from $0$ through $33333_4 = 3 \\cdot 256 + 3 \\cdot 64 + 3 \\cdot 16 + 3 \\cdot 4 + 3 = 1023$, which is $1024$ integers ✓. (Choosing $20$ MULTIPLIES BEDS BY KINDS, as if a planting were one bed paired with one kind ✗. Choosing $625 = 5^4$ SWAPS THE ROLES of slots and options ✗. Choosing $120 = 5!$ ARRANGES THE BEDS IN ORDER, which is not what is being chosen ✗.)',
    },
    {
      q: 'A code is a string of $3$ symbols drawn from an alphabet of $n$ different symbols, and a symbol may be repeated within a code. There are exactly $4913$ different codes. What is $n$?',
      choices: ['$16$', '$4910$', '$17$', '$70$'],
      answer: 2,
      solution:
        'Route one, undo the power by estimation. Three slots with $n$ options each give $n^3$ codes, so $n^3 = 4913$. Since $10^3 = 1000$ and $20^3 = 8000$, $n$ is between $10$ and $20$; $15^3 = 3375$ is too small, $16^3 = 4096$ is still too small, and $17^3 = 4913$ lands exactly, so $n = 17$ ✓. Route two, use the last digit. A cube ends in $3$ only when its root ends in $7$, since among $0^3, 1^3, \\ldots, 9^3$ the only one ending in $3$ is $7^3 = 343$. So $n$ is $7$, $17$, $27$, and so on. Now $7^3 = 343$ is far too small and $27^3 = 19{,}683$ is far too large, so $n = 17$, and checking, $17 \\cdot 17 = 289$ and $289 \\cdot 17 = 4913$ ✓. (Choosing $16$ STOPS AT THE LAST CUBE BELOW $4913$, but $16^3 = 4096 \\neq 4913$ ✗. Choosing $4910$ SUBTRACTS THE $3$ SLOTS FROM THE TOTAL, undoing a power with subtraction ✗. Choosing $70$ TAKES A SQUARE ROOT of $4913$, treating a three-slot code like a two-slot one ✗.)',
    },
  ],
  // s3 — two allowed digits (or a few allowed colors) per slot.
  [
    {
      q: 'How many six-digit positive integers have every one of their six digits equal to $4$ or $7$? Digits may repeat.',
      choices: ['$12$', '$32$', '$36$', '$64$'],
      answer: 3,
      solution:
        'Route one, multiply slot by slot. Each of the six slots takes one of $2$ digits, and neither choice is $0$, so the leading slot has no extra restriction: $2^6 = 64$ ✓. Route two, match the numbers to binary strings. Replace each $4$ with $0$ and each $7$ with $1$; the six-digit number becomes a six-digit binary string, and every string from $000000_2$ to $111111_2$ comes from exactly one such number. In base ten those strings run from $0$ through $63$, which is $64$ values ✓. (Choosing $12$ ADDS $2$ OPTIONS ACROSS $6$ SLOTS instead of multiplying ✗. Choosing $32 = 2^5$ DROPS ONE SLOT ✗. Choosing $36 = 6^2$ SWAPS SLOTS AND OPTIONS ✗.)',
    },
    {
      q: 'A string of $7$ holiday lights hangs in a row, and each bulb is set to exactly one of $4$ colors: red, green, blue, or white. Colors may repeat, and the bulbs are all different because they sit in different positions. How many different colorings of the string are possible?',
      choices: ['$2401$', '$16{,}384$', '$28$', '$5040$'],
      answer: 1,
      solution:
        'Route one, multiply bulb by bulb. Seven independent bulbs with $4$ colors each give $4^7 = 16{,}384$ colorings ✓. Route two, cut the string into two blocks and pair the blocks. The left block of $3$ bulbs has $4 \\cdot 4 \\cdot 4 = 64$ colorings, a list short enough to write out; the right block of $4$ bulbs has $4 \\cdot 4 \\cdot 4 \\cdot 4 = 256$. A coloring of the whole string is one left-block coloring beside one right-block coloring, and any left goes with any right, so there are $64 \\cdot 256 = 16{,}384$ ✓. (Choosing $2401 = 7^4$ SWAPS BULBS AND COLORS ✗. Choosing $28 = 7 \\cdot 4$ MULTIPLIES THE COUNTS ONCE, as if a coloring were one bulb given one color ✗. Choosing $5040 = 7!$ ARRANGES THE BULBS IN ORDER, which the problem never asks ✗.)',
    },
    {
      q: 'How many positive integers less than $10{,}000$ have every digit equal to $1$ or $2$? Digits may repeat, and the integers may have one, two, three, or four digits.',
      choices: ['$30$', '$16$', '$32$', '$15$'],
      answer: 0,
      solution:
        'Route one, split by length and add. One-digit: $2$ numbers. Two-digit: $2^2 = 4$. Three-digit: $2^3 = 8$. Four-digit: $2^4 = 16$. The lengths never overlap, so the total is $2 + 4 + 8 + 16 = 30$ ✓. Route two, match the numbers to short binary strings. Replace $1$ by $0$ and $2$ by $1$; each of our numbers becomes a binary string of length $1$ to $4$, and every such string comes from exactly one number. Binary strings of length at most $4$, the empty string included, number $2^5 - 1 = 31$: appending a bit doubles the count at every length, so the sum $1 + 2 + 4 + 8 + 16$ is one less than $32$. Removing the empty string leaves $31 - 1 = 30$ ✓. (Choosing $16$ COUNTS ONLY THE FOUR-DIGIT NUMBERS ✗. Choosing $32 = 2^5$ ADDS AN EXTRA SLOT, as if there were also a five-digit case ✗. Choosing $15$ ALLOWS ONLY ONE ONE-DIGIT NUMBER, computing $1 + 2 + 4 + 8$ ✗.)',
    },
  ],
  // s4 — all even digits, with a distinctness rule that the leading slot bends.
  [
    {
      q: 'How many four-digit positive integers have four different digits, all of them even? A leading digit cannot be $0$.',
      choices: ['$120$', '$256$', '$96$', '$24$'],
      answer: 2,
      solution:
        'Route one, fill the most restricted slot first. The thousands digit must be even and nonzero, so it is one of $2, 4, 6, 8$: $4$ options. The hundreds digit is any of the other four even digits, $0$ now allowed: $4$ options. The tens digit has $3$ left, and the units digit $2$: $4 \\cdot 4 \\cdot 3 \\cdot 2 = 96$ ✓. Route two, count the leading-zero strings and throw them out. Arrange any $4$ of the five even digits $0, 2, 4, 6, 8$ in a row: $5 \\cdot 4 \\cdot 3 \\cdot 2 = 120$ strings. Those that start with $0$ are $0$ followed by an arrangement of $3$ of the remaining four digits, $4 \\cdot 3 \\cdot 2 = 24$ strings, and they are not four-digit integers. The rest are exactly the numbers we want: $120 - 24 = 96$ ✓. (Choosing $120$ LETS $0$ LEAD ✗. Choosing $256 = 4^4$ ALLOWS REPEATED DIGITS and also forgets the digit $0$ ✗. Choosing $24 = 4 \\cdot 3 \\cdot 2 \\cdot 1$ FORGETS THAT $0$ IS AVAILABLE for the later slots ✗.)',
    },
    {
      q: 'A door code is a string of $3$ digits, each from $1$ through $8$, with no digit used more than once, and the first digit must be even. How many such codes are there?',
      choices: ['$168$', '$336$', '$256$', '$196$'],
      answer: 0,
      solution:
        'Route one, fill the restricted slot first. The first digit is one of $2, 4, 6, 8$: $4$ options. The second digit is any of the $7$ unused digits, and the third any of the $6$ still unused: $4 \\cdot 7 \\cdot 6 = 168$ ✓. Route two, use symmetry. Without the parity rule, there are $8 \\cdot 7 \\cdot 6 = 336$ codes with no repeated digit. Swapping each digit $d$ with $9 - d$ turns every code into another code, turns an even first digit into an odd one and back again, and so pairs the codes off, with exactly half of them starting with an even digit: $336 \\div 2 = 168$ ✓. (Choosing $336$ IGNORES THE EVEN-FIRST-DIGIT RULE ✗. Choosing $256 = 4 \\cdot 8 \\cdot 8$ ALLOWS REPEATED DIGITS ✗. Choosing $196 = 4 \\cdot 7 \\cdot 7$ FORGETS THAT THE SECOND DIGIT IS ALSO USED UP before the third is chosen ✗.)',
    },
    {
      q: 'How many three-digit positive integers have all three digits even and at least two of the digits equal to each other? A leading digit cannot be $0$.',
      choices: ['$48$', '$100$', '$20$', '$52$'],
      answer: 3,
      solution:
        'Route one, subtract the all-different numbers from the all-even numbers. All-even three-digit integers: the hundreds digit is one of $2, 4, 6, 8$ and the other two slots each take any of $5$ even digits, $4 \\cdot 5 \\cdot 5 = 100$. Among them, those with three different digits number $4 \\cdot 4 \\cdot 3 = 48$. Everything else has a repeat: $100 - 48 = 52$ ✓. Route two, casework on which digits match. Hundreds and tens equal, units different: $4$ choices for the shared digit (it leads, so it is nonzero), $4$ for the units, $16$. Hundreds and units equal, tens different: likewise $16$. Tens and units equal, hundreds different: $4$ choices for the hundreds digit, then $4$ other even digits for the shared pair, $16$. All three equal: $4$. These cases do not overlap, so $16 + 16 + 16 + 4 = 52$ ✓. (Choosing $48$ COUNTS THE ALL-DIFFERENT NUMBERS, the complement of what was asked ✗. Choosing $100$ COUNTS EVERY ALL-EVEN NUMBER, repeat or not ✗. Choosing $20$ COUNTS ONLY THE HUNDREDS-AND-TENS PAIR plus the triples, $16 + 4$, and misses the other two pair positions ✗.)',
    },
  ],
  // s5 — several random devices in a row, and one solved for.
  [
    {
      q: 'Vera flips a coin $3$ times and then spins a spinner with $5$ equal sections twice. The flips and spins are recorded in order. How many different sequences of results are possible?',
      choices: ['$16$', '$200$', '$40$', '$100$'],
      answer: 1,
      solution:
        'Route one, multiply stage by stage. Each flip has $2$ outcomes and each spin has $5$, and no result changes the options for the next: $2 \\cdot 2 \\cdot 2 \\cdot 5 \\cdot 5 = 200$ ✓. Route two, count each device’s record separately, then pair the records. The three flips produce a record such as HTH; listing them, there are $8$. The two spins produce a record such as $(3, 5)$; a $5 \\times 5$ table shows there are $25$. A full sequence is one flip record followed by one spin record, and any flip record can precede any spin record, so there are $8 \\cdot 25 = 200$ sequences ✓. (Choosing $16$ ADDS THE OUTCOME COUNTS $2 + 2 + 2 + 5 + 5$ ✗. Choosing $40$ DROPS ONE SPIN, computing $2^3 \\cdot 5$ ✗. Choosing $100$ DROPS ONE FLIP, computing $2^2 \\cdot 5^2$ ✗.)',
    },
    {
      q: 'Omar rolls a standard six-sided die, then draws one card from the $13$ hearts of a standard deck, then chooses one of $4$ doors. The die result, the card, and the door are all recorded. How many different outcomes are possible?',
      choices: ['$23$', '$78$', '$52$', '$312$'],
      answer: 3,
      solution:
        'Route one, multiply the three stages. The die has $6$ results, the card $13$, the door $4$, and each stage’s count is the same no matter how the earlier stages went: $6 \\cdot 13 \\cdot 4 = 312$ ✓. Route two, fix the die and add. Suppose the die shows $1$. The remaining two stages form a $13 \\times 4$ grid of card-and-door pairs, $52$ outcomes, and the same $52$ pairs are available whatever the die shows. Six die results, each with its own block of $52$: $52 + 52 + 52 + 52 + 52 + 52 = 312$ ✓. (Choosing $23$ ADDS THE STAGE COUNTS $6 + 13 + 4$ ✗. Choosing $78 = 6 \\cdot 13$ DROPS THE DOOR STAGE ✗. Choosing $52 = 13 \\cdot 4$ DROPS THE DIE ✗.)',
    },
    {
      q: 'A standard six-sided die is rolled once, and then a spinner with $n$ equal sections is spun twice, with the results recorded in order. There are exactly $486$ different sequences of results. What is $n$?',
      choices: ['$81$', '$243$', '$9$', '$22$'],
      answer: 2,
      solution:
        'Route one, write the product and unwind it. The stages multiply, so $6 \\cdot n \\cdot n = 486$, which gives $n^2 = 486 \\div 6 = 81$, and since $n$ is a positive count, $n = 9$ ✓. Route two, factor the total. $486 = 2 \\cdot 243 = 2 \\cdot 3^5$. The die contributes a factor of $6 = 2 \\cdot 3$, so the two spins together contribute $3^5 \\div 3 = 3^4$. Two equal factors whose product is $3^4$ are each $3^2 = 9$, so the spinner has $9$ sections ✓. (Choosing $81$ STOPS AFTER DIVIDING BY $6$ and forgets that $81$ is $n^2$, not $n$ ✗. Choosing $243$ DIVIDES BY THE NUMBER OF SPINS instead of by the die’s $6$ outcomes ✗. Choosing $22$ TAKES THE SQUARE ROOT OF $486$ BEFORE REMOVING THE DIE, and rounds $\\sqrt{486}$ ✗.)',
    },
  ],
  // s6 — an optional stage, where "none" is one more choice.
  [
    {
      q: 'A bike shop builds a bike in stages: choose one of $5$ frames, then either add one of $3$ baskets or add no basket, then either add one of $2$ bells or add no bell. All frames, baskets, and bells are different. How many different bikes can be built?',
      choices: ['$60$', '$30$', '$10$', '$40$'],
      answer: 0,
      solution:
        'Route one, count “none” as an option and multiply. The basket stage has $3 + 1 = 4$ choices and the bell stage $2 + 1 = 3$, so the three stages give $5 \\cdot 4 \\cdot 3 = 60$ bikes ✓. Route two, casework on which accessories are present. No accessories: just a frame, $5$ bikes. Basket only: $5 \\cdot 3 = 15$. Bell only: $5 \\cdot 2 = 10$. Both: $5 \\cdot 3 \\cdot 2 = 30$. The four cases never overlap, so $5 + 15 + 10 + 30 = 60$ ✓. (Choosing $30$ FORGETS BOTH “NONE” OPTIONS and counts only bikes with a basket and a bell ✗. Choosing $10$ ADDS THE STAGE COUNTS $5 + 3 + 2$ ✗. Choosing $40 = 5 \\cdot 4 \\cdot 2$ FORGETS THE “NO BELL” OPTION ✗.)',
    },
    {
      q: 'A survey form has $3$ questions. The first offers $5$ answer options, and each of the other two offers $3$ answer options. A question is answered with at most one option, and any question may be left blank. How many different ways can the form be turned in?',
      choices: ['$45$', '$11$', '$96$', '$80$'],
      answer: 2,
      solution:
        'Route one, count “blank” as an option and multiply. The first question has $5 + 1 = 6$ ways to be handled and each of the others $3 + 1 = 4$, and the questions are independent: $6 \\cdot 4 \\cdot 4 = 96$ ✓. Route two, casework on which questions are blank. None blank: $5 \\cdot 3 \\cdot 3 = 45$. Only the first blank: $3 \\cdot 3 = 9$. Only the second blank: $5 \\cdot 3 = 15$; only the third blank: $15$. First and second blank: $3$; first and third blank: $3$; second and third blank: $5$. All three blank: $1$. Adding the eight cases, $45 + 9 + 15 + 15 + 3 + 3 + 5 + 1 = 96$ ✓. (Choosing $45$ FORGETS THAT A QUESTION MAY BE LEFT BLANK ✗. Choosing $11$ ADDS THE OPTION COUNTS $5 + 3 + 3$ ✗. Choosing $80 = 5 \\cdot 4 \\cdot 4$ ALLOWS A BLANK ON THE LAST TWO QUESTIONS BUT NOT THE FIRST ✗.)',
    },
    {
      q: 'A lunch counter builds a meal as one of $8$ mains together with either one of $n$ sides or no side at all. All mains and sides are different, and exactly $56$ different meals are possible. What is $n$?',
      choices: ['$7$', '$6$', '$48$', '$5$'],
      answer: 1,
      solution:
        'Route one, count the side stage as $n + 1$ options and unwind. The stages multiply, so $8(n + 1) = 56$, giving $n + 1 = 7$ and $n = 6$ ✓. Route two, remove the side-free meals first. Exactly $8$ of the $56$ meals have no side, one per main, so $56 - 8 = 48$ meals include a side. Those $48$ meals pair each of the $8$ mains with each side, so the number of sides is $48 \\div 8 = 6$ ✓. (Choosing $7$ FORGETS THAT “NO SIDE” IS ONE OF THE $7$ OPTIONS at the side stage ✗. Choosing $48$ SUBTRACTS THE MAINS AND STOPS, reporting a count of meals rather than of sides ✗. Choosing $5$ REMOVES THE “NO SIDE” OPTION TWICE, once by subtracting the $8$ side-free meals and again from the quotient ✗.)',
    },
  ],
  // s7 — a units-digit restriction that interacts with the leading slot.
  [
    {
      q: 'How many three-digit positive integers have three different digits and are divisible by $5$? A leading digit cannot be $0$.',
      choices: ['$144$', '$128$', '$136$', '$180$'],
      answer: 2,
      solution:
        'Route one, casework on the units digit, which must be $0$ or $5$. Units digit $0$: the hundreds digit avoids only $0$, $9$ options, and the tens digit avoids the two used digits, $8$ options, giving $72$. Units digit $5$: the hundreds digit avoids $0$ and $5$, $8$ options, and the tens digit avoids the two used digits, $8$ options, giving $64$. Total $72 + 64 = 136$ ✓. Route two, start from all multiples of $5$ and remove the ones with a repeated digit. Three-digit multiples of $5$ run from $100$ to $995$ in steps of $5$, so there are $180$. Among those ending in $0$, a repeat means the tens digit is $0$ (like $300$), $9$ numbers, or the tens digit equals the hundreds digit (like $770$), $9$ more, and no number is in both lists: $18$. Among those ending in $5$, a repeat means the hundreds digit is $5$ ($10$ numbers), the tens digit is $5$ ($9$ numbers), or the hundreds and tens digits match ($9$ numbers); the only number in more than one list is $555$, which is in all three, so the union has $10 + 9 + 9 - 3 + 1 = 26$ numbers. So $180 - 18 - 26 = 136$ ✓. (Choosing $144 = 2 \\cdot 9 \\cdot 8$ gives the hundreds digit $9$ options in both cases, which LETS THE DIGIT $5$ REPEAT when the units digit is $5$ ✗. Choosing $128 = 2 \\cdot 8 \\cdot 8$ TREATS THE UNITS DIGIT $0$ LIKE $5$, forgetting the hundreds digit had to avoid $0$ anyway ✗. Choosing $180$ COUNTS EVERY THREE-DIGIT MULTIPLE OF $5$, repeats included ✗.)',
    },
    {
      q: 'A three-letter string uses letters from A through J, with no letter used more than once. It must end in one of the vowels A, E, or I, and it must not begin with A. How many such strings are there?',
      choices: ['$200$', '$216$', '$192$', '$243$'],
      answer: 0,
      solution:
        'Route one, casework on the last letter. Last letter A: the first letter is any of the other $9$ letters (none of them is A, so the rule is automatic) and the middle any of the remaining $8$, giving $72$. Last letter E: the first letter avoids A and E, $8$ options, and the middle avoids the two letters used, $8$ options, giving $64$. Last letter I: likewise $64$. Total $72 + 64 + 64 = 200$ ✓. Route two, count the vowel-ending strings and remove those that start with A. Strings of three different letters ending in A, E, or I: $3$ choices for the last letter, then $9$ for the first and $8$ for the middle, $216$. Those beginning with A must end in E or I, since A is used up, with $8$ choices for the middle letter: $2 \\cdot 8 = 16$. So $216 - 16 = 200$ ✓. (Choosing $216$ IGNORES THE RULE AGAINST STARTING WITH A ✗. Choosing $192 = 3 \\cdot 8 \\cdot 8$ REMOVES A FROM THE FIRST SLOT EVEN WHEN A IS THE LAST LETTER, where it was already gone ✗. Choosing $243 = 3 \\cdot 9 \\cdot 9$ LETS THE MIDDLE LETTER REPEAT and ignores the rule about A ✗.)',
    },
    {
      q: 'How many even three-digit positive integers are less than $500$ and have three different digits? A leading digit cannot be $0$.',
      choices: ['$160$', '$128$', '$180$', '$144$'],
      answer: 3,
      solution:
        'Route one, casework on the units digit. The hundreds digit is $1$, $2$, $3$, or $4$. Units digit $0$: $4$ choices for the hundreds digit, $8$ for the tens, $32$. Units digit $2$ or $4$: the hundreds digit avoids the units digit, $3$ choices, then $8$ for the tens, $2 \\cdot 3 \\cdot 8 = 48$. Units digit $6$ or $8$: the hundreds digit is unrestricted among its $4$, then $8$ for the tens, $2 \\cdot 4 \\cdot 8 = 64$. Total $32 + 48 + 64 = 144$ ✓. Route two, casework on the hundreds digit instead. Hundreds digit $1$ or $3$ (odd): the units digit is any of the $5$ even digits and the tens digit avoids the two used, $5 \\cdot 8 = 40$ each, $80$ together. Hundreds digit $2$ or $4$ (even): the units digit is one of the other $4$ even digits and the tens digit avoids the two used, $4 \\cdot 8 = 32$ each, $64$ together. Total $80 + 64 = 144$ ✓. (Choosing $160 = 4 \\cdot 5 \\cdot 8$ TREATS EVERY EVEN UNITS DIGIT AS COMPATIBLE WITH EVERY HUNDREDS DIGIT, letting $2$ and $4$ repeat ✗. Choosing $128 = 4 \\cdot 4 \\cdot 8$ TREATS EVERY UNITS DIGIT AS CLASHING WITH THE HUNDREDS DIGIT, though $0$, $6$, and $8$ never do ✗. Choosing $180 = 4 \\cdot 5 \\cdot 9$ LETS THE TENS DIGIT REPEAT ✗.)',
    },
  ],
  // s8 — restricted ends, filled first, with the whole alphabet or a mixed group.
  [
    {
      q: 'How many strings of $5$ different letters from the English alphabet begin with a consonant (any of the $21$ letters other than A, E, I, O, U) and end with a vowel (A, E, I, O, or U)?',
      choices: ['$1{,}845{,}480$', '$1{,}449{,}000$', '$1{,}451{,}520$', '$1{,}275{,}120$'],
      answer: 3,
      solution:
        'Route one, fill the restricted ends first. The first slot takes one of $21$ consonants and the last slot one of $5$ vowels. The three middle slots then take any unused letters: $24$, then $23$, then $22$. So $21 \\cdot 5 \\cdot 24 \\cdot 23 \\cdot 22 = 1{,}275{,}120$ ✓. Route two, take a share of all five-letter strings. There are $26 \\cdot 25 \\cdot 24 \\cdot 23 \\cdot 22 = 7{,}893{,}600$ strings of five different letters. By symmetry among the letters, $\\frac{21}{26}$ of them begin with a consonant, and among those, the last letter is equally likely to be any of the $25$ letters other than the first, so $\\frac{5}{25}$ of them end with a vowel. That leaves $7{,}893{,}600 \\cdot \\frac{21}{26} \\cdot \\frac{5}{25} = 303{,}600 \\cdot 21 \\cdot \\frac{1}{5} = 1{,}275{,}120$ ✓. (Choosing $1{,}845{,}480 = 21 \\cdot 5 \\cdot 26^3$ LETS THE MIDDLE LETTERS REPEAT ✗. Choosing $1{,}449{,}000 = 21 \\cdot 5 \\cdot 25 \\cdot 24 \\cdot 23$ FORGETS THAT BOTH END LETTERS ARE USED UP, removing only one of them from the middle ✗. Choosing $1{,}451{,}520 = 21 \\cdot 5 \\cdot 24^3$ GIVES ALL THREE MIDDLE SLOTS $24$ OPTIONS, ignoring that each middle letter uses up another ✗.)',
    },
    {
      q: 'A group consists of $7$ teachers and $5$ students, all different people. A row of $4$ different people is chosen from the group and lined up, with a teacher at the left end and a student at the right end. The two middle spots may hold anyone not already in the row. How many different rows are possible?',
      choices: ['$4620$', '$3150$', '$3850$', '$2520$'],
      answer: 1,
      solution:
        'Route one, fill the ends first. The left end takes one of $7$ teachers and the right end one of $5$ students. Two people are now used, so the second spot takes any of the $10$ remaining people and the third spot any of the $9$ after that: $7 \\cdot 5 \\cdot 10 \\cdot 9 = 3150$ ✓. Route two, take a share of all rows. Rows of $4$ different people from $12$ number $12 \\cdot 11 \\cdot 10 \\cdot 9 = 11{,}880$. The left end is a teacher in $\\frac{7}{12}$ of them, since every person is equally likely to be there; among those, the right end is one of the $11$ other people with equal likelihood, and $5$ of the $11$ are students. So $11{,}880 \\cdot \\frac{7}{12} \\cdot \\frac{5}{11} = 990 \\cdot 7 \\cdot \\frac{5}{11} = 6930 \\cdot \\frac{5}{11} = 3150$ ✓. (Choosing $4620 = 7 \\cdot 5 \\cdot 12 \\cdot 11$ FORGETS THAT THE TWO END PEOPLE ARE USED UP when filling the middle ✗. Choosing $3850 = 7 \\cdot 5 \\cdot 11 \\cdot 10$ REMOVES ONLY ONE END PERSON from the middle count ✗. Choosing $2520 = 7 \\cdot 5 \\cdot 9 \\cdot 8$ REMOVES THREE PEOPLE BEFORE THE MIDDLE IS FILLED, though only two are placed ✗.)',
    },
    {
      q: 'How many strings of $4$ different letters from the English alphabet begin with a vowel (A, E, I, O, or U) or end with a consonant, or both?',
      choices: ['$300{,}840$', '$358{,}800$', '$289{,}800$', '$242{,}880$'],
      answer: 0,
      solution:
        'Route one, add the two groups and subtract the overlap. Strings beginning with a vowel: $5 \\cdot 25 \\cdot 24 \\cdot 23 = 69{,}000$. Strings ending with a consonant: $21 \\cdot 25 \\cdot 24 \\cdot 23 = 289{,}800$. Strings doing both, counted in each group: $5 \\cdot 21 \\cdot 24 \\cdot 23 = 57{,}960$. So $69{,}000 + 289{,}800 - 57{,}960 = 300{,}840$ ✓. Route two, count the strings that fail and subtract from the total. A string fails only if it begins with a consonant and ends with a vowel: $21$ choices at the front, $5$ at the back, then $24$ and $23$ for the middle, $21 \\cdot 5 \\cdot 24 \\cdot 23 = 57{,}960$. All strings of four different letters number $26 \\cdot 25 \\cdot 24 \\cdot 23 = 358{,}800$, so $358{,}800 - 57{,}960 = 300{,}840$ ✓. (Choosing $358{,}800$ ADDS THE TWO GROUPS WITHOUT REMOVING THE OVERLAP, which here happens to equal the count of all strings ✗. Choosing $289{,}800$ COUNTS ONLY THE STRINGS ENDING IN A CONSONANT ✗. Choosing $242{,}880$ SUBTRACTS THE OVERLAP TWICE ✗.)',
    },
  ],
  // s9 — several lengths added, with no repeated digit or letter.
  [
    {
      q: 'How many positive integers less than $10{,}000$ have all of their digits different and all of their digits odd? The integers may have one, two, three, or four digits.',
      choices: ['$120$', '$205$', '$780$', '$200$'],
      answer: 1,
      solution:
        'Route one, split by length and add. The odd digits are $1, 3, 5, 7, 9$, and none is $0$, so no leading-digit worry. One-digit: $5$. Two-digit: $5 \\cdot 4 = 20$. Three-digit: $5 \\cdot 4 \\cdot 3 = 60$. Four-digit: $5 \\cdot 4 \\cdot 3 \\cdot 2 = 120$. Total $5 + 20 + 60 + 120 = 205$ ✓. Route two, read every number as the start of a full arrangement. The five odd digits can be arranged in $5! = 120$ orders. Every four-digit number we want is the first four digits of exactly $1$ of those orders; every three-digit number is the start of exactly $2$ orders (the last two digits can go either way); every two-digit number starts $3 \\cdot 2 = 6$ orders; every one-digit number starts $4 \\cdot 3 \\cdot 2 = 24$ orders. So the counts are $\\frac{120}{1} + \\frac{120}{2} + \\frac{120}{6} + \\frac{120}{24} = 120 + 60 + 20 + 5 = 205$ ✓. (Choosing $120$ COUNTS ONLY THE FOUR-DIGIT NUMBERS ✗. Choosing $780 = 5 + 25 + 125 + 625$ LETS DIGITS REPEAT ✗. Choosing $200$ FORGETS THE ONE-DIGIT NUMBERS ✗.)',
    },
    {
      q: 'A string is made from the six letters A through F, has $1$, $2$, or $3$ letters, and uses no letter more than once. How many such strings are there?',
      choices: ['$120$', '$258$', '$216$', '$156$'],
      answer: 3,
      solution:
        'Route one, split by length and add. One letter: $6$. Two letters: $6 \\cdot 5 = 30$. Three letters: $6 \\cdot 5 \\cdot 4 = 120$. Total $6 + 30 + 120 = 156$ ✓. Route two, extend every short string to a three-letter one. There are $6 \\cdot 5 \\cdot 4 = 120$ three-letter strings with no repeat. Each two-letter string is the beginning of exactly $4$ of them, one for each unused letter that could follow, so there are $120 \\div 4 = 30$ two-letter strings. Each one-letter string begins $5 \\cdot 4 = 20$ of the three-letter strings, so there are $120 \\div 20 = 6$ one-letter strings. Total $120 + 30 + 6 = 156$ ✓. (Choosing $120$ COUNTS ONLY THE THREE-LETTER STRINGS ✗. Choosing $258 = 6 + 36 + 216$ LETS LETTERS REPEAT ✗. Choosing $216 = 6^3$ LETS LETTERS REPEAT and counts only length three ✗.)',
    },
    {
      q: 'How many positive integers less than $1000$ have all of their digits different? The digit $0$ is allowed anywhere except as a leading digit, and the integers may have one, two, or three digits.',
      choices: ['$729$', '$648$', '$738$', '$999$'], answer: 2,
      solution:
        'Route one, split by length and add. One-digit: $9$. Two-digit: $9$ choices for the tens digit, then any of the $9$ other digits including $0$ for the units, $81$. Three-digit: $9 \\cdot 9 \\cdot 8 = 648$. Total $9 + 81 + 648 = 738$ ✓. Route two, count three-symbol strings and repair the edges. Strings of three different digits, leading $0$ allowed, number $10 \\cdot 9 \\cdot 8 = 720$. Reading such a string as a number, those with a nonzero first digit are the three-digit numbers we want, and those with first digit $0$ and nonzero second digit read as two-digit numbers with different nonzero digits. Not yet counted: two-digit numbers whose units digit is $0$ ($10, 20, \\ldots, 90$), $9$ of them, and the one-digit numbers $1$ through $9$, since a string like $007$ has a repeated $0$ and was excluded, $9$ more. So $720 + 9 + 9 = 738$ ✓. (Choosing $648$ COUNTS ONLY THE THREE-DIGIT NUMBERS ✗. Choosing $729 = 9 + 72 + 648$ FORBIDS $0$ AS A UNITS DIGIT in the two-digit case ✗. Choosing $999$ COUNTS EVERY POSITIVE INTEGER BELOW $1000$, repeats included ✗.)',
    },
  ],
  // s10 — a digit appearing exactly, or at least, a given number of times.
  [
    {
      q: 'How many four-digit positive integers contain exactly one digit equal to $3$? A leading digit cannot be $0$.',
      choices: ['$2916$', '$2592$', '$729$', '$2673$'],
      answer: 3,
      solution:
        'Route one, casework on where the $3$ sits. The $3$ in the thousands place: the other three digits each avoid $3$, $9 \\cdot 9 \\cdot 9 = 729$. The $3$ in the hundreds, tens, or units place: the thousands digit avoids $0$ and $3$, $8$ options, and the other two digits avoid $3$, $9$ each, so $8 \\cdot 9 \\cdot 9 = 648$ for each of the $3$ positions, $1944$. Total $729 + 1944 = 2673$ ✓. Route two, count four-symbol strings and discard the ones that lead with $0$. Among strings $0000$ through $9999$, those with exactly one $3$ have the $3$ in any of $4$ positions and non-$3$ digits elsewhere: $4 \\cdot 9^3 = 2916$. Those beginning with $0$ have their single $3$ among the last three positions, with the other two non-$3$: $3 \\cdot 9^2 = 243$, and these are not four-digit integers. So $2916 - 243 = 2673$ ✓. (Choosing $2916$ TREATS EVERY POSITION LIKE THE THOUSANDS PLACE, letting $0$ lead ✗. Choosing $2592 = 4 \\cdot 648$ TREATS EVERY POSITION LIKE A NON-LEADING ONE, removing $0$ from the thousands place even when the $3$ is there ✗. Choosing $729$ COUNTS ONLY THE CASE WITH THE $3$ IN FRONT ✗.)',
    },
    {
      q: 'How many three-digit positive integers have exactly two digits equal to each other, with the third digit different from those two? A leading digit cannot be $0$.',
      choices: ['$252$', '$243$', '$270$', '$216$'],
      answer: 1,
      solution:
        'Route one, casework on which two digits match. Hundreds and tens match, units differs: $9$ choices for the shared digit (nonzero, since it leads) and $9$ for the units, $81$. Hundreds and units match, tens differs: likewise $81$. Tens and units match, hundreds differs: $9$ choices for the hundreds digit, then $9$ other digits for the pair ($0$ allowed), $81$. Total $81 + 81 + 81 = 243$ ✓. Route two, remove the two extremes from the whole. There are $900$ three-digit integers. Those with three different digits number $9 \\cdot 9 \\cdot 8 = 648$, and those with all three digits the same number $9$ ($111$ through $999$). Everything else has exactly one matching pair: $900 - 648 - 9 = 243$ ✓. (Choosing $252 = 900 - 648$ INCLUDES THE NINE NUMBERS WITH ALL THREE DIGITS EQUAL ✗. Choosing $270 = 3 \\cdot 10 \\cdot 9$ LETS $0$ LEAD, counting every string from $000$ through $999$ with exactly one matching pair ✗. Choosing $216 = 3 \\cdot 8 \\cdot 9$ REMOVES $0$ FROM A SLOT THAT DOES NOT LEAD in every case ✗.)',
    },
    {
      q: 'How many three-digit positive integers contain at least two digits equal to $5$? A leading digit cannot be $0$.',
      choices: ['$27$', '$26$', '$28$', '$30$'],
      answer: 0,
      solution:
        'Route one, casework on which digits are $5$. Exactly two: hundreds and tens are $5$, units is not, $9$; hundreds and units are $5$, tens is not, $9$; tens and units are $5$, hundreds is neither $5$ nor $0$, $8$. All three: $1$, the number $555$. Total $9 + 9 + 8 + 1 = 27$ ✓. Route two, count three-symbol strings and discard the one that leads with $0$. Among strings $000$ through $999$, those with at least two $5$s are the strings with exactly two $5$s, which choose the non-$5$ position in $3$ ways and its digit in $9$ ways, $27$, plus the string $555$, $28$ in all. Exactly one of them begins with $0$, namely $055$, and it is not a three-digit integer: $28 - 1 = 27$ ✓. (Choosing $26$ FORGETS THE NUMBER $555$ ✗. Choosing $28$ LETS $0$ LEAD, keeping $055$ ✗. Choosing $30 = 3 \\cdot 10$ LETS $0$ LEAD AND COUNTS $555$ THREE TIMES, once for each pair of positions ✗.)',
    },
  ],
]

export default { book: 'intro-counting', number: 1, sections: { '1.4': s14 } }
