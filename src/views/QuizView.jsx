import { useEffect, useRef, useState } from 'react'
import { saveResult, starsFor, getRound, bumpRound } from '../lib/storage.js'
import { versionCount, versionSet } from '../lib/variants.js'
import { M } from '../lib/math.jsx'
import { BackLink, ProgressRing, StarBar, Confetti } from '../components/ui.jsx'
import { Check, Cross, Bulb, ArrowRight } from '../components/icons.jsx'
import { Fig } from '../components/Fig.jsx'

const END_MESSAGES = {
  3: 'Outstanding! You have mastered this one.',
  2: 'Great work! One more push for three stars.',
  1: 'Good start! Read the solutions, then try again.',
  0: 'Every mathematician starts somewhere. Revisit the lesson and come back — you have got this!',
}

function Results({ correct, total, storageId, onRetry, backHref, isChallenge, freshNext }) {
  const pct = Math.round((correct / total) * 100)
  const stars = starsFor(pct)
  useEffect(() => {
    saveResult(storageId, correct, total)
    bumpRound(storageId)
  }, [storageId, correct, total])
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
          Back to chapter
        </a>
      </div>
      {isChallenge && stars === 3 && <p className="results-extra">Chapter conquered. On to the next adventure!</p>}
    </div>
  )
}

export default function QuizView({ title, subtitle, problems: base, storageId, backHref, learnHref, isChallenge }) {
  const [round, setRound] = useState(() => getRound(storageId))
  const [idx, setIdx] = useState(0)
  const [picked, setPicked] = useState(null)
  const [correctCount, setCorrectCount] = useState(0)
  const [done, setDone] = useState(false)
  const versions = versionCount(base)
  // A chapter's variations arrive asynchronously, so the version set can change
  // under us. Swapping problems is fine before the first answer and jarring
  // after it, so once a run is under way we hold on to what we handed out.
  const held = useRef(null)
  const started = idx > 0 || picked !== null
  if (!started || !held.current) held.current = versionSet(base, round)
  const problems = held.current
  const total = problems.length
  const problem = problems[idx]

  function pick(i) {
    if (picked !== null) return
    setPicked(i)
    if (i === problem.answer) setCorrectCount((c) => c + 1)
  }

  function next() {
    if (idx + 1 < total) {
      setIdx(idx + 1)
      setPicked(null)
    } else {
      setDone(true)
    }
  }

  function retry() {
    held.current = null
    setRound(getRound(storageId))
    setIdx(0)
    setPicked(null)
    setCorrectCount(0)
    setDone(false)
  }

  const isCorrect = picked !== null && picked === problem.answer

  return (
    <main className="page page-narrow">
      <div className="quiz-top">
        <BackLink href={backHref}>Back to chapter</BackLink>
        <div className="quiz-title">
          <p className="eyebrow">{subtitle}</p>
          <h1>{title}</h1>
        </div>
        <div
          className="quiz-progress"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={total}
          aria-valuenow={done ? total : idx + (picked !== null ? 1 : 0)}
          aria-label="Quiz progress"
        >
          {problems.map((_, i) => (
            <span
              key={i}
              className={
                'seg' + (i < idx || done ? ' seg-done' : i === idx && picked !== null ? ' seg-done' : i === idx ? ' seg-now' : '')
              }
            />
          ))}
        </div>
      </div>

      {done ? (
        <Results
          correct={correctCount}
          total={total}
          storageId={storageId}
          onRetry={retry}
          backHref={backHref}
          isChallenge={isChallenge}
          freshNext={versions > 1}
        />
      ) : (
        <div className="q-card" key={idx}>
          <div className="q-chips">
            <span className="chip">
              Question {idx + 1} of {total}
            </span>
            {versions > 1 && (
              <span className="chip chip-quiet" title="Each attempt serves a different set of numbers">
                Version {(round % versions) + 1} of {versions}
              </span>
            )}
          </div>
          <h2 className="q-text">
            <M>{problem.q}</M>
          </h2>
          {problem.fig && <Fig fig={problem.fig} />}
          <div className="choices">
            {problem.choices.map((choice, i) => {
              let cls = 'choice'
              if (picked !== null) {
                if (i === problem.answer) cls += ' is-correct'
                else if (i === picked) cls += ' is-wrong'
                else cls += ' is-dim'
              }
              return (
                <button key={i} className={cls} onClick={() => pick(i)} disabled={picked !== null}>
                  <span className="choice-letter">{'ABCD'[i]}</span>
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
          </div>

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
