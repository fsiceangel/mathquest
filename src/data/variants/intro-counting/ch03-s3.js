// Counting & Probability chapter 3 — variations for section 3.4
// (Counting with Symmetries). All problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every stem says out loud which motions identify two arrangements: whether
//    rotations count as the same, and whether the object may be turned over.
//    Beads, keys, charms, people and dishes are all different from one another
//    unless the stem calls them identical; colors repeat only when it says so.
//  - Route one is usually the section's own recipe — count the labeled
//    arrangements, check that no arrangement is left unchanged by a symmetry,
//    then divide — and route two is independent of it: pin one object down to
//    kill the rotations, glue a block, count by gaps, take a complement, or
//    count the pairs of an arrangement with a motion that fixes it.
//  - Where the division would be invalid, the solution says so and counts by
//    cases instead. Each distractor is one named slip: dividing when the
//    division fails, dividing by $n$ instead of $2n$, dividing by $2n$ when no
//    flip is allowed, never dividing, or reporting the complement.

const s34 = [
  // slot 1 — plain circular arrangements, rotations only
  [
    {
      q: 'Ten different ornaments hang from ten evenly spaced hooks around a circular wreath on a wall. Two hangings are the same if a rotation of the wreath turns one into the other; the wreath stays on the wall and is never taken down and flipped over. How many different hangings are there?',
      choices: ['$362880$', '$3628800$', '$1814400$', '$181440$'],
      answer: 0,
      solution:
        'Route one, count the labeled hangings and divide. Number the hooks $1$ through $10$ and hang the ornaments on numbered hooks: $10! = 3628800$ ways. The wreath has $10$ rotations, and since all ten ornaments are different, only the do-nothing rotation leaves a hanging looking the same, so every hanging is counted exactly $10$ times and no group is short: $\\frac{3628800}{10} = 362880$ ✓. Route two, pin one ornament down. Turn the wreath until the bell ornament reaches the top hook; this changes nothing about which hanging it is, so every hanging has exactly one presentation with the bell on top. The other $9$ ornaments then fill $9$ hooks that are told apart by how far clockwise they sit from the bell: $9! = 362880$ ✓. (The choice $3628800$ TREATS THE HOOKS AS FIXED AND NEVER DIVIDES BY THE $10$ ROTATIONS ✗; $181440$ DIVIDES BY $20$, PAYING FOR A FLIP THE WREATH ON THE WALL CANNOT MAKE ✗; $1814400$ DIVIDES BY $2$ INSTEAD OF BY THE $10$ ROTATIONS ✗.)',
    },
    {
      q: 'Eight different flowers are planted at eight evenly spaced spots around a circular flower bed. Two plantings are the same if one is a rotation of the other; the bed is in the ground and can never be flipped over. How many different plantings are there?',
      choices: ['$40320$', '$20160$', '$5040$', '$2520$'],
      answer: 2,
      solution:
        'Route one, count the labeled plantings and divide. Number the spots $1$ through $8$: there are $8! = 40320$ ways to fill numbered spots. Rotating the bed by one spot at a time gives $8$ numbered plantings of the same planting, and because the flowers are all different none of the seven turning rotations leaves a planting unchanged, so every group has the full size $8$: $\\frac{40320}{8} = 5040$ ✓. Route two, anchor a flower. The lily is planted somewhere, and turning the bed until the lily faces the gate does not change the planting, so assume it does. The remaining $7$ flowers fill $7$ spots that are now distinguishable by their position relative to the lily: $7! = 5040$ ✓. (The choice $40320$ NEVER DIVIDES BY THE $8$ ROTATIONS ✗; $2520$ DIVIDES BY $16$, AS IF THE BED COULD ALSO BE TURNED OVER ✗; $20160$ DIVIDES BY $2$ INSTEAD OF BY THE $8$ ROTATIONS ✗.)',
    },
    {
      q: 'Different statues stand at evenly spaced points around a circular fountain, one statue at each point. Two displays are the same if a rotation of the fountain turns one into the other, and a display is never reflected. There are exactly $362880$ different displays. How many statues are there?',
      choices: ['$9$', '$10$', '$11$', '$362880$'],
      answer: 1,
      solution:
        'Route one, undo the division. With $n$ different statues there are $n!$ labeled displays, and each display is counted once for each of the $n$ rotations, so the number of displays is $\\frac{n!}{n} = (n-1)!$. Now solve $(n-1)! = 362880$ by running up the factorials: $7! = 5040$, $8! = 40320$, $9! = 362880$. So $n - 1 = 9$ and $n = 10$ ✓. Route two, grow the fountain one statue at a time. A fountain of $3$ statues has exactly $2$ displays, the two clockwise orders. Adding one statue to a fountain of $n$ statues means dropping it into one of the $n$ gaps between neighboring statues, and different gaps give different displays while every larger display comes from exactly one smaller one, so the count is multiplied by $n$. Starting from $2$ at $n = 3$: $2 \\to 6 \\to 24 \\to 120 \\to 720 \\to 5040 \\to 40320 \\to 362880$, reached at $n = 10$ ✓. (The choice $9$ SOLVES $n! = 362880$, taking the labeled count as the number of displays and never dividing by the rotations ✗; $11$ MATCHES $362880$ TO $10!$ BY DROPPING A DIGIT, since $10! = 3628800$ ✗; $362880$ REPORTS THE NUMBER OF DISPLAYS AS THE NUMBER OF STATUES ✗.)',
    },
  ],

  // slot 2 — loops that can also be turned over
  [
    {
      q: 'A bracelet is strung from $10$ different beads in a loop. Two bracelets are the same if one can be rotated or flipped over to match the other. How many different bracelets are there?',
      choices: ['$3628800$', '$362880$', '$181440$', '$1814400$'],
      answer: 2,
      solution:
        'Route one, count the labeled loops and divide by all the symmetries. Numbering the $10$ places around the loop gives $10! = 3628800$ labeled strings of beads. A loop of $10$ places has $10$ rotations, and each of them can be followed by a flip, for $20$ motions in all. Since every bead is different, no motion except the do-nothing one leaves a labeled loop the same, so every bracelet appears exactly $20$ times: $\\frac{3628800}{20} = 181440$ ✓. Route two, pin a bead and then pair off the flips. Turn the bracelet until the jade bead is at the top; the other $9$ beads then fill $9$ places told apart by their distance clockwise from the jade bead, giving $9! = 362880$ arrangements. Flipping the bracelet about the line through the jade bead keeps the jade bead on top and reverses the other nine, and a string of $9$ different beads is never its own reversal, so those $362880$ arrangements fall into pairs: $\\frac{362880}{2} = 181440$ ✓. (The choice $3628800$ NEVER DIVIDES AT ALL ✗; $362880$ DIVIDES BY THE $10$ ROTATIONS BUT FORGETS THE FLIP ✗; $1814400$ DIVIDES BY $2$ FOR THE FLIP AND FORGETS THE ROTATIONS ✗.)',
    },
    {
      q: 'A puzzle ring is built from $4$ differently colored links joined in a loop. Two rings are the same if one can be rotated or turned over to match the other. How many different rings are there?',
      choices: ['$3$', '$6$', '$24$', '$12$'],
      answer: 0,
      solution:
        'Route one, count the labeled loops and divide. Numbering the four positions gives $4! = 24$ labeled rings. The loop of four has $4$ rotations, each with or without a flip, for $8$ motions. A rotation cannot fix a labeled ring whose links are all different, and a flip either swaps two links (which would have to be equal) or reverses the other two, so no motion but the do-nothing one fixes anything: every ring is counted $8$ times and $\\frac{24}{8} = 3$ ✓. Route two, list them. Call the links $W$, $X$, $Y$, $Z$ and turn the ring until $W$ is on top. Reading the other three clockwise gives $XYZ$, $XZY$, $YXZ$, $YZX$, $ZXY$, $ZYX$. Turning the ring over keeps $W$ on top and reverses that reading, so $XYZ$ pairs with $ZYX$, $XZY$ pairs with $YZX$, and $YXZ$ pairs with $ZXY$. Three pairs, so $3$ rings ✓. (The choice $6$ DIVIDES BY THE $4$ ROTATIONS ONLY AND KEEPS EACH RING TWICE ✗; $24$ NEVER DIVIDES ✗; $12$ DIVIDES BY $2$ FOR THE FLIP AND IGNORES THE ROTATIONS ✗.)',
    },
    {
      q: 'A bracelet is strung from $10$ different beads in a loop, and the jade bead must sit next to the onyx bead. Bracelets that differ by a rotation or by a flip are the same bracelet. How many bracelets are there?',
      choices: ['$20160$', '$80640$', '$141120$', '$40320$'],
      answer: 3,
      solution:
        'Route one, glue the pair. Treat the jade and onyx beads as one double bead, so $9$ different units are strung in a loop that can be rotated and flipped: $\\frac{9!}{2 \\cdot 9} = \\frac{362880}{18} = 20160$ bracelets of units, with no short groups since the units are all different. The double bead can be read jade-then-onyx or onyx-then-jade, and those give different bracelets, so multiply by $2$: $2 \\times 20160 = 40320$ ✓. Route two, pin the jade bead and use up the flip. Turn the bracelet so the jade bead is at the top. The onyx bead must be at one of the two places beside it, and the flip about the line through the jade bead swaps those two places, so each bracelet has exactly one presentation with the onyx bead immediately clockwise from the jade bead. With the jade and onyx beads placed, the remaining $8$ beads fill the remaining $8$ places in $8! = 40320$ ways ✓. (The choice $20160$ FORGETS THE TWO ORDERS INSIDE THE GLUED PAIR ✗; $80640$ DIVIDES BY THE $9$ ROTATIONS OF THE GLUED LOOP ONLY AND NEVER PAYS FOR THE FLIP ✗; $141120$ REPORTS THE COMPLEMENT, the $181440 - 40320$ bracelets in which the two beads are apart ✗.)',
    },
  ],

  // slot 3 — rotations only, with an adjacency condition
  [
    {
      q: 'Eight different charms hang at the eight corners of a regular octagonal pendant, one charm per corner. The pendant may be rotated but is never flipped over, and the star charm must be at a corner next to the moon charm. How many different pendants are there?',
      choices: ['$720$', '$1440$', '$3600$', '$10080$'],
      answer: 1,
      solution:
        'Route one, glue the pair. Fasten the star and moon charms together as a single unit, leaving $7$ different units around a pendant that only turns: $(7-1)! = 720$ arrangements. The unit reads star-then-moon or moon-then-star clockwise, and those are different pendants, so $2 \\times 720 = 1440$ ✓. Route two, pin the star charm. Turn the pendant until the star charm sits at the top corner; every pendant has exactly one such presentation because the pendant is never flipped. The moon charm takes one of the two corners beside the star, which is $2$ choices, and the remaining $6$ charms fill the remaining $6$ corners in $6! = 720$ ways: $2 \\times 720 = 1440$ ✓. (The choice $720$ FORGETS THAT THE MOON CHARM HAS TWO SIDES TO CHOOSE FROM ✗; $10080$ ARRANGES THE $7$ UNITS IN A ROW, $7! \\times 2$, instead of around a loop ✗; $3600$ REPORTS THE COMPLEMENT, the $5040 - 1440$ pendants in which the star and moon are not neighbors ✗.)',
    },
    {
      q: 'A round cake is cut into $7$ equal wedges and each wedge is given a different frosting flavor. The cake can be turned on its plate, so two cakes that differ by a rotation are the same cake, and the cake is never flipped over. How many different cakes are there?',
      choices: ['$5040$', '$360$', '$2520$', '$720$'],
      answer: 3,
      solution:
        'Route one, count the labeled cakes and divide. Mark the plate at seven places and frost wedges in marked positions: $7! = 5040$ ways. Turning the cake gives $7$ marked versions of the same cake, and since all seven flavors are different no turn but the do-nothing one leaves a cake unchanged, so every group has size $7$: $\\frac{5040}{7} = 720$ ✓. Route two, anchor a flavor. Turn the cake until the mango wedge points at the door; each cake has exactly one such presentation. The remaining $6$ wedges are now told apart by how far clockwise they sit from the mango wedge, and the other $6$ flavors fill them in $6! = 720$ ways ✓. (The choice $5040$ NEVER DIVIDES BY THE $7$ ROTATIONS ✗; $360$ DIVIDES BY $14$, paying for a flip a cake on a plate cannot make ✗; $2520$ DIVIDES BY $2$ INSTEAD OF BY THE $7$ ROTATIONS ✗.)',
    },
    {
      q: 'Six different charms hang at the six corners of a regular hexagonal pendant, one charm per corner. The pendant may be rotated but is never flipped over. In how many pendants is the heart charm NOT at a corner next to the star charm?',
      choices: ['$48$', '$120$', '$72$', '$36$'],
      answer: 2,
      solution:
        'Route one, take a complement. With rotations only and all six charms different, there are $\\frac{6!}{6} = 120$ pendants in all. For those with the heart next to the star, glue the two charms into one unit: $5$ units around a turning pendant give $(5-1)! = 24$ arrangements, doubled to $48$ for the two orders inside the unit. Subtract: $120 - 48 = 72$ ✓. Route two, pin the heart and count the star’s room. Turn the pendant until the heart charm is at the top corner, which every pendant allows in exactly one way. Of the five remaining corners, the two beside the heart are barred, so the star has $3$ corners to choose from, and the last $4$ charms fill the last $4$ corners in $4! = 24$ ways: $3 \\times 24 = 72$ ✓. (The choice $48$ REPORTS THE COMPLEMENT, the pendants in which the two charms ARE neighbors ✗; $120$ IGNORES THE CONDITION ENTIRELY ✗; $36$ DIVIDES BY $12$ THROUGHOUT, paying for a flip the pendant never makes ✗.)',
    },
  ],

  // slot 4 — round table with a pair that must sit together
  [
    {
      q: 'Nine people sit around a round table, one to a chair, and Dara insists on sitting next to Elin. Two seatings are the same if one is a rotation of the other; the table is never turned over. How many seatings are possible?',
      choices: ['$5040$', '$30240$', '$80640$', '$10080$'],
      answer: 3,
      solution:
        'Route one, glue the pair. Treat Dara and Elin as one unit, so $8$ units sit around the table: $(8-1)! = 5040$ circular arrangements, none of them short since the units are all different. Inside the unit Dara can be on Elin’s left or on her right, two different seatings, so $2 \\times 5040 = 10080$ ✓. Route two, number the chairs and divide. With chairs numbered $1$ through $9$, there are $9$ pairs of neighboring chairs (including the pair made by chairs $9$ and $1$), the two friends fill a chosen pair in $2$ orders, and the other $7$ people fill the rest in $7! = 5040$ ways: $9 \\times 2 \\times 5040 = 90720$ numbered seatings. Each real seating shows up once for each of the $9$ rotations: $\\frac{90720}{9} = 10080$ ✓. (The choice $5040$ FORGETS THE TWO ORDERS INSIDE THE GLUED PAIR ✗; $80640$ ARRANGES THE $8$ UNITS IN A ROW, $8! \\times 2$, instead of around the table ✗; $30240$ REPORTS THE COMPLEMENT, the $40320 - 10080$ seatings in which the two are apart ✗.)',
    },
    {
      q: 'Seven different potted plants stand at seven evenly spaced spots around a circular fountain, and the fern must be next to the cactus. Arrangements that differ by a rotation are the same, and there are no flips. How many arrangements are there?',
      choices: ['$120$', '$240$', '$480$', '$1440$'],
      answer: 1,
      solution:
        'Route one, glue the pair. Bind the fern and the cactus into one unit, leaving $6$ different units around the fountain: $(6-1)! = 120$ arrangements. The unit reads fern-then-cactus or cactus-then-fern clockwise, so $2 \\times 120 = 240$ ✓. Route two, number the spots and divide. Numbering the seven spots, there are $7$ pairs of neighboring spots (the pair made by spots $7$ and $1$ included), $2$ orders for the fern and the cactus in a chosen pair, and $5! = 120$ ways for the remaining five plants: $7 \\times 2 \\times 120 = 1680$ numbered arrangements, each real arrangement counted once per rotation: $\\frac{1680}{7} = 240$ ✓. (The choice $120$ FORGETS THE TWO ORDERS INSIDE THE GLUED PAIR ✗; $1440$ PUTS THE $6$ UNITS IN A ROW, $6! \\times 2$ ✗; $480$ REPORTS THE COMPLEMENT, the $720 - 240$ arrangements with the two plants apart ✗.)',
    },
    {
      q: 'Some people sit around a round table, one to a chair. Rotations of a seating are the same seating, and the table is never turned over. Two particular friends must sit next to each other, and there are exactly $10080$ such seatings. How many people are at the table?',
      choices: ['$9$', '$7$', '$8$', '$10$'],
      answer: 0,
      solution:
        'Route one, undo the gluing. With $n$ people, binding the two friends into one unit leaves $n - 1$ units around the table, giving $(n-2)!$ circular arrangements, and the two orders inside the unit double that: $2(n-2)! = 10080$, so $(n-2)! = 5040$. Since $5040 = 7!$, we get $n - 2 = 7$ and $n = 9$ ✓. Route two, grow the table. A table of $4$ with the two friends together has exactly $4$ seatings: fix one friend, and of the six orders of the other three people around her the four that place her friend at one end of the reading qualify. Now add one person to a table of $n$ where the friends already sit together: the newcomer drops into one of the $n$ gaps between neighbors, but the gap between the two friends would split them, so exactly $n - 1$ gaps work and each larger seating arises once. From $4$ at $n = 4$: $4 \\to 12 \\to 48 \\to 240 \\to 1440 \\to 10080$, which lands at $n = 9$ ✓. (The choice $7$ STOPS AT $n - 2 = 7$, the number of units left after the gluing ✗; $8$ SOLVES $2(n-1)! = 10080$, gluing the friends without shrinking the number of units ✗; $10$ MATCHES $5040$ TO $\\frac{8!}{8}$ AND READS OFF $n - 2 = 8$, using a form that does not fit the equation ✗.)',
    },
  ],

  // slot 5 — flippable loops with a placement condition
  [
    {
      q: 'A key ring holds $10$ different keys at evenly spaced points around the ring, and the house key must be directly opposite the car key. Two rings are the same if one can be rotated or turned over to match the other. How many different key rings are there?',
      choices: ['$20160$', '$40320$', '$201600$', '$181440$'],
      answer: 0,
      solution:
        'Route one, count the labeled rings and divide by all $20$ motions. Number the ten points. The house key can go at any of the $10$ points, the car key is then forced to the point across from it, and the other $8$ keys fill the rest in $8! = 40320$ ways: $10 \\times 40320 = 403200$ labeled rings. A ring of ten points has $10$ rotations and $10$ flips, and because all ten keys are different no motion but the do-nothing one fixes a labeled ring, so every ring is counted exactly $20$ times: $\\frac{403200}{20} = 20160$ ✓. Route two, pin the house key and pair off the flips. Turn the ring until the house key is at the top; the car key is then at the bottom, with no choice left. The remaining $8$ keys fill the $8$ remaining points in $8! = 40320$ ways. Flipping the ring about the line through the house and car keys leaves both of them in place and reverses the other eight, and a string of $8$ different keys is never its own reversal, so these arrangements fall into pairs: $\\frac{40320}{2} = 20160$ ✓. (The choice $40320$ DIVIDES BY THE $10$ ROTATIONS BUT NEVER PAYS FOR THE FLIP ✗; $201600$ DIVIDES BY $2$ FOR THE FLIP AND FORGETS THE $10$ ROTATIONS ✗; $181440$ IGNORES THE OPPOSITE REQUIREMENT, counting every key ring of ten different keys ✗.)',
    },
    {
      q: 'A circular medal has $8$ different symbols engraved at evenly spaced points around its rim. The medal may be rotated and may also be turned over, so two medals that differ by a rotation or a flip are the same medal. The crown symbol must not be next to the anchor symbol. How many different medals are there?',
      choices: ['$720$', '$2520$', '$1800$', '$3600$'],
      answer: 2,
      solution:
        'Route one, take a complement. With eight different symbols on a loop that turns and flips, there are $\\frac{8!}{2 \\cdot 8} = \\frac{40320}{16} = 2520$ medals in all, and no group is short because the symbols are all different. For the medals with the crown beside the anchor, glue the two into one unit: $7$ units on a turning, flipping loop give $\\frac{7!}{14} = 360$, and the unit has $2$ internal orders, so $720$. Subtract: $2520 - 720 = 1800$ ✓. Route two, pin the crown and pair off the flips. Turn the medal until the crown is at the top. Of the seven remaining points, the two beside the crown are barred, so the anchor has $5$ choices, and the last $6$ symbols fill the last $6$ points in $6! = 720$ ways: $5 \\times 720 = 3600$ arrangements with the crown fixed at the top. Flipping about the line through the crown reverses the other seven points and sends each of these to a different one, so they pair off: $\\frac{3600}{2} = 1800$ ✓. (The choice $720$ REPORTS THE COMPLEMENT, the medals in which the two symbols ARE neighbors ✗; $2520$ IGNORES THE CROWN AND ANCHOR RULE ✗; $3600$ STOPS AFTER THE ROTATIONS AND NEVER PAYS FOR THE FLIP ✗.)',
    },
    {
      q: 'Seven different keys are put on a circular key ring at evenly spaced points, and rings that differ by a rotation or by turning the ring over are the same ring. In how many rings is the house key NOT next to the car key?',
      choices: ['$120$', '$240$', '$360$', '$480$'],
      answer: 1,
      solution:
        'Route one, take a complement. Seven different keys on a loop that turns and flips give $\\frac{7!}{2 \\cdot 7} = \\frac{5040}{14} = 360$ rings, every group full size because the keys are all different. Gluing the house and car keys into one unit leaves $6$ units on such a loop, $\\frac{6!}{12} = 60$, doubled to $120$ for the two orders inside the unit. Subtract: $360 - 120 = 240$ ✓. Route two, pin the house key and pair off the flips. Turn the ring so the house key is at the top. Of the six remaining points, the two beside it are barred, leaving $4$ places for the car key, and the other $5$ keys fill the rest in $5! = 120$ ways: $4 \\times 120 = 480$. The flip about the line through the house key reverses the other six points and never leaves one of these fixed, so they pair off: $\\frac{480}{2} = 240$ ✓. (The choice $120$ REPORTS THE COMPLEMENT, the rings in which the two keys ARE neighbors ✗; $360$ IGNORES THE CONDITION ✗; $480$ DIVIDES BY THE $7$ ROTATIONS ONLY AND NEVER PAYS FOR THE FLIP ✗.)',
    },
  ],

  // slot 6 — when the places are labeled, and when only a flip is available
  [
    {
      q: 'Eight different sculptures are placed in eight alcoves spaced around a circular hall, one sculpture per alcove. The alcoves are numbered $1$ through $8$ on brass plates, so moving every sculpture one alcove along gives a different display. How many displays are there?',
      choices: ['$5040$', '$2520$', '$40320$', '$20160$'],
      answer: 2,
      solution:
        'Route one, nothing is overcounted. The numbered plates tell the alcoves apart, so a display is just a matching of $8$ different sculptures to $8$ different alcoves. Alcove $1$ has $8$ candidates, alcove $2$ has $7$ of the rest, and so on: $8! = 40320$ ✓. Turning every sculpture one alcove along changes which numbered alcove each sculpture stands in, so no division is owed. Route two, count the unnumbered displays and multiply back. If the plates were removed, only the cycle of neighbors would matter, giving $\\frac{8!}{8} = 5040$ displays, each group full size because the sculptures are all different. Screwing the plates back on, each of those $5040$ can be turned into $8$ numbered displays, one for each choice of the alcove holding the marble bust, and every numbered display arises exactly once: $8 \\times 5040 = 40320$ ✓. (The choice $5040$ DIVIDES BY $8$ FOR ROTATIONS THAT THIS PROBLEM COUNTS AS DIFFERENT DISPLAYS ✗; $2520$ DIVIDES BY $16$, adding a flip on top of rotations that already do not apply ✗; $20160$ DIVIDES BY $2$ FOR A FLIP OF A HALL THAT CANNOT BE FLIPPED ✗.)',
    },
    {
      q: 'Nine different beads are strung along a bracelet whose two ends meet at a clasp. The clasp holds the ends, so the beads cannot slide around the loop and no rotation is possible; but the whole bracelet can be turned over, and a bracelet and the same beads read in reverse order are the same bracelet. How many different bracelets are there?',
      choices: ['$181440$', '$362880$', '$20160$', '$40320$'],
      answer: 0,
      solution:
        'Route one, count the readings and pair them off. Reading the beads from one end to the other gives an order of $9$ different beads: $9! = 362880$ readings. Turning the bracelet over gives the reversed reading of the same bracelet, and a reading of $9$ different beads is never the same as its own reversal, since the beads at the two ends would have to be one bead. So the readings pair up two to a bracelet: $\\frac{362880}{2} = 181440$ ✓. Route two, build a bracelet from its ends inward. The two beads at the ends form an unordered pair, chosen in $\\frac{9 \\times 8}{2} = 36$ ways, and which of the two lies to the left is not a choice at all, since turning the bracelet over exchanges them. With the pair chosen, the other $7$ beads fill the $7$ inner places in order in $7! = 5040$ ways: $36 \\times 5040 = 181440$ ✓. (The choice $362880$ FORGETS THAT THE BRACELET CAN BE TURNED OVER ✗; $40320$ DIVIDES BY $9$ FOR ROTATIONS THE CLASP FORBIDS ✗; $20160$ DIVIDES BY $18$, charging for both those rotations and the flip ✗.)',
    },
    {
      q: 'Eight different sculptures stand in eight alcoves spaced around a circular hall, one per alcove. The alcoves are numbered $1$ through $8$, so a rotation gives a different display. In how many displays do the two marble sculptures stand in neighboring alcoves? (Alcoves $8$ and $1$ are neighbors.)',
      choices: ['$5760$', '$10080$', '$1440$', '$11520$'],
      answer: 3,
      solution:
        'Route one, choose the pair of alcoves first. Going around the hall the neighboring pairs are $1$–$2$, $2$–$3$, $3$–$4$, $4$–$5$, $5$–$6$, $6$–$7$, $7$–$8$ and $8$–$1$, which is $8$ pairs. The two marble sculptures fill a chosen pair in $2$ orders, and the other $6$ sculptures fill the other $6$ alcoves in $6! = 720$ ways: $8 \\times 2 \\times 720 = 11520$ ✓. Route two, take a share of all the displays. There are $8! = 40320$ displays in all, and the two marble sculptures occupy one of the $\\frac{8 \\times 7}{2} = 28$ unordered pairs of alcoves. No pair of alcoves is favored over another, so each of the $28$ pairs holds them in $\\frac{40320}{28} = 1440$ displays. Exactly $8$ of the $28$ pairs are pairs of neighbors: $8 \\times 1440 = 11520$ ✓. (The choice $10080$ COUNTS ONLY THE SEVEN PAIRS $1$–$2$ THROUGH $7$–$8$, forgetting that alcoves $8$ and $1$ are neighbors ✗; $5760$ FORGETS THAT THE TWO MARBLE SCULPTURES CAN BE SWAPPED inside their pair of alcoves ✗; $1440$ DIVIDES BY $8$ FOR ROTATIONS, although the brass plates make rotated displays different ✗.)',
    },
  ],

  // slot 7 — round table, a pair kept apart
  [
    {
      q: 'Ten people sit around a round table, one to a chair, and Nadia refuses to sit next to Omar. Rotations of a seating are the same seating, and the table is never turned over. How many seatings are possible?',
      choices: ['$80640$', '$282240$', '$322560$', '$362880$'],
      answer: 1,
      solution:
        'Route one, take a complement. Ten different people around a table that only turns give $\\frac{10!}{10} = 9! = 362880$ seatings. For the seatings that place Nadia beside Omar, glue the two into one unit: $9$ units around the table give $(9-1)! = 40320$ arrangements, and the unit has $2$ internal orders, so $80640$. Subtract: $362880 - 80640 = 282240$ ✓. Route two, seat Nadia first. Nadia sits somewhere, and turning the table until she reaches the north chair changes nothing, so every seating has exactly one presentation with Nadia at the north chair. Of the $9$ other chairs, $2$ touch hers, leaving Omar $7$ chairs, and the remaining $8$ people fill the remaining $8$ chairs in $8! = 40320$ ways: $7 \\times 40320 = 282240$ ✓. (The choice $80640$ REPORTS THE COMPLEMENT, the seatings that DO put the two together ✗; $362880$ IGNORES THE REFUSAL ✗; $322560$ SUBTRACTS ONLY $40320$, forgetting the two orders inside the glued pair ✗.)',
    },
    {
      q: 'Nine different spice jars stand at nine evenly spaced spots on a circular rotating rack. Arrangements that differ by a rotation are the same, and the rack is never flipped over. The salt jar must not be next to the sugar jar. How many arrangements are there?',
      choices: ['$10080$', '$40320$', '$35280$', '$30240$'],
      answer: 3,
      solution:
        'Route one, take a complement. Nine different jars on a rack that only turns give $\\frac{9!}{9} = 8! = 40320$ arrangements. Gluing the salt and sugar jars into one unit leaves $8$ units on the rack, $(8-1)! = 5040$ arrangements, doubled to $10080$ for the two orders inside the unit. Subtract: $40320 - 10080 = 30240$ ✓. Route two, anchor the salt jar. Turn the rack until the salt jar faces the cook; every arrangement allows this in exactly one way. Of the $8$ remaining spots, the $2$ beside the salt are barred, so the sugar has $6$ spots, and the other $7$ jars fill the other $7$ spots in $7! = 5040$ ways: $6 \\times 5040 = 30240$ ✓. (The choice $10080$ REPORTS THE COMPLEMENT, the arrangements that DO put the two jars together ✗; $40320$ IGNORES THE CONDITION ✗; $35280$ SUBTRACTS ONLY $5040$, forgetting the two orders inside the glued unit ✗.)',
    },
    {
      q: 'Ten people sit around a round table with ten evenly spaced chairs, one person per chair. Rotations of a seating are the same seating, and the table is never turned over. Nadia sits neither next to Omar nor directly opposite him. How many seatings are possible?',
      choices: ['$282240$', '$322560$', '$241920$', '$201600$'],
      answer: 2,
      solution:
        'Route one, seat Nadia and count Omar’s room. Turn the table until Nadia is at the north chair, which every seating allows in exactly one way. Among the other $9$ chairs, $2$ are beside hers and $1$ is straight across, and with ten chairs those are three different chairs. That leaves Omar $9 - 3 = 6$ chairs, and the other $8$ people fill the other $8$ chairs in $8! = 40320$ ways: $6 \\times 40320 = 241920$ ✓. Route two, subtract two disjoint families. All seatings number $\\frac{10!}{10} = 362880$. Seatings with the two beside each other: glue them, $(9-1)! = 40320$, doubled for the order inside the unit, $80640$. Seatings with the two straight across: place Nadia, Omar is forced into one chair, and the rest fill in $8! = 40320$ ways. A neighbor is never the chair straight across when there are ten chairs, so these two families do not overlap: $362880 - 80640 - 40320 = 241920$ ✓. (The choice $282240$ REMOVES ONLY THE NEIGHBORING SEATINGS ✗; $322560$ REMOVES ONLY THE OPPOSITE SEATINGS ✗; $201600$ TREATS "DIRECTLY OPPOSITE" AS TWO CHAIRS, subtracting $80640$ a second time ✗.)',
    },
  ],

  // slot 8 — alternating patterns around a loop
  [
    {
      q: 'Five boys and five girls sit around a round table with ten chairs, one person per chair, so that boys and girls alternate. All ten people are different. Rotations of a seating are the same seating, and the table is never turned over. How many seatings are possible?',
      choices: ['$1440$', '$14400$', '$28800$', '$2880$'],
      answer: 3,
      solution:
        'Route one, seat one boy to kill the rotations. Turn the table until a chosen boy is at the north chair; every seating allows this in exactly one way. Reading clockwise from him the chairs must run boy, girl, boy, girl, and so on, so the five boys’ chairs and the five girls’ chairs are decided. The other $4$ boys fill their $4$ chairs in $4! = 24$ ways and the $5$ girls fill theirs in $5! = 120$ ways: $24 \\times 120 = 2880$ ✓. Route two, number the chairs and divide. With chairs numbered $1$ through $10$, an alternating seating puts the boys in the five odd chairs or in the five even chairs, which is $2$ patterns; then the boys are arranged in $5! = 120$ ways and the girls in $5! = 120$ ways: $2 \\times 120 \\times 120 = 28800$ numbered seatings. Every alternating seating is counted once for each of the $10$ rotations, and no rotation leaves one unchanged since the people are all different: $\\frac{28800}{10} = 2880$ ✓. (The choice $28800$ NEVER DIVIDES BY THE $10$ ROTATIONS ✗; $14400$ DIVIDES BY $2$ INSTEAD OF BY THE $10$ ROTATIONS ✗; $1440$ DIVIDES BY $20$, paying for a flip of a table that is never turned over ✗.)',
    },
    {
      q: 'Four different gold beads and four different silver beads are strung on a bracelet so that the colors alternate around the loop. Bracelets that differ by a rotation or by a flip are the same bracelet. How many bracelets are there?',
      choices: ['$144$', '$72$', '$576$', '$1152$'],
      answer: 1,
      solution:
        'Route one, pin a bead and then pair off the flips. Turn the bracelet until the engraved gold bead is at the top. Alternation then forces the other three gold beads into the three places at even distance from it and the four silver beads into the four places at odd distance, so the golds fill their places in $3! = 6$ ways and the silvers fill theirs in $4! = 24$ ways: $6 \\times 24 = 144$ arrangements. Flipping about the line through the engraved bead keeps it on top and reverses the rest, and no arrangement of eight different beads is its own reversal, so the $144$ fall into pairs: $\\frac{144}{2} = 72$ ✓. Route two, number the places and divide by all $16$ motions. With the eight places numbered, alternation puts the gold beads in the four odd places or the four even places, $2$ patterns, and then $4! = 24$ orders for the golds and $4! = 24$ for the silvers: $2 \\times 24 \\times 24 = 1152$ numbered bracelets. A loop of eight places has $8$ rotations and $8$ flips, and since every bead is different none of the fifteen non-trivial motions leaves a numbered bracelet unchanged: $\\frac{1152}{16} = 72$ ✓. (The choice $144$ STOPS AFTER THE ROTATIONS AND NEVER PAYS FOR THE FLIP ✗; $576$ DIVIDES THE $1152$ BY $2$ FOR THE FLIP AND FORGETS THE $8$ ROTATIONS ✗; $1152$ NEVER DIVIDES AT ALL ✗.)',
    },
    {
      q: 'Four boys and four girls, all eight people different, sit around a round table with eight chairs, one person per chair, and no two boys sit next to each other. Rotations of a seating are the same seating, and the table is never turned over. How many seatings are possible?',
      choices: ['$144$', '$5040$', '$72$', '$576$'],
      answer: 0,
      solution:
        'Route one, seat the girls and use the gaps. Seat the four girls around the table first: $(4-1)! = 6$ circular arrangements, all groups full size since the girls are different. Their chairs leave exactly $4$ gaps between neighboring girls, and no gap may hold two boys, since those two would be neighbors. Four boys into four gaps with one boy each: $4! = 24$ ways. Total $6 \\times 24 = 144$ ✓. Route two, number the chairs and divide. With chairs numbered $1$ through $8$, four boys with no two adjacent must take the four odd chairs or the four even chairs: any other choice of four chairs from a ring of eight leaves two of them touching. That is $2$ patterns, with $4! = 24$ orders for the boys and $4! = 24$ for the girls: $2 \\times 24 \\times 24 = 1152$ numbered seatings, each real seating counted once per rotation: $\\frac{1152}{8} = 144$ ✓. (The choice $5040$ IGNORES THE RULE and counts all $\\frac{8!}{8}$ seatings ✗; $72$ DIVIDES BY $16$, paying for a flip of a table that is never turned over ✗; $576$ DIVIDES THE $1152$ BY $2$ INSTEAD OF BY THE $8$ ROTATIONS ✗.)',
    },
  ],

  // slot 9 — three objects kept apart around a circle
  [
    {
      q: 'Nine people, including Dara, Elin, and Ivo, sit around a round table, one person per chair. No two of Dara, Elin, and Ivo may sit next to each other. Rotations of a seating are the same seating, and the table is never turned over. How many seatings are possible?',
      choices: ['$25920$', '$40320$', '$14400$', '$2400$'],
      answer: 2,
      solution:
        'Route one, seat the others and use the gaps. Seat the other six people around the table: $(6-1)! = 120$ circular arrangements. Their chairs leave $6$ gaps between neighbors, and Dara, Elin, and Ivo must take three different gaps, since two of them in one gap would be neighbors. Placing three different people into three of the six gaps: $6 \\times 5 \\times 4 = 120$ ways. Total $120 \\times 120 = 14400$ ✓. Route two, subtract the bad seatings with care. All seatings number $\\frac{9!}{9} = 8! = 40320$. For one named pair, say Dara and Elin, gluing them gives $(8-1)! = 5040$ arrangements doubled to $10080$; there are three such pairs, for $30240$. A seating counted twice there has two of the pairs together at once, which means the three sit in one block with a named person in the middle: $(7-1)! = 720$ arrangements of the block and the six others, doubled for the two orders of the outer two, so $1440$ for each of the three choices of middle person, $4320$ in all. No seating has all three pairs together, since that would need the three to close a ring of their own. So the bad seatings number $30240 - 4320 = 25920$, leaving $40320 - 25920 = 14400$ ✓. (The choice $25920$ REPORTS THE BAD SEATINGS instead of the good ones ✗; $40320$ IGNORES THE RULE ✗; $2400$ PICKS THE THREE GAPS WITHOUT ORDERING THE THREE FRIENDS, using $\\frac{6 \\times 5 \\times 4}{3!} = 20$ ✗.)',
    },
    {
      q: 'Eight different dishes are set at eight evenly spaced places on a circular rotating tray, one dish per place. Arrangements that differ by a rotation are the same, and the tray is never flipped over. No two of the three spicy dishes may be next to each other. How many arrangements are there?',
      choices: ['$1440$', '$3600$', '$240$', '$5040$'],
      answer: 0,
      solution:
        'Route one, place the mild dishes and use the gaps. Set the five mild dishes around the tray: $(5-1)! = 24$ circular arrangements. They leave $5$ gaps between neighbors, and the three spicy dishes must take three different gaps, since two in one gap would touch. Three different dishes into three of the five gaps: $5 \\times 4 \\times 3 = 60$ ways. Total $24 \\times 60 = 1440$ ✓. Route two, subtract the bad arrangements with care. All arrangements number $\\frac{8!}{8} = 7! = 5040$. For one named pair of spicy dishes, gluing them gives $(7-1)! = 720$, doubled to $1440$; three pairs give $4320$. An arrangement counted twice has the three spicy dishes in one block with a named one in the middle: $(6-1)! = 120$ arrangements, doubled for the outer two, so $240$ for each of the three middles, $720$ in all. All three pairs at once is impossible. Bad arrangements: $4320 - 720 = 3600$, so good ones number $5040 - 3600 = 1440$ ✓. (The choice $3600$ REPORTS THE BAD ARRANGEMENTS ✗; $5040$ IGNORES THE RULE ✗; $240$ PICKS THE THREE GAPS WITHOUT ORDERING THE THREE SPICY DISHES, using $\\frac{5 \\times 4 \\times 3}{3!} = 10$ ✗.)',
    },
    {
      q: 'Nine people, including Dara, Elin, and Ivo, sit around a round table, one person per chair. Rotations of a seating are the same seating, and the table is never turned over. In how many seatings do at least two of Dara, Elin, and Ivo sit next to each other?',
      choices: ['$14400$', '$40320$', '$30240$', '$25920$'],
      answer: 3,
      solution:
        'Route one, take a complement. All seatings number $\\frac{9!}{9} = 8! = 40320$. For the seatings with no two of the three together, seat the other six people in $(6-1)! = 120$ circular arrangements and drop the three friends into three of the $6$ gaps they leave, in $6 \\times 5 \\times 4 = 120$ ways, for $120 \\times 120 = 14400$. Subtract: $40320 - 14400 = 25920$ ✓. Route two, count the pairs directly and remove the double counting. For each of the $3$ named pairs, gluing that pair gives $(8-1)! = 5040$ arrangements, doubled to $10080$ for the order inside, so the three pairs contribute $3 \\times 10080 = 30240$. A seating in which two of the pairs are together at once has all three friends in a single block with one of them in the middle: for each of the $3$ choices of middle person, $(7-1)! = 720$ arrangements doubled to $1440$, which is $4320$ in all, and each such seating was counted twice above. No seating has all three pairs together. So the answer is $30240 - 4320 = 25920$ ✓. (The choice $14400$ REPORTS THE COMPLEMENT, the seatings with no two of them together ✗; $40320$ COUNTS EVERY SEATING ✗; $30240$ ADDS THE THREE PAIR COUNTS AND NEVER REMOVES THE SEATINGS COUNTED TWICE ✗.)',
    },
  ],

  // slot 10 — colorings that repeat, where plain division breaks
  [
    {
      q: 'Each corner of a regular pentagon is painted red, blue, or green, and colors may repeat. Two paintings are the same if a rotation of the pentagon turns one into the other; the pentagon is never flipped over. How many different paintings are there?',
      choices: ['$51$', '$48$', '$243$', '$39$'],
      answer: 0,
      solution:
        'Route one, split off the paintings that a rotation leaves unchanged. Numbering the corners gives $3^5 = 243$ labeled paintings, and $\\frac{243}{5}$ is not a whole number, so plain division fails. The reason is the three one-color paintings: every rotation leaves each of them looking the same, so each stands alone rather than in a group of five. Any other painting uses at least two colors, and a turn of $1$, $2$, $3$ or $4$ corners can never leave it unchanged, because following one corner around by repeated turns of that size visits all five corners and would force them all to match. So the remaining $243 - 3 = 240$ labeled paintings fall into full groups of $5$: $\\frac{240}{5} = 48$, and adding the three one-color paintings gives $48 + 3 = 51$ ✓. Route two, case on the pattern of colors. All five corners one color: $3$. Four of one color and one of another: $3 \\times 2 = 6$, since a turn can bring the odd corner anywhere. Three of one color and two of another: $3 \\times 2 = 6$ ordered color choices, and the two like corners are either neighbors or one apart, so $6 \\times 2 = 12$. Three of one color and one each of the other two: $3$ choices for the tripled color; the two odd corners are neighbors or not, and the two odd colors can be assigned to them in $2$ ways, giving $3 \\times 2 \\times 2 = 12$. Two of one color, two of another, and one of the third: $3$ choices for the lone color and $\\frac{30}{5} = 6$ paintings for each, giving $18$. Total $3 + 6 + 12 + 12 + 18 = 51$ ✓. (The choice $48$ DIVIDES THE $240$ MIXED PAINTINGS CORRECTLY BUT NEVER ADDS THE THREE ONE-COLOR PAINTINGS BACK ✗; $243$ NEVER DIVIDES ✗; $39$ ALSO DIVIDES BY THE FLIPS, which this pentagon never makes ✗.)',
    },
    {
      q: 'A circular window is divided into $6$ equal wedges, and each wedge is filled with glass of one of $3$ colors; colors may repeat. Two windows are the same if a rotation turns one into the other; the window is set in its wall and cannot be flipped over. How many different windows are there?',
      choices: ['$121$', '$729$', '$130$', '$92$'],
      answer: 2,
      solution:
        'Route one, sort the labeled windows by how soon they repeat. Numbering the wedges gives $3^6 = 729$ labeled windows, and $\\frac{729}{6}$ is not a whole number, so plain division fails: some windows are unchanged by a turn. Sort them by the smallest turn that leaves a window looking the same, which must be a turn of $1$, $2$, $3$ or $6$ wedges. Unchanged by a turn of one wedge: the $3$ one-color windows, each alone in its group, giving $3$ windows. Unchanged by a turn of two wedges: $3^2 = 9$ labeled windows repeat every two wedges, and taking away the $3$ one-color ones leaves $6$ in groups of $2$, giving $3$ windows. Unchanged by a turn of three wedges: $3^3 = 27$ repeat every three wedges, less the $3$ one-color ones leaves $24$ in groups of $3$, giving $8$ windows. Everything else has full groups of $6$: the labeled windows already used number $9 + 27 - 3 = 33$, so $729 - 33 = 696$ remain, giving $\\frac{696}{6} = 116$ windows. Total $3 + 3 + 8 + 116 = 130$ ✓. Route two, count the pairs of a labeled window and a turn that fixes it. The do-nothing turn fixes all $729$. A turn of $1$ or of $5$ wedges forces all six wedges to match: $3$ each. A turn of $2$ or of $4$ wedges forces the wedges to match in two sets of three, leaving $3^2 = 9$ each. A turn of $3$ wedges forces three sets of two: $3^3 = 27$. The pairs number $729 + 3 + 3 + 9 + 9 + 27 = 780$. Now a group of size $s$ contributes exactly $6$ pairs, because each of its $s$ members is fixed by exactly $\\frac{6}{s}$ turns. So the number of windows is $\\frac{780}{6} = 130$ ✓. (The choice $121$ DIVIDES $729$ BY $6$ AND ROUNDS, using a division that the fixed windows make invalid ✗; $729$ NEVER DIVIDES ✗; $92$ ALSO DIVIDES BY THE FLIPS, which a window in a wall never makes ✗.)',
    },
    {
      q: 'Each corner of a square is painted red, blue, or green, and colors may repeat. Two paintings are now the same if a rotation OR a flip of the square turns one into the other. How many different paintings are there?',
      choices: ['$24$', '$21$', '$10$', '$12$'],
      answer: 1,
      solution:
        'Route one, case on the pattern of colors. Plain division is out from the start: there are $3^4 = 81$ labeled paintings and $\\frac{81}{8}$ is not a whole number, since paintings such as the all-red square are unchanged by every motion. All four corners one color: $3$. Three of one color and one of another: $3 \\times 2 = 6$, since some motion brings the odd corner anywhere. Two of one color and two of another: choose the two colors in $3$ ways, and the two like corners are either neighbors or across from each other, for $3 \\times 2 = 6$. Two of one color and one each of the other two: $3$ choices for the doubled color; if its two corners are across from each other the two odd colors sit in the other two corners and a quarter turn exchanges them, giving $1$ painting, and if they are neighbors the flip across the line between them exchanges the two odd corners, again giving $1$ painting, for $3 \\times 2 = 6$. Total $3 + 6 + 6 + 6 = 21$ ✓. Route two, count the pairs of a labeled painting and a motion that fixes it. The do-nothing motion fixes all $81$. The quarter turn and the three-quarter turn force all four corners to match: $3$ each. The half turn forces two pairs to match: $3^2 = 9$. Each of the $2$ flips across a diagonal holds two corners still and swaps the other two: $3^3 = 27$ each. Each of the $2$ flips across a line through opposite edge centers swaps the corners in two pairs: $3^2 = 9$ each. The pairs number $81 + 3 + 3 + 9 + 27 + 27 + 9 + 9 = 168$, and a group of size $s$ contributes exactly $8$ pairs, since each member is fixed by $\\frac{8}{s}$ of the $8$ motions. So there are $\\frac{168}{8} = 21$ paintings ✓. (The choice $24$ USES ROTATIONS ONLY AND FORGETS THE FLIPS ✗; $12$ HALVES THAT ROTATION COUNT, as though no painting were left unchanged by a flip ✗; $10$ DIVIDES $81$ BY $8$ AND ROUNDS, a division the fixed paintings make invalid ✗.)',
    },
  ],
]

export default {
  book: 'intro-counting',
  number: 3,
  sections: { '3.4': s34 },
}
