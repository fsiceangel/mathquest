// Keep selection pure so the real content bank can be exercised outside Vite.
export const DRAW_PROFILES = {
  bridge: [1,1,1,1,2,2,2,2,3,3],
  quick: [1,1,2,2,2,2,3,3,3,3],
  draw: [1,1,1,1,1,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,4,4,4,4,4],
}

const topicFor = (book, number) => book === 'intro-counting' ? 'counting'
  : book === 'intro-geometry' ? 'geometry'
  : book === 'intro-algebra' ? 'algebra'
  : number <= 2 ? 'arithmetic' : number === 3 ? 'number theory'
  : number <= 4 ? 'fractions' : number === 5 ? 'algebra'
  : number <= 6 ? 'arithmetic' : number <= 8 ? 'ratios'
  : number <= 12 ? 'geometry' : number === 13 ? 'statistics'
  : number === 14 ? 'counting' : 'patterns'

export function calibratedPool(chapters, checkpoints = []) {
  const entries = []
  for (const ch of chapters) {
    for (const group of [...ch.sections.map(s => s.problems), ch.challenge ?? []]) {
      for (const p of group) {
        if (p.calibration && p.calibration.scope !== 'extension') {
          entries.push({ p, topic: topicFor(ch.book, ch.number), book: ch.book, chapter: ch.number })
        }
      }
    }
  }
  for (const cp of checkpoints) {
    for (const p of cp.problems) {
      if (p.calibration && p.calibration.scope !== 'extension') entries.push({ p, topic: p.topic, book: cp.book, checkpoint: cp.number })
    }
  }
  return entries
}

export function selectPaper(pool, profile, { random = Math.random, foundationOnly = false } = {}) {
  const used = new Set(), topics = new Map(), chapters = new Map()
  const picked = []
  for (const level of profile) {
    // Variants whose difficulty is only inherited are deliberately not used.
    // Their lazy-loading state must not change a paper's difficulty or pool.
    let candidates = pool.filter(e => e.p.calibration.level === level && !used.has(e.p.calibration.id)
      && e.p.calibration.scope !== 'extension' && (!foundationOnly || (e.book === 'prealgebra' && !e.checkpoint)))
    if (!candidates.length) throw new Error(`No unused calibrated problem at level ${level}`)
    const cost = e => (topics.get(e.topic) ?? 0) * 4 + (chapters.get(`${e.book}/${e.chapter ?? 'cp'}`) ?? 0)
    const min = Math.min(...candidates.map(cost))
    candidates = candidates.filter(e => cost(e) === min)
    const entry = candidates[Math.min(candidates.length - 1, Math.floor(random() * candidates.length))]
    used.add(entry.p.calibration.id)
    topics.set(entry.topic, (topics.get(entry.topic) ?? 0) + 1)
    const key = `${entry.book}/${entry.chapter ?? 'cp'}`
    chapters.set(key, (chapters.get(key) ?? 0) + 1)
    picked.push(entry.p)
  }
  return picked
}
