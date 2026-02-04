import { useEffect } from 'react'
import Lenis from 'lenis'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Intro from '@/pages/intro'
import Projects from '@/pages/projects'

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smoothWheel: true,
      smoothTouch: true,
      touchMultiplier: 2,
      infinite: false,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="w-screen overflow-x-hidden">
            <Intro />
            <Projects />
          </div>
        } />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  )
}

export default App
