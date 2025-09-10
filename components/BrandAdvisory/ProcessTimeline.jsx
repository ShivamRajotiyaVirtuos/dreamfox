"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextReveal from "../Text Reveal/textreveal";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    title: "IDEATE",
    desc: "Discover insights, spark possibilities",
    image: "/svgs/ideate.svg",
  },
  {
    title: "DEFINE",
    desc: "Shape brand vision, values clearly",
    image: "/svgs/define.svg",
  },
  {
    title: "DESIGN",
    desc: "Create identity, experience touchpoints",
    image: "/svgs/design.svg",
  },
  {
    title: "BUILD",
    desc: "Integrate across digital, AI, physical",
    image: "/svgs/build.svg",
  },
  {
    title: "AMPLIFY",
    desc: "Elevate impact, scale visibility",
    image: "/svgs/amplify.svg",
  },
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
      <div className="">
        <TextReveal
          animation="rotateX"
          stagger={0.1}
          duration={0.8}
          className="text-white text-120 font-bold text-center sm:pt-16 mb-6 lg:pt-32"
        >
          How Brands Stack Up
        </TextReveal>
        <TextReveal
          className="text-40 text-center mx-auto max-w-7xl text-white/80 "
          animation="rotateX"
          stagger={0.1}
          duration={0.5}
        >
          Brands stack up through clarity, creativity, and consistency—gaining
          identity, trust, and relevance. At DreamFox, we shape bold brands that
          thrive across digital, AI, and real-world experiences.
        </TextReveal>
      </div>

      <section
        ref={containerRef}
        className="relative w-full h-[100vh] overflow-hidden bg-black"
      >
        {/* Progress line */}
        {/* Progress line */}
        <div className="absolute top-1/2 left-0 right-0 h-16 pointer-events-none z-0 -translate-y-1/2 flex items-center">
          <svg
            ref={lineRef}
            width="100%"
            height="100%"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
            className="w-full h-16"
            style={{ position: "absolute", left: 0, top: 0 }}
          >
            {/* Gradient definitions */}
            <defs>
              <linearGradient
                id="waveGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#ec4899" />
                <stop offset="25%" stopColor="#D2448D" />
                <stop offset="50%" stopColor="#8b5cf6" />
                <stop offset="75%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>

              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Background wavy path */}
            <path
              d="M0,50 Q100,20 200,50 T400,50 Q500,30 600,50 T800,50 Q900,25 1000,50"
              stroke="url(#waveGradient)"
              strokeWidth="8"
              fill="none"
              opacity="0.3"
              strokeDasharray="5,5"
              className="animate-pulse"
            />

            {/* Main animated wavy path */}
            <path
              ref={lineRef}
              d="M0,50 Q100,20 200,50 T400,50 Q500,30 600,50 T800,50 Q900,25 1000,50"
              stroke="url(#waveGradient)"
              strokeWidth="8"
              fill="none"
              filter="url(#glow)"
              strokeLinecap="round"
              strokeDasharray="0"
              style={{
                opacity: 1,
                pathLength: 1,
                strokeDasharray: "1000",
                strokeDashoffset: "1000",
              }}
            />

            {/* Floating particles along path */}
            <circle r="3" fill="#ec4899" opacity="0.8">
              <animateMotion dur="8s" repeatCount="indefinite">
                <mpath href="#wavePathMotion" />
              </animateMotion>
            </circle>

            <circle r="2" fill="#8b5cf6" opacity="0.6">
              <animateMotion dur="10s" repeatCount="indefinite" begin="2s">
                <mpath href="#wavePathMotion" />
              </animateMotion>
            </circle>

            {/* Hidden path for motion */}
            <path
              id="wavePathMotion"
              d="M0,50 Q100,20 200,50 T400,50 Q500,30 600,50 T800,50 Q900,25 1000,50"
              fill="none"
              stroke="none"
            />
          </svg>
        </div>

        {/* Step boxes */}
        <div className="relative w-full h-full 3xl:mt-16 4xl:mt-10">
          {steps.map((step, i) => (
            <div
              key={i}
              ref={(el) => (boxesRef.current[i] = el)}
              className="group h-[25rem] sm:h-[40rem] w-[80%] xl:w-[70rem] relative"
            >
              {/* Glowing background */}
              {/* <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" /> */}

              {/* Main card */}
              <div className="relative bg-gradient-to-r from-white to-gray-300 bg-gray-900/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 h-full transform transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-2">
                {/* Floating icon */}
                {/* <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${step.gradient} rounded-2xl flex items-center justify-center text-2xl shadow-2xl transform rotate-3 group-hover:rotate-0 transition-transform duration-500`}
                  >
                    {step.icon}
                  </div>
                </div> */}

                {/* Step number */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center text-sm font-bold text-black">
                  {i + 1}
                </div>
                <div className="flex flex-col gap-10 sm:flex-row items-center justify-center h-full">
                  <div className="lg:w-1/2">
                    <Image
                      src={step.image}
                      alt={step.title}
                      width={400}
                      height={400}
                      className="mx-auto mt-6"
                    />
                  </div>

                  {/* Content */}
                  <div className="lg:w-1/2  pt-8 text-left">
                    <h3 className="text-60 font-thin mb-4  ">{step.title}</h3>
                    <p className="text-gray-700 font-thin text-30 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* Decorative elements */}
                {/* <div className="absolute bottom-4 left-4 w-2 h-2 bg-pink-500 rounded-full opacity-50" />
                <div className="absolute bottom-4 right-4 w-1 h-1 bg-purple-500 rounded-full opacity-50" /> */}

                {/* Hover effect overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
