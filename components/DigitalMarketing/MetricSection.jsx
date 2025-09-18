"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  UsersIcon,
  RocketLaunchIcon,
  TrophyIcon,
  GlobeAmericasIcon,
} from "@heroicons/react/24/outline";
import TextReveal from "../Text Reveal/textreveal";

gsap.registerPlugin(ScrollTrigger);

const metrics = [
  {
    label: "Clients",
    value: "120+",
    w: 300,
    h: 280,
    x: "5vw",
    y: "15vh",
    icon: UsersIcon,
  },
  {
    label: "Projects",
    value: "300+",
    w: 300,
    h: 280,
    x: "65vw",
    y: "10vh",
    icon: RocketLaunchIcon,
  },
  {
    label: "Awards",
    value: "15",
    w: 300,
    h: 280,
    x: "25vw",
    y: "60vh",
    icon: TrophyIcon,
  },
  {
    label: "Countries",
    value: "10",
    w: 300,
    h: 280,
    x: "70vw",
    y: "50vh",
    icon: GlobeAmericasIcon,
  },
];

// Random purple blur blobs for background
const blurs = [
  { top: "10%", left: "15%", size: 220, color: "#a259f7", opacity: 0.25 },
  { top: "60%", left: "70%", size: 280, color: "#8e44ad", opacity: 0.18 },
  { top: "40%", left: "40%", size: 140, color: "#d2448d", opacity: 0.13 },
  { top: "20%", left: "60%", size: 200, color: "#9b59b6", opacity: 0.2 },
];

// Helper: get card size based on screen width
function getCardSize() {
  if (typeof window === "undefined") return { w: 200, h: 180 };
  if (window.innerWidth >= 1536) {
    // 2xl breakpoint (Tailwind: 1536px)
    return { w: 270, h: 240 };
  }
  if (window.innerWidth >= 1024) {
    // lg breakpoint (Tailwind: 1024px)
    return { w: 250, h: 220 };
  }
  if (window.innerWidth >= 768) {
    // md breakpoint (Tailwind: 768px)
    return { w: 230, h: 200 };
  }
  return { w: 200, h: 180 };
}

export default function MetricSection() {
  const [isMobile, setIsMobile] = React.useState(false);
  const [cardSize, setCardSize] = React.useState(getCardSize());

  React.useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    setCardSize(getCardSize());

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setCardSize(getCardSize());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardRefs = useRef([]);
  const contentRef = useRef(null);
  const timelineRef = useRef(null); // Store timeline reference

  useGSAP(() => {
    const masterTL = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=100%",
        pin: true,
        pinSpacing: true,
        scrub: 1,
        markers: false, // Set to false in production
        onEnter: () => {
          console.log("Section entered viewport");
        },
        onLeave: () => {
          console.log("Section left viewport");
        },
      },
    });

    // Get screen width for responsive layout
    const screenWidth = window.innerWidth;
    const isMedium = screenWidth < 1024 && screenWidth >= 768; // md breakpoint
    const isSmall = screenWidth < 768; // sm breakpoint

    const cardsToCenter = gsap.timeline();

    if (isSmall) {
      // Small screens: static positioning instead of animation for better visibility
      const centerX = window.innerWidth / 2 - 100; // Center X (half of card width)

      // Completely kill ScrollTrigger for mobile to use static positioning
      ScrollTrigger.getAll().forEach((st) => st.kill());

      // Set each card's position directly without animation
      metrics.forEach((m, i) => {
        gsap.set(cardRefs.current[i], {
          position: "relative", // Change to relative positioning
          x: 0, // Reset transforms
          y: 0,
          left: "50%", // Center horizontally
          transform: "translateX(-50%)",
          marginBottom: "20px", // Add spacing between cards
          scale: 0.8, // Scale down to fit on screen
          opacity: 1,
          clearProps: "top", // Clear absolute positioning
          width: cardSize.w,
          height: cardSize.h,
        });
      });

      // Empty timeline since we're using static positioning
      return;
    } else if (isMedium) {
      // Medium screens: 2x2 grid layout positioned immediately below heading
      const leftX = window.innerWidth / 2 - cardSize.w - 10;
      const rightX = window.innerWidth / 2 + 10;
      const topY = "80px"; // Immediately below heading
      const bottomY = "360px"; // Increased gap between rows

      // Top row
      cardsToCenter.to(
        cardRefs.current[0],
        {
          x: `${leftX}px`,
          y: topY,
          width: cardSize.w,
          height: cardSize.h,
          duration: 0.5,
          ease: "power2.inOut",
        },
        0
      );

      cardsToCenter.to(
        cardRefs.current[1],
        {
          x: `${rightX}px`,
          y: topY,
          width: cardSize.w,
          height: cardSize.h,
          duration: 0.5,
          ease: "power2.inOut",
        },
        0.05
      );

      // Bottom row
      cardsToCenter.to(
        cardRefs.current[2],
        {
          x: `${leftX}px`,
          y: bottomY,
          width: cardSize.w,
          height: cardSize.h,
          duration: 0.5,
          ease: "power2.inOut",
        },
        0.1
      );

      cardsToCenter.to(
        cardRefs.current[3],
        {
          x: `${rightX}px`,
          y: bottomY,
          width: cardSize.w,
          height: cardSize.h,
          duration: 0.5,
          ease: "power2.inOut",
        },
        0.15
      );
    } else {
      // Large screens: horizontal row layout (current behavior)
      const totalWidth = metrics.length * (cardSize.w + 20);
      const startX = (window.innerWidth - totalWidth) / 2;

      metrics.forEach((m, i) => {
        cardsToCenter.to(
          cardRefs.current[i],
          {
            x: `${startX + i * (cardSize.w + 20)}px`, // Center horizontally with spacing
            y: `calc(50vh - ${cardSize.h / 2}px)`, // Middle of the section
            width: cardSize.w,
            height: cardSize.h,
            duration: 0.5,
            ease: "power2.inOut",
          },
          i * 0.05 // Slight stagger between cards (for visual interest)
        );
      });
    }

    const pauseTimeline = gsap.timeline();
    pauseTimeline.to({}, { duration: 1 });

    masterTL.add(cardsToCenter, 0).add(pauseTimeline, 0.33);

    timelineRef.current = masterTL;

    // Handle initial setup for mobile
    if (isSmall) {
      // Set scale for mobile devices
      metrics.forEach((_, i) => {
        gsap.set(cardRefs.current[i], { scale: 0.8 });
      });
    }

    // Add resize event listener to handle responsive layouts
    const handleResize = () => {
      // Kill old ScrollTrigger instances
      ScrollTrigger.getAll().forEach((st) => st.kill());
      // Refresh to create new animations with current screen size
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Detect client-side for responsive styles
  const isBrowser = typeof window !== "undefined";

  // Render different layouts based on screen size
  return (
    <section
      ref={sectionRef}
      className="relative h-auto  bg-black flex flex-col items-center justify-start py-8 md:py-12 overflow-visible lg:overflow-hidden"
    >
      {/* Header fixed at the top of this section */}
      <div className="w-full flex justify-center mb-4 md:mb-8  ">
        <TextReveal
          ref={headingRef}
          className="text-center text-120 pt-20 xl:pt-40  font-bold text-white"
          style={{ pointerEvents: "none" }}
          animation="rotateX"
          stagger={0.1}
          duration={0.8}
        >
          Our Metrics
        </TextReveal>
      </div>

      {/* Purple blur blobs */}
      {blurs.map((b, i) => (
        <div
          key={i}
          className="pointer-events-none absolute rounded-full blur-3xl"
          style={{
            top: b.top,
            left: b.left,
            width: b.size,
            height: b.size,
            background: b.color,
            opacity: b.opacity,
            zIndex: 0,
          }}
        />
      ))}

      {/* MOBILE VIEW - Static vertical column */}
      {isMobile && (
        <div className="flex  flex-col items-center gap-4 mt-2">
          {metrics.map((metric, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-20 items-start justify-start mb-4 mx-auto scale-150"
              style={{ width: cardSize.w, height: cardSize.h }}
            >
              {/* SVG Outline background */}
              <div className="absolute inset-0 z-0 ">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 304 336"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d="M1 317V19.2224C1 9.19484 9.1942 1.10062 19.221 1.22374L189.778 3.31808C196.646 3.40242 202.868 7.38852 205.816 13.593L227.986 60.263C230.775 66.133 236.511 70.0441 242.994 70.4958L286.251 73.5096C295.684 74.1667 303 82.0104 303 91.466V317C303 326.941 294.941 335 285 335H152H19C9.05887 335 1 326.941 1 317Z"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                </svg>
              </div>

              {/* Content - positioned over the SVG */}
              <div className="relative z-10 flex flex-col items-start p-6 w-full h-full ml-3   ">
                {/* Icon in top left */}
                <span className="mb-4 text-whit ">
                  <metric.icon className="w-10 h-10 text-white" />
                </span>

                {/* Value with gradient */}
                <span
                  className="text-5xl font-bold mb- "
                  style={{
                    background:
                      "linear-gradient(90deg, #EC486E 0%, #EC486E 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {metric.value}
                </span>

                {/* Label in white */}
                <span className="text-xl text-white ">{metric.label}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* DESKTOP VIEW - GSAP animated cards */}
      {!isMobile && (
        <div
          ref={contentRef}
          className="w-full lg:h-[70vh] min-h-[70vh] h-full flex flex-col items-center"
        >
          <div className="w-full h-auto lg:h-full relative z-10 pb-12 lg:pb-0">
            {metrics.map((m, i) => (
              <div
                key={i}
                ref={(el) => (cardRefs.current[i] = el)}
                className="absolute flex flex-col items-start justify-start transition-all duration-500"
                style={{
                  width: "300px",
                  height: "400px",
                  left: 0,
                  top: 0,
                  opacity: 1,
                  transform: `translate(${m.x}, ${m.y})`,
                  boxSizing: "border-box",
                  zIndex: 10,
                }}
              >
                {/* SVG Outline background */}
                <div className="absolute inset-0 z-0">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 304 336"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid meet"
                  >
                    <path
                      d="M1 317V19.2224C1 9.19484 9.1942 1.10062 19.221 1.22374L189.778 3.31808C196.646 3.40242 202.868 7.38852 205.816 13.593L227.986 60.263C230.775 66.133 236.511 70.0441 242.994 70.4958L286.251 73.5096C295.684 74.1667 303 82.0104 303 91.466V317C303 326.941 294.941 335 285 335H152H19C9.05887 335 1 326.941 1 317Z"
                      stroke="white"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>

                {/* Content - positioned over the SVG */}
                <div className=" ml-4 relative z-10 flex flex-col items-start justify-end p-6 w-full h-full">
                  {/* Icon in top left */}
                  <span className="mb-4 text-white">
                    <m.icon className="w-10 h-10 text-white" />
                  </span>

                  {/* Value with gradient */}
                  <span
                    className="text-48 font-bold mb-2"
                    style={{
                      background:
                        "linear-gradient(90deg, #EC486E 0%, #EC486E 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {m.value}
                  </span>

                  {/* Label in white */}
                  <span className="text-30 text-white mb-4">{m.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
