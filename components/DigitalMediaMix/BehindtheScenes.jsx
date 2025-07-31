import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const BehindTheScenes = () => {
  const containerRef = useRef(null);
  const ringRef = useRef(null);
  const imagesRef = useRef([]);
  const xPosRef = useRef(0);
  const isDraggingRef = useRef(false);
  const autoRotateTween = useRef(null);

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

  const getBgPos = (i) => {
    if (!ringRef.current) return "0px 0px";
    const rotationY = gsap.getProperty(ringRef.current, "rotationY") || 0;
    const pos =
      100 - (gsap.utils.wrap(0, 360, rotationY - 180 - i * 30) / 360) * 500;
    return `${pos}px 0px`;
  };

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
      onUpdate: () => {
        imagesRef.current.forEach((img, i) => {
          if (img) {
            gsap.set(img, { backgroundPosition: getBgPos(i) });
          }
        });
      },
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

  const handleMouseEnter = (index) => {
    imagesRef.current.forEach((img, i) => {
      if (img) {
        gsap.to(img, {
          opacity: i === index ? 1 : 0.5,
          duration: 0.3,
          ease: "power3.out",
        });
      }
    });
  };

  const handleMouseLeave = () => {
    imagesRef.current.forEach((img) => {
      if (img) {
        gsap.to(img, {
          opacity: 1,
          duration: 0.3,
          ease: "power2.inOut",
        });
      }
    });
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
        backgroundPosition: (i) => getBgPos(i),
        backfaceVisibility: "hidden",
      })
      .from(imagesRef.current, {
        duration: 1.5,
        y: 200,
        opacity: 0,
        stagger: 0.1,
        ease: "expo.out",
      });

    // Auto-rotate loop
    autoRotateTween.current = gsap.to(ringRef.current, {
      rotationY: "+=360",
      duration: 60,
      ease: "none",
      repeat: -1,
      modifiers: {
        rotationY: gsap.utils.unitize((v) => parseFloat(v) % 360),
      },
      onUpdate: () => {
        imagesRef.current.forEach((img, i) => {
          if (img) {
            gsap.set(img, { backgroundPosition: getBgPos(i) });
          }
        });
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
    <div className="w-full h-screen bg-black overflow-hidden flex items-center justify-center">
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
          {images.map((imageSrc, index) => (
            <div
              key={index}
              ref={(el) => (imagesRef.current[index] = el)}
              className="absolute w-[40%] h-[90%] left-[30%] top-[5%] bg-cover bg-center rounded-2xl shadow-2xl"
              style={{
                backgroundImage: `url(${imageSrc})`,
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BehindTheScenes;
