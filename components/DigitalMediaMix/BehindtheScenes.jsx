"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import TextReveal from "../Text Reveal/textreveal";

const images = [
  "https://picsum.photos/id/32/600/400",
  "https://picsum.photos/id/33/600/400",
  "https://picsum.photos/id/34/600/400",
  "https://picsum.photos/id/35/600/400",
  "https://picsum.photos/id/36/600/400",
  "https://picsum.photos/id/37/600/400",
  "https://picsum.photos/id/38/600/400",
  "https://picsum.photos/id/39/600/400",
  "https://picsum.photos/id/40/600/400",
  "https://picsum.photos/id/41/600/400",
  "https://picsum.photos/id/32/600/400",
  "https://picsum.photos/id/33/600/400",
  "https://picsum.photos/id/34/600/400",
  "https://picsum.photos/id/35/600/400",
  "https://picsum.photos/id/36/600/400",
  "https://picsum.photos/id/37/600/400",
  "https://picsum.photos/id/38/600/400",
  "https://picsum.photos/id/39/600/400",
  "https://picsum.photos/id/40/600/400",
  "https://picsum.photos/id/41/600/400",
  "https://picsum.photos/id/32/600/400",
  "https://picsum.photos/id/33/600/400",
  "https://picsum.photos/id/34/600/400",
  "https://picsum.photos/id/35/600/400",
  "https://picsum.photos/id/36/600/400",
  "https://picsum.photos/id/37/600/400",
  "https://picsum.photos/id/38/600/400",
  "https://picsum.photos/id/39/600/400",
  "https://picsum.photos/id/40/600/400",
  "https://picsum.photos/id/41/600/400",
];

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);
  return isMobile;
};

// -----------------------------
// Swiper Carousel (Mobile)
// -----------------------------
const SwiperCarousel = () => (
  <div className="w-full h-screen  bg-black flex flex-col items-center justify-center">
    <div className=" z-10  py-8">
      <div className="text-center">
        <TextReveal
          animation="rotateX"
          stagger={0.1}
          duration={0.8}
          className="text-120 font-bold text-gray-50 mb-4"
        >
          Behind the Scenes
        </TextReveal>
        <TextReveal
          animation="rotateX"
          stagger={0.1}
          duration={0.8}
          className="text-gray-50 text-30 max-w-2xl mx-auto"
        >
          Follow these steps to get started with Bitcoin and understand the
          complete process
        </TextReveal>
      </div>
    </div>
    <Swiper
      modules={[Autoplay]}
      spaceBetween={50}
      autoplay={{
        delay: 3000,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      }}
      loop={true}
      slidesPerView={1}
      className="w-full  max-w-md h-[400px]"
    >
      {images.map((src, index) => (
        <SwiperSlide className="px-6" key={index}>
          <div
            className="w-full h-full bg-cover bg-center rounded-xl shadow-xl"
            style={{ backgroundImage: `url(${src})` }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

// -----------------------------
// 3D GSAP Ring Carousel (Desktop)
// -----------------------------
const RingCarousel = () => {
  const containerRef = useRef(null);
  const ringRef = useRef(null);
  const imagesRef = useRef([]);
  const xPosRef = useRef(0);
  const isDraggingRef = useRef(false);
  const autoRotateTween = useRef(null);

  const dragStart = (e) => {
    e.preventDefault();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    xPosRef.current = Math.round(clientX);
    isDraggingRef.current = true;

    if (autoRotateTween.current) autoRotateTween.current.pause();
    gsap.set(ringRef.current, { cursor: "grabbing" });

    document.addEventListener("mousemove", drag);
    document.addEventListener("touchmove", drag);
    document.addEventListener("mouseup", dragEnd);
    document.addEventListener("touchend", dragEnd);
  };

  const drag = (e) => {
    if (!isDraggingRef.current) return;

    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const deltaX = Math.round(clientX) - xPosRef.current;

    gsap.to(ringRef.current, {
      rotationY: `-=${deltaX}`,
      duration: 0.1,
    });

    xPosRef.current = Math.round(clientX);
  };

  const dragEnd = () => {
    isDraggingRef.current = false;
    if (autoRotateTween.current) autoRotateTween.current.play();
    gsap.set(ringRef.current, { cursor: "grab" });

    document.removeEventListener("mousemove", drag);
    document.removeEventListener("touchmove", drag);
    document.removeEventListener("mouseup", dragEnd);
    document.removeEventListener("touchend", dragEnd);
  };

  useEffect(() => {
    if (!ringRef.current || !containerRef.current) return;

    gsap
      .timeline()
      .set(ringRef.current, {
        rotationY: 180,
        cursor: "grab",
      })
      .set(imagesRef.current, {
        rotateY: (i) => i * -30,
        transformOrigin: "50% 50% 2000px",
        z: -1500,
        backfaceVisibility: "hidden",
        opacity: 1,
      })
      .from(imagesRef.current, {
        duration: 1.5,
        y: 200,
        opacity: 1,
        stagger: 0.1,
        ease: "expo.out",
      });

    autoRotateTween.current = gsap.to(ringRef.current, {
      rotationY: "+=360",
      duration: 60,
      ease: "none",
      repeat: -1,
      modifiers: {
        rotationY: gsap.utils.unitize((v) => parseFloat(v) % 360),
      },
    });

    const container = containerRef.current;
    container.addEventListener("mousedown", dragStart);
    container.addEventListener("touchstart", dragStart);

    return () => {
      container.removeEventListener("mousedown", dragStart);
      container.removeEventListener("touchstart", dragStart);
      document.removeEventListener("mousemove", drag);
      document.removeEventListener("touchmove", drag);
      document.removeEventListener("mouseup", dragEnd);
      document.removeEventListener("touchend", dragEnd);
      if (autoRotateTween.current) autoRotateTween.current.kill();
    };
  }, []);

  return (
    <div className="w-full relative  min-h-screen bg-black overflow-hidden">
      {/* Fixed header section */}
      <div className="sm:absolute top-0 left-0 right-0 z-10 pt-20 lg:pt-40 pb-8 ">
        <div className="text-center">
          <TextReveal
            animation="rotateX"
            stagger={0.1}
            duration={0.8}
            className="text-120 font-bold text-gray-50 mb-4"
          >
            Behind the Scenes
          </TextReveal>
          <TextReveal
            animation="rotateX"
            stagger={0.1}
            duration={0.8}
            className="text-gray-50 text-30 max-w-2xl mx-auto"
          >
            Follow these steps to get started with Bitcoin and understand the
            complete process
          </TextReveal>
        </div>
      </div>

      {/* 3D container centered in remaining space */}
      <div className="w-full h-full flex items-center justify-center mt-64 mb-32">
        <div
          ref={containerRef}
          className="relative w-full h-[600px]"
          style={{
            perspective: "2000px",
            transformStyle: "preserve-3d",
          }}
        >
          <div
            ref={ringRef}
            className="absolute inset-0"
            style={{
              transformStyle: "preserve-3d",
              userSelect: "none",
            }}
          >
            {images.map((src, i) => (
              <div
                key={i}
                ref={(el) => (imagesRef.current[i] = el)}
                className="absolute w-[40%] h-[90%] left-[30%] top-[5%] bg-cover bg-center rounded-2xl shadow-2xl"
                style={{
                  backgroundImage: `url(${src})`,
                  transformStyle: "preserve-3d",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const BehindTheScenes = () => {
  const isMobile = useIsMobile();
  return isMobile ? <SwiperCarousel /> : <RingCarousel />;
};

export default BehindTheScenes;
