"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function CtaButton({ text, href }) {
  return (
    <div className="inline-block relative">
      <Link
        href={href}
        className="relative inline-flex items-center font-semibold text-white text-xl px-6 py-3"
      >
        {/* Yellow expanding circle */}
        <div className=" bg-yellow-400 rounded-full left-[-0.7em] top-1/2 -translate-y-1/2 z-0"></div>

        {/* Button content */}
        <span className="relative z-10">{text}</span>
        <ArrowRightIcon className="relative z-10 w-5 h-5 ml-2" />
      </Link>
    </div>
  );
}
