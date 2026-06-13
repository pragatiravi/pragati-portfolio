import { motion } from 'framer-motion';
import Section from '../components/Section';
import { experience } from '../data/content';

export default function ExperienceSection() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I’ve worked">
      <div className="relative space-y-6 pl-8 sm:pl-10">
        <div className="timeline-line left-3 sm:left-4" />
        {experience.map((e, i) => (
          <motion.article
            key={e.company}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="card relative"
          >
            <span className="absolute -left-11 top-8 grid h-6 w-6 place-items-center rounded-full border-4 border-[#FEFFD3] bg-[#6D9E51] shadow-[0_0_0_1px_rgba(109,158,81,0.22)]" />
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-xl font-semibold tracking-[-0.03em] text-ink">{e.company}</h3>
                <p className="mt-1 font-medium text-primary">{e.role}</p>
              </div>
              <span className="pill self-start sm:self-auto">{e.period}</span>
            </div>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {e.highlights.map((h) => (
                <li key={h} className="flex gap-2 text-sm text-ink/75">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                  {h}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              {e.tech.map((t) => (
                <span key={t} className="pill px-3 py-1 text-[11px] text-ink/70">{t}</span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
