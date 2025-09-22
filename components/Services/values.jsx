"use client";
import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  LightBulbIcon,
  AdjustmentsHorizontalIcon,
  UsersIcon,
  GlobeAmericasIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  SparklesIcon,
  CursorArrowRippleIcon,
} from "@heroicons/react/24/solid";
import TextReveal from "../Text Reveal/textreveal";
import Image from "next/image";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

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
  const cardsRef = useRef([]);

  useEffect(() => {
    // Initialize VanillaTilt
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

    // GSAP Animation
    const cards = cardsRef.current;

    // Set initial state - cards start from below and invisible
    gsap.set(cards, {
      y: 80,
      opacity: 0,
      scale: 0.95,
      rotationX: 15,
    });

    // Create scroll trigger animation
    gsap.to(cards, {
      y: 0,
      opacity: 1,
      scale: 1,
      rotationX: 0,
      duration: 1.2,
      stagger: {
        amount: 0.6, // Total time for all cards to finish animating
        from: "start", // Animation starts from first card
        ease: "power2.out",
      },
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".cards-grid",
        start: "top 85%",
        end: "bottom 15%",
        toggleActions: "play none none reverse",
        scrub: false,
      },
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="w-full relative pb-20 lg:pb-32 bg-black text-white container 2xl:min-h-[60vh]">
      <TextReveal
        animation="rotateX"
        stagger={0.1}
        duration={0.8}
        className="text-center z-20 relative text-120 font-bold text-white mt-20"
      >
        DreamFox Values
      </TextReveal>
      <Image
        src={"/images/fox1.svg"}
        alt="fox"
        width={800}
        height={800}
        className="mx-auto hidden sm:block z-0 opacity-40 inset-x-0 absolute left-0 bottom-0"
      />
      <div className="cards-grid grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-20 xl:gap-8 mt-20 sm:mt-16 md:mt-24 xl:mt-32 px-4 justify-items-center relative">
        {valuesData.map((item, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className="card-container relative bg-neutral-100"
            data-tilt
          >
            <div className="content-area px-5 py-10 flex flex-col items-center justify-center gap-4">
              <div className="icon absolute -top-11 p-4 rounded-full  bg-[#ed4a6dff]">
                {item.icon}
              </div>
              <h1 className="text-24 mt-10 font-bold text-center">
                {item.title}
              </h1>
              <p className="text-20 text-gray-300 text-center font-light mb-2">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-16 absolute inset-x-0 bottom-4 text-center text-gray-500 flex items-center justify-center gap-2">
        <CursorArrowRippleIcon className="size-5 animate-pulse" />
        Hover on cards to see a 3D effect
      </p>
      <style>{`
        .card-container {
          position: relative;
          border-radius: 1.5rem;
          background-color: #0f0f0f;
          transform-style: preserve-3d;
          transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
          will-change: transform, box-shadow;
        }
        .card-container:hover {
          box-shadow:
            0 0 0 1.5px rgba(236, 72, 153, 0.4),
            0 0 30px 12px rgba(236, 72, 153, 0.25),
            0 20px 40px rgba(0, 0, 0, 0.3);
          transform: translateY(-5px);
        }
        .content-area {
          transform: translateZ(60px);
          z-index: 10;
          height: 100%;
          transition: transform 0.3s ease;
        }
        .card-container:hover .content-area {
          transform: translateZ(80px);
        }
      `}</style>
    </section>
  );
};

export default Values_services;
