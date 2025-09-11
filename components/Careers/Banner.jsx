"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BannerButton from "../buttons/BannerButton";
import AnimatedButton from "../buttons/AnimatedButton";
import BannerTextReveal from "../Text Reveal/bannertextreveal";
import TextReveal from "../Text Reveal/textreveal";
// import BannerButton from "../buttons/BannerButton";

gsap.registerPlugin(ScrollTrigger);

const Careersbanner = () => {
  // const circle1Ref = useRef(null);
  // const circle2Ref = useRef(null);
  // const circle3Ref = useRef(null);
  // const sectionRef = useRef(null);

  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     const options = {
  //       trigger: sectionRef.current,
  //       start: "top center",
  //       end: "bottom top",
  //       scrub: true,
  //       markers: false,
  //       ease: "none",
  //     };

  //     gsap.to(circle1Ref.current, {
  //       scale: 2,
  //       transformOrigin: "center center",
  //       scrollTrigger: { ...options },
  //     });

  //     gsap.to(circle2Ref.current, {
  //       scale: 2.5,
  //       transformOrigin: "center center",
  //       scrollTrigger: { ...options },
  //     });

  //     gsap.to(circle3Ref.current, {
  //       scale: 3,
  //       transformOrigin: "center center",
  //       scrollTrigger: { ...options },
  //     });

  //     ScrollTrigger.refresh(); // Ensures recalculation after setup
  //   }, sectionRef);

  //   return () => ctx.revert(); // Cleanup on unmount
  // }, []);

  return (
    <section
      // ref={sectionRef}
      className="relative  pt-16 lg:pt-32 bg-black flex items-end overflow-hidden"
    >
      {/* Gradient Circles */}
      {/* <div
        ref={circle1Ref}
        className="absolute top-[-50vw] right-[-30vw] w-[90vw]  sm:w-[60vw] h-[50vh] sm:h-[60vw] rounded-full bg-gradient-to-bl from-[#8b5cf6] to-[#7c3aed] via-[#1a1a1a] z-0"
      />
      <div
        ref={circle2Ref}
        className="absolute top-[-50vw] right-[-30vw] w-[80vw] h-[38vh]  sm:w-[50vw] sm:h-[50vw] rounded-full bg-gradient-to-bl from-[#a855f7] to-[#9333ea] via-[#374151] z-0"
      />
      <div
        ref={circle3Ref}
        className="absolute top-[-50vw] right-[-30vw] w-[75vw] h-[28vh]  sm:w-[40vw] sm:h-[40vw] rounded-full bg-gradient-to-bl from-[#c084fc] to-[#a855f7] via-[#4b5563] z-0"
      /> */}

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-10 flex  justify-between flex-col xl:flex-row py-24 banner-trigger">
        <div className="xl:w-3/5">
          <BannerTextReveal
            titleClassName="text-white text-100 font-bold leading-tight"
            descriptionClassName="text-24 text-white mt-8 sm:mt-12 max-w-7xl"
            title="Shape Your Future With Us"
            description=""
          />
          {/* <h1 className="text-white text-120 font-bold leading-tight"> */}
        </div>

        {/* <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mt-16"> */}

        <div className="flex xl:w-2/5 flex-col gap-15">
          <TextReveal
            style={{ pointerEvents: "none" }}
            animation="fadeup"
            stagger={0.1}
            duration={0.6}
            className="text-20 text-white"
          >
            Join our innovative team and build extraordinary digital
            experiences. We're looking for passionate individuals who want to
            make a meaningful impact in the world of technology and design
          </TextReveal>
          <AnimatedButton text="View Open Positions" href="/about/careers#openings" />

          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default Careersbanner;
