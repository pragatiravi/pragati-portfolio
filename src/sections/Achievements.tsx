import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';
import Section from '../components/Section';
import { achievements } from '../data/content';

export default function Achievements() {
  return (
    <Section id="achievements" eyebrow="Achievements" title="Recognition">
      <div className="relative border-l border-[#BCD9A2]/60 pl-6 sm:pl-8">
        {achievements.map((a, i) => (
          <motion.div
            key={a.title + a.detail}
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="relative mb-5 last:mb-0"
          >
            <span className="absolute -left-[29px] grid h-6 w-6 place-items-center rounded-full bg-primary text-white shadow-[0_0_0_4px_rgba(254,255,211,0.95)]">
              <Trophy size={12} />
            </span>
            <div className="card relative overflow-hidden p-4 sm:p-5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(188,217,162,0.12),transparent_35%)]" />
              <div className="relative">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#6D9E51]">Milestone 0{i + 1}</p>
                <p className="mt-2 text-base font-semibold tracking-[-0.02em] text-ink">{a.title}</p>
                <p className="mt-1 text-xs text-ink/70">{a.detail}</p>
                {a.project && <p className="mt-1.5 text-xs font-medium text-primary">Project: {a.project}</p>}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
