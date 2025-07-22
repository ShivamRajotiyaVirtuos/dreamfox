import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// Mock TextReveal component for demonstration
const TextReveal = ({ children, className, animation, stagger, duration }) => (
  <div className={className}>{children}</div>
);

const BeforeAfterGallery = ({
  beforeImage = "https://raw.githubusercontent.com/ThomasEgMatthiesen/ThomasEgMatthiesen/refs/heads/main/hosted-assets/before.png",
  afterImage = "https://raw.githubusercontent.com/ThomasEgMatthiesen/ThomasEgMatthiesen/refs/heads/main/hosted-assets/after.png",
  beforeAlt = "Before",
  afterAlt = "After",
}) => {
  const [sliderValue, setSliderValue] = useState(50);
  const [showHint, setShowHint] = useState(false);
  const sectionRef = useRef(null);
  const blobRef = useRef(null);
  const hasInteracted = useRef(false);
  const sliderRef = useRef(null);

  const handleSliderChange = (e) => {
    const value = e.target.value;
    setSliderValue(value);
    if (!hasInteracted.current) {
      hasInteracted.current = true;
      setShowHint(false);
      gsap.killTweensOf(sliderRef.current);
    }
  };

  const handleDoubleClick = () => {
    setSliderValue(50);
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Animate the glowing blob (if you choose to use it again)
      if (blobRef.current) {
        gsap.fromTo(
          blobRef.current,
          { scale: 1 },
          {
            scale: 1.35,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
              markers: false,
            },
          }
        );
      }

      // Show hint and animate divider left-right when in view
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 80%",
        onEnter: () => {
          if (!hasInteracted.current) {
            setShowHint(true);

            // Animate sliderValue using GSAP
            gsap.to(sliderRef.current, {
              value: 70,
              duration: 1.2,
              ease: "power1.inOut",
              repeat: 1,
              yoyo: true,
              onUpdate: () => {
                setSliderValue(parseFloat(sliderRef.current.value));
              },
              onComplete: () => {
                setTimeout(() => setShowHint(false), 1000);
              },
            });
          }
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="flex flex-col justify-center items-center bg-black py-16 md:py-32 relative overflow-hidden"
    >
      {/* Optional: Glowing blob */}
      {/* <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-0 w-[60vw] max-w-4xl h-[20vw] max-h-[20rem] pointer-events-none">
        <div
          ref={blobRef}
          className="w-full h-full rounded-t-full"
          style={{
            background: "linear-gradient(90deg, #DC6263 0%, #D2448D 100%)",
            filter: "blur(48px)",
            opacity: 0.45,
            boxShadow: "0 0 120px 40px #D2448D, 0 0 240px 80px #DC6263",
          }}
        />
      </div> */}

      <TextReveal
        animation="rotateX"
        stagger={0.1}
        duration={0.8}
        className="text-white text-4xl md:text-6xl font-bold mb-20 text-center relative z-10"
      >
        Before-After Gallery
      </TextReveal>

      <div
        className="relative flex w-full max-w-7xl h-[32rem] md:h-[40rem] xl:h-[50rem] aspect-[3/2] max-h-[95vh] z-10"
        style={{ width: "clamp(28rem, 90vw, 80rem)" }}
        aria-label="Before and after image slider"
      >
        {/* Before Image */}
        <div className="absolute w-full h-full overflow-hidden">
          <img
            src={beforeImage}
            alt={beforeAlt}
            className="w-full h-full object-cover"
          />
          <span className="absolute top-6 left-16 sm:left-6 bg-black/70 text-white text-lg font-bold px-4 py-1 rounded-full shadow-lg select-none pointer-events-none z-20">
            Before
          </span>
        </div>

        {/* After Image */}
        <div
          className="absolute w-full h-full overflow-hidden"
          style={{ clipPath: `inset(0px 0px 0px ${sliderValue}%)` }}
        >
          <img
            src={afterImage}
            alt={afterAlt}
            className="w-full h-full object-cover"
          />
          <span className="absolute top-6 right-16 sm:right-6 bg-gradient-to-r from-[#DC6263] to-[#D2448D] text-white text-lg font-bold px-4 py-1 rounded-full shadow-lg select-none pointer-events-none z-20">
            After
          </span>
        </div>

        {/* Divider Line */}
        <div
          className="absolute w-1 h-full bg-gray-50 transform -translate-x-1/2 z-10"
          style={{ left: `${sliderValue}%` }}
        />

        {/* Hint text */}
        {showHint && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-base md:text-xl bg-black/60 px-4 py-2 rounded-full z-30 animate-bounce pointer-events-none">
            👉 Drag to reveal
          </div>
        )}

        {/* Slider Input */}
        <input
          type="range"
          min="0"
          max="100"
          value={sliderValue}
          ref={sliderRef}
          onChange={handleSliderChange}
          onDoubleClick={handleDoubleClick}
          className="absolute h-full cursor-grab active:cursor-grabbing bg-transparent appearance-none z-20"
          style={{
            width: "calc(100% + 2.25rem)",
            left: "-1.125rem",
            WebkitAppearance: "none",
          }}
        />

        {/* Custom Thumb Styles */}
        <style jsx>{`
          input[type="range"]::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            height: 2.25rem;
            width: 2.25rem;
            border: 0.25rem solid #fff;
            border-radius: 50%;
            background-color: #fff;
            background-image: url("data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 -960 960 960' width='24px' fill='%23000'%3E%3Cpath d='M286.15-293.85 100-479.62l185.77-185.76 42.15 41.76-113 113.62h530.16l-113-113.62 42.15-41.76L860-479.62 674.23-293.85l-42.54-41.77 113.39-114H214.54l113.38 114-41.77 41.77Z'/%3E%3C/svg%3E");
            background-size: cover;
            cursor: grab;
          }

          input[type="range"]::-moz-range-thumb {
            height: 2.25rem;
            width: 2.25rem;
            border: 0.25rem solid #fff;
            border-radius: 50%;
            background-color: #fff;
            background-image: url("data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 -960 960 960' width='24px' fill='%23000'%3E%3Cpath d='M286.15-293.85 100-479.62l185.77-185.76 42.15 41.76-113 113.62h530.16l-113-113.62 42.15-41.76L860-479.62 674.23-293.85l-42.54-41.77 113.39-114H214.54l113.38 114-41.77 41.77Z'/%3E%3C/svg%3E");
            background-size: cover;
            cursor: grab;
          }

          input[type="range"]:active::-webkit-slider-thumb {
            cursor: grabbing;
          }

          input[type="range"]:active::-moz-range-thumb {
            cursor: grabbing;
          }
        `}</style>
      </div>
    </div>
  );
};

export default BeforeAfterGallery;
