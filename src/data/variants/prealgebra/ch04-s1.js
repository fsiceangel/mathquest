// Prealgebra chapter 4 — variations for sections 4.1-4.3.
// All problems and solutions are original MathQuest content.

const s41 = [
  // p1 — what the numerator and denominator each count
  [
    {
      q: 'In the fraction $\\frac{5}{9}$, what does the $5$ tell you?',
      choices: [
        'How many of the equal parts we take',
        'How many equal parts one whole is split into',
        'How many wholes there are',
        'The size of each part',
      ],
      answer: 0,
      solution:
        'The top number, the numerator, counts the parts we take — here, $5$ of them. The bottom number, $9$, is the one that says a whole was cut into $9$ equal pieces, and each of those pieces has size $\\frac{1}{9}$.',
    },
    {
      q: 'A pizza is cut into equal slices and Ana takes some of them. In the fraction describing Ana\'s share, which number counts all the slices in the whole pizza?',
      choices: [
        'The top number (the numerator)',
        'The bottom number (the denominator)',
        'Both numbers together',
        'Neither number — you cannot tell',
      ],
      answer: 1,
      solution:
        'The denominator always describes the whole: it says how many equal pieces the whole was cut into. The numerator only counts the pieces Ana actually took.',
    },
    {
      q: 'A ribbon is cut into $12$ equal pieces and Dev uses $5$ of them. Which fraction shows the part of the ribbon Dev used?',
      choices: ['$\\frac{12}{5}$', '$\\frac{7}{12}$', '$\\frac{5}{7}$', '$\\frac{5}{12}$'],
      answer: 3,
      solution:
        'The whole is cut into $12$ equal pieces, so $12$ goes on the bottom; Dev takes $5$ of them, so $5$ goes on top: $\\frac{5}{12}$. The choice $\\frac{7}{12}$ is the part he did NOT use, and $\\frac{5}{7}$ compares what he used to what he left instead of to the whole ribbon.',
    },
  ],
  // p2 — a fraction is a division
  [
    {
      q: 'Which fraction means the same thing as $7 \\div 12$?',
      choices: ['$\\frac{12}{7}$', '$\\frac{7}{12}$', '$84$', '$\\frac{1}{84}$'],
      answer: 1,
      solution:
        'The number being divided goes on top, so $7 \\div 12 = \\frac{7}{12}$. Order matters: $\\frac{12}{7}$ would mean $12 \\div 7$, and $84$ is what you get by multiplying instead of dividing.',
    },
    {
      q: 'The fraction $\\frac{11}{6}$ means the same thing as which of these?',
      choices: ['$6 \\div 11$', '$11 \\times 6$', '$11 \\div 6$', '$6 \\times 11$'],
      answer: 2,
      solution:
        'The fraction bar is a division sign, and the numerator is the number being divided: $\\frac{11}{6} = 11 \\div 6$. Reading it upside down gives $6 \\div 11$, which is a different (and much smaller) number.',
    },
    {
      q: 'Five identical granola bars are shared equally among $8$ friends. What fraction of a bar does each friend get?',
      choices: ['$\\frac{8}{5}$', '$40$', '$\\frac{1}{40}$', '$\\frac{5}{8}$'],
      answer: 3,
      solution:
        'Sharing $5$ bars among $8$ friends is the division $5 \\div 8$, and a division is a fraction: each friend gets $\\frac{5}{8}$ of a bar. Since $5$ is less than $8$, each share is less than a whole bar — which rules out $\\frac{8}{5}$ and $40$ right away.',
    },
  ],
  // p3 — unit fractions
  [
    {
      q: 'Exactly one of the fractions below is a unit fraction. Which one?',
      choices: ['$\\frac{1}{9}$', '$\\frac{9}{1}$', '$\\frac{3}{4}$', '$\\frac{4}{4}$'],
      answer: 0,
      solution:
        'A unit fraction has a $1$ on TOP. Only $\\frac{1}{9}$ qualifies: it is one piece of a whole cut into $9$ equal parts. Watch the others: $\\frac{9}{1} = 9$ and $\\frac{4}{4} = 1$, and $\\frac{3}{4}$ takes three pieces, not one.',
    },
    {
      q: 'Which of these is NOT a unit fraction?',
      choices: ['$\\frac{1}{3}$', '$\\frac{1}{10}$', '$\\frac{2}{7}$', '$\\frac{1}{100}$'],
      answer: 2,
      solution:
        'Three of these have a $1$ on top, so they are single pieces of a whole. But $\\frac{2}{7}$ takes TWO of the seventh-sized pieces, so it is built from a unit fraction rather than being one.',
    },
    {
      q: 'How many copies of the unit fraction $\\frac{1}{7}$ does it take to make $\\frac{5}{7}$?',
      choices: ['$\\frac{1}{35}$', '$7$', '$35$', '$5$'],
      answer: 3,
      solution:
        'The numerator is exactly the count of unit-fraction copies: $\\frac{5}{7}$ means $5$ pieces, each of size $\\frac{1}{7}$. The denominator $7$ tells you how big each piece is, not how many you have.',
    },
  ],
  // p4 — a fraction whose top is a multiple of its bottom
  [
    {
      q: 'What is $\\frac{42}{6}$?',
      choices: ['$7$', '$6$', '$\\frac{1}{7}$', '$252$'],
      answer: 0,
      solution:
        'The fraction bar means divide: $\\frac{42}{6} = 42 \\div 6 = 7$, since $6 \\times 7 = 42$. Because $42$ is a multiple of $6$, this fraction is really a whole number in disguise.',
    },
    {
      q: 'What is $\\frac{63}{9}$?',
      choices: ['$9$', '$7$', '$\\frac{1}{7}$', '$72$'],
      answer: 1,
      solution:
        'Divide: $\\frac{63}{9} = 63 \\div 9 = 7$, because $9 \\times 7 = 63$. Answering $9$ just repeats the denominator, and $72$ comes from adding $63 + 9$ instead of dividing.',
    },
    {
      q: 'A fraction has denominator $4$ and its value is the whole number $6$. What is its numerator?',
      choices: ['$10$', '$\\frac{3}{2}$', '$24$', '$2$'],
      answer: 2,
      solution:
        'You need a top that gives $6$ when divided by $4$, so undo the division by multiplying: $6 \\times 4 = 24$. Check: $\\frac{24}{4} = 6$. ✓ Adding gives $10$ and subtracting gives $2$, but neither undoes a division.',
    },
  ],
  // p5 — tick marks between 0 and 1
  [
    {
      q: 'The space from $0$ to $1$ is split into $10$ equal hops. What number is at the $7$th tick mark after $0$?',
      choices: ['$\\frac{10}{7}$', '$\\frac{7}{10}$', '$\\frac{7}{3}$', '$\\frac{1}{7}$'],
      answer: 1,
      solution:
        'Ten equal hops from $0$ to $1$ means each hop has size $\\frac{1}{10}$. Taking $7$ of them gives $7$ copies of $\\frac{1}{10}$, which is $\\frac{7}{10}$.',
    },
    {
      q: 'The space from $0$ to $1$ on a number line is split into equal hops, and the $5$th tick mark after $0$ is labelled $\\frac{5}{12}$. How many hops are there between $0$ and $1$?',
      choices: ['$5$', '$17$', '$12$', '$60$'],
      answer: 2,
      solution:
        'Read the label backwards: the numerator $5$ matches the $5$ hops you took, so the denominator $12$ must be the size-name of each hop — each is $\\frac{1}{12}$. It therefore takes $12$ hops to cover the whole distance from $0$ to $1$.',
    },
    {
      q: 'Starting at $0$, you take $6$ hops, each of size $\\frac{1}{11}$. Where do you land?',
      choices: ['$\\frac{11}{6}$', '$\\frac{1}{66}$', '$\\frac{6}{17}$', '$\\frac{6}{11}$'],
      answer: 3,
      solution:
        'Six copies of $\\frac{1}{11}$ is $\\frac{6}{11}$ — the hop size sets the denominator and the number of hops sets the numerator. Since $6$ is a bit more than half of $11$, you land just past the middle of $0$ and $1$, which fits.',
    },
  ],
  // p6 — fractions that are whole numbers, 1, or 0
  [
    {
      q: 'Which fraction equals the whole number $12$?',
      choices: ['$\\frac{12}{1}$', '$\\frac{1}{12}$', '$\\frac{12}{12}$', '$\\frac{0}{12}$'],
      answer: 0,
      solution:
        'Dividing by $1$ changes nothing: $\\frac{12}{1} = 12 \\div 1 = 12$. The others land elsewhere: $\\frac{12}{12} = 1$, $\\frac{0}{12} = 0$, and $\\frac{1}{12}$ is a single small piece.',
    },
    {
      q: 'Which of these fractions equals $1$?',
      choices: ['$\\frac{1}{15}$', '$\\frac{15}{15}$', '$\\frac{15}{1}$', '$\\frac{0}{15}$'],
      answer: 1,
      solution:
        'Taking all $15$ of the fifteenth-sized pieces rebuilds the whole: $\\frac{15}{15} = 15 \\div 15 = 1$. Any nonzero number over itself is $1$.',
    },
    {
      q: 'Every fraction whose denominator is $1$ is equal to which of these?',
      choices: ['$1$', '$0$', 'Its reciprocal', 'Its numerator'],
      answer: 3,
      solution:
        'A denominator of $1$ means "split into one piece", which is no splitting at all: $\\frac{a}{1} = a \\div 1 = a$. So the fraction simply equals its own numerator — that is how every whole number can be written as a fraction.',
    },
  ],
  // p7 — how many unit pieces build a whole number
  [
    {
      q: 'How many pieces of size $\\frac{1}{5}$ does it take to build $4$ wholes?',
      choices: ['$20$', '$9$', '$5$', '$4$'],
      answer: 0,
      solution:
        'Each whole holds $5$ fifth-sized pieces, so $4$ wholes hold $4 \\times 5 = 20$ pieces. In symbols: $4 = \\frac{20}{5}$. Adding to get $9$ mixes up the two numbers instead of grouping with them.',
    },
    {
      q: 'It takes $24$ pieces of size $\\frac{1}{8}$ to build how many wholes?',
      choices: ['$8$', '$24$', '$3$', '$192$'],
      answer: 2,
      solution:
        'Every $8$ pieces make one whole, so $24$ pieces make $24 \\div 8 = 3$ wholes. Written as a fraction, $\\frac{24}{8} = 3$. Multiplying to get $192$ goes the wrong direction — the pieces are smaller than a whole, so the count of wholes must be smaller than the count of pieces.',
    },
    {
      q: 'Nadia measures out $2$ whole cups of rice using a scoop that holds $\\frac{1}{7}$ cup. How many scoops does she use?',
      choices: ['$7$', '$9$', '$2$', '$14$'],
      answer: 3,
      solution:
        'One cup takes $7$ scoops, so two cups take $2 \\times 7 = 14$ scoops. In fraction language, $2 = \\frac{14}{7}$.',
    },
  ],
  // p8 — telling whole-number fractions apart from the rest
  [
    {
      q: 'Three of these fractions are whole numbers and one is not. Which one is not?',
      choices: ['$\\frac{22}{5}$', '$\\frac{20}{5}$', '$\\frac{35}{5}$', '$\\frac{45}{5}$'],
      answer: 0,
      solution:
        'Divide each by $5$: $\\frac{20}{5} = 4$, $\\frac{35}{5} = 7$, and $\\frac{45}{5} = 9$ all come out evenly. But $22$ is not a multiple of $5$ — it sits between $20$ and $25$ — so $\\frac{22}{5}$ lands between $4$ and $5$.',
    },
    {
      q: 'Which of these fractions IS a whole number?',
      choices: ['$\\frac{30}{7}$', '$\\frac{42}{7}$', '$\\frac{38}{7}$', '$\\frac{45}{7}$'],
      answer: 1,
      solution:
        'Run through the multiples of $7$: $28$, $35$, $42$, $49$. Only $42$ appears on the list, and $\\frac{42}{7} = 6$. The other three tops fall between multiples of $7$, so those fractions are not whole numbers.',
    },
    {
      q: 'For which value of $n$ is $\\frac{n}{6}$ a whole number?',
      choices: ['$16$', '$26$', '$54$', '$46$'],
      answer: 2,
      solution:
        'You need a numerator that is a multiple of $6$. Ending in a $6$ is not enough! Check by dividing: $54 = 6 \\times 9$, so $\\frac{54}{6} = 9$. Meanwhile $16$, $26$, and $46$ all leave a remainder.',
    },
  ],
  // p9 — tick marks when the line runs past 1
  [
    {
      q: 'The space from $0$ to $3$ is split into $9$ equal hops. What number is at the $7$th tick mark after $0$?',
      choices: ['$\\frac{7}{3}$', '$\\frac{7}{9}$', '$\\frac{9}{7}$', '$\\frac{3}{7}$'],
      answer: 0,
      solution:
        'The hops cover a distance of $3$, not $1$, so each hop is $3 \\div 9 = \\frac{1}{3}$ — thirds, not ninths. Seven hops of size $\\frac{1}{3}$ reach $\\frac{7}{3}$, which is a little more than $2$. Answering $\\frac{7}{9}$ forgets that the line runs all the way to $3$.',
    },
    {
      q: 'The space from $0$ to $2$ is split into $10$ equal hops. What number is at the $7$th tick mark after $0$?',
      choices: ['$\\frac{7}{10}$', '$\\frac{10}{7}$', '$\\frac{7}{5}$', '$\\frac{5}{7}$'],
      answer: 2,
      solution:
        'Each hop is $2 \\div 10 = \\frac{1}{5}$, because the ten hops share a distance of $2$. Seven of them reach $\\frac{7}{5}$, just past $1$ — and indeed the $5$th tick is $1$, so the $7$th must be bigger.',
    },
    {
      q: 'The space from $0$ to $4$ is split into $8$ equal hops. Which tick mark after $0$ lands exactly on the number $3$?',
      choices: ['The $3$rd', 'The $12$th', 'The $8$th', 'The $6$th'],
      answer: 3,
      solution:
        'Each hop is $4 \\div 8 = \\frac{1}{2}$. To travel a distance of $3$ in half-sized hops you need $3 \\div \\frac{1}{2} = 6$ hops, so the $6$th tick mark is at $3$. (The $8$th tick is the far end, at $4$.)',
    },
  ],
  // p10 — halving a fraction on the number line
  [
    {
      q: 'Which number is exactly halfway between $0$ and $\\frac{1}{3}$?',
      choices: ['$\\frac{2}{3}$', '$\\frac{1}{6}$', '$\\frac{1}{9}$', '$\\frac{1}{12}$'],
      answer: 1,
      solution:
        'Halfway to $\\frac{1}{3}$ means half of $\\frac{1}{3}$. Cutting each third into two equal parts turns the whole into $6$ pieces, so the midpoint is $\\frac{1}{6}$. Check: two hops of $\\frac{1}{6}$ make $\\frac{2}{6}$, which is $\\frac{1}{3}$. ✓',
    },
    {
      q: 'Which number is exactly halfway between $\\frac{1}{4}$ and $\\frac{3}{4}$?',
      choices: ['$1$', '$\\frac{3}{16}$', '$\\frac{1}{2}$', '$\\frac{5}{8}$'],
      answer: 2,
      solution:
        'The gap from $\\frac{1}{4}$ to $\\frac{3}{4}$ is two quarter-sized hops, so the midpoint is one hop in: $\\frac{1}{4} + \\frac{1}{4} = \\frac{2}{4} = \\frac{1}{2}$. Adding the two ends without halving gives $1$, and $\\frac{5}{8}$ is the midpoint of $\\frac{1}{2}$ and $\\frac{3}{4}$ instead.',
    },
    {
      q: 'Two hops of the same size take you from $0$ to $\\frac{1}{5}$. How big is each hop?',
      choices: ['$\\frac{2}{5}$', '$\\frac{1}{5}$', '$\\frac{1}{7}$', '$\\frac{1}{10}$'],
      answer: 3,
      solution:
        'Each hop is half of $\\frac{1}{5}$. Splitting every fifth in two gives $10$ pieces in the whole, so one hop is $\\frac{1}{10}$. Check: $\\frac{1}{10} + \\frac{1}{10} = \\frac{2}{10} = \\frac{1}{5}$. ✓ Choosing $\\frac{2}{5}$ doubles instead of halving.',
    },
  ],
]

const s42 = [
  // p1 — product of two unit fractions
  [
    {
      q: 'Compute $\\frac{1}{4} \\times \\frac{1}{5}$.',
      choices: ['$\\frac{2}{9}$', '$\\frac{1}{20}$', '$\\frac{1}{9}$', '$\\frac{5}{4}$'],
      answer: 1,
      solution:
        'Tops together and bottoms together: $\\frac{1 \\times 1}{4 \\times 5} = \\frac{1}{20}$. Adding straight across would give $\\frac{2}{9}$, which is not a rule for anything — multiplication multiplies both layers.',
    },
    {
      q: 'Compute $\\frac{1}{3} \\times \\frac{1}{7}$.',
      choices: ['$\\frac{1}{10}$', '$\\frac{2}{21}$', '$\\frac{1}{21}$', '$\\frac{3}{7}$'],
      answer: 2,
      solution:
        'Multiply both layers: $\\frac{1 \\times 1}{3 \\times 7} = \\frac{1}{21}$. Adding the bottoms gives $\\frac{1}{10}$ and adding the tops gives $\\frac{2}{21}$ — both mix addition into a multiplication.',
    },
    {
      q: 'Half of a pie is left over, and Mira eats $\\frac{1}{5}$ of what is left. What fraction of the whole pie did Mira eat?',
      choices: ['$\\frac{2}{7}$', '$\\frac{7}{10}$', '$\\frac{1}{7}$', '$\\frac{1}{10}$'],
      answer: 3,
      solution:
        '"Of" means multiply: $\\frac{1}{5} \\times \\frac{1}{2} = \\frac{1}{10}$. Picture it — cutting each half into $5$ equal slivers makes $10$ slivers in the whole pie, and Mira eats one of them. (Adding the fractions answers a different question entirely.)',
    },
  ],
  // p2 — product of two ordinary fractions
  [
    {
      q: 'Compute $\\frac{2}{5} \\times \\frac{4}{9}$.',
      choices: ['$\\frac{8}{45}$', '$\\frac{3}{7}$', '$\\frac{2}{15}$', '$\\frac{9}{10}$'],
      answer: 0,
      solution:
        'Multiply the tops and multiply the bottoms: $\\frac{2 \\times 4}{5 \\times 9} = \\frac{8}{45}$. Nothing cancels, since $8$ and $45$ share no factor. Adding straight across gives $\\frac{6}{14} = \\frac{3}{7}$, and flipping the second fraction gives $\\frac{9}{10}$ — neither belongs here.',
    },
    {
      q: 'Compute $\\frac{5}{8} \\times \\frac{3}{7}$.',
      choices: ['$\\frac{8}{15}$', '$\\frac{15}{56}$', '$\\frac{1}{7}$', '$\\frac{35}{24}$'],
      answer: 1,
      solution:
        'Both layers multiply: $\\frac{5 \\times 3}{8 \\times 7} = \\frac{15}{56}$. Check that it is reduced — $15 = 3 \\times 5$ and $56 = 2^3 \\times 7$ share nothing. Adding straight across would give $\\frac{8}{15}$, which is bigger than either factor and so cannot be right.',
    },
    {
      q: 'A rectangle measures $\\frac{4}{7}$ metre by $\\frac{2}{3}$ metre. What is its area, in square metres?',
      choices: ['$\\frac{3}{5}$', '$\\frac{26}{21}$', '$\\frac{52}{21}$', '$\\frac{8}{21}$'],
      answer: 3,
      solution:
        'Area is length times width: $\\frac{4}{7} \\times \\frac{2}{3} = \\frac{8}{21}$. The other choices are the sum of the sides ($\\frac{26}{21}$), the perimeter ($\\frac{52}{21}$), and what you get by adding straight across ($\\frac{6}{10} = \\frac{3}{5}$).',
    },
  ],
  // p3 — a unit fraction of a whole number
  [
    {
      q: 'What is $\\frac{1}{3}$ of $27$?',
      choices: ['$9$', '$3$', '$81$', '$24$'],
      answer: 0,
      solution:
        '"Of" means multiply: $\\frac{1}{3} \\times 27 = \\frac{27}{3} = 9$. Splitting $27$ into $3$ equal shares puts $9$ in each share. Multiplying by $3$ gives $81$, which is three copies rather than one third.',
    },
    {
      q: 'What is $\\frac{1}{8}$ of $56$?',
      choices: ['$8$', '$48$', '$7$', '$448$'],
      answer: 2,
      solution:
        'Divide by the bottom: $\\frac{1}{8} \\times 56 = \\frac{56}{8} = 7$. One eighth of a pile of $56$ leaves you with $7$. Subtracting the $8$ gives $48$ and multiplying by it gives $448$ — a fraction of a number must be SMALLER than the number.',
    },
    {
      q: 'One third of a number is $12$. What is the number?',
      choices: ['$4$', '$15$', '$9$', '$36$'],
      answer: 3,
      solution:
        'Taking a third divides by $3$, so undo it by multiplying by $3$: the number is $12 \\times 3 = 36$. Check: $\\frac{1}{3}$ of $36$ is $12$. ✓ Dividing again gives $4$, which shrinks the number instead of restoring it.',
    },
  ],
  // p4 — reciprocals multiply to 1
  [
    {
      q: 'Chen multiplies $\\frac{5}{7}$ by another fraction and gets exactly $1$. Which fraction did he use?',
      choices: ['$\\frac{7}{5}$', '$\\frac{5}{7}$', '$\\frac{25}{49}$', '$1$'],
      answer: 0,
      solution:
        'To get a product of $1$ you need the reciprocal — the same fraction turned upside down. Flipping $\\frac{5}{7}$ gives $\\frac{7}{5}$, and $\\frac{5}{7} \\times \\frac{7}{5} = \\frac{35}{35} = 1$. ✓ Multiplying by itself gives $\\frac{25}{49}$ instead.',
    },
    {
      q: 'Compute $\\frac{9}{4} \\times \\frac{4}{9}$.',
      choices: ['$\\frac{81}{16}$', '$0$', '$1$', '$\\frac{16}{81}$'],
      answer: 2,
      solution:
        'The $9$s cancel and the $4$s cancel, leaving $\\frac{36}{36} = 1$. These two fractions are reciprocals, and reciprocals always multiply to $1$ no matter how big or small they look.',
    },
    {
      q: 'Compute $\\frac{3}{10} \\times \\frac{10}{3} \\times \\frac{2}{5}$.',
      choices: ['$1$', '$\\frac{5}{2}$', '$\\frac{3}{25}$', '$\\frac{2}{5}$'],
      answer: 3,
      solution:
        'Spot the reciprocal pair first: $\\frac{3}{10} \\times \\frac{10}{3} = 1$. Multiplying by $1$ changes nothing, so the whole product is just $\\frac{2}{5}$. Stopping after the pair gives $1$, and skipping the pair entirely gives $\\frac{3}{10} \\times \\frac{2}{5} = \\frac{3}{25}$.',
    },
  ],
  // p5 — a fraction times a whole number
  [
    {
      q: 'Compute $\\frac{3}{4} \\times 20$.',
      choices: ['$15$', '$5$', '$60$', '$\\frac{80}{3}$'],
      answer: 0,
      solution:
        'Divide by the bottom first: $20 \\div 4 = 5$, which is one quarter. Then multiply by the top: $3 \\times 5 = 15$. Stopping at $5$ gives only one quarter, and $60$ forgets to divide at all.',
    },
    {
      q: 'Compute $\\frac{2}{7} \\times 21$.',
      choices: ['$3$', '$6$', '$42$', '$\\frac{147}{2}$'],
      answer: 1,
      solution:
        'One seventh of $21$ is $21 \\div 7 = 3$, so two sevenths is $2 \\times 3 = 6$. Choosing $3$ takes just one seventh, and $42$ multiplies by the top while forgetting the bottom.',
    },
    {
      q: 'A jar holds $36$ marbles, and $\\frac{5}{9}$ of them are blue. How many blue marbles are in the jar?',
      choices: ['$4$', '$45$', '$20$', '$16$'],
      answer: 2,
      solution:
        'One ninth of $36$ is $4$, so five ninths is $5 \\times 4 = 20$ blue marbles. The leftover $16$ marbles are the ones that are NOT blue — a good check, since $20 + 16 = 36$. ✓',
    },
  ],
  // p6 — cancel before multiplying
  [
    {
      q: 'Compute $\\frac{6}{7} \\times \\frac{14}{15}$.',
      choices: ['$\\frac{10}{11}$', '$\\frac{4}{5}$', '$\\frac{45}{49}$', '$\\frac{5}{4}$'],
      answer: 1,
      solution:
        'Cancel first and the numbers stay small: the $7$ divides into the $14$, leaving $2$; the $6$ and the $15$ share a factor of $3$, becoming $2$ and $5$. What is left is $\\frac{2}{1} \\times \\frac{2}{5} = \\frac{4}{5}$. Multiplying straight through gives $\\frac{84}{105}$, which reduces to the same thing.',
    },
    {
      q: 'Compute $\\frac{8}{15} \\times \\frac{5}{12}$.',
      choices: ['$\\frac{13}{27}$', '$\\frac{40}{27}$', '$\\frac{2}{9}$', '$\\frac{32}{25}$'],
      answer: 2,
      solution:
        'Cancel the $5$ into the $15$ (leaving $3$) and the $4$ out of the $8$ and $12$ (leaving $2$ and $3$). That gives $\\frac{2}{3} \\times \\frac{1}{3} = \\frac{2}{9}$. Adding straight across gives $\\frac{13}{27}$, and flipping the second fraction gives $\\frac{32}{25}$ — a division answer, not a multiplication one.',
    },
    {
      q: 'Compute $\\frac{9}{20} \\times \\frac{25}{27}$.',
      choices: ['$\\frac{34}{47}$', '$\\frac{243}{500}$', '$\\frac{12}{5}$', '$\\frac{5}{12}$'],
      answer: 3,
      solution:
        'Hunt for shared factors across the two fractions: $9$ and $27$ share $9$, becoming $1$ and $3$; $20$ and $25$ share $5$, becoming $4$ and $5$. The leftovers give $\\frac{1}{4} \\times \\frac{5}{3} = \\frac{5}{12}$. Straight multiplication agrees: $\\frac{225}{540} = \\frac{5}{12}$.',
    },
  ],
  // p7 — cancel across a chain with a whole number in it
  [
    {
      q: 'Compute $\\frac{3}{7} \\times \\frac{7}{9} \\times 6$.',
      choices: ['$2$', '$\\frac{1}{3}$', '$18$', '$\\frac{1}{18}$'],
      answer: 0,
      solution:
        'Cancel across the whole chain: the $7$s cancel, and the $3$ cancels into the $9$ to leave a $3$ below. That leaves $\\frac{1}{3} \\times 6 = 2$. Stopping before the $6$ gives $\\frac{1}{3}$, and putting the $6$ on the bottom instead gives $\\frac{1}{18}$.',
    },
    {
      q: 'Compute $\\frac{5}{8} \\times \\frac{4}{15} \\times 6$.',
      choices: ['$\\frac{1}{6}$', '$1$', '$\\frac{1}{36}$', '$36$'],
      answer: 1,
      solution:
        'Cancel the $5$ into the $15$ and the $4$ into the $8$: what is left is $\\frac{1}{2} \\times \\frac{1}{3} \\times 6 = \\frac{6}{6} = 1$. The whole long product collapses to a single $1$.',
    },
    {
      q: 'Compute $\\frac{3}{10} \\times 25 \\times \\frac{2}{9}$.',
      choices: ['$\\frac{1}{15}$', '$\\frac{15}{2}$', '$\\frac{135}{4}$', '$\\frac{5}{3}$'],
      answer: 3,
      solution:
        'Write the whole chain as one fraction: $\\frac{3 \\times 25 \\times 2}{10 \\times 9} = \\frac{150}{90}$. Cancelling as you go is faster — the $3$ cancels into the $9$, and $25$ and $10$ share a $5$ — and either route lands on $\\frac{5}{3}$. Dropping the $25$ gives $\\frac{1}{15}$, and dropping the last fraction gives $\\frac{15}{2}$.',
    },
  ],
  // p8 — a fraction OF a fraction
  [
    {
      q: 'What is $\\frac{3}{5}$ of $\\frac{10}{9}$?',
      choices: ['$\\frac{2}{3}$', '$\\frac{13}{14}$', '$\\frac{27}{50}$', '$\\frac{77}{45}$'],
      answer: 0,
      solution:
        '"Of" means multiply: $\\frac{3}{5} \\times \\frac{10}{9}$. Cancel the $5$ into the $10$ and the $3$ into the $9$: $\\frac{1}{1} \\times \\frac{2}{3} = \\frac{2}{3}$. Adding the two fractions instead gives $\\frac{77}{45}$, which is bigger than $1$ — clearly not a part of a part.',
    },
    {
      q: 'What is $\\frac{4}{5}$ of $\\frac{15}{16}$?',
      choices: ['$\\frac{19}{21}$', '$\\frac{64}{75}$', '$\\frac{3}{4}$', '$\\frac{4}{3}$'],
      answer: 2,
      solution:
        'Multiply and cancel: the $5$ divides into the $15$ leaving $3$, and the $4$ divides into the $16$ leaving $4$. The result is $\\frac{1}{1} \\times \\frac{3}{4} = \\frac{3}{4}$. Taking a part of a part must give something smaller than both, which rules out $\\frac{4}{3}$ immediately.',
    },
    {
      q: 'Devi has $\\frac{9}{10}$ of a metre of ribbon and uses $\\frac{4}{7}$ of it. How many metres of ribbon does she use?',
      choices: ['$\\frac{13}{17}$', '$\\frac{63}{40}$', '$\\frac{103}{70}$', '$\\frac{18}{35}$'],
      answer: 3,
      solution:
        'Four sevenths OF her ribbon means $\\frac{4}{7} \\times \\frac{9}{10} = \\frac{36}{70}$, which reduces to $\\frac{18}{35}$. The other choices come from adding straight across, from flipping the second fraction, and from adding the two fractions properly — all answers to questions nobody asked.',
    },
  ],
  // p9 — a long chain that telescopes
  [
    {
      q: 'Compute $\\frac{1}{3} \\times \\frac{3}{5} \\times \\frac{5}{7} \\times \\frac{7}{9}$.',
      choices: ['$\\frac{1}{9}$', '$\\frac{1}{945}$', '$\\frac{7}{9}$', '$\\frac{2}{3}$'],
      answer: 0,
      solution:
        'Every bottom is repeated on the next top: the $3$s cancel, the $5$s cancel, the $7$s cancel. Only the first $1$ and the final $9$ escape, so the answer is $\\frac{1}{9}$. Forgetting the tops would leave $\\frac{1}{945}$, the product of all four denominators.',
    },
    {
      q: 'Compute $\\frac{2}{3} \\times \\frac{3}{4} \\times \\frac{4}{5} \\times \\frac{5}{6} \\times \\frac{6}{7}$.',
      choices: ['$\\frac{6}{7}$', '$\\frac{2}{7}$', '$\\frac{1}{7}$', '$\\frac{4}{5}$'],
      answer: 1,
      solution:
        'The $3$, $4$, $5$, and $6$ each appear once on top and once on the bottom, so they all cancel in pairs. The survivors are the very first top, $2$, and the very last bottom, $7$: the answer is $\\frac{2}{7}$. Answering $\\frac{1}{7}$ forgets that the leading numerator is $2$, not $1$.',
    },
    {
      q: 'In the product $\\frac{1}{2} \\times \\frac{2}{3} \\times \\frac{3}{4} \\times \\cdots \\times \\frac{29}{30}$, each fraction has one whole number on top and the next one below. What does the product equal?',
      choices: ['$\\frac{29}{30}$', '$\\frac{1}{29}$', '$\\frac{1}{30}$', '$\\frac{1}{2}$'],
      answer: 2,
      solution:
        'You never have to multiply anything out. Each denominator reappears as the very next numerator, so every number from $2$ through $29$ cancels itself away. What is left is the first numerator over the last denominator: $\\frac{1}{30}$.',
    },
  ],
  // p10 — stacked "of" phrases
  [
    {
      q: 'What is a third of a quarter of $84$?',
      choices: ['$7$', '$28$', '$21$', '$12$'],
      answer: 0,
      solution:
        'Stack the fractions: $\\frac{1}{3} \\times \\frac{1}{4} = \\frac{1}{12}$, so you want one twelfth of $84$, which is $84 \\div 12 = 7$. Doing only one of the two steps leaves you at $28$ or $21$.',
    },
    {
      q: 'What is half of a fifth of $120$?',
      choices: ['$60$', '$12$', '$24$', '$10$'],
      answer: 1,
      solution:
        'Half of a fifth is $\\frac{1}{2} \\times \\frac{1}{5} = \\frac{1}{10}$, and one tenth of $120$ is $12$. You can also do it in two hops: a fifth of $120$ is $24$, and half of that is $12$.',
    },
    {
      q: 'What is two thirds of a half of $72$?',
      choices: ['$36$', '$48$', '$24$', '$12$'],
      answer: 2,
      solution:
        'Take the inner "of" first: a half of $72$ is $36$. Then two thirds of $36$ is $2 \\times 12 = 24$. Stacking the fractions works too: $\\frac{2}{3} \\times \\frac{1}{2} = \\frac{1}{3}$, and a third of $72$ is $24$. ✓',
    },
  ],
]

const s43 = [
  // p1 — dividing one unit fraction by another
  [
    {
      q: 'Compute $\\frac{1}{3} \\div \\frac{1}{6}$.',
      choices: ['$2$', '$\\frac{1}{18}$', '$\\frac{1}{2}$', '$18$'],
      answer: 0,
      solution:
        'Flip the divisor and multiply: $\\frac{1}{3} \\times \\frac{6}{1} = \\frac{6}{3} = 2$. It checks out — exactly two sixth-sized pieces fit inside one third. Forgetting to flip gives the far-too-small $\\frac{1}{18}$.',
    },
    {
      q: 'Compute $\\frac{3}{4} \\div \\frac{1}{4}$.',
      choices: ['$\\frac{3}{16}$', '$\\frac{1}{3}$', '$3$', '$\\frac{4}{3}$'],
      answer: 2,
      solution:
        'Flip and multiply: $\\frac{3}{4} \\times \\frac{4}{1} = \\frac{12}{4} = 3$. Common sense agrees: three quarter-sized pieces fit inside three quarters. Multiplying without flipping gives $\\frac{3}{16}$.',
    },
    {
      q: 'How many $\\frac{1}{8}$-sized pieces fit inside $\\frac{1}{2}$?',
      choices: ['$\\frac{1}{16}$', '$\\frac{1}{4}$', '$16$', '$4$'],
      answer: 3,
      solution:
        '"How many fit" is a division: $\\frac{1}{2} \\div \\frac{1}{8} = \\frac{1}{2} \\times 8 = 4$. There are $8$ eighths in a whole, and half of them — $4$ — sit inside one half.',
    },
  ],
  // p2 — which fraction gets flipped
  [
    {
      q: 'To compute $\\frac{5}{8} \\div \\frac{7}{3}$, what should you multiply $\\frac{5}{8}$ by?',
      choices: ['$\\frac{7}{3}$', '$\\frac{3}{7}$', '$\\frac{8}{5}$', '$\\frac{5}{8}$'],
      answer: 1,
      solution:
        'You multiply by the reciprocal of the DIVISOR. The divisor is $\\frac{7}{3}$, and flipping it gives $\\frac{3}{7}$. Choosing $\\frac{8}{5}$ flips the wrong fraction — the one being divided never turns over.',
    },
    {
      q: 'Rewriting $\\frac{4}{9} \\div \\frac{2}{5}$ as a multiplication gives which of these?',
      choices: [
        '$\\frac{9}{4} \\times \\frac{2}{5}$',
        '$\\frac{4}{9} \\times \\frac{2}{5}$',
        '$\\frac{4}{9} \\times \\frac{5}{2}$',
        '$\\frac{9}{4} \\times \\frac{5}{2}$',
      ],
      answer: 2,
      solution:
        'Exactly one fraction flips, and it is the second one: $\\frac{4}{9} \\div \\frac{2}{5} = \\frac{4}{9} \\times \\frac{5}{2}$. Flipping neither leaves the division unchanged in disguise, and flipping both undoes the point of the rule.',
    },
    {
      q: 'Priya writes $\\frac{3}{7} \\div \\frac{6}{5} = \\frac{7}{3} \\times \\frac{6}{5}$. What went wrong?',
      choices: [
        'Nothing — her rewriting is correct',
        'She should have flipped both fractions',
        'She should not have flipped either fraction',
        'She flipped the first fraction instead of the second',
      ],
      answer: 3,
      solution:
        'The flip belongs to the divisor, the fraction you are dividing BY. Priya turned $\\frac{3}{7}$ over and left $\\frac{6}{5}$ alone; the correct rewriting is $\\frac{3}{7} \\times \\frac{5}{6}$. Her version gives a number more than four times too big.',
    },
  ],
  // p3 — a whole number divided by a unit fraction
  [
    {
      q: 'Compute $6 \\div \\frac{1}{5}$.',
      choices: ['$30$', '$\\frac{6}{5}$', '$\\frac{5}{6}$', '$11$'],
      answer: 0,
      solution:
        'Flip $\\frac{1}{5}$ to get $5$, then multiply: $6 \\times 5 = 30$. Each whole holds $5$ fifth-sized pieces, so $6$ wholes hold $30$ of them. Dividing by a number smaller than $1$ always makes the answer bigger.',
    },
    {
      q: 'Compute $9 \\div \\frac{1}{4}$.',
      choices: ['$\\frac{9}{4}$', '$36$', '$\\frac{4}{9}$', '$13$'],
      answer: 1,
      solution:
        'The reciprocal of $\\frac{1}{4}$ is $4$, so $9 \\div \\frac{1}{4} = 9 \\times 4 = 36$. Answering $\\frac{9}{4}$ would be $9 \\div 4$ — dividing by the whole number instead of by the fraction.',
    },
    {
      q: 'How many $\\frac{1}{6}$-cup scoops of rice does it take to fill a $7$-cup jar?',
      choices: ['$\\frac{7}{6}$', '$13$', '$\\frac{6}{7}$', '$42$'],
      answer: 3,
      solution:
        'Ask how many sixths fit in $7$: that is $7 \\div \\frac{1}{6} = 7 \\times 6 = 42$ scoops. A sanity check confirms it — $42$ scoops of $\\frac{1}{6}$ cup make $\\frac{42}{6} = 7$ cups. ✓',
    },
  ],
  // p4 — a fraction divided by a whole number
  [
    {
      q: 'Compute $\\frac{5}{6} \\div 3$.',
      choices: ['$\\frac{5}{2}$', '$\\frac{5}{18}$', '$\\frac{18}{5}$', '$\\frac{2}{5}$'],
      answer: 1,
      solution:
        'Write $3$ as $\\frac{3}{1}$ and flip it: $\\frac{5}{6} \\times \\frac{1}{3} = \\frac{5}{18}$. Dividing makes the pieces three times smaller, so the answer must be smaller than $\\frac{5}{6}$ — which rules out $\\frac{5}{2}$ and $\\frac{18}{5}$ at a glance.',
    },
    {
      q: 'Compute $\\frac{4}{7} \\div 5$.',
      choices: ['$\\frac{20}{7}$', '$\\frac{35}{4}$', '$\\frac{4}{35}$', '$\\frac{7}{20}$'],
      answer: 2,
      solution:
        'Dividing by $5$ is multiplying by $\\frac{1}{5}$: $\\frac{4}{7} \\times \\frac{1}{5} = \\frac{4}{35}$. Multiplying by $5$ instead gives $\\frac{20}{7}$, which is bigger than $1$ — a red flag when you started below $1$ and divided.',
    },
    {
      q: 'Three friends share $\\frac{6}{7}$ of a pizza equally. What fraction of the pizza does each friend get?',
      choices: ['$\\frac{18}{7}$', '$\\frac{7}{18}$', '$\\frac{3}{7}$', '$\\frac{2}{7}$'],
      answer: 3,
      solution:
        'Sharing equally among $3$ is division: $\\frac{6}{7} \\div 3 = \\frac{6}{7} \\times \\frac{1}{3} = \\frac{6}{21} = \\frac{2}{7}$. Check: three shares of $\\frac{2}{7}$ rebuild $\\frac{6}{7}$. ✓ Splitting between two people instead would give $\\frac{3}{7}$.',
    },
  ],
  // p5 — a number divided by itself
  [
    {
      q: 'Compute $\\frac{7}{9} \\div \\frac{7}{9}$.',
      choices: ['$1$', '$\\frac{49}{81}$', '$\\frac{81}{49}$', '$0$'],
      answer: 0,
      solution:
        'Exactly one copy of $\\frac{7}{9}$ fits inside $\\frac{7}{9}$, so the answer is $1$. Flip-and-multiply confirms it: $\\frac{7}{9} \\times \\frac{9}{7} = \\frac{63}{63} = 1$. Forgetting to flip gives the square, $\\frac{49}{81}$.',
    },
    {
      q: 'A fraction that is not zero is divided by itself. What is the result?',
      choices: ['$0$', '$1$', 'Its square', 'Its reciprocal'],
      answer: 1,
      solution:
        'Division asks how many copies fit, and exactly one copy of any number fits inside itself — so the answer is always $1$. The flip-and-multiply rule says the same thing: a fraction times its own reciprocal is $1$.',
    },
    {
      q: 'For which of these is the answer NOT equal to $1$?',
      choices: [
        '$\\frac{3}{8} \\div \\frac{3}{8}$',
        '$\\frac{2}{5} \\times \\frac{5}{2}$',
        '$\\frac{4}{7} \\times \\frac{4}{7}$',
        '$\\frac{9}{4} \\div \\frac{9}{4}$',
      ],
      answer: 2,
      solution:
        'Two of these divide a number by itself, and one multiplies a fraction by its reciprocal — all three give $1$. But $\\frac{4}{7} \\times \\frac{4}{7} = \\frac{16}{49}$ multiplies a fraction by ITSELF rather than by its flip, and $\\frac{16}{49}$ is well under $1$.',
    },
  ],
  // p6 — "how many fit" in a real situation
  [
    {
      q: 'A ribbon $10$ metres long is cut into pieces each $\\frac{2}{5}$ metre long. How many pieces are there?',
      choices: ['$25$', '$4$', '$50$', '$20$'],
      answer: 0,
      solution:
        'Ask how many $\\frac{2}{5}$s fit in $10$: that is $10 \\div \\frac{2}{5} = 10 \\times \\frac{5}{2} = 25$ pieces. Multiplying instead gives $4$, which answers "how long is two fifths of the ribbon" — a different question.',
    },
    {
      q: 'A jug holds $9$ litres of juice. How many $\\frac{3}{5}$-litre glasses can be filled from it?',
      choices: ['$\\frac{27}{5}$', '$15$', '$\\frac{5}{27}$', '$45$'],
      answer: 1,
      solution:
        'Divide: $9 \\div \\frac{3}{5} = 9 \\times \\frac{5}{3} = \\frac{45}{3} = 15$ glasses. Check by going backwards: $15 \\times \\frac{3}{5} = 9$ litres. ✓ Forgetting the $3$ in the flip gives $45$.',
    },
    {
      q: 'A board $\\frac{7}{2}$ metres long is cut into pieces each $\\frac{7}{8}$ metre long. How many pieces are there?',
      choices: ['$\\frac{49}{16}$', '$\\frac{16}{49}$', '$\\frac{1}{4}$', '$4$'],
      answer: 3,
      solution:
        'Divide the whole length by one piece: $\\frac{7}{2} \\div \\frac{7}{8} = \\frac{7}{2} \\times \\frac{8}{7} = 4$. The $7$s cancel and $\\frac{8}{2} = 4$. A count of pieces must be a whole number bigger than $1$ here, since each piece is shorter than the board.',
    },
  ],
  // p7 — dividing two ordinary fractions
  [
    {
      q: 'Compute $\\frac{3}{5} \\div \\frac{9}{10}$.',
      choices: ['$\\frac{2}{3}$', '$\\frac{27}{50}$', '$\\frac{3}{2}$', '$\\frac{50}{27}$'],
      answer: 0,
      solution:
        'Flip and multiply: $\\frac{3}{5} \\times \\frac{10}{9}$. Cancel the $5$ into the $10$ and the $3$ into the $9$: $\\frac{1}{1} \\times \\frac{2}{3} = \\frac{2}{3}$. Choosing $\\frac{27}{50}$ means the flip was forgotten, and $\\frac{50}{27}$ comes from flipping the first fraction by mistake.',
    },
    {
      q: 'Compute $\\frac{5}{8} \\div \\frac{15}{4}$.',
      choices: ['$\\frac{75}{32}$', '$\\frac{32}{75}$', '$\\frac{1}{6}$', '$6$'],
      answer: 2,
      solution:
        'Flip the divisor: $\\frac{5}{8} \\times \\frac{4}{15}$. The $5$ cancels into the $15$ leaving $3$, and the $4$ cancels into the $8$ leaving $2$, so the result is $\\frac{1}{2} \\times \\frac{1}{3} = \\frac{1}{6}$. Dividing by a number bigger than $1$ shrinks you, so a small answer is expected.',
    },
    {
      q: 'Compute $\\frac{9}{10} \\div \\frac{3}{4}$.',
      choices: ['$\\frac{27}{40}$', '$\\frac{40}{27}$', '$\\frac{5}{6}$', '$\\frac{6}{5}$'],
      answer: 3,
      solution:
        'Flip and multiply: $\\frac{9}{10} \\times \\frac{4}{3}$. The $3$ cancels into the $9$ leaving $3$, and the $2$ cancels out of the $4$ and $10$, giving $\\frac{3}{5} \\times \\frac{2}{1} = \\frac{6}{5}$. Since $\\frac{3}{4}$ is smaller than $\\frac{9}{10}$, the answer must be bigger than $1$. ✓',
    },
  ],
  // p8 — complex fractions
  [
    {
      q: 'Simplify the complex fraction $\\frac{2/3}{4/7}$.',
      choices: ['$\\frac{7}{6}$', '$\\frac{8}{21}$', '$\\frac{6}{7}$', '$\\frac{21}{8}$'],
      answer: 0,
      solution:
        'The big bar is a division: $\\frac{2}{3} \\div \\frac{4}{7}$. Flip the bottom fraction and multiply: $\\frac{2}{3} \\times \\frac{7}{4} = \\frac{14}{12} = \\frac{7}{6}$. Multiplying without flipping gives $\\frac{8}{21}$.',
    },
    {
      q: 'Simplify the complex fraction $\\frac{3/8}{9/4}$.',
      choices: ['$\\frac{27}{32}$', '$\\frac{1}{6}$', '$6$', '$\\frac{32}{27}$'],
      answer: 1,
      solution:
        'Read the big bar as $\\frac{3}{8} \\div \\frac{9}{4}$, then flip the bottom: $\\frac{3}{8} \\times \\frac{4}{9}$. Cancel the $3$ into the $9$ and the $4$ into the $8$: $\\frac{1}{2} \\times \\frac{1}{3} = \\frac{1}{6}$.',
    },
    {
      q: 'Simplify the complex fraction $\\frac{5/6}{10/3}$.',
      choices: ['$\\frac{25}{9}$', '$4$', '$\\frac{1}{4}$', '$\\frac{9}{25}$'],
      answer: 2,
      solution:
        'The big bar means $\\frac{5}{6} \\div \\frac{10}{3}$, so flip the bottom: $\\frac{5}{6} \\times \\frac{3}{10}$. The $5$ cancels into the $10$ and the $3$ cancels into the $6$, leaving $\\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{4}$. Flipping the TOP fraction instead would give $\\frac{9}{25}$.',
    },
  ],
  // p9 — undoing a multiplication by dividing
  [
    {
      q: 'A number $y$ satisfies $y \\times \\frac{3}{4} = 9$. What is $y$?',
      choices: ['$\\frac{27}{4}$', '$12$', '$\\frac{4}{27}$', '$36$'],
      answer: 1,
      solution:
        'Undo the multiplication by dividing: $y = 9 \\div \\frac{3}{4} = 9 \\times \\frac{4}{3} = 12$. Check: $12 \\times \\frac{3}{4} = 9$. ✓ Multiplying by $\\frac{3}{4}$ instead gives $\\frac{27}{4}$, and $36$ forgets to divide by the $3$.',
    },
    {
      q: 'A number $t$ satisfies $\\frac{5}{6} \\times t = \\frac{10}{9}$. What is $t$?',
      choices: ['$\\frac{25}{27}$', '$\\frac{3}{4}$', '$\\frac{4}{3}$', '$\\frac{5}{18}$'],
      answer: 2,
      solution:
        'Divide both sides by $\\frac{5}{6}$: $t = \\frac{10}{9} \\div \\frac{5}{6} = \\frac{10}{9} \\times \\frac{6}{5} = \\frac{60}{45} = \\frac{4}{3}$. Check: $\\frac{5}{6} \\times \\frac{4}{3} = \\frac{20}{18} = \\frac{10}{9}$. ✓ Dividing the two the other way round gives $\\frac{3}{4}$.',
    },
    {
      q: 'Two thirds of the seats in a hall are filled, and that comes to $48$ seats. How many seats does the hall have altogether?',
      choices: ['$32$', '$96$', '$16$', '$72$'],
      answer: 3,
      solution:
        'The filled seats are $\\frac{2}{3}$ of the total, so the total is $48 \\div \\frac{2}{3} = 48 \\times \\frac{3}{2} = 72$. Check: two thirds of $72$ is $48$. ✓ Taking two thirds of $48$ gives $32$, which shrinks the number when it should grow.',
    },
  ],
  // p10 — nested divisions
  [
    {
      q: 'Compute $12 \\div \\left(\\frac{3}{4} \\div \\frac{1}{8}\\right)$.',
      choices: ['$2$', '$128$', '$\\frac{1}{2}$', '$72$'],
      answer: 0,
      solution:
        'Parentheses first: $\\frac{3}{4} \\div \\frac{1}{8} = \\frac{3}{4} \\times 8 = 6$, since six eighths fit inside three quarters. Then $12 \\div 6 = 2$. Ignoring the parentheses and dividing left to right gives $128$ instead.',
    },
    {
      q: 'Compute $\\left(\\frac{2}{3} \\div \\frac{1}{9}\\right) \\div 4$.',
      choices: ['$\\frac{1}{54}$', '$\\frac{3}{2}$', '$24$', '$\\frac{2}{3}$'],
      answer: 1,
      solution:
        'Do the parentheses first: $\\frac{2}{3} \\div \\frac{1}{9} = \\frac{2}{3} \\times 9 = 6$. Then divide by $4$: $6 \\div 4 = \\frac{6}{4} = \\frac{3}{2}$. Forgetting to flip inside the parentheses gives the tiny $\\frac{1}{54}$.',
    },
    {
      q: 'Compute $\\left(\\frac{5}{6} \\div \\frac{2}{3}\\right) \\div \\frac{5}{8}$.',
      choices: ['$\\frac{25}{72}$', '$\\frac{1}{2}$', '$\\frac{5}{4}$', '$2$'],
      answer: 3,
      solution:
        'Inside first: $\\frac{5}{6} \\div \\frac{2}{3} = \\frac{5}{6} \\times \\frac{3}{2} = \\frac{15}{12} = \\frac{5}{4}$. Now divide by $\\frac{5}{8}$: $\\frac{5}{4} \\times \\frac{8}{5} = 2$. Stopping at the parentheses leaves $\\frac{5}{4}$, and never flipping anything gives $\\frac{25}{72}$.',
    },
  ],
]

export default {
  book: 'prealgebra',
  number: 4,
  sections: {
    '4.1': s41,
    '4.2': s42,
    '4.3': s43,
  },
}
