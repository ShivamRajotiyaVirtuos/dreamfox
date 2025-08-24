import Banner_Services from "@/components/Services/Banner";
import Cta from "@/components/Services/Cta";
import FourPillarsSection from "@/components/Services/grid";
import Offerings from "@/components/Services/offering";
import Snapshot_Services from "@/components/Services/snapshot";
import Values_services from "@/components/Services/values";
import React from "react";

const Services = () => {
  return (
    <div>
      <Banner_Services />

      <Snapshot_Services />
      {/* <FourPillarsSection /> */}
      <Offerings />
      <Values_services />
      <Cta />
    </div>
  );
};

export default Services;
