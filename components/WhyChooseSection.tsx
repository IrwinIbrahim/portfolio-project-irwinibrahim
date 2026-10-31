"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const FEATURES = [
  "React Expert",
  "Pixel Perfect",
  "TypeScript Proficiency",
  "Clean, Maintainable Code",
  "Performance Optimization",
  "Responsive Website",
  "UI Design Proficiency (Figma)",
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

/* Kartu masuk dari kiri / kanan di desktop, dari bawah di mobile */
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -16 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const reveal = {
  initial: "hidden",
  whileInView: "show",
  viewport: { once: true, amount: 0.2 },
} as const;

/*
  Desktop (lg+): desain Figma 1440px. Ukuran memakai clamp(min, vw, max)
  agar proporsional di layar < 1440px dan persis desain di >= 1440px.
*/
export default function WhyChooseSection() {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-360 px-4 pb-10 pt-12 md:px-8 lg:px-[clamp(40px,8.33vw,120px)] lg:pb-24 lg:pt-28">
        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          custom={0}
          {...reveal}
          className="text-center text-[26px] font-bold leading-[1.4] lg:text-[clamp(32px,2.78vw,40px)] lg:leading-[1.2]"
        >
          Choose Wisely, Get Quality
          <br className="md:hidden" /> Results
        </motion.h2>
        <motion.p
          variants={fadeUp}
          custom={1}
          {...reveal}
          className="mt-4 text-center text-[13px] font-light leading-7 text-white/60 lg:mt-6 lg:text-[clamp(14px,1.11vw,16px)] lg:leading-6"
        >
          Make the right choice for interfaces that are fast, reliable, and
          visually sharp.
        </motion.p>

        <div className="mt-7 grid gap-6 lg:mt-17 lg:grid-cols-2 lg:gap-5">
          {/* ===== With Me ===== */}
          <motion.div
            variants={cardVariants}
            {...reveal}
            style={{
              background:
                "radial-gradient(40% 30% at 85% 0%, rgba(90,30,50,0.9) 0%, transparent 70%), radial-gradient(38% 38% at 100% 45%, #c94a9f 0%, transparent 75%), radial-gradient(65% 50% at 15% 35%, #7a2fb0 0%, transparent 75%), linear-gradient(180deg, #5b2a8a 0%, #6a2b96 50%, #3c1950 100%)",
            }}
            className="rounded-[20px] p-4 lg:p-6"
          >
            <h3 className="text-lg font-semibold lg:text-[clamp(18px,1.53vw,22px)]">
              With Me
            </h3>
            <ul className="mt-5 flex flex-col gap-2">
              {FEATURES.map((feature) => (
                <motion.li
                  key={feature}
                  variants={itemVariants}
                  whileHover={{ x: 6 }}
                  className="flex h-14 items-center gap-3 rounded-[10px] border border-white/10 bg-[#1b0a30]/40 px-4 text-[13px] text-white lg:text-[clamp(13px,0.97vw,14px)]"
                >
                  <Image
                    src="/icons/logo-star.svg"
                    alt=""
                    width={24}
                    height={24}
                    className="size-6 shrink-0"
                  />
                  {feature}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* ===== Other ===== */}
          <motion.div
            variants={cardVariants}
            {...reveal}
            className="rounded-[20px] border border-white/10 bg-black p-4 lg:p-6"
          >
            <h3 className="text-lg font-semibold lg:text-[clamp(18px,1.53vw,22px)]">
              Other
            </h3>
            <ul className="mt-5 flex flex-col gap-2">
              {FEATURES.map((feature) => (
                <motion.li
                  key={feature}
                  variants={itemVariants}
                  className="flex h-14 items-center gap-3 rounded-[10px] bg-[#22252b] px-4 text-[13px] text-white/40 lg:text-[clamp(13px,0.97vw,14px)]"
                >
                  <Image
                    src="/icons/x-close-red.svg"
                    alt=""
                    width={24}
                    height={24}
                    className="size-6 shrink-0"
                  />
                  {feature}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
