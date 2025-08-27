import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const CardStyle2 = ({ 
  title = "Accenture Life Trends 2025", 
  description = "Five trends exploring people's lens on the world today. As disruptive breakthroughs evolve digital experiences, people naturally adjust their relationship with technology, affecting the businesses trying to reach them.", 
  tag = "Research Report", 
  backgroundImage = "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=500&h=800&fit=crop&crop=entropy&auto=format&fm=jpg&q=80",
  className = "",
  onCardClick = () => {}
}) => {
  const cardRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const expandButtonRef = useRef(null);

  useEffect(() => {
    const image = imageRef.current;
    const text = textRef.current;
    const expandButton = expandButtonRef.current;

    // Set initial states
    gsap.set(text, { x: "100%", opacity: 0 });
    gsap.set(expandButton, { x: "100%", opacity: 0 });
    gsap.set(image, { scale: 1 });

    let enterTimeline = null;
    let leaveTimeline = null;

    const handleMouseEnter = () => {
      if (leaveTimeline) {
        leaveTimeline.kill();
      }

      enterTimeline = gsap.timeline();

      enterTimeline
        .to(image, {
          scale: 2.1,
          duration: 0.8,
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
      if (enterTimeline) {
        enterTimeline.kill();
      }

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
            scale: 1,
            duration: 0.8,
            ease: "power2.inOut",
          },
          0.2
        );
    };

    const cardElement = cardRef.current;
    if (cardElement) {
      cardElement.addEventListener("mouseenter", handleMouseEnter);
      cardElement.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (enterTimeline) enterTimeline.kill();
      if (leaveTimeline) leaveTimeline.kill();

      if (cardElement) {
        cardElement.removeEventListener("mouseenter", handleMouseEnter);
        cardElement.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <div className={className}>
      <div
        ref={cardRef}
        className="relative w-96 hover:scale-105 transition-all duration-300 h-[600px] backdrop-blur-3xl rou shadow-2xl overflow-hidden cursor-pointer border border-gray-800"
        onClick={onCardClick}
      >
        {/* Fixed Header - Always visible */}
        <div className="absolute top-0 left-0 right-0 p-8 z-30">
          <div className="text-sm font-semibold text-white mb-4 tracking-wide">
            {tag.toUpperCase()}
          </div>
          <h1 className="text-24 font-bold text-white leading-tight">
            {title}
          </h1>
        </div>

        {/* Image Section - This will slide left */}
        <div ref={imageRef} className="absolute inset-0 w-full h-full">
          {/* Background Image with Overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${backgroundImage})`,
            }}
          ></div>
        </div>

        {/* Description Content - Slides from right */}
        <div className="absolute inset-0  pt-32 p-8 flex flex-col justify-between z-20">
          {/* Body Text */}
          <div className="mt-8 " ref={textRef}>
            <p className="text-white leading-relaxed text-base mb-6">
              {description}
            </p>
          </div>

          {/* Expand Button */}
          <div ref={expandButtonRef} className="flex items-center justify-end">
            <button className="flex items-center space-x-2 text-white font-semibold">
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

export default CardStyle2;