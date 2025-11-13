"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ProjectsSection = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  const imageSet1 = [
    "https://static.wixstatic.com/media/3d4741_088ad4a2cde54fcda775b28fe0111886~mv2.png/v1/fill/w_730,h_792,fp_0.54_0.50,q_90,enc_avif,quality_auto/ARCHIBALD-COVER-min.png",
    "https://static.wixstatic.com/media/3d4741_d1f0e254499044059089b7fc4f5338e2~mv2.png/v1/fill/w_760,h_538,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/OLIVE-min.png",
    "https://static.wixstatic.com/media/3d4741_655b3ead275b4e01a9040b4fe046f300~mv2.png/v1/fill/w_772,h_490,al_c,lg_1,q_90,enc_avif,quality_auto/ARTD-C02-Device-013-min.png",
    // "https://static.wixstatic.com/media/3d4741_91322deb235249afbb23229fe25af43f~mv2.jpg/v1/fill/w_864,h_862,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2-min%20(1).jpg",
  ];

  const imageSet2 = [
    "https://static.wixstatic.com/media/3d4741_b6545e7b157842d08d622b26dd301279~mv2.png/v1/fill/w_562,h_562,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2.png",
    "https://static.wixstatic.com/media/3d4741_651459eccee1418c96d6783fe1c63735~mv2.jpg/v1/fill/w_760,h_538,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2-min%20(3).jpg",
    "https://static.wixstatic.com/media/3d4741_b6545e7b157842d08d622b26dd301279~mv2.png/v1/fill/w_562,h_562,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2.png",
    // "https://static.wixstatic.com/media/3d4741_651459eccee1418c96d6783fe1c63735~mv2.jpg/v1/fill/w_760,h_538,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2-min%20(3).jpg",
  ];

  const imageSet3 = [
    "https://static.wixstatic.com/media/3d4741_088ad4a2cde54fcda775b28fe0111886~mv2.png/v1/fill/w_730,h_792,fp_0.54_0.50,q_90,enc_avif,quality_auto/ARCHIBALD-COVER-min.png",
    "https://static.wixstatic.com/media/3d4741_d1f0e254499044059089b7fc4f5338e2~mv2.png/v1/fill/w_760,h_538,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/OLIVE-min.png",
    "https://static.wixstatic.com/media/3d4741_655b3ead275b4e01a9040b4fe046f300~mv2.png/v1/fill/w_772,h_490,al_c,lg_1,q_90,enc_avif,quality_auto/ARTD-C02-Device-013-min.png",
    // "https://static.wixstatic.com/media/3d4741_91322deb235249afbb23229fe25af43f~mv2.jpg/v1/fill/w_864,h_862,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/2-min%20(1).jpg",
  ];

  // Combine all images for 12 cards
  const allImages = [...imageSet1, ...imageSet2, ...imageSet3];

  const projectData = [
    { title: "Vsys", category: "Technology", type: "[web design, branding]" },
    { title: "Giftcart", category: "E-commerce", type: "[web design, branding]" },
    { title: "BetterBuyClub", category: "Retail", type: "[web design, branding]" },
    { title: "Thomas Cook", category: "Travel", type: "[web design, branding]" },
    { title: "PlumJob", category: "Recruitment", type: "[web design, branding]" },
    { title: "Tekcorp", category: "Technology", type: "[web design, branding]" },
    { title: "Sweven", category: "Lifestyle", type: "[web design, branding]" },
    { title: "Indic", category: "Education", type: "[web design, branding]" },
    { title: "Crosswalk", category: "Consulting", type: "[web design, branding]" },
    // Add more if needed to match your image count
  ];
  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current.filter(Boolean);

    if (!section || cards.length === 0) return;

    // Pin the entire section
    const pinTrigger = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "+=250%", // Pin for 3x viewport height
      pin: true,
      anticipatePin: 1,
    });

    // Different scroll speeds for each card
    const scrollSpeeds = [
      0.5, 0.8, 1, 0.3, 1.3, 0.9, 1.2, 0.6, 1.9, 0.9, 0.6, 1.4,
    ];

    cards.forEach((card, index) => {
      if (!card) return;

      const speed = scrollSpeeds[index % scrollSpeeds.length];

      gsap.set(card, {
        y: window.innerHeight + 100,
        rotation: Math.random() * 20 - 10, // Random initial rotation
      });

      gsap.to(card, {
        y: -window.innerHeight - 100,
        rotation: Math.random() * 10 - 5, // Slight rotation during animation
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=300%",
          scrub: speed,
        },
      });

      // Fade out animation
      gsap.to(card, {
        // opacity: 0,
        scrollTrigger: {
          trigger: section,
          start: "+=250%",
          end: "+=300%",
          scrub: 1,
        },
      });
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
    <div
      ref={sectionRef}
      className="h-screen bg-black text-white relative overflow-hidden"
    >
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Fixed PROJECTS Title */}
      <div
        ref={titleRef}
        className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
      >
        <h1 className="text-120 font-bold tracking-tight text-center">
          PROJECTS<span className="text-pink-500">.</span>
        </h1>
      </div>

      {/* Scrolling Cards Container */}
      <div className="absolute inset-0 z-30">
        {allImages.slice(0, 7).map((image, index) => {
          const positions = [
            { left: "15%", top: "10%" },
            { right: "10%", top: "25%" },
            { left: "40%", top: "60%" },
            { right: "05%", top: "72%" },
            { left: "05%", top: "75%" },
            { right: "25%", top: "120%" },
            { left: "18%", top: "130%" },
            // { right: "15%", top: "30%" },
            // { left: "35%", top: "85%" },
            // { right: "30%", top: "10%" },
            // { left: "10%", top: "40%" },
            // { right: "8%", top: "60%" },
          ];

          const position = positions[index];
          const mobpositions = [
            { left: "15%", top: "-10%" },
            { right: "10%", top: "25%" },
            { left: "10%", top: "55%" },
            { right: "05%", top: "85%" },
            { left: "05%", top: "110%" },
            { right: "5%", top: "130%" },
            { left: "8%", top: "160%" },
            // { right: "15%", top: "30%" },
            // { left: "35%", top: "85%" },
            // { right: "30%", top: "10%" },
            // { left: "10%", top: "40%" },
            // { right: "8%", top: "60%" },
          ];

          const mobposition = mobpositions[index];
          return (
            <>
              <div
                key={index}
                ref={addToRefs}
                className=" sm:block hidden absolute w-48 md:w-56 lg:w-64 2xl:w-96"
                style={position}
              >
                <div className="bg-zinc-900/90 backdrop-blur-sm  p-4 shadow-2xl border border-zinc-800 hover:border-zinc-600 transition-all duration-300">
                  <div className="mb-3">
                    <span className="text-[10px] text-gray-400 uppercase tracking-wider block">
                      {projectData[index]?.category || "PROJECT"}
                    </span>
                    <span className="text-[9px] text-gray-500">
                      {projectData[index]?.type || "[web design]"}
                    </span>
                  </div>
                  <div className="relative aspect-[4/3]  overflow-hidden bg-zinc-800">
                    <img
                      src={image}
                      alt={projectData[index]?.title || `Project ${index + 1}`}
                      height={500}
                      width={500}
                      className="object-cover"
                      sizes="(max-width: 768px) 192px, (max-width: 1024px) 224px, 256px"
                    />
                    {/* <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" /> */}
                  </div>
                  <div className="mt-3">
                    <h3 className="text-xs font-semibold text-white truncate">
                      {projectData[index]?.title || `Project ${index + 1}`}
                    </h3>
                  </div>
                </div>
              </div>
              <div
                key={index}
                ref={addToRefs}
                className="absolute w-48 md:w-56 lg:w-64 2xl:w-96  block sm:hidden"
                style={mobposition}
              >
                <div className="bg-zinc-900/90 backdrop-blur-sm  p-4 shadow-2xl border border-zinc-800 hover:border-zinc-600 transition-all duration-300">
                  <div className="mb-3">
                    <span className="text-[10px] text-gray-400 uppercase tracking-wider block">
                      {projectData[index]?.category || "PROJECT"}
                    </span>
                    <span className="text-[9px] text-gray-500">
                      {projectData[index]?.type || "[web design]"}
                    </span>
                  </div>
                  <div className="relative aspect-[4/3]  overflow-hidden bg-zinc-800">
                    <img
                      src={image}
                      alt={projectData[index]?.title || `Project ${index + 1}`}
                      height={500}
                      width={500}
                      className="object-cover"
                      sizes="(max-width: 768px) 192px, (max-width: 1024px) 224px, 256px"
                    />
                    {/* <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" /> */}
                  </div>
                  <div className="mt-3">
                    <h3 className="text-xs font-semibold text-white truncate">
                      {projectData[index]?.title || `Project ${index + 1}`}
                    </h3>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>

      {/* Subtle background elements */}
      <div className="absolute top-10 right-10 w-2 h-2 bg-white opacity-20 rounded-full z-5"></div>
      <div className="absolute bottom-20 left-10 w-1 h-1 bg-white opacity-30 rounded-full z-5"></div>
      <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-red-500 opacity-40 rounded-full z-5"></div>
      <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-white opacity-25 rounded-full z-5"></div>
    </div>
  );
};

export default ProjectsSection;
