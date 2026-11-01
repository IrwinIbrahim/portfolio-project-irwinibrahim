"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const TESTIMONIALS = [
  { company: "Airbnb", logo: "/icons/airbnb-white.svg" },
  { company: "Coinbase", logo: "/icons/coinbase-white.svg" },
  { company: "Webflow", logo: "/icons/webflow-white.svg" },
].map((item) => ({
  ...item,
  rating: 5,
  quote:
    '"Edwin delivered clean and efficient code that made our app load faster and feel smoother. He\'s a pleasure to work with."',
  name: "Sarah Liem",
  role: "Product Manager at Techlynk",
}));

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" },
  }),
};

const reveal = {
  initial: "hidden",
  whileInView: "show",
  viewport: { once: true, amount: 0.2 },
} as const;

/*
  Mobile  : carousel geser (scroll-snap) 1 kartu per layar + indikator titik.
  Desktop : (md+) 3 kartu sejajar. Indikator titik tetap tampil seperti desain;
            titik aktif mengikuti kartu yang sedang di-hover.
  Ukuran desktop memakai clamp(min, vw, max) berdasarkan desain Figma 1440px.
*/
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
    if (!el) return;
    el.scrollTo({
      left: (el.scrollWidth / TESTIMONIALS.length) * index,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-360 px-4 pb-10 pt-12 md:px-8 lg:px-[clamp(40px,8.33vw,120px)] lg:pb-24 lg:pt-22">
        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          custom={0}
          {...reveal}
          className="text-center text-[26px] font-bold leading-[1.4] lg:text-[clamp(32px,2.78vw,40px)] lg:leading-[1.2]"
        >
          Trusted by Teams, Valued
          <br className="md:hidden" /> by Clients
        </motion.h2>
        <motion.p
          variants={fadeUp}
          custom={1}
          {...reveal}
          className="mt-2 text-center text-[13px] font-light leading-7 text-white/60 lg:mt-6 lg:text-[clamp(14px,1.11vw,16px)] lg:leading-6"
        >
          A few kind words from the people behind the projects
          <br className="md:hidden" /> Edwin helped bring to life.
        </motion.p>

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
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto scrollbar-none md:grid md:grid-cols-3 md:gap-5 md:overflow-visible [&::-webkit-scrollbar]:hidden"
          >
            {TESTIMONIALS.map((t, i) => (
              <motion.li
                key={t.company}
                whileHover={{ y: -4 }}
                onMouseEnter={() => setActive(i)}
                className="flex min-h-87.75 shrink-0 basis-full snap-center flex-col rounded-[20px] border border-white/10 bg-black px-4 pb-4.5 pt-5 transition-colors duration-300 hover:border-white/25 md:min-h-[clamp(300px,27.5vw,396px)] md:basis-auto md:px-5 md:pb-6 md:pt-6"
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
                className={`h-2 rounded-full transition-all duration-300 md:h-3 ${
                  active === i
                    ? "w-6 bg-[#6d2fa3] md:w-12"
                    : "w-3 bg-[#2a2d35] hover:bg-[#3a3e49] md:w-5.5"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
