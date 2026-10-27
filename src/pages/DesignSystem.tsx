import type { ReactNode } from 'react'
import { inputClass } from '../components/Booking'
import { FoodCard } from '../components/FoodCard'
import { FooterLink, SocialButton, SOCIALS } from '../components/Footer'
import { Icon } from '../components/Icon'
import { DietTag } from '../components/Menu'
import { Nav, NavLink } from '../components/Nav'
import { Button, Container, Eyebrow, Wordmark, type ButtonVariant, type ForcedState } from '../components/ui'
import { SIGNATURE_DISHES } from '../data'

export function Spec({ n, title, desc, children, id }: { n: string; title: string; desc: string; children: ReactNode; id?: string }) {
  return (
    <section id={id} className="grid gap-8 border-t border-charcoal/10 py-16 lg:grid-cols-12 lg:gap-6">
      <div className="lg:col-span-3">
        <p className="t-caption font-bold tabular-nums text-tomato-deep">{n}</p>
        <h2 className="t-h3 mt-2 text-forest">{title}</h2>
        <p className="t-small mt-3 max-w-xs text-charcoal/65">{desc}</p>
      </div>
      <div className="min-w-0 lg:col-span-9">{children}</div>
    </section>
  )
}

export function Label({ children, tone = 'dark' }: { children: ReactNode; tone?: 'dark' | 'light' }) {
  return <p className={`mb-3 font-mono text-[11px] uppercase tracking-[0.1em] ${tone === 'light' ? 'text-cream/55' : 'text-charcoal/50'}`}>{children}</p>
}

const COLORS = [
  { name: 'Warm Cream', hex: '#F7F3EB', token: 'cream', use: 'Page background, light surfaces', cls: 'bg-cream border border-charcoal/10' },
  { name: 'Deep Forest', hex: '#233D32', token: 'forest', use: 'Headlines, menu & feature surfaces', cls: 'bg-forest' },
  { name: 'Tomato Red', hex: '#C94C36', token: 'tomato', use: 'Primary CTAs, accents, large type', cls: 'bg-tomato' },
  { name: 'Charcoal', hex: '#252522', token: 'charcoal', use: 'Body text, footer surface', cls: 'bg-charcoal' },
  { name: 'White', hex: '#FFFFFF', token: 'white', use: 'Cards, panels, gallery band', cls: 'bg-white border border-charcoal/10' },
]
const SUPPORT = [
  { name: 'Cream Deep', hex: '#EEE7DA', token: 'cream-deep', cls: 'bg-cream-deep' },
  { name: 'Forest Soft', hex: '#2D4C3F', token: 'forest-soft', cls: 'bg-forest-soft' },
  { name: 'Tomato Deep', hex: '#A93C29', token: 'tomato-deep', cls: 'bg-tomato-deep' },
]
const CONTRAST = [
  { pair: 'Charcoal on Cream', ratio: '13.9:1', grade: 'AAA', fg: 'text-charcoal', bg: 'bg-cream' },
  { pair: 'Cream on Forest', ratio: '10.6:1', grade: 'AAA', fg: 'text-cream', bg: 'bg-forest' },
  { pair: 'White on Tomato', ratio: '4.6:1', grade: 'AA', fg: 'text-white', bg: 'bg-tomato' },
  { pair: 'Tomato Deep on Cream', ratio: '5.6:1', grade: 'AA', fg: 'text-tomato-deep', bg: 'bg-cream' },
]

const TYPE = [
  { name: 'Display', cls: 't-display', spec: 'Fraunces 350 · 96 / 94 · −2.5%', sample: 'A Taste of Italy' },
  { name: 'Heading 1', cls: 't-h1', spec: 'Fraunces 350 · 72 / 74 · −2%', sample: 'Made Fresh.' },
  { name: 'Heading 2', cls: 't-h2', spec: 'Fraunces 350 · 56 / 59 · −1.8%', sample: 'Good Food. Italian Soul.' },
  { name: 'Heading 3', cls: 't-h3', spec: 'Fraunces 400 · 30 / 34', sample: 'Pasta' },
  { name: 'Heading 4', cls: 't-h4', spec: 'Fraunces 450 · 22 / 26', sample: 'Truffle Tagliatelle' },
  { name: 'Eyebrow', cls: 't-eyebrow text-tomato-deep', spec: 'Manrope 700 · 12 · +20% · Caps', sample: 'Signature dishes' },
  { name: 'Body Large', cls: 't-body-lg', spec: 'Manrope 400 · 18 / 30', sample: 'Seasonal ingredients and handmade pasta.' },
  { name: 'Body', cls: 't-body', spec: 'Manrope 400 · 16 / 26', sample: 'Every sheet of pasta is rolled by hand each morning.' },
  { name: 'Small', cls: 't-small', spec: 'Manrope 400 · 15 / 24', sample: 'Brown butter, Parmigiano 24 months.' },
  { name: 'Caption', cls: 't-caption', spec: 'Manrope 400 · 12 / 17 · +2%', sample: 'Prices shown are sample content.' },
]

const SPACING = [4, 8, 12, 16, 24, 32, 48, 64, 96, 128]

const BTN_ROWS: { v: ButtonVariant; label: string; dark?: boolean }[] = [
  { v: 'primary', label: 'Primary' },
  { v: 'secondary', label: 'Secondary' },
  { v: 'text', label: 'Text link' },
  { v: 'light', label: 'Light · on dark', dark: true },
]
const STATES: { s: ForcedState | 'default' | 'disabled'; label: string }[] = [
  { s: 'default', label: 'Default' },
  { s: 'hover', label: 'Hover' },
  { s: 'focus', label: 'Focus' },
  { s: 'disabled', label: 'Disabled' },
]

export function DesignSystem() {
  return (
    <div className="bg-cream pb-24">
      <Container>
        <header className="grid gap-8 py-16 lg:grid-cols-12 lg:gap-6 lg:py-24">
          <div className="lg:col-span-7">
            <Eyebrow>UI Components & Design System · v1.0</Eyebrow>
            <h1 className="t-display mt-6 text-forest">
              The TERRA <em className="font-[300] italic text-tomato">system.</em>
            </h1>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 lg:self-end">
            <p className="t-body text-charcoal/70">
              Tokens and reusable components behind the website. Every specimen on this page is the live component used on the homepage — not a picture of it.
            </p>
          </div>
        </header>

        <Spec n="01" title="Color" desc="A warm, food-first palette. Tomato is reserved for action and emphasis; forest carries the brand.">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {COLORS.map((c) => (
              <div key={c.token}>
                <div className={`h-36 rounded-card ${c.cls}`} />
                <p className="mt-3 font-semibold text-charcoal">{c.name}</p>
                <p className="t-caption font-mono text-charcoal/60">
                  {c.hex} · {c.token}
                </p>
                <p className="t-caption mt-1 text-charcoal/55">{c.use}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {SUPPORT.map((c) => (
              <div key={c.token} className="flex items-center gap-3">
                <span className={`size-10 rounded-full ${c.cls}`} />
                <div>
                  <p className="text-sm font-semibold">{c.name}</p>
                  <p className="t-caption font-mono text-charcoal/60">
                    {c.hex} · {c.token}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <Label>
            <span className="mt-10 block">Accessible pairings (WCAG 2.2)</span>
          </Label>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {CONTRAST.map((c) => (
              <div key={c.pair} className={`rounded-card border border-charcoal/10 p-5 ${c.bg} ${c.fg}`}>
                <p className="font-serif text-3xl">Aa</p>
                <p className="mt-3 text-sm font-semibold">{c.pair}</p>
                <p className="t-caption opacity-80">
                  {c.ratio} · {c.grade}
                </p>
              </div>
            ))}
          </div>
        </Spec>

        <Spec n="02" title="Typography" desc="Fraunces, a soft editorial serif, for headlines. Manrope for body copy and UI. Headline sizes scale fluidly between mobile and desktop.">
          <div className="divide-y divide-charcoal/10 rounded-panel bg-white px-6 sm:px-8">
            {TYPE.map((t) => (
              <div key={t.name} className="grid gap-3 py-6 md:grid-cols-[200px_1fr] md:items-baseline md:gap-8">
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="t-caption font-mono text-charcoal/55">{t.spec}</p>
                </div>
                <p className={`${t.cls} min-w-0 truncate text-forest`}>{t.sample}</p>
              </div>
            ))}
          </div>
        </Spec>

        <Spec n="03" title="Grid & spacing" desc="12-column grid on a 1440 frame. 8-point spacing scale. Sections breathe with 128px vertical padding on desktop, 96px on mobile.">
          <div className="rounded-panel bg-white p-6 sm:p-8">
            <Label>Desktop · 1440 frame · 80 margin · 24 gutter · 12 × 84.67 col</Label>
            <div className="relative flex h-40 gap-[1.67%] rounded-card bg-cream px-[5.55%]">
              {Array.from({ length: 12 }, (_, i) => (
                <div key={i} className="flex flex-1 items-end justify-center bg-tomato/12 pb-2 text-[10px] font-semibold tabular-nums text-tomato-deep">
                  {i + 1}
                </div>
              ))}
            </div>
            <div className="mt-6 grid gap-4 text-sm sm:grid-cols-3">
              {[
                ['Desktop ≥ 1024', '12 col · 80 margin · 24 gutter'],
                ['Tablet 640–1023', '12 col · 32 margin · 16–24 gutter'],
                ['Mobile < 640', '2–4 col · 20 margin · 12 gutter'],
              ].map(([a, b]) => (
                <div key={a} className="rounded-card border border-charcoal/10 p-4">
                  <p className="font-semibold">{a}</p>
                  <p className="t-caption mt-1 text-charcoal/60">{b}</p>
                </div>
              ))}
            </div>
            <Label>
              <span className="mt-10 block">Spacing scale · px</span>
            </Label>
            <div className="flex flex-wrap items-end gap-5">
              {SPACING.map((s) => (
                <div key={s} className="flex flex-col items-center gap-2">
                  <div className="w-6 rounded-xs bg-forest" style={{ height: s }} />
                  <span className="t-caption tabular-nums text-charcoal/60">{s}</span>
                </div>
              ))}
            </div>
          </div>
        </Spec>

        <Spec n="04" title="Radius & ratios" desc="Restrained corners keep photography editorial. Pills are reserved for interactive elements.">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ['Card · 4px', 'rounded-card', 'Images, food cards'],
              ['Panel · 12px', 'rounded-panel', 'Hours card, map, dialog'],
              ['Pill · 999px', 'rounded-full', 'Buttons, tabs, tags'],
              ['XS · 2px', 'rounded-xs', 'Charts, rules'],
            ].map(([n, c, u]) => (
              <div key={n} className="rounded-panel bg-white p-5">
                <div className={`h-20 border-2 border-forest bg-cream ${c}`} />
                <p className="mt-4 text-sm font-semibold">{n}</p>
                <p className="t-caption text-charcoal/55">{u}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap items-end gap-6 rounded-panel bg-white p-6">
            {[
              ['4:5', 'aspect-[4/5] w-28', 'Food card, hero (mobile)'],
              ['3:4', 'aspect-[3/4] w-24', 'Inset photos'],
              ['16:10', 'aspect-[16/10] w-40', 'Menu image (mobile)'],
              ['Free', 'h-36 w-40', 'Gallery mosaic'],
            ].map(([r, c, u]) => (
              <div key={r}>
                <div className={`flex items-center justify-center rounded-card bg-forest/10 font-serif text-lg text-forest ${c}`}>{r}</div>
                <p className="t-caption mt-2 text-charcoal/55">{u}</p>
              </div>
            ))}
          </div>
        </Spec>

        <Spec n="05" title="Buttons" desc="One component, four variants, four states. 48px default and 44px small — both meet the minimum touch target.">
          <div className="overflow-x-auto rounded-panel bg-white">
            <table className="w-full min-w-[720px] border-collapse text-left">
              <thead>
                <tr className="border-b border-charcoal/10">
                  <th className="p-5 font-mono text-[11px] font-normal uppercase tracking-[0.1em] text-charcoal/50">Variant</th>
                  {STATES.map((s) => (
                    <th key={s.s} className="p-5 font-mono text-[11px] font-normal uppercase tracking-[0.1em] text-charcoal/50">
                      {s.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {BTN_ROWS.map((r) => (
                  <tr key={r.v} className={r.dark ? 'bg-forest' : 'border-b border-charcoal/10'}>
                    <th scope="row" className={`p-5 text-sm font-semibold ${r.dark ? 'text-cream' : ''}`}>
                      {r.label}
                    </th>
                    {STATES.map((s) => (
                      <td key={s.s} className="p-5">
                        <Button
                          variant={r.v}
                          size="sm"
                          tabIndex={-1}
                          forceState={s.s === 'hover' || s.s === 'focus' ? s.s : undefined}
                          disabled={s.s === 'disabled'}
                        >
                          Book a Table
                        </Button>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-4 rounded-panel bg-white p-6">
            <Label>Sizes & icon</Label>
            <Button icon="arrow">Explore Our Menu · 48</Button>
            <Button size="sm">Book a Table · 44</Button>
            <Button variant="secondary" size="sm" icon="arrowUpRight">
              Directions
            </Button>
          </div>
        </Spec>

        <Spec n="06" title="Navigation" desc="Sticky on scroll: the bar gains a hairline border and a soft cream fill. Collapses to a full-screen menu below 1024px.">
          <div className="overflow-hidden rounded-panel border border-charcoal/10">
            <Nav static />
          </div>
          <div className="mt-6 flex flex-wrap gap-10 rounded-panel bg-white p-6">
            {(['Default', 'Hover', 'Active'] as const).map((s) => (
              <div key={s}>
                <Label>{s}</Label>
                <NavLink label="Our Story" href="#" active={s === 'Active'} forceHover={s === 'Hover'} />
              </div>
            ))}
            <div>
              <Label>Wordmark</Label>
              <Wordmark />
            </div>
            <div className="rounded-card bg-charcoal p-4">
              <Label tone="light">Wordmark · reversed</Label>
              <Wordmark tone="light" />
            </div>
          </div>
        </Spec>

        <Spec n="07" title="Food card" desc="4:5 image, serif name with price aligned on the baseline, Italian name as an eyebrow. On hover the photo eases in by 4% and the rule turns tomato.">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <Label>Default</Label>
              <FoodCard dish={SIGNATURE_DISHES[0]} />
            </div>
            <div>
              <Label>Hover</Label>
              <FoodCard dish={SIGNATURE_DISHES[1]} forceHover />
            </div>
            <div className="rounded-panel bg-white p-6 text-sm">
              <Label>Anatomy</Label>
              <ol className="list-decimal space-y-2 pl-4 text-charcoal/75">
                <li>Image · 4:5 · radius 4</li>
                <li>Tag · optional pill, cream</li>
                <li>Title · H4 forest</li>
                <li>Price · Fraunces 20 tabular, tomato deep</li>
                <li>Rule · 1px charcoal 15% → tomato</li>
                <li>Italian name · caption caps</li>
                <li>Description · Small, 70%</li>
              </ol>
              <Label>
                <span className="mt-6 block">Spacing</span>
              </Label>
              <p className="text-charcoal/75">Image → title 20 · rule → eyebrow 12 · eyebrow → copy 8 · grid gap 24 / 56</p>
            </div>
          </div>
        </Spec>

        <Spec n="08" title="Badges & tags" desc="Small, quiet labels. Never more than one badge per card.">
          <div className="flex flex-wrap items-center gap-4 rounded-panel bg-white p-6">
            <span className="rounded-full bg-cream px-3 py-1.5 t-caption font-semibold text-forest ring-1 ring-charcoal/10">Chef’s pick</span>
            <span className="rounded-full bg-tomato px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white">Signature</span>
            <span className="rounded-full bg-forest px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.14em] text-cream">Today</span>
            <span className="rounded-full bg-cream-deep px-3 py-1 t-caption font-semibold text-charcoal/65">Sample hours</span>
            <span className="flex gap-2 rounded-full bg-forest p-2">
              {['V', 'VG', 'GF', 'Spicy'].map((t) => (
                <DietTag key={t} tag={t} />
              ))}
            </span>
          </div>
        </Spec>

        <Spec n="09" title="Form controls" desc="Used in the reservation flow. 48px fields, 4px radius, forest focus ring. Unavailable slots are struck through, not hidden.">
          <div className="grid gap-6 rounded-panel bg-white p-6 sm:grid-cols-3">
            {(['Default', 'Hover', 'Focus'] as const).map((s) => (
              <div key={s}>
                <Label>{s}</Label>
                <div className="relative flex items-center">
                  <Icon name="calendar" size={18} className="pointer-events-none absolute left-4 text-forest/70" />
                  <input
                    readOnly
                    tabIndex={-1}
                    aria-label={`Example input, ${s} state`}
                    value="Friday, 14 March"
                    className={`${inputClass} ${s === 'Hover' ? '!border-charcoal/45' : ''} ${s === 'Focus' ? '!border-forest outline-2 outline-forest/25' : ''}`}
                  />
                </div>
              </div>
            ))}
            <div className="sm:col-span-3">
              <Label>Time slot · default / selected / unavailable</Label>
              <div className="flex gap-2">
                <span className="inline-flex h-11 w-24 items-center justify-center rounded-full border border-charcoal/20 text-sm font-semibold">19:00</span>
                <span className="inline-flex h-11 w-24 items-center justify-center rounded-full border border-forest bg-forest text-sm font-semibold text-cream">19:30</span>
                <span className="inline-flex h-11 w-24 items-center justify-center rounded-full border border-dashed border-charcoal/20 text-sm font-semibold text-charcoal/30 line-through">20:00</span>
              </div>
            </div>
          </div>
        </Spec>

        <Spec n="10" title="Footer links & social" desc="On charcoal. A short tomato rule draws in on hover; social placeholders are 44px circles.">
          <div className="flex flex-wrap items-start gap-12 rounded-panel bg-charcoal p-8">
            <div>
              <Label tone="light">Link · default</Label>
              <FooterLink href="#">Our Story</FooterLink>
            </div>
            <div>
              <Label tone="light">Link · hover</Label>
              <FooterLink href="#" forceHover>
                Our Story
              </FooterLink>
            </div>
            <div>
              <Label tone="light">Social · default</Label>
              <div className="flex gap-2">
                {SOCIALS.map((s) => (
                  <SocialButton key={s.icon} {...s} />
                ))}
              </div>
            </div>
            <div>
              <Label tone="light">Social · hover</Label>
              <SocialButton {...SOCIALS[0]} forceHover />
            </div>
          </div>
        </Spec>
      </Container>
    </div>
  )
}
