import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const HorizontalScrollGallery = () => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const imagesRef = useRef([]);
  const textRefs = useRef([]);

  // Image data with descriptions
  const imageData = [
    {
      src: "https://assets.website-files.com/6384f0dcd0a815701796cd36/63858ebfcc6c6b9a1b751abd_iron-man-aestheticandroid-iphone-desktop-hd-backgrounds-wallpapers-1080p-4k-2muyr-3840x2160.jpg",
      title: "Iron Man",
      subtitle: "Genius. Billionaire. Playboy. Philanthropist.",
      description:
        "Tony Stark's revolutionary arc reactor technology powers the Mark suit, making him one of Earth's mightiest defenders.",
    },
    {
      src: "https://assets.website-files.com/6384f0dcd0a815701796cd36/63858ad6a391d6a38ca30cba_spider-man-no-way-home.png",
      title: "Spider-Man",
      subtitle: "With Great Power Comes Great Responsibility",
      description:
        "Peter Parker's spider-sense and web-slinging abilities make him the friendly neighborhood hero New York needs.",
    },
    {
      src: "https://www.hdwallpapers.in/download/arthur_morgan_with_gun_in_background_of_trees_mountain_and_sky_with_clouds_hd_red_dead_redemption_2-1920x1080.jpg",
      title: "Arthur Morgan",
      subtitle: "The Outlaw with a Heart",
      description: "The goated arthur morgan died with honor and dignity.",
    },
    {
      src: "https://assets.website-files.com/6384f0dcd0a815701796cd36/6385f15ca596aa177d81cea8_the-hulk-scaled.jpeg",
      title: "The Hulk",
      subtitle: "Hulk Smash!",
      description:
        "Bruce Banner's gamma radiation accident created the strongest there is - a green goliath of unlimited power and rage.",
    },
    {
      src: "/images/645364.jpg",
      title: "Thor",
      subtitle: "God of Thunder",
      description:
        "The Asgardian prince wields Mjolnir and commands lightning, bringing the power of the gods to protect Midgard.",
    },
  ];

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    const track = containerRef.current;
    const trackWrapper = trackRef.current;
    const allImgs = imagesRef.current;
    const allTexts = textRefs.current;

    if (!track || !trackWrapper || !allImgs.length) return;

    // Calculate track wrapper width
    const trackWrapperWidth = () => {
      return trackWrapper.scrollWidth;
    };

    // Set GSAP defaults
    gsap.defaults({ ease: "none" });

    // Main horizontal scroll animation
    const scrollTween = gsap.to(trackWrapper, {
      x: () => -trackWrapperWidth() + window.innerWidth,
      scrollTrigger: {
        trigger: track,
        pin: true,
        scrub: 1,
        start: "center center",
        end: () => "+=" + (trackWrapperWidth() - window.innerWidth),
        invalidateOnRefresh: true,
        markers: false,
      },
    });

    // Parallax animation for each image
    allImgs.forEach((img, i) => {
      if (!img) return;

      // Initial position to prevent jump
      gsap.set(img, {
        x: "-8vw",
      });

      // Parallax animation for image
      gsap.fromTo(
        img,
        {
          x: "-8vw",
        },
        {
          x: "2vw",
          scrollTrigger: {
            trigger: img.parentNode,
            containerAnimation: scrollTween,
            start: "left right",
            end: "right left",
            scrub: true,
            markers: false,
          },
        }
      );
    });

    // Text reveal animations
    allTexts.forEach((textContainer, i) => {
      if (!textContainer) return;

      const textElements = textContainer.querySelectorAll(".text-element");

      // Set initial state
      gsap.set(textElements, {
        y: 100,
        opacity: 0,
      });

      // Animate text in
      gsap.to(textElements, {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textContainer.parentNode,
          containerAnimation: scrollTween,
          start: "left center",
          end: "center center",
          scrub: false,
          markers: false,
        },
      });

      // Animate text out
      gsap.to(textElements, {
        y: -100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.in",
        scrollTrigger: {
          trigger: textContainer.parentNode,
          containerAnimation: scrollTween,
          start: "center center",
          end: "right left",
          scrub: false,
          markers: false,
        },
      });
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="bg-black text-gray-300 min-h-screen font-sans">
      {/* Header */}
      <header className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <h1 className="text-200 font-bold tracking-wide mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#DC6263] to-[#D2448D]">
            Our Services
          </h1>
          <p className="text-30 text-gray-400 container">
            Scroll down to explore the services Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem accusantium at impedit distinctio, debitis sequi excepturi ullam id inventore nisi optio rem, soluta voluptas animi qui voluptatum in incidunt dignissimos, adipisci ut fuga minus! Labore, eos! Magnam, suscipit amet eos quaerat voluptatibus adipisci. Cupiditate doloremque et temporibus odio, quo illum qui, modi sint labore accusantium ad hic dolor ullam? Cum tempore sed totam molestiae impedit, op.
          </p>
        </div>
      </header>

      {/* Sticky Horizontal Scroll Section */}
      <section
        ref={containerRef}
        className="sticky-element flex justify-start items-center w-full h-screen overflow-hidden"
      >
        <div
          className="track w-fit flex-shrink-0"
          style={{ paddingInline: "2%" }}
        >
          <div
            ref={trackRef}
            className="track-flex flex justify-start items-center gap-8"
            style={{ height: "100vh" }}
          >
            {imageData.map((item, index) => (
              <div
                key={index}
                className="panel-wide relative flex-shrink-0 overflow-hidden rounded-2xl"
                style={{
                  width: "90vw",
                  height: "80vh",
                }}
              >
                <img
                  ref={(el) => (imagesRef.current[index] = el)}
                  className="image relative w-full h-full object-cover"
                  src={item.src}
                  alt={item.title}
                />

                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                {/* Text overlay */}
                <div
                  //   ref={el => textRefs.current[index] = el}
                  className="absolute inset-0 flex flex-col justify-end p-12 z-10"
                >
                  <div className="text-element">
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-2 tracking-tight">
                      {item.title}
                    </h2>
                  </div>

                  <div className="text-element">
                    <h3 className="text-xl md:text-2xl font-medium text-red-400 mb-4 italic">
                      {item.subtitle}
                    </h3>
                  </div>

                  <div className="text-element max-w-2xl">
                    <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Decorative element */}
                  <div className="text-element mt-6">
                    <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-blue-500 rounded-full"></div>
                  </div>
                </div>

                {/* Optional border effect */}
                <div className="absolute inset-0 border-2 border-white/20 rounded-2xl pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HorizontalScrollGallery;
