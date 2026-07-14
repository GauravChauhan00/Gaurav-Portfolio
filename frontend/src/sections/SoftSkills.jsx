import { motion } from 'framer-motion';
import SectionHeader from '../components/common/SectionHeader';
import { softSkills } from '../data/skills';

export default function SoftSkills() {
  return (
    <section className="section-shell section-pad soft-skills">
      <SectionHeader eyebrow="Soft Skills" title="Professional habits that support technical work" description="Concise communication, detail orientation, and structured problem-solving for team environments." />
      <div className="soft-skill-cloud">
        {softSkills.map((skill, index) => (
          <motion.span key={skill} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.035 }}>
            {skill}
          </motion.span>
        ))}
      </div>
    </section>
  );
}
