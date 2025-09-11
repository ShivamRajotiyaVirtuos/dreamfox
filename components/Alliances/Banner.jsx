"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BannerButton from "../buttons/BannerButton";
import AnimatedButton from "../buttons/AnimatedButton";
import BannerTextReveal from "../Text Reveal/bannertextreveal";
// import BannerButton from "../buttons/BannerButton";

gsap.registerPlugin(ScrollTrigger);

const BannerAlliances = () => {
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
      className="relative w-full pt-16 lg:pt-32 min-h-[80vh] bg-black flex items-end overflow-hidden"
    >
      {/* Gradient Circles */}
      <div
        ref={circle1Ref}
        className="absolute top-[-50vw] right-[-30vw] w-[90vw]  sm:w-[60vw] h-[50vh] sm:h-[60vw] rounded-full bg-gradient-to-bl from-[#8b5cf6] to-[#4c1d95] via-[#000000] z-0"
      />
      <div
        ref={circle2Ref}
        className="absolute top-[-50vw] right-[-30vw] w-[80vw] h-[38vh]  sm:w-[50vw] sm:h-[50vw] rounded-full bg-gradient-to-bl from-[#a855f7] to-[#6b21a8] via-[#374151] z-0"
      />
      <div
        ref={circle3Ref}
        className="absolute top-[-50vw] right-[-30vw] w-[75vw] h-[28vh]  sm:w-[40vw] sm:h-[40vw] rounded-full bg-gradient-to-bl from-[#c084fc] to-[#7346c1] via-[#4b5566] z-0"
      />

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-10 flex flex-col justify-between h-full py-24 banner-trigger">
        <div className="max-w-5xl">
          <BannerTextReveal
            titleClassName="text-white text-130 font-bold leading-tight"
            descriptionClassName="text-24 mt-8 lg:mt-12 text-white max-w-7xl"
            title="Our Trusted Alliances"
            description="Building powerful partnerships that drive innovation and deliver exceptional value to our clients through collaborative excellence."
          />
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mt-16"></div>
      </div>
    </section>
  );
};

export default BannerAlliances;
