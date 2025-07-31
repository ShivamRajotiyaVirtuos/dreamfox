"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MediaReelGallery = () => {
  const galleryRef = useRef(null);

  const images = [
    "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/13122787/RDR2_Screenshot_080_copy.jpg?quality=90&strip=all&crop=21.875,0,56.25,100",
    "https://media.wired.com/photos/5bdca1cf35226a3b7363f84c/191:100/w_1280,c_limit/Red-Dead-Redemption.jpg",
    "https://media.npr.org/assets/img/2018/12/31/rdr2_screenshot-014_wide-71d02434782cc887366ba9767260080bb73fa207.jpg",
    "https://i.guim.co.uk/img/media/79c3907170ffaf4ad6f8caf4d736fe508e079f26/0_0_5500_3300/master/5500.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=4bf93dc7627973df5a2774bd4eeecd5a",
    "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/13122787/RDR2_Screenshot_080_copy.jpg?quality=90&strip=all&crop=21.875,0,56.25,100",
    "https://w0.peakpx.com/wallpaper/82/271/HD-wallpaper-red-dead-red-dead-redemption-2-arthur-morgan-red-dead-redemption-fire.jpg",
    "https://media.wired.com/photos/5bdca1cf35226a3b7363f84c/191:100/w_1280,c_limit/Red-Dead-Redemption.jpg",
    "https://i.guim.co.uk/img/media/79c3907170ffaf4ad6f8caf4d736fe508e079f26/0_0_5500_3300/master/5500.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=4bf93dc7627973df5a2774bd4eeecd5a",
    "https://media.npr.org/assets/img/2018/12/31/rdr2_screenshot-014_wide-71d02434782cc887366ba9767260080bb73fa207.jpg",
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(".media-img");

      // Initial state
      gsap.set(items, {
        rotateX: -90,
        scale: 0.0,
        opacity: 0,
        transformOrigin: "center bottom",
      });

      // Animation on scroll
      gsap.to(items, {
        rotateX: 0,
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        stagger: 0.1,
        scrollTrigger: {
          trigger: galleryRef.current,
          start: "top top",
          end: "bottom center",
          scrub: true,
          pin: true,
        },
      });
    }, galleryRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={galleryRef}
      className="w-screen  h-screen grid grid-cols-3 gap-2 !p-2 xl:!p-0 lg:gap-4 bg-black perspective-[1000px] overflow-hidden"
    >
      {images.map((src, index) => (
        <div
          key={index}
          className="media-img w-full h-full overflow-hidden rounded-lg"
        >
          <img
            src={src}
            alt={`Gallery ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default MediaReelGallery;
