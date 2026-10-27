import type { ReactNode } from 'react'
import { CONTACT, HOURS, NAV_LINKS } from '../data'
import { useBooking } from './Booking'
import { Icon } from './Icon'
import { Button, Container, Wordmark } from './ui'

export function FooterLink({ href, children, forceHover }: { href: string; children: ReactNode; forceHover?: boolean }) {
  return (
    <a
      href={href}
      className={`group inline-flex min-h-9 items-center gap-2 text-[15px] transition-colors ${forceHover ? 'text-cream' : 'text-cream/70 hover:text-cream'}`}
    >
      <span aria-hidden="true" className={`h-px bg-tomato transition-all duration-300 ease-out-soft ${forceHover ? 'w-4' : 'w-0 group-hover:w-4'}`} />
      {children}
    </a>
  )
}

export const SOCIALS = [
  { icon: 'instagram', label: 'Instagram' },
  { icon: 'facebook', label: 'Facebook' },
  { icon: 'tiktok', label: 'TikTok' },
] as const

export function SocialButton({ icon, label, forceHover }: { icon: (typeof SOCIALS)[number]['icon']; label: string; forceHover?: boolean }) {
  return (
    <a
      href="#top"
      aria-label={`${label} (placeholder)`}
      className={`inline-flex size-11 items-center justify-center rounded-full border transition-colors ${
        forceHover ? 'border-cream bg-cream text-charcoal' : 'border-cream/20 text-cream/80 hover:border-cream hover:bg-cream hover:text-charcoal'
      }`}
    >
      <Icon name={icon} size={18} />
    </a>
  )
}

export function Footer() {
  const { open } = useBooking()
  return (
    <footer className="overflow-hidden bg-charcoal text-cream">
      <Container className="pt-20 lg:pt-28">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-6">
          <div className="sm:col-span-2 lg:col-span-4">
            <Wordmark tone="light" />
            <p className="mt-6 max-w-xs font-serif text-xl italic leading-snug text-cream/85">Handmade pasta, wood-fired pizza and long evenings around the table.</p>
            <Button size="sm" onClick={open} className="mt-8">
              Book a Table
            </Button>
          </div>

          <nav aria-label="Footer" className="lg:col-span-2 lg:col-start-6">
            <h2 className="t-eyebrow text-cream/45">Explore</h2>
            <ul className="mt-5 flex flex-col gap-1">
              {NAV_LINKS.map((l) => (
                <li key={l.id}>
                  <FooterLink href={l.href}>{l.label}</FooterLink>
                </li>
              ))}
              <li>
                <FooterLink href="#gallery">Gallery</FooterLink>
              </li>
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h2 className="t-eyebrow text-cream/45">Hours · sample</h2>
            <ul className="mt-5 space-y-2.5 text-[15px] text-cream/70">
              <li className="flex justify-between gap-6">
                <span>Tue – Thu</span>
                <span className="tabular-nums">{HOURS[1].hours}</span>
              </li>
              <li className="flex justify-between gap-6">
                <span>Fri</span>
                <span className="tabular-nums">{HOURS[4].hours}</span>
              </li>
              <li className="flex justify-between gap-6">
                <span>Sat – Sun</span>
                <span className="tabular-nums">from 12:00</span>
              </li>
              <li className="flex justify-between gap-6 text-cream/45">
                <span>Mon</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h2 className="t-eyebrow text-cream/45">Contact</h2>
            <address className="mt-5 space-y-2.5 text-[15px] not-italic text-cream/70">
              <p>
                {CONTACT.address}, {CONTACT.city}
              </p>
              <p>
                <a href="tel:0000000000" className="hover:text-cream">
                  {CONTACT.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${CONTACT.email}`} className="inline-flex items-center gap-2 hover:text-cream">
                  <Icon name="mail" size={16} /> {CONTACT.email}
                </a>
              </p>
            </address>
            <ul className="mt-6 flex gap-2" aria-label="Social media">
              {SOCIALS.map((s) => (
                <li key={s.icon}>
                  <SocialButton {...s} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p aria-hidden="true" className="mt-20 select-none text-center font-serif text-[clamp(88px,24vw,340px)] font-[300] leading-[0.78] tracking-[0.04em] text-cream/[0.07]">
          TERRA
        </p>

        <div className="flex flex-col gap-3 border-t border-cream/10 py-8 t-caption text-cream/50 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} TERRA — Italian Kitchen. A fictional restaurant concept.</p>
          <p>Photography via Unsplash · Design system v1.0</p>
        </div>
      </Container>
    </footer>
  )
}
