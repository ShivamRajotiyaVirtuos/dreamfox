import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const JobDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const sectionsRef = useRef([]);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(sectionsRef.current, {
        opacity: 0,
        y: 50
      });

      // Animate sections on scroll
      sectionsRef.current.forEach((section, index) => {
        if (section) {
          ScrollTrigger.create({
            trigger: section,
            start: "top 80%",
            onEnter: () => {
              gsap.to(section, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                delay: index * 0.1,
                ease: "power2.out"
              });
            }
          });
        }
      });

      // Hero section animation
      const heroElements = containerRef.current?.querySelectorAll('.hero-element');
      if (heroElements) {
        gsap.fromTo(heroElements, 
          {
            opacity: 0,
            y: 30
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power2.out"
          }
        );
      }
    });

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="pt-56 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="hero-element mb-6">
            <span className="text-pink-500 text-sm font-medium uppercase tracking-wider">
              Engineering • Full-time • Remote
            </span>
          </div>
          
          <h1 className="hero-element text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Senior Software Engineer
          </h1>
          
          <p className="hero-element text-xl text-gray-300 mb-8 max-w-3xl">
            Join our engineering team to build high-performance systems that power 
            the next generation of digital experiences.
          </p>
          
          <div className="hero-element flex flex-wrap gap-4">
            <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:scale-105 transition-transform">
              Apply Now
            </button>
            <button className="border border-gray-600 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
              Share Job
            </button>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto pb-20">
        {/* Job Description */}
        <section
          ref={(el) => (sectionsRef.current[0] = el)}
          className="mb-12 opacity-0"
        >
          <h2 className="text-2xl font-semibold text-white mb-6">About the Role</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              We're looking for a Senior Software Engineer to join our growing engineering team. 
              You'll be responsible for designing and implementing scalable backend systems, 
              working closely with product and design teams to deliver exceptional user experiences.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              This role is perfect for someone who thrives in a fast-paced environment, 
              loves solving complex technical challenges, and wants to make a significant 
              impact on our product and engineering culture.
            </p>
          </div>
        </section>

        {/* Responsibilities */}
        <section
          ref={(el) => (sectionsRef.current[1] = el)}
          className="mb-12 opacity-0"
        >
          <h2 className="text-2xl font-semibold text-white mb-6">What You'll Do</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-pink-500 mr-3 mt-2">•</span>
              <span className="text-lg text-gray-300">
                Design and build scalable backend systems and APIs
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-3 mt-2">•</span>
              <span className="text-lg text-gray-300">
                Collaborate with cross-functional teams to deliver features
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-3 mt-2">•</span>
              <span className="text-lg text-gray-300">
                Mentor junior engineers and contribute to technical discussions
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-3 mt-2">•</span>
              <span className="text-lg text-gray-300">
                Optimize application performance and ensure system reliability
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-3 mt-2">•</span>
              <span className="text-lg text-gray-300">
                Write clean, maintainable code and comprehensive tests
              </span>
            </li>
          </ul>
        </section>

        {/* Requirements */}
        <section
          ref={(el) => (sectionsRef.current[2] = el)}
          className="mb-12 opacity-0"
        >
          <h2 className="text-2xl font-semibold text-white mb-6">What We're Looking For</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-pink-500 mr-3 mt-2">•</span>
              <span className="text-lg text-gray-300">
                5+ years of experience in software development
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-3 mt-2">•</span>
              <span className="text-lg text-gray-300">
                Strong proficiency in modern programming languages (Python, Go, Node.js)
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-3 mt-2">•</span>
              <span className="text-lg text-gray-300">
                Experience with cloud platforms (AWS, GCP, Azure)
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-3 mt-2">•</span>
              <span className="text-lg text-gray-300">
                Knowledge of database systems and data modeling
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-3 mt-2">•</span>
              <span className="text-lg text-gray-300">
                Understanding of microservices architecture and containerization
              </span>
            </li>
          </ul>
        </section>

        {/* Nice to Have */}
        <section
          ref={(el) => (sectionsRef.current[3] = el)}
          className="mb-12 opacity-0"
        >
          <h2 className="text-2xl font-semibold text-white mb-6">Nice to Have</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-pink-500 mr-3 mt-2">•</span>
              <span className="text-lg text-gray-300">
                Experience with real-time systems and high-frequency trading
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-3 mt-2">•</span>
              <span className="text-lg text-gray-300">
                Love measuring and reducing latency - and care about every
                nanosecond
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-3 mt-2">•</span>
              <span className="text-lg text-gray-300">
                Have worked on performance-sensitive systems in trading, gaming,
                networking, or OS-level dev
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-3 mt-2">•</span>
              <span className="text-lg text-gray-300">
                Are comfortable working in C, C++, or Rust
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-3 mt-2">•</span>
              <span className="text-lg text-gray-300">
                Have experience optimizing for CPU/memory/cache or real-time
                constraints
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-pink-500 mr-3 mt-2">•</span>
              <span className="text-lg text-gray-300">
                Understand networking protocols (TCP/UDP) and kernel internals
              </span>
            </li>
          </ul>
        </section>

        {/* Additional Information */}
        <section
          ref={(el) => (sectionsRef.current[4] = el)}
          className="mb-12 opacity-0"
        >
          <div className="bg-gray-900 border border-gray-800 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-white mb-4">
              About This Role
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-gray-300">
              <div>
                <h4 className="font-medium text-white mb-2">Location</h4>
                <p>New York, NY / London, UK / Remote</p>
              </div>
              <div>
                <h4 className="font-medium text-white mb-2">Employment Type</h4>
                <p>Full-time</p>
              </div>
              <div>
                <h4 className="font-medium text-white mb-2">
                  Experience Level
                </h4>
                <p>Mid to Senior Level</p>
              </div>
              <div>
                <h4 className="font-medium text-white mb-2">Department</h4>
                <p>Engineering</p>
              </div>
            </div>
          </div>
        </section>

        {/* Apply Section */}
        {/* <section
          ref={(el) => (sectionsRef.current[5] = el)}
          className="opacity-0"
        >
          <div className="bg-gradient-to-r from-pink-500/10 to-purple-600/10 border border-pink-500/20 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Ready to Join Us?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              We'd love to hear from you. Send us your resume and let's start a conversation 
              about how you can contribute to our mission.
            </p>
            <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:scale-105 transition-transform">
              Apply for This Position
            </button>
          </div>
        </section> */}
      </div>
    </div>
  );
};

export default JobDetail;