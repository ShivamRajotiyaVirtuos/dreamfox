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
        smooth: 1.8,
        effects: true,
        normalizeScroll: true,
      });

      // IMPORTANT: This is the key fix - use scrollerProxy instead of contentRef
      ScrollTrigger.defaults({
        scroller: scrollSmootherRef.current.scrollerProxy || wrapperRef.current,
      });

      // Force a complete refresh of all ScrollTrigger instances
      ScrollTrigger.refresh(true);

      console.log("ScrollSmoother initialized", scrollSmootherRef.current);
    }, 200); // Increased timeout for more reliable initialization

    // Cleanup function
    return () => {
      clearTimeout(timer);
      if (scrollSmootherRef.current) {
        scrollSmootherRef.current.kill();
      }

      // Reset ScrollTrigger defaults instead of killing all triggers
      ScrollTrigger.defaults({ scroller: null });
      ScrollTrigger.refresh(true);
    };
  }, []);

  return (
    <>
      <Navbar2 />

      <div ref={wrapperRef} className="smooth-wrapper">
        <div ref={contentRef} className="smooth-content">
          {children}
          <Footer />
        </div>

        <style jsx global>{`
          /* Essential styles for ScrollSmoother to work */
          html,
          body {
            margin: 0;
            padding: 0;
            overflow: hidden;
            height: 100%;
            background: #000;
          }

          .smooth-wrapper {
            position: fixed;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
          }

          .smooth-content {
            width: 100%;
            min-height: 100vh;
          }
        `}</style>
      </div>
    </>
  );
};

export default ScrollSmootherWrapper;
