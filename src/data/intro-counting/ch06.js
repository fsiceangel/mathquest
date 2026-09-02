// Counting & Probability — Chapter 6: Some Harder Counting Problems
// All problems, explanations, and examples are original MathQuest content.

const s62 = {
  id: '6.2',
  title: 'Problems',
  learn: {
    concepts: [
      {
        heading: 'Read it twice, then name the object',
        body: 'Before you count anything, say in one sentence exactly what one object looks like: "a lineup of $7$ people", "a set of $3$ numbers", "a path made of $9$ steps". The second reading is where you settle the conventions the problem hides — are the people distinguishable, does order matter, is repetition allowed, are rotations of a circle the same? Most wrong answers on hard problems are not arithmetic slips; they are answers to a slightly different question.',
      },
      {
        heading: 'Casework or complement? Count the smaller side',
        body: 'Casework splits the objects into piles that do not overlap and together cover everything; complementary counting counts what you do not want and subtracts from the total. Pick whichever side is smaller. A condition with "at least one" almost always has a tiny complement ("none"). A condition with several separate parts usually wants casework — and if two "do not want" conditions can happen at once, remember to add their overlap back: $\\text{total} - A - B + \\text{both}$.',
      },
      {
        heading: 'Make it smaller, or make it something else',
        body: 'When a formula feels shaky, shrink the problem until you can list every object by hand — $3$ people instead of $8$, a $2 \\times 2$ grid instead of $5 \\times 4$ — and check that the formula gives the number you listed. And when a problem seems to have no formula at all, look for a bijection: a way to match each object with exactly one object of a kind you already know how to count. Ten identical cookies for three kids becomes a row of ten stars and two bars; a set with no two consecutive numbers becomes a set with no restriction at all.',
      },
      {
        heading: 'Ask "did I count this one twice?"',
        body: 'After you finish, pick one specific object and trace how your count produced it. If your method could have produced it two different ways — a lineup counted once for each of the two identical letters, a circle counted once per rotation, a pair counted from both ends — you overcounted, and the fix is to divide by exactly that number of ways, or to switch to a method that builds each object once. A constructive count that picks "the $5$ first, then fills the rest" almost always makes this mistake.',
      },
    ],
    examples: [
      {
        problem: 'Six people sit around a round table with six evenly spaced seats. Two seatings are the same if one is a rotation of the other. In how many seatings is Ana neither next to Ben nor directly opposite Ben?',
        steps: [
          'The object is a circular seating of $6$ distinguishable people with rotations identified, so there are $5! = 120$ seatings in all: fix Ana in one seat to kill the rotations, and the other $5$ fill the rest.',
          'Once Ana is fixed, Ben has $5$ possible seats: two are next to her and one is directly opposite, and those three bad seats are three different seats, so the two "do not want" conditions can never happen at once.',
          'Count directly: Ben takes one of the $2$ remaining seats, and the other $4$ people fill the last $4$ seats in $4! = 24$ ways, for $2 \\cdot 24 = 48$.',
          'The complement agrees with no add-back needed: $120 - 48 - 24 = 48$, where $2 \\cdot 4! = 48$ seatings have Ben beside Ana and $4! = 24$ have him opposite her.',
          'Check small: with $4$ people every seat other than Ana’s is beside her or opposite her, and the same method gives $6 - 4 - 2 = 0$, as it should.',
        ],
        answer: 'There are $48$ seatings.',
      },
      {
        problem: 'How many strings of $4$ letters, each letter chosen from $A, B, C, D$ with repetition allowed, contain at least one $A$ and at least one $B$?',
        steps: [
          'There are $4^4 = 256$ strings in all; "at least one $A$ and at least one $B$" is awkward to build directly, so count the strings that fail.',
          'Strings with no $A$: $3^4 = 81$. Strings with no $B$: also $81$. But a string with neither $A$ nor $B$ was subtracted twice, and there are $2^4 = 16$ of those.',
          'So the number of bad strings is $81 + 81 - 16 = 146$, and the good ones number $256 - 146 = 110$.',
          'Sanity check with length $2$: the only good strings are $AB$ and $BA$, and the same method gives $16 - 9 - 9 + 4 = 2$, so the method holds.',
        ],
        answer: 'There are $110$ such strings.',
      },
      {
        problem: 'In how many ways can $7$ be written as a sum of positive integers if the order of the terms matters? For example, $1 + 6$, $6 + 1$, and $7$ by itself are three different ways.',
        steps: [
          'The object is an ordered list of positive integers adding to $7$, and no formula from earlier chapters counts those directly, so look for a bijection to something familiar.',
          'Draw $7$ dots in a row. Between neighboring dots there are $6$ gaps, and choosing which gaps to cut tells you the terms: cutting after the first dot and after the fourth gives $1 + 3 + 3$.',
          'Every choice of gaps to cut gives exactly one ordered sum, and every ordered sum comes from exactly one choice of cuts, so the count is the number of subsets of the $6$ gaps: $2^6 = 64$.',
          'Check small: for $3$ the sums are $3$, $1 + 2$, $2 + 1$, and $1 + 1 + 1$, four in all, and $2^2 = 4$.',
        ],
        answer: 'There are $64$ ways.',
      },
    ],
  },
  problems: [
    {
      q: 'How many three-digit positive integers have three different digits, with the middle digit the largest of the three?',
      choices: ['$120$', '$168$', '$204$', '$240$'],
      answer: 2,
      solution: 'Pick the three digits first, then place them: the largest goes in the middle, and the other two take the ends in either order — unless one of them is $0$, which cannot lead. With no $0$, choose $3$ digits from $1$–$9$ and put the two smaller ones at the ends in $2$ orders: $\\binom{9}{3} \\cdot 2 = 168$. With a $0$, choose the other $2$ digits from $1$–$9$, and the $0$ must take the units place: $\\binom{9}{2} = 36$. Total $168 + 36 = 204$. The choice $168$ forgets that $0$ may be the units digit; $240$ is $\\binom{10}{3} \\cdot 2$, which lets $0$ lead; $120$ is $\\binom{10}{3}$, which picks the digits but places the two smaller ones in only one order.',
    },
    {
      q: 'A path moves from $(0, 0)$ to $(5, 3)$, one step right or one step up at a time. How many paths pass through $(2, 2)$ or through $(3, 1)$, or both?',
      choices: ['$8$', '$24$', '$48$', '$56$'],
      answer: 2,
      solution: 'Through $(2, 2)$: $\\binom{4}{2}$ ways to reach it and $\\binom{4}{1}$ ways to finish, $6 \\cdot 4 = 24$. Through $(3, 1)$: $\\binom{4}{1}\\binom{4}{2} = 24$. Before adding, ask whether one path can visit both: from $(2, 2)$ to $(3, 1)$ takes a step down, and from $(3, 1)$ to $(2, 2)$ takes a step left, so no path does, and there is no overlap to remove. Total $24 + 24 = 48$ of the $\\binom{8}{3} = 56$ paths. The choice $24$ counts only one of the two points; $56$ ignores the condition; $8$ is the complement, the paths that miss both points.',
    },
    {
      q: 'How many four-digit positive integers have digits that add up to $5$?',
      choices: ['$15$', '$56$', '$70$', '$35$'],
      answer: 3,
      solution: 'Name the object: digits $a, b, c, d$ with $a + b + c + d = 5$ and $a \\ge 1$; no digit can exceed $9$ here, so that rule never bites. Give the thousands digit its required $1$, and share the remaining $4$ units among the four digits freely, a row of $4$ stars and $3$ bars: $\\binom{7}{3} = 35$. The choice $56$ is $\\binom{8}{3}$, which lets the number start with $0$; $15$ is $\\binom{6}{2}$, using only $2$ bars for four digits; $70$ is $\\binom{8}{4}$, mixing up the numbers of stars and bars.',
    },
    {
      q: 'A committee of $4$ is chosen from $6$ boys and $5$ girls, and then one member of the committee is named its chair. In how many ways can this be done if the chair must be a girl?',
      choices: ['$600$', '$330$', '$825$', '$1320$'],
      answer: 0,
      solution: 'Build the object in an order that produces each committee-with-chair exactly once: choose the chair from the $5$ girls, then choose the other $3$ members from the remaining $10$ people, $5 \\cdot \\binom{10}{3} = 600$. Casework on the number of girls agrees: $1 \\cdot 5\\binom{6}{3} + 2 \\cdot \\binom{5}{2}\\binom{6}{2} + 3 \\cdot \\binom{5}{3}\\binom{6}{1} + 4 \\cdot \\binom{5}{4} = 100 + 300 + 180 + 20$. The choice $825$ is $5 \\cdot \\binom{11}{3}$, forgetting that the chair is already one of the four; $1320$ is $4 \\cdot \\binom{11}{4}$, letting a boy be chair; $330$ picks the committee and never picks a chair.',
    },
    {
      q: 'Ten identical cookies are divided among four children, Ana, Ben, Cal, and Dee, so that every child gets at least $1$ cookie. In how many of these divisions does Ana get more cookies than Ben?',
      choices: ['$34$', '$42$', '$68$', '$84$'],
      answer: 0,
      solution: 'Give each child one cookie, then share the remaining $6$ freely: $\\binom{9}{3} = 84$ divisions with everyone fed. Among them, Ana and Ben tie when each gets $k$ cookies and Cal and Dee split the other $10 - 2k$ with at least one each: $k = 1, 2, 3, 4$ give $7 + 5 + 3 + 1 = 16$ ties. The other $84 - 16 = 68$ divisions split evenly by symmetry — swapping Ana’s pile with Ben’s matches each "Ana ahead" division with one "Ben ahead" division — so Ana is ahead in $\\frac{68}{2} = 34$. The choice $42$ halves $84$ without removing the ties, $68$ forgets to halve, and $84$ ignores the condition.',
    },
    {
      q: 'Six people, including Ana, Ben, Cal, and Dee, stand in a row. In how many arrangements are Ana and Ben next to each other while Cal and Dee are not next to each other?',
      choices: ['$96$', '$120$', '$144$', '$240$'],
      answer: 2,
      solution: 'Glue Ana and Ben into a block: the block and the $4$ other people form $5$ units, arranged in $5! = 120$ ways, times $2$ for the order inside the block, so $240$ rows have Ana next to Ben. Among those, the ones with Cal next to Dee too have two blocks and $4$ units: $4! \\cdot 2 \\cdot 2 = 96$. Subtract: $240 - 96 = 144$. The choice $240$ ignores the Cal–Dee rule, $96$ answers the opposite question about Cal and Dee, and $120$ forgets that Ana and Ben can swap inside their block.',
    },
    {
      q: 'Seven people, including Ana, Ben, Cal, and Dee, sit around a round table; seatings that differ by a rotation are the same. Ben sits next to Ana, and neither Cal nor Dee sits next to Ana or next to Ben. How many seatings are possible?',
      choices: ['$36$', '$72$', '$108$', '$240$'],
      answer: 1,
      solution: 'Fix Ana in a seat to remove the rotations, and put Ben in one of her $2$ neighboring seats. The Ana–Ben pair now has two outside neighboring seats, and the only people allowed there are the $3$ who are not Cal or Dee: fill those two seats first, $3 \\cdot 2 = 6$ ways. The remaining $3$ seats are not next to Ana or Ben, so Cal, Dee, and the last person take them in $3! = 6$ ways. Multiply: $2 \\cdot 6 \\cdot 6 = 72$. A complement check agrees: with Ana and Ben placed, the $5$ open seats form a path whose two ends touch the pair, and $5! - 2 \\cdot 4! - 2 \\cdot 4! + 2 \\cdot 3! = 36$ arrangements keep both Cal and Dee off the ends, times $2$ for Ben’s side. The choice $36$ forgets that Ben can sit on either side of Ana; $108$ gives Cal $3$ seats and then Dee $3$ seats, as if they could not take each other’s seat; $240$ is $2 \\cdot 5!$, ignoring Cal and Dee.',
    },
    {
      q: 'The seven letters $A, B, C, D, E, F, G$ are arranged in a row. In how many arrangements is $A$ somewhere to the left of $B$ and $B$ somewhere to the left of $C$ (not necessarily next to each other), while $D$ and $E$ are directly next to each other?',
      choices: ['$120$', '$480$', '$1440$', '$240$'],
      answer: 3,
      solution: 'Handle the adjacency first: glue $D$ and $E$ into one block that can face either way, so there are $6$ units and $6! \\cdot 2 = 1440$ arrangements. Now trace one of them: $A$, $B$, and $C$ occupy three positions in some order, and the $3! = 6$ ways of ordering them in those same positions are all equally common, but only one of the six has $A$ before $B$ before $C$. So divide: $\\frac{1440}{6} = 240$. The choice $1440$ ignores the order rule; $480$ divides by $3$ instead of $3!$; $120$ also forgets that the $D$–$E$ block can face either way.',
    },
    {
      q: 'How many $3$-element subsets of $\\{1, 2, 3, \\ldots, 10\\}$ contain no two consecutive integers?',
      choices: ['$120$', '$84$', '$35$', '$56$'],
      answer: 3,
      solution: 'Write a good subset as $a < b < c$ with $b \\ge a + 2$ and $c \\ge b + 2$, and match it with $a < b - 1 < c - 2$, which is any $3$-element subset of $\\{1, 2, \\ldots, 8\\}$ at all. The matching runs both ways (add $0, 1, 2$ back to the three elements), so the answer is $\\binom{8}{3} = 56$. Check small: $3$-subsets of $\\{1, \\ldots, 5\\}$ with no neighbors are just $\\{1, 3, 5\\}$, and $\\binom{3}{3} = 1$. The choice $120$ is $\\binom{10}{3}$ with no restriction; $84$ is $\\binom{9}{3}$, shrinking the set by only one; $35$ is $\\binom{7}{3}$, shrinking it by one too many.',
    },
    {
      q: 'A path moves from $A = (0, 0)$ to $B = (5, 4)$ on the grid shown, one step right or one step up at a time. How many paths pass through exactly one of the two marked points?',
      fig: {
        view: [-0.8, -0.8, 5.8, 4.8],
        elems: [
          { t: 'seg', a: [0, 0], b: [5, 0] }, { t: 'seg', a: [0, 1], b: [5, 1] }, { t: 'seg', a: [0, 2], b: [5, 2] },
          { t: 'seg', a: [0, 3], b: [5, 3] }, { t: 'seg', a: [0, 4], b: [5, 4] },
          { t: 'seg', a: [0, 0], b: [0, 4] }, { t: 'seg', a: [1, 0], b: [1, 4] }, { t: 'seg', a: [2, 0], b: [2, 4] },
          { t: 'seg', a: [3, 0], b: [3, 4] }, { t: 'seg', a: [4, 0], b: [4, 4] }, { t: 'seg', a: [5, 0], b: [5, 4] },
          { t: 'point', p: [0, 0] }, { t: 'label', p: [0, 0], text: 'A', dx: -14, dy: 14 },
          { t: 'point', p: [5, 4] }, { t: 'label', p: [5, 4], text: 'B', dx: 14, dy: -8 },
          { t: 'point', p: [1, 1], open: true }, { t: 'label', p: [1, 1], text: '(1, 1)', dx: 22, dy: 16 },
          { t: 'point', p: [4, 3], open: true }, { t: 'label', p: [4, 3], text: '(4, 3)', dx: -24, dy: -8 },
        ],
      },
      choices: ['$26$', '$60$', '$100$', '$140$'],
      answer: 1,
      solution: 'Through $(1, 1)$: $\\binom{2}{1}\\binom{7}{3} = 70$. Through $(4, 3)$: $\\binom{7}{3}\\binom{2}{1} = 70$. A path can visit both, in three legs: $\\binom{2}{1}\\binom{5}{2}\\binom{2}{1} = 40$. Those $40$ paths sit inside both of the $70$s, and "exactly one" wants them gone entirely, so subtract them twice: $70 + 70 - 2 \\cdot 40 = 60$. The choice $100$ subtracts the overlap only once, which counts the paths through at least one marked point; $140$ never removes the overlap; $26$ is the number of the $\\binom{9}{4} = 126$ paths that miss both points.',
    },
  ],
}

const challenge = [
  {
    q: 'How many four-digit positive integers have digits that strictly increase from left to right and are even?',
    choices: ['$45$', '$46$', '$63$', '$126$'],
    answer: 1,
    solution: 'A strictly increasing four-digit number is the same thing as a $4$-element subset of $\\{1, 2, \\ldots, 9\\}$ written in order (a leading $0$ is impossible, and no digit repeats). The last digit is the largest, so casework on it: last digit $4$ gives $\\binom{3}{3} = 1$, last digit $6$ gives $\\binom{5}{3} = 10$, last digit $8$ gives $\\binom{7}{3} = 35$. Total $1 + 10 + 35 = 46$. The choice $126$ is $\\binom{9}{4}$, all increasing numbers; $63$ assumes half of them are even; $45$ forgets $1234$.',
  },
  {
    q: 'How many distinct arrangements of the letters of $LETTER$ have the two $E$’s next to each other but the two $T$’s not next to each other?',
    choices: ['$24$', '$60$', '$120$', '$36$'],
    answer: 3,
    solution: 'Glue the $E$’s into one block. Arranging $L, R, T, T$ and the block gives $\\frac{5!}{2!} = 60$ arrangements with the $E$’s together. Among them, those with the $T$’s together as well use two blocks: $L, R, EE, TT$ in $4! = 24$ ways. Subtract: $60 - 24 = 36$. The choice $60$ ignores the rule about the $T$’s; $24$ is the complement, both pairs together; $120$ forgets to divide by $2!$ for the identical $T$’s.',
  },
  {
    q: 'A string of $6$ letters is formed using only the letters $A, B, C, D$, with repetition allowed. How many such strings use exactly three of the four letters?',
    choices: ['$540$', '$2148$', '$2160$', '$2916$'],
    answer: 2,
    solution: 'Choose which letter is left out ($4$ ways), then count the strings over the other three letters that use all three of them. There are $3^6 = 729$ strings over three letters; subtract those missing a particular letter, $3 \\cdot 2^6 = 192$; add back the $3$ one-letter strings, since each is missing two letters and was subtracted twice: $729 - 192 + 3 = 540$. Multiply: $4 \\cdot 540 = 2160$. The choice $540$ forgets to choose which letter is missing; $2148$ skips the add-back; $2916$ is $4 \\cdot 729$, which counts strings that use only one or two letters, and counts them more than once.',
  },
  {
    q: 'Fifteen identical balls are placed into four boxes labeled $1$ through $4$. Every box must receive at least one ball, and box $1$ may hold at most $3$ balls. How many distributions are possible?',
    choices: ['$165$', '$364$', '$199$', '$816$'],
    answer: 2,
    solution: 'Give every box one ball, leaving $11$ balls to hand out freely: $\\binom{14}{3} = 364$ distributions with every box nonempty. The bad ones have box $1$ holding at least $4$: pay box $1$ four balls and the others one each, leaving $8$ free balls, $\\binom{11}{3} = 165$. Subtract: $364 - 165 = 199$. Casework on box $1$ holding $1$, $2$, or $3$ balls agrees: $\\binom{13}{2} + \\binom{12}{2} + \\binom{11}{2} = 78 + 66 + 55$. The choice $364$ ignores the cap, $165$ is the complement, and $816$ is $\\binom{18}{3}$, forgetting that every box needs a ball.',
  },
  {
    q: 'How many four-digit positive integers use exactly two different digits? For example, $3033$ and $7272$ count, but $3333$ and $3043$ do not.',
    choices: ['$504$', '$567$', '$630$', '$1260$'],
    answer: 1,
    solution: 'Choose the pair of digits, then decide which positions get which digit. Ignoring the leading-digit rule for a moment: $\\binom{10}{2} = 45$ pairs, and each of the $4$ positions takes one of the two digits with both digits used somewhere, $2^4 - 2 = 14$ patterns, for $45 \\cdot 14 = 630$ strings. Now remove the ones that start with $0$: the pair contains $0$ ($9$ pairs), the first position holds the $0$, and the other three positions are not all $0$, so $2^3 - 1 = 7$ patterns and $9 \\cdot 7 = 63$ bad strings. Total $630 - 63 = 567$. The choice $630$ allows a leading $0$; $1260$ picks the two digits in order and counts every number twice; $504$ is $630 - 126$, throwing out every string whose pair contains $0$ instead of only those that start with $0$.',
  },
  {
    q: 'A $6 \\times 6$ grid is made of $36$ unit squares. How many rectangles with sides along the grid lines have an even area?',
    choices: ['$144$', '$441$', '$378$', '$297$'],
    answer: 3,
    solution: 'A rectangle is a choice of $2$ of the $7$ vertical lines and $2$ of the $7$ horizontal lines, $\\binom{7}{2}^2 = 441$ in all, and its area is odd exactly when both its width and its height are odd. Count the odd widths: a width of $1$ can be placed in $6$ ways, a width of $3$ in $4$ ways, and a width of $5$ in $2$ ways, so $12$ of the $21$ vertical choices give an odd width, and likewise $12$ of the $21$ horizontal choices give an odd height. So $12 \\cdot 12 = 144$ rectangles have odd area, and $441 - 144 = 297$ have even area. Casework agrees: even width with any height, $9 \\cdot 21 = 189$, plus odd width with even height, $12 \\cdot 9 = 108$. The choice $144$ counts the odd areas; $441$ ignores the condition; $378$ adds the $189$ rectangles of even width to the $189$ of even height without removing the $81$ counted twice.',
  },
  {
    q: 'A club has $9$ members, including Ana, Ben, Cal, and Dee. A committee of $5$ is chosen. Ana and Ben refuse to serve together, and Cal will serve only if Dee also serves. How many committees are possible?',
    choices: ['$56$', '$91$', '$66$', '$126$'],
    answer: 2,
    solution: 'Split on Dee. If Dee serves, choose $4$ more from the other $8$ with Ana and Ben not both chosen: $\\binom{8}{4} - \\binom{6}{2} = 70 - 15 = 55$. If Dee does not serve, Cal cannot either, so choose $5$ from the remaining $7$ with Ana and Ben not both chosen: $\\binom{7}{5} - \\binom{5}{3} = 21 - 10 = 11$. Total $55 + 11 = 66$. The choice $126$ is $\\binom{9}{5}$ with no rules; $91$ enforces only one of the two rules; $56$ subtracts both kinds of bad committee from $126$ without adding back the $10$ that break both rules.',
  },
  {
    q: 'Three identical red marbles, two identical blue marbles, two identical green marbles, and one yellow marble are placed in a row. How many arrangements have a red marble in the first position, no two blue marbles next to each other, and no two green marbles next to each other?',
    choices: ['$330$', '$270$', '$450$', '$630$'],
    answer: 0,
    solution: 'Fix a red marble first. The remaining seven positions hold $R, R, B, B, G, G, Y$: $\\frac{7!}{2!\\,2!\\,2!} = 630$ arrangements. Those with the blues together glue $BB$ into one unit among $R, R, G, G, Y$: $\\frac{6!}{2!\\,2!} = 180$; the greens together give another $180$; and both pairs together, $R, R, BB, GG, Y$, give $\\frac{5!}{2!} = 60$, which was subtracted twice. So $630 - 180 - 180 + 60 = 330$. The choice $630$ ignores both rules; $450$ enforces only one of them; $270$ subtracts both bad kinds without adding back the $60$ arrangements that break both rules.',
  },
  {
    q: 'How many five-digit positive integers have digits that never decrease from left to right, such as $11359$ or $22222$?',
    choices: ['$1287$', '$126$', '$715$', '$2002$'],
    answer: 0,
    solution: 'A never-decreasing number is determined by how many times it uses each digit value: a $0$ would have to come first, so the digits come from $1$–$9$, and the number is a choice of $5$ digits from those $9$ with repetition allowed and order ignored. That is stars and bars, $5$ stars and $8$ bars separating the nine digit values: $\\binom{13}{5} = 1287$. Check small: the same count says there are $\\binom{10}{2} = 45$ two-digit never-decreasing numbers, and listing $11$ through $19$, $22$ through $29$, and so on gives $9 + 8 + \\cdots + 1 = 45$. The choice $2002$ is $\\binom{14}{5}$, allowing the digit $0$; $126$ is $\\binom{9}{5}$, strictly increasing digits only; $715$ is $\\binom{13}{4}$, mixing up stars and bars.',
  },
  {
    q: 'A regular decagon has $10$ vertices. How many triangles with all three vertices among these $10$ share no side with the decagon?',
    choices: ['$50$', '$60$', '$110$', '$120$'],
    answer: 0,
    solution: 'There are $\\binom{10}{3} = 120$ triangles. A triangle using two sides of the decagon is three consecutive vertices, one for each starting vertex: $10$. A triangle using exactly one side picks that side ($10$ ways) and a third vertex that is not one of the $2$ endpoints or their $2$ outer neighbors: $10 \\cdot 6 = 60$. So $120 - 10 - 60 = 50$ triangles share no side. The choice $60$ subtracts only the one-side triangles, $110$ only the two-side ones, and $120$ ignores the condition.',
  },
  {
    q: 'Three married couples sit in a row of $6$ chairs. In how many arrangements does no person sit next to their own spouse?',
    choices: ['$48$', '$360$', '$240$', '$288$'],
    answer: 2,
    solution: 'Start with $6! = 720$ rows. Subtract rows where a given couple sits together: glue them, $5! \\cdot 2 = 240$, and there are $3$ couples, so subtract $720$. Rows with two given couples together were subtracted twice: $4! \\cdot 2 \\cdot 2 = 96$ for each of $\\binom{3}{2} = 3$ pairs, so add $288$. Rows with all three together have now been counted $1 - 3 + 3 = 1$ time and must be removed: $3! \\cdot 2^3 = 48$. Total $720 - 720 + 288 - 48 = 240$. The choice $288$ stops before the last correction, $360$ forgets that each glued couple can swap, and $48$ is the number with every couple together.',
  },
  {
    q: 'Seven people, including Ana, Ben, Cal, and Dee, sit around a round table; seatings that differ by a rotation are the same. In how many seatings is Ana not next to Ben and Cal not next to Dee?',
    choices: ['$240$', '$336$', '$480$', '$720$'],
    answer: 1,
    solution: 'There are $6! = 720$ seatings. Ana next to Ben: glue them, $5! \\cdot 2 = 240$; Cal next to Dee: also $240$. Both pairs glued: $4! \\cdot 2 \\cdot 2 = 96$, which was subtracted twice, so add it back: $720 - 240 - 240 + 96 = 336$. The choice $240$ forgets the add-back, $480$ is the total subtracted rather than what is left, and $720$ ignores both rules.',
  },
]

const worksheet = [
  {
    q: 'How many distinct arrangements of the letters of $BALLOON$ have neither the two $L$’s next to each other nor the two $O$’s next to each other?',
    answer: '$660$',
    solution: 'All arrangements: $\\frac{7!}{2!\\,2!} = 1260$. With the $L$’s glued: $\\frac{6!}{2!} = 360$; with the $O$’s glued: also $360$; with both glued: $5! = 120$. Subtract the two bad kinds and add back their overlap: $1260 - 360 - 360 + 120 = 660$.',
  },
  {
    q: 'A path moves from $A = (0, 0)$ to $B = (5, 5)$ on the grid shown, one step right or one step up at a time. The two open points are blocked, and the path must pass through the solid point $(3, 1)$. How many paths are possible?',
    fig: {
      view: [-0.8, -0.8, 5.8, 5.8],
      elems: [
        { t: 'seg', a: [0, 0], b: [5, 0] }, { t: 'seg', a: [0, 1], b: [5, 1] }, { t: 'seg', a: [0, 2], b: [5, 2] },
        { t: 'seg', a: [0, 3], b: [5, 3] }, { t: 'seg', a: [0, 4], b: [5, 4] }, { t: 'seg', a: [0, 5], b: [5, 5] },
        { t: 'seg', a: [0, 0], b: [0, 5] }, { t: 'seg', a: [1, 0], b: [1, 5] }, { t: 'seg', a: [2, 0], b: [2, 5] },
        { t: 'seg', a: [3, 0], b: [3, 5] }, { t: 'seg', a: [4, 0], b: [4, 5] }, { t: 'seg', a: [5, 0], b: [5, 5] },
        { t: 'point', p: [0, 0] }, { t: 'label', p: [0, 0], text: 'A', dx: -14, dy: 14 },
        { t: 'point', p: [5, 5] }, { t: 'label', p: [5, 5], text: 'B', dx: 14, dy: -8 },
        { t: 'point', p: [2, 2], open: true }, { t: 'label', p: [2, 2], text: '(2, 2)', dx: 24, dy: 16 },
        { t: 'point', p: [3, 3], open: true }, { t: 'label', p: [3, 3], text: '(3, 3)', dx: -24, dy: -8 },
        { t: 'point', p: [3, 1] }, { t: 'label', p: [3, 1], text: '(3, 1)', dx: 24, dy: 16 },
      ],
    },
    answer: '$36$',
    solution: 'Split at the required point. From $A$ to $(3, 1)$ there are $\\binom{4}{1} = 4$ paths, and none can touch $(2, 2)$, which sits above the line $y = 1$. From $(3, 1)$ to $B$ there are $\\binom{6}{2} = 15$ paths; $(2, 2)$ is out of reach to the left, but $(3, 3)$ is not: a path through it goes up two steps and then finishes in $\\binom{4}{2} = 6$ ways, so $15 - 6 = 9$ second legs are good. Multiply: $4 \\cdot 9 = 36$.',
  },
  {
    q: 'How many ordered triples of positive integers $(a, b, c)$ satisfy $a + b + c = 12$ with $a$, $b$, and $c$ all different?',
    answer: '$42$',
    solution: 'All ordered triples of positive integers with sum $12$: $\\binom{11}{2} = 55$. Remove the ones with a repeat. All three equal: only $(4, 4, 4)$. Exactly two equal, say the pair is $k$ and the odd one out is $12 - 2k \\ne k$: $k = 1, 2, 3, 5$ work ($k = 4$ makes all three equal, and $k \\ge 6$ leaves nothing for the third), and the odd one out can sit in any of the $3$ positions, $4 \\cdot 3 = 12$. So $55 - 1 - 12 = 42$. As a check, the unordered sets of three different positive integers with sum $12$ are $\\{1, 2, 9\\}, \\{1, 3, 8\\}, \\{1, 4, 7\\}, \\{1, 5, 6\\}, \\{2, 3, 7\\}, \\{2, 4, 6\\}, \\{3, 4, 5\\}$, seven sets, and $7 \\cdot 3! = 42$.',
  },
  {
    q: 'How many four-digit positive integers have digits whose product is $12$?',
    answer: '$36$',
    solution: 'No digit can be $0$, and with three $1$’s the fourth digit would have to be $12$, which is not a digit, so list the sets of four digits from $1$–$9$ with product $12$: $\\{1, 1, 2, 6\\}$, $\\{1, 1, 3, 4\\}$, and $\\{1, 2, 2, 3\\}$. Each has exactly one repeated pair, so each can be arranged in $\\frac{4!}{2!} = 12$ ways, and no arrangement starts with $0$. Total $3 \\cdot 12 = 36$.',
  },
  {
    q: 'Eight people, including Ana, Ben, Cal, and Dee, sit around a round table with eight seats; seatings that differ by a rotation are the same. In how many seatings are no two of Ana, Ben, Cal, and Dee next to each other?',
    answer: '$144$',
    solution: 'Fix Ana to remove rotations. Four people in eight seats with no two adjacent must take every other seat, so Ben, Cal, and Dee sit in the three seats at distances $2$, $4$, and $6$ from Ana, in $3! = 6$ orders. The other $4$ people fill the remaining $4$ seats in $4! = 24$ ways. Total $6 \\cdot 24 = 144$. Check small: with $4$ people and $2$ of them kept apart, the two must sit opposite each other, and the same method gives $1! \\cdot 2! = 2$ of the $3! = 6$ seatings, which a quick list confirms.',
  },
  {
    q: 'How many $3$-element subsets of $\\{1, 2, 3, \\ldots, 12\\}$ have an even sum?',
    answer: '$110$',
    solution: 'A sum of three numbers is even when the subset has an even number of odd elements: zero or two. Zero odd means three evens from the $6$ evens, $\\binom{6}{3} = 20$; two odd means $\\binom{6}{2} = 15$ pairs of odds times $6$ choices of an even, $90$. Total $20 + 90 = 110$, exactly half of $\\binom{12}{3} = 220$.',
  },
  {
    q: 'Four different math books and three different novels are arranged on a shelf. In how many arrangements are the three novels all together, or the four math books all together, or both?',
    answer: '$1008$',
    solution: 'Novels together: glue them into a block with the $4$ math books, $5! \\cdot 3! = 720$. Math books together: $4! \\cdot 4! = 576$. Both together: two blocks in $2!$ orders, $2 \\cdot 4! \\cdot 3! = 288$, counted in each of the first two counts. Either-or: $720 + 576 - 288 = 1008$.',
  },
  {
    q: 'A coin is flipped $8$ times. How many sequences of heads and tails have exactly $3$ heads, no two heads on consecutive flips, and heads on the very first flip?',
    answer: '$10$',
    solution: 'Flip $1$ is heads, so flip $2$ is tails. Flips $3$ through $8$ are $6$ flips that must hold exactly $2$ heads with no two adjacent. Place the $4$ tails, creating $5$ gaps, and choose $2$ gaps for the heads: $\\binom{5}{2} = 10$. A check with the bijection from the chapter: $2$-subsets of $\\{3, \\ldots, 8\\}$ with no neighbors match $2$-subsets of a $5$-element set, also $\\binom{5}{2}$.',
  },
  {
    q: 'A $4 \\times 4$ grid of unit squares has its bottom-left corner at $(0, 0)$ and its top-right corner at $(4, 4)$. How many rectangles with sides along the grid lines contain the entire unit square whose opposite corners are $(1, 1)$ and $(2, 2)$?',
    answer: '$36$',
    solution: 'A rectangle is a choice of a left and a right vertical grid line and a bottom and a top horizontal grid line. It contains the unit square exactly when its left line is $x = 0$ or $x = 1$ ($2$ choices), its right line is $x = 2$, $3$, or $4$ ($3$ choices), and likewise $2$ choices for the bottom line and $3$ for the top. Multiply: $2 \\cdot 3 \\cdot 2 \\cdot 3 = 36$. For scale, choosing the four lines freely gives $\\binom{5}{2}^2 = 100$ rectangles in all.',
  },
  {
    q: 'Eight people, including Ana, Ben, Cal, Dee, and Eli, sit in a row of $8$ chairs. Eli must sit at one of the two ends, Cal and Dee must sit next to each other, and Ana and Ben must not sit next to each other. How many arrangements are possible?',
    answer: '$1920$',
    solution: 'Seat Eli at an end ($2$ ways); the other $7$ chairs are a row. Glue Cal and Dee: $6$ units in $6! \\cdot 2 = 1440$ arrangements of that row. Among those, Ana next to Ben makes a second block, $5! \\cdot 2 \\cdot 2 = 480$. So each end gives $1440 - 480 = 960$, and the total is $2 \\cdot 960 = 1920$.',
  },
]

export default {
  id: 'intro-counting-ch06',
  book: 'intro-counting',
  number: 6,
  title: 'Some Harder Counting Problems',
  intro:
    'You now own every tool in the first half of this book: lists, casework, complements, symmetries, combinations, grid paths, and stars and bars. This chapter is where you learn to choose between them, because a hard counting problem is usually two easy ones wearing a trench coat. Read each problem twice, name what you are counting, and pick the smaller side.',
  sections: [s62],
  challenge,
  worksheet,
}
