import { motion } from 'framer-motion';
import { Trophy, Sparkles } from 'lucide-react';
import Section from '../components/Section';
import { achievements } from '../data/content';

export default function Achievements() {
  return (
    <Section id="achievements" eyebrow="Achievements" title="Recognition">
      <div className="relative border-l border-[#BCD9A2]/65 pl-8">
        {achievements.map((a, i) => (
          <motion.div
            key={a.title + a.detail}
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="relative mb-8 last:mb-0"
          >
            <span className="absolute -left-[41px] grid h-7 w-7 place-items-center rounded-full bg-primary text-white shadow-[0_0_0_6px_rgba(254,255,211,0.95)]">
              <Trophy size={14} />
            </span>
            <div className="card relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(188,217,162,0.18),transparent_38%)]" />
              <div className="relative flex items-start gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-[#BCD9A2]/70 bg-white/75 text-primary shadow-[0_12px_30px_rgba(31,41,55,0.06)]">
                  <Sparkles size={18} />
                </div>
                <div className="flex-1">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#6D9E51]">Milestone 0{i + 1}</p>
                  <p className="mt-3 text-lg font-semibold tracking-[-0.03em] text-ink">{a.title}</p>
                  <p className="mt-2 text-sm text-ink/70">{a.detail}</p>
                  {a.project && <p className="mt-2 text-sm font-medium text-primary">Project: {a.project}</p>}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
