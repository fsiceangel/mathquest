// Counting & Probability — Chapter 3: Correcting for Overcounting
// All problems, explanations, and examples are original MathQuest content.

const s32 = {
  id: '3.2',
  title: 'Permutations with Repeated Elements',
  learn: {
    concepts: [
      {
        heading: 'Overcount on purpose, then divide',
        body: 'When some of the objects you are arranging are identical, the cleanest plan is to pretend they are all different, count the arrangements, and then fix the damage. Arrange the letters $A, A, B$ as if the $A$’s were $A_1$ and $A_2$: that gives $3! = 6$ lineups. But $A_1 A_2 B$ and $A_2 A_1 B$ are the same word $AAB$, so every real word was counted twice — once for each order of the two $A$’s. The true count is $\\frac{6}{2} = 3$: $AAB$, $ABA$, $BAA$.',
      },
      {
        heading: 'The formula',
        body: 'If you arrange $n$ objects and one kind of object appears $k$ times, the $k$ copies can be shuffled among themselves in $k!$ ways without changing the arrangement, so each real arrangement was counted $k!$ times. Divide by $k!$ for every repeated kind: $\\frac{n!}{a!\\,b!\\,c!\\cdots}$. For the letters of $PEPPY$ ($P$ three times, $E$, $Y$) that is $\\frac{5!}{3!} = 20$. Kinds that appear once contribute $1! = 1$, so you can ignore them.',
      },
      {
        heading: 'Restrictions first, then divide',
        body: 'If a problem pins something down — the word must start with $W$, or the two $O$’s must sit together — handle that before you count. Pin the letter or glue the block, then arrange what is left and divide only by the factorials of the repeats that are still free. A glued block $OO$ has no internal order to divide out, because swapping the two $O$’s inside the block changes nothing you can see.',
      },
      {
        heading: 'The trap: dividing by too much',
        body: 'Divide only for copies that are truly interchangeable. Five different colored flags in a row are $5!$ arrangements, not $\\frac{5!}{5!}$. And when a repeated letter gets separated into different roles — say one $E$ is fixed at the front and one is free — only the copies that are still free and identical get a factorial in the denominator. When in doubt, write out a small case and count the words by hand.',
      },
    ],
    examples: [
      {
        problem: 'How many different arrangements of the letters of $TATTOO$ are there?',
        steps: [
          'There are $6$ letters: $T$ three times, $O$ twice, and $A$ once.',
          'Pretend all six are different: $6! = 720$ lineups.',
          'Each real arrangement was counted $3!$ times for the $T$’s and $2!$ times for the $O$’s, so divide by both.',
          'The count is $\\frac{720}{3!\\,2!} = \\frac{720}{12} = 60$.',
        ],
        answer: 'There are $60$ arrangements.',
      },
      {
        problem: 'How many arrangements of the letters of $SEESAW$ begin with $W$?',
        steps: [
          'Pin the $W$ in the first spot; there is only one way to do that.',
          'The remaining five letters are $S, E, E, S, A$ — two $S$’s and two $E$’s.',
          'Arrange those five: $\\frac{5!}{2!\\,2!} = \\frac{120}{4} = 30$.',
        ],
        answer: '$30$ arrangements begin with $W$.',
      },
      {
        problem: 'In how many arrangements of the letters of $GIGGLE$ are the three $G$’s not all next to each other?',
        steps: [
          'Count everything first: $6$ letters with $G$ three times gives $\\frac{6!}{3!} = 120$ arrangements.',
          'Now count the ones we do not want, where the $G$’s form one block $GGG$: that block plus $I, L, E$ is $4$ distinct things, so $4! = 24$ arrangements.',
          'Subtract: $120 - 24 = 96$.',
        ],
        answer: 'In $96$ arrangements the $G$’s are not all together.',
      },
    ],
  },
  problems: [
    {
      q: 'How many different arrangements of the letters of $COCOON$ are there?',
      choices: ['$720$', '$60$', '$360$', '$120$'],
      answer: 1,
      solution: 'Six letters with $O$ three times and $C$ twice: $\\frac{6!}{3!\\,2!} = \\frac{720}{12} = 60$. Forgetting to divide at all gives $720$; dividing only for the $C$’s gives $360$; dividing only for the $O$’s gives $120$.',
    },
    {
      q: 'Five identical red flags and two identical blue flags are hung in a row on a line. How many different-looking rows are possible?',
      choices: ['$42$', '$5040$', '$21$', '$35$'],
      answer: 2,
      solution: 'Seven flags with five alike and two alike: $\\frac{7!}{5!\\,2!} = \\frac{5040}{240} = 21$. Equivalently, choose which $2$ of the $7$ spots hold blue flags. Dividing only by $5!$ gives $42$, and $5040$ treats every flag as different.',
    },
    {
      q: 'How many different arrangements of the letters of $GIGGLE$ are there?',
      choices: ['$120$', '$720$', '$360$', '$240$'],
      answer: 0,
      solution: 'Six letters with $G$ appearing three times and every other letter once: $\\frac{6!}{3!} = \\frac{720}{6} = 120$. Dividing by $2$ instead of $3! = 6$ gives $360$; dividing by $3$ gives $240$.',
    },
    {
      q: 'How many seven-digit numbers can be formed using each of the digits $1, 1, 4, 4, 4, 4, 7$ exactly once?',
      choices: ['$5040$', '$35$', '$210$', '$105$'],
      answer: 3,
      solution: 'No digit is $0$, so every arrangement is a valid seven-digit number. Seven digits with $4$ appearing four times and $1$ twice: $\\frac{7!}{4!\\,2!} = \\frac{5040}{48} = 105$. Dividing only by $4!$ gives $210$; dividing by an extra $3$ gives $35$.',
    },
    {
      q: 'How many arrangements of the letters of $BANANA$ begin with the letter $N$?',
      choices: ['$120$', '$20$', '$60$', '$10$'],
      answer: 1,
      solution: 'Pin one $N$ in the first spot, then arrange the remaining $B, A, A, A, N$, where only the three $A$’s repeat: $\\frac{5!}{3!} = 20$. Forgetting the restriction gives all $\\frac{6!}{3!\\,2!} = 60$ arrangements; $5! = 120$ forgets the repeated $A$’s; $10$ also divides by $2!$ for the $N$’s, but one $N$ is pinned and the other is alone, so there is nothing to divide for.',
    },
    {
      q: 'In how many arrangements of the letters of $TATTOO$ are the two $O$’s next to each other?',
      choices: ['$60$', '$40$', '$20$', '$24$'],
      answer: 2,
      solution: 'Glue the $O$’s into one block $OO$. Now arrange five things: the block, $T, T, T$, and $A$, with the three $T$’s identical: $\\frac{5!}{3!} = 20$. There is no factor of $2$ for the block, because swapping two identical $O$’s inside it changes nothing — multiplying by $2$ gives the wrong $40$. All $60$ arrangements is the count with no restriction.',
    },
    {
      q: 'In how many arrangements of the letters of $LLAMA$ are the two $A$’s not next to each other?',
      choices: ['$18$', '$12$', '$30$', '$48$'],
      answer: 0,
      solution: 'All arrangements: $\\frac{5!}{2!\\,2!} = 30$. Arrangements with the $A$’s together: glue $AA$ and arrange the block with $L, L, M$, giving $\\frac{4!}{2!} = 12$. So the $A$’s are apart in $30 - 12 = 18$ arrangements. Answering $12$ gives the complement; $48 = 60 - 12$ forgets to divide for the two identical $L$’s in the full count while dividing for them in the block count.',
    },
    {
      q: 'In how many arrangements of the letters of $BUBBLE$ are no two $B$’s next to each other?',
      choices: ['$96$', '$48$', '$120$', '$24$'],
      answer: 3,
      solution: 'Place the non-$B$ letters $U, L, E$ first: $3! = 6$ ways. They create four gaps (before, between, and after), and each $B$ must go in a different gap so that no two touch. Choose $3$ of the $4$ gaps for the identical $B$’s: $4$ ways. Total $6 \\times 4 = 24$. The count $96$ only keeps the three $B$’s from all being together, which still allows two of them to touch; $120$ is every arrangement.',
    },
    {
      q: 'How many seven-digit numbers can be formed using each of the digits $0, 0, 1, 1, 1, 2, 2$ exactly once? (A number may not begin with $0$.)',
      choices: ['$210$', '$150$', '$180$', '$60$'],
      answer: 1,
      solution: 'All arrangements of the seven digits: $\\frac{7!}{2!\\,3!\\,2!} = 210$. Those starting with $0$: pin a $0$ in front and arrange $0, 1, 1, 1, 2, 2$, giving $\\frac{6!}{3!\\,2!} = 60$. Valid numbers: $210 - 60 = 150$. Choosing $180$ assumes only $\\frac{1}{7}$ of the arrangements start with $0$, but two of the seven digits are zeros, so it is $\\frac{2}{7}$ of them.',
    },
    {
      q: 'A row of six tiles is made from three identical black tiles and three identical white tiles. How many rows have no three consecutive tiles of the same color?',
      choices: ['$6$', '$20$', '$14$', '$12$'],
      answer: 2,
      solution: 'All rows: $\\frac{6!}{3!\\,3!} = 20$. Count the bad rows and subtract. Rows containing $BBB$ as a block: the block can start in positions $1$ through $4$ and the white tiles fill the rest, so $4$ rows; by the same reasoning $4$ rows contain $WWW$. The rows $BBBWWW$ and $WWWBBB$ contain both and were counted twice, so there are $4 + 4 - 2 = 6$ bad rows and $20 - 6 = 14$ good ones. Forgetting the overlap gives $20 - 8 = 12$; $6$ is the number of bad rows.',
    },
  ],
}

const s33 = {
  id: '3.3',
  title: 'Counting Pairs of Items',
  learn: {
    concepts: [
      {
        heading: 'Handshakes: every pair gets counted twice',
        body: 'Suppose $n$ people each shake hands with everyone else once. Each person shakes $n - 1$ hands, so $n(n-1)$ looks like the total — but a handshake between Ann and Ben has now been counted once from Ann’s side and once from Ben’s. Every handshake was counted exactly twice, so the real number is $\\frac{n(n-1)}{2}$. Six people give $\\frac{6 \\cdot 5}{2} = 15$ handshakes.',
      },
      {
        heading: 'The same count in disguise',
        body: 'Games in a round robin, chords joining points on a circle, phone calls between club members, pairs of socks pulled from a drawer — all of these are "choose two things from $n$, order not mattering," and all of them equal $\\frac{n(n-1)}{2}$. This number is written $\\binom{n}{2}$, read "$n$ choose $2$." Whenever you count something by picking a first item and then a second, ask: did I just count each pair twice?',
      },
      {
        heading: 'Diagonals of a polygon',
        body: 'A diagonal joins two corners of a polygon that are not next to each other. From each of the $n$ corners you can draw a diagonal to every corner except itself and its two neighbors: $n - 3$ diagonals per corner. That counts each diagonal from both ends, so a polygon has $\\frac{n(n-3)}{2}$ diagonals. You can also take all $\\binom{n}{2}$ pairs of corners and throw away the $n$ pairs that are sides.',
      },
      {
        heading: 'When not to divide',
        body: 'The division by $2$ only fixes a double count. If every one of $5$ boys shakes hands with every one of $6$ girls and nobody else, each handshake is counted once by "$5$ boys times $6$ girls," so the answer is $30$, not $15$. And if each pair of teams plays twice, count the pairs first ($\\binom{n}{2}$) and then multiply by $2$. Track exactly how many times each item was counted; that number is what you divide by.',
      },
    ],
    examples: [
      {
        problem: 'Twelve people at a meeting each shake hands with everyone else exactly once. How many handshakes are there?',
        steps: [
          'Each of the $12$ people shakes $11$ hands, giving $12 \\times 11 = 132$.',
          'That counts each handshake twice, once from each person in it.',
          'Divide by $2$: $\\frac{132}{2} = 66$ handshakes.',
        ],
        answer: 'There are $66$ handshakes.',
      },
      {
        problem: 'Eight teams play a tournament in which every pair of teams plays each other twice. How many games are played?',
        steps: [
          'First count the pairs of teams: $\\frac{8 \\cdot 7}{2} = 28$ pairs.',
          'Each pair plays $2$ games, so multiply: $28 \\times 2 = 56$.',
          'The division by $2$ fixes the double-counted pairs and the multiplication by $2$ adds the second game; they are separate corrections that happen to cancel here.',
        ],
        answer: 'There are $56$ games.',
      },
      {
        problem: 'At a party with $6$ boys and $4$ girls, every boy shakes hands with every girl, every girl shakes hands with every other girl, and no two boys shake hands. How many handshakes take place?',
        steps: [
          'Boy–girl handshakes pair one boy with one girl, and nothing is double-counted: $6 \\times 4 = 24$.',
          'Girl–girl handshakes are pairs chosen from the $4$ girls: $\\frac{4 \\cdot 3}{2} = 6$.',
          'The two kinds of handshake do not overlap, so add: $24 + 6 = 30$.',
        ],
        answer: 'There are $30$ handshakes.',
      },
    ],
  },
  problems: [
    {
      q: 'Fourteen delegates at a conference each shake hands with every other delegate exactly once. How many handshakes take place?',
      choices: ['$182$', '$196$', '$91$', '$105$'],
      answer: 2,
      solution: 'Each of the $14$ people shakes $13$ hands, and $14 \\times 13 = 182$ counts every handshake twice. So there are $\\frac{182}{2} = 91$ handshakes. Answering $182$ forgets the division; $196 = 14^2$ lets people shake their own hands; $105$ is the count for $15$ people.',
    },
    {
      q: 'A soccer league has $9$ teams, and each team plays every other team exactly once. How many games are played?',
      choices: ['$36$', '$72$', '$81$', '$45$'],
      answer: 0,
      solution: 'One game per pair of teams: $\\frac{9 \\cdot 8}{2} = 36$. Without dividing, $9 \\times 8 = 72$ counts each game once from each team; $81 = 9^2$ includes teams playing themselves; $45$ is the count for $10$ teams.',
    },
    {
      q: 'How many diagonals does a convex hexagon have?',
      choices: ['$15$', '$9$', '$18$', '$6$'],
      answer: 1,
      solution: 'From each of the $6$ corners, diagonals go to the $6 - 3 = 3$ corners that are not itself or a neighbor: $6 \\times 3 = 18$, which counts each diagonal from both ends. Divide by $2$: $9$ diagonals. Choosing $15$ counts all pairs of corners, sides included; $18$ forgets the division; $6$ comes from wrongly using $n - 4$ diagonals per corner.',
    },
    {
      q: 'Seven chess players hold a tournament in which every pair of players plays two games, one with each color. How many games are played?',
      choices: ['$21$', '$49$', '$84$', '$42$'],
      answer: 3,
      solution: 'Pairs of players: $\\frac{7 \\cdot 6}{2} = 21$. Each pair plays $2$ games: $21 \\times 2 = 42$. Stopping at $21$ forgets the second game; $84 = 7 \\times 6 \\times 2$ never removes the double count of pairs.',
    },
    {
      q: 'At a dance there are $5$ boys and $6$ girls. Every boy shakes hands with every girl exactly once, and there are no other handshakes. How many handshakes are there?',
      choices: ['$30$', '$15$', '$55$', '$60$'],
      answer: 0,
      solution: 'Each handshake is one boy paired with one girl, and each such pair is counted exactly once by $5 \\times 6 = 30$. There is nothing to divide: no handshake was counted twice. Halving to $15$ is the reflex from the same-group formula; $55 = \\binom{11}{2}$ would be everyone shaking with everyone.',
    },
    {
      q: 'A convex polygon has exactly $54$ diagonals. How many sides does it have?',
      choices: ['$9$', '$11$', '$12$', '$13$'],
      answer: 2,
      solution: 'We need $\\frac{n(n-3)}{2} = 54$, so $n(n-3) = 108$. Try values: $12 \\times 9 = 108$, so $n = 12$. Answering $9$ solves $n(n-3) = 54$ instead, forgetting that the product counts every diagonal from both ends. The neighbors fail the check: an $11$-gon has $\\frac{11 \\cdot 8}{2} = 44$ diagonals and a $13$-gon has $\\frac{13 \\cdot 10}{2} = 65$.',
    },
    {
      q: 'Ten people meet, and $3$ of them are siblings. Every pair of people shakes hands exactly once, except that the siblings do not shake hands with each other. How many handshakes take place?',
      choices: ['$45$', '$42$', '$39$', '$36$'],
      answer: 1,
      solution: 'All pairs from $10$ people: $\\frac{10 \\cdot 9}{2} = 45$. The pairs that skip the handshake are pairs of siblings, and $3$ siblings form $\\frac{3 \\cdot 2}{2} = 3$ pairs. So $45 - 3 = 42$ handshakes. Subtracting $3 \\times 2 = 6$ sibling pairs without halving gives $39$; subtracting $9$ gives $36$.',
    },
    {
      q: 'A convex polygon has $n$ sides. A new vertex is added between two of its neighboring vertices, making a convex polygon with $n + 1$ sides, and the new polygon has exactly $13$ more diagonals than the old one. What is $n$?',
      choices: ['$13$', '$14$', '$15$', '$16$'],
      answer: 1,
      solution: 'Track what the new vertex changes. It has $n + 1 - 3 = n - 2$ diagonals of its own, to every old vertex except its two new neighbors. And the old side joining those two neighbors is no longer a side: it is now a diagonal. So the count rises by $(n - 2) + 1 = n - 1$, and $n - 1 = 13$ gives $n = 14$. Check with the formula: a $14$-gon has $\\frac{14 \\cdot 11}{2} = 77$ diagonals and a $15$-gon has $\\frac{15 \\cdot 12}{2} = 90$, a difference of $13$. Answering $15$ forgets that the old side turns into a diagonal; $13$ lets the new vertex connect to all $n$ old vertices; $16$ uses $n - 3$, the diagonals per vertex in the old polygon, as the increase.',
    },
    {
      q: 'In a round-robin tournament with $10$ teams, every pair of teams is scheduled to play exactly once. Partway through, every team has played exactly $4$ games. How many games have been played so far?',
      choices: ['$20$', '$40$', '$36$', '$24$'],
      answer: 0,
      solution: 'Add up the games from each team’s point of view: $10 \\times 4 = 40$. Every game involves two teams, so it was counted twice in that sum. The number of games played is $\\frac{40}{2} = 20$. The full tournament has $\\frac{10 \\cdot 9}{2} = 45$ games, so $25$ remain; $40$ forgets the halving.',
    },
    {
      q: 'Ten points are marked in the plane. Exactly $4$ of them lie on one straight line, and no other three points are collinear. How many distinct straight lines pass through at least two of the points?',
      choices: ['$45$', '$39$', '$40$', '$41$'],
      answer: 2,
      solution: 'Pretend every pair of points gives its own line: $\\frac{10 \\cdot 9}{2} = 45$ pairs. The $4$ collinear points form $\\frac{4 \\cdot 3}{2} = 6$ pairs, but all six pairs give the same single line. So those $6$ pairs were counted as $6$ lines and should count as $1$: $45 - 6 + 1 = 40$. Answering $39$ removes all six pairs and forgets to add the line back; $41$ subtracts only $4$ pairs.',
    },
  ],
}

const s34 = {
  id: '3.4',
  title: 'Counting with Symmetries',
  learn: {
    concepts: [
      {
        heading: 'Round tables: rotations are the same seating',
        body: 'Seat $n$ people around a round table where only who sits next to whom matters, so turning the whole table does not create a new seating. Count the $n!$ ways to fill the chairs as if they were numbered, then notice that each real seating shows up $n$ times — once for each of the $n$ rotations. So there are $\\frac{n!}{n} = (n-1)!$ seatings. Another route to the same answer: sit one person anywhere to kill the rotation, then arrange the other $n - 1$ in order around them.',
      },
      {
        heading: 'Necklaces and bracelets: flips too',
        body: 'A bracelet of $n$ different beads can be rotated and also flipped over, and a flipped bracelet is the same bracelet. Each real bracelet now appears $2n$ times among the $n!$ linear strings ($n$ rotations, each with or without a flip), so the count is $\\frac{n!}{2n} = \\frac{(n-1)!}{2}$ for $n \\geq 3$. Read the problem carefully: a key ring or a bracelet can be flipped; people at a table cannot.',
      },
      {
        heading: 'Colorings up to rotation',
        body: 'The same idea handles colorings. Paint the four corners of a square with four different colors: there are $4! = 24$ ways to assign colors to labeled corners, and rotating the square turns each coloring into $3$ others, so the $24$ split into groups of $4$. There are $\\frac{24}{4} = 6$ colorings up to rotation. The recipe: count the labeled arrangements, then divide by the number of symmetries — as long as every group has the full size.',
      },
      {
        heading: 'When dividing fails',
        body: 'Paint each corner of a square red or blue: $2^4 = 16$ labeled colorings, but $\\frac{16}{4}$ is not even a whole number. The problem is the all-red square: rotating it gives the same labeled coloring back, so its group has size $1$, not $4$. Whenever some arrangement is unchanged by a symmetry, the groups have different sizes and plain division breaks. Then count by cases instead: by number of red corners, $0, 1, 2, 3, 4$ give $1, 1, 2, 1, 1$ colorings (the two reds are adjacent or opposite), for $6$ in all.',
      },
    ],
    examples: [
      {
        problem: 'Six friends sit around a round table. Two seatings are the same if everyone has the same left and right neighbors. How many different seatings are there?',
        steps: [
          'If the chairs were numbered there would be $6! = 720$ seatings.',
          'Rotating the table gives $6$ chair-numberings of the same seating, so every real seating was counted $6$ times.',
          'Divide: $\\frac{720}{6} = 120$, which is $5!$.',
        ],
        answer: 'There are $120$ seatings.',
      },
      {
        problem: 'A bracelet is made by stringing $6$ different beads in a loop. Bracelets that differ only by rotating or flipping are the same. How many different bracelets are there?',
        steps: [
          'Start with the $6! = 720$ orders of the beads in a line.',
          'Each bracelet matches $6$ rotations, and flipping the bracelet doubles that to $12$ line orders per bracelet.',
          'Divide: $\\frac{720}{12} = 60$.',
        ],
        answer: 'There are $60$ bracelets.',
      },
      {
        problem: 'Each corner of a square is painted one of four colors, using each color exactly once. Two paintings are the same if a rotation of the square turns one into the other (flipping is not allowed). How many different paintings are there?',
        steps: [
          'Label the corners and paint them: $4! = 24$ ways.',
          'The square has $4$ rotations (by $0^\\circ, 90^\\circ, 180^\\circ, 270^\\circ$), and since all four colors are different no rotation other than $0^\\circ$ leaves a painting unchanged, so each painting appears exactly $4$ times among the $24$.',
          'Divide: $\\frac{24}{4} = 6$.',
          'Sanity check: fix the red corner at the top; the other three colors fill the remaining corners in $3! = 6$ ways.',
        ],
        answer: 'There are $6$ paintings.',
      },
    ],
  },
  problems: [
    {
      q: 'Seven people sit around a round table. Two seatings are the same if everyone has the same two neighbors on the same sides. How many different seatings are there?',
      choices: ['$5040$', '$2520$', '$840$', '$720$'],
      answer: 3,
      solution: 'Numbered chairs would give $7! = 5040$ seatings, and each real seating appears $7$ times among them, once per rotation. So there are $\\frac{5040}{7} = 720 = 6!$ seatings. Answering $5040$ forgets the rotations; $2520$ divides by $2$ as if the table could be flipped.',
    },
    {
      q: 'A necklace is strung from $5$ different beads. Two necklaces are the same if one can be rotated or flipped over to look like the other. How many different necklaces can be made?',
      choices: ['$24$', '$12$', '$120$', '$60$'],
      answer: 1,
      solution: 'There are $5! = 120$ orders in a line. Each necklace appears $5$ times from rotation and twice more from flipping, $10$ times in all: $\\frac{120}{10} = 12$. Answering $24$ divides only for rotations; $60$ divides only for the flip.',
    },
    {
      q: 'Five different charms are hung one at each corner of a pendant shaped like a regular pentagon. Two placements are the same if rotating the pendant turns one into the other; flipping is not allowed. How many different placements are there?',
      choices: ['$24$', '$120$', '$60$', '$12$'],
      answer: 0,
      solution: 'Labeled corners give $5! = 120$ placements, and since all the charms are different every placement appears exactly $5$ times under the $5$ rotations. So $\\frac{120}{5} = 24$. Answering $120$ ignores the rotations; $12$ also divides by $2$ for a flip that was not allowed; $60$ divides by $2$ instead of by the $5$ rotations.',
    },
    {
      q: 'Six friends sit around a round table, and Ann insists on sitting next to Ben. Rotations of a seating count as the same seating. How many seatings are possible?',
      choices: ['$24$', '$240$', '$48$', '$120$'],
      answer: 2,
      solution: 'Glue Ann and Ben into a block. Now $5$ units sit around the table: $(5-1)! = 24$ circular arrangements. The block can be Ann-then-Ben or Ben-then-Ann going clockwise, so multiply by $2$: $48$. Forgetting the two orders inside the block gives $24$; $240 = 2 \\times 5!$ treats the $5$ units as a line.',
    },
    {
      q: 'Seven different keys are put on a circular key ring. Two rings are the same if one can be rotated or turned over to look like the other. How many different key rings are there?',
      choices: ['$5040$', '$720$', '$2520$', '$360$'],
      answer: 3,
      solution: 'In a line: $7! = 5040$. Each ring appears $7$ times by rotation and twice more by turning it over, so $14$ times in all: $\\frac{5040}{14} = 360$. Answering $720$ forgets that the ring can be turned over; $2520$ forgets the rotations.',
    },
    {
      q: 'Five people sit at a round table with five chairs, and each chair has a cushion of a different color. Two seatings are different if any person sits on a different cushion. How many seatings are there?',
      choices: ['$24$', '$120$', '$12$', '$60$'],
      answer: 1,
      solution: 'The cushions make the chairs distinguishable, so rotating the table moves everyone to a new cushion and gives a different seating. Nothing is overcounted: $5! = 120$. Answering $24 = 4!$ divides by $5$ for rotations that this problem counts as different.',
    },
    {
      q: 'Eight people sit around a round table, and Ann refuses to sit next to Ben. Rotations of a seating are the same seating. How many seatings are possible?',
      choices: ['$3600$', '$1440$', '$5040$', '$4320$'],
      answer: 0,
      solution: 'All circular seatings: $7! = 5040$. Seatings with Ann next to Ben: glue them into a block, seat $7$ units in a circle in $6! = 720$ ways, and multiply by $2$ for the order inside the block: $1440$. Subtract: $5040 - 1440 = 3600$. Answering $1440$ gives the complement; $4320$ forgets the factor of $2$ in the block.',
    },
    {
      q: 'Three boys and three girls sit around a round table so that boys and girls alternate. Rotations of a seating are the same seating. How many seatings are possible?',
      choices: ['$72$', '$36$', '$12$', '$24$'],
      answer: 2,
      solution: 'Seat one boy anywhere to kill the rotations. Going clockwise, the seats must then alternate girl, boy, girl, boy, girl. The two remaining boys fill their two seats in $2! = 2$ ways and the three girls fill theirs in $3! = 6$ ways: $2 \\times 6 = 12$. Answering $72$ counts alternating arrangements in a line (two patterns times $3!\\,3!$) and never divides by the $6$ rotations; $36$ divides only by $2$.',
    },
    {
      q: 'Seven people, including Ann, Ben, and Cal, sit around a round table. No two of Ann, Ben, and Cal may sit next to each other. Rotations of a seating are the same seating. How many seatings are possible?',
      choices: ['$720$', '$144$', '$576$', '$360$'],
      answer: 1,
      solution: 'Seat the other four people first: $(4-1)! = 6$ circular arrangements. They create $4$ gaps between neighbors, and Ann, Ben, and Cal must go into three different gaps so that none of them touch. Choose gaps in order for Ann, Ben, Cal: $4 \\times 3 \\times 2 = 24$. Total $6 \\times 24 = 144$. Answering $720$ ignores the restriction; $576 = 720 - 144$ counts the seatings where at least two of them do touch; $360 = 6 \\times 5 \\times 4 \\times 3$ uses $5$ gaps as if the four people were in a line.',
    },
    {
      q: 'Each corner of a square is painted red, blue, or green (colors may repeat). Two paintings are the same if a rotation of the square turns one into the other (flipping is not allowed). How many different paintings are there?',
      choices: ['$27$', '$20$', '$81$', '$24$'],
      answer: 3,
      solution: 'There are $3^4 = 81$ labeled paintings, but $\\frac{81}{4}$ is not a whole number: paintings like all-red are unchanged by rotation, so plain division fails. Count by the pattern of colors instead. All four corners one color: $3$. Three of one color and one of another: $3 \\times 2 = 6$, since rotation puts the odd corner anywhere. Two and two: choose the two colors in $3$ ways, and the pair is either adjacent or opposite, for $6$. Two of one color and one each of the other two: $3$ choices for the doubled color, and then the doubled pair is adjacent (with the two singles in $2$ orders) or opposite ($1$ way), for $3 \\times 3 = 9$. Total $3 + 6 + 6 + 9 = 24$. Answering $20$ is $\\frac{81}{4}$ rounded; $27$ is the count for a line of three corners.',
    },
  ],
}

const challenge = [
  {
    q: 'How many different arrangements of the letters of $SASSY$ are there?',
    choices: ['$20$', '$120$', '$60$', '$40$'],
    answer: 0,
    solution: 'Five letters with $S$ appearing three times: $\\frac{5!}{3!} = \\frac{120}{6} = 20$. Answering $120$ forgets the repeats; $60$ divides by $2$ instead of $3!$; $40$ divides by $3$.',
  },
  {
    q: 'Eleven teams enter a tournament in which every pair of teams plays exactly once. How many games are played?',
    choices: ['$110$', '$121$', '$55$', '$45$'],
    answer: 2,
    solution: 'One game per pair of teams: $\\frac{11 \\cdot 10}{2} = 55$. Answering $110$ counts each game once from each team; $121 = 11^2$ lets teams play themselves; $45$ is the count for $10$ teams.',
  },
  {
    q: 'A bracelet is made from $8$ different beads. Two bracelets are the same if one can be rotated or flipped over to match the other. How many different bracelets are there?',
    choices: ['$5040$', '$2520$', '$40320$', '$20160$'],
    answer: 1,
    solution: 'Line orders: $8! = 40320$. Each bracelet appears $8$ times from rotation and twice more from flipping, $16$ times in all: $\\frac{40320}{16} = 2520$. Answering $5040$ forgets the flip; $20160$ forgets the rotations.',
  },
  {
    q: 'How many diagonals does a convex decagon have?',
    choices: ['$45$', '$70$', '$40$', '$35$'],
    answer: 3,
    solution: 'Each of the $10$ corners sends diagonals to the $10 - 3 = 7$ corners that are not itself or a neighbor: $10 \\times 7 = 70$, which counts every diagonal twice. So there are $35$ diagonals. Answering $45$ keeps the $10$ sides among the pairs of corners; $70$ forgets to halve.',
  },
  {
    q: 'In how many arrangements of the letters of $PARALLEL$ are all three $L$’s next to each other and both $A$’s next to each other?',
    choices: ['$3360$', '$120$', '$240$', '$720$'],
    answer: 1,
    solution: 'Glue the $L$’s into a block $LLL$ and the $A$’s into a block $AA$. Now arrange five distinct things: $LLL$, $AA$, $P$, $R$, $E$, which is $5! = 120$. Nothing is left to divide, because the identical letters are locked inside their blocks. Answering $3360$ is the count of all arrangements $\\frac{8!}{3!\\,2!}$; $240$ and $720$ multiply by orders inside the blocks that produce nothing new.',
  },
  {
    q: 'Twelve people are at a party and $5$ of them are wearing hats. Two people shake hands exactly once if at least one of them is wearing a hat, and otherwise they do not shake hands. How many handshakes take place?',
    choices: ['$45$', '$35$', '$21$', '$66$'],
    answer: 0,
    solution: 'The pairs that do not shake are the pairs with no hat, chosen from the $7$ hatless people: $\\frac{7 \\cdot 6}{2} = 21$. All pairs number $\\frac{12 \\cdot 11}{2} = 66$, so $66 - 21 = 45$ handshakes. Answering $35 = 5 \\times 7$ forgets the hat-with-hat handshakes, of which there are $10$; $21$ is the number of pairs that do not shake.',
  },
  {
    q: 'Seven people, including Ann, Ben, and Cal, sit around a round table. Ann, Ben, and Cal must sit in three consecutive seats, in any order. Rotations of a seating are the same seating. How many seatings are possible?',
    choices: ['$720$', '$24$', '$48$', '$144$'],
    answer: 3,
    solution: 'Glue the three friends into one block. Then $5$ units sit around the table in $(5-1)! = 24$ ways, and the three friends can be ordered inside the block in $3! = 6$ ways: $24 \\times 6 = 144$. Answering $24$ forgets the orders inside the block; $48$ uses $2$ orders as if the block held two people.',
  },
  {
    q: 'How many six-digit even numbers can be formed using each of the digits $1, 1, 2, 2, 3, 3$ exactly once?',
    choices: ['$90$', '$45$', '$30$', '$60$'],
    answer: 2,
    solution: 'The last digit must be even, so it is a $2$. Pin one $2$ at the end and arrange the remaining $1, 1, 2, 3, 3$, which has two repeated pairs: $\\frac{5!}{2!\\,2!} = 30$. Answering $90$ is the count of all arrangements $\\frac{6!}{2!\\,2!\\,2!}$; $45$ halves that as if exactly half the numbers were even, but only $\\frac{1}{3}$ of the digits are $2$’s; $60$ multiplies by $2$ for the two identical $2$’s that could go last.',
  },
  {
    q: 'Each corner of a regular hexagon is painted red or blue. Two paintings are the same if a rotation of the hexagon turns one into the other (flipping is not allowed). How many different paintings are there?',
    choices: ['$14$', '$13$', '$11$', '$16$'],
    answer: 0,
    solution: 'There are $2^6 = 64$ labeled paintings, but $\\frac{64}{6}$ is not a whole number because paintings such as all-red are unchanged by rotation, so count by the number of red corners. With $0$ or $6$ reds: $1$ each. With $1$ or $5$: $1$ each. With $2$ reds, the reds are neighbors, one apart, or opposite: $3$; by symmetry $4$ reds also gives $3$. With $3$ reds, going around the hexagon the reds form $RRR$ in a row, $RR$ plus a separated $R$ with one blue between them, $RR$ plus an $R$ with two blues between them, or three reds spaced evenly: $4$. Total $1 + 1 + 3 + 4 + 3 + 1 + 1 = 14$. Answering $11$ is $\\frac{64}{6}$ rounded up; $13$ misses one of the three-red patterns.',
  },
  {
    q: 'The chess club and the math club held a joint meeting, and nobody belongs to both clubs. Every two people in the room shook hands exactly once, except that no two chess club members shook hands with each other. The chess club has $7$ members, and exactly $210$ handshakes took place. How many members does the math club have?',
    choices: ['$14$', '$15$', '$22$', '$30$'],
    answer: 1,
    solution: 'Let the math club have $m$ members, so $7 + m$ people are in the room. If everyone had shaken hands, there would be $\\binom{7+m}{2}$ handshakes; the missing ones are the $\\binom{7}{2} = 21$ pairs of chess members. So $\\binom{7+m}{2} - 21 = 210$, giving $\\binom{7+m}{2} = 231 = \\frac{22 \\cdot 21}{2}$, so $7 + m = 22$ and $m = 15$. Check the other way: the $15$ math members shake $\\binom{15}{2} = 105$ hands among themselves and $7 \\times 15 = 105$ hands with chess members, and $105 + 105 = 210$. Answering $14$ forgets the missing chess pairs and solves $\\binom{7+m}{2} = 210$; $22$ is everyone in the room, not just the math club; $30$ counts only the chess–math handshakes and solves $7m = 210$.',
  },
  {
    q: 'Four married couples sit around a round table, with each person next to their spouse. Rotations of a seating are the same seating. How many seatings are possible?',
    choices: ['$48$', '$384$', '$192$', '$96$'],
    answer: 3,
    solution: 'Glue each couple into a block. The $4$ blocks sit around the table in $(4-1)! = 6$ ways, and each couple can sit in $2$ orders inside its block, for $2^4 = 16$. Total $6 \\times 16 = 96$. Answering $48$ uses only $2^3$; $384 = 4! \\times 16$ treats the blocks as a line and never divides out the $4$ rotations; $192$ divides by $2$ instead of $4$.',
  },
  {
    q: 'A bracelet is strung from $6$ beads: $2$ identical red, $2$ identical blue, and $2$ identical green. Two bracelets are the same if one can be rotated or flipped over to match the other. How many different bracelets are there?',
    choices: ['$16$', '$15$', '$11$', '$8$'],
    answer: 2,
    solution: 'There are $\\frac{6!}{2!\\,2!\\,2!} = 90$ labeled strings, but some bracelets are unchanged by a flip or a half-turn, so division by $12$ fails ($90 \\div 12$ is not whole). Count by how far apart the two reds are. Reds adjacent: the other four beads sit in a row between them, and flipping the bracelet reverses that row; placing the two blues in the row gives $6$ choices, of which $BB\\_\\_$ and $\\_\\_BB$ match, $B\\_B\\_$ and $\\_B\\_B$ match, and $B\\_\\_B$ and $\\_BB\\_$ are each their own mirror image, so $4$ bracelets. Reds one apart: the flip through the two reds fixes the bead between them and the bead opposite it while swapping the other two, and checking the $6$ blue placements the same way gives $4$. Reds opposite: the remaining four beads form two pairs of neighbors on the two sides; the blues are on the same side, or split with the blues adjacent-across, or split diagonally, and every other placement is a rotation or flip of one of these, so $3$. Total $4 + 4 + 3 = 11$. Answering $16$ counts rotations only and forgets flips; $15$ is $\\frac{90}{6}$, and $8$ is $\\frac{90}{12}$ rounded.',
  },
]

const worksheet = [
  {
    q: 'How many different arrangements of the letters of $PIZZAZZ$ are there?',
    answer: '$210$',
    solution: 'Seven letters with $Z$ appearing four times and every other letter once: $\\frac{7!}{4!} = \\frac{5040}{24} = 210$.',
  },
  {
    q: 'Sixteen people at a meeting each shake hands with everyone else exactly once. How many handshakes are there?',
    answer: '$120$',
    solution: 'Each of $16$ people shakes $15$ hands, and $16 \\times 15 = 240$ counts every handshake twice. So there are $\\frac{240}{2} = 120$ handshakes.',
  },
  {
    q: 'How many diagonals does a convex nonagon (a $9$-sided polygon) have?',
    answer: '$27$',
    solution: 'Each corner sends diagonals to $9 - 3 = 6$ corners, and $9 \\times 6 = 54$ counts each diagonal from both ends: $\\frac{54}{2} = 27$ diagonals.',
  },
  {
    q: 'Nine people sit around a round table. Two seatings are the same if everyone has the same neighbors on the same sides. How many seatings are there?',
    answer: '$40320$',
    solution: 'Numbered chairs give $9!$ seatings, and each real seating appears $9$ times by rotation: $\\frac{9!}{9} = 8! = 40320$.',
  },
  {
    q: 'A necklace is strung from $9$ different beads. Two necklaces are the same if one can be rotated or flipped over to match the other. How many different necklaces are there?',
    answer: '$20160$',
    solution: 'Line orders: $9! = 362880$. Each necklace appears $9$ times by rotation and twice more by flipping, $18$ times in all: $\\frac{362880}{18} = 20160$, which is $\\frac{8!}{2}$.',
  },
  {
    q: 'How many arrangements of the letters of $COFFEE$ both begin and end with the letter $E$?',
    answer: '$12$',
    solution: 'Pin an $E$ at each end. The middle four spots hold $C, O, F, F$ with the two $F$’s identical: $\\frac{4!}{2!} = 12$.',
  },
  {
    q: 'Twelve teams are partway through a tournament in which every pair of teams plays exactly once. So far every team has played exactly $5$ games. How many games have been played?',
    answer: '$30$',
    solution: 'From the teams’ point of view there are $12 \\times 5 = 60$ games, but each game was counted by both of its teams. So $\\frac{60}{2} = 30$ games have been played.',
  },
  {
    q: 'Six people, including Ann and Ben, sit around a round table with six evenly spaced seats. Ann must sit directly opposite Ben. Rotations of a seating are the same seating. How many seatings are possible?',
    answer: '$24$',
    solution: 'Seat Ann anywhere; this uses up the rotations. Ben’s seat is then forced, directly across from her. The other four people fill the remaining four seats in $4! = 24$ ways.',
  },
  {
    q: 'How many six-digit numbers greater than $300000$ can be formed using each of the digits $1, 2, 2, 3, 3, 3$ exactly once?',
    answer: '$30$',
    solution: 'The number is greater than $300000$ exactly when its first digit is $3$. Pin a $3$ in front and arrange the remaining $1, 2, 2, 3, 3$: $\\frac{5!}{2!\\,2!} = 30$.',
  },
  {
    q: 'Each corner of an equilateral triangle is painted red, blue, or green (colors may repeat). Two paintings are the same if a rotation of the triangle turns one into the other (flipping is not allowed). How many different paintings are there?',
    answer: '$11$',
    solution: 'There are $3^3 = 27$ labeled paintings, but the one-color paintings are unchanged by rotation, so division by $3$ fails; count by pattern. All one color: $3$. Two corners one color and the third another: $3 \\times 2 = 6$, since rotation moves the odd corner anywhere. All three colors different: the $3! = 6$ labeled paintings split into $2$ groups of $3$ rotations, so $2$ paintings (red, blue, green clockwise or counterclockwise). Total $3 + 6 + 2 = 11$.',
  },
]

export default {
  id: 'intro-counting-ch03',
  book: 'intro-counting',
  number: 3,
  title: 'Correcting for Overcounting',
  intro:
    'Sometimes the easiest way to count is to count wrong on purpose: count every arrangement as if all the letters were different, or count every handshake from both sides, and then divide out the repeats. This chapter teaches you to spot exactly how many times each thing was counted — and to notice the rare moments when a plain division stops being honest.',
  sections: [s32, s33, s34],
  challenge,
  worksheet,
}
