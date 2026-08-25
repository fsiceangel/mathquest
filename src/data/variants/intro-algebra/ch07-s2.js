// Introduction to Algebra chapter 7 — variations for sections 7.3 and 7.4. All
// problems and solutions are original MathQuest content.
//
// House rules for this file:
//  - Every story was CLASSIFIED before any number was chosen. For 7.3 the
//    relation is written as an explicit constant — $k = \frac{z}{xy}$ for a
//    joint proportion, $k = \frac{zy}{x}$ for direct-with-one/inverse-with-the-
//    other — and that constant is shown holding for BOTH the given data and the
//    answer. For 7.4 the fixed quantity is named out loud: a fixed job split
//    among taps, machines or crews is INVERSE, while a steady rate running for a
//    stretch of time is DIRECT.
//  - Every key was re-derived from the question text alone and then checked
//    FORWARD through the story, never by re-reading the solution paragraph.
//  - Every combined-work item adds RATES, never times, and every combined answer
//    is checked to be FASTER than the quicker worker alone.
//  - Every item carries the WRONG-MODEL distractor: the number a student gets
//    from the opposite proportionality — reading $\frac{kx}{y}$ as $kxy$, adding
//    speeds where the travellers chase, subtracting them where they close, or
//    adding times where only rates may be added. The solution names it.
//  - Other distractors are named mistakes too — scaling for only one of the two
//    changes, forgetting a square, stopping at the constant, averaging the times,
//    or flipping a division. No two choices in an item share a VALUE.
//  - Story sanity: gears, crews and machines come out whole and positive, every
//    time and speed is positive, and money lands on a whole number of cents.

const s73 = [
  // p1 — evaluate a finished joint or mixed rule
  [
    {
      q: 'The rule is $z = 6xy$. What is $z$ when $x = 3$ and $y = 2$?',
      choices: ['$11$', '$9$', '$36$', '$18$'],
      answer: 2,
      solution:
        'Joint proportion multiplies everything: $z = 6 \\times 3 \\times 2 = 36$. Check the constant, which is $k = \\frac{z}{xy} = \\frac{36}{3 \\times 2} = 6$. ✓ (The choice $9$ is the WRONG MODEL — it reads the rule as $z = \\frac{6x}{y} = \\frac{18}{2}$, making $y$ inverse when the rule has it upstairs; the choice $18$ is $6x$, dropping $y$ altogether; the choice $11$ ADDS $6 + 3 + 2$, and proportion never adds.)',
    },
    {
      q: 'The rule is $z = \\frac{9x}{y}$. What is $z$ when $x = 8$ and $y = 6$?',
      choices: ['$432$', '$6.75$', '$23$', '$12$'],
      answer: 3,
      solution:
        'Multiply on top, then divide: $z = \\frac{9 \\times 8}{6} = \\frac{72}{6} = 12$. Check the constant, which for this shape is $k = \\frac{zy}{x} = \\frac{12 \\times 6}{8} = 9$. ✓ (The choice $432$ is the WRONG MODEL — it treats the rule as the joint proportion $z = 9xy$, multiplying by $y$ instead of dividing; the choice $6.75$ swaps the roles of $x$ and $y$, computing $\\frac{9 \\times 6}{8}$; the choice $23$ adds $9 + 8 + 6$.)',
    },
    {
      q: 'The rule is $z = 3xy$. If $z = 90$ and $x = 5$, what is $y$?',
      choices: ['$30$', '$6$', '$\\frac{1}{6}$', '$18$'],
      answer: 1,
      solution:
        'Substitute what you know: $90 = 3 \\times 5 \\times y = 15y$, so $y = 6$. Check it forward through the rule: $3 \\times 5 \\times 6 = 90$. ✓ (The choice $\\frac{1}{6}$ is the WRONG MODEL — it reads $z = \\frac{3x}{y}$, giving $90 = \\frac{15}{y}$, which makes $y$ tiny when the joint rule needs it to be $6$; the choice $30$ divides by $3$ and forgets to divide by $x$; the choice $18$ divides by $x$ and forgets the constant.)',
    },
  ],
  // p2 — one complete data set, solve for the constant
  [
    {
      q: 'Suppose $z = kxy$, and $z = 54$ when $x = 3$ and $y = 6$. What is $k$?',
      choices: ['$18$', '$972$', '$108$', '$3$'],
      answer: 3,
      solution:
        'The constant of a joint proportion is $k = \\frac{z}{xy} = \\frac{54}{3 \\times 6} = \\frac{54}{18} = 3$, so the rule is $z = 3xy$. Check it forward: $3 \\times 3 \\times 6 = 54$. ✓ (The choice $108$ is the WRONG MODEL — it uses $k = \\frac{zy}{x} = \\frac{54 \\times 6}{3}$, the constant for $z = \\frac{kx}{y}$, where $y$ is inverse; the choice $18$ stops at the product $xy$; the choice $972$ multiplies all three numbers instead of solving the equation for $k$.)',
    },
    {
      q: 'Suppose $z = kxy$, and $z = 3.5$ when $x = 2$ and $y = 7$. What is $k$?',
      choices: ['$12.25$', '$0.25$', '$14$', '$49$'],
      answer: 1,
      solution:
        'Divide the output by the product of the inputs: $k = \\frac{z}{xy} = \\frac{3.5}{2 \\times 7} = \\frac{3.5}{14} = 0.25$. Check it forward: $0.25 \\times 2 \\times 7 = 3.5$. ✓ A constant of proportionality is allowed to be less than $1$. (The choice $12.25$ is the WRONG MODEL, $k = \\frac{zy}{x} = \\frac{3.5 \\times 7}{2}$, which is the constant for the mixed rule $z = \\frac{kx}{y}$; the choice $14$ stops at the product $xy$; the choice $49$ multiplies $3.5 \\times 14$ instead of dividing.)',
    },
    {
      q: 'Suppose $z = \\frac{kx}{y}$, and $z = 15$ when $x = 4$ and $y = 6$. What is $k$?',
      choices: ['$22.5$', '$0.625$', '$10$', '$360$'],
      answer: 0,
      solution:
        'Clear the fraction first: $15 = \\frac{4k}{6}$ gives $90 = 4k$, so $k = 22.5$. Said directly, $k = \\frac{zy}{x} = \\frac{15 \\times 6}{4} = 22.5$. Check it forward: $\\frac{22.5 \\times 4}{6} = \\frac{90}{6} = 15$. ✓ (The choice $0.625$ is the WRONG MODEL — it uses the joint constant $k = \\frac{z}{xy} = \\frac{15}{24}$, treating $y$ as direct when the rule has it in the denominator; the choice $10$ swaps $x$ and $y$, computing $\\frac{zx}{y}$; the choice $360$ multiplies all three numbers.)',
    },
  ],
  // p3 — read the shape of a rule off its wording, and back again
  [
    {
      q: 'Which formula says "$w$ varies jointly with $p$ and $q$"?',
      choices: ['$w = \\frac{kp}{q}$', '$w = kpq$', '$w = \\frac{k}{pq}$', '$w = kp + kq$'],
      answer: 1,
      solution:
        'Jointly with both inputs means both sit in the numerator, multiplied together: $w = kpq$, or equivalently $k = \\frac{w}{pq}$. Doubling either one doubles $w$. (The choice $\\frac{kp}{q}$ is the WRONG MODEL for $q$ — direct with $p$ but INVERSE with $q$, so a bigger $q$ would shrink $w$; the choice $\\frac{k}{pq}$ is inverse with both; the choice $kp + kq$ adds, and every proportion in this chapter multiplies.)',
    },
    {
      q: 'The rule $R = \\frac{ks}{t}$ describes which relationship?',
      choices: [
        '$R$ varies jointly with $s$ and $t$',
        '$R$ varies inversely with both $s$ and $t$',
        '$R$ varies directly with $s$ and inversely with $t$',
        '$R$ varies directly with $t$ and inversely with $s$',
      ],
      answer: 2,
      solution:
        'Read the fraction: $s$ is upstairs, so a bigger $s$ pushes $R$ up — that is direct. $t$ is downstairs, so a bigger $t$ drags $R$ down — that is inverse. The constant is $k = \\frac{Rt}{s}$. (The first choice is the WRONG MODEL, joint in both, which would need $t$ in the numerator; the last choice has the two roles exactly reversed; "inversely with both" would be $R = \\frac{k}{st}$.)',
    },
    {
      q: 'Which formula says "$V$ varies jointly with $x$ and $y$ and inversely with $z$"?',
      choices: ['$V = kxyz$', '$V = \\frac{kxz}{y}$', '$V = \\frac{kz}{xy}$', '$V = \\frac{kxy}{z}$'],
      answer: 3,
      solution:
        'Jointly with $x$ and $y$ puts both in the numerator; inversely with $z$ puts $z$ in the denominator. That is $V = \\frac{kxy}{z}$, with constant $k = \\frac{Vz}{xy}$. (The choice $kxyz$ is the WRONG MODEL for $z$, making it direct instead of inverse; the choice $\\frac{kxz}{y}$ swaps the roles of $y$ and $z$; the choice $\\frac{kz}{xy}$ flips the whole fraction upside down.)',
    },
  ],
  // p4 — change one input (or both), describe what happens to z
  [
    {
      q: 'Suppose $z = 5xy$. If $y$ is tripled and $x$ stays the same, what happens to $z$?',
      choices: ['It is multiplied by $9$', 'It is divided by $3$', 'It stays the same', 'It is tripled'],
      answer: 3,
      solution:
        'Replace $y$ with $3y$: the new value is $5x(3y) = 3(5xy) = 3z$, so $z$ triples. Only one input changed, so only one factor of $3$ appears. (The choice "multiplied by $9$" would need BOTH inputs tripled; the choice "divided by $3$" is the WRONG MODEL, the answer for $z = \\frac{5x}{y}$ where $y$ is inverse — but here $y$ is in the numerator and pulls $z$ up with it.)',
    },
    {
      q: 'Suppose $z = \\frac{7x}{y}$. If $y$ is doubled and $x$ stays the same, what happens to $z$?',
      choices: ['It is halved', 'It doubles', 'It is unchanged', 'It is divided by $4$'],
      answer: 0,
      solution:
        'Replace $y$ with $2y$: the new value is $\\frac{7x}{2y} = \\frac{1}{2} \\cdot \\frac{7x}{y} = \\frac{z}{2}$, so $z$ is halved. The constant $k = \\frac{zy}{x}$ must hold steady, so doubling $y$ forces $z$ down by the reciprocal factor. (The choice "doubles" is the WRONG MODEL, the joint answer for $z = 7xy$; "divided by $4$" squares the factor, which would suit $\\frac{7x}{y^2}$; "unchanged" would need $x$ to double too.)',
    },
    {
      q: 'Suppose $z = \\frac{kx}{y}$. If $x$ is doubled and $y$ is also doubled, what happens to $z$?',
      choices: ['It quadruples', 'It doubles', 'It stays the same', 'It is halved'],
      answer: 2,
      solution:
        'Replace both: $\\frac{k(2x)}{2y} = \\frac{2kx}{2y} = \\frac{kx}{y} = z$. The factor of $2$ upstairs and the factor of $2$ downstairs cancel exactly, so $z$ does not move. (The choice "quadruples" is the WRONG MODEL — it is what $z = kxy$ would do, where both inputs push the same way; "doubles" counts only the change in $x$; "is halved" counts only the change in $y$.)',
    },
  ],
  // p5 — find k from one complete triple, then predict
  [
    {
      q: 'Suppose $z$ is jointly proportional to $x$ and $y$, and $z = 84$ when $x = 4$ and $y = 3$. What is $z$ when $x = 5$ and $y = 6$?',
      choices: ['$105$', '$52.5$', '$630$', '$210$'],
      answer: 3,
      solution:
        'Two inputs changed, so there is no shortcut — find the constant first: $k = \\frac{z}{xy} = \\frac{84}{4 \\times 3} = 7$, so $z = 7xy$. Then $z = 7 \\times 5 \\times 6 = 210$. The constant holds on BOTH triples: $\\frac{84}{4 \\times 3} = 7$ and $\\frac{210}{5 \\times 6} = 7$. ✓ (The choice $52.5$ is the WRONG MODEL — it uses $z = \\frac{kx}{y}$ with $k = \\frac{zy}{x} = 63$, giving $\\frac{63 \\times 5}{6}$, which shrinks $z$ although both inputs grew; the choice $105$ scales for the change in $x$ only, $84 \\times \\frac{5}{4}$; the choice $630$ takes $k = \\frac{84}{4} = 21$, dividing by $x$ but forgetting $y$.)',
    },
    {
      q: 'Suppose $z$ is jointly proportional to $x$ and $y$, and $z = 45$ when $x = 5$ and $y = 3$. What is $z$ when $x = 2$ and $y = 8$?',
      choices: ['$48$', '$120$', '$6.75$', '$144$'],
      answer: 0,
      solution:
        'The constant is $k = \\frac{z}{xy} = \\frac{45}{5 \\times 3} = 3$, so $z = 3xy$ and $z = 3 \\times 2 \\times 8 = 48$. Check it on both triples: $\\frac{45}{15} = 3$ and $\\frac{48}{16} = 3$. ✓ ($x$ shrank while $y$ grew, and the two effects nearly cancelled.) (The choice $6.75$ is the WRONG MODEL, $z = \\frac{kx}{y}$ with $k = \\frac{zy}{x} = 27$, giving $\\frac{27 \\times 2}{8}$; the choice $120$ scales for the change in $y$ only, $45 \\times \\frac{8}{3}$; the choice $144$ takes $k = \\frac{45}{5} = 9$ and never divides by $y$.)',
    },
    {
      q: 'Suppose $z$ is jointly proportional to $x$ and $y$, and $z = 72$ when $x = 6$ and $y = 4$. What is $y$ when $z = 90$ and $x = 5$?',
      choices: ['$\\frac{8}{3}$', '$30$', '$6$', '$18$'],
      answer: 2,
      solution:
        'Find the constant, then run the rule backwards. $k = \\frac{z}{xy} = \\frac{72}{6 \\times 4} = 3$, so $z = 3xy$. Now $90 = 3 \\times 5 \\times y = 15y$, giving $y = 6$. The constant holds on both triples: $\\frac{72}{24} = 3$ and $\\frac{90}{5 \\times 6} = 3$. ✓ (The choice $\\frac{8}{3}$ is the WRONG MODEL, $z = \\frac{kx}{y}$ with $k = \\frac{zy}{x} = 48$, giving $y = \\frac{48 \\times 5}{90}$; the choice $30$ divides $90$ by $k$ and forgets $x$; the choice $18$ divides $90$ by $x$ and forgets $k$.)',
    },
  ],
  // p6 — direct with one variable, inverse with the other
  [
    {
      q: 'Suppose $z = \\frac{kx}{y}$, and $z = 18$ when $x = 12$ and $y = 4$. What is $z$ when $x = 10$ and $y = 5$?',
      choices: ['$60$', '$15$', '$18.75$', '$12$'],
      answer: 3,
      solution:
        'Solve for the constant: $18 = \\frac{12k}{4} = 3k$, so $k = 6$ and $z = \\frac{6x}{y}$. Then $z = \\frac{6 \\times 10}{5} = 12$. The constant $k = \\frac{zy}{x}$ holds on both triples: $\\frac{18 \\times 4}{12} = 6$ and $\\frac{12 \\times 5}{10} = 6$. ✓ (The choice $18.75$ is the WRONG MODEL — the joint reading $z = kxy$ with $k = \\frac{18}{48} = 0.375$, giving $0.375 \\times 50$; the choice $60$ computes $6 \\times 10$ and forgets to divide by $y$ at the end; the choice $15$ scales for the change in $x$ only, $18 \\times \\frac{10}{12}$.)',
    },
    {
      q: 'Suppose $z$ varies directly with $x$ and inversely with $y$, and $z = 24$ when $x = 9$ and $y = 6$. What is $z$ when $x = 3$ and $y = 8$?',
      choices: ['$6$', '$48$', '$96$', '$18$'],
      answer: 0,
      solution:
        'The rule is $z = \\frac{kx}{y}$, so $24 = \\frac{9k}{6} = 1.5k$ and $k = 16$. Then $z = \\frac{16 \\times 3}{8} = 6$. Both changes point the same way — $x$ fell and $y$ rose, so $z$ had to drop hard. The constant holds on both triples: $\\frac{24 \\times 6}{9} = 16$ and $\\frac{6 \\times 8}{3} = 16$. ✓ (The choice $96$ is the WRONG MODEL with the roles reversed, $z = \\frac{ky}{x}$ with $k = \\frac{zx}{y} = 36$, giving $\\frac{36 \\times 8}{3}$; the choice $48$ is $16 \\times 3$ with the division by $y$ forgotten; the choice $18$ scales for the change in $y$ only, $24 \\times \\frac{6}{8}$.)',
    },
    {
      q: 'Suppose $z$ varies directly with $x$ and inversely with $y$, and $z = 10$ when $x = 8$ and $y = 12$. What is $y$ when $z = 6$ and $x = 9$?',
      choices: ['$135$', '$6.4$', '$22.5$', '$13.5$'],
      answer: 2,
      solution:
        'From $z = \\frac{kx}{y}$: $10 = \\frac{8k}{12}$, so $k = 15$. Now the unknown is downstairs: $6 = \\frac{15 \\times 9}{y} = \\frac{135}{y}$, giving $y = \\frac{135}{6} = 22.5$. The constant $k = \\frac{zy}{x}$ holds on both triples: $\\frac{10 \\times 12}{8} = 15$ and $\\frac{6 \\times 22.5}{9} = 15$. ✓ (The choice $6.4$ is the WRONG MODEL, the joint reading $z = kxy$ with $k = \\frac{10}{96}$; the choice $135$ stops at the numerator and never divides by $z$; the choice $13.5$ divides that numerator by the OLD value $z = 10$ instead of the new one.)',
    },
  ],
  // p7 — a real-world constant product
  [
    {
      q: 'Two meshed sprockets turn so that (number of teeth) $\\times$ (number of turns) is the same for both. A $15$-tooth sprocket makes $24$ turns. How many turns does the meshed $18$-tooth sprocket make?',
      choices: ['$28.8$', '$20$', '$21$', '$360$'],
      answer: 1,
      solution:
        'Both sprockets pass the same number of chain links, so the constant is the product: $k = 15 \\times 24 = 360$ teeth-turns. The bigger sprocket makes $\\frac{360}{18} = 20$ turns. The constant holds on both: $15 \\times 24 = 360$ and $18 \\times 20 = 360$. ✓ (The choice $28.8$ is the WRONG MODEL — it scales turns UP with teeth, $24 \\times \\frac{18}{15}$, as if this were a direct proportion, but a sprocket with more teeth must turn FEWER times; the choice $21$ adds $3$ turns because there are $3$ more teeth; the choice $360$ stops at the constant.)',
    },
    {
      q: 'Two meshed gears turn so that (number of teeth) $\\times$ (number of turns) is the same for both. A $24$-tooth gear makes $25$ turns while the gear it drives makes $15$ turns. How many teeth does the second gear have?',
      choices: ['$14.4$', '$600$', '$40$', '$34$'],
      answer: 2,
      solution:
        'The constant product is $k = 24 \\times 25 = 600$ teeth-turns, so the second gear has $\\frac{600}{15} = 40$ teeth — a whole number, as a gear must have. Check: $40 \\times 15 = 600$. ✓ (The choice $14.4$ is the WRONG MODEL, scaling teeth DOWN with turns as a direct proportion would, $24 \\times \\frac{15}{25}$ — but the gear turning fewer times is the BIGGER one; it is also not a whole number of teeth. The choice $34$ adds $10$ teeth because the turns dropped by $10$; the choice $600$ stops at the constant.)',
    },
    {
      q: 'A seesaw balances when (weight) $\\times$ (distance from the pivot) is the same on both sides. A $40$ kg child sits $1.5$ m from the pivot. How far from the pivot must a $24$ kg child sit to balance?',
      choices: ['$2.5$ m', '$0.9$ m', '$16$ m', '$60$ m'],
      answer: 0,
      solution:
        'The constant is the product: $k = 40 \\times 1.5 = 60$ kilogram-metres. The lighter child needs $\\frac{60}{24} = 2.5$ m. The constant holds on both sides: $40 \\times 1.5 = 60$ and $24 \\times 2.5 = 60$. ✓ Lighter means farther out, which is exactly how a seesaw feels. (The choice $0.9$ is the WRONG MODEL — it scales distance DOWN with weight, $1.5 \\times \\frac{24}{40}$, as a direct proportion would, putting the lighter child closer in; the choice $16$ flips the division, computing $\\frac{24}{1.5}$; the choice $60$ reports the constant itself.)',
    },
  ],
  // p8 — a two-change story, direct with one input and inverse with the other
  [
    {
      q: 'The load a beam can carry varies directly with its width and inversely with its length: $L = \\frac{kw}{\\ell}$. If $L = 30$ when $w = 4$ and $\\ell = 8$, what is $L$ when $w = 6$ and $\\ell = 5$?',
      choices: ['$72$', '$45$', '$48$', '$12.5$'],
      answer: 0,
      solution:
        'Find the constant: $30 = \\frac{4k}{8} = \\frac{k}{2}$, so $k = 60$ and $L = \\frac{60w}{\\ell}$. Then $L = \\frac{60 \\times 6}{5} = 72$. The constant $k = \\frac{L\\ell}{w}$ holds on both sets: $\\frac{30 \\times 8}{4} = 60$ and $\\frac{72 \\times 5}{6} = 60$. ✓ A wider AND shorter beam is stronger both ways, so the load must rise on both counts. (The choice $12.5$ is the WRONG MODEL with the roles reversed, $L = \\frac{k\\ell}{w}$ with $k = 15$; the choice $45$ accounts for the wider beam only, $30 \\times \\frac{6}{4}$; the choice $48$ accounts for the shorter beam only, $30 \\times \\frac{8}{5}$.)',
    },
    {
      q: 'The current in a circuit varies directly with the voltage and inversely with the resistance: $I = \\frac{kV}{R}$. If $I = 8$ when $V = 48$ and $R = 12$, what is $I$ when $V = 72$ and $R = 24$?',
      choices: ['$12$', '$4$', '$6$', '$24$'],
      answer: 2,
      solution:
        'Find the constant: $8 = \\frac{48k}{12} = 4k$, so $k = 2$ and $I = \\frac{2V}{R}$. Then $I = \\frac{2 \\times 72}{24} = 6$. The constant $k = \\frac{IR}{V}$ holds on both sets: $\\frac{8 \\times 12}{48} = 2$ and $\\frac{6 \\times 24}{72} = 2$. ✓ The voltage grew by half but the resistance doubled, so the current came out lower. (The choice $24$ is the WRONG MODEL — the joint reading $I = kVR$ with $k = \\frac{8}{576} = \\frac{1}{72}$, which lets more resistance INCREASE the current; the choice $12$ accounts for the voltage change only, $8 \\times \\frac{72}{48}$; the choice $4$ accounts for the resistance change only, $8 \\times \\frac{12}{24}$.)',
    },
    {
      q: 'The number of days a camp’s food lasts varies directly with the amount of food and inversely with the number of campers: $D = \\frac{kF}{n}$. If $D = 9$ when $F = 60$ and $n = 20$, how many days does $F = 100$ last for $n = 25$ campers?',
      choices: ['$15$', '$12$', '$7.2$', '$18.75$'],
      answer: 1,
      solution:
        'Find the constant: $9 = \\frac{60k}{20} = 3k$, so $k = 3$ and $D = \\frac{3F}{n}$. Then $D = \\frac{3 \\times 100}{25} = 12$ days. The constant $k = \\frac{Dn}{F}$ holds on both sets: $\\frac{9 \\times 20}{60} = 3$ and $\\frac{12 \\times 25}{100} = 3$. ✓ The food supply grew faster than the crowd did, so the days went up. (The choice $18.75$ is the WRONG MODEL — the joint reading $D = kFn$ with $k = \\frac{9}{1200}$, which has extra campers making the food last LONGER; the choice $15$ accounts for the extra food only, $9 \\times \\frac{100}{60}$; the choice $7.2$ accounts for the extra campers only, $9 \\times \\frac{20}{25}$.)',
    },
  ],
  // p9 — joint proportion where one input is squared
  [
    {
      q: 'Suppose $z$ is jointly proportional to $x^2$ and $y$, and $z = 60$ when $x = 2$ and $y = 5$. What is $z$ when $x = 4$ and $y = 3$?',
      choices: ['$72$', '$144$', '$400$', '$43.2$'],
      answer: 1,
      solution:
        'The rule is $z = kx^2y$, so square before dividing: $k = \\frac{z}{x^2y} = \\frac{60}{4 \\times 5} = 3$. Then $z = 3 \\times 4^2 \\times 3 = 3 \\times 16 \\times 3 = 144$. The constant holds on both sets: $\\frac{60}{2^2 \\times 5} = 3$ and $\\frac{144}{4^2 \\times 3} = 3$. ✓ ($x$ doubled, so $x^2$ quadrupled.) (The choice $400$ is the WRONG MODEL for $y$, $z = \\frac{kx^2}{y}$ with $k = \\frac{zy}{x^2} = 75$, giving $\\frac{75 \\times 16}{3}$; the choice $72$ forgets the square, using $z = kxy$ with $k = 6$; the choice $43.2$ squares the wrong input, using $z = kxy^2$ with $k = 1.2$.)',
    },
    {
      q: 'Suppose $z$ is jointly proportional to $x$ and $y^2$, and $z = 96$ when $x = 3$ and $y = 4$. What is $z$ when $x = 5$ and $y = 2$?',
      choices: ['$80$', '$640$', '$160$', '$40$'],
      answer: 3,
      solution:
        'The rule is $z = kxy^2$, so $k = \\frac{z}{xy^2} = \\frac{96}{3 \\times 16} = 2$. Then $z = 2 \\times 5 \\times 2^2 = 40$. The constant holds on both sets: $\\frac{96}{3 \\times 4^2} = 2$ and $\\frac{40}{5 \\times 2^2} = 2$. ✓ ($y$ was halved, so $y^2$ fell to a quarter — enough to overwhelm the growth in $x$.) (The choice $640$ is the WRONG MODEL for $y$, $z = \\frac{kx}{y^2}$ with $k = \\frac{zy^2}{x} = 512$, giving $\\frac{512 \\times 5}{4}$; the choice $80$ forgets the square, using $z = kxy$ with $k = 8$; the choice $160$ scales for the change in $x$ only, $96 \\times \\frac{5}{3}$.)',
    },
    {
      q: 'Suppose $z$ is jointly proportional to $x^2$ and $y$, and $z = 100$ when $x = 5$ and $y = 2$. What is $y$ when $z = 54$ and $x = 3$?',
      choices: ['$1.8$', '$3$', '$27$', '$\\frac{4}{3}$'],
      answer: 1,
      solution:
        'From $z = kx^2y$: $k = \\frac{100}{5^2 \\times 2} = 2$, so $z = 2x^2y$. Now $54 = 2 \\times 9 \\times y = 18y$, giving $y = 3$. The constant holds on both sets: $\\frac{100}{25 \\times 2} = 2$ and $\\frac{54}{9 \\times 3} = 2$. ✓ (The choice $\\frac{4}{3}$ is the WRONG MODEL for $y$, $z = \\frac{kx^2}{y}$ with $k = \\frac{zy}{x^2} = 8$, giving $y = \\frac{72}{54}$; the choice $1.8$ forgets the square, using $z = kxy$ with $k = 10$; the choice $27$ divides $54$ by the constant and never divides by $x^2$.)',
    },
  ],
  // p10 — both inputs change, report the scaling factor
  [
    {
      q: 'Suppose $z = kxy$. If $x$ is doubled and $y$ is multiplied by $5$, then $z$ is multiplied by what factor?',
      choices: ['$7$', '$10$', '$25$', '$\\frac{2}{5}$'],
      answer: 1,
      solution:
        'Replace both: $k(2x)(5y) = 10kxy = 10z$. Each change contributes its own factor and the factors multiply: $2 \\times 5 = 10$. Try it with $k = 1$, $x = 3$, $y = 4$: $z$ goes from $12$ to $6 \\times 20 = 120$. ✓ (The factor $\\frac{2}{5}$ is the WRONG MODEL, what $z = \\frac{kx}{y}$ would give with $y$ inverse; the factor $7$ ADDS the two multipliers, and proportional changes always multiply; the factor $25$ uses the change in $y$ twice.)',
    },
    {
      q: 'Suppose $z = \\frac{kx}{y}$. If $x$ is tripled and $y$ is doubled, then $z$ is multiplied by what factor?',
      choices: ['$6$', '$\\frac{2}{3}$', '$5$', '$\\frac{3}{2}$'],
      answer: 3,
      solution:
        'Replace both: $\\frac{k(3x)}{2y} = \\frac{3}{2} \\cdot \\frac{kx}{y} = \\frac{3}{2}z$. The factor upstairs multiplies and the factor downstairs divides. Try it with $k = 1$, $x = 4$, $y = 2$: $z$ goes from $2$ to $\\frac{12}{4} = 3$. ✓ (The factor $6$ is the WRONG MODEL, the joint answer $z = kxy$ where both changes push up; the factor $\\frac{2}{3}$ flips the fraction, dividing by $3$ and multiplying by $2$; the factor $5$ adds the two multipliers.)',
    },
    {
      q: 'Suppose $z$ is jointly proportional to $x^2$ and $y$. If $x$ is doubled and $y$ is tripled, then $z$ is multiplied by what factor?',
      choices: ['$12$', '$6$', '$5$', '$36$'],
      answer: 0,
      solution:
        'Replace both in $z = kx^2y$: $k(2x)^2(3y) = 12kx^2y = 12z$. Doubling $x$ multiplies $x^2$ by $4$, tripling $y$ multiplies it by $3$, and $4 \\times 3 = 12$. Try it with $k = 1$, $x = 2$, $y = 5$: $z$ goes from $20$ to $16 \\times 15 = 240$. ✓ (The factor $6$ forgets the square, using $2 \\times 3$; the factor $36$ squares BOTH changes, but only $x$ is squared in the rule; the factor $5$ adds the two multipliers.)',
    },
  ],
]

const s74 = [
  // p1 — a steady rate: amount and time are DIRECT, so divide to get the rate
  [
    {
      q: 'A bottling line fills $384$ bottles in $8$ minutes at a steady rate. What is its rate?',
      choices: [
        '$48$ bottles per minute',
        '$3072$ bottles per minute',
        '$376$ bottles per minute',
        '$\\frac{1}{48}$ bottle per minute',
      ],
      answer: 0,
      solution:
        'Nothing caps the job, so bottles and time are directly proportional and the rate is the constant: $\\frac{384}{8} = 48$ bottles per minute. Check it forward: $48 \\times 8 = 384$. ✓ (The choice $3072$ multiplies instead of dividing — that is the INVERSE reading, where the product of the two numbers is the constant, but here it is the ratio; the choice $\\frac{1}{48}$ flips the rate into minutes per bottle; the choice $376$ subtracts, and a rate is never a difference.)',
    },
    {
      q: 'A copier prints $35$ pages every minute. How long does it take to print $560$ pages?',
      choices: ['$19600$ minutes', '$525$ minutes', '$0.0625$ minute', '$16$ minutes'],
      answer: 3,
      solution:
        'The rate is the constant, so time $= \\frac{\\text{pages}}{\\text{rate}} = \\frac{560}{35} = 16$ minutes. Check it forward: $35 \\times 16 = 560$ pages. ✓ (The choice $19600$ multiplies $35 \\times 560$, treating the two as INVERSE with a constant product; the choice $0.0625$ flips the division, computing $\\frac{35}{560}$; the choice $525$ subtracts.)',
    },
    {
      q: 'A well pump moves $2400$ litres in $50$ minutes at a steady rate. How many litres does it move in one hour?',
      choices: ['$2000$', '$2880$', '$48$', '$144000$'],
      answer: 1,
      solution:
        'Find the rate first: $\\frac{2400}{50} = 48$ litres per minute. One hour is $60$ minutes, so the pump moves $48 \\times 60 = 2880$ litres. The rate is the same in both rows: $\\frac{2400}{50} = 48$ and $\\frac{2880}{60} = 48$. ✓ (The choice $2000$ is the WRONG MODEL — it treats litres and minutes as INVERSE, keeping the product $2400 \\times 50$ fixed and computing $\\frac{120000}{60}$, which has a longer run pumping LESS water; the choice $48$ stops at the rate and answers per minute; the choice $144000$ multiplies $2400 \\times 60$ without ever dividing by $50$.)',
    },
  ],
  // p2 — d = rt, run in all three directions
  [
    {
      q: 'A ferry travels at a steady $18$ kilometres per hour for $4.5$ hours. How far does it go?',
      choices: ['$81$ km', '$22.5$ km', '$4$ km', '$13.5$ km'],
      answer: 0,
      solution:
        'Use $d = rt$: $d = 18 \\times 4.5 = 81$ km. Check by recovering the rate: $\\frac{81}{4.5} = 18$ km/h. ✓ Distance is DIRECTLY proportional to time here, because the speed is what stays fixed. (The choice $4$ divides instead of multiplying, $\\frac{18}{4.5}$ — that is the INVERSE move, right only when the DISTANCE is what is held fixed; the choice $22.5$ adds the two numbers and the choice $13.5$ subtracts them.)',
    },
    {
      q: 'A train covers $273$ kilometres at a steady $78$ kilometres per hour. How long does the trip take?',
      choices: ['$\\frac{2}{7}$ hour', '$195$ hours', '$3.5$ hours', '$21294$ hours'],
      answer: 2,
      solution:
        'Rearrange $d = rt$ into $t = \\frac{d}{r} = \\frac{273}{78} = 3.5$ hours. Check it forward: $78 \\times 3.5 = 273$ km. ✓ (The choice $21294$ multiplies $273 \\times 78$, treating speed and distance as INVERSE — but the fixed quantity here is the speed, so distance and time rise together; the choice $\\frac{2}{7}$ flips the division into $\\frac{78}{273}$; the choice $195$ subtracts.)',
    },
    {
      q: 'A hiker walks $16.5$ kilometres in $5$ hours at a steady pace. What is her speed?',
      choices: ['$82.5$ km/h', '$11.5$ km/h', '$\\frac{10}{33}$ km/h', '$3.3$ km/h'],
      answer: 3,
      solution:
        'Rearrange $d = rt$ into $r = \\frac{d}{t} = \\frac{16.5}{5} = 3.3$ km/h. Check it forward: $3.3 \\times 5 = 16.5$ km. ✓ (The choice $82.5$ multiplies $16.5 \\times 5$, which would be the constant if distance and time were INVERSE; the choice $\\frac{10}{33}$ flips the division into $\\frac{5}{16.5}$, giving hours per kilometre; the choice $11.5$ subtracts.)',
    },
  ],
  // p3 — flip between time-per-job and job-per-time
  [
    {
      q: 'A pump empties a cistern in $20$ minutes. What fraction of the cistern does it empty in one minute?',
      choices: ['$20$', '$\\frac{1}{20}$', '$\\frac{19}{20}$', '$\\frac{1}{10}$'],
      answer: 1,
      solution:
        'The whole job takes $20$ minutes, so each minute completes $\\frac{1}{20}$ of it. Check it forward: $20 \\times \\frac{1}{20} = 1$ whole cistern. ✓ This flip — from time-per-job to job-per-time — is the first move in every work-rate problem, and it is exactly the reciprocal, so the fixed job makes rate and time INVERSE. (The choice $20$ reports the time instead of the fraction; the choice $\\frac{19}{20}$ is what is still LEFT after one minute; the choice $\\frac{1}{10}$ is the fraction done in two minutes.)',
    },
    {
      q: 'A drain empties $\\frac{1}{9}$ of a pond each hour at a steady rate. How long does it take to empty the whole pond?',
      choices: ['$9$ hours', '$\\frac{1}{9}$ hour', '$81$ hours', '$8$ hours'],
      answer: 0,
      solution:
        'This runs the flip the other way: time $= 1 \\div \\text{rate} = 1 \\div \\frac{1}{9} = 9$ hours. Check it forward: in $9$ hours the drain removes $9 \\times \\frac{1}{9} = 1$ whole pond. ✓ Rate and time are reciprocals because the job is fixed. (The choice $\\frac{1}{9}$ repeats the rate instead of flipping it; the choice $81$ squares the $9$; the choice $8$ stops an hour short, forgetting that the last ninth of the pond needs an hour of its own.)',
    },
    {
      q: 'A sprinkler waters a whole lawn in $12$ hours at a steady rate. What fraction of the lawn does it water in $5$ hours?',
      choices: ['$\\frac{12}{5}$', '$\\frac{7}{12}$', '$\\frac{1}{12}$', '$\\frac{5}{12}$'],
      answer: 3,
      solution:
        'The rate is $\\frac{1}{12}$ of the lawn per hour, so in $5$ hours it waters $5 \\times \\frac{1}{12} = \\frac{5}{12}$. Check it forward: at that rate the full $12$ hours give $\\frac{12}{12} = 1$ whole lawn. ✓ (The choice $\\frac{12}{5}$ flips the fraction and claims more than a whole lawn; the choice $\\frac{7}{12}$ is the part still UNWATERED; the choice $\\frac{1}{12}$ is one hour’s worth, forgetting to multiply by $5$.)',
    },
  ],
  // p4 — closing and separating speeds
  [
    {
      q: 'Two boats sail toward each other along a straight canal, one at $9$ km/h and the other at $13$ km/h. How fast does the gap between them close?',
      choices: ['$4$ km/h', '$22$ km/h', '$11$ km/h', '$117$ km/h'],
      answer: 1,
      solution:
        'Sailing toward each other, BOTH boats eat into the gap, so the speeds add: $9 + 13 = 22$ km/h. Check it forward: in one hour one boat covers $9$ km and the other $13$ km, and together they have removed $22$ km of canal. ✓ (The choice $4$ is the WRONG MODEL — subtracting is right only when one traveller CHASES another in the same direction; the choice $11$ averages the two speeds; the choice $117$ multiplies them.)',
    },
    {
      q: 'A truck drives along a straight road at $70$ km/h. Ahead of it, going the same way, a car drives at $95$ km/h. How fast is the gap between them growing?',
      choices: ['$165$ km/h', '$82.5$ km/h', '$25$ km/h', '$6650$ km/h'],
      answer: 2,
      solution:
        'Same direction, so only the DIFFERENCE in speeds changes the gap: $95 - 70 = 25$ km/h. Check it forward: after one hour the car has gone $95$ km and the truck $70$ km, so the gap is $25$ km wider. ✓ (The choice $165$ is the WRONG MODEL — adding is right only when the two travellers move TOWARD each other; the choice $82.5$ averages the speeds; the choice $6650$ multiplies them.)',
    },
    {
      q: 'Two cyclists ride toward each other on a straight path. The gap between them closes at $31$ miles per hour, and one of them rides at $13$ mph. How fast does the other ride?',
      choices: ['$18$ mph', '$44$ mph', '$15.5$ mph', '$403$ mph'],
      answer: 0,
      solution:
        'Riding toward each other, the closing speed is the SUM, so $13 + r = 31$ and $r = 18$ mph. Check it forward: $13 + 18 = 31$. ✓ (The choice $44$ is the WRONG MODEL — it treats the closing speed as a DIFFERENCE, as it would be in a chase, and adds $31 + 13$; the choice $15.5$ halves the closing speed, which would only be right if the two rode at equal speeds; the choice $403$ multiplies.)',
    },
  ],
  // p5 — two workers together: add the rates
  [
    {
      q: 'Pipe A fills a vat in $6$ hours and pipe B fills the same vat in $3$ hours. With both open, how long does the vat take to fill?',
      choices: ['$9$ hours', '$4.5$ hours', '$2$ hours', '$18$ hours'],
      answer: 2,
      solution:
        'Convert times to rates and ADD the rates: $\\frac{1}{6} + \\frac{1}{3} = \\frac{1}{6} + \\frac{2}{6} = \\frac{1}{2}$ vat per hour. The time is $1 \\div \\frac{1}{2} = 2$ hours. Check it forward: in $2$ hours pipe A supplies $\\frac{2}{6} = \\frac{1}{3}$ of the vat and pipe B supplies $\\frac{2}{3}$, and $\\frac{1}{3} + \\frac{2}{3} = 1$. ✓ And $2$ hours beats the faster pipe’s $3$ hours, as teamwork must. (The choice $9$ ADDS the times, the choice $4.5$ averages them, and the choice $18$ multiplies them — but times never combine that way; only rates add.)',
    },
    {
      q: 'One printer finishes a batch of flyers in $10$ minutes; a second printer finishes the same batch in $15$ minutes. Running both at once, how long does the batch take?',
      choices: ['$6$ minutes', '$25$ minutes', '$12.5$ minutes', '$5$ minutes'],
      answer: 0,
      solution:
        'Add the rates: $\\frac{1}{10} + \\frac{1}{15} = \\frac{3}{30} + \\frac{2}{30} = \\frac{5}{30} = \\frac{1}{6}$ batch per minute, so the time is $6$ minutes. Check it forward: in $6$ minutes the first prints $\\frac{6}{10} = \\frac{3}{5}$ of the batch and the second prints $\\frac{6}{15} = \\frac{2}{5}$, which total one whole batch. ✓ And $6 < 10$, so the pair beats the faster printer alone. (The choice $25$ adds the times, the choice $12.5$ averages them, and the choice $5$ subtracts them.)',
    },
    {
      q: 'Hose A alone fills a trough in $20$ minutes and hose B alone fills it in $30$ minutes. With both running, how long does the trough take?',
      choices: ['$50$ minutes', '$25$ minutes', '$10$ minutes', '$12$ minutes'],
      answer: 3,
      solution:
        'Add the rates: $\\frac{1}{20} + \\frac{1}{30} = \\frac{3}{60} + \\frac{2}{60} = \\frac{5}{60} = \\frac{1}{12}$ trough per minute, so the time is $12$ minutes. Check it forward: in $12$ minutes hose A gives $\\frac{12}{20} = \\frac{3}{5}$ and hose B gives $\\frac{12}{30} = \\frac{2}{5}$, together one full trough. ✓ And $12 < 20$, faster than either hose alone. (The choice $50$ adds the times, the choice $25$ averages them, and the choice $10$ subtracts them — all three ignore that only RATES may be combined.)',
    },
  ],
  // p6 — a filler and a drain pull against each other
  [
    {
      q: 'A tap fills a barrel in $8$ hours, while a leak would empty the full barrel in $12$ hours. Starting from empty with both running, how long until the barrel is full?',
      choices: ['$24$ hours', '$4$ hours', '$4.8$ hours', '$20$ hours'],
      answer: 0,
      solution:
        'Filling counts as a positive rate and draining as a negative one: net rate $= \\frac{1}{8} - \\frac{1}{12} = \\frac{3}{24} - \\frac{2}{24} = \\frac{1}{24}$ barrel per hour. The net rate is positive, so the barrel does fill, in $1 \\div \\frac{1}{24} = 24$ hours. Check it forward: in $24$ hours the tap adds $3$ barrels’ worth and the leak removes $2$, leaving exactly $1$. ✓ (The choice $4.8$ is the WRONG MODEL — it ADDS the two rates as if the leak helped; the choice $4$ subtracts the TIMES, $12 - 8$, but the tug-of-war happens between rates; the choice $20$ adds the times.)',
    },
    {
      q: 'A pipe fills a tank in $5$ hours, while an open drain would empty the full tank in $20$ hours. Starting from empty with both open, how long until the tank is full?',
      choices: ['$15$ hours', '$4$ hours', '$6\\frac{2}{3}$ hours', '$25$ hours'],
      answer: 2,
      solution:
        'Net rate $= \\frac{1}{5} - \\frac{1}{20} = \\frac{4}{20} - \\frac{1}{20} = \\frac{3}{20}$ tank per hour, so the time is $1 \\div \\frac{3}{20} = \\frac{20}{3} = 6\\frac{2}{3}$ hours. Check it forward: in $\\frac{20}{3}$ hours the pipe adds $\\frac{20}{15} = \\frac{4}{3}$ tanks and the drain removes $\\frac{20}{60} = \\frac{1}{3}$, leaving $1$. ✓ The drain costs time, so the answer is longer than the pipe’s solo $5$ hours. (The choice $4$ is the WRONG MODEL, ADDING the rates as though the drain filled too; the choice $15$ subtracts the times, $20 - 5$; the choice $25$ adds them.)',
    },
    {
      q: 'A full tank has a drain that would empty it in $6$ hours, and someone leaves a tap running that would fill the empty tank in $18$ hours. How long until the tank is empty?',
      choices: ['$12$ hours', '$4.5$ hours', '$24$ hours', '$9$ hours'],
      answer: 3,
      solution:
        'This time the job is emptying, so the drain is the positive rate: net $= \\frac{1}{6} - \\frac{1}{18} = \\frac{3}{18} - \\frac{1}{18} = \\frac{2}{18} = \\frac{1}{9}$ tank per hour, giving $9$ hours. Check it forward: in $9$ hours the drain removes $\\frac{9}{6} = 1.5$ tanks while the tap adds $\\frac{9}{18} = 0.5$, a net loss of exactly $1$ full tank. ✓ (The choice $4.5$ is the WRONG MODEL, ADDING the rates as if the tap helped empty the tank; the choice $12$ subtracts the times, $18 - 6$; the choice $24$ adds them.)',
    },
  ],
  // p7 — two travellers closing a gap
  [
    {
      q: 'Two hikers set out at the same moment from opposite ends of a $45$-kilometre trail, one walking $4$ km/h and the other $5$ km/h. How long until they meet?',
      choices: ['$11.25$ hours', '$5$ hours', '$9$ hours', '$45$ hours'],
      answer: 1,
      solution:
        'Walking toward each other, the gap closes at $4 + 5 = 9$ km/h, so they meet after $\\frac{45}{9} = 5$ hours. Check it forward: one hiker covers $4 \\times 5 = 20$ km, the other $5 \\times 5 = 25$ km, and $20 + 25 = 45$. ✓ (The choice $11.25$ uses only the slower hiker, $\\frac{45}{4}$, and the choice $9$ uses only the faster one — but both are closing the gap at once; the choice $45$ is the WRONG MODEL, dividing by the DIFFERENCE $5 - 4 = 1$, which is the chase formula.)',
    },
    {
      q: 'Two cars start $312$ miles apart on the same road and drive toward each other, one at $50$ mph and the other at $54$ mph. How far has the SLOWER car travelled when they meet?',
      choices: ['$162$ miles', '$156$ miles', '$150$ miles', '$104$ miles'],
      answer: 2,
      solution:
        'The gap closes at $50 + 54 = 104$ mph, so they meet after $\\frac{312}{104} = 3$ hours. The slower car has gone $50 \\times 3 = 150$ miles. Check it forward: the faster car covers $54 \\times 3 = 162$ miles, and $150 + 162 = 312$. ✓ (The choice $162$ is the FASTER car’s share; the choice $156$ splits the distance evenly, but the faster car earns the bigger piece; the choice $104$ reports the closing speed instead of a distance.)',
    },
    {
      q: 'Two trains leave their stations at the same moment and head toward each other at $48$ mph and $62$ mph. They meet after $2.5$ hours. How far apart were the stations?',
      choices: ['$275$ miles', '$35$ miles', '$120$ miles', '$155$ miles'],
      answer: 0,
      solution:
        'The gap closed at $48 + 62 = 110$ mph for $2.5$ hours, so it was $110 \\times 2.5 = 275$ miles wide. Check it forward: $48 \\times 2.5 = 120$ miles plus $62 \\times 2.5 = 155$ miles gives $275$. ✓ (The choice $35$ is the WRONG MODEL — it uses the DIFFERENCE of the speeds, $14 \\times 2.5$, which belongs to a same-direction chase; the choices $120$ and $155$ each count only one train’s distance.)',
    },
  ],
  // p8 — a head start, closed at the difference of the speeds
  [
    {
      q: 'A hiker sets off along a trail at $4$ km/h. Two hours later a runner starts along the same trail at $12$ km/h. How long after the runner starts does he catch the hiker?',
      choices: ['$2$ hours', '$\\frac{1}{2}$ hour', '$1$ hour', '$\\frac{2}{3}$ hour'],
      answer: 2,
      solution:
        'The head start is a DISTANCE: $4 \\times 2 = 8$ km. Going the same direction, the gap closes at the DIFFERENCE, $12 - 4 = 8$ km/h, so catching up takes $\\frac{8}{8} = 1$ hour. Check it forward: the runner covers $12$ km, and by then the hiker has walked $3$ hours at $4$ km/h, also $12$ km. ✓ (The choice $\\frac{1}{2}$ is the WRONG MODEL — it ADDS the speeds, $\\frac{8}{16}$, which is the head-on formula; the choice $\\frac{2}{3}$ divides the head start by the runner’s own speed, ignoring that the hiker keeps moving; the choice $2$ repeats the head start TIME.)',
    },
    {
      q: 'A bus leaves a depot at $40$ mph. Half an hour later a van leaves the same depot on the same road at $60$ mph. How far from the depot does the van catch the bus?',
      choices: ['$20$ miles', '$60$ miles', '$30$ miles', '$12$ miles'],
      answer: 1,
      solution:
        'The bus’s head start is $40 \\times \\frac{1}{2} = 20$ miles. Same direction, so the gap closes at $60 - 40 = 20$ mph, taking $\\frac{20}{20} = 1$ hour. The question asks for the DISTANCE, so the van has gone $60 \\times 1 = 60$ miles. Check it forward: the bus has been driving $1.5$ hours at $40$ mph, also $60$ miles. ✓ (The choice $12$ is the WRONG MODEL — it adds the speeds, closing in $\\frac{20}{100} = 0.2$ hour and giving $60 \\times 0.2$; the choice $20$ stops at the head start; the choice $30$ is the van’s distance in the first half hour of the chase.)',
    },
    {
      q: 'A walker leaves a gate at $3$ mph. Forty-five minutes later a jogger sets out along the same path and catches the walker in exactly $30$ minutes. How fast does the jogger run?',
      choices: ['$4.5$ mph', '$1.5$ mph', '$6$ mph', '$7.5$ mph'],
      answer: 3,
      solution:
        'The head start is $3 \\times \\frac{3}{4} = 2.25$ miles, and the jogger erases it in $\\frac{1}{2}$ hour, so the gap must close at $\\frac{2.25}{1/2} = 4.5$ mph. Same direction means that closing speed is the DIFFERENCE, so the jogger runs $3 + 4.5 = 7.5$ mph. Check it forward: the jogger covers $7.5 \\times \\frac{1}{2} = 3.75$ miles, and the walker has been going $1.25$ hours at $3$ mph, also $3.75$ miles. ✓ (The choice $1.5$ is the WRONG MODEL — treating the closing speed as a SUM gives $4.5 - 3$, and a jogger slower than the walker could never catch up; the choice $4.5$ stops at the closing speed; the choice $6$ uses a $30$-minute head start instead of $45$ minutes.)',
    },
  ],
  // p9 — team time known, recover a partner's solo time by SUBTRACTING rates
  [
    {
      q: 'Working together, two crews clear a lot in $8$ hours. Alone, the first crew would need $24$ hours. How long would the second crew need alone?',
      choices: ['$16$ hours', '$32$ hours', '$4$ hours', '$12$ hours'],
      answer: 3,
      solution:
        'Subtract rates, never times: the second crew’s rate is $\\frac{1}{8} - \\frac{1}{24} = \\frac{3}{24} - \\frac{1}{24} = \\frac{2}{24} = \\frac{1}{12}$ lot per hour, so it needs $12$ hours alone. Check it forward: $\\frac{1}{24} + \\frac{1}{12} = \\frac{1}{24} + \\frac{2}{24} = \\frac{3}{24} = \\frac{1}{8}$. ✓ And $12 > 8$, as a solo time must be. (The choice $16$ subtracts the times, $24 - 8$; the choice $32$ adds them; the choice $4$ halves the team time, which would make one crew faster alone than the pair together — impossible.)',
    },
    {
      q: 'Two pipes together fill a reservoir in $4$ hours. Pipe A alone would take $10$ hours. How long would pipe B take alone?',
      choices: ['$6\\frac{2}{3}$ hours', '$6$ hours', '$14$ hours', '$\\frac{20}{7}$ hours'],
      answer: 0,
      solution:
        'Pipe B’s rate is the team rate minus pipe A’s: $\\frac{1}{4} - \\frac{1}{10} = \\frac{5}{20} - \\frac{2}{20} = \\frac{3}{20}$ reservoir per hour, so pipe B alone needs $\\frac{20}{3} = 6\\frac{2}{3}$ hours. Check it forward: $\\frac{1}{10} + \\frac{3}{20} = \\frac{2}{20} + \\frac{3}{20} = \\frac{5}{20} = \\frac{1}{4}$. ✓ And $6\\frac{2}{3} > 4$, as it must be. (The choice $\\frac{20}{7}$ is the WRONG MODEL — it ADDS the rates instead of subtracting, and lands below the team time, which is impossible; the choice $6$ subtracts the times, $10 - 4$; the choice $14$ adds them.)',
    },
    {
      q: 'Alone, Maya sands a floor in $9$ hours. With Theo helping, the two finish in $6$ hours. How long would Theo need alone?',
      choices: ['$3$ hours', '$15$ hours', '$18$ hours', '$3.6$ hours'],
      answer: 2,
      solution:
        'Theo’s rate is $\\frac{1}{6} - \\frac{1}{9} = \\frac{3}{18} - \\frac{2}{18} = \\frac{1}{18}$ floor per hour, so alone he needs $18$ hours. Check it forward: $\\frac{1}{9} + \\frac{1}{18} = \\frac{2}{18} + \\frac{1}{18} = \\frac{3}{18} = \\frac{1}{6}$. ✓ Theo is the slower worker, which fits — helping only cut Maya’s $9$ hours down to $6$. (The choice $3.6$ is the WRONG MODEL, ADDING the rates instead of subtracting; the choice $3$ subtracts the times, $9 - 6$; the choice $15$ adds them.)',
    },
  ],
  // p10 — three rates at once
  [
    {
      q: 'Three taps fill a trough alone in $3$ hours, $4$ hours, and $6$ hours. With all three open, how long does the trough take?',
      choices: ['$13$ hours', '$4\\frac{1}{3}$ hours', '$1\\frac{1}{3}$ hours', '$3$ hours'],
      answer: 2,
      solution:
        'Add all three rates: $\\frac{1}{3} + \\frac{1}{4} + \\frac{1}{6} = \\frac{4}{12} + \\frac{3}{12} + \\frac{2}{12} = \\frac{9}{12} = \\frac{3}{4}$ trough per hour, so the time is $1 \\div \\frac{3}{4} = \\frac{4}{3} = 1\\frac{1}{3}$ hours. Check it forward: in $\\frac{4}{3}$ hours the taps supply $\\frac{4}{9} + \\frac{1}{3} + \\frac{2}{9} = 1$ trough. ✓ And $1\\frac{1}{3} < 3$, faster than the quickest tap alone. (The choice $13$ ADDS the times, the choice $4\\frac{1}{3}$ averages them, and the choice $3$ just reports the fastest tap — but three taps must beat one.)',
    },
    {
      q: 'Three machines can complete an order alone in $10$ minutes, $15$ minutes, and $30$ minutes. Running all three at once, how long does the order take?',
      choices: ['$55$ minutes', '$5$ minutes', '$18\\frac{1}{3}$ minutes', '$10$ minutes'],
      answer: 1,
      solution:
        'Add the rates: $\\frac{1}{10} + \\frac{1}{15} + \\frac{1}{30} = \\frac{3}{30} + \\frac{2}{30} + \\frac{1}{30} = \\frac{6}{30} = \\frac{1}{5}$ order per minute, so the time is $5$ minutes. Check it forward: in $5$ minutes the machines finish $\\frac{1}{2} + \\frac{1}{3} + \\frac{1}{6} = 1$ whole order. ✓ And $5 < 10$, faster than the quickest machine alone. (The choice $55$ adds the times, the choice $18\\frac{1}{3}$ averages them, and the choice $10$ reports the fastest machine alone.)',
    },
    {
      q: 'Two pipes fill a tank alone in $6$ hours and $12$ hours, and a drain empties the full tank in $8$ hours. Starting from empty with all three open, how long until the tank is full?',
      choices: ['$10$ hours', '$2\\frac{2}{3}$ hours', '$26$ hours', '$8$ hours'],
      answer: 3,
      solution:
        'Fills add and the drain subtracts: net rate $= \\frac{1}{6} + \\frac{1}{12} - \\frac{1}{8} = \\frac{4}{24} + \\frac{2}{24} - \\frac{3}{24} = \\frac{3}{24} = \\frac{1}{8}$ tank per hour, so the tank fills in $8$ hours. Check it forward: in $8$ hours the pipes add $\\frac{8}{6} + \\frac{8}{12} = 2$ tanks and the drain removes $1$, leaving exactly $1$. ✓ (The choice $2\\frac{2}{3}$ is the WRONG MODEL — it ADDS all three rates, letting the drain help fill; the choice $10$ combines the TIMES as $6 + 12 - 8$; the choice $26$ adds all three times.)',
    },
  ],
]

export default {
  book: 'intro-algebra',
  number: 7,
  sections: { '7.3': s73, '7.4': s74 },
}
