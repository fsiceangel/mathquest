// Editorial demand ratings, not measured solve rates. See notes/audits/intro-counting.md.
// Scope and difficulty are independent: easy extension exercises remain extension.
const section = (scope, levels, rationale, prerequisites, extra = {}) => ({
  scope, levels, rationale, prerequisites, ...extra,
})

const calibration = {
  book: 'intro-counting',
  chapters: {
    1: {
      sections: {
        '1.2': section('core', [1,1,1,2,1,2,1,2,2,3], 'Count endpoints before imposing square and parity restrictions.', ['prealgebra/3.1', 'prealgebra/9.1']),
        '1.3': section('core', [1,2,2,2,2,2,3,3,3,4], 'Two-set overlap precedes three-set inclusion and digit complements.', ['prealgebra/14.1', 'prealgebra/3.5']),
        '1.4': section('core', [1,1,1,2,1,2,3,2,3,3], 'Independent choices lead to leading-zero and last-digit case splits.', ['prealgebra/14.2']),
        '1.5': section('bridge', [1,1,1,1,2,2,3,2,3,3], 'Factorial notation and block counting build on the product rule.', ['intro-counting/1.4']),
      },
      challenge: [1,2,3,3,3,3,3,4,4,3,4,4],
      worksheet: [1,1,2,2,2,1,1,2,3,3],
      challengeScope: 'bridge', worksheetScope: 'core',
    },
    2: {
      sections: {
        '2.2': section('core', [2,2,2,2,2,3,4,3,3,4], 'List disjoint cases; integer triangles additionally need the triangle inequality.', ['intro-counting/1.3', 'intro-counting/1.4', 'prealgebra/11.1']),
        '2.3': section('core', [1,1,2,1,1,3,2,2,3,4], 'Complements are short until perfect-power overlaps and three missing flavors interact.', ['intro-counting/1.3', 'intro-counting/1.4']),
        '2.4': section('core', [1,1,1,2,2,2,2,3,3,4], 'Choose restrictive positions first; divisibility by 25 introduces several endings.', ['intro-counting/1.4', 'prealgebra/3.2']),
        '2.5': section('bridge', [2,2,1,2,2,2,2,3,3,4], 'Fixed positions and blocks precede gaps and interacting adjacency rules.', ['intro-counting/1.5', 'intro-counting/2.3']),
      },
      challenge: [2,3,2,2,3,3,4,3,3,4,5,4],
      worksheet: [2,2,2,3,2,3,4,4,3,3],
      challengeScope: 'bridge', worksheetScope: 'bridge',
    },
    3: {
      variantReview: { status: 'stem-reviewed', rounds: [2,3,4], note: 'All variant stems compared; nontrivial routes inspected; not every answer independently proved.' },
      sections: {
        '3.2': section('bridge', [1,1,1,1,2,2,3,3,3,4], 'Repeated objects require a justified divisor before adjacency restrictions.', ['intro-counting/1.5', 'intro-counting/2.5']),
        '3.3': section('core', [1,1,1,2,1,3,2,3,2,3], 'A taught diagonal formula is direct substitution; partial degree sums need one setup, while collinear points need an overcount repair.', ['prealgebra/14.4', 'prealgebra/10.3']),
        '3.4': section('bridge', [1,2,1,2,2,1,3,3,4,4], 'Distinct-object circular symmetry is a bridge; repeated-color cases and unequal rotation groups are optional extension.', ['intro-counting/3.2', 'intro-counting/2.5'], { scopeOverrides: { '10': 'extension' } }),
      },
      challenge: [1,1,2,1,3,3,3,2,5,3,3,5],
      worksheet: [1,1,1,1,2,2,2,2,2,4],
      challengeScope: 'bridge', challengeScopeOverrides: { '9': 'extension', '12': 'extension' },
      worksheetScope: 'bridge', worksheetScopeOverrides: { '10': 'extension' },
    },
    4: {
      sections: {
        '4.2': section('bridge', [1,1,2,2,1,1,1,2,3,3], 'Interpret unordered selection before multiplying subgroup choices.', ['intro-counting/3.2', 'intro-counting/3.3']),
        '4.3': section('bridge', [1,1,1,1,1,1,2,2,2,3], 'Combination calculations are direct; inverse and degenerate-triangle counts add structure.', ['intro-counting/4.2']),
        '4.4': section('bridge', [1,1,1,1,2,1,1,2,3,3], 'Selection-complement symmetry is useful without requiring a formal proof of identities.', ['intro-counting/4.3']),
      },
      challenge: [1,2,1,2,3,2,2,3,3,4,4,4],
      worksheet: [1,1,1,2,2,2,2,3,2,4],
      challengeScope: 'bridge', worksheetScope: 'bridge',
    },
    5: {
      sections: {
        '5.2': section('bridge', [1,1,2,2,3,3,3,4,4,4], 'Grid addition provides an accessible route before multiple obstacles and diagonal steps.', ['intro-counting/3.2', 'intro-counting/4.3', 'intro-counting/2.3']),
        '5.3': section('bridge', [2,2,2,2,3,2,3,3,3,4], 'Unlabeled equal teams introduce division by team permutations.', ['intro-counting/4.2', 'intro-counting/4.3', 'intro-counting/3.2']),
        '5.4': section('bridge', [1,1,1,3,2,3,3,4,4,4], 'Distinguish object labels from container labels; small distributions remain listable.', ['intro-counting/2.2', 'intro-counting/2.3', 'intro-counting/4.2']),
      },
      challenge: [2,2,3,2,3,3,4,3,3,3,4,4],
      worksheet: [1,2,3,2,3,3,2,3,4,3],
      challengeScope: 'bridge', worksheetScope: 'bridge',
    },
    6: {
      sections: {
        '6.2': section('bridge', [3,3,3,3,4,3,4,4,4,4], 'Mixed counting has no warm-up: select a method before combining restrictions.', ['intro-counting/2.5', 'intro-counting/4.3', 'intro-counting/5.2', 'intro-counting/5.4']),
      },
      challenge: [3,3,4,3,4,4,4,5,4,4,5,4],
      worksheet: [4,4,4,4,4,3,4,3,3,4],
      challengeScope: 'bridge', challengeScopeOverrides: { '8': 'extension', '11': 'extension' }, worksheetScope: 'bridge',
    },
    7: {
      sections: {
        '7.2': section('core', [1,1,1,1,2,2,1,3,3,4], 'Basic ratios restart the strand; square-divisor insight and two hypothetical changes are later demands.', ['prealgebra/14.5', 'prealgebra/4.5', 'prealgebra/3.6', 'intro-counting/1.3']),
        '7.3': section('core', [1,1,1,2,3,2,2,3,3,3], 'Use equally likely ordered outcomes instead of treating dice sums as uniform.', ['intro-counting/7.2', 'intro-counting/2.2']),
        '7.4': section('bridge', [2,1,2,2,2,2,3,3,3,3], 'Match ordered or unordered sample spaces before adding arrangement constraints.', ['intro-counting/7.3', 'intro-counting/4.3', 'intro-counting/3.2']),
      },
      challenge: [2,2,3,2,3,2,2,3,3,4,3,4],
      worksheet: [1,1,2,2,2,3,1,2,2,3],
      challengeScope: 'bridge', worksheetScope: 'core',
    },
    8: {
      sections: {
        '8.2': section('core', [1,2,2,2,2,3,2,3,3,4], 'Probability unions need the same overlap accounting as integer counts.', ['intro-counting/1.3', 'intro-counting/7.3']),
        '8.3': section('core', [1,1,2,1,2,2,3,2,3,3], 'Complement repeated failures, then handle forbidden coincidences.', ['intro-counting/2.3', 'intro-counting/7.3']),
        '8.4': section('core', [1,1,1,2,2,2,2,3,3,3], 'Independent products precede exactly-k sequences and order conditions.', ['intro-counting/7.3', 'intro-counting/4.2']),
        '8.5': section('bridge', [2,1,2,2,2,2,3,3,3,4], 'Update both numerator and denominator at every draw; transfers and stopping require branches.', ['intro-counting/8.2', 'intro-counting/8.4', 'intro-counting/7.4']),
        '8.6': section('bridge', [2,2,2,2,3,3,3,4,4,5], 'Finite stopping trees are useful bridges; an unlimited two-point-lead game needs a restart equation.', ['intro-counting/8.2', 'intro-counting/8.4', 'intro-counting/8.5'], { scopeOverrides: { '10': 'extension' } }),
      },
      challenge: [2,3,2,3,3,3,4,3,3,4,3,5],
      worksheet: [2,2,2,2,2,2,2,3,2,3],
      challengeScope: 'bridge', worksheetScope: 'bridge',
    },
    9: {
      sections: {
        '9.2': section('bridge', [2,3,2,3,3,3,4,4,3,4], 'Symmetry and sample-space reduction are bridges; indefinite alternating turns are extension.', ['intro-counting/7.4', 'intro-counting/8.5', 'intro-counting/8.6'], { scopeOverrides: { '10': 'extension' } }),
      },
      challenge: [3,2,2,4,3,3,3,4,4,3,3,4],
      worksheet: [2,3,2,3,3,2,4,4,4,4],
      challengeScope: 'bridge', worksheetScope: 'bridge', worksheetScopeOverrides: { '8': 'extension', '9': 'extension' },
    },
    10: {
      sections: {
        '10.2': section('bridge', [1,1,1,2,1,2,3,3,4,4], 'Uniform lengths combine interval bounds, inequalities and periodic overlap.', ['intro-counting/7.2', 'prealgebra/11.1'], { scopeOverrides: { '9': 'extension' } }),
        '10.3': section('bridge', [2,2,3,3,1,3,2,3,4,4], 'Area ratios precede representing two independent variables in a coordinate rectangle.', ['intro-counting/10.2', 'prealgebra/11.2', 'prealgebra/11.3']),
      },
      challenge: [1,2,2,3,3,3,2,4,4,5,4,4],
      worksheet: [1,1,2,2,2,3,3,3,3,3],
      challengeScope: 'bridge', challengeScopeOverrides: { '10': 'extension' }, worksheetScope: 'bridge',
    },
    11: {
      sections: {
        '11.2': section('extension', [1,2,2,2,2,2,2,3,3,4], 'Weighted averages are accessible, but formal expected-value fluency is optional for this goal.', ['intro-counting/7.2', 'intro-counting/7.3', 'prealgebra/3.6']),
        '11.3': section('extension', [2,1,1,2,3,1,3,3,3,4], 'Linearity can simplify dependent counts once indicator variables are understood.', ['intro-counting/11.2', 'intro-counting/8.5']),
        '11.4': section('extension', [3,2,3,2,3,2,4,3,4,4], 'Payoff conventions and finite stopping trees combine expected value with staged games.', ['intro-counting/11.3', 'intro-counting/8.6']),
      },
      challenge: [2,2,1,2,2,4,2,3,3,3,4,4],
      worksheet: [1,2,2,1,2,2,3,3,3,4],
      challengeScope: 'extension', worksheetScope: 'extension',
    },
    12: {
      sections: {
        '12.2': section('bridge', [1,1,1,1,2,2,2,3,3,3], 'The local addition pattern is accessible; parity and reverse reconstruction need extra reasoning.', ['intro-counting/4.3']),
        '12.3': section('bridge', [1,1,1,2,1,1,1,3,3,3], 'Translate between entries, choices and paths; avoid mistaking notation for difficulty.', ['intro-counting/12.2', 'intro-counting/5.2']),
        '12.4': section('extension', [1,1,1,2,2,2,3,3,2,3], 'Symbolic Pascal identities are optional enrichment despite easy direct applications.', ['intro-counting/12.3']),
        '12.5': section('bridge', [1,1,1,2,2,1,1,2,3,3], 'Subset toggling and complementary sizes bridge contest counting; formal alternating sums are optional. The lesson explicitly supplies the equal even/odd subset rule, so direct applications are L1.', ['intro-counting/12.3', 'intro-counting/4.4'], { scopeOverrides: { '6': 'extension' } }),
      },
      challenge: [2,1,2,2,1,3,3,3,3,4,4,4],
      worksheet: [2,2,1,1,3,2,3,3,3,3],
      challengeScope: 'bridge', challengeScopeOverrides: { '2': 'extension', '5': 'extension' },
      worksheetScope: 'bridge', worksheetScopeOverrides: { '4': 'extension', '5': 'extension' },
    },
    13: {
      sections: {
        '13.2': section('bridge', [1,1,3,3,1,3,2,3,3,2], 'Small distributions are bridge problems when solved by a complete short list.', ['intro-counting/2.2', 'intro-counting/5.4']),
        '13.3': section('bridge', [3,2,3,2,2,3,3,3,3,4], 'Build small distribution tables before treating recursion as a general formula.', ['intro-counting/13.2', 'intro-counting/12.2']),
        '13.4': section('extension', [1,1,2,2,2,3,3,3,3,4], 'General stars-and-bars substitutions and overlapping upper bounds are optional.', ['intro-counting/13.3', 'intro-counting/4.3']),
        '13.5': section('extension', [1,2,1,2,2,3,2,3,4,4], 'Formal hockey-stick recognition and weighted subset sums extend beyond the required bridge.', ['intro-counting/13.4', 'intro-counting/12.4']),
      },
      challenge: [4,3,2,3,2,3,3,3,4,4,4,5],
      worksheet: [1,2,1,3,4,2,3,3,3,4],
      challengeScope: 'extension', worksheetScope: 'extension',
    },
    14: {
      sections: {
        '14.2': section('extension', [2,1,1,2,2,2,2,3,3,3], 'Polynomial expansion needs algebra preparation independently of counting difficulty.', ['intro-counting/12.3', 'intro-algebra/2.3', 'intro-algebra/1.6']),
        '14.3': section('extension', [1,2,1,2,2,1,2,3,3,3], 'Term selection assumes binomial expansion and exponent arithmetic.', ['intro-counting/14.2', 'intro-counting/4.3']),
        '14.4': section('extension', [1,2,3,2,2,3,3,2,3,3], 'Laurent constant terms and products add exponent equations to expansion.', ['intro-counting/14.3']),
        '14.5': section('extension', [2,2,2,1,2,2,2,2,3,4], 'Substitution, parity extraction and convolution are separate advanced counting tools.', ['intro-counting/14.3', 'intro-counting/12.5']),
      },
      challenge: [2,2,2,2,2,3,4,3,3,4,3,4],
      worksheet: [2,2,2,3,2,2,3,3,3,2],
      challengeScope: 'extension', worksheetScope: 'extension',
    },
    15: {
      sections: {
        '15.2': section('bridge', [2,3,3,4,4,4,3,4,4,4], 'Mixed finite counting remains useful; expectations are optional extensions.', ['intro-counting/6.2', 'intro-counting/8.5', 'intro-counting/10.3', 'intro-counting/11.3'], { scopeOverrides: { '2': 'extension', '10': 'extension' } }),
      },
      challenge: [3,4,3,4,4,4,5,4,4,4,5,4],
      worksheet: [3,3,2,4,3,3,3,5,4,4],
      challengeScope: 'bridge', challengeScopeOverrides: { '4': 'extension', '7': 'extension', '10': 'extension', '11': 'extension', '12': 'extension' },
      worksheetScope: 'bridge', worksheetScopeOverrides: { '1': 'extension', '4': 'extension', '10': 'extension' },
    },
  },
  checkpoints: {
    1: { scope: 'bridge', levels: [2,2,2,3,4,3,2,3,3,3,3,5,5,3,4], scopeOverrides: { '12': 'extension', '13': 'extension' } },
    2: { scope: 'bridge', levels: [3,3,3,3,4,2,2,3,4,3,3,4,4,4,5] },
    3: { scope: 'bridge', levels: [2,2,3,3,3,3,3,3,3,3,3,5,4,4,4], scopeOverrides: { '12': 'extension' } },
    4: { scope: 'bridge', levels: [3,2,3,2,3,3,2,3,4,4,3,5,4,4,4], scopeOverrides: { '2': 'extension', '5': 'extension', '12': 'extension', '13': 'extension', '15': 'extension' } },
    5: { scope: 'bridge', levels: [3,3,3,2,2,4,2,4,4,4,4,4,4,4,5], scopeOverrides: { '1': 'extension', '8': 'extension', '11': 'extension', '13': 'extension' } },
  },
}

// Explicitly inspected departures. Keys are problem number.round (round 1 is base).
// Unlisted variants inherit a provisional base rating, not an empirical equivalence claim.
const variantOverrides = {
  '1.2': {
    '4.4': [3, 'Reverse the endpoint count after locating the first allowed multiple.'],
    '6.4': [3, 'Unrank the 37th item across ten-number blocks.'],
    '8.4': [3, 'Recover the root index and then square it.'],
  },
  '1.3': {
    '4.4': [3, 'Two digit requirements add another overlapping union.'],
    '5.4': [4, 'Exclude multiples of two different divisors and restore their overlap.'],
  },
  '1.4': {
    '2.4': [2, 'Recover alphabet size from a cube rather than evaluating a power.'],
    '3.4': [2, 'Add four possible digit lengths instead of one product.'],
    '4.4': [3, 'Complement the all-distinct even-digit count.'],
    '5.4': [2, 'Undo the product and square of the spinner size.'],
    '8.4': [3, 'Union of two endpoint restrictions requires their intersection.'],
  },
  '1.5': {
    '1.4': [2, 'Invert a factorial using successive products.'],
    '2.4': [3, 'Recover the size of the pool from an ordered triple count.'],
    '4.4': [2, 'Place a required letter before arranging the other positions.'],
    '6.4': [3, 'Subtract all-distinct numbers from the leading-zero-sensitive total.'],
    '8.4': [3, 'At least one endpoint vowel requires a union or complement.'],
  },
  '2.2': {
    '2.4': [3, 'Compare sum distributions for an unknown divisor.'],
    '4.4': [3, 'Invert the triangular case sum to recover a digit gap.'],
    '10.3': [5, 'Unbounded factor triples of 72 add a large ordered factor-case enumeration.'],
  },
  '2.3': {
    '1.4': [3, 'Infer a divisor from the count of two-digit multiples.'],
    '2.4': [2, 'Invert one less than a power of two.'],
    '3.4': [4, 'Two required digits, including zero, need inclusion-exclusion with leading-position restrictions.'],
    '4.4': [3, 'Exclude equal and adjacent dice outcomes, not just equal ones.'],
    '5.4': [3, 'Require two letters simultaneously via a two-event complement.'],
    '7.4': [3, 'Choose two digit types and ensure both appear.'],
    '8.4': [3, 'Two required digits introduce overlapping exclusions.'],
  },
  '2.4': {
    '1.4': [2, 'Complement the distinct-digit PIN count.'],
    '2.4': [2, 'Constrain the last digit and avoid repeating it at the front.'],
    '3.4': [2, 'Count all tags then subtract the all-distinct digits.'],
    '4.4': [3, 'Require a specified digit via a leading-zero-sensitive complement.'],
    '5.4': [1, 'Excluding zero leaves a direct falling product.'],
    '6.4': [1, 'Remove one runner from the eligible pool, then use a direct product.'],
    '7.4': [3, 'Complement the no-equal-neighbors construction.'],
  },
  '2.5': {
    '1.4': [3, 'Complement the forbidden pair occupying the final two positions.'],
    '5.4': [3, 'Complement the full block while allowing a partial block.'],
    '7.3': [3, 'Count separated positions before assigning the named trophies.'],
    '7.4': [3, 'Choose two interior positions before arranging everyone else.'],
  },
  '3.2': {
    '1.4': [2, 'Invert an unordered pair count.'],
    '2.4': [3, 'Recover the unknown multiset length from a fourth-order combination.'],
    '3.4': [2, 'Recover a repeated-letter factorial from the total quotient.'],
    '4.4': [2, 'Invert the number of positions for the two special digits.'],
    '5.4': [3, 'Split into three possible repeated endpoint letters.'],
    '6.4': [3, 'Two required blocks interact with a third repeated letter.'],
  },
  '3.3': {
    '1.4': [2, 'Recover the group size from an unordered pair count.'],
    '3.4': [3, 'Invert the polygon diagonal formula.'],
    '7.4': [3, 'Recover the missing handshake count, then the family size.'],
  },
  '3.4': {
    '1.4': [2, 'Invert the factorial after removing circular rotations.'],
    '2.4': [3, 'A bracelet also has a required adjacent pair.'],
    '3.4': [3, 'Subtract forbidden circular adjacencies.'],
    '4.4': [3, 'Invert the block-and-rotation arrangement count.'],
    '5.4': [3, 'Subtract adjacent pairs while quotienting by flips.'],
    '6.4': [3, 'Numbered circular positions preserve rotations and wraparound adjacency.'],
  },
  '4.2': {
    '1.4': [2, 'Invert a pair count.'],
    '2.4': [2, 'Recover pool size from an unordered triple count.'],
    '4.4': [3, 'Translate a difference of ordered and unordered counts, then invert it.'],
    '5.4': [2, 'Recover available flavors from a triple count.'],
    '6.4': [2, 'Subtract two crew counts or identify crews using the extra student.'],
    '7.4': [2, 'Find selection size using symmetry and the explicit upper bound.'],
    '8.4': [3, 'Undo a product of combinations before recovering the unknown group.'],
  },
  '4.3': {
    '2.4': [2, 'Invert a triple count.'],
    '4.4': [2, 'Choose two successive unordered pairs for distinct recipients.'],
    '5.4': [3, 'Invert a fourth-order combination with a larger unknown.'],
    '6.4': [3, 'Recover the number of available trails from a five-element count.'],
    '7.4': [3, 'Find the threshold then count admissible pool sizes.'],
    '8.4': [3, 'Undo a product of selections and recover the rabbit pool.'],
    '9.4': [3, 'At least one lifeguard requires a complement.'],
  },
  '4.4': {
    '1.4': [2, 'Use complement symmetry then invert a pair count.'],
    '2.4': [3, 'Combine adjacent orders before finding the row.'],
    '4.4': [2, 'Translate two omitted books and recover the pool.'],
    '6.4': [3, 'Complement a nearly full committee and invert a triple count.'],
  },
  '5.2': {
    '1.4': [2, 'Recover a grid width from a path count.'],
    '2.4': [3, 'Invert a cubic combination to recover the width.'],
    '3.4': [3, 'Subtract paths through a waypoint.'],
    '4.4': [3, 'Subtract paths through a waypoint.'],
  },
  '5.3': {
    '1.4': [3, 'Undo the goalie selection and invert a triple count.'],
    '2.4': [3, 'Remove compulsory members then invert a pair count.'],
    '3.4': [3, 'Recover an eligible pool from a triple count and restore absent members.'],
    '6.4': [3, 'Equal-sized unnamed teams now require division by two.'],
  },
  '5.4': {
    '1.4': [2, 'Recover the number of objects from a power.'],
    '3.4': [3, 'Require all three recipients instead of unrestricted assignment.'],
    '5.4': [3, 'Two named ornaments must separate; this also makes nonempty automatic.'],
  },
  '7.2': {
    '1.4': [2, 'Recover one color count from probability before finding the remainder.'],
    '2.4': [2, 'Classify letters by frequency before counting favorable sectors.'],
    '3.4': [2, 'Recover the number of die faces from a probability ratio.'],
    '4.4': [2, 'An impossible-event base becomes an unknown-total ratio problem.'],
    '6.4': [3, 'Recover the post-addition composition then undo the added tokens.'],
    '7.4': [2, 'Count letters by multiplicity rather than by vowel identity.'],
  },
  '7.3': {
    '1.4': [2, 'Exactly one event requires two disjoint branches.'],
    '2.4': [2, 'Three matching dice require an additional independent match.'],
    '3.4': [2, 'At least one success introduces a complement.'],
    '6.4': [3, 'Invert a complement probability to recover the number of coins.'],
  },
  '7.4': { '6.4': [3, 'Sum the three-teacher and four-teacher cases.'] },
  '8.2': { '1.4': [3, 'Recover the shared color from two overlapping probability totals.'] },
  '8.3': {
    '1.4': [2, 'Recover the complement count from a probability.'],
    '2.4': [2, 'Two spins add independent multiplication.'],
    '3.4': [3, 'Undo the complement and square before recovering the spinner size.'],
    '4.4': [3, 'Recover total tiles from the fixed vowel count, then subtract alphabet tiles.'],
    '6.4': [3, 'Recover the exponent in the all-miss probability.'],
  },
  '8.4': {
    '1.4': [2, 'Undo a product to recover the number of spinner sectors.'],
    '2.4': [2, 'Two color orders must be added.'],
    '3.4': [4, 'Recover p from p²(1−p)²=4/81 and choose the root above one half.', 'extension'],
    '4.4': [3, 'Choose the repeated face, its positions, and the different face.'],
    '7.4': [3, 'Add exactly two successes and three successes.'],
  },
  '8.5': {
    '1.4': [4, 'Recover an unknown bag composition from a without-replacement quadratic.', 'extension'],
    '2.4': [2, 'Keep the first card fixed and count allowed second cards.'],
    '4.4': [4, 'Recover an unknown bag composition from two color-order branches.', 'extension'],
    '5.4': [3, 'Complement the all-silver draw.'],
  },
  '8.6': {
    '2.4': [4, 'Invert p(1−p)=6/25 and choose the root below one half.', 'extension'],
    '3.4': [4, 'Condition on missing the star and renormalize the two spinner branches.'],
    '4.4': [3, 'Condition on losing after separating immediate and bonus losses.'],
  },
  '9.2': {
    '8.3': [5, 'Race to three occurrences extends the stopping tree from three to five draws.'],
    '8.4': [3, 'Only a same-color first pair is required.'],
    '10.3': [3, 'Discard reset outcomes to form a direct relative-probability ratio.'],
    '10.4': [5, 'Invert an indefinite alternating-turn winning probability.'],
  },
  '10.2': {
    '2.4': [2, 'Recover an interval endpoint from its length ratio.'],
    '4.4': [3, 'Locate a midpoint with an unknown length and solve the probability ratio.'],
    '5.4': [2, 'The unknown red duration appears in numerator and denominator.'],
    '6.4': [3, 'Intersect quadratic and cubic inequalities before measuring.'],
  },
  '10.3': {
    '2.4': [3, 'Recover a radius from an area probability with a noninteger square root.'],
    '5.4': [2, 'Recover a radius by taking the square root of the area ratio.'],
    '7.4': [3, 'The unknown width is also the semicircle diameter.'],
  },
  '11.2': { '1.4': [2, 'Recover the die size from its average.'] },
  '11.4': { '2.4': [3, 'Count all-equal four-die outcomes before finding the fair prize.'] },
  '12.2': {
    '1.4': [3, 'Recover a row from an internal combination, not from its listed length.'],
    '4.4': [2, 'Recover a row from its sum, then add one for its length.'],
    '5.4': [3, 'Search central binomial entries for the unknown row.'],
    '6.4': [3, 'Restore omitted endpoints and invert a power of two.'],
    '7.4': [3, 'Recover a row from a pair count.'],
  },
  '12.3': {
    '3.4': [2, 'Use two symmetric positions to recover the row.'],
    '4.4': [3, 'Invert a path count and retain both symmetric positions.'],
    '5.4': [2, 'Infer row size from two symmetric committee sizes.'],
    '6.4': [3, 'Recover a row from a triple count, then compute its neighbor.'],
    '7.4': [2, 'Subtract a known entry then use symmetry and the position bound.'],
  },
  '12.4': {
    '1.4': [2, 'The extraneous first identity must be separated from the requested sum.'],
    '3.4': [2, 'Collapse the sum then infer the index using symmetry and its bound.'],
    '4.4': [1, 'One subtraction recovers the missing local entry.'],
    '9.4': [3, 'Apply the identity repeatedly and then recover an index.'],
  },
  '12.5': {
    '1.4': [2, 'Factor two consecutive row sums and recover the exponent.'],
    '2.4': [3, 'Pair odd and even subsets rather than compute the unrestricted count.'],
    '3.4': [2, 'Restore the empty subset and invert a power of two.'],
    '4.4': [4, 'Recover set size from an at-least-two count, then subtract pairs.'],
    '5.4': [4, 'Recover a row from a half-row sum and its unique middle entry.'],
  },
  '13.2': { '7.4': [3, 'Two parity restrictions require a second summation or a substitution.'] },
  '13.3': { '5.4': [3, 'Invert a three-recipient distribution count after minimum allocations.'] },
  '13.4': {
    '1.4': [2, 'Pay four positive minima before applying the formula.'],
    '2.4': [3, 'Infer the number of types from a stars-and-bars count.'],
    '4.4': [3, 'Infer the common minimum from a distribution count.'],
  },
  '13.5': {
    '1.4': [3, 'Collapse the sum then invert a fourth-order combination.'],
    '2.4': [3, 'Invert the triangular-layer sum.'],
    '3.4': [3, 'Collapse the sum then invert a fifth-order combination.'],
    '7.4': [3, 'Infer the layer count from a tetrahedral total.'],
  },
  '14.2': {
    '2.4': [2, 'Recover an expansion exponent from its term count.'],
    '3.4': [2, 'Recover a parameter from the middle coefficient before squaring.'],
    '5.4': [1, 'Total degree immediately reveals the exponent; the coefficient is unnecessary.'],
    '6.4': [3, 'Recover a parameter from a quadratic coefficient equation.'],
  },
  '14.3': {
    '2.4': [3, 'Compare every coefficient instead of selecting one named power.'],
    '3.4': [2, 'Invert a combination.'],
    '4.4': [3, 'Recover a squared base parameter.'],
    '5.4': [3, 'Recover n from n times a power of two.'],
    '6.4': [2, 'Invert a pair count instead of evaluating a known combination.'],
    '7.4': [3, 'Recover the substituted base parameter from a coefficient.'],
  },
  '14.4': {
    '1.4': [3, 'Infer an exponent from a near-leading coefficient.'],
    '5.4': [3, 'Search possible powers while tracking both coefficients and signs.'],
    '8.4': [3, 'Combine exponents and invert the coefficient count.'],
  },
  '14.5': {
    '2.4': [3, 'A truncated alternating sum needs cancellation beyond the full-row identity.'],
    '5.4': [3, 'Extract even powers by combining two polynomial evaluations.'],
  },
  '15.2': { '1.4': [4, 'Unrank the 100th all-odd-digit integer across length and digit blocks.'] },
}
for (const [id, overrides] of Object.entries(variantOverrides)) {
  const target = calibration.chapters[Number(id.split('.')[0])].sections[id]
  target.variantOverrides = Object.fromEntries(Object.entries(overrides).map(([key, [level, reason, scope]]) => [
    key, { level, reason, ...(scope ? { scope } : {}) },
  ]))
}

// Full-stem chapter passes: these are observed departures, not slot-based estimates.
const chapterReviewDepartures = {
  15: {
    '15.2': { '1.3': [3, 'Combine the digit-length split with a different allowed units set.'], '2.4': [4, 'Find the strict-rise marginal and reverse the expected count.'], '3.2': [4, 'Four caps introduce overlapping violations.'], '3.3': [4, 'Pay all minima before applying the upper-bound complement.'], '3.4': [4, 'Recover an unknown cap and justify the applicable violation range.'], '4.4': [5, 'Choose the unique equal seam, glue it, then exclude both remaining adjacency events.'], '5.3': [3, 'Choose two smaller distinct values and order the triple.'], '7.3': [4, 'Unequal success probabilities require weighting the allowed even counts.'], '7.4': [4, 'The head-count restriction changes the conditioning sample space.'], '8.4': [5, 'Measure a clipped band and then a subregion conditional on that band.'], '9.4': [3, 'Only the increasing/decreasing sets are wanted, with their different zero rules.'], '10.4': [3, 'A named same-gender pair event avoids the two-color order sum.'] },
    challenge: { '1.3': [4, 'Four required colors in five positions force one repeated color and a block complement.'], '1.4': [4, 'Equal endpoints interact with both inside adjacency restrictions.'], '3.3': [2, 'A product divisible by three is one independent-failure complement.'], '5.2': [5, 'Product matching requires a large multiplicity table and a separate zero-product case.'], '5.3': [3, 'Both pairs share the standard dice-sum distribution.'], '7.4': [3, 'A fixed distance threshold is a rectangle area ratio, with no expectation.', 'bridge'], '9.3': [3, 'Only three short point sequences can reach the target.'], '9.4': [2, 'Conditioning fixes the starting point; only one jump of two or two jumps of one remain.'], '10.3': [3, 'A circle removes endpoint exceptions from the peak indicator.'], '11.3': [4, 'A shorter forbidden-pair recursion replaces the three-head run problem.', 'bridge'], '12.4': [5, 'Exactly one record requires joint independence of three rank events, not just linearity of expectation.'] },
    worksheet: { '1.4': [4, 'Derive the run-start indicator formula, then recover sequence length.'], '3.3': [3, 'The parity condition changes the allowed first-coordinate sum.'], '3.4': [3, 'Invert the triangular count after positive-minimum handling.'], '5.3': [4, 'The order events share runners, so independent multiplication no longer works.'], '6.4': [4, 'Find the fixed wedge area and solve for the sampling rectangle width.'], '7.3': [4, 'Construct and justify a gap-closing bijection for four strict coordinates.'], '7.4': [4, 'Translate weak order to a strict triple before inverting its count.'], '9.3': [2, 'One complement tests whether any factor is divisible by three.'] },
  },
  14: {
    '14.2': { '1.4': [3, 'Two cubes introduce more terms and a parity cancellation.'], '7.4': [3, 'Recover two positive parameters from squared coefficients and combine them.'], '10.4': [4, 'Factor a symbolic power product and identify its next-to-leading coefficient.'] },
    '14.3': { '10.4': [2, 'The requested even-power coefficients cancel exactly.'] },
    '14.4': { '1.3': [2, 'The chosen constant contributes an additional power-of-two factor.'] },
    '14.5': { '3.3': [1, 'Directly apply the taught odd-index half-row sum.'], '10.2': [3, 'Only three explicit small terms remain; direct evaluation also avoids a hidden convolution.'] },
    challenge: { '1.4': [3, 'Both expansions now contribute, with different weights.'], '2.4': [1, 'Coefficient sum is the taught direct substitution x=1.'], '3.4': [3, 'Recognize a binomial evaluation, then recover its exponent.'], '4.4': [3, 'Reverse an exact decimal cube rather than expand a known base.'], '7.4': [3, 'The odd target degree forces the single x-cubed contribution from the second factor.'], '9.3': [2, 'Equal coefficients in the stated distinct positions recover the row by symmetry.'], '10.3': [3, 'Equal powers allow the entire product to collapse to a squared difference of squares.'], '11.4': [4, 'Use hockey-stick for the coefficient sum, then invert the third-order combination.'], '12.2': [3, 'The useful algebraic factorization is supplied in the stem.'], '12.3': [3, 'The useful factorization is supplied, leaving one exponent shift and coefficient.'] },
    worksheet: { '1.4': [3, 'Identify and invert a pair coefficient to recover the exponent.'], '2.4': [3, 'Select two differently signed coefficient contributions and add them.'], '5.3': [1, 'The entire odd-index half-row is present.'], '6.4': [3, 'Collapse the sum and reverse the fifth power of an unknown base.'], '9.3': [4, 'Undo the weight and invert a triple coefficient instead of a pair count.'], '9.4': [2, 'The exponent is known, so evaluate one ordinary weighted coefficient.'] },
  },
  13: {
    '13.2': { '2.4': [2, 'Reverse the two-kind remainder count, then restore the fixed green cups.'], '3.4': [4, 'Build and invert the triangular distribution count before the general formula is taught.'], '4.4': [4, 'Infer the odd total from a transformed triple-distribution ladder.'], '5.3': [2, 'Pay two different positive minima before counting the remaining split.'], '6.4': [4, 'Weak comparison includes the tie cases; organize five admissible-count rows.'], '10.3': [4, 'Build separate three-recipient distribution counts for two colors, then multiply.'] },
    '13.3': { '1.2': [4, 'The fifth recipient requires another layer of running sums.'], '1.4': [4, 'Invert the running-sum column for four recipients.'], '3.2': [4, 'Five simultaneous caps need a deficit viewpoint or organized bounded patterns.'], '3.4': [4, 'A sixth envelope adds another recurrence layer.'], '4.4': [3, 'Translate a positive lower bound before forming the remaining distribution.'], '5.2': [3, 'After four minima, distribute the remainder among four recipients.'], '5.3': [3, 'Three unequal minima must be removed correctly.'], '8.3': [4, 'Four capped variables require nested bounded counts.'] },
    '13.4': { '6.4': [4, 'An upper cap replaces a fixed amount and requires a distribution complement.'], '7.4': [4, 'Two cap violations can overlap and need restoration.'], '8.4': [4, 'Both lower and upper total bounds require a difference of slack counts.'], '9.2': [2, 'All counts are even, so halve the total directly.'], '9.4': [4, 'Invert the parity-shifted combination count to recover the marble total.'] },
    '13.5': { '8.4': [4, 'Translate nondecreasing triples and invert the resulting third-order combination.'], '10.3': [3, 'For a pair, weight each possible minimum by the simple number of larger partners.'] },
    challenge: { '2.4': [4, 'The inverse equal-pair distribution needs separate odd/even total formulas.'], '4.3': [1, 'This is a direct taught stars-and-bars purchase count.'], '6.4': [4, 'Sum several possible two-person totals instead of one fixed product.'], '7.4': [4, 'Subtract two cumulative slack distributions.'], '10.3': [3, 'Nondecreasing positive integers use digits 1 through 9 only.'], '10.4': [3, 'Explicitly forbidding zero removes the leading-zero complement.'] },
    worksheet: { '1.4': [2, 'Reserve one unit for every positive variable.'], '2.4': [4, 'Invert a four-recipient count and then restore all minimum allocations.'], '3.4': [2, 'Subtract the omitted beginning of the hockey-stick sum.'], '4.3': [1, 'A stated purchase count is direct stars and bars.'], '6.4': [3, 'A range of triangular numbers is a difference of two layer totals.'], '7.2': [4, 'Four capped variables permit overlapping violations.'], '7.3': [4, 'Two cap violations can coexist and must be restored.'], '8.3': [4, 'A triple maximum needs a weighted combination count.'], '9.4': [4, 'Two capped fruit types require an overlap correction.'], '10.3': [3, 'With three variables, equal first entries leave only one forced remainder.'] },
  },
  12: {
    '12.2': { '2.3': [2, 'Form two child sums and add them.'], '3.3': [2, 'Add the lengths of several rows.'], '4.3': [2, 'Add two distinct row totals.'], '6.3': [3, 'Compute and exclude both central coefficients.'], '8.3': [1, 'The child below two given parents is one direct sum.'], '8.4': [2, 'Recover both neighbors by subtraction and add them.'], '10.4': [4, 'Track parity across eight complete rows.'] },
    '12.3': { '1.4': [2, 'Translate both zero-based coordinates to one-based numbering.'], '4.3': [3, 'Count paths to two distinct endpoints and add them.'], '8.4': [1, 'The row and position are given, so calculate a direct combination.'], '10.4': [4, 'Recover a row from a fifth-order coefficient before moving up and locating its center.'] },
    '12.4': { '3.3': [2, 'Rearrange Pascal\'s identity to subtract a parent.'], '4.2': [3, 'Recover the row from its length, locate the entry and find both neighbors.'], '4.3': [1, 'Both child entries are direct sums of stated neighbors.'], '5.3': [3, 'Recover the population from the committee count.'], '6.3': [1, 'The requested child is the direct sum of the two given parents.'], '6.4': [1, 'The missing parent is one subtraction.'], '8.4': [1, 'The include/exclude counts are given and simply add.'], '9.3': [3, 'Collapse three consecutive Pascal identities.'] },
    '12.5': { '2.3': [2, 'Exclude empty and full subsets.'], '2.4': [1, 'The lesson gives equal odd/even counts: halve the stated total without finding set size.'], '3.3': [2, 'Remove both endpoints and both single-choice entries from the full row.'], '4.3': [3, 'Complement three disallowed high subset sizes.'], '5.3': [3, 'Subtract four omitted low-size terms.'], '6.2': [3, 'Restore the full alternating sum, then account for the removed central term\'s sign.'], '6.3': [1, 'Direct use of the taught equal odd/even subset count.', 'bridge'], '6.4': [1, 'Double the given even-subset count.', 'bridge'], '7.2': [3, 'Fix a required element and change the parity condition on the remainder.'], '7.3': [1, 'Direct even-size subset count from the lesson.'], '7.4': [3, 'Subtract the even subsets made entirely of even-numbered elements.'], '9.4': [2, 'The population is given; exclude empty and singleton committees.'], '10.2': [2, 'An odd population has no equal-size split, so complement pairing halves the total.'], '10.3': [1, 'Equal membership means one direct central combination.'] },
    challenge: { '2.4': [4, 'Collapse a Pascal sum, recover an unknown row, then calculate another coefficient.'], '4.2': [3, 'Exclude three upper subset sizes.'], '4.4': [3, 'Count a bounded interval of three subset sizes.'], '5.4': [3, 'Undo the odd-position half-sum to recover the row and its central coefficient.'], '7.4': [4, 'Sixteen rows require an organized parity pattern or a substantial complete parity table.'], '9.4': [1, 'Both rows and positions are supplied; reflect each position.'], '10.4': [2, 'Remove two forbidden elements and apply the taught parity count.'], '11.4': [3, 'The population is given, so only the three-size complement remains.'] },
    worksheet: { '1.4': [3, 'Recover a row from a triple coefficient before finding its neighbor.'], '2.2': [1, 'One direct parent sum.'], '2.3': [1, 'One direct child-minus-parent subtraction.'], '2.4': [1, 'One direct subtraction recovers the other parent.'], '3.3': [2, 'Add three row sums.'], '3.4': [2, 'Recover a power-of-two exponent and the row length.'], '4.4': [4, 'Invert a combined Pascal coefficient and then calculate a second entry.'], '5.3': [4, 'The 1-3-3-1 weights require three layers of regrouping.'], '5.4': [4, 'Collapse weighted neighbors, recover an index and evaluate the requested coefficient.'], '6.2': [3, 'Exclude four low subset sizes.'], '6.4': [3, 'Both low and high subset sizes are excluded.'], '7.4': [4, 'Recover three rows from different-order coefficients, then reflect every position.'], '8.3': [1, 'An odd row has two equal half-sums and no central exception.'] },
  },
  11: {
    '11.2': { '4.4': [3, 'An unknown count changes both the weighted sum and denominator.'], '7.4': [3, 'Both complementary probabilities depend on the unknown.'], '8.4': [4, 'Square the sum before averaging; the product shortcut no longer answers the question.'] },
    '11.3': { '5.3': [2, 'Add three equal marginal sibling probabilities.'], '6.3': [2, 'Apply linearity to dependent draws using the same marginal average.'], '7.4': [2, 'Only the red count is asked for, with no signed payoff.'], '9.3': [2, 'Independent spinners allow the taught product-of-means shortcut.'] },
    '11.4': { '1.2': [2, 'The winning event is a direct independent even-even product.'], '1.3': [2, 'List three square cards before taking a two-payoff average.'], '2.3': [3, 'Count the winning three-card subset before finding the payout average.'], '5.3': [4, 'Combine dependent-draw expected reward with the no-lucky-card penalty.'], '7.3': [3, 'The unique black token has four equally likely positions.'], '7.4': [3, 'Count the chance of reaching each of four flips.'], '10.4': [3, 'Track the number of attempts instead of the final signed score.'] },
    challenge: { '7.3': [3, 'Two distinct prize tickets require linearity before subtracting all ticket costs.'], '7.4': [3, 'Reverse expected net loss per ticket to recover the purchase count.'], '8.2': [4, 'A larger without-replacement pool extends the stopping distribution to six lengths.'], '8.3': [4, 'Count the possible first special-card position among nine stopping lengths.'], '9.3': [4, 'Three socks may represent two or three colors; use absent-color indicators.'], '9.4': [4, 'Three draws add a missing-color combination ratio.'], '12.2': [5, 'Uneven face values destroy midpoint symmetry; organize median ties and strict lower-upper cases.'] },
    worksheet: { '1.4': [2, 'Square each digit before averaging, rather than squaring its average.'], '3.3': [3, 'The winning draw has dependent even-card probabilities.'], '6.4': [3, 'Count two sum events and reverse the fair-payout equation.'], '7.4': [4, 'The square of a count includes diagonal and cross terms.'], '9.4': [2, 'The number of heads is an indicator of at least one success.'], '10.4': [3, 'Profit occurs at any success; the all-miss complement replaces payoff averaging.'] },
  },
  10: {
    '10.2': { '6.3': [3, 'A squared inequality has two favorable intervals.'], '8.4': [2, 'A single absolute-value bound leaves two end intervals.'], '9.3': [2, 'The product condition becomes a linear length inequality.', 'bridge'], '10.3': [3, 'Use one common period; the two illuminated intervals do not overlap.'] },
    '10.3': { '3.4': [4, 'Find the complement area, recover its side, then infer the border width.'], '4.3': [2, 'Independent lower bounds leave a rectangle.'], '4.4': [4, 'Two sum bounds remove unequal corner triangles.'], '5.3': [2, 'Complement the direct concentric area ratio.'], '6.2': [4, 'A nonsquare rectangle destroys four-way symmetry; construct the closest-side trapezoid.'], '6.3': [2, 'The perpendicular bisector is a vertical midpoint line.'], '6.4': [4, 'Derive a width-dependent closest-side trapezoid before solving.'], '7.3': [4, 'Recover an inradius using right-triangle geometry before computing the ratio.', 'extension'], '8.3': [4, 'Different ranges clip the diagonal band asymmetrically.'], '8.4': [4, 'Restrict the square and then remove its diagonal band.'], '10.3': [3, 'Two triangle inequalities hold automatically, leaving one corner triangle.'] },
    challenge: { '1.4': [2, 'Recover the full midpoint interval then halve its length.'], '3.4': [3, 'Invert an area ratio to recover the square side.'], '5.3': [2, 'Subtract two stated disk areas without finding a distance boundary.'], '6.4': [4, 'The moving-point area threshold and whole segment both depend on the unknown side.'], '8.4': [5, 'Find the clipped meeting band, then condition on it and measure one arrival order.'], '9.3': [2, 'Separate coordinate bounds define a rectangle instead of a diamond.'], '10.3': [3, 'The middle piece is the distance between two cut coordinates.', 'bridge'], '11.3': [2, 'Fix one independent spinner direction and measure the favorable arc.'], '12.3': [3, 'Two linear boundaries enclose a triangle with a convenient vertical base.'] },
    worksheet: { '2.3': [2, 'Add two disjoint waiting intervals.'], '3.3': [3, 'Isolate the shifted square root before measuring the interval.'], '3.4': [3, 'The square-root cutoff is fixed while the sampling interval is unknown.'], '5.2': [3, 'Account for deck growth in both dimensions before taking the complement.'], '5.4': [3, 'The unknown deck width changes both favorable and total area.'], '7.4': [4, 'Reverse a triangle-area probability to recover the time gap.'], '8.2': [4, 'Inscribed hexagon area needs equilateral-triangle heights.'], '8.3': [4, 'Inscribed equilateral-triangle geometry is an additional prerequisite.', 'extension'], '8.4': [4, 'A square in a semicircle requires a new right-triangle equation.'], '10.4': [4, 'Intersect a diagonal sum band with an order condition, or justify halving by symmetry.'] },
  },
  9: {
    '9.2': { '1.3': [3, 'Three disjoint relative-order races must be justified as independent.'], '1.4': [3, 'Combine two independent relative-order races.'], '4.2': [2, 'Each of four named people is equally likely to be leftmost.'], '4.4': [4, 'Two linked relative-position rules restrict four named people.'], '6.3': [2, 'After anchoring Ana, fill two positions on her team.'], '6.4': [2, 'Anchor Ben and count the remaining seats on his team.'], '7.4': [3, 'Only a two-two split in the first four games is required.'], '8.4': [2, 'Stopping on draw two is simply a same-color pair.'], '9.2': [2, 'After one ace, only one other named card must join its hand.'], '10.3': [3, 'Discard neutral sectors; no alternating-player advantage remains.', 'bridge'] },
    challenge: { '3.4': [3, 'Either named person may occupy Cal\'s unique opposite seat; the two events are disjoint.'], '4.4': [2, 'A consecutive triple is determined by its starting value.'], '5.4': [2, 'The first round decides unless the two dice match.'], '6.4': [4, 'Find the tie probability before halving its complement by symmetry.'], '7.3': [2, 'Restrict attention to the seven relevant songs and use their first-position symmetry.'], '8.3': [3, 'Sequentially put the three named runners into distinct heats.'], '8.4': [3, 'Complement the three-distinct-project event.'], '9.4': [2, 'Only one maximum bound needs a complement.'], '10.4': [2, 'All draws are needed exactly when the final ball is red.'] },
    worksheet: { '1.4': [2, 'Reverse the equal member-selection probability 2/n.'], '2.4': [4, 'Use symmetry with tie probability 1/n, then solve for the die size.'], '3.4': [3, 'Anchor one mitten, recover the remaining population, then the pair count.'], '4.3': [2, 'Ben is last among the three named runners.'], '4.4': [4, 'Count relative orders subject to linked inequalities among four cards.'], '6.3': [4, 'Compare two different stopping thresholds using an extended four-flip sample space.'], '8.4': [3, 'A finite four-flip complement replaces indefinite parity stopping.', 'bridge'], '10.3': [2, 'First-round pairing asks only for one uniformly chosen opponent.'], '10.4': [3, 'Use opposite bracket halves and four independent wins.'] },
  },
  8: {
    '8.2': { '6.4': [2, 'The intersection leaves only two ordered rolls.'], '8.4': [2, 'Fix the first head and choose the single other head.'], '10.4': [3, 'Exclude one digit, then subtract constant strings.'] },
    '8.3': { '5.2': [3, 'The complement has several large-difference dice pairs.'], '8.4': [3, 'Exactly one failure requires its position as well as its probability.'], '10.4': [2, 'A direct falling product counts three distinct digits.'] },
    '8.4': { '8.3': [4, 'Unequal color frequencies require a weighted binomial tail.'], '8.4': [4, 'The fixed first tail changes the remaining majority threshold.'], '9.4': [4, 'Unequal coin probabilities require weighting the no-adjacent-heads cases.'] },
    '8.5': { '8.4': [4, 'Conditioning on the observed draw reverses the transfer tree; normalize the joint event.'], '9.4': [2, 'Stopping within two draws is a simple two-failure complement.'], '10.3': [3, 'The first star on draw four is one specified failure-success path.'], '10.4': [3, 'The first blue on draw four is one specified path.'] },
    '8.6': { '1.4': [1, 'Needing shot four requires only three independent misses.'], '3.3': [3, 'Sum three differently weighted winning branches.'], '5.4': [2, 'Exactly five attempts means a single four-success-then-failure path.'], '7.2': [4, 'Choose the two earlier blues before forcing the third at the stopping draw.'], '7.3': [4, 'Choose the earlier marked card while preventing an earlier stop.'], '7.4': [2, 'Stopping on draw two means the two blue marbles come first.'], '8.2': [3, 'Reaching game five is exactly a two-two split of the first four.'], '8.3': [2, 'A two-game match is one of two sweeps.'], '8.4': [5, 'Condition on the first-game loser and then organize multiple finishing lengths.'], '9.2': [3, 'Working backward forces miss-make-make while leaving the first shot free.'], '10.4': [2, 'Only the first pair is asked for; no infinite restart argument is needed.', 'bridge'] },
    challenge: { '2.4': [4, 'At least one of each of two faces requires double complement overlap.'], '3.4': [3, 'Specify counts for all three colors instead of a binary success count.'], '5.3': [5, 'Three dice introduce many sum and parity intersection cases.'], '6.4': [4, 'Three overlapping match conditions need a structured complement or three-set inclusion-exclusion.'], '8.3': [4, 'Either player may clinch in four; organize the final-game branches.'], '8.4': [4, 'Sum three possible winning lengths with the clinching game fixed.'], '9.4': [2, 'Exactly two reds among the first three is a direct group-count ratio.'], '11.4': [4, 'The stopping color is specified, requiring two possible placements of its earlier occurrence.'], '12.3': [3, 'Best-of-three has only three winning paths despite unequal game probabilities.'] },
    worksheet: { '1.4': [1, 'The intersection contains only the card 15.'], '6.4': [3, 'Restrict the sample space to strings containing A before taking the ratio.'], '8.4': [2, 'A specified red-then-blue path replaces the position symmetry question.'], '9.4': [3, 'Opponent wins via a sweep or a three-game comeback.'], '10.4': [1, 'At least five baskets requires only the first five successes.'] },
  },
  7: {
    '7.2': { '9.3': [4, 'Exactly four divisors requires prime-cube and distinct-prime-product cases.'], '9.4': [2, 'Exactly two divisors means prime; list primes and take the ratio.'], '10.3': [3, 'Track unchanged nickels in a single before-after ratio.'], '10.4': [3, 'The blue count stays fixed while a known red count is increased.'] },
    '7.3': { '2.3': [2, 'Different spinner letters are the complement of matching letters.'], '4.4': [2, 'Recover an unknown sum from the small ordered-pair distribution.'], '5.4': [2, 'At least four is a single complement rather than an exact-maximum difference.'], '6.2': [3, 'Unequal color probabilities require three separate same-color products.'], '9.2': [2, 'A factor of five requires at least one five; one complement suffices.'], '9.4': [4, 'A factor of twelve combines two factors of two and a factor of three.'] },
    '7.4': { '2.4': [2, 'Recover the number of positions from the middle probability.'], '3.4': [3, 'At least one officer needs the no-officer complement.'], '5.3': [3, 'A three-card even sum requires zero or two odd cards.'], '9.4': [2, 'An upper bound on the largest card means all three come from six cards.'], '10.2': [2, 'After one brother is located, five of eleven available places share his cabin.'] },
    challenge: { '3.3': [4, 'Common factors with 84 require the union of multiples of 2, 3 and 7.'], '3.4': [2, 'The direct two-divisor union removes the coprimality translation.'], '6.4': [4, 'Infer an unknown pool with separate even and odd pool-size formulas.'], '7.3': [1, 'One of eleven relative positions is opposite.'], '8.4': [5, 'Divisibility by eight requires a complete inventory of fourteen allowed three-digit endings.'], '9.4': [2, 'Equal subgroup counts use one product of combinations.'], '10.2': [3, 'A factor of nine requires two or three dice divisible by three.'], '11.4': [2, 'At most four directly restricts every die.'], '12.3': [3, 'Choose a twin pair and a third child; a second pair cannot fit.'], '12.4': [3, 'Choose one member of each couple, then divide by all four-person groups.'] },
    worksheet: { '1.4': [3, 'Infer a bounded total from an integer favorable count and a probability.'], '2.4': [2, 'Infer the divisor from exactly two matching die faces.'], '3.3': [3, 'Unordered tickets require five sum classes or residue-pair classes.'], '3.4': [3, 'Remove equal-die outcomes from the allowed sum classes.'], '4.3': [3, 'Unequal success and failure counts enter the exactly-two and exactly-three branches.'], '7.3': [2, 'Two portraits must both occupy interior positions.'], '7.4': [3, 'Recover a total length from the interior-position probability.'], '9.4': [3, 'Sum eleven and consecutive pairs overlap once.'], '10.2': [4, 'A minimum separation requires a sum over allowed position gaps.'], '10.4': [2, 'A specified adjacent order is one oriented block.'] },
  },
  6: {
    '6.2': { '1.2': [4, 'The largest first digit interacts with parity and zero.'], '1.3': [4, 'Rank four selected digits into two middle and two end positions, repairing zero-leading orders.'], '2.3': [4, 'The two points can now occur on one path, so their intersection matters.'], '2.4': [4, 'A union of required points is combined with a third forbidden point.'], '3.2': [4, 'An even final digit and positive first digit constrain a five-part small sum.'], '3.3': [4, 'Four bounded totals need overload exclusions.'], '4.4': [4, 'A specified chair group also has a minimum count in another group.'], '5.4': [5, 'Two strict pair comparisons require tie intersections or pair-sum cases.'], '6.2': [4, 'Two blocks interact with a named interior position.'], '6.3': [4, 'A prescribed distance excludes a third person from the intervening seats.'], '6.4': [4, 'Two allowed block events require their overlap.'], '8.2': [3, 'Only one relative-order comparison remains alongside one three-person block.'], '10.3': [3, 'Exactly one of two required letters is a pair of short complement counts.'] },
    challenge: { '3.2': [3, 'Choose two symbols, then remove the two constant strings.'], '3.3': [3, 'Choose two occupied boxes, then exclude one-box assignments.'], '4.3': [4, 'Three minima and upper bounds require disjoint overload cases.'], '4.4': [4, 'Two bounded boxes create an extra summation or overlap condition.'], '6.4': [5, 'Subtract all qualifying square sizes from the even-area rectangle count.'], '8.2': [3, 'Fix gray endpoints and exclude one repeated pair.', 'bridge'], '8.3': [4, 'Two whole-block forbidden events use ordinary inclusion-exclusion.', 'bridge'], '11.2': [4, 'Only two couples are forbidden, so one overlap correction suffices.', 'bridge'], '12.4': [5, 'Three forbidden circular pairs require singles, pairwise and triple overlaps.'] },
    worksheet: { '1.4': [3, 'One pair is required together and only the other pair is excluded.'], '3.3': [3, 'Count positive ordered pairs below a sum bound and remove equal pairs.'], '4.3': [3, 'Three die values have a smaller bounded factor inventory.'], '5.4': [3, 'Four separated people force alternating seats, and the opposite partner is fixed.'], '6.3': [4, 'Distinguish a multiple-of-four card from two single factors of two.'], '6.4': [4, 'Classify triple sums by residue multiplicities modulo three.'], '8.4': [4, 'The head count is no longer fixed; sum separated placements or derive a recurrence.'], '9.4': [4, 'Subtract contained squares size by size from the rectangle product.'], '10.4': [5, 'The required block, forbidden pair and endpoint buffer interact across block positions.'] },
  },
  5: {
    '5.2': { '2.3': [2, 'A board with eight columns and six rows needs seven and five moves.'], '5.4': [2, 'The variant asks for paths through the point, without a complement.'], '7.4': [4, 'Avoiding two checkpoints adds overlap counting to the base product of segments.'], '9.4': [3, 'Exactly two diagonals fixes all three move counts; one multiset count suffices.'] },
    '5.3': { '4.4': [2, 'Exactly one girl is a direct product of selections.'], '10.3': [3, 'Anchor one named photograph in its four-photo room and exclude the other.'] },
    '5.4': { '4.2': [4, 'Four recipients require an additional layer of small-distribution cases.'], '4.3': [4, 'Four flower totals require another layer of distribution cases.'], '5.3': [4, 'Three galleries all nonempty introduce overlapping missing-gallery events.'], '7.2': [4, 'Four positive recipients add a distribution dimension; cuts are an alternate route.'], '8.3': [5, 'Ten identical objects in four unlabeled rooms require 23 partition cases.'], '9.4': [3, 'Exactly three nonempty groups leave only sizes 3+1+1 or 2+2+1.'], '10.3': [3, 'A singleton hammer box leaves an ordinary two-nonempty-box complement.'] },
    challenge: { '4.4': [3, 'Both boxes have lower bounds, requiring two disjoint excluded tails.'], '9.3': [2, 'A fixed first letter leaves one multiset permutation count.'], '9.4': [4, 'A three-dimensional route now avoids a waypoint rather than passes through it.'], '11.4': [5, 'Allowing empty unlabeled envelopes requires separate occupied-envelope and size cases.'], '12.3': [4, 'Translate prefix balance to a grid barrier, then use the taught node-by-node recurrence.'] },
    worksheet: { '1.4': [2, 'Fix the final up-step before counting the remaining moves.'], '2.4': [3, 'Avoiding the waypoint adds a complement.'], '4.4': [3, 'Recover the unknown pool after reserving an included and excluded member.'], '5.4': [4, 'Two forbidden partnerships need an overlap correction.'], '6.4': [4, 'Undo the mandatory minimum and invert the residual distribution count.'], '7.4': [3, 'At least three in one mailbox requires three count cases.'], '8.3': [2, 'Identical stones in two unlabeled bowls need only four unordered size pairs.'], '10.2': [4, 'Four bounded positive totals need several multiplicity cases.'], '10.4': [4, 'Four minimum allocations and a ceiling add a residual-distribution complement.'] },
  },
  4: {
    '4.2': { '9.4': [2, 'Seat Pia, exclude Quinn, then select the remaining three members.'], '10.4': [4, 'Infer an unknown pool from a forbidden-pair committee count and establish uniqueness.'] },
    '4.3': { '3.4': [2, 'Reduce the edge combinations to n plus two, then recover n.'] },
    '4.4': { '2.3': [2, 'Translate two omitted-set sizes, evaluate, and subtract.'], '5.4': [3, 'Complementary selection sizes create the equation 2k plus 6 equals 40.'], '7.2': [2, 'Use symmetry, evaluate a pair count, then double it.'], '9.4': [2, 'Choose which named person is omitted, then choose two other omissions.'] },
    challenge: { '1.4': [2, 'Add three possible subset sizes.'], '2.3': [1, 'All unrestricted subsets are a direct sequence of binary choices.'], '2.4': [3, 'Combine several allowed committee sizes or complement all sizes below three.'], '3.4': [2, 'Use omitted-pair symmetry and invert the pair count.'], '4.4': [3, 'Undo the dancer factor, then infer the singer pool from a pair count.'], '5.4': [2, 'Exactly one twin avoids an overlapping union.'], '6.4': [1, 'Caramel is fixed on top; directly choose two of the other eight syrups.'], '8.4': [2, 'Only zero or one athlete is allowed, leaving two short disjoint counts.'], '9.4': [2, 'Exactly one named member gives two equal disjoint cases.'], '12.4': [3, 'A required senior replaces the cross-group forbidden pair.'] },
    worksheet: { '1.4': [2, 'Invert an unordered-pair count.'], '2.4': [2, 'Use complement symmetry and add equal selection counts.'], '3.4': [2, 'Infer the pool size from an omitted-pair count.'], '7.4': [3, 'Recover n from pairs before evaluating triples.'], '10.4': [3, 'Seat the required woman and exclude all-male remaining choices.'] },
  },
  1: {
    '1.2': { '5.3': [2, 'Convert the clock interval to minutes before counting inclusive departures.'], '5.4': [2, 'Use one fewer interval than terms to recover the final term.'], '7.3': [2, 'Remove both strict endpoints before counting.'] },
    '1.3': { '2.4': [3, 'Exactly one excludes the overlap twice.'], '4.2': [3, 'Three-digit occurrence requires a complement or three overlapping positions.'], '8.4': [4, 'Pairwise memberships count triple multiples three times; retain them once.'], '9.4': [4, 'Require both zero and eight across digit lengths and leading-position cases.'] },
    '1.4': { '1.4': [2, 'Recover one unknown option count from the other two factors.'] },
    '1.5': { '3.4': [2, 'Evaluate and add two different factorial quotients.'], '5.4': [3, 'Choose the occupied end, then exclude the adjacent position.'] },
    challenge: { '2.3': [4, 'Classify digit remainders modulo three; this is not unrestricted parity selection.'], '3.3': [4, 'Perfect powers overlap at sixth, tenth, fifteenth and thirtieth powers.'], '3.4': [4, 'Exactly-two membership removes each triple overlap three times.'], '5.2': [4, 'Four digit-sum totals introduce several different multiplicity cases.'], '5.3': [4, 'Four positions and a deficit up to three require several multiplicity cases.'], '5.4': [4, 'A fixed sum of 21 needs seven multiset cases or a deficit transformation.'], '6.4': [4, 'Exactly one of three divisors needs a new overlap weighting.'], '9.3': [3, 'Only two digit-factor types remain despite the extra digit.'], '11.3': [3, 'Required letters have no leading-zero constraint.'] },
    worksheet: { '2.4': [2, 'Recover the common difference from forty gaps.'], '3.4': [1, 'Return to direct inclusive arithmetic-list counting.'], '4.3': [3, 'Complement a union within a three-digit interval.'], '6.4': [2, 'Restrict the leading odd digit before the falling product.'], '7.4': [3, 'Invert three consecutive factors after factorial cancellation.'], '8.3': [1, 'Both endpoints are already fixed; arrange the remaining three.'], '8.4': [3, 'Place two named people in distinct interior positions.'], '10.3': [4, 'Divisibility-by-four endings leave different numbers of available odd first digits.'] },
  },
  2: {
    '2.2': { '1.3': [3, 'One red or no red leaves two choices at every other position.'], '3.4': [3, 'Add several possible digit gaps and remove leading-zero orders.'], '5.4': [3, 'Use positive ticket counts and the congruence restriction together.'], '6.3': [4, 'A product bound creates twelve variable-length cases.'], '6.4': [4, 'Infer the threshold from a piecewise count and verify adjacent thresholds.'], '7.3': [5, 'Nested longest-side and triangle-inequality cases replace a fixed perimeter.'], '7.4': [5, 'Prove the minimum across perimeters; triangle counts are not monotone between consecutive perimeters.'], '9.4': [4, 'Exactly two nines permits multiple lengths and several first-digit cases, or a justified padding bijection.'] },
    '2.3': { '10.3': [3, 'Five balls in four nonempty boxes force one pair and three singles.'], '10.4': [3, 'Choose the absent flavor, then exclude the two unanimous choices.'] },
    '2.4': { '4.3': [1, 'Remove one forbidden letter and use a direct falling product.'], '9.3': [2, 'Choose one of two ending letters before filling the other positions.'], '9.4': [2, 'Fill the nonzero even first digit before the even last digit; a case split is avoidable.'], '10.4': [3, 'Only two odd endings remain, with equal leading-digit counts.'] },
    '2.5': { '2.3': [3, 'The block now has three freely ordered members.'], '2.4': [3, 'Allowing every order inside the block adds an internal factorial.'], '6.3': [3, 'Equal parity group sizes permit two alternating patterns.'], '9.4': [4, 'An interior restriction interacts with forbidden adjacency.'], '10.3': [3, 'Only one pair is forbidden, so a single block complement suffices.'] },
    challenge: { '1.4': [4, 'A three-divisor complement replaces a two-divisor exclusive union.'], '3.4': [4, 'The distinct-digit complement must distinguish a zero final digit.'], '4.4': [3, 'Complement the two-named-people interior placement.'], '5.4': [4, 'Separate even units values and positive leading-digit distributions.'], '6.4': [4, 'Increasing triples now range over several totals.'], '7.4': [3, 'Two required neighbors force a three-person block with Ann in the center.'], '8.3': [2, 'Exclude B then complement the no-A strings; there is no digit-length issue.'], '8.4': [2, 'Padded strings use eight allowed digits, then exclude zero.'], '9.2': [4, 'One repeated pair among four digits has leading-zero subcases.'], '9.4': [4, 'Evenness interacts with three multiplicity patterns and the leading zero.'] },
    worksheet: { '2.4': [3, 'Sum over many allowed side-length totals.'], '5.3': [1, 'Choose a consonant end then use a direct falling product.'], '5.4': [3, 'First-digit threshold and odd last digit share some forbidden choices.'], '6.3': [2, 'The initial digit and internal block order are fixed.'], '9.2': [4, 'Product 48 introduces several repeated-factor types.'], '9.4': [4, 'Product 72 requires multiple bounded digit-factor cases.'], '10.2': [4, 'Choose three of four interior gaps and order the girls.'], '10.3': [4, 'Choose four of five interior gaps and order the black cards.'], '10.4': [4, 'Require an occupied end gap via a complement.'] },
  },
}
for (const [number, groups] of Object.entries(chapterReviewDepartures)) {
  const chapter = calibration.chapters[number]
  chapter.variantReview = { status: 'stem-reviewed', rounds: [2,3,4], note: 'All variant stems compared; nontrivial routes inspected; not every answer independently proved.' }
  for (const [group, overrides] of Object.entries(groups)) {
    const entries = Object.fromEntries(Object.entries(overrides).map(([key, [level, reason, scope]]) => [key, { level, reason, ...(scope ? { scope } : {}) }]))
    const target = chapter.sections[group]
    if (target) target.variantOverrides = { ...target.variantOverrides, ...entries }
    else chapter[`${group}VariantOverrides`] = { ...chapter[`${group}VariantOverrides`], ...entries }
  }
}

// Chapter 3: every base and variant stem was read individually in the chapter audit.
// Each row gives rounds 2, 3, 4, independently of the base level. Preserve earlier
// specific rationales, and keep an explicit reviewed entry even when levels match.
// See notes/audits/intro-counting-ch03.md for scope changes, solutions and limits.
const chapter3Reviewed = {
  '3.2': [
    [[1,1,2], 'Direct multiset division; round 4 reverses a pair count.'],
    [[1,2,3], 'Round 3 encodes a walk as repeated moves; round 4 recovers an unknown flag count.'],
    [[1,1,2], 'Direct repetition count, then an inverse repeated factorial.'],
    [[1,1,2], 'Direct repetition count, then recover total positions and subtract two.'],
    [[2,2,3], 'Fix a first object; round 4 splits the shared endpoint letter into three cases.'],
    [[2,2,3], 'Compress blocks and then count the remaining repeated letters.'],
    [[3,3,4], 'Round 4 excludes two different adjacency events and restores their overlap.'],
    [[3,3,4], 'Use separate gaps; round 4 combines two forbidden repeated pairs.'],
    [[3,3,3], 'Restrict the first or last position before subtracting forbidden starts.'],
    [[4,5,5], 'Round 2 forbids complete monochromatic blocks; rounds 3 and 4 require interacting shorter-run cases.'],
  ],
  '3.3': [
    [[1,1,2], 'Direct unordered pairs, then an inverse pair count.'],
    [[1,1,1], 'Direct pairs; one withdrawing player removes one game with each remaining player.'],
    [[1,2,3], 'A named polygon uses the taught formula; ropes need a translation; round 4 reverses the diagonal count.'],
    [[2,1,2], 'Two games per pair, directed postcards, and an inverse directed-pair total are distinct demands.'],
    [[1,1,1], 'Direct cross-group product or its one-division inverse.'],
    [[3,2,3], 'Reverse a diagonal count, reverse consecutive factors, or recover vertices before counting all segments.'],
    [[2,2,3], 'Subtract excluded pairs; round 4 recovers the excluded group.'],
    [[3,2,2], 'A new polygon vertex changes one old side; the newcomer and two known polygon sizes have shorter setups.'],
    [[2,2,2], 'Count incident ends twice; inverse degree count uses the same setup.'],
    [[3,3,3], 'Repair collinear pair counts, with a second special line or an inverse total.'],
  ],
  '3.4': [
    [[1,1,2], 'Direct distinct circular factorial, then its inverse.'],
    [[2,2,3], 'Distinct bracelets allow uniform division; round 4 adds a required adjacent pair.'],
    [[2,1,3], 'Required adjacency, unrestricted rotation, and forbidden adjacency have different setups.'],
    [[2,2,3], 'Count a circular block; round 4 recovers the table size.'],
    [[3,3,3], 'Anchor a named bead, enforce opposite or separated positions, and account for reflections.'],
    [[1,2,3], 'Numbered spots use a factorial; a clasp retains only reversal; numbered neighboring spots need wraparound.'],
    [[3,3,3], 'Anchor one person and exclude forbidden relative positions.'],
    [[3,3,3], 'Alternate the two groups; handle flips only in the bracelet version.'],
    [[4,4,4], 'Arrange the ordinary objects, choose distinct circular gaps, then place the special objects.'],
    [[4,5,4], 'Repeated colors require genuine rotation classes; six wedges introduce several different periods.'],
  ],
  challenge: [
    [[1,2,2], 'Direct multiset, encode three move directions, or fix both endpoints.'],
    [[3,2,2], 'Separate same-division and cross-division schedules; tables and a newcomer use shorter setups.'],
    [[4,4,3], 'Separate glass beads, classify repeated colors, or anchor an opposite pair before quotienting by reflection.'],
    [[3,2,3], 'Exclude two distances, translate circular paths to diagonals, or reverse the diagonal count.'],
    [[3,3,3], 'Combine two blocks or a block and an adjacency complement.'],
    [[3,3,3], 'Remove untagged pairs; round 4 reverses the missing-pair count.'],
    [[2,3,3], 'A specified clockwise block has one internal order; an unrestricted block needs its internal factorial.'],
    [[3,3,4], 'Endpoint cases, a forbidden zero start, or a full list of divisible-by-four endings.'],
    [[5,5,5], 'Periodic rotation classes and mirror-pair cases remain optional extension.'],
    [[3,3,1], 'Two inverse missing-pair totals; round 4 instead asks only the direct senior-junior product.'],
    [[4,3,4], 'Forbidden spouse neighbors force a short matching analysis; together-couple blocks are easier.'],
    [[5,5,5], 'Repeated-color bracelets require rotation and reflection classes with unequal sizes.'],
  ],
  worksheet: [
    [[1,1,2], 'Direct repeated-object count; round 4 first compresses a block.'],
    [[1,1,2], 'Direct unordered pairs, then their inverse.'],
    [[1,2,3], 'Direct diagonal substitution, a context translation, then an inverse diagonal total.'],
    [[2,3,1], 'Independent trays, repeated empty pegs, and explicitly numbered seats have distinct demands.'],
    [[3,5,3], 'Adjacency-restricted distinct necklaces; round 3 switches to repeated-color bracelets.'],
    [[2,2,2], 'Fix endpoints or choose one of five interior positions before arranging repetitions.'],
    [[2,2,2], 'Count endpoint incidences and divide by two, including the inverse total.'],
    [[3,2,2], 'Two relative-position rules; fixed opposition; or one excluded opposite position.'],
    [[3,2,2], 'Two leading-digit cases versus a single forced terminal digit.'],
    [[4,4,4], 'Separate solid and nonsolid rotation classes, or all color multiplicity cases under reflections.'],
  ],
}
for (const [group, rows] of Object.entries(chapter3Reviewed)) {
  const chapter = calibration.chapters[3]
  const target = chapter.sections[group]
  const reviewed = Object.fromEntries(rows.flatMap(([levels, reason], index) => levels.map((level, r) => {
    const key = `${index + 1}.${r + 2}`
    return [key, { ...(target?.variantOverrides?.[key] ?? {}), level, reason }]
  })))
  if (target) target.variantOverrides = reviewed
  else chapter[`${group}VariantOverrides`] = reviewed
}
calibration.chapters[3].challengeVariantOverrides['3.3'].scope = 'extension'
calibration.chapters[3].worksheetVariantOverrides['5.3'].scope = 'extension'
calibration.chapters[3].sections['3.2'].variantOverrides['10.3'].scope = 'extension'
calibration.chapters[3].sections['3.2'].variantOverrides['10.4'].scope = 'extension'
calibration.chapters[9].sections['9.2'].variantOverrides['8.3'] = { level: 4, reason: 'Extending to five draws still permits a finite two-case majority count; no long tree is necessary.' }

export default calibration
