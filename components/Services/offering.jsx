"use client";

import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextReveal from "../Text Reveal/textreveal";

gsap.registerPlugin(ScrollTrigger);

const CARD_DATA = [
  {
    title: "Card 1",
    desc: "Experience the ultimate in luxury living.",
    img: "https://cdn.cosmos.so/ba8fd483-2042-47ed-a175-9c594fd538d1.jpeg",
    alt: "Presence",
  },
  {
    title: "Card 2",
    desc: "Modern design meets timeless elegance.",
    img: "https://cdn.cosmos.so/913696c4-07e0-40f3-b6c2-0c0e8a18559a.jpeg",
    alt: "Stillness",
  },
  {
    title: "Card 3",
    desc: "Indulge in a home that redefines luxury.",
    img: "https://cdn.cosmos.so/78f3c414-e013-4693-a02e-6bea74309e03.jpeg",
    alt: "Essence",
  },
  {
    title: "Card 4",
    desc: "Experience the ultimate in luxury living.",
    img: "https://cdn.cosmos.so/c7d7c0ef-c730-4192-9687-42606e554e7c.jpeg",
    alt: "Surrender",
  },
  {
    title: "Card 5",
    desc: "Modern design meets timeless elegance.",
    img: "https://cdn.cosmos.so/69b9691f-921b-43ab-afbb-3237d65f67ad.jpeg",
    alt: "Awakening",
  },
  {
    title: "Card 6",
    desc: "Indulge in a home that redefines luxury.",
    img: "https://cdn.cosmos.so/ba8fd483-2042-47ed-a175-9c594fd538d1.jpeg",
    alt: "Presence",
  },
  {
    title: "Card 7",
    desc: "Experience the ultimate in luxury living.",
    img: "https://cdn.cosmos.so/913696c4-07e0-40f3-b6c2-0c0e8a18559a.jpeg",
    alt: "Stillness",
  },
  {
    title: "Card 8",
    desc: "Modern design meets timeless elegance.",
    img: "https://cdn.cosmos.so/78f3c414-e013-4693-a02e-6bea74309e03.jpeg",
    alt: "Essence",
  },
  {
    title: "Card 9",
    desc: "Indulge in a home that redefines luxury.",
    img: "https://cdn.cosmos.so/c7d7c0ef-c730-4192-9687-42606e554e7c.jpeg",
    alt: "Surrender",
  },
  {
    title: "Card 10",
    desc: "Experience the ultimate in luxury living.",
    img: "https://cdn.cosmos.so/69b9691f-921b-43ab-afbb-3237d65f67ad.jpeg",
    alt: "Awakening",
  },
];

const Offerings = () => {
  useEffect(() => {
    const wrappers = document.querySelectorAll(".card-wrapper");
    wrappers.forEach((wrapper, index) => {
      const card = wrapper.querySelector(".card");
      if (index === wrappers.length - 1) {
        gsap.set(card, { opacity: 1, scale: 1 });
      } else {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: wrapper,
              start: "top +=10%",
              end: "bottom top",
              scrub: true,
              pin: true,
              pinSpacing: false,
            },
          })
          .set(card, { opacity: 1, scale: 1 })
          .to(card, { opacity: 0, scale: 0.6, ease: "none" }, 0.01);
      }
    });
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="relative">
      <div className="flex flex-col">
        {/* Sticky Heading */}
        <div className="sticky top-0 w-full bg-black/90 z-50 text-center py-6">
          <TextReveal
            // ref={headingRef}
            className="text-center text-120 pt-20 xl:pt-40  font-bold text-white"
            style={{ pointerEvents: "none" }}
            animation="rotateX"
            stagger={0.1}
            duration={0.8}
          >
            Design Offerings
          </TextReveal>
        </div>

        {/* Cards */}
        {CARD_DATA.slice(0, 5).map((card, idx) => (
          <div
            className={`card-wrapper flex items-center justify-center w-full mx-auto ${
              idx === 4 ? "h-[85vh] pb-[15vh]" : "h-[70vh] pt-[1vh] "
            }`}
            key={idx}
          >
            <div className="card w-[90vw] max-w-7xl h-[65vh] rounded-3xl overflow-hidden transition-all duration-500 relative group hover:scale-105">
              {/* Background Image with Parallax Effect */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={card.img}
                  alt={card.alt}
                  className="object-cover h-full w-full scale-110 group-hover:scale-100 transition-transform duration-700"
                />
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              </div>

              {/* Content Container */}
              <div className="relative z-10 h-full flex flex-col justify-between p-8 md:p-12">
                {/* Top Section - Card Number */}
                <div className="flex justify-between items-start">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center backdrop-blur-sm bg-white/10">
                      <span className="text-white font-bold text-lg">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="h-8 w-0.5 bg-gradient-to-b from-white to-transparent"></div>
                  </div>

                  {/* Action Icon */}
                  {/* <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md bg-white/10 group-hover:bg-white/20 transition-all duration-300 cursor-pointer">
                    <svg
                      className="w-6 h-6 text-white transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </div> */}
                </div>

                {/* Main Content - Bottom Section */}
                <div className="space-y-6">
                  {/* Title with animated underline */}
                  <div className="relative">
                    <h2 className="text-5xl md:text-7xl font-bold text-white leading-none tracking-tight">
                      {card.title}
                    </h2>
                    <div className="h-1 w-0 bg-gradient-to-r from-purple-500 to-cyan-500  transition-all duration-500 delay-200 mt-4"></div>
                  </div>

                  {/* Description and CTA */}
                  <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                    <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-2xl opacity-90">
                      {card.desc}
                    </p>

                    {/* CTA Button */}
                    <button className="group/btn relative px-8 py-4 rounded-2xl bg-gradient-to-r from-pink-900 to-pink-500 font-semibold text-lg text-white shadow-2xl transform transition-all duration-300 hover:shadow-purple-500/25 hover:-translate-y-1 overflow-hidden">
                      <span className="relative z-10 flex items-center gap-2">
                        Explore
                        <svg
                          className="w-5 h-5 transform group-hover/btn:translate-x-1 transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                      </span>
                      <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left rounded-2xl"></div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-8 right-8 w-32 h-32 border border-white/10 rounded-full opacity-20 group-hover:scale-110 transition-transform duration-500"></div>
              <div className="absolute bottom-8 left-8 w-2 h-20 bg-gradient-to-t from-pink-500 to-purple-500 rounded-full opacity-60  transition-all duration-500"></div>

              {/* Animated Border */}
              {/* <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500 p-[2px]">
                <div className="w-full h-full bg-transparent rounded-3xl"></div>
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offerings;
