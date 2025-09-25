import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import SidebarForm from "@/components/Sidebar/sideform";
import ShareModal from "@/components/SocialShare/Sharemodal";
import jobsData from "../../../jobs.json";
// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const JobDetail = ({ jobs = [] }) => {
  const router = useRouter();
  const { id } = router.query;
  const sectionsRef = useRef([]);
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  const [currentJob, setCurrentJob] = useState(null);

  useEffect(() => {
    if (id) {
      // Find job by ID (convert string to number)
      const job = jobsData.find((job) => job.code === id);
      setCurrentJob(job);
      console.log("Found job:", job);
    }
  }, [id]);
  useEffect(() => {
    window.scrollTo(0, 0);
    // Use setTimeout to ensure DOM is ready and force scroll again
    const scrollTimer = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    }, 100);

    const ctx = gsap.context(() => {
      // Set initial states with a small delay to ensure elements exist
      const sectionsToAnimate = sectionsRef.current.filter(Boolean);

      if (sectionsToAnimate.length > 0) {
        gsap.set(sectionsToAnimate, {
          opacity: 0,
          y: 50,
        });

        // Animate sections on scroll with fallback
        sectionsToAnimate.forEach((section, index) => {
          if (section) {
            ScrollTrigger.create({
              trigger: section,
              start: "top 85%", // More generous trigger point
              end: "bottom 15%",
              onEnter: () => {
                gsap.to(section, {
                  opacity: 1,
                  y: 0,
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: "power2.out",
                });
              },
              // Add refresh and immediate trigger for elements already in view
              onRefresh: (self) => {
                if (self.progress > 0) {
                  gsap.set(section, {
                    opacity: 1,
                    y: 0,
                  });
                }
              },
            });
          }
        });

        // Fallback: Show sections after a delay if ScrollTrigger fails
        setTimeout(() => {
          sectionsToAnimate.forEach((section) => {
            if (section && gsap.getProperty(section, "opacity") === 0) {
              gsap.to(section, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "power2.out",
              });
            }
          });
        }, 1000);
      }

      // Hero section animation
      const heroElements =
        containerRef.current?.querySelectorAll(".hero-element");
      if (heroElements && heroElements.length > 0) {
        gsap.fromTo(
          heroElements,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power2.out",
          }
        );
      }

      // Refresh ScrollTrigger after setup
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
    });

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      clearTimeout(scrollTimer);
    };
  }, [id, currentJob]); // Added currentJob dependency

  // If no job found, show error state
  if (!currentJob) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Job Not Found</h1>
          <p className="text-gray-400">
            The job you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-black text-white">
      <SidebarForm jobId={id} open={open} setOpen={setOpen} />

      <section className="pt-32 sm:pt-56 pb-16 px-4 relative z-30">
        <div className="max-w-4xl mx-auto">
          <div className="hero-element mb-6">
            <span className="text-pink-500 text-sm font-medium uppercase tracking-wider">
              {currentJob.department} • {currentJob.type} •{" "}
              {currentJob.location.includes("Remote") ? "Remote" : "On-site"}
            </span>
          </div>

          <h1 className="hero-element text-60 font-semibold text-white mb-6 leading-tight">
            {currentJob.title}
          </h1>

          <p className="hero-element text-20 text-gray-300 mb-8 max-w-3xl">
            {currentJob.description}
          </p>

          <div className="hero-element relative flex flex-wrap gap-4">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setOpen(true);
              }}
              className="bg-gradient-to-r from-pink-500 to-[#ea4079] cursor-pointer text-white px-8 py-3 rounded-full font-medium hover:scale-105 transition-transform"
            >
              Apply Now
            </button>

            <ShareModal
              url={typeof window !== "undefined" ? window.location.href : ""}
              title={`${currentJob.title} - Join Our Team`}
              description={`${currentJob.description} Located in ${currentJob.location}. Salary: ${currentJob.salary}`}
            />
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 lg:px-0 pb-20 relative">
        {/* Job Description */}
        <section
          // ref={(el) => (sectionsRef.current[0] = el)}
          className="mb-12  hero-element"
        >
          <h2 className="text-24 font-semibold text-white mb-6">
            About the Role
          </h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-20 text-gray-300 leading-relaxed">
              {currentJob.description}
            </p>
          </div>
        </section>

        {/* Responsibilities */}
        <section
          // ref={(el) => (sectionsRef.current[1] = el)}
          className="mb-12  hero-element"
        >
          <h2 className="text-24 font-semibold text-white mb-6">
            What You'll Do
          </h2>
          <ul className="space-y-4">
            {currentJob.responsibilities.map((responsibility, index) => (
              <li key={index} className="flex items-start">
                <span className="text-pink-500 mr-3 mt-1">•</span>
                <span className="text-20 text-gray-300">{responsibility}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Requirements */}
        <section
          ref={(el) => (sectionsRef.current[2] = el)}
          className="mb-12 opacity-0"
        >
          <h2 className="text-24 font-semibold text-white mb-6">
            What We're Looking For
          </h2>
          <ul className="space-y-4">
            {currentJob.requirements.map((requirement, index) => (
              <li key={index} className="flex items-start">
                <span className="text-pink-500 mr-3 mt-1">•</span>
                <span className="text-20 text-gray-300">{requirement}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Nice to Have - Only show if exists */}
        {currentJob.niceToHave && currentJob.niceToHave.length > 0 && (
          <section
            ref={(el) => (sectionsRef.current[3] = el)}
            className="mb-12 opacity-0"
          >
            <h2 className="text-24 font-semibold text-white mb-6">
              Nice to Have
            </h2>
            <ul className="space-y-4">
              {currentJob.niceToHave.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-pink-500 mr-3 mt-1">•</span>
                  <span className="text-20 text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Additional Information */}
        <section
          ref={(el) => (sectionsRef.current[4] = el)}
          className="mb-12 opacity-0"
        >
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-8">
            <h3 className="text-24 font-semibold text-white mb-4">
              About This Role
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-gray-300">
              <div>
                <h4 className="font-medium text-white mb-2">Location</h4>
                <p>{currentJob.location}</p>
              </div>
              <div>
                <h4 className="font-medium text-white mb-2">Employment Type</h4>
                <p>{currentJob.type}</p>
              </div>
              <div>
                <h4 className="font-medium text-white mb-2">
                  Experience Level
                </h4>
                <p>{currentJob.experience}</p>
              </div>
              <div>
                <h4 className="font-medium text-white mb-2">Department</h4>
                <p>{currentJob.department}</p>
              </div>
              <div>
                <h4 className="font-medium text-white mb-2">Salary Range</h4>
                <p>{currentJob.salary}</p>
              </div>
              <div>
                <h4 className="font-medium text-white mb-2">Job Code</h4>
                <p>{currentJob.code}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section - Only show if exists */}
        {currentJob.benefits && currentJob.benefits.length > 0 && (
          <section
            ref={(el) => (sectionsRef.current[5] = el)}
            className="mb-12 opacity-0"
          >
            <h2 className="text-24 font-semibold text-white mb-6">
              What We Offer
            </h2>
            <ul className="space-y-4">
              {currentJob.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-pink-500 mr-3 mt-1">•</span>
                  <span className="text-20 text-gray-300">{benefit}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Call to Action */}
        <section
          ref={(el) => (sectionsRef.current[6] = el)}
          className="opacity-0"
        >
          <div className="bg-gradient-to-r from-pink-500/50 to-purple-600/10 border border-pink-500/20 rounded-lg p-8 text-center">
            <h3 className="text-24 font-semibold text-white mb-4">
              Ready to Join Us?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              We'd love to hear from you. Send us your resume and let's start a
              conversation about how you can contribute to our mission.
            </p>
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setOpen(true);
              }}
              className="bg-gradient-to-r from-pink-500 to-[#ea4079] text-white px-8 py-3 rounded-full font-medium hover:scale-105 transition-transform cursor-pointer"
            >
              Apply Now
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default JobDetail;
