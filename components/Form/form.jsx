import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import AWS from "aws-sdk";
import { useMutation } from "@apollo/client";
import jobsData from "../../jobs.json";
import { CreateJobDreamfox } from "@/graphql/careerMutation";
// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

AWS.config.update({
  accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY,
  region: "ap-south-1",
});

async function FileUpload(file) {
  const s3 = new AWS.S3();
  const timestamp = Date.now();
  const uniqueFileName = `${timestamp}_${file.name}`;
  const s3BucketName = "myvirtuosprod";
  const folder = "dreamfox-job-applications";
  const fileName = `${folder}/${uniqueFileName}`;
  const params = {
    Bucket: s3BucketName,
    Key: fileName,
    Body: file,
  };
  const dets = await s3.upload(params).promise();
  return dets.Location;
}

const JobDetail = ({ onClose, jobId }) => {
  const router = useRouter();
  const { id } = router.query;
  const sectionsRef = useRef([]);
  const containerRef = useRef(null);
  const [currentJob, setCurrentJob] = useState(null);

  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   phone: "",
  //   resume: null,
  //   jobTitle: "",
  // });
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    attached_file: null,
    yearsOfExperience: "",
    jobApplied: "",
    phoneNumber: "",
    message: "",
    source: "Dreamfox",
  });

  console.log("=-=-=-=-=-=", formData);
  const [isLoading, setIsLoading] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [createCareerFormVDC] = useMutation(CreateJobDreamfox);
  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      let fileUrl = "";
      if (formData.attached_file) {
        fileUrl = await FileUpload(formData.attached_file);
      }
      await createCareerFormVDC({
        variables: {
          fullName: formData.fullName,
          email: formData.email,
          phoneNumber: formData.phoneNumber || null,
          attached_file: fileUrl,
          message: formData.message || null,
          yearsOfExperience: formData.yearsOfExperience || null,
          jobApplied: formData.jobApplied || null,
          source: formData.source,
        },
      });
      setShowThankYou(true);
      setTimeout(() => {
        setShowThankYou(false);
        onClose();
      }, 2000);
      setFormData({
        fullName: "",
        email: "",
        phoneNumber: "",
        attached_file: null,
        message: "",
        yearsOfExperience: "",
        jobApplied: "",
        source: "INDIC",
      });
    } catch (err) {
      alert("Submission failed. " + (err?.message || ""));
      //   alert("Submission failed. " );
      console.error(err);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (jobId) {
      const job = jobsData.find((job) => job.code === jobId);
      setCurrentJob(job);
      console.log("Found job:", job);
    }
  }, [jobId]);
  console.log(jobId);
  const handleCancel = () => {
    if (onClose) {
      onClose();
    }
  };
  console.log(currentJob);
  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-black text-white relative"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Position
          </label>
          <input
            type="text"
            name="jobApplied"
            value={formData.jobApplied || currentJob?.title}
            onChange={handleInputChange}
            required
            disabled={currentJob?.code}
            className="w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-4 py-3 text-white placeholder-gray-400 focus:border-white/30 focus:bg-white/10 transition-all outline-none"
            placeholder="Enter the job title you are applying for..."
          />
        </div>

        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            name="fullName"
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
            name="phoneNumber"
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
            disabled={isLoading}
            type="submit"
            className="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-full font-medium hover:scale-105 transition-transform shadow-lg"
          >
            {isLoading ? "Submitting..." : "Submit Application"}
          </button>
        </div>
      </form>
      {showThankYou && (
        <div className="text-center text-green-400 mt-4 text-xl">
          Thank you for your application!
        </div>
      )}
    </div>
  );
};

export default JobDetail;
