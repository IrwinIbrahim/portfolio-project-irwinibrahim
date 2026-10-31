"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const EXPERIENCES = [
  { period: "2025 - Present", company: "Airbnb", logo: "/icons/airbnb.svg" },
  {
    period: "2025 - Present",
    company: "Coinbase",
    logo: "/icons/coinbase.svg",
  },
  { period: "2025 - Present", company: "Webflow", logo: "/icons/webflow.svg" },
];

const RESPONSIBILITIES = [
  "Develop responsive and user-friendly web interfaces using modern frontend technologies.",
  "Collaborate with UI/UX designers to turn design mockups into functional components.",
  "Optimize web applications for maximum speed and scalability.",
  "Ensure cross-browser and cross-platform compatibility.",
  "Implement reusable code and component libraries for future use.",
];

/* Ukuran titik & jarak titik ke kartu (otomatis mengecil/membesar) */
const DOT = "clamp(24px, 2.22vw, 32px)";
const GAP_TO_CARD = "clamp(12px, 1.74vw, 25px)";
const CARD_GAP = 20; // jarak antar kartu (px)

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      staggerChildren: 0.07,
      delayChildren: 0.25,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -12 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

/* Titik + garis diatur oleh <li> induknya */
const rowVariants: Variants = { hidden: {}, show: {} };

const dotVariants: Variants = {
  hidden: { scale: 0 },
  show: {
    scale: 1,
    transition: { type: "spring", stiffness: 260, damping: 16 },
  },
};

const lineVariants: Variants = {
  hidden: { scaleY: 0 },
  show: {
    scaleY: 1,
    transition: { duration: 0.9, ease: "easeInOut", delay: 0.3 },
  },
};

const reveal = {
  initial: "hidden",
  whileInView: "show",
  viewport: { once: true, amount: 0.2 },
} as const;

const LINE_COLOR = "rgba(255,255,255,0.18)";

/*
  Layout dua kolom di dalam kartu aktif mulai breakpoint md (768px).
  Ukuran desktop memakai clamp(min, vw, max) berdasarkan desain Figma 1440px.
*/
export default function ExperienceSection() {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-360 px-4 pb-10 pt-12 md:px-8 lg:px-[clamp(40px,8.33vw,120px)] lg:pb-24 lg:pt-18">
        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          custom={0}
          {...reveal}
          className="text-center text-[26px] font-bold leading-[1.4] lg:text-[clamp(32px,2.78vw,40px)] lg:leading-[1.2]"
        >
          Years of Building, Learning,
          <br className="md:hidden" /> and Shipping
        </motion.h2>
        <motion.p
          variants={fadeUp}
          custom={1}
          {...reveal}
          className="mt-2 text-center text-[13px] font-light leading-7 text-white/60 lg:mt-6 lg:text-[clamp(14px,1.11vw,16px)] lg:leading-6"
        >
          Each role has sharpened my ability to build better digital
          experiences, faster.
        </motion.p>

        {/* Timeline */}
        <ol
          className="mt-6 lg:mt-17"
          style={{ display: "flex", flexDirection: "column", gap: CARD_GAP }}
        >
          {EXPERIENCES.map((exp, index) => {
            const isLast = index === EXPERIENCES.length - 1;

            return (
              <motion.li
                key={exp.company}
                variants={rowVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.15 }}
                style={{
                  position: "relative",
                  display: "grid",
                  gridTemplateColumns: `${DOT} minmax(0, 1fr)`,
                  columnGap: GAP_TO_CARD,
                }}
              >
                {/* Titik timeline: berada DI LUAR kartu (kolom kiri) */}
                <motion.span
                  variants={dotVariants}
                  className="relative z-10 self-start"
                  style={{ width: DOT, height: DOT }}
                >
                  <Image
                    src="/icons/radio-button.svg"
                    alt=""
                    width={32}
                    height={32}
                    className="size-full"
                  />
                </motion.span>

                {/* Garis penghubung ke titik berikutnya */}
                {!isLast && (
                  <motion.span
                    aria-hidden
                    variants={lineVariants}
                    style={{
                      position: "absolute",
                      left: `calc(${DOT} / 2 - 1px)`,
                      top: `calc(${DOT} / 2)`,
                      bottom: `calc(-${CARD_GAP}px - ${DOT} / 2)`,
                      width: 2,
                      background: LINE_COLOR,
                      transformOrigin: "top",
                    }}
                  />
                )}

                {/* Garis terakhir: hanya di mobile, memanjang sampai bawah section */}
                {isLast && (
                  <motion.span
                    aria-hidden
                    variants={lineVariants}
                    className="md:hidden"
                    style={{
                      position: "absolute",
                      left: `calc(${DOT} / 2 - 1px)`,
                      top: `calc(${DOT} / 2)`,
                      bottom: -40,
                      width: 2,
                      background: LINE_COLOR,
                      transformOrigin: "top",
                    }}
                  />
                )}

                {/* Kartu */}
                <motion.article
                  variants={cardVariants}
                  {...reveal}
                  whileHover={{ y: -3 }}
                  className="min-w-0 rounded-2xl border border-white/15 bg-black px-4 pb-4 pt-5.5 transition-colors duration-300 hover:border-white/30 md:py-[clamp(20px,1.94vw,28px)] md:pl-6 md:pr-7"
                  style={
                    index === 0
                      ? {
                          backgroundImage:
                            "radial-gradient(ellipse clamp(300px, 32vw, 460px) clamp(130px, 12vw, 170px) at clamp(60px, 8vw, 120px) 20px, rgba(95,30,135,0.6) 0%, transparent 100%)",
                        }
                      : undefined
                  }
                >
                  <div className="md:grid md:grid-cols-[clamp(120px,10.5vw,151px)_minmax(0,1fr)] md:items-start">
                    {/* Periode + logo perusahaan */}
                    <div className="relative border-b border-white/15 pb-5 md:border-b-0 md:pb-0 md:after:absolute md:after:-bottom-1.5 md:after:-top-1.5 md:after:right-0 md:after:w-px md:after:bg-white/15">
                      <p className="text-[13px] font-bold leading-5 md:text-[clamp(12px,1.04vw,15px)] md:leading-5.5">
                        {exp.period}
                      </p>
                      <Image
                        src={exp.logo}
                        alt={exp.company}
                        width={132}
                        height={36}
                        className="mt-4 h-6 w-auto md:mt-6 md:h-[clamp(28px,2.5vw,36px)]"
                      />
                    </div>

                    {/* Daftar tanggung jawab */}
                    <ul className="mt-4 flex flex-col gap-4 md:mt-0 md:gap-[clamp(16px,1.67vw,24px)] md:pl-7">
                      {RESPONSIBILITIES.map((item) => (
                        <motion.li
                          key={item}
                          variants={itemVariants}
                          className="flex items-center gap-3 text-[13px] leading-7 text-white md:text-[clamp(11px,0.97vw,14px)] md:leading-[clamp(18px,1.53vw,22px)]"
                        >
                          <Image
                            src="/icons/star-purple.svg"
                            alt=""
                            width={22}
                            height={22}
                            className="ml-1 size-5 shrink-0 md:ml-0 md:size-[clamp(18px,1.53vw,22px)]"
                          />
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
