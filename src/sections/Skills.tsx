import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
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
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ duration: 0.55, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="card group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(188,217,162,0.24),transparent_48%),radial-gradient(circle_at_bottom_left,rgba(168,35,35,0.06),transparent_36%)] opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#6D9E51]/60 to-transparent" />
            <div className="relative flex items-center justify-between gap-4">
              <h3 className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">{group.title}</h3>
              <span className="grid h-8 w-8 place-items-center rounded-full border border-[#BCD9A2]/70 bg-white/70 text-[11px] font-semibold text-ink/45">
                0{i + 1}
              </span>
            </div>
            <div className="relative mt-5 flex flex-wrap gap-2">
              {group.items.map((s) => (
                <motion.span
                  key={s}
                  whileHover={{ y: -2, scale: 1.02 }}
                  className="pill px-3.5 py-1.5 text-sm text-ink/80 shadow-[0_8px_30px_rgba(31,41,55,0.04)]"
                >
                  {s}
                </motion.span>
              ))}
            </div>
            <div className="relative mt-6 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-ink/35">
              <Sparkles size={12} className="text-primary" /> Interactive category cluster
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
