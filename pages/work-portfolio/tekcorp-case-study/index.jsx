"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CardStyle2 from "@/components/Work-portfolio/card_style_2";
import CardStyle1 from "@/components/Work-portfolio/card_style_1";

gsap.registerPlugin(ScrollTrigger);



export default function NRMACaseStudy() {
  const heroRef = useRef(null);
  const sectionsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-badge", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power2.out",
      });

      gsap.from(".hero-title", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.2,
        ease: "power2.out",
      });

      gsap.from(".hero-read-time", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        delay: 0.4,
        ease: "power2.out",
      });

      gsap.from(".hero-divider", {
        scaleX: 0,
        duration: 1,
        delay: 0.6,
        ease: "power2.inOut",
        transformOrigin: "left",
      });

      sectionsRef.current.forEach((section) => {
        if (section) {
          gsap.from(section, {
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "top 20%",
              toggleActions: "play none none reverse",
            },
            opacity: 0,
            y: 50,
            duration: 0.8,
            ease: "power2.out",
          });
        }
      });

      gsap.from(".quote-block", {
        scrollTrigger: {
          trigger: ".quote-block",
          start: "top 75%",
          end: "top 20%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        scale: 0.95,
        duration: 1,
        ease: "power2.out",
      });

      gsap.from(".help-company-image", {
        scrollTrigger: {
          trigger: ".help-company-image",
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 60,
        duration: 1,
        ease: "power2.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <div ref={heroRef} className="min-h-screen bg-black container text-white">
      {/* Hero Section */}
      <div className="max-w-7xl px-4 sm:px-6 pt-40 xl:pt-54 pb-32">
        <div className="hero-badge text-xs tracking-wider text-gray-400 mb-8">
          CASE STUDY
        </div>

        <h1 className="hero-title text-80 font-bold leading-tight mb-8">
          TEKCORP Case Study: Reinventing a Legacy Tech Brand for the Agentic AI & Robotics Era
        </h1>

        <div className="hero-read-time text-sm text-gray-400 mb-12">
          5 MINUTE READ
        </div>

        <div className="hero-divider h-1 w-full bg-gradient-to-r from-pink-500 via-purple-500 via-yellow-500 to-green-500"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl px-4 sm:px-6">
        {/* Section 1 */}
        <section ref={addToRefs} className="mb-20">
          <h2 className="text-48 font-bold mb-6">
            A legacy of TEK, reborn as TEKCORP
          </h2>
          <p className="text-gray-300 text-24 leading-relaxed">
            The roots of TEKCORP go back to the early 1990s, when the founders first introduced a series of pioneering "TEK" brands in the computing industry. Over decades, these companies grew through traditional computer systems, hardware sales, and IT services—building a reputation for reliability and engineering discipline.
          </p>
          <p className="text-gray-300 text-24 leading-relaxed mt-6">
            But as AI, robotics, cloud elasticity, and autonomous technologies began redefining global enterprise infrastructure, the founders recognized the need for a bold reinvention. They wanted to preserve the iconic TEK heritage while evolving it for a future built on Agentic AI, robotics, and next-generation cloud.
          </p>
          <p className="text-gray-300 text-24 leading-relaxed mt-6">
            This transformation gave birth to TEKCORP 2.0—a future-first, globally brandable name that carries both legacy value and visionary impact.
          </p>
        </section>

        {/* Section 2 */}
        <section ref={addToRefs} className="mb-20">
          <h2 className="text-48 font-bold mb-6">Brand identity crafted for a modern technology corporation</h2>
          <p className="text-gray-300 text-24 leading-relaxed mb-6">
            DreamFox, the digital + design arm of Virtuos Group, was entrusted with reshaping the brand.
          </p>
          
          <h3 className="text-32 font-semibold mb-4 text-blue-400">A new identity rooted in TEK but elevated for the future</h3>
          <p className="text-gray-300 text-24 leading-relaxed mb-6">The vision:</p>
          <ul className="text-gray-300 text-24 leading-relaxed space-y-3 ml-8">
            <li>• Keep TEK for heritage</li>
            <li>• Add CORP to establish authority, scale, and enterprise credibility</li>
            <li>• Use ALL CAPS for boldness, strength, and modernity</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section ref={addToRefs} className="mb-20">
          <h2 className="text-48 font-bold mb-6">A logo that symbolizes precision, engineering & transformation</h2>
          <p className="text-gray-300 text-24 leading-relaxed mb-6">
            DreamFox designed the TEKCORP logo using:
          </p>
          <ul className="text-gray-300 text-24 leading-relaxed space-y-4 ml-8">
            <li>• <span className="text-blue-400">Virtuos Blue</span> to signal trust, engineering depth, and intelligence</li>
            <li>• <span className="text-orange-400">Vibrant Orange</span> as a counterpoint for innovation, energy, and experimentation</li>
            <li>• A three-triangle 'T' emblem, representing:
              <ul className="ml-6 mt-2 space-y-1">
                <li>- Engineering precision</li>
                <li>- Multi-dimensional thinking</li>
                <li>- Transformation through AI and Robotics</li>
              </ul>
            </li>
          </ul>
          <p className="text-gray-300 text-24 leading-relaxed mt-6">
            The emblem stands as a powerful mark that captures TEKCORP's engineering roots and forward ambition.
          </p>
        </section>

        {/* Section 4 */}
        <section ref={addToRefs} className="mb-20">
          <h2 className="text-48 font-bold mb-6">Securing TEKCORP's global digital footprint</h2>
          <p className="text-gray-300 text-24 leading-relaxed mb-6">
            To build a brand that could operate globally, DreamFox ensured TEKCORP owned a complete digital identity ecosystem:
          </p>
          <ul className="text-gray-300 text-24 leading-relaxed space-y-3 ml-8">
            <li>• Tekcorp.com for enterprise presence</li>
            <li>• Tekcorp.ai to reflect its emerging leadership in AI systems</li>
            <li>• Unified handles across social channels</li>
            <li>• Consistent brand language across all digital touchpoints</li>
          </ul>
          <p className="text-gray-300 text-24 leading-relaxed mt-6">
            In a world where domain authority and name consistency define trust, TEKCORP now stands on a solid digital foundation.
          </p>
        </section>

        {/* Section 5 */}
        <section ref={addToRefs} className="mb-20">
          <h2 className="text-48 font-bold mb-6">A next-generation DXP experience built with modern tech</h2>
          <p className="text-gray-300 text-24 leading-relaxed mb-6">
            DreamFox designed and engineered the TEKCORP digital experience with:
          </p>
          <ul className="text-gray-300 text-24 leading-relaxed space-y-3 ml-8">
            <li>• React JS for modular, scalable front-end architecture</li>
            <li>• TailwindCSS for a responsive, design-token-driven UI system</li>
            <li>• GSAP animations for polished micro-interactions and high-end motion design</li>
            <li>• AWS cloud stack for global performance and security</li>
          </ul>
          <p className="text-gray-300 text-24 leading-relaxed mt-6">
            The outcome is a sleek, high-fidelity digital presence that matches the technological sophistication of TEKCORP.
          </p>
        </section>

        {/* Section 6 */}
        <section ref={addToRefs} className="mb-20">
          <h2 className="text-48 font-bold mb-6">TEKCORP 2.0: Engineering the future of Robotics, AI & Cloud Infrastructure</h2>
          <p className="text-gray-300 text-24 leading-relaxed mb-6">
            Under the VBrand portfolio, TEKCORP is now evolving into a powerhouse in:
          </p>
          
          <div className="space-y-6 ml-8">
            <div>
              <h4 className="text-yellow-400 font-semibold text-24 mb-2">1. Agentic AI for Robotics</h4>
              <p className="text-gray-300 text-20">Developing autonomous systems that learn, decide, and act in real-world industrial environments.</p>
            </div>
            
            <div>
              <h4 className="text-yellow-400 font-semibold text-24 mb-2">2. Cloud + AI Compute Infrastructure</h4>
              <p className="text-gray-300 text-20">Designing elastic compute environments optimized for AI workloads and enterprise cloud systems.</p>
            </div>
            
            <div>
              <h4 className="text-yellow-400 font-semibold text-24 mb-2">3. Engineering with Global Alliances</h4>
              <p className="text-gray-300 text-20 mb-3">TEKCORP is expanding its capabilities through strong alliances with:</p>
              <ul className="text-gray-300 text-18 space-y-1 ml-6">
                <li>• Oracle</li>
                <li>• HP</li>
                <li>• Dell</li>
                <li>• Cisco</li>
                <li>• Emerging AI and robotics players</li>
              </ul>
            </div>
          </div>

          <p className="text-gray-300 text-24 leading-relaxed mt-8">
            This positions TEKCORP as a critical bridge between traditional compute systems and the future of autonomous, AI-driven infrastructure.
          </p>
        </section>

        {/* Section 7 */}
        <section ref={addToRefs} className="mb-20">
          <h2 className="text-48 font-bold mb-6">A brand built to scale into the next decade</h2>
          
          <blockquote className="border-l-4 border-orange-400 pl-6 my-8 italic text-lg">
            "TEKCORP is likely to become a formidable brand as we move into robotics, AI-based cloud elasticity, and next-gen computing"
            <footer className="text-gray-400 mt-2">— Amarinder Singh, Director of TEKCORP</footer>
          </blockquote>

          <p className="text-gray-300 text-24 leading-relaxed mb-6">
            The redesign, repositioning, and digital transformation executed by DreamFox has given TEKCORP the identity and presence required to scale globally, innovate continuously, and lead in emerging AI-centric industries.
          </p>

          <h3 className="text-32 font-semibold mb-6 text-blue-400">TEKCORP today stands as:</h3>
          <ul className="text-gray-300 text-24 leading-relaxed space-y-3 ml-8">
            <li>• A reborn engineering brand</li>
            <li>• A future-first robotics & AI company</li>
            <li>• A strong enterprise identity under VBrand</li>
            <li>• A symbol of modern engineering excellence</li>
          </ul>
        </section>

        {/* Testimonial Section - Updated */}
        <div className="bg-gradient-to-r from-blue-900/30 to-orange-900/30 rounded-3xl p-12 mb-20">
          <div className="flex items-start gap-8">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-orange-500 rounded-2xl flex items-center justify-center">
                <span className="text-2xl font-bold">AMS</span>
              </div>
            </div>
            <div>
              <blockquote className="text-2xl font-light text-gray-200 leading-relaxed mb-6">
                "DreamFox transformed our legacy TEK identity into a modern, future-ready brand that perfectly captures our evolution into AI and robotics while honoring our engineering heritage."
              </blockquote>
              <p className="text-lg text-gray-300">
                Amarinder Singh <span className="text-gray-600">/</span>{" "}
                <span className="text-orange-400">TEKCORP Director</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* More Portfolio Section */}
      <div className="border-t border-gray-800 pt-24 pb-32">
        <div className="px-4 sm:px-8 mb-16">
          <div className="flex items-center gap-6 mb-4">
            <div className="w-1 h-16 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
            <h1 className="text-60 font-semibold">More client Portfolio</h1>
          </div>
          <p className="text-gray-400 text-xl ml-10">
            Explore our other success stories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 !gap-8 xl:!gap-12 mt-16 xl:mt-32 mb-32 px-4 sm:px-6 w-full">
          <CardStyle2
            title="VSYS"
            description="Building Systems for the Future of Talent, Skills & Scaling - A unified platform managing multiple Virtuos ventures with AI-powered operations."
            tag="Technology"
            backgroundImage="https://images.unsplash.com/photo-1531058020387-3be344556be6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
            onCardClick={() => console.log("VSYS clicked")}
            url="/work-portfolio/vsys"
          />
          
          <CardStyle1
            title="PLUMJOB"
            description="Next-generation HRTech and Talent Experience platform designed for the modern technology workforce through Designare™ Experience Design."
            tag="Recruitment"
            backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
            onCardClick={() => console.log("PlumJob clicked")}
            url="/work-portfolio/plumjob"
          />

          <CardStyle2
            title="SWEVEN"
            description="Reimagining Customer Relationships with AI-born Experience Intelligence that goes beyond traditional CRM systems."
            tag="SaaS"
            backgroundImage="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0"
            onCardClick={() => console.log("Sweven clicked")}
            url="/work-portfolio/sweven"
          />
        </div>
      </div>
    </div>
  );
}
