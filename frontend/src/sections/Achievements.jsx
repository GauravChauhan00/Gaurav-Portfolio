import { motion } from 'framer-motion';
import Badge from '../components/common/Badge';
import SectionHeader from '../components/common/SectionHeader';
import { achievements } from '../data/achievements';

export default function Achievements() {
  return (
    <section id="achievements" className="section-shell section-pad achievements">
      <SectionHeader
        eyebrow="Achievements"
        title="Verified milestones and learning highlights"
        description="No fake numbers or exaggerated claims — only real, editable profile milestones."
      />
      <div className="achievement-grid">
        {achievements.map((achievement, index) => (
          <motion.article key={achievement.title} className="achievement-card" initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.06 }}>
            <Badge tone="accent">{achievement.category}</Badge>
            <h3>{achievement.title}</h3>
            <p>{achievement.description}</p>
            <span>{achievement.year}</span>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
