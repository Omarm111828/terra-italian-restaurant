import type { ReactNode } from 'react'
import { CONTACT, HOURS } from '../data'
import { useBooking } from './Booking'
import { Icon, type IconName } from './Icon'
import { Button, ButtonLink, Container, Eyebrow } from './ui'

export const todayIndex = () => (new Date().getDay() + 6) % 7

export function HoursList({ highlightToday = true }: { highlightToday?: boolean }) {
  const today = todayIndex()
  return (
    <ul className="divide-y divide-charcoal/10">
      {HOURS.map((h, i) => {
        const isToday = highlightToday && i === today
        const closed = h.hours === 'Closed'
        return (
          <li key={h.day} className={`flex items-center justify-between py-3.5 text-[15px] ${isToday ? 'font-semibold text-forest' : 'text-charcoal/75'}`}>
            <span className="flex items-center gap-3">
              {h.day}
              {isToday && <span className="rounded-full bg-forest px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.14em] text-cream">Today</span>}
            </span>
            <span className={`tabular-nums ${closed ? 'text-tomato-deep' : ''}`}>{h.hours}</span>
          </li>
        )
      })}
    </ul>
  )
}

function ContactRow({ icon, label, children }: { icon: IconName; label: string; children: ReactNode }) {
  return (
    <div className="flex gap-4">
      <span className="mt-0.5 inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-charcoal/15 text-forest">
        <Icon name={icon} size={18} />
      </span>
      <div>
        <p className="t-eyebrow text-[10px] text-charcoal/50">{label}</p>
        <div className="mt-1.5 text-[15px] leading-relaxed text-charcoal">{children}</div>
      </div>
    </div>
  )
}

export function MapPlaceholder() {
  return (
    <div id="visit-map" className="relative h-[440px] overflow-hidden rounded-panel bg-cream-deep sm:h-[560px] lg:h-full lg:min-h-[600px]" role="img" aria-label="Map placeholder showing the restaurant location">
      <svg viewBox="0 0 800 720" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <rect width="800" height="720" fill="#EEE7DA" />
        {/* park */}
        <rect x="470" y="70" width="230" height="170" rx="18" fill="#233D32" opacity="0.1" />
        <rect x="60" y="470" width="170" height="150" rx="18" fill="#233D32" opacity="0.1" />
        {/* river */}
        <path d="M-20 610 C 160 560, 260 680, 430 620 S 700 520, 840 560" stroke="#233D32" strokeOpacity="0.09" strokeWidth="46" fill="none" />
        {/* minor streets */}
        <g stroke="#fff" strokeWidth="6" fill="none" opacity="0.9">
          <path d="M0 140 H800 M0 250 H800 M0 470 H800 M140 0 V720 M300 0 V720 M600 0 V720 M720 0 V720" />
          <path d="M0 40 L380 420 M430 720 L800 330" />
        </g>
        {/* major streets */}
        <g stroke="#fff" strokeWidth="16" fill="none">
          <path d="M0 360 H800" />
          <path d="M440 0 V720" />
        </g>
        <g fontFamily="Manrope, sans-serif" fontSize="12" fontWeight="600" fill="#252522" fillOpacity="0.4" letterSpacing="1.5">
          <text x="40" y="350">EXAMPLE STREET</text>
          <text x="452" y="40" transform="rotate(90 452 40)">MAIN AVENUE</text>
          <text x="500" y="160">CITY PARK</text>
        </g>
      </svg>

      {/* pin */}
      <div className="absolute left-[55%] top-1/2 -translate-x-1/2 -translate-y-full">
        <span className="absolute left-1/2 top-full size-16 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-tomato/20 [animation-duration:2.4s]" />
        <div className="relative flex flex-col items-center">
          <span className="rounded-full bg-forest px-4 py-2 font-serif text-sm tracking-[0.14em] text-cream shadow-lg">TERRA</span>
          <span className="h-5 w-px bg-forest" />
          <span className="size-3 rounded-full border-2 border-cream bg-tomato" />
        </div>
      </div>

      <span className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1.5 t-caption font-semibold text-charcoal/60">Map placeholder</span>
    </div>
  )
}

export function Visit() {
  const { open } = useBooking()
  return (
    <section id="visit" aria-labelledby="visit-title" className="py-24 lg:py-32">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-6">
        <div className="lg:col-span-5">
          <Eyebrow>Visit us</Eyebrow>
          <h2 id="visit-title" className="t-h1 mt-6 text-forest">
            Come <em className="font-[300] italic">Join Us.</em>
          </h2>
          <p className="t-body mt-6 max-w-md text-charcoal/70">
            Walk-ins are always welcome at the bar. For the dining room, we recommend booking ahead — especially on weekends.
          </p>

          <div className="mt-10 rounded-panel bg-white p-6 sm:p-8">
            <div className="flex items-center justify-between gap-4 pb-3">
              <h3 className="t-h4 flex items-center gap-3 text-forest">
                <Icon name="clock" size={20} className="text-tomato-deep" /> Opening Hours
              </h3>
              <span className="shrink-0 whitespace-nowrap rounded-full bg-cream-deep px-3 py-1 t-caption font-semibold text-charcoal/65">Sample hours</span>
            </div>
            <HoursList />
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <ContactRow icon="pin" label="Address">
              <address className="not-italic">
                {CONTACT.address}
                <br />
                {CONTACT.city}
              </address>
            </ContactRow>
            <ContactRow icon="phone" label="Phone">
              <a href="tel:0000000000" className="underline decoration-charcoal/25 underline-offset-4 hover:decoration-tomato">
                {CONTACT.phone}
              </a>
              <span className="block t-caption text-charcoal/50">Placeholder number</span>
            </ContactRow>
          </div>
        </div>

        <div className="relative lg:col-span-7 lg:pl-6">
          <MapPlaceholder />
          <div className="relative -mt-24 mx-4 rounded-panel bg-white p-6 shadow-[0_24px_60px_-24px_rgba(37,37,34,0.3)] sm:absolute sm:bottom-6 sm:left-6 sm:right-auto sm:mx-0 sm:mt-0 sm:w-[380px] lg:left-12">
            <p className="t-eyebrow text-[10px] text-charcoal/50">Find us</p>
            <p className="mt-3 font-serif text-2xl text-forest">{CONTACT.address}</p>
            <p className="t-small text-charcoal/65">{CONTACT.city} · Street parking & tram stop nearby</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button size="sm" onClick={open} className="sm:flex-1">
                Reserve a Table
              </Button>
              <ButtonLink size="sm" variant="secondary" href="#visit-map" icon="arrowUpRight" className="sm:flex-1" title="Directions placeholder">
                Directions
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
