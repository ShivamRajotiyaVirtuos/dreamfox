import Navbar2 from "@/components/About/Navbar2";
import Banner from "@/components/Homepage/banner";
import Vision from "@/components/Homepage/vision";
import WhatWeDo from "@/components/Homepage/what_we_do";
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#1a1a1a] min-h-screen">
      <Navbar />
      <Banner />
      <WhatWeDo />
      <Vision />
    </div>

  );
}
