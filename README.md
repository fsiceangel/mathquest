# MathQuest

A kid-friendly math practice site for the transition after Beast Academy:
Prealgebra, then appropriate topics from Introduction to Counting & Probability,
Introduction to Algebra, and Introduction to Geometry alongside the AoPS books.
The Introduction books are parallel strands, not a requirement to finish four
whole books before trying AMC 8 problems.

**All problems, lessons, and solutions are original MathQuest content.** Only the
chapter/section topic structure follows the books a student works from, so the
site can be used alongside them.

## Features

- **Learn pages** per section — concept cards plus step-by-step worked examples
- **Practice quizzes** — 10 problems per section, mixing choices with reviewed numeric entry, with instant
  feedback, full solutions, and a 3-star score system
- **Chapter Challenge** — 12 mixed problems per chapter to practice choosing methods
- **Printable worksheets** — 10 free-response problems per chapter with a
  separate answer key page for grown-ups
- Progress saved locally in the browser (no account needed)
- Reviewed question-level difficulty, separate core/bridge/extension scope,
  and practice ordered from gentler to harder within each round
- Untimed mixed practice, short timed rounds, and full contest-style papers
- Numeric entry in 275 of 293 sections and all 71 chapter challenges: 1,025
  question slots with four versions each, plus 8 transition questions. Invalid
  input formats prompt a correction without scoring; drafts and prior answers
  are retained. Symbolic/proof/option-dependent tasks and timed papers keep choices.

## Development

```bash
npm install
npm run dev        # local dev server
npm run validate   # schema + KaTeX check of all quiz content
npm run audit:difficulty    # ratings, prerequisites, content snapshot, paper ramps
npm run audit:arena-answers # independent checks for all 100 arena questions
npm run audit:answers       # require current independent receipts for every item
npm run audit:attempts      # partial progress, exact versions, timer and flags
npm run audit:answer-entry  # numeric equivalence, format and reduced-fraction rules
npm run audit:section-entry # 4100 reviewed versions, source pins and legacy progress
npm run audit:transitions   # 40 bridge/transfer answers, coverage and saved progress
npm run audit:runtime       # actual lazy registry, all rounds, stable IDs and pool
npm run build      # production build
```

Content lives in `src/data/<book>/chNN.js` — one module per chapter. Run
the checks above after editing content; the deploy workflow runs them too.
See [the takeover and difficulty audit](notes/audits/README.md) for coverage,
chapter reports, the learning path, and the limits of editorial ratings.

## Deployment

Pushes to `main` build and deploy to GitHub Pages via `.github/workflows/deploy.yml`.
