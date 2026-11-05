"use client";

const OWNER = "Irwin Ibrahim";
const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="mt-7 w-full text-white">
      <div className="w-full border-t border-white/10">
        <p
          className="
            px-4 py-5
            text-center
            text-xs font-light leading-4.5
            text-white/60
            md:py-7 md:text-sm md:leading-5.25
          "
        >
          © {YEAR} {OWNER}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
