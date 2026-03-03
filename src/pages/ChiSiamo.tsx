import HeroChiSiamo from "@/components/chisiamo/HeroChiSiamo";
import StorySection from "@/components/chisiamo/StorySection";
import PillarsCarousel from "@/components/chisiamo/PillarsCarousel";
import VisionSection from "@/components/chisiamo/VisionSection";
import InstagramSection from "@/components/chisiamo/InstagramSection";
import CtaSection from "@/components/chisiamo/CtaSection";

const ChiSiamo = () => (
  <div className="bg-[#050505] text-white selection:bg-gold selection:text-black pt-20 overflow-x-hidden">
    <HeroChiSiamo />
    <StorySection />
    <PillarsCarousel />
    <VisionSection />
    <InstagramSection />
    <CtaSection />
  </div>
);

export default ChiSiamo;
