"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function OurVision() {
  const container = useRef(null);

  // useEffect(() => {
  //   const heading = container.current.querySelector("h1");
  //   const para = container.current.querySelector("p");
  
  //   const splitHeading = new SplitText(heading, {
  //     type: "words",
  //     wordsClass: "split-word",
  //   });
  
  //   const splitDescription = new SplitText(para, {
  //     type: "words",
  //     wordsClass: "split-word",
  //   });
  
  //   const allWords = [...splitHeading.words, ...splitDescription.words];
  
  //   // Initial state
  //   gsap.set(allWords, {
  //     opacity: 0.3,
  //     filter: "blur(6px)",
  //     scale: 0.95,
  //   });
  
  //   // Create ScrollTriggers for each word
  //   allWords.forEach((word) => {
  //     ScrollTrigger.create({
  //       markers: true,
  //       trigger: word,
  //       start: "center center",
  //       end: "center center",
  //       onEnter: () => {
  //         gsap.to(word, {
  //           opacity: 1,
  //           filter: "blur(0px)",
  //           scale: 1,
  //           duration: 0.4,
  //           ease: "power2.out",
  //         });
  //       },
  //       onLeaveBack: () => {
  //         gsap.to(word, {
  //           opacity: 0.3,
  //           filter: "blur(6px)",
  //           scale: 0.95,
  //           duration: 0.3,
  //           ease: "power2.out",
  //         });
  //       },
  //     });
  //   });
  
  //   return () => {
  //     splitHeading.revert();
  //     splitDescription.revert();
  //     ScrollTrigger.getAll().forEach((st) => st.kill());
  //   };
  // }, []);
  
  useEffect(() => {
    const heading = container.current.querySelector("h1");
    const para = container.current.querySelector("p");
  
    const splitHeading = new SplitText(heading, {
      type: "words",
      wordsClass: "split-word",
    });
  
    const splitDescription = new SplitText(para, {
      type: "words",
      wordsClass: "split-word",
    });
  
    const allWords = [...splitHeading.words, ...splitDescription.words];
  
    // Initial state
    gsap.set(allWords, {
      opacity: 0,
      y: 40,
      filter: "blur(8px)",
      scale: 0.95,
    });
  
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "center center",
        end: "bottom top",
        toggleActions: "play none none reverse",
        markers: true, // Optional
      },
    });
  
    tl.to(allWords, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      scale: 1,
      stagger: 0.05,
      duration: 0.6,
      ease: "power3.out",
    });
  
    return () => {
      splitHeading.revert();
      splitDescription.revert();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);
  

  return (
    <section
      ref={container}
      className="min-h-screen bg-black   px-4 sm:px-6 lg:px-8 flex items-center relative z-10  text-white"
    >
      <div className="container mx-auto">
        <h1 className="text-120 font-semibold text-[#ec4672] mb-6">
          Our Vision
        </h1>
        <p className="text-40 text-[#ec4672] leading-relaxed max-w-4xl">
          We don't just follow trends — we shape them. DreamFox is a powerhouse
          of digital transformation through brand creativity, strategic
          marketing, immersive experience design, and media storytelling.
        </p>
      </div>
    </section>
  );
}