import { motion } from 'framer-motion';

export default function SectionHeader({ eyebrow, title, description, align = 'left' }) {
  return (
    <motion.div
      className={`section-header section-header--${align}`}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </motion.div>
  );
}
