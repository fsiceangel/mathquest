import { applyPrealgebraVariantReview } from './prealgebra-variant-review.js'
// Editorial estimates for a student finishing Beast Academy, with the lesson
// available first. These are reasoning demands, not measured success rates.
const levels = (s) => [...s].map(Number)
const chapter = (rows, challenge, worksheet, prerequisites, rationale) => ({
  sections: Object.fromEntries(Object.entries(rows).map(([id, scores]) => [id, {
    scope: 'core', levels: levels(scores), prerequisites, rationale,
  }])),
  challenge: levels(challenge), worksheet: levels(worksheet),
})

export default applyPrealgebraVariantReview({
  book: 'prealgebra',
  chapters: {
    1: chapter({ '1.2':'1111112122', '1.3':'1111112223', '1.4':'1111111212', '1.5':'1111111122', '1.6':'1111111222', '1.7':'1111112122' },
      '222122112222','2222111232',[], 'Arithmetic review after Beast Academy; regrouping and factor-pair choices add reasoning, not large numbers alone.'),
    2: chapter({ '2.1':'1111111222', '2.2':'1111111123', '2.3':'1111111112', '2.4':'1111111222' },
      '222222222322','1111111222',['prealgebra/1.3','prealgebra/1.4','prealgebra/1.6'], 'Exponent laws are direct practice; units-digit cycles and reversing consecutive squares require a strategy.'),
    3: chapter({ '3.1':'1111111122', '3.2':'1111111222', '3.3':'1111112112', '3.4':'1111112123', '3.5':'1111112223', '3.6':'1111112223', '3.7':'1111112222' },
      '222322223323','1111213123',['prealgebra/2.1','prealgebra/2.2'], 'Divisibility and factorization precede constrained divisor counts and reverse LCM questions.'),
    4: chapter({ '4.1':'1111111121', '4.2':'1111112122', '4.3':'1111111222', '4.4':'1111111122', '4.5':'1111111122', '4.6':'1111111222', '4.7':'1111112122', '4.8':'1112222222' },
      '221222222222','1111112222',['prealgebra/1.6','prealgebra/3.7'], 'Fraction fluency; reverse amounts and a fraction of a fraction bridge to word problems.'),
    5: chapter({ '5.1':'1111111122', '5.2':'1111221222', '5.3':'2222222222', '5.4':'1122222222', '5.5':'1112112222' },
      '222222223222','1212212223',['prealgebra/4.7','prealgebra/1.4'], 'Model a situation before solving; a future-age relation is harder than a displayed equation.'),
    6: chapter({ '6.1':'1111111111', '6.2':'1111111112', '6.3':'1111112122', '6.4':'1111111122' },
      '211122222122','1111111223',['prealgebra/4.5','prealgebra/5.2'], 'Mostly fluency; a nonrepeating prefix before a repeating block needs a separate subtraction setup.'),
    7: chapter({ '7.1':'1112221122', '7.2':'1111112223', '7.3':'1112121122', '7.4':'1111112222', '7.5':'1112233323', '7.6':'1121122232' },
      '222233233223','1222123223',['prealgebra/4.3','prealgebra/5.4','prealgebra/6.1'], 'Distinguish ratios from fractions; total distance/time, head starts, and reciprocal work rates create real gaps.'),
    8: chapter({ '8.1':'1111111222', '8.2':'1111122122', '8.3':'2111122322' },
      '222232133331','1112122222',['prealgebra/7.1','prealgebra/6.3'], 'Identify the reference whole first; successive and reverse changes need multiplicative reasoning.'),
    9: chapter({ '9.1':'1111111222', '9.2':'1111111121', '9.3':'1111122122' },
      '112212212111','1111122222',['prealgebra/2.1','prealgebra/3.4'], 'Square-root recognition and simplification; symbolic manipulation is not automatically a hard contest problem.'),
    10: chapter({ '10.1':'1111111222', '10.2':'1112112223', '10.3':'1111121222' },
      '222211222212','2111112223',['prealgebra/5.3','prealgebra/7.1'], 'Angle facts first, then algebra; an auxiliary parallel or an angle-bisector diagram needs a new idea.'),
    11: chapter({ '11.1':'1111112322', '11.2':'1111112332', '11.3':'1111111222' },
      '211121222132','1111112223',['prealgebra/9.1','prealgebra/5.4'], 'Separate perimeter from area; decomposition and constrained rectangles bridge to geometry reasoning.'),
    12: chapter({ '12.1':'2122222222', '12.2':'1111112122', '12.3':'1111111222' },
      '222232222322','2221112233',['prealgebra/9.3','prealgebra/10.3','prealgebra/11.2'], 'Pythagoras and special triangles; draw the hidden right triangle before combining perimeter and area.'),
    13: chapter({ '13.1':'1111122222', '13.2':'1112121132', '13.3':'1211222222' },
      '212221222323','1112112223',['prealgebra/7.1','prealgebra/8.1'], 'Weighted totals, graph reading, and outliers; mean/median/mode constraints need cases and a unique mode.'),
    14: chapter({ '14.1':'1111112232', '14.2':'1111121222', '14.3':'1121122132', '14.4':'2212223122', '14.5':'1111112223' },
      '123233322323','1222112323',['prealgebra/3.5','prealgebra/4.3'], 'Count a complete sample space; restrictions, overlap, and complements are the bridge to contest counting.'),
    15: chapter({ '15.1':'1121222223', '15.2':'1111222322', '15.3':'1112122232', '15.4':'1222222223' },
      '222212222212','1221212223',['prealgebra/14.3','prealgebra/7.5','prealgebra/8.3'], 'Choose a strategy independently; stopping conditions and working backwards add reasoning.'),
  },
  checkpoints: {
    1: { scope:'bridge', levels:levels('233233334344445') },
    2: { scope:'bridge', levels:levels('223332333334334') },
    3: { scope:'bridge', levels:levels('223233232333444') },
    4: { scope:'bridge', levels:levels('323313343344444') },
    5: { scope:'bridge', levels:levels('223323234444443') },
  },
})
