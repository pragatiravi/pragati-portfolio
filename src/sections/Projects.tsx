import { motion } from 'framer-motion';
import { ArrowUpRight, Star, MonitorPlay } from 'lucide-react';
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
          whileHover={{ y: -6 }}
          className="surface-strong mb-6 overflow-hidden p-0"
        >
          <div className="grid gap-0 lg:grid-cols-[1fr_0.9fr]">
            <div className="relative overflow-hidden p-6 sm:p-8 lg:p-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(188,217,162,0.16),transparent_40%),linear-gradient(135deg,rgba(255,255,255,0.55),rgba(254,255,211,0.34))]" />
              <div className="relative flex flex-wrap items-center gap-2">
                <span className="pill bg-[#A82323] text-[#FEFFD3]">
                  <Star size={12} /> Flagship
                </span>
                <span className="pill">{featured.status}</span>
              </div>
              <div className="relative mt-6 grid gap-6 lg:grid-cols-[1fr_0.95fr] lg:items-start">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#6D9E51]">Case study 01</p>
                  <h3 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-ink sm:text-5xl">{featured.name}</h3>
                  <p className="section-copy mt-4 max-w-xl">{featured.summary}</p>
                  <p className="mt-5 max-w-xl text-base font-medium leading-relaxed text-[#A82323]">{featured.achievements}</p>
                </div>
                <motion.div
                  className="relative overflow-hidden rounded-[1.6rem] border border-[#BCD9A2]/55 bg-[#FEFFD3] shadow-[0_20px_70px_rgba(31,41,55,0.08)]"
                  initial={{ opacity: 0, y: 18, rotate: -1 }}
                  whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                  <motion.div
                    className="absolute inset-0 bg-[linear-gradient(135deg,rgba(109,158,81,0.18),rgba(255,255,255,0.02))]"
                    animate={{ opacity: [0.45, 0.72, 0.45] }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  />
                  <div className="relative aspect-[4/3] p-4 sm:p-5">
                    <div className="flex h-full flex-col overflow-hidden rounded-[1.3rem] border border-white/70 bg-[#111111]">
                      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#A82323]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#BCD9A2]" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#FEFFD3]" />
                      </div>
                      <div className="grid flex-1 gap-3 p-4 sm:grid-cols-[1fr_auto] sm:items-end">
                        <div className="rounded-[1rem] border border-white/10 bg-white/5 p-4 text-white/90 backdrop-blur-sm">
                          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#BCD9A2]">Preview</p>
                          <p className="mt-3 text-2xl font-semibold tracking-[-0.04em]">{featured.name}</p>
                          <p className="mt-2 text-sm text-white/68">Cloud-native security product with startup-grade positioning.</p>
                        </div>
                        <div className="flex justify-end">
                          <div className="grid h-28 w-28 place-items-center rounded-full border border-white/10 bg-white/8 text-white/90 shadow-[0_0_0_1px_rgba(255,255,255,0.06)]">
                            <MonitorPlay size={38} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className="relative mt-8 flex flex-wrap gap-2">
                {featured.tech.map((t) => (
                  <span key={t} className="pill px-3.5 py-1.5 text-xs text-ink/70">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="border-t border-[#BCD9A2]/45 bg-white/35 p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#6D9E51]">Product lens</p>
              <div className="mt-5 grid gap-3">
                <div className="rounded-[1.2rem] border border-white/70 bg-white/75 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A82323]">Status</p>
                  <p className="mt-2 text-sm font-medium text-ink">{featured.status}</p>
                </div>
                <div className="rounded-[1.2rem] border border-white/70 bg-white/75 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A82323]">Stack</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">Cloud-native delivery with frontend, backend, and infrastructure layers aligned.</p>
                </div>
                <div className="rounded-[1.2rem] border border-white/70 bg-white/75 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#A82323]">Outcome</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">A flagship system that reads like a startup product instead of a student project.</p>
                </div>
              </div>
              <div className="mt-6 rounded-[1.2rem] border border-[#BCD9A2]/60 bg-[#FEFFD3]/75 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#6D9E51]">Narrative</p>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">The layout now treats the project like a startup product launch rather than a résumé bullet.</p>
              </div>
            </div>
          </div>
        </motion.article>
      )}

      <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {rest.map((p, i) => (
          <motion.article
            key={p.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="card group relative flex flex-col overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(188,217,162,0.22),transparent_42%),linear-gradient(180deg,rgba(255,255,255,0.0),rgba(255,255,255,0.12))] opacity-90 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative flex items-start justify-between gap-4">
              <span className="pill bg-white/70 px-3 py-1.5 text-[11px] text-ink/55">0{i + 1}</span>
              <ArrowUpRight size={18} className="text-ink/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#6D9E51]" />
            </div>
            <div className="relative mt-4 overflow-hidden rounded-[1.2rem] border border-[#BCD9A2]/55 bg-[#FEFFD3]">
              <div className="aspect-[16/10] bg-[linear-gradient(135deg,rgba(109,158,81,0.28),rgba(254,255,211,0.65),rgba(168,35,35,0.12))]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.45),transparent_42%)]" />
              <div className="absolute inset-x-4 bottom-4 rounded-[1rem] border border-white/60 bg-white/70 px-4 py-3 backdrop-blur-md">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#6D9E51]">Preview</p>
                <p className="mt-1 text-sm font-semibold text-ink">{p.name}</p>
              </div>
            </div>
            <h3 className="relative mt-5 text-xl font-semibold tracking-[-0.03em] text-ink">{p.name}</h3>
            <p className="relative mt-3 flex-1 text-sm leading-relaxed text-ink/70">{p.summary}</p>
            <p className="relative mt-4 text-sm font-medium text-[#A82323]">{p.achievements}</p>
            <div className="relative mt-5 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span key={t} className="pill px-3 py-1 text-[11px] text-ink/70">{t}</span>
              ))}
            </div>
            <span className="relative mt-5 w-fit rounded-full border border-[#BCD9A2]/70 bg-[#FEFFD3]/75 px-3 py-1 text-[11px] font-semibold text-ink/60">
              {p.status}
            </span>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
