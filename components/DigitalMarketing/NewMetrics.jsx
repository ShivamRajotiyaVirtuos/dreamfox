import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import TextReveal from "../Text Reveal/textreveal";
import { GlobeAsiaAustraliaIcon, SunIcon } from "@heroicons/react/24/solid";
import { TrophyIcon } from "@heroicons/react/24/outline";

const PortfolioMetrics = () => {
  const containerRef = useRef(null);
  const storageNumberRef = useRef(null);
  const capexNumberRef = useRef(null);
  const esgNumberRef = useRef(null);
  const regionsNumberRef = useRef(null);
  const ringRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const startAnimations = () => {
    if (hasAnimated) return;
    setHasAnimated(true);

    const ctx = gsap.context(() => {
      // Timeline for coordinated animations
      const tl = gsap.timeline();

      // Text reveal animations from left to right
      tl.fromTo(
        ".reveal-text",
        {
          x: -100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
        }
      );

      // Number counter animations
      const animateNumber = (ref, endValue, suffix = "", prefix = "") => {
        if (!ref.current) return;

        gsap.fromTo(
          ref.current,
          { innerText: 0 },
          {
            innerText: endValue,
            duration: 3,
            ease: "power2.out",
            snap: { innerText: endValue < 10 ? 0.1 : 1 },
            onUpdate: function () {
              const value = parseFloat(this.targets()[0].innerText);
              if (endValue < 10) {
                ref.current.innerText = prefix + value.toFixed(1) + suffix;
              } else {
                ref.current.innerText = prefix + Math.round(value) + suffix;
              }
            },
          }
        );
      };

      // Start number animations after text reveals
      tl.add(() => {
        animateNumber(storageNumberRef, 120, " +");
        animateNumber(capexNumberRef, 300, " +");
        animateNumber(esgNumberRef, 15, " +");
        animateNumber(regionsNumberRef, 10);
      }, 0.5);

      // Icon animations
      tl.fromTo(
        ".icon-animate",
        {
          scale: 0,
          rotation: -180,
        },
        {
          scale: 1,
          rotation: 0,
          duration: 1,
          stagger: 0.1,
          ease: "back.out(1.7)",
        },
        0.8
      );

      // Ring animation
      gsap.fromTo(
        ringRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          delay: 0.2
        }
      );

      gsap.to(ringRef.current, {
        rotation: 360,
        duration: 3,
        ease: "none",
        repeat: -1,
        delay: 0.2
      });
    }, containerRef);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            startAnimations();
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the component is visible
        rootMargin: '0px'
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-black relative overflow-hidden"
    >
      <div className="w-full flex justify-center mb-4 md:mb-8  ">
        <TextReveal
          //   ref={headingRef}
          className="text-center text-120 pt-20   font-bold text-white"
          style={{ pointerEvents: "none" }}
          animation="rotateX"
          stagger={0.1}
          duration={0.8}
        >
          Our Metrics
        </TextReveal>
      </div>
      {/* Background laptop image effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-64 bg-gray-700 rounded-lg transform -rotate-12"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-64 bg-gray-600 rounded-lg transform rotate-6"></div>
        <div className="absolute bottom-1/6 left-1/2 w-96 h-64 bg-gray-500 rounded-lg transform -rotate-3"></div>
      </div>

      {/* Main content grid */}
      <div className="relative container z-10  grid grid-cols-2 grid-rows-2">
        {/* Storage Portfolio - Top Left */}
        <div className="flex flex-col justify-center items-start px- sm:px-16 border-r border-b border-gray-600">
          <div className="reveal-text text-white text-100 font-light">
            <span ref={storageNumberRef}>0</span>
          </div>
          <div className="reveal-text text-pink-400 text-30 font-light mb-4 tracking-wider ml-10 sm:ml-24 lg:ml-48">
            CLIENTS
          </div>
        </div>

        {/* Sun Icon - Top Right */}
        <div className="flex flex-col justify-center items-center px- sm:px-16 border-b border-gray-600">
          <div className="icon-animate mb-8">
            <GlobeAsiaAustraliaIcon ref={ringRef} className="size-32  text-pink-500" />
          </div>
        </div>

        {/* Regions - Bottom Left */}
        <div className="flex flex-col justify-center items-start p-6 sm:p-12 lg:p-16 border-r border-gray-600">
          <div className="reveal-text text-pink-400 text-30 font-light mb-8 tracking-wider uppercase">
            Countries
          </div>
          <div className="reveal-text text-white text-100 font-light">
            <span ref={regionsNumberRef}>0</span>
          </div>
        </div>

        {/* CAPEX and ESG - Bottom Right */}
        <div className="flex flex-col justify-between p-6 sm:p-12 lg:p-16">
          {/* CAPEX Section */}
          <div className="flex-1 flex flex-col justify-center">
            <div className="reveal-text  text-white text-80 font-light">
              <span ref={capexNumberRef}>0</span>
            </div>
            <div className="reveal-text text-pink-400 text-30 font-light mb-8 tracking-wider">
              PROJECTS
            </div>
          </div>

          {/* ESG Section */}
          <div className="flex-1 flex flex-col justify-center">
            <div className="flex items-end gap-4 mb-8">
              <div className="reveal-text text-white text-30 font-light">
                <span className="text-80" ref={esgNumberRef}>+0</span> 
                {/* <span className="text-pink-400"> */}
                Awards

                {/* </span> */}
              </div>
              <TrophyIcon className="size-24 animate-bounce text-yellow-500" />

            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-2 h-20 bg-gradient-to-b from-white to-transparent opacity-30"></div>
      <div className="absolute bottom-10 left-10 w-20 h-2 bg-gradient-to-r from-white to-transparent opacity-30"></div>
    </div>
  );
};

export default PortfolioMetrics;