"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    title: "Inform yourself",
    description:
      "Bitcoin is different than what you know and use every day. Learn how to use it securely and avoid common pitfalls.",
  },
  {
    title: "Choose your wallet",
    description:
      "You can install an app on your mobile or use a desktop wallet. It's easy and takes just a few minutes.",
  },
  {
    title: "Spend Bitcoin",
    description:
      "Use Bitcoin for goods and services and rate your experience to help others.",
  },
  {
    title: "Get Bitcoin",
    description:
      "Earn Bitcoin through payments or buy from exchanges and other services.",
  },
];

export default function ProductionProcess() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const stepsEl = gsap.utils.toArray(".step");

      // Horizontal scroll animation
      gsap.to(trackRef.current, {
        xPercent: -100 * (stepsEl.length - 1),
        ease: "none",
        scrollTrigger: {
          id: "hScroll",
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          end: () => containerRef.current.offsetWidth * (stepsEl.length - 1),
        },
      });

      // Animate circles and lines together
      stepsEl.forEach((step, i) => {
        const circle = step.querySelector(".circle");
        const line = step.querySelector(".line");

        // Circle scale-in
        gsap.fromTo(
          circle,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            scrollTrigger: {
              trigger: step,
              start: "left center",
              end: "left center",
              scrub: true,
            },
          }
        );

        // Line grow from circle
        if (line) {
          gsap.fromTo(
            line,
            { scaleX: 0 },
            {
              scaleX: 1,
              transformOrigin: "left center",
              scrollTrigger: {
                trigger: step,
                start: "left center",
                end: "left center",
                scrub: true,
              },
            }
          );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-black text-white"
    >
      <div
        ref={trackRef}
        className="flex h-full w-fit items-center px-32 space-x-32"
      >
        {steps.map((step, index) => (
          <div
            key={index}
            className="step flex-shrink-0 w-[400px] text-center relative"
          >
            <div className="relative flex items-center justify-start w-full h-10 mb-6">
              <div className="circle w-6 h-6 border-2 border-purple-500 rounded-full bg-black z-10" />
              {index < steps.length - 1 && (
                <div className="line h-[2px] bg-purple-500 ml-0 origin-left transform scale-x-0 w-64" />
              )}
            </div>
            <h3 className="text-xl font-semibold">{step.title}</h3>
            <p className="mt-2 text-sm text-gray-400 max-w-md mx-auto">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
