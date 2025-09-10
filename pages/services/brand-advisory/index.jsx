import Banner_Brand from "@/components/BrandAdvisory/Banner";
// import Cta from "@/components/Services/Cta";
// import FourPillarsSection from "@/components/Services/grid";
// import Offerings from "@/components/Services/offering";
// import Values_services from "@/components/Services/values";
// import BeforeAfterGallery from "@/components/BrandAdvisory/BeforeAfterGallery";
// import OurWork from "@/components/BrandAdvisory/OurWork";
// import BrandAdvisoryProcess from "@/components/BrandAdvisory/Testimonials_BA";
// import ProcessTimeline from "@/components/BrandAdvisory/ProcessTimeline";
// import Services from "@/components/BrandAdvisory/services";

import React from "react";
// import Testimonials_brand from "@/components/BrandAdvisory/Testimonials_BA";

import Cta from "@/components/Services/Cta";
import FourPillarsSection from "@/components/Services/grid";
import Offerings from "@/components/Services/offering";
import Snapshot_Services from "@/components/Services/snapshot";
import Values_services from "@/components/Services/values";

const Brand = () => {
  return (
    <div>
      <Banner_Brand />
      <FourPillarsSection />

      <Offerings />
      <Snapshot_Services />

      <Values_services />
      <Cta />
    </div>
  );
};

export default Brand;
