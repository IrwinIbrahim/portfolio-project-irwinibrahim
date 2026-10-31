"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { animate, motion, useInView, type Variants } from "framer-motion";

const STATS = [
  {
    value: 2,
    suffix: "+",
    label: ["Years", "Experience"],
    image: "/images/years-experience.jpg",
    alt: "Edwin bekerja dengan laptop",
  },
  {
    value: 99,
    suffix: "%",
    label: ["Client", "Satisfaction"],
    image: "/images/client-satisfaction.jpg",
    alt: "Klien yang puas dengan hasil kerja Edwin",
  },
  {
    value: 12,
    suffix: "+",
    label: ["Project", "Delivered"],
    image: "/images/project-delivered.jpg",
    alt: "Contoh project yang telah diselesaikan",
  },
];

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
  viewport: { once: true, amount: 0.3 },
} as const;

/* Angka naik dari 0 saat masuk viewport */
function CountUp({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => setVal(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <span ref={ref} aria-label={`${to}${suffix}`}>
      <span aria-hidden>
        {val}
        {suffix}
      </span>
    </span>
  );
}

/*
  Desktop (lg+): desain Figma 1440px. Ukuran memakai clamp(min, vw, max)
  agar proporsional di layar < 1440px dan persis desain di >= 1440px.
*/
export default function ProvenNumbersSection() {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-360 px-4 py-12 md:px-8 lg:px-[clamp(40px,8.33vw,120px)] lg:pb-14 lg:pt-20">
        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          custom={0}
          {...reveal}
          className="max-w-[16ch] text-[28px] font-bold leading-[1.35] md:max-w-none lg:text-[clamp(32px,2.78vw,40px)] lg:leading-[1.2]"
        >
          Proven Numbers. Real Impact.
        </motion.h2>
        <motion.p
          variants={fadeUp}
          custom={1}
          {...reveal}
          className="mt-3 text-sm font-light text-white/60 lg:mt-4 lg:text-[clamp(14px,1.11vw,16px)]"
        >
          From shipped products to years of experience
        </motion.p>

        {/* Daftar statistik */}
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
                <p className="whitespace-nowrap text-4xl font-bold leading-none lg:text-[clamp(48px,5vw,72px)]">
                  <CountUp to={stat.value} suffix={stat.suffix} />
                </p>
              </div>

              {/* Label */}
              <p className="text-sm font-normal leading-7.5 text-white lg:text-[clamp(20px,1.94vw,28px)] lg:leading-[1.6]">
                {stat.label[0]}
                <br />
                {stat.label[1]}
              </p>

              {/* Foto */}
              <motion.div
                whileHover={{ scale: 1.06, rotate: -2 }}
                transition={{ type: "spring", stiffness: 250, damping: 18 }}
                className="size-20 overflow-hidden rounded-xl lg:size-[clamp(88px,8.33vw,120px)] lg:rounded-2xl"
              >
                <Image
                  src={stat.image}
                  alt={stat.alt}
                  width={120}
                  height={120}
                  sizes="(min-width: 1440px) 120px, (min-width: 1024px) 9vw, 80px"
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
