"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextReveal from "../Text Reveal/textreveal";

gsap.registerPlugin(ScrollTrigger);

const cardData = [
  {
    year: "2020",
    heading: "Started",
    description: "We laid the foundation of our journey with a clear mission.",
    image: "/images/about_timeline1.webp",
  },
  {
    year: "2021",
    heading: "Built",
    description: "Structured core teams and systems for growth.",
    image: "/images/about_timeline2.webp",
  },
  {
    year: "2022",
    heading: "Scaled",
    description: "Rapid expansion with new projects and partnerships.",
    image: "/images/about_timeline3.webp",
  },
  {
    year: "2023",
    heading: "Innovated",
    description: "Launched cutting-edge solutions impacting real change.",
    image: "/images/about_timeline4.webp",
  },
];

const StackingCards = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = document.querySelectorAll(".stacking-cards .card");
      const totalCards = cards.length - 1;
      const cardWidth = cards[0]?.offsetWidth || 0;
      const gap = 40; // pixels gap between cards

      gsap.to(cards, {
        x: (i) => -i * (cardWidth + gap),
        duration: (i) => 0.5 * i,
        ease: "none",
        scrollTrigger: {
          trigger: ".stacking-cards",
          pin: true,
          scrub: true,
          end: `+=${totalCards * 100}% bottom`,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}>
      <section className="stacking-cards relative flex flex-col items-center justify-center overflow-hidden h-screen">
        <div className="text-center mt-40 mb-12">
          <TextReveal
            className="text-120 font-bold text-white"
            animation="rotateX"
            stagger={0.1}
            duration={0.8}
          >
            Our Story
          </TextReveal>
        </div>

        <div className="w-full h-full 2xl:mb-0 mb-60">
          <div className="w-full h-full px-5 md:px-20">
            <div className="flex h-full container  stacking-cards card-stack gap-x-10 ">
              {cardData.map((card, index) => (
                <div
                  key={index}
                  className="card flex-shrink-0 w-full  h-[60vh] border-8 card-container-pink rounded-4xl "
                >
                  <div className="flex h-full rounded-3xl  overflow-hidden bg-black/10 backdrop-blur-2xl outline-1 outline-black/10">
                    {/* Left */}
                    <div className="flex lg:w-1/2 flex-col gap-5 justify-start pl-64  pt-[68px] bg-black/10">
                      <div className="text-250 absolute -left-44 top-48 -rotate-90 font-semibold text-gray-300/20">
                        {card.year}
                      </div>
                      <div className="text-48 text-white font-bold mt-2">
                        {card.heading}
                      </div>
                      <div className="text-30 text-gray-300 leading-relaxed ">
                        {card.description}
                      </div>
                      {/* <div className="text-250   font-semibold text-gray-50/10">
                        {card.year}
                      </div>
                      <div className="text-250   font-semibold text-gray-200/10">
                        {card.year}
                      </div> */}
                      {/* <div className="text-48 font-extrabold text-black opacity-10">
                        {index + 1}
                      </div> */}
                    </div>

                    {/* Right */}
                    <div className=" h-full lg:w-1/2">
                      <img
                        src={card.image}
                        alt={card.heading}
                        className="w-full grayscale-100 h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StackingCards;
