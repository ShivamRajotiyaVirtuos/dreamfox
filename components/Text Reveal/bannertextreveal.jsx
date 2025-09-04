"use client";
import React, { useEffect, useRef, useState } from "react";

const BannerTextReveal = ({
  title,
  description,
  titleClassName,
  descriptionClassName,
  delay = 1.2,
  duration = 1,
}) => {
  const [isAnimated, setIsAnimated] = useState(false);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);

  const animateTextReveal = () => {
    if (titleRef.current && !isAnimated) {
      const title = titleRef.current;
      const text = title.textContent;
      title.innerHTML = "";

      const words = text.split(" ");
      words.forEach((word, wordIndex) => {
        const wordSpan = document.createElement("span");
        wordSpan.style.display = "inline-block";
        wordSpan.style.overflow = "hidden";
        wordSpan.style.marginRight = "0.25em";

        const letters = word.split("");
        letters.forEach((letter, letterIndex) => {
          const letterSpan = document.createElement("span");
          letterSpan.textContent = letter;
          letterSpan.style.display = "inline-block";
          letterSpan.style.transform = "translateY(100%) rotateX(90deg)";
          letterSpan.style.opacity = "0";
          letterSpan.style.transition =
            "all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
          letterSpan.style.transitionDelay = `${
            wordIndex * 0.1 + letterIndex * 0.05
          }s`;

          setTimeout(() => {
            letterSpan.style.transform = "translateY(0%) rotateX(0deg)";
            letterSpan.style.opacity = "1";
          }, 100);

          wordSpan.appendChild(letterSpan);
        });

        title.appendChild(wordSpan);
      });

      // Animate description
      if (descriptionRef.current) {
        setTimeout(() => {
          descriptionRef.current.style.transform = "translateY(0px)";
          descriptionRef.current.style.opacity = "1";
          descriptionRef.current.style.filter = "blur(0px)";
        }, delay * 1000);
      }

      setIsAnimated(true);
    }
  };

  useEffect(() => {
    if (!isAnimated) {
      const timer = setTimeout(() => {
        animateTextReveal();
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [isAnimated]);

  return (
    <>
      <style jsx>{`
        @keyframes textReveal {
          0% {
            opacity: 0;
            transform: translateY(40px);
            filter: blur(4px);
          }
          60% {
            opacity: 0.8;
            filter: blur(2px);
          }
          100% {
            opacity: 1;
            filter: blur(0px);
          }
        }
      `}</style>

      <div className="">
        <h1
          ref={titleRef}
          className={titleClassName}
        >
          {title}
        </h1>
        <p
          ref={descriptionRef}
          className={descriptionClassName}
          style={{
            transform: "translateY(-10px)",
            opacity: 0,
            filter: "blur(4px)",
            transition: `all ${duration}s cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
          }}
        >
          {description}
        </p>
      </div>
    </>
  );
};

export default BannerTextReveal;