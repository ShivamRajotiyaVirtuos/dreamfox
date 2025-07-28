"use client";

import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

const Funnel = () => {
  useEffect(() => {
    const wrappers = document.querySelectorAll(".card-wrapper");
    wrappers.forEach((wrapper, index) => {
      const card = wrapper.querySelector(".card");
      if (index === wrappers.length - 1) {
        gsap.set(card, { opacity: 1, scale: 1 });
      } else {
        gsap.timeline({
          scrollTrigger: {
            trigger: wrapper,
            start: "top top",
            end: "bottom top",
            scrub: true,
            pin: true,
            pinSpacing: false,
          }
        })
        .set(card, { opacity: 1, scale: 1 })
        .to(card, { opacity: 0, scale: 0.6, ease: "none" }, 0.01);
      }
    });
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="relative">
      <div className="flex flex-col">
        {/* Sticky Heading */}
        <div className="sticky top-0 w-full bg-black/90 z-50 text-center py-6">
          <p className="font-bold tracking-tight text-white text-120 mt-96">Funnel Builder</p>
        </div>

        {/* Cards */}
        {CARD_DATA.slice(0, 5).map((card, idx) => (
          <div
            className={`card-wrapper flex items-center justify-center w-full mx-auto ${idx === 4 ? "h-[85vh] pb-[15vh]" : "h-[70vh] pt-[10vh] "}`}
            key={idx}
          >
            <div className="card flex w-[90vw] max-w-5xl h-[55vh] bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300">
              <div className="flex-1 flex flex-col justify-center px-10 py-8">
                <h2 className="text-80 font-bold leading-none mb-4">{card.title}</h2>
                <p className="text-30 text-gray-700">{card.desc}</p>
              </div>
              <div className="flex-1 flex items-center justify-center bg-gray-100 h-full">
                <img
                  src={card.img}
                  alt={card.alt}
                  className="object-cover h-full w-full  rounded-r-xl"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Funnel;
