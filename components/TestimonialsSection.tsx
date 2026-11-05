"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading, { MobileBreak } from "@/components/SectionHeading";
import { TESTIMONIALS } from "@/lib/data";
import { fadeUp, reveal } from "@/lib/motion";
import { container } from "@/lib/styles";
import { cn } from "@/lib/utils";

export default function TestimonialsSection() {
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);

  const handleScroll = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const step = el.scrollWidth / TESTIMONIALS.length;
    const index = Math.round(el.scrollLeft / step);
    setActive(Math.min(Math.max(index, 0), TESTIMONIALS.length - 1));
  };

  const goTo = (index: number) => {
    const el = scrollerRef.current;
    setActive(index);
    el?.scrollTo({
      left: (el.scrollWidth / TESTIMONIALS.length) * index,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-black text-white">
      <div className={cn(container, "pb-10 pt-12 lg:pb-24 lg:pt-22")}>
        <SectionHeading
          title={
            <>
              Trusted by Teams, Valued
              <MobileBreak /> by Clients
            </>
          }
          subtitle={
            <>
              A few kind words from the people behind the projects
              <MobileBreak /> Edwin helped bring to life.
            </>
          }
        />

        <motion.div
          variants={fadeUp}
          custom={2}
          {...reveal}
          className="mt-6 lg:mt-17"
        >
          {/* Daftar testimoni */}
          <ul
            ref={scrollerRef}
            onScroll={handleScroll}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto scrollbar-none md:grid md:grid-cols-3 md:gap-4 md:overflow-visible xl:gap-5 [&::-webkit-scrollbar]:hidden"
          >
            {TESTIMONIALS.map((t, i) => (
              <motion.li
                key={t.company}
                whileHover={{ y: -4 }}
                onMouseEnter={() => setActive(i)}
                className="flex min-h-87.75 shrink-0 basis-full snap-center flex-col rounded-[20px] border border-white/10 bg-black px-4 pb-4.5 pt-5 transition-colors duration-300 hover:border-white/25 sm:px-6 md:min-h-[clamp(300px,27.5vw,396px)] md:basis-auto md:px-5 md:pb-6 md:pt-6"
                style={{
                  backgroundImage:
                    "radial-gradient(ellipse 60% 55% at 15% 8%, rgba(95,30,135,0.65) 0%, transparent 100%)",
                }}
              >
                {/* Logo perusahaan */}
                <Image
                  src={t.logo}
                  alt={t.company}
                  width={129}
                  height={29}
                  className="h-auto w-24.5 md:w-[clamp(100px,8.96vw,129px)]"
                />

                {/* Bintang */}
                <div
                  className="mt-8 flex gap-2 md:mt-[clamp(32px,2.98vw,43px)]"
                  aria-label={`Rating ${t.rating} dari 5`}
                >
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <Image
                      key={s}
                      src="/icons/star-yellow.svg"
                      alt=""
                      width={20}
                      height={20}
                      className="size-5"
                    />
                  ))}
                </div>

                {/* Kutipan */}
                <p className="mt-7 text-sm leading-7.75 text-white md:mt-9 md:text-[clamp(13px,1.11vw,16px)] md:leading-[clamp(26px,2.22vw,32px)]">
                  {t.quote}
                </p>

                {/* Penulis */}
                <div className="mt-auto pt-10">
                  <p className="text-sm font-bold leading-6">{t.name}</p>
                  <p className="mt-2 text-sm font-light leading-6 text-white/40">
                    {t.role}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>

          {/* Indikator titik */}
          <div className="mt-6 flex items-center justify-center gap-1.5 md:gap-1.75">
            {TESTIMONIALS.map((t, i) => (
              <button
                key={t.company}
                type="button"
                aria-label={`Lihat testimoni ${t.company}`}
                aria-current={active === i}
                onClick={() => goTo(i)}
                className={cn(
                  "h-2 rounded-full transition-all duration-300 md:h-3",
                  active === i
                    ? "w-6 bg-[#6d2fa3] md:w-12"
                    : "w-3 bg-[#2a2d35] hover:bg-[#3a3e49] md:w-5.5",
                )}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
