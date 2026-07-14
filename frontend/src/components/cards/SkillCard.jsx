import { BarChart3, Database, Globe, Cpu, CheckSquare, Wrench } from 'lucide-react';

const categoryIcons = {
  'Analytics & BI': BarChart3,
  'Database & Programming': Database,
  'Web Development': Globe,
  'Backend & APIs': Cpu,
  'QA & Data Quality': CheckSquare,
  'Tools & Workflow': Wrench
};

export default function SkillCard({ group }) {
  const IconComponent = categoryIcons[group.category] || Database;

  return (
    <article className="skill-card">
      <div className="skill-card__header">
        <div className="skill-card__icon-wrapper">
          <IconComponent size={18} />
        </div>
        <h3>{group.category}</h3>
      </div>
      <p>{group.description}</p>
      <div className="skill-card__badges">
        {group.skills.map((skill) => (
          <span key={skill} className="skill-badge">
            <span className="skill-badge__dot" />
            {skill}
          </span>
        ))}
      </div>
    </article>
  );
}
