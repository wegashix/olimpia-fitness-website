import { ArrowUpRight, Instagram, Send, Phone } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

export function Contact() {
  return <section className="section contact-section" id="contact"><div className="container"><SectionLabel number="05">CONTACT</SectionLabel><div className="contact-layout"><Reveal><h2>НА СВЯЗИ<br /><span>С OLIMPIA.</span></h2><p className="contact-note">Уточнить детали и записаться на тренировку можно напрямую.</p></Reveal><Reveal className="contact-details" delay={0.12}><a className="phone-link" href="tel:+998903249090"><Phone size={18} />+998 90 324 90 90</a><div className="social-links"><a href="https://www.instagram.com/olimpia_fitness_club_/" target="_blank" rel="noreferrer"><Instagram size={19} /> Instagram <ArrowUpRight size={16} /></a><a href="https://t.me/+t4oMLldWHtE1MzAy" target="_blank" rel="noreferrer"><Send size={18} /> Telegram <ArrowUpRight size={16} /></a></div><div className="contact-pending"><span>АДРЕС</span><strong>Уточняется</strong></div></Reveal></div></div></section>;
}
