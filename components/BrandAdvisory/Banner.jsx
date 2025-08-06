"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BannerButton from "../buttons/BannerButton";
import AnimatedButton from "../buttons/AnimatedButton";
import BannerTextReveal from "../Text Reveal/bannertextreveal";
// import BannerButton from "../buttons/BannerButton";

gsap.registerPlugin(ScrollTrigger);

const Banner_Brand = () => {
  const circle1Ref = useRef(null);
  const circle2Ref = useRef(null);
  const circle3Ref = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const options = {
        trigger: sectionRef.current,
        start: "top center",
        end: "bottom top",
        scrub: true,
        markers: false,
        ease: "none",
      };

      gsap.to(circle1Ref.current, {
        scale: 2,
        transformOrigin: "center center",
        scrollTrigger: { ...options },
      });

      gsap.to(circle2Ref.current, {
        scale: 2.5,
        transformOrigin: "center center",
        scrollTrigger: { ...options },
      });

      gsap.to(circle3Ref.current, {
        scale: 3,
        transformOrigin: "center center",
        scrollTrigger: { ...options },
      });

      ScrollTrigger.refresh(); // Ensures recalculation after setup
    }, sectionRef);

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full pt-16 lg:pt-32 min-h-[80vh] bg-black flex items-center overflow-hidden"
    >
      {/* Gradient Circles */}
      <div
        ref={circle1Ref}
        className="absolute top-[-50vw] right-[-30vw] w-[90vw]  sm:w-[60vw] h-[50vh] sm:h-[60vw] rounded-full bg-gradient-to-bl from-[#4a90e2] to-[#1e3a8a] via-[#000000] z-0"
      />
      <div
        ref={circle2Ref}
        className="absolute top-[-50vw] right-[-30vw] w-[80vw] h-[38vh]  sm:w-[50vw] sm:h-[50vw] rounded-full bg-gradient-to-bl from-[#3b82f6] to-[#1d4ed8] via-[#6b7280] z-0"
      />
      <div
        ref={circle3Ref}
        className="absolute top-[-50vw] right-[-30vw] w-[75vw] h-[28vh]  sm:w-[40vw] sm:h-[40vw] rounded-full bg-gradient-to-bl from-[#60a5fa] to-[#2563eb] via-[#6b7280] z-0"
      />

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-10 flex flex-col justify-between h-full py-24 banner-trigger">
        <div className="max-w-5xl">
        <BannerTextReveal
            titleClassName="text-white text-130 font-bold leading-tight"
            descriptionClassName="text-24 text-white max-w-7xl"
            title="Brands are born here"
            description="We helps advisors save valuable time and create accurate buyer
              lists. Our technology ensures a fast and effective compilation of
              suitable buyers and treats all data according to the highest
              security standards."
          />
        </div>

        <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-8 mt-8 sm:mt-16">
          

          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <AnimatedButton text="Arrange an initial consultation" href="/" />
            <AnimatedButton text="button" href="/" />
            {/* <button className="bg-white text-black px-6 py-3 rounded-full text-sm font-medium whitespace-nowrap">
              Arrange an initial consultation
            </button> */}

            {/* <BannerButton
            text="text"
            href="/some"
            /> */}
            {/* <button className="bg-[#222] text-white px-6 py-3 rounded-full text-sm font-medium whitespace-nowrap">
              button
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner_Brand;
