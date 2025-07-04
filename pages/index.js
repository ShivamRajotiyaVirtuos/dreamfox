import Banner from "@/components/Homepage/banner";
import OurVision from "@/components/Homepage/ourvision";
import Snapshot from "@/components/Homepage/snapshot";
import WhatWeDo from "@/components/Homepage/what_we_do";
import WhyDreamfox from "@/components/Homepage/WhyDreamfox";

export default function Home() {
  return (
    <div className="bg-[#1a1a1a] min-h-screen">
      <Banner />
      {/* <WhatWeDo /> */}
      <OurVision />
      <WhyDreamfox />
      <Snapshot />
    </div>
  );
}
