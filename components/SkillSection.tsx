"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/button";

const SKILLS = [
  { name: "HTML", icon: "/icons/html.svg" },
  { name: "CSS", icon: "/icons/css.svg" },
  { name: "Javascript", icon: "/icons/javascript.svg" },
  { name: "Typescript", icon: "/icons/typescript.svg" },
  { name: "Sequalize", icon: "/icons/sequalize.svg" },
  { name: "Mongo DB", icon: "/icons/mongo-db.svg" },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

const reveal = {
  initial: "hidden",
  whileInView: "show",
  viewport: { once: true, amount: 0.25 },
} as const;

/*
  Desktop (lg+): desain Figma 1440px. Ukuran memakai clamp(min, vw, max)
  agar proporsional di layar < 1440px dan persis desain di >= 1440px.
*/
export default function SkillSection() {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-360 px-4 pb-10 pt-10 md:px-8 lg:px-[clamp(40px,8.33vw,120px)] lg:pb-24 lg:pt-24">
        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          custom={0}
          {...reveal}
          className="text-center text-[26px] font-bold leading-[1.4] lg:text-[clamp(32px,2.78vw,40px)] lg:leading-[1.2]"
        >
          Experienced in Web &amp; App
          <br className="md:hidden" /> Development
        </motion.h2>
        <motion.p
          variants={fadeUp}
          custom={1}
          {...reveal}
          className="mt-4 text-center text-[13px] font-light leading-8.5 text-white/60 lg:mt-6 lg:text-[clamp(14px,1.11vw,16px)] lg:leading-6"
        >
          I create user-focused websites that look good, work well, and feel
          right.
        </motion.p>

        <div className="mt-5 grid gap-4 lg:mt-16 lg:grid-cols-[minmax(0,1.316fr)_minmax(0,1fr)]">
          {/* Grid skill */}
          <ul className="grid grid-cols-2 gap-4 lg:grid-cols-3">
            {SKILLS.map((skill, i) => (
              <motion.li
                key={skill.name}
                variants={fadeUp}
                custom={i + 2}
                {...reveal}
                whileHover={{ y: -6 }}
                className="group flex aspect-square flex-col items-center justify-center gap-5 rounded-2xl border border-white/10 bg-black pt-2 transition-colors duration-300 hover:border-white/30 lg:gap-6 lg:pt-3"
              >
                <Image
                  src={skill.icon}
                  alt=""
                  width={60}
                  height={60}
                  className="size-15 object-contain transition-transform duration-300 group-hover:scale-110 lg:size-[clamp(44px,4.17vw,60px)]"
                />
                <span className="text-sm text-white lg:text-[clamp(14px,1.11vw,16px)]">
                  {skill.name}
                </span>
              </motion.li>
            ))}
          </ul>

          {/* Kartu kutipan */}
          <motion.div
            variants={fadeUp}
            custom={4}
            {...reveal}
            style={{
              background:
                "radial-gradient(60% 55% at 0% 0%, rgba(110,40,80,0.75) 0%, transparent 70%), radial-gradient(70% 70% at 100% 100%, #a63cc4 0%, transparent 75%), linear-gradient(135deg, #5b2d8a 0%, #7a2fa5 55%, #8e33b2 100%)",
            }}
            className="flex min-h-77 flex-col rounded-2xl px-4 pb-6 pt-5 lg:min-h-0 lg:p-6"
          >
            <blockquote>
              <p className="text-[20px] font-semibold leading-[1.55] lg:text-[clamp(20px,1.81vw,26px)] lg:leading-[1.6]">
                &quot;Programming is the art of telling another human what you
                want the computer to do.&quot;
              </p>
              <footer className="mt-8 text-sm font-light text-white/80 lg:mt-20">
                — Donald Knuth
              </footer>
            </blockquote>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-auto pt-8"
            >
              <Button
                asChild
                className="h-12 w-full rounded-lg bg-white text-sm font-medium text-black hover:bg-white/90"
              >
                <Link href="#contact">Let&apos;s Build Something</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
