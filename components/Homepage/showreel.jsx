"use client";

import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import TextReveal from "../Text Reveal/textreveal";
import { PlusCircleIcon } from "@heroicons/react/24/solid";

const Showreel = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const swiperRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "ECommerce & DXP",
      description: "Complete visual identity for tech startup",
      image: "/images/home/ecommerce_dxp.webp",
      category: "Designara",
    },
    {
      id: 2,
      title: "Brand Strategy",
      description: "Modern shopping experience design",
      image: "/images/home/brand_strategy.webp",
      category: "Positioning & ID by Brandlara",
    },
    {
      id: 3,
      title: "Search Marketing",
      description: "Intuitive fitness tracking application",
      image: "/images/home/search_marketing.webp",
      category: "Audacis for SEO/SEM",
    },
    {
      id: 4,
      title: "Logo Design Services",
      description: "Logonama",
      image: "/images/home/logo_design_services.webp",
      category: "Logonama",
    },
    {
      id: 5,
      title: "Marketing Automation",
      description: "CRM & Workflows",
      image: "/images/home/marketing_automation.webp",
      category: "Marketing",
    },
    {
      id: 6,
      title: "Artwork & Visuals",
      description: "Creatives by Designara",
      image: "/images/home/artwork_and_visuals.webp",
      category: "Portfolio",
    },
    {
      id: 7,
      title: "AI + Digital Marketing",
      description: "Complete visual identity for tech startup",
      image: "/images/home/ai_digital_marketing.webp",
      category: "Assimilations",
    },
    {
      id: 8,
      title: "Experience Design",
      description: "Modern shopping experience design",
      image: "/images/home/experience_design.webp",
      category: "CX & Innovation",
    },
    {
      id: 9,
      title: "Web Development",
      description: "Intuitive fitness tracking application",
      image: "/images/home/web_development.webp",
      category: "UI/UX Design by Designara",
    },
    {
      id: 10,
      title: "Social Media",
      description: "Professional business presence online",
      image: "/images/home/social_media.webp",
      category: "Engagement & Management",
    },
    {
      id: 11,
      title: "Content Marketing",
      description: "Digital marketing campaign design",
      image: "/images/home/content_marketing.webp",
      category: "Copy & Campaigns",
    },
    {
      id: 12,
      title: "ECommerce & DXP",
      description: "Complete visual identity for tech startup",
      image: "/images/home/ecommerce_dxp.webp",
      category: "Designara",
    },
    {
      id: 13,
      title: "Brand Strategy",
      description: "Modern shopping experience design",
      image: "/images/home/brand_strategy.webp",
      category: "Positioning & ID by Brandlara",
    },
    {
      id: 14,
      title: "Search Marketing",
      description: "Intuitive fitness tracking application",
      image: "/images/home/search_marketing.webp",
      category: "Audacis for SEO/SEM",
    },
    {
      id: 15,
      title: "Logo Design Services",
      description: "Logonama",
      image: "/images/home/logo_design_services.webp",
      category: "Logonama",
    },
    {
      id: 16,
      title: "Marketing Automation",
      description: "CRM & Workflows",
      image: "/images/home/marketing_automation.webp",
      category: "Marketing",
    },
    {
      id: 17,
      title: "Artwork & Visuals",
      description: "Creatives by Designara",
      image: "/images/home/artwork_and_visuals.webp",
      category: "Portfolio",
    },
    {
      id: 18,
      title: "AI + Digital Marketing",
      description: "Complete visual identity for tech startup",
      image: "/images/home/ai_digital_marketing.webp",
      category: "Assimilations",
    },
    {
      id: 19,
      title: "Experience Design",
      description: "Modern shopping experience design",
      image: "/images/home/experience_design.webp",
      category: "CX & Innovation",
    },
    {
      id: 20,
      title: "Web Development",
      description: "Intuitive fitness tracking application",
      image: "/images/home/web_development.webp",
      category: "UI/UX Design by Designara",
    },
    {
      id: 21,
      title: "Social Media",
      description: "Professional business presence online",
      image: "/images/home/social_media.webp",
      category: "Engagement & Management",
    },
    {
      id: 22,
      title: "Content Marketing",
      description: "Digital marketing campaign design",
      image: "/images/home/content_marketing.webp",
      category: "Copy & Campaigns",
    },
    {
      id: 23,
      title: "ECommerce & DXP",
      description: "Complete visual identity for tech startup",
      image: "/images/home/ecommerce_dxp.webp",
      category: "Designara",
    },
    {
      id: 24,
      title: "Brand Strategy",
      description: "Modern shopping experience design",
      image: "/images/home/brand_strategy.webp",
      category: "Positioning & ID by Brandlara",
    },
    {
      id: 25,
      title: "Search Marketing",
      description: "Intuitive fitness tracking application",
      image: "/images/home/search_marketing.webp",
      category: "Audacis for SEO/SEM",
    },
    {
      id: 26,
      title: "Logo Design Services",
      description: "Logonama",
      image: "/images/home/logo_design_services.webp",
      category: "Logonama",
    },
    {
      id: 27,
      title: "Marketing Automation",
      description: "CRM & Workflows",
      image: "/images/home/marketing_automation.webp",
      category: "Marketing",
    },
    {
      id: 28,
      title: "Artwork & Visuals",
      description: "Creatives by Designara",
      image: "/images/home/artwork_and_visuals.webp",
      category: "Portfolio",
    },
    {
      id: 29,
      title: "AI + Digital Marketing",
      description: "Complete visual identity for tech startup",
      image: "/images/home/ai_digital_marketing.webp",
      category: "Assimilations",
    },
    {
      id: 30,
      title: "Experience Design",
      description: "Modern shopping experience design",
      image: "/images/home/experience_design.webp",
      category: "CX & Innovation",
    },
    {
      id: 31,
      title: "Web Development",
      description: "Intuitive fitness tracking application",
      image: "/images/home/web_development.webp",
      category: "UI/UX Design by Designara",
    },
    {
      id: 32,
      title: "Social Media",
      description: "Professional business presence online",
      image: "/images/home/social_media.webp",
      category: "Engagement & Management",
    },
    {
      id: 33,
      title: "Content Marketing",
      description: "Digital marketing campaign design",
      image: "/images/home/content_marketing.webp",
      category: "Copy & Campaigns",
    },
  ];

  const handleCardHover = (cardId, isHovering) => {
    setHoveredCard(isHovering ? cardId : null);

    // Stop/start swiper on hover
    // if (swiperRef?.current) {
    //   if (isHovering) {
    //     swiperRef.current.autoplay.stop();
    //   } else {
    //     swiperRef.current.autoplay.start();
    //   }
    // }
  };

  return (
    <section
      className="py-16 overflow-hidden lg:pt-32 pb-72 px-4 md:px-8 bg-black text-white "
      id="snapreel"
    >
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <TextReveal
            className="text-120 font-semibold mb-6"
            animation="rotateX"
            stagger={0.1}
            duration={0.8}
          >
            The DreamFox Showreel
          </TextReveal>
          <h2></h2>

          <TextReveal
            className="text-40 font-extralight  text-gray-300 mx-auto"
            animation="rotateX"
            stagger={0.1}
            duration={0.8}
          >
            Bold brands. Sharp design. Stories in motion.
          </TextReveal>
        </div>

        {/* Swiper Container */}
        <div className="relative ">
          <Swiper
            ref={swiperRef}
            modules={[Autoplay, Navigation]}
            loop={true}
            // allowTouchMove={true}
            freeMode={false}
            spaceBetween={30}
            speed={3000}
            slidesPerView="auto"
            easing="linear"
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
                speed: 1000,
                easing: "linear", // Add to each breakpoint
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 25,
                speed: 2000,
                easing: "linear", // Add to each breakpoint
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 30,
                easing: "linear", // Add to each breakpoint
              },
              1324: {
                slidesPerView: 3,
                spaceBetween: 30,
                easing: "linear", // Add to each breakpoint
              },
            }}
            autoplay={{
              delay: 0,
              pauseOnMouseEnter: true,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            // onMouseEnter={() => {
            //   if (swiperRef.current) {
            //     swiperRef.current.autoplay.stop();
            //   }
            // }}
            // onMouseLeave={() => {
            //   if (swiperRef.current) {
            //     swiperRef.current.autoplay.start();
            //   }
            // }}
            className="pb-8"
          >
            {projects.map((project) => (
              <SwiperSlide
                className={` ${project.id % 2 !== 0 ? " sm:mt-16" : ""}`}
                key={project.id}
              >
                <div className="relative  flex items-center group cursor-pointer perspective-1000">
                  {/* Envelope Container */}
                  <div
                    className="relative w-full h-[24rem] sm:h-[24rem] md:h-[28rem] "
                    onMouseEnter={() => {
                      handleCardHover(project.id, true);
                      swiperRef.current?.autoplay?.stop();
                    }}
                    onClick={() => {
                      handleCardHover(project.id, true);
                      swiperRef.current?.autoplay?.stop();
                    }}
                    onMouseLeave={() => {
                      handleCardHover(project.id, false);
                      swiperRef.current?.autoplay?.start();
                    }}
                  >
                    <div className="z-30 ">
                      <Image
                        className={`absolute -bottom-24 sm:-bottom-20 opacity-90  z-20  transition-all duration-700 ease-out transform ${
                          hoveredCard === project.id
                            ? "transform translate-y-8 opacity-100 transition-all duration-500 ease-out shadow-2xl"
                            : "transform translate-y-8 2xl:translate-y-0 transition-all duration-500 ease-out opacity-100 2xl:opacity-0"
                        }`}
                        src={"/images/folder.svg"}
                        height={300}
                        width={500}
                      />
                      <div className="p-4 2xl:hidden absolute -bottom-20 z-20 ">
                        <h3 className="text-24  rounded-full px-4 font-semibold text-white mb-2  line-clamp-2">
                          {project.title}
                        </h3>
                        <div className="mb-2">
                          <p className="text-16 text-white  px-4 py-1 rounded-full">
                            {project.description}
                          </p>
                        </div>
                      </div>
                      {hoveredCard === project.id ? (
                        <div className="p-4 hidden 2xl:block absolute -bottom-20 z-20 ">
                          <h3 className="text-24  rounded-full px-4 font-semibold text-white mb-2  line-clamp-2">
                            {project.title}
                          </h3>
                          <div className="mb-2">
                            <span className="text-16 text-white  px-4 py-1 rounded-full">
                              {project.description}
                            </span>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                    </div>

                    <div
                      className={`absolute inset-6  rounded-3xl shadow-lg  transition-all duration-500 ease-out
                        
                        ${
                          hoveredCard === project.id
                            ? "transform -rotate-3 sm:translate-y-16 rounded-3xl     z-10"
                            : "transform   translate-y-12 rotate-0 "
                        }
                      
                      `}
                    >
                      {/* Project Image */}
                      <div className="h-[24rem] sm:h-[28rem] overflow-hidden relative">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full border border-white/20 !rounded-3xl object-cover transition-transform duration-300 "
                        />
                        {hoveredCard !== project.id && (
                          <PlusCircleIcon className="size-7 lg:block hidden absolute top-4 right-4 text-white  transition-opacity duration-300" />
                        )}
                        {hoveredCard !== project.id && (
                          <div className="p-4 absolute bottom-0">
                            <h3 className="text-20 bg-white backdrop-blur-sm rounded-full px-5 py-1 font-semibold text-black mb-2  line-clamp-2">
                              {project.title}
                            </h3>
                            <div className="mb-2">
                              <span className="text-16 text-black bg-white px-4 py-1 rounded-full">
                                {project.category}
                              </span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Showreel;
