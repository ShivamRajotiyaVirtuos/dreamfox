"use client";

import React, { useEffect, useRef } from "react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhatWeDo = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const h2Ref = useRef(null);
  const pRef = useRef(null);
  const buttonRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const cardRefs = useRef([]); // Array of card refs

  const cards = [
    {
      id: 1,
      title: "Brand Strategy",
      description:
        "Comprehensive brand positioning and messaging strategies that resonate with your target audience and drive meaningful connections.",
    },
    {
      id: 2,
      title: "Digital Experiences",
      description:
        "Creating immersive digital experiences that captivate users and deliver exceptional user journeys.",
    },
    {
      id: 3,
      title: "Creative Design",
      description:
        "Bold and innovative design solutions that make your brand stand out in the competitive marketplace.",
    },
    {
      id: 4,
      title: "Media Production",
      description:
        "High-quality video and audio production that tells your brand story in compelling ways.",
    },
    {
      id: 5,
      title: "Growth Marketing",
      description:
        "Data-driven marketing strategies that accelerate growth and maximize ROI across all channels.",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Text animations
      gsap.fromTo(
        h2Ref.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: h2Ref.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        pRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          scrollTrigger: {
            trigger: pRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        buttonRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.4,
          scrollTrigger: {
            trigger: buttonRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Pinning the container
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "center center",
        end: `+=${cards.length * 100}vh`,
        pin: true,
        pinSpacing: false,
      });

      // Cards animation
      cardRefs.current.forEach((cardEl, index) => {
        if (!cardEl) return;

        gsap.set(cardEl, {
          x: "100vw",
          opacity: 0,
        });

        gsap.to(cardEl, {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: `center+=${index * 20}% center`,
            end: `center+=${(index + 1) * 20}% center`,
            scrub: 1,
            onEnter: () => {
              cardRefs.current.forEach((el) => {
                el.classList.remove("bg-[#D2458C]", "text-white");
                el.classList.add("bg-white", "text-black");
              });
              cardEl.classList.remove("bg-white", "text-black");
              cardEl.classList.add("bg-[#D2458C]", "text-white");
            },
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-[#1a1a1a] overflow-hidden">
      <div className="flex section-half-unconstrained py-16 lg:py-32 flex-col lg:flex-row gap-8 lg:gap-12 p-6 lg:p-8">
        <div className="stretch-right flex w-full gap-20 items-end">
          <div ref={textRef} className="lg:w-1/2">
            <h2 ref={h2Ref} className="text-24 mb-4 font-bold text-[#DC6263]">
              What we do
            </h2>

            <p ref={pRef} className="text-30 leading-relaxed text-white mb-10">
              At DreamFox, we go far beyond simply offering digital services —
              we architect meaningful brand journeys from the ground up. Every
              project we take on is rooted in thoughtful strategy, bold
              creativity, and a deep understanding of what drives modern
              audiences.
            </p>

            <button
              ref={buttonRef}
              className="group flex items-center gap-2 rounded transition-all duration-1000 ease-[cubic-bezier(0.77,0,0.175,1)] overflow-hidden relative cursor-pointer"
            >
              {/* Background Slide Effect */}
              <div className="absolute inset-0 bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-[900ms] ease-[cubic-bezier(0.77,0,0.175,1)]" />

              {/* Icon with smooth color transition */}
              <ArrowTopRightOnSquareIcon className="size-16 p-3 rounded bg-white text-black transition-all duration-[700ms] ease-[cubic-bezier(0.77,0,0.175,1)] relative z-10 " />

              {/* Text with instant start, smooth transition */}
              <span className="text-24 font-semibold pr-4 pl-2 text-white transition-colors duration-[900ms] ease-[cubic-bezier(0.77,0,0.175,1)] relative z-10 group-hover:text-black">
                Learn More
              </span>
            </button>
          </div>

          <div ref={cardsContainerRef} className="lg:w-1/2 relative h-[500px]">
            {cards.map((card, index) => (
              <div
                key={card.id}
                ref={(el) => (cardRefs.current[index] = el)}
                className="card-item absolute top-0 right-0 w-80 h-96 bg-white text-black rounded-2xl shadow-lg p-8 flex flex-col justify-end border border-gray-200"
              >
                <h3 className="text-24 font-semibold mb-3">{card.title}</h3>
                <p className="text-16 leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
