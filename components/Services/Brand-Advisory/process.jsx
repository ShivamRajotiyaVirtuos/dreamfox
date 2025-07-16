import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import AnimatedButton from "@/components/buttons/AnimatedButton";

const BrandAdvisoryProcess = () => {
  const svgRef = useRef(null);
  const processData = [
    {
      title: "Discovery & Strategy",
      subtitle: "Understanding Your Vision",
      description:
        "We dive deep into your brand, goals, and target audience to create a comprehensive digital strategy that drives results",
      buttonText: "Start Discovery",
      buttonLink: "#discovery",
    },
    {
      title: "Design & Development",
      subtitle: "Bringing Ideas to Life",
      description:
        "Our expert team crafts stunning websites with cutting-edge technology, ensuring exceptional user experience and performance",
      buttonText: "View Portfolio",
      buttonLink: "#portfolio",
    },
    {
      title: "Launch & Growth",
      subtitle: "Maximizing Your Success",
      description:
        "We launch your digital presence and provide ongoing support to ensure continuous growth and optimization",
      buttonText: "Get Started",
      buttonLink: "#contact",
    },
  ];
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: svgRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    // Initial state - hide all elements
    gsap.set(
      [
        ".process-circle",
        ".process-arrow",
        ".process-number",
        ".process-label",
      ],
      {
        opacity: 0,
        scale: 0,
      }
    );

    // Animate circles first
    tl.to(".process-circle", {
      opacity: 1,
      scale: 1,
      duration: 0.6,
      stagger: 0.3,
      ease: "back.out(1.7)",
    })
      // Then animate numbers
      .to(
        ".process-number",
        {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          stagger: 0.2,
          ease: "bounce.out",
        },
        "-=0.2"
      )
      // Then animate arrows
      .to(
        ".process-arrow",
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.3,
          ease: "power2.out",
        },
        "-=0.1"
      )
      // Finally animate labels
      .to(
        ".process-label",
        {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          stagger: 0.2,
          ease: "power2.out",
        },
        "-=0.2"
      );

    return () => {
      tl.kill();
    };
  }, []);
  return (
    <div className="w-full bg-black py-16 lg:py-32">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-40 px-4 py-2 border w-fit mx-auto border-pink-500 rounded-full text-white mb-4">
            Our Process
          </h2>
          <p className="text-120 font-semibold text-white">
            How DreamFox Works?
          </p>
        </div>

        {/* Full Width SVG */}
        <div className="w-full mb-12">
          <svg ref={svgRef} viewBox="0 0 1200 200" className="w-full h-auto">
            {/* Arrow flow diagram */}
            <defs>
              <marker
                id="arrowhead"
                markerWidth="10"
                markerHeight="7"
                refX="9"
                refY="3.5"
                orient="auto"
              >
                <polygon points="0 0, 10 3.5, 0 7" fill="#D2448D" />
              </marker>
            </defs>

            {/* Circles for each step */}
            <circle
              className="process-circle"
              cx="200"
              cy="100"
              r="60"
              fill="#1A1A1A"
              stroke="#D2448D"
              strokeWidth="3"
            />
            <circle
              className="process-circle"
              cx="600"
              cy="100"
              r="60"
              fill="#1A1A1A"
              stroke="#D2448D"
              strokeWidth="3"
            />
            <circle
              className="process-circle"
              cx="1000"
              cy="100"
              r="60"
              fill="#1A1A1A"
              stroke="#D2448D"
              strokeWidth="3"
            />

            {/* Arrows */}
            <line
              className="process-arrow"
              x1="260"
              y1="100"
              x2="540"
              y2="100"
              stroke="#D2448D"
              strokeWidth="3"
              markerEnd="url(#arrowhead)"
            />
            <line
              className="process-arrow"
              x1="660"
              y1="100"
              x2="940"
              y2="100"
              stroke="#D2448D"
              strokeWidth="3"
              markerEnd="url(#arrowhead)"
            />

            {/* Numbers */}
            <text
              className="process-number"
              x="200"
              y="110"
              textAnchor="middle"
              fill="white"
              fontSize="24"
              fontWeight="bold"
            >
              1
            </text>
            <text
              className="process-number"
              x="600"
              y="110"
              textAnchor="middle"
              fill="white"
              fontSize="24"
              fontWeight="bold"
            >
              2
            </text>
            <text
              className="process-number"
              x="1000"
              y="110"
              textAnchor="middle"
              fill="white"
              fontSize="24"
              fontWeight="bold"
            >
              3
            </text>

            {/* Step Labels */}
            <text
              className="process-label"
              x="200"
              y="180"
              textAnchor="middle"
              fill="white"
              fontSize="18"
              fontWeight="600"
            >
              Discovery
            </text>
            <text
              className="process-label"
              x="600"
              y="180"
              textAnchor="middle"
              fill="white"
              fontSize="18"
              fontWeight="600"
            >
              Development
            </text>
            <text
              className="process-label"
              x="1000"
              y="180"
              textAnchor="middle"
              fill="white"
              fontSize="18"
              fontWeight="600"
            >
              Launch
            </text>
          </svg>
        </div>

        {/* Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {processData.map((step, index) => (
            <div key={index} className="p-8 transition-all duration-300 group">
              <div className="mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#D2448D] to-[#DC6263] rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {step.title}
                </h3>
                <h4 className="text-lg text-[#D2448D] font-semibold mb-4">
                  {step.subtitle}
                </h4>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {step.description}
              </p>

              {step.buttonText && (
                <AnimatedButton
                  href={step.buttonLink}
                  text={step.buttonText}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#D2448D] to-[#DC6263] text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-[#D2448D]/20 transition-all duration-300 group-hover:scale-105"
                >
                  {step.buttonText}
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </AnimatedButton>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandAdvisoryProcess;
