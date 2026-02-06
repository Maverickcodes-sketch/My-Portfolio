import React from "react";
import TextType from "@/components/TextType";
import myportpic from "@/assets/myportpic.jpeg";
import PixelSnow from "@/components/PixelSnow";
import FuzzyText from "@/components/FuzzyText";
function Experience() {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <div className="absolute inset-0 z-20 pointer-events-none bg-black">
        <PixelSnow
          color="#ffffff"
          flakeSize={0.01}
          minFlakeSize={1.25}
          pixelResolution={300}
          speed={1.25}
          density={0.3}
          direction={125}
          brightness={1}
          depthFade={8}
          farPlane={20}
          gamma={0.4545}
          variant="square"
        />
      </div>
      {/*Mockup--window*/}
      <div className="absolute top-4 right-4 flex justify-end items-start px-4 z-100">
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
            <div>
          {" Served on the Organising Committee, managing brand partnerships, inter-college collaborations, and event logistics, ensuring smooth coordination and execution. Alongside organizational responsibilities, actively participated in multiple MUN conferences and earned an Honourable Mention at NSUT MUN, reflecting strong research, diplomacy, and public speaking skills."}
              
            </div>
            <div className="flex items-center justify-center h-full w-full text-center">
              <FuzzyText
                fontSize="clamp(3.5rem, 8vw, 5rem)"
                fontWeight={900}
                color="#ffffff"
                enableHover={true}
                baseIntensity={0.15}
                hoverIntensity={0.4}
                fuzzRange={25}
              >
                KIET-MUN
              </FuzzyText>
            </div>
          </div>
        </div>
      </div>
      {/*Mockup--window*/}
      <div className="absolute bottom-4 left-4 flex justify-start items-end px-4 z-100">
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
            <div>
              {"  Served as a corporate realtions member handling sponsorship management and brand collaborations, responsible for outreach, negotiations, and maintaining professional relationships with partner brands. This role strengthened my communication, negotiation, and stakeholder management skills while contributing to successful event execution."}
            </div>
            <div className="flex items-center justify-center h-full w-full text-center">
              <FuzzyText
                fontSize="clamp(3.5rem, 8vw, 5rem)"
                fontWeight={900}
                color="#ffffff"
                enableHover={true}
                baseIntensity={0.15}
                hoverIntensity={0.4}
                fuzzRange={25}
              >
                E-CELL
              </FuzzyText>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
