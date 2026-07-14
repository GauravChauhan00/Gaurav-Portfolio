import { motion } from 'framer-motion';
import EducationCard from '../components/cards/EducationCard';
import SectionHeader from '../components/common/SectionHeader';
import { education } from '../data/education';

export default function Education() {
  return (
    <section id="education" className="section-shell section-pad">
      <SectionHeader eyebrow="Education" title="Academic foundation" description="Engineering and CBSE academic background presented in a clean timeline format." />
      <motion.div className="education-grid" initial="hidden" whileInView="visible" viewport={{ once: true }}>
        {education.map((item, index) => (
          <motion.div key={`${item.degree}-${index}`} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }}>
            <EducationCard item={item} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
