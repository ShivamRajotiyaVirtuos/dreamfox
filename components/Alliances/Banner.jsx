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
        className=" absolute top-[-50vw] right-[-30vw] w-[60vw] h-[60vw] rounded-full bg-gradient-to-bl  from-[#ba6161] to-[#e36ca9] via-[#000000]  z-0"
      />
      <div
        ref={circle2Ref}
        className=" absolute top-[-50vw] right-[-30vw] w-[50vw] h-[50vw] rounded-full bg-gradient-to-bl  from-[#cc3838] to-[#e9308f] via-[#8d8d8d]   z-0"
      />
      <div
        ref={circle3Ref}
        className=" absolute top-[-50vw] right-[-30vw] w-[40vw] h-[40vw] rounded-full bg-gradient-to-bl  from-[#cb3434] to-[#c62277] via-[#8d8d8d]  z-0"
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

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mt-16">
          
        </div>
      </div>
    </section>
  );
};

export default BannerAlliances;
