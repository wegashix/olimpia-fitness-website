"use client";

import Image from "next/image";
import { ArrowDown, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="hero" id="top">
      <motion.div className="hero-image" initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.1, ease: "easeOut" }}>
        <Image src="/images/hero1.jpg" alt="Тренажёрный зал Olimpia Fitness Club" fill priority sizes="(max-width: 800px) 100vw, 58vw" />
      </motion.div>
      <div className="hero-overlay" />
      <div className="hero-grid container">
        <div className="hero-copy">
          <motion.p className="eyebrow" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.55 }}>OLIMPIA FITNESS CLUB <span>//</span> TRAIN HARD</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.27, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>TRAIN<br /><span>HARD.</span><br />BUILD<br /><em>YOURSELF.</em></motion.h1>
          <motion.p className="hero-description" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.42, duration: 0.6 }}>Тренируйся на результат. Развивай силу. Работай над собой.</motion.p>
          <motion.div className="hero-actions" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.56, duration: 0.6 }}>
            <a className="button button-primary" href="#contact">Начать тренировку <ArrowRight size={17} /></a>
            <a className="button button-secondary" href="#about">Узнать больше</a>
          </motion.div>
        </div>
        <div className="hero-side-note"><span>01</span><span className="vertical-rule" /><span>DISCIPLINE</span></div>
        <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={16} /></a>
      </div>
    </section>
  );
}
