"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import AnimatedMenu from "../buttons/menu-button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
    { name: "Blog", href: "#blog" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-20 sm:h-28 2xl:h-24  backdrop-blur-2xl ">
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-20 sm:h-28 2xl:h-24">
          {/* Logo */}

          <div id="nav-logo" className="flex-shrink-0">
            <Image
              src="/logos/dreamfox_emblem.svg"
              alt="Logo"
              width={150}
              height={50}
              className="h-12 w-auto"
            />
          </div>
          <div className="absolute right-0 top-0 h-full flex items-center">
            <AnimatedMenu />
          </div>
          {/* Menu Button */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
