import { sectionAnswerEntries } from '../data/section-answer-entry.js'
import { questionFingerprint } from './attempts.js'

// Format belongs to a practice attempt. Timed AMC-style papers keep choices.
export function practiceProblems(problems, kind, saved) {
  if (!problems || kind !== 'quiz') return problems
  return problems.map((p, i) => {
    const parts = p.calibration?.id.split('/') ?? []
    const round = Number(parts.pop())
    const spec = sectionAnswerEntries[parts.join('/')]?.[round-1]
    if (!spec) return p
    // Honor answers already submitted in the previous multiple-choice release.
    // Unanswered questions use entry; a new attempt uses entry throughout.
    if (Number.isInteger(saved?.answers[i]) && saved.questions[i]?.fingerprint === questionFingerprint(p)) return p
    return { ...p, answerEntry: spec }
  })
}
