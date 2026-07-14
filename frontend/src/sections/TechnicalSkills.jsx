import { motion } from 'framer-motion';
import SkillCard from '../components/cards/SkillCard';
import SectionHeader from '../components/common/SectionHeader';
import { technicalSkills } from '../data/skills';

export default function TechnicalSkills() {
  return (
    <section id="skills" className="section-shell section-pad">
      <SectionHeader
        eyebrow="Technical Skills"
        title="Analytics, QA validation, and web development stack"
        description="Grouped by the way recruiters and clients usually evaluate practical project skills."
      />
      <div className="skills-grid">
        {technicalSkills.map((group, index) => (
          <motion.div key={group.category} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }}>
            <SkillCard group={group} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
