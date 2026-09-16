// Do the traps at the end of each MC solution run in the order the student
// reads the choices? The closing block (a trailing parenthetical, or the ✗
// sentences after the last ✓) is split into clauses, each clause tied to the
// distractor whose value it opens with, and that order compared to the
// choices. Items whose clauses cannot be tied to one distractor each — prose
// choices, "the second choice", two values sharing a head — are counted
// separately as unreadable rather than guessed at.
//
//   node scripts/audit/trap-order.mjs [book] [--list]
import { readdirSync } from 'node:fs'

// Paths below are written from the repo root, where these are meant to be run.
const ROOT = new URL('../../', import.meta.url)

const books = ['prealgebra', 'intro-counting', 'intro-algebra', 'intro-geometry']
const [only, ...flags] = process.argv.slice(2)
const LIST = flags.includes('--list') || only === '--list'
const UNREADABLE = flags.includes('--unreadable') || only === '--unreadable'

// Normalise for matching, keeping fractions, roots, π and degrees distinct
// from the bare digits they contain (so $\frac{1}{2}$ is not "12").
const norm = (s) =>
  String(s)
    .replace(/\\(?:d|t)?frac\s*\{([^{}]*)\}\s*\{([^{}]*)\}/g, '$1/$2')
    .replace(/\\sqrt/g, '√')
    .replace(/\\pi/g, 'π')
    .replace(/\\circ/g, '°')
    .replace(/\\[a-zA-Z]+/g, ' ')
    .replace(/[{}$\s,]/g, '')
    .toLowerCase()

// Choice texts to match against: a shared "x = " prefix and words shared by
// all four at either end are dropped.
const EQ = /^\$?\s*[a-zA-Z](\([a-z]\))?\s*=\s*/
function choiceKeys(choices) {
  let cs = choices.map(String)
  if (cs.every((c) => EQ.test(c.replace(/^\$/, '')))) cs = cs.map((c) => c.replace(/^\$/, '').replace(EQ, ''))
  const words = cs.map((c) => c.trim().split(/\s+/))
  let pre = 0
  while (words.every((w) => w.length > pre + 1 && w[pre] === words[0][pre] && !/\$/.test(w[pre]))) pre++
  let suf = 0
  while (words.every((w) => w.length > pre + suf + 1 && w[w.length - 1 - suf] === words[0][words[0].length - 1 - suf] && !/\$/.test(w[w.length - 1 - suf]))) suf++
  const keys = words.map((w) => norm(w.slice(pre, w.length - suf).join(' ')))
  return new Set(keys).size === keys.length && keys.every(Boolean) ? keys : choices.map(norm)
}

function mentionsAt(clause, key) {
  for (let s = 0; s < clause.length; s++) if (norm(clause.slice(s, s + key.length + 12)).startsWith(key)) return s
  return -1
}

// Clauses end at a top-level "; ", at a ✗ closing a sentence, or at a full
// stop before a fresh "The choice …".
function splitClauses(s) {
  const clauses = []
  let cur = ''
  let inMath = false
  let depth = 0
  for (let i = 0; i < s.length; i++) {
    const c = s[i]
    if (c === '$' && s[i - 1] !== '\\') inMath = !inMath // \$ is a dollar sign, not a delimiter
    if (!inMath) {
      if (c === '{' || c === '(') depth++
      if (c === '}' || c === ')') depth--
      if (c === ';' && depth === 0 && s[i + 1] === ' ') {
        clauses.push(cur)
        cur = ''
        i++
        continue
      }
      const m = c === '✗' && depth === 0 ? s.slice(i + 1).match(/^\.\s+(?=\S)/) : null
      if (m) {
        clauses.push(cur + '✗')
        cur = ''
        i += m[0].length
        continue
      }
      const d = c === '.' && depth === 0 ? s.slice(i + 1).match(/^\s+(?=(The choice|The value|The table|Choice|Choosing|Picking|Selecting|[A-Z]{3,})\b)/) : null
      if (d) {
        clauses.push(cur)
        cur = ''
        i += d[0].length
        continue
      }
    }
    cur += c
  }
  clauses.push(cur)
  return clauses
}

const OPENER = /^[\s("“]*(the choice|the value|choosing|picking|choice|selecting|answering|writing|taking)\b/i
// A clause that names a choice by position or by a fragment of it, not by its value.
const POSITIONAL = /\b(first|second|third|fourth|last|other|remaining|middle)\b[^$]{0,24}\bchoices?\b|\bchoices? (with|starting|beginning|ending)\b|\bchoices \$/i

// Which distractor is this clause about? The value it opens with, else the
// only distractor value it mentions at all.
function subjectOf(clause, keys, answer) {
  if (POSITIONAL.test(clause)) return -1
  const lead = clause
    .replace(/^[\s("“]*/, '')
    .replace(/^(the choice|the value|the table|choosing|picking|choice|selecting|answering|writing|taking)\s+/i, '')
    .replace(EQ, '')
  const found = []
  keys.forEach((k, idx) => {
    if (idx === answer || !k) return
    const at = mentionsAt(lead, k)
    if (at >= 0) found.push({ idx, at })
  })
  if (!found.length) return -1
  found.sort((a, b) => a.at - b.at)
  if (found.length > 1 && found[0].at === found[1].at) return -1
  if (found[0].at <= 3) return found[0].idx
  if (found.length === 1) return found[0].idx
  return -1
}

// Returns 'ordered', 'unordered', 'unreadable', or null when there is no block.
function judge(p) {
  const sol = String(p.solution || '')
  const cut = sol.lastIndexOf('✓')
  const tail = (cut >= 0 ? sol.slice(cut + 1) : sol).replace(/\s+$/, '')
  let inner
  if (tail.endsWith(')')) {
    let depth = 0
    let k = tail.length - 1
    for (; k >= 0; k--) {
      if (tail[k] === ')') depth++
      if (tail[k] === '(') depth--
      if (depth === 0) break
    }
    if (k < 0) return null
    inner = tail.slice(k + 1, -1)
  } else if (cut >= 0 && tail.includes('✗')) {
    inner = tail.replace(/^[\s.]+/, '') // after the full stop that closes route two
  } else return null
  inner = inner.replace(/\.$/, '')
  const clauses = splitClauses(inner)
  const distractors = p.choices.length - 1
  if (clauses.length < 2 || clauses.length > distractors) return 'unreadable'
  // A clause carrying two ✗ packs two traps; it has no single place in the order.
  if (clauses.some((c) => c.split('✗').length > 2)) return 'unreadable'
  // Outside a parenthetical, the first clause must itself be a trap, not the end of route two.
  if (!tail.endsWith(')') && !(OPENER.test(clauses[0]) || /^\s*[A-Z]{3,}/.test(clauses[0]) || subjectOf(clauses[0].slice(0, 12), choiceKeys(p.choices), p.answer) >= 0)) return 'unreadable'
  const keys = choiceKeys(p.choices)
  const subj = clauses.map((c) => subjectOf(c, keys, p.answer))
  if (subj.some((h) => h < 0) || new Set(subj).size !== subj.length) return 'unreadable'
  // A clause that leans on its neighbours ("both near-misses", "as well") has
  // no order of its own to judge.
  const ANAPHORA = /\b(both|these|those|either|the two|each of (them|these)|all three|likewise|similarly|the same|as well|too|also|again|itself|the other (one|two)|the former|the latter)\b|\b(of|than|from|to|like) that\b|\bthat \$|^[\s("“]*(That|This|It|Here|There)\b/i
  if (clauses.some((c) => ANAPHORA.test(c))) return 'unreadable'
  const sorted = [...subj].sort((a, b) => a - b)
  return subj.join() === sorted.join() ? 'ordered' : 'unordered'
}

for (const book of books) {
  if (only && !only.startsWith('--') && book !== only) continue
  let files
  try {
    files = readdirSync(new URL(`./src/data/variants/${book}`, ROOT))
  } catch {
    continue
  }
  const tally = { items: 0, none: 0, ordered: 0, unordered: 0, unreadable: 0 }
  for (const f of files) {
    let v
    try {
      v = (await import(new URL(`./src/data/variants/${book}/${f}`, ROOT).href)).default
    } catch {
      continue
    }
    const tables = [
      ...Object.entries(v.sections || {}).map(([k, t]) => [`S${k}`, t]),
      ['challenge', v.challenge],
    ]
    for (const [label, table] of tables) {
      if (!Array.isArray(table)) continue
      table.forEach((vs, i) =>
        vs.forEach((p, j) => {
          if (!p.choices || typeof p.answer !== 'number') return
          tally.items++
          const verdict = judge(p) ?? 'none'
          tally[verdict]++
          if ((LIST && verdict === 'unordered') || (UNREADABLE && verdict === 'unreadable')) {
            const sol = String(p.solution || '')
            const tail = sol.slice(sol.lastIndexOf('✓') + 1).trim()
            console.log(`${book}/${f} ${label}[${i + 1}]v${j + 1}: ${p.choices.join(' | ')}\n    ${tail.slice(-300)}`)
          }
        }),
      )
    }
  }
  const readable = tally.ordered + tally.unordered
  console.log(
    `${book.padEnd(15)} ${tally.items} MC items: ${readable} with a readable trap block, ` +
      `${tally.unordered} out of choice order; ${tally.unreadable} unreadable, ${tally.none} with no block`,
  )
}
