"use client";
import React, { useEffect } from "react";
import VanillaTilt from "vanilla-tilt";
import {
  LightBulbIcon,
  AdjustmentsHorizontalIcon,
  UsersIcon,
  GlobeAmericasIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  SparklesIcon,
} from "@heroicons/react/24/solid";
import TextReveal from "../Text Reveal/textreveal";

const valuesData = [
  {
    icon: <LightBulbIcon className="size-16" />,
    title: "Virtuosity",
    description:
      "Mastering creativity and AI to deliver unmatched design excellence.",
  },
  {
    icon: <ShieldCheckIcon className="size-16" />,
    title: "Veracity",
    description:
      "Upholding truth, trust, and transparency in every client engagement.",
  },
  {
    icon: <RocketLaunchIcon className="size-16" />,
    title: "Velocity",
    description:
      "Driving rapid innovation and execution for accelerated digital growth.",
  },
  {
    icon: <SparklesIcon className="size-16" />,
    title: "Vivacity",
    description:
      "Infusing energy, passion, and vibrancy into brands and experiences.",
  },
];

const Values_services = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      VanillaTilt.init(document.querySelectorAll(".card-container"), {
        reverse: false,
        max: 15,
        perspective: 1000,
        scale: 1,
        speed: 300,
        transition: true,
        easing: "cubic-bezier(.03,.98,.52,.99)",
        reset: true,
        glare: false,
        gyroscope: true,
      });
    }
  }, []);

  return (
    <section className="w-full py-20 lg:pb-32 bg-black text-white container lg:min-h-[60vh]">
      <TextReveal
        animation="rotateX"
        stagger={0.1}
        duration={0.8}
        className="text-center text-120 font-bold text-white  mt-20"
      >
        DreamFox Values
      </TextReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 md:mt-24 px-4 justify-items-center">
        {valuesData.map((item, index) => (
          <div key={index} className="card-container bg-neutral-100" data-tilt>
            <div className="content-area px-5 py-10 flex flex-col items-center justify-center gap-4">
              <div className="icon text-[#ed4a6dff]">{item.icon}</div>
              <h1 className="text-2xl font-bold text-center">{item.title}</h1>
              <p className="text-base text-gray-300 text-center font-light mb-2">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .card-container {
          position: relative;

          border-radius: 1.5rem;
          overflow: hidden;
          background-color: #0f0f0f;
        
          transform-style: preserve-3d;
          transition: transform 0.5s ease, box-shadow 0.4s ease;
        }

       .card-container:hover {
  box-shadow:
    0 0 0 1.5px rgba(236, 72, 153, 0.4),
    0 0 25px 10px rgba(236, 72, 153, 0.2);
}


        .content-area {
          transform: translateZ(60px);
          z-index: 10;
          height: 100%;
        }
      `}</style>
    </section>
  );
};

export default Values_services;
