import React, { useState, useEffect, useRef } from "react";
import TextType from "@/components/TextType";
import Toast from "@/components/Toast";
import ScrollStack, { ScrollStackItem } from "@/components/ScrollStack";
import LetterGlitch from "@/components/LetterGlitch";
import FuzzyText from "@/components/FuzzyText";
import { Mail, Github } from "lucide-react";
import myportpic from "@/assets/myportpic.jpeg";
import SplitText from "@/components/SplitText";
function Projects() {
  const [showToast, setShowToast] = useState(false);
  const [isHoveringMockup, setIsHoveringMockup] = useState(false);
  const originalOverflowRef = useRef("");
  const sectionRef = useRef(null);
  const inViewRef = useRef(false);
  const [scrollStackKey, setScrollStackKey] = useState(0);

  useEffect(() => {
    // store original overflow on first run
    if (originalOverflowRef.current === "") {
      originalOverflowRef.current = document.body.style.overflow || "";
    }

    if (isHoveringMockup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = originalOverflowRef.current || "";
    }

    const handleWindowBlur = () => {
      document.body.style.overflow = originalOverflowRef.current || "";
      setIsHoveringMockup(false);
    };

    window.addEventListener("blur", handleWindowBlur);
    return () => {
      window.removeEventListener("blur", handleWindowBlur);
      document.body.style.overflow = originalOverflowRef.current || "";
    };
  }, [isHoveringMockup]);

  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        const isInView = entry.isIntersecting && entry.intersectionRatio >= 0.6;
        if (isInView && !inViewRef.current) {
          setScrollStackKey((prev) => prev + 1);
        }
        inViewRef.current = isInView;
      },
      { threshold: [0, 0.6, 1] },
    );

    observer.observe(sectionEl);
    return () => observer.disconnect();
  }, []);

  const handleContactClick = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };
  return (
    <div
      ref={sectionRef}
      className="relative h-screen w-screen overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <LetterGlitch
          glitchColors={["#2b4539", "#61dca3", "#61b3dc"]}
          glitchSpeed={50}
          outerVignette={true}
        />
      </div>
      <div className="absolute inset-0 flex items-start justify-start p-10">
        <div
          data-scroll-lock="true"
          className="w-full max-w-4xl bg-white rounded-lg shadow-2xl overflow-hidden mt-24 h-[70vh] flex flex-col"
          onMouseEnter={() => setIsHoveringMockup(true)}
          onMouseLeave={() => setIsHoveringMockup(false)}
          onWheel={event => {
            event.preventDefault();
            event.stopPropagation();
          }}
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
              <ScrollStack key={scrollStackKey} className="scroll-stack-scroller w-full h-full">
                <ScrollStackItem>
                  <div className="h-full flex flex-col justify-center items-start p-6 bg-gradient-to-r from-gray-900 via-gray-800 to-cyan-600 text-white rounded-2xl">
                    <h3 className="text-2xl font-bold">OrgBrain</h3>
                    <p className="mt-2 text-sm font-medium">
                      OrgBrain is a full-stack web application designed to help
                      managers and HR professionals efficiently manage their
                      teams, search for employees, and leverage AI-powered
                      insights for better hiring decisions.
                    </p>
                    <a
                      href="https://github.com/Maverickcodes-sketch/OrgBrain"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20"
                    >
                      <Github size={16} />
                      View on GitHub
                    </a>
                  </div>
                </ScrollStackItem>
                <ScrollStackItem>
                  <div className="h-full flex flex-col justify-center items-start p-6 bg-gradient-to-r from-gray-900 via-gray-800 to-sky-600 text-white rounded-2xl">
                    <h3 className="text-xl font-bold">JanSeva Infra</h3>
                    <p className="mt-2 text-sm font-medium">
                      JanSeva Infra is an offline-first, citizen-driven
                      infrastructure reporting and repair management system for
                      low-connectivity regions. It enables geo-tagged issue
                      reporting with photos, supervisor-led task assignment, and
                      engineer updates using IndexedDB for reliable offline data
                      synchronization.
                    </p>
                    <a
                      href="https://github.com/Maverickcodes-sketch/JanSeva-Infra"
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20"
                    >
                      <Github size={16} />
                      View on GitHub
                    </a>
                  </div>
                </ScrollStackItem>
                <ScrollStackItem>
                  <div className="h-full flex flex-col justify-center items-start p-6 bg-gradient-to-r from-gray-900 via-gray-800 to-blue-600 text-white rounded-2xl">
                    <SplitText
                      text="More loading soon…"
                      className="text-2xl font-semibold text-center"
                      delay={50}
                      duration={1.25}
                      ease="power3.out"
                      splitType="chars"
                      from={{ opacity: 0, y: 40 }}
                      to={{ opacity: 1, y: 0 }}
                      threshold={0.1}
                      rootMargin="-100px"
                      textAlign="center"
                      showCallback
                    />
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
  );
}

export default Projects;
