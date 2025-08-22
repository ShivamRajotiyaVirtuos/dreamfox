"use client";

import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextReveal from "../Text Reveal/textreveal";

gsap.registerPlugin(ScrollTrigger);

const Snapshot_Services = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const cardsRef = useRef(null);

  const cards = [
    {
      id: 1,
      title: "Giftcart - Personalised Gifting",
      description:
        "Platform dedicated to promoting cultural industries and creative professionals with personalized gift solutions.",
      imageSrc: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&h=800&fit=crop",
      logoSrc: "https://logo.clearbit.com/shopify.com",
      logoAlt: "Giftcart Logo"
    },
    {
      id: 2,
      title: "INDIC Branding & Website",
      description:
        "Complete website overhaul with modern design principles and enhanced user experience for cultural preservation.",
      imageSrc: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=800&fit=crop",
      logoSrc: "https://logo.clearbit.com/atlassian.com",
      logoAlt: "INDIC Logo"
    },
    {
      id: 3,
      title: "EverFox Domain Branding",
      description:
        "Custom brand identity and domain strategy with advanced digital presence and responsive design solutions.",
      imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=800&fit=crop",
      logoSrc: "https://logo.clearbit.com/mozilla.org",
      logoAlt: "EverFox Logo"
    },
    {
      id: 4,
      title: "October.ai —Designara + Brandlara",
      description:
        "AI-powered design platform showcasing creative work with dynamic layouts and intelligent branding solutions.",
      imageSrc: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=800&fit=crop",
      logoSrc: "https://logo.clearbit.com/openai.com",
      logoAlt: "October.ai Logo"
    },
    {
      id: 5,
      title: "Crosswalk.ai—Branding",
      description:
        "AI-driven branding solutions with comprehensive visual identity and strategic brand positioning.",
      imageSrc: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=800&fit=crop",
      logoSrc: "https://logo.clearbit.com/nvidia.com",
      logoAlt: "Crosswalk.ai Logo"
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
    // For screens below XL, toggle description visibility on click
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
            Success Stories
          </TextReveal>

          <TextReveal
            stagger={0.1}
            duration={0.8}
            ref={descriptionRef}
            className="text-40 text-gray-300 max-w-3xl md:max-w-4xl lg:max-w-6xl mx-auto leading-relaxed px-4 font-extralight"
          >
            Transforming businesses through innovative design and strategic branding 
            solutions that drive growth and create lasting impact in the digital landscape.
          </TextReveal>
        </div>

        {/* Cards Grid */}
        <div
          ref={cardsRef}
          className="xl:flex xl:flex-row xl:justify-center xl:items-end xl:gap-4 xl:min-h-[500px]  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full px-2 sm:px-0"
        >
          {cards.map((card, index) => {
            const isHovered = hoveredCard === card.id;
            const isOtherHovered = hoveredCard && hoveredCard !== card.id;
            const cardHeight = getCardHeight(card.id, index);

            return (
              <div
                key={card.id}
                data-card-id={card.id}
                className={`card-item relative bg-black overflow-hidden cursor-pointer rounded-sm transition-all duration-500 ease-out
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
                <div className="relative w-full h-full group">
                  {/* Background Image */}
                  <img
                    src={card.imageSrc}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Company Logo */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-2 shadow-lg">
                    <img
                      src={card.logoSrc}
                      alt={card.logoAlt}
                      className="w-8 h-8 md:w-10 md:h-10 object-contain"
                    />
                  </div>

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                  {/* Card title - always visible */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-20 font-medium mb-2 leading-tight">
                      {card.title}
                    </h3>
                    
                    {/* Description - shown on hover or click */}
                    <div className={`transition-all duration-300 overflow-hidden ${
                      isHovered || (window.innerWidth < 1280 && hoveredCard === card.id)
                        ? 'opacity-100 max-h-20'
                        : 'opacity-0 max-h-0'
                    }`}>
                      <p className="text-16 text-gray-200 leading-snug">
                        {card.description}
                      </p>
                    </div>
                  </div>

                  {/* Hover overlay for better text readability */}
                  <div className={`absolute inset-0 bg-black/30 transition-opacity duration-300 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Snapshot_Services;