"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextReveal from "../Text Reveal/textreveal";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Productionprocess = () => {
  const progressRef = useRef(null);
  const circlesRef = useRef([]);
  const sectionsRef = useRef([]);
  const containerRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const numbersRef = useRef([]);
  const progressLineRef = useRef(null);

  const stages = [
    {
      title: "Insight Discovery",
      description:
        "We analyze audience behavior, market trends, and data signals to uncover what inspires engagement. Insight Discovery sets the foundation for content that's emotionally resonant and strategically focused.",
    },
    {
      title: "Story Architecture",
      description:
        "We craft narratives that align brand purpose with audience needs. Each framework ensures consistency in tone, visuals, and emotion — the structure behind compelling storytelling.",
    },
    {
      title: "AI Co-Creation",
      description:
        "Our creators collaborate with AI to ideate, refine, and personalize content at scale. Human creativity meets machine intelligence to accelerate high-impact storytelling.",
    },
    {
      title: "Omnichannel Activation",
      description:
        "We deliver content seamlessly across digital touchpoints — optimized for each platform's audience and algorithm. A unified voice ensures reach and resonance.",
    },
    {
      title: "Performance Amplification",
      description:
        "Using AI analytics, we track, learn, and evolve content in real time. Every performance insight fuels smarter strategy and measurable business results.",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial setup - hide everything
      gsap.set(circlesRef.current, { scale: 0, opacity: 0 });
      gsap.set(numbersRef.current, { scale: 0, opacity: 0 });
      gsap.set(sectionsRef.current, { opacity: 0, y: 50 });
      gsap.set(progressRef.current, { scaleX: 0 });
      gsap.set(progressLineRef.current, { opacity: 0 });

      // Pin the container and create scroll-triggered animations
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "+=400%", // Pin for the duration of 4 full viewport heights
        pin: window.innerWidth > 1024,
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const totalStages = stages.length;
          // Show progress line after initial moment
          if (progress > 0.05) {
            gsap.to(progressLineRef.current, {
              opacity: 1,
              duration: 0.3,
            });
          }

          // Animate progress line
          gsap.to(progressRef.current, {
            scaleX: progress * 1.5, // Leave a bit at the end
            duration: 0.1,
            ease: "none",
          });

          // Animate circles and cards based on progress
          circlesRef.current.forEach((circle, index) => {
            const stageStart = (index / totalStages) * 0.8; // Start earlier
            const stageEnd = ((index + 1) / totalStages) * 0.8;

            if (progress >= stageStart) {
              // Show circle
              gsap.to(circle, {
                scale: 1,
                opacity: 1,
                duration: 0.4,
                // delay: 0.4,

                ease: "back.out(1.7)",
              });

              // Show number
              gsap.to(numbersRef.current[index], {
                scale: 1,
                opacity: 1,
                duration: 0.4,
                // delay: 0.4,
                ease: "back.out(1.7)",
              });

              // Show corresponding card
              gsap.to(sectionsRef.current[index], {
                opacity: 1,
                y: 0,
                duration: 0.4,
                delay: 0.2,
                ease: "power2.out",
              });
            } else {
              // Hide if we're before this stage
              gsap.to(circle, {
                scale: 0,
                opacity: 0,
                duration: 0.3,
              });

              gsap.to(numbersRef.current[index], {
                scale: 0,
                opacity: 0,
                duration: 0.3,
              });

              gsap.to(sectionsRef.current[index], {
                opacity: 0,
                y: 50,
                duration: 0.3,
              });
            }
          });
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Spacer before pinned section */}

      {/* Pinned Main Section */}
      <div
        ref={containerRef}
        className="min-h-[80vh] bg-black xl:pt-32 flex flex-col justify-center overflow-hidden relative"
        style={{
          zIndex: 40,
        }}
      >
        <div className="w-full container">
          {/* Header */}
          <div className="text-center mb-12">
            <TextReveal
              animation="rotateX"
              stagger={0.1}
              duration={0.8}
              className="text-120 font-bold text-gray-50 mb-4"
            >
              Contentare Services
            </TextReveal>
            {/* <h2 className="text-120 font-bold text-gray-50 mb-4">
             
            </h2> */}
            <TextReveal
              animation="rotateX"
              stagger={0.1}
              duration={0.8}
              className="text-gray-50 text-30 max-w-5xl mx-auto"
            >
              Crafting intelligent content that connects humans and algorithms —
              where creativity meets cognition.
            </TextReveal>
          </div>

          {/* Progress Track */}
          <div className="hidden lg:block xl:mt-36">
            <div className="relative  mb-16">
              <div className="flex justify-between items-center relative mx-auto">
                {/* Progress Line Background */}
                {/* <div
                ref={progressLineRef}
                className="absolute top-1/2 left-0 right-0 h-1 bg-black -translate-y-1/2 rounded-full"
              /> */}

                {/* Active Progress Line */}
                <div className="absolute max-w-6xl mx-auto top-1/2 left-0 right-0 h-1 -translate-y-1/2 overflow-hidden">
                  <div
                    ref={progressRef}
                    className="h-full bg-gradient-to-r from-[#f0565f] to-[#e63089] origin-left rounded-full"
                    style={{ transformOrigin: "left center" }}
                  />
                </div>

                {/* Progress Circles */}
                {stages.map((_, index) => (
                  <div
                    key={index}
                    className="relative z-10 flex-1 flex justify-center"
                  >
                    <div
                      ref={(el) => (circlesRef.current[index] = el)}
                      className="w-16 h-16 rounded-full bg-white border-3 border-gray-200 flex items-center justify-center shadow-lg"
                    >
                      <div
                        ref={(el) => (numbersRef.current[index] = el)}
                        className="w-10 h-10 rounded-full bg-gradient-to-r from-[#f0565f] to-[#e63089] flex items-center justify-center"
                      >
                        <span className="text-white font-bold text-sm">
                          {index + 1}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1  sm:grid-cols-5 gap-6 mx-auto">
              {stages.map((stage, index) => (
                <div
                  key={index}
                  ref={(el) => (sectionsRef.current[index] = el)}
                  className="bg-white/10 p-7  rounded-xl shadow-lg border hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center mb-4">
                    {/* <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#f0565f] to-[#e63089] flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">
                      {index + 1}
                    </span>
                  </div> */}
                    <h3 className="text-24 font-semibold text-gray-100">
                      {stage.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-16">
                    {stage.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid lg:hidden grid-cols-1  sm:grid-cols-3 gap-6 mx-auto">
            {stages.map((stage, index) => (
              <div
                key={index}
                // ref={(el) => (sectionsRef.current[index] = el)}
                className="bg-white/10 p-7 group group-hover:bg-white rounded-xl shadow-lg border hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  {/* <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#f0565f] to-[#e63089] flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">
                      {index + 1}
                    </span>
                  </div> */}
                  <h3 className="text-24  font-semibold text-gray-100">
                    {stage.title}
                  </h3>
                </div>
                <p className="text-gray-200  leading-relaxed text-16">
                  {stage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Productionprocess;
