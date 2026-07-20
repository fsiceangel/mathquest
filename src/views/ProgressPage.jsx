import { useEffect, useState } from 'react'
import { books } from '../data/books.js'
import { getChapterContent, isChapterAvailable } from '../data/content.js'
import { getResult, starsFor } from '../lib/storage.js'
import { getSyncConfig, fetchSummary } from '../lib/sync.js'
import { BackLink, StarBar } from '../components/ui.jsx'
import { Trophy } from '../components/icons.jsx'

function describeItem(itemId) {
  const [bookId, chapterNum, sectionId] = itemId.split('/')
  const book = books.find((b) => b.id === bookId)
  const content = book && getChapterContent(bookId, Number(chapterNum))
  if (!content) return itemId
  if (sectionId === 'challenge') return `Ch ${chapterNum} Challenge — ${content.title}`
  const section = content.sections.find((s) => s.id === sectionId)
  return section ? `${sectionId} ${section.title}` : itemId
}

function chapterProgress(bookId, chapter) {
  const content = getChapterContent(bookId, chapter.number)
  if (!content) return null
  const ids = [
    ...content.sections.map((s) => `${bookId}/${chapter.number}/${s.id}`),
    `${bookId}/${chapter.number}/challenge`,
  ]
  const earned = ids.reduce((sum, id) => sum + starsFor(getResult(id)?.pct), 0)
  const done = content.sections.filter(
    (s) => starsFor(getResult(`${bookId}/${chapter.number}/${s.id}`)?.pct) >= 1,
  ).length
  return { earned, possible: ids.length * 3, done, sections: content.sections.length }
}

export default function ProgressPage() {
  const cfg = getSyncConfig()
  const [recent, setRecent] = useState(null)
  useEffect(() => {
    let alive = true
    if (cfg) {
      fetchSummary(20)
        .then((s) => alive && setRecent(s?.attempts ?? []))
        .catch(() => alive && setRecent([]))
    }
    return () => {
      alive = false
    }
  }, [])

  return (
    <main className="page">
      <BackLink href="#/">Home</BackLink>
      <header className="page-head">
        <p className="eyebrow">Progress</p>
        <h1>{cfg ? `${cfg.profileName}’s journey` : 'My journey'}</h1>
      </header>

      {books
        .filter((book) => book.chapters.some((c) => isChapterAvailable(book.id, c.number)))
        .map((book) => {
          const rows = book.chapters
            .map((c) => ({ chapter: c, p: chapterProgress(book.id, c) }))
            .filter((r) => r.p)
          const totalEarned = rows.reduce((s, r) => s + r.p.earned, 0)
          const totalPossible = rows.reduce((s, r) => s + r.p.possible, 0)
          return (
            <section key={book.id} className={`progress-book accent-${book.accent}`}>
              <div className="progress-book-head">
                <h2>{book.title}</h2>
                <span className="progress-total">
                  <Trophy size={18} /> {totalEarned} / {totalPossible} stars
                </span>
              </div>
              <div className="progress-grid">
                {rows.map(({ chapter, p }) => (
                  <a key={chapter.number} className="progress-cell" href={`#/book/${book.id}/ch/${chapter.number}`}>
                    <span className="progress-cell-num">{chapter.number}</span>
                    <span className="progress-cell-title">{chapter.title}</span>
                    <span className="progress-cell-meta">
                      {p.done}/{p.sections} sections · ★ {p.earned}/{p.possible}
                    </span>
                  </a>
                ))}
              </div>
            </section>
          )
        })}

      <section className="progress-recent">
        <h2 className="list-heading">Recent practice</h2>
        {!cfg ? (
          <p className="progress-note">
            Connect <a href="#/family">Family Sync</a> to see practice history from every device here.
          </p>
        ) : recent === null ? (
          <p className="progress-note">Loading…</p>
        ) : recent.length === 0 ? (
          <p className="progress-note">No synced practice yet — finish a quiz and it will show up here.</p>
        ) : (
          <ol className="recent-list">
            {recent.map((a, i) => (
              <li key={i} className="recent-row">
                <StarBar stars={starsFor(a.pct)} size={14} />
                <span className="recent-what">{describeItem(a.item_id)}</span>
                <span className="recent-score">
                  {a.correct}/{a.total}
                </span>
                <span className="recent-when">
                  {new Date(a.at).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
                </span>
              </li>
            ))}
          </ol>
        )}
      </section>
    </main>
  )
}
