"use client";

import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

const Showreel = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const swiperRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "Brand Identity Design",
      description: "Complete visual identity for tech startup",
      image:
        "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=300&fit=crop",
      category: "Branding",
    },
    {
      id: 2,
      title: "E-commerce Platform",
      description: "Modern shopping experience design",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      category: "Web Design",
    },
    {
      id: 3,
      title: "Mobile App Interface",
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
    {
      id: 7,
      title: "Dashboard Design",
      description: "Analytics dashboard for SaaS platform",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      category: "Dashboard",
    },
    {
      id: 8,
      title: "Landing Page",
      description: "High-converting product landing page",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop",
      category: "Landing",
    },
  ];

  const handleCardHover = (cardId, isHovering) => {
    setHoveredCard(isHovering ? cardId : null);

    // Stop/start swiper on hover
    if (swiperRef.current) {
      if (isHovering) {
        swiperRef.current.autoplay?.stop();
      } else {
        swiperRef.current.autoplay?.start();
      }
    }
  };

  return (
    <section className="py-16 lg:py-32 px-4 md:px-8 bg-black text-white ">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            The DreamFox Showreel
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            The DreamFox Showreel
          </p>
        </div>

        {/* Swiper Container */}
        <div className="relative">
          <Swiper
            ref={swiperRef}
            modules={[Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
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
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            loop={true}
            className="pb-8"
          >
            {projects.map((project) => (
              <SwiperSlide className="!h-[30rem] " key={project.id}>
                <div
                  className="relative flex items-center group cursor-pointer perspective-1000"
                  onMouseEnter={() => handleCardHover(project.id, true)}
                  onMouseLeave={() => handleCardHover(project.id, false)}
                >
                  {/* Envelope Container */}
                  <div className="relative w-full h-96">
                    <Image
                      className={`absolute -bottom-20 z-20  transition-all duration-500 ease-out ${
                        hoveredCard === project.id
                          ? "transform translate-y-4 shadow-2xl"
                          : "transform translate-y-0"
                      }`}
                      src={"/images/folder.svg"}
                      height={300}
                      width={400}
                    />

                    <div
                      className={`absolute inset-6 bg-white rounded-md shadow-lg  transition-all duration-500 ease-out ${
                        hoveredCard === project.id
                          ? "transform -translate-y-12 -rotate-3 scale-105 z-10"
                          : "transform translate-y-16 rotate-0 scale-100"
                      }`}
                    >
                      {/* Project Image */}
                      <div className="h-48 overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>

                      {/* Project Info */}
                      <div className="p-4">
                        <div className="mb-2">
                          <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                            {project.category}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button className="swiper-button-prev-custom bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full p-3 transition-all duration-300">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button className="swiper-button-next-custom bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full p-3 transition-all duration-300">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
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
