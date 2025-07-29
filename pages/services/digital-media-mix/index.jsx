import ContactUs from "@/components/Contactus/ContactUs";
import MediaReelGallery from "@/components/DigitalMediaMix/MediaReelGallery";
import Offerings from "@/components/DigitalMediaMix/Offerings";
import ProductionProcess from "@/components/DigitalMediaMix/ProductionProcess";

const Index = ({}) => {
  return (
    <div>
      <Offerings />
      <MediaReelGallery />
      <ContactUs />
      <ProductionProcess />
    </div>
  );
};

export default Index;
