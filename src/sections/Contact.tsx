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
        transition={{ duration: 0.25 }}
        className="card p-8 sm:p-12"
      >
        <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <p className="text-xl font-semibold text-ink">
              Open to internships and collaboration in Cloud, DevOps, and Software Engineering.
            </p>
            <p className="mt-3 text-ink/70">
              The fastest way to reach me is email. I’m happy to talk through projects, infrastructure, or ideas.
            </p>
            <a href={`mailto:${profile.email}`} className="btn-primary mt-6">
              {profile.email} <ArrowRight size={16} />
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-xl border border-line p-4 transition-colors hover:border-primary">
              <Github size={20} className="text-primary" /> <span className="font-medium">github.com/pragatiravi</span>
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-xl border border-line p-4 transition-colors hover:border-primary">
              <Linkedin size={20} className="text-primary" /> <span className="font-medium">in/pragati-gangoji</span>
            </a>
            <a href={`mailto:${profile.email}`} className="flex items-center gap-3 rounded-xl border border-line p-4 transition-colors hover:border-primary">
              <Mail size={20} className="text-primary" /> <span className="font-medium">{profile.email}</span>
            </a>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
