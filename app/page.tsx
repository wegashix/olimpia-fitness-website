import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Equipment } from "@/components/Equipment";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Promo } from "@/components/Promo";
import { Training } from "@/components/Training";
import { FinalCta } from "@/components/FinalCta";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Training />
      <Equipment />
      <Promo />
      <Gallery />
      <FinalCta />
      <Contact />
      <Footer />
    </main>
  );
}
