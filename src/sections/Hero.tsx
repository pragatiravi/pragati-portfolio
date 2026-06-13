import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin } from 'lucide-react';
import { profile } from '../data/content';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const roles = ['Cloud Engineer', 'Systems Builder', 'Cybersecurity Enthusiast', 'Product Thinker'];
const portrait = '/Gemini_Generated_Image_hl3i17hl3i17hl3i.png';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pb-6 pt-8 sm:pb-8 sm:pt-10 lg:pb-12">
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
        <div className="grid items-center gap-6 lg:grid-cols-[1fr_0.35fr] lg:gap-10">
          <motion.div variants={container} initial="hidden" animate="visible" className="max-w-3xl">
            <motion.span variants={item} className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-[#A82323]" /> Available for internships and impactful product work
            </motion.span>
            <motion.h1
              variants={item}
              className="mt-4 text-5xl font-semibold leading-[0.88] tracking-[-0.07em] text-ink sm:text-6xl lg:text-7xl"
            >
              {profile.name}
            </motion.h1>
            <motion.p variants={item} className="mt-4 max-w-2xl text-base leading-relaxed text-[#1F2937]/76 sm:text-lg">
              {profile.headline}
            </motion.p>
            <motion.p variants={item} className="section-copy mt-3 max-w-2xl text-sm sm:text-base">
              {profile.subheadline}
            </motion.p>
            <motion.div variants={item} className="mt-5 flex flex-wrap gap-2">
              {roles.map((role) => (
                <span key={role} className="pill bg-white/70 px-3 py-1.5 text-[0.65rem] uppercase tracking-[0.2em] text-[#1F2937]/70">
                  {role}
                </span>
              ))}
            </motion.div>
            <motion.div variants={item} className="mt-6 flex flex-wrap items-center gap-2.5">
              <motion.a whileHover={{ y: -1, scale: 1.01 }} whileTap={{ scale: 0.98 }} href="#projects" className="btn-primary">
                View Projects <ArrowRight size={16} />
              </motion.a>
              <motion.a whileHover={{ y: -1, scale: 1.01 }} whileTap={{ scale: 0.98 }} href="/resume.pdf" className="btn-ghost" download>
                Download Resume <Download size={16} />
              </motion.a>
            </motion.div>
            <motion.div variants={item} className="mt-4 flex items-center gap-4">
              <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-sm font-medium text-ink/65 transition-colors hover:text-primary">
                <Github size={16} /> GitHub
              </a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-sm font-medium text-ink/65 transition-colors hover:text-primary">
                <Linkedin size={16} /> LinkedIn
              </a>
            </motion.div>
          </motion.div>

          <motion.div variants={item} className="hidden lg:block">
            <div className="relative overflow-hidden rounded-[1.4rem] border border-[#BCD9A2]/60 bg-white/70 p-3 shadow-[0_12px_40px_rgba(31,41,55,0.08)] backdrop-blur-md">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(188,217,162,0.16),transparent_40%)]" />
              <div className="relative overflow-hidden rounded-[1.2rem] border border-[#BCD9A2]/70 bg-[#FEFFD3]">
                <motion.img
                  src={portrait}
                  alt={profile.name}
                  className="aspect-[3/4] w-full object-cover object-top"
                  initial={{ scale: 1.05 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
