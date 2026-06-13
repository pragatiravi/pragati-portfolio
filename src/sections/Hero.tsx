import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Sparkles } from 'lucide-react';
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
const portrait = '/Gemini_Generated_Image_hl3i17hl3i17hl3i.png';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-10 pt-8 sm:pb-14 sm:pt-10 lg:pb-18">
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
        <div className="grid items-end gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
          <motion.div variants={container} initial="hidden" animate="visible" className="order-2 lg:order-1">
            <motion.div variants={item} className="relative overflow-hidden rounded-[2rem] border border-[#BCD9A2]/60 bg-white/55 p-4 shadow-[0_24px_90px_rgba(31,41,55,0.12)] backdrop-blur-xl sm:p-5">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#6D9E51]/60 to-transparent" />
              <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
                <div className="relative overflow-hidden rounded-[1.6rem] border border-[#BCD9A2]/70 bg-[#FEFFD3]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(188,217,162,0.24),transparent_45%),radial-gradient(circle_at_80%_80%,rgba(168,35,35,0.08),transparent_35%)]" />
                  <motion.div
                    className="relative aspect-[4/5] w-full"
                    initial={{ opacity: 0, y: 24, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <motion.img
                      src={portrait}
                      alt={profile.name}
                      className="h-full w-full object-cover object-top"
                      initial={{ scale: 1.08 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/15 via-transparent to-transparent" />
                    <motion.div
                      aria-hidden
                      className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/78 px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-ink shadow-[0_8px_24px_rgba(31,41,55,0.08)] backdrop-blur-md"
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
                    >
                      <Sparkles size={12} className="text-primary" /> Founder-grade focus
                    </motion.div>
                  </motion.div>
                </div>

                <div className="grid gap-3 sm:w-56">
                  {roles.map((role, index) => (
                    <motion.div
                      key={role}
                      variants={item}
                      className="rounded-[1.2rem] border border-[#BCD9A2]/60 bg-white/70 p-4 shadow-[0_10px_30px_rgba(31,41,55,0.05)] backdrop-blur-sm"
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#6D9E51]">0{index + 1}</p>
                      <p className="mt-2 text-sm font-semibold text-ink">{role}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div variants={container} initial="hidden" animate="visible" className="order-1 max-w-4xl lg:order-2 lg:pt-8">
            <motion.span variants={item} className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-[#A82323]" /> Available for internships and impactful product work
            </motion.span>
            <motion.h1
              variants={item}
              className="mt-5 max-w-3xl text-5xl font-semibold leading-[0.88] tracking-[-0.07em] text-ink sm:text-7xl lg:text-[7.1rem]"
            >
              {profile.name}
            </motion.h1>
            <motion.p variants={item} className="mt-5 max-w-2xl text-base leading-relaxed text-[#1F2937]/76 sm:text-xl">
              {profile.headline}
            </motion.p>
            <motion.p variants={item} className="section-copy mt-4 max-w-2xl text-base sm:text-xl">
              {profile.subheadline}
            </motion.p>
            <motion.div variants={item} className="mt-6 flex flex-wrap gap-2.5">
              {roles.map((role) => (
                <span key={role} className="pill bg-white/70 px-4 py-2 text-[0.72rem] uppercase tracking-[0.22em] text-[#1F2937]/70">
                  {role}
                </span>
              ))}
            </motion.div>
            <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
              <motion.a whileHover={{ y: -2, scale: 1.01 }} whileTap={{ scale: 0.98 }} href="#projects" className="btn-primary">
                View Projects <ArrowRight size={16} />
              </motion.a>
              <motion.a whileHover={{ y: -2, scale: 1.01 }} whileTap={{ scale: 0.98 }} href="/resume.pdf" className="btn-ghost" download>
                Download Resume <Download size={16} />
              </motion.a>
            </motion.div>
            <motion.div variants={item} className="mt-6 flex items-center gap-5">
              <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-ink/65 transition-colors hover:text-primary">
                <Github size={18} /> GitHub
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-ink/65 transition-colors hover:text-primary">
                <Linkedin size={18} /> LinkedIn
              </a>
            </motion.div>
            <motion.div variants={item} className="mt-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.26em] text-ink/40">
              <span className="h-px w-10 bg-gradient-to-r from-[#6D9E51] to-transparent" />
              Scroll to explore
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
