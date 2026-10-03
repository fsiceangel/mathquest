# Counting: local textbook evidence

The original DJVU was rendered and visually inspected on 2026-09-22. This is actual local-page evidence, not an inference from the repository's chapter names.

- Source: `E:\baiduyun\ebooks\ebookforclemie\textbook\l1\[The Art of Problem Solving] David Patrick - Introduction to Counting & Probability (2007, Aops Inc) - libgen.li.djvu`
- Source SHA-256: `e74cb335cf1e2e23d8bdc2718fcf5ca8e5d3c71d2996a4e3a12909b5ec5d85e8`; 256 DJVU pages.
- The filename says 2007, but the inspected copyright page (DJVU page 2, printed ii) says first printing 2005, ISBN 0-9773045-0-7. Use the page evidence when identifying this copy.
- Inspected contents: DJVU pages 9–12, printed ix–xii. Temporary image evidence: `tmp/counting-djvu/front-9.png` through `front-12.png`.
- Decoder: official DjVuLibre 3.5.29 / DjView 4.12 Windows release from https://sourceforge.net/projects/djvu/files/DjVuLibre_Windows/3.5.29%2B4.12/. The installer archive was extracted with the installed Bandizip CLI; the installer was **not executed**. Archive SHA-256 `92233fbf891c63f3fb7a0b5e1ce108baa4c29a40c89a442d1313f883aae84670`.
- Reproduction: `ddjvu.exe -format=ppm -page=9-12 -eachpage -size=1200x1600 <source.djvu> front-%d.ppm`, then Pillow to PNG. `djvutxt` found no usable text layer in the front matter.

The repository's 15 chapter titles and all instructional section numbers/titles correspond to this contents list (typographic case, curly apostrophes and dash differences only). The page numbers below are **printed book pages**, not DJVU indices.

| Repository chapter | Textbook start | Instructional section starts |
|---|---:|---|
| 1 Counting Is Arithmetic | 1 | 1.2: 2; 1.3: 6; 1.4: 13; 1.5: 19 |
| 2 Basic Counting Techniques | 27 | 2.2: 27; 2.3: 35; 2.4: 38; 2.5: 41 |
| 3 Correcting for Overcounting | 49 | 3.2: 49; 3.3: 53; 3.4: 57 |
| 4 Committees and Combinations | 65 | 4.2: 65; 4.3: 69; 4.4: 72 |
| 5 More With Combinations | 81 | 5.2: 81; 5.3: 84; 5.4: 88 |
| 6 Some Harder Counting Problems | 97 | 6.2: 97 |
| 7 Introduction to Probability | 111 | 7.2: 112; 7.3: 115; 7.4: 118 |
| 8 Basic Probability Techniques | 123 | 8.2: 123; 8.3: 128; 8.4: 130; 8.5: 136; 8.6: 138 |
| 9 Think About It! | 145 | 9.2: 145 |
| 10 Geometric Probability | 153 | 10.2: 154; 10.3: 156 |
| 11 Expected Value | 165 | 11.2: 166; 11.3: 166; 11.4: 169 |
| 12 Pascal’s Triangle | 175 | 12.2: 176; 12.3: 177; 12.4: 180; 12.5: 184 |
| 13 The Hockey Stick Identity | 191 | 13.2: 192; 13.3: 193; 13.4: 198; 13.5: 199 |
| 14 The Binomial Theorem | 209 | 14.2: 209; 14.3: 211; 14.4: 213; 14.5: 214 |
| 15 More Challenging Problems | 219 | 15.2: 219 |

The local contents explicitly stars 8.6 and 11.4. Printed vi says starred sections are supplementary and can be skipped. This is source support for treating their harder material as optional; it is not a rating of every MathQuest problem.

**Boundary of the correspondence claim:** the repository states that its questions, explanations and examples are original MathQuest content. Matching this contents list verifies chapter/section organization. It does not establish that a MathQuest item is a numbered textbook exercise, or that its answer is certified by the publisher. The independent answer ledger handles those original questions separately. Chapter text/exercise-by-exercise pedagogical equivalence has not yet been checked against all 256 scanned pages.
