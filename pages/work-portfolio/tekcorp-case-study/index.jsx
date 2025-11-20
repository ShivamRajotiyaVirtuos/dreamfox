"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function TekCorpCaseStudy() {
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
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <div
      ref={heroRef}
      className="min-h-screen bg-black container xl:pb-32 text-white"
    >
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-40 xl:pt-54 pb-32">
        <div className="hero-badge text-xs tracking-wider text-gray-400 mb-8">
          CASE STUDY
        </div>

        <h1 className="hero-title text-5xl md:text-7xl font-bold leading-tight mb-8">
          TEKCORP Case Study: Reinventing a Legacy Tech Brand for the Agentic AI
          & Robotics Era
        </h1>

        <div className="hero-read-time text-sm text-gray-400 mb-12">
          5 MINUTE READ
        </div>

        <div className="hero-divider h-1 w-full bg-gradient-to-r from-blue-500 via-orange-500 to-yellow-500"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section 1 */}
        <section ref={addToRefs} className="mb-20">
          <h2 className="text-40 font-bold mb-6">
            A legacy of TEK, reborn as TEKCORP
          </h2>
          <p className="text-gray-300 text-20 leading-relaxed mb-6">
            The roots of TEKCORP go back to the early 1990s, when the founders
            first introduced a series of pioneering "TEK" brands in the
            computing industry. Over decades, these companies grew through
            traditional computer systems, hardware sales, and IT
            services—building a reputation for reliability and engineering
            discipline.
          </p>
          <p className="text-gray-300 text-20 leading-relaxed mb-6">
            But as AI, robotics, cloud elasticity, and autonomous technologies
            began redefining global enterprise infrastructure, the founders
            recognized the need for a bold reinvention. They wanted to preserve
            the iconic TEK heritage while evolving it for a future built on
            Agentic AI, robotics, and next-generation cloud.
          </p>
          <p className="text-gray-300 text-20 leading-relaxed">
            This transformation gave birth to <strong>TEKCORP 2.0</strong>—a
            future-first, globally brandable name that carries both legacy value
            and visionary impact.
          </p>
        </section>

        {/* Section 2 */}
        <section ref={addToRefs} className="mb-20">
          <h2 className="text-40 font-bold mb-6">
            Brand identity crafted for a modern technology corporation
          </h2>
          <p className="text-gray-300 text-20 leading-relaxed mb-6">
            DreamFox, the digital + design arm of Virtuos Group, was entrusted
            with reshaping the brand.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-purple-400">
            A new identity rooted in TEK but elevated for the future
          </h3>
          <p className="text-gray-300 text-20 leading-relaxed mb-4">
            The vision:
          </p>
          <ul className="text-gray-300 text-20 leading-relaxed space-y-3 ml-8 mb-6">
            <li>• Keep TEK for heritage</li>
            <li>
              • Add CORP to establish authority, scale, and enterprise
              credibility
            </li>
            <li>• Use ALL CAPS for boldness, strength, and modernity</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4 text-blue-400">
            A logo that symbolizes precision, engineering & transformation
          </h3>
          <p className="text-gray-300 text-20 leading-relaxed mb-4">
            DreamFox designed the TEKCORP logo using:
          </p>
          <ul className="text-gray-300 text-20 leading-relaxed space-y-3 ml-8 mb-6">
            <li>
              • <strong>Virtuos Blue</strong> to signal trust, engineering
              depth, and intelligence
            </li>
            <li>
              • <strong>Vibrant Orange</strong> as a counterpoint for
              innovation, energy, and experimentation
            </li>
            <li>
              • A <strong>three-triangle 'T' emblem</strong>, representing:
              <ul className="ml-6 mt-2 space-y-2">
                <li>- Engineering precision</li>
                <li>- Multi-dimensional thinking</li>
                <li>- Transformation through AI and Robotics</li>
              </ul>
            </li>
          </ul>
          <p className="text-gray-300 text-20 leading-relaxed">
            The emblem stands as a powerful mark that captures TEKCORP's
            engineering roots and forward ambition.
          </p>
        </section>

        {/* Section 3 */}
        <section ref={addToRefs} className="mb-20">
          <h2 className="text-40 font-bold mb-6">
            Securing TEKCORP's global digital footprint
          </h2>
          <p className="text-gray-300 text-20 leading-relaxed mb-6">
            To build a brand that could operate globally, DreamFox ensured
            TEKCORP owned a complete digital identity ecosystem:
          </p>
          <ul className="text-gray-300 text-20 leading-relaxed space-y-3 ml-8 mb-6">
            <li>
              • <strong>Tekcorp.com</strong> for enterprise presence
            </li>
            <li>
              • <strong>Tekcorp.ai</strong> to reflect its emerging leadership
              in AI systems
            </li>
            <li>• Unified handles across social channels</li>
            <li>• Consistent brand language across all digital touchpoints</li>
          </ul>
          <p className="text-gray-300 text-20 leading-relaxed">
            In a world where domain authority and name consistency define trust,
            TEKCORP now stands on a solid digital foundation.
          </p>
        </section>

        {/* Section 4 */}
        <section ref={addToRefs} className="mb-20">
          <h2 className="text-40 font-bold mb-6">
            A next-generation DXP experience built with modern tech
          </h2>
          <p className="text-gray-300 text-20 leading-relaxed mb-6">
            DreamFox designed and engineered the TEKCORP digital experience
            with:
          </p>
          <ul className="text-gray-300 text-20 leading-relaxed space-y-3 ml-8 mb-6">
            <li>
              • <strong>React JS</strong> for modular, scalable front-end
              architecture
            </li>
            <li>
              • <strong>TailwindCSS</strong> for a responsive,
              design-token-driven UI system
            </li>
            <li>
              • <strong>GSAP animations</strong> for polished micro-interactions
              and high-end motion design
            </li>
            <li>
              • <strong>AWS cloud stack</strong> for global performance and
              security
            </li>
          </ul>
          <p className="text-gray-300 text-20 leading-relaxed mb-6">
            The outcome is a sleek, high-fidelity digital presence that matches
            the technological sophistication of TEKCORP.
          </p>
          <p className="text-gray-300 text-20 leading-relaxed">
            The UX follows a minimal, system-driven philosophy—clean grids,
            industrial precision, and zero visual noise.
          </p>
        </section>

        {/* Section 5 */}
        <section ref={addToRefs} className="mb-20">
          <h2 className="text-40 font-bold mb-6">
            TEKCORP 2.0: Engineering the future of Robotics, AI & Cloud
            Infrastructure
          </h2>
          <p className="text-gray-300 text-20 leading-relaxed mb-6">
            Under the VBrand portfolio, TEKCORP is now evolving into a
            powerhouse in:
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-3 text-white">
                1. Agentic AI for Robotics
              </h3>
              <p className="text-gray-300 text-20 leading-relaxed">
                Developing autonomous systems that learn, decide, and act in
                real-world industrial environments.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-3 text-white">
                2. Cloud + AI Compute Infrastructure
              </h3>
              <p className="text-gray-300 text-20 leading-relaxed">
                Designing elastic compute environments optimized for AI
                workloads and enterprise cloud systems.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-3 text-white">
                3. Engineering with Global Alliances
              </h3>
              <p className="text-gray-300 text-20 leading-relaxed mb-4">
                TEKCORP is expanding its capabilities through strong alliances
                with:
              </p>
              <ul className="text-gray-300 text-20 leading-relaxed space-y-2 ml-8">
                <li>• Oracle</li>
                <li>• HP</li>
                <li>• Dell</li>
                <li>• Cisco</li>
                <li>• Emerging AI and robotics players</li>
              </ul>
            </div>
          </div>

          <p className="text-gray-300 text-20 leading-relaxed mt-6">
            This positions TEKCORP as a critical bridge between traditional
            compute systems and the future of autonomous, AI-driven
            infrastructure.
          </p>
        </section>

        {/* Section 6 */}
        <section ref={addToRefs} className="mb-20">
          <h2 className="text-40 font-bold mb-6">
            A brand built to scale into the next decade
          </h2>
          <div className="bg-gradient-to-r from-blue-900/30 to-orange-900/30 border border-blue-500/30 rounded-lg p-8 mb-8">
            <p className="text-gray-200 text-2xl leading-relaxed italic">
              "TEKCORP is likely to become a formidable brand as we move into
              robotics, AI-based cloud elasticity, and next-gen computing,"
            </p>
            <p className="text-gray-400 text-lg mt-4">
              — Amarinder Singh, Director of TEKCORP
            </p>
          </div>
          <p className="text-gray-300 text-20 leading-relaxed">
            The redesign, repositioning, and digital transformation executed by
            DreamFox has given TEKCORP the identity and presence required to
            scale globally, innovate continuously, and lead in emerging
            AI-centric industries.
          </p>
        </section>

        {/* Final Section */}
        <section ref={addToRefs} className="mb-20">
          <h2 className="text-40 font-bold mb-6">TEKCORP today stands as:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 border border-gray-600 rounded-lg p-6">
              <p className="text-gray-200 text-lg">
                A reborn engineering brand
              </p>
            </div>
            <div className="bg-white/10 border border-gray-600 rounded-lg p-6">
              <p className="text-gray-200 text-lg">
                A future-first robotics & AI company
              </p>
            </div>
            <div className="bg-white/10 border border-gray-600 rounded-lg p-6">
              <p className="text-gray-200 text-lg">
                A strong enterprise identity under VBrand
              </p>
            </div>
            <div className="bg-white/10 border border-gray-600 rounded-lg p-6">
              <p className="text-gray-200 text-lg">
                A symbol of modern engineering excellence
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
