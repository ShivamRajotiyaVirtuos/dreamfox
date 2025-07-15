"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
      className="relative w-full min-h-[80vh] bg-[#1a1a1a] flex items-center overflow-hidden"
    >
      {/* Gradient Circles */}
      <div
        ref={circle1Ref}
        className=" absolute top-[-50vw] right-[-30vw] w-[70vw] h-[70vw] rounded-full bg-gradient-to-br from-[#DC6263] to-[#D2448D] opacity-30 z-0"
      />
      <div
        ref={circle2Ref}
        className=" absolute top-[-50vw] right-[-40vw] w-[60vw] h-[60vw] rounded-full bg-gradient-to-br from-[#de5e5e] to-[#d43c8a] opacity-40 z-0"
      />
      <div
        ref={circle3Ref}
        className=" absolute top-[-50vw] right-[-30vw] w-[40vw] h-[40vw] rounded-full bg-gradient-to-br from-[#e85e5e] to-[#e53d94] opacity-50 z-0"
      />

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-10 flex flex-col justify-between h-full py-24 banner-trigger">
        <div className="max-w-2xl">
          <h1 className="text-white text-[32px] sm:text-[48px] md:text-[64px] font-bold leading-tight">
            About test about the company
          </h1>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mt-16">
          <div className="max-w-2xl">
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
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <button className="bg-white text-black px-6 py-3 rounded-full text-sm font-medium whitespace-nowrap">
              Arrange an initial consultation
            </button>
            <button className="bg-[#222] text-white px-6 py-3 rounded-full text-sm font-medium whitespace-nowrap">
              button
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
