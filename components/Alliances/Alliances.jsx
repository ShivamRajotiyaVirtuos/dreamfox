"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { o } from "framer-motion/dist/types.d-D0HXPxHm";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Alliances_card = () => {
  const containerRef = useRef(null);

  const offeringsData = [
    {
      id: 1,
      title: "Enterprise Database Solutions and Cloud Infrastructure",
      category: "ORACLE",
      alliance:"oracle",
      services: [
        "Database Management",
        "Cloud Infrastructure",
        "Enterprise Applications",
        "Data Analytics",
      ],
      image: "/images/alliances/oracle.webp",
      bgColor: "from-purple-900 to-blue-900",
      description:
        "Leveraging Oracle's robust database and cloud solutions to deliver scalable enterprise applications.",
    },
    {
      id: 2,
      title: "Advanced Analytics and Business Intelligence Solutions",
      category: "COHERING",
      alliance:"cohering",
      services: [
        "Data Analytics",
        "Business Intelligence",
        "Machine Learning",
        "Predictive Modeling",
      ],
      image: "/images/alliances/cohering.webp",
      bgColor: "from-orange-800 to-purple-900",
      description:
        "Transforming raw data into actionable insights through advanced analytics and AI-driven solutions.",
    },
    {
      id: 3,
      title: "Web Hosting and Domain Management Excellence",
      category: "GO-DADDY",
      alliance:"godaddy",
      services: [
        "Web Hosting",
        "Domain Registration",
        "Website Builder",
        "SSL Certificates",
      ],
      image: "/images/alliances/godaddy.webp",
      bgColor: "from-purple-900 to-blue-900",
      description:
        "Comprehensive web presence solutions from domain registration to fully managed hosting services.",
    },
    {
      id: 4,
      title: "Cloud Computing and Digital Transformation Solutions",
      category: "MICROSOFT",
      alliance:"microsoft",
      services: [
        "Azure Cloud Services",
        "Office 365",
        "Power Platform",
        "AI & Machine Learning",
      ],
      image: "/images/alliances/microsoft.webp",
      bgColor: "from-purple-900 to-blue-900",
      description:
        "Empowering businesses with Microsoft's comprehensive cloud ecosystem and productivity tools.",
    },
    {
      id: 5,
      title: "Customer Relationship Management and Sales Automation",
      category: "SALESFORCE",
      alliance:"salesforce",
      services: [
        "CRM Implementation",
        "Sales Cloud",
        "Marketing Cloud",
        "Service Cloud",
      ],
      image: "/images/alliances/salesforce.webp",
      bgColor: "from-purple-900 to-blue-900",
      description:
        "Building stronger customer relationships through world-class CRM and automation solutions.",
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
              ease: "back.out(0.5)",
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
          yPercent: 0,
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
      className="min-h-screen bg-black overflow-hidden pb-16 sm:py-26 md:py-36"
    >
      {offeringsData.map((offering, index) => (
        <div
          key={offering.id}
          id={offering.alliance}
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
                  <div className="flex flex-wrap gap-2">
                    {offering.services.map((service, serviceIndex) => (
                      <div
                        key={serviceIndex}
                        className="text-gray-300 px-3 py-2 border border-gray-500 rounded-full text-16 flex items-center h-8 whitespace-nowrap"
                      >
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

export default Alliances_card;
