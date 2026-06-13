import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';
import Section from '../components/Section';
import { achievements } from '../data/content';

export default function Achievements() {
  return (
    <Section id="achievements" eyebrow="Achievements" title="Recognition">
      <div className="relative border-l border-line pl-8">
        {achievements.map((a, i) => (
          <motion.div
            key={a.title + a.detail}
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.25, delay: i * 0.05 }}
            className="relative mb-8 last:mb-0"
          >
            <span className="absolute -left-[41px] grid h-7 w-7 place-items-center rounded-full bg-primary text-white">
              <Trophy size={14} />
            </span>
            <p className="text-lg font-bold text-ink">{a.title}</p>
            <p className="text-sm text-ink/70">{a.detail}</p>
            {a.project && <p className="mt-1 text-sm font-medium text-primary">Project: {a.project}</p>}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
