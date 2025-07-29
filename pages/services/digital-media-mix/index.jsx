import ContactUs from "@/components/Contactus/ContactUs";
import Banner_Mediamix from "@/components/DigitalMediaMix/Banner";
import MediaReelGallery from "@/components/DigitalMediaMix/MediaReelGallery";
import Offerings from "@/components/DigitalMediaMix/Offerings";
import Productionprocess from "@/components/DigitalMediaMix/ProductionProcess";

const Index = ({}) => {
  return (
    <div>
      <Banner_Mediamix />
      <Productionprocess />

      <Offerings />
      <MediaReelGallery />
      <ContactUs />
    </div>
  );
};

export default Index;
