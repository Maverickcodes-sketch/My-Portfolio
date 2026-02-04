import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import PillNav from '@/components/PillNav'
import Intro from '@/pages/intro'
import Projects from '@/pages/projects'

export default function App() {
  const lenisRef = useRef(null)

  useEffect(() => {
    const lenis = new Lenis({ smoothWheel: true })
    lenisRef.current = lenis

    const raf = time => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])

  return (
    <>
      <PillNav
        lenis={lenisRef}
        items={[
          { label: 'Projects', href: '#projects' },
          { label: 'Experience', href: '#experience' },
          { label: 'TechStack', href: '#techstack' },
        ]}
      />

      <section id="intro" className="min-h-screen">
        <Intro />
      </section>

      <section id="projects" className="min-h-screen">
        <Projects />
      </section>
    </>
  )
}
