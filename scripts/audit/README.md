# Content audit scripts

`npm run validate` checks that every chapter and variation file has the right
shape and that its LaTeX renders. These scripts check the things that shape
alone cannot: whether a chapter's four rounds are genuinely four different
problem sets, and whether the figures agree with their own labels.

Run them from the repo root.

`npm run audit:difficulty` checks the complete item inventory, explicit editorial
ratings, prerequisite references and cycles, source fingerprints, and 300 seeded
draws against the exact difficulty profiles. It does not infer difficulty from a
question number or prove educational effectiveness. See `notes/audits/README.md`.
After reviewing changed items and updating their ratings, run
`npm run audit:difficulty -- --write` to regenerate the CSV, gap report and source
snapshot. Never refresh the snapshot merely to silence a failed audit.

`npm run audit:arena-answers` checks all 100 Arena answers and unique options,
using exact computation, enumeration, and source-pinned mathematical proofs.

`npm run audit:answers` requires a successful independent answer receipt for
every current item version across the four books and Arena. It compares full
SHA-256 source digests and fails on missing, stale, or unsuccessful evidence.
This is a coverage/integrity gate over the recorded mathematics, not a new
solver run. Use `npm run audit:answer-status` for a non-blocking progress report.
Replay models and per-book methods live in `scripts/audit/answers/` and
`notes/answer-audits/`. After changing mathematics, independently solve the
changed item and all choices before updating its evidence; never simply re-pin
a stale receipt. Manual semantic proofs are explicitly distinguished from
symbolic calculations and exhaustive enumeration in the ledgers.

`npm run audit:attempts` checks partial-answer recovery, saved versions/order,
timer/flags, selective invalidation, and idempotent result recording.

`npm run audit:transitions` independently verifies all 40 new stepping-stone
and mixed-transfer answers, requires reviewed source hashes, and exercises all
six sets through the actual registry and React views. It checks three-answer
restoration, skill coverage, difficulty profiles, and entry/return links.

`node scripts/audit/runtime.mjs` loads the real Vite registry, all lazy chapter variants, and checkpoints. It checks all four rounds for stable source IDs and answer objects, nonmutating difficulty ordering, and identical random-paper pools and seeded selections before and after loading. It does not prove the mathematical answers.

| command | what it looks for |
|---|---|
| `node scripts/audit/keys.mjs <book> <NN>` | every answer key in the chapter, grouped by round, with repeats flagged for editorial inspection. Equal answers alone are not a mathematical or difficulty defect. |
| `node scripts/audit/slots.mjs <book> <NN>` | the four keys of each slot side by side (base, then rounds 2–4), flagging any two adjacent rounds that repeat. |
| `AR=2 node scripts/audit/cross-file.mjs <book> <NN>` | same-round echoes across files, choice values that collide once LaTeX is stripped, and worksheet items that carry the multiple-choice shape by mistake. |
| `node scripts/audit/figures.mjs <book> <NN> [--var]` | figures whose geometry contradicts their labels: a side marked 5 drawn at length 7, a right angle that is not one, a degenerate polygon. |
| `node scripts/audit/trap-order.mjs [book] [--list]` | solutions whose closing traps run in a different order from the choices. It splits the closing block into clauses and ties each to the distractor it opens with; items it cannot read that way (prose choices, "the second choice") are counted as unreadable rather than guessed at. `--list` names the out-of-order items. |
| `node scripts/audit/degree-keys.mjs <book> <NN>` | the same key sweep restricted to angle answers, which collide far more often than they look like they should. |
| `node scripts/audit/arena.mjs` | the authored arena papers: ascending numeric choices, answer-position spread, cross-paper echoes, house style, figure sanity. |

`npm run audit:runtime` exercises the actual Vite registry and all four rounds,
checking stable source IDs, answer identity, nonmutating ordering, and unchanged
paper selection after lazy loading. It also renders the actual Mixed Practice
screen before/after loading and at four saved attempt counts, ensuring QuizView
does not replace a drawn paper with chapter variants. Pass the schema, difficulty, runtime and
targeted answer checks before shipping; manually review changed mathematics.
Repeated keys are a review signal, not a reason to force an unnatural answer.

Schema, ordering, and rendering checks do not prove mathematical correctness.
Use the independent answer ledgers for that evidence. Answer verification does
not certify every sentence of explanatory prose, every rendered diagram, or
empirical difficulty for a child. `notes/variation-spec.md` describes the
separate authoring workflow.

`npm run audit:answer-entry` checks exact integer/rational input, equivalent
fractions and decimals, and the distinction between format errors and wrong
answers. `audit:attempts` covers typed submissions, unsubmitted drafts, and
migration from choice questions. `audit:transitions` checks all eight entry specs
against the independently audited choice keys and renders a restored draft.
Entry specs change presentation only; the 40 underlying transition problems
retain their mathematical audit receipts.

Section practice now has a reviewed, explicit selection in
`notes/audits/section-entry-selection.json`. `npm run audit:section-entry`
checks 1,025 slots / 4,100 versions across all 71 chapters, keyed numeric values,
reviewed prompt/choice/figure SHA-256 digests, units, four-round restoration,
legacy answered choices, and unchanged timed papers. Coverage by section is
in `notes/audits/section-entry-coverage.json`; suitability reviews are the four
`entry-*-review.json` files. Discovery (`entry-candidates.mjs`) is only an audit
aid, not a product rule. Rebuild specs from the explicit selection using
`node scripts/audit/build-entry-specs.mjs`; record new digests with
`node scripts/audit/section-entry.mjs --record-reviewed` only after reviewing
all selected stems/versions for conversion safety. Never use recording to
silence a failed digest check without review.

The remaining 24 previously uncovered sections received a separate review of
all 240 slots / 960 versions. Ten slots (40 versions) were converted; four
wording/explanation defects were corrected. `remaining-entry-*.json` contains
the independent reasoning and final source receipts; `remaining-entry-summary.json`
lists section decisions and findings. `audit:section-entry` also checks these
960 receipts, including explanations, so subsequent edits require renewed review.

New section inputs accept rational numbers without revealing whether a key is
an integer. Explicit fraction/simplification tasks require the requested form;
an unreduced fraction or decimal receives a format prompt without submission.
Already submitted legacy choices stay intact; unanswered questions and fresh
attempts receive the new format. Timed papers remain multiple choice.

The input UI gives format guidance before submission and keeps units outside
the box. Invalid formats never submit or count as wrong; valid wrong numbers
use the existing solution feedback. This format policy follows the user's
request. Beast Academy's public feedback documentation
(https://help.beastacademy.com/a/1890360) was consulted, but does not establish
its format-validation rules; this is not a claim of identical BA behavior.
