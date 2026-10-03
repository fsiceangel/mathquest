import { useEffect } from 'react'
import { saveResult, starsFor, getRound } from '../lib/storage.js'
import { useAttempt } from '../lib/use-attempt.js'
import { versionCount, versionSet } from '../lib/variants.js'
import { M } from '../lib/math.jsx'
import { BackLink, ProgressRing, StarBar, Confetti } from '../components/ui.jsx'
import { Check, Cross, Bulb, ArrowRight } from '../components/icons.jsx'
import { Fig } from '../components/Fig.jsx'
import { AnswerEntry } from '../components/AnswerEntry.jsx'
import { isCorrectAnswer } from '../lib/answer-entry.js'

const END_MESSAGES = {
  3: 'Outstanding! You have mastered this one.',
  2: 'Great work! One more push for three stars.',
  1: 'Good start! Read the solutions, then try again.',
  0: 'Every mathematician starts somewhere. Revisit the lesson and come back — you have got this!',
}

function Results({ correct, total, storageId, attemptId, advanceRound, onRetry, backHref, backLabel, isChallenge, freshNext }) {
  const pct = Math.round((correct / total) * 100)
  const stars = starsFor(pct)
  useEffect(() => {
    saveResult(storageId, correct, total, { attemptId, advanceRound })
  }, [storageId, correct, total, attemptId, advanceRound])
  return (
    <div className="results">
      {stars >= 2 && <Confetti />}
      <ProgressRing pct={pct}>
        <strong>{pct}%</strong>
        <span>
          {correct}/{total}
        </span>
      </ProgressRing>
      <StarBar stars={stars} size={30} />
      <p className="results-msg">{END_MESSAGES[stars]}</p>
      {freshNext && <p className="results-note">Try again and you will get a brand-new set of numbers.</p>}
      <div className="results-actions">
        <button className="btn btn-accent btn-lg" onClick={onRetry}>
          Try again
        </button>
        <a className="btn btn-ghost btn-lg" href={backHref}>
          {backLabel}
        </a>
      </div>
      {isChallenge && stars === 3 && <p className="results-extra">Chapter conquered. On to the next adventure!</p>}
    </div>
  )
}

export default function QuizView({ title, subtitle, problems: base, storageId, backHref, backLabel = 'Back to chapter', learnHref, isChallenge, onNewSet, rotateVersions = true }) {
  const round = getRound(storageId)
  const versions = rotateVersions ? versionCount(base) : 1
  const session = useAttempt(storageId, 'quiz', () => versionSet(base, rotateVersions ? round : 0), { round })
  const { problems, attempt, update } = session
  const idx = attempt.index, done = attempt.done
  const picked = attempt.answers[idx]
  const correctCount = problems.filter((p, i) => isCorrectAnswer(p, attempt.answers[i])).length
  const total = problems.length
  const problem = problems[idx]

  function pick(i) {
    if (picked !== null) return
    update(a => ({ ...a, answers: a.answers.map((answer, index) => index === idx ? i : answer) }))
  }

  function next() {
    if (idx + 1 < total) {
      update(a => ({ ...a, index: idx + 1 }))
    } else {
      update(a => ({ ...a, done: true }))
    }
  }

  function retry() {
    session.reset()
    if (onNewSet) onNewSet()
  }

  if (!session.ready) return <main className="page page-narrow">
    <BackLink href={backHref}>{backLabel}</BackLink>
    <p role="status">{session.error ?? 'Loading your saved practice…'}</p>
    {session.error && <button className="btn btn-accent" onClick={session.retryLoad}>Try loading again</button>}
  </main>
  const isCorrect = isCorrectAnswer(problem, picked)

  return (
    <main className="page page-narrow">
      <div className="quiz-top">
        <BackLink href={backHref}>{backLabel}</BackLink>
        <div className="quiz-title">
          <p className="eyebrow">{subtitle}</p>
          <h1>{title}</h1>
        </div>
        <div
          className="quiz-progress"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={total}
          aria-valuenow={attempt.answers.filter(answer => answer !== null).length}
          aria-label="Quiz progress"
        >
          {problems.map((_, i) => (
            <span
              key={i}
              className={
                'seg' + (attempt.answers[i] !== null ? ' seg-done' : i === idx ? ' seg-now' : '')
              }
            />
          ))}
        </div>
      </div>

      <p className="results-note" role="status">{session.saveFailed
        ? 'This browser could not save your progress. Keep this page open until you finish.'
        : session.changed ? 'This practice was updated. Your unchanged answers are saved; please revisit the changed question.'
        : 'Your answers save on this device. You can leave and come back to continue.'}</p>

      {done ? (
        <Results
          correct={correctCount}
          total={total}
          storageId={storageId}
          attemptId={attempt.token}
          advanceRound={rotateVersions}
          onRetry={retry}
          backHref={backHref}
          backLabel={backLabel}
          isChallenge={isChallenge}
          freshNext={versions > 1}
        />
      ) : (
        <div className="q-card" key={idx}>
          <div className="q-chips">
            {problem.calibration?.scope === 'extension' && <span className="chip chip-quiet">Optional extension</span>}
            <span className="chip">
              Question {idx + 1} of {total}
            </span>
            {versions > 1 && (
              <span className="chip chip-quiet" title="Each attempt serves a different set of numbers">
                Version {(attempt.round % versions) + 1} of {versions}
              </span>
            )}
          </div>
          <h2 className="q-text">
            <M>{problem.q}</M>
          </h2>
          {problem.fig && <Fig fig={problem.fig} />}
          {problem.answerEntry ? <AnswerEntry
            key={problem.calibration?.id ?? problem.id ?? `${storageId}-${idx}`}
            problem={problem}
            value={attempt.inputs?.[idx] ?? ''}
            answer={picked}
            correct={isCorrect}
            onChange={value => update(a => ({
              ...a,
              inputs: problems.map((_, i) => i === idx ? value : (a.inputs?.[i] ?? '')),
            }))}
            onSubmit={pick}
          /> : <div className="choices">
            {problem.choices.map((choice, i) => {
              let cls = 'choice'
              if (picked !== null) {
                if (i === problem.answer) cls += ' is-correct'
                else if (i === picked) cls += ' is-wrong'
                else cls += ' is-dim'
              }
              return (
                <button key={i} className={cls} onClick={() => pick(i)} disabled={picked !== null}>
                  <span className="choice-letter">{'ABCDE'[i]}</span>
                  <span className="choice-text">
                    <M>{choice}</M>
                  </span>
                  {picked !== null && i === problem.answer && <Check size={18} className="choice-mark ok" />}
                  {picked !== null && i === picked && i !== problem.answer && (
                    <Cross size={18} className="choice-mark no" />
                  )}
                </button>
              )
            })}
          </div>}

          <div aria-live="polite">
            {picked !== null && (
              <div className={`feedback ${isCorrect ? 'is-good' : 'is-retry'}`}>
                <p className="feedback-title">{isCorrect ? 'Correct — nice work!' : 'Not yet — let’s see why.'}</p>
                <div className="solution">
                  <span className="solution-label">
                    <Bulb size={16} /> Solution
                  </span>
                  <p>
                    <M>{problem.solution}</M>
                  </p>
                </div>
                <div className="feedback-actions">
                  {!isCorrect && learnHref && (
                    <a className="btn btn-ghost" href={learnHref}>
                      Review the lesson
                    </a>
                  )}
                  <button className="btn btn-accent" onClick={next} autoFocus>
                    {idx + 1 < total ? 'Next question' : 'See my results'}
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  )
}
