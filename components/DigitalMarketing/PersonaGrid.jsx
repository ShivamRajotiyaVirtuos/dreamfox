// "use client";

// import React, { useEffect, useRef } from "react";
// import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const layeredGradients = [
//   `radial-gradient(circle at bottom left,
//     #a94aed 0%, #a94aed 8%,
//     #6c4aed 8%, #6c4aed 16%,
//     #8d6ce6 16%, #8d6ce6 24%,
//     #a67fe3 24%, #a67fe3 32%,
//     #ba9cf0 32%, #ba9cf0 40%,
//     #d1b3ff 40%, #d1b3ff 100%)`,
//   `radial-gradient(circle at bottom left,
//     #8e2de2 0%, #8e2de2 10%,
//     #6c4aed 10%, #6c4aed 20%,
//     #a94aed 20%, #a94aed 30%,
//     #ba9cf0 30%, #ba9cf0 100%)`,
//   `radial-gradient(circle at bottom left,
//     #12c2e9 0%, #12c2e9 10%,
//     #c471ed 10%, #c471ed 20%,
//     #6c4aed 20%, #6c4aed 30%,
//     #a1c4fd 30%, #a1c4fd 100%)`,
//   `radial-gradient(circle at bottom left,
//     #6a11cb 0%, #6a11cb 12%,
//     #2575fc 12%, #2575fc 24%,
//     #00d2ff 24%, #00d2ff 36%,
//     #3a7bd5 36%, #3a7bd5 100%)`,
//   `radial-gradient(circle at bottom left,
//     #9b59b6 0%, #9b59b6 10%,
//     #7928ca 10%, #7928ca 20%,
//     #6c4aed 20%, #6c4aed 30%,
//     #a94aed 30%, #a94aed 100%)`,
//   `radial-gradient(circle at bottom left,
//     #8e2de2 0%, #8e2de2 12%,
//     #4a00e0 12%, #4a00e0 24%,
//     #6c4aed 24%, #6c4aed 36%,
//     #a67fe3 36%, #a67fe3 100%)`,
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

// const GradientCard = ({ gradient, title, description }) => {
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
//           },
//         }
//       );
//     });

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div className="flex flex-col w-[310px] min-w-[310px] max-w-[310px] rounded-md shadow-md group overflow-hidden">
//       {/* SVG gradient area */}
//       <div className="flex-shrink-0 w-full h-[160px] overflow-hidden">
//         <div
//           className="w-full h-full"
//           style={{
//             WebkitMaskImage: 'url("/svgs/outer-shape.svg")',
//             maskImage: 'url("/svgs/outer-shape.svg")',
//             WebkitMaskRepeat: "no-repeat",
//             maskRepeat: "no-repeat",
//             WebkitMaskSize: "100% 100%",
//             maskSize: "100% 100%",
//             WebkitMaskPosition: "center",
//             maskPosition: "center",
//           }}
//         >
//           <div
//             ref={gradientRef}
//             className="w-full h-full transition-transform duration-100"
//             style={{
//               background: gradient,
//               opacity: 0.95,
//               transform: "scale(2.0)",
//               transformOrigin: "0% 100%",
//             }}
//           />
//         </div>
//       </div>

//       {/* Description box */}
//       <div className="flex-shrink-0 p-6 bg-gray-100">
//         <h3 className="text-base font-semibold text-black">{title}</h3>
//         <p className="text-black text-sm">{description}</p>
//       </div>
//     </div>
//   );
// };

// const PersonaGrid = () => {
//   return (
//     <section className="py-20">
//       <div className="container">
//         <h2 className="text-center text-120 font-bold mb-16 text-white">
//           Persona Targeting
//         </h2>
//         <div className="flex flex-wrap gap-6 justify-center w-full">
//           {layeredGradients.map((gradient, index) => (
//             <GradientCard
//               key={index}
//               gradient={gradient}
//               title={titles[index]}
//               description={descriptions[index]}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PersonaGrid;

"use client";

import React, { useEffect, useRef } from "react";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import TextReveal from "../Text Reveal/textreveal";

gsap.registerPlugin(ScrollTrigger);

const layeredGradients = [
  `radial-gradient(circle at bottom left,
    #a94aed 0%, #a94aed 8%,
    #6c4aed 8%, #6c4aed 16%,
    #8d6ce6 16%, #8d6ce6 24%,
    #a67fe3 24%, #a67fe3 32%,
    #ba9cf0 32%, #ba9cf0 40%,
    #d1b3ff 40%, #d1b3ff 100%)`,
  `radial-gradient(circle at bottom left,
    #8e2de2 0%, #8e2de2 10%,
    #6c4aed 10%, #6c4aed 20%,
    #a94aed 20%, #a94aed 30%,
    #ba9cf0 30%, #ba9cf0 100%)`,
  `radial-gradient(circle at bottom left,
    #12c2e9 0%, #12c2e9 10%,
    #c471ed 10%, #c471ed 20%,
    #6c4aed 20%, #6c4aed 30%,
    #a1c4fd 30%, #a1c4fd 100%)`,
  `radial-gradient(circle at bottom left,
    #6a11cb 0%, #6a11cb 12%,
    #2575fc 12%, #2575fc 24%,
    #00d2ff 24%, #00d2ff 36%,
    #3a7bd5 36%, #3a7bd5 100%)`,
  `radial-gradient(circle at bottom left,
    #9b59b6 0%, #9b59b6 10%,
    #7928ca 10%, #7928ca 20%,
    #6c4aed 20%, #6c4aed 30%,
    #a94aed 30%, #a94aed 100%)`,
  `radial-gradient(circle at bottom left,
    #8e2de2 0%, #8e2de2 12%,
    #4a00e0 12%, #4a00e0 24%,
    #6c4aed 24%, #6c4aed 36%,
    #a67fe3 36%, #a67fe3 100%)`,
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

  return (
    <div className="flex flex-col w-[345px] min-w-[345px] max-w-[345px] rounded-md shadow-md group overflow-hidden">
      {/* SVG gradient area */}
      <div className="flex-shrink-0 w-full h-[160px] 2xl:h-[160px]  overflow-hidden">
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

      {/* Description box */}
      <div className="flex-shrink-0 p-6 bg-gray-100  relative bottom-3 ">
        <h3 className="text-base font-semibold text-black">{title}</h3>
        <p className="text-black text-sm">{description}</p>
      </div>
    </div>
  );
};

const PersonaGrid = () => {
  return (
    <section className="py-20 px-4 container mx-auto">
      <TextReveal
        className="text-center text-120 font-bold mb-16 text-white"
        animation="rotateX"
        stagger={0.1}
        duration={0.8}
      >
        Persona Targeting
      </TextReveal>
      <div className="grid grid-cols-3 gap-6 xl:gap-12 justify-center">
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
