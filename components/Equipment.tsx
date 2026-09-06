import Image from "next/image";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./SectionLabel";

const items = ["Силовые тренажёры", "Свободные веса", "Кардио", "Тренажёры для спины", "Тренажёры для рук"];

export function Equipment() {
  return (
    <section className="section equipment-section" id="equipment">
      <div className="container"><SectionLabel number="03">EQUIPMENT</SectionLabel><div className="equipment-layout"><Reveal className="equipment-gallery"><div className="equipment-main"><Image src="/images/Equipment1.jpg" alt="Силовые тренажёры Olimpia" fill sizes="(max-width: 800px) 100vw, 42vw" /></div><div className="equipment-small"><Image src="/images/Equipment2.jpg" alt="Кардио зона Olimpia" fill sizes="(max-width: 800px) 45vw, 22vw" /></div><div className="equipment-small equipment-small-offset"><Image src="/images/Equipment3.jpg" alt="Свободные веса Olimpia" fill sizes="(max-width: 800px) 45vw, 22vw" /></div></Reveal><Reveal className="equipment-copy" delay={0.12}><h2>ЖЕЛЕЗО,<br />КОТОРОЕ <span>РАБОТАЕТ</span><br />НА ТЕБЯ.</h2><p>Профессиональная база для тех, кто приходит за прогрессом.</p><ul>{items.map(item => <li key={item}><span className="list-dot" />{item}</li>)}</ul></Reveal></div></div>
    </section>
  );
}
