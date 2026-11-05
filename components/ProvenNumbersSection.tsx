"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import CountUp from "@/components/CountUp";
import SectionHeading, { MobileBreak } from "@/components/SectionHeading";
import { STATS } from "@/lib/data";
import { fadeUp, reveal } from "@/lib/motion";
import { container } from "@/lib/styles";
import { cn } from "@/lib/utils";

export default function ProvenNumbersSection() {
  return (
    <section className="bg-black text-white">
      <div className={cn(container, "py-12 lg:pb-14 lg:pt-20")}>
        <SectionHeading
          align="left"
          title={
            <>
              Proven Numbers. Real
              <MobileBreak /> Impact.
            </>
          }
          subtitle="From shipped products to years of experience"
        />

        <ul className="mt-4 lg:mt-6">
          {STATS.map((stat, i) => (
            <motion.li
              key={stat.label.join(" ")}
              variants={fadeUp}
              custom={i + 2}
              {...reveal}
              className="group grid grid-cols-[40.5%_minmax(0,1fr)_auto] items-center border-b border-white/15 py-5 last:border-b-0 lg:grid-cols-[42.75%_minmax(0,1fr)_auto] lg:py-[clamp(28px,2.9vw,42px)]"
            >
              {/* Bintang + angka */}
              <div className="flex items-center gap-3 lg:gap-4">
                <Image
                  src="/icons/star-purple.svg"
                  alt=""
                  width={35}
                  height={35}
                  className="w-5.5 shrink-0 transition-transform duration-500 group-hover:rotate-90 lg:w-[clamp(26px,2.43vw,35px)]"
                />
                <p className="whitespace-nowrap text-4xl font-bold leading-none sm:text-5xl lg:text-[clamp(48px,5vw,72px)]">
                  <CountUp to={stat.value} suffix={stat.suffix} />
                </p>
              </div>

              {/* Label */}
              <p className="text-sm font-normal leading-7.5 text-white sm:text-base lg:text-[clamp(20px,1.94vw,28px)] lg:leading-[1.6]">
                {stat.label[0]}
                <br />
                {stat.label[1]}
              </p>

              {/* Foto */}
              <motion.div
                whileHover={{ scale: 1.06, rotate: -2 }}
                transition={{ type: "spring", stiffness: 250, damping: 18 }}
                className="size-20 overflow-hidden rounded-xl sm:size-24 lg:size-[clamp(88px,8.33vw,120px)] lg:rounded-2xl"
              >
                <Image
                  src={stat.image}
                  alt={stat.alt}
                  width={120}
                  height={120}
                  sizes="(min-width: 1440px) 120px, (min-width: 1024px) 9vw, 96px"
                  className="size-full object-cover"
                />
              </motion.div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
