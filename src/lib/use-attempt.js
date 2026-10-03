import { useEffect, useRef, useState } from 'react'
import { getAttempt, newAttempt, reconcileAttempt, saveAttempt, clearAttempt } from './attempts.js'
import { availableSavedProblems, loadSavedProblems } from '../data/resume.js'
import { practiceProblems } from './practice-format.js'

export function useAttempt(storageId, kind, makeProblems, options = {}) {
  const [snapshot, setSnapshot] = useState(() => {
    const attempt = getAttempt(storageId, kind)
    if (!attempt) return { attempt: null, problems: null }
    const problems = practiceProblems(availableSavedProblems(attempt.questions.map(q => q.id)), kind, attempt)
    const restored = problems && reconcileAttempt(attempt, problems)
    return restored ? { ...restored, problems } : { attempt, problems: null, restoring: true }
  })
  const [saveFailed, setSaveFailed] = useState(false)
  const [retryLoad, setRetryLoad] = useState(0)
  useEffect(() => {
    if (!snapshot.restoring) return
    let alive = true
    loadSavedProblems(snapshot.attempt.questions.map(q => q.id)).then(loaded => {
      if (!alive) return
      const problems = practiceProblems(loaded, kind, snapshot.attempt)
      const restored = reconcileAttempt(snapshot.attempt, problems)
      if (restored) setSnapshot({ ...restored, problems })
      else setSnapshot(prev => ({ ...prev, error: 'Your saved set could not be loaded. Your answers are still saved; try loading it again.' }))
    }).catch(() => {
      if (alive) setSnapshot(prev => ({ ...prev, error: 'Your saved set could not be loaded. Your answers are still saved; try loading it again.' }))
    })
    return () => { alive = false }
  }, [storageId, snapshot.restoring, retryLoad])

  const problems = snapshot.problems ?? (snapshot.restoring ? [] : practiceProblems(makeProblems(), kind))
  const attempt = snapshot.attempt ?? { index: 0, answers: problems.map(() => null), done: false, flags: [], left: options.seconds ?? 0, round: options.round ?? 0 }
  const current = useRef(null)
  current.current = { snapshot, problems, options }

  // Persist in the event handler, before navigation can unmount the component.
  // A state/effect-only save can lose the last click on a quick departure.
  function update(change) {
    const active = current.current
    const existing = active.snapshot.attempt ?? newAttempt(kind, active.problems, active.options)
    const next = change(existing)
    const saved = saveAttempt(storageId, next)
    const value = { ...active.snapshot, attempt: next, problems: active.problems }
    current.current = { ...active, snapshot: value }
    setSaveFailed(!saved)
    setSnapshot(value)
    return next
  }

  function reset() {
    const saved = clearAttempt(storageId)
    setSaveFailed(!saved)
    setSnapshot({ attempt: null, problems: null })
  }

  return { problems, attempt, ready: !snapshot.restoring, error: snapshot.error,
    changed: snapshot.changed, saveFailed, update, reset, retryLoad: () => setRetryLoad(n => n + 1) }
}
