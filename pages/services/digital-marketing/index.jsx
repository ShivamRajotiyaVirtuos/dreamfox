import BannerSection from "@/components/DigitalMarketing/BannerSection";
import Funnel from "@/components/DigitalMarketing/Funnel";
import MetricSection from "@/components/DigitalMarketing/MetricSection";
import New_funnel from "@/components/DigitalMarketing/New_funnel";
import NewMetrics from "@/components/DigitalMarketing/NewMetrics";
import PersonaGrid from "@/components/DigitalMarketing/PersonaGrid";
import ServicesSectionDigitalM from "@/components/DigitalMarketing/ServicesSectionDigitalM";
import React from "react";

function Index() {
  return (
    <div>
      <BannerSection />
      {/* <NewMetrics /> */}
      <ServicesSectionDigitalM />
      <PersonaGrid />
      <NewMetrics />
      <New_funnel />

      {/* <MetricSection/ */}
      {/* <Funnel/> */}

      {/* <BannerSection/> */}
    </div>
  );
}

export default Index;
