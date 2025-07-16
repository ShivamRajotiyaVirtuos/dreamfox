"use client";
import TextReveal from "../Text Reveal/textreveal";
import React from "react";
import { FaRocket, FaBrain, FaUsers, FaGlobe } from "react-icons/fa";

const valuesData = [
  {
    icon: <FaRocket size={36} />,
    title: "Innovation First",
    description: "We embrace change and continuously seek creative solutions to move forward.",
  },
  {
    icon: <FaBrain size={36} />,
    title: "Think Smart",
    description: "We approach challenges with intelligence and make data-driven decisions.",
  },
  {
    icon: <FaUsers size={36} />,
    title: "People Matter",
    description: "We support, uplift, and celebrate the diversity and passion of our people.",
  },
  {
    icon: <FaGlobe size={36} />,
    title: "Global Impact",
    description: "We aim to create a meaningful, scalable impact beyond borders.",
  },
];

const CultureValuesSection = () => {
  return (
    <section className="bg-black w-full">
      {/* Heading with animation */}
      <TextReveal
        className="text-120 text-white text-center font-semibold mb-4 md:mb-6 lg:mb-8 pt-20"
        animation="rotateX"
        stagger={0.1}
        duration={0.8}
      >
        Culture & Values
      </TextReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  border-t-2 border-b-2 md:border-b-0 border-l-2 border-r-2 border-dashed border-gray-700">
        {valuesData.map((item, index) => (
          <div
            key={index}
            className="bg-[#111] text-white border-t-2 md:border-t-0  md:border-r-2 border-b-2 border-dashed border-gray-700 last:border-r-0 flex flex-col items-center justify-center px-6 py-16"
          >
            {/* Icon Animation */}
            <TextReveal animation="scale" className="mb-4">
              <div className="text-white">{item.icon}</div>
            </TextReveal>

            {/* Title Animation */}
            <TextReveal animation="slideRight" className="text-40 font-semibold text-center mb-4">
              {item.title}
            </TextReveal>

            {/* Description Animation */}
            <TextReveal className="text-center text-20 text-gray-300">
              {item.description}
            </TextReveal>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CultureValuesSection;
