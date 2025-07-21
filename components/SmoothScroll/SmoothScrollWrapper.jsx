"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../Navbar/Navbar";
import Footer from "../Homepage/Footer";
import Navbar2 from "../Navbar/Navbar2";

const ScrollSmootherWrapper = ({ children }) => {
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);
  const scrollSmootherRef = useRef(null);

  useEffect(() => {
    // Register plugins
    gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      // Create ScrollSmoother instance
      scrollSmootherRef.current = ScrollSmoother.create({
        wrapper: wrapperRef.current,
        content: contentRef.current,
        smooth: 1.5,
        effects: true,
        normalizeScroll: true,
      });

      // Set ScrollTrigger defaults AFTER ScrollSmoother is created
      ScrollTrigger.defaults({
        scroller: contentRef.current,
      });

      // Refresh all ScrollTriggers
      ScrollTrigger.refresh();
    }, 100);

    // Cleanup function
    return () => {
      clearTimeout(timer);
      if (scrollSmootherRef.current) {
        scrollSmootherRef.current.kill();
      }
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <div className="relative">
      {/* Navbar outside of ScrollSmoother */}
      <Navbar2 />
      
      {/* ScrollSmoother wrapper */}
      <div id="smooth-wrapper" ref={wrapperRef}>
        <div id="smooth-content" ref={contentRef}>
          {children}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ScrollSmootherWrapper;