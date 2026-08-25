import { useEffect, useMemo, useRef, useState } from 'react'
import { M } from '../lib/math.jsx'
import { Fig } from '../components/Fig.jsx'
import { BackLink, Confetti, ProgressRing } from '../components/ui.jsx'
import { ArrowLeft, ArrowRight, Bulb, Check, Clock, Cross, Flag } from '../components/icons.jsx'
import { saveResult, getResult } from '../lib/storage.js'

const LETTERS = 'ABCDE'

// Kid-facing ranks. The bar is deliberately generous at the bottom and steep at
// the top: finishing at all deserves something, and a clean sweep should feel
// rare.
const RANKS = [
  { min: 0.92, name: 'Grandmaster', note: 'Almost nothing got past you.' },
  { min: 0.76, name: 'Champion', note: 'That is contest-level work.' },
  { min: 0.6, name: 'Duelist', note: 'Strong round. The last few are meant to be hard.' },
  { min: 0.4, name: 'Squire', note: 'Solid. Read the solutions below and run it again.' },
  { min: 0, name: 'Challenger', note: 'You stepped into the arena — that is the hard part.' },
]

function rankFor(frac) {
  return RANKS.find((r) => frac >= r.min)
}

function clockText(seconds) {
  const s = Math.max(0, seconds)
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`
}

function Timer({ left, total }) {
  const low = left <= 60
  return (
    <div className={'arena-timer' + (low ? ' is-low' : '')} role="timer" aria-live="off">
      <Clock size={18} />
      <span className="arena-timer-text">{clockText(left)}</span>
      <span className="arena-timer-bar">
        <span style={{ width: `${(left / total) * 100}%` }} />
      </span>
    </div>
  )
}

function Review({ problems, answers, onRestart, backHref }) {
  const correct = problems.filter((p, i) => answers[i] === p.answer).length
  return (
    <div className="arena-review">
      <ol className="arena-review-list">
        {problems.map((p, i) => {
          const picked = answers[i]
          const ok = picked === p.answer
          return (
            <li key={i} className={'arena-review-item ' + (picked == null ? 'is-blank' : ok ? 'is-ok' : 'is-no')}>
              <div className="arena-review-head">
                <span className="arena-review-num">{i + 1}</span>
                <span className="arena-review-verdict">
                  {picked == null ? 'Left blank' : ok ? 'Correct' : `You chose ${LETTERS[picked]}`}
                </span>
                <span className="arena-review-key">
                  Answer {LETTERS[p.answer]}: <M>{p.choices[p.answer]}</M>
                </span>
              </div>
              <p className="arena-review-q">
                <M>{p.q}</M>
              </p>
              {p.fig && <Fig fig={p.fig} />}
              <div className="solution">
                <span className="solution-label">
                  <Bulb size={16} /> Solution
                </span>
                <p>
                  <M>{p.solution}</M>
                </p>
              </div>
            </li>
          )
        })}
      </ol>
      <div className="results-actions">
        <button className="btn btn-accent btn-lg" onClick={onRestart}>
          Run it again
        </button>
        <a className="btn btn-ghost btn-lg" href={backHref}>
          Back to the Arena
        </a>
      </div>
      <p className="arena-review-foot">{correct} of {problems.length} correct.</p>
    </div>
  )
}

export default function ArenaRun({ title, subtitle, problems, minutes, storageId, backHref, onRestart }) {
  const totalSeconds = minutes * 60
  const [idx, setIdx] = useState(0)
  const [answers, setAnswers] = useState(() => new Array(problems.length).fill(null))
  const [flags, setFlags] = useState(() => new Set())
  const [left, setLeft] = useState(totalSeconds)
  const [done, setDone] = useState(false)
  const [confirming, setConfirming] = useState(false)
  const doneRef = useRef(false)
  const best = useMemo(() => getResult(storageId), [storageId])

  useEffect(() => {
    if (done) return
    const t = setInterval(() => setLeft((s) => Math.max(0, s - 1)), 1000)
    return () => clearInterval(t)
  }, [done])

  useEffect(() => {
    if (left === 0) finish()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [left])

  function finish() {
    if (doneRef.current) return
    doneRef.current = true
    setDone(true)
  }

  const problem = problems[idx]
  const answeredCount = answers.filter((a) => a !== null).length
  const correct = answers.filter((a, i) => a === problems[i].answer).length
  const used = totalSeconds - left

  useEffect(() => {
    if (done) saveResult(storageId, correct, problems.length)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [done])

  function choose(i) {
    setAnswers((prev) => {
      const next = prev.slice()
      next[idx] = prev[idx] === i ? null : i
      return next
    })
  }

  function toggleFlag() {
    setFlags((prev) => {
      const next = new Set(prev)
      if (next.has(idx)) next.delete(idx)
      else next.add(idx)
      return next
    })
  }

  function go(delta) {
    setIdx((i) => Math.min(problems.length - 1, Math.max(0, i + delta)))
  }

  useEffect(() => {
    if (done) return
    function onKey(e) {
      if (e.target.tagName === 'BUTTON' && e.key === ' ') return
      const letter = LETTERS.indexOf(e.key.toUpperCase())
      if (letter >= 0 && letter < problem.choices.length) {
        choose(letter)
        e.preventDefault()
      } else if (e.key === 'ArrowRight') go(1)
      else if (e.key === 'ArrowLeft') go(-1)
      else if (e.key.toLowerCase() === 'f') toggleFlag()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idx, done, problem])

  if (done) {
    const frac = correct / problems.length
    const rank = rankFor(frac)
    const pct = Math.round(frac * 100)
    const beatBest = best && pct > best.pct
    return (
      <main className="page page-narrow">
        <div className="arena-result">
          {frac >= 0.6 && <Confetti />}
          <p className="eyebrow">{subtitle}</p>
          <h1>{title}</h1>
          <ProgressRing pct={pct}>
            <strong>
              {correct}/{problems.length}
            </strong>
            <span>{pct}%</span>
          </ProgressRing>
          <p className="arena-rank">{rank.name}</p>
          <p className="results-msg">{rank.note}</p>
          <ul className="arena-stats">
            <li>
              <span>Time used</span>
              <strong>{clockText(used)}</strong>
            </li>
            <li>
              <span>Answered</span>
              <strong>
                {answeredCount}/{problems.length}
              </strong>
            </li>
            <li>
              <span>Personal best</span>
              <strong>{best ? `${Math.max(best.pct, pct)}%` : `${pct}%`}</strong>
            </li>
          </ul>
          {beatBest && <p className="arena-pb">New personal best!</p>}
        </div>
        <h2 className="list-heading">Every problem, worked out</h2>
        <Review problems={problems} answers={answers} onRestart={onRestart} backHref={backHref} />
      </main>
    )
  }

  return (
    <main className="page page-narrow arena-page">
      <div className="arena-top">
        <BackLink href={backHref}>Leave the arena</BackLink>
        <Timer left={left} total={totalSeconds} />
      </div>
      <div className="arena-nav" role="group" aria-label="Jump to a problem">
        {problems.map((_, i) => (
          <button
            key={i}
            className={
              'arena-dot' +
              (i === idx ? ' is-now' : '') +
              (answers[i] !== null ? ' is-answered' : '') +
              (flags.has(i) ? ' is-flagged' : '')
            }
            onClick={() => setIdx(i)}
            aria-label={`Problem ${i + 1}${answers[i] !== null ? ', answered' : ''}${flags.has(i) ? ', flagged' : ''}`}
            aria-current={i === idx}
          >
            {i + 1}
          </button>
        ))}
      </div>

      <div className="q-card arena-card" key={idx}>
        <div className="q-chips">
          <span className="chip">
            Problem {idx + 1} of {problems.length}
          </span>
          <button className={'chip chip-flag' + (flags.has(idx) ? ' is-on' : '')} onClick={toggleFlag}>
            <Flag size={14} />
            {flags.has(idx) ? 'Flagged' : 'Flag for later'}
          </button>
        </div>
        <h2 className="q-text">
          <M>{problem.q}</M>
        </h2>
        {problem.fig && <Fig fig={problem.fig} />}
        <div className="choices">
          {problem.choices.map((choice, i) => (
            <button
              key={i}
              className={'choice' + (answers[idx] === i ? ' is-picked' : '')}
              onClick={() => choose(i)}
              aria-pressed={answers[idx] === i}
            >
              <span className="choice-letter">{LETTERS[i]}</span>
              <span className="choice-text">
                <M>{choice}</M>
              </span>
            </button>
          ))}
        </div>
        <div className="arena-actions">
          <button className="btn btn-ghost" onClick={() => go(-1)} disabled={idx === 0}>
            <ArrowLeft size={16} />
            Previous
          </button>
          {idx + 1 < problems.length ? (
            <button className="btn btn-accent" onClick={() => go(1)}>
              Next
              <ArrowRight size={16} />
            </button>
          ) : (
            <button className="btn btn-accent" onClick={() => setConfirming(true)}>
              Finish
              <Check size={16} />
            </button>
          )}
        </div>
      </div>

      <div className="arena-footer">
        <p>
          {answeredCount} of {problems.length} answered
          {flags.size > 0 && ` · ${flags.size} flagged`}
        </p>
        <button className="btn btn-ghost" onClick={() => setConfirming(true)}>
          Hand in my paper
        </button>
      </div>

      {confirming && (
        <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label="Hand in your paper?">
          <div className="modal">
            <h2>Hand in your paper?</h2>
            <p>
              {answeredCount === problems.length
                ? 'Everything is answered. Once you hand it in you will see the solutions.'
                : `${problems.length - answeredCount} problem${problems.length - answeredCount === 1 ? ' is' : 's are'} still blank. A blank answer scores nothing, and there is no penalty for a guess.`}
            </p>
            <div className="modal-actions">
              <button className="btn btn-ghost" onClick={() => setConfirming(false)}>
                <Cross size={16} />
                Keep working
              </button>
              <button className="btn btn-accent" onClick={finish}>
                <Check size={16} />
                Hand it in
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
