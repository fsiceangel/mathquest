import { useState } from 'react'
import { M } from '../lib/math.jsx'
import { BackLink } from '../components/ui.jsx'
import { Printer } from '../components/icons.jsx'
import { Fig } from '../components/Fig.jsx'

export default function WorksheetView({ book, chapter }) {
  const [showKey, setShowKey] = useState(false)
  return (
    <main className="page page-narrow">
      <div className="ws-controls no-print">
        <BackLink href={`#/book/${book.id}/ch/${chapter.number}`}>
          Chapter {chapter.number}: {chapter.title}
        </BackLink>
        <header className="page-head">
          <p className="eyebrow">Printable worksheet</p>
          <h1>
            Chapter {chapter.number}: {chapter.title}
          </h1>
          <p className="lede">
            Print it, grab a pencil, and show your work on paper — real mathematicians write things down!
          </p>
        </header>
        <div className="ws-toolbar">
          <label className="toggle">
            <input type="checkbox" checked={showKey} onChange={(e) => setShowKey(e.target.checked)} />
            <span>Show answer key (prints on its own page)</span>
          </label>
          <button className="btn btn-accent btn-lg" onClick={() => window.print()}>
            <Printer size={18} />
            Print
          </button>
        </div>
      </div>

      <div className="sheet">
        <header className="sheet-head">
          <div>
            <p className="sheet-brand">MathQuest</p>
            <h2>
              {book.title} — Chapter {chapter.number}: {chapter.title}
            </h2>
          </div>
          <p className="sheet-namedate">
            Name ______________________ &nbsp; Date ____________
          </p>
        </header>
        <ol className="ws-problems">
          {chapter.worksheet.map((p, i) => (
            <li key={i} className="ws-problem">
              <p className="ws-q">
                <M>{p.q}</M>
              </p>
              {p.fig && <Fig fig={p.fig} />}
              <div className="ws-space" />
              <p className="ws-answer-line">Answer: ______________</p>
            </li>
          ))}
        </ol>
      </div>

      {showKey && (
        <div className="sheet sheet-key">
          <header className="sheet-head">
            <div>
              <p className="sheet-brand">MathQuest · Answer Key</p>
              <h2>
                {book.title} — Chapter {chapter.number}: {chapter.title}
              </h2>
            </div>
          </header>
          <ol className="key-list">
            {chapter.worksheet.map((p, i) => (
              <li key={i}>
                <p className="key-answer">
                  <M>{p.answer}</M>
                </p>
                <p className="key-solution">
                  <M>{p.solution}</M>
                </p>
              </li>
            ))}
          </ol>
        </div>
      )}
    </main>
  )
}
