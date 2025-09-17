import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const JobDetail = ({ onClose }) => {
  const router = useRouter();
  const { id } = router.query;
  const sectionsRef = useRef([]);
  const containerRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: null,
    jobTitle: "Senior Software Engineer", // This will be dynamic based on the job
  });

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmitApplication = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Application submitted:", formData);
    setShowApplicationForm(false);
    // You can add success message or redirect logic here
  };

  const handleCancel = () => {
    // Call the onClose function passed from parent
    if (onClose) {
      onClose();
    }
  };
  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-black text-white relative"
    >
      {/* Application Form Modal */}

      <form onSubmit={handleSubmitApplication} className="space-y-6">
        {/* Job Title (Auto-filled) */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Position
          </label>
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-full p-4 text-white">
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
            className="w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-4 py-3 text-white placeholder-gray-400 focus:border-white/30 focus:bg-white/10 transition-all outline-none"
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
            className="w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-4 py-3 text-white placeholder-gray-400 focus:border-white/30 focus:bg-white/10 transition-all outline-none"
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
            className="w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-4 py-3 text-white placeholder-gray-400 focus:border-white/30 focus:bg-white/10 transition-all outline-none"
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
              className="w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-4 py-3 text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-medium file:bg-white/10 file:text-white hover:file:bg-white/20 transition-all outline-none focus:border-white/30 focus:bg-white/10"
            />
          </div>
          <p className="text-xs text-gray-400 mt-1">
            PDF, DOC, or DOCX (Max 5MB)
          </p>
        </div>

        {/* Submit Button */}
        <div className="flex flex-col-reverse sm:flex-row gap-3 pt-4">
          <button
            type="button"
            onClick={handleCancel}
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
  );
};

export default JobDetail;
