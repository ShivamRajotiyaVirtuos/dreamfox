"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { title: "Discover", desc: "Initial research and ideation." },
  { title: "Design", desc: "Create wireframes and prototypes." },
  { title: "Develop", desc: "Build with modern tools." },
  { title: "Test", desc: "Ensure quality and performance." },
  { title: "Deploy", desc: "Launch to the world." },
];

export default function ProcessTimeline() {
  const containerRef = useRef(null);
  const boxesRef = useRef([]);
  const lineRef = useRef(null);

  useEffect(() => {
    const boxes = boxesRef.current;

    // Position boxes horizontally
    gsap.set(boxes, {
      x: (i) => i * window.innerWidth,
      position: "absolute",
      top: "50%",
      left: "50%",
      xPercent: -50,
      yPercent: -50,
    });

    // Horizontal scroll animation
    const scrollTween = gsap.to(boxes, {
      x: (i) => (i - (steps.length - 1)) * window.innerWidth,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: () => "+=" + window.innerHeight * (steps.length - 1),
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    // Progress line animation
    gsap.fromTo(
      lineRef.current,
      { scaleX: 0 },
      {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: () => "+=" + window.innerHeight * (steps.length - 1),
          scrub: true,
        },
        transformOrigin: "left center",
      }
    );

    // Border highlight animation
    boxes.forEach((box) => {
      gsap.to(box, {
        // borderColor: "#3b82f6",
        scrollTrigger: {
          trigger: box,
          start: "center center",
          end: "center center",
          scrub: true,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      scrollTween.kill();
    };
  }, []);

  return (
    <>
      <h1 className="text-white text-120 font-bold text-center py-12">
        Process Timeline
      </h1>
      <section
        ref={containerRef}
        className="relative w-full h-screen overflow-hidden bg-black"
      >
        {/* Progress line */}
        {/* Progress line */}
        <div className="absolute top-1/2 left-0 right-0 h-16 pointer-events-none z-0 -translate-y-1/2 flex items-center">
          <svg
            ref={lineRef}
            width="100%"
            height="100%"
            viewBox="0 0 1000 32"
            preserveAspectRatio="none"
            className="w-full h-16"
            style={{ position: "absolute", left: 0, top: 0 }}
          >
            {/* Heart-rate style line */}
            <path
              id="wavyPath"
              d="M0,16 L100,16 L120,8 L140,24 L160,16 L300,16 L320,4 L340,28 L360,16 L500,16 L520,6 L540,26 L560,16 L700,16 L720,10 L740,22 L760,16 L1000,16"
              stroke="#D2448D"
              strokeWidth="6"
              fill="none"
              style={{ opacity: 0.7 }}
            />
            <path
              ref={lineRef}
              stroke="#D2448D"
              strokeWidth="6"
              fill="none"
              style={{ opacity: 1 }}
            />
          </svg>
        </div>

        {/* Step boxes */}
        <div className="relative w-full h-full">
          {steps.map((step, i) => (
            <div
              key={i}
              ref={(el) => (boxesRef.current[i] = el)}
              className="w-[50rem] h-[30rem] bg-gray-900/60 backdrop-blur-2xl border-4 border-transparent rounded-3xl shadow-2xl p-1 flex items-center justify-center relative"
            >
              {/* Pink glowing border */}
              <div
                className="absolute inset-0 rounded-3xl z-0 pointer-events-none"
                style={{
                  boxShadow: "0 0 40px 10px #d2448d, 0 0 80px 30px #dc6263",
                  border: "4px solid transparent",
                  borderRadius: "1.5rem",
                  pointerEvents: "none",
                  opacity: 0.7,
                  transition: "box-shadow 0.3s",
                }}
              />
              <div className="w-full h-full flex flex-col justify-center items-center text-center px-10 py-8 relative z-10">
                <h2 className="text-80 italic font-extrabold text-[#D2448D] mb-4 drop-shadow-sm">
                  {step.title}
                </h2>
                <p className="text-30 italic text-white max-w-md">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
