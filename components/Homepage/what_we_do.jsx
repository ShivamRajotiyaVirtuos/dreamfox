import React from "react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const WhatWeDo = () => {
  const cards = [
    {
      id: 1,
      title: "Brand Strategy",
      description:
        "Comprehensive brand positioning and messaging strategies that resonate with your target audience and drive meaningful connections.",
    },
    {
      id: 2,
      title: "Digital Experiences",
      description:
        "Creating immersive digital experiences that captivate users and deliver exceptional user journeys.",
    },
    {
      id: 3,
      title: "Creative Design",
      description:
        "Bold and innovative design solutions that make your brand stand out in the competitive marketplace.",
    },
  ];

  return (
    <div className="flex min-h-screen section-half-unconstrained py-16 lg:py-32 flex-col lg:flex-row gap-8 lg:gap-12  items-center">
      <div className="stretch-right flex w-full gap-20 items-end">
        <motion.div
          className="lg:w-3/5"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-24 mb-4 font-bold text-[#DC6263]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            What we do
          </motion.h2>

          <motion.p
            className="text-30 leading-relaxed text-white mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            At DreamFox, we go far beyond simply offering digital services — we
            architect meaningful brand journeys from the ground up. Every
            project we take on is rooted in thoughtful strategy, bold
            creativity, and a deep understanding of what drives modern
            audiences. Our approach is built on four foundational pillars that
            guide everything we do — empowering brands to transform, tell
            unforgettable stories, create immersive experiences, and achieve
            measurable growth in the digital space.
          </motion.p>

          <motion.button
            className="group flex items-center gap-2 rounded-lg hover:bg-white transition-all duration-500 ease-in-out"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowTopRightOnSquareIcon className="size-16 p-3 rounded bg-white text-black  transition-all duration-500 ease-in-out" />
            <span className="text-24 text-white font-semibold group-hover:text-black pr-4 pl-2 transition-colors duration-500 ease-in-out">
              Learn More
            </span>
          </motion.button>
        </motion.div>

        <motion.div
          className="w-2/5"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="">
            <div className="flex gap-6 pr-0 min-w-full overflow-hidden">
              {cards.map((card, index) => (
                <motion.div
                  key={card.id}
                  className=" first:bg-[#D2458C] lg:min-w-[400px] first:text-white lg:min-h-[520px] flex justify-end flex-col bg-white rounded-2xl shadow-lg pt-32 px-8 pb-8 border border-gray-200 hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <motion.h3
                    className="text-30 font-semibold mb-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    {card.title}
                  </motion.h3>
                  <motion.p
                    className="text-24 leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    {card.description}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhatWeDo;
