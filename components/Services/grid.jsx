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
          scale: 1.03,
          rotationY: -2,
          rotationX: 2,
          duration: 0.4,
          ease: "power2.out",
        });
        gsap.to(parallaxImg, {
          scale: 1.1,
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
     

      <div className="container mx-auto relative z-10">
        {/* Section Title */}
        <TextReveal
          className="text-120 text-center font-semibold mb-4 md:mb-6 lg:mb-20"
          animation="rotateX"
          stagger={0.1}
          duration={0.8}
        >
          Four Pillars
        </TextReveal>

        {/* 2x2 Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8  mx-auto xl:gap-16" >
          {pillars.map((pillar, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group relative h-[500px] rounded-3xl overflow-hidden cursor-pointer border border-white/10 backdrop-blur-sm bg-gradient-to-br from-gray-900/80 via-black/60 to-gray-800/80"
            >
              {/* Parallax Background Image */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  className="parallax-image absolute inset-0 w-full h-[120%] object-cover opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40"></div>
              </div>

              {/* Content Overlay */}
              <div className="content-overlay absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/90 via-transparent to-transparent">
                <div className="transform transition-transform duration-300 group-hover:translate-y-[-10px]">
                  <h3 className="card-title text-3xl font-bold mb-4 text-pink-100 leading-tight">
                    {pillar.title}
                  </h3>
                  <p className="card-text text-pink-50/80 text-lg leading-relaxed mb-8 line-clamp-3">
                    {pillar.text}
                  </p>

                  <button className="card-cta group/btn relative px-8 py-4 bg-pink-600/80 hover:bg-pink-500 rounded-2xl text-white font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/25 transform hover:scale-105 border border-pink-500/30 hover:border-pink-400/50">
                    <span className="relative z-10 flex items-center">
                      {pillar.cta}
                      <svg
                        className="ml-2 w-5 h-5 transition-transform group-hover/btn:translate-x-1"
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
                    <div className="absolute inset-0 bg-pink-400/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                  </button>
                </div>
              </div>

              {/* Animated Border */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="absolute inset-0 rounded-3xl bg-pink-500/30 opacity-30 blur-xl"></div>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-4 right-4 w-16 h-16 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-pink-400 to-rose-500 blur-sm"></div>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style jsx>{`
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default FourPillarsSection;
