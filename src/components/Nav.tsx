import { useEffect, useState } from 'react'
import { NAV_LINKS } from '../data'
import { useBooking } from './Booking'
import { Icon } from './Icon'
import { Button, Container, Wordmark } from './ui'

export function NavLink({ label, href, active, forceHover }: { label: string; href: string; active?: boolean; forceHover?: boolean }) {
  return (
    <a
      href={href}
      aria-current={active ? 'true' : undefined}
      className={`group relative inline-flex h-11 items-center text-[15px] font-medium transition-colors ${
        active || forceHover ? 'text-charcoal' : 'text-charcoal/65 hover:text-charcoal'
      }`}
    >
      {label}
      <span
        aria-hidden="true"
        className={`absolute inset-x-0 bottom-2 h-px origin-left bg-tomato transition-transform duration-300 ease-out-soft ${
          active || forceHover ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
        }`}
      />
    </a>
  )
}

export function Nav({ static: isStatic = false }: { static?: boolean }) {
  const { open } = useBooking()
  const [scrolled, setScrolled] = useState(isStatic)
  const [active, setActive] = useState('top')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (isStatic) return
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    NAV_LINKS.forEach((l) => {
      const el = document.getElementById(l.id)
      if (el) io.observe(el)
    })
    return () => {
      window.removeEventListener('scroll', onScroll)
      io.disconnect()
    }
  }, [isStatic])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  return (
    <header
      className={`${isStatic ? 'relative' : 'sticky top-0'} z-40 transition-[background-color,border-color,box-shadow] duration-300 ${
        // No backdrop-filter while the menu is open: it would become the containing block for the fixed overlay.
        menuOpen
          ? 'border-b border-charcoal/10 bg-cream'
          : scrolled
            ? 'border-b border-charcoal/10 bg-cream/95 backdrop-blur-sm'
            : 'border-b border-transparent bg-cream'
      }`}
    >
      <Container className="flex h-[72px] items-center justify-between lg:grid lg:h-20 lg:grid-cols-12 lg:gap-6">
        <a href="#top" aria-label="TERRA Italian Kitchen — home" className="lg:col-span-3" onClick={() => setMenuOpen(false)}>
          <Wordmark />
        </a>

        <nav aria-label="Primary" className="hidden lg:col-span-6 lg:flex lg:justify-center">
          <ul className="flex items-center gap-10">
            {NAV_LINKS.map((l) => (
              <li key={l.id}>
                <NavLink {...l} active={active === l.id} />
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2 lg:col-span-3 lg:justify-end">
          <span className="hidden sm:block">
            <Button size="sm" onClick={open}>
              Book a Table
            </Button>
          </span>
          <button
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((v) => !v)}
            className="inline-flex size-11 items-center justify-center rounded-full text-charcoal transition-colors hover:bg-charcoal/5 lg:hidden"
          >
            <Icon name={menuOpen ? 'close' : 'menu'} size={22} />
          </button>
        </div>
      </Container>

      {menuOpen && (
        <div id="mobile-menu" className="fixed inset-x-0 bottom-0 top-[72px] z-40 flex flex-col bg-cream lg:hidden">
          <Container className="flex flex-1 flex-col justify-between py-10">
            <nav aria-label="Mobile">
              <ul className="flex flex-col">
                {NAV_LINKS.map((l, i) => (
                  <li key={l.id} className="border-b border-charcoal/10">
                    <a href={l.href} onClick={() => setMenuOpen(false)} className="flex items-baseline justify-between py-5">
                      <span className="t-h2">{l.label}</span>
                      <span className="t-caption tabular-nums text-charcoal/45">0{i + 1}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex flex-col gap-4">
              <Button
                onClick={() => {
                  setMenuOpen(false)
                  open()
                }}
                className="w-full"
              >
                Book a Table
              </Button>
              <p className="t-caption text-center text-charcoal/55">Tue–Sun · 123 Example Street, Your City</p>
            </div>
          </Container>
        </div>
      )}
    </header>
  )
}
