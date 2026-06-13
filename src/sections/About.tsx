import { motion } from 'framer-motion';
import Section, { revealVariants } from '../components/Section';
import { about } from '../data/content';
import { profile } from '../data/content';

const portrait = '/Gemini_Generated_Image_hl3i17hl3i17hl3i.png';

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="Engineering products, end to end">
      <div className="grid gap-5 lg:grid-cols-[1fr_1.2fr] lg:items-start">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={revealVariants}
          className="surface-strong relative overflow-hidden p-3 sm:p-4 lg:p-4"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(188,217,162,0.18),transparent_40%)]" />
          <div className="relative overflow-hidden rounded-[1.3rem] border border-[#BCD9A2]/55 bg-[#FEFFD3]">
            <motion.img
              src={portrait}
              alt={profile.name}
              className="aspect-[3/4] w-full object-cover object-top"
              initial={{ scale: 1.05, y: 8 }}
              whileInView={{ scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </motion.div>

        <div className="grid gap-3">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealVariants}
            className="text-xl font-medium leading-relaxed text-ink sm:text-2xl"
          >
            {about.lead}
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={revealVariants}
            className="grid gap-3 lg:grid-cols-2"
          >
            {about.body.map((p, i) => (
              <div key={i} className="card p-4 sm:p-5 text-sm leading-relaxed text-ink/75">{p}</div>
            ))}
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
