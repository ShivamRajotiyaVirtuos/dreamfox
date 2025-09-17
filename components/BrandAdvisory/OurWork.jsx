import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const OurWork = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const paragraphRef = useRef(null); // New ref for paragraph
  const topGlowRef = useRef(null);
  const bottomGlowRef = useRef(null);
  const imagesRef = useRef([]);

  // Sample image URLs - replace with your actual images
  const imageSet1 = [
    "https://static.wixstatic.com/media/3d4741_088ad4a2cde54fcda775b28fe0111886~mv2.png/v1/fill/w_730,h_792,fp_0.54_0.50,q_90,enc_avif,quality_auto/ARCHIBALD-COVER-min.png",
    "https://static.wixstatic.com/media/3d4741_d1f0e254499044059089b7fc4f5338e2~mv2.png/v1/fill/w_760,h_538,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/OLIVE-min.png",
    "https://static.wixstatic.com/media/3d4741_655b3ead275b4e01a9040b4fe046f300~mv2.png/v1/fill/w_772,h_490,al_c,lg_1,q_90,enc_avif,quality_auto/ARTD-C02-Device-013-min.png",
    "https://static.wixstatic.com/media/3d4741_91322deb235249afbb23229fe25af43f~mv2.jpg/v1/fill/w_864,h_862,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2-min%20(1).jpg",
  ];

  const imageSet2 = [
    "https://static.wixstatic.com/media/3d4741_b6545e7b157842d08d622b26dd301279~mv2.png/v1/fill/w_562,h_562,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2.png",
    "https://static.wixstatic.com/media/3d4741_651459eccee1418c96d6783fe1c63735~mv2.jpg/v1/fill/w_760,h_538,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2-min%20(3).jpg",
    "https://static.wixstatic.com/media/3d4741_b6545e7b157842d08d622b26dd301279~mv2.png/v1/fill/w_562,h_562,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2.png",
    "https://static.wixstatic.com/media/3d4741_651459eccee1418c96d6783fe1c63735~mv2.jpg/v1/fill/w_760,h_538,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2-min%20(3).jpg",
  ];

  const imageSet3 = [
    "https://static.wixstatic.com/media/3d4741_088ad4a2cde54fcda775b28fe0111886~mv2.png/v1/fill/w_730,h_792,fp_0.54_0.50,q_90,enc_avif,quality_auto/ARCHIBALD-COVER-min.png",
    "https://static.wixstatic.com/media/3d4741_d1f0e254499044059089b7fc4f5338e2~mv2.png/v1/fill/w_760,h_538,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/OLIVE-min.png",
    "https://static.wixstatic.com/media/3d4741_655b3ead275b4e01a9040b4fe046f300~mv2.png/v1/fill/w_772,h_490,al_c,lg_1,q_90,enc_avif,quality_auto/ARTD-C02-Device-013-min.png",
    "https://static.wixstatic.com/media/3d4741_91322deb235249afbb23229fe25af43f~mv2.jpg/v1/fill/w_864,h_862,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2-min%20(1).jpg",
  ];

  const allImages = [...imageSet1, ...imageSet2, ...imageSet3];

  const textContent = [
    "Transforming digital experiences through innovative design",
    "Building sustainable solutions for the future",
    "Creating impactful brands that resonate with audiences",
  ];

  useEffect(() => {
    const container = containerRef.current;
    const title = titleRef.current;
    const paragraph = paragraphRef.current;
    const topGlow = topGlowRef.current;
    const bottomGlow = bottomGlowRef.current;

    gsap.set(title, { scale: 0, opacity: 0 });
    gsap.set(paragraph, { y: 20, opacity: 0 }); // Initial state for paragraph

    // Random subtle transform setup
    imagesRef.current.forEach((el, i) => {
      gsap.set(el, {
        y: "100vh",
        opacity: 0,
        // rotateX: gsap.utils.random(-20, 20),
        // rotateY: gsap.utils.random(-20, 20),
        // rotateZ: gsap.utils.random(-10, 10),
        transformPerspective: 800,
        transformOrigin: "center",
      });
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "+=800%",
        scrub: 1.5,
        markers: false,
        pin: true,
        anticipatePin: 1,
      },
    });

    // Initial animations
    tl.to(paragraph, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.out",
    }).to(
      title,
      {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: "back.out(1.7)",
      },
      "-=0.5"
    );

    // Phase 1 - Technology/Digital
    tl.to(imagesRef.current.slice(0, 4), {
      y: "-130vh",
      opacity: 1,
      duration: 4,
      ease: "power1.out",
      stagger: 0.3,
    });

    // Phase 2 - Sustainability/Growth
    tl.to(
      [topGlow, bottomGlow],
      {
        background:
          "radial-gradient(circle, rgba(34, 197, 94, 0.3) 0%, rgba(6, 182, 212, 0.2) 50%, transparent 100%)",
        duration: 0.5,
      },
      "+=1"
    )
      .to(
        paragraph,
        {
          opacity: 0,
          y: -10,
          duration: 0.3,
          ease: "power2.in",
          onComplete: () => {
            paragraph.textContent = textContent[1];
          },
        },
        "-=0.3"
      )
      .to(paragraph, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
      })
      .to(
        imagesRef.current.slice(4, 8),
        {
          y: "-130vh",
          opacity: 1,
          duration: 4,
          ease: "power1.out",
          stagger: 0.3,
        },
        "-=0.5"
      );

    // Phase 3 - Branding/Creative
    tl.to(
      [topGlow, bottomGlow],
      {
        background:
          "radial-gradient(circle, rgba(249, 115, 22, 0.3) 0%, rgba(239, 68, 68, 0.2) 50%, transparent 100%)",
        duration: 0.5,
      },
      "+=1"
    )
      .to(
        paragraph,
        {
          opacity: 0,
          y: -10,
          duration: 0.3,
          ease: "power2.in",
          onComplete: () => {
            paragraph.textContent = textContent[2];
          },
        },
        "-=0.3"
      )
      .to(paragraph, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
      })
      .to(
        imagesRef.current.slice(8, 12),
        {
          y: "-130vh",
          opacity: 1,
          duration: 10,
          ease: "power1.out",
          stagger: 1,
        },
        "-=0.5"
      );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center"
    >
      {/* Top-left glow */}
      <div
        ref={topGlowRef}
        className="absolute top-10 -left-10 w-100 h-96 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, rgba(59, 130, 246, 0.2) 50%, transparent 100%)",
        }}
      ></div>

      {/* Bottom-right glow */}
      <div
        ref={bottomGlowRef}
        className="absolute bottom-0 right-0 w-96 h-96 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, rgba(59, 130, 246, 0.2) 50%, transparent 100%)",
        }}
      ></div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-4xl px-6">
        {/* Dynamic paragraph */}
        <p
          ref={paragraphRef}
          className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 md:mb-12 font-light leading-relaxed tracking-wide"
        >
          {textContent[0]}
        </p>

        {/* Title */}
        <h2
          ref={titleRef}
          className="text-200 justify-center flex gap-3 sm:gap-0 font-bold text-white px-6 py-2"
        >
          <span className="inline-block sm:px-6 py-4 bg-clip-text text-transparent bg-gradient-to-r from-[#DC6263] to-[#D2448D]">
            Our
          </span>
          <span
            className="inline-block sm:px-6 py-4 bg-clip-text text-transparent"
            style={{
              WebkitTextStroke: "2px #D2448D",
              WebkitTextStrokeWidth: "2px",
              WebkitTextStrokeColor: "white",
            }}
          >
            Work
          </span>
        </h2>
      </div>

      {/* Images */}
      {allImages.map((src, index) => (
        <img
          key={index}
          ref={(el) => (imagesRef.current[index] = el)}
          src={src}
          alt={`Work ${index + 1}`}
          className="absolute size-[200px] md:size-[250px] lg:size-[300px] 2lx:size-[350px] object-cover  shadow-2xl z-20"
          style={{
            left: `${Math.random() * 40 + 10}%`,
            bottom: "-200px",
          }}
        />
      ))}
    </div>
  );
};

export default OurWork;
