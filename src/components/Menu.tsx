import { useId, useRef, useState, type KeyboardEvent } from 'react'
import { img, MENU, TAG_LABELS, type MenuItem } from '../data'
import { Eyebrow } from './ui'

/* ------------------------------------------------------------------
   Menu Section Component
   ├─ MenuTab        default · hover · active · focus
   ├─ MenuItemRow    default · with dietary tags · featured
   └─ MenuSection    tablist + panel (image + item list)
------------------------------------------------------------------- */

export type TabState = 'default' | 'hover' | 'active' | 'focus'

export function menuTabClass(state: TabState | 'interactive', selected = false) {
  const base =
    'inline-flex h-11 shrink-0 items-center rounded-full border px-5 text-[15px] font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-cream'
  if (state === 'interactive')
    return `${base} ${selected ? 'border-cream bg-cream text-forest' : 'border-cream/20 text-cream/75 hover:border-cream/60 hover:text-cream'}`
  const map: Record<TabState, string> = {
    default: 'border-cream/20 text-cream/75',
    hover: 'border-cream/60 text-cream',
    active: 'border-cream bg-cream text-forest',
    focus: 'border-cream/20 text-cream/75 outline-2 outline-offset-[3px] outline-cream',
  }
  return `${base} ${map[state]}`
}

export function DietTag({ tag }: { tag: string }) {
  return (
    <abbr
      title={TAG_LABELS[tag]}
      className="inline-flex h-6 items-center rounded-full border border-cream/30 px-2 text-[11px] font-bold tracking-[0.08em] text-cream/80 no-underline"
    >
      {tag}
    </abbr>
  )
}

export function MenuItemRow({ item }: { item: MenuItem }) {
  return (
    <li className="py-6 first:pt-0 last:pb-0">
      <div className="flex items-baseline gap-4">
        <h4 className="t-h4 text-cream">
          {item.name}
          {item.featured && (
            <span className="ml-3 inline-flex translate-y-[-3px] items-center rounded-full bg-tomato px-2.5 py-1 align-middle font-sans text-[10px] font-bold uppercase tracking-[0.14em] text-white">
              Signature
            </span>
          )}
        </h4>
        <span aria-hidden="true" className="mb-1.5 hidden min-w-8 flex-1 border-b border-dotted border-cream/30 sm:block" />
        <span className="ml-auto font-serif text-xl tabular-nums text-cream sm:ml-0">
          <span className="sr-only">Price: </span>${item.price}
        </span>
      </div>
      <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-2">
        <p className="t-small text-cream/70">{item.description}</p>
        {item.tags?.map((t) => <DietTag key={t} tag={t} />)}
      </div>
    </li>
  )
}

export function MenuSection({ headingLevel = 'h2' }: { headingLevel?: 'h2' | 'h3' }) {
  const [active, setActive] = useState(MENU[1].id)
  const tabs = useRef<(HTMLButtonElement | null)[]>([])
  const uid = useId()
  const cat = MENU.find((c) => c.id === active)!
  const Heading = headingLevel

  const onKeyDown = (e: KeyboardEvent, i: number) => {
    const last = MENU.length - 1
    const next = e.key === 'ArrowRight' ? (i === last ? 0 : i + 1) : e.key === 'ArrowLeft' ? (i === 0 ? last : i - 1) : e.key === 'Home' ? 0 : e.key === 'End' ? last : null
    if (next === null) return
    e.preventDefault()
    setActive(MENU[next].id)
    tabs.current[next]?.focus()
    tabs.current[next]?.scrollIntoView({ block: 'nearest', inline: 'nearest' })
  }

  return (
    <div className="text-cream">
      <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-6">
        <div className="lg:col-span-6">
          <Eyebrow tone="light">The menu</Eyebrow>
          <Heading id={`${uid}-title`} className="t-h1 mt-6">
            Il Menù, <em className="font-[300] italic">della casa.</em>
          </Heading>
        </div>
        <div className="max-w-md lg:col-span-4 lg:col-start-9">
          <p className="t-body text-cream/75">Short, seasonal, and cooked to order. Ask your server about tonight’s specials from the market.</p>
          <p className="t-caption mt-4 flex flex-wrap gap-x-4 gap-y-1 text-cream/60">
            {Object.entries(TAG_LABELS).map(([k, v]) => (
              <span key={k}>
                <strong className="font-bold text-cream/85">{k}</strong> {v}
              </span>
            ))}
          </p>
        </div>
      </div>

      <div
        role="tablist"
        aria-label="Menu categories"
        className="no-scrollbar -mx-5 mt-12 flex gap-2 overflow-x-auto border-b border-cream/15 px-5 pb-6 sm:-mx-8 sm:px-8 lg:mx-0 lg:mt-16 lg:px-0"
      >
        {MENU.map((c, i) => {
          const selected = c.id === active
          return (
            <button
              key={c.id}
              ref={(el) => {
                tabs.current[i] = el
              }}
              role="tab"
              id={`${uid}-tab-${c.id}`}
              aria-selected={selected}
              aria-controls={`${uid}-panel`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(c.id)}
              onKeyDown={(e) => onKeyDown(e, i)}
              className={menuTabClass('interactive', selected)}
            >
              {c.label}
            </button>
          )
        })}
      </div>

      <div
        role="tabpanel"
        id={`${uid}-panel`}
        aria-labelledby={`${uid}-tab-${cat.id}`}
        tabIndex={0}
        className="mt-10 grid gap-10 outline-none md:grid-cols-12 md:gap-6 lg:mt-14"
      >
        <figure key={`img-${cat.id}`} className="animate-fade-up md:col-span-5 lg:col-span-4">
          <div className="aspect-[16/10] overflow-hidden rounded-card bg-forest-soft md:aspect-[4/5]">
            <img src={img(cat.image, 900)} alt={cat.imageAlt} className="h-full w-full object-cover" loading="lazy" />
          </div>
          <figcaption className="mt-4 font-serif text-lg italic text-cream/80">{cat.note}</figcaption>
        </figure>

        <div key={`list-${cat.id}`} className="animate-fade-up md:col-span-7 lg:col-span-7 lg:col-start-6">
          <div className="flex items-baseline justify-between">
            <h3 className="t-h3">{cat.label}</h3>
            <span className="t-caption tabular-nums text-cream/50">
              {String(cat.items.length).padStart(2, '0')} dishes
            </span>
          </div>
          <ul className="mt-8 divide-y divide-cream/15">
            {cat.items.map((item) => (
              <MenuItemRow key={item.name} item={item} />
            ))}
          </ul>
        </div>
      </div>

      <p className="t-caption mt-16 border-t border-cream/15 pt-6 text-cream/55">
        Sample menu with fictional prices, created for portfolio purposes. Please let your server know about any allergies.
      </p>
    </div>
  )
}
