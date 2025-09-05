import React, { useEffect, useRef } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import TextReveal from "../Text Reveal/textreveal";
import Link from "next/link";

const JobListingsGrid = () => {
  const gridRef = useRef(null);
  const cardsRef = useRef([]);

  const jobListings = [
    {
      title: "Finance Manager/Controller",
      location: "United States, Massachusetts, Boston",
      creationDate: "2025-07-17",
      code: null,
    },
    {
      title: "FPGA Engineer",
      location: "Japan",
      creationDate: "2025-06-18",
      code: null,
    },
    {
      title: "Front End Engineer",
      location: "United States, Massachusetts, Boston",
      creationDate: "2025-01-15",
      code: null,
    },
    {
      title: "Principal Software Engineer - C++",
      location: "United States, Massachusetts, Boston",
      creationDate: "2025-03-14",
      code: "111",
    },
    {
      title: "Principal Software Engineer - Python",
      location: "United States, Massachusetts, Boston",
      creationDate: "2025-03-21",
      code: null,
    },
    {
      title: "Senior DevOps Engineer",
      location: "United States, California, San Francisco",
      creationDate: "2025-04-10",
      code: "205",
    },
    {
      title: "Data Scientist",
      location: "United States, New York, New York",
      creationDate: "2025-05-22",
      code: null,
    },
    {
      title: "Machine Learning Engineer",
      location: "Canada, Ontario, Toronto",
      creationDate: "2025-06-05",
      code: "301",
    },
    {
      title: "Product Manager - AI",
      location: "United Kingdom, London",
      creationDate: "2025-07-01",
      code: null,
    },
  ];

  useEffect(() => {
    // Load GSAP from CDN
    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js";
    script.onload = () => {
      const { gsap } = window;

      // Set initial state
      gsap.set(cardsRef.current, {
        y: 60,
        opacity: 0,
        scale: 0.9,
      });

      // Intersection Observer for scroll-triggered animation
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Animate cards with staggered delays
              gsap.to(cardsRef.current, {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 0.6,
                ease: "power2.out",
                stagger: {
                  amount: 0.8,
                  grid: [3, 3],
                  from: "start",
                },
                delay: 0.2,
              });

              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.2,
          rootMargin: "-50px",
        }
      );

      if (gridRef.current) {
        observer.observe(gridRef.current);
      }

      // Add hover animations
      cardsRef.current.forEach((card) => {
        if (card) {
          card.addEventListener("mouseenter", () => {
            gsap.to(card, {
              scale: 1.03,
              y: -8,
              duration: 0.3,
              ease: "power2.out",
            });
          });

          card.addEventListener("mouseleave", () => {
            gsap.to(card, {
              scale: 1,
              y: 0,
              duration: 0.3,
              ease: "power2.out",
            });
          });
        }
      });
    };

    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  };

  return (
    <div className="min-h-screen bg-black  px-6" id="openings">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-24">
          <TextReveal
            style={{ pointerEvents: "none" }}
            animation="fadeup"
            stagger={0.1}
            duration={1}
            className="text-100 font-semibold text-center text-white"
          >
            Current Openings
          </TextReveal>

          <TextReveal
            style={{ pointerEvents: "none" }}
            animation="fadeup"
            stagger={0.1}
            duration={1}
            className="text-30 text-center text-white"
          >
            Join our team and build the future of technology
          </TextReveal>
        </div>

        {/* 3x3 Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {jobListings.map((job, index) => (
            <Link
              href={"/about/careers/2"}
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group cursor-pointer opacity-0"
            >
             <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg p-6 h-full hover:border-white/20 hover:bg-white hover:text-black transition-all duration-300 relative overflow-hidden shadow-2xl group">
                {/* External link icon */}
                <div className="absolute top-4 right-4">
                  <ArrowRightIcon className="w-5 h-5 text-gray-500 group-hover:text-gray-900 transition-colors" />
                </div>

                {/* Job Title */}
                <h3 className="text-xl font-semibold text-white group-hover:text-black mb-4 pr-8 leading-tight">
                  {job.title}
                </h3>

                {/* Job Code (if available) */}
                {job.code && (
                  <div className="mb-3">
                    <span className="text-gray-400 group-hover:text-black text-sm">Code: </span>
                    <span className="text-gray-300 group-hover:text-black text-sm font-medium">
                      {job.code}
                    </span>
                  </div>
                )}

                {/* Location */}
                <div className="mb-3">
                  <span className="text-gray-400 group-hover:text-black text-sm">Location: </span>
                  <span className="text-gray-300 group-hover:text-black text-sm">{job.location}</span>
                </div>

                {/* Creation Date */}
                <div className="mb-4">
                  <span className="text-gray-400 group-hover:text-black text-sm">Creation date: </span>
                  <span className="text-gray-300 group-hover:text-black text-sm">
                    {formatDate(job.creationDate)}
                  </span>
                </div>

                {/* Hover overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/5 group-hover:to-purple-600/5 transition-all duration-300 pointer-events-none"></div>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">
            Don't see a position that fits? We're always looking for talented
            individuals.
          </p>
          <button className="bg-[#ec466f] hover:bg-[#ec466f] text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300">
            Send Us Your Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobListingsGrid;
