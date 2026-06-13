import { motion } from 'framer-motion';
import Section, { revealVariants } from '../components/Section';
import { about } from '../data/content';

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="Engineering products, end to end">
      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={revealVariants}
          className="text-xl font-medium leading-relaxed text-ink"
        >
          {about.lead}
        </motion.p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={revealVariants}
          className="space-y-4 text-base leading-relaxed text-ink/70"
        >
          {about.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
