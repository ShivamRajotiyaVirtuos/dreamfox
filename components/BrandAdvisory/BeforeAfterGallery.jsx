import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip, CustomEase } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, Flip, CustomEase);
CustomEase.create("osmo-ease", "0.625, 0.05, 0, 1");
gsap.defaults({ ease: "osmo-ease", duration: 0.8 });

const BeforeAfterGallery = () => {
  // Project data with multiple before/after sets
  const projects = [
    {
      id: 1,
      name: "E-commerce",
      category: "Web Design",
      beforeImage:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
      afterImage:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      beforeAlt: "Old e-commerce design",
      afterAlt: "New e-commerce design",
    },
    {
      id: 2,
      name: "Mobile App",
      category: "UI/UX",
      beforeImage:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
      afterImage:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
      beforeAlt: "Old mobile app interface",
      afterAlt: "New mobile app interface",
    },
    {
      id: 3,
      name: "Brand Identity",
      category: "Branding",
      beforeImage:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
      afterImage:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop",
      beforeAlt: "Old brand design",
      afterAlt: "New brand design",
    },
    {
      id: 4,
      name: "Dashboard",
      category: "Web App",
      beforeImage:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      afterImage:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop",
      beforeAlt: "Old dashboard design",
      afterAlt: "New dashboard design",
    },
  ];

  const [activeProject, setActiveProject] = useState(0);
  const [sliderValue, setSliderValue] = useState(50);
  const [showHint, setShowHint] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const sectionRef = useRef(null);
  const blobRef = useRef(null);
  const hasInteracted = useRef(false);
  const sliderRef = useRef(null);
  const titleRef = useRef(null);
  const imageContainerRef = useRef(null);
  const tabsRef = useRef([]);

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
  const handleTabClick = (index) => {
    if (index === activeProject || isTransitioning) return;

    setIsTransitioning(true);
    setSliderValue(50);

    const flipState = Flip.getState("[data-flip-button='bg']");

    setActiveProject(index);

    Flip.from(flipState, {
      duration: 0.6,
      ease: "osmo-ease",
    });

    // Animate images (like you already have)
    gsap.to(imageContainerRef.current, {
      opacity: 0,
      scale: 0.95,
      duration: 0.3,
      ease: "power2.inOut",
      onComplete: () => {
        gsap.to(imageContainerRef.current, {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          ease: "power2.out",
          onComplete: () => setIsTransitioning(false),
        });
      },
    });
  };

  const splitTextIntoWords = (text) => {
    return text.split(" ").map((word, index) => (
      <span
        key={index}
        className="word inline-block opacity-0"
        style={{
          overflow: "hidden",
          display: "inline-block",
          transformStyle: "preserve-3d",
          willChange: "transform, opacity",
        }}
      >
        {word}&nbsp;
      </span>
    ));
  };
  // useEffect(() => {
  //   const buttons = tabsRef.current?.querySelectorAll('[data-tabs="button"]');
  //   const bg = tabsRef.current?.querySelector('[data-flip-button="bg"]');

  //   if (!buttons || !bg) return;

  //   const handleMouseEnter = (btn) => () => {
  //     const state = Flip.getState(bg);
  //     if (
  //       bg.parentNode &&
  //       bg.parentNode !== btn &&
  //       bg.parentNode.contains(bg)
  //     ) {
  //       bg.parentNode.removeChild(bg);
  //     }
  //     btn.appendChild(bg);

  //     btn.appendChild(bg);
  //     Flip.from(state, { duration: 0.4 });
  //   };

  //   const handleMouseLeave = () => {
  //     const state = Flip.getState(bg);
  //     const activeBtn = tabsRef.current.querySelector(".active-tab");
  //     if (activeBtn) {
  //       if (
  //         bg.parentNode &&
  //         bg.parentNode !== activeBtn &&
  //         bg.parentNode.contains(bg)
  //       ) {
  //         bg.parentNode.removeChild(bg);
  //       }
  //       activeBtn.appendChild(bg);

  //       Flip.from(state, { duration: 0.4 });
  //     }
  //   };

  //   // Attach event listeners and store references
  //   const listeners = [];
  //   buttons.forEach((btn) => {
  //     const enter = handleMouseEnter(btn);
  //     const leave = handleMouseLeave;
  //     btn.addEventListener("mouseenter", enter);
  //     btn.addEventListener("mouseleave", leave);
  //     listeners.push({ btn, enter, leave });
  //   });

  //   // Cleanup
  //   return () => {
  //     listeners.forEach(({ btn, enter, leave }) => {
  //       btn.removeEventListener("mouseenter", enter);
  //       btn.removeEventListener("mouseleave", leave);
  //     });
  //   };
  // }, [activeProject]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Animate the glowing blob
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

      // Title animation
      const titleWords = titleRef.current?.querySelectorAll(".word");
      if (titleWords && titleWords.length > 0) {
        gsap.set(titleWords, {
          opacity: 0,
          y: 100,
          rotationX: -90,
          transformOrigin: "50% 50%",
        });

        const titleTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play none none reset",
            markers: false,
          },
        });

        titleTimeline.to(titleWords, {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
        });
      }

      // Animate tabs on scroll
      if (tabsRef.current.length > 0) {
        gsap.fromTo(
          tabsRef.current,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              toggleActions: "play none none reset",
            },
          }
        );
      }

      // Show hint and animate divider when in view
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 80%",
        onEnter: () => {
          if (!hasInteracted.current && sliderRef.current) {
            setShowHint(true);

            gsap.to(sliderRef.current, {
              value: 70,
              duration: 1.2,
              ease: "power1.inOut",
              repeat: 1,
              yoyo: true,
              onUpdate: () => {
                if (sliderRef.current) {
                  setSliderValue(parseFloat(sliderRef.current.value));
                }
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

  const currentProject = projects[activeProject];

  return (
    <div
      ref={sectionRef}
      className="flex flex-col justify-center items-center bg-black py-16 md:py-32 relative overflow-hidden"
    >
      {/* Project Tabs */}
      <div className="flex flex-col  text-center items-center justify-center w-full mb-12">
        {/* LEFT SIDE - Tab Navigation + Text */}
        <div className="w-full">
          <div className="mb-6 text-center">
            <h2
              ref={titleRef}
              className="text-white text-120 font-semibold mb-6"
              style={{ perspective: "1000px" }}
            >
              {splitTextIntoWords("Before After Gallery")}
            </h2>

            {/* Tab Buttons */}
            <div
              data-tabs="nav"
              ref={(el) => (tabsRef.current = el)}
              className="bg-white/5 border border-white/10 rounded-xl p-1 inline-flex flex-wrap "
            >
              {projects.map((project, index) => (
                <button
                  key={project.id}
                  data-tabs="button"
                  className={`relative px-5 py-2.5 w-1/2 xl:w-auto text-base font-medium transition-all ${
                    activeProject === index
                      ? "text-white z-10 active-tab"
                      : "text-gray-400"
                  }`}
                  onClick={() => handleTabClick(index)}
                  disabled={isTransitioning}
                >
                  <div className="relative z-10">{project.name}</div>
                  {activeProject === index && (
                    <div
                      data-flip-button="bg"
                      className="absolute inset-0 bg-white/10 rounded-lg backdrop-blur-sm"
                    ></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - Before/After Image */}
        <div className="w-full md:w-1/2">{/* your image slider here */}</div>
      </div>

      {/* Current Project Info */}
      <div className="text-center mb-6 relative z-10">
        <h3 className="text-white text-xl md:text-2xl font-bold mb-2">
          {currentProject.name}
        </h3>
        <p className="text-gray-400 text-sm md:text-base">
          {currentProject.category}
        </p>
      </div>

      {/* Image Slider */}
      <div
        ref={imageContainerRef}
        className="relative flex w-full max-w-7xl h-[32rem] md:h-[40rem] xl:h-[50rem] aspect-[3/2] max-h-[95vh] z-10"
        style={{ width: "clamp(28rem, 90vw, 80rem)" }}
        aria-label="Before and after image slider"
      >
        {/* Before Image */}
        <div className="absolute w-full h-full overflow-hidden rounded-2xl">
          <img
            src={currentProject.beforeImage}
            alt={currentProject.beforeAlt}
            className="w-full h-full object-cover"
          />
          <span className="absolute top-6 left-6 bg-black/70 text-white text-lg font-bold px-4 py-2 rounded-full shadow-lg select-none pointer-events-none z-20">
            Before
          </span>
        </div>

        {/* After Image */}
        <div
          className="absolute w-full h-full overflow-hidden rounded-2xl"
          style={{ clipPath: `inset(0px 0px 0px ${sliderValue}%)` }}
        >
          <img
            src={currentProject.afterImage}
            alt={currentProject.afterAlt}
            className="w-full h-full object-cover"
          />
          <span className="absolute top-6 right-6 bg-gradient-to-r from-[#DC6263] to-[#D2448D] text-white text-lg font-bold px-4 py-2 rounded-full shadow-lg select-none pointer-events-none z-20">
            After
          </span>
        </div>

        {/* Divider Line */}
        <div
          className="absolute w-1 h-full bg-gray-50 transform -translate-x-1/2 z-10 rounded-full"
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
          disabled={isTransitioning}
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
            box-shadow: 0 4px 20px rgba(220, 98, 99, 0.3);
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
            box-shadow: 0 4px 20px rgba(220, 98, 99, 0.3);
          }

          input[type="range"]:active::-webkit-slider-thumb {
            cursor: grabbing;
          }

          input[type="range"]:active::-moz-range-thumb {
            cursor: grabbing;
          }

          input[type="range"]:disabled {
            opacity: 0.5;
            cursor: not-allowed;
          }
        `}</style>
      </div>
    </div>
  );
};

export default BeforeAfterGallery;
