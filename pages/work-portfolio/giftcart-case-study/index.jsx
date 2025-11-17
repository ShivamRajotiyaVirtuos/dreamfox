"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

export default function GiftcartCaseStudy() {
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
          Giftcart.com Case Study: Reinventing the Gifting Experience for Digital-First Consumers
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
            A pioneering digital gifting venture born in 2008
          </h2>
          <p className="text-gray-300 text-24 leading-relaxed">
            In early 2008, Virtuos—through its Digital Ventures portfolio—invested US$1 million to build one of India's earliest online gifting platforms. The venture was co-founded by a Virtuos co-founder along with Kristina Hermannes, with the belief that gifting would become a significant digital category in India.
          </p>
          <p className="text-gray-300 text-24 leading-relaxed mt-6">
            This vision was ahead of its time. A decade before curated experiences and personalized gifting became mainstream, Giftcart was born to give India a premium, emotionally expressive, and curated gifting destination.
          </p>
          <p className="text-gray-300 text-24 leading-relaxed mt-6">
            Yippee Media (now fully integrated into DreamFox) played a foundational role in crafting the brand that would soon be recognized across India: Giftcart.com
          </p>
        </section>

        {/* Section 2 */}
        <section ref={addToRefs} className="mb-20">
          <h2 className="text-48 font-bold mb-6">Envisioning the Giftcart brand</h2>
          <p className="text-gray-300 text-24 leading-relaxed mb-6">
            The founders and DreamFox worked together to create a brand name that was:
          </p>
          <ul className="text-gray-300 text-24 leading-relaxed space-y-3 ml-8">
            <li>• Simple</li>
            <li>• Universal</li>
            <li>• Friendly</li>
            <li>• Memorable</li>
            <li>• Perfect for an ecommerce domain</li>
          </ul>

          <h3 className="text-32 font-semibold mb-4 text-red-500 mt-8">Why Giftcart?</h3>
          <p className="text-gray-300 text-24 leading-relaxed mb-4">
            Because it merges two powerful ideas:
          </p>
          <div className="space-y-4 ml-8">
            <p className="text-gray-300 text-24 leading-relaxed">
              <span className="text-red-500 font-semibold">Gifting</span> — emotional, celebratory, human
            </p>
            <p className="text-gray-300 text-24 leading-relaxed">
              <span className="text-red-500 font-semibold">Carting</span> — ecommerce, ordering, personalization
            </p>
          </div>
          <p className="text-gray-300 text-24 leading-relaxed mt-6">
            This dual meaning made Giftcart instantly relatable.
          </p>
        </section>

        {/* Section 3 */}
        <section ref={addToRefs} className="mb-20">
          <h2 className="text-48 font-bold mb-6">Brand Identity Design</h2>
          <p className="text-gray-300 text-24 leading-relaxed mb-6">
            DreamFox selected a stylish, elegant typeface after exploring dozens of typography directions. The brand identity uses:
          </p>
          <ul className="text-gray-300 text-24 leading-relaxed space-y-4 ml-8">
            <li>• A <span className="text-[#f10303]">deep maroon color</span> symbolizing richness, warmth, and celebration</li>
            <li>• A gift ribbon icon integrated into the logo, representing joy and the art of thoughtful gifting</li>
          </ul>
          <p className="text-gray-300 text-24 leading-relaxed mt-6">
            The visual identity created an instant emotional connection with customers.
          </p>
        </section>

        {/* Section 4 */}
        <section ref={addToRefs} className="mb-20">
          <h2 className="text-48 font-bold mb-6">Building the Giftcart digital experience</h2>
          <p className="text-gray-300 text-24 leading-relaxed mb-6">
            Giftcart.com was originally built on Magento Commerce, offering:
          </p>
          <ul className="text-gray-300 text-24 leading-relaxed space-y-3 ml-8 mb-6">
            <li>• Real-time personalization</li>
            <li>• Customizable gifts</li>
            <li>• Curated collections</li>
            <li>• Wishlist & reminder modules</li>
            <li>• Gift experiences for festivals, occasions, and milestones</li>
          </ul>

          <p className="text-gray-300 text-24 leading-relaxed mb-6">
            As ecommerce evolved and needed more agility, Giftcart migrated to Shopify, enabling a faster, modern, more scalable customer experience.
          </p>

          <p className="text-gray-300 text-24 leading-relaxed mb-4">DreamFox delivered:</p>
          <ul className="text-gray-300 text-24 leading-relaxed space-y-3 ml-8">
            <li>• A complete Shopify storefront</li>
            <li>• Modern UX and UI redesign</li>
            <li>• High-speed mobile-first layouts</li>
            <li>• Optimized product catalog structure</li>
            <li>• Custom gifting workflows & personalization modules</li>
          </ul>

          <p className="text-gray-300 text-24 leading-relaxed mt-6">
            This transformed Giftcart into a seamless, contemporary gifting platform.
          </p>
        </section>

        {/* Section 5 */}
        <section ref={addToRefs} className="mb-20">
          <h2 className="text-48 font-bold mb-6">How Giftcart became a consumer favorite</h2>
          <p className="text-gray-300 text-24 leading-relaxed mb-6">
            Giftcart resonated across India because it solved three core problems:
          </p>
          
          <div className="space-y-6 ml-8">
            <div>
              <h4 className="text-red-500 font-semibold text-24 mb-2">1. Curation over chaos</h4>
              <p className="text-gray-300 text-20">Customers found meaningful products without endless browsing.</p>
            </div>
            
            <div>
              <h4 className="text-red-500 font-semibold text-24 mb-2">2. Personalization at scale</h4>
              <p className="text-gray-300 text-20">Name engraving, photo gifts, theme-based giftsets, and more.</p>
            </div>
            
            <div>
              <h4 className="text-red-500 font-semibold text-24 mb-2">3. Emotional experience</h4>
              <p className="text-gray-300 text-20">Gifts tailored to weddings, festivals, corporate events, birthdays, anniversaries, and life moments.</p>
            </div>
          </div>

          <p className="text-gray-300 text-24 leading-relaxed mt-8">
            Giftcart became a go-to brand for thoughtful gifting across demographics—young couples, families, professionals, and enterprises.
          </p>
        </section>

        {/* Section 6 */}
        <section ref={addToRefs} className="mb-20">
          <h2 className="text-48 font-bold mb-6">The DreamFox vision: Giftcart 2.0</h2>
          <p className="text-gray-300 text-24 leading-relaxed mb-6">
            As India's digital consumer base rises, DreamFox and VSys identified a major growth opportunity—Giftcart 2.0, an ambitious reinvention scheduled for 2025 and beyond.
          </p>
          
          <p className="text-gray-300 text-24 leading-relaxed mb-6">Giftcart 2.0 includes:</p>
          <ul className="text-gray-300 text-24 leading-relaxed space-y-3 ml-8">
            <li>• A new interface built for Gen Z + Millennial audiences</li>
            <li>• Expansion into digital gifts, subscriptions, and micro-experiences</li>
            <li>• Better personalization using AI</li>
            <li>• Enhanced DXP (Digital Experience Platform) design</li>
            <li>• Customer data + insights engine for gift recommendations</li>
            <li>• A more visual, immersive product browsing experience</li>
          </ul>

          <p className="text-gray-300 text-24 leading-relaxed mt-6">
            DreamFox unifies design, branding, AI-enhanced commerce, and digital marketing to power this transformation.
          </p>
        </section>

        {/* Section 7 */}
        <section ref={addToRefs} className="mb-20">
          <h2 className="text-48 font-bold mb-6">Scaling Giftcart with VSys and Blitzscale.ai</h2>
          <p className="text-gray-300 text-24 leading-relaxed mb-6">
            To accelerate the next phase of growth, Giftcart is leveraging:
          </p>
          <ul className="text-gray-300 text-24 leading-relaxed space-y-3 ml-8">
            <li>• VSys for talent, skills, and operational systems</li>
            <li>• Blitzscale.ai, the hyper-scaling operating model</li>
            <li>• DreamFox's OutLaunch Campaign for high-impact digital marketing</li>
          </ul>
          
          <p className="text-gray-300 text-24 leading-relaxed mt-6">
            This combined engine ensures rapid scaling while maintaining premium customer experience.
          </p>
        </section>

        {/* Section 8 */}
        <section ref={addToRefs} className="mb-20">
          <h2 className="text-48 font-bold mb-6">Inventing the future of gifting</h2>
          <p className="text-gray-300 text-24 leading-relaxed mb-6">
            Giftcart's next chapter will introduce:
          </p>
          <ul className="text-gray-300 text-24 leading-relaxed space-y-3 ml-8">
            <li>• AI-driven gift suggestions</li>
            <li>• Virtual gifting experiences</li>
            <li>• Blockchain-enabled gift vouchers</li>
            <li>• AR previews for personalized gifts</li>
            <li>• Smart recommendations powered by user behavior</li>
            <li>• Creator-led gifting collections</li>
            <li>• Corporate gifting automation</li>
          </ul>
          
          <p className="text-gray-300 text-24 leading-relaxed mt-6">
            The future of gifting is personal, intelligent, and beautifully designed—and Giftcart is building exactly that.
          </p>
        </section>

        {/* Final Section */}
        <section ref={addToRefs} className="mb-20">
          <h2 className="text-48 font-bold mb-6">Giftcart stands today as:</h2>
          <ul className="text-gray-300 text-24 leading-relaxed space-y-3 ml-8 mb-8">
            <li>• A legacy gifting brand with deep emotional resonance</li>
            <li>• A platform with national presence and global ambitions</li>
            <li>• A digitally empowered brand ready for 2025 and beyond</li>
            <li>• A DreamFox-designed and DreamFox-powered success story</li>
          </ul>
          
          <p className="text-gray-300 text-24 leading-relaxed font-medium">
            Giftcart is not just an ecommerce website—it is a curated universe of joy, emotion, and digital-first experiences.
          </p>
        </section>

        {/* Testimonial Section */}
        <div className="bg-gradient-to-r from-red-900/30 to-pink-900/30 rounded-3xl p-12 mb-20">
          <div className="flex items-start gap-8">
            {/* <div className="flex-shrink-0">
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center">
                <span className="text-2xl font-bold">GC</span>
              </div>
            </div> */}
            <div>
              <blockquote className="text-30 italic font-light text-gray-200 leading-relaxed mb-6">
                "DreamFox transformed our vision of digital gifting into a beloved brand that connects hearts across India. From Magento to Shopify, from 2008 to 2025—we're building the future of emotional commerce together."
              </blockquote>
              <p className="text-lg text-gray-300">
                Giftcart Team <span className="text-gray-600">/</span>{" "}
                <span className="text-red-400">Digital Gifting</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* More Portfolio Section */}
     
    </div>
  );
}