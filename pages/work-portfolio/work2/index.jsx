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
  const [variant, setVariant] = React.useState(1);

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
  }, [variant]);

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  // VARIANT 1: Modern Gradient Layout (Original Enhanced)
  const renderVariant1 = () => (
    <>
      {/* Hero Section - Enhanced with better spacing and visual hierarchy */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-40 xl:pt-54 pb-40">
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
            <h2 className="text-48 font-bold leading-tight">A unique partnership</h2>
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
                Julie Batch <span className="text-gray-600">/</span> <span className="text-purple-400">NRMA Insurance CEO</span>
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
                <div className="text-sm tracking-[0.3em] text-purple-300 font-light">NRMA</div>
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
              and exploring new technology to help them identify potential issues
              with their roof.
            </p>
            <p className="text-gray-300 text-24 leading-relaxed opacity-90">
              This activity was supported by additional helpful service offerings,
              such as employee training to offer empathetic crisis support to
              those affected by natural disasters.
            </p>
            <p className="text-gray-300 text-24 leading-relaxed opacity-90">
              NRMA Insurance partnered with Australian Red Cross, South Australian
              State Emergency Service (SES) and Lifeline Australia on Help Nation,
              an initiative to proactively educate communities about how to
              prepare for extreme weather and weather-related risks. To date, the
              initiative has encouraged more than 400,000 preparedness actions by
              individuals.
            </p>
            <p className="text-gray-300 text-24 leading-relaxed opacity-90">
              All this activity was brought to life through a national advertising
              campaign within a broadcast partnership with Channel Nine of the
              Paris 2024 Olympic and Paralympic Games that posed the question to
              all Australians: "What would a Help Company do?" The campaign
              prompted a rethink of what is expected of an insurer, ultimately
              positioning NRMA Insurance in a category of its own, transcending
              insurance. The campaign not only resonated with Australians but also
              earned international acclaim, garnering industry recognition both
              domestically and globally.
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
                Julie Batch <span className="text-gray-600">/</span> <span className="text-orange-400">NRMA Insurance CEO</span>
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
          <p className="text-gray-400 text-xl ml-10">Explore our other success stories</p>
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
    </>
  );

  // VARIANT 2: Magazine Style Layout
  const renderVariant2 = () => (
    <>
      {/* Hero Section - Magazine Style */}
      <div className="relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-40 xl:pt-54 pb-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="hero-badge inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-xs tracking-wider text-white mb-8 backdrop-blur-sm">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                CASE STUDY
              </div>

              <h1 className="hero-title text-80 font-bold leading-[1.05] mb-8">
                NRMA Insurance redefines the industry with inspiring new experiences
              </h1>

              <div className="hero-read-time flex items-center gap-6 text-sm text-gray-400 mb-8">
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  5 MIN READ
                </span>
                <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                <span>Industry: Insurance</span>
              </div>

              <div className="hero-divider grid grid-cols-4 gap-2 w-64">
                <div className="h-1 bg-pink-500 rounded-full"></div>
                <div className="h-1 bg-purple-500 rounded-full"></div>
                <div className="h-1 bg-yellow-500 rounded-full"></div>
                <div className="h-1 bg-green-500 rounded-full"></div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 p-1">
                <div className="w-full h-full rounded-3xl bg-black flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="text-sm tracking-[0.3em] text-gray-400">NRMA</div>
                    <div className="text-5xl font-bold">A Help<br/>Company</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - Two Column Magazine Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className=" ">
          {/* Sidebar */}
          

          {/* Main Content */}
          <div className="">
            {/* Section 1 */}
            <section ref={addToRefs} id="section1" className="mb-24">
              <div className="mb-8">
                <span className="text-xs tracking-widest text-purple-500">01</span>
                <h2 className="text-48 font-bold mt-4">
                  Inspiring new experiences and shaking up the category
                </h2>
              </div>
              <p className="text-gray-300 text-24 leading-relaxed opacity-90">
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
            <section ref={addToRefs} id="section2" className="mb-24">
              <div className="mb-8">
                <span className="text-xs tracking-widest text-blue-500">02</span>
                <h2 className="text-48 font-bold mt-4">A unique partnership</h2>
              </div>
              <p className="text-gray-300 text-24 leading-relaxed opacity-90">
                NRMA Insurance partnered with Accenture Song to address their
                challenge with an integrated solution across marketing, customer
                experience, digital and design, all aimed at driving sustainable
                growth.
              </p>
            </section>

            {/* Quote Block - Magazine Style */}
            <div className="quote-block my-24 p-12 border-l-4 border-purple-500 bg-gradient-to-r from-purple-900/10 to-transparent">
              <blockquote className="text-48 font-semibold leading-relaxed mb-8 italic">
                With Accenture Song we have established a unique partnership,
                working with their leading Australian talent here and abroad.
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500"></div>
                <div>
                  <p className="text-20 font-semibold">Julie Batch</p>
                  <p className="text-gray-400">NRMA Insurance CEO</p>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <section ref={addToRefs} id="section3" className="mb-24">
              <div className="mb-8">
                <span className="text-xs tracking-widest text-green-500">03</span>
                <h2 className="text-48 font-bold mt-4">
                  Vision-driven business transformation
                </h2>
              </div>
              <div className="space-y-6">
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

            {/* Image Section */}
            <div className="help-company-image my-24">
              <div className="relative w-full aspect-[16/9] bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-6">
                    <div className="text-sm tracking-[0.3em] text-purple-300">NRMA</div>
                    <div className="text-6xl font-bold">A Help Company</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <section ref={addToRefs} id="section4" className="mb-24">
              <div className="mb-8">
                <span className="text-xs tracking-widest text-yellow-500">04</span>
                <h2 className="text-48 font-bold mt-4">
                  Transforming the vision into action
                </h2>
              </div>
              <div className="space-y-6">
                <p className="text-gray-300 text-24 leading-relaxed opacity-90">
                  We kicked off by establishing a visual identity that meets AAA
                  accessibility guidelines, with a font which supports all major
                  languages including Aboriginal and Torres Strait Islander.
                </p>
                <p className="text-gray-300 text-24 leading-relaxed opacity-90">
                  The team designed a series of new experiences, such as a Policy
                  Snapshot to provide helpful information about customers' policies
                  and exploring new technology to help them identify potential issues
                  with their roof.
                </p>
                <p className="text-gray-300 text-24 leading-relaxed opacity-90">
                  This activity was supported by additional helpful service offerings,
                  such as employee training to offer empathetic crisis support to
                  those affected by natural disasters.
                </p>
                <p className="text-gray-300 text-24 leading-relaxed opacity-90">
                  NRMA Insurance partnered with Australian Red Cross, South Australian
                  State Emergency Service (SES) and Lifeline Australia on Help Nation,
                  an initiative to proactively educate communities about how to
                  prepare for extreme weather and weather-related risks. To date, the
                  initiative has encouraged more than 400,000 preparedness actions by
                  individuals.
                </p>
                <p className="text-gray-300 text-24 leading-relaxed opacity-90">
                  All this activity was brought to life through a national advertising
                  campaign within a broadcast partnership with Channel Nine of the
                  Paris 2024 Olympic and Paralympic Games that posed the question to
                  all Australians: "What would a Help Company do?" The campaign
                  prompted a rethink of what is expected of an insurer, ultimately
                  positioning NRMA Insurance in a category of its own, transcending
                  insurance.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Portfolio Section */}
      <div className="border-t border-gray-800 pt-24 pb-32">
        <div className="px-4 sm:px-8 mb-16">
          <h1 className="text-60 font-semibold mb-4">More client Portfolio</h1>
          <p className="text-gray-400 text-xl">Explore our other success stories</p>
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
    </>
  );

  // VARIANT 3: Minimal Clean Layout
  const renderVariant3 = () => (
    <>
      {/* Hero Section - Minimal Style */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-40 xl:pt-54 pb-40">
        <div className="hero-badge text-xs tracking-[0.4em] text-gray-500 mb-16 font-light">
          CASE STUDY — INSURANCE INDUSTRY
        </div>

        <h1 className="hero-title text-80 font-light leading-[1.1] mb-20 tracking-tight">
          NRMA Insurance redefines the industry with inspiring new experiences
        </h1>

        <div className="flex items-center justify-between border-t border-b border-gray-800 py-6">
          <div className="hero-read-time text-sm text-gray-500 tracking-wide">
            5 MINUTE READ
          </div>
          <div className="text-sm text-gray-500">
            2024
          </div>
        </div>
      </div>

      {/* Main Content - Single Column Minimal */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Section 1 */}
        <section ref={addToRefs} className="mb-32 pt-20">
          <p className="text-gray-300 text-24 leading-[1.8] font-light">
            For almost 100 years, NRMA Insurance has delivered its unique brand
            of 'Help' to Australians, becoming their most trusted insurance
            brand. Last year alone, they responded to more than 1.5 million
            calls for help and travelled 5.3 million kilometres to serve
            customers.
          </p>
        </section>

        <section ref={addToRefs} className="mb-32">
          <h2 className="text-20 tracking-[0.2em] text-gray-500 mb-8 font-light">
            THE CHALLENGE
          </h2>
          <p className="text-gray-300 text-24 leading-[1.8] font-light">
            But as the market's premium offering, NRMA Insurance
            faced increasing consumer price sensitivity driven by a
            cost-of-living crisis. To maintain the brand's leadership position
            and drive an end-to-end customer experience, they turned to
            Accenture Song to differentiate NRMA Insurance and transcend the
            category.
          </p>
        </section>

        {/* Section 2 */}
        <section ref={addToRefs} className="mb-32">
          <h2 className="text-20 tracking-[0.2em] text-gray-500 mb-8 font-light">
            THE PARTNERSHIP
          </h2>
          <p className="text-gray-300 text-24 leading-[1.8] font-light">
            NRMA Insurance partnered with Accenture Song to address their
            challenge with an integrated solution across marketing, customer
            experience, digital and design, all aimed at driving sustainable
            growth.
          </p>
        </section>

        {/* Quote Block - Minimal Style */}
        <div className="quote-block my-40 py-16 border-t border-b border-gray-800">
          <blockquote className="text-48 font-light leading-[1.5] mb-12 tracking-tight">
            With Accenture Song we have established a unique partnership,
            working with their leading Australian talent here and abroad.
          </blockquote>
          <p className="text-20 text-gray-500 tracking-wide font-light">
            Julie Batch, CEO
          </p>
        </div>

        {/* Section 3 */}
        <section ref={addToRefs} className="mb-32">
          <h2 className="text-20 tracking-[0.2em] text-gray-500 mb-8 font-light">
            THE TRANSFORMATION
          </h2>
          <div className="space-y-8">
            <p className="text-gray-300 text-24 leading-[1.8] font-light">
              NRMA Insurance has always stood for 'Help'. The team saw an
              opportunity to double down on that in a more meaningful way. The
              solution made 'Help' not just the brand's DNA, but its whole
              business: redefining NRMA Insurance from an insurance company that
              helps to "A Help Company" that offers insurance.
            </p>
            <p className="text-gray-300 text-24 leading-[1.8] font-light">
              Most importantly, the idea has become a yardstick by which the
              organization makes decisions, asking the singular question: "What
              would A Help Company do?"
            </p>
          </div>
        </section>

        {/* Image Section */}
        <div className="help-company-image my-32">
          <div className="relative w-full aspect-[16/9] bg-gray-900 border border-gray-800">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-8">
                <div className="text-xs tracking-[0.4em] text-gray-600 font-light">NRMA</div>
                <div className="text-6xl font-light tracking-tight">A Help Company</div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4 */}
        <section ref={addToRefs} className="mb-32">
          <h2 className="text-20 tracking-[0.2em] text-gray-500 mb-8 font-light">
            THE EXECUTION
          </h2>
          <div className="space-y-8">
            <p className="text-gray-300 text-24 leading-[1.8] font-light">
              We kicked off by establishing a visual identity that meets AAA
              accessibility guidelines, with a font which supports all major
              languages including Aboriginal and Torres Strait Islander.
            </p>
            <p className="text-gray-300 text-24 leading-[1.8] font-light">
              The team designed a series of new experiences, such as a Policy
              Snapshot to provide helpful information about customers' policies
              and exploring new technology to help them identify potential issues
              with their roof.
            </p>
            <p className="text-gray-300 text-24 leading-[1.8] font-light">
              NRMA Insurance partnered with Australian Red Cross, South Australian
              State Emergency Service (SES) and Lifeline Australia on Help Nation,
              an initiative to proactively educate communities about how to
              prepare for extreme weather and weather-related risks.
            </p>
            <p className="text-gray-300 text-24 leading-[1.8] font-light">
              All this activity was brought to life through a national advertising
              campaign within a broadcast partnership with Channel Nine of the
              Paris 2024 Olympic and Paralympic Games that posed the question to
              all Australians: "What would a Help Company do?"
            </p>
          </div>
        </section>

        {/* Final Quote */}
        <div className="quote-block my-40 py-16 border-t border-gray-800">
          <p className="text-24 text-gray-500 leading-[1.8] font-light">
            The campaign not only resonated with Australians but also
            earned international acclaim, garnering industry recognition both
            domestically and globally.
          </p>
        </div>
      </div>

      {/* Portfolio Section */}
      <div className="border-t border-gray-800 pt-32 pb-32 mt-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 mb-20">
          <h2 className="text-20 tracking-[0.2em] text-gray-500 mb-4 font-light">
            MORE WORK
          </h2>
          <h1 className="text-60 font-light tracking-tight">Selected Projects</h1>
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
    </>
  );

  return (
    <div ref={heroRef} className="min-h-screen bg-black container text-white">
      {/* Variant Switcher - Fixed at top */}
      <div className="fixed inset-x-0 top-40 right-40 z-50 flex gap-2">
        <button
          onClick={() => setVariant(1)}
          className={`px-4 py-2 rounded-lg text-xs tracking-wider transition-all ${
            variant === 1
              ? 'bg-purple-500 text-white'
              : 'bg-white/5 text-gray-400 hover:bg-white/10'
          }`}
        >
          GRADIENT
        </button>
        <button
          onClick={() => setVariant(2)}
          className={`px-4 py-2 rounded-lg text-xs tracking-wider transition-all ${
            variant === 2
              ? 'bg-blue-500 text-white'
              : 'bg-white/5 text-gray-400 hover:bg-white/10'
          }`}
        >
          MAGAZINE
        </button>
        <button
          onClick={() => setVariant(3)}
          className={`px-4 py-2 rounded-lg text-xs tracking-wider transition-all ${
            variant === 3
              ? 'bg-green-500 text-white'
              : 'bg-white/5 text-gray-400 hover:bg-white/10'
          }`}
        >
          MINIMAL
        </button>
      </div>

      {variant === 1 && renderVariant1()}
      {variant === 2 && renderVariant2()}
      {variant === 3 && renderVariant3()}

      </div>
  );
}