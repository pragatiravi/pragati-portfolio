import { motion } from 'framer-motion';
import Section from '../components/Section';
import { skills } from '../data/content';

export default function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Tools I build with">
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {skills.map((group, i) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.55, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="card relative overflow-hidden"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#6D9E51]/60 to-transparent" />
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">{group.title}</h3>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/30">0{i + 1}</span>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.items.map((s) => (
                <span key={s} className="pill px-3.5 py-1.5 text-sm text-ink/80">
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
