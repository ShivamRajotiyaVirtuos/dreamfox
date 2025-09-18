"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextReveal from "../Text Reveal/textreveal";

gsap.registerPlugin(ScrollTrigger);

const servicesData = [
  {
    number: "01",
    heading: "SEO Optimization",
    description:
      "Boost your website's visibility and rankings with our comprehensive SEO strategies that drive organic traffic.",
    image: "https://capsules.moyra.co/_ipx/q_80/images/cap3-square.jpg",
  },
  {
    number: "02",
    heading: "Social Media Marketing",
    description:
      "Engage your audience across all social platforms with compelling content and strategic campaigns.",
    image: "https://capsules.moyra.co/_ipx/q_80/images/cap2.png",
  },
  {
    number: "03",
    heading: "PPC Advertising",
    description:
      "Maximize your ROI with targeted pay-per-click campaigns that convert visitors into customers.",
    image: "https://capsules.moyra.co/_ipx/q_80/images/activities-1.png",
  },
  {
    number: "04",
    heading: "Content Marketing",
    description:
      "Create valuable content that resonates with your audience and builds lasting brand connections.",
    image: "https://capsules.moyra.co/_ipx/q_80/images/activities-3.png",
  },
];

const ServicesSectionDigitalM = () => {
  const containerRef = useRef(null);
  const textCardsRef = useRef([]);
  const imageCardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const textCards = textCardsRef.current;
      const imageCards = imageCardsRef.current;

      // Set initial positions - all cards except first are off-screen horizontally
      gsap.set(textCards.slice(1), { y: "120vw" });
      gsap.set(imageCards.slice(1), { y: "-120vw" });

      // Create one main timeline with scroll trigger - SLOWER SETTINGS
      const mainTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top+=10%",
          end: `+=${(servicesData.length - 1) * 300}vh`, // Increased from 150vh to 300vh for much slower scrolling
          scrub: 4, // Increased from 2 to 4 for slower response to scroll
          pin: true,
          pinSpacing: false,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Add each card transition to the main timeline - SLOWER ANIMATIONS
      servicesData.forEach((_, index) => {
        if (index > 0) {
          const startTime = (index - 1) * 4; // Increased from 2 to 4 for more time between cards

          // Horizontal animation for all screen sizes
          if (index % 2 === 1) {
            mainTl
              .to(
                textCards[index],
                {
                  y: "0vh",
                  duration: 3, // Increased from 1.8 to 3 for slower individual animations
                  ease: "power1.inOut",
                },
                startTime
              )
              .to(
                imageCards[index],
                {
                  y: "0vh",
                  duration: 3, // Increased from 1.8 to 3
                  ease: "power1.inOut",
                },
                startTime
              );
          } else {
            mainTl
              .to(
                textCards[index],
                {
                  y: "0vh",
                  duration: 3, // Increased from 1.8 to 3
                  ease: "power1.inOut",
                },
                startTime
              )
              .to(
                imageCards[index],
                {
                  y: "0vh",
                  duration: 3, // Increased from 1.8 to 3
                  ease: "power1.inOut",
                },
                startTime
              );
          }
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}>
      <section className="relative overflow-hidden h-screen bg-black">
        {/* Heading */}
        <div className="z-30 text-center">
          <TextReveal
            className="text-120 font-bold text-white mt-16 md:mt-28 2xl:mt-28"
            animation="rotateX"
            stagger={0.1}
            duration={0.8}
          >
            Our Services
          </TextReveal>
        </div>

        {/* Cards Container */}
        <div className="relative h-full w-full pt-16 md:pt-32 flex flex-col">
          {/* Text Cards */}
          <div className="absolute inset-0 flex ">
            {servicesData.map((service, index) => (
              <div
                key={`text-${index}`}
                ref={(el) => (textCardsRef.current[index] = el)}
                className="absolute top-0 left-0 w-full md:w-1/2 h-1/2 md:h-full flex items-start z-20 "
              >
                <div className="w-full h-full md:h-[65vh] p-4 md:p-8 xl:ml-20">
                  <div className="w-full h-full bg-[#2b2725] border border-black rounded-3xl p-4 md:p-8 2xl:p-20 flex flex-col justify-between">
                    <div className="flex items-center gap-4">
                      <span className="text-40 md:text-80 font-black text-white  opacity-80">
                        Data {service.number}
                      </span>
                    </div>

                    <div className="flex-1 flex flex-col justify-center">
                      <h3 className="text-48 font-bold text-white mb-3 md:mb-6">
                        {service.heading}
                      </h3>
                      <p className="text-24 text-gray-300 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    <div className="text-80 md:text-200 font-black text-white opacity-70 text-right">
                      {service.number}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Image Cards */}
          <div className="absolute inset-0 flex md:h-[65vh]">
            {servicesData.map((service, index) => (
              <div
                key={`image-${index}`}
                ref={(el) => (imageCardsRef.current[index] = el)}
                className="absolute bottom-0 md:top-0 right-0 w-full md:w-1/2 h-1/2 md:h-full flex items-start z-10"
              >
                <div className="w-full h-full  p-4 md:p-8  xl:mr-20">
                  <div className="w-full h-full rounded-3xl overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.heading}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-[50vh] md:h-[75vh] lg:h-[50vh] xl:h-[80vh]  "></div>
    </div>
  );
};

export default ServicesSectionDigitalM;
