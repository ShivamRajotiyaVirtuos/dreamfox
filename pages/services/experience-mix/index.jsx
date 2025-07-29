import Banner_Experiencemix from "@/components/ExperienceMix/Banner";
import DxStrategy from "@/components/ExperienceMix/DxStrategy";
import HorizontalScrollGallery from "@/components/ExperienceMix/Grid";
// import Grid from "@/components/ExperienceMix/Grid";
import ServicesGrid from "@/components/ExperienceMix/ServicesGrid";
import Techstack from "@/components/ExperienceMix/Techstack";
import UXSnapshot from "@/components/ExperienceMix/UXsnapshot";

const Index = ({}) => {
  return (
    <div>
      <Banner_Experiencemix />
      <HorizontalScrollGallery />
      <UXSnapshot />

      <DxStrategy />
      {/* <ServicesGrid /> */}
      <Techstack />
    </div>
  );
};

export default Index;
