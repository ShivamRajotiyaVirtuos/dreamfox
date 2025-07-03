"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

export default function OurVision() {
  const container = useRef(null);

  useGSAP(() => {
    const splitHeading = new SplitText(container.current.querySelector("h1"), {
      type: "lines, words",
      linesClass: "split-line",
      wordsClass: "split-word",
    });

    // Fix spacing between words for the heading
    splitHeading.words.forEach((word, index) => {
      if (index > 0) {
        word.style.marginLeft = "-0.1em"; // Normal word spacing
      }
    });

    const splitDescription = new SplitText(
      container.current.querySelector("p"),
      {
        type: "lines, words",
        linesClass: "split-line",
        wordsClass: "split-word",
      }
    );

    // Set initial opacity to 0 for all words
    gsap.set(splitHeading.words, {
      opacity: 0,
      y: 30,
      scale: 0.8,
      filter: "blur(30px)",
      backgroundImage: "linear-gradient(to right, #D2448D, #DC6263)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    });
    gsap.set(splitDescription.words, {
      opacity: 0,
      y: 30,
      scale: 0.8,
      filter: "blur(30px)",
    });

    // Create a timeline for both animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top -=10%", // Adjusted start position
        end: "bottom +10",
        markers: true,
        pin: true,
        pinSpacing: true,
        scrub: 1,
        anticipatePin: 1,
      },
    });

    // Add both animations to the timeline
    tl.to(splitHeading.words, {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      ease: "power2.out",
      stagger: 0.1,
    }).to(
      splitDescription.words,
      {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        ease: "power2.out",
        stagger: 0.05,
      }
      //   "-=0.3"
    ); // Start description animation with slight overlap

    return () => {
      splitHeading.revert();
      splitDescription.revert();
    };
  }, []);

  return (
    <section
      ref={container}
      className="min-h-[120vh] px-6 flex items-center relative z-10"
    >
      <div className="wrapper container mx-auto">
        <h1 className="split text-[120px] font-bold bg-gradient-to-r from-[#D2448D] to-[#DC6263] bg-clip-text text-transparent mb-10">
          Our Vision
        </h1>
        <div className="max-w-5xl">
          <p className="text-[40px] text-[#ec4672] leading-relaxed">
            We don't just follow trends — we shape them. DreamFox is a
            powerhouse of digital transformation through brand creativity,
            strategic marketing, immersive experience design, and media
            storytelling. We imagine futures for brands, then build them.
          </p>
        </div>
      </div>
    </section>
  );
}
