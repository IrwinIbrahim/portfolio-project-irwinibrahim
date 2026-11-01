"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

const PROJECTS = [
  {
    title: "Portofolio 1",
    year: "2025",
    image: "/images/portfolio-1.jpg",
    href: "#",
  },
  {
    title: "Portofolio 2",
    year: "2025",
    image: "/images/portfolio-2.jpg",
    href: "#",
  },
  {
    title: "Portofolio 3",
    year: "2025",
    image: "/images/portfolio-3.jpg",
    href: "#",
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
  viewport: { once: true, amount: 0.2 },
} as const;

/*
  Desktop: ukuran memakai clamp(min, vw, max) berdasarkan desain Figma 1440px,
  sehingga proporsional di layar < 1440px dan sesuai desain di >= 1440px.
*/
export default function ProjectsSection() {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-360 px-4 pb-12 pt-12 md:px-8 lg:px-[clamp(40px,8.33vw,120px)] lg:pb-24 lg:pt-22.5">
        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          custom={0}
          {...reveal}
          className="text-center text-[26px] font-bold leading-[1.4] lg:text-[clamp(32px,2.78vw,40px)] lg:leading-[1.2]"
        >
          Frontend in Action
        </motion.h2>
        <motion.p
          variants={fadeUp}
          custom={1}
          {...reveal}
          className="mt-2 text-center text-[13px] font-light leading-7 text-white/60 lg:mt-6 lg:text-[clamp(14px,1.11vw,16px)] lg:leading-6"
        >
          These are hands-on projects where I delivered clean,
          <br className="md:hidden" /> responsive user interfaces.
        </motion.p>

        {/* Daftar project */}
        <ul className="mt-7 grid gap-10 md:grid-cols-3 md:gap-5 lg:mt-17">
          {PROJECTS.map((project, i) => (
            <motion.li
              key={project.title}
              variants={fadeUp}
              custom={i + 2}
              {...reveal}
            >
              <Link
                href={project.href}
                className="group block focus-visible:outline-none"
              >
                {/* Gambar */}
                <div className="relative aspect-4/3 overflow-hidden rounded-md md:aspect-square">
                  <motion.div
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={project.image}
                      alt={`Tampilan ${project.title}`}
                      fill
                      sizes="(min-width: 1440px) 387px, (min-width: 768px) 30vw, 100vw"
                      className="object-cover object-top"
                    />
                  </motion.div>
                </div>

                {/* Judul + tahun + tombol panah */}
                <div className="mt-6 flex items-center justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold leading-8 lg:text-[clamp(20px,1.67vw,24px)]">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-base font-light text-white/60 lg:text-[clamp(14px,1.11vw,16px)]">
                      {project.year}
                    </p>
                  </div>

                  <motion.span
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex size-9 shrink-0 items-center justify-center rounded-full border border-white/30 transition-colors duration-300 group-hover:border-white group-hover:bg-white group-hover:text-black lg:size-10"
                  >
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:-rotate-45 lg:size-5" />
                    <span className="sr-only">Lihat {project.title}</span>
                  </motion.span>
                </div>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
