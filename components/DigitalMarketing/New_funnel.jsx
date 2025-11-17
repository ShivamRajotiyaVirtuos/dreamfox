import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextReveal from "../Text Reveal/textreveal";

gsap.registerPlugin(ScrollTrigger);

export default function New_Funnel() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const cards = cardsRef.current;

    // Set initial states for cards
    gsap.set(cards, { opacity: 0 });

    // Card 1 - slide in from left
    gsap.set(cards[0], { x: -100, rotateY: -15 });

    // Card 2 - slide in from right
    gsap.set(cards[1], { x: 100, rotateY: 15 });

    // Card 3 - slide in from bottom left
    gsap.set(cards[2], { x: -80, y: 60, scale: 0.5 });

    // Card 4 - slide in from bottom
    gsap.set(cards[3], { y: 80, scale: 0.5 });

    // Card 5 - slide in from bottom right
    gsap.set(cards[4], { x: 80, y: 60, scale: 0.5 });

    // Create timeline for card animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      },
    });

    // Animate cards in sequence
    tl.to(cards[0], {
      opacity: 1,
      x: 0,
      rotateY: 0,
      duration: 0.8,
      ease: "power2.out",
    })
      .to(
        cards[1],
        {
          opacity: 1,
          x: 0,
          rotateY: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.6"
      )
      .to(
        cards[2],
        {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.6"
      )
      .to(
        cards[3],
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.6"
      )
      .to(
        cards[4],
        {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.6"
      );

    // Parallax effect for images
    cards.forEach((card, index) => {
      const img = card.querySelector("img");
      if (img) {
        gsap.set(img, {
          yPercent: 5,
        });
        gsap.to(img, {
          yPercent: -20,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      }
    });

    // Hover animations
    cards.forEach((card) => {
      const handleMouseEnter = () => {
        // gsap.to(card, {
        //   y: -10,
        //   scale: 1.02,
        //   duration: 0.3,
        //   ease: "power2.out",
        // });

        const img = card.querySelector("img");
        if (img) {
          gsap.to(img, {
            scale: 1.1,
            duration: 0.5,
            ease: "power2.out",
          });
        }
      };

      const handleMouseLeave = () => {
        // gsap.to(card, {
        //   y: 0,
        //   scale: 1,
        //   duration: 0.3,
        //   ease: "power2.out",
        // });

        const img = card.querySelector("img");
        if (img) {
          gsap.to(img, {
            scale: 1,
            duration: 0.5,
            ease: "power2.out",
          });
        }
      };

      card.addEventListener("mouseenter", handleMouseEnter);
      card.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        card.removeEventListener("mouseenter", handleMouseEnter);
        card.removeEventListener("mouseleave", handleMouseLeave);
      };
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <div className="bg-black py-24 sm:py-36 ">
      <div className="mx-auto max-w-2xl container">
        <TextReveal
          className="text-center text-120 font-bold text-white"
          style={{ pointerEvents: "none" }}
          animation="rotateX"
          stagger={0.1}
          duration={0.8}
        >
          Funnel Builder
        </TextReveal>

        <div
          ref={containerRef}
          className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2"
        >
          <div
            ref={addToRefs}
            className="relative lg:col-span-3 cursor-pointer"
          >
            <div className="absolute inset-0 rounded-lg bg-[rgba(255,255,255,0.05)] max-lg:rounded-t-4xl lg:rounded-tl-4xl " />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-tl-[calc(2rem+1px)]">
              <div className="relative overflow-hidden">
                <img
                  alt=""
                  src="/images/funnel_builder_Stratey_Dreamfox.webp"
                  className="h-80 object-cover w-full transform-gpu"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-black/10 to-none"></div>
              </div>

              <div className="p-6 pt-0 sm:p-10 sm:pt-4">
                <h3 className="text-sm/4 font-semibold text-pink-600 dark:text-pink-400">
                  Strategy
                </h3>
                <p className="mt-2 text-20 font-medium tracking-tight text-white ">
                  Funnel Strategy & Architecture
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-300">
                  Blueprinting the entire customer journey — from awareness to
                  retention — including landing page flow, messaging, and
                  campaign logic tailored to buyer personas.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-t-4xl lg:rounded-tl-4xl dark:outline-white/15" />
          </div>

          <div
            ref={addToRefs}
            className="relative lg:col-span-3 cursor-pointer"
          >
            <div className="absolute inset-0 rounded-lg bg-[rgba(255,255,255,0.05)] lg:rounded-tr-4xl " />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-tr-[calc(2rem+1px)]">
              <div className="relative overflow-hidden">
                <img
                  alt=""
                  src="/images/conversion_dreamfox.webp"
                  className="h-80 object-cover w-full transform-gpu"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-black/10 to-none"></div>
              </div>

              <div className="p-6 pt-0 sm:p-10 sm:pt-4">
                <h3 className="text-sm/4 font-semibold text-pink-600 dark:text-pink-400">
                  Design
                </h3>
                <p className="mt-2 text-20 font-medium tracking-tight text-white ">
                  Landing Page Design & Conversion Optimization
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-300">
                  Designing high-performance landing pages using Webflow,
                  Framer, or WordPress with A/B testing, analytics integration,
                  and persuasive UX/UI focused on conversion.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-black/5 lg:rounded-tr-4xl dark:outline-white/15" />
          </div>

          <div
            ref={addToRefs}
            className="relative lg:col-span-2 cursor-pointer"
          >
            <div className="absolute inset-0 rounded-lg bg-[rgba(255,255,255,0.05)] lg:rounded-bl-4xl " />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-bl-[calc(2rem+1px)]">
              <div className="relative overflow-hidden">
                <img
                  alt=""
                  src="/images/leads_dreamfox.webp"
                  className="h-80 object-cover w-full transform-gpu"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-black/10 to-none"></div>
              </div>
              <div className="p-6 pt-0 sm:p-10 sm:pt-4">
                <h3 className="text-sm/4 font-semibold text-pink-600 dark:text-pink-400">
                  Automation
                </h3>
                <p className="mt-2 text-20 font-medium tracking-tight text-white ">
                  Lead Magnet & Content Automation
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-300">
                  Creating downloadable assets, gated content, and automated
                  email/SMS sequences using tools like HubSpot, ActiveCampaign,
                  or Zapier to nurture leads intelligently.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-black/5 lg:rounded-bl-4xl dark:outline-white/15" />
          </div>

          <div
            ref={addToRefs}
            className="relative lg:col-span-2 cursor-pointer"
          >
            <div className="absolute inset-0 rounded-lg bg-[rgba(255,255,255,0.05)] " />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
              <div className="relative overflow-hidden">
                <img
                  alt=""
                  src="/images/paid_ads_dreamfox.webp"
                  className="h-80 object-cover w-full transform-gpu"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-black/10 to-none"></div>
              </div>
              <div className="p-6 pt-0 sm:p-10 sm:pt-4">
                <h3 className="text-sm/4 font-semibold text-pink-600 dark:text-pink-400">
                  Acquisition
                </h3>
                <p className="mt-2 text-20 font-medium tracking-tight text-white ">
                  Paid Ads & Retargeting Funnels
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-300">
                  Building acquisition funnels through Meta, Google, and
                  LinkedIn Ads, with retargeting campaigns that recapture
                  visitors and drive them back into the funnel.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-black/5 dark:outline-white/15" />
          </div>

          <div
            ref={addToRefs}
            className="relative lg:col-span-2 cursor-pointer"
          >
            <div className="absolute inset-0 rounded-lg bg-[rgba(255,255,255,0.05)] max-lg:rounded-b-4xl lg:rounded-br-4xl " />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-br-[calc(2rem+1px)]">
              <div className="relative overflow-hidden">
                <img
                  alt=""
                  src="/images/analytics_dreamfox.webp"

                  className="h-80 object-cover w-full transform-gpu"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-black/10 to-none"></div>
              </div>
              <div className="p-6 pt-0 sm:p-10 sm:pt-4">
                <h3 className="text-sm/4 font-semibold text-pink-600 dark:text-pink-400">
                  Analytics
                </h3>
                <p className="mt-2 text-20 font-medium tracking-tight text-white ">
                  Analytics, AI Insights & Optimization
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-300">
                  Tracking behavior across the funnel, applying AI insights
                  (e.g., predictive scoring, heatmaps, or journey analytics),
                  and continuously refining conversion pathways.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-b-4xl lg:rounded-br-4xl dark:outline-white/15" />
          </div>
        </div>
      </div>
    </div>
  );
}
