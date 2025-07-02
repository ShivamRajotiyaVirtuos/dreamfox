import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Snapshot = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const cards = [
    {
      id: 1,
      title: "Studio Fugu Redesign",
      description:
        "Complete website overhaul with modern design principles and enhanced user experience.",
      videoSrc:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    },
    {
      id: 2,
      title: "Webflow Development",
      description:
        "Custom Webflow implementation with advanced interactions and responsive design.",
      videoSrc:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    },
    {
      id: 3,
      title: "Creative Portfolio",
      description:
        "Showcasing creative work with dynamic layouts and smooth transitions.",
      videoSrc:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    },
    {
      id: 4,
      title: "Cultural Platform",
      description:
        "Platform dedicated to promoting cultural industries and creative professionals.",
      videoSrc:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    },
    {
      id: 5,
      title: "Localization Studio",
      description:
        "Website redesign & Webflow development for studio fugu, A localization studio.",
      videoSrc:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    },
  ];

  return (
    <section className="min-h-screen flex justify-center items-center bg-black text-white py-20 px-8">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-6xl font-bold mb-8">Case Snapshots</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Website redesign & Webflow development for studio fugu, A
            localization studio dedicated to the creative and cultural
            industries.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="flex gap-4 overflow-hidden justify-center items-end">
          {cards.map((card) => (
            <motion.div
              key={card.id}
              className="relative bg-white overflow-hidden cursor-pointer rounded-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{
                opacity: 1,
                scale: 1,
                width: hoveredCard === card.id ? "400px" : "250px",
                height: hoveredCard === card.id ? "450px" : "300px",
              }}
              transition={{
                duration: 0.6,
                delay: card.id * 0.1,
                layout: { duration: 0.5, ease: "easeInOut" },
              }}
              layout
              onHoverStart={() => setHoveredCard(card.id)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              <div className="relative w-full h-full">
                <video
                  src={card.videoSrc}
                  className="w-full h-full object-cover"
                  muted
                  loop
                  playsInline
                  ref={(video) => {
                    if (video) {
                      if (hoveredCard === card.id) {
                        video.play();
                      } else {
                        video.pause();
                        video.currentTime = 0;
                      }
                    }
                  }}
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                {/* Content */}
                <AnimatePresence>
                  {hoveredCard === card.id && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 p-6 text-white"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
                      <p className="text-sm text-gray-200">
                        {card.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Card number/title when not hovered */}
                <AnimatePresence>
                  {hoveredCard !== card.id && (
                    <motion.div
                      className="absolute bottom-4 left-4 text-white"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="text-lg font-semibold">
                        {card.title}
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Snapshot;
