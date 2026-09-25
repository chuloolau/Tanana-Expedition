import { useEffect } from 'react'
import { useLang } from './i18n'
import { useReveal } from './components/useReveal'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Intro, Destinations, Boat, Skipper, Expeditions, Moment, Reviews } from './components/Sections'
import { Contact, Footer } from './components/Contact'
import { WhatsAppFloat } from './components/WhatsAppFloat'

/* Mismo orden de secciones que la home actual de tanana-expedition.com */
export default function App() {
  const { lang } = useLang()
  useReveal(lang)

  // Links directos a una sección (ej. /#bateau): la página se arma después de cargar, así que bajamos a mano
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1))
    if (id) requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ behavior: 'instant' }))
  }, [])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Intro />
        <Destinations />
        <Boat />
        <Skipper />
        <Expeditions />
        <Moment />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
