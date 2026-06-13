import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import Section from '../components/Section';
import { leadership } from '../data/content';

export default function Leadership() {
  return (
    <Section id="leadership" eyebrow="Leadership" title="Leading communities">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {leadership.map((l, i) => (
          <motion.div
            key={`${l.org}-${l.role}`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            whileHover={{ y: -2 }}
            transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="card relative overflow-hidden p-5 sm:p-6 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(188,217,162,0.12),transparent_40%)] opacity-0 transition-opacity group-hover:opacity-100" />
            <div className="relative flex items-start gap-3">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-[#BCD9A2]/70 bg-white/60 text-primary shadow-[0_8px_20px_rgba(31,41,55,0.05)]">
                <Award size={18} />
              </span>
              <div className="flex-1">
                <p className="text-base font-semibold tracking-[-0.02em] text-ink">{l.role}</p>
                <p className="mt-0.5 text-xs text-ink/60 uppercase tracking-[0.2em]">{l.org}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
