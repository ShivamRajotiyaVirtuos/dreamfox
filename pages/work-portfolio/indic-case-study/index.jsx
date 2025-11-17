"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function IndicCaseStudy() {
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
    <div ref={heroRef} className="min-h-screen bg-black container xl:pb-32 text-white">
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-40 xl:pt-54 pb-32">
        <div className="hero-badge text-xs tracking-wider text-gray-400 mb-8">
          CASE STUDY
        </div>

        <h1 className="hero-title text-5xl md:text-7xl font-bold leading-tight mb-8">
          INDIC Case Study: A Brand Born From India's Renewed Identity—Built by DreamFox
        </h1>

        <div className="hero-read-time text-sm text-gray-400 mb-12">
          5 MINUTE READ
        </div>

        <div className="hero-divider h-1 w-full bg-gradient-to-r from-orange-500 via-white to-green-500"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section 1 */}
        <section ref={addToRefs} className="mb-20">
          <h2 className="text-4xl font-bold mb-6">
            A brand inspired by India's rise on the global stage
          </h2>
          <p className="text-gray-300 text-xl leading-relaxed mb-6">
            INDIC is a brand born in a transformative era—an era shaped by the visionary leadership of Honorable Prime Minister Shri Narendra Modi ji, who ignited the global Make in India movement. Pre-COVID, this movement inspired millions of Indians to innovate, build, and export to the world. Post-COVID, India's leadership in managing the crisis and supplying vaccines globally positioned the country as a symbol of strength, resilience, and responsibility.
          </p>
          <p className="text-gray-300 text-xl leading-relaxed mb-6">
            This resurgence of national pride became the perfect foundation for a new brand that would represent India's legacy, its culture, its craft, and its global potential.
          </p>
          <p className="text-gray-300 text-xl leading-relaxed">
            Through its acquisition of Yippee Media, DreamFox inherited more than a company—it inherited a bold idea: Create a brand that captures the essence of India and exports it to the world. That brand became <strong>INDIC</strong>.
          </p>
        </section>

        {/* Section 2 */}
        <section ref={addToRefs} className="mb-20">
          <h2 className="text-4xl font-bold mb-6">Creating a name rooted in India's identity</h2>
          <p className="text-gray-300 text-xl leading-relaxed mb-6">
            Yippee Media spent considerable time exploring names connected to India's cultural and economic renaissance. The founders wanted something:
          </p>
          <ul className="text-gray-300 text-xl leading-relaxed space-y-3 ml-8 mb-6">
            <li>• Short</li>
            <li>• Powerful</li>
            <li>• Global</li>
            <li>• Rooted in India</li>
            <li>• And brandable across multiple digital experience ventures</li>
          </ul>
          <div className="bg-gradient-to-r from-purple-900/30 via-purple/10 to-pink-900/30 border border-purple-500/30 rounded-lg p-8 mb-6">
            <p className="text-gray-200 text-center text-xl leading-relaxed mb-4">
              The insight was simple yet profound: <strong>"INDI"</strong> must remain at the core of the identity.
            </p>
            <p className="text-purple-300 text-center text-2xl font-bold">
              INDIC = India's culture, knowledge, heritage, and future.
            </p>
          </div>
          <p className="text-gray-300 text-xl leading-relaxed mb-6">
            After exploring hundreds of combinations, the word INDIC emerged as the perfect blend. It is more than a name—it is a reflection of India's civilizational depth and global aspirations.
          </p>
          <p className="text-gray-300 text-xl leading-relaxed">
            DreamFox immediately recognized its potential.
          </p>
        </section>

        {/* Section 3 */}
        <section ref={addToRefs} className="mb-20">
          <h2 className="text-4xl font-bold mb-6">Securing a once-in-a-generation brand asset</h2>
          <p className="text-gray-300 text-xl leading-relaxed mb-6">
            The biggest challenge wasn't naming—it was owning the name online. DreamFox worked relentlessly to secure:
          </p>
          <ul className="text-gray-300 text-xl leading-relaxed space-y-3 ml-8 mb-6">
            <li>• <strong>INDIC.com</strong> – a multi-million-dollar premium global domain</li>
            <li>• <strong>INDIC.ai</strong> – representing technological progress and India's AI leadership</li>
            <li>• Trademark rights and brand protection</li>
            <li>• Global social media handles and digital identity assets</li>
          </ul>
          <p className="text-gray-300 text-xl leading-relaxed mb-6">
            Owning INDIC.com alone places the brand in the league of global digital giants—rare, powerful, and timeless.
          </p>
          <p className="text-gray-300 text-xl leading-relaxed">
            Today, INDIC stands as a legacy-caliber brand asset on par with modern digital-first global empires.
          </p>
        </section>

        {/* Section 4 */}
        <section ref={addToRefs} className="mb-20">
          <h2 className="text-4xl font-bold mb-6">What made INDIC so powerful and popular?</h2>
          <p className="text-gray-300 text-xl leading-relaxed mb-6">
            Several key factors:
          </p>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-3 text-blue-400">1. Cultural resonance</h3>
              <p className="text-gray-300 text-xl leading-relaxed">
                The word INDIC connects deeply with India's identity—language, civilization, philosophy, and craft.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-3 text-blue-400">2. Global appeal</h3>
              <p className="text-gray-300 text-xl leading-relaxed">
                Short. Memorable. Universal. It works across continents and cultures.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-3 text-blue-400">3. Brand flexibility</h3>
              <p className="text-gray-300 text-xl leading-relaxed">
                It can expand across ecommerce, lifestyle, technology, manufacturing, and digital experience ventures.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-3 text-blue-400">4. Unparalleled domain value</h3>
              <p className="text-gray-300 text-xl leading-relaxed">
                INDIC.com is among the rarest digital assets globally—instantly elevating brand credibility.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-3 text-blue-400">5. Strategic timing</h3>
              <p className="text-gray-300 text-xl leading-relaxed">
                India's rise in global influence makes INDIC a brand aligned with national momentum.
              </p>
            </div>
          </div>

          <p className="text-gray-300 text-xl leading-relaxed mt-6">
            DreamFox's expertise turned INDIC from an idea into a high-value global identity.
          </p>
        </section>

        {/* Section 5 */}
        <section ref={addToRefs} className="mb-20">
          <h2 className="text-4xl font-bold mb-6">Designing INDIC: A brand with digital and cultural soul</h2>
          <p className="text-gray-300 text-xl leading-relaxed mb-6">
            DreamFox designed INDIC's digital identity with a DXP-first philosophy, ensuring the experience was:
          </p>
          <ul className="text-gray-300 text-xl leading-relaxed space-y-3 ml-8 mb-6">
            <li>• Clean</li>
            <li>• Modern</li>
            <li>• Global</li>
            <li>• Scalable</li>
            <li>• Culturally expressive</li>
            <li>• Ready for e-commerce and D2C expansion</li>
          </ul>
          <p className="text-gray-300 text-xl leading-relaxed mb-6">
            The INDIC.com experience is built to become a platform for multiple ventures, including products made in India, digital services, and global marketplace initiatives.
          </p>
          <p className="text-gray-300 text-xl leading-relaxed mb-4">
            Key contributions from DreamFox included:
          </p>
          <ul className="text-gray-300 text-xl leading-relaxed space-y-3 ml-8 mb-6">
            <li>• Brand identity</li>
            <li>• Logo direction</li>
            <li>• Color and typography systems</li>
            <li>• Digital experience design (DXP)</li>
            <li>• Storytelling-led content architecture</li>
            <li>• Technology enablement for future INDIC ventures</li>
          </ul>
          <p className="text-gray-300 text-xl leading-relaxed">
            INDIC is not a single product—it is a brand universe in the making.
          </p>
        </section>

        {/* Section 6 */}
        <section ref={addToRefs} className="mb-20">
          <h2 className="text-4xl font-bold mb-6">INDIC under DreamFox: Building the next wave of Indian DXP ventures</h2>
          <p className="text-gray-300 text-xl leading-relaxed mb-6">
            With INDIC secured and established, DreamFox is now preparing to launch sub-brands and product lines under the INDIC banner. The vision:
          </p>
          <div className="bg-gradient-to-r from-purple-900/30 via-purple/10 to-pink-900/30 border border-purple-500/30 rounded-lg p-8 mb-6">
            <p className="text-purple-300 text-2xl font-bold text-center">
              Build powerful, design-forward, India-driven global brands.
            </p>
          </div>
          <p className="text-gray-300 text-xl leading-relaxed">
            From ecommerce to AI-powered digital experiences, INDIC will become a cradle for innovative, India-born digital ventures that resonate worldwide.
          </p>
        </section>

        {/* Final Section */}
        <section ref={addToRefs} className="mb-20">
          <h2 className="text-4xl font-bold mb-6">A brand born from India. Designed for the world.</h2>
          <p className="text-gray-300 text-xl leading-relaxed mb-6">
            INDIC stands today as:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/10 border border-gray-600 rounded-lg p-6">
              <p className="text-gray-200 text-lg">A tribute to India's cultural depth</p>
            </div>
            <div className="bg-white/10 border border-gray-600 rounded-lg p-6">
              <p className="text-gray-200 text-lg">A brand aligned with India's global rise</p>
            </div>
            <div className="bg-white/10 border border-gray-600 rounded-lg p-6">
              <p className="text-gray-200 text-lg">A premium digital asset built for expansion</p>
            </div>
            <div className="bg-white/10 border border-gray-600 rounded-lg p-6">
              <p className="text-gray-200 text-lg">A platform for multiple future businesses</p>
            </div>
          </div>
          <div className="bg-white/10 border border-gray-600 rounded-lg p-8 mb-6">
            <p className="text-gray-200 text-xl leading-relaxed text-center">
              A legacy brand crafted with purpose and precision
            </p>
          </div>
          <p className="text-gray-300 text-xl leading-relaxed">
            DreamFox is proud to have brought INDIC to life—from naming and identity to digital presence and global brand protection. Together with its founders, DreamFox will continue expanding INDIC into an international brand powerhouse.
          </p>
        </section>
      </div>
    </div>
  );
}