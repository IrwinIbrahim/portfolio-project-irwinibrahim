import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProvenNumbersSection from "@/components/ProvenNumbersSection";
import SkillSection from "@/components/SkillSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import ContactFooter from "@/components/ContactFooter";
import MotionProvider from "@/components/MotionProvider";

/* id di bawah dipakai oleh menu navbar (#about, #skill, #projects, #faq, #contact) */
export default function Home() {
  return (
    <MotionProvider>
      <main>
        <Navbar />
        <HeroSection />

        <div id="about" className="scroll-mt-20">
          <ProvenNumbersSection />
          <ExperienceSection />
        </div>

        <div id="skill" className="scroll-mt-20">
          <SkillSection />
          <WhyChooseSection />
        </div>

        <div id="projects" className="scroll-mt-20">
          <ProjectsSection />
          <TestimonialsSection />
        </div>

        <div id="faq" className="scroll-mt-20">
          <FaqSection />
        </div>

        <ContactFooter />
      </main>
    </MotionProvider>
  );
}
