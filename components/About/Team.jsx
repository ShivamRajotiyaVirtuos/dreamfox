"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import TextReveal from "../Text Reveal/textreveal";

const Team = () => {
  const swiperInstance = useRef(null);

  const projects = [
    {
      id: 1,
      title: "Brand Identity",
      description: "Complete visual identity for tech startup",
      image:
        "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=300&fit=crop",
      category: "Branding",
    },
    {
      id: 2,
      title: "E-commerce",
      description: "Modern shopping experience design",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      category: "Web Design",
    },
    {
      id: 3,
      title: "App UI Design",
      description: "Intuitive mobile app interfaces",
      image:
        "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop",
      category: "Mobile UI",
    },
    {
      id: 4,
      title: "Corporate Website",
      description: "Professional design for B2B services",
      image:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop",
      category: "Web",
    },
    {
      id: 5,
      title: "Product Design",
      description: "Elegant product landing pages",
      image:
        "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=400&h=300&fit=crop",
      category: "Landing",
    },
    {
        id: 1,
        title: "Brand Identity",
        description: "Complete visual identity for tech startup",
        image:
          "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=300&fit=crop",
        category: "Branding",
      },
      {
        id: 2,
        title: "E-commerce",
        description: "Modern shopping experience design",
        image:
          "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
        category: "Web Design",
      },
      {
        id: 3,
        title: "App UI Design",
        description: "Intuitive mobile app interfaces",
        image:
          "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=300&fit=crop",
        category: "Mobile UI",
      },
      {
        id: 4,
        title: "Corporate Website",
        description: "Professional design for B2B services",
        image:
          "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop",
        category: "Web",
      },
      {
        id: 5,
        title: "Product Design",
        description: "Elegant product landing pages",
        image:
          "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=400&h=300&fit=crop",
        category: "Landing",
      },
  ];

  return (
    <section
      className=" overflow-hidden pb-72 px-4 md:px-8 bg-black text-white"
      id="snapreel"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <TextReveal className="text-120 font-semibold mb-6">
            The Team
          </TextReveal>
          <TextReveal className="text-40 font-extralight text-gray-300 mx-auto">
            Text Description Text Description Text Description 
          </TextReveal>
        </div>

        {/* Hover container to control autoplay */}
        <div
          className="relative"
          onMouseEnter={() => swiperInstance.current?.autoplay?.stop()}
          onMouseLeave={() => swiperInstance.current?.autoplay?.start()}
        >
          <Swiper
            modules={[Autoplay, Navigation]}
            loop={true}
            freeMode={false}
            spaceBetween={30}
            speed={3000}
            slidesPerView="auto"
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 25 },
              1024: { slidesPerView: 2, spaceBetween: 30 },
              1324: { slidesPerView: 4, spaceBetween: 30 },
            }}
            autoplay={{
              delay: 100,
              pauseOnMouseEnter: false,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            onSwiper={(swiper) => {
              swiperInstance.current = swiper;
            }}
            className="pb-8"
          >
            {projects.map((project, idx) => (
              <SwiperSlide
                className={`${idx % 2 !== 0 ? "sm:mt-24" : ""}`}
                key={project.id + "-" + idx}
              >
                <div className="relative flex items-center group cursor-pointer perspective-1000">
                  <div className="relative w-full h-[26rem] sm:h-[26rem] md:h-[30rem] pt-6">
                    {/* Card container */}
                    <div className="absolute top-0 inset-x-6 z-10 rounded-3xl shadow-lg transition-all duration-500 ease-out">
                      <div className="h-96 overflow-hidden relative border border-white/20 rounded-3xl">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover rounded-3xl"
                        />
                      </div>
                    </div>

                    {/* Folder Image with Text Overlay */}
                    <div className="absolute -bottom-10 z-20 w-[500px] max-w-full left-1/2 -translate-x-1/2">
                      <div className="relative w-full h-[180px]">
                        <Image
                          className="absolute bottom-0 left-0 z-10 transition-all duration-700 ease-out transform translate-y-4 opacity-100 shadow-2xl"
                          src={"/images/folder.svg"}
                          height={300}
                          width={500}
                          alt="folder"
                        />
                        <div className="absolute z-20 bottom-4 left-4 text-left">
                          <h3 className="text-24 font-semibold text-white mb-2 line-clamp-2">
                            {project.title}
                          </h3>
                          <p className="text-16 text-white">
                            {project.description}
                          </p>
                        </div>
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

export default Team;
