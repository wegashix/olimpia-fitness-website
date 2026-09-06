import Image from "next/image";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const photos = [
  ["/images/Training1.jpg", "01", "RESULT"],
  ["/images/hero2.jpg", "02", "FOCUS"],
  ["/images/Equipment2.jpg", "03", "ENERGY"],
  ["/images/Training3.jpg", "04", "COMMUNITY"],
  ["/images/Equipment1.jpg", "05", "STRENGTH"],
];

export function Gallery() {
  return <section className="section gallery-section" id="atmosphere"><div className="container"><SectionLabel number="04">ATMOSPHERE</SectionLabel><div className="gallery-heading"><Reveal><h2>ВНУТРИ<br /><span>OLIMPIA.</span></h2></Reveal><Reveal delay={0.12}><p>Пространство, в котором тренировка становится привычкой.</p></Reveal></div><div className="masonry-gallery">{photos.map(([src, number, label], i) => <Reveal key={src} delay={i * 0.05} className={`gallery-item gallery-item-${i + 1}`}><Image src={src} alt={`Olimpia Fitness Club — ${label.toLowerCase()}`} fill sizes="(max-width: 800px) 100vw, 33vw" /><div className="gallery-shade" /><div className="gallery-meta"><span>{number}</span><span>{label}</span></div></Reveal>)}</div></div></section>;
}
