import { motion } from 'framer-motion';
import { Award, BadgeCheck } from 'lucide-react';
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
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ duration: 0.55, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="card group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(188,217,162,0.18),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(168,35,35,0.04),transparent_32%)] opacity-90 transition-opacity group-hover:opacity-100" />
            <div className="relative flex items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-[#BCD9A2]/70 bg-white/70 text-primary shadow-[0_12px_30px_rgba(31,41,55,0.06)]">
                <Award size={20} />
              </span>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <BadgeCheck size={14} className="text-[#6D9E51]" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-ink/40">Community leadership</span>
                </div>
                <p className="mt-3 text-lg font-semibold tracking-[-0.03em] text-ink">{l.role}</p>
                <p className="mt-1 text-sm text-ink/60">{l.org}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
