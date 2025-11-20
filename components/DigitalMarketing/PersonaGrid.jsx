// // "use client";

// // import React, { useEffect, useRef } from "react";
// // import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
// // import gsap from "gsap";
// // import ScrollTrigger from "gsap/ScrollTrigger";

// // gsap.registerPlugin(ScrollTrigger);

// // const layeredGradients = [
// //   `radial-gradient(circle at bottom left,
// //     #a94aed 0%, #a94aed 8%,
// //     #6c4aed 8%, #6c4aed 16%,
// //     #8d6ce6 16%, #8d6ce6 24%,
// //     #a67fe3 24%, #a67fe3 32%,
// //     #ba9cf0 32%, #ba9cf0 40%,
// //     #d1b3ff 40%, #d1b3ff 100%)`,
// //   `radial-gradient(circle at bottom left,
// //     #8e2de2 0%, #8e2de2 10%,
// //     #6c4aed 10%, #6c4aed 20%,
// //     #a94aed 20%, #a94aed 30%,
// //     #ba9cf0 30%, #ba9cf0 100%)`,
// //   `radial-gradient(circle at bottom left,
// //     #12c2e9 0%, #12c2e9 10%,
// //     #c471ed 10%, #c471ed 20%,
// //     #6c4aed 20%, #6c4aed 30%,
// //     #a1c4fd 30%, #a1c4fd 100%)`,
// //   `radial-gradient(circle at bottom left,
// //     #6a11cb 0%, #6a11cb 12%,
// //     #2575fc 12%, #2575fc 24%,
// //     #00d2ff 24%, #00d2ff 36%,
// //     #3a7bd5 36%, #3a7bd5 100%)`,
// //   `radial-gradient(circle at bottom left,
// //     #9b59b6 0%, #9b59b6 10%,
// //     #7928ca 10%, #7928ca 20%,
// //     #6c4aed 20%, #6c4aed 30%,
// //     #a94aed 30%, #a94aed 100%)`,
// //   `radial-gradient(circle at bottom left,
// //     #8e2de2 0%, #8e2de2 12%,
// //     #4a00e0 12%, #4a00e0 24%,
// //     #6c4aed 24%, #6c4aed 36%,
// //     #a67fe3 36%, #a67fe3 100%)`,
// // ];

// // const titles = [
// //   "Strategy & Insight",
// //   "Creative Direction",
// //   "Technology & AI",
// //   "Customer Success",
// //   "Brand Identity",
// //   "UX Research",
// // ];

// // const descriptions = [
// //   "Deep insights drive actionable strategy and market alignment.",
// //   "Bold creative ideas meet functional design to inspire action.",
// //   "Using cutting-edge AI to enhance personalized experiences.",
// //   "Helping clients achieve long-term satisfaction and retention.",
// //   "Distinct visual branding that resonates and scales.",
// //   "Researching users to improve every design decision.",
// // ];

// // const GradientCard = ({ gradient, title, description }) => {
// //   const gradientRef = useRef(null);

// //   useEffect(() => {
// //     const ctx = gsap.context(() => {
// //       gsap.fromTo(
// //         gradientRef.current,
// //         { scale: 2.0 },
// //         {
// //           scale: 2.4,
// //           ease: "power1.inOut",
// //           scrollTrigger: {
// //             trigger: gradientRef.current?.parentElement?.parentElement,
// //             start: "top bottom",
// //             end: "bottom top",
// //             scrub: true,
// //           },
// //         }
// //       );
// //     });

// //     return () => ctx.revert();
// //   }, []);

// //   return (
// //     <div className="flex flex-col w-[310px] min-w-[310px] max-w-[310px] rounded-md shadow-md group overflow-hidden">
// //       {/* SVG gradient area */}
// //       <div className="flex-shrink-0 w-full h-[160px] overflow-hidden">
// //         <div
// //           className="w-full h-full"
// //           style={{
// //             WebkitMaskImage: 'url("/svgs/outer-shape.svg")',
// //             maskImage: 'url("/svgs/outer-shape.svg")',
// //             WebkitMaskRepeat: "no-repeat",
// //             maskRepeat: "no-repeat",
// //             WebkitMaskSize: "100% 100%",
// //             maskSize: "100% 100%",
// //             WebkitMaskPosition: "center",
// //             maskPosition: "center",
// //           }}
// //         >
// //           <div
// //             ref={gradientRef}
// //             className="w-full h-full transition-transform duration-100"
// //             style={{
// //               background: gradient,
// //               opacity: 0.95,
// //               transform: "scale(2.0)",
// //               transformOrigin: "0% 100%",
// //             }}
// //           />
// //         </div>
// //       </div>

// //       {/* Description box */}
// //       <div className="flex-shrink-0 p-6 bg-gray-100">
// //         <h3 className="text-base font-semibold text-black">{title}</h3>
// //         <p className="text-black text-sm">{description}</p>
// //       </div>
// //     </div>
// //   );
// // };

// // const PersonaGrid = () => {
// //   return (
// //     <section className="py-20">
// //       <div className="container">
// //         <h2 className="text-center text-120 font-bold mb-16 text-white">
// //           Persona Targeting
// //         </h2>
// //         <div className="flex flex-wrap gap-6 justify-center w-full">
// //           {layeredGradients.map((gradient, index) => (
// //             <GradientCard
// //               key={index}
// //               gradient={gradient}
// //               title={titles[index]}
// //               description={descriptions[index]}
// //             />
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default PersonaGrid;

// "use client";

// import React, { useEffect, useRef } from "react";
// import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import TextReveal from "../Text Reveal/textreveal";

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
//     <div className="flex flex-col w-full lg:max-w-[345px] xl:max-w-[345px]  rounded-md shadow-md group overflow-hidden">
//       {/* SVG gradient area */}
//       <div className="flex-shrink-0 w-full h-[178px] lg:h-[230px] 2xl:h-[160px]  overflow-hidden">
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
//       <div className="flex-shrink-0 p-6 bg-gray-100  relative bottom-3 ">
//         <h3 className="text-base font-semibold text-black">{title}</h3>
//         <p className="text-black text-sm">{description}</p>
//       </div>
//     </div>
//   );
// };

// const PersonaGrid = () => {
//   return (
//     <section className="py-20 xl:py-0 px-4 container mx-auto">
//       <TextReveal
//         className="text-center text-120 font-bold mb-16 text-white"
//         animation="rotateX"
//         stagger={0.1}
//         duration={0.8}
//       >
//         Persona Targeting
//       </TextReveal>
//       <div className="grid sm:grid-cols-2  xl:grid-cols-3 gap-12 lg:gap-16 xl:gap-12 justify-center">
//         {layeredGradients.map((gradient, index) => (
//           <GradientCard
//             key={index}
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

import { useEffect, useRef } from "react";
import TextReveal from "../Text Reveal/textreveal";
import {
  ChartBarIcon,
  CpuChipIcon,
  FaceSmileIcon,
  IdentificationIcon,
  MagnifyingGlassIcon,
  PaintBrushIcon,
} from "@heroicons/react/24/outline";
import {
  BoltIcon,
  FireIcon,
  LightBulbIcon,
  RocketLaunchIcon,
  SparklesIcon,
  StarIcon,
} from "@heroicons/react/24/solid";
// import {
//   ChartBarIcon,
//   BoltIcon,
//   PaintBrushIcon,
//   SparklesIcon,
//   CpuChipIcon,
//   RocketLaunchIcon,
//   HandshakeIcon,
//   GemIcon,
//   BullseyeIcon,
//   FireIcon,
//   MagnifyingGlassIcon,
//   LightBulbIcon,
// } from "@heroicons/react/24/outline";

const PersonaTargeting = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const headerRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js";
    script.onload = () => {
      const { gsap } = window;

      // Create timeline for orchestrated animations
      const tl = gsap.timeline();

      // Header animation with creative effects
      tl.fromTo(
        headerRef.current.querySelector(".main-title"),
        {
          y: 100,
          opacity: 0,
          scale: 0.8,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "back.out(1.7)",
        }
      )
        .fromTo(
          headerRef.current.querySelector(".subtitle"),
          {
            y: 50,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .fromTo(
          headerRef.current.querySelector(".badge"),
          {
            scale: 0,
            rotation: 180,
          },
          {
            scale: 1,
            rotation: 0,
            duration: 0.8,
            ease: "back.out(1.7)",
          },
          "-=0.8"
        );

      // Cards entrance with creative stagger
      gsap.fromTo(
        cardsRef.current,
        {
          y: 100,
          opacity: 0,
          rotationX: 45,
          scale: 0.8,
        },
        {
          y: 0,
          opacity: 1,
          rotationX: 0,
          scale: 1,
          duration: 1,
          stagger: {
            amount: 0.8,
            from: "center",
            grid: "auto",
          },
          ease: "power3.out",
          delay: 0.5,
        }
      );

      // Floating geometric shapes
      gsap.to(".floating-shape", {
        y: "random(-50, 50)",
        x: "random(-30, 30)",
        rotation: "random(0, 360)",
        duration: "random(3, 6)",
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.2,
      });

      // Particle system animation
      gsap.to(".particle", {
        y: -100,
        opacity: 0,
        duration: "random(2, 4)",
        ease: "power1.out",
        repeat: -1,
        delay: "random(0, 3)",
        stagger: {
          amount: 2,
          repeat: -1,
        },
      });
    };
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  const handleCardHover = (index, isEntering) => {
    if (window.gsap) {
      const card = cardsRef.current[index];
      const icon = card.querySelector(".card-icon");
      const background = card.querySelector(".card-bg");
      const content = card.querySelector(".card-content");
      const decorativeElements = card.querySelectorAll(".decorative-element");

      if (isEntering) {
        window.gsap.to(card, {
          y: -15,
          scale: 1.02,
          duration: 0.5,
          ease: "power2.out",
        });

        window.gsap.to(background, {
          scale: 1.05,
          duration: 0.5,
          ease: "power2.out",
        });

        window.gsap.to(icon, {
          scale: 1.2,
          rotation: 10,
          duration: 0.4,
          ease: "back.out(1.7)",
        });

        window.gsap.to(decorativeElements, {
          scale: 1.1,
          opacity: 1,
          duration: 0.3,
          stagger: 0.05,
          ease: "power2.out",
        });
      } else {
        window.gsap.to(card, {
          y: 0,
          scale: 1,
          duration: 0.5,
          ease: "power2.out",
        });

        window.gsap.to(background, {
          scale: 1,
          duration: 0.5,
          ease: "power2.out",
        });

        window.gsap.to(icon, {
          scale: 1,
          rotation: 0,
          duration: 0.4,
          ease: "power2.out",
        });

        window.gsap.to(decorativeElements, {
          scale: 1,
          opacity: 0.6,
          duration: 0.3,
          stagger: 0.05,
          ease: "power2.out",
        });
      }
    }
  };

  const personaData = [
    {
      title: "Strategy & Insight",
      description:
        "Transform complex market data into actionable intelligence that drives competitive advantage through deep analytical frameworks.",
      tag: "Strategic Intelligence",
      visuals: {
        icon: ChartBarIcon,
        decorativeIcon: BoltIcon,
        pattern: "dots",
      },
    },
    {
      title: "Creative Direction",
      description:
        "Craft compelling visual narratives that resonate with audiences and inspire meaningful action across all touchpoints.",
      tag: "Creative Excellence",
      visuals: {
        icon: PaintBrushIcon,
        decorativeIcon: SparklesIcon,
        pattern: "waves",
      },
    },
    {
      title: "Technology & AI",
      description:
        "Leverage cutting-edge artificial intelligence to create personalized experiences that adapt and evolve with user behavior.",
      tag: "AI Innovation",
      visuals: {
        icon: CpuChipIcon,
        decorativeIcon: RocketLaunchIcon,
        pattern: "grid",
      },
    },
    {
      title: "Customer Success",
      description:
        "Build lasting relationships through exceptional service delivery and proactive support that exceeds expectations.",
      tag: "Client Excellence",
      visuals: {
        icon: FaceSmileIcon,
        decorativeIcon: StarIcon,
        pattern: "circles",
      },
    },
    {
      title: "Brand Identity",
      description:
        "Develop distinctive brand expressions that create emotional connections and drive long-term customer loyalty.",
      tag: "Brand Mastery",
      visuals: {
        icon: IdentificationIcon,
        decorativeIcon: FireIcon,
        pattern: "lines",
      },
    },
    {
      title: "UX Research",
      description:
        "Uncover deep user insights through rigorous research methodologies that inform every design decision.",
      tag: "User Intelligence",
      visuals: {
        icon: MagnifyingGlassIcon,
        decorativeIcon: LightBulbIcon,
        pattern: "hexagons",
      },
    },
  ];

  const PatternComponent = ({ type, className }) => {
    const patterns = {
      dots: (
        <div className={className}>
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="w-1 h-1 bg-white/10 rounded-full absolute"
              style={{
                top: `${20 + (i % 3) * 20}%`,
                left: `${20 + Math.floor(i / 3) * 20}%`,
              }}
            />
          ))}
        </div>
      ),
      waves: (
        <div className={className}>
          <svg className="w-full h-full opacity-10" viewBox="0 0 100 100">
            <path
              d="M0,50 Q25,30 50,50 T100,50"
              fill="none"
              stroke="white"
              strokeWidth="1"
            />
            <path
              d="M0,60 Q25,40 50,60 T100,60"
              fill="none"
              stroke="white"
              strokeWidth="1"
            />
          </svg>
        </div>
      ),
      grid: (
        <div className={className}>
          <div className="absolute inset-0 opacity-10">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={`h-${i}`}
                className="absolute w-full h-px bg-white"
                style={{ top: `${i * 20}%` }}
              />
            ))}
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={`v-${i}`}
                className="absolute h-full w-px bg-white"
                style={{ left: `${i * 20}%` }}
              />
            ))}
          </div>
        </div>
      ),
      circles: (
        <div className={className}>
          {[30, 50, 70].map((size, i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 border border-white/10 rounded-full transform -translate-x-1/2 -translate-y-1/2"
              style={{ width: `${size}%`, height: `${size}%` }}
            />
          ))}
        </div>
      ),
      lines: (
        <div className={className}>
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="absolute h-full w-px bg-white/10 transform -rotate-45"
              style={{ left: `${12.5 * i}%` }}
            />
          ))}
        </div>
      ),
      hexagons: (
        <div className={className}>
          <svg className="w-full h-full opacity-10" viewBox="0 0 100 100">
            <polygon
              points="50,15 65,25 65,45 50,55 35,45 35,25"
              fill="none"
              stroke="white"
              strokeWidth="1"
            />
            <polygon
              points="30,35 40,40 40,50 30,55 20,50 20,40"
              fill="none"
              stroke="white"
              strokeWidth="1"
            />
            <polygon
              points="70,35 80,40 80,50 70,55 60,50 60,40"
              fill="none"
              stroke="white"
              strokeWidth="1"
            />
          </svg>
        </div>
      ),
    };

    return patterns[type] || patterns.dots;
  };

  return (
    <div
      className="bg-black text-white min-h-screen overflow-hidden relative pt-24 sm:pt-26 md:pt-0 xl:pt-24 4xl:pt-0"
      ref={containerRef}
    >
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Floating Geometric Shapes */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={`shape-${i}`}
            className="floating-shape absolute w-4 h-4 border border-white/5 transform rotate-45"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}

        {/* Particle System */}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`particle-${i}`}
            className="particle absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              top: "100%",
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}

        {/* Large Decorative Elements */}
        {/* <div className="absolute top-1/4 right-1/4 w-96 h-96 border border-white/5 rounded-full transform rotate-12" />
        <div className="absolute bottom-1/3 left-1/6 w-64 h-64 border-2 border-white/5 transform rotate-45" />
        <div className="absolute top-1/2 left-1/2 w-32 h-32 border border-white/5 rounded-full transform -translate-x-1/2 -translate-y-1/2 rotate-45" /> */}
      </div>

      <div className="relative z-10">
        {/* Header Section */}
        <header className="text-center pb-20 md:pb-32 px-6" ref={headerRef}>
          <div className="max-w-6xl mx-auto">
            {/* Badge */}
            {/* <div className="badge inline-block mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-white/10 rounded-full blur-sm" />
                <div className="relative bg-white/5 border border-white/20 rounded-full px-8 py-3 backdrop-blur-sm">
                  <span className="text-sm font-medium tracking-wider uppercase text-white/80">
                    Strategic Targeting System
                  </span>
                </div>
              </div>
            </div> */}

            {/* Main Title */}
            <TextReveal
              className="text-center mb-4 text-120 font-bold  text-white"
              animation="rotateX"
              stagger={0.1}
              duration={0.8}
            >
              Persona Targeting
            </TextReveal>
            {/* <h1 className="main-title flex text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-8 relative">
              <span className="bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent">
                Persona
              </span>
              <br />
              <span className="bg-gradient-to-r from-gray-400 via-white to-gray-400 bg-clip-text text-transparent">
                Targeting
              </span>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
            </h1> */}

            {/* Subtitle */}
            <p className="subtitle text-20 md:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light">
              Precision-engineered audience targeting through sophisticated
              design systems, data intelligence, and creative excellence that
              transforms engagement into lasting connections
            </p>
          </div>
        </header>

        {/* Cards Grid */}
        <main
          className="max-w-8xl  xl:w-[80vw] mx-auto px-4 xl:px-0 pb-32"
          ref={gridRef}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12">
            {personaData.map((persona, index) => (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className="group relative cursor-pointer  hover:border-[#ec466f]  card-bg  rounded-3xl border border-white/10  backdrop-blur-sm"
                onMouseEnter={() => handleCardHover(index, true)}
                onMouseLeave={() => handleCardHover(index, false)}
              >
                {/* Card Background */}
                <div className=" absolute inset-0 bg-gradient-to-br from-white/5 to-white/2 rounded-3xl   backdrop-blur-sm" />

                {/* Pattern Overlay */}
                <PatternComponent
                  type={persona.pattern}
                  className="absolute inset-0 rounded-3xl overflow-hidden"
                />

                {/* Card Content */}
                <div className="card-content relative p-8 lg:p-10 h-full min-h-[400px] flex flex-col">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-8">
                    {/* Icon */}
                    <div className="card-icon relative">
                      <div className="w-16 h-16 bg-[#ec466f] rounded-2xl flex items-center justify-center backdrop-blur-sm \ border-gray-100 transition-all duration-300">
                        <persona.visuals.icon className="h-10 w-10 text-gray-100" />
                      </div>
                      {/* Decorative Element */}
                      <div className="decorative-element absolute -top-2 -right-2 w-6 h-6 bg-white/5 rounded-full flex items-center justify-center border border-white/20 opacity-60">
                        <persona.visuals.decorativeIcon className=" h-4 w-4 text-gray-300" />
                      </div>
                    </div>

                    {/* Number */}
                    <div className="text-60 font-normal text-[#c466f] opacity-20 leading-none">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <h3 className="text-30 font-light text-[#fff] mb-4 tracking-tight">
                      {persona.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed text-20 font-light mb-8">
                      {persona.description}
                    </p>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    <span className="px-4 py-2 text-xs font-medium text-white/80 bg-white/10 rounded-full border border-white/20 backdrop-blur-sm tracking-wide uppercase">
                      {persona.tag}
                    </span>

                    {/* <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center border border-white/20 group-hover:bg-white/10 transition-all duration-300">
                      <svg
                        className="w-4 h-4 text-white/60 group-hover:text-white transition-colors duration-300 transform group-hover:translate-x-0.5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div> */}
                  </div>

                  {/* Additional Decorative Elements */}
                  <div className="decorative-element absolute top-4 right-4 w-2 h-2 bg-white/20 rounded-full opacity-60" />
                  <div className="decorative-element absolute bottom-4 left-4 w-3 h-px bg-white/20 opacity-60" />
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700&display=swap");

        * {
          font-family: "Inter", system-ui, sans-serif;
        }

        .floating-shape {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0%,
          100% {
            transform: translate(0, 0) rotate(45deg) scale(1);
          }
          50% {
            transform: translate(20px, -20px) rotate(225deg) scale(1.1);
          }
        }

        .particle {
          animation: particle-rise 4s linear infinite;
        }

        @keyframes particle-rise {
          0% {
            transform: translateY(0) scale(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
            transform: scale(1);
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) scale(0);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default PersonaTargeting;
