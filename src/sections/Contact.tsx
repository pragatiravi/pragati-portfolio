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
        className="surface-strong overflow-hidden p-0"
      >
        <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="relative overflow-hidden p-6 sm:p-8 lg:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(188,217,162,0.22),transparent_45%),linear-gradient(135deg,rgba(255,255,255,0.45),rgba(254,255,211,0.25))]" />
            <div className="relative max-w-2xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#6D9E51]">Final call</p>
              <p className="mt-4 text-balance text-3xl font-semibold tracking-[-0.05em] text-ink sm:text-5xl lg:text-[4.3rem]">
                Open to internships and collaboration in Cloud, DevOps, and Software Engineering.
              </p>
              <p className="section-copy mt-5 max-w-xl">
                The fastest way to reach me is email. I’m happy to talk through projects, infrastructure, or ideas.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={`mailto:${profile.email}`} className="btn-primary">
                  {profile.email} <ArrowRight size={16} />
                </a>
                <a href="#top" className="btn-ghost">
                  Back to top
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-[#BCD9A2]/45 bg-white/35 p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
            <div className="grid gap-3">
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
            <div className="mt-6 rounded-[1.2rem] border border-[#BCD9A2]/60 bg-[#FEFFD3]/75 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#A82323]">What happens next</p>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">A direct reply, a focused conversation, and a clear path to shipping.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
