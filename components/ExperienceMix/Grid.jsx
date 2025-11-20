import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextReveal from "../Text Reveal/textreveal";
import AnimatedButton from "../buttons/AnimatedButton";
import Image from "next/image";
import Link from "next/link";

const HorizontalScrollGallery = () => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const imagesRef = useRef([]);
  const textRefs = useRef([]);

  // Image data with descriptions
  const imageData = [
    {
      src: "/images/dreamfox_vsys.webp",
      title: "VSYS",
      subtitle: "The Systems Company",
      description:
        "Assimilate and compose Talent, Skills, Culture, and Performance into one growth system. vsys.com",
      url: "https://vsys.com/",
      logo_url: "/logos/vsys_logo.svg",
      height: 80,
      width: 200,
    },
    {
      src: "/images/dreamfox_tekcorp.webp",
      title: "TEKCORP",
      subtitle: "The AI + Cloud Specialist",
      description:
        "Empowering enterprises with intelligent software, scalable cloud systems, and transformative digital engineering. tekcorp.com",
      url: "https://tekcorp.com/",
      logo_url: "/logos/tekcorp_logo.svg",
      height: 80,
      width: 400,
    },
    {
      src: "/images/Dreamfox_plumjob.webp",
      title: "PLUMJOB",
      subtitle: "The Talent Recruitment Platform",
      description:
        "Connecting exceptional talent with extraordinary opportunities—where ambition meets purpose. plumjob.com",
      url: "https://plumjob.com/",
      logo_url: "/logos/plumjob_logo.svg",
      height: 80,
      width: 250,
    },
    {
      src: "/images/dreamfox_sweven.webp",
      title: "SWEVEN",
      subtitle: "CRM Mastermind",
      description:
        "Reimagining Customer Relationships with AI-born Experience Intelligence that goes beyond CRM. sweven.com",
      url: "https://sweven.com/",
      logo_url: "/logos/sweven_logo.svg",
      height: 80,
      width: 250,
    },
    {
      src: "/images/dreamfox_indic.webp",
      title: "INDIC",
      subtitle: "Digital Experience Portfolio Company",
      description:
        "Building a Global Identity Rooted in India's culture, heritage, and digital ambition.",
      url: "https://indic.com/",
      logo_url: "/logos/indic_logo.svg",
      height: 80,
      width: 250,
    },
  ];

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    const track = containerRef.current;
    const trackWrapper = trackRef.current;
    const allImgs = imagesRef.current;
    const allTexts = textRefs.current;

    if (!track || !trackWrapper || !allImgs.length) return;

    // Calculate track wrapper width
    const trackWrapperWidth = () => {
      return trackWrapper.scrollWidth;
    };

    // Set GSAP defaults
    gsap.defaults({ ease: "none" });

    // Main horizontal scroll animation
    const scrollTween = gsap.to(trackWrapper, {
      x: () => -trackWrapperWidth() + window.innerWidth,
      scrollTrigger: {
        trigger: track,
        pin: true,
        scrub: 1,
        start: "center center",
        end: () => "+=" + (trackWrapperWidth() - window.innerWidth),
        invalidateOnRefresh: true,
        markers: false,
      },
    });

    // Parallax animation for each image
    allImgs.forEach((img, i) => {
      if (!img) return;

      // Initial position to prevent jump
      gsap.set(img, {
        x: "-8vw",
      });

      // Parallax animation for image
      gsap.fromTo(
        img,
        {
          x: "-8vw",
        },
        {
          x: "2vw",
          scrollTrigger: {
            trigger: img.parentNode,
            containerAnimation: scrollTween,
            start: "left right",
            end: "right left",
            scrub: true,
            markers: false,
          },
        }
      );
    });

    // Text reveal animations
    allTexts.forEach((textContainer, i) => {
      if (!textContainer) return;

      const textElements = textContainer.querySelectorAll(".text-element");

      // Set initial state
      gsap.set(textElements, {
        y: 100,
        opacity: 0,
      });

      // Animate text in
      gsap.to(textElements, {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textContainer.parentNode,
          containerAnimation: scrollTween,
          start: "left center",
          end: "center center",
          scrub: false,
          markers: false,
        },
      });

      // Animate text out
      gsap.to(textElements, {
        y: -100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.in",
        scrollTrigger: {
          trigger: textContainer.parentNode,
          containerAnimation: scrollTween,
          start: "center center",
          end: "right left",
          scrub: false,
          markers: false,
        },
      });
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="bg-black text-gray-300 min-h-screen font-sans">
      {/* Header */}
      <header className="flex justify-center items-center min-h-screen">
        <div className="text-center flex flex-col justify-center items-center px-4">
          <TextReveal
            animation="rotateX"
            stagger={0.1}
            duration={0.8}
            className="text-200 font-bold tracking-wide mb-4 text-white"
          >
            Design Services
          </TextReveal>
          <TextReveal
            animation="rotateX"
            stagger={0.1}
            duration={0.8}
            className="text-30 mb-6 sm:mb-16 text-gray-400 container"
          >
            Our design services powered by Designara Studio fuse strategy,
            aesthetics, and technology. We build cohesive brand ecosystems that
            thrive across digital touchpoints. Every creation is human-centered,
            data-driven, and emotionally resonant.
          </TextReveal>

          {/* <AnimatedButton
            text="Design story"
            href="/services/design-studio/vsys"
          /> */}
        </div>
      </header>

      {/* Sticky Horizontal Scroll Section */}
      <section
        ref={containerRef}
        className="sticky-element  flex justify-start items-center w-full h-screen overflow-hidden"
      >
        <div
          className="track w-fit flex-shrink-0"
          style={{ paddingInline: "2%" }}
        >
          <div
            ref={trackRef}
            className="track-flex flex justify-start items-center gap-8"
            style={{ height: "100vh" }}
          >
            {imageData.map((item, index) => (
              <Link href={item.url} target="_blank" key={index}>
                <div
                  key={index}
                  className="panel-wide relative 2xl:mt-20 3xl:mt-0 flex-shrink-0 overflow-hidden rounded-2xl"
                  style={{
                    width: "90vw",
                    height: "80vh",
                  }}
                >
                  <img
                    ref={(el) => (imagesRef.current[index] = el)}
                    className="image relative w-full h-full object-cover sm:object-cover object-center"
                    src={item.src}
                    alt={item.title}
                  />

                  <Image
                    src={item.logo_url}
                    alt={item.title + " logo"}
                    width={item.width}
                    height={item.height}
                    className={`absolute scale-50 lg:scale-100 top-6 left-0 sm:left-auto xl:top-20 sm:right-30 z-20`}
                  />
                  {/* <div className="absolute inset-0 bg-gradient-to-r from-black via-black/30 to-transparent" /> */}
                  <div className="absolute inset-0 bg-gradient-to-l from-black via-black/30 to-transparent" />
                  {/* Dark overlay for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  {/* Text overlay */}
                  <div
                    //   ref={el => textRefs.current[index] = el}
                    className="absolute inset-0 flex flex-col justify-end p-12 z-10"
                  >
                    <div className="text-element">
                      <h2 className="text-60 font-bold text-white mb-2 tracking-tight">
                        {item.title}
                      </h2>
                    </div>

                    <div className="text-element">
                      <h3 className="text-24 font-medium text-red-400 mb-4 italic">
                        {item.subtitle}
                      </h3>
                    </div>

                    <div className="text-element max-w-2xl">
                      <p className="text-20 text-gray-200 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Decorative element */}
                    <div className="text-element mt-6">
                      <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-blue-500 rounded-full"></div>
                    </div>
                  </div>

                  {/* Optional border effect */}
                  <div className="absolute inset-0 border-2 border-white/20 rounded-2xl pointer-events-none" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HorizontalScrollGallery;
