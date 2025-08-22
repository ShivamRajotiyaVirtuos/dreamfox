import React, { useEffect, useRef } from 'react';

const FourPillarsSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // Load GSAP from CDN
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
    script.onload = () => {
      const scrollTriggerScript = document.createElement('script');
      scrollTriggerScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js';
      scrollTriggerScript.onload = initAnimations;
      document.head.appendChild(scrollTriggerScript);
    };
    document.head.appendChild(script);

    const initAnimations = () => {
      const { gsap } = window;
      gsap.registerPlugin(window.ScrollTrigger);

      // Title animation
      gsap.fromTo(titleRef.current,
        {
          opacity: 0,
          y: 100,
          scale: 0.8
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "bottom 20%",
          }
        }
      );

      // Cards staggered reveal
      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        const icon = card.querySelector('.card-icon');
        const title = card.querySelector('.card-title');
        const text = card.querySelector('.card-text');
        const cta = card.querySelector('.card-cta');
        const bg = card.querySelector('.card-bg');

        // Card entrance animation
        gsap.fromTo(card,
          {
            opacity: 0,
            y: 80,
            scale: 0.9,
            rotationX: 15
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotationX: 0,
            duration: 0.8,
            delay: index * 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            }
          }
        );

        // Content reveal animation
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 75%",
          }
        });

        tl.fromTo(icon, { scale: 0, rotation: -180 }, { scale: 1, rotation: 0, duration: 0.6, ease: "back.out(1.7)" })
          .fromTo(title, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 }, "-=0.3")
          .fromTo(text, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.5 }, "-=0.3")
          .fromTo(cta, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.4 }, "-=0.2");

        // Parallax effect on scroll
        gsap.to(bg, {
          yPercent: -20,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: 1
          }
        });

        // Hover animations
        card.addEventListener('mouseenter', () => {
          gsap.to(card, { scale: 1.02, duration: 0.3, ease: "power2.out" });
          gsap.to(icon, { scale: 1.1, rotation: 5, duration: 0.3, ease: "power2.out" });
          gsap.to(bg, { scale: 1.1, duration: 0.6, ease: "power2.out" });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, { scale: 1, duration: 0.3, ease: "power2.out" });
          gsap.to(icon, { scale: 1, rotation: 0, duration: 0.3, ease: "power2.out" });
          gsap.to(bg, { scale: 1, duration: 0.6, ease: "power2.out" });
        });
      });

      // Floating animation for icons
      cardsRef.current.forEach((card) => {
        if (!card) return;
        const icon = card.querySelector('.card-icon');
        gsap.to(icon, {
          y: -8,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
          delay: Math.random() * 2
        });
      });
    };

    return () => {
      // Cleanup scripts
      const scripts = document.querySelectorAll('script[src*="gsap"]');
      scripts.forEach(script => script.remove());
    };
  }, []);

  const pillars = [
    {
      icon: "🦊",
      title: "Brand Identity & Advisory",
      text: "Position boldly with Brand ID, Architecture, and Advisory for startups and re-engineering giants.",
      cta: "Discover Branding",
      gradient: "from-purple-600 via-pink-600 to-red-500",
      bgPattern: "bg-gradient-to-br from-purple-100 to-pink-50"
    },
    {
      icon: "🎨",
      title: "Designara Studio",
      text: "Cutting-edge UX/UI, digital experiences, DXPs, and commerce fronts—the face of your brand.",
      cta: "Explore Design",
      gradient: "from-blue-600 via-cyan-600 to-teal-500",
      bgPattern: "bg-gradient-to-br from-blue-100 to-cyan-50"
    },
    {
      icon: "⚡",
      title: "AI & Digital Assimilations",
      text: "Tech stack, AI-driven marketing, SEO/SMO, and Audacis-powered performance marketing.",
      cta: "See Assimilations",
      gradient: "from-yellow-500 via-orange-500 to-red-500",
      bgPattern: "bg-gradient-to-br from-yellow-100 to-orange-50"
    },
    {
      icon: "📺",
      title: "Yippee Media",
      text: "Content, social, influencer marketing, and real-time curated media expertise.",
      cta: "Grow with Media",
      gradient: "from-green-600 via-emerald-600 to-cyan-500",
      bgPattern: "bg-gradient-to-br from-green-100 to-emerald-50"
    }
  ];

  return (
    <section ref={sectionRef} className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black py-20 px-6 overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent mb-6">
            Four Pillars
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 auto-rows-fr">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              ref={el => cardsRef.current[index] = el}
              className="group relative bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden cursor-pointer"
              style={{ minHeight: '400px' }}
            >
              {/* Animated background */}
              <div className={`card-bg absolute inset-0 ${pillar.bgPattern} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
              
              {/* Card content */}
              <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                {/* Icon */}
                <div className="card-icon text-6xl mb-6 transform-gpu">
                  {pillar.icon}
                </div>

                {/* Content */}
                <div className="flex-grow">
                  <h3 className={`card-title text-2xl font-bold mb-4 bg-gradient-to-r ${pillar.gradient} bg-clip-text text-transparent`}>
                    {pillar.title}
                  </h3>
                  <p className="card-text text-gray-300 text-lg leading-relaxed mb-8">
                    {pillar.text}
                  </p>
                </div>

                {/* CTA Button */}
                <button className={`card-cta group/btn relative px-8 py-4 bg-gradient-to-r ${pillar.gradient} rounded-full text-white font-semibold text-lg transform transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25`}>
                  <span className="relative z-10">{pillar.cta}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 rounded-full"></div>
                </button>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Animated border */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${pillar.gradient} opacity-20 blur-sm`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decorative element */}
        <div className="mt-20 text-center">
          <div className="inline-block w-16 h-16 border-2 border-white/20 rounded-full animate-spin-slow">
            <div className="w-full h-full border-2 border-transparent border-t-purple-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default FourPillarsSection;