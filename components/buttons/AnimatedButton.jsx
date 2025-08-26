import { useRef, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { UserIcon } from "@heroicons/react/24/solid";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function AnimatedButton({ text = "ABOUT ME", href = "#" }) {
  const dotRef = useRef(null);
  const userIconRef = useRef(null);
  const textTopRef = useRef(null);
  const textBottomRef = useRef(null);
  const tlRef = useRef(null); // <-- timeline ref

  useEffect(() => {
    gsap.set(userIconRef.current, { opacity: 0, scale: 0.5 });
    gsap.set(textBottomRef.current, { y: -22, opacity: 1 });
    gsap.set(textTopRef.current, { y: -30, opacity: 1 });
  }, []);

  const handleEnter = () => {
    if (tlRef.current) tlRef.current.kill(); // kill previous timeline
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
    tl.to(dotRef.current, { scale: 0.3, opacity: 0, duration: 0.2 })
      .to(userIconRef.current, { opacity: 1, scale: 1, duration: 0.3 }, "<")
      .to(textTopRef.current, { y: 6, opacity: 1, duration: 0.3 }, "<")
      .to(
        textBottomRef.current,
        { y: 10, opacity: 1, filter: "blur(0px)", duration: 0.3 },
        "<"
      );
    tlRef.current = tl;
  };

  const handleLeave = () => {
    if (tlRef.current) tlRef.current.kill(); // kill previous timeline
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
    tl.to(userIconRef.current, { opacity: 0, scale: 0.5, duration: 0.2 })
      .to(dotRef.current, { opacity: 1, scale: 1, duration: 0.3 }, "<")
      .to(textBottomRef.current, { y: -22, opacity: 1, duration: 0.3 }, "<")
      .to(
        textTopRef.current,
        { y: -30, opacity: 1, filter: "blur(0px)", duration: 0.3 },
        "<"
      );
    tlRef.current = tl;
  };

  return (
    <Link
      href={href}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="relative inline-flex items-center gap-3 px-6 py-3 border border-white/50 text-black rounded-md bg-white hover:bg-white transition-all duration-300 overflow-hidden hover:scale-[0.95] hover:border-[1px] hover:border-white max-w-fit "
    >
      {/* Icon */}
      <div className="relative w-5 h-5 shrink-0">
        <div
          ref={dotRef}
          className="absolute w-2.5 h-2.5 top-1.5 left-1.5 bg-black rounded-full"
        />
        <ArrowRightIcon
          ref={userIconRef}
          className="absolute w-5 h-5 text-black"
        />
      </div>
      {/* Text Stack */}
      <div className="relative bg-white h-8 w-fit overflow-hidden ">
        <span ref={textTopRef} className="block text-sm font- text-black uppercase font-semibold">
          {text}
        </span>
        <span
          ref={textBottomRef}
          className="block text-sm font-semibold uppercase text-black mt-2"
        >
          {text}
        </span>
      </div>
    </Link>
  );
}
