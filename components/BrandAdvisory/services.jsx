"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const images = [
  {
    // src: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=800&fit=crop",
    alt: "brand-strategy",
    src:"",
    title1: "OUR",
    title2: "SERVICES.",
    description: "",
  },
  {
    // src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
    alt: "digital-marketing",
    title1: "DIGITAL",
    src:"/images/services/digital_marketing.webp",
    title2: "MARKETING",
    description:
      "Data-driven marketing campaigns across all digital platforms to maximize your reach and ROI.",
  },
  {
    // src: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&h=800&fit=crop",
    alt: "creative-design",
    title1: "CREATIVE",
    src:"/images/services/creative_design.webp",
    title2: "DESIGN",
    description:
      "Innovative visual solutions that capture attention and communicate your brand message effectively.",
  },
  {
    // src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=800&fit=crop",
    alt: "web-development",
    title1: "WEB",
    title2: "DEVELOPMENT",
    src:"/images/services/web_development.webp",
    description:
      "Custom websites and applications built with cutting-edge technology for optimal performance.",
  },
  {
    // src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&h=800&fit=crop",
    alt: "content-creation",
    title1: "CONTENT",
    src:"/images/services/content_creation.webp",
    title2: "CREATION",
    description:
      "Engaging content that tells your story and connects with your audience across all touchpoints.",
  },
  {
    // src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
    alt: "analytics-insights",
    title1: "ANALYTICS",
    title2: "INSIGHTS",
    src:"/images/services/analytics_insights.webp",
    description:
      "Deep data analysis and actionable insights to optimize your marketing performance and strategy.",
  },
];

export default function Services() {
  const containerRef = useRef(null);
  const slidesRef = useRef([]);
  const firstTitle1Ref = useRef(null);
  const firstTitle2Ref = useRef(null);
  const image2ref = useRef(null);
  const image3ref = useRef(null);
  const image4ref = useRef(null);
  const image5ref = useRef(null);
  const image6ref = useRef(null);


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
    // gsap.set(
    //   [
    //     image2ref.current,
    //     image3ref.current,
    //     image4ref.current,
    //     image5ref.current,
    //   ],
    //   {
    //     scale: 0.8,
    //     opacity: 0,
    //     rotateX: gsap.utils.random(-20, 20),
    //     rotateY: gsap.utils.random(-20, 20),
    //     rotateZ: gsap.utils.random(-10, 10),
    //     transformPerspective: 400,
    //     transformOrigin: "center",
    //   }
    // );

    gsap.set(image2ref.current, {
      scale: 0.8,
      opacity: 0,
      rotateX: gsap.utils.random(-20, 20),
      rotateY: gsap.utils.random(-20, 20),
      rotateZ: gsap.utils.random(-10, 10),
      transformPerspective: 400,
      transformOrigin: "center",
    });
    gsap.set(image3ref.current, {
      scale: 0.8,
      opacity: 0,
      rotateX: gsap.utils.random(-20, 20),
      rotateY: gsap.utils.random(-20, 20),
      rotateZ: gsap.utils.random(-10, 10),
      transformPerspective: 400,
      transformOrigin: "center",
    });
    gsap.set(image4ref.current, {
      scale: 0.8,
      opacity: 0,
      rotateX: gsap.utils.random(-20, 20),
      rotateY: gsap.utils.random(-20, 20),
      rotateZ: gsap.utils.random(-10, 10),
      transformPerspective: 400,
      transformOrigin: "center",
    });
    gsap.set(image5ref.current, {
      scale: 0.8,
      opacity: 0,
      rotateX: gsap.utils.random(-20, 20),
      rotateY: gsap.utils.random(-20, 20),
      rotateZ: gsap.utils.random(-10, 10),
      transformPerspective: 400,
      transformOrigin: "center",
    });
    gsap.set(image6ref.current, {
      scale: 0.8,
      opacity: 0,
      rotateX: gsap.utils.random(-20, 20),
      rotateY: gsap.utils.random(-20, 20),
      rotateZ: gsap.utils.random(-10, 10),
      transformPerspective: 400,
      transformOrigin: "center",
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

    gsap.to(
      [
        image2ref.current,
        image3ref.current,
        image4ref.current,
        image5ref.current,
        image6ref.current,

      ],
      {
        // y: "-120vh",
        opacity: 1,
        duration: 4,
        ease: "power1.out",
        stagger: 0.3,
      }
      //   "+=0.5"
    );
    // gsap.to(image2ref.current, {
    //   scale: 1,
    //   opacity: 1,
    //   rotation: 10,

    //   duration: 1.2,
    //   ease: "power2.out",
    //   scrollTrigger: {
    //     markers: true,
    //     trigger: slidesRef.current[1],
    //     start: "top +80%",
    //     toggleActions: "play none none reverse",
    //   },
    // });
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
            className="w-screen h-screen flex-shrink-0 py-16 absolute px-4"
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
            className="w-screen h-screen flex-shrink-0 py-16 absolute px-4"
          >
            <figure className="relative bg-black flex flex-col xl:flex-row xl:gap-10 items-center justify-center w-full h-full m-0">
              <img
                ref={image2ref}
                src={images[1]?.src}
                alt={images[1]?.alt}
                className=" sm:w-[18rem] xl:w-[26rem] xs:h-[30rem] xl:h-[40rem] object-cover"
              />
              <div className="flex-col gap-4  flex items-center justify-center bg-black/40">
                <div className="flex items-start xl:items-start xl:justify-center flex-col">
                  <h2 className="text-200 font-bold  py-2">
                    <span className="inline-block   py-4 bg-clip-text  text-white bg-gradient-to-r from-[#DC6263] to-[#D2448D]">
                      {images[1].title1}
                    </span>
                    <br />
                    <span
                      className=" xl:ml-36 flex justify-end"
                      style={{
                        WebkitTextStroke: "1px white",
                        WebkitTextStrokeWidth: "1px",
                        WebkitTextStrokeColor: "white",
                        // mixBlendMode: "screen",
                      }}
                    >
                      {images[1].title2}
                    </span>
                  </h2>
                  <p className="text-40 xl:pl-72 max-w-7xl xl:mt-10 text-white  py-2">
                    {images[1]?.description}
                  </p>
                </div>
              </div>
            </figure>
          </div>

          {/* Third Card - Creative Design */}
          <div
            ref={(el) => (slidesRef.current[2] = el)}
            className="w-screen h-screen flex-shrink-0 py-16 absolute px-4"
          >
            <figure className="relative flex  flex-col xl:flex-row xl:gap-10 items-center justify-center bg-black w-full h-full m-0">
              <img
                ref={image3ref}
                src={images[2]?.src}
                alt={images[2]?.alt}
                className="sm:w-[18rem] xl:w-[26rem] xs:h-[30rem] xl:h-[40rem] object-cover"
              />
              <figcaption className="flex-col gap-4  flex items-start xl:items-start justify-center bg-black/40">
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
                <p className="text-40 max-w-5xl  text-white   py-2">
                  {images[2]?.description}
                </p>
              </figcaption>
            </figure>
          </div>

          {/* Fourth Card - Web Development */}
          <div
            ref={(el) => (slidesRef.current[3] = el)}
            className="w-screen h-screen flex-shrink-0 py-16 absolute px-4"
          >
            <figure className="relative bg-black flex flex-col xl:flex-row xl:gap-10 items-center justify-center w-full h-full m-0">
              <img
                ref={image4ref}
                src={images[3]?.src}
                alt={images[3]?.alt}
                className="sm:w-[18rem] xl:w-[26rem] xs:h-[30rem] xl:h-[40rem] object-cover"
              />
              <div className="flex-col gap-4  flex items-center justify-center bg-black/40">
                <div className="flex items-start xl:items-start xl:justify-center flex-col">
                  <h2 className="text-200 font-bold  py-2">
                    <span className="inline-block   py-4 bg-clip-text  text-white bg-gradient-to-r from-[#DC6263] to-[#D2448D]">
                      {images[3].title1}
                    </span>
                    <br />
                    <span
                      className=" xl:ml-36 flex justify-end"
                      style={{
                        WebkitTextStroke: "1px white",
                        WebkitTextStrokeWidth: "1px",
                        WebkitTextStrokeColor: "white",
                        // mixBlendMode: "screen",
                      }}
                    >
                      {images[3].title2}
                    </span>
                  </h2>
                  <p className="text-40 xl:pl-72 max-w-7xl xl:mt-10 text-white  py-2">
                    {images[3]?.description}
                  </p>
                </div>
              </div>
            </figure>
          </div>

          {/* Fifth Card - Content Creation */}
          <div
            ref={(el) => (slidesRef.current[4] = el)}
            className="w-screen h-screen flex-shrink-0 py-16 absolute px-4"
          >
            <figure className="relative flex items-center flex-col xl:flex-row xl:gap-10 justify-center bg-black w-full h-full m-0">
              <img
                ref={image5ref}
                src={images[4]?.src}
                alt={images[4]?.alt}
                className="sm:w-[18rem] xl:w-[26rem] xs:h-[30rem] xl:h-[40rem] object-cover"
              />
              <figcaption className="flex-col gap-4  flex items-start xl:items-start justify-center bg-black/40">
                <h2 className="text-200   font-bold   py-2">
                  <span className="inline-block   py-4 bg-clip-text  text-white bg-gradient-to-r from-[#DC6263] to-[#D2448D]">
                    {images[4].title1}
                  </span>
                  <br />
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
                <p className="text-40 max-w-5xl  text-white   py-2">
                  {images[4]?.description}
                </p>
              </figcaption>
            </figure>
          </div>

          {/* Sixth Card - Analytics & Insights */}
          <div
            ref={(el) => (slidesRef.current[5] = el)}
            className="w-screen h-screen px-4 flex-shrink-0 py-16 absolute"
          >
            <figure className="relative bg-black flex flex-col xl:flex-row xl:gap-10 items-center justify-center w-full h-full m-0">
              <img
                ref={image6ref}
                src={images[5]?.src}
                alt={images[5]?.alt}
                className="sm:w-[18rem] xl:w-[26rem] xs:h-[30rem] xl:h-[40rem] object-cover"
              />
              <div className="flex-col gap-4  flex items-center justify-center bg-black/40">
                <div className="flex items-start xl:items-start xl:justify-center flex-col">
                  <h2 className="text-200 font-bold  py-2">
                    <span className="inline-block   py-4 bg-clip-text  text-white bg-gradient-to-r from-[#DC6263] to-[#D2448D]">
                      {images[5].title1}
                    </span>
                    <br />
                    <span
                      className=" xl:ml-36 flex xl:justify-end"
                      style={{
                        WebkitTextStroke: "1px white",
                        WebkitTextStrokeWidth: "1px",
                        WebkitTextStrokeColor: "white",
                        // mixBlendMode: "screen",
                      }}
                    >
                      {images[5].title2}
                    </span>
                  </h2>
                  <p className="text-40 xl:pl-94 max-w-7xl xl:mt-10  text-white  py-2">
                    {images[5]?.description}
                  </p>
                </div>
              </div>
            </figure>
          </div>
        </div>
      </section>
    </>
  );
}
