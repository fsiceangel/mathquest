import { applyLateGeometryReview } from './intro-geometry-late-review.js'
// Editorial review of the actual problems; levels are not empirical solve rates.
// 1: direct; 2: short setup; 3: combined ideas; 4: insight/cases; 5: sustained challenge.
const calibration = {
  book: 'intro-geometry',
  chapters: {
    1: {
      sections: {
        '1.2': { scope: 'core', levels: [1,1,1,1,1,1,1,1,2,2], rationale: 'Definitions followed by counting unordered pairs.', prerequisites: [] },
        '1.3': { scope: 'core', levels: [1,1,1,1,1,1,1,1,1,2], rationale: 'Circle vocabulary, semicircle subtraction, and counting chords.', prerequisites: ['intro-geometry/1.2'] },
        '1.5': { scope: 'bridge', levels: [1,1,1,1,1,2,2,2,2,2], rationale: 'Counterexamples and logical converses support later reasoning.', prerequisites: ['intro-geometry/1.2','intro-geometry/1.3'] },
      },
      challengeScope: 'bridge', worksheetScope: 'bridge',
      challenge: [2,2,2,2,1,3,1,1,2,1,3,2],
      worksheet: [1,1,2,1,2,1,2,1,1,2],
    },
    2: {
      sections: {
        '2.1': { scope: 'core', levels: [1,1,1,1,1,2,2,2,3,2], rationale: 'Angle notation grows into partitions and an overlap subtraction.', prerequisites: ['intro-geometry/1.2'] },
        '2.2': { scope: 'core', levels: [1,1,1,1,1,2,2,2,3,3], rationale: 'Moving hour hands require two rates; the final clock items are a real step up.', prerequisites: ['intro-geometry/2.1'] },
        '2.3': { scope: 'core', levels: [1,1,1,1,1,2,2,2,2,2], rationale: 'Linear pairs, vertical angles, and short linear equations.', prerequisites: ['intro-geometry/2.1','intro-geometry/2.2'] },
        '2.4': { scope: 'core', levels: [1,1,1,1,1,1,2,2,2,2], rationale: 'Identify an angle relation before solving a short equation.', prerequisites: ['intro-geometry/2.3'] },
        '2.5': { scope: 'core', levels: [1,1,1,2,2,2,2,2,3,2], rationale: 'Triangle angle sums; item 9 combines a bisector with two triangles.', prerequisites: ['intro-geometry/2.3'] },
        '2.6': { scope: 'core', levels: [1,1,1,1,2,1,2,2,2,3], rationale: 'Exterior angles become equations and a ratio conversion.', prerequisites: ['intro-geometry/2.5'] },
        '2.7': { scope: 'bridge', levels: [2,1,2,1,2,2,2,2,2,3], rationale: 'Parallel-line recognition and short angle chases mix earlier relations.', prerequisites: ['intro-geometry/2.4','intro-geometry/2.5','intro-geometry/2.6'] },
      },
      challengeScope: 'bridge', worksheetScope: 'bridge',
      challenge: [3,3,3,2,3,2,3,2,2,3,2,2],
      worksheet: [1,2,1,1,1,3,2,2,2,2],
    },
    3: {
      sections: {
        '3.2': { scope: 'bridge', levels: [1,1,1,1,2,1,2,1,2,3], rationale: 'Congruence correspondence precedes shared-side proofs and perpendicularity.', prerequisites: ['intro-geometry/1.5','intro-geometry/2.5'] },
        '3.3': { scope: 'bridge', levels: [1,1,1,1,2,2,2,2,2,2], rationale: 'Included-angle recognition and intersecting-segment congruence.', prerequisites: ['intro-geometry/3.2','intro-geometry/2.3'] },
        '3.4': { scope: 'bridge', levels: [1,2,1,1,1,3,1,1,3,2], rationale: 'Correspondence matters more than the item number; item 7 is only an angle sum.', prerequisites: ['intro-geometry/3.2','intro-geometry/2.4'] },
        '3.5': { scope: 'extension', levels: [2,1,2,1,2,2,3,3,4,2], rationale: 'SSA ambiguity and the hidden altitude need right-triangle tools taught later.', prerequisites: ['intro-geometry/3.3','intro-geometry/6.1','intro-geometry/6.2'] },
        '3.6': { scope: 'core', levels: [1,1,2,1,1,2,2,2,3,2], rationale: 'Isosceles angle sums and equations; item 9 adds a bisector angle chase.', prerequisites: ['intro-geometry/2.5','intro-geometry/2.6'] },
      },
      challengeScope: 'bridge', worksheetScope: 'bridge',
      challenge: [1,2,2,1,2,2,3,2,3,2,3,3],
      worksheet: [1,2,2,2,2,2,3,3,3,2],
    },
    4: {
      sections: {
        '4.1': { scope: 'core', levels: [1,1,1,1,2,2,2,2,3,3], rationale: 'Rectilinear boundaries and fixed-perimeter optimization add reasoning.', prerequisites: ['intro-geometry/1.2'] },
        '4.2': { scope: 'core', levels: [1,1,1,1,2,2,2,2,2,3], rationale: 'Area formulas, cutouts, and changing the base of a triangle.', prerequisites: ['intro-geometry/4.1'] },
        '4.3': { scope: 'bridge', levels: [1,1,2,1,1,1,2,1,3,3], rationale: 'Shared-altitude ratios and repeated median splits; centroid fact is explained locally.', prerequisites: ['intro-geometry/4.2'] },
      },
      challengeScope: 'bridge', worksheetScope: 'bridge',
      challenge: [3,2,3,2,1,3,3,2,3,2,3,2],
      worksheet: [1,1,3,1,1,2,3,2,2,3],
    },
    5: {
      sections: {
        '5.1': { scope: 'core', levels: [1,1,1,2,1,2,2,1,2,2], rationale: 'Correspondence and scale factors lead to perimeter scaling.', prerequisites: ['intro-geometry/3.2','intro-geometry/4.1'] },
        '5.2': { scope: 'bridge', levels: [1,2,2,2,2,2,2,3,3,3], rationale: 'Identify similar triangles before setting proportions; shadows require whole lengths.', prerequisites: ['intro-geometry/5.1','intro-geometry/2.4'] },
        '5.3': { scope: 'bridge', levels: [1,2,2,2,2,2,1,1,2,2], rationale: 'Included-angle tests and scale factors; item 5 requires Pythagoras.', prerequisites: ['intro-geometry/5.1','intro-geometry/3.3'], scopeOverrides: { '5': 'extension' } },
        '5.4': { scope: 'core', levels: [1,1,1,1,2,2,2,2,2,2], rationale: 'Match sorted side lengths and check every ratio.', prerequisites: ['intro-geometry/5.1'] },
        '5.5': { scope: 'bridge', levels: [2,1,2,2,3,2,2,2,3,3], rationale: 'Area scaling mixes with hypotenuse-altitude similarity.', prerequisites: ['intro-geometry/5.2','intro-geometry/4.3'] },
      },
      challengeScope: 'bridge', worksheetScope: 'bridge',
      challenge: [2,2,2,2,2,2,3,2,3,2,3,2], worksheet: [2,2,2,2,2,2,2,3,3,3],
    },
    6: {
      sections: {
        '6.1': { scope: 'core', levels: [1,1,1,1,2,2,2,2,2,3], rationale: 'Right-triangle lengths, contextual diagrams, and a final quadratic setup.', prerequisites: ['intro-geometry/4.2'] },
        '6.2': { scope: 'bridge', levels: [1,1,1,1,2,2,2,2,2,2], rationale: 'Special-triangle ratios include exact radicals and reverse ratios.', prerequisites: ['intro-geometry/6.1','intro-geometry/3.6'] },
        '6.3': { scope: 'core', levels: [1,1,1,2,1,1,1,2,1,3], rationale: 'Triple recognition is mostly direct; item 10 needs difference of squares.', prerequisites: ['intro-geometry/6.1'] },
        '6.4': { scope: 'bridge', levels: [2,1,2,3,2,2,2,3,3,4], rationale: 'Altitude similarity culminates in recovering both legs from hypotenuse and altitude.', prerequisites: ['intro-geometry/5.5','intro-geometry/6.1'] },
        '6.5': { scope: 'extension', levels: [2,1,2,2,2,2,2,2,2,3], rationale: 'Heron is optional enrichment even when substituting into its formula is easy.', prerequisites: ['intro-geometry/6.1','intro-geometry/4.2'] },
      },
      challengeScope: 'bridge', worksheetScope: 'bridge',
      challenge: [3,3,3,2,2,3,3,2,2,2,2,3], challengeScopeOverrides: { '7': 'extension' },
      worksheet: [1,1,1,1,2,2,2,3,3,3], worksheetScopeOverrides: { '6': 'extension', '10': 'extension' },
    },
    7: {
      variantReview: { status: 'stem-reviewed', rounds: [2,3,4], note: 'All 246 variant stems compared with 82 bases; nontrivial routes inspected; not every answer independently proved.' },
      sections: {
        '7.1': { scope: 'bridge', levels: [1,1,2,1,1,2,2,2,1,3], rationale: 'Distance loci lead to hidden right triangles and coordinates.', prerequisites: ['intro-geometry/3.6','intro-geometry/6.1','intro-geometry/6.2'] },
        '7.2': { scope: 'bridge', levels: [1,2,2,1,1,1,2,2,4,1], rationale: 'Most items use the midpoint of a hypotenuse; item 9 solves a circumcenter equation.', prerequisites: ['intro-geometry/7.1','intro-geometry/6.1'], scopeOverrides: { '9': 'extension' } },
        '7.3': { scope: 'extension', levels: [1,2,2,1,2,1,2,2,2,2], rationale: 'Incenter and inradius formulas are enrichment, independent of arithmetic difficulty.', prerequisites: ['intro-geometry/7.1','intro-geometry/4.2','intro-geometry/6.1'], variantOverrides: { '6.3': { level: 2, reason: 'The full perimeter is supplied, so recover the semiperimeter before applying the area formula.' }, '8.2': { level: 3, reason: 'The inradius is no longer given and must be recovered before the distance.' }, '8.3': { level: 3, reason: 'Recover the inradius from side lengths before finding the vertex distance.' }, '8.4': { level: 3, reason: 'Recover the hypotenuse and inradius before finding the vertex distance.' } } },
        '7.4': { scope: 'bridge', levels: [1,1,1,2,1,1,1,2,2,1], rationale: 'Centroid ratios and coordinates; later numbered items are still short applications.', prerequisites: ['intro-geometry/4.3','intro-geometry/6.1'] },
        '7.5': { scope: 'bridge', levels: [1,1,2,1,1,2,1,2,2,1], rationale: 'Altitude computations and locations of triangle centers.', prerequisites: ['intro-geometry/4.2','intro-geometry/6.1'], variantOverrides: { '8.3': { level: 3, reason: 'A converse argument turns coincident altitude and perpendicular bisector lines into two pairs of equal sides.' } } },
        '7.6': { scope: 'bridge', levels: [1,1,1,2,3,2,3,3,2,4], rationale: 'Midsegments start with direct drills; the last problem combines altitude and inradius.', prerequisites: ['intro-geometry/5.5','intro-geometry/7.4','intro-geometry/7.5'], scopeOverrides: { '5': 'extension', '7': 'extension', '10': 'extension' }, variantOverrides: { '6.2': { level: 3, scope: 'extension', reason: 'Unlike the base, no area is supplied; the solution requires Heron before altitude.' }, '6.3': { level: 3, scope: 'extension', reason: 'Unlike the base, no area is supplied; the solution requires Heron before altitude.' }, '6.4': { level: 3, scope: 'extension', reason: 'Unlike the base, no area is supplied; the solution requires Heron before altitude.' } } },
      },
      challengeScope: 'bridge', worksheetScope: 'bridge',
      challenge: [3,2,2,2,4,2,1,1,2,3,3,3], challengeScopeOverrides: { '1': 'extension', '4': 'extension', '5': 'extension', '10': 'extension', '11': 'extension', '12': 'extension' },
      worksheet: [1,2,2,1,1,1,3,3,3,4], worksheetScopeOverrides: { '3': 'extension', '7': 'extension', '9': 'extension', '10': 'extension' },
    },
    8: {
      sections: {
        '8.1': { scope: 'core', levels: [1,1,1,1,2,2,2,2,2,2], rationale: 'Quadrilateral angle sums and classification with short equations.', prerequisites: ['intro-geometry/2.5'] },
        '8.2': { scope: 'core', levels: [1,1,1,1,1,2,2,2,1,3], rationale: 'Trapezoid facts and area; item 10 adds a hidden right triangle.', prerequisites: ['intro-geometry/4.2','intro-geometry/6.1','intro-geometry/8.1'] },
        '8.3': { scope: 'core', levels: [1,1,1,1,1,1,2,2,2,2], rationale: 'Parallelogram properties become short length and height calculations.', prerequisites: ['intro-geometry/8.1','intro-geometry/4.2'] },
        '8.4': { scope: 'bridge', levels: [1,1,1,1,2,2,1,2,3,3], rationale: 'Perpendicular half-diagonals combine with area and Pythagoras.', prerequisites: ['intro-geometry/8.3','intro-geometry/6.1','intro-geometry/6.2'] },
        '8.5': { scope: 'core', levels: [1,1,1,2,2,1,2,2,2,3], rationale: 'Rectangle diagonals lead to circumradius and a short angle chase.', prerequisites: ['intro-geometry/8.3','intro-geometry/6.1'] },
        '8.6': { scope: 'core', levels: [1,2,2,1,2,1,2,2,3,3], rationale: 'Square diagonals and area ratios culminate in the midpoint square.', prerequisites: ['intro-geometry/8.4','intro-geometry/8.5','intro-geometry/6.2'] },
        '8.7': { scope: 'bridge', levels: [1,1,2,1,1,1,2,1,2,2], rationale: 'Converse and classification reasoning rather than a numerical ramp.', prerequisites: ['intro-geometry/1.5','intro-geometry/8.2','intro-geometry/8.6'] },
        '8.8': { scope: 'bridge', levels: [1,2,2,1,3,3,2,4,3,3], rationale: 'Mixed quadrilaterals; unequal legs require a constructed altitude or equation.', prerequisites: ['intro-geometry/8.2','intro-geometry/8.4','intro-geometry/8.6'] },
      },
      challengeScope: 'bridge', worksheetScope: 'bridge',
      challenge: [2,2,2,3,3,1,2,3,3,3,3,4], worksheet: [1,2,1,3,1,2,3,2,3,4],
    },
    9: {
      sections: {
        '9.1': { scope: 'core', levels: [1,1,1,2,1,1,2,2,2,3], rationale: 'Polygon vocabulary and diagonal counts, including reversing the count.', prerequisites: ['intro-geometry/1.2','intro-geometry/8.1'] },
        '9.2': { scope: 'core', levels: [1,1,1,1,1,1,2,2,2,3], rationale: 'Interior and exterior angle sums grow into reverse and ratio questions.', prerequisites: ['intro-geometry/9.1','intro-geometry/2.6'] },
        '9.3': { scope: 'bridge', levels: [1,2,2,2,2,2,2,3,3,3], rationale: 'Decomposition, exact equilateral areas, and recovering a hexagon side.', prerequisites: ['intro-geometry/4.2','intro-geometry/6.2','intro-geometry/9.1'] },
        '9.4': { scope: 'bridge', levels: [2,1,2,1,3,2,3,2,3,3], rationale: 'Tilings, stars, and mixed angle-area-diagonal reasoning.', prerequisites: ['intro-geometry/9.2','intro-geometry/9.3'] },
      },
      challengeScope: 'bridge', worksheetScope: 'bridge',
      challenge: [2,1,3,3,2,2,4,2,2,3,3,3], worksheet: [2,1,2,2,2,1,2,2,3,3],
    },
    10: {
      sections: {
        '10.1': { scope: 'core', levels: [1,1,1,1,2,1,1,2,1,2], rationale: 'Ordering sides by opposite angles with only short angle-sum work.', prerequisites: ['intro-geometry/2.5','intro-geometry/3.6'] },
        '10.2': { scope: 'bridge', levels: [1,1,1,2,1,1,2,3,4,3], rationale: 'Squared-side tests culminate in integer ranges and changing the longest side.', prerequisites: ['intro-geometry/6.1'], scopeOverrides: { '8': 'bridge', '9': 'bridge' } },
        '10.3': { scope: 'core', levels: [2,1,1,2,2,1,2,2,2,2], rationale: 'Strict triangle bounds, integer counts, and rejecting a degenerate case.', prerequisites: ['intro-geometry/10.1'] },
      },
      challengeScope: 'bridge', worksheetScope: 'bridge',
      challenge: [2,4,4,2,4,3,1,2,2,2,1,3], worksheet: [1,1,1,2,1,1,4,3,3,4],
    },
    11: {
      sections: {
        '11.1': { scope: 'core', levels: [1,1,1,2,2,1,2,2,2,2], rationale: 'Circle fractions, arc length, reverse radius, and rolling distance.', prerequisites: ['intro-geometry/1.3','intro-geometry/2.2'] },
        '11.2': { scope: 'core', levels: [1,1,2,1,1,2,2,2,3,3], rationale: 'Circle and sector area; final questions reverse or compare formulas.', prerequisites: ['intro-geometry/11.1','intro-geometry/4.2'] },
        '11.3': { scope: 'bridge', levels: [2,2,1,2,3,3,3,2,4,2], rationale: 'Subtract familiar pieces; the overlapping quarter-discs need inclusion-exclusion.', prerequisites: ['intro-geometry/11.2','intro-geometry/6.2','intro-geometry/8.6'] },
      },
      challengeScope: 'bridge', worksheetScope: 'bridge',
      challenge: [2,2,2,3,3,3,2,3,3,3,2,2], worksheet: [1,2,1,2,2,2,2,3,3,3],
    },
    12: {
      sections: {
        '12.1': { scope: 'bridge', levels: [1,1,1,1,1,2,1,2,1,2], rationale: 'Inscribed angle recognition followed by arc ratios and triangle sums.', prerequisites: ['intro-geometry/11.1','intro-geometry/2.5'] },
        '12.2': { scope: 'extension', levels: [1,2,1,2,2,1,2,2,1,3], rationale: 'Intersecting-chord and external-secant angle formulas are optional enrichment.', prerequisites: ['intro-geometry/12.1'] },
        '12.3': { scope: 'bridge', levels: [2,1,1,2,1,2,3,2,2,2], rationale: 'Tangent radii and equal segments are useful bridges; tangent-chord angles are extension.', prerequisites: ['intro-geometry/12.1','intro-geometry/6.1'], scopeOverrides: { '2': 'extension', '5': 'extension', '7': 'extension', '9': 'extension' } },
        '12.4': { scope: 'extension', levels: [1,2,2,2,2,3,3,2,2,3], rationale: 'Cyclic quadrilaterals and combined circle-angle theorems exceed the essential route.', prerequisites: ['intro-geometry/12.1','intro-geometry/12.2','intro-geometry/12.3'] },
      },
      challengeScope: 'extension', worksheetScope: 'extension',
      challenge: [2,2,3,2,3,2,3,2,3,3,3,2],
      worksheet: [1,2,2,1,2,1,3,3,3,3],
    },
    13: {
      sections: {
        '13.1': { scope: 'extension', levels: [1,1,2,2,3,2,2,2,3,3], rationale: 'Power-of-a-point products are a new theorem rather than ordinary multiplication drills.', prerequisites: ['intro-geometry/5.2','intro-geometry/12.1','intro-geometry/12.3'] },
        '13.2': { scope: 'extension', levels: [1,2,3,3,3,2,2,4,3,3], rationale: 'Reverse chord lengths, quadratics, and an arch construction extend the theorem.', prerequisites: ['intro-geometry/13.1','intro-geometry/6.1'] },
      },
      challengeScope: 'extension', worksheetScope: 'extension',
      challenge: [3,3,2,3,2,4,3,3,3,3,3,3],
      worksheet: [1,1,3,3,2,2,3,3,3,4],
    },
    14: {
      sections: {
        '14.1': { scope: 'bridge', levels: [1,1,1,1,2,1,1,1,2,3], rationale: 'Spatial incidence and skew-edge counting require a three-dimensional model.', prerequisites: ['intro-geometry/1.2'] },
        '14.2': { scope: 'core', levels: [1,1,1,2,2,2,2,2,3,2], rationale: 'Volume and surface area progress to space diagonals and painted-cube counts.', prerequisites: ['intro-geometry/4.2','intro-geometry/6.1'] },
        '14.3': { scope: 'bridge', levels: [1,1,1,2,2,2,2,3,3,2], rationale: 'Pyramid formulas require distinguishing height, slant height, and lateral edge.', prerequisites: ['intro-geometry/14.2','intro-geometry/6.1'] },
        '14.4': { scope: 'bridge', levels: [1,1,1,1,2,1,1,1,3,2], rationale: 'Face-edge-vertex double counting and Euler arithmetic are separate from memorized solid names.', prerequisites: ['intro-geometry/14.1','intro-geometry/9.2'] },
      },
      challengeScope: 'bridge', worksheetScope: 'bridge',
      challenge: [3,3,2,4,3,2,2,1,2,2,1,3], worksheet: [2,3,2,3,1,2,3,3,2,4],
    },
    15: {
      sections: {
        '15.1': { scope: 'core', levels: [1,1,2,1,2,2,2,2,3,2], rationale: 'Cylinder volume and area progress to conservation of volume.', prerequisites: ['intro-geometry/11.1','intro-geometry/11.2','intro-geometry/14.2'] },
        '15.2': { scope: 'bridge', levels: [1,2,1,3,1,2,3,3,3,2], rationale: 'Cone volume, slant height, and unrolling a sector require distinct models.', prerequisites: ['intro-geometry/15.1','intro-geometry/14.3','intro-geometry/6.1'] },
        '15.3': { scope: 'bridge', levels: [1,1,1,2,2,1,1,2,3,3], rationale: 'Sphere formulas are supplied by the section; scaling and recasting add reasoning.', prerequisites: ['intro-geometry/11.2','intro-geometry/14.2'] },
        '15.4': { scope: 'bridge', levels: [2,3,2,3,3,3,2,3,2,3], rationale: 'Composite solids and displacement require selecting exposed areas or conserved volumes.', prerequisites: ['intro-geometry/15.1','intro-geometry/15.2','intro-geometry/15.3'] },
      },
      challengeScope: 'bridge', worksheetScope: 'bridge',
      challenge: [3,3,3,2,3,3,3,3,2,3,3,3], worksheet: [1,3,1,2,2,2,3,2,3,4],
    },
    16: {
      sections: {
        '16.1': { scope: 'core', levels: [1,1,1,1,1,2,2,1,2,2], rationale: 'Coordinate shifts, inverse shifts, and composition.', prerequisites: [] },
        '16.2': { scope: 'core', levels: [1,1,1,1,1,1,1,2,2,2], rationale: 'Quarter-turn rules and symmetry before a rotation about another center.', prerequisites: ['intro-geometry/16.1','intro-geometry/9.2'] },
        '16.3': { scope: 'core', levels: [1,1,1,1,2,1,1,2,2,2], rationale: 'Reflections across axes and translated axes, followed by composition.', prerequisites: ['intro-geometry/16.1'] },
        '16.4': { scope: 'core', levels: [1,1,1,1,2,1,1,2,3,2], rationale: 'Coordinate dilation, inverse scale, and area scaling.', prerequisites: ['intro-geometry/16.1','intro-geometry/5.5'] },
        '16.5': { scope: 'bridge', levels: [2,3,1,2,3,3,2,2,4,2], rationale: 'Reflection minimizes routes; finding the contact point adds similarity or a line equation.', prerequisites: ['intro-geometry/16.3','intro-geometry/6.1','intro-geometry/10.3'] },
      },
      challengeScope: 'bridge', worksheetScope: 'bridge',
      challenge: [2,1,2,2,2,1,3,2,2,2,2,2], worksheet: [1,1,1,1,1,1,2,3,2,2],
    },
    17: {
      sections: {
        '17.1': { scope: 'bridge', levels: [1,1,1,2,1,2,2,3,3,3], rationale: 'Coordinates grow into slopes, perpendicular bisectors, and equal-distance equations.', prerequisites: ['intro-geometry/16.1','intro-geometry/6.1','intro-geometry/7.1'] },
        '17.2': { scope: 'extension', levels: [1,1,1,2,2,2,3,2,3,3], rationale: 'Circle equations and completing the square are optional analytic geometry.', prerequisites: ['intro-geometry/17.1','intro-geometry/6.1'] },
        '17.3': { scope: 'bridge', levels: [1,2,2,2,2,3,2,3,3,2], rationale: 'Coordinate lengths and areas mix with slope tests; shoelace is an optional shortcut.', prerequisites: ['intro-geometry/17.1','intro-geometry/4.2','intro-geometry/8.4'] },
        '17.4': { scope: 'extension', levels: [2,1,2,1,2,2,3,2,1,2], rationale: 'General coordinate proofs and symbolic placements exceed the essential numerical route.', prerequisites: ['intro-geometry/17.1','intro-geometry/8.3','intro-geometry/1.5'] },
        '17.5': { scope: 'extension', levels: [1,1,3,2,3,3,2,2,2,3], rationale: 'General point-line distances and closest points require analytic geometry.', prerequisites: ['intro-geometry/17.1','intro-geometry/4.2','intro-geometry/6.1'] },
        '17.6': { scope: 'extension', levels: [2,2,3,3,3,2,1,1,3,2], rationale: 'Line-circle systems and tangency add quadratic or distance constraints.', prerequisites: ['intro-geometry/17.2','intro-geometry/17.5'] },
      },
      challengeScope: 'bridge', worksheetScope: 'bridge',
      challenge: [2,3,2,3,3,2,3,2,3,3,2,3], challengeScopeOverrides: { '3': 'extension', '5': 'extension', '6': 'extension', '8': 'extension', '11': 'extension' },
      worksheet: [2,2,3,3,3,3,3,3,3,3], worksheetScopeOverrides: { '2': 'extension', '7': 'extension', '8': 'extension', '9': 'extension' },
    },
    18: {
      sections: {
        '18.1': { scope: 'extension', levels: [1,1,1,1,2,1,2,2,2,2], rationale: 'Trigonometric notation and identities are extension even for one-step questions.', prerequisites: ['intro-geometry/6.1','intro-geometry/6.2','intro-geometry/5.1'] },
        '18.2': { scope: 'extension', levels: [1,2,1,2,2,2,2,2,2,3], rationale: 'Unit-circle signs, obtuse-angle identities, and sine area.', prerequisites: ['intro-geometry/18.1','intro-geometry/16.2'] },
        '18.3': { scope: 'extension', levels: [1,1,2,2,2,2,1,2,2,2], rationale: 'Laws of sines and cosines are extension regardless of substitution length.', prerequisites: ['intro-geometry/18.2'] },
      },
      challengeScope: 'extension', worksheetScope: 'extension',
      challenge: [2,4,2,3,2,3,3,2,3,2,2,2],
      worksheet: [1,1,1,2,2,2,2,2,2,3],
    },
    19: {
      sections: {
        '19.1': { scope: 'bridge', levels: [2,2,2,3,3,3,2,3,3,4], rationale: 'Constructing a parallel, radius, altitude, or diagonal is the central reasoning step.', prerequisites: ['intro-geometry/2.7','intro-geometry/6.1','intro-geometry/8.2','intro-geometry/12.3'] },
        '19.2': { scope: 'bridge', levels: [2,2,2,2,3,3,2,4,4,4], rationale: 'Variables grow into angle chains, tangent partitions, and symmetric quadratic identities.', prerequisites: ['intro-geometry/2.5','intro-geometry/3.6','intro-geometry/6.1'], scopeOverrides: { '6': 'extension', '7': 'extension' } },
        '19.3': { scope: 'extension', levels: [1,1,1,2,2,1,2,2,2,2], rationale: 'Proof justification and circular reasoning are valuable formal enrichment.', prerequisites: ['intro-geometry/1.5','intro-geometry/3.2','intro-geometry/3.3','intro-geometry/3.4'] },
      },
      challengeScope: 'bridge', worksheetScope: 'bridge',
      challenge: [4,2,2,3,2,4,2,4,2,2,4,2], challengeScopeOverrides: { '2': 'extension' },
      worksheet: [2,2,3,2,3,2,3,3,3,3], worksheetScopeOverrides: { '5': 'extension', '10': 'extension' },
    },
  },
  checkpoints: {
    1: { scope: 'bridge', levels: [3,3,2,3,4,4,3,4,4,3,4,5,4,4,5] },
    2: { scope: 'bridge', levels: [3,3,2,3,3,4,3,3,3,4,4,4,4,4,4] },
    3: { scope: 'bridge', levels: [3,3,3,4,3,2,3,3,4,4,4,4,4,4,5], scopeOverrides: { '12': 'extension' } },
    4: { scope: 'bridge', levels: [3,3,3,3,3,3,3,4,4,4,4,4,4,4,4], scopeOverrides: { '10': 'extension', '15': 'extension' } },
    5: { scope: 'bridge', levels: [2,3,2,3,3,3,4,3,3,3,4,4,4,4,4], scopeOverrides: { '9': 'extension', '14': 'extension' } },
    6: { scope: 'bridge', levels: [3,2,3,3,3,3,3,3,4,4,4,4,4,5,4], scopeOverrides: { '2': 'extension', '8': 'extension', '10': 'extension', '12': 'extension' } },
  },
};

// Chapter-by-chapter variant-stem audits; this is not independent proof of every answer.
function reviewed(chapter, overrides = {}) {
  const target = calibration.chapters[chapter]
  target.variantReview = { status: 'stem-reviewed', rounds: [2,3,4], note: 'All variant stems compared; nontrivial routes inspected; not every answer independently proved.' }
  for (const [group, entries] of Object.entries(overrides)) {
    if (group === 'challenge' || group === 'worksheet') target[group + 'VariantOverrides'] = { ...target[group + 'VariantOverrides'], ...entries }
    else target.sections[group].variantOverrides = { ...target.sections[group].variantOverrides, ...entries }
  }
}
reviewed(1, {
  '1.2': { '9.4': { level: 1, reason: 'The doubled list length is supplied; divide by two rather than count all endpoint pairs.' } },
  challenge: { '2.4': { level: 3, reason: 'Recover the line count from a pair count rather than evaluate the count forward.' }, '10.3': { level: 2, reason: 'Combine the collinear triple with an off-line point to identify a unique plane.' }, '10.4': { level: 2, reason: 'Count the four distinct triples defining faces of a tetrahedral configuration.' } },
  worksheet: { '4.2': { level: 2, reason: 'Find a multiple whose digit sum exceeds nine.' }, '4.3': { level: 2, reason: 'Intersect the repeated-digit condition with divisibility by seven.' }, '4.4': { level: 2, reason: 'Find the zero boundary case rather than an ordinary positive multiple.' } },
})
reviewed(2, {
  '2.1': { '4.2': { level: 2, reason: 'Count all pairs among five rays rather than recognize the three pairs among three rays.' }, '4.3': { level: 2, reason: 'Seven rays require organized pair counting.' }, '4.4': { level: 3, reason: 'Recover the number of rays from the angle-pair count.' } },
  '2.5': { '3.2': { level: 2, reason: 'Subtract the specified third angle before splitting the remaining angle sum equally.' }, '3.3': { level: 2, reason: 'Subtract the specified third angle before splitting the remaining angle sum equally.' } },
  '2.6': { '4.3': { level: 2, reason: 'Subtract the unequal exterior angle from a full turn, then divide the remainder by two.' } },
})
reviewed(3, {
  '3.3': { '2.4': { level: 2, reason: 'Evaluate and qualify a proposed general congruence rule.' } },
  '3.4': { '8.4': { level: 2, reason: 'Eliminate sufficient criteria and recognize the SSA exception.' }, '9.3': { level: 2, reason: 'No side is given at all; only distinguish shape from size, without matching noncorresponding sides.' } },
  '3.5': { '3.3': { level: 3, reason: 'Identify both strict height and adjacent-side bounds for two valid triangles.' } },
  challenge: { '3.3': { level: 3, reason: 'Derive equal sides from midpoint and vertical-angle data before solving the equation.' }, '3.4': { level: 3, reason: 'Derive congruence from bisecting segments before solving the length equation.' }, '10.3': { level: 3, reason: 'Use isosceles base angles and supplementary angles to supply the included-angle equality.' } },
  worksheet: { '3.4': { level: 3, reason: 'Find the unmarked corresponding side, then combine all three lengths for a perimeter.' }, '8.3': { level: 2, reason: 'The opposite side is longer, so the one-intersection case avoids computing a hidden altitude.' } },
})
Object.assign(calibration.chapters[3], { challengeScopeOverrides: { '6': 'extension', '11': 'extension', '12': 'extension' }, worksheetScopeOverrides: { '6': 'extension', '8': 'extension' } })
reviewed(4)
reviewed(5)
reviewed(6, {
  '6.3': { '2.3': { level: 2, reason: 'Translate a rectangle diagonal into a missing-leg right triangle.' }, '3.4': { level: 2, reason: 'Construct the right triangle from the parking-lot rectangle before using a triple.' } },
  '6.4': { '3.4': { level: 1, reason: 'Only name the side opposite the already specified right angle of the smaller triangle.' } },
  '6.5': { '7.3': { level: 3, reason: 'The question explicitly requires the longer Heron-then-altitude route.' }, '10.4': { level: 2, reason: 'The triangle is isosceles, so halve the base and use Pythagoras directly.' } },
  worksheet: { '4.4': { level: 2, reason: 'Recognize the altitude splitting the equilateral triangle before applying the special-triangle ratios.' }, '9.2': { level: 2, reason: 'The hypotenuse is supplied, removing the Pythagorean stage present in the base.' }, '9.3': { level: 2, reason: 'All sides are supplied; compute area and then altitude without finding the hypotenuse.' }, '9.4': { level: 2, reason: 'The hypotenuse is supplied, removing the Pythagorean stage present in the base.' } },
})
reviewed(8, {
  '8.1': { '2.3': { level: 2, reason: 'Connect exterior turns to interior angles by subtraction rather than recalling the diagonal argument.' } },
  worksheet: { '8.4': { level: 3, reason: 'Prove a true converse with two ASA comparisons and chained equal sides instead of supplying one counterexample.' } },
})
reviewed(9, {
  '9.4': {
    '3.3': { level: 3, reason: 'Find the remaining angle then invert the regular-polygon angle formula to identify a dodecagon.' },
    '5.2': { level: 1, reason: 'Each tip is explicitly an equilateral-triangle corner, so its angle is recalled directly.' },
    '5.3': { level: 4, reason: 'Establish a three-turn star traversal before solving for its tip angle.' },
    '5.4': { level: 4, reason: 'Establish a five-turn star traversal before solving for its tip angle.' },
  },
})
reviewed(10, {
  worksheet: {
    '9.2': { level: 1, reason: 'Only applies the upper triangle-inequality bound; no savings limit or lower bound remains.' },
    '9.3': { level: 1, reason: 'Only applies the upper triangle-inequality bound; no savings limit or lower bound remains.' },
    '9.4': { level: 1, reason: 'Only applies the upper triangle-inequality bound; no savings limit or lower bound remains.' },
  },
})
calibration.chapters[10].sections['10.1'].levels[4] = 2
reviewed(11)
// These families contain a short setup before applying the circle formula.
calibration.chapters[11].sections['11.1'].levels[6] = 2
calibration.chapters[11].sections['11.1'].levels[8] = 2
calibration.chapters[11].sections['11.2'].levels[1] = 2
calibration.chapters[11].worksheet[2] = 2
reviewed(12, {
  "challenge": {
    "10.2": {
      "level": 2,
      "reason": "The angle is already at B in the tangent-diameter triangle; no chord-to-extended-ray conversion is needed."
    },
    "10.3": {
      "level": 2,
      "reason": "The angle is already at B in the tangent-diameter triangle; no chord-to-extended-ray conversion is needed."
    },
    "10.4": {
      "level": 2,
      "reason": "The angle is already at B in the tangent-diameter triangle; no chord-to-extended-ray conversion is needed."
    }
  },
  "worksheet": {
    "3.2": {
      "level": 1,
      "reason": "Direct substitution into the intersecting-chord angle formula; the perpendicularity interpretation is absent."
    },
    "3.3": {
      "level": 1,
      "reason": "Direct substitution into the intersecting-chord angle formula; the perpendicularity interpretation is absent."
    },
    "3.4": {
      "level": 1,
      "reason": "Direct substitution into the intersecting-chord angle formula; the perpendicularity interpretation is absent."
    }
  }
})
reviewed(13, {
  '13.2': {
    '9.2': { level: 2, reason: 'Add the near segment and chord, then apply tangent-secant power for one circle; no transfer from a supplied tangent is needed.' },
    '9.3': { level: 2, reason: 'Add the near segment and chord, then apply tangent-secant power for one circle; no transfer from a supplied tangent is needed.' },
    '9.4': { level: 2, reason: 'Add the near segment and chord, then apply tangent-secant power for one circle; no transfer from a supplied tangent is needed.' },
  },
})
reviewed(14, {
  "14.1": {
    "9.2": {
      "level": 3,
      "reason": "Count triples without duplicates; the four-point base can simply omit one point."
    },
    "9.3": {
      "level": 3,
      "reason": "Count triples without duplicates; the four-point base can simply omit one point."
    },
    "9.4": {
      "level": 3,
      "reason": "Count triples without duplicates; the four-point base can simply omit one point."
    },
    "10.4": {
      "level": 4,
      "reason": "Classify edges into more families, separating nonparallel coplanar bottom lines from genuinely skew edges."
    }
  },
  "14.3": {
    "9.2": {
      "level": 2,
      "reason": "The cube and pyramid now have the same base, so the pyramid height is three cube edges by the preceding volume comparison."
    },
    "9.3": {
      "level": 2,
      "reason": "The cube and pyramid now have the same base, so the pyramid height is three cube edges by the preceding volume comparison."
    },
    "9.4": {
      "level": 2,
      "reason": "The cube and pyramid now have the same base, so the pyramid height is three cube edges by the preceding volume comparison."
    }
  }
})
reviewed(15, {
  '15.1': { '2.4': { level: 2, reason: 'Interpret one roller revolution as an unrolled lateral rectangle before applying its area formula.' } },
  '15.4': { '7.4': { level: 3, reason: 'Different radii prevent the shared-base one-third-height shortcut; conserve volume and account for the area ratio.' } },
})
calibration.chapters[15].sections['15.1'].levels[3] = 2
calibration.chapters[15].sections['15.2'].levels[4] = 2
calibration.chapters[15].sections['15.3'].levels[2] = 2
calibration.chapters[15].worksheet[2] = 2
export default applyLateGeometryReview(calibration)
