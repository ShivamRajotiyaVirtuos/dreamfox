"use client";
import React, { useEffect } from "react";
import VanillaTilt from "vanilla-tilt";
import {
  HiLightBulb,
  HiAdjustmentsHorizontal,
  HiUsers,
  HiGlobeAmericas,
} from "react-icons/hi2";

const valuesData = [
  {
    icon: <HiLightBulb size={36} />,
    title: "Innovation First",
    description: "We embrace change and continuously seek creative solutions to move forward.",
  },
  {
    icon: <HiAdjustmentsHorizontal size={36} />,
    title: "Think Smart",
    description: "We approach challenges with intelligence and make data-driven decisions.",
  },
  {
    icon: <HiUsers size={36} />,
    title: "People Matter",
    description: "We support, uplift, and celebrate the diversity and passion of our people.",
  },
  {
    icon: <HiGlobeAmericas size={36} />,
    title: "Global Impact",
    description: "We aim to create a meaningful, scalable impact beyond borders.",
  },
  {
    icon: <HiGlobeAmericas size={36} />,
    title: "Global Impact",
    description: "We aim to create a meaningful, scalable impact beyond borders.",
  },
];

const CultureValuesSection = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      VanillaTilt.init(document.querySelectorAll(".card-container"), {
        reverse: false,
        max: 15,
        startX: 0,
        startY: 0,
        perspective: 1000,
        scale: 1,
        speed: 300,
        transition: true,
        axis: null,
        reset: true,
        "reset-to-start": true,
        easing: "cubic-bezier(.03,.98,.52,.99)",
        glare: false,
        "max-glare": 1,
        "glare-prerender": false,
        "mouse-event-element": null,
        "full-page-listening": false,
        gyroscope: true,
        gyroscopeMinAngleX: -45,
        gyroscopeMaxAngleX: 45,
        gyroscopeMinAngleY: -45,
        gyroscopeMaxAngleY: 45,
        gyroscopeSamples: 10,
      });
    }
  }, []);

  return (
    <section className="w-full py-20 bg-black text-white container lg:min-h-[60vh]">
      <h2 className="text-center text-120 font-bold text-white mb-16 mt-20">
        Culture & Values
      </h2>

      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-2
          lg:grid-cols-2
          xl:grid-cols-4
          gap-8
          px-4
          justify-items-center
        "
      >
        {valuesData.slice(0, 4).map((item, index) => (
          <div
            key={index}
            className="card-container bg-neutral-900"
            data-tilt
          >
            <div className="content-area p-5 flex flex-col items-center justify-center gap-4">
              <div className="icon text-[#ed4a6dff]">{item.icon}</div>
              <h1 className=" text-30 font-bold text-center">
                {item.title}
              </h1>
              <p className="text-16 text-gray-300 text-center font-light mb-2 ">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .card-container {
          position: relative;
          height: 200px;
          min-width: 200px;          
          border-radius: 1.5rem;
          overflow: hidden;
          background-color: #0f0f0f;
          box-shadow:
            0 0 0 1px rgba(168, 85, 247, 0.25),
            0 0 20px 6px rgba(147, 51, 234, 0.15);
          transform-style: preserve-3d;
          transition: transform 0.5s ease, box-shadow 0.4s ease;
        }

        .card-container:hover {
          box-shadow:
            0 0 0 1.5px rgba(168, 85, 247, 0.4),
            0 0 25px 10px rgba(168, 85, 247, 0.2);
        }

        .content-area {
          transform: translateZ(60px);
          z-index: 10;
          height: 100%;
        }

        .font-serif-display {
          font-family: 'Playfair Display', serif;
        }
      `}</style>
    </section>
  );
};

export default CultureValuesSection;