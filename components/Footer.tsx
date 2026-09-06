import { Instagram, Send } from "lucide-react";

export function Footer() {
  return <footer className="footer"><div className="container footer-inner"><a href="#top" className="brand"><span>OLIMPIA</span><small>FITNESS CLUB</small></a><div className="footer-social"><a href="https://www.instagram.com/olimpia_fitness_club_/" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={18} /></a><a href="https://t.me/+t4oMLldWHtE1MzAy" target="_blank" rel="noreferrer" aria-label="Telegram"><Send size={18} /></a></div><p>© 2026 OLIMPIA FITNESS CLUB</p></div></footer>;
}
