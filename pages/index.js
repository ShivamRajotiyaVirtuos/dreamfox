import Banner from "@/components/Homepage/banner";
import Snapshot from "@/components/Homepage/snapshot";
import Vision from "@/components/Homepage/vision";
import WhatWeDo from "@/components/Homepage/what_we_do";


export default function Home() {
  return (
    <div className="bg-[#1a1a1a] min-h-screen">
      {/* <Navbar /> */}
      <Banner />
      <WhatWeDo />
      <Vision />
      <Snapshot/>
    </div>

  );
}
