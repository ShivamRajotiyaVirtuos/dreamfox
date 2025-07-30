// edge to edge


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
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          duration: 2.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: missionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: true,
          },
        }
      );

      // Enhanced mission images animation with border color transition
      gsap.fromTo(
        missionImagesRef.current,
        { 
          opacity: 0, 
          y: 100, 
          borderWidth: "0px"
        },
        {
          opacity: 1,
          y: 0,
          borderWidth: "4px",
          duration: 2.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: missionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: true,
            onUpdate: (self) => {
              const progress = self.progress;
              const images = missionImagesRef.current;
              
              // Direct gradient transition without white border
              const gradientOpacity = progress;
              
              images.style.borderImage = `linear-gradient(45deg, rgba(255, 0, 110, ${gradientOpacity}), rgba(131, 56, 236, ${gradientOpacity})) 1`;
              images.style.borderColor = "transparent";
            },
          },
        }
      );

      // Vision Section Animations
      gsap.fromTo(
        visionTextRef.current,
        { opacity: 0, x: 100 },
        {
          opacity: 1,
          x: 0,
          duration: 2.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: visionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: true,
          },
        }
      );

      // Enhanced vision images animation with border color transition
      gsap.fromTo(
        visionImagesRef.current,
        { 
          opacity: 0, 
          y: 100, 
          borderWidth: "0px"
        },
        {
          opacity: 1,
          y: 0,
          borderWidth: "4px",
          duration: 2.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: visionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: true,
            onUpdate: (self) => {
              const progress = self.progress;
              const images = visionImagesRef.current;
              
              // Direct gradient transition without white border
              const gradientOpacity = progress;
              
              images.style.borderImage = `linear-gradient(45deg, rgba(255, 0, 110, ${gradientOpacity}), rgba(131, 56, 236, ${gradientOpacity})) 1`;
              images.style.borderColor = "transparent";
            },
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative w-full bg-black text-white">
      {/* Mission Section */}
      <section
        ref={missionRef}
        className="relative w-full flex items-center overflow-hidden z-10"
      >
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 px-6 pt-16">
          {/* Left Text */}
          <div
            ref={missionTextRef}
            className="md:mr-10 2xl:mt-40 flex flex-col justify-center order-1 md:order-none"
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
            className="grid grid-cols-2 gap-4 order-2 md:order-none border-solid h-full"
            style={{
              borderWidth: "0px",
              borderColor: "transparent",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=300&fit=crop"
              alt="Mission 1"
              className="w-full h-auto shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop"
              alt="Mission 2"
              className="w-full h-auto shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop"
              alt="Mission 3"
              className="col-span-2 w-full h-auto shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section
        ref={visionRef}
        className="relative w-full flex items-start overflow-hidden z-10"
      >
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 px-6 pb-16 md:pb-32">
          {/* Left Images */}
          <div
            ref={visionImagesRef}
            className="grid grid-cols-2 gap-4 order-2 md:order-none border-solid h-full"
            style={{
              borderWidth: "0px",
              borderColor: "transparent",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=400&h=300&fit=crop"
              alt="Vision 1"
              className="w-full h-auto shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=400&h=300&fit=crop"
              alt="Vision 2"
              className="w-full h-auto shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop"
              alt="Vision 3"
              className="col-span-2 w-full h-auto shadow-lg"
            />
          </div>

          {/* Right Text */}
          <div
            ref={visionTextRef}
            className="md:ml-10 2xl:mt-40 flex flex-col justify-center order-1 md:order-none mt-10 md:mt-0  "
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