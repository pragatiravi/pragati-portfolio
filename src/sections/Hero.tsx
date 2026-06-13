import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin } from 'lucide-react';
import { profile } from '../data/content';

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.25, ease: 'easeOut' } },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-24 sm:pt-28 sm:pb-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(60% 50% at 80% 0%, rgba(188,217,162,0.45) 0%, rgba(254,255,211,0) 60%)',
        }}
      />
      <div className="container-x">
        <motion.div variants={container} initial="hidden" animate="visible" className="max-w-3xl">
          <motion.span variants={item} className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Available for internships
          </motion.span>
          <motion.h1
            variants={item}
            className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-6xl"
          >
            {profile.name}
          </motion.h1>
          <motion.p variants={item} className="mt-4 text-lg font-semibold text-primary sm:text-xl">
            {profile.headline}
          </motion.p>
          <motion.p variants={item} className="mt-5 max-w-2xl text-base leading-relaxed text-ink/70 sm:text-lg">
            {profile.subheadline}
          </motion.p>
          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn-primary">
              View Projects <ArrowRight size={16} />
            </a>
            <a href="/resume.pdf" className="btn-ghost" download>
              Download Resume <Download size={16} />
            </a>
          </motion.div>
          <motion.div variants={item} className="mt-8 flex items-center gap-5">
            <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-ink/70 hover:text-primary">
              <Github size={18} /> GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-ink/70 hover:text-primary">
              <Linkedin size={18} /> LinkedIn
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
