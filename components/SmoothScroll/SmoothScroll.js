"use client";
import { useRef, useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.02, // try 0.03 to 0.1
      wheelMultiplier: 0.8, // try 0.5 to 1.5
      smoothWheel: true,
      smoothTouch: false, // Disable on touch to avoid conflicts
      syncTouch: false, // Better mobile compatibility
      touchMultiplier: 2,
      infinite: false,
      autoResize: true,
      __experimental__naiveDimensions: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return <div data-scroll-container>{children}</div>;
}
