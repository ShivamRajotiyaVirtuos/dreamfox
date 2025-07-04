"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhatWeDo = () => {
  const containerRef = useRef(null);
  const h2Ref = useRef(null);
  const pRef = useRef(null);
  const carouselRefs = useRef([]);
  const slideRefs = useRef([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselData = [
    {
      id: 1,
      title: "Brand Strategy & Identity",
      slides: [
        {
          title: "Brand Positioning",
          description:
            "Strategic brand positioning that resonates with your audience",
          image: "/images/brand-positioning.jpg",
        },
        {
          title: "Visual Identity",
          description: "Cohesive visual systems that tell your brand story",
          image: "/images/visual-identity.jpg",
        },
        {
          title: "Brand Guidelines",
          description:
            "Comprehensive guidelines for consistent brand application",
          image: "/images/brand-guidelines.jpg",
        },
        {
          title: "Brand Guidelines",
          description:
            "Comprehensive guidelines for consistent brand application",
          image: "/images/brand-guidelines.jpg",
        },
        {
          title: "Brand Guidelines",
          description:
            "Comprehensive guidelines for consistent brand application",
          image: "/images/brand-guidelines.jpg",
        },
      ],
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Split text into words for reveal animation
      const splitH2 = gsap.utils.toArray(
        h2Ref.current.querySelectorAll(".word")
      );
      const splitP = gsap.utils.toArray(pRef.current.querySelectorAll(".word"));

      // H2 text reveal animation
      gsap.fromTo(
        splitH2,
        { opacity: 0, y: 100, rotationX: -90 },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: h2Ref.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Paragraph text reveal animation
      gsap.fromTo(
        splitP,
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.03,
          ease: "power2.out",
          scrollTrigger: {
            trigger: pRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Carousel animations
      carouselData.forEach((carousel, carouselIndex) => {
        const carouselEl = carouselRefs.current[carouselIndex];
        const slides = slideRefs.current[carouselIndex];

        if (!carouselEl || !slides) return;

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

        tl.to(slides, {
          x: -totalWidth + slideWidth,
          duration: 1,
          ease: "none",
        });

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
        });

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
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Function to split text into words
  const splitTextIntoWords = (text) => {
    return text.split(" ").map((word, index) => (
      <span
        key={index}
        className="word inline-block"
        style={{ overflow: "hidden" }}
      >
        {word}&nbsp;
      </span>
    ));
  };

  return (
    <section
      ref={containerRef}
      className="relative section-half-unconstrained flex items-center py-16 lg:py-32  text-white"
    >
      <div className="flex items-center gap-20 stretch-right ">
        <div className="mb-16 lg:w-1/3">
          <h2 ref={h2Ref} className="text-24 text-[#DC6263] font-bold mb-4">
            {splitTextIntoWords("What we do")}
          </h2>
          <p ref={pRef} className="text-30 max-w-2xl">
            {splitTextIntoWords(
              "At DreamFox, we go far beyond simply offering digital services — we architect meaningful brand journeys from the ground up. Every project we take on is rooted in thoughtful strategy, bold creativity, and a deep understanding of what drives modern audiences."
            )}
          </p>
        </div>

        {carouselData.map((carousel, carouselIndex) => (
          <div
            key={carousel.id}
            ref={(el) => (carouselRefs.current[carouselIndex] = el)}
            className="overflow-hidden px-4 py-10"
          >
            <div className="flex gap-6 ">
              {carousel.slides.map((slide, slideIndex) => (
                <div
                  key={slideIndex}
                  ref={(el) => {
                    if (!slideRefs.current[carouselIndex]) {
                      slideRefs.current[carouselIndex] = [];
                    }
                    slideRefs.current[carouselIndex][slideIndex] = el;
                  }}
                  className="card w-80 bg-gray-800 rounded-xl p-4 flex-shrink-0"
                >
                  <div
                    className="media-container w-full h-48 bg-cover bg-center rounded-md mb-4"
                    style={{ backgroundImage: `url(${slide.image})` }}
                  ></div>
                  <div className="card-text">
                    <h3 className="text-xl font-bold mb-2">{slide.title}</h3>
                    <p className="text-sm text-gray-300 mb-4">
                      {slide.description}
                    </p>
                    <button className="mt-auto text-[#d2448d] hover:underline">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeDo;
