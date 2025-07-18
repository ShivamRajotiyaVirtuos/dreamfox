import Banner_Brand from "@/components/BrandAdvisory/Banner";
import BeforeAfterGallery from "@/components/BrandAdvisory/BeforeAfterGallery";
import OurWork from "@/components/BrandAdvisory/OurWork";
import BrandAdvisoryProcess from "@/components/BrandAdvisory/process";
import Services from "@/components/BrandAdvisory/services";
import React from "react";

const Brand = () => {
  return (
    <div>
      <Banner_Brand />
      <Services />
      <OurWork />
      <BeforeAfterGallery />

      <BrandAdvisoryProcess />
    </div>
  );
};

export default Brand;
