import Badge from '../common/Badge';

export default function SkillCard({ group }) {
  return (
    <article className="skill-card">
      <h3>{group.category}</h3>
      <p>{group.description}</p>
      <div className="skill-card__badges">
        {group.skills.map((skill) => (
          <Badge key={skill} tone="soft">
            {skill}
          </Badge>
        ))}
      </div>
    </article>
  );
}
