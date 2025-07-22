"use client";
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(ScrollTrigger, Draggable);

const Testimonials = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const floatingElementsRef = useRef([]);
  const titleRef = useRef(null);
  const gridRef = useRef(null);
  const customCursorRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [showCustomCursor, setShowCustomCursor] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Tech Innovate",
      role: "CEO",
      content:
        "DreamFox transformed our brand identity completely. Their strategic approach and creative execution exceeded all our expectations.",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      gradient: "from-pink-500 to-purple-600",
    },
    {
      name: "Marcus Chen",
      company: "Digital Solutions",
      role: "Founder",
      content:
        "Working with DreamFox was a game-changer for our startup. They didn't just design a website; they crafted our entire digital presence.",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      gradient: "from-purple-500 to-blue-600",
    },
    {
      name: "Emily Rodriguez",
      company: "Creative Studios",
      role: "Art Director",
      content:
        "The team at DreamFox has an incredible eye for design and user experience. They took our vision and elevated it beyond what we thought was possible.",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      gradient: "from-blue-500 to-cyan-600",
    },
    {
      name: "David Park",
      company: "E-commerce Pro",
      role: "Marketing Director",
      content:
        "DreamFox delivered results that transformed our online presence. Their strategic thinking combined with flawless execution made all the difference.",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      gradient: "from-cyan-500 to-pink-600",
    },
  ];

  //   const floatingElements = [
  //     { size: "w-8 h-8", color: "pink", delay: 0 },
  //     { size: "w-12 h-12", color: "purple", delay: 0.5 },
  //     { size: "w-6 h-6", color: "blue", delay: 1 },
  //     { size: "w-10 h-10", color: "cyan", delay: 1.5 },
  //     { size: "w-14 h-14", color: "pink", delay: 2 },
  //     { size: "w-8 h-8", color: "purple", delay: 2.5 },
  //     { size: "w-16 h-16", color: "blue", delay: 3 },
  //     { size: "w-6 h-6", color: "cyan", delay: 3.5 },
  //   ];

  // Mouse movement tracking for custom cursor
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (customCursorRef.current) {
        // Use CSS custom properties for instant updates
        customCursorRef.current.style.setProperty("--x", `${e.clientX}px`);
        customCursorRef.current.style.setProperty("--y", `${e.clientY}px`);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { y: 100, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Floating circle doodles
      floatingElementsRef.current.forEach((element, i) => {
        if (element) {
          gsap.set(element, {
            x: gsap.utils.random(-50, 50),
            y: gsap.utils.random(-50, 50),
            rotation: gsap.utils.random(-180, 180),
          });

          gsap.to(element, {
            y: "+=40",
            x: "+=30",
            rotation: "+=360",
            duration: gsap.utils.random(6, 12),
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
            delay: floatingElements[i]?.delay || 0,
          });

          gsap.fromTo(
            element,
            { opacity: 0, scale: 0 },
            {
              opacity: 0.6,
              scale: 1,
              duration: 1.5,
              delay: 1 + i * 0.2,
              scrollTrigger: {
                trigger: containerRef.current,
                start: "top 70%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      });

      // Cards initial animation
      gsap.fromTo(
        cardsRef.current,
        { y: 200, opacity: 0, rotationY: 45, scale: 0.7 },
        {
          y: 0,
          opacity: 1,
          rotationY: 0,
          scale: 1,
          duration: 1.5,
          ease: "back.out(1.7)",
          stagger: 0.15,
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Make cards draggable with custom cursor functionality
      cardsRef.current.forEach((card, i) => {
        if (card) {
          // Mouse enter/leave events for custom cursor
          card.addEventListener("mouseenter", () => {
            setShowCustomCursor(true);
            gsap.to(customCursorRef.current, {
              scale: 1,
              opacity: 1,
              duration: 0.3,
              ease: "back.out(1.7)",
            });
            // Hide default cursor
            document.body.style.cursor = "none";
          });

          card.addEventListener("mouseleave", () => {
            setShowCustomCursor(false);
            gsap.to(customCursorRef.current, {
              scale: 0,
              opacity: 0,
              duration: 0.2,
              ease: "power2.out",
            });
            // Restore default cursor
            document.body.style.cursor = "auto";
          });

          Draggable.create(card, {
            type: "x,y",
            bounds: containerRef.current,
            inertia: true,
            edgeResistance: 0.8,
            cursor: "none",
            onPress: function () {
              gsap.to(card, { scale: 1.1, duration: 0.2, ease: "power2.out" });
              gsap.to(card, { zIndex: 1000, duration: 0 });

              // Animate custom cursor on press
              gsap.to(customCursorRef.current, {
                scale: 1.5,
                duration: 0.2,
                ease: "power2.out",
              });
            },
            onRelease: function () {
              gsap.to(card, { scale: 1, duration: 0.3, ease: "back.out(1.7)" });
              gsap.to(card, { zIndex: "auto", duration: 0, delay: 0.3 });

              // Reset custom cursor scale
              gsap.to(customCursorRef.current, {
                scale: 1,
                duration: 0.3,
                ease: "back.out(1.7)",
              });
            },
            onDrag: function () {
              gsap.to(card.querySelector(".glow-effect"), {
                opacity: 1,
                duration: 0.2,
              });

              // Pulse effect on custom cursor while dragging
              if (customCursorRef.current?.querySelector(".cursor-ring")) {
                gsap.to(customCursorRef.current.querySelector(".cursor-ring"), {
                  scale: 1.2,
                  duration: 0.1,
                  yoyo: true,
                  repeat: 1,
                });
              }
            },
            onThrowComplete: function () {
              gsap.to(card.querySelector(".glow-effect"), {
                opacity: 0,
                duration: 0.5,
              });
            },
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="min-h-screen bg-black text-white py-20 relative overflow-hidden"
    >
      {/* Custom Cursor */}
      <div
        ref={customCursorRef}
        className="fixed pointer-events-none z-[9999] cursor-follower"
        style={{
          left: "var(--x, 0px)",
          top: "var(--y, 0px)",
          transform: "translate(-50%, -50%)",
          opacity: 0,
          scale: 0,
          "--x": "0px",
          "--y": "0px",
        }}
      >
        {/* Main cursor circle */}
        <div className="relative w-20 h-20">
          {/* Outer glowing ring */}
          <div className="cursor-ring absolute inset-0 w-20 h-20 rounded-full bg-gradient-to-r from-cyan-400 to-pink-400 opacity-30 animate-pulse" />

          {/* Middle ring */}
          <div className="absolute inset-1 w-18 h-18 rounded-full border-2 border-white/40" />

          {/* Inner circle with text */}
          <div className="absolute inset-2 w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-pink-500 flex items-center justify-center shadow-2xl">
            <span className="text-white font-bold text-xs tracking-wider">
              DRAG
            </span>
          </div>

          {/* Rotating ring */}
          <div
            className="absolute inset-0 w-20 h-20 rounded-full border border-white/20 animate-spin"
            style={{ animationDuration: "3s" }}
          >
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-white rounded-full" />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-1 h-1 bg-white rounded-full" />
          </div>
        </div>
      </div>

      {/* Futuristic Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-8 grid-rows-8 h-full w-full">
          {[...Array(64)].map((_, i) => (
            <div
              key={i}
              className="border border-cyan-500/20 relative"
              style={{
                animation: `gridPulse ${2 + (i % 3)}s infinite`,
                animationDelay: `${i * 0.1}s`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-cyan-500/5" />
            </div>
          ))}
        </div>
      </div>

      {/* Floating Circle Doodles */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {floatingElements.map((element, i) => (
          <div
            key={i}
            ref={(el) => (floatingElementsRef.current[i] = el)}
            className="absolute"
            style={{
              left: `${10 + i * 9}%`,
              top: `${15 + i * 8}%`,
            }}
          >
            <div
              className={`${element.size} rounded-full relative`}
              style={{
                background: `linear-gradient(135deg, ${
                  element.color === "pink"
                    ? "#ec4899, #f472b6"
                    : element.color === "purple"
                    ? "#8b5cf6, #a78bfa"
                    : element.color === "blue"
                    ? "#3b82f6, #60a5fa"
                    : "#06b6d4, #22d3ee"
                })`,
                boxShadow: `0 0 30px ${
                  element.color === "pink"
                    ? "#ec489950"
                    : element.color === "purple"
                    ? "#8b5cf650"
                    : element.color === "blue"
                    ? "#3b82f650"
                    : "#06b6d450"
                }`,
              }}
            >
              {/* Inner highlight */}
              <div className="absolute top-1 left-1 w-1/3 h-1/3 bg-white/40 rounded-full" />

              {/* Pulsing ring */}
              <div
                className="absolute -inset-2 rounded-full border opacity-40"
                style={{
                  borderColor:
                    element.color === "pink"
                      ? "#ec4899"
                      : element.color === "purple"
                      ? "#8b5cf6"
                      : element.color === "blue"
                      ? "#3b82f6"
                      : "#06b6d4",
                  animation: "pulse 2s infinite",
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-20">
        {/* Futuristic Header */}
        <div ref={titleRef} className="text-center mb-20">
          <div className="relative inline-block">
            <h2 className="text-7xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              CLIENT VOICES
            </h2>
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-pink-500/20 blur-xl rounded-full" />
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
            Experience testimonials in a new dimension - drag and explore
          </p>
        </div>

        {/* Draggable Cards Grid */}
        <div
          ref={gridRef}
          className="relative min-h-[80vh] flex flex-wrap justify-center items-center gap-8"
        >
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="group relative transform-gpu"
              style={{
                width: "350px",
                height: "auto",
                zIndex: 10 + i,
              }}
            >
              {/* Glow effect */}
              <div className="glow-effect absolute -inset-4 bg-gradient-to-r from-cyan-500/50 to-pink-500/50 blur-xl rounded-3xl opacity-0 transition-opacity duration-500" />

              {/* Holographic border */}
              <div
                className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-pink-500 to-purple-500 rounded-3xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"
                style={{ padding: "2px" }}
              >
                <div className="bg-black rounded-3xl h-full w-full" />
              </div>

              {/* Main card */}
              <div className="relative bg-gray-900/95 backdrop-blur-xl border border-cyan-500/30 rounded-3xl p-8 h-full overflow-hidden">
                {/* Animated background pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="grid grid-cols-4 grid-rows-4 h-full w-full">
                    {[...Array(16)].map((_, j) => (
                      <div
                        key={j}
                        className="border border-cyan-500/30"
                        style={{
                          animation: `gridPulse ${1 + (j % 2)}s infinite`,
                          animationDelay: `${j * 0.1}s`,
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Holographic corner accents */}
                <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-cyan-400/60" />
                <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-pink-400/60" />
                <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-purple-400/60" />
                <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-cyan-400/60" />

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="relative">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-cyan-400/50"
                      />
                      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-pink-400 rounded-full blur opacity-50" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-white font-bold text-xl bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-400 font-medium">
                        {testimonial.role}
                      </p>
                      <p className="text-gray-500 text-sm">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
                    "{testimonial.content}"
                  </p>

                  {/* Futuristic rating */}
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, j) => (
                      <div
                        key={j}
                        className="w-4 h-4 mr-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-sm transform rotate-45"
                      />
                    ))}
                  </div>
                </div>

                {/* Scan line effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent h-1 animate-scan" />
              </div>
            </div>
          ))}
        </div>

        {/* Interaction hint */}
        <div className="text-center mt-12">
          <p className="text-gray-400 text-lg font-light">
            🖱️ Hover over cards to see custom cursor • Drag to explore
          </p>
        </div>
      </div>

      <style jsx>{`
        .cursor-follower {
          transition: none !important;
        }

        @keyframes gridPulse {
          0%,
          100% {
            opacity: 0.1;
          }
          50% {
            opacity: 0.3;
          }
        }

        @keyframes scan {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100vh);
          }
        }

        .animate-scan {
          animation: scan 3s linear infinite;
        }
        @keyframes gridPulse {
          0%,
          100% {
            opacity: 0.1;
          }
          50% {
            opacity: 0.3;
          }
        }

        @keyframes scan {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100vh);
          }
        }

        .animate-scan {
          animation: scan 3s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
