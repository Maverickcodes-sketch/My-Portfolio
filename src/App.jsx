import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import PillNav from '@/components/PillNav'
import Intro from '@/pages/intro'
import Projects from '@/pages/projects'
import Experience from '@/pages/Experience'
import TechStake from '@/pages/TechStake'

export default function App() {
  const lenisRef = useRef(null)

  useEffect(() => {
    const lenis = new Lenis({ smoothWheel: true })
    lenisRef.current = lenis
    const prevHtmlOverflowX = document.documentElement.style.overflowX
    const prevBodyOverflowX = document.body.style.overflowX
    document.documentElement.style.overflowX = 'hidden'
    document.body.style.overflowX = 'hidden'

    const raf = time => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => {
      document.documentElement.style.overflowX = prevHtmlOverflowX
      document.body.style.overflowX = prevBodyOverflowX
    }
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

      <section  id="experience"  className="min-h-screen">
        <Experience/>
      </section>

      <section id="techstack" className="min-h-screen">
        <TechStake/>
      </section>
    </>
  )
}
