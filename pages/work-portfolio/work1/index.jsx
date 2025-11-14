"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Mock Card Components
const CardStyle2 = ({
  title,
  description,
  tag,
  backgroundImage,
  url,
  onCardClick,
}) => (
  <div
    onClick={onCardClick}
    className="group relative overflow-hidden rounded-2xl cursor-pointer h-[500px] transition-all duration-500 hover:scale-[1.02]"
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
    <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
      <div className="text-xs tracking-widest text-purple-400 mb-3">{tag}</div>
      <h3 className="text-2xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        {description}
      </p>
    </div>
  </div>
);

const CardStyle1 = ({
  title,
  description,
  tag,
  backgroundImage,
  url,
  onCardClick,
}) => (
  <div
    onClick={onCardClick}
    className="group relative overflow-hidden rounded-2xl cursor-pointer h-[500px] transition-all duration-500 hover:scale-[1.02]"
    style={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-900/80 to-black/80 group-hover:from-blue-900/90 group-hover:via-purple-900/90 group-hover:to-black/90 transition-all duration-500" />
    <div className="absolute inset-0 p-8 flex flex-col justify-end">
      <div className="text-xs tracking-widest text-blue-400 mb-3">{tag}</div>
      <h3 className="text-2xl font-bold mb-3 text-white">{title}</h3>
      <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        {description}
      </p>
    </div>
  </div>
);

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
      {/* Hero Section - Enhanced with better spacing and visual hierarchy */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 xl:pt-54 pb-40">
        <div className="hero-badge inline-block px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs tracking-wider text-purple-400 mb-10">
          CASE STUDY
        </div>

        <h1 className="hero-title text-80 font-bold leading-[1.1] mb-12 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
          NRMA Insurance redefines the industry with inspiring new experiences
        </h1>

        <div className="hero-read-time flex items-center gap-3 text-sm text-gray-400 mb-16">
          <span className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500"></span>
          5 MINUTE READ
        </div>

        <div className="hero-divider h-[2px] w-full bg-gradient-to-r from-pink-500 via-purple-500 via-yellow-500 to-green-500 rounded-full shadow-lg shadow-purple-500/20"></div>
      </div>

      {/* Main Content - Better typography and spacing */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section 1 - Enhanced with accent line */}
        <section ref={addToRefs} className="mb-32">
          <div className="flex items-start gap-6 mb-8">
            <div className="w-1 h-20 bg-gradient-to-b from-pink-500 to-purple-500 rounded-full flex-shrink-0"></div>
            <h2 className="text-48 font-bold leading-tight">
              Inspiring new experiences and shaking up the category
            </h2>
          </div>
          <p className="text-gray-300 text-24 leading-relaxed ml-10 opacity-90">
            For almost 100 years, NRMA Insurance has delivered its unique brand
            of 'Help' to Australians, becoming their most trusted insurance
            brand. Last year alone, they responded to more than 1.5 million
            calls for help and travelled 5.3 million kilometres to serve
            customers. But as the market's premium offering, NRMA Insurance
            faced increasing consumer price sensitivity driven by a
            cost-of-living crisis. To maintain the brand's leadership position
            and drive an end-to-end customer experience, they turned to
            Accenture Song to differentiate NRMA Insurance and transcend the
            category.
          </p>
        </section>

        {/* Section 2 */}
        <section ref={addToRefs} className="mb-32">
          <div className="flex items-start gap-6 mb-8">
            <div className="w-1 h-20 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full flex-shrink-0"></div>
            <h2 className="text-48 font-bold leading-tight">
              A unique partnership
            </h2>
          </div>
          <p className="text-gray-300 text-24 leading-relaxed ml-10 opacity-90">
            NRMA Insurance partnered with Accenture Song to address their
            challenge with an integrated solution across marketing, customer
            experience, digital and design, all aimed at driving sustainable
            growth.
          </p>
        </section>
      </div>

      {/* Quote Block - Enhanced design with border and background */}
      <div className="quote-block flex justify-end flex-col items-end my-32 sm:my-40 px-4 sm:px-8 md:px-16">
        <div className="max-w-6xl relative">
          <div className="absolute -left-8 top-0 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
          <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/20 rounded-3xl p-12 backdrop-blur-sm">
            <div className="text-6xl text-purple-500/30 font-serif mb-6">"</div>
            <blockquote className="text-48 font-semibold leading-relaxed mb-8 text-gray-100">
              With Accenture Song we have established a unique partnership,
              working with their leading Australian talent here and abroad. This
              model enables us to bring the best global thinking and solutions
              back to Australia while leveraging their Australian roots and
              connection to the NRMA Insurance brand.
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-[2px] bg-gradient-to-r from-purple-500 to-transparent"></div>
              <p className="text-20 text-gray-400">
                Julie Batch <span className="text-gray-600">/</span>{" "}
                <span className="text-purple-400">NRMA Insurance CEO</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section 3 */}
        <section ref={addToRefs} className="mb-32">
          <div className="flex items-start gap-6 mb-8">
            <div className="w-1 h-20 bg-gradient-to-b from-blue-500 to-green-500 rounded-full flex-shrink-0"></div>
            <h2 className="text-48 font-bold leading-tight">
              Vision-driven business transformation
            </h2>
          </div>
          <div className="ml-10 space-y-6">
            <p className="text-gray-300 text-24 leading-relaxed opacity-90">
              NRMA Insurance has always stood for 'Help'. The team saw an
              opportunity to double down on that in a more meaningful way. The
              solution made 'Help' not just the brand's DNA, but its whole
              business: redefining NRMA Insurance from an insurance company that
              helps to "A Help Company" that offers insurance.
            </p>
            <p className="text-gray-300 text-24 leading-relaxed opacity-90">
              Most importantly, the idea has become a yardstick by which the
              organization makes decisions, asking the singular question: "What
              would A Help Company do?"
            </p>
          </div>
        </section>

        {/* Image Section - Enhanced with better styling */}
        <div className="help-company-image my-32">
          <div className="relative w-full aspect-[16/9] bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 rounded-3xl overflow-hidden border border-purple-500/20 shadow-2xl shadow-purple-500/20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)]"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-6">
                <div className="text-sm tracking-[0.3em] text-purple-300 font-light">
                  NRMA
                </div>
                <div className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                  A Help Company
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"></div>
          </div>
        </div>

        {/* Section 4 */}
        <section ref={addToRefs} className="mb-32">
          <div className="flex items-start gap-6 mb-8">
            <div className="w-1 h-20 bg-gradient-to-b from-green-500 to-yellow-500 rounded-full flex-shrink-0"></div>
            <h2 className="text-48 font-bold leading-tight">
              Transforming the vision into action
            </h2>
          </div>
          <div className="ml-10 space-y-6">
            <p className="text-gray-300 text-24 leading-relaxed opacity-90">
              We kicked off by establishing a visual identity that meets AAA
              accessibility guidelines, with a font which supports all major
              languages including Aboriginal and Torres Strait Islander.
            </p>
            <p className="text-gray-300 text-24 leading-relaxed opacity-90">
              The team designed a series of new experiences, such as a Policy
              Snapshot to provide helpful information about customers' policies
              and exploring new technology to help them identify potential
              issues with their roof.
            </p>
            <p className="text-gray-300 text-24 leading-relaxed opacity-90">
              This activity was supported by additional helpful service
              offerings, such as employee training to offer empathetic crisis
              support to those affected by natural disasters.
            </p>
            <p className="text-gray-300 text-24 leading-relaxed opacity-90">
              NRMA Insurance partnered with Australian Red Cross, South
              Australian State Emergency Service (SES) and Lifeline Australia on
              Help Nation, an initiative to proactively educate communities
              about how to prepare for extreme weather and weather-related
              risks. To date, the initiative has encouraged more than 400,000
              preparedness actions by individuals.
            </p>
            <p className="text-gray-300 text-24 leading-relaxed opacity-90">
              All this activity was brought to life through a national
              advertising campaign within a broadcast partnership with Channel
              Nine of the Paris 2024 Olympic and Paralympic Games that posed the
              question to all Australians: "What would a Help Company do?" The
              campaign prompted a rethink of what is expected of an insurer,
              ultimately positioning NRMA Insurance in a category of its own,
              transcending insurance. The campaign not only resonated with
              Australians but also earned international acclaim, garnering
              industry recognition both domestically and globally.
            </p>
          </div>
        </section>
      </div>

      {/* Second Quote Block */}
      <div className="quote-block flex justify-end flex-col items-end pb-20 my-32 sm:my-40 px-4 sm:px-8 md:px-16">
        <div className="max-w-6xl relative">
          <div className="absolute -left-8 top-0 w-1 h-full bg-gradient-to-b from-pink-500 to-orange-500 rounded-full"></div>
          <div className="bg-gradient-to-br from-orange-900/20 to-pink-900/20 border border-orange-500/20 rounded-3xl p-12 backdrop-blur-sm">
            <div className="text-6xl text-orange-500/30 font-serif mb-6">"</div>
            <blockquote className="text-48 font-semibold leading-relaxed mb-8 text-gray-100">
              With Accenture Song we have established a unique partnership,
              working with their leading Australian talent here and abroad. This
              model enables us to bring the best global thinking and solutions
              back to Australia while leveraging their Australian roots and
              connection to the NRMA Insurance brand.
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-[2px] bg-gradient-to-r from-orange-500 to-transparent"></div>
              <p className="text-20 text-gray-400">
                Julie Batch <span className="text-gray-600">/</span>{" "}
                <span className="text-orange-400">NRMA Insurance CEO</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* More Portfolio Section - Enhanced spacing and header */}
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

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 3 !gap-8 xl:!gap-12 mt-16 xl:mt-32 mb-32 px-4 sm:px-6 w-full">
          <CardStyle2
            title="Digital Marketing Revolution"
            description="Exploring the latest trends in digital marketing and how brands are adapting to the changing landscape of consumer engagement and digital transformation."
            tag="Marketing Study"
            backgroundImage="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxzZWFyY2h8NDJ8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D"
            onCardClick={() => console.log("Card clicked")}
            className=""
            url="/work-portfolio/work-2"
          />
          <CardStyle1
            title="AI & Future of Work"
            description="An in-depth analysis of how artificial intelligence is transforming workplace dynamics and creating new opportunities for businesses."
            tag="Technology Report"
            backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29ycG9yYXRlfGVufDB8fDB8fHww"
            onCardClick={() => console.log("AI card clicked")}
            url="/work-portfolio/work-3"
          />

          <CardStyle2
            title="Digital Marketing Revolution"
            description="Exploring the latest trends in digital marketing and how brands are adapting to the changing landscape of consumer engagement and digital transformation."
            tag="Marketing Study"
            backgroundImage="https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D"
            onCardClick={() => console.log("Card clicked")}
            className=""
          />
        </div>
      </div>
    </div>
  );
}
