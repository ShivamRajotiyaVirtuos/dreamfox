import Banner_Brand from "@/components/BrandAdvisory/Banner";
import BeforeAfterGallery from "@/components/BrandAdvisory/BeforeAfterGallery";
import OurWork from "@/components/BrandAdvisory/OurWork";
import BrandAdvisoryProcess from "@/components/BrandAdvisory/Testimonials_BA";
import ProcessTimeline from "@/components/BrandAdvisory/ProcessTimeline";
import Services from "@/components/BrandAdvisory/services";

import React from "react";
import Testimonials_brand from "@/components/BrandAdvisory/Testimonials_BA";

const Brand = () => {
  return (
    <div>
      <Banner_Brand />
      {/* <BeforeAfterGallery /> */}

      {/* <TestimonialsSection_BA/> */}
      <ProcessTimeline />
      <Services />
      <OurWork />
      <BeforeAfterGallery />
      <Testimonials_brand />
    </div>
  );
};

export default Brand;
