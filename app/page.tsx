import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ScrollingText from '@/components/ScrollingText'
import Features from '@/components/Features'
import Stats from '@/components/Stats'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import About from '@/components/About'
import Team from '@/components/Team'
import CTA from '@/components/CTA'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <ScrollingText />
      <Features />
      <Stats />
      <Services />
      <Testimonials />
      <About />
      <Team />
      <CTA />
      <Contact />
      <Footer />
    </main>
  )
}
