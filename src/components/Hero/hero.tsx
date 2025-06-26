import { Button } from "../ui/button";
import { Download } from "lucide-react";
import { useState,useEffect } from "react";

export const HeroSection = () => {
    




  return (
    <div className="relative flex justify-center items-center min-h-[520px]">
      {/* 🎥 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/video/trailer.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🧊 Overlay (optional for better text visibility) */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10"></div>

      {/* 🌟 Hero Content */}
      <div className="relative z-20 flex flex-col items-start justify-end px-4 pb-16 gap-6 max-w-[960px] w-full">
        <h1 className="text-2xl md:text-5xl lg:text-7xl font-bold text-white font-sans">
          Unleash the new <br /> Gaming Experience
        </h1>
        <div className="flex justify-center items-center">
          <Button>
            Download Now <Download />
          </Button>
        </div>
      </div>
    </div>
  );
};
