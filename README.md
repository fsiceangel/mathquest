# MathQuest

A kid-friendly math practice site organized like a shelf of textbooks
(Prealgebra → Introduction to Counting & Probability → Introduction to Algebra →
Introduction to Geometry): pick a book, pick a chapter, learn each section, then
practice it.

**All problems, lessons, and solutions are original MathQuest content.** Only the
chapter/section topic structure follows the books a student works from, so the
site can be used alongside them.

## Features

- **Learn pages** per section — concept cards plus step-by-step worked examples
- **Practice quizzes** — 10 multiple-choice problems per section with instant
  feedback, full solutions, and a 3-star score system
- **Chapter Challenge** — 12 harder mixed problems per chapter
- **Printable worksheets** — 10 free-response problems per chapter with a
  separate answer key page for grown-ups
- Progress saved locally in the browser (no account needed)

## Development

```bash
npm install
npm run dev        # local dev server
npm run validate   # schema + KaTeX check of all quiz content
npm run build      # production build
```

Content lives in `src/data/<book>/chNN.js` — one module per chapter. Run
`npm run validate` after editing content; the deploy workflow runs it too.

## Deployment

Pushes to `main` build and deploy to GitHub Pages via `.github/workflows/deploy.yml`.
