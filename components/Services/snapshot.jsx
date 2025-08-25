"use client";
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextReveal from "../Text Reveal/textreveal";

gsap.registerPlugin(ScrollTrigger);

// Extended cards data - 6 cards for 2x3 grid
const cards = [
  {
    id: 1,
    title: "E-commerce Revolution",
    description:
      "Complete digital transformation resulting in 300% increase in online sales and improved user experience through strategic UX redesign.",
    imageSrc:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    category: "E-commerce & DXP",
    growthMetric: "300",
    timeline: "6 months",
  },
  {
    id: 2,
    title: "Brand Identity Overhaul",
    description:
      "Strategic rebranding that elevated market position and increased brand recognition by 250% across all digital touchpoints.",
    imageSrc:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
    category: "Brand & Identity",
    growthMetric: "250",
    timeline: "4 months",
  },
  {
    id: 3,
    title: "Mobile App Success",
    description:
      "Award-winning mobile application with innovative UX design and seamless user experience, achieving 4.8 star rating.",
    imageSrc:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    category: "Mobile Development",
    growthMetric: "180",
    timeline: "8 months",
  },
  {
    id: 4,
    title: "AI Integration Platform",
    description:
      "Cutting-edge AI platform that revolutionized workflow automation and productivity, increasing efficiency by 400%.",
    imageSrc:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    category: "AI & Technology",
    growthMetric: "400",
    timeline: "10 months",
  },
  {
    id: 5,
    title: "Digital Marketing Campaign",
    description:
      "Multi-channel marketing strategy that drove unprecedented engagement and conversion rates across social platforms.",
    imageSrc:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80",
    category: "Digital Marketing",
    growthMetric: "220",
    timeline: "5 months",
  },
  {
    id: 6,
    title: "UX/UI Redesign Project",
    description:
      "Complete user interface overhaul that improved user satisfaction by 300% and reduced bounce rate significantly.",
    imageSrc:
      "https://images.unsplash.com/photo-1613909207039-6b173b755cc1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHVpJTIwdXh8ZW58MHx8MHx8fDA%3D",
    category: "UX/UI Design",
    growthMetric: "300",
    timeline: "7 months",
  },
];

const Snapshot = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);
  const cardRefs = useRef([]);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    cardRefs.current = cardRefs.current.slice(0, cards.length);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const ctx = gsap.context(() => {
      if (cardRefs.current.length > 0) {
        gsap.set(cardRefs.current.filter(Boolean), {
          opacity: 0,
          y: 60,
          scale: 0.95,
        });

        gsap.to(cardRefs.current.filter(Boolean), {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 70%",
            toggleActions: "play none none none",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, [isClient]);

  const handleCardHover = (cardId, isHovering) => {
    setHoveredCard(isHovering ? cardId : null);
  };

  if (!isClient) {
    return <div className="min-h-screen bg-black" />;
  }

  return (
    <section
      ref={sectionRef}
      className="flex flex-col w-[90vw] mx-auto justify-center items-center text-white py-16 md:py-24 lg:py-32 bg-black"
    >
      {/* Header Section */}
      <div className="text-center mb-20 xl:mb-36">
        <TextReveal
          className="text-center text-120 pt-20 xl:pt-40 font-bold text-white"
          style={{ pointerEvents: "none" }}
          animation="rotateX"
          stagger={0.1}
          duration={0.8}
        >
          Success Stories
        </TextReveal>
        <TextReveal
          className="text-center text-40 max-w-6xl mx-auto text-white"
          style={{ pointerEvents: "none" }}
          animation="rotateX"
          stagger={0.1}
          duration={0.8}
        >
          Transforming businesses through innovative design and strategic
          branding solutions that drive growth and create lasting impact.
        </TextReveal>
      </div>

      {/* Cards Grid - 2x3 Layout */}
      <div
        ref={cardsRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6  mx-auto"
      >
        {cards.map((card, index) => {
          const isHovered = hoveredCard === card.id;

          return (
            <div
              key={card.id}
              ref={(el) => {
                if (el) cardRefs.current[index] = el;
              }}
              className="group relative overflow-hidden"
            //   onMouseEnter={() => handleCardHover(card.id, true)}
            //   onMouseLeave={() => handleCardHover(card.id, false)}
            >
              {/* Main Card */}
              <div
                className="relative bg-gray-900 rounded-2xl overflow-hidden h-[30rem] transition-all duration-700 group-hover:shadow-2xl group-hover:shadow-pink-500/20"
                style={{
                  backgroundImage: isHovered ? `url(${card.imageSrc})` : "none",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Background Overlay when hovered */}
                {isHovered && (
                  <div className="absolute inset-0 bg-black/80 transition-opacity duration-700" />
                )}

                {/* Card Content Container */}
                <div className="relative h-full flex">
                  {/* Left Half - Title & Description */}
                  <div className="w-full lg:w-1/2 p-6 flex flex-col justify-between relative z-10">
                    {/* Category Badge */}
                    <div className="mb-4">
                      <span className="inline-block bg-pink-600/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-pink-300 border border-pink-500/30">
                        {card.category}
                      </span>
                    </div>

                    {/* Title - Always Visible */}
                    <div>
                      <h3 className="text-white text-48 font-bold leading-tight mb-4">
                        {card.title}
                      </h3>

                      {/* Growth Metric */}
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-green-400 font-semibold text-20">
                          +{card.growthMetric}% Growth
                        </span>
                      </div>
                    </div>

                    {/* Description - Appears on Hover */}
                    {/* <div
                      className={`transition-all duration-500 ${
                        isHovered
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-4"
                      }`}
                    >
                      <p className="text-gray-300 text-sm leading-relaxed mb-4">
                        {card.description}
                      </p>

                      <div className="flex items-center gap-2">
                        <svg
                          className="w-4 h-4 text-blue-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span className="text-blue-400 text-xs">
                          {card.timeline}
                        </span>
                      </div>
                    </div> */}
                  </div>

                  {/* Right Half - Image */}
                  <div
                    className={`hidden lg:block lg:w-1/2 relative overflow-hidden transition-all duration-700 ${
                      isHovered
                        ? "translate-y-full opacity-0"
                        : "translate-y-0 opacity-100"
                    }`}
                  >
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent z-10" />

                    {/* Image */}
                    <img
                      src={card.imageSrc}
                      alt={card.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      onError={(e) => {
                        e.target.src = "/api/placeholder/400/300";
                      }}
                    />
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div
                  className={`absolute inset-0 border-2 rounded-2xl transition-all duration-500 ${
                    isHovered
                      ? "border-pink-500/50 shadow-lg shadow-pink-500/25"
                      : "border-transparent"
                  }`}
                />

                {/* Floating Elements on Hover */}
                {isHovered && (
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-4 right-4 w-2 h-2 bg-pink-400 rounded-full animate-pulse" />
                    <div className="absolute bottom-4 left-4 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-300" />
                    <div className="absolute top-1/2 right-6 w-1.5 h-1.5 bg-teal-400 rounded-full animate-pulse delay-500" />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Snapshot;
