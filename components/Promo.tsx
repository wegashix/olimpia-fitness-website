import { ArrowUpRight, Instagram } from "lucide-react";
import { Reveal } from "./Reveal";

export function Promo() {
  return <section className="promo-section"><div className="container"><Reveal className="promo-card"><div className="promo-kicker"><span>LIMITED OFFER</span><span>OLIMPIA / 2026</span></div><div className="promo-content"><div className="promo-discount">-10<small>%</small></div><div><h2>СКИДКА НА<br /><span>МЕСЯЧНЫЙ<br />АБОНЕМЕНТ</span></h2><p>При подписке на Instagram клуба и подтверждении этого администратору.</p><a href="https://www.instagram.com/olimpia_fitness_club_/" target="_blank" rel="noreferrer" className="button button-dark">Получить скидку <ArrowUpRight size={18} /></a></div></div><div className="promo-stamp"><Instagram size={18} /><span>FOLLOW<br />THE WORK</span></div></Reveal></div></section>;
}
