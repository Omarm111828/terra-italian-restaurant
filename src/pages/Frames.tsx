import { useState } from 'react'

const FRAMES = [
  { name: 'Desktop Homepage', w: 1440, h: 960 },
  { name: 'Tablet Homepage', w: 768, h: 1024 },
  { name: 'Mobile Homepage', w: 390, h: 844 },
]
const ZOOMS = [0.4, 0.5, 0.75, 1]

export function Frames() {
  const [zoom, setZoom] = useState(0.5)
  const src = `${window.location.pathname}?frame=1`

  return (
    <div className="min-h-[calc(100vh-56px)] bg-[#E6E1D7]">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-charcoal/10 bg-cream px-6 py-4">
        <div>
          <h1 className="font-serif text-2xl text-forest">Responsive Homepage</h1>
          <p className="t-caption text-charcoal/60">Live frames — each one is fully interactive and scrollable. Same components, three breakpoints.</p>
        </div>
        <div role="group" aria-label="Zoom" className="flex items-center gap-1 rounded-full border border-charcoal/15 bg-white p-1">
          {ZOOMS.map((z) => (
            <button
              key={z}
              type="button"
              aria-pressed={zoom === z}
              onClick={() => setZoom(z)}
              className={`h-9 rounded-full px-4 text-sm font-semibold tabular-nums transition-colors ${
                zoom === z ? 'bg-forest text-cream' : 'text-charcoal/70 hover:bg-charcoal/5'
              }`}
            >
              {Math.round(z * 100)}%
            </button>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto">
        <div className="flex w-max items-start gap-16 p-10">
          {FRAMES.map((f) => (
            <div key={f.name}>
              <p className="mb-3 flex items-baseline gap-2 text-[13px] text-charcoal/70">
                <span className="font-semibold text-charcoal">{f.name}</span>
                <span className="tabular-nums text-charcoal/50">
                  {f.w} × {f.h}
                </span>
              </p>
              <div
                className="overflow-hidden rounded-[6px] bg-cream shadow-[0_1px_2px_rgba(0,0,0,0.08),0_20px_50px_-20px_rgba(37,37,34,0.35)]"
                style={{ width: f.w * zoom, height: f.h * zoom }}
              >
                <iframe
                  title={`${f.name} preview`}
                  src={src}
                  width={f.w}
                  height={f.h}
                  style={{ transform: `scale(${zoom})`, transformOrigin: '0 0' }}
                  className="block border-0"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
