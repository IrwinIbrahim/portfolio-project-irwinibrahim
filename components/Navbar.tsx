"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/lib/data";
import { container } from "@/lib/styles";
import { cn } from "@/lib/utils";

const listVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -12 },
  show: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Latar blur halus setelah halaman di-scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Kunci scroll body + tutup dengan Escape saat menu mobile terbuka
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // Tutup menu mobile saat layar masuk breakpoint desktop
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = (e: MediaQueryListEvent) => e.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled && !open
          ? "bg-[#1a0630]/60 backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <nav
        aria-label="Navigasi utama"
        className={cn(
          container,
          "relative z-50 flex h-20 items-center justify-between",
        )}
      >
        {/* Logo */}
        <Link
          href="#home"
          className="flex items-center gap-2"
          onClick={() => setOpen(false)}
        >
          <motion.span
            whileHover={{ rotate: 90 }}
            transition={{ type: "spring", stiffness: 200, damping: 12 }}
            className="inline-flex"
          >
            <Image
              src="/icons/logo-star.svg"
              alt="Logo Star"
              width={36}
              height={36}
              className="size-7 lg:size-9"
              priority
            />
          </motion.span>
          <span className="text-[22px] font-semibold leading-none text-white lg:text-xl">
            Irwin
          </span>
        </Link>

        {/* Menu desktop: jarak antarmenu melebar di xl */}
        <ul className="hidden items-center gap-6 lg:absolute lg:left-1/2 lg:flex lg:-translate-x-1/2 xl:gap-10">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <motion.div whileHover={{ y: -2 }} className="group relative">
                <Link
                  href={link.href}
                  className="text-base font-medium text-white/90 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                >
                  {link.label}
                </Link>
                <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-white transition-transform duration-300 group-hover:scale-x-100" />
              </motion.div>
            </li>
          ))}
        </ul>

        {/* CTA desktop */}
        <motion.div
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="hidden lg:block"
        >
          <Button
            asChild
            className="h-11 rounded-lg bg-white px-6 text-sm font-medium text-black hover:bg-white/90 xl:px-8"
          >
            <Link href="#contact">Get in Touch</Link>
          </Button>
        </motion.div>

        {/* Tombol hamburger / close (mobile & tablet) */}
        <button
          type="button"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="relative size-8 lg:hidden"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={open ? "close" : "burger"}
              initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
              transition={{ duration: 0.18 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Image
                src={
                  open
                    ? "/icons/close-button.svg"
                    : "/icons/hamburger-button.svg"
                }
                alt=""
                width={32}
                height={32}
              />
            </motion.span>
          </AnimatePresence>
        </button>
      </nav>

      {/* Panel menu mobile */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 overflow-y-auto bg-black px-4 pt-24 sm:px-6 md:px-8 lg:hidden"
          >
            <motion.ul
              variants={listVariants}
              initial="hidden"
              animate="show"
              className="flex flex-col"
            >
              {NAV_LINKS.map((link) => (
                <motion.li key={link.href} variants={itemVariants}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-base font-medium text-white transition-colors hover:text-white/70"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li variants={itemVariants} className="mt-6">
                <Button
                  asChild
                  className="h-11 w-full rounded-lg bg-white text-sm font-medium text-black hover:bg-white/90"
                >
                  <Link href="#contact" onClick={() => setOpen(false)}>
                    Get in Touch
                  </Link>
                </Button>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
