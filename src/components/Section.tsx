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
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.25, ease: 'easeOut' } },
};

export default function Section({ id, eyebrow, title, children, className = '' }: Props) {
  return (
    <section id={id} className={`py-20 sm:py-28 ${className}`}>
      <div className="container-x">
        {(eyebrow || title) && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={reveal}
            className="mb-10 sm:mb-14"
          >
            {eyebrow && <span className="eyebrow">{eyebrow}</span>}
            {title && <h2 className="section-title mt-3">{title}</h2>}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}

export const revealVariants = reveal;
