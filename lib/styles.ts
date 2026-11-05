/**
 * Pembungkus konten section.
 * Padding horizontal bertingkat mengikuti breakpoint Tailwind:
 * mobile 16px -> sm 24px -> md 32px -> lg+ ikut desain Figma 1440px (120px di layar lebar).
 */
export const container =
  "mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-[clamp(40px,8.33vw,120px)]";
