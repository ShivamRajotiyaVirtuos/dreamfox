"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// Register GSAP ScrollToPlugin
gsap.registerPlugin(ScrollToPlugin);

const AnimatedButton = ({
  href = "/",
  text = "CONTACT US",
  icon = true,
  className = "",
  variant = "primary",
  target = "_self",
  scrollTo = null,
  onClick = null,
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

  const handleClick = (e) => {
    // Handle scroll to section
    if (scrollTo) {
      e.preventDefault();
      gsap.to(window, {
        duration: 1.2,
        scrollTo: {
          y: scrollTo,
          offsetY: 80, // Adjust for header height
        },
        ease: "power2.inOut",
      });
    } 
    // Handle custom onClick
    else if (onClick) {
      e.preventDefault();
      onClick(e);
    }
    // For regular links, let the Link component handle it
  };

  // Variant styles (unchanged)
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

  // Default arrow icon (unchanged)
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

  const ButtonContent = () => (
    <>
      {/* Overlay effect (unchanged) */}
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

      {/* Button content (unchanged) */}
      <span className="relative uppercase z-10">{text}</span>
    </>
  );

  // If scrollTo or onClick is provided, render as button
  if (scrollTo || onClick) {
    return (
      <button
        ref={buttonRef}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`relative w-fit px-8 cursor-pointer py-4 font-black text-lg border-2 rounded-full overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-3 ${currentVariant.base} ${className}`}
      >
        <ButtonContent />
      </button>
    );
  }

  // Default Link behavior (unchanged)
  return (
    <button
      ref={buttonRef}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative w-fit px-8 cursor-pointer py-4 font-black text-lg border-2 rounded-full overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-3 ${currentVariant.base} ${className}`}
    >
      <ButtonContent />

      <Link
        href={href}
        target={target}
        className="absolute inset-0 z-10"
      />
    </button>
  );
};

export default AnimatedButton;