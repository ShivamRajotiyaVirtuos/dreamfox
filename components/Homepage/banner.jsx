"use client";

import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
  Mousewheel,
  Keyboard,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Banner1 from "./banners/banner1";
import Banner2 from "./banners/banner2";
import Banner3 from "./banners/banner3";

const Banner = () => {
  const swiperRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = ["Banner 1", "Banner 2", "Banner 3"];

  const onSlideChange = (swiper) => {
    setCurrentSlide(swiper.realIndex);
  };

  const onSlideChangeTransitionStart = () => {
    setIsAnimating(true);
  };

  const onSlideChangeTransitionEnd = () => {
    setIsAnimating(false);
  };

  const goToSlide = (index) => {
    if (swiperRef.current && !isAnimating) {
      swiperRef.current.slideTo(index);
    }
  };

  const nextSlide = () => {
    if (swiperRef.current && !isAnimating) {
      swiperRef.current.slideNext();
    }
  };

  const prevSlide = () => {
    if (swiperRef.current && !isAnimating) {
      swiperRef.current.slidePrev();
    }
  };

  return (
    <div className="relative w-full h-full">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[
          Navigation,
          Pagination,
          Autoplay,
          EffectFade,
          Mousewheel,
          Keyboard,
        ]}
        spaceBetween={0}
        slidesPerView={1}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        speed={800} // Smooth transition speed
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        mousewheel={{
          forceToAxis: false,
          sensitivity: 1,
          releaseOnEdges: true,
        }}
        keyboard={{
          enabled: true,
          onlyInViewport: true,
        }}
        grabCursor={true}
        touchRatio={1}
        touchAngle={45}
        longSwipes={true}
        longSwipesRatio={0.5}
        loop={true}
        longSwipesMs={300}
        followFinger={true}
        allowTouchMove={true}
        resistance={true}
        resistanceRatio={0.85}
        onSlideChange={onSlideChange}
        onSlideChangeTransitionStart={onSlideChangeTransitionStart}
        onSlideChangeTransitionEnd={onSlideChangeTransitionEnd}
        className="w-full h-full " 
      >
        <SwiperSlide>
          <Banner1 />
        </SwiperSlide>
        <SwiperSlide>
          <Banner2 />
        </SwiperSlide>
        <SwiperSlide>
          <Banner3 />
        </SwiperSlide>
      </Swiper>

      {/* Enhanced Custom Navigation */}
      <div className="absolute -bottom-6 xl:bottom-8 left-1/2 transform -translate-x-1/2 z-50 w-full flex justify-center">
        <div className="flex items-center justify-center space-x-4 sm:space-x-8 bg-black/30 backdrop-blur-2xl border border-white/20 rounded-full px-4 sm:px-8 py-3 sm:py-4 shadow-2xl">
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            disabled={isAnimating}
            className={`flex group relative overflow-hidden items-center justify-center w-6 h-6 sm:w-14 sm:h-14 bg-white/10 hover:bg-gradient-to-r hover:from-[#DC6263] hover:to-[#D2448D] border border-white/30 hover:border-transparent rounded-full transition-all duration-500 transform hover:scale-110 ${
              isAnimating
                ? "opacity-50 cursor-not-allowed"
                : "hover:shadow-lg hover:shadow-pink-500/25"
            }`}
          >
            <svg
              className="w-4 h-4 sm:w-6 sm:h-6 text-white transition-all duration-300 group-hover:scale-110 group-hover:-translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 opacity-0 group-hover:opacity-100 rounded-full transition-all duration-300" />
          </button>

          {/* Enhanced Pagination Dots */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isAnimating}
                className={`relative transition-all duration-500 transform hover:scale-125 ${
                  isAnimating ? "cursor-not-allowed" : "cursor-pointer"
                }`}
              >
                {/* Outer Ring */}
                <div
                  className={`w-2.5 h-2.5 sm:w-4 sm:h-4 rounded-full border-2 sm:border-2 transition-all duration-500 ${
                    index === currentSlide
                      ? "border-[#D2448D] scale-125"
                      : "border-white/30 hover:border-white/60"
                  }`}
                >
                  {/* Inner Dot */}
                  <div
                    className={`w-full h-full rounded-full transition-all duration-500 ${
                      index === currentSlide
                        ? "bg-gradient-to-r from-[#DC6263] to-[#D2448D] scale-75"
                        : "bg-white/20 hover:bg-white/40 scale-50"
                    }`}
                  />
                </div>

                {/* Active Indicator Glow */}
                {index === currentSlide && (
                  <div className="absolute inset-0 w-2.5 h-2.5 sm:w-4 sm:h-4 bg-[#D2448D] rounded-full opacity-30 animate-pulse" />
                )}
              </button>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            disabled={isAnimating}
            className={`flex group relative overflow-hidden items-center justify-center w-6 h-6 sm:w-14 sm:h-14 bg-white/10 hover:bg-gradient-to-r hover:from-[#DC6263] hover:to-[#D2448D] border border-white/30 hover:border-transparent rounded-full transition-all duration-500 transform hover:scale-110 ${
              isAnimating
                ? "opacity-50 cursor-not-allowed"
                : "hover:shadow-lg hover:shadow-pink-500/25"
            }`}
          >
            <svg
              className="w-4 h-4 sm:w-6 sm:h-6 text-white transition-all duration-300 group-hover:scale-110 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M9 5l7 7-7 7"
              />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 opacity-0 group-hover:opacity-100 rounded-full transition-all duration-300" />
          </button>
        </div>
      </div>

      {/* Enhanced Slide Counter */}
      {/* <div className="absolute top-8 right-8 z-50">
        <div className="bg-black/30 backdrop-blur-2xl border border-white/20 rounded-2xl px-6 py-4 shadow-2xl">
          <div className="flex items-center space-x-3">
            <div className="text-right">
              <div className="text-2xl font-bold text-[#D2448D]">
                {String(currentSlide + 1).padStart(2, "0")}
              </div>
              <div className="text-xs text-white/60 font-medium uppercase tracking-wider">
                Current
              </div>
            </div>
            <div className="w-px h-8 bg-white/20" />
            <div className="text-left">
              <div className="text-lg text-white/80 font-semibold">
                {String(slides.length).padStart(2, "0")}
              </div>
              <div className="text-xs text-white/60 font-medium uppercase tracking-wider">
                Total
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Enhanced Progress Bar */}
      {/* <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10 z-40">
        <div
          className="h-full bg-gradient-to-r from-[#DC6263] via-[#D2448D] to-[#DC6263] transition-all duration-800 ease-out relative overflow-hidden"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
        </div>
      </div> */}

      {/* Touch/Swipe Indicators */}
      {/* <div className="absolute left-4 top-1/2 transform -translate-y-1/2 z-40 opacity-50">
        <div className="flex flex-col items-center space-y-2 text-white/60">
          <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          <span className="text-xs font-medium uppercase tracking-wider writing-mode-vertical">Swipe</span>
        </div>
      </div>

      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-40 opacity-50">
        <div className="flex flex-col items-center space-y-2 text-white/60">
          <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
          <span className="text-xs font-medium uppercase tracking-wider writing-mode-vertical">Swipe</span>
        </div>
      </div> */}
    </div>
  );
};

export default Banner;
