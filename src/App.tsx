import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Gestalt from './components/Gestalt'
import Offer from './components/Offer'
import Bridge from './components/Bridge'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useRevealOnScroll } from './lib/hooks'

export default function App() {
  useRevealOnScroll()

  return (
    <>
      <a href="#o-mnie" className="skip-link">
        Przejdź do treści
      </a>
      <Header />
      <main>
        <Hero />
        <About />
        <Gestalt />
        <Offer />
        <Bridge />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
