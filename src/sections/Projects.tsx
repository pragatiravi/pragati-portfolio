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
          transition={{ duration: 0.25 }}
          className="card mb-5 overflow-hidden border-primary/30 p-7 sm:p-9"
          style={{ background: 'linear-gradient(135deg, #FFFFFF 0%, #F4FAEE 100%)' }}
        >
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white">
              <Star size={12} /> Flagship
            </span>
            <span className="rounded-full border border-line bg-card px-3 py-1 text-xs font-semibold text-ink/70">
              {featured.status}
            </span>
          </div>
          <h3 className="mt-4 text-2xl font-bold text-ink sm:text-3xl">{featured.name}</h3>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink/75">{featured.summary}</p>
          <p className="mt-3 max-w-2xl text-sm font-medium text-primary">{featured.achievements}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {featured.tech.map((t) => (
              <span key={t} className="rounded-md bg-bg px-2.5 py-1 text-xs font-semibold text-ink/70">{t}</span>
            ))}
          </div>
        </motion.article>
      )}

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((p, i) => (
          <motion.article
            key={p.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.25, delay: i * 0.04 }}
            className="card group flex flex-col p-6 hover:-translate-y-0.5 hover:shadow-lift"
          >
            <div className="flex items-start justify-between">
              <h3 className="text-lg font-bold text-ink">{p.name}</h3>
              <ArrowUpRight size={18} className="text-ink/30 transition-colors group-hover:text-primary" />
            </div>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/70">{p.summary}</p>
            <p className="mt-3 text-xs font-medium text-primary">{p.achievements}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {p.tech.map((t) => (
                <span key={t} className="rounded bg-bg px-2 py-0.5 text-[11px] font-semibold text-ink/65">{t}</span>
              ))}
            </div>
            <span className="mt-4 w-fit rounded-full border border-line px-2.5 py-0.5 text-[11px] font-semibold text-ink/55">
              {p.status}
            </span>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
