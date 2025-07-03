import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Snapshot = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const cardsRef = useRef(null);

  const cards = [
    {
      id: 1,
      title: "Studio Fugu Redesign",
      description:
        "Complete website overhaul with modern design principles and enhanced user experience.",
      videoSrc:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    },
    {
      id: 2,
      title: "Webflow Development",
      description:
        "Custom Webflow implementation with advanced interactions and responsive design.",
      videoSrc:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    },
    {
      id: 3,
      title: "Creative Portfolio",
      description:
        "Showcasing creative work with dynamic layouts and smooth transitions.",
      videoSrc:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    },
    {
      id: 4,
      title: "Cultural Platform",
      description:
        "Platform dedicated to promoting cultural industries and creative professionals.",
      videoSrc:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    },
    {
      id: 5,
      title: "Localization Studio",
      description:
        "Website redesign & Webflow development for studio fugu, A localization studio.",
      videoSrc:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Description animation
      gsap.fromTo(
        descriptionRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.2,
          scrollTrigger: {
            trigger: descriptionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Cards stagger animation
      gsap.fromTo(
        ".card-item",
        { opacity: 0, scale: 0.9, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Handle card hover animations
  const handleCardHover = (cardId, isHovering) => {
    const card = document.querySelector(`[data-card-id="${cardId}"]`);
    const otherCards = document.querySelectorAll(
      `.card-item:not([data-card-id="${cardId}"])`
    );

    if (isHovering) {
      gsap.to(card, {
        width: "600px",
        height: "450px",
        duration: 0.3,
        ease: "power2.out",
      });

      gsap.to(otherCards, {
        width: "250px",
        height: "300px",
        duration: 0.3,
        ease: "power2.out",
      });
    } else {
      gsap.to(".card-item", {
        width: "100%",
        height: "350px",
        duration: 0.3,
        ease: "power2.out",
      });
    }

    setHoveredCard(isHovering ? cardId : null);
  };

  return (
    <section
      ref={sectionRef}
      className="flex justify-center items-center text-white py-16 lg:py-32 px-8"
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="text-6xl font-bold mb-8">
            Case Snapshots
          </h2>
          <p
            ref={descriptionRef}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Website redesign & Webflow development for studio fugu, A
            localization studio dedicated to the creative and cultural
            industries.
          </p>
        </div>

        {/* Cards Grid */}
        <div
          ref={cardsRef}
          className="flex gap-4 w-full overflow-hidden justify-center items-end min-h-[500px]"
        >
          {cards.map((card) => (
            <div
              key={card.id}
              data-card-id={card.id}
              className="card-item relative  bg-white overflow-hidden cursor-pointer rounded-sm  h-[350px]"
              onMouseEnter={() => handleCardHover(card.id, true)}
              onMouseLeave={() => handleCardHover(card.id, false)}
            >
              <div className="relative w-full h-full">
                <video
                  src={card.videoSrc}
                  className="w-full h-full object-cover"
                  muted
                  loop
                  playsInline
                  ref={(video) => {
                    if (video) {
                      if (hoveredCard === card.id) {
                        video.play();
                      } else {
                        video.pause();
                        video.currentTime = 0;
                      }
                    }
                  }}
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                {/* Content */}
                {hoveredCard === card.id && (
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
                    <p className="text-sm text-gray-200">{card.description}</p>
                  </div>
                )}

                {/* Card title when not hovered */}
                {hoveredCard !== card.id && (
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="text-lg font-semibold">{card.title}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Snapshot;
