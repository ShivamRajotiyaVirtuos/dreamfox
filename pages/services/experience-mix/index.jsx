import Banner_Experiencemix from "@/components/ExperienceMix/Banner";
import HorizontalScrollGallery from "@/components/ExperienceMix/Grid";
// import Grid from "@/components/ExperienceMix/Grid";
import ServicesGrid from "@/components/ExperienceMix/ServicesGrid";
import Techstack from "@/components/ExperienceMix/Techstack";
import UXSnapshot from "@/components/ExperienceMix/UXsnapshot";

const Index = ({}) => {
  return (
    <div>
      <Banner_Experiencemix />
      <UXSnapshot />
      <HorizontalScrollGallery />
      {/* <ServicesGrid /> */}
      <Techstack/>
    </div>
  );
};

export default Index;
