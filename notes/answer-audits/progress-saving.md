# Partial practice progress

Implemented in `src/lib/attempts.js`, `src/lib/use-attempt.js`, `src/data/resume.js`, and the quiz/paper views.

- Each answer and navigation action saves synchronously on this device, before a route change can unmount the view.
- Drafts retain question IDs and order, selected answers, current position, version, completion token, and timed-paper flags/remaining seconds. Returning to a random draw resolves the saved IDs instead of replacing the paper.
- Lazy-loaded variants are loaded before showing a saved version. A changed question clears only its own answer. A missing saved question shows a recoverable loading error while retaining the draft.
- Completed results use an attempt token to avoid duplicate scores/version increments on refresh or React StrictMode remounts. Only “Try again” / “Run it again” clears the finished draft.
- Chapter, Arena and checkpoint entry pages show `Continue answered/total`.
- Drafts currently stay in this browser's local storage. Family Sync continues to synchronize completed results; draft synchronization is not implemented.
- Timed practice pauses on leaving the paper. It is a practice timer, not enforcement of official contest conditions.

## Verified 2026-09-21

`npm run audit:attempts` checks three-answer recovery, version/order identity, independent drafts, selective invalidation after content edits, timer/flags, idempotent scoring, malformed data, and storage-write failure.

Actual browser tests at the local Vite server:

1. Prealgebra 1.2: answer three questions, return to chapter, see `Continue 3/10`, re-enter and preserve question 3, its chosen answer, feedback and version.
2. Complete the quiz, choose Try again, answer a version-2 question, then open the route in a fresh tab: version 2 and its selected answer are restored after lazy loading.
3. Quick Round: answer three questions, flag question 1, leave for several minutes, return: same three questions and answers, current question 3, flag, and saved remaining time are retained. No replacement random paper appears.

The existing Vite SSR runtime audit also passes with the new persistence hook.

## Regression rerun 2026-09-30

`npm run audit:attempts` and `npm run audit:runtime` passed again against the
current workspace. This rerun covers the automated checks above; the recorded
browser interactions retain their original test date. Changes have not been
deployed to the hosted site.
