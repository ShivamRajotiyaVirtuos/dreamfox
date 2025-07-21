import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const OurWork = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const topGlowRef = useRef(null);
  const bottomGlowRef = useRef(null);
  const imagesRef = useRef([]);

  // Sample image URLs - replace with your actual images
  const imageSet1 = [
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=200&fit=crop",
    "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=200&h=200&fit=crop",
    "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=200&h=200&fit=crop",
    "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=200&h=200&fit=crop",
  ];

  const imageSet2 = [
    "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=200&h=200&fit=crop",
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=200&fit=crop",
    "https://images.unsplash.com/photo-1586717791821-3bd56353c00e?w=200&h=200&fit=crop",
    "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=200&h=200&fit=crop",
  ];

  const imageSet3 = [
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=200&h=200&fit=crop",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=200&h=200&fit=crop",
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=200&h=200&fit=crop",
    "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=200&h=200&fit=crop",
  ];

  const allImages = [...imageSet1, ...imageSet2, ...imageSet3];

  useEffect(() => {
    const container = containerRef.current;
    const title = titleRef.current;
    const topGlow = topGlowRef.current;
    const bottomGlow = bottomGlowRef.current;

    gsap.set(title, { scale: 0, opacity: 0 });

    // Random subtle transform setup
    imagesRef.current.forEach((el, i) => {
      gsap.set(el, {
        y: "100vh",
        opacity: 0,
        rotateX: gsap.utils.random(-20, 20),
        rotateY: gsap.utils.random(-20, 20),
        rotateZ: gsap.utils.random(-10, 10),
        transformPerspective: 800,
        transformOrigin: "center",
      });
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "+=450%",
        scrub: 1,
        markers: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    tl.to(title, {
      scale: 1,
      opacity: 1,
      duration: 1.2,
      ease: "back.out(1.7)",
    });

    // Phase 1
    tl.to(
      imagesRef.current.slice(0, 4),
      {
        y: "-130vh",
        opacity: 1,
        duration: 4,
        ease: "power1.out",
        stagger: 0.3,
      }
      //   "+=0.5"
    );

    // Phase 2
    tl.to(
      [topGlow, bottomGlow],
      {
        background:
          "radial-gradient(circle, rgba(34, 197, 94, 0.3) 0%, rgba(6, 182, 212, 0.2) 50%, transparent 100%)",
        duration: 0.5,
      },
      "+=1"
    ).to(
      imagesRef.current.slice(4, 8),
      {
        y: "-130vh",
        opacity: 1,
        duration: 4,
        ease: "power1.out",
        stagger: 0.3,
      }
      //   "-=0.2"
    );

    // Phase 3
    tl.to(
      [topGlow, bottomGlow],
      {
        background:
          "radial-gradient(circle, rgba(249, 115, 22, 0.3) 0%, rgba(239, 68, 68, 0.2) 50%, transparent 100%)",
        duration: 0.5,
      },
      "+=1"
    ).to(
      imagesRef.current.slice(8, 12),
      {
        y: "-130vh",
        opacity: 1,
        duration: 10,
        ease: "power1.out",
        stagger: 1,
      }
      //   "-=0.2"
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center"
    >
      {/* Top-left glow */}
      <div
        ref={topGlowRef}
        className="absolute top-10 -left-10 w-100 h-96 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, rgba(59, 130, 246, 0.2) 50%, transparent 100%)",
        }}
      ></div>

      {/* Bottom-right glow */}
      <div
        ref={bottomGlowRef}
        className="absolute bottom-0 right-0 w-96 h-96 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, rgba(59, 130, 246, 0.2) 50%, transparent 100%)",
        }}
      ></div>

      {/* Main content */}
      <div className="relative z-10 text-center">
        <h2 ref={titleRef} className="text-200 font-bold text-white px-6 py-2">
          <span className="inline-block px-6 py-4 bg-clip-text text-transparent bg-gradient-to-r from-[#DC6263] to-[#D2448D]">
            Our
          </span>
          <span
            className="inline-block px-6 py-4 bg-clip-text text-transparent"
            style={{
              WebkitTextStroke: "2px #D2448D",
              WebkitTextStrokeWidth: "2px",
              WebkitTextStrokeColor: "white",
            }}
          >
            Work
          </span>
        </h2>
      </div>

      {/* Images */}
      {allImages.map((src, index) => (
        <img
          key={index}
          ref={(el) => (imagesRef.current[index] = el)}
          src={src}
          alt={`Work ${index + 1}`}
          className="absolute w-[15vw] h-[40vh] object-cover rounded-lg shadow-2xl z-20"
          style={{
            left: `${Math.random() * 40 + 20}%`,
            bottom: "-200px",
          }}
        />
      ))}

      {/* Extra content to enable scrolling */}
      {/* <div className="absolute bottom-0 left-0 w-full h-1 opacity-0 pointer-events-none"></div> */}
    </div>
  );
};

export default OurWork;
