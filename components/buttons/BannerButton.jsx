"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { SplitText } from "gsap/SplitText";

const BannerButton = ({ text = "BOOK A DEMO", href = "#", className = "" }) => {
  const buttonRef = useRef(null);
  const yellowLayerRef = useRef(null);
  const yellowTextRef = useRef(null);
  const iconRef = useRef(null);
  const timelineRef = useRef(null);
  const blackTextRef = useRef(null);

  gsap.registerPlugin(SplitText);
  useEffect(() => {
    if (
      !yellowLayerRef.current ||
      !yellowTextRef.current ||
      !iconRef.current ||
      !blackTextRef.current
    )
      return;

    const split = new SplitText(blackTextRef.current, { type: "chars" });
    const chars = split.chars;
    // Set initial state
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

    const tl = gsap.timeline({ paused: true });

    tl.to(yellowTextRef.current, {
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
          duration: 0.4,
          stagger: 0.04,
          ease: "power3.out",
        },
        "-=0.3"
      );

    timelineRef.current = tl;

    return () => {
      split.revert();
      tl.kill();
    };
  }, []);

  const handleMouseEnter = () => {
    timelineRef.current?.play();
  };

  const handleMouseLeave = () => {
    timelineRef.current?.reverse();
  };

  return (
    <a
      ref={buttonRef}
      href={href}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative inline-block no-underline cursor-pointer rounded-lg overflow-hidden transition-all duration-200 hover:shadow-[0_0_20px_#D2448D] hover:scale-[0.95]  ${className}`}
      style={{ width: "450px", height: "200px" }}
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
        className="absolute bg-gradient-to-r from-[#DC6263] to-[#D2448D] text-black flex items-center justify-center gap-3 text-base font-semibold tracking-wide z-10 pointer-events-none"
      >
        <span ref={yellowTextRef} className="text-40">
          {text}
        </span>
        <ArrowRightIcon
          ref={iconRef}
          className="w-6 h-6 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
    </a>
  );
};

export default BannerButton;
