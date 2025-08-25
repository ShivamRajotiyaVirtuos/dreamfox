"use client";
import React, { useEffect } from "react";
import VanillaTilt from "vanilla-tilt";
import {
  LightBulbIcon,
  AdjustmentsHorizontalIcon,
  UsersIcon,
  GlobeAmericasIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  SparklesIcon,
} from "@heroicons/react/24/solid";
import TextReveal from "../Text Reveal/textreveal";
import AnimatedButton from "../buttons/AnimatedButton";

const Cta = () => {
  return (
    <section className="w-full pb-20 lg:pb-32 bg-black text-white container lg:min-h-[60vh]">
      <TextReveal
        animation="rotateX"
        stagger={0.1}
        duration={0.8}
        className="text-center text-120 font-bold text-white  mt-20"
      >
        Ready to design, brand, and scale with DreamFox?
      </TextReveal>

      <div className="flex justify-center mt-16 sm:mt-32 scale-110 sm:scale-200">
        <AnimatedButton text="Talk to Us" href="/contactus" />
      </div>
    </section>
  );
};

export default Cta;
