import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Productionprocess = () => {
  const progressRef = useRef(null);
  const circlesRef = useRef([]);
  const sectionsRef = useRef([]);
  const containerRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const numbersRef = useRef([]);
  const progressLineRef = useRef(null);

  const stages = [
    {
      title: "Inform yourself",
      description:
        "Bitcoin is different than what you know and use every day. Before you start using Bitcoin, there are a few things that you need to know in order to use it securely and avoid common pitfalls.",
    },
    {
      title: "Choose your wallet",
      description:
        "You can install an app on your mobile device for everyday use or you can have a wallet only for online payments on your computer. In any case, choosing a wallet is easy and can be done in minutes.",
    },
    {
      title: "Get Bitcoin",
      description:
        "You can get Bitcoin by accepting it as a payment for goods and services. There are also several ways you can buy Bitcoin through exchanges or ATMs.",
    },
    {
      title: "Spend Bitcoin",
      description:
        "There are a growing number of services and merchants accepting Bitcoin all over the world. Use Bitcoin to pay them and rate your experience to help them gain more visibility.",
    },
    {
      title: "Secure & Store",
      description:
        "Keep your Bitcoin safe by using hardware wallets for large amounts, enabling two-factor authentication, and backing up your wallet regularly to prevent loss.",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial setup - hide everything
      gsap.set(circlesRef.current, { scale: 0, opacity: 0 });
      gsap.set(numbersRef.current, { scale: 0, opacity: 0 });
      gsap.set(sectionsRef.current, { opacity: 0, y: 50 });
      gsap.set(progressRef.current, { scaleX: 0 });
      gsap.set(progressLineRef.current, { opacity: 0 });

      // Pin the container and create scroll-triggered animations
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "+=400%", // Pin for the duration of 4 full viewport heights
        pin: true,
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const totalStages = stages.length;

          // Show progress line after initial moment
          if (progress > 0.05) {
            gsap.to(progressLineRef.current, {
              opacity: 1,
              duration: 0.3,
            });
          }

          // Animate progress line
          gsap.to(progressRef.current, {
            scaleX: progress * 1.5, // Leave a bit at the end
            duration: 0.1,
            ease: "none",
          });

          // Animate circles and cards based on progress
          circlesRef.current.forEach((circle, index) => {
            const stageStart = (index / totalStages) * 0.8; // Start earlier
            const stageEnd = ((index + 1) / totalStages) * 0.8;

            if (progress >= stageStart) {
              // Show circle
              gsap.to(circle, {
                scale: 1,
                opacity: 1,
                duration: 0.4,
                // delay: 0.4,

                ease: "back.out(1.7)",
              });

              // Show number
              gsap.to(numbersRef.current[index], {
                scale: 1,
                opacity: 1,
                duration: 0.4,
                // delay: 0.4,
                ease: "back.out(1.7)",
              });

              // Show corresponding card
              gsap.to(sectionsRef.current[index], {
                opacity: 1,
                y: 0,
                duration: 0.4,
                delay: 0.2,
                ease: "power2.out",
              });
            } else {
              // Hide if we're before this stage
              gsap.to(circle, {
                scale: 0,
                opacity: 0,
                duration: 0.3,
              });

              gsap.to(numbersRef.current[index], {
                scale: 0,
                opacity: 0,
                duration: 0.3,
              });

              gsap.to(sectionsRef.current[index], {
                opacity: 0,
                y: 50,
                duration: 0.3,
              });
            }
          });
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Spacer before pinned section */}

      {/* Pinned Main Section */}
      <div
        ref={containerRef}
        className="min-h-screen bg-black flex flex-col justify-center overflow-hidden relative"
        style={{
          zIndex: 40,
        }}
      >
        <div className="w-full container">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-120 font-bold text-gray-50 mb-4">
              Production Process
            </h2>
            <p className="text-gray-50 text-30 max-w-2xl mx-auto">
              Follow these steps to get started with Bitcoin and understand the
              complete process
            </p>
          </div>

          {/* Progress Track */}
          <div className="hidden sm:block">
            <div className="relative  mb-16">
              <div className="flex justify-between items-center relative mx-auto">
                {/* Progress Line Background */}
                {/* <div
                ref={progressLineRef}
                className="absolute top-1/2 left-0 right-0 h-1 bg-black -translate-y-1/2 rounded-full"
              /> */}

                {/* Active Progress Line */}
                <div className="absolute max-w-6xl mx-auto top-1/2 left-0 right-0 h-1 -translate-y-1/2 overflow-hidden">
                  <div
                    ref={progressRef}
                    className="h-full bg-gradient-to-r from-[#f0565f] to-[#e63089] origin-left rounded-full"
                    style={{ transformOrigin: "left center" }}
                  />
                </div>

                {/* Progress Circles */}
                {stages.map((_, index) => (
                  <div
                    key={index}
                    className="relative z-10 flex-1 flex justify-center"
                  >
                    <div
                      ref={(el) => (circlesRef.current[index] = el)}
                      className="w-16 h-16 rounded-full bg-white border-3 border-gray-200 flex items-center justify-center shadow-lg"
                    >
                      <div
                        ref={(el) => (numbersRef.current[index] = el)}
                        className="w-10 h-10 rounded-full bg-gradient-to-r from-[#f0565f] to-[#e63089] flex items-center justify-center"
                      >
                        <span className="text-white font-bold text-sm">
                          {index + 1}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1  sm:grid-cols-5 gap-6 mx-auto">
              {stages.map((stage, index) => (
                <div
                  key={index}
                  ref={(el) => (sectionsRef.current[index] = el)}
                  className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center mb-4">
                    {/* <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#f0565f] to-[#e63089] flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">
                      {index + 1}
                    </span>
                  </div> */}
                    <h3 className="text-lg font-semibold text-gray-900">
                      {stage.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {stage.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid sm:hidden grid-cols-1  sm:grid-cols-5 gap-6 mx-auto">
            {stages.map((stage, index) => (
              <div
                key={index}
                // ref={(el) => (sectionsRef.current[index] = el)}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  {/* <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#f0565f] to-[#e63089] flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">
                      {index + 1}
                    </span>
                  </div> */}
                  <h3 className="text-lg font-semibold text-gray-900">
                    {stage.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {stage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Productionprocess;
