import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin } from 'lucide-react';
import { profile } from '../data/content';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const roles = ['Cloud Engineer', 'Systems Builder', 'Cybersecurity Enthusiast', 'Product Thinker'];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-10 sm:pb-24 sm:pt-14 lg:pb-28">
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-[-8%] top-[-6%] h-72 w-72 rounded-full bg-[#BCD9A2]/35 blur-3xl"
        animate={{ y: [0, -16, 0], x: [0, 8, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute right-[2%] top-[14%] h-56 w-56 rounded-full bg-[#A82323]/10 blur-3xl"
        animate={{ y: [0, 14, 0], x: [0, -10, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="container-x">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <motion.div variants={container} initial="hidden" animate="visible" className="max-w-4xl">
            <motion.span variants={item} className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-[#A82323]" /> Available for internships and impactful product work
            </motion.span>
            <motion.h1
              variants={item}
              className="mt-6 max-w-3xl text-5xl font-semibold leading-[0.9] tracking-[-0.06em] text-ink sm:text-7xl lg:text-[7.4rem]"
            >
              {profile.name}
            </motion.h1>
            <motion.p variants={item} className="mt-6 max-w-2xl text-base leading-relaxed text-[#1F2937]/75 sm:text-xl">
              {profile.headline}
            </motion.p>
            <motion.p variants={item} className="section-copy mt-5 max-w-2xl text-base sm:text-xl">
              {profile.subheadline}
            </motion.p>
            <motion.div variants={item} className="mt-7 flex flex-wrap gap-2.5">
              {roles.map((role) => (
                <span key={role} className="pill bg-white/70 px-4 py-2 text-[0.72rem] uppercase tracking-[0.22em] text-[#1F2937]/70">
                  {role}
                </span>
              ))}
            </motion.div>
            <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-3">
              <motion.a whileHover={{ y: -2, scale: 1.01 }} whileTap={{ scale: 0.98 }} href="#projects" className="btn-primary">
                View Projects <ArrowRight size={16} />
              </motion.a>
              <motion.a whileHover={{ y: -2, scale: 1.01 }} whileTap={{ scale: 0.98 }} href="/resume.pdf" className="btn-ghost" download>
                Download Resume <Download size={16} />
              </motion.a>
            </motion.div>
            <motion.div variants={item} className="mt-8 flex items-center gap-5">
              <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-ink/65 transition-colors hover:text-primary">
                <Github size={18} /> GitHub
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-ink/65 transition-colors hover:text-primary">
                <Linkedin size={18} /> LinkedIn
              </a>
            </motion.div>
          </motion.div>

          <motion.div variants={container} initial="hidden" animate="visible" className="relative">
            <motion.div variants={item} className="surface-strong relative overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#6D9E51]/60 to-transparent" />
              <p className="eyebrow">Operating model</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {roles.map((role, index) => (
                  <div key={role} className="rounded-[1.25rem] border border-[#BCD9A2]/60 bg-[#FEFFD3]/75 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#6D9E51]">0{index + 1}</p>
                    <p className="mt-2 text-base font-semibold text-ink">{role}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-[1.35rem] border border-[#BCD9A2]/55 bg-white/65 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#A82323]">Focus</p>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">
                  Cloud-native systems, secure automation, and product-minded delivery with a calm, high-signal execution style.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
