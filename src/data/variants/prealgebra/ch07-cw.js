// Prealgebra chapter 7 — variations for the chapter challenge and the chapter
// worksheet. All problems and solutions are original MathQuest content.

const challenge = [
  // 1. A ratio gap closed by adding (or removing) a fixed amount.
  [
    {
      q: 'A shelf holds paperbacks and hardcovers in the ratio $4:7$. After $18$ more paperbacks arrive, the two kinds are equal in number. How many hardcovers are on the shelf?',
      choices: ['$42$', '$24$', '$126$', '$66$'],
      answer: 0,
      solution: 'Hardcovers beat paperbacks by $7 - 4 = 3$ parts, and the $18$ new paperbacks exactly close that gap, so $3$ parts $= 18$ books and one part is $6$. Hardcovers are $7$ parts: $7 \\times 6 = 42$. Check: paperbacks start at $4 \\times 6 = 24$, and $24 + 18 = 42$. ✓ ($24$ is the paperback count, the wrong kind of book; treating the $18$ as ONE part gives $7 \\times 18 = 126$; $66$ is the total number of books, $11$ parts, not the hardcovers alone.)',
    },
    {
      q: 'A choir has altos and sopranos in the ratio $5:8$. When $12$ more altos join, the two sections are equal in size. How many singers are in the choir NOW?',
      choices: ['$52$', '$32$', '$64$', '$76$'],
      answer: 2,
      solution: 'Sopranos beat altos by $8 - 5 = 3$ parts, and the $12$ new altos close that gap, so one part is $12 \\div 3 = 4$ singers. Altos started at $5 \\times 4 = 20$ and sopranos are $8 \\times 4 = 32$. After the $12$ join, both sections hold $32$, so the choir has $32 + 32 = 64$ singers. ✓ ($52$ is the choir BEFORE the newcomers, $20 + 32$; $32$ is only one section; $76$ counts the $12$ newcomers twice, once inside the equal sections and once again on top.)',
    },
    {
      q: 'A parking lot holds vans and cars in the ratio $2:9$. After $35$ cars drive away, the two kinds are equal in number. How many cars were in the lot at first?',
      choices: ['$10$', '$55$', '$315$', '$45$'],
      answer: 3,
      solution: 'Cars beat vans by $9 - 2 = 7$ parts, and the $35$ departing cars close exactly that gap, so one part is $35 \\div 7 = 5$ vehicles. Cars are $9$ parts: $9 \\times 5 = 45$. Check: vans are $2 \\times 5 = 10$, and $45 - 35 = 10$. ✓ ($10$ is the van count; $55$ is every vehicle in the lot, $11$ parts; treating the $35$ as ONE part gives $9 \\times 35 = 315$.)',
    },
  ],
  // 2. Two chained ratios that measure the middle quantity differently.
  [
    {
      q: 'If $p:q = 2:5$ and $q:r = 3:8$, what is $p:r$ in simplest form?',
      choices: ['$3:20$', '$1:4$', '$20:3$', '$16:15$'],
      answer: 0,
      solution: 'The middle value $q$ is called $5$ in one ratio and $3$ in the other, so scale both to $15$: $p:q = 6:15$ and $q:r = 15:40$. Glue them: $p:q:r = 6:15:40$, so $p:r = 6:40 = 3:20$. (Gluing the outer numbers gives $2:8 = 1:4$ and skips the matching step; $20:3$ is the answer upside down, which is $r:p$; using the second ratio flipped, $\\frac{2}{5} \\times \\frac{8}{3}$, gives $16:15$.)',
    },
    {
      q: 'If $m:n = 4:3$ and $n:k = 5:2$, what is $m:k$ in simplest form?',
      choices: ['$2:1$', '$10:3$', '$3:10$', '$8:15$'],
      answer: 1,
      solution: 'Match the middle: $n$ is $3$ in one ratio and $5$ in the other, so scale both to $15$. Then $m:n = 20:15$ and $n:k = 15:6$, giving $m:n:k = 20:15:6$. Read off the ends: $m:k = 20:6 = 10:3$. (Gluing the outer numbers gives $4:2 = 2:1$; $3:10$ is the answer reversed; flipping the second ratio, $\\frac{4}{3} \\times \\frac{2}{5}$, gives $8:15$.)',
    },
    {
      q: 'If $x:y = 6:5$ and $y:z = 4:9$, what is $x:z$ in simplest form?',
      choices: ['$2:3$', '$15:8$', '$27:10$', '$8:15$'],
      answer: 3,
      solution: 'The middle value $y$ is $5$ in one ratio and $4$ in the other, so scale both to $20$: $x:y = 24:20$ and $y:z = 20:45$. That gives $x:y:z = 24:20:45$, so $x:z = 24:45 = 8:15$. (Gluing the ends gives $6:9 = 2:3$; $15:8$ is the answer reversed, which is $z:x$; using the second ratio upside down, $\\frac{6}{5} \\times \\frac{9}{4}$, gives $27:10$.)',
    },
  ],
  // 3. Scaling a rectangle so its shape survives.
  [
    {
      q: 'A photograph is $6$ cm by $9$ cm. It is enlarged so that its long side becomes $24$ cm. To keep the same shape, how long must the short side become?',
      choices: ['$21$ cm', '$16$ cm', '$36$ cm', '$6$ cm'],
      answer: 1,
      solution: 'The long side went from $9$ to $24$, so the scale factor is $\\frac{24}{9} = \\frac{8}{3}$. The short side must scale the same way: $6 \\times \\frac{8}{3} = 16$ cm. Check: $16:24 = 6:9 = 2:3$. ✓ (Adding the $15$ cm of growth to the short side gives $21$; using the factor upside down, $9 \\times 24 \\div 6$, gives $36$; leaving the short side at $6$ would stretch the picture out of shape.)',
    },
    {
      q: 'A rectangular flag is $3$ ft by $5$ ft. A bigger flag of exactly the same shape has a short side of $12$ ft. What is the PERIMETER of the bigger flag?',
      choices: ['$32$ ft', '$16$ ft', '$64$ ft', '$52$ ft'],
      answer: 2,
      solution: 'The short side went from $3$ to $12$, a factor of $4$, so the long side becomes $5 \\times 4 = 20$ ft. The perimeter is $2 \\times (12 + 20) = 64$ ft. ($32$ is $12 + 20$ with the doubling forgotten; $16$ is the SMALL flag\'s perimeter, $2 \\times (3 + 5)$; adding $9$ ft to both sides instead of multiplying gives a $12$ by $14$ flag and a perimeter of $52$ ft.)',
    },
    {
      q: 'A garden sign is $9$ inches by $15$ inches. A smaller copy of exactly the same shape is $6$ inches on its short side. How long is the smaller copy\'s long side?',
      choices: ['$12$ inches', '$22.5$ inches', '$15$ inches', '$10$ inches'],
      answer: 3,
      solution: 'The short side went from $9$ to $6$, so the scale factor is $\\frac{6}{9} = \\frac{2}{3}$. The long side shrinks the same way: $15 \\times \\frac{2}{3} = 10$ inches. Check: $6:10 = 9:15 = 3:5$. ✓ (Subtracting $3$ inches from both sides instead of multiplying gives $12$; using the factor upside down, $15 \\times \\frac{3}{2}$, gives $22.5$, which is bigger than the original — a shrinking copy cannot grow; leaving the long side at $15$ would squash the shape.)',
    },
  ],
  // 4. Chained unit conversions in both directions.
  [
    {
      q: 'A dripping tap loses $3$ drops every second. How many drops does it lose in one full day?',
      choices: ['$259{,}200$', '$10{,}800$', '$4320$', '$180$'],
      answer: 0,
      solution: 'Chain three factors: $3 \\times 60 = 180$ drops per minute, $180 \\times 60 = 10{,}800$ drops per hour, and $10{,}800 \\times 24 = 259{,}200$ drops per day. ($10{,}800$ covers only one hour; $4320 = 3 \\times 60 \\times 24$ skips the minutes-to-hours link; $180$ is just one minute\'s worth.)',
    },
    {
      q: 'A machine seals $15$ boxes per minute. How many boxes does it seal during one $8$-hour shift?',
      choices: ['$900$', '$7200$', '$120$', '$432{,}000$'],
      answer: 1,
      solution: 'Each hour holds $60$ minutes, so the machine seals $15 \\times 60 = 900$ boxes per hour, and in $8$ hours it seals $900 \\times 8 = 7200$ boxes. ($900$ is one hour only; $120 = 15 \\times 8$ forgets the minutes-to-hours step; $432{,}000$ multiplies by $3600$ seconds as well, converting the time twice over.)',
    },
    {
      q: 'A water plant treats $21{,}600$ liters every hour. What is that rate in liters per second?',
      choices: ['$360$ liters per second', '$0.1$ liters per second', '$6$ liters per second', '$1{,}296{,}000$ liters per second'],
      answer: 2,
      solution: 'One hour is $3600$ seconds, so divide: $\\frac{21{,}600 \\text{ L}}{3600 \\text{ s}} = 6$ liters per second. Going to a shorter unit of time means a SMALLER number, which is a quick size check. ($360$ is the liters per MINUTE, one link short; dividing by $60$ a third time gives $0.1$; multiplying by $3600$ instead of dividing points the conversion factor the wrong way and gives the absurd $1{,}296{,}000$.)',
    },
  ],
  // 5. Average speed is total distance over total time, never the mean of the speeds.
  [
    {
      q: 'Mira jogs the $12$ km to the park at $8$ km/h and jogs home along the same road at $24$ km/h. What is her average speed for the whole trip?',
      choices: ['$12$ km/h', '$16$ km/h', '$32$ km/h', '$6$ km/h'],
      answer: 0,
      solution: 'Average speed is TOTAL distance over TOTAL time. Out: $12 \\div 8 = 1.5$ hours. Back: $12 \\div 24 = 0.5$ hours. Total: $24$ km in $2$ hours, so $\\frac{24}{2} = 12$ km/h. (Averaging the two speeds gives $16$ km/h, which ignores that the slow leg lasted three times as long; adding the speeds gives $32$ km/h; using only the one-way $12$ km with the full $2$ hours gives $6$ km/h.)',
    },
    {
      q: 'A delivery van drives $60$ km at $30$ km/h, then carries on for another $150$ km at $50$ km/h. What is its average speed for the whole journey?',
      choices: ['$40$ km/h', '$80$ km/h', '$42$ km/h', '$70$ km/h'],
      answer: 2,
      solution: 'First leg: $60 \\div 30 = 2$ hours. Second leg: $150 \\div 50 = 3$ hours. Total: $210$ km in $5$ hours, so the average speed is $\\frac{210}{5} = 42$ km/h. (Averaging the two speeds gives $40$ km/h — close, but wrong, and the answer must lean toward the leg that took longer; adding the speeds gives $80$ km/h; dividing the whole $210$ km by only the $3$-hour leg gives $70$ km/h.)',
    },
    {
      q: 'Sam drives the $60$ km to a fair at $40$ km/h. He wants his average speed for the whole round trip to be $48$ km/h. How fast must he drive home?',
      choices: ['$56$ km/h', '$44$ km/h', '$80$ km/h', '$60$ km/h'],
      answer: 3,
      solution: 'The round trip is $120$ km, and at an average of $48$ km/h it must take $120 \\div 48 = 2.5$ hours in all. The drive out already used $60 \\div 40 = 1.5$ hours, leaving $1$ hour for the $60$ km home: $60 \\div 1 = 60$ km/h. Check: $\\frac{120}{1.5 + 1} = 48$ km/h. ✓ (Treating the average as the mean of the two speeds gives $2 \\times 48 - 40 = 56$ km/h; averaging $40$ and $48$ gives $44$ km/h; dividing the whole $120$ km by the outbound $1.5$ hours gives $80$ km/h.)',
    },
  ],
  // 6. Rates that add and subtract: fillers against drains, partial work.
  [
    {
      q: 'Pipe A fills a tank in $4$ hours and pipe B fills it in $12$ hours, but an open drain empties a full tank in $6$ hours. With both pipes running and the drain open, how long does the empty tank take to fill?',
      choices: ['$6$ hours', '$22$ hours', '$3$ hours', '$2$ hours'],
      answer: 0,
      solution: 'Work with rates. Each hour the tank gains $\\frac{1}{4} + \\frac{1}{12} - \\frac{1}{6} = \\frac{3}{12} + \\frac{1}{12} - \\frac{2}{12} = \\frac{2}{12} = \\frac{1}{6}$ of a tankful, so filling takes $6$ hours. (Adding the three times, $4 + 12 + 6 = 22$, has no meaning — only rates add; ignoring the drain gives $\\frac{1}{4} + \\frac{1}{12} = \\frac{1}{3}$ and $3$ hours; ADDING the drain\'s rate instead of subtracting gives $\\frac{1}{2}$ and $2$ hours, which is faster than with no drain at all.)',
    },
    {
      q: 'Two hoses together fill a paddling pool in $3$ hours. With the plug left out, the same two hoses need $4$ hours to fill it. How long would the open plug take to empty a full pool on its own?',
      choices: ['$1$ hour', '$12$ hours', '$7$ hours', '$\\frac{12}{7}$ hours'],
      answer: 1,
      solution: 'The hoses supply $\\frac{1}{3}$ of a pool per hour. With the plug out the pool still gains, but only $\\frac{1}{4}$ per hour, so the plug is draining $\\frac{1}{3} - \\frac{1}{4} = \\frac{4}{12} - \\frac{3}{12} = \\frac{1}{12}$ of a pool per hour — that is $12$ hours to empty a full one. (Subtracting the times, $4 - 3$, gives $1$ hour, far too fast; adding them gives $7$ hours; ADDING the rates, $\\frac{1}{3} + \\frac{1}{4} = \\frac{7}{12}$, gives $\\frac{12}{7}$ hours.)',
    },
    {
      q: 'Sara can rake a yard in $30$ minutes and her brother can rake the same yard in $45$ minutes. They rake together for $10$ minutes, then Sara has to leave. How much longer does her brother need to finish the yard alone?',
      choices: ['$8$ minutes', '$35$ minutes', '$45$ minutes', '$20$ minutes'],
      answer: 3,
      solution: 'Together they rake $\\frac{1}{30} + \\frac{1}{45} = \\frac{3}{90} + \\frac{2}{90} = \\frac{1}{18}$ of the yard per minute, so in $10$ minutes they finish $\\frac{10}{18} = \\frac{5}{9}$ of it. That leaves $\\frac{4}{9}$ for the brother, who works at $\\frac{1}{45}$ per minute: $\\frac{4}{9} \\div \\frac{1}{45} = \\frac{4}{9} \\times 45 = 20$ minutes. ($8$ minutes is what would be left if BOTH kept raking, since together they need $18$ minutes in all; $35 = 45 - 10$ just docks his solo time by ten minutes; $45$ ignores the work already done.)',
    },
  ],
  // 7. Unit price, and the question of what exactly is being compared.
  [
    {
      q: 'One shop sells $3$ notebooks for $\\$5.40$; another sells $5$ of the same notebooks for $\\$8.50$. How much do you save PER NOTEBOOK by choosing the better deal?',
      choices: ['$\\$1.70$', '$\\$0.10$', '$\\$1.80$', '$\\$3.10$'],
      answer: 1,
      solution: 'Find each unit price. First shop: $\\$5.40 \\div 3 = \\$1.80$ per notebook. Second shop: $\\$8.50 \\div 5 = \\$1.70$ per notebook. The second shop is cheaper, and the saving is $\\$1.80 - \\$1.70 = \\$0.10$ per notebook. ($\\$1.70$ and $\\$1.80$ are the unit prices themselves, which answer a different question than the SAVING; $\\$3.10$ is just $\\$8.50 - \\$5.40$, the gap between two totals that buy different numbers of notebooks.)',
    },
    {
      q: 'Yogurt cups come in a $4$-pack for $\\$6.00$ or an $8$-pack for $\\$10.40$. A family needs exactly $24$ cups. How much do they save by buying only the cheaper kind of pack?',
      choices: ['$\\$0.20$', '$\\$4.40$', '$\\$4.80$', '$\\$31.20$'],
      answer: 2,
      solution: 'Unit prices first: $\\$6.00 \\div 4 = \\$1.50$ per cup and $\\$10.40 \\div 8 = \\$1.30$ per cup. Over $24$ cups the saving is $24 \\times (\\$1.50 - \\$1.30) = 24 \\times \\$0.20 = \\$4.80$. Check: six $4$-packs cost $\\$36.00$ and three $8$-packs cost $\\$31.20$. ($\\$0.20$ is the saving on ONE cup, not on $24$; $\\$4.40$ is $\\$10.40 - \\$6.00$, comparing one pack of each although they hold different amounts; $\\$31.20$ is the cheaper total, not the saving.)',
    },
    {
      q: 'A shop sells rice three ways: $2$ kg for $\\$5.80$, $5$ kg for $\\$13.50$, and $8$ kg for $\\$22.40$. Which bag costs the LEAST per kilogram?',
      choices: ['the $8$ kg bag', 'the $2$ kg bag', 'they all cost the same per kilogram', 'the $5$ kg bag'],
      answer: 3,
      solution: 'Divide price by weight for each bag. $2$ kg: $\\$5.80 \\div 2 = \\$2.90$ per kg. $5$ kg: $\\$13.50 \\div 5 = \\$2.70$ per kg. $8$ kg: $\\$22.40 \\div 8 = \\$2.80$ per kg. The middle bag wins at $\\$2.70$ per kg. (Choosing the $8$ kg bag assumes biggest is always cheapest, but it costs $\\$2.80$ per kg; the $2$ kg bag has the smallest price tag yet the worst rate at $\\$2.90$ per kg; and the three rates are certainly not equal — only doing the division shows it.)',
    },
  ],
  // 8. Two travelers, one gap: closing speeds and who covers what.
  [
    {
      q: 'Two hikers start $36$ km apart on a straight trail and walk toward each other, one at $5$ km/h and the other at $4$ km/h. How far does the FASTER hiker walk before they meet?',
      choices: ['$20$ km', '$16$ km', '$18$ km', '$4$ km'],
      answer: 0,
      solution: 'Walking toward each other, the gap shrinks at $5 + 4 = 9$ km/h, so they meet after $\\frac{36}{9} = 4$ hours. The faster hiker covers $5 \\times 4 = 20$ km. Check: the slower one covers $16$ km, and $20 + 16 = 36$ km. ✓ ($16$ km is the SLOWER hiker\'s distance; $18$ km splits the trail evenly, which would only be right if they walked at the same speed; $4$ is the meeting TIME in hours, not a distance at all.)',
    },
    {
      q: 'A tractor leaves a farm at $8{:}00$ am travelling $15$ km/h. At $9{:}30$ am a jeep sets off along the same road at $60$ km/h. How far from the farm does the jeep catch the tractor?',
      choices: ['$22.5$ km', '$30$ km', '$18$ km', '$7.5$ km'],
      answer: 1,
      solution: 'By $9{:}30$ am the tractor has had $1.5$ hours, so it is $15 \\times 1.5 = 22.5$ km ahead. Chasing from behind, the gap shrinks at the DIFFERENCE of the speeds, $60 - 15 = 45$ km/h, so the chase takes $\\frac{22.5}{45} = 0.5$ hours. In that half hour the jeep travels $60 \\times 0.5 = 30$ km. Check: the tractor has driven $2$ hours in all, $15 \\times 2 = 30$ km. ✓ ($22.5$ km is only the head start; adding the speeds instead of subtracting gives a $0.3$-hour chase and $18$ km; $7.5$ km uses the right time but the tractor\'s speed.)',
    },
    {
      q: 'Two boats leave harbours $105$ km apart and sail toward each other, one at $18$ km/h and the other at $17$ km/h. How much FARTHER does the faster boat sail than the slower one before they meet?',
      choices: ['$54$ km', '$51$ km', '$3$ km', '$1$ km'],
      answer: 2,
      solution: 'The gap closes at $18 + 17 = 35$ km/h, so they meet after $\\frac{105}{35} = 3$ hours. The faster boat sails $18 \\times 3 = 54$ km and the slower one sails $17 \\times 3 = 51$ km, so the faster boat covers $54 - 51 = 3$ km more. Check: $54 + 51 = 105$ km. ✓ ($54$ km and $51$ km are the two boats\' own distances, not the gap between them; $1$ is the difference in SPEEDS, $1$ km/h, which is not a distance — the unit check catches it.)',
    },
  ],
  // 9. Three-part ratios anchored by the gap between two shares.
  [
    {
      q: 'Three sisters share a bag of beads in the ratio $2:5:8$. The largest share is $36$ beads more than the smallest. How many beads are in the bag altogether?',
      choices: ['$90$', '$48$', '$180$', '$60$'],
      answer: 0,
      solution: 'The largest minus the smallest is $8 - 2 = 6$ parts, and that gap is $36$ beads, so one part is $36 \\div 6 = 6$. The bag holds $2 + 5 + 8 = 15$ parts: $15 \\times 6 = 90$ beads. Check: the shares are $12$, $30$, and $48$, and $48 - 12 = 36$. ✓ ($48$ is the largest share alone; using the largest-minus-MIDDLE gap of $3$ parts makes one part $12$ and the total $180$; $60$ totals only the two shares the clue mentions, $2 + 8 = 10$ parts.)',
    },
    {
      q: 'Three teams finish a quiz with points in the ratio $4:6:11$. The middle team scored $48$ points. How many MORE points did the winning team score than the last-place team?',
      choices: ['$88$', '$40$', '$56$', '$168$'],
      answer: 2,
      solution: 'The middle team is $6$ parts and scored $48$, so one part is $48 \\div 6 = 8$ points. The winner has $11$ parts and the last team has $4$, a gap of $11 - 4 = 7$ parts: $7 \\times 8 = 56$ points. Check: $88 - 32 = 56$. ✓ ($88$ is the winner\'s score, not the gap; $40$ is the gap between the winner and the MIDDLE team, $5$ parts; $168$ is the total of all three scores, $21$ parts.)',
    },
    {
      q: 'A $\\$150$ prize fund is split among three clubs in the ratio $1:4:5$. The club with the biggest share then donates half of it back. How much money does that club keep?',
      choices: ['$\\$75$', '$\\$60$', '$\\$15$', '$\\$37.50$'],
      answer: 3,
      solution: 'Total parts: $1 + 4 + 5 = 10$, so one part is $\\$150 \\div 10 = \\$15$. The biggest share is $5$ parts: $5 \\times \\$15 = \\$75$. Half of that is donated, so the club keeps $\\$75 \\div 2 = \\$37.50$. ($\\$75$ is the share BEFORE the donation; $\\$60$ is the middle club\'s share, $4$ parts; $\\$15$ is the size of one part, not anybody\'s share.)',
    },
  ],
  // 10. Speeds rewritten in different units, with size checks.
  [
    {
      q: 'A swimmer moves at $1.5$ meters per second. What is that speed in kilometers per hour?',
      choices: ['$5400$ km/h', '$5.4$ km/h', '$90$ km/h', '$54$ km/h'],
      answer: 1,
      solution: 'Convert top and bottom separately. In one hour the swimmer covers $1.5 \\times 3600 = 5400$ meters, and $5400$ m $= 5400 \\div 1000 = 5.4$ km. So the speed is $5.4$ km/h — a believable swimming pace. ($5400$ converts the hours but leaves the distance in METERS; $90$ multiplies by $60$ only once, giving meters per minute; $54$ divides by $100$ instead of $1000$.)',
    },
    {
      q: 'A beetle scurries at $4$ centimeters per second. How far does it travel in one hour, in meters?',
      choices: ['$240$ m', '$14{,}400$ m', '$144$ m', '$1.44$ m'],
      answer: 2,
      solution: 'One hour is $3600$ seconds, so the beetle covers $4 \\times 3600 = 14{,}400$ cm. There are $100$ cm in a meter, and meters are the BIGGER unit, so divide: $14{,}400 \\div 100 = 144$ m. ($240$ only converts seconds to minutes; $14{,}400$ is the answer left in centimeters; $1.44$ divides by $10{,}000$ instead of $100$.)',
    },
    {
      q: 'A conveyor belt moves at $30$ meters per minute. What is its speed in kilometers per hour?',
      choices: ['$1800$ km/h', '$0.5$ km/h', '$18$ km/h', '$1.8$ km/h'],
      answer: 3,
      solution: 'In one hour the belt moves $30 \\times 60 = 1800$ meters, and $1800$ m $= 1800 \\div 1000 = 1.8$ km. So the belt runs at $1.8$ km/h — slower than a walk, which fits a conveyor belt. ($1800$ is meters per hour with the distance never converted; $0.5$ is the speed in meters per SECOND; $18$ divides by $100$ instead of $1000$.)',
    },
  ],
  // 11. Unit rate hidden inside a group, then rescaled.
  [
    {
      q: 'Eight identical taps fill $200$ buckets in one hour. How many such taps are needed to fill $275$ buckets in one hour?',
      choices: ['$11$', '$25$', '$3$', '$83$'],
      answer: 0,
      solution: 'One tap fills $200 \\div 8 = 25$ buckets in an hour, so $275$ buckets need $275 \\div 25 = 11$ taps. Or use a proportion: $\\frac{8}{200} = \\frac{x}{275}$ gives $200x = 2200$ and $x = 11$. ($25$ is buckets per tap, not a number of taps; $3$ is how many EXTRA taps are needed beyond the eight; adding $75$ taps for the $75$ extra buckets gives $83$, which is additive thinking where rates multiply.)',
    },
    {
      q: 'Six identical printers get through $54$ ink cartridges in a month. At that rate, how many cartridges would $11$ such printers get through in a month?',
      choices: ['$59$', '$99$', '$9$', '$594$'],
      answer: 1,
      solution: 'One printer uses $54 \\div 6 = 9$ cartridges a month, so $11$ printers use $11 \\times 9 = 99$. ($59$ adds one cartridge for each of the five extra printers instead of scaling; $9$ is the per-printer rate, not the total; $594 = 54 \\times 11$ multiplies by the printer count without dividing out the six printers first.)',
    },
    {
      q: 'Twelve identical buses seat $552$ students in total. How many students can $5$ of those buses seat?',
      choices: ['$545$', '$46$', '$2760$', '$230$'],
      answer: 3,
      solution: 'One bus seats $552 \\div 12 = 46$ students, so $5$ buses seat $5 \\times 46 = 230$. ($545$ takes away one seat for each of the seven missing buses, which is additive thinking; $46$ is one bus, not five; $2760 = 552 \\times 5$ multiplies before finding the per-bus rate.)',
    },
  ],
  // 12. Combined work rates: add the rates, never the times.
  [
    {
      q: 'Mo can mow a lawn in $40$ minutes and Pia can mow the same lawn in $24$ minutes. Working together, how long does the lawn take?',
      choices: ['$15$ minutes', '$32$ minutes', '$64$ minutes', '$16$ minutes'],
      answer: 0,
      solution: 'Add the rates: $\\frac{1}{40} + \\frac{1}{24} = \\frac{3}{120} + \\frac{5}{120} = \\frac{8}{120} = \\frac{1}{15}$ of the lawn per minute, so together they need $15$ minutes. Sanity check: the answer must beat Pia\'s $24$ minutes, and it does. (Averaging the times gives $32$ minutes; adding them gives $64$ minutes, slower than either alone; subtracting them gives $16$ minutes, which happens to be wrong even though it looks small enough.)',
    },
    {
      q: 'One tap fills a $60$ liter barrel in $10$ minutes; a second tap fills the same barrel in $15$ minutes. With both taps running into the empty barrel, how much water is in it after $4$ minutes?',
      choices: ['$24$ liters', '$40$ liters', '$16$ liters', '$60$ liters'],
      answer: 1,
      solution: 'Turn the times into rates: $60 \\div 10 = 6$ liters per minute and $60 \\div 15 = 4$ liters per minute. Together that is $6 + 4 = 10$ liters per minute, so after $4$ minutes the barrel holds $10 \\times 4 = 40$ liters. ($24$ counts only the fast tap; $16$ counts only the slow one; $60$ is the barrel\'s full capacity, and the barrel does not fill until $6$ minutes have passed.)',
    },
    {
      q: 'Three volunteers fold flyers. Ana folds $60$ flyers in $10$ minutes, Ben folds $60$ in $20$ minutes, and Cal folds $60$ in $60$ minutes. Working together, how long do $60$ flyers take?',
      choices: ['$30$ minutes', '$90$ minutes', '$6$ minutes', '$10$ minutes'],
      answer: 2,
      solution: 'Rates first: Ana folds $6$ flyers per minute, Ben folds $3$, and Cal folds $1$. Together that is $6 + 3 + 1 = 10$ flyers per minute, so $60$ flyers take $60 \\div 10 = 6$ minutes. (Averaging the three times gives $30$ minutes; adding them gives $90$ minutes, slower than any one of them working alone; $10$ minutes is Ana\'s time by herself, and help must make the job faster, not equal.)',
    },
  ],
]

const worksheet = [
  // 1. Writing a ratio in simplest form, watching the order and the whole.
  [
    {
      q: 'A shelf holds $18$ mystery books and $24$ adventure books. What is the ratio of mystery books to adventure books in simplest form?',
      answer: '$3:4$',
      solution: 'Divide both numbers by their common factor $6$: $18:24 = 3:4$. For every $3$ mystery books there are $4$ adventure books.',
    },
    {
      q: 'A bag has $12$ green grapes and $20$ red grapes. What is the ratio of green grapes to ALL the grapes, in simplest form?',
      answer: '$3:8$',
      solution: 'This one is part-to-WHOLE, so first find the whole: $12 + 20 = 32$ grapes. The ratio is $12:32$, and dividing both by $4$ gives $3:8$. (The part-to-part ratio of green to red would be $12:20 = 3:5$, which answers a different question.)',
    },
    {
      q: 'A box holds $35$ crayons and $21$ markers. What is the ratio of markers to crayons in simplest form?',
      answer: '$3:5$',
      solution: 'Order matters: markers come first, so write $21:35$. Both numbers are divisible by $7$: $21 \\div 7 = 3$ and $35 \\div 7 = 5$, giving $3:5$. Writing $5:3$ would be crayons to markers.',
    },
  ],
  // 2. Splitting an amount three ways.
  [
    {
      q: 'Split $84$ stickers among three cousins in the ratio $1:2:4$. How many stickers does the cousin with the SMALLEST share get?',
      answer: '$12$ stickers',
      solution: 'Total parts: $1 + 2 + 4 = 7$, so one part is $84 \\div 7 = 12$ stickers. The smallest share is $1$ part: $12$ stickers. Check: the shares are $12$, $24$, and $48$, and $12 + 24 + 48 = 84$.',
    },
    {
      q: 'Divide $\\$96$ among three helpers in the ratio $3:4:5$. How much MORE does the biggest share get than the smallest?',
      answer: '$\\$16$',
      solution: 'Total parts: $3 + 4 + 5 = 12$, so one part is $\\$96 \\div 12 = \\$8$. The gap between biggest and smallest is $5 - 3 = 2$ parts: $2 \\times \\$8 = \\$16$. Check: the shares are $\\$24$, $\\$32$, and $\\$40$, and $\\$40 - \\$24 = \\$16$.',
    },
    {
      q: 'A $150$ cm ribbon is cut into three pieces in the ratio $2:3:5$. How long is the MIDDLE piece?',
      answer: '$45$ cm',
      solution: 'Total parts: $2 + 3 + 5 = 10$, so one part is $150 \\div 10 = 15$ cm. The middle piece is $3$ parts: $3 \\times 15 = 45$ cm. Check: $30 + 45 + 75 = 150$ cm.',
    },
  ],
  // 3. Scaling a recipe with a proportion.
  [
    {
      q: 'A muffin recipe uses $5$ cups of flour to make $30$ muffins. How many cups of flour are needed for $48$ muffins?',
      answer: '$8$ cups',
      solution: 'One cup of flour makes $30 \\div 5 = 6$ muffins, so $48$ muffins need $48 \\div 6 = 8$ cups. Check with a proportion: $\\frac{5}{30} = \\frac{8}{48}$, since both simplify to $\\frac{1}{6}$.',
    },
    {
      q: 'A smoothie recipe uses $4$ bananas to make $6$ servings. How many servings can be made from $10$ bananas?',
      answer: '$15$ servings',
      solution: 'Set up $\\frac{4 \\text{ bananas}}{6 \\text{ servings}} = \\frac{10 \\text{ bananas}}{x \\text{ servings}}$ and cross-multiply: $4x = 60$, so $x = 15$ servings. (Each banana is worth $6 \\div 4 = 1.5$ servings, and $10 \\times 1.5 = 15$.)',
    },
    {
      q: 'A paint mix uses $2$ liters of white for every $7$ liters of blue. How many liters of white are needed for $28$ liters of blue?',
      answer: '$8$ liters of white',
      solution: 'The blue went from $7$ to $28$ liters — multiplied by $4$. The white must be multiplied by $4$ as well: $2 \\times 4 = 8$ liters. Adding $21$ to both numbers instead would give $23$ liters of white and ruin the color.',
    },
  ],
  // 4. Chained conversions, up and down the ladder.
  [
    {
      q: 'Convert $3$ days to minutes.',
      answer: '$4320$ minutes',
      solution: 'Chain two factors: $3 \\text{ days} \\times \\frac{24 \\text{ h}}{1 \\text{ day}} = 72$ hours, then $72 \\times 60 = 4320$ minutes. Minutes are much smaller than days, so the number should come out big — it does.',
    },
    {
      q: 'Convert $54{,}000$ seconds to hours.',
      answer: '$15$ hours',
      solution: 'One hour is $60 \\times 60 = 3600$ seconds. Hours are the BIGGER unit, so divide: $54{,}000 \\div 3600 = 15$ hours. Multiplying instead would give a wildly huge number, which the size check rejects.',
    },
    {
      q: 'Convert $0.6$ km to centimeters.',
      answer: '$60{,}000$ cm',
      solution: 'Two hops down the metric ladder: $0.6 \\text{ km} \\times 1000 = 600$ m, then $600 \\times 100 = 60{,}000$ cm. Both hops go to a smaller unit, so both multiply.',
    },
  ],
  // 5. The distance-rate-time triangle, one unknown at a time.
  [
    {
      q: 'A ferry sails at $28$ km/h for $3.5$ hours. How far does it travel?',
      answer: '$98$ km',
      solution: 'Distance equals rate times time: $d = 28 \\times 3.5 = 98$ km. (Half of $28$ is $14$, so $28 \\times 3.5 = 84 + 14 = 98$.)',
    },
    {
      q: 'A cyclist covers $84$ km in $4$ hours. What is her average speed?',
      answer: '$21$ km/h',
      solution: 'Speed is distance divided by time: $\\frac{84 \\text{ km}}{4 \\text{ h}} = 21$ km/h. The unit check confirms it — kilometers divided by hours gives km/h.',
    },
    {
      q: 'How long does it take to drive $270$ km at $60$ km/h?',
      answer: '$4.5$ hours',
      solution: 'Time is distance divided by rate: $\\frac{270}{60} = 4.5$ hours, which is $4$ hours and $30$ minutes. Check: $60 \\times 4.5 = 270$ km.',
    },
  ],
  // 6. Unit price, forwards and backwards.
  [
    {
      q: 'Apples cost $\\$5.00$ for $4$ pounds. At that rate, how much do $9$ pounds cost?',
      answer: '$\\$11.25$',
      solution: 'Unit price first: $\\$5.00 \\div 4 = \\$1.25$ per pound. Then $9$ pounds cost $9 \\times \\$1.25 = \\$11.25$.',
    },
    {
      q: 'A $6$ pound bag of potatoes costs $\\$7.20$. At that rate, how many pounds can you buy for $\\$10.80$?',
      answer: '$9$ pounds',
      solution: 'Unit price: $\\$7.20 \\div 6 = \\$1.20$ per pound. Then $\\$10.80 \\div \\$1.20 = 9$ pounds. Check: $9 \\times \\$1.20 = \\$10.80$.',
    },
    {
      q: 'A shop sells rope at $\\$2.40$ for $3$ meters. What does $11$ meters of the same rope cost?',
      answer: '$\\$8.80$',
      solution: 'One meter costs $\\$2.40 \\div 3 = \\$0.80$, so $11$ meters cost $11 \\times \\$0.80 = \\$8.80$.',
    },
  ],
  // 7. Average speed over two legs.
  [
    {
      q: 'A path to a lookout is $12$ km each way. Kai climbs up at $4$ km/h and comes back down at $12$ km/h. What is his average speed for the whole walk?',
      answer: '$6$ km/h',
      solution: 'Average speed is total distance over total time — never just the average of the two speeds. Up: $12 \\div 4 = 3$ hours. Down: $12 \\div 12 = 1$ hour. Total: $24$ km in $4$ hours, so $\\frac{24}{4} = 6$ km/h. The slow climb takes three times as long, which drags the average well below the midpoint of $8$ km/h.',
    },
    {
      q: 'A bus drives $30$ km at $30$ km/h, then carries on for $90$ km at $45$ km/h. What is its average speed for the whole trip?',
      answer: '$40$ km/h',
      solution: 'First leg: $30 \\div 30 = 1$ hour. Second leg: $90 \\div 45 = 2$ hours. Total: $120$ km in $3$ hours, so the average speed is $\\frac{120}{3} = 40$ km/h. Here the average leans toward $45$, because the bus spent twice as long on the faster leg — averaging the speeds to get $37.5$ would be wrong.',
    },
    {
      q: 'Ella drives the $60$ km to a lake at $30$ km/h. Her average speed for the whole round trip turns out to be $40$ km/h. How fast did she drive home?',
      answer: '$60$ km/h',
      solution: 'The round trip is $120$ km, and at an average of $40$ km/h it takes $120 \\div 40 = 3$ hours in all. The drive out used $60 \\div 30 = 2$ hours, leaving $1$ hour for the $60$ km home — that is $60$ km/h. Check: $\\frac{120}{2 + 1} = 40$ km/h. ✓ Notice the answer is NOT $50$ km/h: average speed is never the mean of the two speeds.',
    },
  ],
  // 8. Chaining two ratios by matching the middle.
  [
    {
      q: 'If $p:q = 4:9$ and $q:r = 3:5$, find $p:r$ in simplest form.',
      answer: '$4:15$',
      solution: 'Match the middle: $q$ is $9$ in one ratio and $3$ in the other, and the least common multiple is $9$. Scale the second ratio by $3$: $q:r = 9:15$. Now glue: $p:q:r = 4:9:15$, so $p:r = 4:15$, which does not simplify.',
    },
    {
      q: 'If $x:y = 7:4$ and $y:z = 8:9$, find $x:z$ in simplest form.',
      answer: '$14:9$',
      solution: 'Match the middle: $y$ is $4$ and $8$, so scale the first ratio by $2$: $x:y = 14:8$. Glue: $x:y:z = 14:8:9$, so $x:z = 14:9$. Since $14$ and $9$ share no common factor, that is simplest form.',
    },
    {
      q: 'If $a:b = 2:5$ and $b:c = 10:3$, write $a:b:c$ in simplest form.',
      answer: '$4:10:3$',
      solution: 'Match the middle: $b$ is $5$ in one ratio and $10$ in the other, so scale the first ratio by $2$: $a:b = 4:10$. Now the middles agree and we can glue: $a:b:c = 4:10:3$. No number divides all three, so it is already simplest.',
    },
  ],
  // 9. Rates that need a unit conversion as well as a time change.
  [
    {
      q: 'A machine bottles $180$ milliliters of syrup every $2$ seconds. How many liters does it bottle per minute? ($1$ liter $= 1000$ mL.)',
      answer: '$5.4$ liters per minute',
      solution: 'Unit rate first: $180 \\div 2 = 90$ mL per second. Scale up the time: $90 \\times 60 = 5400$ mL per minute. Convert the volume: $5400 \\div 1000 = 5.4$ liters per minute.',
    },
    {
      q: 'A tank loses $4.8$ liters of water every hour through a slow leak. How many milliliters does it lose per minute? ($1$ liter $= 1000$ mL.)',
      answer: '$80$ milliliters per minute',
      solution: 'Convert the volume first: $4.8$ liters $= 4.8 \\times 1000 = 4800$ mL per hour. Then scale the time down: $4800 \\div 60 = 80$ mL per minute. Going to a shorter stretch of time means a smaller number, so dividing is right.',
    },
    {
      q: 'A printer uses $45$ grams of toner for every $300$ pages. How many kilograms of toner does it use for $12{,}000$ pages? ($1$ kg $= 1000$ g.)',
      answer: '$1.8$ kilograms',
      solution: 'The page count went from $300$ to $12{,}000$ — multiplied by $40$. Multiply the toner the same way: $45 \\times 40 = 1800$ grams. Convert: $1800 \\div 1000 = 1.8$ kg.',
    },
  ],
  // 10. Pulling one worker's rate out of a combined rate.
  [
    {
      q: 'One printer alone finishes a job in $12$ minutes. With a second printer helping, the same job takes only $4$ minutes. How long would the second printer take alone?',
      answer: '$6$ minutes',
      solution: 'Work with rates. Together they do $\\frac{1}{4}$ of the job per minute, and the first printer supplies $\\frac{1}{12}$ per minute. The second must supply the rest: $\\frac{1}{4} - \\frac{1}{12} = \\frac{3}{12} - \\frac{1}{12} = \\frac{2}{12} = \\frac{1}{6}$ per minute, so alone it needs $6$ minutes. Check: $\\frac{1}{12} + \\frac{1}{6} = \\frac{1}{4}$, which is a $4$ minute job.',
    },
    {
      q: 'Two hoses running together fill a pond in $8$ hours. The stronger hose alone would take $12$ hours. How long would the weaker hose take alone?',
      answer: '$24$ hours',
      solution: 'Together the hoses fill $\\frac{1}{8}$ of the pond per hour, and the stronger one supplies $\\frac{1}{12}$ per hour. The weaker one supplies $\\frac{1}{8} - \\frac{1}{12} = \\frac{3}{24} - \\frac{2}{24} = \\frac{1}{24}$ per hour, so it needs $24$ hours alone. That is much slower than its partner, which fits the word "weaker".',
    },
    {
      q: 'Three friends painting together can finish a fence in $2$ hours. Ana alone would take $6$ hours and Ben alone would take $12$ hours. How long would Cal take alone?',
      answer: '$4$ hours',
      solution: 'Together the three paint $\\frac{1}{2}$ of the fence per hour. Ana supplies $\\frac{1}{6}$ and Ben supplies $\\frac{1}{12}$, so Cal supplies $\\frac{1}{2} - \\frac{1}{6} - \\frac{1}{12} = \\frac{6}{12} - \\frac{2}{12} - \\frac{1}{12} = \\frac{3}{12} = \\frac{1}{4}$ per hour. A painter doing a quarter of the fence each hour needs $4$ hours alone. Check: $\\frac{1}{6} + \\frac{1}{12} + \\frac{1}{4} = \\frac{2}{12} + \\frac{1}{12} + \\frac{3}{12} = \\frac{1}{2}$. ✓',
    },
  ],
]

export default {
  book: 'prealgebra',
  number: 7,
  challenge,
  worksheet,
}
