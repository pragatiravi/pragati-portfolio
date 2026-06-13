import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Section, { revealVariants } from '../components/Section';
import { about } from '../data/content';
import { profile } from '../data/content';

const portrait = '/Gemini_Generated_Image_hl3i17hl3i17hl3i.png';

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="Engineering products, end to end">
      <div className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={revealVariants}
          className="surface-strong relative overflow-hidden p-4 sm:p-5"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(188,217,162,0.24),transparent_45%),radial-gradient(circle_at_80%_10%,rgba(168,35,35,0.06),transparent_30%)]" />
          <div className="relative overflow-hidden rounded-[1.5rem] border border-[#BCD9A2]/55 bg-[#FEFFD3]">
            <motion.img
              src={portrait}
              alt={profile.name}
              className="aspect-[4/5] w-full object-cover object-top"
              initial={{ scale: 1.06, y: 10 }}
              whileInView={{ scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
          <div className="relative mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-[1.2rem] border border-[#BCD9A2]/60 bg-white/72 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#6D9E51]">Portrait cue</p>
              <p className="mt-2 text-sm text-ink/70">Editorial framing that mirrors the founder-led feel of the reference.</p>
            </div>
            <div className="rounded-[1.2rem] border border-[#BCD9A2]/60 bg-white/72 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#A82323]">Signals</p>
              <p className="mt-2 text-sm text-ink/70">Cloud, systems, cybersecurity, product thinking.</p>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealVariants}
            className="surface-strong"
          >
            <p className="text-balance text-xl font-medium leading-relaxed text-ink sm:text-2xl lg:text-[1.7rem]">
              {about.lead}
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealVariants}
            className="grid gap-4 lg:grid-cols-2"
          >
            {about.body.map((p, index) => (
              <div key={index} className="card relative overflow-hidden p-6 sm:p-7">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(188,217,162,0.18),transparent_42%)]" />
                <p className="relative text-base leading-relaxed text-ink/75">{p}</p>
                <div className="relative mt-5 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-ink/35">
                  <Sparkles size={12} className="text-primary" /> {index === 0 ? 'Systems and automation' : 'Secure product direction'}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealVariants}
            className="flex flex-wrap items-center justify-between gap-4 rounded-[1.5rem] border border-[#BCD9A2]/60 bg-white/60 px-5 py-4 backdrop-blur-xl"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#6D9E51]">Working style</p>
              <p className="mt-1 text-sm text-ink/70">Calm execution, product thinking, and systems-first delivery.</p>
            </div>
            <a href="#projects" className="btn-ghost">
              Explore work <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
