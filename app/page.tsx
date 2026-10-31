import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProvenNumbersSection from "@/components/ProvenNumbersSection";
import SkillSection from "@/components/SkillSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />

      {/* About */}
      <div id="about" className="scroll-mt-20">
        <ProvenNumbersSection />
        {/* <ExperienceSection />  -> Years of Building, Learning, and Shipping */}
      </div>

      {/* Skill */}
      <div id="skill" className="scroll-mt-20">
        <SkillSection />
        {/* <WhyChooseSection />  -> Choose Wisely, Get Quality Results */}
      </div>
    </main>
  );
}
