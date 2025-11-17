"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

export default function VDCCaseStudy() {
  const heroRef = useRef(null);
  const sectionsRef = useRef([]);

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

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

      sectionsRef.current.forEach((section, index) => {
        gsap.from(section, {
          opacity: 0,
          y: 50,
          duration: 0.8,
          delay: index * 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef} className="min-h-screen bg-black container text-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-40 xl:pt-54 pb-32">
        <div className="hero-badge text-xs tracking-wider text-gray-400 mb-8">
          CASE STUDY
        </div>

        <h1 className="hero-title text-80 font-bold leading-tight mb-8">
          VDC.com Case Study: Transforming Virtuos Digital into a Global Flagship Consulting Brand
        </h1>

        <div className="hero-read-time text-sm text-gray-400 mb-12">
          5 MINUTE READ
        </div>

        <div className="hero-divider h-1 w-full bg-gradient-to-r from-pink-500 via-purple-500 via-yellow-500 to-green-500"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section 1 */}
        <section ref={addToRefs} className="mb-20">
          <h2 className="text-48 font-bold mb-6">
            A bold vision to elevate consulting under the Virtuos umbrella
          </h2>
          <p className="text-gray-300 text-24 leading-relaxed">
            In 2023, Virtuos set out to realign and amplify its consulting capabilities. Inspired by how global consulting giants like Deloitte created Deloitte Digital, Virtuos wanted to carve out a flagship consulting powerhouse under its brand ecosystem.
          </p>
          <p className="text-gray-300 text-24 leading-relaxed mt-6">
            The idea: Create a world-class consultancy—one that integrates CRM, CX, and digital transformation—with a modern identity, global positioning, and premium digital presence.
          </p>
          <p className="text-gray-300 text-24 leading-relaxed mt-6">
            This vision led to the birth of Virtuos Digital Consultancy, now widely known as VDC.
          </p>
          <p className="text-gray-300 text-24 leading-relaxed mt-6">
            To execute this transformation, Virtuos entrusted DreamFox with one of the most strategic mandates: Branding. Identity. Naming. Digital Experience. And global domain acquisition.
          </p>
        </section>

        {/* Section 2 */}
        <section ref={addToRefs} className="mb-20">
          <h2 className="text-48 font-bold mb-6">1) Branding Nirvana — creating VDC as a global consulting identity</h2>
          <p className="text-gray-300 text-24 leading-relaxed mb-6">
            The challenge was unique: How do you create a standalone consulting brand without diluting the master brand Virtuos, which itself is rooted in innovation, product development, and venture building?
          </p>
          <p className="text-gray-300 text-24 leading-relaxed mb-6">
            DreamFox architected a brand strategy that allowed both to coexist harmoniously.
          </p>

          <h3 className="text-32 font-semibold mb-4 text-blue-400">Why VDC?</h3>
          <p className="text-gray-300 text-24 leading-relaxed mb-4">
            The founders envisioned VDC as a sharp, futuristic, enterprise-friendly acronym that represented:
          </p>
          <ul className="text-gray-300 text-24 leading-relaxed space-y-3 ml-8">
            <li>• Virtuos Digital Consultancy</li>
            <li>• The consulting arm of Virtuos</li>
            <li>• A scalable brand identity for global expansion</li>
            <li>• A crisp, memorable, three-letter corporate signature</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section ref={addToRefs} className="mb-20">
          <h2 className="text-48 font-bold mb-6">Securing VDC.com — a brand-defining milestone</h2>
          <p className="text-gray-300 text-24 leading-relaxed mb-6">
            VDC.co.in and virtuosdigital.com did not resonate globally. VDC needed a world-class identity, and that required a world-class domain.
          </p>
          <p className="text-gray-300 text-24 leading-relaxed mb-6">
            DreamFox spent months navigating premium domain negotiations and finally secured:
          </p>
          
          <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-2xl p-8 mb-6">
            <h4 className="text-28 font-bold text-blue-400 mb-4">VDC.com — a rare three-letter dot-com domain</h4>
            <p className="text-gray-300 text-20">
              Equivalent domains are valued between US$500k to US$2 million, placing VDC alongside elite global brands.
            </p>
          </div>

          <p className="text-gray-300 text-24 leading-relaxed mb-6">Securing VDC.com gave Virtuos Digital:</p>
          <ul className="text-gray-300 text-24 leading-relaxed space-y-3 ml-8">
            <li>• Immediate global credibility</li>
            <li>• A premium consulting identity</li>
            <li>• A scalable brand asset</li>
            <li>• Strong IP protection</li>
          </ul>

          <p className="text-gray-300 text-24 leading-relaxed mt-6">
            The value of this acquisition cannot be overstated—VDC.com instantly positioned Virtuos Digital as a serious global contender.
          </p>
        </section>

        {/* Section 4 */}
        <section ref={addToRefs} className="mb-20">
          <h2 className="text-48 font-bold mb-6">2) Digital Presence — designing the VDC.com DXP Experience</h2>
          <p className="text-gray-300 text-24 leading-relaxed mb-6">
            DreamFox designed and built VDC.com as a DXP-grade digital experience, emphasizing:
          </p>
          <ul className="text-gray-300 text-24 leading-relaxed space-y-3 ml-8 mb-6">
            <li>• Global consulting aesthetics</li>
            <li>• Minimalist layouts</li>
            <li>• Modern gradients</li>
            <li>• Enterprise storytelling</li>
            <li>• Motion-designed sections</li>
            <li>• Solutions-driven navigation</li>
          </ul>

          <p className="text-gray-300 text-24 leading-relaxed mb-8">
            The website reflects VDC's transformation from an implementation partner into a full-stack consulting powerhouse.
          </p>

          <h3 className="text-32 font-semibold mb-4 text-blue-400">Strategic Technology Partnerships Featured</h3>
          <p className="text-gray-300 text-24 leading-relaxed mb-4">
            The digital experience highlights VDC's partnerships with:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 ml-8">
            <div className="bg-gray-800/50 rounded-lg p-4 text-center">
              <p className="text-blue-400 font-semibold">Asana</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-4 text-center">
              <p className="text-blue-400 font-semibold">Smartsheet</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-4 text-center">
              <p className="text-blue-400 font-semibold">Oracle</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-4 text-center">
              <p className="text-blue-400 font-semibold">Microsoft</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-4 text-center">
              <p className="text-blue-400 font-semibold">Agiloft</p>
            </div>
          </div>

          <p className="text-gray-300 text-24 leading-relaxed mt-6">
            These alliances signal VDC's capability to deliver cross-cloud transformation with depth and authority.
          </p>
        </section>

        {/* Section 5 */}
        <section ref={addToRefs} className="mb-20">
          <h2 className="text-48 font-bold mb-6">3) Establishing VDC as the flagship company of Virtuos</h2>
          <p className="text-gray-300 text-24 leading-relaxed mb-6">
            VDC is now recognized as Virtuos Digital, the flagship consulting entity of the Virtuos Group. DreamFox helped position VDC as:
          </p>
          
          <div className="bg-gradient-to-r from-blue-900/20 to-blue-900/20 rounded-2xl p-8 mb-8">
            <h4 className="text-24 font-semibold text-blue-400 mb-4">A premium consulting brand serving global enterprises in:</h4>
            <ul className="text-gray-300 text-20 leading-relaxed space-y-2">
              <li>• CRM Consulting & Mastery</li>
              <li>• CX Transformation</li>
              <li>• CLM Consulting</li>
              <li>• AI-driven Digital Transformation</li>
              <li>• Work Management & Automation</li>
              <li>• EX (Employee Experience) Transformation</li>
              <li>• Integrated Digital Experience (XX) Strategy</li>
            </ul>
          </div>
        </section>

        {/* Section 6 */}
        <section ref={addToRefs} className="mb-20">
          <h2 className="text-48 font-bold mb-6">The Three Experience Fusion Approach</h2>
          <p className="text-gray-300 text-24 leading-relaxed mb-6">
            DreamFox crafted messaging around VDC's unique value proposition: The Fusion of Three Experiences:
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-gray-500/20 to-gray-500/20 rounded-xl p-6 text-center">
              <h4 className="text-24 font-bold text-gray-400 mb-3">CX</h4>
              <p className="text-gray-300">Customer Experience</p>
            </div>
            <div className="bg-gradient-to-br from-gray-500/20 to-gray-500/20 rounded-xl p-6 text-center">
              <h4 className="text-24 font-bold text-gray-400 mb-3">EX</h4>
              <p className="text-gray-300">Employee Experience</p>
            </div>
            <div className="bg-gradient-to-br from-gray-500/20 to-gray-500/20 rounded-xl p-6 text-center">
              <h4 className="text-24 font-bold text-gray-400 mb-3">XX</h4>
              <p className="text-gray-300">The Experience Mix<br/>(Technology + Workflow + Intelligence)</p>
            </div>
          </div>

          <p className="text-gray-300 text-24 leading-relaxed">
            This proprietary model distinguishes VDC from traditional consulting firms that focus only on implementation or technology. VDC delivers experience-led consulting, powered by CRM, AI, and digital transformation.
          </p>
        </section>

        {/* Final Section */}
        <section ref={addToRefs} className="mb-20">
          <h2 className="text-48 font-bold mb-6">Virtuos Digital today stands as:</h2>
          <ul className="text-gray-300 text-24 leading-relaxed space-y-3 ml-8 mb-8">
            <li>• A world-class consulting brand</li>
            <li>• A VBrand portfolio company</li>
            <li>• A global identity with VDC.com</li>
            <li>• A leader in CRM, CX, CLM, and Work Management</li>
            <li>• A digital transformation partner trusted by enterprises worldwide</li>
            <li>• A DreamFox-designed, DreamFox-powered success story</li>
          </ul>
        </section>

        {/* Testimonial Section */}
        <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-3xl p-12 mb-20">
          <div className="flex items-start gap-8">
            {/* <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                <span className="text-2xl font-bold">VDC</span>
              </div>
            </div> */}
            <div>
              <blockquote className="text-30 italic font-light text-gray-200 leading-relaxed mb-6">
                "DreamFox transformed our consulting vision into a globally recognized brand. From securing VDC.com to building our digital experience, they created the foundation for our worldwide expansion."
              </blockquote>
              <p className="text-lg text-gray-300">
                VDC Leadership <span className="text-gray-600">/</span>{" "}
                <span className="text-blue-400">Virtuos Digital Consultancy</span>
              </p>
            </div>
          </div>
        </div>

        {/* Summary Section */}
        <section ref={addToRefs} className="mb-20">
          <h2 className="text-48 font-bold mb-6">A consulting powerhouse shaped by DreamFox</h2>
          <p className="text-gray-300 text-24 leading-relaxed mb-6">
            DreamFox was instrumental in:
          </p>
          <ul className="text-gray-300 text-24 leading-relaxed space-y-3 ml-8 mb-6">
            <li>• Naming & identity creation</li>
            <li>• Narrative development</li>
            <li>• VDC's brand architecture</li>
            <li>• Digital experience design (DXP)</li>
            <li>• High-impact enterprise messaging</li>
            <li>• VDC.com development</li>
            <li>• Domain acquisition strategy</li>
          </ul>
          
          <p className="text-gray-300 text-24 leading-relaxed font-medium">
            The result: A consulting brand poised to scale across the globe. VDC.com is not just a website—it is the future face of Virtuos's consulting business.
          </p>
        </section>
      </div>

      {/* More Portfolio Section */}
    
    </div>
  );
}