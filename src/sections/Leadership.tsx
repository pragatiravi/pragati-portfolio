import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import Section from '../components/Section';
import { leadership } from '../data/content';

export default function Leadership() {
  return (
    <Section id="leadership" eyebrow="Leadership" title="Leading communities">
      <div className="grid gap-5 sm:grid-cols-3">
        {leadership.map((l, i) => (
          <motion.div
            key={`${l.org}-${l.role}`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.25, delay: i * 0.05 }}
            className="card flex items-start gap-4 p-6"
          >
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-secondary/60 text-primary">
              <Award size={20} />
            </span>
            <div>
              <p className="font-bold text-ink">{l.role}</p>
              <p className="text-sm text-ink/60">{l.org}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
