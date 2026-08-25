// Validates every authored chapter content module:
//  - schema shape and required counts
//  - every MC question has 4 unique choices and an in-range answer index
//  - every $...$ math chunk parses under KaTeX (throwOnError)
//  - warns when correct answers cluster on one choice position
//  - no question repeats anywhere within a chapter, base or variation
import { readdirSync } from 'node:fs'
import { join, dirname, basename } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import katex from 'katex'

const dataDir = join(dirname(fileURLToPath(import.meta.url)), '..', 'src', 'data')
const errors = []
const warnings = []

// `npm run validate -- --only=ch03` narrows the variation and arena files that
// get checked. Base chapters are always loaded, since variations are checked
// against them. Useful when several people are authoring at once and you only
// want to hear about your own file.
// Path separators are normalised to `/` on both sides, so `--only=ch03`,
// `--only=intro-algebra/ch03-s1`, and the backslash form all behave the same.
// A filter that matches nothing is an error, not a pass: a scoped run that
// silently checks zero files prints the same cheerful OK as a real one.
const onlyArg = process.argv.find((a) => a.startsWith('--only='))
const only = onlyArg ? onlyArg.slice('--only='.length).replace(/\\/g, '/') : null
let matched = 0
const wanted = (file) => {
  if (!only) return true
  const hit = file.replace(/\\/g, '/').includes(only)
  if (hit) matched += 1
  return hit
}

function checkMath(where, text) {
  // Unescaped $ are math delimiters; \$ inside math is a literal dollar sign.
  const s = String(text)
  const dollars = (s.match(/(?<!\\)\$/g) || []).length
  if (dollars % 2 !== 0) {
    errors.push(`${where}: unbalanced $ delimiters in: ${s.slice(0, 80)}`)
    return
  }
  for (const m of s.matchAll(/(?<!\\)\$((?:\\\$|[^$])+)\$/g)) {
    try {
      katex.renderToString(m[1], { throwOnError: true })
    } catch (e) {
      errors.push(`${where}: KaTeX failed on "${m[1]}": ${e.message.split('\n')[0]}`)
    }
  }
}

const FIG_TYPES = new Set(['poly', 'seg', 'line', 'circle', 'arc', 'point', 'label', 'angle', 'right', 'tick', 'parabola', 'curve'])

function checkNumbersDeep(where, value) {
  if (typeof value === 'number') {
    if (!Number.isFinite(value)) errors.push(`${where}: non-finite number in fig`)
  } else if (Array.isArray(value)) {
    value.forEach((v) => checkNumbersDeep(where, v))
  } else if (value && typeof value === 'object') {
    Object.values(value).forEach((v) => checkNumbersDeep(where, v))
  }
}

function checkFig(where, fig) {
  if (!Array.isArray(fig.view) || fig.view.length !== 4 || !fig.view.every(Number.isFinite)) {
    errors.push(`${where}: fig.view must be [x0, y0, x1, y1]`)
    return
  }
  if (fig.view[2] <= fig.view[0] || fig.view[3] <= fig.view[1]) {
    errors.push(`${where}: fig.view is empty or inverted`)
  }
  if (!Array.isArray(fig.elems) || fig.elems.length === 0) {
    errors.push(`${where}: fig.elems missing`)
    return
  }
  fig.elems.forEach((e, i) => {
    if (!e || !FIG_TYPES.has(e.t)) errors.push(`${where}: fig.elems[${i}] has unknown type "${e?.t}"`)
    else checkNumbersDeep(`${where}.fig.elems[${i}]`, e)
  })
}

function checkProblem(where, p, { mc, nChoices = 4 }) {
  if (p.fig) checkFig(where, p.fig)
  if (!p.q || typeof p.q !== 'string') errors.push(`${where}: missing q`)
  else checkMath(`${where}.q`, p.q)
  if (!p.solution || typeof p.solution !== 'string') errors.push(`${where}: missing solution`)
  else checkMath(`${where}.solution`, p.solution)
  if (mc) {
    if (!Array.isArray(p.choices) || p.choices.length !== nChoices) {
      errors.push(`${where}: needs exactly ${nChoices} choices`)
      return
    }
    p.choices.forEach((c, i) => checkMath(`${where}.choices[${i}]`, c))
    if (new Set(p.choices.map(String)).size !== nChoices) errors.push(`${where}: duplicate choices`)
    if (!Number.isInteger(p.answer) || p.answer < 0 || p.answer >= nChoices) {
      errors.push(`${where}: answer index out of range`)
    }
  } else {
    if (!p.answer || typeof p.answer !== 'string') errors.push(`${where}: worksheet answer must be a string`)
    else checkMath(`${where}.answer`, p.answer)
  }
}

function checkAnswerSpread(where, problems, nChoices = 4) {
  const counts = new Array(nChoices).fill(0)
  for (const p of problems) if (Number.isInteger(p.answer) && p.answer < nChoices) counts[p.answer]++
  if (Math.max(...counts) > Math.ceil(problems.length * 0.5)) {
    warnings.push(`${where}: correct answers cluster on one position (${counts.join('/')})`)
  }
}

const chapters = new Map()

async function checkChapter(file) {
  const mod = await import(pathToFileURL(file).href)
  const ch = mod.default
  const id = `${ch?.book}/ch${ch?.number}`
  if (!ch || !ch.book || !ch.number || !ch.title) {
    errors.push(`${file}: missing book/number/title`)
    return
  }
  chapters.set(`${ch.book}/${ch.number}`, ch)
  if (!ch.intro) errors.push(`${id}: missing intro`)
  else checkMath(`${id}.intro`, ch.intro)

  if (!Array.isArray(ch.sections) || ch.sections.length === 0) {
    errors.push(`${id}: no sections`)
    return
  }
  for (const s of ch.sections) {
    const sid = `${id} §${s.id}`
    if (!s.id || !s.title) errors.push(`${sid}: missing id/title`)
    if (!s.learn || !Array.isArray(s.learn.concepts) || s.learn.concepts.length < 2) {
      errors.push(`${sid}: learn needs >=2 concepts`)
    } else {
      s.learn.concepts.forEach((c, i) => {
        if (!c.heading || !c.body) errors.push(`${sid}: concept ${i} missing heading/body`)
        else { checkMath(`${sid}.concept[${i}]`, c.heading); checkMath(`${sid}.concept[${i}]`, c.body) }
      })
    }
    if (!s.learn || !Array.isArray(s.learn.examples) || s.learn.examples.length < 1) {
      errors.push(`${sid}: learn needs >=1 worked example`)
    } else {
      s.learn.examples.forEach((ex, i) => {
        const exid = `${sid}.example[${i}]`
        if (!ex.problem || !Array.isArray(ex.steps) || ex.steps.length < 2 || !ex.answer) {
          errors.push(`${exid}: needs problem, >=2 steps, answer`)
        } else {
          checkMath(exid, ex.problem)
          ex.steps.forEach((st, j) => checkMath(`${exid}.step[${j}]`, st))
          checkMath(exid, ex.answer)
          if (ex.fig) checkFig(exid, ex.fig)
        }
      })
    }
    if (!Array.isArray(s.problems) || s.problems.length !== 10) {
      errors.push(`${sid}: needs exactly 10 practice problems (has ${s.problems?.length ?? 0})`)
    } else {
      s.problems.forEach((p, i) => checkProblem(`${sid}.p[${i + 1}]`, p, { mc: true }))
      checkAnswerSpread(sid, s.problems)
    }
  }
  if (!Array.isArray(ch.challenge) || ch.challenge.length !== 12) {
    errors.push(`${id}: challenge needs exactly 12 problems (has ${ch.challenge?.length ?? 0})`)
  } else {
    ch.challenge.forEach((p, i) => checkProblem(`${id}.challenge[${i + 1}]`, p, { mc: true }))
    checkAnswerSpread(`${id}.challenge`, ch.challenge)
  }
  if (!Array.isArray(ch.worksheet) || ch.worksheet.length !== 10) {
    errors.push(`${id}: worksheet needs exactly 10 problems (has ${ch.worksheet?.length ?? 0})`)
  } else {
    ch.worksheet.forEach((p, i) => checkProblem(`${id}.ws[${i + 1}]`, p, { mc: false }))
  }
}

// A variation must be a real alternate: same shape and same answer type as the
// base problem, but not the same problem restated.
const VARIANTS_PER_PROBLEM = 3

function checkVariantTable(where, base, table, mc) {
  if (!Array.isArray(table)) {
    errors.push(`${where}: variations must be an array`)
    return
  }
  if (!Array.isArray(base)) {
    errors.push(`${where}: no base problems to vary`)
    return
  }
  if (table.length !== base.length) {
    errors.push(`${where}: has ${table.length} variation entries for ${base.length} base problems`)
  }
  table.forEach((vs, i) => {
    const w = `${where}[${i + 1}]`
    if (!Array.isArray(vs) || vs.length !== VARIANTS_PER_PROBLEM) {
      errors.push(`${w}: needs exactly ${VARIANTS_PER_PROBLEM} variations (has ${vs?.length ?? 0})`)
      return
    }
    const seen = new Set(base[i] ? [normQ(base[i].q)] : [])
    vs.forEach((v, j) => {
      const vw = `${w}.v${j + 1}`
      if (!v || typeof v !== 'object') {
        errors.push(`${vw}: not a problem object`)
        return
      }
      checkProblem(vw, v, { mc })
      const q = normQ(v.q)
      if (seen.has(q)) errors.push(`${vw}: same question text as the base problem or another variation`)
      seen.add(q)
    })
    if (base[i] && mc) checkAnswerSpread(w, [base[i], ...vs])
    if (base[i]) base[i].variants = vs // mirrors what content.js does, for the coverage report
  })
}

function normQ(q) {
  return String(q ?? '').replace(/\s+/g, ' ').trim().toLowerCase()
}

async function checkVariants(file) {
  const v = (await import(pathToFileURL(file).href)).default
  if (!v || !v.book || !v.number) {
    errors.push(`${file}: variation module missing book/number`)
    return
  }
  const id = `${v.book}/ch${v.number} variations`
  const ch = chapters.get(`${v.book}/${v.number}`)
  if (!ch) {
    errors.push(`${id}: no such chapter`)
    return
  }
  for (const [sid, table] of Object.entries(v.sections || {})) {
    const section = ch.sections.find((s) => s.id === sid)
    if (!section) {
      errors.push(`${id}: unknown section ${sid}`)
      continue
    }
    checkVariantTable(`${id} §${sid}`, section.problems, table, true)
  }
  if (v.challenge) checkVariantTable(`${id} challenge`, ch.challenge, v.challenge, true)
  if (v.worksheet) checkVariantTable(`${id} worksheet`, ch.worksheet, v.worksheet, false)
}

// Arena sets are contest-style papers: 25 problems, five choices each, ordered
// from gentle to hard.
const ARENA_SIZE = 25

async function checkArenaSet(file) {
  const set = (await import(pathToFileURL(file).href)).default
  if (!set || !set.id || !set.title) {
    errors.push(`${file}: arena set missing id/title`)
    return
  }
  const id = `arena/${set.id}`
  if (!Array.isArray(set.problems) || set.problems.length !== ARENA_SIZE) {
    errors.push(`${id}: needs exactly ${ARENA_SIZE} problems (has ${set.problems?.length ?? 0})`)
    return
  }
  set.problems.forEach((p, i) => {
    checkProblem(`${id}.p[${i + 1}]`, p, { mc: true, nChoices: 5 })
    if (!p.topic) warnings.push(`${id}.p[${i + 1}]: no topic tag`)
  })
  checkAnswerSpread(id, set.problems, 5)
}

const files = []
for (const book of readdirSync(dataDir, { withFileTypes: true })) {
  if (!book.isDirectory() || book.name === 'variants' || book.name === 'arena') continue
  for (const f of readdirSync(join(dataDir, book.name))) {
    if (/^ch\d+\.js$/.test(f)) files.push(join(dataDir, book.name, f))
  }
}

function listDir(dir, filter) {
  try {
    return readdirSync(dir, { withFileTypes: true }).filter(filter)
  } catch {
    return []
  }
}

const variantsDir = join(dataDir, 'variants')
const variantFiles = []
for (const book of listDir(variantsDir, (e) => e.isDirectory())) {
  for (const f of readdirSync(join(variantsDir, book.name))) {
    if (f.endsWith('.js')) variantFiles.push(join(variantsDir, book.name, f))
  }
}

const arenaDir = join(dataDir, 'arena')
const arenaFiles = listDir(arenaDir, (e) => e.isFile() && /^set\d+\.js$/.test(e.name)).map((e) =>
  join(arenaDir, e.name),
)

if (files.length === 0) {
  console.error('No content files found.')
  process.exit(1)
}
for (const f of files) {
  try {
    await checkChapter(f)
  } catch (e) {
    errors.push(`${f}: failed to load — ${e.message}`)
  }
}
for (const f of variantFiles.filter(wanted)) {
  try {
    await checkVariants(f)
  } catch (e) {
    errors.push(`${f}: failed to load — ${e.message}`)
  }
}
for (const f of arenaFiles.filter(wanted)) {
  try {
    await checkArenaSet(f)
  } catch (e) {
    errors.push(`${f}: failed to load — ${e.message}`)
  }
}

// Every question a student can meet inside one chapter — the base problems plus
// every authored variation — has to be a different question. Variations for one
// chapter are usually split across several files written independently, and two
// authors starting from adjacent base problems land on the same one surprisingly
// often. No per-file check can see that, so this pass reads the whole chapter at
// once. It always reads EVERY variation file, even under --only, because a
// repeat by definition involves a file you are not editing.
const chapterQuestions = new Map()

function registerQuestion(book, number, where, q) {
  if (!q) return
  const key = `${book}/ch${number}`
  if (!chapterQuestions.has(key)) chapterQuestions.set(key, [])
  chapterQuestions.get(key).push({ where, q })
}

for (const [key, ch] of chapters) {
  const [book, number] = key.split('/')
  for (const s of ch.sections ?? []) {
    s.problems?.forEach((p, i) => registerQuestion(book, number, `base §${s.id}[${i + 1}]`, p?.q))
  }
  ch.challenge?.forEach((p, i) => registerQuestion(book, number, `base challenge[${i + 1}]`, p?.q))
  ch.worksheet?.forEach((p, i) => registerQuestion(book, number, `base worksheet[${i + 1}]`, p?.q))
}

for (const f of variantFiles) {
  let v
  try {
    v = (await import(pathToFileURL(f).href)).default
  } catch {
    continue // the load failure is already reported by checkVariants
  }
  if (!v?.book || !v.number) continue
  const tag = basename(f, '.js')
  const walk = (label, table) => {
    if (!Array.isArray(table)) return
    table.forEach((vs, i) => {
      if (!Array.isArray(vs)) return
      vs.forEach((p, j) => registerQuestion(v.book, v.number, `${tag} ${label}[${i + 1}]v${j + 1}`, p?.q))
    })
  }
  for (const [sid, table] of Object.entries(v.sections || {})) walk(`§${sid}`, table)
  walk('challenge', v.challenge)
  walk('worksheet', v.worksheet)
}

// The digits in a question are its fingerprint. Same numbers in the same order
// and one wording contained in the other is a repeat wearing a hat — "Simplify
// $\sqrt{54}$" and "Simplify $\sqrt{54}$ completely". Anything looser than
// containment fires constantly on these short formulaic questions ("area of a
// circle with diameter 6" vs "perimeter of a semicircle with radius 6"), so the
// test stays strict. The stripped form keeps `+` and `-` because moving a sign
// makes a genuinely different question: "$x^2 - 11x + 24$" is not "$x^2 + 11x + 24$".
const numSig = (q) => (q.match(/[0-9]+/g) || []).join(',')
const stripped = (q) => q.toLowerCase().replace(/[^a-z0-9+-]+/g, '')

for (const [chapterId, list] of chapterQuestions) {
  const byText = new Map()
  const byNumbers = new Map()
  for (const item of list) {
    const text = normQ(item.q)
    const twin = byText.get(text)
    if (twin) {
      errors.push(`${chapterId}: ${twin.where} and ${item.where} are the same question`)
      continue
    }
    byText.set(text, item)
    const sig = numSig(item.q)
    if (!sig) continue
    if (!byNumbers.has(sig)) byNumbers.set(sig, [])
    for (const other of byNumbers.get(sig)) {
      const a = stripped(item.q)
      const b = stripped(other.q)
      const [short, long] = a.length <= b.length ? [a, b] : [b, a]
      if (long.includes(short)) {
        errors.push(`${chapterId}: ${other.where} and ${item.where} are the same question reworded`)
      }
    }
    byNumbers.get(sig).push(item)
  }
}

// Coverage: how much of the bank has its three variations authored yet.
let baseCount = 0
let variedCount = 0
for (const ch of chapters.values()) {
  for (const s of ch.sections) for (const p of s.problems) { baseCount++; if (p.variants?.length === 3) variedCount++ }
  for (const p of ch.challenge ?? []) { baseCount++; if (p.variants?.length === 3) variedCount++ }
  for (const p of ch.worksheet ?? []) { baseCount++; if (p.variants?.length === 3) variedCount++ }
}

for (const w of warnings) console.warn('WARN', w)
if (only && matched === 0) {
  console.error(`ERROR --only=${only} matched no files — nothing was checked.`)
  process.exit(1)
}
if (errors.length) {
  for (const e of errors) console.error('ERROR', e)
  console.error(`\n${errors.length} error(s) across ${files.length + variantFiles.length + arenaFiles.length} file(s).`)
  process.exit(1)
}
const pct = baseCount ? Math.round((variedCount / baseCount) * 100) : 0
console.log(
  `OK — ${files.length} chapter file(s), ${variantFiles.length} variation file(s), ${arenaFiles.length} arena set(s) valid, ${warnings.length} warning(s).`,
)
console.log(`Variations: ${variedCount}/${baseCount} base problems have all 3 (${pct}%).`)
