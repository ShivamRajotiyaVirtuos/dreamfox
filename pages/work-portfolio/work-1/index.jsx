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
    <div ref={heroRef} className="min-h-screen bg-black container text-white">
      {/* Hero Section */}
      <div className="max-w-5xl px-4 sm:px-6 pt-40 xl:pt-54 pb-32">
        <div className="hero-badge text-xs tracking-wider text-gray-400 mb-8">
          CASE STUDY
        </div>

        <h1 className="hero-title text-80 font-bold leading-tight mb-8">
          NRMA Insurance redefines the industry with inspiring new experiences
        </h1>

        <div className="hero-read-time text-sm text-gray-400 mb-12">
          5 MINUTE READ
        </div>

        <div className="hero-divider h-1 w-full bg-gradient-to-r from-pink-500 via-purple-500 via-yellow-500 to-green-500"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl px-4 sm:px-6">
        {/* Section 1 */}
        <section ref={addToRefs} className="mb-20">
          <h2 className="text-48 font-bold mb-6">
            Inspiring new experiences and shaking up the category
          </h2>
          <p className="text-gray-300  text-24 leading-relaxed">
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
        <section ref={addToRefs} className="mb-20">
          <h2 className="text-48 font-bold mb-6">A unique partnership</h2>
          <p className="text-gray-300 text-24 leading-relaxed">
            NRMA Insurance partnered with Accenture Song to address their
            challenge with an integrated solution across marketing, customer
            experience, digital and design, all aimed at driving sustainable
            growth.
          </p>
        </section>
      </div>

      {/* Quote Block */}
      <div className="quote-block flex justify-end flex-col items-end  my-16 sm:my-32 text-left px-4 sm:px-8 md:px-16">
        <div>
          <blockquote className="text-48 font-semibold max-w-6xl leading-relaxed">
            "With Accenture Song we have established a unique partnership,
            working with their leading Australian talent here and abroad. This
            model enables us to bring the best global thinking and solutions
            back to Australia while leveraging their Australian roots and
            connection to the NRMA Insurance brand."
          </blockquote>
          <p className="text-20 text-gray-400 mt-8">
            Julie Batch / NRMA Insurance CEO
          </p>
        </div>
      </div>
      <div className="max-w-5xl px-4 sm:px-6">
        {/* Section 3 */}
        <section ref={addToRefs} className="mb-20">
          <h2 className="text-48 font-bold mb-6">
            Vision-driven business transformation
          </h2>
          <p className="text-gray-300 text-24 leading-relaxed mb-6">
            NRMA Insurance has always stood for 'Help'. The team saw an
            opportunity to double down on that in a more meaningful way. The
            solution made 'Help' not just the brand's DNA, but its whole
            business: redefining NRMA Insurance from an insurance company that
            helps to "A Help Company" that offers insurance.
          </p>
          <p className="text-gray-300 text-24 leading-relaxed">
            Most importantly, the idea has become a yardstick by which the
            organization makes decisions, asking the singular question: "What
            would A Help Company do?"
          </p>
        </section>

        {/* Image Section */}
        <div className="help-company-image my-20">
          <div className="relative w-full aspect-[16/9] bg-gradient-to-br from-indigo-900 to-purple-900 rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-sm tracking-wider mb-4">NRMA</div>
                <div className="text-4xl md:text-5xl font-bold">
                  A Help Company
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4 */}
        <section ref={addToRefs} className="mb-20">
          <h2 className="text-48 font-bold mb-6">
            Transforming the vision into action
          </h2>
          <p className="text-gray-300 text-24 leading-relaxed mb-6">
            We kicked off by establishing a visual identity that meets AAA
            accessibility guidelines, with a font which supports all major
            languages including Aboriginal and Torres Strait Islander.
          </p>
          <p className="text-gray-300 text-24 leading-relaxed mb-6">
            The team designed a series of new experiences, such as a Policy
            Snapshot to provide helpful information about customers' policies
            and exploring new technology to help them identify potential issues
            with their roof.
          </p>
          <p className="text-gray-300 text-24 leading-relaxed mb-6">
            This activity was supported by additional helpful service offerings,
            such as employee training to offer empathetic crisis support to
            those affected by natural disasters.
          </p>
          <p className="text-gray-300 text-24 leading-relaxed mb-6">
            NRMA Insurance partnered with Australian Red Cross, South Australian
            State Emergency Service (SES) and Lifeline Australia on Help Nation,
            an initiative to proactively educate communities about how to
            prepare for extreme weather and weather-related risks. To date, the
            initiative has encouraged more than 400,000 preparedness actions by
            individuals.
          </p>
          <p className="text-gray-300 text-24 leading-relaxed">
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
        </section>
      </div>
      <div className="quote-block flex justify-end flex-col items-end pb-20  my-16 sm:my-32 text-left px-4 sm:px-8 md:px-16">
        <div>
          <blockquote className="text-48 font-semibold max-w-6xl leading-relaxed">
            "With Accenture Song we have established a unique partnership,
            working with their leading Australian talent here and abroad. This
            model enables us to bring the best global thinking and solutions
            back to Australia while leveraging their Australian roots and
            connection to the NRMA Insurance brand."
          </blockquote>
          <p className="text-20 text-gray-400 mt-8">
            Julie Batch / NRMA Insurance CEO
          </p>
        </div>
      </div>
      <h1 className="text-60  font-semibold px-4 sm:px-8">More client Portfolio</h1>
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
  );
}
