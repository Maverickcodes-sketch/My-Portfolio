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

    const sections = Array.from(document.querySelectorAll('[data-page]'))
    let isSnapping = false

    const getClosestSectionIndex = () => {
      if (sections.length === 0) return 0
      const scrollY = typeof lenis.scroll === 'number' ? lenis.scroll : window.scrollY
      let closestIndex = 0
      let closestDistance = Number.POSITIVE_INFINITY

      sections.forEach((section, index) => {
        const top = section.offsetTop
        const distance = Math.abs(top - scrollY)
        if (distance < closestDistance) {
          closestDistance = distance
          closestIndex = index
        }
      })

      return closestIndex
    }

    const isSnapDisabledForTarget = target => {
      if (!target?.closest) return false
      return Boolean(target.closest('[data-snap="false"]'))
    }

    const handleWheel = event => {
      if (sections.length === 0) return
      if (isSnapDisabledForTarget(event.target)) return
      const lockTarget = event.target?.closest?.('[data-scroll-lock="true"]')
      if (lockTarget) {
        event.preventDefault()
        return
      }
      if (isSnapping) {
        event.preventDefault()
        return
      }

      const direction = Math.sign(event.deltaY)
      if (direction === 0) return

      const currentIndex = getClosestSectionIndex()
      const nextIndex = Math.min(
        sections.length - 1,
        Math.max(0, currentIndex + direction)
      )

      if (nextIndex === currentIndex) return

      event.preventDefault()
      isSnapping = true

      lenis.scrollTo(sections[nextIndex], {
        duration: 1.1,
        easing: t => 1 - Math.pow(1 - t, 3)
      })

      window.setTimeout(() => {
        isSnapping = false
      }, 1200)
    }

    window.addEventListener('wheel', handleWheel, { passive: false })

    return () => {
      document.documentElement.style.overflowX = prevHtmlOverflowX
      document.body.style.overflowX = prevBodyOverflowX
      window.removeEventListener('wheel', handleWheel)
      lenis.destroy()
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

      <section id="intro" data-page className="min-h-screen">
        <Intro />
      </section>

      <section id="projects" data-page className="min-h-screen">
        <Projects />
      </section>

      <section id="experience" data-page data-snap="false" className="min-h-screen">
        <Experience/>
      </section>

      <section id="techstack" data-page data-snap="false" className="min-h-screen">
        <TechStake/>
      </section>
    </>
  )
}
