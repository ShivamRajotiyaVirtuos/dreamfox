import ContactUs from "@/components/Contactus/ContactUs";
import Banner_Mediamix from "@/components/DigitalMediaMix/Banner";
import BehindTheScenes from "@/components/DigitalMediaMix/BehindtheScenes";
import MediaReelGallery from "@/components/DigitalMediaMix/MediaReelGallery";
import Offerings from "@/components/DigitalMediaMix/Offerings";
import Productionprocess from "@/components/DigitalMediaMix/ProductionProcess";

const Index = ({}) => {
  return (
    <div>
      <BehindTheScenes />
      <Productionprocess />
      <Offerings />
      <MediaReelGallery />
      <ContactUs />
    </div>
  );
};

export default Index;
