"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeUp, reveal } from "@/lib/motion";
import { cn } from "@/lib/utils";

/** Pemecah baris yang hanya aktif di mobile (di md ke atas judul jadi satu baris). */
export function MobileBreak() {
  return <br className="md:hidden" />;
}

type SectionHeadingProps = {
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
  className?: string;
};

/** Judul + subjudul section dengan scroll reveal, dipakai semua section. */
export default function SectionHeading({
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn(align === "center" && "text-center", className)}>
      <motion.h2
        variants={fadeUp}
        custom={0}
        {...reveal}
        className="text-[26px] font-bold leading-[1.4] sm:text-3xl lg:text-[clamp(32px,2.78vw,40px)] lg:leading-[1.2]"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeUp}
          custom={1}
          {...reveal}
          className="mt-2 text-[13px] font-light leading-7 text-white/60 sm:text-sm lg:mt-6 lg:text-[clamp(14px,1.11vw,16px)] lg:leading-6"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
