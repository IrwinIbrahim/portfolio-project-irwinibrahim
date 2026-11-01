import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProvenNumbersSection from "@/components/ProvenNumbersSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillSection from "@/components/SkillSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ProjectsSection from "@/components/ProjectsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";

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

      {/* Projects */}
      <div id="projects" className="scroll-mt-20">
        <ProjectsSection />
        <TestimonialsSection />
      </div>

      {/* FAQ */}
      <div id="faq" className="scroll-mt-20">
        <FaqSection />
      </div>

      {/* Get in Touch */}
      {/* <div id="contact" className="scroll-mt-20"><ContactSection /></div> */}
    </main>
  );
}
