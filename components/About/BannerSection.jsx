"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BannerButton from "../buttons/BannerButton";
import AnimatedButton from "../buttons/AnimatedButton";
import BannerTextReveal from "../Text Reveal/bannertextreveal";
// import BannerButton from "../buttons/BannerButton";

gsap.registerPlugin(ScrollTrigger);

const BannerSection = () => {
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
            descriptionClassName="text-24 mt-8 sm:mt-12 text-white max-w-7xl"
            title="About the company"
            description="DreamFox, an associate of Virtuos Group, combines deep design, brand, and technical expertise. Backed by our top-notch Designara, Media, and Brand teams, we craft innovative, immersive, and impactful experiences that empower businesses to thrive in today’s competitive digital economy."
          />
          {/* <h1 className="text-white text-120 font-bold leading-tight">
            About the company
          </h1> */}
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mt-16">
          {/* <div className="max-w-2xl">
            <p className="text-white text-base sm:text-lg font-light">
              <span className="font-semibold text-white text-lg sm:text-xl">
                Fast. Intelligent. Individual.
              </span>
              <br />
              We helps advisors save valuable time and create accurate buyer
              lists. Our technology ensures a fast and effective compilation of
              suitable buyers and treats all data according to the highest
              security standards.
            </p>
          </div> */}

          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <AnimatedButton text="Services" href="/services" />
            <AnimatedButton text="Portfolio" href="/portfolio" />
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

export default BannerSection;
