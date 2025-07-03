"use client";

import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import clsx from "clsx";
import Link from "next/link";
import { ArrowUpCircleIcon } from "@heroicons/react/24/solid";

const MenuButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const itemsRef = useRef(null);
  const menuTextRef = useRef(null);
  const overlayRef = useRef(null);
  const closeButtonRef = useRef(null);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    if (isOpen) {
      expand();
    }
  }, [isOpen]);

  const expand = () => {
    setIsOpen(true);

    const tl = gsap.timeline();

    // Hide menu text first
    tl.to(menuTextRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 0.2,
    })

      // Expand container
      .to(
        containerRef.current,
        {
          width: "400px",
          height: "600px",
          borderRadius: "24px",
          duration: 0.8,
        },
        "-=0.1"
      )

      // Fade in overlay
      .to(
        overlayRef.current,
        {
          opacity: 1,
          duration: 0.6,
        },
        "-=0.2"
      )

      // Animate close button
      .fromTo(
        closeButtonRef.current,
        { opacity: 0, scale: 0, rotation: -180 },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.5,
        },
        "-=0.3"
      )

      // Animate menu items with stagger
      .fromTo(
        ".menu-item",
        { opacity: 0, y: 60, rotationX: -90 },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 0.6,
          stagger: 0.1,
        },
        "-=0.4"
      );
  };

  const collapse = () => {
    const tl = gsap.timeline();

    // Animate menu items out - much faster
    tl.to(".menu-item", {
      opacity: 0,
      y: -20,
      duration: 0.1,
      stagger: 0.01,
    })

      // Fade out close button - much faster
      .to(
        closeButtonRef.current,
        {
          opacity: 0,
          scale: 0,
          duration: 0.15,
        },
        "-=0.05"
      )

      // Fade out overlay - much faster
      .to(
        overlayRef.current,
        {
          opacity: 0,
          duration: 0.15,
        },
        "-=0.1"
      )

      // Collapse container - much faster
      .to(
        containerRef.current,
        {
          width: "120px",
          height: "60px",
          borderRadius: "9999px",
          duration: 0.25,
          ease: "power2.inOut",
          onComplete: () => setIsOpen(false),
        },
        "-=0.1"
      );
  };

  const handleHover = () => {
    if (!isOpen) {
      gsap.to(containerRef.current, {
        scale: 1.05,
        boxShadow: "0 15px 35px rgba(210, 68, 141, 0.3)",
        duration: 0.3,
      });
    }
  };

  const handleHoverOut = () => {
    if (!isOpen) {
      gsap.to(containerRef.current, {
        scale: 1,
        boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)",
        duration: 0.3,
        // ease: "power2.out",
      });
    }
  };

  return (
    <div className="fixed top-8 right-8 z-50">
      <div
        ref={containerRef}
        onMouseEnter={handleHover}
        onMouseLeave={handleHoverOut}
        onClick={!isOpen ? () => setIsOpen(true) : undefined}
        className={clsx(
          "bg-gradient-to-br from-amber-100 via-yellow-50 to-amber-50",
          "shadow-xl overflow-hidden transition-all duration-300",
          "flex items-center  cursor-pointer",
          "backdrop-blur-sm border border-white/20",
          !isOpen && "j hover:shadow-2xl"
        )}
        style={{
          justifyContent: isOpen ? "flex-start" : "center",
          width: isOpen ? "400px" : "120px",
          height: isOpen ? "600px" : "60px",
          borderRadius: isOpen ? "24px" : "9999px",
        }}
      >
        {/* Menu Text - Always present */}
        {!isOpen && (
          <div
            ref={menuTextRef}
            className="flex items-center justify-center gap-2"
          >
            <div className="w-2 h-2 bg-gradient-to-r from-[#D2448D] to-[#DC6263] rounded-full animate-pulse"></div>
            <span className="text-pink-500 uppercase font-bold text-20 tracking-wide">
              Menu
            </span>
          </div>
        )}
        {/* Expanded Menu Content */}
        {isOpen && (
          <>
            {/* Background Overlay */}
            <div
              ref={overlayRef}
              className="absolute inset-0 bg-gradient-to-br from-amber-100 via-yellow-50 to-amber-50 opacity-0 rounded-3xl"
            />

            {/* Close Button */}
            <div
              ref={closeButtonRef}
              className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-r from-[#161516] to-[#383636] rounded-full flex items-center justify-center cursor-pointer group hover:scale-110 transition-transform duration-300 opacity-0"
              onClick={(e) => {
                e.stopPropagation();
                collapse();
              }}
            >
              <svg
                className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>

            {/* Menu Content */}
            <div className="relative z-10 flex flex-col items-start justify-center h-full px-8">
              {/* Menu Items */}
              <ul ref={itemsRef} className="space-y-4 w-full">
                {menuItems.map((item, index) => (
                  <li
                    key={item.name}
                    className="menu-item  uppercase group opacity-0"
                  >
                    <Link
                      href={item.href}
                      className="relative text-30 font-semibold text-black   duration-300  py-3 px-6 rounded-lg transition-all  backdrop-blur-sm flex items-center gap-2 hover:underline group"
                    >
                      {item.name}

                      <ArrowUpCircleIcon className="h-7 w-7 transition-all group-hover:block hidden rotate-45 text-black" />

                      {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div> */}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MenuButton;
