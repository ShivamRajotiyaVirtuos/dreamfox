"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { SplitText } from "gsap/SplitText";
import Link from "next/link";

const BannerButton = ({ text = "BOOK A DEMO", href = "#", className = "" }) => {
  const buttonRef = useRef(null);
  const yellowLayerRef = useRef(null);
  const yellowTextRef = useRef(null);
  const iconRef = useRef(null);
  const timelineRef = useRef(null);
  const blackTextRef = useRef(null);
  const revealTimelineRef = useRef(null);

  gsap.registerPlugin(SplitText);

  useEffect(() => {
    if (
      !yellowLayerRef.current ||
      !yellowTextRef.current ||
      !iconRef.current ||
      !blackTextRef.current ||
      !buttonRef.current
    )
      return;

    const split = new SplitText(blackTextRef.current, { type: "chars" });
    const chars = split.chars;

    // Use a small delay to ensure Lenis has initialized
    const initAnimations = () => {
      // Initial reveal animation setup
      gsap.set(buttonRef.current, {
        scale: 0.8,
        opacity: 0,
        rotationY: -15,
        transformPerspective: 1000,
        force3D: true, // Force hardware acceleration
      });

      // Set initial state for hover animation with force3D
      gsap.set(yellowLayerRef.current, {
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        borderRadius: "0%",
        transform: "none",
        force3D: true,
        willChange: "transform", // Optimize for transforms
      });

      gsap.set(iconRef.current, {
        opacity: 0,
        scale: 0.5,
        force3D: true,
      });

      gsap.set(yellowTextRef.current, {
        x: 0,
        opacity: 1,
        force3D: true,
      });

      gsap.set(chars, {
        opacity: 0,
        y: 20,
        force3D: true,
      });

      // Create reveal animation timeline
      const revealTl = gsap.timeline();

      revealTl
        .to(buttonRef.current, {
          scale: 1,
          opacity: 1,
          rotationY: 0,
          duration: 0.8,
          ease: "power3.out",
          force3D: true,
        })
        .from(
          yellowTextRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
            ease: "power2.out",
            force3D: true,
          },
          "-=0.4"
        )
        .from(
          yellowLayerRef.current,
          {
            clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
            duration: 0.7,
            ease: "power2.out",
            force3D: true,
          },
          "-=0.6"
        );

      revealTimelineRef.current = revealTl;

      // Create hover animation timeline
      const hoverTl = gsap.timeline({ paused: true });
      // Get current button dimensions
      const buttonRect = buttonRef.current.getBoundingClientRect();
      const targetX = buttonRect.width * 0.9; // 90% of current width
      const targetY = buttonRect.height * 0.5; // 50% of current height
      hoverTl
        .to(yellowTextRef.current, {
          x: "130%",
          opacity: 0,
          scale: 1.2,
          filter: "blur(2px)",
          ease: "power2.in",
          force3D: true,
        })
        .to(yellowLayerRef.current, {
          width: "3rem",
          height: "3rem",
          borderRadius: "50%",
          x: targetX - 24, // 24px = half of 3rem (48px)
          y: targetY - 24,
          duration: 0.5,
          ease: "power2.inOut",
          force3D: true,
        })
        .to(
          iconRef.current,
          {
            opacity: 1,
            scale: 1,
            duration: 0.3,
            ease: "back.out(1.7)",
            force3D: true,
          },
          "-=0.2"
        )
        .to(
          chars,
          {
            opacity: 1,
            y: 0,
            x: -40,
            duration: 0.4,
            stagger: 0.04,
            ease: "power3.out",
            force3D: true,
          },
          "-=0.3"
        );

      timelineRef.current = hoverTl;
    };

    // Small delay to avoid Lenis conflicts
    const timer = setTimeout(initAnimations, 100);

    return () => {
      clearTimeout(timer);
      split.revert();
      if (timelineRef.current) timelineRef.current.kill();
      if (revealTimelineRef.current) revealTimelineRef.current.kill();
    };
  }, []);

  const handleMouseEnter = () => {
    // Only allow hover animation after reveal is complete
    if (revealTimelineRef.current?.isActive()) return;
    timelineRef.current?.play();
  };

  const handleMouseLeave = () => {
    timelineRef.current?.reverse();
  };

  return (
    <Link
      ref={buttonRef}
      href={href}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative w-[300px] mt-16 xl:mt-0 sm:w-[350px] xl:w-[450px] h-[70px] sm:h-[100px] xl:h-[100px] inline-block no-underline cursor-pointer rounded-full overflow-hidden transition-all duration-200 hover:border-white border hover:shadow-[0_0_20px_#D2448D] hover:scale-[0.95]  ${className}`}
      // style={{ width: "450px", height: "100px" }}
    >
      {/* Black base layer - will show when yellow circle shrinks */}
      <div className="absolute top-0 left-0 w-full h-full bg-black text-white flex items-center justify-center gap-3 z-0 text-base font-semibold tracking-wide rounded-full">
        <span ref={blackTextRef} className="text-30 block">
          {text}
        </span>
      </div>

      {/* Yellow overlay (starts fully visible) */}
      <div
        ref={yellowLayerRef}
        className="absolute bg-gradient-to-r from-[#aca7a7] to-[#f8f7f7] text-black flex items-center justify-center gap-3 text-base font-semibold tracking-wide z-10 pointer-events-none"
        style={{
          willChange: "transform, opacity",
          backfaceVisibility: "hidden",
          perspective: "1000px",
        }}
      >
        <span ref={yellowTextRef} className="text-30">
          {text}
        </span>
        <ArrowRightIcon
          ref={iconRef}
          className="w-6 h-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
    </Link>
  );
};

export default BannerButton;
