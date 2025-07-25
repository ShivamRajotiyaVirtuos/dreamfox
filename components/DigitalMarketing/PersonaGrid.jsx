"use client";

import React, { useEffect, useRef } from "react";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const layeredGradients = [
  `radial-gradient(circle at bottom left,
    #ed4a6d 0%, #ed4a6d 8%,
    #a94aed 8%, #a94aed 16%,
    #6c4aed 16%, #6c4aed 24%,
    #8d6ce6 24%, #8d6ce6 32%,
    #a67fe3 32%, #a67fe3 40%,
    #ba9cf0 40%, #ba9cf0 100%)`,
  `radial-gradient(circle at bottom left,
    #f7971e 0%, #f7971e 10%,
    #ffd200 10%, #ffd200 20%,
    #f7971e 20%, #f7971e 30%,
    #ffe599 30%, #ffe599 100%)`,
  `radial-gradient(circle at bottom left,
    #12c2e9 0%, #12c2e9 10%,
    #c471ed 10%, #c471ed 20%,
    #f64f59 20%, #f64f59 30%,
    #a1c4fd 30%, #a1c4fd 100%)`,
  `radial-gradient(circle at bottom left,
    #6a11cb 0%, #6a11cb 12%,
    #2575fc 12%, #2575fc 24%,
    #00d2ff 24%, #00d2ff 36%,
    #3a7bd5 36%, #3a7bd5 100%)`,
  `radial-gradient(circle at bottom left,
    #ff0080 0%, #ff0080 10%,
    #7928ca 10%, #7928ca 20%,
    #2af598 20%, #2af598 30%,
    #fcb045 30%, #fcb045 100%)`,
  `radial-gradient(circle at bottom left,
    #8e2de2 0%, #8e2de2 12%,
    #4a00e0 12%, #4a00e0 24%,
    #ff6a00 24%, #ff6a00 36%,
    #d38312 36%, #d38312 100%)`,
];

const titles = [
  "Strategy & Insight",
  "Creative Direction",
  "Technology & AI",
  "Customer Success",
  "Brand Identity",
  "UX Research",
];

const descriptions = [
  "Deep insights drive actionable strategy and market alignment.",
  "Bold creative ideas meet functional design to inspire action.",
  "Using cutting-edge AI to enhance personalized experiences.",
  "Helping clients achieve long-term satisfaction and retention.",
  "Distinct visual branding that resonates and scales.",
  "Researching users to improve every design decision.",
];

const GradientCard = ({ gradient, title, description }) => {
  const gradientRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        gradientRef.current,
        { scale: 2.0 },
        {
          scale: 2.4,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: gradientRef.current?.parentElement?.parentElement,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  // Fixed card width and flex layout
  return (
    <div className="flex flex-col w-[310px] min-w-[310px] max-w-[310px] rounded-md shadow-md group  overflow-hidden">
      {/* SVG gradient area */}
      <div className="relative w-full h-[160px] flex-shrink-0 flex flex-col">
        {/* Read more absolute in top right */}
        <div className="absolute top-2 right-2 flex items-center text-white text-sm z-10 space-x-1 transition-colors duration-300 group-hover:text-[#ed4a6dff]">
          <span>Read more</span>
          <ArrowUpRightIcon className="w-4 h-4" />
        </div>
        <div
          className="w-full h-full"
          style={{
            WebkitMaskImage: 'url("/svgs/outer-shape.svg")',
            maskImage: 'url("/svgs/outer-shape.svg")',
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskSize: "100% 100%",
            maskSize: "100% 100%",
            WebkitMaskPosition: "center",
            maskPosition: "center",
          }}
        >
          <div
            ref={gradientRef}
            className="w-full h-full transition-transform duration-100"
            style={{
              background: gradient,
              opacity: 0.95,
              transform: "scale(2.0)",
              transformOrigin: "0% 100%",
            }}
          />
        </div>
      </div>
      {/* Description box, padding can be increased without affecting SVG above */}
      <div className="bg-gray-100 p-6 flex flex-col justify-center flex-shrink-0 w-full">
        <h3 className="text-base font-semibold text-black">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const PersonaGrid = () => {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <h2 className="text-center text-120 font-bold mb-16 text-white">
        Persona Targeting
      </h2>
      <div className="flex flex-wrap gap-6 justify-center">
        {layeredGradients.map((gradient, index) => (
          <GradientCard
            key={index}
            gradient={gradient}
            title={titles[index]}
            description={descriptions[index]}
          />
        ))}
      </div>
    </section>
  );
};

export default PersonaGrid;









// "use client";

// import React, { useEffect, useRef } from "react";
// import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const layeredGradients = [
//   `radial-gradient(circle at bottom left,
//     #ed4a6d 0%, #ed4a6d 8%,
//     #a94aed 8%, #a94aed 16%,
//     #6c4aed 16%, #6c4aed 24%,
//     #8d6ce6 24%, #8d6ce6 32%,
//     #a67fe3 32%, #a67fe3 40%,
//     #ba9cf0 40%, #ba9cf0 100%)`,
//   `radial-gradient(circle at bottom left,
//     #f7971e 0%, #f7971e 10%,
//     #ffd200 10%, #ffd200 20%,
//     #f7971e 20%, #f7971e 30%,
//     #ffe599 30%, #ffe599 100%)`,
//   `radial-gradient(circle at bottom left,
//     #12c2e9 0%, #12c2e9 10%,
//     #c471ed 10%, #c471ed 20%,
//     #f64f59 20%, #f64f59 30%,
//     #a1c4fd 30%, #a1c4fd 100%)`,
//   `radial-gradient(circle at bottom left,
//     #6a11cb 0%, #6a11cb 12%,
//     #2575fc 12%, #2575fc 24%,
//     #00d2ff 24%, #00d2ff 36%,
//     #3a7bd5 36%, #3a7bd5 100%)`,
//   `radial-gradient(circle at bottom left,
//     #ff0080 0%, #ff0080 10%,
//     #7928ca 10%, #7928ca 20%,
//     #2af598 20%, #2af598 30%,
//     #fcb045 30%, #fcb045 100%)`,
//   `radial-gradient(circle at bottom left,
//     #8e2de2 0%, #8e2de2 12%,
//     #4a00e0 12%, #4a00e0 24%,
//     #ff6a00 24%, #ff6a00 36%,
//     #d38312 36%, #d38312 100%)`,
// ];

// const titles = [
//   "Strategy & Insight",
//   "Creative Direction",
//   "Technology & AI",
//   "Customer Success",
//   "Brand Identity",
//   "UX Research",
// ];

// const descriptions = [
//   "Deep insights drive actionable strategy and market alignment.",
//   "Bold creative ideas meet functional design to inspire action.",
//   "Using cutting-edge AI to enhance personalized experiences.",
//   "Helping clients achieve long-term satisfaction and retention.",
//   "Distinct visual branding that resonates and scales.",
//   "Researching users to improve every design decision.",
// ];

// const GradientCard = ({ gradient, title, description, index }) => {
//   const gradientRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.fromTo(
//         gradientRef.current,
//         { scale: 2.0 },
//         {
//           scale: 2.4,
//           ease: "power1.inOut",
//           scrollTrigger: {
//             trigger: gradientRef.current?.parentElement?.parentElement,
//             start: "top bottom",
//             end: "bottom top",
//             scrub: true,
//             markers: true, 
//           },
//         }
//       );
//     });
  
//     return () => ctx.revert();
//   }, []);
  

//   return (
//     <div className="relative w-full overflow-hidden rounded-md shadow-md group">
//       {/* SVG mask with animated gradient inside - Fixed height, no gap */}
//       <div 
//         className="relative w-full h-[200px]"
//         style={{
//           WebkitMaskImage: 'url("/svgs/outer-shape.svg")',
//           maskImage: 'url("/svgs/outer-shape.svg")',
//           WebkitMaskRepeat: "no-repeat",
//           maskRepeat: "no-repeat",
//           WebkitMaskSize: "100% 100%",
//           maskSize: "100% 100%",
//           WebkitMaskPosition: "center",
//           maskPosition: "center",
//         }}
//       >
//         <div
//           ref={gradientRef}
//           className="absolute bottom-0 left-0 w-full h-full transition-transform duration-100"
//           style={{
//             background: gradient,
//             opacity: 0.95,
//             transform: "scale(2.0)",
//             transformOrigin: "0% 100%",
//           }}
//         />
        
//         {/* Top-right "Read more" */}
//         <div className="absolute top-2 right-2 flex items-center text-white text-16 z-10 space-x-1 transition-colors duration-300 group-hover:text-[#ed4a6dff]">
//           <span>Read more</span>
//           <ArrowUpRightIcon className="w-4 h-4" />
//         </div>
//       </div>

//       {/* Bottom description box - No gap, same width */}
//       <div className="w-full bg-gray-100 px-10 py-6">
//         <h3 className="text-20 font-semibold text-black">{title}</h3>
//         <p className="text-16 text-gray-600">{description}</p>
//       </div>
//     </div>
//   );
// };

// const PersonaGrid = () => {
//   return (
//     <section className="container w-full bg-red-">
//       <h2 className="text-center text-120  font-bold mb-16 text-white">Persona Targeting</h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {layeredGradients.map((gradient, index) => (
//           <GradientCard
//             key={index}
//             index={index}
//             gradient={gradient}
//             title={titles[index]}
//             description={descriptions[index]}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default PersonaGrid;


