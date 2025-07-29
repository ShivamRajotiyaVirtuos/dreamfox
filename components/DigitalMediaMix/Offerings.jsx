"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Offerings = () => {
  const containerRef = useRef(null);
  const offeringsData = [
    {
      id: 1,
      title: "A bold new website for Julbo, the giant in sports eyewear",
      category: "MISSIONS",
      services: ["Front-End Development"],
      image:
        "https://media.wired.com/photos/5bdca1cf35226a3b7363f84c/191:100/w_1280,c_limit/Red-Dead-Redemption.jpg",
      bgColor: "from-purple-900 to-blue-900",
    },
    {
      id: 2,
      title: "Vivelys: bring to life a wine lifecycle app for winemakers",
      category: "MISSIONS",
      services: ["Art Direction", "Branding", "Lead UX & UI Design"],
      image:
        "https://media.npr.org/assets/img/2018/12/31/rdr2_screenshot-014_wide-71d02434782cc887366ba9767260080bb73fa207.jpg",
      bgColor: "from-orange-800 to-purple-900",
    },
    {
      id: 3,
      title: "A bold new website for Julbo, the giant in sports eyewear",
      category: "MISSIONS",
      services: ["Front-End Development"],
      image:
        "https://w0.peakpx.com/wallpaper/82/271/HD-wallpaper-red-dead-red-dead-redemption-2-arthur-morgan-red-dead-redemption-fire.jpg",
      bgColor: "from-purple-900 to-blue-900",
    },
  ];

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      offeringsData.forEach((_, index) => {
        const card = containerRef.current.querySelector(
          `.offering-card-${index}`
        );
        const imageContainer = card.querySelector(".image-container");
        const imageFill = card.querySelector(".image-fill");
        const content = card.querySelector(".content");
        const logo = card.querySelector(".logo");

        gsap.set(content, { opacity: 0, y: 100 });
        gsap.set(imageContainer, { opacity: 0, scale: 0.8 });
        gsap.set(imageFill, { scaleY: 1, transformOrigin: "bottom" });
        if (logo) gsap.set(logo, { opacity: 0, scale: 0.5 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          },
        });

        tl.to(content, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        })
          .to(
            imageContainer,
            {
              opacity: 1,
              scale: 1,
              duration: 0.6,
              ease: "back.out(1.7)",
            },
            "-=0.4"
          )
          .to(
            imageFill,
            {
              scaleY: 0,
              duration: 1.2,
              ease: "power2.inOut",
            },
            "-=0.2"
          );

        if (logo) {
          tl.to(
            logo,
            {
              opacity: 1,
              scale: 1,
              duration: 0.6,
              ease: "back.out(1.7)",
            },
            "-=0.8"
          );
        }

        gsap.to(imageContainer, {
          yPercent: -20,
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
            toggleActions: "play reverse play reverse",
            onToggle: (self) => {
              if (self.isActive) {
                gsap.to(imageContainer, { yPercent: -20, duration: 0 });
              }
            },
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-black overflow-hidden py-26 md:py-36"
    >
      {offeringsData.map((offering, index) => (
        <div
          key={offering.id}
          className={`offering-card-${index} flex items-center justify-center relative py-16 md:py-36`}
        >
          <div className="absolute inset-0  bg-black" />

          <div className="container mx-auto px-6 lg:px-12 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
              {/* Content */}
              <div className={`content ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="space-y-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full" />
                    <span className="text-red-400 text-40 font-medium tracking-wider">
                      {offering.category}
                    </span>
                  </div>
                  <h2 className="text-60 font-bold text-white leading-tight">
                    {offering.title}
                  </h2>
                  <div className="space-y-2">
                    {offering.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="text-gray-300 text-lg">
                        {service}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Image */}
              <div
                className={`relative ${index % 2 === 1 ? "lg:order-1" : ""}`}
              >
                <div className="image-container relative w-full max-w-5xl lg:max-w-6xl overflow-hidden rounded-2xl aspect-[16/15] shadow-2xl backdrop-blur-md bg-white/10 border border-white/20">
                  {/* Background image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${offering.image})` }}
                  />
                  {/* Animated overlay mask */}
                  <div className="image-fill absolute inset-0 bg-black" />

                  {/* Optional logo */}
                  {offering.logo && (
                    <div className="logo absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl lg:text-8xl font-bold text-white bg-black bg-opacity-30 rounded-2xl px-8 py-4 backdrop-blur-sm">
                        {offering.logo}
                      </div>
                    </div>
                  )}
                </div>

                {/* Decorative blobs */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-red-500 rounded-full opacity-20 blur-xl" />
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-purple-500 rounded-full opacity-10 blur-2xl" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Offerings;
