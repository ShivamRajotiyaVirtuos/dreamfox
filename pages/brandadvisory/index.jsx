import React from "react";
import Team from "@/components/About/Team";
import BannerSection from "@/components/About/BannerSection";
import BeforeAfterGallery from "@/components/BrandAdvisory/BeforeAfterGallery";
import Banner from "@/components/Homepage/banner";

function Index() {
  return (
    <div>
      <BannerSection />
      <BeforeAfterGallery />
      <BannerSection />
    </div>
  );
}

export default Index;
