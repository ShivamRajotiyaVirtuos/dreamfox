import React from "react";
import Team from "@/components/About/Team";
import BannerSection from "@/components/About/BannerSection";
import BeforeAfterGallery from "@/components/BrandAdvisory/BeforeAfterGallery";
import Banner from "@/components/Homepage/banner";
import OurWork from "@/components/BrandAdvisory/OurWork";

function Index() {
  return (
    <div>
      <BannerSection />
      <BeforeAfterGallery />
      <OurWork />
    </div>
  );
}

export default Index;
