import React from "react";
import PixelSnow from "@/components/PixelSnow";
import TrueFocus from "@/components/TrueFocus";
import CircularGallery from "@/components/CircularGallery";

function TechStake() {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none bg-black">
        <PixelSnow
          color="#ffffff"
          flakeSize={0.01}
          minFlakeSize={1.00}
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
      <div className="absolute h-screen w-screen overflow-hidden z-20">
        <div className="flex justify-center text-white m-5">
          <TrueFocus
            sentence="TECH STACK"
            manualMode={false}
            blurAmount={5}
            borderColor="#5227FF"
            animationDuration={0.5}
            pauseBetweenAnimations={1}
            fontSize="4rem"
          />
          </div>
          <div style={{ height: "600px", position: "relative" }}>
            <CircularGallery
              bend={3}
              textColor="#ffffff"
              borderRadius={0.05}
              scrollEase={0.02}
              bend={1}
              borderRadius={0.05}
              scrollSpeed={2}
              scrollEase={0.05}
            />
          </div>
      </div>
    </div>
  );
}

export default TechStake;
