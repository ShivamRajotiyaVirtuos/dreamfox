import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TextReveal = ({
  children,
  className = "",
  animation = "fadeUp",
  stagger = 0.1,
  duration = 0.8,
  delay = 0,
  trigger = "top 80%",
  ease = "power2.out",
}) => {
  const textRef = useRef(null);

  useEffect(() => {
    // Give ScrollSmoother time to initialize first
    const timer = setTimeout(() => {
      if (!textRef.current) return;

      // Create animation context
      const ctx = gsap.context(() => {
        const words = textRef.current.querySelectorAll(".word");

        if (!words.length) return;

        // Animation configurations
        const animations = {
          fadeUp: {
            from: { opacity: 0, y: 50, scale: 0.9 },
            to: { opacity: 1, y: 0, scale: 1 },
          },
          fadeDown: {
            from: { opacity: 0, y: -50, scale: 0.9 },
            to: { opacity: 1, y: 0, scale: 1 },
          },
          rotateX: {
            from: { opacity: 0, y: 100, rotationX: -90 },
            to: { opacity: 1, y: 0, rotationX: 0 },
          },
          rotateY: {
            from: { opacity: 0, x: 100, rotationY: -90 },
            to: { opacity: 1, x: 0, rotationY: 0 },
          },
          scale: {
            from: { opacity: 0, scale: 0 },
            to: { opacity: 1, scale: 1 },
          },
          slideLeft: {
            from: { opacity: 0, x: 100 },
            to: { opacity: 1, x: 0 },
          },
          slideRight: {
            from: { opacity: 0, x: -100 },
            to: { opacity: 1, x: 0 },
          },
        };

        const selectedAnimation = animations[animation] || animations.fadeUp;

        // Set initial state first
        gsap.set(words, { opacity: 0 });

        // Create timeline with ScrollTrigger
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: textRef.current,
            start: trigger,
            toggleActions: "play none none reset",
            // Don't specify scroller here - it will use the global default
            markers: false,
            once: false,
          },
        });

        // Add animation to timeline
        tl.fromTo(
          words,
          selectedAnimation.from,
          {
            ...selectedAnimation.to,
            duration,
            stagger,
            ease,
          },
          delay
        );

        // For debugging
      }, textRef);

      return () => ctx.revert();
    }, 100); // Reduced timeout for faster initialization

    return () => clearTimeout(timer);
  }, [animation, stagger, duration, delay, trigger, ease]);

  // Function to split text into words
  const splitTextIntoWords = (text) => {
    if (typeof text !== "string") return text;

    return text.split(" ").map((word, index) => (
      <span
        key={index}
        className="word inline-block"
        style={{
          overflow: "hidden",
          display: "inline-block",
        }}
      >
        {word}&nbsp;
      </span>
    ));
  };

  return (
    <div ref={textRef} className={className}>
      {splitTextIntoWords(children)}
    </div>
  );
};

export default TextReveal;
