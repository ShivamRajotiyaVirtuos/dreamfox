"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const images = [
  {
    // src: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=800&fit=crop",
    alt: "brand-strategy",
    title1: "OUR",
    title2: "SERVICES.",
    description: "",
  },
  {
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
    alt: "digital-marketing",
    title1: "DIGITAL",
    title2: "MARKETING",
    description:
      "Data-driven marketing campaigns across all digital platforms to maximize your reach and ROI.",
  },
  {
    src: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&h=800&fit=crop",
    alt: "creative-design",
    title1: "CREATIVE",
    title2: "DESIGN",
    description:
      "Innovative visual solutions that capture attention and communicate your brand message effectively.",
  },
  {
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=800&fit=crop",
    alt: "web-development",
    title1: "WEB",
    title2: "DEVELOPMENT",
    description:
      "Custom websites and applications built with cutting-edge technology for optimal performance.",
  },
  {
    src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&h=800&fit=crop",
    alt: "content-creation",
    title1: "CONTENT",
    title2: "CREATION",
    description:
      "Engaging content that tells your story and connects with your audience across all touchpoints.",
  },
  {
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
    alt: "analytics-insights",
    title1: "ANALYTICS",
    title2: "INSIGHTS",
    description:
      "Deep data analysis and actionable insights to optimize your marketing performance and strategy.",
  },
];

export default function Services() {
  const containerRef = useRef(null);
  const slidesRef = useRef([]);
  const firstTitle1Ref = useRef(null);
  const firstTitle2Ref = useRef(null);
  useEffect(() => {
    const slides = slidesRef.current;

    // Set initial positions without gaps
    gsap.set(slides, {
      x: (i) => i * window.innerWidth,
      position: "absolute",
      top: 0,
      left: 0,
    });
    gsap.set([firstTitle1Ref.current, firstTitle2Ref.current], {
      scale: 0,
      opacity: 0,
    });

    const totalSlides = slides.length;

    const scrollTween = gsap.to(slides, {
      x: (i) => (i - (totalSlides - 1)) * window.innerWidth,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: () => `+=${window.innerHeight * (totalSlides - 1)}`, // Changed from innerWidth to innerHeight
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });
    gsap.to([firstTitle1Ref.current, firstTitle2Ref.current], {
      scale: 1,
      opacity: 1,
      duration: 1.6,
      ease: "power2.out",
      stagger: 0.3, // 0.2s delay between title1 and title2
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        toggleActions: "play none none reverse",
      },
    });
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      scrollTween.kill();
    };
  }, []);

  return (
    <>
      <section ref={containerRef} className="overflow-hidden relative">
        <div className="relative h-screen w-full">
          {/* First Card - OUR SERVICES */}
          <div
            ref={(el) => (slidesRef.current[0] = el)}
            className="w-screen h-screen flex-shrink-0 absolute"
          >
            <figure className="relative bg-black w-full h-full m-0">
              {/* <img
                src={images[0]?.src}
                alt={images[0]?.alt}
                className="w-96 h-96 object-cover"
              /> */}
              <figcaption className="flex-col gap-4 absolute inset-0 flex items-center justify-center bg-black/40">
                <h2
                  ref={firstTitle1Ref}
                  className="text-200 font-bold text-white px-6 py-2"
                >
                  <span className="inline-block  px-6 py-4 bg-clip-text text-transparent bg-gradient-to-r from-[#DC6263] to-[#D2448D]">
                    {images[0].title1}
                  </span>
                  <span
                    // ref={firstTitle2Ref}
                    className="inline-block  px-6 py-4 bg-clip-text text-transparent "
                    style={{
                      WebkitTextStroke: "2px #D2448D",
                      WebkitTextStrokeWidth: "2px",
                      WebkitTextStrokeColor: "white",
                    }}
                  >
                    {images[0].title2}
                  </span>
                </h2>
                {/* <p className="text-40 max-w-4xl  text-white px-6 py-2">
                  {images[0]?.description}
                </p> */}
              </figcaption>
            </figure>
          </div>

          {/* Second Card - Digital Marketing */}
          <div
            ref={(el) => (slidesRef.current[1] = el)}
            className="w-screen h-screen flex-shrink-0 absolute"
          >
            <figure className="relative bg-black w-full h-full m-0">
              <img
                src={images[1]?.src}
                alt={images[1]?.alt}
                className="w-96 h-96 object-cover"
              />
              <figcaption className="flex-col gap-4 absolute inset-0 flex items-center justify-center bg-black/40">
                <h2 className="text-200 font-bold  py-2">
                  <span className="inline-block   py-4 bg-clip-text  text-white bg-gradient-to-r from-[#DC6263] to-[#D2448D]">
                    {images[1].title1}
                  </span>
                  <br />
                  <span
                    style={{
                      WebkitTextStroke: "1px white",
                      WebkitTextStrokeWidth: "1px",
                      WebkitTextStrokeColor: "white",
                    }}
                  >
                    {images[1].title2}
                  </span>
                </h2>
                <p className="text-40  max-w-4xl text-white  py-2">
                  {images[1]?.description}
                </p>
              </figcaption>
            </figure>
          </div>

          {/* Third Card - Creative Design */}
          <div
            ref={(el) => (slidesRef.current[2] = el)}
            className="w-screen h-screen  flex-shrink-0 absolute"
          >
            <figure className="relative flex items-center justify-center bg-black w-full h-full m-0">
              <img
                src={images[2]?.src}
                alt={images[2]?.alt}
                className="w-96 h-96 object-cover"
              />
              <figcaption className="flex-col gap-4 absolute inset-0 flex items-center justify-center bg-black/40">
                <h2 className="text-200   font-bold   py-2">
                  <span className="inline-block   py-4 bg-clip-text  text-white bg-gradient-to-r from-[#DC6263] to-[#D2448D]">
                    {images[2].title1}
                  </span>
                  <br />
                  <span
                    style={{
                      WebkitTextStroke: "1px white",
                      WebkitTextStrokeWidth: "1px",
                      WebkitTextStrokeColor: "white",
                    }}
                  >
                    {images[2].title2}
                  </span>
                </h2>
                <p className="text-40 max-w-5xl  text-white  py-2">
                  {images[2]?.description}
                </p>
              </figcaption>
            </figure>
          </div>

          {/* Fourth Card - Web Development */}
          <div
            ref={(el) => (slidesRef.current[3] = el)}
            className="w-screen h-screen flex-shrink-0 absolute"
          >
            <figure className="relative bg-black w-full h-full m-0">
              <img
                src={images[3]?.src}
                alt={images[3]?.alt}
                className="w-96 h-96 object-cover"
              />
              <figcaption className="flex-col gap-4 absolute inset-0 flex items-center justify-center bg-black/40">
                <h2 className="text-200 font-bold  px-6 py-2">
                  <span className="inline-block  px-6 py-4 bg-clip-text  text-white bg-gradient-to-r from-[#DC6263] to-[#D2448D]">
                    {images[3].title1}
                  </span>
                  <span
                    style={{
                      WebkitTextStroke: "1px white",
                      WebkitTextStrokeWidth: "1px",
                      WebkitTextStrokeColor: "white",
                    }}
                  >
                    {images[3].title2}
                  </span>
                </h2>
                <p className="text-40 text-center  text-white px-6 py-2">
                  {images[3]?.description}
                </p>
              </figcaption>
            </figure>
          </div>

          {/* Fifth Card - Content Creation */}
          <div
            ref={(el) => (slidesRef.current[4] = el)}
            className="w-screen h-screen flex-shrink-0 absolute"
          >
            <figure className="relative bg-black w-full h-full m-0">
              <img
                src={images[4]?.src}
                alt={images[4]?.alt}
                className="w-96 h-96 object-cover"
              />
              <figcaption className="flex-col gap-4 absolute inset-0 flex items-center justify-center bg-black/40">
                <h2 className="text-200 font-bold px-6 py-2">
                  <span className="inline-block  px-6 py-4 bg-clip-text  text-white bg-gradient-to-r from-[#DC6263] to-[#D2448D]">
                    {images[4].title1}
                  </span>
                  <span
                    style={{
                      WebkitTextStroke: "1px white",
                      WebkitTextStrokeWidth: "1px",
                      WebkitTextStrokeColor: "white",
                    }}
                  >
                    {images[4].title2}
                  </span>
                </h2>
                <p className="text-40 text-center  text-white px-6 py-2">
                  {images[4]?.description}
                </p>
              </figcaption>
            </figure>
          </div>

          {/* Sixth Card - Analytics & Insights */}
          <div
            ref={(el) => (slidesRef.current[5] = el)}
            className="w-screen h-screen flex-shrink-0 absolute"
          >
            <figure className="relative bg-black w-full h-full m-0">
              <img
                src={images[5]?.src}
                alt={images[5]?.alt}
                className="w-96 h-96 object-cover"
              />
              <figcaption className="flex-col gap-4 absolute inset-0 flex items-center justify-center bg-black/40">
                <h2 className="text-200 font-bold e px-6 py-2">
                  <span className="inline-block  px-6 py-4 bg-clip-text  text-white bg-gradient-to-r from-[#DC6263] to-[#D2448D]">
                    {images[5].title1}
                  </span>
                  <span
                    style={{
                      WebkitTextStroke: "1px white",
                      WebkitTextStrokeWidth: "1px",
                      WebkitTextStrokeColor: "white",
                    }}
                  >
                    {images[5].title2}
                  </span>
                </h2>
                <p className="text-40 text-center  text-white px-6 py-2">
                  {images[5]?.description}
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
    </>
  );
}
