"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionHeading, { MobileBreak } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { QUOTE, SKILLS } from "@/lib/data";
import { fadeUp, reveal } from "@/lib/motion";
import { container } from "@/lib/styles";
import { cn } from "@/lib/utils";

export default function SkillSection() {
  return (
    <section className="bg-black text-white">
      <div className={cn(container, "pb-10 pt-10 lg:pb-24 lg:pt-24")}>
        <SectionHeading
          title={
            <>
              Experienced in Web &amp; App
              <MobileBreak /> Development
            </>
          }
          subtitle="I create user-focused websites that look good, work well, and feel right."
        />

        <div className="mt-5 grid gap-4 lg:mt-16 lg:grid-cols-[minmax(0,1.316fr)_minmax(0,1fr)]">
          {/* Grid skill */}
          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3">
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
            className="flex min-h-77 flex-col rounded-2xl px-4 pb-6 pt-5 sm:px-6 lg:min-h-0 lg:p-6"
          >
            <blockquote>
              <p className="text-[20px] font-semibold leading-[1.55] sm:text-2xl lg:text-[clamp(20px,1.81vw,26px)] lg:leading-[1.6]">
                {QUOTE.text}
              </p>
              <footer className="mt-8 text-sm font-light text-white/80 lg:mt-20">
                {QUOTE.author}
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
