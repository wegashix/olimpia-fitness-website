import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function FinalCta() {
  return <section className="final-cta"><div className="container"><Reveal><p className="eyebrow">READY WHEN YOU ARE <span>//</span> OLIMPIA</p><h2>ТЫ ГОТОВ<br /><span>НАЧАТЬ?</span></h2><p className="final-copy">Первый шаг — просто прийти.</p><a className="button button-primary" href="#contact">Записаться <ArrowRight size={18} /></a></Reveal></div></section>;
}
