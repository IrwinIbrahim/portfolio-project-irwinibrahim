import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

/*
  Contact + Footer berbagi satu latar dengan cahaya ungu yang menyambung,
  jadi tidak ada sambungan yang terlihat di garis footer.
  - Mobile  : cahaya melebar dari tengah bawah
  - Desktop : cahaya besar dari sudut kanan bawah
*/
export default function ContactFooter() {
  return (
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
  );
}
