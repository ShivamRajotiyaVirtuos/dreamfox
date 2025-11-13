import ContactUs from "@/components/Contactus/ContactUs";
import Banner_Mediamix from "@/components/DigitalMediaMix/Banner";
import BehindTheScenes from "@/components/DigitalMediaMix/BehindtheScenes";
import Cta from "@/components/DigitalMediaMix/Cta";
import MediaReelGallery from "@/components/DigitalMediaMix/MediaReelGallery";
import Offerings from "@/components/DigitalMediaMix/Offerings";
import Productionprocess from "@/components/DigitalMediaMix/ProductionProcess";

const Index = ({}) => {
  return (
    <div>
      <Banner_Mediamix />
      <Productionprocess />
      <Offerings />
      {/* <MediaReelGallery /> */}
      {/* <BehindTheScenes /> */}


      {/* <ContactUs /> */}
      <Cta/>
    </div>
  );
};

export default Index;
