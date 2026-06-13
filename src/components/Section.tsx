import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface Props {
  id: string;
  eyebrow?: string;
  title?: string;
  children: ReactNode;
  className?: string;
}

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export default function Section({ id, eyebrow, title, children, className = '' }: Props) {
  return (
    <section id={id} className={`relative overflow-hidden py-24 sm:py-32 ${className}`}>
      <div className="container-x">
        {(eyebrow || title) && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={reveal}
            className="mb-12 max-w-3xl sm:mb-16"
          >
            {eyebrow && <span className="eyebrow">{eyebrow}</span>}
            {title && <h2 className="section-title mt-4">{title}</h2>}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}

export const revealVariants = reveal;
