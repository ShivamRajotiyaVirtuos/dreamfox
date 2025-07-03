import React from "react";
import { motion } from "framer-motion";

const Vision = () => {
  const headingWords = ["Our", "Vision"];
  const descriptionWords = [
    "We",
    "don't",
    "just",
    "follow",
    "trends",
    "—",
    "we",
    "shape",
    "them.",
    "DreamFox",
    "is",
    "a",
    "powerhouse",
    "of",
    "digital",
    "transformation",
    "through",
    "brand",
    "creativity,",
    "strategic",
    "marketing,",
    "immersive",
    "experience",
    "design,",
    "and",
    "media",
    "storytelling.",
    "We",
    "imagine",
    "futures",
    "for",
    "brands,",
    "then",
    "build",
    "them.",
  ];

  return (
    <section className="py-16 lg:py-32 px-6 flex items-center">
      <div className="container mx-auto">
        <div className="mb-10 flex flex-wrap gap-x-4">
          {headingWords.map((word, index) => (
            <motion.h2
              style={{
                background:
                  "linear-gradient(96.8deg, #D2448D 2.85%, #DC6263 84.49%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="text-[120px] font-bold"
            >
              {word}
            </motion.h2>
          ))}
        </div>

        <div
          className="flex
        
        flex-wrap gap-x-2 max-w-5xl "
        >
          {descriptionWords.map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="text-40 text-[#ec4672] leading-relaxed inline-block"
            >
              {word}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vision;
