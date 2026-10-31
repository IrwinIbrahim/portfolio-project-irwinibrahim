import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Edwin Anderson | Frontend Developer",
  description: "Portfolio Edwin Anderson, Frontend Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={raleway.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
