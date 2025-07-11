"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

export default function OurVision() {
  gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

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
        word.style.marginLeft = "-0.1em";
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

    // Set initial state for all words
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

    // Responsive ScrollTrigger animations
    ScrollTrigger.matchMedia({
      // Desktop (1024px and up)
      "(min-width: 1024px)": () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container.current,
            start: "top -=10%",
            end: "bottom +=10%",
            pin: true,
            pinSpacing: true,
            scrub: 1,
            anticipatePin: 1,
            markers: true,
          },
        });

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
          },
          "-=0.3"
        );
      },

      // Tablet (768px to 1023px)
      "(min-width: 768px) and (max-width: 1023px)": () => {
        // Adjust initial state for tablet
        gsap.set(splitHeading.words, {
          y: 25,
          scale: 0.85,
          filter: "blur(25px)",
        });
        gsap.set(splitDescription.words, {
          y: 20,
          scale: 0.85,
          filter: "blur(20px)",
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container.current,
            start: "top center",
            end: "bottom center",
            pin: true,
            pinSpacing: true,
            scrub: 1,
            anticipatePin: 1,
          },
        });

        tl.to(splitHeading.words, {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          ease: "power2.out",
          stagger: 0.08,
        }).to(
          splitDescription.words,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            ease: "power2.out",
            stagger: 0.04,
          },
          "-=0.2"
        );
      },

      // Mobile (767px and below)
      "(max-width: 767px)": () => {
        // Adjust initial state for mobile
        gsap.set(splitHeading.words, {
          y: 20,
          scale: 0.9,
          filter: "blur(15px)",
        });
        gsap.set(splitDescription.words, {
          y: 15,
          scale: 0.9,
          filter: "blur(10px)",
        });

        // Mobile - no pinning, simpler animation
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container.current,
            start: "top -=5%",
            end: "bottom 20%",
            scrub: 0.5,
            pin: true,
            markers: true,
          },
        });

        tl.to(splitHeading.words, {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          ease: "power2.out",
          stagger: 0.06,
        }).to(
          splitDescription.words,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            ease: "power2.out",
            stagger: 0.03,
          },
          "-=0.1"
        );
      },

      // All devices - container slide up effect
      all: () => {
        gsap.from(container.current, {
          y: 100,
          opacity: 0.7,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: container.current,
            start: "top 90%",
            end: "top 70%",
            scrub: true,
          },
        });
      },
    });

    return () => {
      splitHeading.revert();
      splitDescription.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={container}
      className="min-h-[100vh] sm:min-h-[110vh] lg:min-h-[120vh] px-4 sm:px-6 lg:px-8 flex items-center relative z-10"
    >
      <div className="wrapper container mx-auto">
        <h1 className="split text-120 font-semibold bg-gradient-to-r from-[#D2448D] to-[#DC6263] bg-clip-text text-transparent mb-6 sm:mb-8 lg:mb-10 leading-tight">
          Our Vision
        </h1>
        <div className="max-w-full sm:max-w-4xl lg:max-w-7xl">
          <p className="text-40 text-[#ec4672] leading-relaxed">
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
