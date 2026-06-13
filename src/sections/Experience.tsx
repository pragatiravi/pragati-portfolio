import { motion } from 'framer-motion';
import Section from '../components/Section';
import { experience } from '../data/content';

export default function ExperienceSection() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I’ve worked">
      <div className="space-y-5">
        {experience.map((e, i) => (
          <motion.article
            key={e.company}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.25, delay: i * 0.05 }}
            className="card p-6 sm:p-8"
          >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-lg font-bold text-ink">{e.company}</h3>
                <p className="font-medium text-primary">{e.role}</p>
              </div>
              <span className="text-sm font-medium text-ink/60">{e.period}</span>
            </div>
            <ul className="mt-5 grid gap-2 sm:grid-cols-2">
              {e.highlights.map((h) => (
                <li key={h} className="flex gap-2 text-sm text-ink/75">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
                  {h}
                </li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap gap-2">
              {e.tech.map((t) => (
                <span key={t} className="rounded-md bg-bg px-2.5 py-1 text-xs font-semibold text-ink/70">{t}</span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
