import Cta from "@/components/Work-portfolio/cta";
import LogoEvolutions from "@/components/Work-portfolio/logo_evolution";
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
                    background: linear-gradient(to bottom, #6366f1, #8b5cf6);
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
          <div className="absolute top-20 right-20 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />

          <div className="relative z-10 max-w-7xl text-center">
            <h1 className="hero-title element-hidden text-200 font-black mb-6 bg-gradient-to-r from-[#ed4a6d] via-[#fff] to-[#ed4a6d] bg-clip-text text-transparent">
              Brand Story
            </h1>
            <p className="hero-subtitle element-hidden text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              The journey of building PlumJobs — where talent meets opportunity
            </p>
          </div>
        </section>

        {/* The Beginning */}
        <section
          ref={storyRef}
          className="element-hidden slide-left px-6 py-24 container mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold text-white mb-6">
                The Beginning
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed mb-4">
                In 2023, a group of passionate technologists and HR
                professionals came together with a shared vision: to
                revolutionize the recruitment industry. We noticed the
                disconnect between talented job seekers and companies looking
                for the right fit.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed mb-4">
                PlumJobs was born from late-night brainstorming sessions,
                countless iterations, and a determination to create something
                meaningful. We wanted to build more than just a job board — we
                wanted to create a platform that truly understands both
                candidates and employers.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Our mission was clear: make recruitment simple, transparent, and
                effective for everyone involved.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-violet-600/20 to-blue-600/20 backdrop-blur-sm rounded-2xl p-8 border border-violet-500/30">
                <div className="text-6xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Founded in 2023
                </h3>
                <p className="text-slate-400">
                  With a dream to transform recruitment
                </p>
              </div>
            </div>
          </div>
        </section>
        <LogoEvolutions />
        {/* Logo Evolution */}
        <section
          ref={logoRef}
          className="element-hidden scale px-6 py-24 bg-slate-900/50"
        >
          <div className="container mx-auto">
            <h2 className="text-5xl font-bold text-white mb-12 text-center">
              Logo Evolution
            </h2>
            <p className="text-xl text-slate-300 mb-16 text-center max-w-3xl mx-auto">
              Our logo tells the story of growth, refinement, and the pursuit of
              perfection — just like the careers we help build.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Version 1 */}
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 hover:border-violet-500/50 transition-all duration-300 hover:scale-105">
                <div className="logo-float mb-6 w-32 h-32 mx-auto bg-gradient-to-br from-violet-500 to-indigo-600 rounded-2xl flex items-center justify-center text-5xl font-black text-white">
                  P
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 text-center">
                  Version 1.0
                </h3>
                <p className="text-slate-400 text-center mb-3">The Concept</p>
                <p className="text-sm text-slate-500 text-center">
                  Our first iteration focused on simplicity. A bold 'P' that
                  represented both Plum and Progress.
                </p>
              </div>

              {/* Version 2 */}
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 hover:border-violet-500/50 transition-all duration-300 hover:scale-105">
                <div
                  className="logo-float mb-6 w-32 h-32 mx-auto bg-gradient-to-br from-indigo-500 to-blue-600 rounded-full flex items-center justify-center text-4xl font-black text-white"
                  style={{ animationDelay: "0.5s" }}
                >
                  PJ
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 text-center">
                  Version 2.0
                </h3>
                <p className="text-slate-400 text-center mb-3">
                  The Refinement
                </p>
                <p className="text-sm text-slate-500 text-center">
                  We added the 'J' and softened the edges, symbolizing the
                  connection between candidates and jobs.
                </p>
              </div>

              {/* Version 3 */}
              <div className="bg-gradient-to-br from-violet-600/20 to-blue-600/20 rounded-2xl p-8 border-2 border-violet-500 hover:scale-105 transition-all duration-300 shadow-lg shadow-violet-500/20">
                <div
                  className="logo-float mb-6 w-32 h-32 mx-auto bg-gradient-to-br from-violet-600 via-indigo-600 to-blue-600 rounded-3xl flex items-center justify-center text-3xl font-black text-white"
                  style={{ animationDelay: "1s" }}
                >
                  <span className="flex flex-col items-center">
                    <span className="text-4xl">🍇</span>
                    <span className="text-xs mt-1">Jobs</span>
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 text-center">
                  Version 3.0
                </h3>
                <p className="text-violet-300 text-center mb-3 font-semibold">
                  Current
                </p>
                <p className="text-sm text-slate-300 text-center">
                  The final evolution: a plum icon representing quality and
                  ripeness — the perfect match at the perfect time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section
          ref={timelineRef}
          className="element-hidden fade-up px-6 py-16 lg:py-32 max-w-5xl mx-auto"
        >
          <h2 className="text-5xl font-bold text-white mb-20 text-center">
            Our Journey
          </h2>

          <div className="timeline-line relative">
            {/* Timeline items */}
            <div className="mb-16 md:mb-24">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="flex-1 md:text-right">
                  <div className="bg-gradient-to-br from-violet-600/20 to-transparent backdrop-blur-sm rounded-xl p-6 border border-violet-500/30">
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
                <div className="w-8 h-8 bg-violet-600 rounded-full border-4 border-slate-900 flex-shrink-0 relative z-10" />
                <div className="flex-1 hidden md:block" />
              </div>
            </div>

            <div className="mb-16 md:mb-24">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="flex-1 hidden md:block" />
                <div className="w-8 h-8 bg-indigo-600 rounded-full border-4 border-slate-900 flex-shrink-0 relative z-10" />
                <div className="flex-1">
                  <div className="bg-gradient-to-br from-indigo-600/20 to-transparent backdrop-blur-sm rounded-xl p-6 border border-indigo-500/30">
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
                  <div className="bg-gradient-to-br from-blue-600/20 to-transparent backdrop-blur-sm rounded-xl p-6 border border-blue-500/30">
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
                <div className="w-8 h-8 bg-blue-600 rounded-full border-4 border-slate-900 flex-shrink-0 relative z-10" />
                <div className="flex-1 hidden md:block" />
              </div>
            </div>

            <div>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="flex-1 hidden md:block" />
                <div className="w-8 h-8 bg-gradient-to-r from-violet-600 to-blue-600 rounded-full border-4 border-slate-900 flex-shrink-0 relative z-10 animate-pulse" />
                <div className="flex-1">
                  <div className="bg-gradient-to-br from-violet-600/30 to-blue-600/30 backdrop-blur-sm rounded-xl p-6 border-2 border-violet-500 shadow-lg shadow-violet-500/20">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Q4 2023
                    </h3>
                    <p className="text-violet-300 font-semibold">
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
