"use client";

import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import TextReveal from "../Text Reveal/textreveal";

const Showreel = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const swiperRef = useRef(null);

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
      title: "Mobile App UI",
      description: "Intuitive fitness tracking application",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
      category: "UI/UX",
    },
    {
      id: 4,
      title: "Corporate Website",
      description: "Professional business presence online",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      category: "Development",
    },
    {
      id: 5,
      title: "Creative Campaign",
      description: "Digital marketing campaign design",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
      category: "Marketing",
    },
    {
      id: 6,
      title: "Portfolio Website",
      description: "Artist portfolio with interactive gallery",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      category: "Portfolio",
    },
    // {
    //   id: 7,
    //   title: "Landing Page",
    //   description: "High-converting product landing page",
    //   image:
    //     "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop",
    //   category: "Landing",
    // },
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
      className="py-16 lg:pt-32 pb-72 px-4 md:px-8 bg-black text-white "
      id="snapreel"
    >
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <TextReveal className="text-120 font-bold mb-6">
            The DreamFox Showreel
          </TextReveal>
          <h2></h2>

          <TextReveal className="text-40 font-extralight  text-gray-300 mx-auto">
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
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 25,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            autoplay={{
              delay: 0,
              pauseOnMouseEnter: false,
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
                className={` ${project.id % 2 !== 0 ? "mt-24" : ""}`}
                key={project.id}
              >
                <div className="relative  flex items-center group cursor-pointer perspective-1000">
                  {/* Envelope Container */}
                  <div
                    className="relative w-full h-[20rem] sm:h-[24rem] md:h-[28rem] "
                    onMouseEnter={() => {
                      handleCardHover(project.id, true);
                      swiperRef.current?.autoplay?.stop();
                    }}
                    onMouseLeave={() => {
                      handleCardHover(project.id, false);
                      swiperRef.current?.autoplay?.start();
                    }}
                  >
                    <div className="">
                      <Image
                        className={`absolute -bottom-20  z-20  transition-all duration-700 ease-out transform ${
                          hoveredCard === project.id
                            ? "transform translate-y-4 opacity-100 transition-all duration-500 ease-out shadow-2xl"
                            : "transform translate-y-0 transition-all duration-500 ease-out opacity-0"
                        }`}
                        src={"/images/folder.svg"}
                        height={300}
                        width={400}
                      />
                      {hoveredCard === project.id ? (
                        <div className="p-4 absolute -bottom-20 z-20 ">
                          <h3 className="text-24  rounded-full px-4 font-bold text-white mb-2  line-clamp-2">
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
                            ? "transform -rotate-3 translate-y-24 rounded-3xl grayscale-0    z-10"
                            : "transform grayscale translate-y-16 rotate-0 "
                        }
                      
                      `}
                    >
                      {/* Project Image */}
                      <div className="h-96 overflow-hidden relative">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full border border-white/20 !rounded-3xl object-cover transition-transform duration-300 "
                        />
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
