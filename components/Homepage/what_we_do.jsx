import React from "react";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

const WhatWeDo = () => {
  const cards = [
    {
      id: 1,
      title: "Brand Strategy",
      description:
        "We craft comprehensive brand strategies that resonate with your target audience and drive meaningful connections.",
    },
    {
      id: 2,
      title: "Digital Experiences",
      description:
        "Creating immersive digital experiences that captivate users and deliver exceptional user journeys.",
    },
    {
      id: 3,
      title: "Creative Design",
      description:
        "Bold and innovative design solutions that make your brand stand out in the competitive marketplace.",
    },
    {
      id: 4,
      title: "Growth Analytics",
      description:
        "Data-driven insights and analytics to measure performance and optimize for sustainable growth.",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 p-6 lg:p-8">
      {/* Left Side */}
      <div className="lg:w-1/2 space-y-6">
        <h2 className="text-[20px] font-bold text-gray-900">What we do</h2>

        <p className="text-[24px] leading-relaxed text-gray-700">
          At DreamFox, we go far beyond simply offering digital services — we
          architect meaningful brand journeys from the ground up. Every project
          we take on is rooted in thoughtful strategy, bold creativity, and a
          deep understanding of what drives modern audiences. Our approach is
          built on four foundational pillars that guide everything we do —
          empowering brands to transform, tell unforgettable stories, create
          immersive experiences, and achieve measurable growth in the digital
          space.
        </p>

        <button className="group flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg hover:bg-white hover:text-black border-2 border-black transition-all duration-300">
          <span>Learn More</span>
          <ArrowUpRightIcon className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
        </button>
      </div>

      {/* Cards section that overflows container */}
      <div className="w-full">
        

        {/* Overflow section for cards to touch right edge */}
        <div className="overflow-x-auto">
          <div className="flex gap-6 pl-[calc((100vw-1280px)/2+2rem)] pr-0 min-w-full">
            {cards.map((card) => (
              <div
                key={card.id}
                className="min-w-[280px] bg-white rounded-lg shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
