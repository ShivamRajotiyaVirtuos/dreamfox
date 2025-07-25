"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  UsersIcon,
  RocketLaunchIcon,
  TrophyIcon,
  GlobeAmericasIcon,
} from "@heroicons/react/24/outline";

gsap.registerPlugin(ScrollTrigger);

const metrics = [
  {
    label: "Clients",
    value: "120+",
    w: 200,
    h: 180,
    x: "5vw", 
    y: "15vh",
    icon: UsersIcon, 
  },
  {
    label: "Projects",
    value: "300+",
    w: 200,
    h: 180,
    x: "65vw",
    y: "10vh",
    icon: RocketLaunchIcon, 
  },
  {
    label: "Awards",
    value: "15",
    w: 200,
    h: 180,
    x: "25vw",
    y: "60vh",
    icon: TrophyIcon, 
  },
  {
    label: "Countries",
    value: "10",
    w: 200,
    h: 180,
    x: "70vw",
    y: "50vh",
    icon: GlobeAmericasIcon, 
  },
];

const blurs = [
  { top: "10%", left: "15%", size: 220, color: "#a259f7", opacity: 0.25 },
  { top: "60%", left: "70%", size: 180, color: "#8e44ad", opacity: 0.18 },
  { top: "40%", left: "40%", size: 140, color: "#d2448d", opacity: 0.13 },
  { top: "20%", left: "60%", size: 200, color: "#9b59b6", opacity: 0.2 },
];

export default function MetricSection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardRefs = useRef([]);
  const contentRef = useRef(null);

  useGSAP(() => {
    const masterTL = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top", 
        end: "+=100%",
        pin: true,
        pinSpacing: true,
        scrub: 1,
        markers: true,
        onEnter: () => {
          console.log("Section entered viewport");
        },
        onLeave: () => {
          console.log("Section left viewport");
        }
      }
    });
    
    const totalWidth = metrics.length * 220;
    const startX = (window.innerWidth - totalWidth) / 2;
    
    const cardsToCenter = gsap.timeline();
    metrics.forEach((m, i) => {
      cardsToCenter.to(
        cardRefs.current[i],
        {
          x: `${startX + (i * 220)}px`, 
          y: "calc(50vh - 90px)", 
          duration: 0.5,
          ease: "power2.inOut",
        }, 
        i * 0.05 
      );
    });
    
    const pauseTimeline = gsap.timeline();
    pauseTimeline.to({}, {duration: 1}); 
    
    masterTL.add(cardsToCenter, 0)
           .add(pauseTimeline, 0.33);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen bg-black flex flex-col items-center justify-start py-12 overflow-hidden"
    >
      {/* Header fixed at the top of this section */}
      <div className="w-full flex justify-center mb-10 pt-6">
        <h2
          ref={headingRef}
          className="text-center text-120 pt-10 font-bold text-white"
          style={{ pointerEvents: "none" }}
        >
           Campaign Case Studies
        </h2>
      </div>

      {/* Purple blur blobs */}
      {blurs.map((b, i) => (
        <div
          key={i}
          className="pointer-events-none absolute rounded-full blur-3xl"
          style={{
            top: b.top,
            left: b.left,
            width: b.size,
            height: b.size,
            background: b.color,
            opacity: b.opacity,
            zIndex: 0,
          }}
        />
      ))}

      <div ref={contentRef} className="w-full h-full flex flex-col items-center">
        <div className="w-full h-full relative z-10">
          {metrics.map((m, i) => (
            <div
              key={i}
              ref={el => (cardRefs.current[i] = el)}
              className="absolute flex flex-col items-start justify-start transition-all duration-500"
              style={{
                width: m.w,
                height: m.h,
                position: "absolute",
                left: 0,
                top: 0,
                opacity: 1,
                transform: `translate(${m.x}, ${m.y})`,
                // background: "rgba(255,255,255,0.08)",
                boxSizing: "border-box",
                zIndex: 10,
              }}
            >
              {/* SVG Outline background */}
              <div className="absolute inset-0 z-0">
                <svg width="100%" height="100%" viewBox="0 0 304 336" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
                  <path d="M1 317V19.2224C1 9.19484 9.1942 1.10062 19.221 1.22374L189.778 3.31808C196.646 3.40242 202.868 7.38852 205.816 13.593L227.986 60.263C230.775 66.133 236.511 70.0441 242.994 70.4958L286.251 73.5096C295.684 74.1667 303 82.0104 303 91.466V317C303 326.941 294.941 335 285 335H152H19C9.05887 335 1 326.941 1 317Z" stroke="white" strokeWidth="1.5"/>
                </svg>
              </div>

              {/* Content - positioned over the SVG */}
              <div className="relative z-10 flex flex-col items-start p-6 w-full h-full">
                {/* Icon in top left */}
                <span className="mb-4 text-white">
                  <m.icon className="w-10 h-10 text-white" />
                </span>
                
                {/* Value with gradient */}
                <span 
                  className="text-5xl font-bold mb-2"
                  style={{
                    background: "linear-gradient(90deg, #EC486E 0%, #EC486E 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text"
                  }}
                >
                  {m.value}
                </span>
                
                {/* Label in white */}
                <span className="text-xl text-white">{m.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}