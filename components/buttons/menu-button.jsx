"use client";

import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import clsx from "clsx";
import Link from "next/link";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import ContactButton from "./contact-button";

const MenuButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const overlayRef = useRef(null);
  const menuContentRef = useRef(null);
  const closeButtonRef = useRef(null);
  const menuButtonRef = useRef(null);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    // Pre-initialize GSAP properties to avoid first-hover lag
    if (containerRef.current && overlayRef.current) {
      gsap.set(containerRef.current, {
        transformOrigin: "top-right",
        force3D: true, // Hardware acceleration
      });
      gsap.set(overlayRef.current, {
        opacity: 0,
        force3D: true,
      });
    }
  }, []);

  useEffect(() => {
    // Initialize menu items when they're rendered
    if (isOpen) {
      gsap.set(".menu-item", {
        opacity: 0,
        y: 30,
        x: 15,
        rotationY: -10,
        force3D: true,
      });
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      openMenu();
    }
  }, [isOpen]);

  const openMenu = () => {
    // Pre-set overlay to slightly visible to eliminate flash
    gsap.set(overlayRef.current, { opacity: 0.1 });

    const tl = gsap.timeline({
      defaults: { force3D: true }, // Hardware acceleration for all animations
    });

    // Hide menu button first
    tl.to(menuButtonRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 0.2,
      ease: "power2.inOut",
    })

      // Start overlay and container simultaneously
      .to(
        overlayRef.current,
        {
          opacity: 1,
          duration: 0.35,
          ease: "power2.out",
        },
        0.1 // Start at 0.1 seconds
      )

      .to(
        containerRef.current,
        {
          width: "420px",
          height: "600px",
          borderRadius: "32px",
          duration: 0.35,
          ease: "power3.out",
        },
        0.1 // Same start time as overlay
      )

      // Animate close button in
      .fromTo(
        closeButtonRef.current,
        {
          opacity: 0,
          scale: 0,
          rotation: -90,
        },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.4,
          ease: "back.out(1.7)",
        },
        0.2
      )

      // Animate menu items with progressive stagger
      .fromTo(
        ".menu-item",
        {
          opacity: 0,
          y: 30,
          x: 15,
          rotationY: -10,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          x: 0,
          rotationY: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "power2.out",
        },
        0.3
      );
  };

  const closeMenu = () => {
    // Simple immediate close without complex animations
    setIsOpen(false);
  };

  const handleMenuButtonHover = () => {
    if (!isOpen) {
      // Open menu on hover
      setIsOpen(true);

      // Remove the additional scale animation to prevent conflicts
      gsap.set(containerRef.current, {
        scale: 1,
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
      });
    }
  };

  const handleMenuButtonLeave = () => {
    // Only apply scale effect if menu is not open
    if (!isOpen) {
      gsap.to(containerRef.current, {
        scale: 1,
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
        duration: 0.3,
        ease: "power2.out",
      });
    }
  };

  const handleDropdownLeave = () => {
    // Close menu when cursor leaves the entire dropdown area
    closeMenu();
  };

  return (
    <div className="relative">
      <div
        ref={containerRef}
        className={clsx(
          "relative bg-gradient-to-br from-[#fdfbe5] via-gray-50 to-gray-100",
          "shadow-xl overflow-hidden transform transition-all duration-300",
          "border border-gray-200/50 backdrop-blur-md",
          !isOpen && "cursor-pointer hover:shadow-2xl"
        )}
        style={{
          width: isOpen ? "420px" : "140px",
          height: isOpen ? "600px" : "60px",
          borderRadius: isOpen ? "32px" : "50px",
          position: "absolute",
          top: "-28px",
          right: "0",
          zIndex: isOpen ? "1000" : "auto",
          willChange: "transform, width, height, border-radius", // Optimize for animations
        }}
        onMouseEnter={handleMenuButtonHover}
        onClick={handleMenuButtonHover}

        onMouseLeave={isOpen ? handleDropdownLeave : handleMenuButtonLeave}
      >
        {/* Menu Button */}
        {!isOpen && (
          <div
            ref={menuButtonRef}
            className="flex items-center justify-center h-full gap-3"
          >
            <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full animate-pulse"></div>
            <span className="text-gray-700 font-bold text-lg tracking-wide">
              MENU
            </span>
          </div>
        )}

        {/* Expanded Menu Content */}
        {isOpen && (
          <>
            {/* Background Overlay */}
            <div
              ref={overlayRef}
              className="absolute inset-0 bg-gradient-to-br from-[#fdfbe5] via-gray-50 to-gray-100 opacity-0"
            />

            <div
              ref={menuContentRef}
              className="relative z-10  flex flex-col justify-center px-8 py-12"
            >
              <nav className="space-y-6">
                {menuItems.map((item, index) => (
                  <div
                    key={item.name}
                    className="menu-item uppercase"
                    style={{ opacity: 0 }}
                  >
                    <Link
                      href={item.href}
                      className="group flex items-center gap-4 relative "
                      onClick={() => closeMenu()}
                    >
                      <span className="relative text-3xl font-bold text-gray-800 transition-colors duration-300 group-hover:text-pink-600 py-3 block">
                        {item.name}

                        {/* Progressive Underline */}
                        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-pink-500 to-orange-500 transition-all duration-500 ease-out group-hover:w-full"></span>

                        {/* Secondary underline for extra effect */}
                        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-pink-300 to-orange-300 transition-all duration-700 delay-100 ease-out group-hover:w-full"></span>
                      </span>

                      {/* Arrow icon that appears on hover */}
                      <div className="transition-all transform opacity-0 duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                        <svg
                          data-slot="icon"
                          fill="none"
                          stroke-width="1.8"
                          stroke="currentColor"
                          className="w-8 h-8 transform text-pink-500"

                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                          ></path>
                        </svg>

                        {/* <svg
                          data-slot="icon"
                          fill="none"
                          stroke-width="2"
                          className="w-8 h-8 transform -rotate-45 text-pink-500"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                          ></path>
                        </svg> */}
                        {/* <svg
                          className="w-6 h-6 text-pink-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg> */}
                      </div>
                    </Link>
                  </div>
                ))}
              </nav>

              <ContactButton />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MenuButton;
