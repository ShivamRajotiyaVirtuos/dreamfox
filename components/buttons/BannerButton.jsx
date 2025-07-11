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

    // Initial reveal animation setup
    gsap.set(buttonRef.current, {
      scale: 0.8,
      opacity: 0,
      rotationY: -15,
      transformPerspective: 1000,
    });

    // Set initial state for hover animation
    gsap.set(yellowLayerRef.current, {
      width: "100%",
      height: "100%",
      top: 0,
      left: 0,
      borderRadius: "0%",
      transform: "none",
    });

    gsap.set(iconRef.current, {
      opacity: 0,
      scale: 0.5,
    });

    gsap.set(yellowTextRef.current, {
      x: 0,
      opacity: 1,
    });

    gsap.set(chars, {
      opacity: 0,
      y: 20,
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
      })
      .from(
        yellowTextRef.current,
        {
          y: 30,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.4"
      )
      .from(
        yellowLayerRef.current,
        {
          clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
          duration: 0.7,
          ease: "power2.out",
        },
        "-=0.6"
      );

    revealTimelineRef.current = revealTl;

    // Create hover animation timeline
    const hoverTl = gsap.timeline({ paused: true });

    hoverTl
      .to(yellowTextRef.current, {
        x: "130%",
        opacity: 0,
        scale: 1.2,
        filter: "blur(2px)",
        ease: "power2.in",
      })
      .to(yellowLayerRef.current, {
        width: "3rem",
        height: "3rem",
        borderRadius: "50%",
        top: "50%",
        left: "90%",
        transform: "translate(-50%, -50%)",
        duration: 0.5,
        ease: "power2.inOut",
      })
      .to(
        iconRef.current,
        {
          opacity: 1,
          scale: 1,
          duration: 0.3,
          ease: "back.out(1.7)",
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
        },
        "-=0.3"
      );

    timelineRef.current = hoverTl;

    return () => {
      split.revert();
      hoverTl.kill();
      revealTl.kill();
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
      className={`relative inline-block no-underline cursor-pointer rounded-full overflow-hidden transition-all duration-200 hover:shadow-[0_0_20px_#D2448D] hover:scale-[0.95]  ${className}`}
      style={{ width: "450px", height: "100px" }}
    >
      {/* Black base layer - will show when yellow circle shrinks */}
      <div className="absolute top-0 left-0 w-full h-full bg-black text-white flex items-center justify-center gap-3 z-0 text-base font-semibold tracking-wide rounded-full">
        <span ref={blackTextRef} className="text-40 block">
          {text}
        </span>
      </div>

      {/* Yellow overlay (starts fully visible) */}
      <div
        ref={yellowLayerRef}
        className="absolute bg-gradient-to-r from-[#aca7a7] to-[#f8f7f7] text-black flex items-center justify-center gap-3 text-base font-semibold tracking-wide z-10 pointer-events-none"
      >
        <span ref={yellowTextRef} className="text-40">
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
