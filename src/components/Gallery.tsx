import { GALLERY, img } from '../data'
import { Icon } from './Icon'
import { Container, Eyebrow } from './ui'

export function Gallery() {
  return (
    <section id="gallery" aria-labelledby="gallery-title" className="bg-white py-24 lg:py-32">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Eyebrow>Gallery</Eyebrow>
            <h2 id="gallery-title" className="t-h1 mt-6 text-forest">
              Life Around <em className="font-[300] italic">the Table.</em>
            </h2>
          </div>
          <a
            href="#gallery"
            aria-label="TERRA on Instagram (placeholder)"
            className="group inline-flex min-h-11 items-center gap-2 text-[15px] font-semibold text-charcoal transition-colors hover:text-tomato-deep"
          >
            <Icon name="instagram" size={20} />
            <span className="underline decoration-charcoal/30 underline-offset-[7px] group-hover:decoration-tomato">@terra.kitchen</span>
          </a>
        </div>

        <div className="mt-12 grid grid-flow-dense auto-rows-[170px] grid-cols-2 gap-3 sm:auto-rows-[220px] md:grid-cols-12 md:gap-4 lg:mt-16 lg:auto-rows-[260px] lg:gap-6">
          {GALLERY.map((g) => (
            <figure key={g.id} className={`group relative overflow-hidden rounded-card bg-cream-deep ${g.className}`}>
              <img
                src={img(g.id, 1000)}
                alt={g.alt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[900ms] ease-out-soft group-hover:scale-[1.04]"
              />
              <figcaption className="absolute bottom-3 left-3 rounded-full bg-cream/95 px-3 py-1.5 t-caption font-medium text-charcoal transition-opacity duration-300 max-sm:hidden lg:opacity-0 lg:group-hover:opacity-100">
                {g.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  )
}
