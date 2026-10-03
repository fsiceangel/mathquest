import { useId, useState } from 'react'
import { gradeEntry } from '../lib/answer-entry.js'
import { M } from '../lib/math.jsx'

export function AnswerEntry({ problem, value, answer, onChange, onSubmit, correct }) {
  const id = useId()
  const [error, setError] = useState('')
  const answered = answer !== null
  const spec = problem.answerEntry
  const hint = spec.form === 'fraction'
    ? (spec.reduced ? 'Enter a fraction in simplest form, or an integer if it simplifies to one.' : 'Enter a fraction, such as 3/4, or an integer if appropriate.')
    : spec.kind === 'integer'
    ? 'Enter an integer, such as 12 or -3.'
    : 'Enter a number, fraction, or decimal, such as 3, 1/2, or 0.5.'

  function submit(event) {
    event.preventDefault()
    if (answered) return
    const result = gradeEntry(value, spec)
    if (!result.valid) {
      setError(result.message || 'Please check the format of your answer.')
      return
    }
    setError('')
    onSubmit({ type: 'input', value })
  }

  return <form className="answer-entry" onSubmit={submit} noValidate>
    <label className="answer-entry-label" htmlFor={id}>Your answer</label>
    <p className="answer-entry-hint" id={`${id}-hint`}>
      {hint}{spec.unit && ' The unit is already shown; enter only the number.'}
    </p>
    <div className="answer-entry-row">
      {spec.label && <span className="answer-entry-unit">{spec.label} =</span>}
      <input
        id={id}
        type="text"
        maxLength={80}
        value={answered && answer?.type === 'input' ? answer.value : value}
        onChange={event => { setError(''); onChange(event.target.value) }}
        disabled={answered}
        autoComplete="off"
        spellCheck={false}
        aria-describedby={`${id}-hint${error ? ` ${id}-error` : ''}`}
        aria-invalid={error ? true : undefined}
      />
      {spec.unit && <span className="answer-entry-unit">{spec.unit}</span>}
      {!answered && <button className="btn btn-accent" type="submit">Check answer</button>}
    </div>
    <div aria-live="polite">
      {error && <p className="answer-entry-error" id={`${id}-error`}>
        {error} This wasn't counted as an answer.
      </p>}
    </div>
    {answered && !correct && <p className="answer-entry-correct">
      Correct answer: <M>{problem.choices[problem.answer]}</M>
    </p>}
  </form>
}
