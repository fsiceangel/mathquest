import { useEffect, useState } from 'react'
import { getBook } from './data/books.js'
import { getChapterContent, loadVariants } from './data/content.js'
import { fullSync, schedulePush, getSyncConfig, getSyncStatus, onSyncChange } from './lib/sync.js'
import { Logo } from './components/icons.jsx'
import Home from './views/Home.jsx'
import BookPage from './views/BookPage.jsx'
import ChapterPage from './views/ChapterPage.jsx'
import LearnView from './views/LearnView.jsx'
import QuizView from './views/QuizView.jsx'
import WorksheetView from './views/WorksheetView.jsx'
import FamilyPage from './views/FamilyPage.jsx'
import ProgressPage from './views/ProgressPage.jsx'
import ArenaPage from './views/ArenaPage.jsx'
import { AuthoredPaper, DrawnPaper } from './views/ArenaRunner.jsx'

function useRoute() {
  const [hash, setHash] = useState(window.location.hash)
  useEffect(() => {
    const onChange = () => {
      setHash(window.location.hash)
      window.scrollTo(0, 0)
    }
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])
  return hash.replace(/^#\/?/, '').split('/').filter(Boolean)
}

function resolve(route) {
  if (route[0] === 'arena') {
    if (route[1] === 'paper') return { view: <AuthoredPaper key={route[2]} paperId={route[2]} />, accent: 'amber' }
    if (route[1]) return { view: <DrawnPaper key={route[1]} modeId={route[1]} />, accent: 'amber' }
    return { view: <ArenaPage />, accent: 'amber' }
  }
  if (route[0] === 'family') return { view: <FamilyPage />, accent: 'coral' }
  if (route[0] === 'progress') return { view: <ProgressPage />, accent: 'coral' }
  if (route[0] !== 'book') return { view: <Home />, accent: 'coral' }
  const book = getBook(route[1])
  if (!book) return { view: <Home />, accent: 'coral' }
  const accent = book.accent

  if (route[2] !== 'ch') return { view: <BookPage book={book} />, accent }
  const number = Number(route[3])
  const meta = book.chapters.find((c) => c.number === number)
  const content = getChapterContent(book.id, number)
  if (!meta || !content) return { view: <BookPage book={book} />, accent }

  const chapterHref = `#/book/${book.id}/ch/${number}`
  switch (route[4]) {
    case 'learn': {
      const section = content.sections.find((s) => s.id === route[5])
      if (!section) break
      return { view: <LearnView book={book} chapter={content} section={section} />, accent }
    }
    case 'practice': {
      const section = content.sections.find((s) => s.id === route[5])
      if (!section) break
      return {
        view: (
          <QuizView
            key={`${book.id}/${number}/${section.id}`}
            title={`${section.id} ${section.title}`}
            subtitle={`${book.title} · Chapter ${number}`}
            problems={section.problems}
            storageId={`${book.id}/${number}/${section.id}`}
            backHref={chapterHref}
            learnHref={`${chapterHref}/learn/${section.id}`}
          />
        ),
        accent,
      }
    }
    case 'challenge':
      return {
        view: (
          <QuizView
            key={`${book.id}/${number}/challenge`}
            title="Chapter Challenge"
            subtitle={`${book.title} · Chapter ${number}: ${content.title}`}
            problems={content.challenge}
            storageId={`${book.id}/${number}/challenge`}
            backHref={chapterHref}
            isChallenge
          />
        ),
        accent,
      }
    case 'worksheet':
      return { view: <WorksheetView book={book} chapter={content} />, accent }
  }
  return { view: <ChapterPage book={book} meta={meta} content={content} />, accent }
}

// Pull in a chapter's problem variations as soon as the student opens the
// chapter, so the rotation is ready by the time they finish a quiz. Attaching
// mutates the chapter object, hence the re-render tick.
function useVariants(bookId, chapterNumber) {
  const [, tick] = useState(0)
  useEffect(() => {
    if (!bookId || !chapterNumber) return
    let alive = true
    loadVariants(bookId, chapterNumber).then((n) => {
      if (alive && n) tick((t) => t + 1)
    })
    return () => {
      alive = false
    }
  }, [bookId, chapterNumber])
}

export default function App() {
  const route = useRoute()
  useVariants(route[0] === 'book' ? route[1] : null, route[2] === 'ch' ? Number(route[3]) : null)
  const { view, accent } = resolve(route)
  const [syncStatus, setSyncStatus] = useState(getSyncStatus)
  const [, setSyncTick] = useState(0)

  useEffect(() => {
    const offStatus = onSyncChange(setSyncStatus)
    const onProgress = () => schedulePush()
    const onSynced = () => setSyncTick((t) => t + 1)
    window.addEventListener('mq-progress', onProgress)
    window.addEventListener('mq-synced', onSynced)
    if (getSyncConfig()) fullSync()
    return () => {
      offStatus()
      window.removeEventListener('mq-progress', onProgress)
      window.removeEventListener('mq-synced', onSynced)
    }
  }, [])

  const cfg = getSyncConfig()
  return (
    <div className={`app accent-${accent}`}>
      <header className="app-header no-print">
        <a className="brand" href="#/">
          <Logo />
          <span>MathQuest</span>
        </a>
        <nav className="header-nav">
          <a className="header-link" href="#/arena">
            Arena
          </a>
          <a className="header-link" href="#/progress">
            Progress
          </a>
          <a className={`sync-chip sync-${cfg ? syncStatus : 'off'}`} href="#/family" title="Family Sync">
            <span className="sync-dot" aria-hidden="true" />
            {cfg ? cfg.profileName : 'Sync off'}
          </a>
        </nav>
      </header>
      {view}
      <footer className="app-footer no-print">
        <p>Made with love for one very smart kid. Topics follow the Art of Problem Solving books — all problems are original.</p>
      </footer>
    </div>
  )
}
