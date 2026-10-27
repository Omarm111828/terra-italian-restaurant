import { SIGNATURE_DISHES } from '../data'
import { FoodCard } from './FoodCard'
import { ButtonLink, Container, Eyebrow } from './ui'

export function Signature() {
  return (
    <section id="signature" aria-labelledby="signature-title" className="border-t border-charcoal/10 py-24 lg:py-32">
      <Container>
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-6">
          <div className="lg:col-span-7">
            <Eyebrow>Signature dishes</Eyebrow>
            <h2 id="signature-title" className="t-h1 mt-6 text-forest">
              Made Fresh.
              <br />
              Served with <em className="font-[300] italic">Love.</em>
            </h2>
          </div>
          <div className="max-w-md lg:col-span-4 lg:col-start-9">
            <p className="t-body text-charcoal/70">
              Four plates our guests come back for — each made from scratch, in small batches, from what the season gives us.
            </p>
            <ButtonLink href="#menu" variant="text" icon="arrow" className="mt-3">
              See the full menu
            </ButtonLink>
          </div>
        </div>

        <ul className="mt-14 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {SIGNATURE_DISHES.map((d) => (
            <li key={d.name}>
              <FoodCard dish={d} />
            </li>
          ))}
        </ul>
        <p className="t-caption mt-12 text-charcoal/45">Prices shown are sample content for portfolio purposes.</p>
      </Container>
    </section>
  )
}
