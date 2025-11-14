import BannerTextReveal from "@/components/Text Reveal/bannertextreveal";
import TextReveal from "@/components/Text Reveal/textreveal";
import Cta from "@/components/Work-portfolio/cta";
import LogoEvolutions from "@/components/Work-portfolio/logo_evolution";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

const BrandStory = () => {
  const heroRef = useRef(null);
  const storyRef = useRef(null);
  const logoRef = useRef(null);
  const timelineRef = useRef(null);
  const visionRef = useRef(null);

  useEffect(() => {
    // Hero section animation
    const heroTitle = heroRef.current?.querySelector(".hero-title");
    const heroSubtitle = heroRef.current?.querySelector(".hero-subtitle");

    if (heroTitle && heroSubtitle) {
      heroTitle.style.animation = "fadeInUp 1s ease-out 0.2s forwards";
      heroSubtitle.style.animation = "fadeInUp 1s ease-out 0.5s forwards";
    }

    // Scroll-triggered animations
    const observerOptions = {
      threshold: 0.2,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    }, observerOptions);

    const sections = [
      storyRef.current,
      logoRef.current,
      timelineRef.current,
      visionRef.current,
    ];
    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(40px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes slideInLeft {
                    from {
                        opacity: 0;
                        transform: translateX(-60px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                @keyframes slideInRight {
                    from {
                        opacity: 0;
                        transform: translateX(60px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                @keyframes scaleIn {
                    from {
                        opacity: 0;
                        transform: scale(0.8);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }

                @keyframes float {
                    0%, 100% {
                        transform: translateY(0px);
                    }
                    50% {
                        transform: translateY(-20px);
                    }
                }

                @keyframes pulse {
                    0%, 100% {
                        opacity: 1;
                    }
                    50% {
                        opacity: 0.5;
                    }
                }

                .element-hidden {
                    opacity: 0;
                }

                .animate-in.slide-left {
                    animation: slideInLeft 0.8s ease-out forwards;
                }

                .animate-in.slide-right {
                    animation: slideInRight 0.8s ease-out forwards;
                }

                .animate-in.scale {
                    animation: scaleIn 0.8s ease-out forwards;
                }

                .animate-in.fade-up {
                    animation: fadeInUp 0.8s ease-out forwards;
                }

                .logo-float {
                    animation: float 3s ease-in-out infinite;
                }

                .timeline-line {
                    position: relative;
                }

                .timeline-line::before {
                    content: '';
                    position: absolute;
                    left: 50%;
                    top: 0;
                    bottom: 0;
                    width: 2px;
                    background: linear-gradient(to bottom, #ed4a6d, #8b5cf6);
                    transform: translateX(-50%);
                }

                @media (max-width: 768px) {
                    .timeline-line::before {
                        left: 20px;
                    }
                }
            `}</style>

      <div className="min-h-screen bg-gradient-to-br from-black  to-[#000]">
        {/* Hero Section */}
        <section
          ref={heroRef}
          className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden"
        >
          {/* Background elements */}
          <div className="absolute top-20 right-20 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-20 left-20 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div className="max-w-7xl">
            <BannerTextReveal
              titleClassName="text-white text-200 font-bold leading-tight"
              descriptionClassName="text-24 text-white text-center max-w-7xl"
              title=" Brand Story"
              description="The journey of building PlumJobs — where talent meets opportunity"
            />
          </div>
      
        </section>

        {/* The Beginning */}
        <section
          ref={storyRef}
          className="element-hidden slide-left px-6 py-24 container mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <TextReveal
                animation="rotateX"
                stagger={0.1}
                duration={0.8}
                className="text-80 font-bold text-gray-50 mb-4"
              >
                The Beginning
              </TextReveal>
             

              <TextReveal
                animation="rotateX"
                stagger={0.1}
                duration={0.8}
                className="text-24 font-normal text-gray-50 mb-4"
              >
                In 2023, a group of passionate technologists and HR
                professionals came together with a shared vision: to
                revolutionize the recruitment industry.
               
              </TextReveal>

              <TextReveal
                animation="rotateX"
                stagger={0.1}
                duration={0.8}
                className="text-24 font-normal text-gray-50 mb-4"
              >
                Our mission was clear: make recruitment simple, transparent, and
                effective for everyone involved.
              </TextReveal>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-pink-600/20 to-pink-600/20 backdrop-blur-sm rounded-2xl p-8 border border-pink-500/30">
                <Image
                  src={"/images/plumjob.png"}
                  alt="Team Brainstorming"
                  width={800}
                  height={800}
                  className="rounded-xl shadow-lg shadow-pink-500/20"
                />
              </div>
            </div>
          </div>
        </section>
        <LogoEvolutions />
      
        <section
          ref={timelineRef}
          className="element-hidden fade-up px-6 py-16 lg:py-32 max-w-5xl mx-auto"
        >
          <TextReveal
                animation="rotateX"
                stagger={0.1}
                duration={0.8}
                className="text-120 font-semibold text-center text-gray-50 mb-16 sm:mb-24"
              >
               Our Journey
               
              </TextReveal>

          <div className="timeline-line relative">
            {/* Timeline items */}
            <div className="mb-16 md:mb-24">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="flex-1 md:text-right">
                  <div className="bg-gradient-to-br from-pink-600/20 to-transparent backdrop-blur-sm rounded-xl p-6 border border-pink-500/30">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Q1 2023
                    </h3>
                    <p className="text-slate-300">Concept & Research</p>
                    <p className="text-sm text-slate-400 mt-2">
                      Market research, competitor analysis, and identifying pain
                      points in recruitment.
                    </p>
                  </div>
                </div>
                <div className="w-8 h-8 bg-[#b8294d] rounded-full border-4 border-[#b8294d] flex-shrink-0 relative z-10" />
                <div className="flex-1 hidden md:block" />
              </div>
            </div>

            <div className="mb-16 md:mb-24">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="flex-1 hidden md:block" />
                <div className="w-8 h-8 bg-[#b8294d] rounded-full border-4 border-[#b8294d] flex-shrink-0 relative z-10" />
                <div className="flex-1">
                  <div className="bg-gradient-to-br from-pink-600/20 to-transparent backdrop-blur-sm rounded-xl p-6 border border-pink-500/30">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Q2 2023
                    </h3>
                    <p className="text-slate-300">Design & Development</p>
                    <p className="text-sm text-slate-400 mt-2">
                      Building the platform with Next.js, creating intuitive
                      UI/UX, and developing core features.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-16 md:mb-24">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="flex-1 md:text-right">
                  <div className="bg-gradient-to-br from-pink-600/20 to-transparent backdrop-blur-sm rounded-xl p-6 border border-pink-500/30">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Q3 2023
                    </h3>
                    <p className="text-slate-300">Beta Launch</p>
                    <p className="text-sm text-slate-400 mt-2">
                      Soft launch with select companies and candidates.
                      Gathering feedback and iterating.
                    </p>
                  </div>
                </div>
                <div className="w-8 h-8 bg-[#b8294d] rounded-full border-4 border-[#b8294d] flex-shrink-0 relative z-10" />
                <div className="flex-1 hidden md:block" />
              </div>
            </div>

            <div>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="flex-1 hidden md:block" />
                <div className="w-8 h-8 bg-[#d1375e] rounded-full border-4 border-[#b8294d] flex-shrink-0 relative z-10 animate-pulse" />
                <div className="flex-1">
                  <div className="bg-gradient-to-br from-pink-600/30 to-pink-600/30 backdrop-blur-sm rounded-xl p-6 border-2 border-pink-500 shadow-lg shadow-pink-500/20">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Q4 2023
                    </h3>
                    <p className="text-pink-300 font-semibold">
                      Official Launch 🚀
                    </p>
                    <p className="text-sm text-slate-300 mt-2">
                      PlumJobs goes live to the public. Connecting thousands of
                      job seekers with opportunities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Cta />
      </div>
    </>
  );
};

export default BrandStory;
