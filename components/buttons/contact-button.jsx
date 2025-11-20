"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const ContactButton = () => {
  const buttonRef = useRef(null);
  const textRef = useRef(null);
  const backgroundRef = useRef(null);
  const rippleRef = useRef(null);
  const iconRef = useRef(null);
  const mousePositionRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Set initial states
    gsap.set(backgroundRef.current, { scale: 0, transformOrigin: "center" });
    gsap.set(rippleRef.current, { scale: 0, opacity: 0 });
    gsap.set(iconRef.current, { x: -20, opacity: 0 });
  }, []);

  const handleMouseEnter = (e) => {
    // Calculate mouse position relative to button
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mousePositionRef.current = { x, y };

    // Set ripple position using transforms
    gsap.set(rippleRef.current, {
      x: x - 8, // Subtract half the width (16px / 2)
      y: y - 8, // Subtract half the height (16px / 2)
      scale: 0,
      opacity: 0.4,
    });

    // Trigger ripple effect
    gsap.to(rippleRef.current, {
      scale: 3,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
    });

    const tl = gsap.timeline();

    tl
      // Scale up background
      .to(backgroundRef.current, {
        scale: 1,
        duration: 0.4,
        ease: "power2.out",
      })

      // Change text color and add slight bounce
      .to(
        textRef.current,
        {
          color: "#ffffff",
          scale: 1.05,
          duration: 0.3,
          ease: "back.out(1.7)",
        },
        0
      )

      // Slide in icon
      .to(
        iconRef.current,
        {
          x: 0,
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
        },
        0.1
      )

      // Scale button slightly
      .to(
        buttonRef.current,
        {
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out",
        },
        0
      );
  };

  const handleMouseLeave = () => {
    const tl = gsap.timeline();

    tl
      // Scale down background
      .to(backgroundRef.current, {
        scale: 0,
        duration: 0.3,
        ease: "power2.in",
      })

      // Reset text
      .to(
        textRef.current,
        {
          color: "#374151",
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        },
        0
      )

      // Hide icon
      .to(
        iconRef.current,
        {
          x: -20,
          opacity: 0,
          duration: 0.3,
          ease: "power2.in",
        },
        0
      )

      // Reset button scale
      .to(
        buttonRef.current,
        {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        },
        0
      );
  };

  const handleClick = (e) => {
    // Calculate mouse position relative to button
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Set ripple position for click using transforms
    gsap.set(rippleRef.current, {
      x: x - 8, // Subtract half the width (16px / 2)
      y: y - 8, // Subtract half the height (16px / 2)
      scale: 0,
      opacity: 0.6,
    });

    // Ripple effect on click
    gsap.to(rippleRef.current, {
      scale: 4,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
    });

    // Button bounce
    gsap.to(buttonRef.current, {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: "power2.inOut",
    });

    // Here you can add your contact logic
  };

  return (
    <button
      ref={buttonRef}
      className="relative mt-10 overflow-hidden px-8 py-4 rounded-full border-2 border-gray-300 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {/* Background overlay */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full"
      />

      {/* Ripple effect */}
      <div
        ref={rippleRef}
        className="absolute w-4 h-4 bg-white/30 rounded-full pointer-events-none"
        style={{ left: 0, top: 0 }}
      />

      {/* Content container */}
      <div className="relative flex items-center justify-center gap-2">
        {/* Text */}
        <span
          ref={textRef}
          className="font-semibold uppercase text-24 tracking-wide text-gray-700 transition-colors duration-300"
        >
          Contact Us
        </span>

        {/* Icon */}
        <div ref={iconRef} className="opacity-0">
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -top-1 -right-1 w-3 h-3 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-ping" />
      <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
    </button>
  );
};

export default ContactButton;
