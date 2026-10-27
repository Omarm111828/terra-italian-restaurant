import { IMAGES, img } from '../data'
import { useBooking } from './Booking'
import { Button, ButtonLink, Container, Eyebrow } from './ui'

const FACTS = [
  { k: 'Pasta', v: 'Rolled by hand daily' },
  { k: 'Pizza', v: 'Wood-fired at 450°C' },
  { k: 'Menu', v: 'Changes each season' },
]

export function Hero() {
  const { open } = useBooking()
  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden">
      <Container className="grid grid-cols-1 gap-14 pb-20 pt-6 md:pt-10 lg:grid-cols-12 lg:gap-6 lg:pb-28 lg:pt-12">
        <div className="flex flex-col justify-center md:max-w-[600px] lg:col-span-5 lg:max-w-none lg:pr-6">
          <Eyebrow>Trattoria moderna · Est. 2014</Eyebrow>
          <h1 id="hero-title" className="t-display mt-7 text-forest">
            A Taste of Italy, Made with <em className="font-[300] italic text-tomato">Heart.</em>
          </h1>
          <p className="t-body-lg mt-7 max-w-[440px] text-charcoal/75">
            Seasonal ingredients, handmade pasta, and unforgettable moments around the table.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#menu" icon="arrow">
              Explore Our Menu
            </ButtonLink>
            <Button variant="secondary" onClick={open}>
              Book a Table
            </Button>
          </div>

          <dl className="mt-14 grid grid-cols-3 border-t border-charcoal/15 pt-6 lg:mt-20">
            {FACTS.map((f, i) => (
              <div key={f.k} className={`pr-3 ${i > 0 ? 'border-l border-charcoal/15 pl-4 sm:pl-6' : ''}`}>
                <dt className="t-eyebrow text-[10px] text-charcoal/50">{f.k}</dt>
                <dd className="mt-2 font-serif text-[15px] leading-snug text-forest sm:text-lg">{f.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative lg:col-span-7">
          <figure className="relative aspect-[4/5] overflow-hidden rounded-card bg-cream-deep sm:aspect-[16/12] lg:aspect-auto lg:h-[min(720px,calc(100vh-150px))] lg:min-h-[600px]">
            <img
              src={img(IMAGES.heroPizza, 1600)}
              alt="A Margherita pizza blistering inside a wood-fired oven"
              className="h-full w-full object-cover"
              fetchPriority="high"
            />
            <figcaption className="absolute bottom-4 right-4 hidden rounded-full sm:block bg-cream/95 px-4 py-2 t-caption font-medium text-charcoal sm:bottom-6 sm:right-6">
              <span className="text-tomato-deep">Fig. 01</span> — Margherita, 90 seconds in the oven
            </figcaption>
          </figure>
          <div className="absolute -bottom-8 left-4 w-32 overflow-hidden rounded-card border-[6px] border-cream sm:-left-6 sm:w-44 lg:-bottom-10 lg:-left-10 lg:w-52">
            <img src={img(IMAGES.handsPasta, 500)} alt="Hands stretching fresh pasta dough" className="aspect-[3/4] w-full object-cover" loading="lazy" />
          </div>
        </div>
      </Container>
    </section>
  )
}
