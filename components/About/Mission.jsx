"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MissionVision = () => {
  const missionRef = useRef(null);
  const visionRef = useRef(null);
  const missionTextRef = useRef(null);
  const missionImagesRef = useRef(null);
  const visionTextRef = useRef(null);
  const visionImagesRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Mission Section Animations
      gsap.fromTo(
        missionTextRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: missionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        missionImagesRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: missionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: true,
          },
        }
      );

      // Vision Section Animations
      gsap.fromTo(
        visionTextRef.current,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: visionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        visionImagesRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: visionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative w-full bg-black text-white">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="https://static.vecteezy.com/system/resources/previews/025/441/400/mp4/abstract-loop-dark-radial-shine-rays-flare-light-free-video.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Mission Section */}
      <section
        ref={missionRef}
        className="relative w-full min-h-screen flex items-center overflow-hidden z-10"
      >
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-16">
          {/* Left Text */}
          <div
            ref={missionTextRef}
            className="flex flex-col justify-center order-1 md:order-none"
          >
            <h2 className="text-120 font-bold mb-4">Our Mission</h2>
            <p className="text-30 leading-relaxed">
              To empower individuals and organizations by providing innovative
              solutions that drive success and create a positive impact on the
              world.
            </p>
          </div>

          {/* Right Images */}
          <div
            ref={missionImagesRef}
            className="grid grid-cols-2 gap-4 order-2 md:order-none"
          >
            <img
              src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=300&fit=crop"
              alt="Mission 1"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop"
              alt="Mission 2"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop"
              alt="Mission 3"
              className="col-span-2 w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section
        ref={visionRef}
        className="relative w-full min-h-screen flex items-center overflow-hidden z-10"
      >
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 py-16">
          {/* Left Images */}
          <div
            ref={visionImagesRef}
            className="grid grid-cols-2 gap-4 order-2 md:order-none"
          >
            <img
              src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=400&h=300&fit=crop"
              alt="Vision 1"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=400&h=300&fit=crop"
              alt="Vision 2"
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop"
              alt="Vision 3"
              className="col-span-2 w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Right Text */}
          <div
            ref={visionTextRef}
            className="flex flex-col justify-center order-1 md:order-none"
          >
            <h2 className="text-120 font-bold mb-4">Our Vision</h2>
            <p className="text-30 leading-relaxed">
              To be a global leader in innovation, inspiring progress and
              shaping a sustainable future for generations to come.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MissionVision;