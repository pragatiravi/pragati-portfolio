import { motion } from 'framer-motion';
import Section from '../components/Section';
import { skills } from '../data/content';

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Tools I build with">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.25, delay: i * 0.04 }}
            className="card p-6 hover:-translate-y-0.5 hover:shadow-lift"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wide text-primary">{group.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((s) => (
                <span key={s} className="rounded-full border border-line bg-bg px-3 py-1 text-sm font-medium text-ink/80">
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
