"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: 1,
    title: "Brand Strategy",
    subtitle: "Building Identity",
    description:
      "Creating powerful brand identities that resonate with your target audience and drive business growth.",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
    bgColor: "from-purple-900 to-indigo-900",
  },
  {
    id: 2,
    title: "Digital Marketing",
    subtitle: "Growth Focused",
    description:
      "Data-driven marketing campaigns across all digital platforms to maximize your reach and ROI.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    bgColor: "from-blue-900 to-cyan-900",
  },
  {
    id: 3,
    title: "Creative Design",
    subtitle: "Visual Excellence",
    description:
      "Innovative visual solutions that capture attention and communicate your brand message effectively.",
    image:
      "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop",
    bgColor: "from-emerald-900 to-teal-900",
  },
  {
    id: 4,
    title: "Web Development",
    subtitle: "Technical Innovation",
    description:
      "Custom websites and applications built with cutting-edge technology for optimal performance.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
    bgColor: "from-orange-900 to-red-900",
  },
  {
    id: 5,
    title: "Content Creation",
    subtitle: "Storytelling",
    description:
      "Engaging content that tells your story and connects with your audience across all touchpoints.",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop",
    bgColor: "from-pink-900 to-rose-900",
  },
  {
    id: 6,
    title: "Analytics & Insights",
    subtitle: "Data Intelligence",
    description:
      "Deep data analysis and actionable insights to optimize your marketing performance and strategy.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    bgColor: "from-violet-900 to-purple-900",
  },
];

export default function ServicesGrid() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const imagesRef = useRef([]);
  const textsRef = useRef([]);
  const progressRef = useRef([]);

  useEffect(() => {
    const cards = cardsRef.current;
    const images = imagesRef.current;
    const texts = textsRef.current;
    const progressBars = progressRef.current;

    // Set initial positions for horizontal scroll
    gsap.set(cards, {
      x: (i) => i * window.innerWidth,
      position: "absolute",
      top: 0,
      left: 0,
    });

    // Enhanced initial state for images (stronger parallax effect)
    gsap.set(images, {
      scale: 1.3,
      x: 0,
      y: 0,
    });

    const totalCards = cards.length;
    const scrollDistance = window.innerHeight * (totalCards - 1);

    // Main horizontal scroll animation
    const scrollTween = gsap.to(cards, {
      x: (i) => (i - (totalCards - 1)) * window.innerWidth,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: () => `+=${scrollDistance}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          // Update progress indicators
          const progress = self.progress;
          const currentIndex = Math.floor(progress * totalCards);

          progressBars.forEach((bar, index) => {
            if (bar) {
              if (index < currentIndex) {
                gsap.set(bar, { scaleX: 1 });
              } else if (index === currentIndex) {
                const localProgress = (progress * totalCards) % 1;
                gsap.set(bar, { scaleX: localProgress });
              } else {
                gsap.set(bar, { scaleX: 0 });
              }
            }
          });
        },
      },
    });

    // Parallax effect for images: move left as user scrolls horizontally
    images.forEach((image, index) => {
      if (image) {
        gsap.to(image, {
          x: -window.innerWidth * 0.25, // Move image left for parallax
          scale: 1.1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: () => `+=${scrollDistance}`,
            scrub: 1,
          },
        });
      }
    });

    // Enhanced text animation on scroll
    texts.forEach((textGroup, index) => {
      if (textGroup) {
        const textElements = textGroup.querySelectorAll(".animate-text");

        // Staggered entrance animation
        gsap
          .timeline({
            scrollTrigger: {
              trigger: containerRef.current,
              start: `top+=${index * window.innerHeight * 0.9} center`,
              end: `top+=${(index + 0.5) * window.innerHeight} center`,
              toggleActions: "play reverse play reverse",
            },
          })
          .to(textElements, {
            y: 0,
            opacity: 1,
            duration: 1.2,
            stagger: 0.15,
            ease: "power3.out",
          })
          .from(
            textElements,
            {
              rotationX: 20,
              transformOrigin: "center bottom",
              duration: 1,
              stagger: 0.1,
              ease: "power2.out",
            },
            0
          );

        // Parallax effect on text elements
        gsap.to(textElements, {
          y: -30,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: `top+=${index * window.innerHeight} top`,
            end: `top+=${(index + 1) * window.innerHeight} top`,
            scrub: 1,
          },
        });
      }
    });

    // Add floating animation to decorative elements
    cards.forEach((card, index) => {
      if (card) {
        const decorativeElements = card.querySelectorAll(".decorative");
        decorativeElements.forEach((element, i) => {
          gsap.to(element, {
            y: i % 2 === 0 ? -20 : 20,
            duration: 3 + i,
            ease: "power1.inOut",
            yoyo: true,
            repeat: -1,
          });
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      scrollTween.kill();
    };
  }, []);

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-black">
      <div className="relative h-screen w-full">
        {services.map((service, index) => (
          <div
            key={service.id}
            ref={(el) => (cardsRef.current[index] = el)}
            className="w-screen h-screen flex-shrink-0 absolute flex items-center justify-center p-4 md:p-8"
          >
            <div
              className={`relative w-full max-w-8xl h-full overflow-hidden rounded-3xl md:rounded-[3rem] shadow-2xl`}
            >
              {/* Background Image with Enhanced Parallax */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  ref={(el) => (imagesRef.current[index] = el)}
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover opacity-40"
                  style={{
                    willChange: "transform",
                    backfaceVisibility: "hidden",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/70" />
                {/* Additional overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/30" />
              </div>

              {/* Content Overlay */}
              <div
                ref={(el) => (textsRef.current[index] = el)}
                className="relative z-10 h-full flex flex-col justify-center items-center text-center px-8 max-w-4xl mx-auto"
              >
                <div className="animate-text mb-4">
                  <h1 className="text-sm md:text-base font-medium text-white/70 tracking-widest uppercase">
                    {service.title}
                  </h1>
                  <span className="text-sm md:text-base font-medium text-white/70 tracking-widest uppercase">
                    {service.subtitle}
                  </span>
                </div>

                <h2 className="animate-text text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                  {service.title.split(" ").map((word, i) => (
                    <span key={i} className="inline-block mr-4">
                      {i === 0 ? (
                        <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                          {word}
                        </span>
                      ) : (
                        <span
                          className="text-transparent"
                          style={{
                            WebkitTextStroke: "2px white",
                            WebkitTextStrokeWidth: "2px",
                            WebkitTextStrokeColor: "white",
                          }}
                        >
                          {word}
                        </span>
                      )}
                    </span>
                  ))}
                </h2>

                <p className="animate-text text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed">
                  {service.description}
                </p>

                <div className="animate-text mt-6 md:mt-8">
                  <button className="px-6 md:px-8 py-2 md:py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-white/20">
                    Learn More
                  </button>
                </div>
              </div>

              {/* Enhanced Decorative Elements with floating animation */}
              <div className="decorative absolute top-6 md:top-10 right-6 md:right-10 w-16 md:w-20 h-16 md:h-20 border border-white/20 rounded-full" />
              <div className="decorative absolute bottom-6 md:bottom-10 left-6 md:left-10 w-12 md:w-16 h-12 md:h-16 bg-white/10 backdrop-blur-sm rounded-full" />

              {/* Additional decorative elements */}
              <div className="decorative absolute top-1/3 left-4 w-2 h-2 bg-white/30 rounded-full" />
              <div className="decorative absolute bottom-1/3 right-8 w-3 h-3 bg-white/20 rounded-full" />

              {/* Card Number with parallax */}
              <div className="absolute top-4 md:top-8 left-4 md:left-8 text-4xl md:text-6xl font-bold text-white/10 animate-text">
                0{service.id}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
