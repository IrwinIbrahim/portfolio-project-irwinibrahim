import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProvenNumbersSection from "@/components/ProvenNumbersSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillSection from "@/components/SkillSection";
import WhyChooseSection from "@/components/WhyChooseSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />

      {/* About */}
      <div id="about" className="scroll-mt-20">
        <ProvenNumbersSection />
        <ExperienceSection />
      </div>

      {/* Skill */}
      <div id="skill" className="scroll-mt-20">
        <SkillSection />
        <WhyChooseSection />
      </div>
    </main>
  );
}
