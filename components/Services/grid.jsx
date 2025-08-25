import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextReveal from "../Text Reveal/textreveal";

const FourPillarsSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Title animation
    gsap.fromTo(
      titleRef.current,
      {
        opacity: 0,
        y: 100,
        scale: 0.8,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          end: "bottom 20%",
        },
      }
    );

    // Cards staggered reveal
    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      const parallaxImg = card.querySelector(".parallax-image");
      const overlay = card.querySelector(".content-overlay");
      const title = card.querySelector(".card-title");
      const text = card.querySelector(".card-text");
      const cta = card.querySelector(".card-cta");

      // Card entrance animation
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 100,
          scale: 0.95,
          rotationY: 15,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotationY: 0,
          duration: 1,
          delay: index * 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
          },
        }
      );

      // Parallax effect for images inside cards
      gsap.to(parallaxImg, {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: card,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      // Content reveal animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: "top 75%",
        },
      });

      tl.fromTo(overlay, { opacity: 0 }, { opacity: 1, duration: 0.8 })
        .fromTo(
          title,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.4"
        )
        .fromTo(
          text,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.3"
        )
        .fromTo(
          cta,
          { opacity: 0, y: 15, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 0.5 },
          "-=0.2"
        );

      // Hover animations
      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          scale: 1.02,
          rotationY: -1,
          rotationX: 1,
          duration: 0.4,
          ease: "power2.out",
        });
        gsap.to(parallaxImg, {
          scale: 1.05,
          duration: 0.8,
          ease: "power2.out",
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          scale: 1,
          rotationY: 0,
          rotationX: 0,
          duration: 0.4,
          ease: "power2.out",
        });
        gsap.to(parallaxImg, {
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
        });
      });
    });
  }, []);

  const pillars = [
    {
      title: "Brand Identity & Advisory",
      text: "Position boldly with Brand ID, Architecture, and Advisory for startups and re-engineering giants.",
      cta: "Discover Branding",
      image:
        "https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Designara Studio",
      text: "Cutting-edge UX/UI, digital experiences, DXPs, and commerce fronts—the face of your brand.",
      cta: "Explore Design",
      image:
        "https://images.unsplash.com/photo-1561736778-92e52a7769ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "AI & Digital Assimilations",
      text: "Tech stack, AI-driven marketing, SEO/SMO, and Audacis-powered performance marketing.",
      cta: "See Assimilations",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Yippee Media",
      text: "Content, social, influencer marketing, and real-time curated media expertise.",
      cta: "Grow with Media",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="min-h-screen text-white bg-black py-20 px-6 overflow-hidden relative"
    >
      <div className="container mx-auto relative z-10 max-w-7xl">
        {/* Section Title */}
        <TextReveal
          className="text-120 text-center font-semibold mb-4 md:mb-6 lg:mb-20"
          animation="rotateX"
          stagger={0.1}
          duration={0.8}
        >
          Four Pillars
        </TextReveal>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-5 grid-rows-2 gap-6 h-[800px] lg:gap-8">
          {/* Card 1 - 2/5 width, full height */}
          <div
            ref={(el) => (cardsRef.current[0] = el)}
            className="group relative col-span-2 row-span-2  overflow-hidden cursor-pointer border border-white/10 backdrop-blur-sm bg-gradient-to-br from-gray-900/80 via-black/60 to-gray-800/80"
          >
            {/* Parallax Background Image */}
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={pillars[0].image}
                alt={pillars[0].title}
                className="parallax-image absolute inset-0 w-full h-[120%] object-cover opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-none"></div>
            </div>

            {/* Content Overlay */}
            <div className="content-overlay absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/90 via-transparent to-transparent">
              <div className="transform transition-transform duration-300 group-hover:translate-y-[-10px]">
                <h3 className="card-title text-3xl font-bold mb-4 text-white leading-tight">
                  {pillars[0].title}
                </h3>
                <p className="card-text text-gray-300 text-lg leading-relaxed mb-8 line-clamp-4">
                  {pillars[0].text}
                </p>

                <button className="card-cta group/btn relative overflow-hidden px-6 py-3 bg-transparent border border-white/30 hover:border-white/60 rounded-full text-white font-medium text-sm transition-all duration-300 hover:bg-white/5 backdrop-blur-sm">
                  <span className="relative z-10 flex items-center">
                    {pillars[0].cta}
                    <svg
                      className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>

            {/* Corner Accent */}
            <div className="absolute top-4 right-4 w-12 h-12 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-400 to-cyan-500 blur-sm"></div>
            </div>
          </div>

          {/* Card 2 - 3/5 width, half height */}
          <div
            ref={(el) => (cardsRef.current[1] = el)}
            className="group relative col-span-3 row-span-1  overflow-hidden cursor-pointer border border-white/10 backdrop-blur-sm bg-gradient-to-br from-gray-900/80 via-black/60 to-gray-800/80"
          >
            {/* Parallax Background Image */}
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={pillars[1].image}
                alt={pillars[1].title}
                className="parallax-image absolute inset-0 w-full h-[120%] object-cover opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-none"></div>
            </div>

            {/* Content Overlay */}
            <div className="content-overlay absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/90 via-transparent to-transparent">
              <div className="transform transition-transform duration-300 group-hover:translate-y-[-5px]">
                <h3 className="card-title text-2xl font-bold mb-3 text-white leading-tight">
                  {pillars[1].title}
                </h3>
                <p className="card-text text-gray-300 text-base leading-relaxed mb-6 line-clamp-2">
                  {pillars[1].text}
                </p>

                <button className="card-cta group/btn relative overflow-hidden px-6 py-3 bg-transparent border border-white/30 hover:border-white/60 rounded-full text-white font-medium text-sm transition-all duration-300 hover:bg-white/5 backdrop-blur-sm">
                  <span className="relative z-10 flex items-center">
                    {pillars[1].cta}
                    <svg
                      className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>

            {/* Corner Accent */}
            <div className="absolute top-4 right-4 w-12 h-12 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-400 to-indigo-500 blur-sm"></div>
            </div>
          </div>

          {/* Card 3 - 3/5 width, half height */}

          <div className="grid grid-cols-2 grid-rows-1 gap-6 col-span-3 row-span-1">
            <div
              ref={(el) => (cardsRef.current[2] = el)}
              className="group relative col-span-1 row-span-1  overflow-hidden cursor-pointer border border-white/10 backdrop-blur-sm bg-gradient-to-br from-gray-900/80 via-black/60 to-gray-800/80"
            >
              {/* Parallax Background Image */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={pillars[2].image}
                  alt={pillars[2].title}
                  className="parallax-image absolute inset-0 w-full h-[120%] object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-none"></div>
              </div>

              {/* Content Overlay */}
              <div className="content-overlay absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/90 via-transparent to-transparent">
                <div className="transform transition-transform duration-300 group-hover:translate-y-[-5px]">
                  <h3 className="card-title text-2xl font-bold mb-3 text-white leading-tight">
                    {pillars[2].title}
                  </h3>
                  <p className="card-text text-gray-300 text-base leading-relaxed mb-6 line-clamp-2">
                    {pillars[2].text}
                  </p>

                  <button className="card-cta group/btn relative overflow-hidden px-6 py-3 bg-transparent border border-white/30 hover:border-white/60 rounded-full text-white font-medium text-sm transition-all duration-300 hover:bg-white/5 backdrop-blur-sm">
                    <span className="relative z-10 flex items-center">
                      {pillars[2].cta}
                      <svg
                        className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-4 right-4 w-12 h-12 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-green-400 to-emerald-500 blur-sm"></div>
              </div>
            </div>
            <div
              ref={(el) => (cardsRef.current[3] = el)}
              className="group  roup relative col-span-1 row-span-1  overflow-hidden cursor-pointer border border-white/10 backdrop-blur-sm bg-gradient-to-br from-gray-900/90 via-black/70 to-gray-800/90 z-10 shadow-2xl"
            //   style={{ transform: "translate(50px, 50px)" }}
            >
              {/* Parallax Background Image */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={pillars[3].image}
                  alt={pillars[3].title}
                  className="parallax-image absolute inset-0 w-full h-[120%] object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-none"></div>
              </div>

              {/* Content Overlay */}
              <div className="content-overlay absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/90 via-transparent to-transparent">
                <div className="transform transition-transform duration-300 group-hover:translate-y-[-5px]">
                  <h3 className="card-title text-xl font-bold mb-3 text-white leading-tight">
                    {pillars[3].title}
                  </h3>
                  <p className="card-text text-gray-300 text-sm leading-relaxed mb-4 line-clamp-2">
                    {pillars[3].text}
                  </p>

                  <button className="card-cta group/btn relative overflow-hidden px-5 py-2 bg-transparent border border-white/30 hover:border-white/60 rounded-full text-white font-medium text-xs transition-all duration-300 hover:bg-white/5 backdrop-blur-sm">
                    <span className="relative z-10 flex items-center">
                      {pillars[3].cta}
                      <svg
                        className="ml-2 w-3 h-3 transition-transform group-hover/btn:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
              {/* Card 4 - floating card overlapping the grid */}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default FourPillarsSection;
