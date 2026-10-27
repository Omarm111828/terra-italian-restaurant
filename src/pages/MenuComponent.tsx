import { DietTag, menuTabClass, MenuItemRow, MenuSection, type TabState } from '../components/Menu'
import { Container, Eyebrow } from '../components/ui'
import { MENU } from '../data'
import { Label } from './DesignSystem'

const TAB_STATES: TabState[] = ['default', 'hover', 'active', 'focus']

export function MenuComponent() {
  const pasta = MENU[1].items
  return (
    <div className="bg-cream pb-24">
      <Container>
        <header className="grid gap-8 py-16 lg:grid-cols-12 lg:gap-6 lg:py-20">
          <div className="lg:col-span-7">
            <Eyebrow>Component · MenuSection</Eyebrow>
            <h1 className="t-h1 mt-6 text-forest">
              Menu Section <em className="font-[300] italic">component.</em>
            </h1>
          </div>
          <p className="t-body text-charcoal/70 lg:col-span-4 lg:col-start-9 lg:self-end">
            Accessible tablist (← → Home End) with six categories, a swapping category photo and a scannable price list. Built from two sub-components:
            MenuTab and MenuItemRow.
          </p>
        </header>

        <div className="grid gap-6 lg:grid-cols-12">
          <div className="rounded-panel bg-forest p-6 sm:p-8 lg:col-span-5">
            <Label tone="light">MenuTab · states</Label>
            <div className="flex flex-wrap gap-3">
              {TAB_STATES.map((s) => (
                <div key={s} className="flex flex-col items-start gap-2">
                  <span className={menuTabClass(s)}>Pasta</span>
                  <span className="t-caption capitalize text-cream/55">{s}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 border-t border-cream/15 pt-6 text-[13px] leading-relaxed text-cream/70">
              <p>Height 44 · padding 0 20 · radius pill · Manrope 600 / 15</p>
              <p>Scrolls horizontally on small screens with edge bleed.</p>
            </div>
          </div>

          <div className="rounded-panel bg-forest p-6 sm:p-8 lg:col-span-7">
            <Label tone="light">MenuItemRow · featured / with tags / default</Label>
            <ul className="divide-y divide-cream/15">
              <MenuItemRow item={pasta[0]} />
              <MenuItemRow item={pasta[1]} />
              <MenuItemRow item={pasta[2]} />
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-cream/15 pt-6 text-[13px] text-cream/70">
              <span>Dietary tags:</span>
              {['V', 'VG', 'GF', 'Spicy'].map((t) => (
                <DietTag key={t} tag={t} />
              ))}
              <span className="basis-full">Row padding 24 · dotted leader · price Fraunces 20 tabular</span>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-panel bg-forest px-6 py-12 sm:px-10 lg:px-16 lg:py-16">
          <Label tone="light">MenuSection · assembled (interactive)</Label>
          <div className="mt-6">
            <MenuSection headingLevel="h2" />
          </div>
        </div>
      </Container>
    </div>
  )
}
