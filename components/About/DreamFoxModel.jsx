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

    cards.forEach((card, i) => {
      gsap.set(card, {
        zIndex: cardData.length - i,
        rotate: i === 0 ? 0 : (i % 2 === 0 ? -1 : 1) * (5 + i * 2),
        y: i * 10,
        x: i * -10,
      });
    });

    gsap.set(markers, { width: "8px", backgroundColor: "#999" });
    gsap.set(labels, { opacity: 0.2, filter: "blur(2px)" });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: true,
        start: "top top",
        end: () => "+=" + window.innerHeight * cardData.length,
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
        timeline.to(card, { x: -600, opacity: 0, duration: 0.7 }, i + 0.3);
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="w-full min-h-screen text-white font-sans">
      <div className="text-center text-120 font-semibold pt-36 mb-4 md:mb-8 2xl:mb-20">
        Our Capabilities
      </div>

      <div className="flex flex-col md:flex-row container gap-10">
        {/* Left Card Stack */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center relative mb-12 md:mb-0">
          <div className="relative w-[260px] sm:w-[340px] md:w-[400px] aspect-[0.7]">
            {cardData.map((card, i) => (
              <div
                key={i}
                ref={(el) => (cardsRef.current[i] = el)}
                className="absolute top-0 left-0 w-full aspect-[0.7] rounded-xl overflow-hidden shadow-2xl bg-white"
              >
                <Image
                  src={card.src}
                  alt={`Card ${i + 1}`}
                  layout="fill"
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* Mobile label display with animation */}
          <div className="block md:hidden mt-28 text-48 text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="text-32 font-medium"
              >
                {cardData[activeIndex].label}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Right Marker/Label List */}
        <div className="hidden md:flex w-full md:w-1/2 justify-center items-center px-6">
          <div className="flex flex-col justify-center w-full relative">
            {cardData.map((card, i) => (
              <div key={i} className="flex flex-col gap-4 items-start">
                <div className="flex items-center gap-3">
                  <div
                    ref={(el) => (markersRef.current[i] = el)}
                    className="h-[2px] w-[8px] transition-all duration-300 bg-gray-500"
                  ></div>
                  <div
                    ref={(el) => (labelsRef.current[i] = el)}
                    className="transition-all duration-300 text-48"
                  >
                    {card.label}
                  </div>
                </div>

                {i < cardData.length - 1 && (
                  <div className="flex gap-3 pl-[10px]">
                    <div className="w-1.5 h-1.5 my-4 bg-gray-500 rounded-full"></div>
                    <div className="w-1.5 h-1.5 my-4 bg-gray-500 rounded-full"></div>
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












// "use client";
// import React, { useEffect, useRef } from "react";
// import Image from "next/image";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// // const cardData = [
// //   { src: "/images/About/1.png", label: "UI/UX Design" },
// //   { src: "/images/About/2.png", label: "App & Web Development" },
// //   { src: "/images/About/3.png", label: "Brand Design" },
// //   { src: "/images/About/4.png", label: "Design Consulting" },
// //   { src: "/images/About/5.png", label: "Content Strategy" },
// // ];
// const cardData = [
//   { src: "/images/About/1.png", label: "UI/UX Design" },
//   { src: "/images/About/2.png", label: "App & Web Development" },
//   { src: "/images/About/3.png", label: "Brand Design" },
//   { src: "/images/About/4.png", label: "Design Consulting" },
//   { src: "/images/About/5.png", label: "Content Strategy" },
// ];

// const DreamFoxModel = () => {
//   const cardsRef = useRef([]);
//   const containerRef = useRef(null);
//   const markersRef = useRef([]);
//   const labelsRef = useRef([]);

//   useEffect(() => {
//     const cards = cardsRef.current;
//     const markers = markersRef.current;
//     const labels = labelsRef.current;

//     cards.forEach((card, i) => {
//       gsap.set(card, {
//         zIndex: cardData.length - i,
//         rotate: i === 0 ? 0 : (i % 2 === 0 ? -1 : 1) * (5 + i * 2),
//         y: i * 10,
//         x: i * -10,
//       });
//     });

//     gsap.set(markers, { width: "8px", backgroundColor: "#999" });
//     gsap.set(labels, { opacity: 0.2, filter: "blur(2px)" });

//     const timeline = gsap.timeline({
//       scrollTrigger: {
//         trigger: containerRef.current,
//         pin: true,
//         scrub: true,
//         start: "top top",
//         end: () => "+=" + window.innerHeight * cardData.length,
//       },
//     });

//     cards.forEach((card, i) => {
//       timeline.to(card, { rotate: 0, duration: 0.3 }, i);
//       timeline.to(markers[i], { width: "24px", backgroundColor: "#fff", duration: 0.3 }, i);
//       timeline.to(labels[i], { opacity: 1, filter: "blur(0px)", duration: 0.3 }, i);

//       if (i < cards.length - 1) {
//         timeline.to(card, { x: -600, opacity: 0, duration: 0.7 }, i + 0.3);
//       }
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach((t) => t.kill());
//     };
//   }, []);

//   return (
//     <section
//       ref={containerRef}
//       className="w-full min-h-screen  text-white font-sans"
//     >
//       <div className="text-center text-120  font-semibold pt-36  mb-4 md:mb-8 xl:mb-16">
//         Our Capabilities
//       </div>

//       <div className="flex flex-col lg:flex-row h-auto container  ">
//         {/* Cards Section */}
//         <div className="w-full md:w-1/2 flex items-center justify-center relative mb-12 lg:mb-0">
//           <div className="relative w-[260px] sm:w-[340px] md:w-[400px] aspect-[0.7]">
//             {cardData.map((card, i) => (
//               <div
//                 key={i}
//                 ref={(el) => (cardsRef.current[i] = el)}
//                 className="absolute top-0 left-0 w-full aspect-[0.7] rounded-xl overflow-hidden shadow-2xl bg-white"
//               >
//                 <Image
//                   src={card.src}
//                   alt={`Card ${i + 1}`}
//                   layout="fill"
//                   className="object-cover"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Markers and Labels Section */}
//         <div className="w-full lg:w-1/2 flex justify-center items-center px-6">
//           <div className="flex flex-col justify-center w-full  relative">
//             {cardData.map((card, i) => (
//               <div key={i} className="flex flex-col gap-4 items-start">
//                 {/* Marker and Label */}
//                 <div className="flex items-center gap-3">
//                   <div
//                     ref={(el) => (markersRef.current[i] = el)}
//                     className="h-[2px] w-[8px] transition-all duration-300 bg-gray-500"
//                   ></div>
//                   <div
//                     ref={(el) => (labelsRef.current[i] = el)}
//                     className="transition-all duration-300 text-48 "
//                   >
//                     {card.label}
//                   </div>
//                 </div>

//                 {/* Dots between markers */}
//                 {i < cardData.length - 1 && (
//                   <div className="flex gap-3 pl-[10px]">
//                     <div className="w-1.5 h-1.5 my-4 bg-gray-500 rounded-full"></div>
//                     <div className="w-1.5 h-1.5 my-4 bg-gray-500 rounded-full"></div>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default DreamFoxModel;

