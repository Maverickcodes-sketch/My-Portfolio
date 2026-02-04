import React, { useState, useEffect, useRef } from 'react'
import TextType from '@/components/TextType'
import Toast from '@/components/Toast'
import ScrollStack, { ScrollStackItem } from '@/components/ScrollStack'
import LetterGlitch from '@/components/LetterGlitch'
import FuzzyText from '@/components/FuzzyText'
import { Mail, Github } from 'lucide-react'
import myportpic from '@/assets/myportpic.jpeg'

function Projects() {
  const [showToast, setShowToast] = useState(false)
  const [isHoveringMockup, setIsHoveringMockup] = useState(false)
  const originalOverflowRef = useRef('')

  useEffect(() => {
    // store original overflow on first run
    if (originalOverflowRef.current === '') {
      originalOverflowRef.current = document.body.style.overflow || ''
    }

    if (isHoveringMockup) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = originalOverflowRef.current || ''
    }

    const handleWindowBlur = () => {
      document.body.style.overflow = originalOverflowRef.current || ''
      setIsHoveringMockup(false)
    }

    window.addEventListener('blur', handleWindowBlur)
    return () => {
      window.removeEventListener('blur', handleWindowBlur)
      document.body.style.overflow = originalOverflowRef.current || ''
    }
  }, [isHoveringMockup])

  const handleContactClick = () => {
    setShowToast(true)
    setTimeout(() => setShowToast(false), 3000)
  }
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <LetterGlitch 
          glitchColors={['#2b4539', '#61dca3', '#61b3dc']} 
          glitchSpeed={50}
          outerVignette={true}
        />
      </div>
      <div className="absolute inset-0 flex items-start justify-start p-10">
        <div
          className="w-full max-w-4xl bg-white rounded-lg shadow-2xl overflow-hidden mt-24 h-[70vh] flex flex-col"
          onMouseEnter={() => setIsHoveringMockup(true)}
          onMouseLeave={() => setIsHoveringMockup(false)}
        >
          {/* Header */}
          <div className="bg-gray-950 px-4 py-3 flex items-center justify-between border-b border-gray-800">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-sm text-gray-600  font-medium"></div>
            <div className="w-12"></div>
          </div>
          {/* URL Bar */}
          <div className="bg-gray-900 px-4 py-2 border-b border-gray-800">
            <input
              type="text"
              value="https://github.com/Maverickcodes-sketch"
              readOnly
              className="w-full bg-gray-800 text-gray-300 text-sm px-3 py-1 rounded border border-gray-700 focus:outline-none"
            />
          </div>
          {/* Content */}
            <div className="relative p-8 bg-gray-950 grid grid-cols-2 gap-8 items-start text-white font-bold font-mono flex-1 overflow-hidden">
              <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
                <Github size={200} className="text-gray-500 opacity-20" />
              </div>
              <div className="absolute inset-0 flex  justify-center items-center p-6">
              <ScrollStack className="w-full h-full">
                  <ScrollStackItem>
                    <div className="h-full flex flex-col justify-center items-start p-6 bg-gradient-to-r from-indigo-600 to-indigo-400 text-white rounded-2xl">
                      <h3 className="text-2xl font-bold">Project Alpha</h3>
                      <p className="mt-2 text-sm font-medium">A demo project showing interactive UI components.</p>
                    </div>
                  </ScrollStackItem>
                  <ScrollStackItem>
                    <div className="h-full flex flex-col justify-center items-start p-6 bg-gradient-to-r from-teal-600 to-teal-400 text-white rounded-2xl">
                      <h3 className="text-2xl font-bold">Project Beta</h3>
                      <p className="mt-2 text-sm font-medium">A full-stack app built with React and Spring Boot.</p>
                    </div>
                  </ScrollStackItem>
                  <ScrollStackItem>
                    <div className="h-full flex flex-col justify-center items-start p-6 bg-gradient-to-r from-pink-600 to-pink-400 text-white rounded-2xl">
                      <h3 className="text-2xl font-bold">Project Gamma</h3>
                      <p className="mt-2 text-sm font-medium">Algorithms practice and visualization tools.</p>
                    </div>
                  </ScrollStackItem>
                </ScrollStack>
              </div>
          </div>
        </div>
        <div className="absolute right-10 top-1/2 transform -translate-y-1/2 z-20 ">
          <FuzzyText
            fontSize="clamp(3rem, 15vw, 8rem)"
            fontWeight={900}
            color="#ffffff"
            enableHover={true}
            baseIntensity={0.15}
            hoverIntensity={0.4}
            fuzzRange={25}
          >
            200 OK
          </FuzzyText>
        </div>
      </div>
    </div>
  )
}

export default Projects