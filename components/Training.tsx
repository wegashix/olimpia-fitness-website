"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const directions = ["Силовые тренировки", "Кардио", "Набор массы", "Коррекция фигуры", "Питание и программы"];

export function Training() {
  return (
    <section className="section training-section" id="training">
      <div className="container">
        <SectionLabel number="02">TRAINING</SectionLabel>
        <div className="section-heading-row"><Reveal><h2>ТРЕНИРУЙСЯ<br /><span>НА РЕЗУЛЬТАТ.</span></h2></Reveal><Reveal delay={0.12}><p className="section-intro">Выбирай нагрузку под свою цель. Двигайся уверенно — остальное сделает дисциплина.</p></Reveal></div>
        <div className="training-layout">
          <Reveal className="training-image" delay={0.05}><Image src="/images/Equipment3.jpg" alt="Зона свободных весов в клубе" fill sizes="(max-width: 800px) 100vw, 34vw" /></Reveal>
          <div className="direction-list">{directions.map((item, index) => <Reveal key={item} delay={index * 0.06}><a className="direction-row" href="#contact"><span className="direction-number">0{index + 1}</span><span className="direction-name">{item}</span><ArrowUpRight className="direction-arrow" size={22} /></a></Reveal>)}</div>
        </div>
      </div>
    </section>
  );
}
