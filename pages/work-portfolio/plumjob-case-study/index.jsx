"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CardStyle1 from "@/components/Work-portfolio/card_style_1";
import CardStyle2 from "@/components/Work-portfolio/card_style_2";


gsap.registerPlugin(ScrollTrigger);

export default function PlumJobCaseStudy() {
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
          PlumJob.com Case Study: Creating a Next-Generation Talent Experience Brand for VSys
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
            A brand created to redefine how great talent finds great work
          </h2>
          <p className="text-gray-300 text-24 leading-relaxed">
            In early September, VSys, the systems and scaling arm of Virtuos, approached DreamFox with a clear vision: "Create a brand that helps outstanding professionals find outstanding opportunities — truly plum jobs they deserve."
          </p>
          <p className="text-gray-300 text-24 leading-relaxed mt-6">
            The challenge was to design a brand that would speak directly to high-caliber talent and simultaneously differentiate itself in an ocean of traditional job portals that offered outdated experiences, cluttered listings, and low candidate engagement.
          </p>
          <p className="text-gray-300 text-24 leading-relaxed mt-6">
            DreamFox's Innovation Lab initiated multiple naming explorations, but one word kept surfacing in conversations — Plum. It felt aspirational. It felt relatable. It felt truly global. And that's when the idea became clear.
          </p>
        </section>

        {/* Section 2 */}
        <section ref={addToRefs} className="mb-20">
          <h2 className="text-48 font-bold mb-6">The birth of PlumJob.com — a brand that speaks both ambition and simplicity</h2>
          <p className="text-gray-300 text-24 leading-relaxed mb-6">
            "Plum Job" is a well-known colloquial expression, used worldwide to describe desirable, high-value jobs with exceptional benefits and growth potential. Millions of search results on Google reference "plum jobs," making it a culturally powerful phrase.
          </p>
          <p className="text-gray-300 text-24 leading-relaxed mb-6">
            DreamFox decided to transform this concept into a bold, modern brand identity.
          </p>

          <h3 className="text-32 font-semibold mb-4 text-purple-400">The Domain Challenge</h3>
          <p className="text-gray-300 text-24 leading-relaxed mb-6">
            PlumJob.com was held by another owner and extremely difficult to obtain. But for VSys and DreamFox, the brand value was more important than the domain price.
          </p>
          <p className="text-gray-300 text-24 leading-relaxed">
            After strategic outreach and an expedited acquisition process, DreamFox secured the domain without negotiations, paying a significant premium. Because sometimes—the perfect brand name is worth far more than its cost.
          </p>
        </section>

        {/* Section 3 */}
        <section ref={addToRefs} className="mb-20">
          <h2 className="text-48 font-bold mb-6">Crafting the PlumJob identity</h2>
          <p className="text-gray-300 text-24 leading-relaxed mb-6">
            DreamFox created a simple, modern, future-ready identity for PlumJob that blends:
          </p>
          <ul className="text-gray-300 text-24 leading-relaxed space-y-3 ml-8">
            <li>• Talent aspiration</li>
            <li>• Clean UI aesthetics</li>
            <li>• A tech-forward feel</li>
            <li>• A sense of opportunity and elevation</li>
          </ul>
          <p className="text-gray-300 text-24 leading-relaxed mt-6">
            The brand is warm, inclusive, and empowering — a refreshing shift from cold, transactional job boards. The design language balances professionalism with friendliness, perfect for building trust among ambitious candidates and respected employers.
          </p>
        </section>

        {/* Section 4 */}
        <section ref={addToRefs} className="mb-20">
          <h2 className="text-48 font-bold mb-6">Building PlumJob.com — from concept to launch in record time</h2>
          <p className="text-gray-300 text-24 leading-relaxed mb-6">
            DreamFox delivered a fully operational frontend and partial backend in just 45 days, reflecting an extraordinary blend of:
          </p>
          <ul className="text-gray-300 text-24 leading-relaxed space-y-3 ml-8 mb-6">
            <li>• Agile collaboration</li>
            <li>• Clear product vision</li>
            <li>• Advanced UI/UX workflows</li>
            <li>• Seamless engineering</li>
            <li>• Future-ready design systems</li>
          </ul>

          <p className="text-gray-300 text-24 leading-relaxed mb-6">The platform was designed to:</p>
          <ul className="text-gray-300 text-24 leading-relaxed space-y-3 ml-8">
            <li>• Attract highly specialized candidates</li>
            <li>• Simplify job discovery</li>
            <li>• Communicate employer brand value</li>
            <li>• Enable direct candidate-to-company engagement</li>
            <li>• Offer curated opportunities with high employer credibility</li>
          </ul>

          <p className="text-gray-300 text-24 leading-relaxed mt-6">
            PlumJob is not about listing thousands of random jobs. It is about presenting the best jobs — the plum jobs — that align with VSys's talent needs and its customers' enterprise requirements.
          </p>
        </section>

        {/* Section 5 */}
        <section ref={addToRefs} className="mb-20">
          <h2 className="text-48 font-bold mb-6">Why PlumJob is different</h2>
          <p className="text-gray-300 text-24 leading-relaxed mb-6">
            Traditional job portals chase volume. PlumJob chases value.
          </p>
          
          <p className="text-gray-300 text-24 leading-relaxed mb-6">PlumJob focuses on:</p>
          <ul className="text-gray-300 text-24 leading-relaxed space-y-3 ml-8">
            <li>• High-skill, high-impact roles</li>
            <li>• Pay-for-performance culture</li>
            <li>• Culture-aligned hiring</li>
            <li>• Curated candidate journeys</li>
            <li>• Better employer visibility</li>
            <li>• Ethical, transparent recruitment practices</li>
          </ul>

          <p className="text-gray-300 text-24 leading-relaxed mt-6">
            It clusters quality, ambition, and opportunity — all inside a beautifully crafted digital experience.
          </p>
        </section>

        {/* Section 6 */}
        <section ref={addToRefs} className="mb-20">
          <h2 className="text-48 font-bold mb-6">Powered by VSys × DreamFox — scaling into a global talent brand</h2>
          <p className="text-gray-300 text-24 leading-relaxed mb-6">
            PlumJob is now positioned to become a key talent engine for:
          </p>
          <ul className="text-gray-300 text-24 leading-relaxed space-y-3 ml-8">
            <li>• High-growth enterprises</li>
            <li>• Tech-driven companies</li>
            <li>• AI, cloud, data, and digital roles</li>
            <li>• Emerging global startups</li>
          </ul>
          
          <p className="text-gray-300 text-24 leading-relaxed mt-6">
            With VSys powering the talent operations and DreamFox driving branding, design, and DXP execution, PlumJob is ready to scale as a global talent experience platform rather than merely a job portal.
          </p>
        </section>

        {/* Final Section */}
        <section ref={addToRefs} className="mb-20">
          <h2 className="text-48 font-bold mb-6">PlumJob stands today as:</h2>
          <ul className="text-gray-300 text-24 leading-relaxed space-y-3 ml-8 mb-8">
            <li>• A rare, premium one-word brand</li>
            <li>• A high-value digital asset (PlumJob.com)</li>
            <li>• A modern talent experience platform</li>
            <li>• A DreamFox-designed and DreamFox-powered innovation</li>
            <li>• A flagship talent brand under the VSys umbrella</li>
          </ul>
          
          <p className="text-gray-300 text-24 leading-relaxed font-medium">
            PlumJob is more than a job site — it is a career movement designed to help extraordinary professionals find extraordinary opportunities.
          </p>
        </section>

        {/* Testimonial Section */}
        <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-3xl p-12 mb-20">
          <div className="flex items-start gap-8">
           
            <div>
              <blockquote className="text-30 italic font-light text-gray-200 leading-relaxed mb-6">
                "DreamFox transformed our vision of connecting exceptional talent with extraordinary opportunities into a beautiful, functional reality. PlumJob represents the future of talent experience platforms."
              </blockquote>
              <p className="text-lg text-gray-300">
                VSYS Team <span className="text-gray-600">/</span>{" "}
                <span className="text-purple-400">Talent Systems</span>
              </p>
            </div>
          </div>
        </div>
      </div>

     
    </div>
  );
}