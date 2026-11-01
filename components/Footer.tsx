"use client";

import { motion } from "framer-motion";

/* Ganti sesuai kebutuhan */
const OWNER = "Irwin Ibrahim";
const YEAR = new Date().getFullYear();

/*
  Footer tidak punya latar sendiri: cahaya ungu berasal dari wrapper di page.tsx
  sehingga menyambung mulus dengan section Contact di atasnya.
*/
export default function Footer() {
  return (
    <footer className="text-white mt-7">
      {/* Garis pemisah selebar layar */}
      <div className="border-t border-white/10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="px-4 py-5 text-center text-xs font-light leading-4.5 text-white/60 md:py-7 md:text-sm md:leading-5.25"
        >
          © {YEAR} {OWNER}. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
}
