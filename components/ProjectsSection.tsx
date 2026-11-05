"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeading, { MobileBreak } from "@/components/SectionHeading";
import { PROJECTS } from "@/lib/data";
import { fadeUp, reveal } from "@/lib/motion";
import { container } from "@/lib/styles";
import { cn } from "@/lib/utils";

export default function ProjectsSection() {
  return (
    <section className="bg-black text-white">
      <div className={cn(container, "pb-12 pt-12 lg:pb-24 lg:pt-22.5")}>
        <SectionHeading
          title="Frontend in Action"
          subtitle={
            <>
              These are hands-on projects where I delivered clean,
              <MobileBreak /> responsive user interfaces.
            </>
          }
        />

        <ul className="mt-7 grid gap-10 md:grid-cols-3 md:gap-4 lg:mt-17 xl:gap-5">
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
                <div className="relative aspect-4/3 overflow-hidden rounded-md sm:aspect-video md:aspect-square">
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
