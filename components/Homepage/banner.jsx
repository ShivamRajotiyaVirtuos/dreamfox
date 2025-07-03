import Image from "next/image";
import React from "react";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { motion } from "framer-motion";
import HoverButton from "../buttons/button";

const Banner = () => {
  return (
    <div className="container relative my-16 lg:my-32 min-h-[90vh]">
      <div className="text-left relative">
        <motion.h3
          className="text-24 font-semibold text-[#d2448d] mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Digital branding, reimagined by DreamFox
        </motion.h3>
        <motion.h1
          className="text-[128px] font-bold uppercase text-white leading-tight group"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.span
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            WHERE{" "}
          </motion.span>
          <motion.span
            className="bg-gradient-to-r px-6 inline-block  from-[#DC6263] to-[#D2448D] transform -rotate-[2deg]  text-black"
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: -2 }}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            Brands
            <br />
          </motion.span>{" "}
          <Image
            src="/icons/ring.svg"
            alt="Ring Icon"
            width={100}
            height={100}
            className="inline-block bg-[#1a1a1a] rounded-full group-hover:animate-spin ml-2 absolute -top-4 -translate-x-16"
          />
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            Dream in <br />
            Digital
          </motion.span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="absolute right-0 bottom-0"
        >
          <HoverButton
            text="Get Started"
            href="/welcome"
            className="hover:scale-105 transition-all absolute right-0 bottom-0 text-30 font-semibold rounded-lg pl-8 pr-16 pb-4 pt-32 bg-gray-200 flex gap-4"
          />
          {/* <Link
            href={"/"}
            className="hover:scale-105 transition-all absolute right-0 bottom-0 text-30 font-semibold rounded-lg pl-8 pr-16 pb-4 pt-32 bg-gray-200 flex gap-4"
          >
            <span>Get Started</span>
            <ArrowUpRightIcon className="w-8 h-8" />
          </Link> */}
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
