import { useEffect, useState } from 'react';
import { profile } from '../data/content';

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#leadership', label: 'Leadership' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState('about');
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);

    const sections = links
      .map((link) => document.querySelector(link.href))
      .filter((section): section is Element => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (visibleEntry?.target.id) {
          setActiveId(visibleEntry.target.id);
        }
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0.1 },
    );

    sections.forEach((section) => observer.observe(section));

    return () => window.removeEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4">
      <nav
        className={`container-x flex items-center justify-between rounded-full border px-4 backdrop-blur-xl transition-all duration-500 sm:px-6 ${
          scrolled
            ? 'h-14 border-[#BCD9A2]/75 bg-white/82 shadow-[0_18px_50px_rgba(31,41,55,0.08)] scale-[0.985]'
            : 'h-16 border-white/40 bg-white/60'
        }`}
      >
        <a href="#top" className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.24em] text-ink">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-[#6D9E51] tracking-normal text-[#FEFFD3]">PR</span>
          <span className="hidden sm:block">Pragati Ravi Gangoji</span>
          <span className="sm:hidden">Pragati</span>
        </a>
        <div className="hidden items-center gap-2 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              aria-current={activeId === l.href.slice(1) ? 'page' : undefined}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors hover:bg-[#BCD9A2]/25 hover:text-ink ${
                activeId === l.href.slice(1) ? 'bg-[#BCD9A2]/30 text-ink' : 'text-ink/70'
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>
        <a href={`mailto:${profile.email}`} className="btn-primary !px-5 !py-2.5 text-sm">
          Get in touch
        </a>
      </nav>
    </header>
  );
}
