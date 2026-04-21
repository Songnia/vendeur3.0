import Navigation from '../sections/Navigation'
import Hero from '../sections/Hero'
import AccrocheAuteur from '../sections/AccrocheAuteur'
import Temoignages from '../sections/Temoignages'
import Strategies from '../sections/Strategies'
import Bonus from '../sections/Bonus'
import Garantie from '../sections/Garantie'
import FAQ from '../sections/FAQ'
import CTAFinal from '../sections/CTAFinal'
import Footer from '../sections/Footer'

export default function Landing() {
  return (
    <div className="min-h-screen bg-v-bg">
      <Navigation />
      <Hero />
      <AccrocheAuteur />
      <Temoignages />
      <CTAFinal />
      <Strategies />
      <Bonus />
      <Garantie />
      <FAQ />
      <Footer />
    </div>
  )
}
