"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const cardData = [
  { src: "/images/About/1.png", label: "UI/UX Design" },
  { src: "/images/About/2.png", label: "App & Web Development" },
  { src: "/images/About/3.png", label: "Brand Design" },
  { src: "/images/About/4.png", label: "Design Consulting" },
  { src: "/images/About/5.png", label: "Content Strategy" },
];

const DreamFoxModel = () => {
  const cardsRef = useRef([]);
  const containerRef = useRef(null);
  const markersRef = useRef([]);
  const labelsRef = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const cards = cardsRef.current;
    const markers = markersRef.current;
    const labels = labelsRef.current;
    
    // Function to handle responsive values based on screen size
    const getResponsiveValue = (mobile, desktop) => {
      return window.innerWidth < 768 ? mobile : desktop;
    };

    cards.forEach((card, i) => {
      gsap.set(card, {
        zIndex: cardData.length - i,
        rotate: i === 0 ? 0 : (i % 2 === 0 ? -1 : 1) * (3 + i * 1.5),
        y: i * getResponsiveValue(5, 10),
        x: i * getResponsiveValue(-5, -10),
      });
    });

    gsap.set(markers, { width: "8px", backgroundColor: "#999" });
    gsap.set(labels, { opacity: 0.2, filter: "blur(2px)" });

    // Handle window resize for responsiveness
    const handleResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", handleResize);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 0.5,
        start: "top top",
        end: () => "+=" + window.innerHeight * getResponsiveValue(0.6, 1) * cardData.length,
        onUpdate: (self) => {
          const progress = self.progress;
          const totalCards = cardData.length;
          const index = Math.min(
            totalCards - 1,
            Math.floor(progress * totalCards)
          );
          setActiveIndex(index);
        },
      },
    });

    cards.forEach((card, i) => {
      timeline.to(card, { rotate: 0, duration: 0.3 }, i);
      timeline.to(markers[i], { width: "24px", backgroundColor: "#fff", duration: 0.3 }, i);
      timeline.to(labels[i], { opacity: 1, filter: "blur(0px)", duration: 0.3 }, i);

      if (i < cards.length - 1) {
        // Calculate the card width and use it for the offset
        const cardWidth = card.offsetWidth || 300;
        // Move it off-screen by at least 1.5x its width
        const xOffset = -1.5 * cardWidth;
        timeline.to(card, { x: xOffset, opacity: 0, duration: 0.7 }, i + 0.3);
      }
    });

    return () => {
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="w-full h-screen flex flex-col text-white font-sans overflow-hidden">
      <div className="mt-28 text-center font-bold text-120 mb-10  ">
        Our Capabilities
      </div>

      <div className="flex flex-col md:flex-row container mx-auto px-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10 flex-1 overflow-hidden">
        {/* Left Card Stack */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center relative mb-4 md:mb-0">
          <div className="relative w-full max-w-[70%] md:max-w-[65%] lg:max-w-[60%] aspect-[0.6] md:aspect-[0.7]  ">
            {cardData.map((card, i) => (
              <div
                key={i}
                ref={(el) => (cardsRef.current[i] = el)}
                className="absolute top-0  left-0 w-full aspect-[0.7] overflow-hidden    "
              >
                <Image
                  src={card.src}
                  alt={`Card ${i + 1}`}
                  layout="fill"
                  className="lg:pb-16 lg:pt-10 object-contain "
                />
              </div>
            ))}
          </div>

          {/* Mobile label display with animation */}
          <div className="block md:hidden mt-[8%] text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="text-30 font-semibold mt-10"
              >
                {cardData[activeIndex].label}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Right Marker/Label List */}
        <div className="hidden md:flex w-full md:w-1/2 justify-center items-center px-[3%]">
          <div className="flex flex-col justify-center w-full relative">
            {cardData.map((card, i) => (
              <div key={i} className="flex flex-col gap-[1vh] items-start">
                <div className="flex items-center gap-[1vh]">
                  <div
                    ref={(el) => (markersRef.current[i] = el)}
                    className="h-[2px] w-[8px] transition-all duration-300 bg-gray-500"
                  ></div>
                  <div
                    ref={(el) => (labelsRef.current[i] = el)}
                    className="transition-all duration-300 text-40"
                  >
                    {card.label}
                  </div>
                </div>

                {i < cardData.length - 1 && (
                  <div className="flex flex-col gap-4">
                    <div className="w-4 h-0.5 bg-gray-500"></div>
                    <div className="w-4 h-0.5 bg-gray-500"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DreamFoxModel;