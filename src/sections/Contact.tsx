import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import Section from '../components/Section';
import { profile } from '../data/content';

export default function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Let’s build something">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="surface-strong p-6 sm:p-8 lg:p-10"
      >
        <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <p className="text-balance text-2xl font-semibold tracking-[-0.04em] text-ink sm:text-3xl">
              Open to internships and collaboration in Cloud, DevOps, and Software Engineering.
            </p>
            <p className="section-copy mt-4">
              The fastest way to reach me is email. I’m happy to talk through projects, infrastructure, or ideas.
            </p>
            <a href={`mailto:${profile.email}`} className="btn-primary mt-7">
              {profile.email} <ArrowRight size={16} />
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <a href={profile.github} target="_blank" rel="noreferrer" className="card flex items-center gap-3 p-4 transition-colors hover:border-primary">
              <Github size={20} className="text-primary" /> <span className="font-medium">github.com/pragatiravi</span>
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="card flex items-center gap-3 p-4 transition-colors hover:border-primary">
              <Linkedin size={20} className="text-primary" /> <span className="font-medium">in/pragati-gangoji</span>
            </a>
            <a href={`mailto:${profile.email}`} className="card flex items-center gap-3 p-4 transition-colors hover:border-primary">
              <Mail size={20} className="text-primary" /> <span className="font-medium">{profile.email}</span>
            </a>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
