import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const JobDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const sectionsRef = useRef([]);
  const containerRef = useRef(null);
  const [showCopyMessage, setShowCopyMessage] = useState(false);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null,
    jobTitle: 'Senior Software Engineer' // This will be dynamic based on the job
  });

  const handleShareJob = async () => {
    try {
      const currentUrl = window.location.href;
      await navigator.clipboard.writeText(currentUrl);
      setShowCopyMessage(true);
      setTimeout(() => setShowCopyMessage(false), 3000);
    } catch (err) {
      const textArea = document.createElement('textarea');
      textArea.value = window.location.href;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setShowCopyMessage(true);
      setTimeout(() => setShowCopyMessage(false), 3000);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmitApplication = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Application submitted:', formData);
    setShowApplicationForm(false);
    // You can add success message or redirect logic here
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const ctx = gsap.context(() => {
      gsap.set(sectionsRef.current, {
        opacity: 0,
        y: 50
      });

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
  }, [id]);

  return (
    <div ref={containerRef} className="min-h-screen bg-black text-white relative">
      {/* Copy Success Message */}
      {showCopyMessage && (
        <div className="fixed top-8 right-8 z-50 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-3 animate-bounce">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="font-medium">Job URL copied to clipboard!</span>
        </div>
      )}

      {/* Application Form Modal */}
      {showApplicationForm && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-black/40 backdrop-blur-xl border border-white/20 rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Apply for Position</h2>
                <p className="text-gray-400 text-sm">Join our amazing team</p>
              </div>
              <button
                onClick={() => setShowApplicationForm(false)}
                className="text-gray-400 hover:text-white transition-colors p-2"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleSubmitApplication} className="space-y-6">
              
              {/* Job Title (Auto-filled) */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Position
                </label>
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-4 text-white">
                  {formData.jobTitle}
                </div>
              </div>

              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-white/30 focus:bg-white/10 transition-all outline-none"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-white/30 focus:bg-white/10 transition-all outline-none"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-white/30 focus:bg-white/10 transition-all outline-none"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              {/* Resume Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Resume *
                </label>
                <div className="relative">
                  <input
                    type="file"
                    name="resume"
                    onChange={handleInputChange}
                    accept=".pdf,.doc,.docx"
                    required
                    className="w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-lg px-4 py-3 text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-medium file:bg-white/10 file:text-white hover:file:bg-white/20 transition-all outline-none focus:border-white/30 focus:bg-white/10"
                  />
                </div>
                <p className="text-xs text-gray-400 mt-1">PDF, DOC, or DOCX (Max 5MB)</p>
              </div>

              {/* Submit Button */}
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowApplicationForm(false)}
                  className="flex-1 bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-full font-medium hover:bg-white/20 transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full font-medium hover:scale-105 transition-transform shadow-lg"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

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
            Join our engineering team to build high-performance systems that
            power the next generation of digital experiences.
          </p>

          <div className="hero-element flex flex-wrap gap-4">
            <button 
              onClick={() => setShowApplicationForm(true)}
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-full font-medium hover:scale-105 transition-transform"
            >
              Apply Now
            </button>
            <button
              onClick={handleShareJob}
              className="border cursor-pointer border-gray-600 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors"
            >
              Share Job
            </button>
          </div>
        </div>
      </section>

      {/* Rest of your job detail content... */}
    </div>
  );
};

export default JobDetail;