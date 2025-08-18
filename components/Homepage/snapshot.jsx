"use client";

import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextReveal from "../Text Reveal/textreveal";

gsap.registerPlugin(ScrollTrigger);

const Snapshot = () => {
  const [hoveredCard, setHoveredCard] = useState(3);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const cardsRef = useRef(null);

  const cards = [
    {
      id: 1,
      title: "Giftcart - Personalised Gifting",
      description:
        "Platform dedicated to promoting cultural industries and creative professionals.",
      videoSrc: "/videos/Dreamfox_Giftcart.mp4",
    },
    {
      id: 2,
      title: "INDIC Branding & Website",
      description:
        "Complete website overhaul with modern design principles and enhanced user experience.",
      videoSrc: "/videos/Dreamfox_INDIC.mp4",
    },
    {
      id: 3,
      title: "EverFox Domain Branding",
      description:
        "Custom Webflow implementation with advanced interactions and responsive design.",
      videoSrc: "/videos/Dreamfox_Everfox.mp4",
    },
    {
      id: 4,
      title: "October.ai —Designara + Brandlara",
      description:
        "Showcasing creative work with dynamic layouts and smooth transitions.",
      videoSrc: "/videos/Dreamfox_October.ai.mp4",
    },

    {
      id: 5,
      title: "Crosswalk.ai—Branding",
      description:
        "Website redesign & Webflow development for studio fugu, A localization studio.",
      videoSrc: "/videos/Dreamfox_Crosswalk.mp4",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Description animation
      gsap.fromTo(
        descriptionRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.2,
          scrollTrigger: {
            trigger: descriptionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Cards stagger animation
      gsap.fromTo(
        ".card-item",
        { opacity: 0, scale: 0.9, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.4,
          // stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  // Simple hover handler - no complex animations, just state management
  const handleCardHover = (cardId, isHovering) => {
    // Only enable hover effects on XL screens and above
    if (window.innerWidth >= 1280) {
      setHoveredCard(isHovering ? cardId : null);
    }
  };

  // Handle click for smaller screens
  const handleCardClick = (cardId) => {
    // For screens below XL, toggle video play on click
    if (window.innerWidth < 1280) {
      setHoveredCard(hoveredCard === cardId ? null : cardId);
    }
  };

  // Function to get slanting height for other cards (only for XL and above)
  const getCardHeight = (cardId, index) => {
    // For screens below XL, use simple fixed height
    if (typeof window !== "undefined" && window.innerWidth < 1280) {
      return "h-[250px] sm:h-[280px] md:h-[300px]";
    }

    // Original slanting logic for XL screens and above
    if (hoveredCard === cardId) {
      return "h-[300px] md:h-[400px] lg:h-[450px]"; // Responsive hovered card height
    }

    if (hoveredCard && hoveredCard !== cardId) {
      // Create slanting effect based on distance from hovered card
      const hoveredIndex = cards.findIndex((card) => card.id === hoveredCard);
      const distance = Math.abs(index - hoveredIndex);

      // Responsive heights decrease with distance
      const heights = [
        "h-[250px] md:h-[300px] lg:h-[350px]", // 1st neighbor
        "h-[220px] md:h-[260px] lg:h-[300px]", // 2nd neighbor
        "h-[200px] md:h-[230px] lg:h-[250px]", // 3rd neighbor
        "h-[180px] md:h-[200px] lg:h-[200px]", // 4th+ neighbor
      ];
      return (
        heights[Math.min(distance - 1, heights.length - 1)] ||
        "h-[180px] md:h-[200px] lg:h-[200px]"
      );
    }

    return "h-[250px] md:h-[300px] lg:h-[350px]"; // Default responsive height when nothing is hovered
  };

  return (
    <section
      ref={sectionRef}
      className="flex justify-center items-center text-white py-8 md:py-16 lg:py-32 px-4 md:px-6 lg:px-8"
    >
      <div className="container mx-auto">
        <div className="text-center mb-8 md:mb-12 lg:mb-16">
          <TextReveal
            className="text-120 font-semibold mb-4 md:mb-6 lg:mb-8"
            animation="rotateX"
            stagger={0.1}
            duration={0.8}
          >
            Case Snapshots
          </TextReveal>

          <TextReveal
            stagger={0.1}
            duration={0.8}
            ref={descriptionRef}
            className="text-40 text-gray-300 max-w-3xl md:max-w-4xl lg:max-w-6xl mx-auto leading-relaxed px-4 font-extralight"
          >
            Website redesign & Webflow development for studio fugu, A
            localization studio dedicated to the creative and cultural
            industries.
          </TextReveal>
        </div>

        {/* Cards Grid */}
        <div
          ref={cardsRef}
          className="xl:flex xl:flex-row xl:justify-center xl:items-end xl:gap-4 xl:min-h-[500px] 
                     grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full px-2 sm:px-0"
        >
          {cards.map((card, index) => {
            const isHovered = hoveredCard === card.id;
            const isOtherHovered = hoveredCard && hoveredCard !== card.id;
            const cardHeight = getCardHeight(card.id, index);

            return (
              <div
                key={card.id}
                data-card-id={card.id}
                className={`card-item relative bg-black overflow-hidden cursor-pointer rounded-sm transition-all duration-300 ease-out
                  xl:flex-shrink-0 ${
                    isHovered
                      ? "xl:w-[420px]"
                      : isOtherHovered
                      ? "xl:w-[250px]"
                      : "xl:w-[280px]"
                  } 
                  w-full max-w-[400px] mx-auto xl:max-w-none xl:mx-0
                } ${cardHeight}`}
                onMouseEnter={() => handleCardHover(card.id, true)}
                onMouseLeave={() => handleCardHover(card.id, false)}
                onClick={() => handleCardClick(card.id)}
              >
                <div className="relative w-full h-full">
                  <video
                    src={card.videoSrc}
                    className="w-full h-full object-cover"
                    muted
                    loop
                    playsInline
                    ref={(video) => {
                      if (video) {
                        if (hoveredCard === card.id) {
                          video.play();
                        } else {
                          video.pause();
                          video.currentTime = 0;
                        }
                      }
                    }}
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                  {/* Content */}
                  {/* {hoveredCard === card.id && (
                    <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 lg:p-6 text-white">
                      <h3 className="text-16  mb-1 md:mb-2">
                        {card.title}
                      </h3>
                      <p className="text-sm md:text-base lg:text-16 text-gray-200 leading-snug">
                        {card.description}
                      </p>
                    </div>
                  )} */}

                  {/* Card title when not hovered */}
                  {/* {hoveredCard !== card.id && ( */}
                  <div className="absolute bottom-2 md:bottom-3 lg:bottom-4 left-2 md:left-3 lg:left-4 text-white">
                    <span className="text-16 ">{card.title}</span>
                  </div>
                  {/* )} */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Snapshot;
