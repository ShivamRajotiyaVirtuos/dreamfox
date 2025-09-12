// import { useRef, useEffect } from "react";
// import Link from "next/link";
// import { gsap } from "gsap";
// import { UserIcon } from "@heroicons/react/24/solid";
// import { ArrowRightIcon } from "@heroicons/react/24/outline";

// export default function AnimatedButton({ text = "ABOUT ME", href = "#" }) {
//   const dotRef = useRef(null);
//   const userIconRef = useRef(null);
//   const textTopRef = useRef(null);
//   const textBottomRef = useRef(null);
//   const tlRef = useRef(null); // <-- timeline ref

//   useEffect(() => {
//     gsap.set(userIconRef.current, { opacity: 0, scale: 0.5 });
//     gsap.set(textBottomRef.current, { y: -22, opacity: 1 });
//     gsap.set(textTopRef.current, { y: -30, opacity: 1 });
//   }, []);

//   const handleEnter = () => {
//     if (tlRef.current) tlRef.current.kill(); // kill previous timeline
//     const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
//     tl.to(dotRef.current, { scale: 0.3, opacity: 0, duration: 0.2 })
//       .to(userIconRef.current, { opacity: 1, scale: 1, duration: 0.3 }, "<")
//       .to(textTopRef.current, { y: 6, opacity: 1, duration: 0.3 }, "<")
//       .to(
//         textBottomRef.current,
//         { y: 10, opacity: 1, filter: "blur(0px)", duration: 0.3 },
//         "<"
//       );
//     tlRef.current = tl;
//   };

//   const handleLeave = () => {
//     if (tlRef.current) tlRef.current.kill(); // kill previous timeline
//     const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
//     tl.to(userIconRef.current, { opacity: 0, scale: 0.5, duration: 0.2 })
//       .to(dotRef.current, { opacity: 1, scale: 1, duration: 0.3 }, "<")
//       .to(textBottomRef.current, { y: -22, opacity: 1, duration: 0.3 }, "<")
//       .to(
//         textTopRef.current,
//         { y: -30, opacity: 1, filter: "blur(0px)", duration: 0.3 },
//         "<"
//       );
//     tlRef.current = tl;
//   };

//   return (
//     <Link
//       href={href}
//       onMouseEnter={handleEnter}
//       onMouseLeave={handleLeave}
//       className="relative inline-flex items-center gap-3 px-6 py-3 border border-white/50 text-black rounded-md bg-white hover:bg-white transition-all duration-300 overflow-hidden hover:scale-[0.95] hover:border-[1px] hover:border-white max-w-fit "
//     >
//       {/* Icon */}
//       <div className="relative w-5 h-5 shrink-0">
//         <div
//           ref={dotRef}
//           className="absolute w-2.5 h-2.5 top-1.5 left-1.5 bg-black rounded-full"
//         />
//         <ArrowRightIcon
//           ref={userIconRef}
//           className="absolute w-5 h-5 text-black"
//         />
//       </div>
//       {/* Text Stack */}
//       <div className="relative bg-white h-8 w-fit overflow-hidden ">
//         <span ref={textTopRef} className="block text-sm font- text-black uppercase font-semibold">
//           {text}
//         </span>
//         <span
//           ref={textBottomRef}
//           className="block text-sm font-semibold uppercase text-black mt-2"
//         >
//           {text}
//         </span>
//       </div>
//     </Link>
//   );
// }

"use client";

import { useState, useRef } from "react";
import Link from "next/link";

const AnimatedButton = ({
  href = "/",
  text = "CONTACT US",
  icon = true,
  className = "",
  variant = "primary",
  target = "_self",
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [overlayStyle, setOverlayStyle] = useState({});
  const buttonRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseMove = (e) => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;

      setOverlayStyle({
        left: `${x}%`,
        top: `${y}%`,
      });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setOverlayStyle({});
  };

  // Variant styles
  const variants = {
    primary: {
      base: "border-white text-white hover:shadow-purple-500/25",
      gradient: "from-[#ec466f] to-[#ff6b9d]",
      iconColor: "text-[#ec466f] group-hover:text-white",
    },
    secondary: {
      base: "border-[#ec466f] text-[#ec466f] hover:shadow-pink-500/25",
      gradient: "from-white to-gray-100",
      iconColor: "text-white group-hover:text-[#ec466f]",
    },
    outline: {
      base: "border-gray-300 text-gray-300 hover:shadow-gray-500/25",
      gradient: "from-gray-800 to-gray-900",
      iconColor: "text-gray-400 group-hover:text-white",
    },
  };

  const currentVariant = variants[variant] || variants.primary;

  // Default arrow icon
  const ArrowIcon = () => (
    <svg
      data-slot="icon"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={`size-8 ${currentVariant.iconColor} p-1 rounded-full transition-colors duration-300`}
    >
      <path d="M3.105 2.288a.75.75 0 0 0-.826.95l1.414 4.926A1.5 1.5 0 0 0 5.135 9.25h6.115a.75.75 0 0 1 0 1.5H5.135a1.5 1.5 0 0 0-1.442 1.086l-1.414 4.926a.75.75 0 0 0 .826.95 28.897 28.897 0 0 0 15.293-7.155.75.75 0 0 0 0-1.114A28.897 28.897 0 0 0 3.105 2.288Z"></path>
    </svg>
  );

  return (
    <button
      ref={buttonRef}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative px-8 cursor-pointer py-4 font-black text-lg border-2 rounded-full overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-3 ${currentVariant.base} ${className}`}
    >
      {/* Overlay effect */}
      <div
        className={`absolute inset-0 bg-gradient-to-r ${
          currentVariant.gradient
        } rounded-full transition-all duration-300 ${
          isHovered ? "opacity-100 scale-100" : "opacity-0 scale-0"
        }`}
        style={{
          transformOrigin: `${overlayStyle.left || "50%"} ${
            overlayStyle.top || "50%"
          }`,
        }}
      />

      {/* Button content */}
      <Link
        href={href}
        target={target}
        className="relative z-10 flex items-center gap-3 w-full h-full"
      >
        <span className="relative uppercase z-10">{text}</span>

        {/* {icon && (
          <span className="rounded-full relative z-10">
            {typeof icon === "boolean" ? <ArrowIcon /> : icon}
          </span>
        )} */}
      </Link>
    </button>
  );
};

export default AnimatedButton;
