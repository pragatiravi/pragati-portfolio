import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import Section from '../components/Section';
import { leadership } from '../data/content';

export default function Leadership() {
  return (
    <Section id="leadership" eyebrow="Leadership" title="Leading communities">
      <div className="grid gap-5 md:grid-cols-3">
        {leadership.map((l, i) => (
          <motion.div
            key={`${l.org}-${l.role}`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.55, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="card flex items-start gap-4"
          >
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-secondary/60 text-primary">
              <Award size={20} />
            </span>
            <div>
              <p className="text-lg font-semibold tracking-[-0.03em] text-ink">{l.role}</p>
              <p className="mt-1 text-sm text-ink/60">{l.org}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
