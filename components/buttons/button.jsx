"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

const HoverButton = ({ text, href = "#", className = "" }) => {
  const [isHovered, setIsHovered] = useState(false);

  const splitText = text.split("");

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.03,
      },
    },
  };

  const letterVariants = {
    hidden: { y: 0, opacity: 1 },
    visible: { y: -10, opacity: 0 },
  };

  const hoverVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const arrowVariants = {
    hidden: { y: 0, opacity: 1, rotate: 0 },
    visible: { y: -10, opacity: 0, rotate: 45 },
  };

  const arrowHoverVariants = {
    hidden: { y: 20, opacity: 0, rotate: -45 },
    visible: { y: 0, opacity: 1, rotate: 0 },
  };

  return (
    <Link href={href}>
      <motion.button
        className={`relative overflow-hidden px-6 py-3  border-2 border-white  font-semibold rounded-lg transition-all duration-300 bg-white text-black ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.0 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Original text that moves up and fades out */}
        <motion.div
          className="relative z-10 flex items-center gap-2"
          variants={containerVariants}
          initial="hidden"
          animate={isHovered ? "visible" : "hidden"}
        >
          <span className="flex">
            {splitText.map((letter, index) => (
              <motion.span
                key={index}
                className="inline-block"
                variants={letterVariants}
                transition={{ duration: 0.3, ease: "easeOut" }}
                style={{ width: letter === " " ? "0.25em" : "auto" }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </span>
          <motion.div
            variants={arrowVariants}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <ArrowUpRightIcon className="w-8 h-8" />
          </motion.div>
        </motion.div>

        {/* Hover text that comes from bottom */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center gap-2 z-20"
          variants={containerVariants}
          initial="hidden"
          animate={isHovered ? "visible" : "hidden"}
        >
          <span className="flex">
            {splitText.map((letter, index) => (
              <motion.span
                key={`hover-${index}`}
                className="inline-block"
                variants={hoverVariants}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                  delay: index * 0.02,
                }}
                style={{ width: letter === " " ? "0.25em" : "auto" }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </span>
          <motion.div
            variants={arrowHoverVariants}
            transition={{
              duration: 0.3,
              ease: "easeOut",
              delay: splitText.length * 0.02,
            }}
          >
            <ArrowUpRightIcon className="w-8 h-8" />
          </motion.div>
        </motion.div>
      </motion.button>
    </Link>
  );
};

export default HoverButton;
