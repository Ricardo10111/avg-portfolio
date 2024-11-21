// components
import About from '@/components/About'
import Cta from '@/components/Cta'
import Hero from '@/components/Hero'
import Reviews from '@/components/Reviews'
import Services from '@/components/Services'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Reviews />
      <Cta />
    </main>
  )
}
