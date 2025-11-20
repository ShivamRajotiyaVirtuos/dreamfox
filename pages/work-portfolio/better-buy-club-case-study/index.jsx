"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BetterBuyCaseStudy() {
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
          BetterBuyClub.com Case Study: Building a Modern Retail Experience
          Rooted in Legacy & Reinvention
        </h1>

        <div className="hero-read-time text-sm text-gray-400 mb-12">
          5 MINUTE READ
        </div>

        <div className="hero-divider h-1 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section 1 */}
        <section ref={addToRefs} className="mb-20">
          <h2 className="text-40 font-bold mb-6">
            A timeless entrepreneurial story meets modern digital retail
          </h2>
          <p className="text-gray-300 text-20 leading-relaxed mb-6">
            Mr. Sunil Pahouja, Founder of Smart Club LLC, based in Columbus,
            Ohio, represents the true spirit of first-generation Indian-American
            entrepreneurship. Arriving in the United States in the 1980s, he
            built his business from the ground up—creating opportunities not
            just for himself, but for hundreds of family members and community
            partners across the US and India.
          </p>
          <p className="text-gray-300 text-20 leading-relaxed mb-6">
            Over decades, he grew into a respected retail leader—known for
            resilience, sharp business acumen, and a deep commitment to
            empowering others.
          </p>
          <p className="text-gray-300 text-20 leading-relaxed">
            As the retail landscape shifted toward online and AI-powered
            commerce, Mr. Pahouja envisioned expanding his offline success into
            digital retail. To build this new frontier, he partnered with
            DreamFox, the digital design, brand, and AI marketing powerhouse
            within the Virtuos Group.
          </p>
        </section>

        {/* Section 2 */}
        <section ref={addToRefs} className="mb-20">
          <h2 className="text-40 font-bold mb-6">
            A unique partnership between Smart Club & DreamFox
          </h2>
          <p className="text-gray-300 text-20 leading-relaxed mb-6">
            Smart Club approached DreamFox with a goal: "Reinvent our retail
            model and take BetterBuy online with scale, speed, and a modern
            identity."
          </p>
          <p className="text-gray-300 text-20 leading-relaxed mb-6">
            DreamFox brought its expertise in:
          </p>
          <ul className="text-gray-300 text-20 leading-relaxed space-y-3 ml-8 mb-6">
            <li>• Shopify customization</li>
            <li>• Brand identity creation</li>
            <li>• Digital commerce UX</li>
            <li>• Catalogue architecture</li>
            <li>• SEO/SMO and digital launch campaigns</li>
          </ul>
          <p className="text-gray-300 text-20 leading-relaxed">
            Together, they co-created BetterBuyClub.com—a future-ready digital
            marketplace built to reflect the founder's vision and heritage.
          </p>
        </section>

        {/* Section 3 */}
        <section ref={addToRefs} className="mb-20">
          <h2 className="text-40 font-bold mb-6">
            Crafting the brand identity: BetterBuy → BetterBuyClub
          </h2>
          <p className="text-gray-300 text-20 leading-relaxed mb-6">
            The existing retail store was known locally as BetterBuy, a trusted
            brand with a strong community reputation. DreamFox took the essence
            of this name and expanded it into a digital-first identity.
          </p>
          <h3 className="text-2xl font-semibold mb-4 text-purple-400">
            Why "BetterBuyClub"?
          </h3>
          <ul className="text-gray-300 text-20 leading-relaxed space-y-3 ml-8 mb-6">
            <li>
              • "BetterBuy" retained the authenticity of the original store
            </li>
            <li>
              • "Club" reflected Smart Club LLC—the parent company—and
              communicated exclusivity, membership, and value
            </li>
            <li>
              • Together, it created a modern brand that felt scalable,
              community-led, and digitally relevant
            </li>
          </ul>
          <p className="text-gray-300 text-20 leading-relaxed mb-6">
            DreamFox finalized: Brand naming, Logo design, Digital identity
            system, Typography & color palette, and Visual brand language.
          </p>
          <p className="text-gray-300 text-20 leading-relaxed">
            <strong>Result:</strong> A name and identity that seamlessly
            connects the legacy retail brand with a modern e-commerce presence.
          </p>
        </section>

        {/* Section 4 */}
        <section ref={addToRefs} className="mb-20">
          <h2 className="text-40 font-bold mb-6">
            Designing the online shopping experience
          </h2>
          <p className="text-gray-300 text-20 leading-relaxed mb-6">
            DreamFox's Shopify UX team built a conversion-focused shopping
            experience with clean design, frictionless user flows, and a
            scalable product architecture.
          </p>
          <h3 className="text-2xl font-semibold mb-4 text-blue-400">
            Front-end Experience Included:
          </h3>
          <ul className="text-gray-300 text-20 leading-relaxed space-y-3 ml-8 mb-6">
            <li>• Custom Shopify theme design</li>
            <li>• Tailored homepage and PDP layouts</li>
            <li>• Intuitive category navigation</li>
            <li>• Smart search & filtering</li>
            <li>• Mobile-first design</li>
            <li>• Custom cart & checkout enhancements</li>
          </ul>
          <p className="text-gray-300 text-20 leading-relaxed">
            The design aimed to feel simple, trustworthy, and community-driven,
            consistent with the brand's physical stores.
          </p>
        </section>

        {/* Section 5 */}
        <section ref={addToRefs} className="mb-20">
          <h2 className="text-40 font-bold mb-6">
            Building a catalogue for the digital era
          </h2>
          <p className="text-gray-300 text-20 leading-relaxed mb-6">
            Cataloguing was one of the biggest challenges for BetterBuyClub,
            given the variety of product categories in household, fashion,
            electronics, lifestyle, and more.
          </p>
          <p className="text-gray-300 text-20 leading-relaxed mb-6">
            DreamFox took full responsibility for:
          </p>
          <ul className="text-gray-300 text-20 leading-relaxed space-y-3 ml-8 mb-6">
            <li>• Category hierarchy design</li>
            <li>• Product metadata and tagging</li>
            <li>• SKU taxonomy</li>
            <li>• Image optimization</li>
            <li>• Descriptions & specifications</li>
            <li>• Collections mapping</li>
            <li>• Seasonal catalogue cycles</li>
          </ul>
          <p className="text-gray-300 text-20 leading-relaxed">
            This transformed the offline inventory into a digital catalogue
            that's data-rich, easily searchable, and SEO-ready.
          </p>
        </section>

        {/* Section 6 */}
        <section ref={addToRefs} className="mb-20">
          <h2 className="text-40 font-bold mb-6">
            Digital Marketing: Launching BetterBuyClub to the world
          </h2>
          <p className="text-gray-300 text-20 leading-relaxed mb-6">
            DreamFox deployed a complete OutLaunch™ Marketing Campaign for the
            brand.
          </p>
          <h3 className="text-2xl font-semibold mb-4 text-green-400">
            Audacis™ SEO & SMO services included:
          </h3>
          <ul className="text-gray-300 text-20 leading-relaxed space-y-3 ml-8 mb-6">
            <li>• Search engine optimization</li>
            <li>• Social media branding + content creation</li>
            <li>• Creative campaigns for Instagram, Facebook & Google</li>
            <li>• Performance-driven ad sets</li>
            <li>• Retail influencer collaborations</li>
            <li>• Local SEO for Columbus & OHIO communities</li>
          </ul>
          <p className="text-gray-300 text-20 leading-relaxed">
            <strong>The objective:</strong> Build brand awareness, drive online
            footfall, and scale digital revenue channels.
          </p>
        </section>

        {/* Final Section */}
        <section ref={addToRefs} className="mb-20">
          <h2 className="text-40 font-bold mb-6">
            A brand built for digital growth & community impact
          </h2>
          <p className="text-gray-300 text-20 leading-relaxed mb-6">
            BetterBuyClub.com represents more than a store—it carries forward a
            decades-old legacy into the digital future. With modern UX, strong
            branding, a curated catalogue, and ongoing digital marketing, the
            platform is ready for national and international growth.
          </p>
          <p className="text-gray-300 text-20 leading-relaxed mb-6">
            DreamFox continues to partner with Smart Club LLC, providing:
          </p>
          <ul className="text-gray-300 text-20 leading-relaxed space-y-3 ml-8 mb-6">
            <li>• Shopify enhancements</li>
            <li>• SEO/SMO</li>
            <li>• Banner design</li>
            <li>• Campaign planning</li>
            <li>• Catalogue expansions</li>
            <li>• Performance analytics</li>
          </ul>
          <p className="text-gray-300 text-20 leading-relaxed">
            Together, they are building BetterBuyClub into a modern omni-channel
            retail ecosystem that honors its origins and embraces the
            possibilities of tomorrow.
          </p>
        </section>
      </div>
    </div>
  );
}
