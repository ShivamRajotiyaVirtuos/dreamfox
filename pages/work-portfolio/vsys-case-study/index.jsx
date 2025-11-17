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
    // Hero animation
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

      // Scroll-triggered animations for sections
      sectionsRef.current.forEach((section, index) => {
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

      // Animate quote
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

      // Animate image
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
    <div ref={heroRef} className="min-h-screen bg-black container xl:pb-32 text-white">
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-40 xl:pt-54 pb-32 ">
        <div className="hero-badge text-xs tracking-wider text-gray-400 mb-8">
          CASE STUDY
        </div>

        <h1 className="hero-title text-80 font-bold leading-tight mb-8">
          VSYS Case Study: Building Systems for the Future of Talent, Skills & Scaling
        </h1>

        <div className="hero-read-time text-sm text-gray-400 mb-12">
          5 MINUTE READ
        </div>

        <div className="hero-divider h-1 w-full bg-gradient-to-r from-pink-500 via-purple-500 via-yellow-500 to-green-500"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section 1 */}
        <section ref={addToRefs} className="mb-20">
          <h2 className="text-48 font-bold mb-6">
            A vision for systems-driven growth
          </h2>
          <p className="text-gray-300 text-24 leading-relaxed">
            Virtuos Group—an 18-year-old Digital Transformation powerhouse—has been expanding globally with new ventures, new brands, and new business models. As the portfolio matured, Virtuos recognized a critical need: a unified platform to manage Talent, Skills, Processes, and Scaling for its rapidly growing ecosystem.
          </p>
          <p className="text-gray-300 text-24 leading-relaxed mt-6">
            This required not just another HR or operational tool—but a new kind of system, one that could power ventures like Virtuos Digital (vdc.com), VBrand (vbrand.com), DreamFox, Tekcorp, Sweven, and upcoming AI-born startups. From this need, VSYS was born.
          </p>
          <p className="text-gray-300 text-24 leading-relaxed mt-6">
            VSYS stands for Virtuos Systems—the backbone that ensures all Virtuos ventures accelerate with discipline, scale, and clarity.
          </p>
        </section>

        {/* Section 2 */}
        <section ref={addToRefs} className="mb-20">
          <h2 className="text-48 font-bold mb-6">A unique partnership between DreamFox & Virtuos Group</h2>
          <p className="text-gray-300 text-24 leading-relaxed">
            DreamFox, Virtuos's digital + AI + creative agency, was tasked with creating a system brand that could live at the heart of a multi-venture enterprise. The DreamFox team chose the name VSYS because it captured the essence of what Virtuos needed most: A system to power all future systems.
          </p>
        </section>

        {/* Section 3 */}
        <section ref={addToRefs} className="mb-20">
          <h2 className="text-48 font-bold mb-6">How the brand was born</h2>
          <p className="text-gray-300 text-24 leading-relaxed mb-6">
            DreamFox led the end-to-end ideation, including:
          </p>
          <ul className="text-gray-300 text-24 leading-relaxed space-y-3 ml-8">
            <li>• Brand positioning</li>
            <li>• Naming strategy</li>
            <li>• Visual identity</li>
            <li>• Digital experience (DXP) design</li>
            <li>• Technology blueprint</li>
            <li>• Front-end and back-end solutioning</li>
          </ul>
          <p className="text-gray-300 text-24 leading-relaxed mt-6">
            The result: VSYS became more than a brand—it became a platform philosophy.
          </p>
        </section>

        {/* Section 4 */}
        <section ref={addToRefs} className="mb-20">
          <h2 className="text-48 font-bold mb-6">Crafting the VSYS identity</h2>
          <h3 className="text-32 font-semibold mb-4 text-purple-400">A brand woven from Virtuos DNA</h3>
          <p className="text-gray-300 text-24 leading-relaxed mb-6">
            DreamFox retained the core Virtuos emblem, symbolizing heritage, integrity, and excellence. The "V" and "Sys" were woven together to create a seamless four-letter identity—strong, modern, and system-ready.
          </p>
          
          <h3 className="text-32 font-semibold mb-4 text-blue-400">The Power of Virtuos Blue</h3>
          <p className="text-gray-300 text-24 leading-relaxed mb-6">
            The brand adopts the iconic Virtuos Blue, representing trust, transparency, stability, and intelligence. This color defines the VSYS character: grounded, reliable, and future-forward.
          </p>

          <h3 className="text-32 font-semibold mb-4 text-green-400">A four-letter ultra-premium domain</h3>
          <p className="text-gray-300 text-24 leading-relaxed">
            VSYS.com is a rare four-letter global domain—valued between US$200,000 and US$1 million on global marketplaces. Securing VSYS.com established the brand as a serious global contender from day one.
          </p>
        </section>

        {/* Section 5 */}
        <section ref={addToRefs} className="mb-20">
          <h2 className="text-48 font-bold mb-6">Designing VSYS: A DXP-first digital experience</h2>
          <p className="text-gray-300 text-24 leading-relaxed mb-6">
            DreamFox's DXP and front-end teams built VSYS.com using:
          </p>
          <ul className="text-gray-300 text-24 leading-relaxed space-y-3 ml-8 mb-6">
            <li>• TailwindCSS for a scalable design system</li>
            <li>• React JS for component-driven architecture</li>
            <li>• AWS stack for performance, security, and cloud-native scalability</li>
          </ul>
          <p className="text-gray-300 text-24 leading-relaxed mb-6">
            Every page, workflow, and component was designed with Speed. Structure. Scale. — the three pillars of VSYS.
          </p>
          <p className="text-gray-300 text-24 leading-relaxed">
            The UX follows a minimal, system-driven philosophy—clean grids, industrial precision, and zero visual noise.
          </p>
        </section>

        {/* Section 6 */}
        <section ref={addToRefs} className="mb-20">
          <h2 className="text-48 font-bold mb-6">Built with Agile. Delivered with Mastery.</h2>
          <p className="text-gray-300 text-24 leading-relaxed mb-6">
            DreamFox used a full Agile development model, iterating weekly on:
          </p>
          <ul className="text-gray-300 text-24 leading-relaxed space-y-3 ml-8 mb-6">
            <li>• Information architecture</li>
            <li>• UI/UX wireframes</li>
            <li>• Component library</li>
            <li>• Micro-interactions</li>
            <li>• Content experience</li>
            <li>• Brand extensions for sub-ventures</li>
          </ul>
          <p className="text-gray-300 text-24 leading-relaxed">
            The result is a platform that grows as Virtuos grows.
          </p>
        </section>

        {/* Section 7 */}
        <section ref={addToRefs} className="mb-20">
          <h2 className="text-48 font-bold mb-6">A platform managing multiple Virtuos ventures</h2>
          <p className="text-gray-300 text-24 leading-relaxed mb-6">
            VSYS today powers and organizes crucial portfolio brands:
          </p>
          <div className="space-y-4 ml-8">
            <div>
              <h4 className="text-yellow-400 font-semibold text-20">Blitzscale.ai</h4>
              <p className="text-gray-300 text-18">Future of hyper-growth scaling powered by AI.</p>
            </div>
            <div>
              <h4 className="text-yellow-400 font-semibold text-20">SkillNow.com</h4>
              <p className="text-gray-300 text-18">Next-generation Skills & Learning Experience platform.</p>
            </div>
            <div>
              <h4 className="text-yellow-400 font-semibold text-20">Talentare</h4>
              <p className="text-gray-300 text-18">A modern take on Talent Acquisition, Retention, and Efficiency.</p>
            </div>
            <div>
              <h4 className="text-yellow-400 font-semibold text-20">Crosswalk</h4>
              <p className="text-gray-300 text-18">Process architecture & digital workflow intelligence.</p>
            </div>
            <div>
              <h4 className="text-yellow-400 font-semibold text-20">PlumJob</h4>
              <p className="text-gray-300 text-18">Next-generation Talent Experience platform.</p>
            </div>
          </div>
          <p className="text-gray-300 text-24 leading-relaxed mt-6">
            All these ventures sit under the VSYS umbrella, each becoming a "system" within the larger Virtuos ecosystem.
          </p>
        </section>

        {/* Section 8 */}
        <section ref={addToRefs} className="mb-20">
          <h2 className="text-48 font-bold mb-6">A system designed not to compete, but to connect</h2>
          <p className="text-gray-300 text-24 leading-relaxed mb-6">
            VSYS is intentionally built to not overlap with Virtuos Digital, DreamFox, Tekcorp, Sweven, or other Virtuos businesses. Instead, it forms the core infrastructure layer on which these ventures grow.
          </p>
          <p className="text-gray-300 text-24 leading-relaxed">
            VSYS enables Virtuos Group to scale new companies without losing discipline, structure, or velocity.
          </p>
        </section>

        {/* Section 9 */}
        <section ref={addToRefs} className="mb-20">
          <h2 className="text-48 font-bold mb-6">AI-driven business dynamics</h2>
          <p className="text-gray-300 text-24 leading-relaxed mb-6">
            VSYS is evolving into an AI-powered backbone for Virtuos ventures. It leverages:
          </p>
          <ul className="text-gray-300 text-24 leading-relaxed space-y-3 ml-8 mb-6">
            <li>• Intelligent talent scoring</li>
            <li>• Skill graph mapping</li>
            <li>• Process automation</li>
            <li>• Predictive workforce modeling</li>
            <li>• AI-driven operational insights</li>
          </ul>
          <p className="text-gray-300 text-24 leading-relaxed">
            VSYS becomes the central intelligence hub, transforming how Virtuos incubates, develops, scales, and governs new businesses.
          </p>
        </section>

        {/* Final Section */}
        <section ref={addToRefs} className="mb-20">
          <h2 className="text-48 font-bold mb-6">A system for a tomorrow-ready enterprise</h2>
          <p className="text-gray-300 text-24 leading-relaxed mb-6">
            VSYS isn't just a platform—it is a strategic advantage for Virtuos Group. A way to accelerate new brands, structure operations, and scale globally with clarity and intelligence.
          </p>
          <p className="text-gray-300 text-24 leading-relaxed">
            Powered by DreamFox's creativity, Virtuos's vision, and a strong foundation in AI-driven digital transformation—VSYS is shaping the future systems of Virtuos.
          </p>
        </section>
      </div>
    </div>
  );
}
