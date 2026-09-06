import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

export function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        <SectionLabel number="01" >ABOUT</SectionLabel>
        <div className="about-grid">
          <Reveal className="about-heading"><h2>БОЛЬШЕ,<br /><span>ЧЕМ ПРОСТО</span><br />ЗАЛ.</h2><div className="about-mark"><ArrowUpRight size={21} /></div></Reveal>
          <Reveal className="about-image-wrap" delay={0.12}><Image src="/images/hero2.jpg" alt="Пространство и тренажёры Olimpia Fitness Club" fill sizes="(max-width: 800px) 100vw, 46vw" /></Reveal>
          <Reveal className="about-copy" delay={0.18}><p className="lead-copy">Olimpia Fitness Club — пространство для силовых тренировок, развития физической формы и работы над собой.</p><div className="about-points"><div><strong>01</strong><span>SPORT</span></div><div><strong>02</strong><span>STRENGTH</span></div><div><strong>03</strong><span>RESULT</span></div></div></Reveal>
        </div>
      </div>
    </section>
  );
}
