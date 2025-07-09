'use client';

import React, { useState } from 'react';
import {
  ArrowTopRightOnSquareIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  'https://static.vecteezy.com/system/resources/previews/003/130/062/large_2x/cyber-circuit-future-technology-concept-background-text-free-vector.jpg',
  'https://static.vecteezy.com/system/resources/previews/002/964/235/large_2x/cyber-circuit-future-technology-concept-background-free-vector.jpg',
  // 'https://static.vecteezy.com/system/resources/thumbnails/008/905/837/small_2x/3d-render-of-neon-and-light-glowing-on-dark-scene-cyber-punk-night-city-concept-night-life-technology-network-for-5g-beyond-generation-and-futuristic-scene-sci-fi-pattern-theme-free-photo.jpg',
  'https://static.vecteezy.com/system/resources/thumbnails/003/130/089/small_2x/cyber-circuit-future-technology-concept-background-text-free-vector.jpg',
  'https://static.vecteezy.com/system/resources/previews/060/199/356/non_2x/fluid-wave-like-abstract-shape-in-deep-teal-and-green-flowing-across-a-gradient-background-ideal-for-high-tech-projects-posters-ui-design-or-digital-advertisements-free-vector.jpg',
  // 'https://static.vecteezy.com/system/resources/thumbnails/008/905/837/small_2x/3d-render-of-neon-and-light-glowing-on-dark-scene-cyber-punk-night-city-concept-night-life-technology-network-for-5g-beyond-generation-and-futuristic-scene-sci-fi-pattern-theme-free-photo.jpg',
  // 'https://static.vecteezy.com/system/resources/previews/003/130/062/large_2x/cyber-circuit-future-technology-concept-background-text-free-vector.jpg',
  // 'https://static.vecteezy.com/system/resources/thumbnails/003/130/089/small_2x/cyber-circuit-future-technology-concept-background-text-free-vector.jpg',
  // 'https://static.vecteezy.com/system/resources/previews/060/199/356/non_2x/fluid-wave-like-abstract-shape-in-deep-teal-and-green-flowing-across-a-gradient-background-ideal-for-high-tech-projects-posters-ui-design-or-digital-advertisements-free-vector.jpg',
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
    <section className="w-full flex flex-col items-center py-16 bg-[#1a1a1a]">
      {/* Header */}
      <div className="max-w-3xl text-center mb-12 z-10">
        <h2 className="text-3xl md:text-5xl font-semibold mb-4 text-white">
          Our Partners will <br /> tell you better about us
        </h2>
        <p className="text-sm md:text-base text-white/80 mb-6">
          Our clients call us their creative partner — blending strategy, speed,
          and bold ideas to deliver work that exceeds expectations.
        </p>

        <div className="flex justify-center">
          <button className="group flex items-center gap-2 rounded overflow-hidden relative cursor-pointer transition-all duration-1000 ease-[cubic-bezier(0.77,0,0.175,1)]">
            <div className="absolute inset-0 bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-[900ms] ease-[cubic-bezier(0.77,0,0.175,1)]" />
            <ArrowTopRightOnSquareIcon className="size-12 p-2 rounded bg-white text-black z-10 relative" />
            <span className="text-lg font-semibold pr-4 pl-2 text-white z-10 relative group-hover:text-black">
              Get more information
            </span>
          </button>
        </div>
      </div>

      {/* Card Stack with 3D effect */}
      <div className="relative h-[450px] w-[700px] max-w-full mt-20 perspective-[1200px]">
        {cards.map((img, index) => {
          const offset = cards.length - index;
          const translateY = -offset * 20;
          const scale = 1 - offset * 0.02;
          const rotateX = offset * 2;

          return (
            <motion.div
              key={img}
              className="absolute w-full h-full"
              style={{ zIndex: index }}
              animate={{
                y: translateY,
                scale: scale,
                rotateX: rotateX,
              }}
              transition={{
                type: 'spring',
                stiffness: 120,
                damping: 20,
              }}
            >
              {/* <img
                src={img}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover rounded-xl border-4 border-white shadow-2xl"
              /> */}
              <div className="relative w-full h-full rounded-xl overflow-hidden border-2 border-white shadow-2xl">
              <img
                src={img}
                alt={`Slide ${index}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent pointer-events-none rounded-b-xl" />
            </div>
            </motion.div>
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <div className="mt-6 flex gap-4">
        <button
          onClick={moveBottomToTop}
          className="p-2 bg-[#1a1a1a] border border-gray-300 rounded shadow hover:bg-gray-800 transition"
        >
          <ChevronUpIcon className="h-5 w-5 text-white" />
        </button>
        <button
          onClick={moveTopToBack}
          className="p-2 bg-[#1a1a1a] border border-gray-300 rounded shadow hover:bg-gray-800 transition"
        >
          <ChevronDownIcon className="h-5 w-5 text-white" />
        </button>
      </div>
    </section>
  );
};

export default ReviewsSection;
