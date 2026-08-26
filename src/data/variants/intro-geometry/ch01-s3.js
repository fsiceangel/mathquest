// Introduction to Geometry chapter 1 — variations for section 1.5
// (The Burden of Proof). All problems and solutions are original MathQuest
// content.
//
// House rules for this file:
//  - Every keyed counterexample was worked by hand and every distractor was
//    tested to be sure it is NOT a counterexample: it either satisfies the
//    claim, or it fails the claim’s hypothesis so the claim never speaks about
//    it at all. The prime checks behind slots 5 and 9 are written into their
//    solutions so a reader can redo them.
//  - Each solution gives a primary route and then a genuinely independent
//    second route — an everyday parallel, a flip of the statement, or a fresh
//    arithmetic check — before naming each distractor’s trap in CAPS.
//  - Each slot keeps the shape of its base answer: a count stays a count, a
//    vocabulary word stays a word, a counterexample stays a number or a value
//    of n, a figure question stays a "which claim dies here" question.
//  - Every claim used anywhere in this file appears exactly once, and no
//    invented word is reused: vorp, quen, snik, glimf, dratt, obbo, plisk,
//    morvo, tazz, frell, wibbo, nusk are twelve different words.
//  - The traps running through this section are: COUNTING PAST THE FIRST
//    COUNTEREXAMPLE, DEMANDING A QUOTA, TREATING A COUNTEREXAMPLE AS POWERLESS,
//    MIXING UP THE VOCABULARY, TRUSTING A PILE OF EXAMPLES, TRUSTING THE
//    MACHINE, RIGHT VERDICT FOR THE WRONG REASON, ANSWERING WITH THE ORIGINAL,
//    ANSWERING WITH THE INVERSE, ANSWERING WITH THE CONTRAPOSITIVE, PICKING A
//    NUMBER THE CLAIM NEVER MENTIONS, PICKING A NUMBER THAT OBEYS THE CLAIM,
//    DISPROVING A TRUE STATEMENT, PICKING A FALSE CLAIM THE PICTURE NEVER
//    TESTS, CONFUSING SUPPORT WITH DISPROOF, BREAKING THE CHAIN EARLY, RUNNING
//    THE CHAIN BACKWARD, REFUSING TO REASON ABOUT INVENTED WORDS, and ASSUMING
//    THE CONVERSE.

const s15 = [
  // s1 — one counterexample is the whole job; the rest is decoration.
  [
    {
      q: 'Ines reads the claim "every penguin lives in a hot sandy desert." How many counterexamples does she need in order to prove that claim wrong?',
      choices: [
        'just one',
        'at least three',
        'one for every penguin on Earth',
        'none — counterexamples cannot disprove anything',
      ],
      answer: 0,
      solution:
        'A claim that starts with "every" is promising something about all of them at once, so a single penguin that lives somewhere cold breaks the promise ✓. One counterexample, and the claim is finished. Check a second, independent way with an everyday parallel: if a friend says "every egg in this carton is unbroken" and you lift the lid and see one cracked egg, you do not keep hunting for a second crack — the sentence is already false ✗. (The choice "at least three" is DEMANDING A QUOTA, as though disproof needed a certain amount of evidence; "one for every penguin on Earth" is COUNTING PAST THE FIRST COUNTEREXAMPLE, since the extra penguins add nothing the first one did not already settle; "none — counterexamples cannot disprove anything" is TREATING A COUNTEREXAMPLE AS POWERLESS, which gets the whole idea backward: examples cannot prove, but one counterexample can disprove.)',
    },
    {
      q: 'Jonas claims that every hexagon has six sides of equal length. What is the smallest number of hexagons someone must show him to prove his claim is false?',
      choices: ['$0$', '$2$', '$1$', '$6$'],
      answer: 2,
      solution:
        'Show Jonas one hexagon with sides of different lengths — a long stretched one, say — and his "every" claim is dead ✓. So the smallest number is $1$. Check a second, independent way by flipping the sentence around: the opposite of "every hexagon has six equal sides" is "at least one hexagon does not," and proving an "at least one" statement takes exactly one example ✓. The two sentences are two sides of the same coin, so the count has to be $1$ either way. (The choice $0$ says the claim collapses on its own, but a claim needs a reason to fall; the choice $2$ is DEMANDING A QUOTA; the choice $6$ is COUNTING PAST THE FIRST COUNTEREXAMPLE, borrowing the number of sides for no reason at all.)',
    },
    {
      q: 'Keiko announces, "Every month of the year has thirty-one days." Her brother immediately points at February. How many more counterexamples does Keiko need before her claim is disproved?',
      choices: [
        'at least two more',
        'eleven more — one for every other month',
        'one more, just to be safe',
        'none — February already finished the job',
      ],
      answer: 3,
      solution:
        'February has $28$ days (or $29$ in a leap year), never $31$, so February alone is a month that breaks the claim ✓. The word "every" leaves no room: one failure is a complete disproof, so Keiko needs zero further counterexamples. Check a second, independent way by asking what a second counterexample would add: April would also break the claim, but the sentence "every month has thirty-one days" cannot become more false than false ✗ — there is no extra credit for piling on. (The choices "at least two more" and "one more, just to be safe" are DEMANDING A QUOTA; "eleven more — one for every other month" is COUNTING PAST THE FIRST COUNTEREXAMPLE, confusing disproving the claim with cataloguing every month that breaks it.)',
    },
  ],
  // s2 — the vocabulary of proof: theorem, definition, counterexample.
  [
    {
      q: 'In geometry, a statement that we establish by reasoning from definitions, postulates, and results proved earlier is called',
      choices: ['a theorem', 'a postulate', 'a definition', 'a counterexample'],
      answer: 0,
      solution:
        'A theorem is exactly that: a statement that has earned its place by proof ✓. Check a second, independent way by eliminating from the other end — postulates are the statements we agree to WITHOUT proof, definitions only tell us what a word means, and a counterexample is one case that kills a claim ✗✗✗, so "theorem" is the only word left standing. Picture geometry as a tower: postulates are the foundation stones we lay down for free, and every theorem is a brick we had to earn. (The choice "a postulate" is MIXING UP THE VOCABULARY in the most tempting direction, swapping the statements we prove for the ones we assume; "a definition" mistakes naming for proving; "a counterexample" names a tool for tearing claims down, not for building them up.)',
    },
    {
      q: 'A statement whose only job is to say exactly what a word means is called',
      choices: ['a theorem', 'a definition', 'a postulate', 'a converse'],
      answer: 1,
      solution:
        '"A chord is a segment with both endpoints on a circle" does not claim anything about the world — it simply hands out a name. That is a definition ✓. Check a second, independent way by testing what happens if you argue with it: you cannot disprove a definition, because there is nothing there to be wrong; you can only decide the word is unhelpful ✓. Theorems and postulates make claims that could in principle fail, so neither of them behaves this way ✗. (The choice "a theorem" is MIXING UP THE VOCABULARY, since a theorem must be proved while a definition never is; "a postulate" is close but a postulate asserts a fact we accept, not a meaning we assign; "a converse" is not a kind of statement at all, but what you get by flipping an if-then statement around.)',
    },
    {
      q: 'A single case that shows an "every..." claim is false is called',
      choices: ['a postulate', 'a theorem', 'a counterexample', 'a definition'],
      answer: 2,
      solution:
        'One case that breaks a claim is a counterexample — the "counter" means it works against the claim ✓. Check a second, independent way by watching what each word DOES: a postulate is accepted, a theorem is proved, a definition explains, and only one of the four words is about tearing something down ✓. That is the one we want. (The choice "a postulate" is MIXING UP THE VOCABULARY — postulates support the building rather than knock it over; "a theorem" also builds; "a definition" merely names, and no amount of naming can make a claim false.)',
    },
  ],
  // s3 — a mountain of examples is still not a proof.
  [
    {
      q: 'Noor writes a computer program that tests a claim about whole numbers for a million different cases, and it works every single time. Has the claim been proved?',
      choices: [
        'Yes — a million cases is far more than anyone could check by hand',
        'No — a million cases still leaves infinitely many untested',
        'Yes — a computer does not make mistakes',
        'Only if the program tested the cases in order, starting from the smallest',
      ],
      answer: 1,
      solution:
        'A million is a huge number of examples and still a tiny nibble of an infinite supply — after the millionth case there are infinitely many whole numbers left, and the very next one could fail ✓. A proof must cover all of them at once with an argument, not one at a time with a machine. Check a second, independent way with an everyday parallel: tasting a million grains of sugar from a warehouse tells you nothing about the sack nobody opened ✗. (The choice "a million cases is far more than anyone could check by hand" is TRUSTING A PILE OF EXAMPLES — the size of the pile is not the issue, its finiteness is; "a computer does not make mistakes" is TRUSTING THE MACHINE, answering a question about logic with a question about reliability; the last choice invents a rule about ORDER, but testing in order still stops somewhere and leaves the rest untouched.)',
    },
    {
      q: 'Leo’s class draws thirty different triangles and carefully measures the three angles of each one. Every time, the angles add to about $180^\\circ$. Has the class proved that this happens for every triangle?',
      choices: [
        'Yes — thirty triangles is a big enough sample',
        'Yes, as long as the thirty triangles were all different shapes',
        'No — measuring thirty drawings cannot cover every triangle there is',
        'No — the angles of a triangle do not always add to $180^\\circ$',
      ],
      answer: 2,
      solution:
        'The class checked thirty triangles out of infinitely many, so thirty-one cases were left over — along with every triangle nobody will ever draw ✓. Their measurements make the pattern believable, and believable is not proved. Check a second, independent way by looking at what a ruler and protractor can even deliver: a measurement is always a little bit approximate, so "about $180^\\circ$" thirty times over could not settle an exact claim even if there were only thirty triangles in the world ✗. (The first two choices are TRUSTING A PILE OF EXAMPLES, one of them dressed up with a rule about variety; the last choice is a RIGHT VERDICT FOR THE WRONG REASON — it says "no" for the false reason that the angle sum fails sometimes, when in fact the angle sum really is always $180^\\circ$ and can be proved, just not by measuring.)',
    },
    {
      q: 'Pilar tests a claim on the first $500$ whole numbers and finds no counterexample among them. Which statement about the claim is correct?',
      choices: [
        'It is proved, because $500$ cases is a lot of cases',
        'It is disproved, because she never found a counterexample',
        'It is proved for the numbers she skipped as well',
        'It might still be false for some number she did not check',
      ],
      answer: 3,
      solution:
        'Finding no counterexample among the first $500$ numbers rules out exactly those $500$ numbers, and nothing else ✓. Number $501$, or $5$ million, could still break it. Check a second, independent way by remembering a claim from this very section: "$n^2 + n + 11$ is prime" survives $n = 1$ through $n = 9$ and then dies at $n = 10$ ✗ — a claim can pass a long run of tests and still be false, which is precisely why a run of tests is not a proof. (The choice "$500$ cases is a lot" is TRUSTING A PILE OF EXAMPLES; "it is disproved" gets the logic exactly backward, since failing to find a counterexample is weak evidence FOR a claim, never against it; "proved for the numbers she skipped as well" would need a reason why the skipped numbers must behave like the tested ones, and no such reason was given.)',
    },
  ],
  // s4 — state the converse; one of these converses happens to be true.
  [
    {
      q: 'What is the converse of the statement "If a number is a multiple of $6$, then it is even"?',
      choices: [
        'If a number is even, then it is a multiple of $6$',
        'If a number is not a multiple of $6$, then it is not even',
        'If a number is not even, then it is not a multiple of $6$',
        'If a number is a multiple of $6$, then it is even',
      ],
      answer: 0,
      solution:
        'The converse swaps the if-part and the then-part, so "multiple of $6$ $\\Rightarrow$ even" becomes "even $\\Rightarrow$ multiple of $6$" ✓. Check a second, independent way by testing whether the flipped sentence really is a different claim: the original is true, but the converse fails at $4$, which is even and is not a multiple of $6$ ✗. Two sentences that disagree about the number $4$ cannot be the same sentence, so the flip really did change the meaning. (The choice "not a multiple of $6$ $\\Rightarrow$ not even" is ANSWERING WITH THE INVERSE, which negates both halves instead of swapping them; "not even $\\Rightarrow$ not a multiple of $6$" is ANSWERING WITH THE CONTRAPOSITIVE, which is true but is a restatement of the original rather than its converse; the last choice is ANSWERING WITH THE ORIGINAL, unchanged.)',
    },
    {
      q: 'What is the converse of the statement "If a whole number ends in the digit $0$, then it is a multiple of $10$"?',
      choices: [
        'If a whole number does not end in the digit $0$, then it is not a multiple of $10$',
        'If a whole number is a multiple of $10$, then it ends in the digit $0$',
        'If a whole number is not a multiple of $10$, then it does not end in the digit $0$',
        'If a whole number ends in the digit $0$, then it is a multiple of $10$',
      ],
      answer: 1,
      solution:
        'Swap the halves: "ends in $0$ $\\Rightarrow$ multiple of $10$" becomes "multiple of $10$ $\\Rightarrow$ ends in $0$" ✓. This time the converse happens to be TRUE — every multiple of $10$ does end in a $0$ — which is a useful reminder that a converse is not automatically false, it is simply a separate claim that has to be judged on its own. Check a second, independent way by hunting for a counterexample to the converse and coming up empty: a multiple of $10$ is $10$ copies of something, and $10$ copies of a whole number always land on a number ending in $0$ ✓, so there is nothing to find. (The first choice is ANSWERING WITH THE INVERSE; the third is ANSWERING WITH THE CONTRAPOSITIVE; the fourth is ANSWERING WITH THE ORIGINAL. All three are legitimate sentences — they are just not the converse.)',
    },
    {
      q: 'What is the converse of the statement "If Ines is at swim practice, then she is wearing goggles"?',
      choices: [
        'If Ines is at swim practice, then she is wearing goggles',
        'If Ines is not at swim practice, then she is not wearing goggles',
        'If Ines is not wearing goggles, then she is not at swim practice',
        'If Ines is wearing goggles, then she is at swim practice',
      ],
      answer: 3,
      solution:
        'Put the goggles first and the practice second: "If Ines is wearing goggles, then she is at swim practice" ✓. Check a second, independent way by asking whether the flip could change the truth: Ines might pull her goggles on at the beach or in the bathtub, so the converse can fail even on a day when the original holds ✗. A sentence and its flip can disagree, which is the whole point of naming the converse separately. (The choice that repeats the sentence is ANSWERING WITH THE ORIGINAL; "not at practice $\\Rightarrow$ not wearing goggles" is ANSWERING WITH THE INVERSE; "not wearing goggles $\\Rightarrow$ not at practice" is ANSWERING WITH THE CONTRAPOSITIVE, which always carries the same truth as the original and is therefore never the converse.)',
    },
  ],
  // s5 — a counterexample must satisfy the hypothesis and break the conclusion.
  [
    {
      q: 'Which number is a counterexample to the claim "every whole number greater than $1$ whose last digit is odd is a prime number"?',
      choices: ['$3$', '$9$', '$12$', '$11$'],
      answer: 1,
      solution:
        'A counterexample has to do two jobs at once: fit what the claim talks about, and then break what the claim promises. $9$ is greater than $1$ and its last digit $9$ is odd, so the claim covers it — and $9 = 3 \\times 3$ is not prime ✗, so the claim is broken ✓. Check a second, independent way by asking what the claim would have to look like to survive $9$: it would need to exclude multiples of $3$, and it says nothing of the kind, so $9$ slips straight through the net ✓. (The choice $3$ is PICKING A NUMBER THAT OBEYS THE CLAIM — it ends in an odd digit and is prime, so it supports the claim; $11$ does the same; the choice $12$ is PICKING A NUMBER THE CLAIM NEVER MENTIONS, since its last digit $2$ is even and the claim only speaks about numbers ending in an odd digit, so $12$ cannot test it at all.)',
    },
    {
      q: 'Ines claims that every square number is even. Which number shows that she is wrong?',
      choices: ['$4$', '$10$', '$25$', '$16$'],
      answer: 2,
      solution:
        'We need a square number that is odd. $25 = 5 \\times 5$ is a square, and $25$ is odd ✗ — claim broken ✓. Check a second, independent way by finding the pattern behind it: squaring an odd number always gives an odd number ($1, 9, 25, 49, \\dots$), so odd squares are not a fluke, they are half of all squares, and Ines’ claim was doomed from the start ✓. (The choices $4$ and $16$ are PICKING A NUMBER THAT OBEYS THE CLAIM: both are squares and both are even, so they support Ines rather than sink her; the choice $10$ is PICKING A NUMBER THE CLAIM NEVER MENTIONS, since $10$ is not a square at all — $3 \\times 3 = 9$ and $4 \\times 4 = 16$ step right over it.)',
    },
    {
      q: 'Which number is a counterexample to the claim "every whole number that is divisible by $4$ is also divisible by $8$"?',
      choices: ['$16$', '$10$', '$24$', '$12$'],
      answer: 3,
      solution:
        'We want a number that IS divisible by $4$ but is NOT divisible by $8$. Try $12$: $12 = 4 \\times 3$ ✓, while $12 \\div 8 = 1.5$ is not a whole number ✗ — so $12$ fits the claim’s hypothesis and breaks its conclusion ✓. Check a second, independent way by listing the multiples of $4$ and crossing off the multiples of $8$: $4, 8, 12, 16, 20, 24, 28, \\dots$ and the survivors are $4, 12, 20, 28, \\dots$ — every other multiple of $4$ escapes, so counterexamples are everywhere ✓. (The choices $16 = 8 \\times 2$ and $24 = 8 \\times 3$ are PICKING A NUMBER THAT OBEYS THE CLAIM, since both are divisible by $4$ and by $8$; the choice $10$ is PICKING A NUMBER THE CLAIM NEVER MENTIONS, because $10$ is not divisible by $4$ and so the claim makes no promise about it.)',
    },
  ],
  // s6 — four right angles, unequal sides: which claim does the picture kill?
  [
    {
      q: 'The figure shows a four-sided figure whose four angles are all right angles, with sides of length $6$ and $3$. Which claim does this figure disprove?',
      fig: {
        view: [-1, -1, 7, 4],
        elems: [
          { t: 'poly', pts: [[0, 0], [6, 0], [6, 3], [0, 3]], fill: false },
          { t: 'right', at: [0, 0], from: [6, 0], to: [0, 3] },
          { t: 'right', at: [6, 0], from: [6, 3], to: [0, 0] },
          { t: 'right', at: [6, 3], from: [0, 3], to: [6, 0] },
          { t: 'right', at: [0, 3], from: [0, 0], to: [6, 3] },
          { t: 'label', p: [3, 0], text: '6', dx: 0, dy: 14 },
          { t: 'label', p: [0, 1.5], text: '3', dx: -12, dy: 0 },
        ],
      },
      choices: [
        'Every square has four right angles',
        'Every rectangle is a square',
        'Every quadrilateral has four sides',
        'A rectangle can have two sides of different lengths',
      ],
      answer: 1,
      solution:
        'The figure is a rectangle: four right angles, opposite sides equal. But its sides measure $6$ and $3$, and $6 \\ne 3$, so it is not a square ✗. That is a rectangle that is not a square, which is exactly what "every rectangle is a square" forbids ✓. Check a second, independent way by testing the claim on its own before looking at any picture: a square needs all four sides equal, while a rectangle only promises equal angles, so the word "rectangle" was never strong enough to force "square" ✓ — and the $6$-by-$3$ figure is what that gap looks like. (The choice "every square has four right angles" is DISPROVING A TRUE STATEMENT — it is true, and this figure has four right angles too, so it agrees with it; "every quadrilateral has four sides" is true by definition and untouchable; "a rectangle can have two sides of different lengths" is CONFUSING SUPPORT WITH DISPROOF, since the figure is a living example of that claim rather than a counterexample to it.)',
    },
    {
      q: 'A quadrilateral has four right angles and side lengths $7$ and $4$, as shown. Which claim does this figure knock down?',
      fig: {
        view: [-1, -1, 8, 5],
        elems: [
          { t: 'poly', pts: [[0, 0], [7, 0], [7, 4], [0, 4]], fill: false },
          { t: 'right', at: [0, 0], from: [7, 0], to: [0, 4] },
          { t: 'right', at: [7, 0], from: [7, 4], to: [0, 0] },
          { t: 'right', at: [7, 4], from: [0, 4], to: [7, 0] },
          { t: 'right', at: [0, 4], from: [0, 0], to: [7, 4] },
          { t: 'label', p: [3.5, 0], text: '7', dx: 0, dy: 14 },
          { t: 'label', p: [0, 2], text: '4', dx: -12, dy: 0 },
        ],
      },
      choices: [
        'A figure with four right angles must have all four sides the same length',
        'Every four-sided figure has four right angles',
        'Every square has four sides of equal length',
        'A quadrilateral can have four right angles',
      ],
      answer: 0,
      solution:
        'Read the claim as a promise: four right angles are supposed to force four equal sides. The figure keeps the first part of the bargain — all four angles are right angles ✓ — and then breaks the second, since $7 \\ne 4$ ✗. One picture, one broken promise, claim gone ✓. Check a second, independent way by squeezing the shape in your imagination: slide the top edge down and the angles stay at $90^\\circ$ the whole time while the height shrinks from $7$ to $4$ to almost nothing, so right angles clearly do not pin the side lengths down at all ✓. (The choice "every four-sided figure has four right angles" is PICKING A FALSE CLAIM THE PICTURE NEVER TESTS — that claim is false, but you would need a slanted quadrilateral to show it, and this figure has four right angles; "every square has four sides of equal length" is DISPROVING A TRUE STATEMENT, and a definition at that; "a quadrilateral can have four right angles" is CONFUSING SUPPORT WITH DISPROOF, since the figure is an example of it.)',
    },
    {
      q: 'The figure below has four right angles, and its sides measure $4$ and $1.5$. Which claim does it serve as a counterexample to?',
      fig: {
        view: [-1, -1, 5, 3],
        elems: [
          { t: 'poly', pts: [[0, 0], [4, 0], [4, 1.5], [0, 1.5]], fill: false },
          { t: 'right', at: [0, 0], from: [4, 0], to: [0, 1.5] },
          { t: 'right', at: [4, 0], from: [4, 1.5], to: [0, 0] },
          { t: 'right', at: [4, 1.5], from: [0, 1.5], to: [4, 0] },
          { t: 'right', at: [0, 1.5], from: [0, 0], to: [4, 1.5] },
          { t: 'label', p: [2, 0], text: '4', dx: 0, dy: 14 },
          { t: 'label', p: [0, 0.75], text: '1.5', dx: -14, dy: 0 },
        ],
      },
      choices: [
        'Every square is a rectangle',
        'A quadrilateral can have all four of its angles equal',
        'A quadrilateral whose angles are all $90^\\circ$ must be a square',
        'A shape with four sides is called a quadrilateral',
      ],
      answer: 2,
      solution:
        'All four angles here are $90^\\circ$, so the claim’s condition is met ✓ — and then the sides come out $4$ and $1.5$, which are nowhere near equal ✗, so the shape is not a square. Condition met, conclusion broken: that is a counterexample ✓. Check a second, independent way by counting what each word controls: "all angles $90^\\circ$" is one requirement, "all sides equal" is a second, separate requirement, and a square needs both. Meeting one of two requirements has never been enough ✓. (The choice "every square is a rectangle" is DISPROVING A TRUE STATEMENT — a square does have four right angles, so it qualifies as a rectangle; "a quadrilateral can have all four of its angles equal" is CONFUSING SUPPORT WITH DISPROOF, since this figure shows it happening; "a shape with four sides is called a quadrilateral" is a definition, and definitions cannot be disproved by pictures.)',
    },
  ],
  // s7 — chords, centers, and one deliberate reversal.
  [
    {
      q: 'In the circle with center $O$ shown, $\\overline{RS}$ is a chord that stays well away from $O$. Which claim does this figure disprove?',
      fig: {
        view: [-5, -5, 5, 5],
        elems: [
          { t: 'circle', c: [0, 0], r: 4 },
          { t: 'seg', a: [-2.4, 3.2], b: [3.2, 2.4] },
          { t: 'point', p: [0, 0], label: 'O', dx: 0, dy: 14 },
          { t: 'point', p: [-2.4, 3.2], label: 'R', dx: -12, dy: -6 },
          { t: 'point', p: [3.2, 2.4], label: 'S', dx: 12, dy: -6 },
        ],
      },
      choices: [
        'Every chord of a circle passes through the center',
        'Every diameter of a circle is a chord',
        'A chord has both of its endpoints on the circle',
        'Every radius of a circle is a chord',
      ],
      answer: 0,
      solution:
        '$\\overline{RS}$ has both endpoints on the circle, so it is a chord ✓ — and the picture shows it sailing past $O$ without touching it ✗. A chord that misses the center is exactly what "every chord passes through the center" says cannot exist, so that claim falls ✓. Check a second, independent way by counting chords instead of looking: pick any two points on the circle and you get a chord, and only the pairs sitting exactly opposite each other give a line through $O$ — almost every pair misses ✓, so counterexamples like $\\overline{RS}$ are the rule rather than the exception. (The choice "every diameter of a circle is a chord" is DISPROVING A TRUE STATEMENT, since a diameter does have both endpoints on the circle; "a chord has both of its endpoints on the circle" is CONFUSING SUPPORT WITH DISPROOF, because $\\overline{RS}$ obeys it; "every radius of a circle is a chord" is PICKING A FALSE CLAIM THE PICTURE NEVER TESTS — it is false, but no radius is drawn here, so this figure cannot be the thing that breaks it.)',
    },
    {
      q: 'The figure shows a circle with center $O$ and a chord $\\overline{JK}$ that slices a small piece off the top. Which claim does this figure disprove?',
      fig: {
        view: [-3.5, -3.5, 3.5, 3.5],
        elems: [
          { t: 'circle', c: [0, 0], r: 2.5 },
          { t: 'seg', a: [-1.5, 2], b: [2, 1.5] },
          { t: 'point', p: [0, 0], label: 'O', dx: 0, dy: 14 },
          { t: 'point', p: [-1.5, 2], label: 'J', dx: -12, dy: -6 },
          { t: 'point', p: [2, 1.5], label: 'K', dx: 12, dy: -6 },
        ],
      },
      choices: [
        'Every chord has both of its endpoints on the circle',
        'Some chords of a circle miss the center',
        'Every chord of a circle cuts the circle into two arcs of equal size',
        'A circle has exactly one center',
      ],
      answer: 2,
      solution:
        '$\\overline{JK}$ cuts the circle into a little arc above it and a big arc below it, and one glance says those two arcs are nothing like equal ✗ — so "every chord cuts the circle into two arcs of equal size" is finished ✓. Check a second, independent way without trusting your eyes: a chord splits the circle into two equal arcs only when it is a diameter, because equal arcs mean each is a semicircle. $\\overline{JK}$ does not pass through $O$, so it is not a diameter, so its arcs cannot both be semicircles ✓. (The choice "every chord has both of its endpoints on the circle" is DISPROVING A TRUE STATEMENT — that is the definition of a chord; "some chords of a circle miss the center" is CONFUSING SUPPORT WITH DISPROOF, since $\\overline{JK}$ is precisely such a chord; "a circle has exactly one center" is true and this drawing never puts it in question.)',
    },
    {
      q: 'In the figure, $\\overline{AB}$ is a chord of the circle that runs straight through the center $O$. Which claim does this figure disprove?',
      fig: {
        view: [-4, -4, 4, 4],
        elems: [
          { t: 'circle', c: [0, 0], r: 3 },
          { t: 'seg', a: [-2.4, -1.8], b: [2.4, 1.8] },
          { t: 'point', p: [0, 0], label: 'O', dx: -6, dy: 14 },
          { t: 'point', p: [-2.4, -1.8], label: 'A', dx: -12, dy: 8 },
          { t: 'point', p: [2.4, 1.8], label: 'B', dx: 12, dy: -6 },
        ],
      },
      choices: [
        'Every diameter of a circle is also a chord',
        'A diameter is twice as long as a radius',
        'Every chord of a circle is a diameter',
        'No chord of a circle passes through the center',
      ],
      answer: 3,
      solution:
        'This time the picture argues in the other direction. $\\overline{AB}$ has both endpoints on the circle, so it is a chord ✓, and it plainly runs through $O$ ✓ — so the sweeping claim "no chord passes through the center" has met the one chord it cannot survive ✗. Check a second, independent way by building such a chord on purpose: start at any point on the circle, draw the segment through $O$, and continue to the far side. Both ends land on the circle, so you get a chord through the center every single time ✓, which means the claim fails not once but infinitely often. (The choice "every diameter of a circle is also a chord" is CONFUSING SUPPORT WITH DISPROOF, because $\\overline{AB}$ is an example of it; "a diameter is twice as long as a radius" is DISPROVING A TRUE STATEMENT; "every chord of a circle is a diameter" is false, but this figure shows a chord that IS a diameter, so it supports that claim instead of breaking it — to break it you would need a chord that misses $O$.)',
    },
  ],
  // s8 — chain the implications, and notice when the chain will not reverse.
  [
    {
      q: 'All vorps are quens. All quens are sniks. Jonas has a vorp in his pocket. What can he conclude about it?',
      choices: [
        'It is both a quen and a snik',
        'It is a quen but might not be a snik',
        'Every snik is a vorp',
        'Nothing at all — the words are invented',
      ],
      answer: 0,
      solution:
        'Follow the links one at a time. The object is a vorp, and all vorps are quens, so it is a quen ✓. It is a quen, and all quens are sniks, so it is a snik ✓. Both links hold, so it is a quen AND a snik. Check a second, independent way with an everyday parallel that has the same shape: all robins are birds, and all birds are animals, so a robin in your pocket is a bird and an animal ✓ — the reasoning never needed to know what a robin is, only how the sentences fit together. (The choice "a quen but might not be a snik" is BREAKING THE CHAIN EARLY, using the first fact and forgetting the second; "every snik is a vorp" is RUNNING THE CHAIN BACKWARD, the converse trap — sniks are the biggest group here, not the smallest; "nothing at all — the words are invented" is REFUSING TO REASON ABOUT INVENTED WORDS, but logic reads structure, not vocabulary.)',
    },
    {
      q: 'All glimfs are dratts. All dratts are obbos. Keiko spots a glimf on the shelf. Which statement must be true?',
      choices: [
        'Every obbo on the shelf is a glimf',
        'The glimf is a dratt, and it is also an obbo',
        'The glimf is an obbo but is not a dratt',
        'Nothing can be decided until we know what the words mean',
      ],
      answer: 1,
      solution:
        'Glimf $\\Rightarrow$ dratt gives the first step, and dratt $\\Rightarrow$ obbo gives the second, so Keiko’s glimf is a dratt and an obbo ✓. Check a second, independent way by drawing three nested rings: the glimfs sit inside the dratts, and the dratts sit inside the obbos. Anything in the innermost ring is inside all three rings at once ✓ — and that picture also shows why nothing outside can be dragged inward. (The choice "every obbo on the shelf is a glimf" is RUNNING THE CHAIN BACKWARD; "an obbo but not a dratt" is impossible, since the only route from glimf to obbo passes through dratt — you cannot keep the destination and delete the road; "nothing can be decided until we know what the words mean" is REFUSING TO REASON ABOUT INVENTED WORDS, though the two given sentences are all the meaning the argument ever uses.)',
    },
    {
      q: 'All plisks are morvos, and all morvos are tazzes. Leo is told that a certain object is a tazz. What can he conclude about that object?',
      choices: [
        'It must be a plisk',
        'It must be a morvo',
        'It is a morvo but not a plisk',
        'Nothing — the chain only runs the other way',
      ],
      answer: 3,
      solution:
        'The two facts point one way only: plisk $\\Rightarrow$ morvo $\\Rightarrow$ tazz. Being told the object is a tazz puts Leo at the END of the chain, and there is no arrow leading back ✓, so he can conclude nothing at all about it. Check a second, independent way with an everyday parallel: all poodles are dogs and all dogs are animals, but hearing "this is an animal" leaves you knowing nothing — it might be a poodle, it might be a jellyfish ✓. (The choices "it must be a plisk" and "it must be a morvo" are RUNNING THE CHAIN BACKWARD, one step and two steps respectively, which is ASSUMING THE CONVERSE; "a morvo but not a plisk" runs it backward once and then invents a restriction on top, when nothing given rules a plisk out either.)',
    },
  ],
  // s9 — polynomials that pass every easy test and still fail.
  [
    {
      q: 'Consider the claim: "For every whole number $n$, the value $n^2 + n + 5$ is prime." Which value of $n$ is a counterexample?',
      choices: ['$n = 4$', '$n = 1$', '$n = 2$', '$n = 3$'],
      answer: 0,
      solution:
        'Work through the choices. $n = 1$ gives $1 + 1 + 5 = 7$, prime ✓. $n = 2$ gives $4 + 2 + 5 = 11$, prime ✓. $n = 3$ gives $9 + 3 + 5 = 17$, prime ✓. $n = 4$ gives $16 + 4 + 5 = 25 = 5 \\times 5$, not prime ✗ — there is the counterexample. Check a second, independent way by predicting the failure before computing it: at $n = 5$ the expression reads $5^2 + 5 + 5 = 5(5 + 1 + 1)$, a visible multiple of $5$, and multiples of $5$ do not wait politely for $n = 5$ — the one just before it, $25$ at $n = 4$, is already a multiple of $5$ ✓. Three tests passed and the fourth failed: examples are not proofs. (The choices $n = 1$, $n = 2$ and $n = 3$ are PICKING A NUMBER THAT OBEYS THE CLAIM — each one produces a prime and therefore supports the claim instead of breaking it.)',
    },
    {
      q: 'The claim says: "For every whole number $n$, the value $n^2 + 3n + 3$ is prime." Which value of $n$ breaks it?',
      choices: ['$n = 2$', '$n = 3$', '$n = 4$', '$n = 1$'],
      answer: 1,
      solution:
        'Test them in order. $n = 1$ gives $1 + 3 + 3 = 7$, prime ✓. $n = 2$ gives $4 + 6 + 3 = 13$, prime ✓. $n = 3$ gives $9 + 9 + 3 = 21 = 3 \\times 7$, not prime ✗ — claim broken. For completeness $n = 4$ gives $16 + 12 + 3 = 31$, prime ✓, so the expression picks itself up again afterwards. Check a second, independent way by watching the $3$s: when $n$ is a multiple of $3$, both $n^2$ and $3n$ are multiples of $3$, and the final $+3$ is too, so the whole value is a multiple of $3$ ✓ — and any multiple of $3$ bigger than $3$ itself cannot be prime. That argument predicts $n = 3$ as a failure without evaluating anything. (The choices $n = 1$, $n = 2$ and $n = 4$ are PICKING A NUMBER THAT OBEYS THE CLAIM: $7$, $13$ and $31$ are all prime, so each of those values supports the claim.)',
    },
    {
      q: 'The expression $n^2 - n + 17$ produces a prime for $n = 1$, for $n = 2$, and for a long run of whole numbers after that. Which value of $n$ is a counterexample to the claim that it is always prime?',
      choices: ['$n = 5$', '$n = 10$', '$n = 17$', '$n = 2$'],
      answer: 2,
      solution:
        'Try the choices. $n = 2$ gives $4 - 2 + 17 = 19$, prime ✓. $n = 5$ gives $25 - 5 + 17 = 37$, prime ✓. $n = 10$ gives $100 - 10 + 17 = 107$, and $107$ is not divisible by $2$, $3$, $5$ or $7$, so it is prime ✓. But $n = 17$ gives $289 - 17 + 17 = 289 = 17 \\times 17$ ✗ — not prime. Check a second, independent way by factoring instead of multiplying: rewrite the expression as $n(n - 1) + 17$, and when $n = 17$ that is $17 \\times 16 + 17 = 17(16 + 1) = 17 \\times 17$ ✓ — the $17$ pulls straight out, so the value cannot possibly be prime. This expression survives every $n$ from $1$ to $16$ and still dies at $17$, which is the sharpest reason in this whole section to distrust a run of successful tests. (The choices $n = 5$, $n = 10$ and $n = 2$ are PICKING A NUMBER THAT OBEYS THE CLAIM, since $37$, $107$ and $19$ are all prime.)',
    },
  ],
  // s10 — the converse trap in one step.
  [
    {
      q: 'It is a fact that every frell has exactly three corners. Noor draws a shape with exactly three corners. Is her shape a frell?',
      choices: [
        'Not necessarily — that argument runs the fact backward',
        'Yes — three corners is the test for being a frell',
        'Yes, as long as the three corners are all different sizes',
        'No — a frell must have more than three corners',
      ],
      answer: 0,
      solution:
        'The fact says frell $\\Rightarrow$ three corners. Noor wants three corners $\\Rightarrow$ frell, which is the converse, and a converse never comes free ✓. Her shape might be a frell, or it might be some other three-cornered thing entirely; the given fact simply does not decide. Check a second, independent way by testing the flipped statement on a case we know well: every square has four corners, yet a four-cornered shape can easily be a long thin rectangle ✗ — same shape of argument, obviously wrong conclusion, so the argument shape itself is what is broken. (The choice "three corners is the test" is ASSUMING THE CONVERSE outright; "as long as the corners are all different sizes" is ASSUMING THE CONVERSE with a decoration attached, since the given fact says nothing whatever about corner sizes; "a frell must have more than three corners" flatly contradicts the fact we were handed.)',
    },
    {
      q: 'It is a fact that every wibbo is striped. Pilar finds a striped scarf. Can she conclude that the scarf is a wibbo?',
      choices: [
        'Yes — the fact guarantees it',
        'No — a wibbo is never striped',
        'No — the fact runs from wibbo to striped, not back again',
        'Yes, as long as the stripes go the right way',
      ],
      answer: 2,
      solution:
        'Wibbo $\\Rightarrow$ striped tells you what to expect once you already know something is a wibbo. Pilar is starting from the stripes, which is the wrong end of the arrow ✓, so she cannot conclude anything about the scarf. Check a second, independent way by picturing the two groups as rings: the wibbos sit inside the striped things, and the striped ring can be far bigger — full of striped socks, striped candy and striped scarves that are not wibbos ✓. Standing in the big ring tells you nothing about the small one. (The choice "the fact guarantees it" is ASSUMING THE CONVERSE; "a wibbo is never striped" contradicts the fact we were given; "as long as the stripes go the right way" is ASSUMING THE CONVERSE with an invented extra condition, since nothing in the fact mentions the direction of stripes.)',
    },
    {
      q: 'Suppose every nusk weighs more than five kilograms. Ines lifts a box that weighs seven kilograms. What can she say about the box?',
      choices: [
        'It is definitely a nusk',
        'It is definitely not a nusk',
        'It is a nusk, because seven is more than five',
        'It may or may not be a nusk — the fact does not decide',
      ],
      answer: 3,
      solution:
        'The fact says nusk $\\Rightarrow$ heavier than five kilograms. The box is heavier than five kilograms, which puts it in the group where nusks live, but that group can hold plenty of non-nusks too ✓ — so Ines learns nothing definite either way. Check a second, independent way by trying to build a counterexample to each strong answer: a seven-kilogram nusk is allowed by the fact, and so is a seven-kilogram bag of potatoes, so "definitely a nusk" ✗ and "definitely not a nusk" ✗ both fall at once, leaving only the cautious answer ✓. (The choices "definitely a nusk" and "it is a nusk, because seven is more than five" are ASSUMING THE CONVERSE, the second one showing its work; "definitely not a nusk" reads the fact as though it EXCLUDED heavy things, when the fact requires them to be heavy.)',
    },
  ],
]

export default {
  book: 'intro-geometry',
  number: 1,
  sections: {
    '1.5': s15,
  },
}
