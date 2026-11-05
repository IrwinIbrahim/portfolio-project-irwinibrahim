"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading, { MobileBreak } from "@/components/SectionHeading";
import { COMPARISON_FEATURES } from "@/lib/data";
import { reveal, slideIn, staggerCard } from "@/lib/motion";
import { container } from "@/lib/styles";
import { cn } from "@/lib/utils";

export default function WhyChooseSection() {
  return (
    <section className="bg-black text-white">
      <div className={cn(container, "pb-10 pt-12 lg:pb-24 lg:pt-28")}>
        <SectionHeading
          title={
            <>
              Choose Wisely, Get Quality
              <MobileBreak /> Results
            </>
          }
          subtitle="Make the right choice for interfaces that are fast, reliable, and visually sharp."
        />

        <div className="mt-7 grid gap-6 lg:mt-17 lg:grid-cols-2 lg:gap-4 xl:gap-5">
          {/* ===== With Me ===== */}
          <motion.div
            variants={staggerCard}
            {...reveal}
            style={{
              background:
                "radial-gradient(40% 30% at 85% 0%, rgba(90,30,50,0.9) 0%, transparent 70%), radial-gradient(38% 38% at 100% 45%, #c94a9f 0%, transparent 75%), radial-gradient(65% 50% at 15% 35%, #7a2fb0 0%, transparent 75%), linear-gradient(180deg, #5b2a8a 0%, #6a2b96 50%, #3c1950 100%)",
            }}
            className="rounded-[20px] p-4 sm:p-5 lg:p-6"
          >
            <h3 className="text-lg font-semibold lg:text-[clamp(18px,1.53vw,22px)]">
              With Me
            </h3>
            <ul className="mt-5 flex flex-col gap-2">
              {COMPARISON_FEATURES.map((feature) => (
                <motion.li
                  key={feature}
                  variants={slideIn}
                  whileHover={{ x: 6 }}
                  className="flex h-14 items-center gap-3 rounded-[10px] border border-white/10 bg-[#1b0a30]/40 px-4 text-[13px] text-white sm:text-sm lg:text-[clamp(13px,0.97vw,14px)]"
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
            variants={staggerCard}
            {...reveal}
            className="rounded-[20px] border border-white/10 bg-black p-4 sm:p-5 lg:p-6"
          >
            <h3 className="text-lg font-semibold lg:text-[clamp(18px,1.53vw,22px)]">
              Other
            </h3>
            <ul className="mt-5 flex flex-col gap-2">
              {COMPARISON_FEATURES.map((feature) => (
                <motion.li
                  key={feature}
                  variants={slideIn}
                  className="flex h-14 items-center gap-3 rounded-[10px] bg-[#22252b] px-4 text-[13px] text-white/40 sm:text-sm lg:text-[clamp(13px,0.97vw,14px)]"
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
