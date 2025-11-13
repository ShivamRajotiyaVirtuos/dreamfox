import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const Cta = () => {
  const sectionRef = useRef(null);
  const buttonRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Staggered fade-in animation for elements
    const elements = [headingRef.current, textRef.current, buttonRef.current];

    elements.forEach((el, index) => {
      if (el) {
        setTimeout(() => {
          el.classList.add("animate-in");
        }, index * 200);
      }
    });
  }, []);

  return (
    <>
      <style>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes float {
                    0%, 100% {
                        transform: translateY(0) translateX(0) rotate(0deg);
                    }
                    25% {
                        transform: translateY(-20px) translateX(10px) rotate(5deg);
                    }
                    50% {
                        transform: translateY(-10px) translateX(-10px) rotate(-5deg);
                    }
                    75% {
                        transform: translateY(-30px) translateX(5px) rotate(3deg);
                    }
                }

                @keyframes pulse {
                    0%, 100% {
                        transform: scale(1);
                    }
                    50% {
                        transform: scale(1.05);
                    }
                }

                @keyframes shimmer {
                    0% {
                        background-position: -1000px 0;
                    }
                    100% {
                        background-position: 1000px 0;
                    }
                }

                .particle {
                    animation: float 3s ease-in-out infinite;
                }

                .animate-in {
                    animation: fadeInUp 0.8s ease-out forwards;
                }

                .element-hidden {
                    opacity: 0;
                }

                .gradient-orb-1 {
                    animation: pulse 4s ease-in-out infinite;
                }

                .gradient-orb-2 {
                    animation: pulse 5s ease-in-out infinite;
                }

                .shimmer-line {
                    animation: shimmer 2s linear infinite;
                }

                .cta-button {
                    position: relative;
                    overflow: hidden;
                }

                .cta-button::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
                    transition: left 0.5s ease;
                }

                .cta-button:hover::before {
                    left: 100%;
                }
            `}</style>

      <section
        ref={sectionRef}
        className="relative py-16 lg:py-32 w-screen flex flex-col items-center justify-center p-8 overflow-hidden m-0 bg-gradient-to-br from-pink-900 via-pink-950 to-pink-900"
      >
        {/* Animated background particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle absolute w-1 h-1 bg-violet-500/60 rounded-full pointer-events-none"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}

        {/* Gradient orbs */}
        <div className="gradient-orb-1 absolute top-[10%] right-[10%] w-[300px] h-[300px] bg-pink-500/15 rounded-full blur-3xl" />
        <div className="gradient-orb-2 absolute bottom-[10%] left-[10%] w-[400px] h-[400px] bg-pink-500/15 rounded-full blur-3xl" />

        {/* Content container */}
        <div className="relative z-10 max-w-4xl text-center">
          <h2
            ref={headingRef}
            className="element-hidden text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 bg-gradient-to-r from-white to-violet-300 bg-clip-text text-transparent leading-tight"
          >
            Be Part of Our Story
          </h2>

          <p
            ref={textRef}
            className="element-hidden text-xl md:text-2xl lg:text-3xl mb-12 text-slate-300 font-light tracking-wide"
          >
           Whether you're looking for your dream job or the perfect candidate, PlumJobs is here to make it happen.
          </p>
          <Link href={"/contact"} passHref>
            <button
              ref={buttonRef}
              className="element-hidden text-pink-600 cta-button px-14 py-5 text-xl font-bold bg-gradient-to-r from-white via-white to-white  border-none rounded-full cursor-pointer shadow-lg shadow-violet-500/30 hover:shadow-xl hover:shadow-violet-500/40 hover:-translate-y-1 active:translate-y-0 transition-all duration-300 tracking-widest"
            >
              CONSULT NOW
            </button>
          </Link>

          {/* Decorative elements */}
          {/* <div className="mt-16 flex justify-center gap-8 opacity-50">
                        {[1, 2, 3].map((i) => (
                            <div
                                key={i}
                                className="shimmer-line w-16 h-0.5 bg-gradient-to-r from-transparent via-violet-500 to-transparent"
                                style={{
                                    animationDelay: `${i * 0.3}s`,
                                    backgroundSize: '1000px 100%'
                                }}
                            />
                        ))}
                    </div> */}
        </div>
      </section>
    </>
  );
};

export default Cta;
