import DotGrid from "@/components/DotGrid";
import React from "react";
import { Mail } from "lucide-react";
import myportpic from "@/assets/myportpic.jpeg";
import PillNav from "@/components/PillNav";
import Toast from "@/components/Toast";
import TextType from "@/components/TextType";
import LetterGlitch from "@/components/LetterGlitch";

function Intro() {
  const [showToast, setShowToast] = React.useState(false);
  const handleContactClick = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleProjectsClick = () => {
    const projectsSection = document.getElementById('projects-section');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <div className="absolute inset-0 z-20 pointer-events-none">
        <LetterGlitch 
          glitchColors={['#2b4539', '#61dca3', '#61b3dc']} 
          glitchSpeed={50}
          outerVignette={true}
        />
      </div>
      <div className="absolute inset-0 flex justify-center items-center px-4 z-100">
        <div className="w-full max-w-4xl bg-white rounded-lg shadow-2xl overflow-hidden">
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
          {/* Content */}
          <div className="p-8 bg-gray-950 grid grid-cols-2 gap-8 items-start text-white font-bold font-mono ">
            <div><TextType
                text={[
                  `I’m Shaswat Mishra, a motivated developer currently focused on mastering full-stack web development. I enjoy working with React, JavaScript, and Spring Boot, and I actively practice Data Structures & Algorithms to strengthen my problem-solving skills.

                  I believe in learning by building and enjoy creating projects that reflect real-world use cases.`
                ]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor
                cursorCharacter="_"
                texts={[
                  "Welcome to React Bits! Good to see you!",
                  "Build some amazing experiences!",
                ]}
                deletingSpeed={50}
                variableSpeedEnabled={false}
                variableSpeedMin={60}
                variableSpeedMax={120}
                cursorBlinkDuration={0.5}
              /></div>
            <div className="flex flex-col items-center">
              <div className="w-48 h-48 rounded-full shadow-lg mb-4 overflow-hidden">
                <img
                  src={myportpic}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <button
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium transition-colors"
                onClick={handleContactClick}
              >
                <Mail size={18} />
                Contact Me
              </button>
              {showToast && (
                <Toast
                  message="Thanks for your interest! I'll get back to you soon."
                  type="success"
                  duration={3000}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
