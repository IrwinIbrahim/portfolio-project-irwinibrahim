import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProvenNumbersSection from "@/components/ProvenNumbersSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillSection from "@/components/SkillSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ProjectsSection from "@/components/ProjectsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

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

      {/* Get in Touch + Footer: satu latar dengan cahaya ungu yang menyambung */}
      <div className="relative isolate overflow-hidden bg-black">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 md:hidden"
          style={{
            background:
              "radial-gradient(ellipse 140% 380px at 50% 100%, rgba(105,40,175,0.5) 0%, rgba(105,40,175,0.3) 40%, transparent 100%)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 hidden md:block"
          style={{
            background:
              "radial-gradient(ellipse 110% 110% at 100% 100%, rgba(105,35,165,0.5) 0%, rgba(105,35,165,0.28) 40%, transparent 100%)",
          }}
        />

        <div id="contact" className="scroll-mt-20">
          <ContactSection />
        </div>
        <Footer />
      </div>
    </main>
  );
}
