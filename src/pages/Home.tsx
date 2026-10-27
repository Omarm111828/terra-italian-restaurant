import { Footer } from '../components/Footer'
import { Gallery } from '../components/Gallery'
import { Hero } from '../components/Hero'
import { MenuSection } from '../components/Menu'
import { Nav } from '../components/Nav'
import { Signature } from '../components/Signature'
import { Story } from '../components/Story'
import { Container } from '../components/ui'
import { Visit } from '../components/Visit'

export function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-forest focus:px-5 focus:py-3 focus:text-cream"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <Signature />
        <section id="menu" aria-label="Menu" className="bg-forest py-24 lg:py-32">
          <Container>
            <MenuSection />
          </Container>
        </section>
        <Story />
        <Gallery />
        <Visit />
      </main>
      <Footer />
    </>
  )
}
