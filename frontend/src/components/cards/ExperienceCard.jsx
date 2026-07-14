import Badge from '../common/Badge';

export default function ExperienceCard({ item }) {
  return (
    <article className="timeline-card">
      <div className="timeline-card__date">{item.duration}</div>
      <div className="timeline-card__content">
        <Badge tone="accent">{item.type}</Badge>
        <h3>{item.role}</h3>
        <h4>{item.company}</h4>
        <p>{item.summary}</p>
        <ul>
          {item.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
        <div className="tech-list">
          {item.tools.map((tool) => (
            <span key={tool}>{tool}</span>
          ))}
        </div>
      </div>
    </article>
  );
}
