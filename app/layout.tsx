import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";

const bebas = Bebas_Neue({ subsets: ["latin"], weight: "400", variable: "--font-display" });
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
    <html lang="ru" className={`${bebas.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
