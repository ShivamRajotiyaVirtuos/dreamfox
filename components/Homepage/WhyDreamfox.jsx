import React, { useState, useRef } from "react";
// import { Lightbulb, Zap, Target, Plus } from "lucide-react";
import {
  LightBulbIcon,
  BoltIcon,
  PuzzlePieceIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
const WhyDreamfox = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const containerRef = useRef(null);

  const features = [
    {
      icon: LightBulbIcon,
      title: "Creativity",
      description: "Crafted to surprise, inspire, and resonate.",
    },
    {
      icon: BoltIcon,
      title: "Speed",
      description:
        "Agile execution with startup speed and enterprise precision.",
    },
    {
      icon: LightBulbIcon,
      title: "Strategy",
      description: "Data-backed decisions with human intuition.",
    },
    {
      icon: PuzzlePieceIcon,
      title: "Innovation",
      description: "Always experimenting. Always evolving.",
    },
  ];

  const handleMouseMove = (e, index) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) * 0.1;
    const deltaY = (e.clientY - centerY) * 0.1;

    e.currentTarget.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = "translate(0px, 0px)";
  };

  return (
    <div
      className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8"
      ref={containerRef}
    >
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-6xl md:text-7xl font-bold mb-8 tracking-tight">
          Why DreamFox?
        </h1>
        <p className="text-2xl md:text-3xl text-gray-300 font-light tracking-wide">
          We Move Fast. Think Bold. Deliver Smart.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-24 max-w-[100rem] w-full">
        {features.map((feature, index) => {
          return (
            <div
              key={index}
              className="relative group cursor-pointer"
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={handleMouseLeave}
              onMouseEnter={() => setHoveredIndex(index)}
              style={{
                transition: "transform 0.3s cubic-bezier(0.23, 1, 0.32, 1)",
              }}
            >
              {/* Circular Container */}
              <div className="relative w-96 h-96 mx-auto">
                {/* Outer Ring */}
                <div className="absolute inset-0 rounded-full border border-gray-800 transition-all duration-500 group-hover:border-red-500 group-hover:shadow-2xl group-hover:shadow-red-500/20"></div>

                {/* Inner Content */}
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-gray-900 to-black flex flex-col items-center justify-center p-10 text-center transition-all duration-500 group-hover:from-gray-800 group-hover:to-gray-900">
                  {/* Icon */}
                  <div className="mb-6 transform transition-all duration-500 group-hover:scale-110">
                    <feature.icon className="w-16 h-16 text-white group-hover:text-red-400 transition-colors duration-500" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-red-400 transition-colors duration-500">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-500">
                    {feature.description}
                  </p>
                </div>

                {/* Magnetic Effect Glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-500/0 to-red-600/0 transition-all duration-500 group-hover:from-red-500/10 group-hover:to-red-600/5 pointer-events-none" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Spacing */}
      <div className="mt-20"></div>
    </div>
  );
};

export default WhyDreamfox;
