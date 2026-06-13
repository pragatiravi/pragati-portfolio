import { useEffect, useState } from 'react';
import { profile } from '../data/content';

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled ? 'border-b border-line bg-bg/85 backdrop-blur' : 'border-b border-transparent'
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between">
        <a href="#top" className="font-bold tracking-tight text-ink">
          Pragati<span className="text-primary">.</span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-ink/70 transition-colors hover:text-primary">
              {l.label}
            </a>
          ))}
        </div>
        <a href={`mailto:${profile.email}`} className="btn-primary !px-4 !py-2 text-sm">
          Get in touch
        </a>
      </nav>
    </header>
  );
}
