// Editorial demand ratings from the stems, methods, and prerequisite audit.
// These are not student-response or time-based psychometric estimates.
// The digits below encode individual judgments in source order, not a slot ramp.
const levels = digits => [...digits].map(Number)
const section = (scope, digits, rationale, prerequisites = [], extra = {}) => ({
  scope, levels: levels(digits), rationale, prerequisites, ...extra,
})
const refs = (...ids) => ids.map(id => `intro-algebra/${id}`)
const reviewedVariants = () => ({ status: 'stem-reviewed', rounds: [2, 3, 4], note: 'All variant stems compared; nontrivial routes inspected; not every answer independently proved.' })

export default {
  book: 'intro-algebra',
  chapters: {
    1: {
      variantReview: reviewedVariants(),
      sections: {
        '1.1': section('core', '1111112122', 'Classification and comparisons; integer counting needs endpoint care.'),
        '1.2': section('core', '1111122222', 'Routine operations; nested powers add execution steps.'),
        '1.3': section('core', '1111221232', 'The alternating sum needs pairing; reciprocal reversal is short.', refs('1.2')),
        '1.4': section('core', '1111222222', 'Direct distributive computation, including disguised common factors.', refs('1.3'), { variantOverrides: { '1.4': { level: 2, reason: 'Translate two item types per bag before multiplying by the bag count.' } } }),
        '1.5': section('core', '1111222222', 'One-step to two-sided equations and identity recognition.', refs('1.4'), { variantOverrides: { '7.4': { level: 3, reason: 'Build and equate two pricing models rather than solve a supplied equation.' } } }),
        '1.6': section('core', '1111111222', 'Exponent rules; the final item changes to a common base.', refs('1.2')),
        '1.7': section('extension', '1112222222', 'Fractional exponent notation is optional beyond the contest route.', refs('1.6')),
        '1.8': section('bridge', '1111122222', 'Root simplification is accessible; rationalization is optional.', refs('1.6'), { scopeOverrides: { '7': 'extension', '9': 'extension' } }),
      },
      challenge: levels('222222222222'), worksheet: levels('2222222222'),
      challengeScope: 'bridge', challengeScopeOverrides: { '6': 'extension', '8': 'extension', '10': 'extension' },
      worksheetScope: 'bridge', worksheetScopeOverrides: { '5': 'extension', '7': 'extension', '9': 'extension' },
    },
    2: {
      variantReview: reviewedVariants(),
      sections: {
        '2.1': section('core', '1111111212', 'Translation and substitution, with negative inputs.', refs('1.2'), { variantOverrides: { '7.4': { level: 2, reason: 'Translate the verbal instruction into a grouped expression, then evaluate at a supplied input; the base only asks for the expression.' } } }),
        '2.2': section('core', '1111121222', 'Like terms and a perimeter; last item sums coefficients.', refs('2.1'), { variantOverrides: { '5.4': { level: 2, reason: 'Translate a three-bag story and distinguish variable masses from a constant.' } } }),
        '2.3': section('core', '1121122222', 'Distribution and common factors; no quadratic solving needed.', refs('1.4', '2.2'), { variantOverrides: { '1.4': { level: 2, reason: 'Construct a per-bag expression before distributing.' } } }),
        '2.4': section('core', '1111112122', 'Fraction operations and testing a false cancellation.', refs('2.3')),
      },
      challenge: levels('222222112222'), worksheet: levels('1221122222'), challengeScope: 'core', worksheetScope: 'core',
    },
    3: {
      variantReview: reviewedVariants(),
      sections: {
        '3.1': section('core', '1111221222', 'Inverse operations; later equations include negative fractions.', refs('1.5', '2.4')),
        '3.2': section('core', '2222222222', 'Two-sided distribution and identity versus contradiction.', refs('3.1', '2.3')),
        '3.3': section('core', '1222222323', 'Story translation; ticket and changing-age models add a choice of variable.', refs('3.2')),
        '3.4': section('bridge', '2222222222', 'Clearing denominators; track forbidden inputs explicitly.', refs('3.2', '2.4')),
      },
      challenge: levels('222222323222'), worksheet: levels('2222222322'), challengeScope: 'bridge', worksheetScope: 'core',
    },
    4: {
      variantReview: reviewedVariants(),
      sections: {
        '4.1': section('core', '1111222122', 'Multi-variable substitution adds sign bookkeeping.', refs('2.1')),
        '4.2': section('core', '1112222122', 'Like terms and subtraction with several variable types.', refs('2.2')),
        '4.3': section('bridge', '1122222122', 'Two-binomial expansion is supplementary algebra practice.', refs('2.3', '4.2')),
        '4.4': section('bridge', '1111122222', 'Symbolic fractions need cancellation and domain awareness.', refs('2.4', '4.3')),
        '4.5': section('core', '1111122122', 'Rearranging linear formulas, including geometry and distance.', refs('3.1')),
      },
      challenge: levels('222222222222'), worksheet: levels('1122222222'), challengeScope: 'bridge', worksheetScope: 'bridge',
    },
    5: {
      variantReview: reviewedVariants(),
      sections: {
        '5.1': section('core', '1111221222', 'Pairs and constraints; positive integer solutions form a short list.', refs('4.1', '4.5')),
        '5.2': section('core', '2211222222', 'Substitution in two linear conditions.', refs('5.1', '3.2')),
        '5.3': section('core', '2212222222', 'Elimination; the final sum avoids finding each variable.', refs('5.1', '3.2'), { variantOverrides: { '3.3': { level: 2, reason: 'The coefficients do not already match: multiply one equation before subtraction, rather than choose an immediate addition.' }, '3.4': { level: 2, reason: 'First double one equation to create matching coefficients, then subtract; the base eliminates directly.' } } }),
        '5.4': section('core', '2222222233', 'Price and mixture models; the last two require translating coefficients.', refs('5.2', '5.3')),
        '5.5': section('bridge', '1222222122', 'Disguised systems and dependent equations.', refs('5.2', '5.3')),
        '5.6': section('bridge', '2221222233', 'Pair sums and combined targets; avoid unnecessary full elimination.', refs('5.3'), { variantOverrides: { '10.4': { level: 1, reason: 'The requested total is simply the first and third given sums added.' } } }),
      },
      challenge: levels('222322222322'), worksheet: levels('2221223322'), challengeScope: 'bridge', worksheetScope: 'bridge',
      challengeVariantOverrides: { '8.4': { level: 1, reason: 'The requested difference follows by subtracting the two displayed pair sums; recovering an individual variable as in the base is unnecessary.' } },
    },
    6: {
      variantReview: reviewedVariants(),
      sections: {
        '6.1': section('core', '2222222233', 'Ratio parts become totals, differences, ages, and an area.', refs('3.3')),
        '6.2': section('core', '2222332333', 'Changing ratios require identifying the unchanged quantity.', refs('6.1', '3.2')),
        '6.3': section('core', '1111222222', 'Unit cancellation, with two-stage conversions.', refs('2.4'), { variantOverrides: { '10.4': { level: 1, reason: 'A single division converts crates per day to crates per hour.' } } }),
        '6.4': section('core', '1111222122', 'Percent as a multiplier; reverse percentages and scaling.', refs('3.1')),
        '6.5': section('core', '2222232333', 'Successive changes and mixture conservation need a model.', refs('6.4', '5.4')),
      },
      challenge: levels('332233322322'), worksheet: levels('2122223333'), challengeScope: 'core', worksheetScope: 'core',
      challengeVariantOverrides: { '8.3': { level: 3, reason: 'Reverse both markup and discount to recover the initial cost. The base only applies the two given multipliers forwards; this matches the inverse two-stage model in challenge 5.' } },
    },
    7: {
      variantReview: reviewedVariants(),
      sections: {
        '7.1': section('core', '1112212222', 'Find or scale a constant; perfect-square roots suffice.', refs('6.1', '1.6')),
        '7.2': section('core', '1111222223', 'Constant products; percent reversal is the main new connection.', refs('6.1', '6.5')),
        '7.3': section('bridge', '1111222222', 'Joint scaling combines already familiar ratios.', refs('7.1', '7.2')),
        '7.4': section('core', '1111232332', 'Rates must be added before inversion; pursuit needs a head start.', refs('6.3', '3.3'), { variantOverrides: {
          '1.4': { level: 2, reason: 'Infer liters per minute, then convert the requested duration from one hour to sixty minutes.' },
          '3.4': { level: 2, reason: 'Derive a whole-job rate and apply it for five hours; the base only asks for the one-hour reciprocal.' },
          '7.3': { level: 3, reason: 'After finding meeting time from the closing rate, obtain one individual car distance; the base stops at meeting time.' },
          '10.4': { level: 3, reason: 'The third contributor drains rather than fills, so choose a signed net-rate model before inversion.' },
        } }),
      },
      challenge: levels('223333331223'), worksheet: levels('2222222333'), challengeScope: 'core', worksheetScope: 'core',
      challengeVariantOverrides: {
        '7.4': { level: 2, reason: 'Meeting time is given: compute the combined speed and subtract the known speed; no intermediate hidden time or individual distance is needed.' },
        '9.3': { level: 2, reason: 'Recover the distance multiplier from the inverse-square output factor, rather than apply a stated distance multiplier.' },
        '9.4': { level: 2, reason: 'Convert a fifty-percent increase to a factor of three-halves before squaring and taking its reciprocal.' },
      },
      worksheetVariantOverrides: {
        '6.4': { level: 3, reason: 'Reverse the combined-work calculation: subtract a known solo rate from the team rate before inverting.' },
        '9.4': { level: 2, reason: 'The meeting clock time is supplied. Compute the first boat distance over four hours, then divide by the chaser\'s two hours; no unknown chase duration needs solving.' },
      },
    },
    8: {
      variantReview: reviewedVariants(),
      sections: {
        '8.1': section('core', '1111122232', 'Read coordinates before ratio division of a segment.', refs('1.1', '6.1'), { variantOverrides: { '3.4': { level: 2, reason: 'Read the plotted point, then apply two directed displacements.' }, '10.3': { level: 3, reason: 'Recovering a missing coordinate requires reverse perimeter reasoning.' } } }),
        '8.2': section('core', '1111222222', 'Read and substitute linear coordinates.', refs('5.1', '8.1')),
        '8.3': section('bridge', '1111112222', 'Slope as a rate; solving missing coordinates needs a short equation.', refs('8.2', '7.4')),
        '8.4': section('bridge', '1112122222', 'Formal equations of lines supplement coordinate reasoning.', refs('8.3', '4.5')),
        '8.5': section('bridge', '1111222223', 'Intercept substitution; the final item links both intercepts.', refs('8.4')),
        '8.6': section('extension', '1111222222', 'Negative reciprocal slopes are optional formal coordinate algebra.', refs('8.4', '5.3'), { variantOverrides: {
          '3.3': { level: 2, reason: 'Rewrite the standard-form equation to recover its slope before applying parallel slopes.' },
          '3.4': { level: 2, reason: 'Recover the slope from a standard-form equation, then equate it to the unknown coefficient.' },
          '4.3': { level: 2, reason: 'First isolate the slope in standard form, then take its negative reciprocal.' },
        } }),
      },
      challenge: levels('122222222221'), worksheet: levels('1122222222'), challengeScope: 'bridge', worksheetScope: 'bridge',
      challengeScopeOverrides: { '6': 'extension' }, worksheetScopeOverrides: { '9': 'extension' },
      challengeVariantOverrides: {
        '1.3': { level: 2, reason: 'Reverse the midpoint relation to recover an endpoint rather than average two given endpoints.' },
        '4.3': { level: 3, reason: 'Express both intercepts in terms of the parameter and reverse the triangle-area relation.' },
        '6.3': { level: 3, reason: 'After finding the perpendicular slope, use the coordinate run to recover a missing endpoint coordinate.' },
        '6.4': { level: 1, reason: 'Recognize a vertical line from equal x-coordinates; its perpendicular is horizontal with slope zero.' },
        '11.3': { level: 3, reason: 'Recover a right-triangle leg from perimeter: combine the Pythagorean theorem with a radical equation and one squaring step whose quadratic terms cancel.' },
      },
    },
    9: {
      variantReview: reviewedVariants(),
      sections: {
        '9.1': section('core', '1111111122', 'Order rules and sign reversal, with a counterexample at the end.', refs('1.1', '3.1')),
        '9.2': section('bridge', '1111122123', 'Comparisons mostly short; radical sums require repeated squaring.', refs('1.6', '1.8'), { scopeOverrides: { '10': 'extension' }, variantOverrides: { '10.4': { level: 1, reason: 'The two identical radicals combine immediately; no two-stage comparison.' } } }),
        '9.3': section('core', '1112222222', 'Linear bounds and integer endpoints.', refs('9.1', '3.2')),
        '9.4': section('bridge', '1112112122', 'Boundary inclusion and testing a point; plane shading is optional.', refs('9.3', '8.2'), { scopeOverrides: { '3': 'extension', '4': 'extension', '6': 'extension', '8': 'extension' } }),
        '9.5': section('bridge', '1112222223', 'Small finite maxima bridge arithmetic to organized search.', refs('9.3')),
      },
      challenge: levels('222312232223'), worksheet: levels('2222112223'), challengeScope: 'bridge', worksheetScope: 'bridge',
      challengeScopeOverrides: { '4': 'extension', '10': 'extension' }, worksheetScopeOverrides: { '10': 'extension' },
      challengeVariantOverrides: { '8.4': { level: 2, reason: 'Only the minimum product is requested; the base requires both extrema and their difference.' } },
      worksheetVariantOverrides: { '6.4': { level: 2, reason: 'Subtract a fixed entry fee before dividing the remaining budget by the hourly rate.' } },
    },
    10: {
      variantReview: reviewedVariants(),
      sections: {
        '10.1': section('extension', '1111221122', 'Formal quadratic solving is optional; basic square roots remain useful.', refs('3.2', '1.8')),
        '10.2': section('extension', '2122222223', 'Factoring quadratics; item 9 is direct substitution into an equation and item 10 needs integer factor cases.', refs('10.1', '4.3')),
        '10.3': section('extension', '2211222222', 'Quadratic factorization with leading coefficients.', refs('10.2')),
        '10.4': section('extension', '1112122222', 'Vieta identities are enrichment even when the calculation is short.', refs('10.2', '4.3')),
        '10.5': section('extension', '1322223333', 'Quadratic substitutions and nonlinear models are enrichment.', refs('10.3'), { variantOverrides: {
          '8.3': { level: 2, reason: 'The framed figure is a square: take the positive square root of the area and halve the increase in side length; quadratic factoring is unnecessary.' },
          '9.4': { level: 2, reason: 'The substitution and its two results are supplied; only reject the negative square and count the two roots of the positive one.' },
        } }),
      },
      challenge: levels('222333222222'), worksheet: levels('1222122322'), challengeScope: 'extension', worksheetScope: 'extension',
      challengeScopeOverrides: { '3': 'bridge' },
      challengeVariantOverrides: { '4.3': { level: 2, reason: 'The middle coefficient is fixed, so complete one perfect square rather than find both possible signs of a middle coefficient.' } },
      worksheetVariantOverrides: {
        '1.4': { level: 2, reason: 'Divide by the leading coefficient before taking both square roots.' },
        '9.4': { level: 3, reason: 'After constructing and solving the area equation, select the positive dimensions and calculate a perimeter.' },
      },
    },
    11: {
      variantReview: reviewedVariants(),
      sections: {
        '11.1': section('bridge', '1121221222', 'Square identities extend arithmetic products and symmetric quantities.', refs('4.3'), { variantOverrides: { '4.4': { level: 2, reason: 'Find all coefficients and add them, or recognize evaluation at one; the base asks only for the middle term.' } } }),
        '11.2': section('bridge', '1221222222', 'Difference of squares is useful arithmetic; fourth powers are optional.', refs('11.1'), { scopeOverrides: { '7': 'extension', '9': 'extension' } }),
        '11.3': section('extension', '1112122222', 'Cube factorization is enrichment.', refs('11.2')),
        '11.4': section('extension', '1111222223', 'Conjugate rationalization adds an optional symbolic prerequisite.', refs('1.8', '11.2'), { variantOverrides: { '3.4': { level: 2, reason: 'Compute the conjugate product rather than merely name the conjugate.' } } }),
        '11.5': section('extension', '1111223333', 'Completing a product and divisor restrictions form an enrichment strand. Signed factoring in item 6 is routine grouping, without the integer search of items 7–10.', refs('4.3', '10.2'), { variantOverrides: { '4.3': { level: 2, reason: 'Find the missing product constant and add it to the given right side; the base only asks for the constant.' } } }),
      },
      challenge: levels('212212232223'), worksheet: levels('2211222222'), challengeScope: 'extension', worksheetScope: 'extension',
      challengeScopeOverrides: { '1': 'bridge', '2': 'bridge', '4': 'bridge', '7': 'bridge', '11': 'bridge' },
      worksheetScopeOverrides: { '1': 'bridge', '2': 'bridge', '3': 'bridge', '8': 'bridge' },
      challengeVariantOverrides: {
        '5.4': { level: 2, reason: 'Remove a common numerical factor before applying the cube identity.' },
        '6.4': { level: 3, reason: 'Rationalize two fractions and combine them with careful subtraction, rather than rationalize a single fraction.' },
        '7.4': { level: 3, reason: 'Recover the difference, recover the two numbers from their sum and difference, then multiply them.' },
      },
      worksheetVariantOverrides: {
        '9.3': { level: 3, reason: 'Enumerate and filter several unequal ordered factor pairs with different lower bounds, retaining two solutions instead of the base prime-square singleton.' },
        '9.4': { level: 3, reason: 'A negative coefficient creates a shifted factor of unknown sign; establish its positivity, then enumerate the two permitted divisor pairs.' },
      },
    },
    12: {
      variantReview: reviewedVariants(),
      sections: {
        '12.1': section('core', '1111111112', 'Number-system review remains elementary despite the chapter position.', refs('1.1'), { variantOverrides: { '9.4': { level: 2, reason: 'Use closure of rationals to rule out a rational sum for every irrational input, rather than cancel two displayed radicals.' } } }),
        '12.2': section('extension', '1111112222', 'Imaginary arithmetic has low execution demand but is outside the target scope.', refs('1.6', '10.1'), { variantOverrides: { '5.3': { level: 2, reason: 'Convert two negative radicands to imaginary numbers before combining like terms.' } } }),
        '12.3': section('extension', '1111222223', 'Complex operations; the last equation introduces completing a square early.', refs('12.2', '11.1', '11.4'), { variantOverrides: { '10.4': { level: 2, reason: 'Both roots are supplied: take their conjugate product to obtain the constant term instead of completing a square.' } } }),
      },
      challenge: levels('222212223232'), worksheet: levels('1221122323'), challengeScope: 'extension', worksheetScope: 'extension',
      challengeVariantOverrides: {
        '3.3': { level: 3, reason: 'Expand with a parameter, interpret zero real part, then solve for the positive parameter.' },
        '5.3': { level: 2, reason: 'Reverse a conjugate product to recover an unknown positive component.' },
        '5.4': { level: 2, reason: 'Compute two conjugate products and multiply their results.' },
        '10.3': { level: 3, reason: 'Recover both components from the sum and product with the conjugate, including a square-root sign restriction.' },
        '12.3': { level: 3, reason: 'Complete a square before applying the no-real-root condition; the base is already an isolated square plus constant.' },
      },
      worksheetVariantOverrides: {
        '1.4': { level: 2, reason: 'Separate the imaginary unit and extract a square factor from a non-square magnitude.' },
        '4.3': { level: 2, reason: 'Convert two square roots of negatives before multiplying; the base already displays multiples of i.' },
        '4.4': { level: 2, reason: 'Use i squared to form and solve a coefficient equation rather than multiply two given numbers.' },
        '8.4': { level: 2, reason: 'Given both roots, use their sum and product; completing a square is unnecessary.' },
        '10.4': { level: 2, reason: 'The unknown is the numerator, so multiply the two given complex numbers instead of dividing or solving a system.' },
      },
    },
    13: {
      variantReview: reviewedVariants(),
      sections: {
        '13.1': section('extension', '1112122212', 'Binomial squares lead to irrational roots.', refs('10.1', '11.1'), { variantOverrides: { '2.3': { level: 2, reason: 'Divide by the coefficient before taking both square roots.' }, '6.3': { level: 1, reason: 'The roots are supplied in the exact shifted-square form, so read the radicand directly.' } } }),
        '13.2': section('extension', '1112222222', 'Completing a square is a new method, not automatically a hard problem.', refs('13.1'), { variantOverrides: { '3.3': { level: 2, reason: 'Recover the negative middle coefficient from a fractional square.' } } }),
        '13.3': section('extension', '1122222222', 'Quadratic formula and discriminants, including complex roots.', refs('13.2', '12.3'), { variantOverrides: { '2.3': { level: 2, reason: 'Reverse the discriminant formula to solve for a missing coefficient.' } } }),
        '13.4': section('extension', '2221122232', 'Quadratic applications and parameter conditions.', refs('13.3', '10.4'), { variantOverrides: {
          '2.3': { level: 3, reason: 'Solve an area model for the positive dimensions, then calculate the requested perimeter.' },
          '5.4': { level: 2, reason: 'Combine the roots sum and product into a sum of reciprocals instead of directly reading the product.' },
          '7.3': { level: 3, reason: 'The launch height is nonzero, requiring a genuine quadratic and rejection of negative time; the base factors out time directly.' },
          '7.4': { level: 3, reason: 'A nonzero target height gives two positive times, and the ascending-flight condition selects the earlier one.' },
          '9.4': { level: 2, reason: 'Apply the sum-of-squares identity directly; finding two irrational numbers with a quadratic is unnecessary.' },
        } }),
      },
      challenge: levels('222222223322'), worksheet: levels('2122222233'), challengeScope: 'extension', worksheetScope: 'extension',
      challengeVariantOverrides: { '10.4': { level: 2, reason: 'The landing time is supplied, so substitute it and solve a linear equation for the initial height.' } },
      worksheetVariantOverrides: { '5.4': { level: 3, reason: 'First recover the missing constant from the discriminant, then solve the resulting quadratic for both roots.' } },
    },
    14: {
      variantReview: reviewedVariants(),
      sections: {
        '14.1': section('extension', '1112122222', 'Parabola features and algebraic intercepts.', refs('13.2', '13.3', '8.1')),
        '14.2': section('extension', '1112222223', 'Circle equations and completing two squares are optional coordinate algebra.', refs('13.2', '8.1'), { variantOverrides: { '10.4': { level: 2, reason: 'Only a radius is requested: find the endpoint distance and halve it; no center or circle equation is needed.' } } }),
      },
      challenge: levels('211222222212'), worksheet: levels('1221222232'), challengeScope: 'extension', worksheetScope: 'extension',
      challengeVariantOverrides: {
        '1.3': { level: 3, reason: 'First reverse the axis formula to recover a coefficient, then evaluate the completed parabola at its vertex.' },
        '3.3': { level: 2, reason: 'Use the vertex to set up a formula, then substitute a second point to solve for its leading coefficient.' },
        '12.4': { level: 3, reason: 'Read the vertex, infer the scale from a second plotted point, then expand to recover all three standard-form coefficients.' },
      },
      worksheetVariantOverrides: {
        '3.4': { level: 3, reason: 'Recover a missing coefficient from a supplied intercept before finding the remaining intercepts.' },
        '6.4': { level: 3, reason: 'Recover a coordinate with a sign restriction from the circle equation, then test a different point.' },
        '8.4': { level: 3, reason: 'Both center and radius must be derived from diameter endpoints; the base supplies the center.' },
      },
    },
    15: {
      variantReview: reviewedVariants(),
      sections: {
        '15.1': section('extension', '2212222222', 'Quadratic sign intervals require factoring before reading endpoints.', refs('10.3', '9.3')),
        '15.2': section('extension', '2122223333', 'Rational and cubic sign charts add branches and domain exclusions.', refs('15.1', '4.4')),
        '15.3': section('extension', '1111222122', 'Nonnegative squares and completing squares; most calculations remain short.', refs('13.2')),
        '15.4': section('extension', '1212222333', 'Quadratic extrema and geometric models. Fixed-sum products and four-sided fencing reuse the earlier arithmetic balancing route.', refs('15.3', '14.1'), { scopeOverrides: { '5': 'bridge', '7': 'bridge' }, variantOverrides: { '8.3': { level: 2, reason: 'Only the vertex time is requested; no peak-height evaluation follows it.' } } }),
      },
      challenge: levels('232222333222'), worksheet: levels('2222123232'), challengeScope: 'extension', worksheetScope: 'extension',
      challengeScopeOverrides: { '3': 'core', '6': 'bridge' }, worksheetScopeOverrides: { '5': 'core' },
      challengeVariantOverrides: {
        '6.2': { level: 3, reason: 'The weighted sum requires a new product model; equal original variables no longer maximize the product.' },
        '6.4': { level: 3, reason: 'Turn a fixed sum into a two-square objective and establish the minimizing equality case.' },
        '10.3': { level: 3, reason: 'Solve a height inequality for an interval and measure its duration, rather than find a vertex height.' },
        '10.4': { level: 3, reason: 'Recover a model coefficient from the peak time before evaluating the peak height.' },
        '11.4': { level: 3, reason: 'Intersect an outside-square bound with an inside-square bound, producing two intervals with mixed endpoint rules.' },
      },
      worksheetVariantOverrides: {
        '8.4': { level: 3, reason: 'A nonzero right side requires moving terms into a single rational expression before sign analysis; the other family members start at zero.' },
        '9.3': { level: 2, scope: 'bridge', reason: 'All four sides are fenced, so use the familiar fixed-perimeter square; the base requires a weighted three-side constraint.' },
      },
    },
    16: {
      variantReview: reviewedVariants(),
      sections: {
        '16.1': section('bridge', '1111121112', 'Function notation is accessible; formal domain and range are supplementary.', refs('2.1', '9.3'), { scopeOverrides: { '7': 'extension', '8': 'extension', '9': 'extension' }, variantOverrides: { '3.3': { level: 2, reason: 'Work backward from an output through squaring, instead of direct evaluation.' } } }),
        '16.2': section('bridge', '2222222222', 'Combining outputs, with optional quadratic domain and root questions.', refs('16.1', '4.3'), { scopeOverrides: { '8': 'extension', '10': 'extension' }, variantOverrides: { '7.4': { level: 3, reason: 'Factor and simplify the quotient with its excluded input, then solve backwards from a requested output.' } } }),
        '16.3': section('bridge', '2222222232', 'Nested machines and tables; recovering the outer rule adds an equation.', refs('16.1', '3.2'), { variantOverrides: { '9.3': { level: 2, reason: 'The missing machine is the inner one, found by ordinary inverse operations; the base recovers an outer rule after a changed input.' } } }),
        '16.4': section('extension', '1111222223', 'Formal inverses and injectivity are an optional function strand.', refs('16.3', '4.5')),
        '16.5': section('bridge', '1122222222', 'Tables, recurrences, and substitutions need no advanced functional theory.', refs('16.1', '1.6')),
        '16.6': section('core', '1112222222', 'Defined operations are substitutions; nested operations add reading steps.', refs('2.1', '1.2')),
      },
      challenge: levels('221222222223'), worksheet: levels('1122222222'), challengeScope: 'bridge', worksheetScope: 'bridge',
      challengeScopeOverrides: { '3': 'extension', '5': 'extension', '7': 'extension', '8': 'extension', '11': 'extension', '12': 'extension' },
      challengeVariantOverrides: {
        '3.4': { level: 2, reason: 'Build and apply the inverse twice, rather than recover one input.' },
        '8.2': { level: 3, reason: 'Combine a root-domain inequality with an independent denominator exclusion.' },
        '8.3': { level: 3, reason: 'The radicand is quadratic, so its domain requires two sign intervals instead of a linear bound.' },
        '8.4': { level: 3, reason: 'A square root in the denominator adds a nonzero condition to real-root existence, making the final bound strict.' },
        '10.3': { level: 3, reason: 'The unknown is the outer function; undo the inner input shift before recovering its rule.' },
        '10.4': { level: 3, scope: 'extension', reason: 'Recover an inner rule by identifying a perfect-square polynomial after reversing the outer square operation.' },
        '11.2': { level: 2, scope: 'bridge', reason: 'Split a supplied reciprocal expression into two explicitly defined machines; no inverse-function or root-domain theory is required.' },
        '11.3': { level: 2, scope: 'bridge', reason: 'Split a supplied polynomial expression into inner and outer machines, as in the earlier composition exercises.' },
        '11.4': { level: 2, scope: 'bridge', reason: 'Identify two explicitly defined polynomial machines in their execution order.' },
      },
      worksheetVariantOverrides: {
        '5.4': { level: 1, reason: 'Only one inverse value is requested, so undo the supplied linear rule numerically.' },
        '8.4': { level: 3, reason: 'Recovering the outer rule requires reversing an input shift, while the base only rescales the input.' },
      },
      worksheetScopeOverrides: { '5': 'extension' },
    },
    17: {
      variantReview: reviewedVariants(),
      sections: {
        '17.1': section('bridge', '1111112121', 'Graph readings are mostly direct; quadratic intercept solving is optional.', refs('16.1', '8.1'), { scopeOverrides: { '9': 'extension' } }),
        '17.2': section('extension', '1111122222', 'Formal transformations are supplementary; compound shifts require two steps.', refs('17.1')),
        '17.3': section('extension', '1111121122', 'Inverse graph tests and restricted domains are optional.', refs('16.4', '17.1'), { variantOverrides: {
          '8.3': { level: 2, reason: 'Undo a vertical shift before taking the domain-selected square root.' },
          '8.4': { level: 2, reason: 'Undo a shifted square and filter the candidate inputs by the restricted domain.' },
        } }),
      },
      challenge: levels('211222111222'), worksheet: levels('1112122222'), challengeScope: 'extension', worksheetScope: 'extension',
      challengeScopeOverrides: { '3': 'bridge', '8': 'bridge', '11': 'bridge' },
      worksheetScopeOverrides: { '1': 'core', '2': 'bridge', '4': 'bridge' },
      challengeVariantOverrides: {
        '2.2': { level: 2, reason: 'Combine a horizontal reflection with an independent vertical translation.' },
        '2.3': { level: 2, reason: 'Reverse both a horizontal reflection and a vertical translation.' },
        '2.4': { level: 2, reason: 'Recover a transformed input by solving the combined reflection-and-shift equation.' },
        '5.4': { level: 3, reason: 'Invert a radical rule and derive the inverse domain from the original range.' },
        '7.4': { level: 2, reason: 'Find the repeated output and remove a suitable input while preserving uniqueness of every remaining output.' },
        '8.2': { level: 2, reason: 'An input shift makes the new intercept use f(3), then apply the output shift.' },
        '8.3': { level: 2, reason: 'Recover the old intercept by reversing a scale and a shift.' },
      },
    },
    18: {
      variantReview: reviewedVariants(),
      sections: {
        '18.1': section('extension', '1111222222', 'Formal polynomial vocabulary mostly repeats earlier expression arithmetic.', refs('4.2', '16.1')),
        '18.2': section('extension', '1121121222', 'Polynomial multiplication; coefficient sums use evaluation at one.', refs('18.1', '4.3'), { variantOverrides: { '2.3': { level: 2, reason: 'Reverse distribution separately for coefficients and powers to recover two missing terms.' }, '10.3': { level: 3, reason: 'Reverse coefficient-sum reasoning must recover an unknown parameter.' } } }),
      },
      challenge: levels('222222222211'), worksheet: levels('1222222222'), challengeScope: 'extension', worksheetScope: 'extension',
      challengeVariantOverrides: {
        '11.3': { level: 2, reason: 'Compute the degree of each powered block, then add the two degrees for their product.' },
        '12.3': { level: 3, reason: 'The leading coefficient prevents directly reading a plus b: recover a and b from a weighted sum and signed integer factor pairs.' },
      },
    },
    19: {
      variantReview: reviewedVariants(),
      sections: {
        '19.1': section('core', '1111121222', 'Integer growth and decay; the notation does not raise demand by itself.', refs('1.6', '16.1')),
        '19.2': section('core', '1221223123', 'Simple and compound percent growth; reverse rates add a square root.', refs('6.5', '19.1')),
        '19.3': section('bridge', '1122222223', 'Compounding-period interpretation extends familiar percentages; ordinary balance calculations remain routine.', refs('19.2'), { variantOverrides: {
          '8.3': { level: 3, reason: 'Different nominal rates require comparing two actual annual growth factors; greater frequency alone no longer decides the comparison.' },
          '8.4': { level: 3, reason: 'Compare two different rate-and-period models and recognize their equal effective annual factors.' },
        } }),
        '19.4': section('extension', '1111112222', 'Logarithms are optional even when evaluation is one step.', refs('1.7', '19.1')),
      },
      challenge: levels('221232232222'), worksheet: levels('1122122222'), challengeScope: 'bridge', worksheetScope: 'bridge',
      challengeScopeOverrides: { '3': 'extension', '6': 'extension', '10': 'extension', '12': 'extension' },
      worksheetScopeOverrides: { '2': 'extension', '5': 'extension', '8': 'extension' },
    },
    20: {
      variantReview: reviewedVariants(),
      sections: {
        '20.1': section('extension', '1111213323', 'Radical equations require candidate checking after squaring.', refs('13.3', '9.3'), { scopeOverrides: { '1': 'core', '3': 'core', '5': 'bridge', '6': 'bridge' } }),
        '20.2': section('bridge', '1112211322', 'Distance interpretation precedes two-branch linear solving.', refs('1.1', '3.2', '9.3')),
        '20.3': section('bridge', '1111111122', 'Rounding definitions and endpoints; language must define the symbols.', refs('9.3')),
        '20.4': section('extension', '1111222123', 'Rational function domain exclusions and disguised equations.', refs('3.4', '10.3', '16.1')),
        '20.5': section('bridge', '1111113233', 'Choosing and validating branches; later items need quadratic roots.', refs('16.1', '9.3'), { scopeOverrides: { '9': 'extension', '10': 'extension' } }),
      },
      challenge: levels('321233222222'), worksheet: levels('1211223323'), challengeScope: 'bridge', worksheetScope: 'bridge',
      worksheetVariantOverrides: {
        '1.3': { level: 2, reason: 'The story requires a nonnegative-radicand inequality whose negative coefficient reverses the bound; the base has a positive coefficient.' },
      },
      challengeScopeOverrides: { '1': 'extension', '5': 'extension', '7': 'extension', '10': 'extension' },
      worksheetScopeOverrides: { '1': 'extension', '4': 'extension', '7': 'extension', '10': 'extension' },
    },
    21: {
      variantReview: reviewedVariants(),
      sections: {
        '21.1': section('core', '1121222232', 'Sequence indexing and inverse term counts; increasing is explicit in item ten.', refs('3.2', '9.3')),
        '21.2': section('core', '1122222222', 'Pairing or average times count; finding the last term and then summing is still a routine two-step application.', refs('21.1')),
        '21.3': section('core', '1121222222', 'Finite geometric patterns, missing terms, and threshold powers.', refs('1.6', '19.1')),
        '21.4': section('extension', '1111222232', 'Infinite sums are optional; direct sum evaluation and rearranging its formula remain routine, while bounce models need a distance decomposition.', refs('21.3', '3.2'), { scopeOverrides: { '1': 'core', '3': 'core', '5': 'bridge', '7': 'bridge', '10': 'bridge' } }),
        '21.5': section('bridge', '1221222223', 'Finite cancellation and endpoint tracking; infinity is enrichment.', refs('2.4'), { scopeOverrides: { '9': 'extension' } }),
      },
      challenge: levels('222322222222'), worksheet: levels('2122123223'), challengeScope: 'core', worksheetScope: 'core',
      challengeScopeOverrides: { '5': 'extension', '6': 'bridge', '7': 'bridge', '9': 'bridge', '11': 'bridge' },
      worksheetScopeOverrides: { '5': 'extension', '6': 'bridge', '8': 'bridge', '9': 'bridge', '10': 'extension' },
      worksheetVariantOverrides: {
        '7.3': { level: 2, reason: 'The three term positions are equally spaced; extend the given term difference once instead of recovering a rate for unequal index gaps.' },
      },
    },
    22: {
      variantReview: reviewedVariants(),
      sections: {
        '22.1': section('extension', '1222322423', 'Power identities and extraneous roots; double squaring is a distinct jump.', refs('20.1', '11.1', '11.3'), { scopeOverrides: { '1': 'core', '2': 'bridge', '4': 'bridge', '9': 'bridge' }, variantOverrides: {
          '8.2': { level: 2, scope: 'bridge', reason: 'Nonnegativity gives x at least zero and hence a left side at least square root of five, already larger than one; no quadratic solving or double squaring is needed.' },
          '8.3': { level: 3, reason: 'After one isolation and squaring, the x terms cancel and leave one radical; the base requires a quadratic and checking two candidates.' },
        } }),
        '22.2': section('extension', '2212222223', 'Infinite nested expressions require fixed-point and convergence assumptions.', refs('13.3', '20.1'), { variantOverrides: {
          '5.2': { level: 3, reason: 'A cube-root tower leads to a cubic, requiring a candidate root and factorization or a bound to establish uniqueness.' },
          '5.3': { level: 3, reason: 'The fixed-point equation is cubic rather than quadratic; recognizing its integer root is an additional method choice.' },
          '5.4': { level: 3, reason: 'A cube-root fixed point requires solving and validating a cubic instead of the base square-root quadratic.' },
        } }),
        '22.3': section('extension', '2221222233', 'Symmetric identities and root expressions extend beyond the core route.', refs('10.4', '11.3'), { scopeOverrides: { '1': 'bridge', '2': 'bridge', '3': 'bridge', '4': 'bridge', '6': 'bridge' } }),
      },
      challenge: levels('322222323333'), worksheet: levels('2222322423'), challengeScope: 'extension', worksheetScope: 'extension',
      challengeScopeOverrides: { '5': 'bridge', '10': 'bridge' }, worksheetScopeOverrides: { '1': 'bridge', '3': 'bridge', '4': 'bridge' },
      worksheetVariantOverrides: {
        '1.4': { level: 2, scope: 'extension', reason: 'The inverse operation is a cube root rather than the square-root relation in the bridge base; retain the book’s cube-root extension scope.' },
      },
    },
  },
  checkpoints: {
    1: { scope: 'bridge', levels: levels('222233333333444') },
    2: { scope: 'bridge', levels: levels('223233233344454') },
    3: { scope: 'bridge', levels: levels('222322233344444'), scopeOverrides: { '11': 'extension' } },
    4: { scope: 'extension', levels: levels('222322333324334'), scopeOverrides: { '1': 'bridge', '2': 'bridge', '3': 'bridge', '4': 'bridge', '5': 'core', '6': 'bridge', '8': 'bridge', '9': 'bridge', '11': 'bridge', '15': 'bridge' } },
    5: { scope: 'extension', levels: levels('233333323234444'), scopeOverrides: { '1': 'core', '10': 'core' } },
    6: { scope: 'extension', levels: levels('221232343334344'), scopeOverrides: { '1': 'bridge', '3': 'core', '4': 'core', '5': 'bridge', '7': 'bridge', '8': 'bridge', '10': 'bridge', '11': 'bridge', '13': 'bridge', '14': 'bridge' } },
    7: { scope: 'extension', levels: levels('223323333344444'), scopeOverrides: { '1': 'bridge', '2': 'core', '3': 'bridge', '4': 'bridge', '5': 'bridge', '6': 'bridge', '7': 'bridge', '9': 'bridge', '10': 'core', '11': 'bridge', '14': 'bridge' } },
  },
}
