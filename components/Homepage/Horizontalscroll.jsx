import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ScrollSyncedCarousel = () => {
  const containerRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRefs = useRef([]);
  const slideRefs = useRef([]);

  const carouselData = [
    {
      id: "carousel_1",
      title: "Fragments of a Digital Collapse.",
      slides: [
        {
          image:
            "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=600&fit=crop",
          title: "Billboard Implosion",
          description:
            "A towering billboard disintegrates into sharp shards and tangled frames, caught in the moment of collapse amid a surreal desert landscape.",
        },
        {
          image:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop",
          title: "Signal Vortex",
          description:
            "A digital storm of wires and signage spirals upward, twisting a collapsed billboard into a sculpture of chaotic motion and force.",
        },
        {
          image:
            "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=600&fit=crop",
          title: "Machine Shark",
          description:
            "A monstrous shark forged from steel and circuitry explodes from the ground, jaws wide in an apocalyptic display of mechanical fury.",
        },
        {
          image:
            "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=600&fit=crop",
          title: "Desert Mascot Ruin",
          description:
            "A decaying robotic icon lies half-buried in the sand, its twisted metal mouth agape like a relic from a lost theme park.",
        },
      ],
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initialize carousel animations
      carouselData.forEach((carousel, carouselIndex) => {
        const carouselEl = carouselRefs.current[carouselIndex];
        const slides = slideRefs.current[carouselIndex];

        if (!carouselEl || !slides) return;

        // Create horizontal scroll animation
        const slideWidth = slides[0]?.offsetWidth || 300;
        const totalWidth = slideWidth * carousel.slides.length;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: carouselEl,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
            onUpdate: (self) => {
              const progress = self.progress;
              const slideIndex = Math.floor(
                progress * (carousel.slides.length - 1)
              );
              setCurrentSlide(slideIndex);
            },
          },
        });

        // Animate slides horizontally
        tl.to(slides, {
          x: -totalWidth + slideWidth,
          duration: 1,
          ease: "none",
        });

        // Animate individual slide elements
        slides.forEach((slide, slideIndex) => {
          const card = slide.querySelector(".card");
          const image = slide.querySelector(".media-container");
          const text = slide.querySelector(".card-text");

          gsap.set([image, text], { opacity: 0, y: 50 });

          gsap.to([image, text], {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: slideIndex * 0.1,
            scrollTrigger: {
              trigger: slide,
              start: "left center",
              end: "right center",
              toggleActions: "play none none reverse",
            },
          });

          // Parallax effect for images
          gsap.to(image, {
            x: -50,
            scrollTrigger: {
              trigger: slide,
              start: "left right",
              end: "right left",
              scrub: true,
            },
          });
        });

        // Title animation
        const title = carouselEl.querySelector(".text-before h2");
        if (title) {
          gsap.fromTo(
            title,
            { opacity: 0, y: 100 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              scrollTrigger: {
                trigger: title,
                start: "top 80%",
                end: "top 20%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      });

      // Intro animation
      gsap.fromTo(
        ".dummy-block:first-child",
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: "power3.out",
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className=" bg-black text-white overflow-x-hidden">
      <style jsx>{`
        .glitch-text {
          animation: glitch 2s infinite;
        }

        @keyframes glitch {
          0% {
            transform: translate(0);
          }
          20% {
            transform: translate(-2px, 2px);
          }
          40% {
            transform: translate(-2px, -2px);
          }
          60% {
            transform: translate(2px, 2px);
          }
          80% {
            transform: translate(2px, -2px);
          }
          100% {
            transform: translate(0);
          }
        }

        .card {
          transition: transform 0.3s ease;
        }

        .card:hover {
          transform: translateY(-10px);
        }

        .cta-button {
          position: relative;
          overflow: hidden;
        }

        .cta-button::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transition: left 0.5s;
        }

        .cta-button:hover::before {
          left: 100%;
        }
      `}</style>

      {/* Intro Section */}
      <div className="dummy-block min-h-screen flex items-center justify-center"></div>

      {/* Carousels */}
      {carouselData.map((carousel, carouselIndex) => (
        <div
          key={carousel.id}
          className="carousel min-h-screen py-20"
          ref={(el) => (carouselRefs.current[carouselIndex] = el)}
        >
          <div className="wrapper max-w-7xl mx-auto px-4">
            <div className="text-before mb-12">
              <h2 className="text-4xl md:text-6xl font-bold text-center">
                {carousel.title}
              </h2>
            </div>

            <div className="swiper-container overflow-hidden">
              <div className="swiper-wrapper flex gap-8">
                {carousel.slides.map((slide, slideIndex) => (
                  <div
                    key={slideIndex}
                    className="swiper-slide flex-shrink-0 w-80 md:w-96"
                    ref={(el) => {
                      if (!slideRefs.current[carouselIndex]) {
                        slideRefs.current[carouselIndex] = [];
                      }
                      slideRefs.current[carouselIndex][slideIndex] = el;
                    }}
                  >
                    <div className="card bg-gray-900 rounded-lg overflow-hidden">
                      <div className="media-container relative h-64 md:h-80">
                        <img
                          src={slide.image}
                          alt={slide.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      </div>
                      <div className="card-text p-6">
                        <h3 className="title text-xl font-bold mb-3 text-white">
                          {slide.title}
                        </h3>
                        <p className="text-gray-300 mb-4 leading-relaxed">
                          {slide.description}
                        </p>
                        <button className="cta-button bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                          <span className="text">Glitchfy More</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* </div> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ScrollSyncedCarousel;
