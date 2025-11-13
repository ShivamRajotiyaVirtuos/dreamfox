"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BannerButton from "../buttons/BannerButton";
import AnimatedButton from "../buttons/AnimatedButton";
import BannerTextReveal from "../Text Reveal/bannertextreveal";
// import BannerButton from "../buttons/BannerButton";

gsap.registerPlugin(ScrollTrigger);

const Banner_Mediamix = () => {
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
      className="relative w-full min-h-[80vh] pt-16 lg:pt-32 bg-black flex items-end overflow-hidden"
    >
      {/* Gradient Circles */}
      <div
        ref={circle1Ref}
        className="absolute top-[-50vw] right-[-30vw] w-[90vw] sm:w-[60vw] h-[50vh] sm:h-[60vw] rounded-full bg-gradient-to-bl from-[#fbbf24] to-[#b45309] via-[#000000] z-0"
      />
      <div
        ref={circle2Ref}
        className="absolute top-[-50vw] right-[-30vw] w-[80vw] h-[38vh] sm:w-[50vw] sm:h-[50vw] rounded-full bg-gradient-to-bl from-[#f59e0b] to-[#92400e] via-[#374151] z-0"
      />
      <div
        ref={circle3Ref}
        className="absolute top-[-50vw] right-[-30vw] w-[75vw] h-[28vh] sm:w-[40vw] sm:h-[40vw] rounded-full bg-gradient-to-bl from-[#fcd34d] to-[#d97706] via-[#374151] z-0"
      />

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-10 flex flex-col justify-between h-full py-24 banner-trigger">
        <div className="max-w-5xl">
          <BannerTextReveal
            titleClassName="text-white text-130 font-bold leading-tight"
            descriptionClassName="text-24 text-white mt-8 sm:mt-4 max-w-7xl"
            title="Yippee Media Services from DreamFox"
            description="Acquired by DreamFox in 2025, Yippee Media powers the new age of storytelling through Media, PR, and Content Marketing. We amplify brand voices across digital and traditional channels with precision, creativity, and measurable impact.
From strategic narratives to viral campaigns, Yippee Media turns visibility into influence.
"
          />
        </div>

        <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-8 mt-8 lg:mt-16">
          <div className="flex flex-row gap-4 shrink-0">
            <AnimatedButton text="Consult" href="/contactus" />
            {/* <AnimatedButton text="button" href="/" /> */}
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

export default Banner_Mediamix;
