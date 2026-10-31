"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowDown } from "lucide-react";

const SOCIALS = [
  {
    name: "Facebook",
    icon: "/icons/facebook.svg",
    href: "https://facebook.com",
  },
  {
    name: "Instagram",
    icon: "/icons/instagram.svg",
    href: "https://instagram.com",
  },
  {
    name: "LinkedIn",
    icon: "/icons/linkedIn.svg",
    href: "https://linkedin.com",
  },
  { name: "TikTok", icon: "/icons/tiktok.svg", href: "https://tiktok.com" },
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

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative isolate min-h-screen overflow-hidden lg:min-h-[max(100vh,65.6vw)]"
    >
      {/* Background */}
      <div aria-hidden className="hero-bg absolute inset-0 -z-20" />
      <div aria-hidden className="hero-grid absolute inset-0 -z-10" />

      <div className="mx-auto flex max-w-360 flex-col px-4 pb-40 pt-28 md:px-8 lg:grid lg:min-h-[inherit] lg:grid-cols-[minmax(0,1fr)_clamp(260px,26.6vw,383px)_minmax(0,1fr)] lg:items-center lg:px-[clamp(40px,8.33vw,120px)] lg:pb-24 lg:pt-47.5">
        {/* ===== Foto (arch) ===== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-10 order-1 mx-auto mt-6 aspect-383/497 w-[81%] max-w-105 lg:order-2 lg:mt-0 lg:w-full lg:max-w-none"
        >
          {/* Watermark */}
          <span
            aria-hidden
            className="pointer-events-none absolute -top-9 left-1/2 -z-10 -translate-x-1/2 select-none whitespace-nowrap text-[clamp(52px,16vw,96px)] font-extrabold leading-none text-white/10 md:text-[clamp(96px,14vw,120px)] lg:top-[clamp(-74px,-5.1vw,-44px)] lg:text-[clamp(80px,10vw,144px)]"
          >
            PORTOFOLIO
          </span>

          <div className="relative size-full overflow-hidden rounded-t-full bg-[#1c1c18]">
            <Image
              src="/images/avatar-hero.png"
              alt="Foto Irwin Ibrahim"
              fill
              priority
              sizes="(min-width: 1440px) 383px, (min-width: 1024px) 27vw, 81vw"
              className="object-cover object-top"
            />
          </div>

          {/* Bintang */}
          <motion.div
            animate={{ rotate: [0, 12, 0], scale: [1, 1.08, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-3 top-4 z-20 w-19.5 lg:right-[-12%] lg:top-[6.4%] lg:w-[32%]"
          >
            <Image
              src="/icons/logo-star.svg"
              alt=""
              width={123}
              height={123}
              className="size-full"
            />
          </motion.div>

          {/* Badge Expert Frontend Developer */}
          <motion.div
            whileHover={{ rotate: 12, scale: 1.06 }}
            transition={{ type: "spring", stiffness: 200, damping: 14 }}
            className="absolute -bottom-12 -right-5 z-20 size-20 overflow-hidden rounded-full bg-white lg:bottom-[-4%] lg:right-[-14.6%] lg:size-auto lg:w-[31.3%] lg:aspect-square"
          >
            <Image
              src="/icons/expert-frontend.svg"
              alt="Expert Frontend Developer"
              fill
              className="object-contain"
            />
          </motion.div>
        </motion.div>

        {/* ===== Nama ===== */}
        <motion.h1
          variants={fadeUp}
          custom={1}
          {...reveal}
          className="relative z-20 order-2 -mt-11 text-[40px] font-bold uppercase leading-[1.1] tracking-tight text-white sm:text-5xl lg:order-1 lg:mt-0 lg:pl-[clamp(24px,3.7vw,53px)] lg:text-[clamp(44px,5.56vw,80px)] lg:leading-[1.125]"
        >
          Irwin
          <br />
          Ibrahim
        </motion.h1>

        {/* ===== About ===== */}
        <div className="order-3 mt-10 lg:mt-0 lg:pl-[clamp(32px,6.5vw,94px)]">
          <motion.h2
            variants={fadeUp}
            custom={2}
            {...reveal}
            className="text-xl font-semibold text-white lg:text-[clamp(22px,1.94vw,28px)]"
          >
            About me
          </motion.h2>
          <motion.p
            variants={fadeUp}
            custom={3}
            {...reveal}
            className="mt-4 max-w-[320px] text-sm leading-7 text-white/90 lg:max-w-none lg:text-[clamp(13px,1.04vw,15px)] lg:leading-[clamp(24px,2.08vw,30px)]"
          >
            Passionate about frontend development, I focus on crafting digital
            products.
          </motion.p>

          <motion.ul
            variants={fadeUp}
            custom={4}
            {...reveal}
            className="mt-8 flex items-center gap-3"
          >
            {SOCIALS.map((s) => (
              <li key={s.name}>
                <motion.a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  whileHover={{ y: -4, scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex size-10 items-center justify-center rounded-full border border-white/20 transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 lg:size-[clamp(40px,3.33vw,48px)] lg:border-transparent lg:bg-[#2a0b3d] lg:hover:bg-[#3b1055]"
                >
                  <Image
                    src={s.icon}
                    alt=""
                    width={24}
                    height={24}
                    className="size-5 lg:size-6"
                  />
                </motion.a>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>

      {/* Tombol scroll */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2"
      >
        <Link
          href="#about"
          aria-label="Scroll ke bawah"
          className="flex h-25 w-18.25 items-start justify-center rounded-t-full border border-b-0 border-white/20 pt-8 lg:h-26.75 lg:w-26.25 lg:pt-10"
        >
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="size-6 text-white/50" />
          </motion.span>
        </Link>
      </motion.div>
    </section>
  );
}
