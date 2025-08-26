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
import Image from "next/image";

const Cta = () => {
  return (
    <section className="w-full relative py-20 lg:py-32 bg-black text-white container lg:min-h-[60vh]">
      <TextReveal
        animation="rotateX"
        stagger={0.1}
        duration={0.8}
        className="text-center text-80 font-bold text-white  mt-20"
      >
        Ready to design, brand, and scale with DreamFox?
      </TextReveal>

      <div className="flex justify-center mt-16 sm:mt-24 scale-110 sm:scale-[1.8]">
        <AnimatedButton text="Talk to Us" href="/contactus" />
      </div>

      <Image src={"/images/fox1.svg"} alt="fox" width={200} height={200} className="mx-auto absolute left-0 bottom-0" />
    </section>
  );
};

export default Cta;
