import { motion } from 'framer-motion';
import { ArrowUpRight, Star } from 'lucide-react';
import Section from '../components/Section';
import { projects } from '../data/content';

export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <Section id="projects" eyebrow="Featured Projects" title="Selected work">
      {featured && (
        <motion.article
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="surface-strong mb-6 overflow-hidden p-0"
        >
          <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.08fr_0.92fr] lg:p-10">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="pill bg-[#A82323] text-[#FEFFD3]">
                  <Star size={12} /> Flagship
                </span>
                <span className="pill">{featured.status}</span>
              </div>
              <div className="mt-6 flex items-start gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#6D9E51]/12 text-[#6D9E51]">
                  <Star size={20} />
                </div>
                <div>
                  <h3 className="text-3xl font-semibold tracking-[-0.04em] text-ink sm:text-4xl">{featured.name}</h3>
                  <p className="section-copy mt-3 max-w-2xl">{featured.summary}</p>
                </div>
              </div>
              <p className="mt-6 max-w-2xl text-lg font-medium leading-relaxed text-[#A82323]">{featured.achievements}</p>
              <div className="mt-8 flex flex-wrap gap-2">
                {featured.tech.map((t) => (
                  <span key={t} className="pill px-3.5 py-1.5 text-xs text-ink/70">{t}</span>
                ))}
              </div>
            </div>
            <div className="rounded-[1.45rem] border border-[#BCD9A2]/60 bg-[#FEFFD3]/70 p-5 sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#6D9E51]">Product lens</p>
              <div className="mt-5 grid gap-3">
                <div className="rounded-[1.1rem] border border-white/70 bg-white/75 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A82323]">Status</p>
                  <p className="mt-2 text-sm font-medium text-ink">{featured.status}</p>
                </div>
                <div className="rounded-[1.1rem] border border-white/70 bg-white/75 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A82323]">Stack</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">Cloud-native delivery with frontend, backend, and infrastructure layers aligned.</p>
                </div>
                <div className="rounded-[1.1rem] border border-white/70 bg-white/75 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A82323]">Outcome</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">A flagship system that reads like a startup product instead of a student project.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.article>
      )}

      <div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {rest.map((p, i) => (
          <motion.article
            key={p.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.55, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="card group relative flex flex-col overflow-hidden"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#6D9E51]/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="flex items-start justify-between gap-4">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#6D9E51]">0{i + 1}</span>
              <ArrowUpRight size={18} className="text-ink/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#6D9E51]" />
            </div>
            <h3 className="mt-6 text-xl font-semibold tracking-[-0.03em] text-ink">{p.name}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/70">{p.summary}</p>
            <p className="mt-4 text-sm font-medium text-[#A82323]">{p.achievements}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span key={t} className="pill px-3 py-1 text-[11px] text-ink/70">{t}</span>
              ))}
            </div>
            <span className="mt-5 w-fit rounded-full border border-[#BCD9A2]/70 bg-[#FEFFD3]/75 px-3 py-1 text-[11px] font-semibold text-ink/60">
              {p.status}
            </span>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
