import { useEffect, useState } from 'react'
import { BookingProvider } from './components/Booking'
import { Icon } from './components/Icon'
import { DesignSystem } from './pages/DesignSystem'
import { Frames } from './pages/Frames'
import { Home } from './pages/Home'
import { MenuComponent } from './pages/MenuComponent'

type View = 'home' | 'frames' | 'system' | 'menu-component'

const VIEWS: { id: View; label: string; n: string }[] = [
  { id: 'home', label: 'Desktop Homepage', n: '01' },
  { id: 'frames', label: 'Tablet & Mobile Frames', n: '02' },
  { id: 'system', label: 'UI Components & Design System', n: '03' },
  { id: 'menu-component', label: 'Menu Section Component', n: '04' },
]

function readView(): View {
  const v = new URLSearchParams(window.location.search).get('view') as View | null
  return v && VIEWS.some((x) => x.id === v) ? v : 'home'
}

function useView() {
  const [view, setView] = useState<View>(readView)
  useEffect(() => {
    const onPop = () => setView(readView())
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])
  const go = (v: View) => {
    const url = v === 'home' ? window.location.pathname : `${window.location.pathname}?view=${v}`
    window.history.pushState(null, '', url)
    setView(v)
    window.scrollTo(0, 0)
  }
  return [view, go] as const
}

/* Top bar for the design-file views (not part of the restaurant site). */
function FilesBar({ view, go }: { view: View; go: (v: View) => void }) {
  return (
    <div className="sticky top-0 z-50 border-b border-cream/10 bg-charcoal text-cream">
      <div className="no-scrollbar flex h-14 items-center gap-6 overflow-x-auto px-6">
        <span className="flex shrink-0 items-center gap-2 font-serif tracking-[0.14em]">
          <Icon name="grid" size={16} className="text-tomato" /> TERRA <span className="font-sans text-xs tracking-normal text-cream/50">/ Design files</span>
        </span>
        <nav aria-label="Design files" className="flex gap-1">
          {VIEWS.map((v) => (
            <button
              key={v.id}
              type="button"
              aria-current={view === v.id ? 'page' : undefined}
              onClick={() => go(v.id)}
              className={`h-9 shrink-0 rounded-full px-4 text-[13px] font-medium transition-colors ${
                view === v.id ? 'bg-cream text-charcoal' : 'text-cream/70 hover:bg-cream/10 hover:text-cream'
              }`}
            >
              <span className="mr-1.5 tabular-nums opacity-50">{v.n}</span>
              {v.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  )
}

/* Floating launcher on the homepage to reach the design files. */
function FilesLauncher({ go }: { go: (v: View) => void }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="fixed bottom-5 left-5 z-30">
      {open && (
        <div id="files-menu" className="mb-2 w-72 overflow-hidden rounded-panel bg-charcoal p-2 text-cream shadow-2xl">
          {VIEWS.slice(1).map((v) => (
            <button
              key={v.id}
              type="button"
              onClick={() => go(v.id)}
              className="flex min-h-11 w-full items-center gap-3 rounded-card px-3 text-left text-sm transition-colors hover:bg-cream/10"
            >
              <span className="tabular-nums text-cream/45">{v.n}</span>
              {v.label}
            </button>
          ))}
        </div>
      )}
      <button
        type="button"
        aria-expanded={open}
        aria-controls="files-menu"
        onClick={() => setOpen((o) => !o)}
        className="inline-flex h-11 items-center gap-2 rounded-full bg-charcoal px-4 text-[13px] font-semibold text-cream shadow-lg transition-colors hover:bg-forest"
      >
        <Icon name={open ? 'close' : 'grid'} size={16} />
        Design files
      </button>
    </div>
  )
}

export default function App() {
  const [view, go] = useView()
  const inFrame = new URLSearchParams(window.location.search).has('frame')

  useEffect(() => {
    const titles: Record<View, string> = {
      home: 'TERRA — Italian Kitchen',
      frames: 'Responsive Frames · TERRA',
      system: 'Design System · TERRA',
      'menu-component': 'Menu Component · TERRA',
    }
    document.title = titles[view]
  }, [view])

  return (
    <BookingProvider>
      {view !== 'home' && !inFrame && <FilesBar view={view} go={go} />}
      {view === 'home' && <Home />}
      {view === 'frames' && <Frames />}
      {view === 'system' && <DesignSystem />}
      {view === 'menu-component' && <MenuComponent />}
      {view === 'home' && !inFrame && <FilesLauncher go={go} />}
    </BookingProvider>
  )
}
