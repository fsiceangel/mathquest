# Content audit scripts

`npm run validate` checks that every chapter and variation file has the right
shape and that its LaTeX renders. These scripts check the things that shape
alone cannot: whether a chapter's four rounds are genuinely four different
problem sets, and whether the figures agree with their own labels.

Run them from the repo root.

| command | what it looks for |
|---|---|
| `node scripts/audit/keys.mjs <book> <NN>` | every answer key in the chapter, grouped by round, with repeats flagged. Two items in the same round must never share a key — a student who sees the same answer twice starts pattern-matching instead of counting. |
| `node scripts/audit/slots.mjs <book> <NN>` | the four keys of each slot side by side (base, then rounds 2–4), flagging any two adjacent rounds that repeat. |
| `AR=2 node scripts/audit/cross-file.mjs <book> <NN>` | same-round echoes across files, choice values that collide once LaTeX is stripped, and worksheet items that carry the multiple-choice shape by mistake. |
| `node scripts/audit/figures.mjs <book> <NN> [--var]` | figures whose geometry contradicts their labels: a side marked 5 drawn at length 7, a right angle that is not one, a degenerate polygon. |
| `node scripts/audit/trap-order.mjs [book]` | solutions that name the wrong choices out of the order the student reads them. Heuristic — a value can be mentioned for another reason — so treat hits as candidates to eyeball. |
| `node scripts/audit/degree-keys.mjs <book> <NN>` | the same key sweep restricted to angle answers, which collide far more often than they look like they should. |
| `node scripts/audit/arena.mjs` | the authored arena papers: ascending numeric choices, answer-position spread, cross-paper echoes, house style, figure sanity. |

A chapter is ready to ship when `npm run validate` is clean, each round reports
"distinct keys, 0 repeated", and slots report "0 adjacent-repeat slot(s)".

None of this proves an answer is right. Keys are brute-forced from the stem
before the choices are written, and recomputed afterwards by a second pass that
has not read the solution; `notes/variation-spec.md` describes that process.
