import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

const CardStyle1 = ({ 
  title = "Navigating the new tariff landscape and its economic impact", 
  description = "U.S. tariffs have introduced unprecedented uncertainty for executives to adapt to. In this perspective, we outline four pillars of resilience that enable enterprise resilience and how they can help you navigate the new tariff landscape.", 
  tag = "PERSPECTIVE", 
  backgroundImage = "/work/work1.png",
  className = "",
  onCardClick = () => {}
}) => {
  const cardRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const expandButtonRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    const image = imageRef.current;
    const text = textRef.current;
    const expandButton = expandButtonRef.current;

    // Set initial states
    gsap.set(text, { x: "100%", opacity: 0 });
    gsap.set(expandButton, { x: "100%", opacity: 0 });
    gsap.set(image, { x: "0%" }); // Ensure initial position is set

    let enterTimeline = null;
    let leaveTimeline = null;

    const handleMouseEnter = () => {
      // Kill any existing leave animation
      if (leaveTimeline) {
        leaveTimeline.kill();
      }

      // Create new enter timeline
      enterTimeline = gsap.timeline();

      enterTimeline
        .to(image, {
          x: "-100%",
          duration: 0.3,
          ease: "power2.out",
        })
        .to(
          text,
          {
            x: "0%",
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
          },
          0.1
        )
        .to(
          expandButton,
          {
            x: "0%",
            opacity: 1,
            duration: 0.4,
            ease: "power2.out",
          },
          0.3
        );
    };

    const handleMouseLeave = () => {
      // Kill any existing enter animation
      if (enterTimeline) {
        enterTimeline.kill();
      }

      // Create new leave timeline
      leaveTimeline = gsap.timeline();

      leaveTimeline
        .to(expandButton, {
          x: "100%",
          opacity: 0,
          duration: 0.3,
          ease: "power2.in",
        })
        .to(
          text,
          {
            x: "100%",
            opacity: 0,
            duration: 0.3,
            ease: "power2.in",
          },
          0.1
        )
        .to(
          image,
          {
            x: "0%", // Explicitly return to original position
            duration: 0.3,
            ease: "power2.inOut",
          },
          0.2
        );
    };

    // Add event listeners
    if (card) {
      card.addEventListener('mouseenter', handleMouseEnter);
      card.addEventListener('mouseleave', handleMouseLeave);
    }

    // Cleanup function
    return () => {
      if (enterTimeline) enterTimeline.kill();
      if (leaveTimeline) leaveTimeline.kill();
      
      if (card) {
        card.removeEventListener('mouseenter', handleMouseEnter);
        card.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <div className={className}>
      <div
        ref={cardRef}
        className="relative w-96 hover:scale-105 transition-all duration-300 h-[600px] bg-white  shadow-2xl overflow-hidden cursor-pointer"
        onClick={onCardClick}
      >
        {/* Default/Initial State */}
        <div className="absolute inset-0 p-8 flex flex-col justify-between">
          {/* Header Content */}
          <div className="">
            <div className="text-sm font-semibold text-gray-600 mb-4 tracking-wide">
              {tag.toUpperCase()}
            </div>
            <h1 className="text-24 font-bold text-gray-900 leading-tight mb-8">
              {title}
            </h1>
          </div>

          {/* Purple Mountain Background */}
          <div ref={imageRef} className="absolute inset-0 ">
            <div className="absolute bottom-0 left-0 right-0 h-2/3">
              <Image
                src={backgroundImage}
                alt="image"
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Text Content Section */}
        <div
          ref={textRef}
          className="absolute inset-0 p-8 flex flex-col justify-between"
        >
          {/* Header (repeated for text state) */}
          <div className="">
            <div className="text-sm opacity-0 font-semibold text-gray-600 mb-4 tracking-wide">
              {tag.toUpperCase()}
            </div>
            <h1 className="text-24 opacity-0 font-bold text-gray-900 leading-tight mb-8">
              {title}
            </h1>

            {/* Body Text */}
            <p className="text-gray-700 leading-relaxed text-base">
              {description}
            </p>
          </div>

          {/* Expand Button */}
          <div ref={expandButtonRef} className="flex items-center justify-end">
            <button className="flex items-center space-x-2 text-black font-semibold">
              <span>Expand</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardStyle1;