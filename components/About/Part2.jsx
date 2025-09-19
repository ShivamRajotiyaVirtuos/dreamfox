import Image from "next/image";
import React, { useEffect, useRef } from "react";

const VirtuosHero = () => {
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const taglineRef = useRef(null);
  const subtitleRef = useRef(null);
  const particlesRef = useRef([]);
  const shapesRef = useRef([]);
  const networkLinesRef = useRef([]);

  useEffect(() => {
    // Dynamically import GSAP to avoid SSR issues
    const loadGSAP = async () => {
      const { gsap } = await import("gsap");

      // Set initial states
      gsap.set([taglineRef.current, subtitleRef.current], {
        y: 30,
        opacity: 0,
      });

      // Create timeline for entrance animations
      const tl = gsap.timeline();

      tl.to(logoRef.current, {
        duration: 1.5,
        scale: 1,
        opacity: 1,
        ease: "power3.out",
      })
        .to(
          taglineRef.current,
          {
            duration: 1,
            y: 0,
            opacity: 1,
            ease: "power2.out",
          },
          "-=0.5"
        )
        .to(
          subtitleRef.current,
          {
            duration: 1.2,
            y: 0,
            opacity: 1,
            ease: "power2.out",
          },
          "-=0.3"
        );

      // Logo glow animation
      gsap.to(logoRef.current, {
        duration: 4,
        textShadow: "0 0 40px rgba(236, 72, 153, 0.6)",
        y: -5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Animate particles
      particlesRef.current.forEach((particle, i) => {
        if (particle) {
          gsap.set(particle, {
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 100,
            scale: Math.random() * 0.5 + 0.5,
          });

          gsap.to(particle, {
            duration: Math.random() * 10 + 15,
            y: -100,
            x: `+=${Math.random() * 400 - 200}`,
            rotation: 360,
            opacity: 0.3,
            repeat: -1,
            delay: Math.random() * 5,
            ease: "none",
          });
        }
      });

      // Animate shapes
      shapesRef.current.forEach((shape, i) => {
        if (shape) {
          gsap.to(shape, {
            duration: 15 + i * 5,
            rotation: 360,
            repeat: -1,
            ease: "none",
          });

          gsap.to(shape, {
            duration: 12 + i * 2,
            y: -20,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
          });
        }
      });

      // Animate network lines
      networkLinesRef.current.forEach((line, i) => {
        if (line) {
          gsap.to(line, {
            duration: 3,
            opacity: 0.6,
            scaleY: 2,
            repeat: -1,
            yoyo: true,
            delay: Math.random() * 3,
            ease: "sine.inOut",
          });
        }
      });

      // Mouse movement parallax
      const handleMouseMove = (e) => {
        const mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
        const mouseY = (e.clientY / window.innerHeight - 0.5) * 2;

        gsap.to(shapesRef.current, {
          duration: 0.5,
          x: mouseX * 20,
          y: mouseY * 20,
          stagger: 0.1,
        });

        gsap.to(logoRef.current, {
          duration: 0.3,
          x: mouseX * 5,
          y: mouseY * 5,
        });
      };

      window.addEventListener("mousemove", handleMouseMove);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    };

    loadGSAP();
  }, []);

  // Create particle elements
  const createParticles = () => {
    return Array.from({ length: 50 }, (_, i) => (
      <div
        key={i}
        ref={(el) => (particlesRef.current[i] = el)}
        className="absolute w-1 h-1 bg-pink-500 rounded-full opacity-10"
        style={{
          width: `${Math.random() * 6 + 2}px`,
          height: `${Math.random() * 6 + 2}px`,
        }}
      />
    ));
  };

  // Create network lines
  const createNetworkLines = () => {
    return Array.from({ length: 20 }, (_, i) => (
      <div
        key={i}
        ref={(el) => (networkLinesRef.current[i] = el)}
        className="absolute h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent opacity-20"
        style={{
          width: `${Math.random() * 300 + 100}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          transform: `rotate(${Math.random() * 360}deg)`,
        }}
      />
    ));
  };

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-screen overflow-hidden bg-black k"
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-500 to-transparent transform rotate-45 animate-pulse"></div>
      </div>

      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {createParticles()}
      </div>

      {/* Neural Network Lines */}
      <div className="absolute inset-0 pointer-events-none">
        {createNetworkLines()}
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          ref={(el) => (shapesRef.current[0] = el)}
          className="absolute top-1/4 left-1/12 w-20 h-20 border-2 border-pink-500 opacity-20"
        />
        <div
          ref={(el) => (shapesRef.current[1] = el)}
          className="absolute top-3/5 right-1/6 w-12 h-12 border-2 border-pink-500 rounded-full opacity-20"
        />
        <div
          ref={(el) => (shapesRef.current[2] = el)}
          className="absolute bottom-1/4 left-1/5 w-16 h-16 border-2 border-pink-500 opacity-20 transform rotate-45"
        />
      </div>

      {/* Glitch Overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-0 animate-pulse"
        style={{
          background: `repeating-linear-gradient(
            90deg,
            transparent,
            transparent 2px,
            rgba(236, 72, 153, 0.03) 2px,
            rgba(236, 72, 153, 0.03) 4px
          )`,
          animationDuration: "5s",
          animationIterationCount: "infinite",
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-8">
        <div className="text-center flex flex-col items-center max-w-7xl mx-auto">
         
          <p
            ref={taglineRef}
            className="text-[24px] lg:text-[40px] 2xl:text-[60px] text-white mb-4 font-= font-bold opacity-0"
          >
            We are a proud part of
          </p>
          <Image
            src={"/virtuos-logo.svg"}
            width={300}
            className=" sm:w-240"
            height={50}
            alt="Virtuos Logo"
          />
          {/* Subtitle */}
          <h2
            ref={subtitleRef}
            className="text-[40px] lg:text-[70px] 2xl:text-[100px] font-bold tracking-tight  text-white opacity-0"
           
          >
            Digital + AI
            
            Transformation Company.
          </h2>
        </div>
      </div>

      {/* Scroll Indicator */}
      
      {/* Custom Styles */}
    
    </div>
  );
};

export default VirtuosHero;
