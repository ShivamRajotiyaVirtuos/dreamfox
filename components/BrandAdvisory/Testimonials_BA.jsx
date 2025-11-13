"use client";
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
import { StarIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import TextReveal from "../Text Reveal/textreveal";

gsap.registerPlugin(ScrollTrigger, Draggable);

const Testimonials_brand = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const floatingElementsRef = useRef([]);
  const titleRef = useRef(null);
  const gridRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Add position data to your testimonials array
  const testimonials = [
    {
      name: "Sunil Pahouja",
      company: "BetterBuyClub",
      role: "MD",
      content:
        "We are truly ecstatic and extremely happy with the blend of services—Commerce, SEO, Marketing by DreamFox. Their comprehensive approach delivered exceptional results.",
      avatar:
        "https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29uJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D",
      rating: 5,
      gradient: "from-pink-500 to-purple-600",
      position: { x: -320, y: -80, rotation: 15 },
    },
    {
      name: "ThomasCook CIO Team",
      company: "ThomasCook",
      role: "CIO Team",
      content:
        "We have a 10+ year relationship with Virtuos. I am extremely happy with Redwood Design from DreamFox. Their long-term partnership has been invaluable.",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      gradient: "from-purple-500 to-blue-600",
      position: { x: 200, y: -50, rotation: -8 },
    },
    {
      name: "Agam Bhatnagar",
      company: "Giftcart.com",
      role: "UX/Ops",
      content:
        "Giftcart 2.0 is possible because of DreamFox's exceptional UX design. Looking forward to kickstart our launch services with their team.",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      gradient: "from-blue-500 to-teal-600",
      position: { x: -150, y: 100, rotation: 12 },
    },
    {
      name: "Credence.ai Exec Team",
      company: "Credence.ai",
      role: "Executive Team",
      content:
        "I worked with VBrand, parent company of DreamFox for my brand—Credence.ai through GoDaddy. The collaboration has been outstanding and results-driven.",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      gradient: "from-teal-500 to-green-600",
      position: { x: 250, y: 80, rotation: -15 },
    }
  ];

  const floatingElements = [
    { size: "w-8 h-8", color: "pink", delay: 0 },
    { size: "w-12 h-12", color: "purple", delay: 0.5 },
    { size: "w-6 h-6", color: "blue", delay: 1 },
    { size: "w-10 h-10", color: "cyan", delay: 1.5 },
    { size: "w-14 h-14", color: "pink", delay: 2 },
    { size: "w-8 h-8", color: "purple", delay: 2.5 },
    { size: "w-16 h-16", color: "blue", delay: 3 },
    { size: "w-6 h-6", color: "cyan", delay: 3.5 },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      floatingElementsRef.current.forEach((element, i) => {
        if (element) {
          gsap.set(element, {
            x: gsap.utils.random(-70, 70),
            y: gsap.utils.random(-70, 70),
            rotation: gsap.utils.random(-180, 180),
          });

          gsap.to(element, {
            y: "+=50",
            x: "+=40",
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

      const containerWidth = gridRef.current?.offsetWidth || 800;
      const containerHeight = gridRef.current?.offsetHeight || 600;

      // Random positions for cards with amazing pop-up animations
      cardsRef.current.forEach((card, i) => {
        if (card) {
          // Get card's predefined position
          const cardPosition = testimonials[i].position || {
            x: 0,
            y: 0,
            rotation: 0,
          };

          // Set initial state - off screen and small
          gsap.set(card, {
            x: cardPosition.x * 2, // Start from twice the distance
            y: cardPosition.y * 2,
            rotation: cardPosition.rotation * 2, // Exaggerated initial rotation
            scale: 0.5,
            opacity: 0,
            filter: "blur(15px)",
            transformOrigin: "center center",
          });

          // Spectacular pop-up animation
          gsap.to(card, {
            x: cardPosition.x, // Final position from array
            y: cardPosition.y,
            rotation: cardPosition.rotation, // Final rotation from array
            scale: 1,
            opacity: 1,
            filter: "blur(0px)",
            duration: 1.8,
            ease: "elastic.out(1, 0.4)", // Bouncy animation
            delay: 0.3 + i * 0.3, // Staggered delay
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 70%",
              toggleActions: "play none none reverse",
            },
            onStart: () => {
              // Create burst effect on card appearance
              const glow = card.querySelector(".glow-effect");
              if (glow) {
                gsap.fromTo(
                  glow,
                  { opacity: 1, scale: 1.5 },
                  { opacity: 0, scale: 1, duration: 1, delay: 0.2 }
                );
              }
            },
          });

          // Add floating animation with position as base
          gsap.to(card, {
            y: `${cardPosition.y + gsap.utils.random(8, 15)}`,
            x: `${cardPosition.x + gsap.utils.random(-5, 5)}`,
            rotation: `${cardPosition.rotation + gsap.utils.random(-2, 2)}`,
            duration: gsap.utils.random(3, 6),
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: gsap.utils.random(0, 2),
          });
        }
      });
      cardsRef.current.forEach((card, i) => {
        if (card) {
          Draggable.create(card, {
            type: "x,y",
            bounds: containerRef.current,
            inertia: true,
            edgeResistance: 0.8,
            cursor: "grab",
            onPress: function () {
              gsap.killTweensOf(card, { y: true, x: true, rotation: true });

              const currentRotation = gsap.getProperty(card, "rotation") || 0;
              const addRotation = 5;
              const newRotation = Math.min(
                Math.max(currentRotation + addRotation, -30),
                30
              );

              gsap.to(card, {
                scale: 1.1,
                rotation: newRotation,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.8)",
                duration: 0.3,
                ease: "power2.out",
              });
              gsap.to(card, { zIndex: 1000, duration: 0 });

              const glow = card.querySelector(".glow-effect");
              if (glow) {
                gsap.fromTo(
                  glow,
                  { opacity: 0, scale: 0.3 },
                  { opacity: 1, scale: 1.2, duration: 0.5 }
                );
              }
            },
            onRelease: function () {
              const currentRotation = gsap.getProperty(card, "rotation") || 0;
              const clampedRotation = Math.min(
                Math.max(currentRotation, -10),
                10
              );

              gsap.to(card, {
                scale: 1,
                rotation: clampedRotation,
                boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.5)",
                duration: 0.5,
                ease: "back.out(1.7)",
              });
              gsap.to(card, { zIndex: 10 + i, duration: 0, delay: 0.3 });

              const glow = card.querySelector(".glow-effect");
              if (glow) {
                gsap.to(glow, { opacity: 0, duration: 0.5 });
              }

              const cardBounds = card.getBoundingClientRect();
              const containerBounds =
                containerRef.current.getBoundingClientRect();
              const titleBounds = titleRef.current.getBoundingClientRect();

              // Check if card is out of bounds
              if (
                cardBounds.top < titleBounds.bottom ||
                cardBounds.bottom > containerBounds.bottom ||
                cardBounds.left < containerBounds.left ||
                cardBounds.right > containerBounds.right
              ) {
                // Reset to original static position from array
                const originalPosition = testimonials[i].position;
                gsap.to(card, {
                  x: originalPosition.x,
                  y: originalPosition.y,
                  rotation: originalPosition.rotation,
                  duration: 0.8,
                  ease: "back.out(1.7)",
                  onComplete: () => {
                    // Restart floating animation
                    gsap.to(card, {
                      y: `${originalPosition.y + gsap.utils.random(8, 15)}`,
                      x: `${originalPosition.x + gsap.utils.random(-5, 5)}`,
                      rotation: `${
                        originalPosition.rotation + gsap.utils.random(-2, 2)
                      }`,
                      duration: gsap.utils.random(3, 6),
                      repeat: -1,
                      yoyo: true,
                      ease: "sine.inOut",
                      delay: 0.5,
                    });
                  },
                });
              } else {
                // If in bounds, just restart floating animation from current position
                gsap.to(card, {
                  y: `+=${gsap.utils.random(8, 15)}`,
                  x: `+=${gsap.utils.random(-5, 5)}`,
                  rotation: `+=${gsap.utils.random(-2, 2)}`,
                  duration: gsap.utils.random(3, 6),
                  repeat: -1,
                  yoyo: true,
                  ease: "sine.inOut",
                  delay: 0.5,
                });
              }
            },
            onDrag: function () {
              const glow = card.querySelector(".glow-effect");
              if (glow) {
                gsap.to(glow, { opacity: 0.8, duration: 0.2 });
              }

              const rotation = gsap.getProperty(card, "rotation");
              if (rotation > 10) {
                gsap.set(card, { rotation: 10 });
              } else if (rotation < -10) {
                gsap.set(card, { rotation: -10 });
              }

              const cardBounds = card.getBoundingClientRect();
              const containerBounds =
                containerRef.current.getBoundingClientRect();
              const titleBounds = titleRef.current.getBoundingClientRect();

              if (cardBounds.top < titleBounds.bottom + 50) {
                this.edgeResistance = 0.95;
              } else if (cardBounds.bottom > containerBounds.bottom - 50) {
                this.edgeResistance = 0.95;
              } else {
                this.edgeResistance = 0.8;
              }
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
      className="min-h-screen bg-black text-white py-20 lg:py-36 relative overflow-hidden"
    >
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

      <div className="container mx-auto px-6 relative z-20">
        <div ref={titleRef} className="text-center mb-20 perspective-1000">
          <div className="relative ">
            <TextReveal
              animation="rotateX"
              stagger={0.1}
              duration={0.8}
              className="text-120 font-bold mb-6 "
            >
              Client Voices
            </TextReveal>
          </div>
          <TextReveal
            animation="rotateX"
            stagger={0.1}
            duration={0.8}
            className="text-30 text-gray-300 max-w-4xl mx-auto font-light mt-4"
          >
            Experience testimonials in a new dimension - drag and explore
          </TextReveal>
        </div>
        <div className="sm:hidden space-y-8 pb-12">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="group mx-auto transform-gpu"
              style={{
                width: "100%",
                maxWidth: "350px",
                animation: `fadeIn 0.6s ease-out forwards`,
                animationDelay: `${i * 0.2}s`,
                opacity: 0,
              }}
            >
              {/* Same card design but without absolute positioning */}
              <div className="relative">
                {/* Glow effect */}
                <div className="glow-effect absolute -inset-4 bg-gradient-to-r from-cyan-500/50 to-pink-500/50 blur-xl rounded-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-500" />

                {/* Holographic border */}
                <div
                  className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-pink-500 to-purple-500 rounded-3xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ padding: "2px" }}
                >
                  <div className="bg-black rounded-3xl h-full w-full" />
                </div>

                {/* Main card */}
                <div className="relative bg-gray-900/95 backdrop-blur-xl border border-cyan-500/30 rounded-3xl p-6 h-full overflow-hidden transition-all duration-300">
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-center mb-4">
                      <div className="relative">
                        {/* <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-14 h-14 rounded-full object-cover border-2 border-cyan-400/50"
                        /> */}
                        <UserCircleIcon className="w-14 h-14 rounded-full text-gray-600 border-2 border-cyan-400/50" />
                        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-pink-400 rounded-full blur opacity-50" />
                      </div>
                      <div className="ml-4">
                        <h4 className="text-white font-bold text-20 bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-400 font-medium text-sm">
                          {testimonial.role}
                        </p>
                        <p className="text-gray-500 text-xs">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-300 text-md leading-relaxed mb-4">
                      "{testimonial.content}"
                    </p>

                    {/* Futuristic rating */}
                    <div className="flex mb-2">
                      {[...Array(testimonial.rating)].map((_, j) => (
                        <StarIcon
                          key={j}
                          className="w-3 h-3 mr-1 text-yellow-400 rounded-sm transform rotate-45"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Scan line effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent h-1 animate-scan" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          ref={gridRef}
          className="hidden sm:block relative min-h-[80vh] mx-auto max-w-7xl"
        >
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="group absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-grab active:cursor-grabbing"
              style={{
                width: "350px",
                height: "auto",
                zIndex: 10 + i,
              }}
            >
              <div className="glow-effect absolute -inset-4 bg-gradient-to-r from-cyan-500/50 to-pink-500/50 blur-xl rounded-3xl opacity-0 transition-opacity duration-500" />

              <div
                className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-pink-500 to-purple-500 rounded-3xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"
                style={{ padding: "2px" }}
              >
                <div className="bg-black rounded-3xl h-full w-full" />
              </div>

              <div className="relative bg-gray-900/95 backdrop-blur-xl border border-cyan-500/30 rounded-3xl p-8 h-full overflow-hidden transform transition-all duration-300">
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

                <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-cyan-400/60" />
                <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-pink-400/60" />
                <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-purple-400/60" />
                <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-cyan-400/60" />

                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="relative">
                      {/* <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover border-2 border-cyan-400/50"
                      /> */}
                        <UserCircleIcon className="w-14 h-14 rounded-full text-gray-600 border-2 border-cyan-400/50" />

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

                  <p className="text-gray-300 text-20 leading-relaxed mb-6 font-light">
                    "{testimonial.content}"
                  </p>

                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, j) => (
                      <StarIcon
                        key={j}
                        className="w-4 h-4 mr-1 text-yellow-400  rounded-sm transform rotate-45"
                        style={{
                          animation: `starPulse 1.5s infinite`,
                          animationDelay: `${j * 0.2}s`,
                        }}
                      />
                    ))}
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent h-1 animate-scan" />
              </div>
            </div>
          ))}
        </div>

        <div className="sm:block hidden text-center mt-12">
          <p className="text-gray-400 text-20 font-light animate-pulse">
            🖱️ Drag cards to explore • Rearrange as you like
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
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

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }

        @keyframes starPulse {
          0%,
          100% {
            opacity: 0.8;
            transform: rotate(45deg) scale(1);
          }
          50% {
            opacity: 1;
            transform: rotate(45deg) scale(1.2);
          }
        }

        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
};

export default Testimonials_brand;
