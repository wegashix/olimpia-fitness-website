"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  ["О клубе", "about"],
  ["Направления", "training"],
  ["Оборудование", "equipment"],
  ["Галерея", "atmosphere"],
  ["Контакты", "contact"],
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`site-nav ${scrolled ? "site-nav-scrolled" : ""}`}>
      <a href="#top" className="brand" aria-label="Olimpia Fitness Club — наверх">
        <span>OLIMPIA</span>
        <small>FITNESS CLUB</small>
      </a>
      <nav className={open ? "nav-links nav-links-open" : "nav-links"} aria-label="Основная навигация">
        {links.map(([label, id]) => <a href={`#${id}`} onClick={close} key={id}>{label}</a>)}
        <a href="#contact" onClick={close} className="nav-cta">Записаться <span>↗</span></a>
      </nav>
      <button className="menu-button" type="button" aria-label={open ? "Закрыть меню" : "Открыть меню"} aria-expanded={open} onClick={() => setOpen(!open)}>
        {open ? <X size={23} /> : <Menu size={23} />}
      </button>
    </header>
  );
}
