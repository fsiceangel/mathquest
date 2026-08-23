// Validates every authored chapter content module:
//  - schema shape and required counts
//  - every MC question has 4 unique choices and an in-range answer index
//  - every $...$ math chunk parses under KaTeX (throwOnError)
//  - warns when correct answers cluster on one choice position
import { readdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import katex from 'katex'

const dataDir = join(dirname(fileURLToPath(import.meta.url)), '..', 'src', 'data')
const errors = []
const warnings = []

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

function checkProblem(where, p, { mc }) {
  if (p.fig) checkFig(where, p.fig)
  if (!p.q || typeof p.q !== 'string') errors.push(`${where}: missing q`)
  else checkMath(`${where}.q`, p.q)
  if (!p.solution || typeof p.solution !== 'string') errors.push(`${where}: missing solution`)
  else checkMath(`${where}.solution`, p.solution)
  if (mc) {
    if (!Array.isArray(p.choices) || p.choices.length !== 4) {
      errors.push(`${where}: needs exactly 4 choices`)
      return
    }
    p.choices.forEach((c, i) => checkMath(`${where}.choices[${i}]`, c))
    if (new Set(p.choices.map(String)).size !== 4) errors.push(`${where}: duplicate choices`)
    if (!Number.isInteger(p.answer) || p.answer < 0 || p.answer > 3) errors.push(`${where}: answer index out of range`)
  } else {
    if (!p.answer || typeof p.answer !== 'string') errors.push(`${where}: worksheet answer must be a string`)
    else checkMath(`${where}.answer`, p.answer)
  }
}

function checkAnswerSpread(where, problems) {
  const counts = [0, 0, 0, 0]
  for (const p of problems) if (Number.isInteger(p.answer)) counts[p.answer]++
  if (Math.max(...counts) > Math.ceil(problems.length * 0.5)) {
    warnings.push(`${where}: correct answers cluster on one position (${counts.join('/')})`)
  }
}

async function checkChapter(file) {
  const mod = await import(pathToFileURL(file).href)
  const ch = mod.default
  const id = `${ch?.book}/ch${ch?.number}`
  if (!ch || !ch.book || !ch.number || !ch.title) {
    errors.push(`${file}: missing book/number/title`)
    return
  }
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

const files = []
for (const book of readdirSync(dataDir, { withFileTypes: true })) {
  if (!book.isDirectory()) continue
  for (const f of readdirSync(join(dataDir, book.name))) {
    if (/^ch\d+\.js$/.test(f)) files.push(join(dataDir, book.name, f))
  }
}

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

for (const w of warnings) console.warn('WARN', w)
if (errors.length) {
  for (const e of errors) console.error('ERROR', e)
  console.error(`\n${errors.length} error(s) across ${files.length} file(s).`)
  process.exit(1)
}
console.log(`OK — ${files.length} chapter file(s) valid, ${warnings.length} warning(s).`)
