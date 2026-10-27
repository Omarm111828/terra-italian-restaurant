import { IMAGES, img } from '../data'
import { ButtonLink, Container, Eyebrow } from './ui'

const STATS = [
  { n: '3', l: 'Generations of family recipes' },
  { n: '14h', l: 'Our ragù simmers, every day' },
  { n: '60km', l: 'Most produce travels less' },
]

export function Story() {
  return (
    <section id="story" aria-labelledby="story-title" className="overflow-hidden py-24 lg:py-36">
      <Container className="grid gap-20 lg:grid-cols-12 lg:items-center lg:gap-6">
        <div className="relative pb-20 sm:pb-28 lg:col-span-6 lg:pb-0">
          <div className="aspect-[4/5] w-[82%] overflow-hidden rounded-card bg-cream-deep">
            <img src={img(IMAGES.sheetingDough, 1100)} alt="A cook sheeting fresh pasta dough by hand" className="h-full w-full object-cover" loading="lazy" />
          </div>
          <div className="absolute bottom-0 right-0 aspect-[3/4] w-[46%] overflow-hidden rounded-card border-[6px] border-cream bg-cream-deep lg:-bottom-14">
            <img src={img(IMAGES.chefCooking, 700)} alt="Our chef cooking at the pass" className="h-full w-full object-cover" loading="lazy" />
          </div>
          <p className="absolute left-0 top-full mt-4 hidden t-caption text-charcoal/50 lg:block">Fig. 02 — The pasta bench, 7:00 am</p>
        </div>

        <div className="lg:col-span-5 lg:col-start-8">
          <Eyebrow>Our story</Eyebrow>
          <h2 id="story-title" className="t-h2 mt-6 text-forest">
            Good Food. Honest Ingredients. <em className="font-[300] italic text-tomato">Italian Soul.</em>
          </h2>
          <div className="t-body mt-8 space-y-5 text-charcoal/75">
            <p>
              TERRA began at a family kitchen table, where Sunday lunch lasted until dinner. We still cook that way — every sheet of pasta is rolled by hand each
              morning, our dough rests for two days, and the menu follows whatever the farmers bring through the back door.
            </p>
            <p>
              No shortcuts, no fuss. Just honest ingredients, a wood-fired oven, and a room built for sharing plates, pouring another glass and staying a little
              longer than planned.
            </p>
          </div>

          <blockquote className="mt-10 border-l-2 border-tomato pl-6">
            <p className="font-serif text-xl italic leading-snug text-forest">“We cook the way our nonna did — slowly, generously, and always for the table.”</p>
            <footer className="t-caption mt-3 font-semibold uppercase tracking-[0.14em] text-charcoal/50">Head Chef · Name placeholder</footer>
          </blockquote>

          <dl className="mt-12 grid grid-cols-3 gap-4 border-y border-charcoal/15 py-6">
            {STATS.map((s) => (
              <div key={s.l}>
                <dt className="sr-only">{s.l}</dt>
                <dd className="font-serif text-3xl text-forest sm:text-4xl">{s.n}</dd>
                <dd className="t-caption mt-2 text-charcoal/60">{s.l}</dd>
              </div>
            ))}
          </dl>

          <ButtonLink href="#gallery" variant="text" icon="arrow" className="mt-8">
            Discover Our Story
          </ButtonLink>
        </div>
      </Container>
    </section>
  )
}
