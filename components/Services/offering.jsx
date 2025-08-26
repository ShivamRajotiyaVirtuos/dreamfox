"use client";

import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextReveal from "../Text Reveal/textreveal";

gsap.registerPlugin(ScrollTrigger);

const CARD_DATA = [
  {
    title: "Digital Advertising",
    desc: "Strategic campaigns that drive engagement and conversions across all platforms.",
    img: "https://images.unsplash.com/photo-1592685530138-6fdfaf4b278a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
    alt: "Digital Marketing Campaign",
  },
  {
    title: "Brand Strategy",
    desc: "Comprehensive brand positioning that resonates with your target audience.",
    img: "https://media.istockphoto.com/id/1151427999/photo/professional-videographer-holding-camera-on-3-axis-gimbal-which-mounted-on-easy-rig.webp?a=1&s=612x612&w=0&k=20&c=APZBHPmqYTRdcClPO-p7UFcXDzJE8TbJFmDY98mX0E0=",
    alt: "Brand Strategy Meeting",
  },
  {
    title: "Creative Design",
    desc: "Compelling visual narratives that capture attention and inspire action.",
    img: "https://images.unsplash.com/photo-1723723467929-63315acce895?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
    alt: "Creative Design Process",
  },
  {
    title: "Social Media Marketing",
    desc: "Engaging content strategies that build communities and drive growth.",
    img: "https://images.unsplash.com/photo-1554246881-d1aec048cc39?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    alt: "Social Media Analytics",
  },
  {
    title: "Performance Analytics",
    desc: "Data-driven insights that optimize campaigns and maximize ROI.",
    img: "https://images.unsplash.com/photo-1713816821447-4218b8c19bb7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI3fHx8ZW58MHx8fHx8",
    alt: "Analytics Dashboard",
  },
];

const Offerings = () => {
  useEffect(() => {
    const wrappers = document.querySelectorAll(".card-wrapper");

    wrappers.forEach((wrapper, index) => {
      const card = wrapper.querySelector(".card");

      if (index === wrappers.length - 1) {
        // Last card stays visible
        gsap.set(card, { opacity: 1, scale: 1 });
      } else {
        // Create smooth fade transition
        gsap
          .timeline({
            scrollTrigger: {
              trigger: wrapper,
              start: "top -2%",
              end: "bottom 5%",
              scrub: 0.5,
              pin: true,
              pinSpacing: false,
            },
          })
          .fromTo(
            card,
            {
              opacity: 1,
              scale: 1,
              y: 0,
            },
            {
              opacity: 1,
              scale: 1,
              y: 0,
              ease: "power1.out",
              duration: 1,
            }
          );
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
        <div className="s w-full  z-50 text-center py-6">
          <TextReveal
            className="text-center text-120 py-20 xy:pt-40 font-bold text-white"
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
            className={`card-wrapper flex  items-center justify-center w-full mx-auto ${
              idx === 4 ? "h-[100vh] " : "h-[100vh] pt-[1vh]"
            }`}
            key={idx}
          >
            <div className="card w-full h-full rounded- overflow-hidden transition-all duration-500 relative group hover:scale-105">
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
              <div className="relative z-10 h-full flex flex-col justify-between p-8 md:p-24">
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
                </div>

                {/* Main Content - Bottom Section */}
                <div className="space-y-6">
                  {/* Title with animated underline */}
                  <div className="relative">
                    <h2 className="text-80 font-bold text-white leading-none tracking-tight">
                      {card.title}
                    </h2>
                    <div className="h-1 w-0 bg-gradient-to-r from-purple-500 to-cyan-500 transition-all duration-500 delay-200 mt-4"></div>
                  </div>

                  {/* Description and CTA */}
                  <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                    <p className="text-30 text-gray-200 leading-relaxed max-w-2xl opacity-90">
                      {card.desc}
                    </p>

                    {/* CTA Button */}
                    <button className="group/btn relative px-8 py-4 rounded-2xl bg-gradient-to-r from-white to-gra-200 font-semibold text-lg text-black shadow-2xl transform transition-all duration-300 hover:shadow-purple-500/25 hover:-translate-y-1 overflow-hidden">
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
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offerings;
