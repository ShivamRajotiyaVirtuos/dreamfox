"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhatWeDo = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const cardsWrapperRef = useRef(null);
  const cardRefs = useRef([]);

  const slides = [
    {
      image: "https://static.vecteezy.com/system/resources/previews/006/304/780/large_2x/letter-a-logo-illustration-suitable-for-brand-and-company-logos-free-vector.jpg",
      title: "Brand Identity",
      description: "Designing unique logos and brand visuals that stand out.",
    },
    {
      image: "https://static.vecteezy.com/system/resources/previews/008/079/348/large_2x/dark-interior-with-circle-neon-light-3d-showcase-for-display-products-free-vector.jpg",
      title: "3D Product Display",
      description: "Immersive environments for product showcases.",
    },
    {
      image: "https://static.vecteezy.com/system/resources/previews/001/409/245/large_2x/neon-circle-display-background-free-vector.jpg",
      title: "Neon Circle Stage",
      description: "Stylized neon settings for promotional content.",
    },
    {
      image: "https://static.vecteezy.com/system/resources/previews/009/156/948/large_2x/beautiful-girl-in-chicano-style-with-a-tattoo-roses-in-her-hair-an-inscription-on-her-hand-a-dark-background-free-vector.jpg",
      title: "Chicano Art Style",
      description: "Bold and expressive art featuring urban themes.",
    },
  ];
  

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${slides.length * 700}`,
          scrub: 1,
          pin: true,
          pinSpacing: true,
          markers: true,
        },
      });

      // Animate heading and text
      tl.from(textRef.current, {
        opacity: 0,
        y: 60,
        duration: 1.5,
        ease: "power2.out",
      });

      // Reveal cards wrapper
      tl.to(cardsWrapperRef.current, {
        opacity: 1,
        duration: 1,
      });

      // Animate each card stacked in exact center
      slides.forEach((_, i) => {
        const card = cardRefs.current[i];
        const zIndex = 10 + i; // Higher z-index for later cards

        tl.fromTo(
          card,
          {
            x: "100vw",
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            zIndex,
            duration: 1.5,
            ease: "power2.out",
          },
          `+=0.7`
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen w-full overflow-hidden bg-black text-white"
    >
      <div className="container mx-auto h-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 px-4 py-8 md:py-0">
        {/* Left Text Column */}
        <div
          ref={textRef}
          className="w-full md:w-1/3 z-10 text-center md:text-left"
        >
          <h2 className="text-80 font-semibold mb-4 md:mb-6 text-[#DC6263] mt-10 md:mt-0">
            What we do
          </h2>
          <p className="text-30 text-gray-300 max-w-md mx-auto md:mx-0">
            At DreamFox, we go far beyond simply offering digital services — we
            architect meaningful brand journeys from the ground up.
          </p>
        </div>

        {/* Right Cards Stack */}
        <div
          ref={cardsWrapperRef}
          className="w-full md:w-2/3 h-[500px] relative opacity-0 flex items-center justify-start"
        >
          <div className="relative w-full h-full max-w-none">
            {slides.map((slide, index) => (
          <div
          key={index}
          ref={(el) => (cardRefs.current[index] = el)}
          className="card aspect-[1.2/1] h-[500px]  2xl:h-[750px] rounded-xl bg-gray-800 text-white absolute left-0 top-1/2 -translate-y-1/2 shadow-2xl border border-white/20 p-6 flex flex-col"
          style={{
            zIndex: 10 + index,
          }}
        >
          {/* Full-width image with dynamic height */}
          <div
            className="w-full h-[85%] bg-cover bg-center rounded-lg mb-4"
            style={{
              backgroundImage: `url(${slide.image})`,
            }}            
          ></div>
        
          {/* Text below image */}
          <div className="flex flex-col justify-center  flex-1">
            <h3 className="text-xl md:text-2xl font-semibold mb-1">{slide.title}</h3>
            <p className="text-sm md:text-base text-gray-300  ">{slide.description}</p>
          </div>
        </div>


            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;