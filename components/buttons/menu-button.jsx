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

  // In your dimensions state
  const [dimensions, setDimensions] = useState({
    width: { closed: "140px", open: "420px" },
    height: { closed: "45px", open: "600px" },
    top: "-28px",
  });

  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth;

      if (width < 640) {
        setDimensions({
          width: { closed: "120px", open: "320px" },
          height: { closed: "40px", open: "590px" },
          top: "-18px",
        });
      } else if (width < 768) {
        setDimensions({
          width: { closed: "130px", open: "320px" },
          height: { closed: "42px", open: "590px" },
          top: "-20px",
        });
      } else if (width < 1024) {
        setDimensions({
          width: { closed: "140px", open: "380px" },
          height: { closed: "45px", open: "590px" },
          top: "-24px",
        });
      } else {
        setDimensions({
          width: { closed: "140px", open: "420px" },
          height: { closed: "45px", open: "600px" },
          top: "-28px",
        });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // Then in your style prop:

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services/brand-advisory" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Technologies", href: "/technologies" },
    { name: "Contact Us", href: "/contact" },

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
          width: dimensions.width.open,
          height: dimensions.height.open,
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
    // Add smooth close animation
    const tl = gsap.timeline({
      defaults: { force3D: true },
      onComplete: () => setIsOpen(false),
    });

    // Animate close button out
    tl.to(closeButtonRef.current, {
      opacity: 0,
      scale: 0,
      rotation: 90,
      duration: 0.2,
      ease: "power2.in",
    })

      // Animate menu items out
      .to(
        ".menu-item",
        {
          opacity: 0,
          y: -20,
          x: 10,
          rotationY: 10,
          scale: 0.95,
          duration: 0.3,
          stagger: 0.05,
          ease: "power2.in",
        },
        0.1
      )

      // Animate container back to original size
      .to(
        containerRef.current,
        {
          width: dimensions.width.closed,
          height: dimensions.height.closed,
          borderRadius: "50px",
          duration: 0.3,
          ease: "power2.in",
        },
        0.2
      )

      // Fade out overlay
      .to(
        overlayRef.current,
        {
          opacity: 0,
          duration: 0.2,
          ease: "power2.in",
        },
        0.2
      )

      // Show menu button again
      .to(
        menuButtonRef.current,
        {
          opacity: 1,
          scale: 1,
          duration: 0.2,
          ease: "power2.out",
        },
        0.3
      );
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

  const handleCloseButtonClick = (e) => {
    e.stopPropagation();
    closeMenu();
  };

  const handleCloseButtonHover = () => {
    gsap.to(closeButtonRef.current, {
      scale: 1.1,
      rotation: 90,
      duration: 0.2,
      ease: "power2.out",
    });
  };

  const handleCloseButtonLeave = () => {
    gsap.to(closeButtonRef.current, {
      scale: 1,
      rotation: 0,
      duration: 0.2,
      ease: "power2.out",
    });
  };

  return (
    <div className="relative">
      <div
        ref={containerRef}
        className={clsx(
          "relative bg-gradient-to-br from-[#fff6e0] via-[#fff6e0] to-[#fff6e0]",
          "shadow-xl overflow-hidden transform transition-all duration-300",
          "border border-gray-200/50 backdrop-blur-md",
          !isOpen && "cursor-pointer hover:shadow-2xl"
        )}
        style={{
          width: isOpen ? dimensions.width.open : dimensions.width.closed,
          height: isOpen ? dimensions.height.open : dimensions.height.closed,
          borderRadius: isOpen ? "32px" : "50px",
          position: "absolute",
          top: dimensions.top,
          right: "0",
          zIndex: isOpen ? "1000" : "auto",
          willChange: "transform, width, height, border-radius",
        }}
        // onMouseEnter={handleMenuButtonHover}
        onClick={handleMenuButtonHover}
        // onMouseLeave={isOpen ? handleDropdownLeave : handleMenuButtonLeave}
      >
        {/* Menu Button */}
        {!isOpen && (
          <div
            ref={menuButtonRef}
            className="flex items-center justify-center h-full gap-3"
          >
            <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full animate-pulse"></div>
            <span className="text-gray-700 font-semibold text-lg tracking-wide">
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
              className="absolute inset-0 backdrop-blur-2xl !bg-white/10 opacity-0"
            />

            {/* Close Button */}
            <button
              // ref={closeButtonRef}
              onClick={handleCloseButtonClick}
              onMouseEnter={handleCloseButtonHover}
              onMouseLeave={handleCloseButtonLeave}
              className="absolute top-4 cursor-pointer right-4 z-20 w-10 h-10 text-white flex items-center justify-center bg-gradient-to-r from-pink-500 to-orange-500 backdrop-blur-sm border border-gray-200 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 group"
              // style={{ opacity: 0 }}
            >
              <svg
                className="w-5 h-5 text-white hover:rotate-180 transform transition-colors duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div
              ref={menuContentRef}
              className="relative z-10 backdrop-blur-2xl bg-white/10 flex flex-col justify-center px-8 py-12"
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
                      className="group w-max flex items-center gap-4 relative "
                      onClick={() => closeMenu()}
                    >
                      <span className="relative text-3xl font-semibold text-gray-800 transition-colors duration-300 group-hover:text-pink-600 py-3 block">
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
                          strokeWidth="1.8"
                          stroke="currentColor"
                          className="w-8 h-8 transform text-pink-500"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                          ></path>
                        </svg>
                      </div>
                    </Link>
                  </div>
                ))}
              </nav>

              {/* <ContactButton /> */}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MenuButton;