"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SwevenCaseStudy() {
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
          Sweven Case Study: Building a Vision-Driven Salesforce Consulting
          Brand for the Future
        </h1>

        <div className="hero-read-time text-sm text-gray-400 mb-12">
          5 MINUTE READ
        </div>

        <div className="hero-divider h-1 w-full bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section 1 */}
        <section ref={addToRefs} className="mb-20">
          <h2 className="text-40 font-bold mb-6">
            A brand born from vision, purpose, and the power of dreams
          </h2>
          <p className="text-gray-300 text-20 leading-relaxed mb-6">
            Sweven is a newly incorporated company under the VBrand Portfolio,
            headquartered in Silicon Valley, San Francisco, with a strong India
            Delivery Center. The founders envisioned building a next-generation
            Salesforce Consulting & CRM Mastermind practice—one that could stand
            shoulder-to-shoulder with global consulting leaders.
          </p>
          <p className="text-gray-300 text-20 leading-relaxed mb-6">
            Their aspiration required a brand name that resonated with:
          </p>
          <ul className="text-gray-300 text-20 leading-relaxed space-y-3 ml-8 mb-6">
            <li>• Salesforce's ecosystem</li>
            <li>• Innovation and transformation</li>
            <li>• A sense of aspiration and vision</li>
            <li>• The community energy of DreamForce</li>
          </ul>
          <p className="text-gray-300 text-20 leading-relaxed">
            DreamFox, the digital, brand, and AI acceleration agency of Virtuos,
            was tasked with crafting this identity from the ground up.
          </p>
        </section>

        {/* Section 2 */}
        <section ref={addToRefs} className="mb-20">
          <h2 className="text-40 font-bold mb-6">
            Discovering a name with meaning: Sweven
          </h2>
          <p className="text-gray-300 text-20 leading-relaxed mb-6">
            During the brand naming process, dozens of names were explored. But
            one stood out—<strong>Sweven</strong>.
          </p>
          <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-lg p-8 mb-8">
            <p className="text-gray-200 text-2xl leading-relaxed text-center">
              A pure English dictionary word meaning:
            </p>
            <p className="text-purple-300 text-3xl font-bold text-center mt-4">
              "Dream of a vision."
            </p>
          </div>
          <p className="text-gray-300 text-20 leading-relaxed mb-4">
            This meaning aligned beautifully with:
          </p>
          <ul className="text-gray-300 text-20 leading-relaxed space-y-3 ml-8 mb-6">
            <li>• Salesforce's DreamForce energy</li>
            <li>• The founder's vision-driven consulting approach</li>
            <li>
              • The desire to create a boutique yet powerful CRM Mastermind
              brand
            </li>
          </ul>
          <p className="text-gray-300 text-20 leading-relaxed">
            Sweven instantly resonated with the founders, marking the beginning
            of a brand story rooted in imagination, transformation, and
            ambition.
          </p>
        </section>

        {/* Section 3 */}
        <section ref={addToRefs} className="mb-20">
          <h2 className="text-40 font-bold mb-6">
            Crafting the visual identity: an arrow of futuristic vision
          </h2>
          <p className="text-gray-300 text-20 leading-relaxed mb-6">
            DreamFox designed a bold and modern identity for Sweven.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-purple-400">
            The Arrow Concept
          </h3>
          <p className="text-gray-300 text-20 leading-relaxed mb-4">
            Beneath the "W" of SWEVEN, an arrow points forward—representing:
          </p>
          <ul className="text-gray-300 text-20 leading-relaxed space-y-3 ml-8 mb-6">
            <li>• Futuristic vision</li>
            <li>• Forward motion</li>
            <li>• Precision</li>
            <li>• CRM mastery</li>
            <li>• The ambition of Sweveners (its people)</li>
          </ul>
          <p className="text-gray-300 text-20 leading-relaxed mb-6">
            This arrow became the symbol of momentum—an identity that blends
            aspiration with consulting excellence.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-pink-400">
            The Colour System
          </h3>
          <p className="text-gray-300 text-20 leading-relaxed">
            Sweven's colors were designed to be bright, gradient-driven, and
            modern—reflecting energy, confidence, and technology-forward
            thinking.
          </p>
        </section>

        {/* Section 4 */}
        <section ref={addToRefs} className="mb-20">
          <h2 className="text-40 font-bold mb-6">
            A dictionary word with global brand value
          </h2>
          <p className="text-gray-300 text-20 leading-relaxed mb-6">
            As a true English dictionary word, "Sweven" carries immense global
            brand equity.
          </p>
          <p className="text-gray-300 text-20 leading-relaxed mb-4">
            DreamFox helped secure:
          </p>
          <ul className="text-gray-300 text-20 leading-relaxed space-y-3 ml-8 mb-6">
            <li>
              • <strong>Sweven.com</strong> (primary identity)
            </li>
            <li>
              • <strong>Sweven.ai</strong> (AI consulting extension)
            </li>
            <li>• Trademark protection across multiple regions</li>
          </ul>
          <p className="text-gray-300 text-20 leading-relaxed">
            The estimated future brand valuation for such a rare dictionary .com
            domain ranges from <strong>US$500,000 to US$2 million</strong>,
            making Sweven not just a business—but a strategic asset.
          </p>
        </section>

        {/* Section 5 */}
        <section ref={addToRefs} className="mb-20">
          <h2 className="text-40 font-bold mb-6">
            Introducing Sweveners — The Dreamers & CRM Masterminds
          </h2>
          <p className="text-gray-300 text-20 leading-relaxed mb-6">
            DreamFox coined the unique internal identity:{" "}
            <strong>"Sweveners."</strong>
          </p>
          <p className="text-gray-300 text-20 leading-relaxed mb-4">
            These are:
          </p>
          <ul className="text-gray-300 text-20 leading-relaxed space-y-3 ml-8 mb-6">
            <li>• The dreamers</li>
            <li>• The doers</li>
            <li>• The CRM experts</li>
            <li>
              • And the CRM Masterminds behind the new consulting powerhouse
            </li>
          </ul>
          <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-lg p-8 mb-8">
            <p className="text-gray-300 text-20 text-center leading-relaxed mb-4">
              DreamFox also developed Sweven's brand positioning and signature
              tagline:
            </p>
            <p className="text-purple-300 text-40 font-bold text-center">
              CRM Mastermind.
            </p>
          </div>
          <p className="text-gray-300 text-20 leading-relaxed">
            This tagline differentiated Sweven in the crowded Salesforce
            ecosystem, positioning it as a high-intensity, deeply specialized
            consulting brand.
          </p>
        </section>

        {/* Section 6 */}
        <section ref={addToRefs} className="mb-20">
          <h2 className="text-40 font-bold mb-6">
            Designing the Sweven Digital Experience
          </h2>
          <p className="text-gray-300 text-20 leading-relaxed mb-6">
            DreamFox designed Sweven's web experience to reflect:
          </p>
          <ul className="text-gray-300 text-20 leading-relaxed space-y-3 ml-8 mb-6">
            <li>• Boutique Salesforce consulting</li>
            <li>• Technical expertise</li>
            <li>• Thought leadership</li>
            <li>• Global delivery capability</li>
            <li>• AI-driven CRM services</li>
          </ul>
          <p className="text-gray-300 text-20 leading-relaxed mb-6">
            Every page, template, and interaction was built to reflect Sweven's
            forward-thinking message.
          </p>
          <p className="text-gray-300 text-20 leading-relaxed">
            The site blends minimalism, vivid color gradients, animation, and
            structured clarity—enhancing trust and elevating the brand
            narrative.
          </p>
        </section>

        {/* Section 7 */}
        <section ref={addToRefs} className="mb-20">
          <h2 className="text-40 font-bold mb-6">
            A brand built for global scale
          </h2>
          <p className="text-gray-300 text-20 leading-relaxed mb-6">
            Sweven is now on the path to becoming a globally recognized CRM
            consulting brand. Powered by DreamFox's branding, identity, and
            digital execution, Sweven is expanding across the US, India, Middle
            East, and APAC.
          </p>
          <p className="text-gray-300 text-20 leading-relaxed mb-6">
            As Sweven grows, DreamFox continues to partner closely with:
          </p>
          <ul className="text-gray-300 text-20 leading-relaxed space-y-3 ml-8 mb-6">
            <li>
              • <strong>VBrand</strong> for strategy
            </li>
            <li>
              • <strong>VSYS</strong> for scaling talent & skills
            </li>
            <li>
              • <strong>Virtuos Group</strong> for global reach
            </li>
          </ul>
          <p className="text-gray-300 text-20 leading-relaxed">
            The collaboration ensures the brand will scale with strength as it
            expands Salesforce and AI consulting practices worldwide.
          </p>
        </section>

        {/* Final Section */}
        <section ref={addToRefs} className="mb-20">
          <h2 className="text-40 font-bold mb-6">Sweven stands today as:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/10 border border-gray-600 rounded-lg p-6">
              <p className="text-gray-200 text-lg">
                A visionary Salesforce consulting brand
              </p>
            </div>
            <div className="bg-white/10 border border-gray-600 rounded-lg p-6">
              <p className="text-gray-200 text-lg">
                A premium dictionary-word asset
              </p>
            </div>
            <div className="bg-white/10 border border-gray-600 rounded-lg p-6">
              <p className="text-gray-200 text-lg">
                A globally scalable identity
              </p>
            </div>
            <div className="bg-white/10 border border-gray-600 rounded-lg p-6">
              <p className="text-gray-200 text-lg">A team of CRM Masterminds</p>
            </div>
          </div>
          <div className="bg-white/10 border border-gray-600 rounded-lg p-8">
            <p className="text-gray-200 text-20 leading-relaxed text-center">
              A symbol of dream-led excellence
            </p>
          </div>
          <p className="text-gray-300 text-20 leading-relaxed mt-8">
            DreamFox is proud to be part of Sweven's origin story—bringing a
            dream of a vision into a real, impactful, and globally resonant
            brand.
          </p>
        </section>
      </div>
    </div>
  );
}
