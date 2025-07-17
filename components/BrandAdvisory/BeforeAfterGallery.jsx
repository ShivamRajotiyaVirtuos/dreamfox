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
  const blobRef = useRef(null);
  const sectionRef = useRef(null);

  const handleSliderChange = (e) => {
    const value = e.target.value;
    setSliderValue(value);
  };

  const handleDoubleClick = () => {
    setSliderValue(50);
  };

  useEffect(() => {
    if (!blobRef.current || !sectionRef.current) return;
    const ctx = gsap.context(() => {
      // Animate blob scale based on scroll progress
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
            markers: true, // Uncomment for debugging
          },
        }
      );
    }, sectionRef);
    return () => ctx && ctx.revert && ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="flex flex-col justify-center items-center bg-black pt-16 md:pt-32 relative overflow-hidden"
    >
      {/* Magenta Glow Blob - True Semi Circle with Glow and GSAP animation */}
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
        className="text-white text-120 font-bold mb-20 text-center relative z-10"
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
          {/* Before Label */}
          <span className="absolute top-6 left-6 bg-black/70 text-white text-lg font-bold px-4 py-1 rounded-full shadow-lg select-none pointer-events-none z-20">
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
          {/* After Label */}
          <span className="absolute top-6 right-6 bg-gradient-to-r from-[#DC6263] to-[#D2448D] text-white text-lg font-bold px-4 py-1 rounded-full shadow-lg select-none pointer-events-none z-20">
            After
          </span>
        </div>

        {/* Divider Line */}
        <div
          className="absolute w-1 h-full bg-gray-50 transform -translate-x-1/2 z-10"
          style={{ left: `${sliderValue}%` }}
        />

        {/* Slider Input */}
        <input
          type="range"
          min="0"
          max="100"
          value={sliderValue}
          onChange={handleSliderChange}
          onDoubleClick={handleDoubleClick}
          className="absolute h-full cursor-grab active:cursor-grabbing bg-transparent appearance-none z-20"
          style={{
            width: "calc(100% + 2.25rem)",
            left: "-1.125rem",
            WebkitAppearance: "none",
          }}
        />

        {/* Custom Styles for Slider Thumb */}
        <style jsx>{`
          @keyframes glow-pulse {
            0%,
            100% {
              box-shadow: 0 0 120px 40px #d2448d, 0 0 240px 80px #dc6263;
              opacity: 0.45;
            }
            50% {
              box-shadow: 0 0 180px 80px #d2448d, 0 0 320px 120px #dc6263;
              opacity: 0.6;
            }
          }
          .animate-glow-pulse {
            animation: glow-pulse 4s ease-in-out infinite;
          }
          input[type="range"]::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            height: 2.25rem;
            width: 2.25rem;
            border: 0.25rem solid #fff;
            border-radius: 50%;
            box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.1);
            background-color: #fff;
            background-image: url("data:image/svg+xml;utf8,%3Csvg xmlns%3D%22http%3A//www.w3.org/2000/svg%22 height%3D%2224px%22 viewBox%3D%220 -960 960 960%22 width%3D%2224px%22 fill%3D%22%23000%22%3E%3Cpath d%3D%22M286.15-293.85 100-479.62l185.77-185.76 42.15 41.76-113 113.62h530.16l-113-113.62 42.15-41.76L860-479.62 674.23-293.85l-42.54-41.77 113.39-114H214.54l113.38 114-41.77 41.77Z%22/%3E%3C/svg%3E");
            background-size: cover;
            cursor: grab;
          }

          input[type="range"]::-moz-range-thumb {
            height: 2.25rem;
            width: 2.25rem;
            border: 0.25rem solid #fff;
            border-radius: 50%;
            box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.1);
            background-color: #fff;
            background-image: url("data:image/svg+xml;utf8,%3Csvg xmlns%3D%22http%3A//www.w3.org/2000/svg%22 height%3D%2224px%22 viewBox%3D%220 -960 960 960%22 width%3D%2224px%22 fill%3D%22%23000%22%3E%3Cpath d%3D%22M286.15-293.85 100-479.62l185.77-185.76 42.15 41.76-113 113.62h530.16l-113-113.62 42.15-41.76L860-479.62 674.23-293.85l-42.54-41.77 113.39-114H214.54l113.38 114-41.77 41.77Z%22/%3E%3C/svg%3E");
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
