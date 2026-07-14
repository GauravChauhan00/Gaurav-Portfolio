import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import SectionHeader from '../components/common/SectionHeader';
import { personalInfo } from '../data/personalInfo';

export default function About() {
  return (
    <section id="about" className="section-shell about section-pad">
      <SectionHeader
        eyebrow="About"
        title="A data-quality minded analyst with web development skills."
        description="Clean reporting, reliable validation, and polished digital experiences — that is the direction of this portfolio."
      />
      <div className="about__grid">
        <motion.div
          className="about__image-card"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <img src={personalInfo.profilePhoto} alt={personalInfo.shortName} />
        </motion.div>
        <motion.div
          className="about__content glass-card"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          {personalInfo.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className="about__facts">
            {personalInfo.quickFacts.map((fact) => (
              <div key={fact}>
                <CheckCircle2 size={18} />
                <span>{fact}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
