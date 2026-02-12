import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import PixelSnow from '@/components/PixelSnow'
import IntroCard from '@/components/IntroCard'
import ProjectsCard from '@/components/ProjectsCard'
import ExperienceCard from '@/components/ExperienceCard'
import TechStackCard from '@/components/TechStackCard'
import Footer from '@/components/Footer'

export default function App() {
  const lenisRef = useRef(null)

  useEffect(() => {
    // Lenis for smooth global scrolling (even if the page fits on 1 screen on large monitors, it helps on smaller ones)
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    })
    lenisRef.current = lenis

    const raf = (time) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8 lg:p-12 relative overflow-x-hidden">
      {/* Global Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <PixelSnow
          color="#ffffff"
          flakeSize={0.008}
          pixelResolution={400}
          speed={0.8}
          density={0.08}
          brightness={2.5}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 grid-auto-rows-[minmax(180px,auto)]">

          {/* Intro: Spans 2 cols, 2 rows (Large Hero) */}
          <IntroCard />

          {/* Projects: Spans 1 col, 2 rows (Tall sidebar) */}
          <ProjectsCard />

          {/* Experience: Spans 2 cols, 1 row (Wide bar) */}
          <ExperienceCard />

          {/* Tech Stack: Spans 1 col, 1 row (Compact) */}
          <TechStackCard />

        </div>
        <Footer />
      </div>
    </div>
  )
}
