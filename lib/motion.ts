import type { Variants } from "framer-motion";

/** Muncul dari bawah. `custom` = urutan elemen (untuk jeda bertahap). */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

/** Props siap pakai untuk scroll reveal: <motion.div variants={fadeUp} {...reveal} /> */
export const reveal = {
  initial: "hidden",
  whileInView: "show",
  viewport: { once: true, amount: 0.2 },
} as const;

/** Kartu yang menampilkan anak-anaknya (slideIn) satu per satu. */
export const staggerCard: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", staggerChildren: 0.07, delayChildren: 0.2 },
  },
};

/** Item daftar yang masuk dari kiri (dipakai di dalam staggerCard). */
export const slideIn: Variants = {
  hidden: { opacity: 0, x: -12 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
};
