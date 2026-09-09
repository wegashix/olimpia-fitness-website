import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";

const oswald = Oswald({ subsets: ["cyrillic", "latin"], weight: ["500", "600", "700"], variable: "--font-display" });
const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "Olimpia Fitness Club — Fitness & Strength",
  description: "Olimpia Fitness Club — тренажёрный зал для силовых тренировок, развития физической формы и работы над собой.",
  openGraph: {
    title: "Olimpia Fitness Club — Fitness & Strength",
    description: "Train hard. Build yourself.",
    type: "website",
    images: [{ url: "/images/hero1.jpg", width: 1080, height: 817, alt: "Olimpia Fitness Club gym floor" }],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={`${oswald.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
