"use client";

import React, { useState } from "react";
import {
  ArrowTopRightOnSquareIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import TextReveal from "../Text Reveal/textreveal";
const images = [
  "/images/home/cohering.webp",
  "/images/home/godaddy.webp",
  "/images/home/microsoft.webp",

  "/images/home/salesforce.webp",
  "/images/home/oracle.webp",
];

const ReviewsSection = () => {
  const [cards, setCards] = useState(images);
  const [isAnimating, setIsAnimating] = useState(false);

  const moveTopToBack = async () => {
    if (isAnimating) return;
    setIsAnimating(true);

    // Add a quick swipe-down delay
    await new Promise((resolve) => setTimeout(resolve, 150));

    const newCards = [...cards];
    const top = newCards.shift();
    newCards.push(top);
    setCards(newCards);
    setTimeout(() => setIsAnimating(false), 300);
  };

  const moveBottomToTop = () => {
    if (isAnimating) return;
    const newCards = [...cards];
    const last = newCards.pop();
    newCards.unshift(last);
    setCards(newCards);
  };

  return (
    <section className="w-full container flex flex-col items-center py-16 lg:py-32 bg-black ">
      {/* Header */}
      <div className=" text-center  z-10">
        <TextReveal
          className="text-120 font-semibold mb-4 md:mb-6 lg:mb-8 text-white text-center"
          animation="rotateX"
          stagger={0.1}
          duration={0.8}
        >
          Our Partners
        </TextReveal>
        {/* <h2 className="text-120 font-semibold mb-4 md:mb-6 lg:mb-8 text-white text-center">
          Our Partners will tell you better about us
        </h2> */}
        <TextReveal
          className="text-40  text-white/80 mb-6"
          animation="rotateX"
          stagger={0.1}
          duration={0.8}
        >
          At <b>Dreamfox</b>, we’ve partnered with leading brands across
          industries to bring bold visions to life. Our clients call us their{" "}
          <i>creative partner</i> — blending <b>strategy</b>, <b>speed</b>, and{" "}
          <b>big ideas</b> to deliver work that consistently exceeds
          expectations.
        </TextReveal>
        {/* <p className="text-40  text-white/80 mb-6 ">
          Our clients call us their creative partner — blending strategy, speed,
          and bold ideas to deliver work that exceeds expectations.
        </p> */}

        {/* <div className="flex justify-center">
          <button className="group flex items-center gap-2 rounded overflow-hidden relative cursor-pointer transition-all duration-1000 ease-[cubic-bezier(0.77,0,0.175,1)]">
            <div className="absolute inset-0 bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-[900ms] ease-[cubic-bezier(0.77,0,0.175,1)]" />

            <ArrowTopRightOnSquareIcon className="size-12 p-2 rounded bg-white text-black z-10 relative" />

            <span
              className="text-lg font-semibold pr-4 pl-2 text-white z-10 relative 
            group-hover:text-gray-100 transition-colors duration-100 
            group-hover:delay-0 
            [@media(hover:hover)]:group-hover:text-black 
            [@media(hover:hover)]:delay-[900ms] [@media(hover:hover)]:duration-100"
            >
              Get more information
            </span>
          </button>
        </div> */}
      </div>

      {/* Card Stack with 3D effect */}
      <div className="relative h-[250px] sm:h-[500px]  w-[1000px] max-w-full mt-20 sm:mt-40 perspective-[1200px]">
        {cards.map((img, index) => {
          const offset = cards.length - index;
          const translateY = -offset * 20;
          const scale = 1 - offset * 0.02;
          const rotateX = offset * 2;

          return (
            <motion.div
              key={img}
              className="absolute w-full sm:h-full"
              style={{ zIndex: index }}
              animate={{
                y: translateY,
                scale: scale,
                rotateX: rotateX,
              }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 20,
              }}
            >
              {/* <img
                src={img}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover rounded-xl border-4 border-white shadow-2xl"
              /> */}
              <div className="relative w-full sm:h-full rounded overflow-hidden  shadow">
                <Image
                  height={1000}
                  width={1200}
                  src={img}
                  alt={`Slide ${index}`}
                  className="w-full  border-t border-l border-r border-white/20 h-full object-cover rounded-xl"
                />
                <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-black to-transparent  pointer-events-none rounded-b" />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <div className="mt-4 sm:mt-16 flex gap-4">
        <button
          onClick={moveBottomToTop}
          className="p-2 bg-[#1a1a1a] border border-white/30 rounded shadow hover:bg-gray-800 transition"
        >
          <ChevronUpIcon className="w-10 h-8 text-white" />
        </button>
        <button
          onClick={moveTopToBack}
          className="p-2 bg-[#1a1a1a] border border-white/30 rounded shadow hover:bg-gray-800 transition"
        >
          <ChevronDownIcon className="w-10 h-8 text-white" />
        </button>
      </div>
    </section>
  );
};

export default ReviewsSection;
